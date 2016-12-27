Blockly.Blocks['create_element'] = {
  init: function() {
    this.setColour(180);
    this.setOutput(true, 'Element');
    this.appendDummyInput().appendField('a new')
      .appendField(new Blockly.FieldDropdown([
        ['<p>', 'p'],
        ['<span>', 'span'],
        ['<div>', 'div'],
        ['<ul>', 'ul'],
        ['<ol>', 'ol'],
        ['<li>', 'li'],
        ['<dl>', 'dl'],
        ['<dt>', 'dt'],
        ['<dd>', 'dd'],
        ['<br>', 'br'],
        ['<b>', 'b'],
        ['<i>', 'i'],
        ['<strike>', 'strike'],
        ['<h1>', 'h1'],
        ['<h2>', 'h2'],
        ['<h3>', 'h3'],
        ['<h4>', 'h4'],
        ['<h5>', 'h5'],
        ['<h6>', 'h6'],
        ['<input>', 'input'],
        ['<button>', 'button'],
        ['<form>', 'form']
      ]), 'TAG').appendField('element with id')
      this.appendValueInput('ID')
        .setCheck("String");
      this.setInputsInline(true);
  }
};

Blockly.Blocks['query_selector'] = {
  SELECTORS: ['body'],
  init: function() {
    var selectors = this.SELECTORS.map(function(sel) {
      return [sel, sel];
    });
    this.setColour(180);
    this.setOutput(true, 'Element');
    this.appendDummyInput().appendField('the')
      .appendField(new Blockly.FieldDropdown(selectors), 'SELECTOR')
      .appendField('element');
  }
};

Blockly.Blocks['get_element_by_id'] = {
  init: function() {
    this.setColour(180);
    this.setOutput(true, 'Element');
    this.appendDummyInput().appendField('the element with id')
    this.appendValueInput('ID')
      .setCheck("String");
    this.setInputsInline(true);
  }
};

Blockly.Blocks['body_element'] = {
  init: function() {
    this.setColour(180);
    this.setOutput(true, 'Element');
    this.appendDummyInput().appendField('the <body> element');
  }
};

Blockly.Blocks['set_css'] = {
  init: function() {
    this.setColour(180);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this
      .appendDummyInput().appendField('set the')
      .appendField(new Blockly.FieldDropdown([
        // TODO keep these here and add back in the .setCheck('Colour') below when we mirgrate the others out of here
        ['background color', 'backgroundColor'],
        ['text color', 'color'],
        
        // TODO make this its own block that sets these 4 at the same time with good defaults
        ['font size', 'fontSize'],
        ['font family', 'fontFamily'],
        ['text decoration', 'textDecoration'],
        ['text algin', 'textAlign'],
        
        // TODO make this its own block that sets these 4 at the same time with good defaults
        ['height', 'height'],
        ['width', 'width'],
        ['position', 'position'],
        ['display', 'display'],
        
        ['visibility', 'visibility'],
        
        // TODO make this its own block that sets these 4 at the same time with good defaults
        ['padding top', 'paddingTop'],
        ['padding bottom', 'paddingBottom'],
        ['padding right', 'paddingRight'],
        ['padding left', 'paddingleft'],
        
        // TODO make this its own block that sets these 4 at the same time with good defaults
        ['margin top', 'marginTop'],
        ['margin bottom', 'marginBottom'],
        ['margin right', 'marginRight'],
        ['margin left', 'marginleft'],
        
        // TODO make this its own block that sets these 4 at the same time with good defaults
        ['border width', 'borderWidth'],
        ['boder color', 'borderColor'],
        ['boder radius', 'borderRadius'],
        ['border style', 'borderStyle']
        
      ]), 'PROPERTY');
    this
      .appendValueInput('VALUE')
      .appendField('to');
  }
};


Blockly.Blocks['load'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField("when the page is loaded");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['mousedown'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField("when mouse down");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['style'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Style Settings");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['timeout'] = {
  init: function() {
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
