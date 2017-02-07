var nativeEvents = ["load", "mousedown", "mouseup", "dblclick", "mouseover", "mouseout", "mousemove", "keydown", "keyup", "change", "blur"]

var events = nativeEvents.concat(["cycle_custom_event"])

events.forEach(function(event) {
  Blockly.JavaScript[event] = function(block) {
    var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
    return statements_blocks
  };
})

var keyEvents = ["keydown", "keyup"]

keyEvents.forEach(function(event){
  Blockly.JavaScript[event] = function(block) {
    var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
    if (block.getFieldValue("KEYCODE") != "ANY") {
      statements_blocks = "if (event.keyCode == " + Number(block.getFieldValue("KEYCODE")) + ") {\n  " + statements_blocks + "\n  }"
    }
    return statements_blocks
  };
})

function CompileError(message, blockId) {
  this.name = 'CompileError';
  this.blockId = blockId
  this.message = message;
  this.stack = (new Error()).stack;
}
CompileError.prototype = Object.create(Error.prototype);
CompileError.prototype.constructor = CompileError;

// Include scripts

Blockly.JavaScript['cycle_include_script'] = function(block) {
  var text_url = block.getFieldValue('URL');
  var statements_children = Blockly.JavaScript.statementToCode(block, 'CHILDREN');
  var code = ""
  code += 'var script = document.createElement( "script" );\n'
  code += 'script.type = "text/javascript";\n'
  code += 'script.onload = function() {\n  ' + statements_children + '\n};\n'
  code += "script.src = '" + text_url + '\';\n'
  code += 'document.body.appendChild(script)'
  return code
}

// Firebase

Blockly.JavaScript['firebase_initialize_app'] = function(block) {
  var text_apikey = block.getFieldValue('apiKey');
  var text_authdomain = block.getFieldValue('authDomain');
  var text_databaseurl = block.getFieldValue('databaseURL');
  var text_storagebucket = block.getFieldValue('storageBucket');
  var code = "firebase.initializeApp({apiKey: '" + text_apikey + "', authDomain: '" + text_authdomain + "', databaseURL: '" + text_databaseurl + "', storageBucket: '" + text_storagebucket + "'});\n"
  return code;
};

Blockly.JavaScript['firebase_set'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ref = Blockly.JavaScript.valueToCode(block, 'REF', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "firebase.database().ref(" + value_ref + ").set(" + value_value + ");\n"
  return code;
};

Blockly.JavaScript['firebase_add_to_list'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ref = Blockly.JavaScript.valueToCode(block, 'REF', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "firebase.database().ref(" + value_ref + ").push(" + value_value + ");\n"
  return code;
};

Blockly.JavaScript['firebase_delete'] = function(block) {
  var value_ref = Blockly.JavaScript.valueToCode(block, 'REF', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "firebase.database().ref(" + value_ref + ").remove();\n"
  return code;
};

Blockly.JavaScript['firebase_get'] = function(block) {
  var value_ref = Blockly.JavaScript.valueToCode(block, 'REF', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_frequency = block.getFieldValue('frequency');
  var statements_children = Blockly.JavaScript.statementToCode(block, 'CHILDREN');
  var freqency = dropdown_frequency == "once" ? "once" : "on"
  var code = 'firebase.database().ref(' + value_ref + ')' 
  code += '.' + freqency + '("value", function(snapshot) {' + '\n';
  code += 'var value = snapshot.val();\n'
  code += statements_children
  code += "})"
  return code;
};

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

Blockly.JavaScript['objects_create_with'] = function(a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = a.getFieldValue("PROPERTY" + c) + ": " + Blockly.JavaScript.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "null";
  return ["{" + b.join(", ") + "}", Blockly.JavaScript.ORDER_ATOMIC]
}

Blockly.JavaScript['objects_clone_with'] = function(a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = a.getFieldValue("PROPERTY" + c) + ": " + Blockly.JavaScript.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "null";
  var clone = Blockly.JavaScript.valueToCode(a, "CLONE", Blockly.JavaScript.ORDER_ATOMIC)
  return ["Object.assign(Object.assign({}, " + clone + "), {" + b.join(", ") + "})", Blockly.JavaScript.ORDER_ATOMIC]
}

// LISTS

Blockly.JavaScript.lists_indexOf = function(a) {
    var b = "FIRST" == a.getFieldValue("END") ? "indexOf" : "lastIndexOf",
        c = Blockly.JavaScript.valueToCode(a, "FIND", Blockly.JavaScript.ORDER_NONE) || "''";
    return [(Blockly.JavaScript.valueToCode(a, "VALUE", Blockly.JavaScript.ORDER_MEMBER) || "[]") + ".map(function(elem) { return JSON.stringify(elem) })." + b + "(JSON.stringify(" + c + ")) + 1", Blockly.JavaScript.ORDER_MEMBER]
};

Blockly.JavaScript['lists_setIndex'] = function(block) {
  // Set element at index.
  // Note: Until February 2013 this block did not have MODE or WHERE inputs.
  var list = Blockly.JavaScript.valueToCode(block, 'LIST',
      Blockly.JavaScript.ORDER_MEMBER) || '[]';
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var value = Blockly.JavaScript.valueToCode(block, 'TO',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || 'null';
  // Cache non-trivial values to variables to prevent repeated look-ups.
  // Closure, which accesses and modifies 'list'.
  function cacheList() {
    if (list.match(/^\w+$/)) {
      return '';
    }
    var listVar = Blockly.JavaScript.variableDB_.getDistinctName(
        'tmpList', Blockly.Variables.NAME_TYPE);
    var code = 'var ' + listVar + ' = ' + list + ';\n';
    list = listVar;
    return code;
  }
  switch (where) {
    case ('FIRST'):
      if (mode == 'SET') {
        return list + '[0] = ' + value + ';\n';
      } else if (mode == 'INSERT') {
        return list + '.unshift(' + value + ');\n';
      }
      break;
    case ('LAST'):
      if (mode == 'SET') {
        var code = cacheList();
        code += "Vue.set(" + list + ", " + list + '.length - 1' + ", " + value + ');\n';
        return code;
      } else if (mode == 'INSERT') {
        return list + '.push(' + value + ');\n';
      }
      break;
    case ('FROM_START'):
      var at = Blockly.JavaScript.getAdjusted(block, 'AT');
      if (mode == 'SET') {
        return "Vue.set(" + list + ", " + at + ", " + value + ');\n';
      } else if (mode == 'INSERT') {
        return list + '.splice(' + at + ', 0, ' + value + ');\n';
      }
      break;
    case ('FROM_END'):
      var at = Blockly.JavaScript.getAdjusted(block, 'AT', 1, false,
          Blockly.JavaScript.ORDER_SUBTRACTION);
      var code = cacheList();
      if (mode == 'SET') {
        code += "Vue.set(" + list + ", " + list + '.length - ' + at + ", " + value + ');\n';
        return code;
      } else if (mode == 'INSERT') {
        code += list + '.splice(' + list + '.length - ' + at + ', 0, ' + value + ');\n';
        return code;
      }
      break;
    case ('RANDOM'):
      var code = cacheList();
      var xVar = Blockly.JavaScript.variableDB_.getDistinctName(
          'tmpX', Blockly.Variables.NAME_TYPE);
      code += 'var ' + xVar + ' = Math.floor(Math.random() * ' + list +
          '.length);\n';
      if (mode == 'SET') {
        code += "Vue.set(" + list + ", " + xVar + ", " + value + ');\n';
        return code;
      } else if (mode == 'INSERT') {
        code += list + '.splice(' + xVar + ', 0, ' + value + ');\n';
        return code;
      }
      break;
  }
  throw 'Unhandled combination (lists_setIndex).';
};

Blockly.JavaScript['cycle_emit'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'self.$emit(' + value_name + ', ' + (value_data  || "undefined") + ');\n';
  return code;
};

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

function getAttributes(firstChild, parent) {
  var attributes = {styleStrings: {}, dataStrings: {}, propsStrings: {}, domPropsStrings: {}, classStrings: [], onStrings: {}, nativeOnStrings: {}, if: undefined, repeat: undefined}
  
  var children = firstChild 
  var value, key, name
  while (children) {
    if (children.type == "set_css"){
      value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
      attributes.styleStrings[children.getFieldValue('PROPERTY')] = value 
    } else if (children.type == "cycle_css_property"){
      value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
      key = Blockly.JavaScript.valueToCode(children, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
      attributes.styleStrings[key] = value 
    } else if (children.type.includes("layout_")) {
      if (children.type == "layout_width") {
        var prop = children.getFieldValue("PROP")
        var value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings[prop] =  value
      } else if (children.type == "layout_height") {
        var prop = children.getFieldValue("PROP")
        var value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings[prop] =  value
      } else if (children.type == "layout_padding") {
        var value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
        var side = children.getFieldValue('BORDER') == "all" ? '' : children.getFieldValue('BORDER')
        attributes.styleStrings["padding" + side] =  value
      } else if (children.type == "layout_border") {
        var color = Blockly.JavaScript.valueToCode(children, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
        var width = Blockly.JavaScript.valueToCode(children, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
        var radius = Blockly.JavaScript.valueToCode(children, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
        var side = children.getFieldValue('BORDER') == "all" ? '' : children.getFieldValue('BORDER')
        var style = children.getFieldValue('STYLE') 
        attributes.styleStrings["border" + side] =  width + " + ' " + style + " ' + " + color  
        attributes.styleStrings["borderRadius"] =  radius  
      } else if (children.type == "layout_outline") {
        var color = Blockly.JavaScript.valueToCode(children, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
        var width = Blockly.JavaScript.valueToCode(children, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
        var style = children.getFieldValue('STYLE') 
        attributes.styleStrings["outline"] =  width + " + ' " + style + " ' + " + color  
      } else if (children.type == "layout_background_color") {
        var color = Blockly.JavaScript.valueToCode(children, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["backgroundColor"] =  color  
      } else if (children.type == "layout_margin") {
        var value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
        var side = children.getFieldValue('BORDER') == "all" ? '' : children.getFieldValue('BORDER')
        attributes.styleStrings["margin" + side] =  value
      } else if (children.type == "layout_flex_parent") {
        var direction = "'" + children.getFieldValue('DIRECTION') + "'";
        var x = "'" + children.getFieldValue('X') + "'";
        var y = "'" + children.getFieldValue('Y') + "'";
        var wrap = "'" + children.getFieldValue('WRAP') + "'"
        if (attributes.styleStrings.display && attributes.styleStrings.display.includes("inline")) {
          throw new CompileError('An inline block cannot arrange its children. Remove the "inline" block or the "arrange children" block.', children.id)
        } else {
          attributes.styleStrings["display"] = "'flex'"
        }
        attributes.styleStrings["flexDirection"] =  direction
        attributes.styleStrings["flexWrap"] = wrap
        if (direction.includes('row')){
          if (direction.includes('reverse')) {
            attributes.styleStrings["justifyContent"] = (x == "'left'" ? "'flex-end'" : (x == "'right'" ? "'flex-start'" : x))
          } else {
            attributes.styleStrings["justifyContent"] = (x == "'left'" ? "'flex-start'" : (x == "'right'" ? "'flex-end'" : x))
          }
          attributes.styleStrings["alignContent"] = (y == "'top'" ? "'flex-start'" : (y == "'bottom'" ? "'flex-end'" : y))
          attributes.styleStrings["alignItems"] = (y == "'top'" ? "'flex-start'" : (y == "'bottom'" ? "'flex-end'" : y))
        } else {
          if (direction.includes('reverse')) {
            attributes.styleStrings["justifyContent"] = (y == "'bottom'" ? "'flex-end'" : (y == "'top'" ? "'flex-start'" : y))
          } else {
            attributes.styleStrings["justifyContent"] = (y == "'top'" ? "'flex-start'" : (y == "'bottom'" ? "'flex-end'" : y))
          }
          attributes.styleStrings["alignContent"] = (x == "'left'" ? "'flex-start'" : (x == "'right'" ? "'flex-end'" : x))
          attributes.styleStrings["alignItems"] = (x == "'left'" ? "'flex-start'" : (x == "'right'" ? "'flex-end'" : x))
        }
      } else if (children.type == "layout_shadow") {
        var value_x = Blockly.JavaScript.valueToCode(children, 'X', Blockly.JavaScript.ORDER_ATOMIC);
        var value_y = Blockly.JavaScript.valueToCode(children, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
        var value_color = Blockly.JavaScript.valueToCode(children, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
        var blur = Blockly.JavaScript.valueToCode(children, 'BLUR', Blockly.JavaScript.ORDER_ATOMIC);
        var spread = Blockly.JavaScript.valueToCode(children, 'SPREAD', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["boxShadow"] =  value_x + "+ ' ' +" + value_y + "+ ' ' +" + blur + "+ ' ' +" + spread + "+ ' ' +" + value_color
      } else if (children.type == "layout_grow") {
        var value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["flexGrow"] = value
      } else if (children.type == "layout_inline") {
        var value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
        if (attributes.styleStrings.display && attributes.styleStrings.display.includes("flex")) {
          throw new CompileError('An inline block cannot arrange its children. Remove the "inline" block or the "arrange children" block.', children.id)
        } else {
          attributes.styleStrings.display = value + "? 'inline-block' : 'block'"
        }
      }
    } else if (children.type.includes("font_")) {
      if (children.type == "font_shadow") {
        var value_x = Blockly.JavaScript.valueToCode(children, 'X', Blockly.JavaScript.ORDER_ATOMIC);
        var value_y = Blockly.JavaScript.valueToCode(children, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
        var value_color = Blockly.JavaScript.valueToCode(children, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["textShadow"] =  value_x + "+ ' ' +" + value_y + "+ ' ' +" + value_color
      }
      else if (children.type == "font_align") {
        var v_align = Blockly.JavaScript.valueToCode(children, 'ALIGN', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["textAlign"] =  v_align
      }
      else if (children.type == "font_size") {
        var value_size = Blockly.JavaScript.valueToCode(children, 'SIZE', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["fontSize"] =  value_size
      }
      else if (children.type == "font_bold") {
        var value_bold = Blockly.JavaScript.valueToCode(children, 'BOLD', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["fontWeight"] =  value_bold + ' ? "bold" : "normal"'
      }
      else if (children.type == "font_family") {
        var value_font = Blockly.JavaScript.valueToCode(children, 'FONT', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["fontFamily"] =  value_font
      }
      else if (children.type == "font_italics") {
        var value_italics = Blockly.JavaScript.valueToCode(children, 'ITALICS', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["fontStyle"] =  value_italics + ' ? "italic" : "normal"'
      }
      else if (children.type == "font_color") {
        var value_color = Blockly.JavaScript.valueToCode(children, 'COLOR', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["color"] =  value_color
      } 
      else if (children.type == "font_underline") {
        var value_decoration = Blockly.JavaScript.valueToCode(children, 'DECORATION', Blockly.JavaScript.ORDER_ATOMIC);
        if (!(attributes.styleStrings["textDecoration"] && attributes.styleStrings["textDecoration"].includes("underline"))) {
          if (attributes.styleStrings["textDecoration"]) {
           attributes.styleStrings["textDecoration"] += " + "
          } else {
          attributes.styleStrings["textDecoration"] = ""
          }
          attributes.styleStrings["textDecoration"] += "(" + value_decoration + " ? ' underline ' : '')"
        }
      } else if (children.type == "font_overline") {
        var value_decoration = Blockly.JavaScript.valueToCode(children, 'DECORATION', Blockly.JavaScript.ORDER_ATOMIC)
        if (!(attributes.styleStrings["textDecoration"] && attributes.styleStrings["textDecoration"].includes("overline"))) {
          if (attributes.styleStrings["textDecoration"]) {
            attributes.styleStrings["textDecoration"] += " + "
          } else {
            attributes.styleStrings["textDecoration"] = ""
          }
          attributes.styleStrings["textDecoration"] += "(" + value_decoration + " ? 'overline ' : '')"
        }
      } else if (children.type == "font_strikethrough") {
        var value_decoration = Blockly.JavaScript.valueToCode(children, 'DECORATION', Blockly.JavaScript.ORDER_ATOMIC);
        if (!(attributes.styleStrings["textDecoration"] && attributes.styleStrings["textDecoration"].includes("line-through"))) {
          if (attributes.styleStrings["textDecoration"]) {
            attributes.styleStrings["textDecoration"] += " + "
          } else {
            attributes.styleStrings["textDecoration"] = ""
          }
          attributes.styleStrings["textDecoration"] += "(" + value_decoration + " ? ' line-through ' : '')"
        }
      }
      else if (children.type == "font_line_spacing") {
        var value_spacing = Blockly.JavaScript.valueToCode(children, 'SPACING', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["lineHeight"] =  value_spacing
      }
      else if (children.type == "font_letter_spacing") {
        var value_spacing = Blockly.JavaScript.valueToCode(children, 'SPACING', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["letterSpacing"] =  value_spacing
      }
      else if (children.type == "font_word_spacing") {
        var value_spacing = Blockly.JavaScript.valueToCode(children, 'SPACING', Blockly.JavaScript.ORDER_ATOMIC);
        attributes.styleStrings["wordSpacing"] =  value_spacing
      }
    } else if (children.type == "cycle_html_property"){
      value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
      key = Blockly.JavaScript.valueToCode(children, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
      attributes.domPropsStrings[key] = value 
    } else if (children.type == "variables_set") {
      value = Blockly.JavaScript.valueToCode(children, 'VALUE',Blockly.JavaScript.ORDER_ASSIGNMENT) || "0";
      name = Blockly.JavaScript.variableDB_.getName(children.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      attributes.dataStrings[name] = value
    } else if (events.includes(children.type)) { 
      var eventName
      if (children.type == "cycle_custom_event") {
        eventName = Blockly.JavaScript.valueToCode(children, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
      } else {
        eventName = children.type
      }
      
      var onMap
      if (parent.type == "cycle_custom_element") {
        if (nativeEvents.includes(children.type)) {
          onMap = attributes.nativeOnStrings
        } else {
          onMap = attributes.onStrings
        }
      } else {
        onMap = attributes.onStrings
      }
      
      // prevent blockly from compiling more than one event at a time by removing nextConnecting accessed in javascript_compressed.js:scrub_
      var nextConnection = children.nextConnection
      children.nextConnection = undefined
      try {
        onMap[eventName] = Blockly.JavaScript.blockToCode(children)  
      } catch(e) {
        if (e.message.includes("Cannot read property 'call' of undefined")) {
          throw new CompileError("You cannot have elements or styles (brown or purple blocks) inside of events.", children.id)
        } else {
          throw e
        }
      }
      children.nextConnection = nextConnection
    } else if (children.type == "cycle_add_input"){
      name = children.getFieldValue('NAME')
      value = Blockly.JavaScript.valueToCode(children, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
      attributes.propsStrings[name] = value
    } 
    children = children.getNextBlock()
  }
  
  return attributes
}

function blockAttributes(block) {
  var attributes
  if (block.getInputTargetBlock("CHILDREN")) {
    attributes = getAttributes(block.getInputTargetBlock("CHILDREN"), block)
  } else if (block.getInputTargetBlock("DO")) {
    attributes = getAttributes(block.getInputTargetBlock("DO"), block)
  } else {
    attributes = getAttributes(null, block)
  }
  
  if (block.type == "cycle_page") {
    // if (!attributes.styleStrings.minHeight) {
    //   attributes.styleStrings.minHeight = "'100%'"
    // }
  } else if (block.type == "controls_repeat_ext") {
     attributes.repeat = {}
     attributes.repeat.iterator = Blockly.JavaScript.variableDB_.getName("NONE");
     var times = Blockly.JavaScript.valueToCode(block,"TIMES",Blockly.JavaScript.ORDER_ASSIGNMENT)||"0"
     attributes.repeat.list = "Array.from(Array(" + times + "), function() { return 1 })";
  } else if (block.type == "controls_for") {
     attributes.repeat = {}
     attributes.repeat.iterator = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
     var from =Blockly.JavaScript.valueToCode(block,"FROM",Blockly.JavaScript.ORDER_ASSIGNMENT)||"0"
     var to = Blockly.JavaScript.valueToCode(block,"TO",Blockly.JavaScript.ORDER_ASSIGNMENT)||"0"
     var by = Blockly.JavaScript.valueToCode(block,"BY",Blockly.JavaScript.ORDER_ASSIGNMENT)||"1"
     attributes.repeat.list = "new Function('var list = []; for (var i = " + from + "; i <= " + to + "; i +=" + by + ") { list.push(i) } return list ')()";
  } else if (block.type == "controls_forEach") {
     attributes.repeat = {}
     attributes.repeat.iterator = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
     attributes.repeat.list = ('(' + (Blockly.JavaScript.valueToCode(block, 'LIST',Blockly.JavaScript.ORDER_ASSIGNMENT) || '[]') + ')');
  } else if (block.type == "controls_if") {
     attributes.if = {branches: [], else_: undefined}
     var n = 0
     do {
       var branch = {}
       branch.conditionString = Blockly.JavaScript.valueToCode(block, 'IF' + n, Blockly.JavaScript.ORDER_NONE) || 'false'
       branch.doCode = mapWorkspaceData(block.getInputTargetBlock("DO" + n))
       branch.attributes = getAttributes(block.getInputTargetBlock("DO" + n), block)
       attributes.if.branches.push(branch)
        ++n;
      } while (block.getInput('IF' + n));
    
      if (block.getInputTargetBlock("ELSE")) {
        attributes.if.else_ = mapWorkspaceData(block.getInputTargetBlock("ELSE"))
        attributes.if.else_.attributes = getAttributes(block.getInputTargetBlock("ELSE"), block)
      }
  }
  
  attributes.domPropsStrings['"data-block-id"'] = "'" + block.id + "'"
  
  return attributes
}

function getInputNames(block) {
  // ability to create an input at a level that's not the top-level? (allChildren instead of CHILDREN)
  var firstChild = block.getInputTargetBlock && block.getInputTargetBlock("CHILDREN")
  
  var children = firstChild 
  var inputNames = []
  while (children) {
    if (children.type == "cycle_create_input"){
      var nameString = children.getFieldValue('NAME');
      inputNames.push(nameString)
    } 
    children = children.getNextBlock()
  }
  return inputNames
}

function workspaceData(block, childrenString) {
  if (!childrenString) {
    childrenString = "CHILDREN"
  }
  var children = block.getInputTargetBlock && block.getInputTargetBlock(childrenString)
  var result
  if (block.type == 'cycle_page') {
    result = {
      blockId: block.id,
      tagType: "div",
      children: mapWorkspaceData(children)
    }
  } else if (block.type == 'cycle_link'){
    result = {
      blockId: block.id,
      tagType: "a",
      children: mapWorkspaceData(children)
    }
  } else if (block.type == 'cycle_container'){
    result = {
      blockId: block.id,
      tagType: "div",
      children: mapWorkspaceData(children)
    }
  } else if (block.type == 'cycle_iframe'){
    result = {
      blockId: block.id,
      tagType: "iframe",
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
  } else if (block.type == 'controls_for') {
    result = {
      blockId: block.id,
      tagType: "div",
      children: mapWorkspaceData(block.getInputTargetBlock("DO"))  
    }
  } else if (block.type == 'controls_repeat_ext') {
    result = {
      blockId: block.id,
      tagType: "div",
      children: mapWorkspaceData(block.getInputTargetBlock("DO"))  
    }
  } else if (block.type == "cycle_debugger") {
    debugger
  } else if (block.type == "controls_if") {
    result = {
      blockId: block.id,
      tagType: "div",
      children: [] // children are in the attributes.if
    }
  } else if (block.type == "cycle_custom_element") { 
    var dynamicTagType = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    result = {
      blockId: block.id,
      dynamicTagType: dynamicTagType,
      children: [] // no children, that would involve slots, which I want to punt on for now
    }
  } else if (block.type == "cycle_create_element") {
    var name = block.getFieldValue('NAME')
    var tagType = block.getFieldValue('BASE')
    var inputNames = getInputNames(block)
    result = {
      blockId: block.id,
      nameString: name,
      tagType: tagType,
      props: inputNames,
      children: mapWorkspaceData(children) 
    }
  } else {
    // do nothing because we will collect this setting in blockAttributes
  }
  if (result) { result.attributes = blockAttributes(block) } 
  return result
} 





