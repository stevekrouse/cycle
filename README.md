# Cycle

[stevekrouse.github.io/cycle](stevekrouse.github.io/cycle)

Cycle makes coding no worse than it absoultely needs to be to get the job done.

## Principles

1) Accessible to create, view and update anywhere, on any device
   - built on the web
   - mobile friendly

2) Pre-requisites built-in (microworld, no user manual, just-in-time learning)
   - types as shapes
   - first person coding
   - messages, events as metaphors

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


## Goals

^ Current Branch Experiment: add events into elements as their children


1) save Cycle projects 
   * option 1: local storage
     * save to local storage on every change
     * new project button to clear it
   * option 2: firebase
     * create users
     * create users "table"
     * create projects, revisions tables
     * link to proejcts with /userName/projectName (with 404.html redirect)

2) todos that can be completed with strikethrough
   * ~~if/else~~
   * strikethrough block
   * Objects
     * create empty
     * create with KEY VALUE x3 and can add more
     * access OBJ's KEY
     * SET OBJ's KEY to VAL

3) todos that can delete themselves
   * do components here?

4) todos that can be edited on double click

5) save todos to localstorage
   * localstorage set, get

6) full css for todo mvc
   * margin/padding seem to be broken
     *  think about classes / selectors for CSS or if componenets are enough?
     *  think about adding objects of styles?

7) allow users to cycle their cycle project's data to firebase (firebase bindings)
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
* refactor things so as to decouple from blocky / vue --> a cycle runtime/AST thingy, should be easier now that we have element/setting & events seperated
  * should be similar to the vuejs render object (if not exactly that)
* arrow codes to move selector + type to insert code
* strong typing
  * types as shapes
  * no nulls -> maybe and easy unpacking
  * no objects -> records with predefined keys and key types
* only allow variable creation at top of scope so as to make hoisting simplier to understand (it's already easy)

* errors
  * when you use a data variable before setting it
* update blockly so things like shadow blocks work
* Object.keys
* add the word "initial" to setting variables in element: create variable X with initial value Y
* parse string to number
* allow multiple kinds of each event
* figure out how to add variables for callbacks (similar to how adding a for-loop does)
* add method definitions to the scope where vue expressions are evaluated
* seperate the set_css block into singles
* make element / setting variables correspond
* when settings (or text) blocks are clicked in elements, make the events show it's parents' (or parent's parent's etcs) events
* ideas for new block language / forking blockly
  * the toolbox lives in the mouse so as to help you understand what's in context/scope
  * somehow have the ability to have events in elements to the left or right side (without putting them in the "children" section of elements)
  * the ability to drag iterators and function arguments into argument defintion like in snap!