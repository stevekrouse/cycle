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

function blockAttributes(block, elementSettings) {
  var blockSettings = elementSettings[block.id] || {}
  
  var settings = block.getInputTargetBlock && block.getInputTargetBlock("SETTINGS")
  var style = {}
  while (settings) {
    if (settings.type == "set_css"){
      var value = Blockly.JavaScript.valueToCode(
        settings, 'VALUE',
        Blockly.JavaScript.ORDER_ATOMIC
      );
      style[settings.getFieldValue('PROPERTY')] = eval(value) // TODO replace eval with something smarter, 
                                                              // that can handle expressions and functions that 
                                                              // have been provided in blockSettings.definitions
    }
    settings = settings.getNextBlock()
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
  } else {
    throw new Error('unexpected block.type: ' + block.type)
  }
  result.attributes = blockAttributes(block, elementSettings)
  return result
} 