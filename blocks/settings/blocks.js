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

Blockly.Blocks['append_element'] = {
  init: function() {
    this.setColour(180);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this
      .appendValueInput('CHILD').setCheck(['Element', 'TextNode'])
      .appendField('append');
    this
      .appendValueInput('PARENT').setCheck('Element')
      .appendField('to');
  }
};

Blockly.Blocks['set_css_colour'] = {
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
      .appendValueInput('ELEMENT').setCheck('Element')
      .appendField('of');
    this
      .appendValueInput('VALUE')
      .appendField('to');
  }
};

Blockly.Blocks['set_content'] = {
  init: function() {
    this.setColour(180);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this
      .appendDummyInput().appendField('set the')
      .appendField(new Blockly.FieldDropdown([
        ['text', 'textContent'],
        ['html', 'innerHTML']
      ]), 'TYPE');
    this
      .appendValueInput('ELEMENT').setCheck('Element')
      .appendField('of');
    this
      .appendValueInput('VALUE').setCheck('String')
      .appendField('to');
  }
};

Blockly.Blocks['text_node'] = {
  init: function() {
    this.setColour(180);
    this.appendValueInput('TEXT').setCheck('String')
      .appendField('a new text node with');
    this.setOutput(true, 'TextNode');
  }
};

Blockly.Blocks['handle_event'] = {
  init: function() {
    this.setColour(60);
    this.appendValueInput('TARGET').setCheck('Element')
      .appendField('when');
    this.appendStatementInput('STACK').appendField('is clicked');
  }
};

Blockly.Blocks['input_value'] = {
  init: function() {
    this.setColour(180);
    this.setOutput(true, 'String');
    this.appendValueInput('ELEMENT').setCheck('Element')
      .appendField('the input value of');
  }
};

Blockly.Blocks['when_page_is_loaded'] = {
  init: function() {
    this.setColour(60);
    this.appendDummyInput()
        .appendField("when the page is loaded");
    this.appendStatementInput("blocks")
        .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['a_tag'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField("a new <a> tag with href");
    this.appendValueInput('linkText')
        .setCheck("String");
    this.appendDummyInput()
        .appendField("and display text");
    this.appendValueInput('displayText')
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true);
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
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
