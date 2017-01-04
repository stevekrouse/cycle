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
        ['padding left', 'paddingleft'],
        
        ['margin top', 'marginTop'],
        ['margin bottom', 'marginBottom'],
        ['margin right', 'marginRight'],
        ['margin left', 'marginleft'],
        
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