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

function blockAttributes(block, blockSettings) {
  var settings = block.getInputTargetBlock && block.getInputTargetBlock("SETTINGS")
  var style = {}
  while (settings) {
    if (settings.type == "set_css"){
      var value = Blockly.JavaScript.valueToCode(
        settings, 'VALUE',
        Blockly.JavaScript.ORDER_ATOMIC
      );
      style[settings.getFieldValue('PROPERTY')] = eval(value)
    }
    settings = settings.getNextBlock()
  }
  
  if (block.type == "cycle_input") {
    blockSettings.variables = blockSettings.variables || []
    blockSettings.variables.push("item")
    
    blockSettings.events = blockSettings.events || {}
    blockSettings.events["input"] = "item = event.target.value"
  }
  
  return {
    on: blockSettings.events,
    style: style,
  }
}

function elementWorkspaceData(block, elementSettings) {
  var blockSettings = elementSettings[block.id] || {}
  var children = block.getInputTargetBlock && block.getInputTargetBlock("CHILDREN")
  var result
  if (block.type == 'cycle_page') {
    result = {
      blockId: block.id,
      settings: blockSettings,
      tagType: "div",
      children: mapElementWorkspaceData(children, elementSettings)
    }
  } else if (block.type == 'cycle_container'){
    result = {
      blockId: block.id,
      settings: blockSettings,
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
      settings: blockSettings,
      tagType: "button",
      children: mapElementWorkspaceData(children, elementSettings)
    }
  } else if (block.type == 'cycle_input') {
    result = {
      blockId: block.id,
      settings: blockSettings,
      tagType: "input",
      children: mapElementWorkspaceData(children, elementSettings)
    }
  } else {
    throw new Error('unexpected block.type: ' + block.type)
  }
  result.attributes = blockAttributes(block, blockSettings)
  return result
} 