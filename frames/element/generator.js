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
  var style = {}
  var data = {}
  
  var children = block.getInputTargetBlock && block.getInputTargetBlock("CHILDREN")
  while (children) {
    if (children.type == "set_css"){
      var value = Blockly.JavaScript.valueToCode(
        children, 'VALUE',
        Blockly.JavaScript.ORDER_ATOMIC
      );
      style[children.getFieldValue('PROPERTY')] = eval(value)
    } else if (children.type == "variables_set") {
      var value = Blockly.JavaScript.valueToCode(children, 'VALUE',Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
      var name = Blockly.JavaScript.variableDB_.getName(children.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      data[name] = eval(value)
    }
    children = children.getNextBlock()
  }
  
  if (block.type == "cycle_input") {
    data["value"] = ""
    
    blockEvents.events = blockEvents.events || {}
    blockEvents.events["input"] = "item = event.target.value"
  }
  
  return {
    on: blockEvents.events,
    style: style,
    data: data
  }
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
  } else {
    // do nothing because we will collect this setting in blockAttributes
  }
  if (result) { result.attributes = blockAttributes(block, blockEvents) } 
  return result
} 