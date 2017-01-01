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

Blockly.JavaScript['timeout'] = function(block) {
  var text_seconds = block.getFieldValue('SECONDS');
  var statements = Blockly.JavaScript.statementToCode(block, 'STATEMENTS');
  return 'setTimeout(function(){\n' + statements + '}, '  + text_seconds +');\n';
};