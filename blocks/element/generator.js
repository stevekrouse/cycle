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


// TODO get definitions in the block methods


function blockAttributes(block, elementSettings) {
  var blockSettings = elementSettings[block.id] || {}
  return {
    on: blockSettings.events,
    style: blockSettings.style
  }
}

function elementWorkspaceData(block, elementSettings) {
  var blocks 
  if (block.getInputTargetBlock) {
    blocks = block.getInputTargetBlock("BLOCKS")
  }
  if (block.type == 'cycle_page') {
    return {
      blockId: block.id,
      tagType: "div",
      attributes: blockAttributes(block, elementSettings),
      children: mapElementWorkspaceData(blocks, elementSettings)
    }
  } else if (block.type == 'cycle_container'){
    return {
      blockId: block.id,
      tagType: "div",
      attributes: blockAttributes(block, elementSettings),
      children: mapElementWorkspaceData(blocks, elementSettings)
    }
  } else if (block.type == 'cycle_text') {
    if (block.getInputTargetBlock("TEXT")) {
      return block.getInputTargetBlock("TEXT").getFieldValue("TEXT")
    } else {
      return ""
    }
  } else if (block.type == 'cycle_button') {
    return {
      blockId: block.id,
      tagType: "button",
      attributes: blockAttributes(block, elementSettings),
      children: mapElementWorkspaceData(blocks, elementSettings)
    }
  }
} 