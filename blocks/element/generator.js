function blocksMap(block, func){
  if (!block){
    return []
  } else {
    var answer = blocksMap(block.getNextBlock(), func)
    answer.unshift(func(block))
    return answer
  }
}


function elementWorkSpaceData(block) {
  var blocks 
  if (block.getInputTargetBlock) {
    blocks = block.getInputTargetBlock("BLOCKS")
  }
  if (block.type == 'cycle_page') {
    return {
      blockId: block.id,
      tagType: "div",
      attributes: {
          style: {
              
          },
          attrs: {
              
          },
          on: {
              
          },
          // eventually, props: {
          //    
          // }
      },
      children: blocksMap(blocks, elementWorkSpaceData)
    }
  } else if (block.type == 'cycle_container'){
    return {
      blockId: block.id,
      tagType: "div",
      attributes: {},
      children: blocksMap(blocks, elementWorkSpaceData)
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
      attributes: {
        class: {
          'btn': true
        }
      },
      children: blocksMap(blocks, elementWorkSpaceData)
    }
  }
} 