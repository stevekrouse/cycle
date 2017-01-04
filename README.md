# Cycle

Cycle makes coding no worse than it absoultely needs to be to get the job done.


It's pretty brittle these days, but you can play with a live demo at [stevekrouse.github.io/cycle](stevekrouse.github.io/cycle).

Some quirks:
  - Sometimes the output doesn't show for no good reason. Change something randomly in the editor to get it to re-run. If that doesn't work, check the console.
  - Getting the text from input's is wonky. You can get it by creating a variable called "inputText." You can also set it through that variable.
  - Most blocks don't work yet (like random color) because I haven't found a way to import their funcitons. That's coming.

## Principles

1) Accessible to create, view and update anywhere, on any device
   - built on the web
   - mobile friendly

2) Pre-requisites built-in (microworld, no user manual, just-in-time learning)
   - types as shapes
   - first person coding, messages, events as metaphors

3) Workflow built-in (asana, workflowy, and github all rolled into one and built in)
   - helps you organize your project
   - nested feature to do list for top-down and bottom-up programming
   - includes branches and version control and collaboration
   - notifies you when you've been stuck on a feature for too long and should take a break or get help

4) Only logical bugs (helpful waiter that gives you tips and warns you against things, but ultimately brings what you ask for as long as it's not going to kill you)
   - blocks
   - strong types
   - amazing error messages that prevent bugs

5) No Ceiling
   - play nice with exsiting tech
   - firebase bindings
   - bootstrap bindings
   - package manager imports

6) Simple made easy
   - pass by value (no pass by ref)
   - scaffolding and autocoding for simple concepts that need boilerplate > behind the scenes magic


## Experiments

* ~~add events into elements as their children~~ *Succeeded!*
* save Cycle projects 
   * ~~option 1: local session~~ *Succeeded!*
   * option 2: firebase
     * create users
     * create users "table"
     * create projects, revisions tables
     * link to proejcts with /userName/projectName (with 404.html redirect)
   * ~~option 3: save project to hash in url on each version~~ *Succeeded!*
* debugger block in events
* refactor data structures
  * render to JavaScript Vue String {registers components, registers app, hooks up renders} (compiled instead of interpreted)
  * Blockly -> {componentName: VueJSRenderObject{tagName, attributes, children}} -> JavaScript Vue String
* arrow codes to move selector + type to insert code
* strong typing
  * types as shapes
  * no nulls -> maybe and easy unpacking
  * no objects -> records with predefined keys and key types
* only allow variable creation at top of scope so as to make hoisting simplier to understand (it's already easy)
* the ability to drag iterators and function arguments into argument defintion like in snap!
* the toolbox lives in the mouse/selector so as to help you understand what's in context/scope


## Goals

https://preview.c9users.io/stevekrouse_1/cycle-lang/cycle/index.html?_c9_id=livepreview0&_c9_host=https://ide.c9.io#%3Cxml%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%3E%3Cblock%20type%3D%22cycle_page%22%20deletable%3D%22false%22%20movable%3D%22false%22%20x%3D%220%22%20y%3D%2210%22%3E%3Cstatement%20name%3D%22CHILDREN%22%3E%3Cblock%20type%3D%22variables_set%22%3E%3Cfield%20name%3D%22VAR%22%3Elist%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22lists_create_empty%22%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cnext%3E%3Cblock%20type%3D%22cycle_container%22%3E%3Cstatement%20name%3D%22CHILDREN%22%3E%3Cblock%20type%3D%22set_css%22%3E%3Cfield%20name%3D%22PROPERTY%22%3EfontSize%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22text%22%3E%3Cfield%20name%3D%22TEXT%22%3E30px%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cnext%3E%3Cblock%20type%3D%22cycle_text%22%3E%3Cvalue%20name%3D%22TEXT%22%3E%3Cblock%20type%3D%22text%22%3E%3Cfield%20name%3D%22TEXT%22%3ETodo%20List%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3Cnext%3E%3Cblock%20type%3D%22cycle_container%22%3E%3Cstatement%20name%3D%22CHILDREN%22%3E%3Cblock%20type%3D%22cycle_input%22%3E%3Cnext%3E%3Cblock%20type%3D%22cycle_button%22%3E%3Cstatement%20name%3D%22CHILDREN%22%3E%3Cblock%20type%3D%22cycle_text%22%3E%3Cvalue%20name%3D%22TEXT%22%3E%3Cblock%20type%3D%22text%22%3E%3Cfield%20name%3D%22TEXT%22%3ESubmit%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cnext%3E%3Cblock%20type%3D%22mousedown%22%3E%3Cstatement%20name%3D%22blocks%22%3E%3Cblock%20type%3D%22lists_setIndex%22%3E%3Cmutation%20at%3D%22false%22%3E%3C%2Fmutation%3E%3Cfield%20name%3D%22MODE%22%3EINSERT%3C%2Ffield%3E%3Cfield%20name%3D%22WHERE%22%3ELAST%3C%2Ffield%3E%3Cvalue%20name%3D%22LIST%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3Elist%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22TO%22%3E%3Cblock%20type%3D%22lists_create_with%22%3E%3Cmutation%20items%3D%222%22%3E%3C%2Fmutation%3E%3Cvalue%20name%3D%22ADD0%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3EinputText%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22ADD1%22%3E%3Cblock%20type%3D%22logic_boolean%22%3E%3Cfield%20name%3D%22BOOL%22%3EFALSE%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cnext%3E%3Cblock%20type%3D%22variables_set%22%3E%3Cfield%20name%3D%22VAR%22%3EinputText%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22text%22%3E%3Cfield%20name%3D%22TEXT%22%3E%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3Cnext%3E%3Cblock%20type%3D%22controls_forEach%22%3E%3Cfield%20name%3D%22VAR%22%3EtodoItem%3C%2Ffield%3E%3Cvalue%20name%3D%22LIST%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3Elist%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cstatement%20name%3D%22DO%22%3E%3Cblock%20type%3D%22cycle_container%22%3E%3Cstatement%20name%3D%22CHILDREN%22%3E%3Cblock%20type%3D%22set_css%22%3E%3Cfield%20name%3D%22PROPERTY%22%3EtextDecoration%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22logic_ternary%22%3E%3Cvalue%20name%3D%22IF%22%3E%3Cblock%20type%3D%22lists_getIndex%22%3E%3Cmutation%20statement%3D%22false%22%20at%3D%22false%22%3E%3C%2Fmutation%3E%3Cfield%20name%3D%22MODE%22%3EGET%3C%2Ffield%3E%3Cfield%20name%3D%22WHERE%22%3ELAST%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3EtodoItem%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22THEN%22%3E%3Cblock%20type%3D%22text%22%3E%3Cfield%20name%3D%22TEXT%22%3Eline-through%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22ELSE%22%3E%3Cblock%20type%3D%22text%22%3E%3Cfield%20name%3D%22TEXT%22%3Enone%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cnext%3E%3Cblock%20type%3D%22cycle_text%22%3E%3Cvalue%20name%3D%22TEXT%22%3E%3Cblock%20type%3D%22lists_getIndex%22%3E%3Cmutation%20statement%3D%22false%22%20at%3D%22false%22%3E%3C%2Fmutation%3E%3Cfield%20name%3D%22MODE%22%3EGET%3C%2Ffield%3E%3Cfield%20name%3D%22WHERE%22%3EFIRST%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3EtodoItem%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cnext%3E%3Cblock%20type%3D%22cycle_button%22%3E%3Cstatement%20name%3D%22CHILDREN%22%3E%3Cblock%20type%3D%22cycle_text%22%3E%3Cvalue%20name%3D%22TEXT%22%3E%3Cblock%20type%3D%22logic_ternary%22%3E%3Cvalue%20name%3D%22IF%22%3E%3Cblock%20type%3D%22lists_getIndex%22%3E%3Cmutation%20statement%3D%22false%22%20at%3D%22false%22%3E%3C%2Fmutation%3E%3Cfield%20name%3D%22MODE%22%3EGET%3C%2Ffield%3E%3Cfield%20name%3D%22WHERE%22%3ELAST%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3EtodoItem%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22THEN%22%3E%3Cblock%20type%3D%22text%22%3E%3Cfield%20name%3D%22TEXT%22%3EUncheck%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22ELSE%22%3E%3Cblock%20type%3D%22text%22%3E%3Cfield%20name%3D%22TEXT%22%3ECheck%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cnext%3E%3Cblock%20type%3D%22mousedown%22%3E%3Cstatement%20name%3D%22blocks%22%3E%3Cblock%20type%3D%22lists_setIndex%22%3E%3Cmutation%20at%3D%22true%22%3E%3C%2Fmutation%3E%3Cfield%20name%3D%22MODE%22%3ESET%3C%2Ffield%3E%3Cfield%20name%3D%22WHERE%22%3EFROM_START%3C%2Ffield%3E%3Cvalue%20name%3D%22LIST%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3Elist%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22AT%22%3E%3Cblock%20type%3D%22lists_indexOf%22%3E%3Cfield%20name%3D%22END%22%3EFIRST%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3Elist%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22FIND%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3EtodoItem%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22TO%22%3E%3Cblock%20type%3D%22lists_create_with%22%3E%3Cmutation%20items%3D%222%22%3E%3C%2Fmutation%3E%3Cvalue%20name%3D%22ADD0%22%3E%3Cblock%20type%3D%22lists_getIndex%22%3E%3Cmutation%20statement%3D%22false%22%20at%3D%22false%22%3E%3C%2Fmutation%3E%3Cfield%20name%3D%22MODE%22%3EGET%3C%2Ffield%3E%3Cfield%20name%3D%22WHERE%22%3EFIRST%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3EtodoItem%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22ADD1%22%3E%3Cblock%20type%3D%22logic_negate%22%3E%3Cvalue%20name%3D%22BOOL%22%3E%3Cblock%20type%3D%22lists_getIndex%22%3E%3Cmutation%20statement%3D%22false%22%20at%3D%22false%22%3E%3C%2Fmutation%3E%3Cfield%20name%3D%22MODE%22%3EGET%3C%2Ffield%3E%3Cfield%20name%3D%22WHERE%22%3ELAST%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3EtodoItem%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3Cnext%3E%3Cblock%20type%3D%22cycle_button%22%3E%3Cstatement%20name%3D%22CHILDREN%22%3E%3Cblock%20type%3D%22cycle_text%22%3E%3Cvalue%20name%3D%22TEXT%22%3E%3Cblock%20type%3D%22text%22%3E%3Cfield%20name%3D%22TEXT%22%3EX%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cnext%3E%3Cblock%20type%3D%22mousedown%22%3E%3Cstatement%20name%3D%22blocks%22%3E%3Cblock%20type%3D%22lists_getIndex%22%3E%3Cmutation%20statement%3D%22true%22%20at%3D%22true%22%3E%3C%2Fmutation%3E%3Cfield%20name%3D%22MODE%22%3EREMOVE%3C%2Ffield%3E%3Cfield%20name%3D%22WHERE%22%3EFROM_START%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3Elist%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22AT%22%3E%3Cblock%20type%3D%22lists_indexOf%22%3E%3Cfield%20name%3D%22END%22%3EFIRST%3C%2Ffield%3E%3Cvalue%20name%3D%22VALUE%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3Elist%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cvalue%20name%3D%22FIND%22%3E%3Cblock%20type%3D%22variables_get%22%3E%3Cfield%20name%3D%22VAR%22%3EtodoItem%3C%2Ffield%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E%3C%2Fxml%3E

1) ~todos that can be completed with strikethrough~ *Acheived!*
   * ~~if/else~~
   * ~~strikethrough block~~

2) ~~todos that can delete themselves~~ *Acheived!*
   * ~~delete by value~~
   
2.5) todo is submitted on enter
     * make event in scope
     * Objects 
       * find this somewhere, someone must've done it 
       * create empty
       * create with KEY VALUE x3 and can add more
       * access OBJ's KEY
       * SET OBJ's KEY to VAL
       * Object.keys

3) todos that can be edited on double click 
   * figure out how to make inputText's in a list for todo items be in their own scopes with their own set

4) save todos to localstorage
   * localstorage set, get

5) full css for todo mvc
   * do components here?
   * margin/padding seem to be broken
     *  think about classes / selectors for CSS or if componenets are enough?
     *  think about adding objects of styles?

6) allow users to cycle their cycle project's data to firebase (firebase bindings)
   * on value REF change (value)
   * after getting REF once (value)
   * set REF to (value)  (how do we get ID out of this?)
   * push (value) to REF


## Features we'll need eventually


* components
  * props are pass by value
    * need to figure out how to scaffold the changing of parents variables from child with message passing 
    * (and easy object cloning and key modifying)
  * need to somehow make data variables out of scope in eval
  * message broadcasting between components
* errors
  * when you use a data variable before setting it
  * prevent adding elements or settings to events (only change data and other side effect things)
* update blockly so things like shadow blocks work
* add the word "initial" to setting variables in element: create variable X with initial value Y
* parse string to number
* allow multiple kinds of each event
* figure out how to add variables for callbacks (similar to how adding a for-loop does)
* add method definitions to the scope where vue expressions are evaluated
* seperate the set_css block into singles
* better colors for things