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

Blockly.JavaScript['query_selector'] = function(block) {
  return [
    "document.querySelector(" +
    Blockly.JavaScript.quote_(block.getFieldValue('SELECTOR')) + ")",
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.JavaScript['get_element_by_id'] = function(block) {
  return [
    "document.getElementById(" +
    Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC) + ")",
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.JavaScript['body_element'] = function(block) {
  return [
    "document.body",
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.JavaScript['set_css'] = function(block) {
  var value = Blockly.JavaScript.valueToCode(
    block, 'VALUE',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  return block.getFieldValue('PROPERTY') + ' : ' + value + ',\n';
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

Blockly.JavaScript['text_node'] = function(block) {
  return [
    'document.createTextNode(' + Blockly.JavaScript.valueToCode(
      block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC
    ) + ')',
    Blockly.JavaScript.ORDER_ATOMIC
  ];
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

Blockly.JavaScript['input_value'] = function(block) {
  return [
    Blockly.JavaScript.valueToCode(
      block, 'ELEMENT', Blockly.JavaScript.ORDER_ATOMIC
    ) + '.value',
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.JavaScript['load'] = function(block) {
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  return [
    statements_blocks,
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.JavaScript['mousedown'] = function(block) {
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  return [
    statements_blocks,
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.JavaScript['change'] = function(block) {
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  return [
    statements_blocks,
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

Blockly.JavaScript['style'] = function(block) {
  var statements_blocks = Blockly.JavaScript.statementToCode(block, 'blocks');
  return [
    "{\n" + statements_blocks + "\n}",
    Blockly.JavaScript.ORDER_ATOMIC
  ];
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

Blockly.JavaScript['timeout'] = function(block) {
  var text_seconds = block.getFieldValue('SECONDS');
  var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
  return 'setTimeout(function(){\n' + statements + '}, '  + text_seconds +');\n';
};