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
Blockly.JavaScript['create_element'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
      'elementByID',
      [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(idName, tagType) {',
              '  var anyTag = document.createElement(tagType)',
              '  anyTag.id = idName;',
              '  return anyTag;',
        '}']);
  var idName = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var tagType = Blockly.JavaScript.quote_(block.getFieldValue('TAG'));
  var code = 'elementByID(' + idName + ',' + tagType + ')'
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
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

Blockly.JavaScript['query_selector'] = function(block) {
  return [
    "document.querySelector(" +
    Blockly.JavaScript.quote_(block.getFieldValue('SELECTOR')) + ")",
    Blockly.JavaScript.ORDER_ATOMIC
  ];
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

Blockly.JavaScript['get_element_by_id'] = function(block) {
  return [
    "document.getElementById(" +
    Blockly.JavaScript.quote_(block.getFieldValue('ID')) + ")",
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.Blocks['body_element'] = {
  init: function() {
    this.setColour(180);
    this.setOutput(true, 'Element');
    this.appendDummyInput().appendField('the <body> element');
  }
};

Blockly.JavaScript['body_element'] = function(block) {
  return [
    "document.body",
    Blockly.JavaScript.ORDER_ATOMIC
  ];
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

Blockly.JavaScript['append_element'] = function(block) {
  var parent = Blockly.JavaScript.valueToCode(
    block, 'PARENT',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var child = Blockly.JavaScript.valueToCode(
    block, 'CHILD',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return parent + '.appendChild(' + child + ');\n';
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

Blockly.JavaScript['set_css_colour'] = function(block) {
  var element = Blockly.JavaScript.valueToCode(
    block, 'ELEMENT',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var colour = Blockly.JavaScript.valueToCode(
    block, 'VALUE',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return element + '.style.' + block.getFieldValue('PROPERTY') + ' = ' +
         colour + ';\n';
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

Blockly.JavaScript['set_content'] = function(block) {
  var element = Blockly.JavaScript.valueToCode(
    block, 'ELEMENT',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value = Blockly.JavaScript.valueToCode(
    block, 'VALUE',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return element + '.' + block.getFieldValue('TYPE') + ' = ' +
         value + ';\n';
};

Blockly.Blocks['text_node'] = {
  init: function() {
    this.setColour(180);
    this.appendValueInput('TEXT').setCheck('String')
      .appendField('a new text node with');
    this.setOutput(true, 'TextNode');
  }
};

Blockly.JavaScript['text_node'] = function(block) {
  return [
    'document.createTextNode(' + Blockly.JavaScript.valueToCode(
      block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC
    ) + ')',
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.Blocks['handle_event'] = {
  init: function() {
    this.setColour(60);
    this.appendValueInput('TARGET').setCheck('Element')
      .appendField('when');
    this.appendStatementInput('STACK').appendField('is clicked');
  }
};

Blockly.JavaScript['handle_event'] = function(block) {
  var target = Blockly.JavaScript.valueToCode(
    block, 'TARGET',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var branch = Blockly.JavaScript.statementToCode(block, 'STACK');
  if (Blockly.JavaScript.STATEMENT_PREFIX) {
    branch = Blockly.JavaScript.prefixLines(
        Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
  }
  if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
    branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  return [
    target + '.addEventListener("click", function() {\n' +
    branch + '});\n'
  ];
};

Blockly.Blocks['input_value'] = {
  init: function() {
    this.setColour(180);
    this.setOutput(true, 'String');
    this.appendValueInput('ELEMENT').setCheck('Element')
      .appendField('the input value of');
  }
};

Blockly.JavaScript['input_value'] = function(block) {
  return [
    Blockly.JavaScript.valueToCode(
      block, 'ELEMENT', Blockly.JavaScript.ORDER_ATOMIC
    ) + '.value',
    Blockly.JavaScript.ORDER_ATOMIC
  ];
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

Blockly.JavaScript['when_page_is_loaded'] = function(block) {
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  return [
    'document.body.onload = function() {\n' + statements_blocks + '};\n',
    Blockly.JavaScript.ORDER_ATOMIC
  ];
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


Blockly.JavaScript['a_tag'] = function(block) {
  var functionName = Blockly.JavaScript.provideFunction_(
      'createATag',
      [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(linkText, displayText) {',
              '  var createA = document.createElement("a");',
              '  if (linkText.substring(0, 4) != "http") {',
              '    linkText = "http://" + linkText;',
              '  }',
              '  var createAText = document.createTextNode(displayText);',
              '  createA.setAttribute("href", linkText);',
              '  createA.setAttribute("target", "blank_")',
              '  createA.appendChild(createAText);',
              '  return createA;',
        '}']);
  var linkText = Blockly.JavaScript.valueToCode(block, 'linkText', Blockly.JavaScript.ORDER_ATOMIC);   
  var displayText = Blockly.JavaScript.valueToCode(block, 'displayText', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createATag(' + linkText + ', ' + displayText + ')'
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
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

Blockly.JavaScript['timeout'] = function(block) {
  var text_seconds = block.getFieldValue('SECONDS');
  var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
  return 'setTimeout(function(){\n' + statements + '}, '  + text_seconds +');\n';
};

Blockly.Blocks['repeat'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("every")
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

Blockly.JavaScript['repeat'] = function(block) {
  var text_seconds = block.getFieldValue('SECONDS');
  var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
  return 'setInterval(function(){\n' + statements + '}, '  + text_seconds +');\n';
};