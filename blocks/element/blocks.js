Blockly.Blocks['cycle_container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Container");
    this.appendStatementInput("BLOCKS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
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
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cycle_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button");
    this.appendStatementInput("BLOCKS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cycle_page'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Page");
    this.appendStatementInput("BLOCKS")
        .setCheck(null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};