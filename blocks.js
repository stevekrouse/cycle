Blockly.Blocks['cycle_container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Container");
    this.appendStatementInput("CHILDREN")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Link");
    this.appendStatementInput("CHILDREN")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Image");
    this.appendStatementInput("CHILDREN")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_emit'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Trigger event");
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("with data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['cycle_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text");
    this.appendValueInput("TEXT")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_custom_event'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("When custom event");
    this.appendDummyInput()
        .appendField("(event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['cycle_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button");
    this.appendStatementInput("CHILDREN")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Input");
    this.setInputsInline(true);
    this.appendValueInput("VALUE")
    this.appendStatementInput("CHILDREN")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_page'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Page");
    this.appendStatementInput("CHILDREN")
        .setCheck(null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cycle_create_element'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create element ")
        .appendField(new Blockly.FieldTextInput("Element1"), "NAME");
    this.appendDummyInput()
        .appendField("with base")
        .appendField(new Blockly.FieldDropdown([["container","div"], ["image","img"], ["input","input"], ["link","a"], ["button","button"]]), "BASE");
    this.appendStatementInput("CHILDREN")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setPreviousStatement(false, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['cycle_custom_element'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Custom Element");
    this.appendStatementInput("CHILDREN")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['cycle_create_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create input with name")
        .appendField(new Blockly.FieldTextInput("Input1"), "NAME");
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['cycle_add_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add input")
        .appendField(new Blockly.FieldTextInput("Input1"), "NAME");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("with value");
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['set_css'] = {
  init: function() {
    this.setColour(180);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendValueInput("VALUE")
        .appendField('set the')
        .appendField(new Blockly.FieldDropdown([
        ['background color', 'backgroundColor'],
        ['text color', 'color'],
        
        ['font size', 'fontSize'],
        ['font family', 'fontFamily'],
        ['text decoration', 'textDecoration'],
        ['text algin', 'textAlign'],
        
        ['height', 'height'],
        ['width', 'width'],
        ['position', 'position'],
        ['display', 'display'],
        
        ['visibility', 'visibility'],
        
        ['padding top', 'paddingTop'],
        ['padding bottom', 'paddingBottom'],
        ['padding right', 'paddingRight'],
        ['padding left', 'paddingLeft'],
        
        ['margin top', 'marginTop'],
        ['margin bottom', 'marginBottom'],
        ['margin right', 'marginRight'],
        ['margin left', 'marginLeft'],
        
        ['border width', 'borderWidth'],
        ['boder color', 'borderColor'],
        ['boder radius', 'borderRadius'],
        ['border style', 'borderStyle']
        
      ]), 'PROPERTY')
      .appendField('to');
    // TODO seperate all of these into their own blocks and use units below for the relevant ones
    // this.appendDummyInput()
    //     .appendField(new Blockly.FieldDropdown([["pixels", "px"], ["%", "%"], ["relative pixels", "em"]]), "unit");
  }
};

Blockly.Blocks['cycle_css_property'] = {
  init: function() {
    this.setColour(180);
    this.appendValueInput("KEY")
        .setCheck(null)
        .appendField("set CSS property");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cycle_html_property'] = {
  init: function() {
    this.setColour(180);
    this.appendValueInput("KEY")
        .setCheck(null)
        .appendField("set HTML property");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cycle_debugger'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("debugger");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
  },
};

Blockly.Blocks['load'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("when the page is loaded (event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  },
  getVars: function() {
    return ["event"]
  }
};

Blockly.Blocks['mousedown'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("when mouse down (event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  },
  getVars: function() {
    return ["event"]
  }
};

Blockly.Blocks['change'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("when changed (event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  },
  getVars: function() {
    return ["event"]
  }
};

Blockly.Blocks['mouseover'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("when mouse over (event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  },
  getVars: function() {
    return ["event"]
  }
};
Blockly.Blocks['mouseout'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("when mouse out (event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  },
  getVars: function() {
    return ["event"]
  }
};
Blockly.Blocks['dblclick'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("when double click (event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  },
  getVars: function() {
    return ["event"]
  }
};
Blockly.Blocks['mouseup'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("when mouse up (event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  },
  getVars: function() {
    return ["event"]
  }
};
Blockly.Blocks['keydown'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("when key down (event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  },
  getVars: function() {
    return ["event"]
  }
};

Blockly.Blocks['keyup'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("when key up (event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  },
  getVars: function() {
    return ["event"]
  }
};

Blockly.Blocks['blur'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("when blur (event)");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  },
  getVars: function() {
    return ["event"]
  }
};

Blockly.Blocks['timeout'] = {
  init: function() {
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("In")
        .appendField(new Blockly.FieldTextInput("2000"), "SECONDS")
        .appendField("miliseconds, do");
    this.appendStatementInput("STATEMENTS");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// OBJECTS

Blockly.Blocks['objects_create_empty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create empty object");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks.objects_create_with = {
    init: function() {
        this.setColour(Blockly.Blocks.lists.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = !1
    }
};

Blockly.Blocks['objects_get'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("get object");
    this.appendValueInput("KEY")
        .setCheck(null)
        .appendField("'s key");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['objects_set'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("set object");
    this.appendValueInput("KEY")
        .setCheck(null)
        .appendField("'s key");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['objects_keys'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("get ");
    this.appendDummyInput("KEY")
        .appendField("'s keys");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['objects_copy'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("copy object");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};