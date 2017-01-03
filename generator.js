// developer's note, when adding an event, make sure to add it here
var events = ["load", "mousedown", "change"]

Blockly.JavaScript['load'] = function(block) {
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  return [
    statements_blocks,
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.JavaScript['mousedown'] = function(block) {
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  return [
    statements_blocks,
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.JavaScript['change'] = function(block) {
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  return [
    statements_blocks,
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.JavaScript['timeout'] = function(block) {
  var text_seconds = block.getFieldValue('SECONDS');
  var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
  return 'setTimeout(function(){\n' + statements + '}, '  + text_seconds +');\n';
};


function blocksMap(block, func){
  if (!block){
    return []
  } else {
    var answer = blocksMap(block.getNextBlock(), func)
    answer.unshift(func(block))
    return answer
  }
}

function mapWorkspaceData(block) {
  return blocksMap(block, workspaceData)
}

function blockAttributes(block) {
  var attributes = {style: {}, data: {}, on: {}, if: undefined, repeat: undefined}
  
  var children = block.getInputTargetBlock && block.getInputTargetBlock("CHILDREN")
  while (children) {
    if (children.type == "set_css"){
      var value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
      attributes.style[children.getFieldValue('PROPERTY')] = eval(value)
    } else if (children.type == "variables_set") {
      var value = Blockly.JavaScript.valueToCode(children, 'VALUE',Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
      var name = Blockly.JavaScript.variableDB_.getName(children.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      attributes.data[name] = eval(value)
    } else if (events.includes(children.type)) { // all events here
      attributes.on[children.type] = Blockly.JavaScript.blockToCode(children)[0] // TODO allow multiple eventually
    }
    children = children.getNextBlock()
  }
  
  if (block.type == "cycle_input") {
    attributes.data = {}
    attributes.data["inputText"] = ""
    
    attributes.on["input"] = "inputText = event.target.value"  // TODO make this show up so as to be simple and not easy magic
    
    attributes.domPropsStrings = {value: "self.inputText"}
  } else if (block.type == "controls_forEach") {
     attributes.repeat = {}
     attributes.repeat.iterator = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
     attributes.repeat.list = Blockly.JavaScript.valueToCode(block, 'LIST',Blockly.JavaScript.ORDER_ASSIGNMENT) || '[]';
  } else if (block.type == "controls_if") {
     attributes.if = {branches: [], else_: undefined}
     var n = 0
     do {
       var branch = {}
       branch.conditionString = Blockly.JavaScript.valueToCode(block, 'IF' + n, Blockly.JavaScript.ORDER_NONE) || 'false'
       branch.doCode = mapWorkspaceData(block.getInputTargetBlock("DO" + n))
       attributes.if.branches.push(branch)
        ++n;
      } while (block.getInput('IF' + n));
    
      if (block.getInputTargetBlock("ELSE")) {
        attributes.if.else_ = mapWorkspaceData(block.getInputTargetBlock("ELSE")) // todo figure out how to map this without children blah
      }
  }
  
  return attributes
}

function workspaceData(block) {
  var children = block.getInputTargetBlock && block.getInputTargetBlock("CHILDREN")
  var result
  if (block.type == 'cycle_page') {
    result = {
      blockId: block.id,
      tagType: "div",
      children: mapWorkspaceData(children)
    }
  } else if (block.type == 'cycle_container'){
    result = {
      blockId: block.id,
      tagType: "div",
      children: mapWorkspaceData(children)
    }
  } else if (block.type == 'cycle_text') {
    var value = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC)
    return value
  } else if (block.type == 'cycle_button') {
    result = {
      blockId: block.id,
      tagType: "button",
      children: mapWorkspaceData(children)
    }
  } else if (block.type == 'cycle_input') {
    result = {
      blockId: block.id,
      tagType: "input",
      children: mapWorkspaceData(children)
    }
  } else if (block.type == 'controls_forEach') {
    result = {
      blockId: block.id,
      tagType: "div",
      children: mapWorkspaceData(block.getInputTargetBlock("DO"))
    }
  } else if (block.type == "controls_if") {
    result = {
      blockId: block.id,
      tagType: "div",
      children: [] // children are in the attributes.if
    }
  } else {
    // do nothing because we will collect this setting in blockAttributes
  }
  if (result) { result.attributes = blockAttributes(block) } 
  return result
} 