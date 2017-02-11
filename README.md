# Cycle

Cycle - the intuative interface builder, because HTML, CSS and JS need to be abstracted over

Live demo at [stevekrouse.github.io/cycle](http://stevekrouse.github.io/cycle).


## Customer development ideas
  
  * go to hackathons to teach kids to code with cycle and have them win
    * HackTrin Sunday Feb 12
    * Hack it Together Tuedsday Feb 21st workshop
    * HackNYU Saturday Feb 18th
      * hackathon on feb 26 at 8:30am
    * HackNY  April 8
  * need to come up with better words than "block-based" or "drag and drop"
  * race between programmer typing and another programmer on cycle


## Next deadline: HackTrin, Feb 12th

  * make navbar prettier
  
  * temp variables in methods should not be scoped and should make newList not reserved 
    * if I don't get to this, remove the option to create methods from toolbox
    * one way to do this is to not give methods scope at all
      * then we'd have to pass the list in as an input in todo-mvc 
    
  
  * copy and paste between cycle windows
    * copy_ to sytem clickboard or localstorage instead of clipboardXml_
      * http://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript 
  
  * make cycle resources pretty
    * https://docs.google.com/document/d/1L_6jNXmc-H1mG5jgnEEMOe1sni0g4rtBQC87Ip2iMk0/edit#
    * outline presentation
    * survey

## Eventually
  
  * better elements
  * Link url URL in a new tab|this page|new window
  * Image url URL
  * break up elements into menus
    * Textbox (or text element)
    * media 
      * images
      * links
      * video
      * iframe
    * inputs/forms 
    * containers
      * inline container
      * full width container
      * vertical spacer
      * horiztonal spacer
  * navbar
  * lists 
  * tables
  * firebase create account and firebase login
    * how to handle failure? 
  * links shouldn't be seperate elements but something you can add to any element
  * blocks broken on chrome and safari mobile --> and desktop safari
  * give components data
  * date and time menu
    * maybe: http://www.datejs.com/
  * parse int
  * export project 
  * faster iteration cycle   
    * don't fully reload īframe just delete loads and vue and app and page for speed
    * try making style and text changes directly without recompile for speed
  * including CSS link tags
  * beautify chat app
  * import JS librarys statically
  * colour scheme generator built in 
    * maybe: https://github.com/Fooidge/PleaseJS
  * turn all px inputs to numbers with dropdown for px, em, %
  * allow code snipets
    * HTML -> use VueJS compiler
    * JS -> eval
  * CSS
    * ability to set border radius on each or all corners 
    * more built in fonts
    * absolute positioning
    * animations
    * mad and min height and width
    * background image
      * bacgkround: URL repeat scroll top left
      * background image URL
      * background image repeat
      * background image repeat-x
      * background image repeat-y
      * background image no-repeat
      * background image SCROLL FALSE
      * background position x center y right
      * background position x 10%  y 60%
      * background position x 100px  y 200px
      * background size x 80px y 60px
      * background stretch to cover TRUE
      * background scale to cover TRUE
  * more intuative variables
    * add the word "initial" to setting variables in element: create variable X with initial value Y
    * think about: only allow variable creation at top of scope so as to make hoisting simplier to understand --> or suggest that you put this in an event
  * consider blockly-closure-and-flyout-on-hover   
  * focus on blockly after clicking on output so delete button works
    * https://github.com/google/blockly/issues/904
  * add variables in scope to variable list
    * https://github.com/google/blockly/blob/c0053531897ad8f7486a5f197ea3cd1803374c6b/core/variables.js 
    * every time you add inputText, increase the number of numberText of the XML in the toolbox 
  * hot reloading
    * keep track of data between renders and set it as initial values for the next render (refresh clears this) 
  * clicking on html scrolls to code
  * ability to add classes (or is add HTML prop class good for now?) 
  * more expressive firebase querying
    * limit to VALUE
    * order by key VALUE
    * equal to VALUE
  * list sorting
  * list filtering
  * ability to add link tags
  * URL menu for routing, includng hash and other convinience methods
  * inline string concatenation
  * figure out better way to do CSS / HTML props
  * user-defined functions in elements for styles and events you want in many places


## Considerations
  
  * strong typing
    * types as shapes
    * no nulls -> maybe and easy unpacking
    * no objects -> records with predefined keys and key types
  * the ability to drag iterators and function arguments into argument defintion like in snap!
  * components
    * props are pass by value
      * need to figure out how to scaffold the changing of parents variables from child with message passing 
      * (and easy object cloning and key modifying)
    * need to somehow make data variables out of scope in eval
    * message broadcasting between components
  * copy and paste or "backpack"
  * should text be a div with a text input space and children'? inline?
  * raise errors when variables are used out of scope
  * consider combining all font styles into one massive block like the top of google docs
  * close flyouts by clicking on the flyout (not on the block)
  * turn loops more into components with base type and closure with their own data
  * see if we can get blocks not to carry children
  * cannot get keydown on divs because no tab index set
  * play with ability to edit box model in magnifying glass
  * change cycle name!
  * compile to snabbdom instead of vuejs for better patching and instant rendering
    * immutableJS
  * need to make it much more clear the distinction between elements, events, data, and settings
    * including turnary expressions and if/else and for each lists etc
  * Workflow built-in (asana, workflowy, and github all rolled into one and built in)
     - helps you organize your project
     - nested feature to do list for top-down and bottom-up programming
     - includes branches and version control and collaboration
     - notifies you when you've been stuck on a feature for too long and should take a break or get help
  * error handling (short term -> try/catch, long-term -> strong typing and no runtime errors)
  * make getting getting the event.target.value for input text setup more clear
  * the toolbox lives in the mouse/selector so as to help you understand what's in context/scope
  * bubble.is typing 's thing and speeadsheet like database and schema thing
  * ability to select block by drag
  * allow multiple kinds of each event
  * arrow codes to move selector + type to insert code
  * element functions without components. basically macros that expand (figure out how to isolate scope)
  * consider using babel ast for jsx react, make generalized blocks that can be editied and then handcraft as I go (or consider switching to pencilcode's droplet)
  * bootstrap 4 library https://v4-alpha.getbootstrap.com/getting-started/introduction/
     * options
       * 1. add class X, Y, Z, etc, etc
       * 2. or have bootstrap button with lots of class options
       * 3. navbar / bootstrap buttons can be scaffolded with classes 
     * elements  
       * heading 1-6 (get for free?) 
       * containers
          * fixed-width vs fluid
        *  button
          * primary, secondary, success, info, warning, danger, link
          * outline-primary, etc, etc 
          * lg, sm, block
          * disabled
        * drop down
        * list group / list group item
        * nav bar
          * collapse 
          * ul / li.nav-item 


## App ideas

   * Total TODO MVC parity
     * http://todomvc.com/examples/vue/#/all
     * https://github.com/tastejs/todomvc/blob/master/app-spec.md
     * focus in events (might need to give elements their ids) 
       * create a directive focus that you can set to an expression and when true, it focuses on that element
     * trim text
     * localstorage set, get
     * check/uncheck all box
     * window.loation.hash (or could look at full routing https://github.com/flatiron/director)

  * upvoter for x
    * login
      * https://firebase.google.com/docs/auth/web/password-auth
        * think about how to handle errors! 
      * createUserWithEmailAndPassword
      * signInWithEmailAndPassword
      * email and password field
      * login in / sign up buttons
    * add 
      * title
      * url
      * button
      * submit to firebase
    * for each  url, 
      * button to upvote
        * submit to firebase
      * number of upvotes
      * sorted
    
   * tinder for X
    * if not logged in
       * login
         * email
         * password
         * login
         * click here to create account
      * create account
        * name
        * type X or Y (boy or girl)
        * contact info (will be shared with matches)
        * URL of photo
        * email
        * password
        * submit button
        * click here to log in
    * logged in
      * get list of users (not already swiped)
      * place user in front
        * name
        * photo
      * yes / no buttons
        * submit to firebase
        * move to next person
      * have button to see matches
        * photo, name, contact info
        * back button
      * log out button


## Click to change color

stevekrouse.github.io/cycle#click-for-color


## Click for count

stevekrouse.github.io/cycle#click-for-count


## Weather AJAX GET

stevekrouse.github.io/cycl#ajax-get


## No-login Chat App

stevekrouse.github.io/cycle#chat


## To Do MVC 

stevekrouse.github.io/cycle#todo-mvc