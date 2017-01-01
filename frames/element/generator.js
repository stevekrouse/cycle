function blocksMap(block, func){
  if (!block){
    return []
  } else {
    var answer = blocksMap(block.getNextBlock(), func)
    answer.unshift(func(block))
    return answer
  }
}

function mapElementWorkspaceData(block, elementSettings) {
  function helper(block) {
    return elementWorkspaceData(block, elementSettings)
  }
  return blocksMap(block, helper)
}

function blockAttributes(block, blockEvents) {
  var attributes = {}
  
  var children = block.getInputTargetBlock && block.getInputTargetBlock("CHILDREN")
  while (children) {
    if (children.type == "set_css"){
      var value = Blockly.JavaScript.valueToCode(
        children, 'VALUE',
        Blockly.JavaScript.ORDER_ATOMIC
      );
      attributes.style[children.getFieldValue('PROPERTY')] = eval(value)
    } else if (children.type == "variables_set") {
      var value = Blockly.JavaScript.valueToCode(children, 'VALUE',Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
      var name = Blockly.JavaScript.variableDB_.getName(children.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      attributes.data[name] = eval(value)
    }
    children = children.getNextBlock()
  }
  
  if (block.type == "cycle_input") {
    attributes.data = {}
    attributes.data["inputText"] = ""
    
    blockEvents.events = blockEvents.events || {}
    blockEvents.events["input"] = "inputText = event.target.value"
    
    attributes.domPropsStrings = {value: "self.inputText"}
  }
  
  if (block.type == "controls_forEach") {
     attributes.repeat = {}
     attributes.repeat.iterator = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
     attributes.repeat.list = Blockly.JavaScript.valueToCode(block, 'LIST',Blockly.JavaScript.ORDER_ASSIGNMENT) || '[]';
  }
  
  attributes.on = blockEvents.events
  return attributes
}

function elementWorkspaceData(block, elementSettings) {
  var blockEvents = elementSettings[block.id] || {}
  var children = block.getInputTargetBlock && block.getInputTargetBlock("CHILDREN")
  var result
  if (block.type == 'cycle_page') {
    result = {
      blockId: block.id,
      tagType: "div",
      children: mapElementWorkspaceData(children, elementSettings)
    }
  } else if (block.type == 'cycle_container'){
    result = {
      blockId: block.id,
      tagType: "div",
      children: mapElementWorkspaceData(children, elementSettings)
    }
  } else if (block.type == 'cycle_text') {
    var value = Blockly.JavaScript.valueToCode(
      block, 'TEXT',
      Blockly.JavaScript.ORDER_ATOMIC
    );
    return value
  } else if (block.type == 'cycle_button') {
    result = {
      blockId: block.id,
      tagType: "button",
      children: mapElementWorkspaceData(children, elementSettings)
    }
  } else if (block.type == 'cycle_input') {
    result = {
      blockId: block.id,
      tagType: "input",
      children: mapElementWorkspaceData(children, elementSettings)
    }
  } else if (block.type == 'controls_forEach') {
    result = {
      blockId: block.id,
      tagType: "div",
      children: mapElementWorkspaceData(block.getInputTargetBlock("DO"), elementSettings)
    }
  } else {
    // do nothing because we will collect this setting in blockAttributes
  }
  if (result) { result.attributes = blockAttributes(block, blockEvents) } 
  return result
} 