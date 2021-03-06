// Page element

Blockly.Blocks['cycle_page'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Page");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setColour(190);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// Container Elements

Blockly.Blocks['cycle_container'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("full width container");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_inline_container'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("inline container");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_vertical_spacer'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("vertical spacer height");
    this.appendValueInput("VALUE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_horizontal_spacer'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("horizontal spacer width");
    this.appendValueInput("VALUE")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(190);
    this.setTooltip('');
  },
};

// Text elements

Blockly.Blocks['cycle_text'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Text");
    this.appendValueInput("TEXT")
      .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_heading'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["heading 1", "h1"],
        ["heading 2", "h2"],
        ["heading 3", "h3"],
        ["heading 4", "h4"],
        ["heading 5", "h5"],
        ["heading 6", "h6"],
      ]), "TAG");
    this.appendValueInput("TEXT");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
  },
}

Blockly.Blocks['cycle_display_heading'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["display heading 1", "display-1"],
        ["display heading 2", "display-2"],
        ["display heading 3", "display-3"],
        ["display heading 4", "display-4"],
      ]), "TAG");
    this.appendValueInput("TEXT");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
  },
}

Blockly.Blocks['cycle_inline_text'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("text");
    this.appendValueInput("TEXT");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
  },
};

// Media elements

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

Blockly.Blocks['cycle_open_url'] = {
  init: function() {
    this.appendValueInput("URL")
      .appendField("open url")
      .appendField(new Blockly.FieldDropdown([
        ["in a new tab", "_blank"],
        ["in the same window", "same"],
        ["in a new window", "new"],
      ]), "TARGET");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_image'] = {
  init: function() {
    this.appendValueInput("URL")
      .appendField("image url");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_iframe'] = {
  init: function() {
    this.appendValueInput("URL")
      .appendField("embed url");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_video_url'] = {
  init: function() {
    this.appendValueInput("URL")
      .appendField("video url");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
    this.setTooltip('');
  },
};

// Input elements

Blockly.Blocks['cycle_button'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Button")
      .appendField(new Blockly.FieldDropdown([
        ["info", "btn-info"],
        ["primary", "btn-primary"],
        ["secondary", "btn-secondary"],
        ["success", "btn-success"],
        ["warning", "btn-warning"],
        ["danger", "btn-danger"],
        ["info outline", "btn-outline-info"],
        ["primary outline", "btn-outline-primary"],
        ["secondary outline", "secbtn-outline-secondary"],
        ["success outline", "sbtn-outline-success"],
        ["warning outline", "wbtn-outline-warning"],
        ["danger outline", "btn-outline-danger"],
      ]), "TYPE");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_input_plain'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("single line text input")
    this.setInputsInline(true);
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
  },
};

Blockly.Blocks['cycle_input'] = {
  init: function() {
    this.appendValueInput("VALUE")
      .appendField("single line text input with")
      .appendField(new Blockly.FieldVariable("input1Text"), "VAR")
      .appendField("initally set to")
    this.setInputsInline(true);
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
  },
};

// Custom Elements

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
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['cycle_custom_event'] = {
  init: function() {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("When custom event");
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};





Blockly.Blocks['cycle_create_element'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("Create element ")
      .appendField(new Blockly.FieldTextInput("Element1"), "NAME");
    this.appendDummyInput()
      .appendField("with base")
      .appendField(new Blockly.FieldDropdown([
        ["container", "div"],
        ["image", "img"],
        ["input", "input"],
        ["link", "a"],
        ["button", "button"]
      ]), "BASE");
    this.appendStatementInput("CHILDREN")
      .setCheck(null);
    this.setInputsInline(true);
    this.setColour(0);
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
    this.setColour(0);
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
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  getVars: function() {
    return [this.getFieldValue("NAME")]
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
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['cycle_css_property'] = {
  init: function() {
    this.setColour(310);
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
    this.setColour(20);
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
      .appendField("breakpoint");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
  },
};

// Events

Blockly.Blocks['load'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when the page is loaded")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['mousedown'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when mouse down")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['mousemove'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when mouse move")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['change'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when changed")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['input'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when input")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['mouseover'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when mouse over")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};
Blockly.Blocks['mouseout'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when mouse out")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};
Blockly.Blocks['dblclick'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when double click")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};
Blockly.Blocks['mouseup'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when mouse up")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};
Blockly.Blocks['keydown'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when")
      .appendField(new Blockly.FieldDropdown([
        ["any","ANY"], ["backspace","8"],["tab","9"],["enter","13"],["shift","16"],["ctrl","17"],["alt","18"],["pause/break","19"],["caps lock","20"],["escape","27"],["(space)","32"],["page up","33"],["page down","34"],["end","35"],["home","36"],["left arrow","37"],["up arrow","38"],["right arrow","39"],["down arrow","40"],["insert","45"],["delete","46"],["0","48"],["1","49"],["2","50"],["3","51"],["4","52"],["5","53"],["6","54"],["7","55"],["8","56"],["9","57"],["a","65"],["b","66"],["c","67"],["d","68"],["Key","Code"],["e","69"],["f","70"],["g","71"],["h","72"],["i","73"],["j","74"],["k","75"],["l","76"],["m","77"],["n","78"],["o","79"],["p","80"],["q","81"],["r","82"],["s","83"],["t","84"],["u","85"],["v","86"],["w","87"],["x","88"],["y","89"],["z","90"],["left window key","91"],["right window key","92"],["select key","93"],["numpad 0","96"],["numpad 1","97"],["numpad 2","98"],["numpad 3","99"],["numpad 4","100"],["numpad 5","101"],["numpad 6","102"],["numpad 7","103"],["Key","Code"],["numpad 8","104"],["numpad 9","105"],["multiply","106"],["add","107"],["subtract","109"],["decimal point","110"],["divide","111"],["f1","112"],["f2","113"],["f3","114"],["f4","115"],["f5","116"],["f6","117"],["f7","118"],["f8","119"],["f9","120"],["f10","121"],["f11","122"],["f12","123"],["num lock","144"],["scroll lock","145"],["semi-colon","186"],["equal sign","187"],["comma","188"],["dash","189"],["period","190"],["forward slash","191"],["grave accent","192"],["open bracket","219"],["back slash","220"],["close braket","221"],["single quote","222"]
      ]), "KEYCODE")
      .appendField("key down")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['keyup'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when")
      .appendField(new Blockly.FieldDropdown([
        ["any","ANY"], ["backspace","8"],["tab","9"],["enter","13"],["shift","16"],["ctrl","17"],["alt","18"],["pause/break","19"],["caps lock","20"],["escape","27"],["(space)","32"],["page up","33"],["page down","34"],["end","35"],["home","36"],["left arrow","37"],["up arrow","38"],["right arrow","39"],["down arrow","40"],["insert","45"],["delete","46"],["0","48"],["1","49"],["2","50"],["3","51"],["4","52"],["5","53"],["6","54"],["7","55"],["8","56"],["9","57"],["a","65"],["b","66"],["c","67"],["d","68"],["Key","Code"],["e","69"],["f","70"],["g","71"],["h","72"],["i","73"],["j","74"],["k","75"],["l","76"],["m","77"],["n","78"],["o","79"],["p","80"],["q","81"],["r","82"],["s","83"],["t","84"],["u","85"],["v","86"],["w","87"],["x","88"],["y","89"],["z","90"],["left window key","91"],["right window key","92"],["select key","93"],["numpad 0","96"],["numpad 1","97"],["numpad 2","98"],["numpad 3","99"],["numpad 4","100"],["numpad 5","101"],["numpad 6","102"],["numpad 7","103"],["Key","Code"],["numpad 8","104"],["numpad 9","105"],["multiply","106"],["add","107"],["subtract","109"],["decimal point","110"],["divide","111"],["f1","112"],["f2","113"],["f3","114"],["f4","115"],["f5","116"],["f6","117"],["f7","118"],["f8","119"],["f9","120"],["f10","121"],["f11","122"],["f12","123"],["num lock","144"],["scroll lock","145"],["semi-colon","186"],["equal sign","187"],["comma","188"],["dash","189"],["period","190"],["forward slash","191"],["grave accent","192"],["open bracket","219"],["back slash","220"],["close braket","221"],["single quote","222"]
      ]), "KEYCODE")
      .appendField("key up")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
  }
};

Blockly.Blocks['blur'] = {
  init: function() {
    this.setColour(60);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
      .appendField("when blur")
      .appendField(new Blockly.FieldVariable("event"), "VAR")
    this.appendStatementInput("blocks")
      .setCheck(null);
    this.setTooltip('');
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

// TEXT

Blockly.Blocks['text_stringify'] = {
  init: function() {
    this.appendValueInput("VALUE")
      .appendField("to json");
    this.setOutput(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
}

// OBJECTS

Blockly.Blocks['objects_create_empty'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("create empty object");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['objects_get'] = {
  init: function() {
    this.appendValueInput("OBJECT")
      .setCheck(null)
      .appendField("get");
    this.appendValueInput("KEY")
      .setCheck(null)
      .appendField("'s");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
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
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['objects_values'] = {
  init: function() {
    this.appendValueInput("OBJECT")
      .setCheck(null)
      .appendField("get ");
    this.appendDummyInput("KEY")
      .appendField("'s values");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(240);
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
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['objects_create_with'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true);
    this.setColour(240);
    this.setInputsInline(false);
    this.setMutator(new Blockly.Mutator(['objects_create_with_item']));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('objects_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('objects_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    var properties = []
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      properties.push(itemBlock.propertyValue_)
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
      this.setFieldValue(properties[i] || "property" + (i+1), "PROPERTY" + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      var field = this.getFieldValue("PROPERTY" + i)
      itemBlock.propertyValue_ = field
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {

    if (this.itemCount_ === 0 && !this.getInput("EMPTY")) {
      this.appendDummyInput("EMPTY")
        .appendField('create empty object');
      if (this.getInput('CREATE')) {
        this.removeInput('CREATE');
      }
    } else if (this.itemCount_ !== 0 && !this.getInput('CREATE')) {
      this.appendDummyInput("CREATE")
        .appendField('new object');
      if (this.getInput('EMPTY')) {
        this.removeInput('EMPTY');
      }
    }
  
  
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i);
        input.appendField(new Blockly.FieldTextInput("property"), "PROPERTY" + i)
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      if (this.getInput('VALUE' + i)) {
        this.removeInput('VALUE' + i);
      }
      i++;
    }
  }
};

Blockly.Blocks['objects_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField('object');
    this.appendStatementInput('STACK');
    this.setTooltip('TOOLTIP3');
    this.contextMenu = false;
  }
};

Blockly.Blocks['objects_create_with_item'] = {
  /**
   * Mutator block for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
      .appendField('property');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('TOOLTIP2');
    this.contextMenu = false;
  }
};

Blockly.Blocks['objects_clone_with'] = Object.assign({}, Blockly.Blocks['objects_create_with'])
Blockly.Blocks['objects_clone_with'].updateShape_ = function() {
  // Add new inputs.
  if (!this.getInput("CLONE")) {
    var clone = this.appendValueInput("CLONE");
    clone.appendField('clone');
    if (this.itemCount_ > 0) {
      var dummy = this.appendDummyInput("WITH")
      dummy.appendField("with")
    }
  }
  
  for (var i = 0; i < this.itemCount_; i++) {
    if (!this.getInput('ADD' + i)) {
      var input = this.appendValueInput('ADD' + i);
      input.appendField(new Blockly.FieldTextInput("property"), "PROPERTY" + i)
    }
  }
  if (this.itemCount_ == 0 && this.getInput('WITH')) {
    this.removeInput('WITH');
  }
  // Remove deleted inputs.
  while (this.getInput('ADD' + i)) {
    this.removeInput('ADD' + i);
    if (this.getInput('VALUE' + i)) {
      this.removeInput('VALUE' + i);
    }
    i++;
  }
}
Blockly.Blocks['objects_clone_with'].init = function() {
  this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
  this.itemCount_ = 1;
  this.updateShape_();
  this.setOutput(true);
  this.setColour(240);
  this.setInputsInline(true);
  this.setMutator(new Blockly.Mutator(['objects_create_with_item']));
  this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
}

// Firebase

Blockly.Blocks['firebase_initialize_app'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Configure Firebase");
    this.appendDummyInput()
        .appendField("apiKey")
        .appendField(new Blockly.FieldTextInput("SDF46KSDFL"), "apiKey");
    this.appendDummyInput()
        .appendField("authDomain")
        .appendField(new Blockly.FieldTextInput("projectId.firebaseapp.com"), "authDomain");
    this.appendDummyInput()
        .appendField("databaseURL")
        .appendField(new Blockly.FieldTextInput("https://databaseName.firebaseio.com"), "databaseURL");
    this.appendDummyInput()
        .appendField("storageBucket")
        .appendField(new Blockly.FieldTextInput("bucket.appspot.com"), "storageBucket");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['firebase_set'] = {
  init: function() {
    this.appendValueInput("REF")
        .setCheck(null)
        .appendField("set value at url");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['firebase_add_to_list'] = {
  init: function() {
    this.appendValueInput("REF")
        .setCheck(null)
        .appendField("in list at url");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("add");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['firebase_add_to_list_id'] = {
  init: function() {
    this.appendValueInput("REF")
        .setCheck(null)
        .appendField("in list at url");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("add");
    this.appendDummyInput()
        .appendField("and return the id");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['firebase_delete'] = {
  init: function() {
    this.appendValueInput("REF")
        .setCheck(null)
        .appendField("delete contents at url");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['firebase_get'] = {
  init: function() {
    this.appendValueInput("REF")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["every change","value"], ["once","once"], ["child added","child_added"], ["child removed","child_removed"], ["child changed","child_changed"]]), "frequency")
        .appendField("at url")
    this.appendDummyInput()
        .appendField("get the new")
        .appendField(new Blockly.FieldVariable("firebaseValue"), "VAR")
        .appendField("and do");
    this.appendStatementInput("CHILDREN")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// Include scripts

Blockly.Blocks['cycle_include_script'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get javascript at url")
        .appendField(new Blockly.FieldTextInput("https://www.gstatic.com/firebasejs/3.6.6/firebase.js"), "URL");
    this.appendDummyInput()
        .appendField("and then do");
    this.appendStatementInput("CHILDREN")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// Font

Blockly.Blocks['font_shadow'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("font shadow x");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("y");
    this.appendValueInput("COLOR")
        .setCheck(null)
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_size'] = {
  init: function() {
    this.appendValueInput("SIZE")
        .setCheck(null)
        .appendField("font size");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_bold'] = {
  init: function() {
    this.appendValueInput("BOLD")
        .setCheck(null)
        .appendField("font bold");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_family'] = {
  init: function() {
    this.appendValueInput("FONT")
        .setCheck(null)
        .appendField("font family");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_align'] = {
  init: function() {
    this.appendValueInput("ALIGN")
        .setCheck(null)
        .appendField("font align");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_italics'] = {
  init: function() {
    this.appendValueInput("ITALICS")
        .setCheck(null)
        .appendField("font italics");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_color'] = {
  init: function() {
    this.appendValueInput("COLOR")
        .setCheck(null)
        .appendField("font color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_underline'] = {
  init: function() {
    this.appendValueInput("DECORATION")
        .setCheck(null)
        .appendField("font underline");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_strikethrough'] = {
  init: function() {
    this.appendValueInput("DECORATION")
        .setCheck(null)
        .appendField("font strikethrough");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_line_spacing'] = {
  init: function() {
    this.appendValueInput("SPACING")
        .setCheck(null)
        .appendField("font line spacing");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_letter_spacing'] = {
  init: function() {
    this.appendValueInput("SPACING")
        .setCheck(null)
        .appendField("font letter spacing");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_word_spacing'] = {
  init: function() {
    this.appendValueInput("SPACING")
        .setCheck(null)
        .appendField("font word spacing");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['font_overline'] = {
  init: function() {
    this.appendValueInput("DECORATION")
        .setCheck(null)
        .appendField("font overline");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// Layout

Blockly.Blocks['layout_background_color'] = {
  init: function() {
    this.appendValueInput("COLOR")
        .setCheck(null)
        .appendField("background color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['layout_width'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["width","width"], ["min width","minWidth"], ["max width","maxWidth"]]), "PROP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['layout_height'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["height","height"], ["min height","minHeight"], ["max height","maxHeight"]]), "PROP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['layout_padding'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("distance to")
        .appendField(new Blockly.FieldDropdown([["all","all"], ["top","Top"], ["right","Right"], ["bottom","Bottom"], ["left","Left"]]), "BORDER")
        .appendField("border(s)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['layout_margin'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("distance after")
        .appendField(new Blockly.FieldDropdown([["all","all"], ["top","Top"], ["right","Right"], ["bottom","Bottom"], ["left","Left"]]), "BORDER")
        .appendField("border(s)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['layout_flex_parent'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("arrange sub-elements")
        .appendField(new Blockly.FieldDropdown([["left to right","row"], ["right to left","reverse-row"], ["top to bottom","column"], ["bottom to top","reverse-column"]]), "DIRECTION");
    this.appendDummyInput()
        .appendField("on the x-axis, align sub-elements")
        .appendField(new Blockly.FieldDropdown([["center","center"], ["left","left"], ["right","right"], ["space around","space-around"], ["space between","space-between"], ["stretch","stretch"]]), "X");
    this.appendDummyInput()
        .appendField("on the y-axis, align sub-elements")
        .appendField(new Blockly.FieldDropdown([["center","center"], ["top","top"], ["bottom","bottom"], ["space around","space-around"], ["space between","space-between"], ["stretch","stretch"]]), "Y");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["wrap sub-elements","wrap"], ["keep all sub-elements in a line","nowrap"]]), "WRAP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['layout_grow'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("stretch ratio");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
}

Blockly.Blocks['layout_inline'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("inline");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['layout_border'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["all","all"], ["top","Top"], ["right","Right"], ["left","Left"], ["bottom","Bottom"]]), "BORDER")
        .appendField("border(s)");
    this.appendValueInput("WIDTH")
        .setCheck(null)
        .appendField("width");
    this.appendValueInput("COLOR")
        .setCheck(null)
        .appendField("color");
    this.appendValueInput("RADIUS")
        .setCheck(null)
        .appendField("radius");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["solid line","solid"], ["dotted line","dotted"], ["dashed line","dashed"], /* causes trouble ["double line","double"],*/ ["no line","none"]]), "STYLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['layout_outline'] = {
  init: function() {
    this.appendValueInput("WIDTH")
        .setCheck(null)
        .appendField("outline width");
    this.appendValueInput("COLOR")
        .setCheck(null)
        .appendField("color");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["solid line","solid"], ["dotted line","dotted"], ["dashed line","dashed"], /* causes trouble ["double line","double"],*/ ["no line","none"]]), "STYLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['layout_shadow'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck(null)
        .appendField("shadow x");
    this.appendValueInput("Y")
        .setCheck(null)
        .appendField("y");
    this.appendValueInput("COLOR")
        .setCheck(null)
        .appendField("color");
    this.appendValueInput("BLUR")
        .setCheck(null)
        .appendField("blur");
    this.appendValueInput("SPREAD")
        .setCheck(null)
        .appendField("spread");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


		  
Blockly.Blocks['set_css'] = {		
  init: function() {		
    this.setColour(310);		
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

Blockly.Blocks['cycle_eval_js'] = {
  init: function() {
    this.appendValueInput("JS")
        .appendField("run javascript")
        .setCheck(null)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['cycle_eval_js_return'] = {
  init: function() {
    this.appendValueInput("JS")
        .appendField("run javascript")
        .setCheck(null)
    this.setOutput(true)
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// AJAX

Blockly.Blocks['cycle_ajax_get'] = {
  init: function() {
    this.appendValueInput("URL")
        .setCheck(null)
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["text","'text'"], ["json data","'json'"]]), "DATATYPE")
        .appendField("from url");
    this.appendStatementInput("SUCCESS")
        .setCheck(null)
        .appendField("on success with")
        .appendField(new Blockly.FieldVariable("getResult"), "RESULT")
        .appendField("do");
    this.appendStatementInput("FAIL")
        .setCheck(null)
        .appendField("on failure with")
        .appendField(new Blockly.FieldVariable("getError"), "ERROR")
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['cycle_ajax_post'] = {
  init: function() {
    this.appendValueInput("DATA")
        .setCheck(null)
        .appendField("post data");
    this.appendValueInput("URL")
        .setCheck(null)
        .appendField("to url");
    this.appendStatementInput("SUCCESS")
        .setCheck(null)
        .appendField("on success with")
        .appendField(new Blockly.FieldVariable("postResult"), "RESULT")
        .appendField("do");
    this.appendStatementInput("FAIL")
        .setCheck(null)
        .appendField("on failure with")
        .appendField(new Blockly.FieldVariable("postError"), "ERROR")
        .appendField("do");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};  