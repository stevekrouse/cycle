var events = ["load", "mousedown", "mouseup", "dblclick", "mouseover", "mouseout", "keydown", "keyup", "change"]
events.forEach(function(event) {
  Blockly.JavaScript[event] = function(block) {
    var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
    return [
      statements_blocks,
      Blockly.JavaScript.ORDER_ATOMIC
    ];
  };
})

// OBJECTS

Blockly.JavaScript['objects_create_empty'] = function(block) {
  return ['{}', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['objects_get'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_object + "[" + value_key + "]";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['objects_set'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_object + "[" + value_key + "] = " + value_value;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['objects_keys'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "Object.keys(" + value_object + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['objects_copy'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "JSON.parse(JSON.stringify(" + value_object + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// LISTS

Blockly.JavaScript.lists_indexOf = function(a) {
    var b = "FIRST" == a.getFieldValue("END") ? "indexOf" : "lastIndexOf",
        c = Blockly.JavaScript.valueToCode(a, "FIND", Blockly.JavaScript.ORDER_NONE) || "''";
    return [(Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "[]") + ".map(function(elem) { return JSON.stringify(elem) })." + b + "(JSON.stringify(" + c + ")) + 1", Blockly.JavaScript.ORDER_MEMBER]
};

Blockly.JavaScript.lists_setIndex = function(a) {
    function b() {
        if (c.match(/^\w+$/)) return "";
        var a = Blockly.JavaScript.variableDB_.getDistinctName("tmp_list", Blockly.Variables.NAME_TYPE),
            b = "var " + a + " = " + c + ";\n";
        c = a;
        return b
    }
    var c = Blockly.JavaScript.valueToCode(a, "LIST", Blockly.JavaScript.ORDER_MEMBER) || "[]",
        d = a.getFieldValue("MODE") || "GET",
        e = a.getFieldValue("WHERE") || "FROM_START",
        f = Blockly.JavaScript.valueToCode(a, "AT", Blockly.JavaScript.ORDER_NONE) || "1";
    a = Blockly.JavaScript.valueToCode(a, "TO", Blockly.JavaScript.ORDER_ASSIGNMENT) ||
        "null";
    if ("FIRST" == e) {
        if ("SET" == d) return "Vue.set(" + c + ", 0, " + a + ');\n';
        if ("INSERT" == d) return c + ".unshift(" + a + ");\n"
    }
    else if ("LAST" == e) {
        if ("SET" == d) return e = b(), e + ("Vue.set(" + c + ", " + c + '.length - 1' + ", " + a + ');\n');
        if ("INSERT" == d) return c + ".push(" + a + ");\n"
    }
    else if ("FROM_START" == e) {
        f = Blockly.isNumber(f) ? parseFloat(f) - 1 : f + " - 1";
        if ("SET" == d) return "Vue.set(" + c + ", " + f + ", " + a + ');\n';
        if ("INSERT" == d) return c + ".splice(" + f + ", 0, " + a + ");\n"
    }
    else if ("FROM_END" == e) {
        e = b();
        if ("SET" == d) return e += "Vue.set(" + c + ", " + c + '.length - ' + f + ", " + a + ');\n';
        if ("INSERT" == d) return e +=
            c + ".splice(" + c + ".length - " + f + ", 0, " + a + ");\n"
    }
    else if ("RANDOM" == e) {
        e = b();
        f = Blockly.JavaScript.variableDB_.getDistinctName("tmp_x", Blockly.Variables.NAME_TYPE);
        e += "var " + f + " = Math.floor(Math.random() * " + c + ".length);\n";
        if ("SET" == d) return e += "Vue.set(" + c + ", " + f + ", " + a + ');\n';
        if ("INSERT" == d) return e += c + ".splice(" + f + ", 0, " + a + ");\n"
    }
    throw "Unhandled combination (lists_setIndex).";
};

// eventually when I updated blockly
// Blockly.JavaScript['lists_setIndex'] = function(block) {
//   // Set element at index.
//   // Note: Until February 2013 this block did not have MODE or WHERE inputs.
//   var list = Blockly.JavaScript.valueToCode(block, 'LIST',
//       Blockly.JavaScript.ORDER_MEMBER) || '[]';
//   var mode = block.getFieldValue('MODE') || 'GET';
//   var where = block.getFieldValue('WHERE') || 'FROM_START';
//   var value = Blockly.JavaScript.valueToCode(block, 'TO',
//       Blockly.JavaScript.ORDER_ASSIGNMENT) || 'null';
//   // Cache non-trivial values to variables to prevent repeated look-ups.
//   // Closure, which accesses and modifies 'list'.
//   function cacheList() {
//     if (list.match(/^\w+$/)) {
//       return '';
//     }
//     var listVar = Blockly.JavaScript.variableDB_.getDistinctName(
//         'tmpList', Blockly.Variables.NAME_TYPE);
//     var code = 'var ' + listVar + ' = ' + list + ';\n';
//     list = listVar;
//     return code;
//   }
//   switch (where) {
//     case ('FIRST'):
//       if (mode == 'SET') {
//         return list + '[0] = ' + value + ';\n';
//       } else if (mode == 'INSERT') {
//         return list + '.unshift(' + value + ');\n';
//       }
//       break;
//     case ('LAST'):
//       if (mode == 'SET') {
//         var code = cacheList();
//         code += "Vue.set(" + list + ", " + list + '.length - 1' + ", " + value + ');\n';
//         return code;
//       } else if (mode == 'INSERT') {
//         return list + '.push(' + value + ');\n';
//       }
//       break;
//     case ('FROM_START'):
//       var at = Blockly.JavaScript.getAdjusted(block, 'AT');
//       if (mode == 'SET') {
//         return "Vue.set(" + list + ", " + at + ", " + value + ');\n';
//       } else if (mode == 'INSERT') {
//         return list + '.splice(' + at + ', 0, ' + value + ');\n';
//       }
//       break;
//     case ('FROM_END'):
//       var at = Blockly.JavaScript.getAdjusted(block, 'AT', 1, false,
//           Blockly.JavaScript.ORDER_SUBTRACTION);
//       var code = cacheList();
//       if (mode == 'SET') {
//         code += "Vue.set(" + list + ", " + list + '.length - ' + at + ", " + value + ');\n';
//         return code;
//       } else if (mode == 'INSERT') {
//         code += list + '.splice(' + list + '.length - ' + at + ', 0, ' + value + ');\n';
//         return code;
//       }
//       break;
//     case ('RANDOM'):
//       var code = cacheList();
//       var xVar = Blockly.JavaScript.variableDB_.getDistinctName(
//           'tmpX', Blockly.Variables.NAME_TYPE);
//       code += 'var ' + xVar + ' = Math.floor(Math.random() * ' + list +
//           '.length);\n';
//       if (mode == 'SET') {
//         code += "Vue.set(" + list + ", " + xVar + ", " + value + ');\n';
//         return code;
//       } else if (mode == 'INSERT') {
//         code += list + '.splice(' + xVar + ', 0, ' + value + ');\n';
//         return code;
//       }
//       break;
//   }
//   throw 'Unhandled combination (lists_setIndex).';
// };

// Debugger

Blockly.JavaScript['cycle_debugger'] = function(block) {
  return "debugger;\n";
};


// Elements

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
  var attributes = {styleStrings: {}, dataStrings: {}, domPropsStrings: {}, onStrings: {}, if: undefined, repeat: undefined}
  
  var children = block.getInputTargetBlock && block.getInputTargetBlock("CHILDREN")
  var value, key
  while (children) {
    if (children.type == "set_css"){
      value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
      attributes.styleStrings[children.getFieldValue('PROPERTY')] = value 
    } else if (children.type == "cycle_css_property"){
      value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
      key = Blockly.JavaScript.valueToCode(children, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
      attributes.styleStrings[key] = value 
    } else if (children.type == "cycle_html_property"){
      value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
      key = Blockly.JavaScript.valueToCode(children, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
      attributes.domPropsStrings[key] = value 
    } else if (children.type == "variables_set") {
      value = Blockly.JavaScript.valueToCode(children, 'VALUE',Blockly.JavaScript.ORDER_ASSIGNMENT) || 0;
      var name = Blockly.JavaScript.variableDB_.getName(children.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      attributes.dataStrings[name] = value
    } else if (events.includes(children.type)) { 
      // prevent blockly from compiling more than one event at a time by removing nextConnecting accessed in javascript_compressed.js:scrub_
      var nextConnection = children.nextConnection
      children.nextConnection = undefined
      attributes.onStrings[children.type] = Blockly.JavaScript.blockToCode(children)[0] // TODO allow multiple eventually
      children.nextConnection = nextConnection
    }
    children = children.getNextBlock()
  }
  
  if (block.type == "cycle_input") {
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || "undefined"
    attributes.domPropsStrings.value = value // TODO make this a regular dom prop?
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
  } else if (block.type == 'cycle_image') {
    result = {
      blockId: block.id,
      tagType: "img",
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
