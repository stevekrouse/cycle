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
