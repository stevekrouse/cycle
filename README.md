# Cycle

Cycle - the intuative interface designer.

Live demo at [stevekrouse.github.io/cycle](http://stevekrouse.github.io/cycle).


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


## Customer development ideas

* go to hackathons to teach kids to code with cycle and have them win
* need to come up with better words than "block-based" or "drag and drop"


## To-do MVC

### Spec

* http://todomvc.com/examples/vue/#/all
* https://github.com/tastejs/todomvc/blob/master/app-spec.md
   

### Mini-goals

* ~~todos that can be completed with strikethrough~~ *Acheived!*
   * ~~if/else~~
   * ~~strikethrough block~~

* ~~todos that can delete themselves~~ *Acheived!*
   * ~~delete by value~~
   
* ~~todo is submitted on enter~~ *Acheived!*
     * ~~make event in scope~~
     * ~~add keydown event~~
     * ~~Objects~~
       * ~~create empty~~
       * ~~access OBJ's KEY~~
       * ~~SET OBJ's KEY to VAL~~
       * ~~Object.keys~~

* ~~todos that can be edited in place~~ *Acheived!*
   * ~~compiled instead of interpreted~~
     * ~~attributes -> compiled~~
     * ~~if -> compiled~~
     * ~~figure out editing todos in place~~
       * ~~dom strings not hardcoded~~

* ~~Things needed for 95% TODO MVC parity~~ *Acheived!*
   * ~~input placeholder~~
   * ~~images (for checkbox)~~
   * ~~on blur~~
   * ~~box shadow~~
   * ~~list filtering~~
   * ~~input no highlight on hover~~
   * ~~links~~
   

* Total TODO MVC parity
   * focus in events (might need to give elements their ids) 
     * create a directive focus that you can set to an expression and when true, it focuses on that element
   * trim text
   * localstorage set, get
   * check/uncheck all box
   * window.loation.hash (or could look at full routing https://github.com/flatiron/director)
 

## Post To-do MVC

### Big technical projects
  * bootstrap 4 library
  * ~~components~~ *Acheived!*
    * ~~create menu: more elements~~
    * ~~block with hat call create block with name X~~
    * ~~create block add input with name X~~
    * ~~dropdown to pick a base element type~~
    * ~~create an element that accepts statements with a text input instead of a name where you can type the name of custom blocks~~
    * ~~create an element: input with name X with value Y~~
    * ~~remove double quotes on component names~~
    * ~~smart nativeOn for component events~~
    * ~~emit EVENT with DATA~~ 
    * ~~when CUSTOM EVENT~~ (data)
    * ~~broadcasting~~ (using vueComponent.$emit for now)
    * ~~currently working on: todo item component~~
      * ~~state in components~~ 
  * input text scaffolding  
  * list filtering (and other HOF)
  * prevention of name collisions
  * change firing when typing in textbox
  * prevention of blocks where they are not in scope (or better errors)


* ideas
  * chat app
  * pinterest clone


## Eventually

* better error when using a component that's undefined
* bubble.is typing 's thing and speeadsheet like database and schema thing
* hot reloading
  * keep track of data between renders and set it as initial values for the next render (refresh clears this) 
* inspecting html highlights code, and clicking on code highlights html
* allow users to cycle their cycle project's data to firebase (firebase bindings)
   * on value REF change (value)
   * after getting REF once (value)
   * set REF to (value)  (how do we get ID out of this?)
   * push (value) to REF
* object creation and updating (and can fix get)
* filter function
* get attributes on if's div
* element functions without components. basically macros that expand (figure out how to isolate scope)
* clean up the vuejs js output code
* figure out better way to do CSS / HTML props
* auto add inputText scaffolding
* bootstrap everything option
* user-defined functions in elements for styles and events you want in many places
* save Cycle projects with firebase
  * create users
  * create users "table"
  * create projects, revisions tables
  * link to proejcts with /userName/projectName (with 404.html redirect)
* consider using babel ast for jsx react, make generalized blocks that can be editied and then handcraft as I go (or consider switching to pencilcode's droplet)
* arrow codes to move selector + type to insert code
* strong typing
  * types as shapes
  * no nulls -> maybe and easy unpacking
  * no objects -> records with predefined keys and key types
* only allow variable creation at top of scope so as to make hoisting simplier to understand --> or suggest that you put this in an event
* the ability to drag iterators and function arguments into argument defintion like in snap!
* the toolbox lives in the mouse/selector so as to help you understand what's in context/scope
* make object accessors more compact yet still clear --> maybe just 's, if not, do what we have for lists
* make the input text setup more clear (both setting the value, and getting the event.target.value)
* creating variables/attributes in if/else doesn't seem to work
* else-if compiled
* much more intuative ways to get the value of key presses / keys down
* Objects: create with KEY VALUE x3 and can add more / copy with KEY VALUE x1 and can add more
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
* seperate the set_css block into singles
* better colors for things
* ability to select block by drag

Current state of the art:

https://preview.c9users.io/stevekrouse_1/cycle-lang/cycle/index.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io#DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD5gAjCNQDGAaygYAntgCmqYZOEQZAfWwBDejJRQAJjOUZ1guSgBm6iAm1Qw1AG7HlqC1ZshUABh2SvvYAhGGDJgMnAYUHDqoagAwgASAJIAMgAiAEoAogBy-oIi4lKyqNYYKsIICP5mAJYGupHRpgAK6QDyzZnpACoAmrz86mL0tNQArnC6sdRCtMD4tfV8jhBjMo0xKABqAILJAKqZeUJiEtKmwSAY1XUQDVGb3ZkAGt28AMRmAKzf3-OLdz4+HyYiBKzWfDgMiufBBhXOqEctBqThkCBUpRu9Q2pl26V4EBqgX+t10y0saxxqF2ByOsJO8OKKEJgXRwloMnUwRUIWwUn8wIZYIpMkh0Iw9IKZyZSJRJnRmL4APuTWpO3xPFqEGCcwWpPJq3WD1xe0OxylRQu4qxdypKCer14OwgEBJS3mcOFhrFMIEDOlpgUSlUwjGgWoYB5ylC4X84KNqpQ2R2AFk6X6LQiUJdrkrSXaHW8eGhOboanB6G7AR6hfN4z6JRnTpb5IplOVqOF1OWZLR-IEuSEwhFjXEkmksrlJc2s6VypUbSrNq0Ol0+rwiDVdBg0FWycB43aaWbp4yrVdFwWXkWvp5PNgQHugZ66yKG6eAyUZGUKlU89jRxQFdOh6foeEGYZRgmKYZjoJ8DxFI9TXTOFP2za1-1tQDCw+Mw8PgwUCi9CFgChX1UJbFAg3bX81FGWRaH5A1KUAgBpTIwKbM9UBzS9sOvXgwHUBhywIl98HrBDDSQ2lzRnJleMwpdTBwnhPCgdQxgwagxNrCS31I8UP0o6iQ07Iwez7PgB2CGMR0TBIUgyHI5O4qi21UctsC0uNEMA48UP9SjZVRdEtFzYBlSQjUvK07pxV0ojX29AIgiHcI7UcicXOMrMQvlDFvz4xM8V4WKMHiq54MPfzkNctDFMi-N+MdIFlWfPTJLIxsKKzUz53RbB6N7JipJYxN2M43qFIwpqAMTVSNF0MsK0S0FkpImqSrq3KZovJSr1apgADYHygE6zoukAoGO+9Hz1d1CPW-SUu63bTDnX9iuXdoQPXHgywQbAIHUSRqr87bZPenjZqilqi3LQkoQAWjhNbRGI0VDPIoLZ2-AbvpaX61zAzdt13B7qy2zYAvqyjGrhhaBJ4AAWAAmO70cx98uLQz6FwOwDgJJ3gzHMgBlGoAC8ZHB6Taqh3n6dh5qmdatmWYfLmNqxt6lb6jyBro6gGNG6nTEmumswZ1XHmZ-g6H0XV2prJKXs2iGaZ2-W9oixm7dauBO1lyn9yejGdZ56bA0N2ihpNkbJF8+WJo4q3fcJ1BVPGDAkZDl3w+5saEy9xXo5h-a5qwtWiyDqFtfd3WjJ9mPgxULgIGN02k+YkuLbT6H0Mr-2VOZ4GhhkNAZidhvJPNtUy9xjPBZr3gAHU0C5SIZBkXQEAkagoH4dZdGDgB+WeDL18uUFEGRJDGbB+zSuy7ThP8W8RYS5WUBUipXr2MU4DeQqglUOvcZInk-igag-AABWMhhAYDCv-Yudo2gACEABSmRYhFmgbAhBSCUERXnigTBOC8Hp1MPlX+KhwqZ22OqXgMh7DDkvilMhltB423mgHIsRgGDfg4SRQukc0FsQHtA3h1d+G8HjCIrGYjG5RyXoGcyowrAqBqGYZO41NiJAAGLeEHkIegNRhAdjABoDkjCOi8EyAARTlvo0wOxqGoEIYg5B9DUFkIobg-BN9aFol8X7W2JoNSsPYeA12z056e37lNNRFdwl8NHq1O+khpj6EUR1N2CSU6bAwR4lAQkdwqDgGMMAx8rJV2UqgbI+wUy8CYBQPJcSI4qNSoOV+gFUhtBMdA+Owhd5jA5GySw8A6DfnGXAfwYAtJchqJ2O06hloH1PgKRZQQVlwHyc9Gy6VGzKL1soo5dkDldLOeJG5ek7luwec9J51zm6nLebcj5ekLnDlUZmJk-U47DUYj3CRqdkn-PPGk2RGSiwO1oE7VG1AsARg6WQ2mPCVbpKzszJgZ0EAzC3FAd4MhjqktJR095vpzkv1+djHqKSqIaJmOiMWtBMhDDQIw0qPBtKn0SLZFxfdUDJESOLIJjKzEWJUDqKItBQVkKMaUqVljhARhsdoABph7E8CcUKu07jB4hJIdy5hmoajal7GixJqASmYuHhEnFrVnSulicoyS7qDJkO6PEHK0DjVhNNRqFkGBrVFNMJkZI4tAqQtQCqmVvY5UKptSgJVpjqDmNVeq4Smr6noOaA45xsSyGGv9d-UKgatVqg1FqHUYbXG2tKTIhp9pmY7CQTUNhlLxKFIbfaX1U5hmjFGbocZoThBTI5BgOZCylkYD2WsjtbDkZ8uoB-YS9A7TlWSESCK+AN1Ah2cszsEDALqgAOJDOCeWgqDCq1MODbu7tnUvUpsjdG0pIyxkTPKJO2ZtB5l8CPfO1ZgE1XWMMLvFd1BT7roYFu4BWkd2BAFAe+YwG9mnsTBeq9jKA13rzbVR9xI3U9oMp6lKFHRFkZSj8jK-S2ilMBWGbSkYDDHL0cKpMqYY3yShYw1Sq7kbsbsh0uj9lNhZWcoOm+-V1m6G0Yh6FLbkxpl4KugVIR9UKygde5EFaCMj2repmD1BNNgA6dfRlzHwxsbYbGLDmxVO8bcs2w6RZH66EHNB0+YnaX0cTO-ZVu6-4YESJMaEs7dmrK5DxWgaxtlzsw4RxMKY2ipDpNG7o8EjMoDXr6rIvBDHtBTCocV6psvFpTaK8VpT8OoNyzykN9auM7AlbG5kIXFP6BAG0XR96cipCK4kdI4rtOQ103hm9dDDOOofQSJ9pGX2cJTYYxI2QhtGum6E2b2L5u8tM+Z59BTX3hqzoxrb+nb0Nbmzy6J4RjuHP842KzHWbOsZ5PZ0hKbnNNqxTCp1RZ9CQZ8zpJbJ3aPPbfgyD+N8Q0kPCz1qLx64BQHE3FhLGkMAY9zfgDDJ6UubDSxl3gWQ0tbEyDlub+Wuh0mK20Ur5WejjdLpNjr9XlPRQWyRguNGPZnZQG14LrJuvQj64wwbw3RuVZdui72emf47Zu3tpri3efLf532tbG26vbZNfenlGnBXg-ieRvnSjxLiauUCF5Nuvluyt50oEjvXt8dbG3NVXZLLP16cOTK45pOlP5h-XLwtQK8CWiteg3QTYs5NIvDrbn4atM5ibrpXVm432D4wsP-1I-lnoOkGo9BMBx4Xmzt3Q9OfJ54EwL4Ws09F1d25bP97c9gXzxWDByLWNl6YQnyvSfV619T+riHJFm983xl9NvxNw88E7-QZQZhQ1VYFxi6R-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-j4KgF8EwyVauUJnRQ9rErlhgjsB+gDJ2vBMDWOL-bvR7lQ9yMVbyf+UbrqS7K-V-IjfNcjRpkppVCze6HpVXdbLhf5QKPPYfmrVPj+GEeGefv9GLOEJLDLJbYnQHUWBrJOWZRzcvR1pHXtibTmKkIgnQCjnY7CWCZYhCfKolamoYsLj4uFIjpFvsWMWjs9i4JYNYDoLFuYMk7jjTbycTnSOepkDLt8bljToVjwMkPwwU1oxVRjXlA+bth8WanIxZuXdRuZd6gOv7QPa1GkTuFBCXkORGlGitVXoXXXKZdWNOT8Q1U7WhJ7hgJouiDovjasgYNYPQ6MSjsuUYrMZXvMdExFiAEs6jujuk24Kk9jtmPFpk2ydk+lrk-k1TntsU3TiVmVt0BVgEwrgzQtQ04dsboY5rq1u1uDVyJKVUjUp-TI80rwGzIRZJCIygAMts43e2NI9o0M9VQbj8-yuo2Av81jPC6DX-ciyGNnVgXnVIiAw4xHr2atM04CVUzo8acfbisHTdHdOdKy7viHfbUqY7cYypegdmTnXkQLvnThYZXhTwB7eYnAP2YOXS8uT5eKzXTeKPjy03tM5RFko-K3bDfZWII5feco65bdli2Zji1VPHcOaUl4sQo+f4tgoEja-At4jyQ65QkC1VbU4zVzjwPdpo+M++VwhSwWSq+phusIgq5M72lxmKz1YXQolGxM4o0yuEPM9ov1uSfcVACszIDoms3cWMZs8YqCZmlYgifejqnqla24s60QlE34imgElQvTdJcjf6-06gHG9XYXVkjkmM2HO+RM6KaUhKVKeC3UrlnKa0u0km++fC4i0xsyloos8W0i2hPGlCPQIOGExgm0G0MkFWdoggJkNYiK5Xei9698xqGoyAho7Cwva4wu4MuI+2CEAMWEx9aG4XZ5t5qup2wi21uiZKl1uyJyNyJuDiVm-EzqWAEMSMYWxsxMW4tMeu8FFe6o4dhawG4O602icCaW9Kg7DMJyGSbw-u4ezwIYnsNGgB1MdaYR5YsR8oOoGR3Nnuwe0VjR5TnO+ZSmwGiayrma+Fne7i+VXGdU0y3Nofbx1dbg1zU9kvYqoYiCemmW-CTmoiYWn3sBx1raw299gLs2562hBi+hVEl9gB927oxK-ozwH2zBgO-tR6kGymmKTfGO2CzKX+VCzwGzPXbJw7fi3ZZsAMqp0eW3O+4Z32l+12WGzwL+8EKDgB6kEB5E2yJI6oJB1ynEyjmaSEPB+s30bTah+l2EjEwc7l30Qk5NUk6c1jnVyk4h8VzcyTjwHkxU9WEUwVnTiNmNjW+Xpe8o3U0zcJ38+qy6a41aeF3DkEyoMx6R4whx5R9R4M3R9MTaWp0R9QCR6x0txR1x2t4F7y03PyzU8az60RiZti6J5a2jbeZVfG1S21BN90ntZMwp68ug6reHW5IIOMrq1vagPDbJsuws5m8p2h1mJuzINu8ELuwd2uce6e3yLmQ95JzQhh5ize1h7dzh854+0FwT5DpNXaIu5+ZF2AB++9ZpUfdJ8zIl8TaZil2l6YqB5lyoNl4c-l3B6gAh+htc1aVDzKFj+Z9d+a3j+t6kDN5KnNwt3t-est4d7R1G1aZt4E2W-L2x3tkr1R9xw+0Y796Zw+YJ-Uzjzd3FGJ5UxJ4y6OZ0-gsd6gx92Q4p8gyQ5M8Q870vTSkvfC4aSEaY0bZ49HQvmugMXsh89+89xyCDCZQ3TMxrR-f4SF9vWI6GS7bPhY2BFGaDJH3F4XSmSjGjFGym-1DUEJFoID1NaI3ra+6oB3K2ee7GyG-n89wgLQMIAB0qxu3NyE2j3aDCRiSLns0jlVwusc64Ckw1yc01wL0W613c51-uN17TrwGU-1-d5Ja228de+L0do7yKQfe0-Y-b1EVyOoLgOX5oDIERfYPQAANSwAADcWkZgYhnBAAZNqE-wgHfzAJAIgFQCYAcABAYgGQEoA0AGA+ADmHeFv70AdAZMHcKgBZjeAoAJdEvOcxQE6B7AdQIgN3g8AoBkYDRKAEQLELnQ7w50CgF8BQAf9sST-L-hgCf7CAagHfZQFAGEAEDbwOgBQCw1QG0BeBOgLUBAFQCjMdAgQUYHfFQDvB+Ay0dZNQISYSDaSiAtAHzxQD4BaBjAhgU-w0A7goAQgqQV8F0DCA2Y6gXRHoFQAphH8bMKAGzC+DJB2YUAR-EwBsGP4oAXwY6BAGRgswoA3gjmDYPUgUAWYyML4GzClhqCNB9A7-nAIiEAd-eJ-Zlq1C8xGBL+FfG-r-wf7P9X+7-LQekP-7wAhiwAvAIQBIBEByAVAOgIwBgGeA4BCArcEgJQBYC0BebDAcgNQE4CZAeA6gAQKIFSEmAZAhogwSoE0C6BWg5gawPWAcCBB7A3wCgC4EsEph+glAKIIUHUBJBKAElPoE2FiC5mqwpQXUJUHDFwhIwqIekJiEH8pmZ3JkBDRspV9ocDlOvjyCp7RcuMsXAus90Z7JdVeKaVLm8zK5gdqGXPMfqslg6FdmuyWIXmVxH6xNoOeXCfhkzOaNcrm8-XLDk14AdcHmtBJ5lLg37icL2UlHfph35TjcXGRPaNlUVawEctuTHHbix2160Fdeq3FXnixK4McqRlSWHju2XK69YSXWKEZVxhHVc4R9XNJpPyRFIcURtzNEfcx4bU4eua-cpnn0rxmc3K5vMzMSMDbmUJmWoodhRW9680vebvD3irXuqasmq79CyOvR6TINdageCnlnSFZktkOXbFvm8NP5F0UY6AsusyKdH95beq1Z7kwEELx8BW9oxvv3xwIdMEhAiWgKxwQDh9OwXfR7j22e6x1aAehFmAgGDFmiSWDo7-OS1wLKtC6i+RMRj39FuiuWbLS6Jy2DpZimQHjWgibRz4xlcR6PP0cM2e6F9aSxfb0Sm3rEtoTaygxUYWOe4sBPAAAUlrEfQM+vJLxuKB8ZqoYxfRIcT3zLZ98wmg-EDsP2-AVdueQoqfiKPhFgiCcEotruiJlGPM5RpTBUQN19FDc5qI3X1o0wN4AsCwx-OnoAWZjdM0AvTCmN6INKDNIx9PQOMHGfGncjelEPsXaBNqpjlxlEeNGuOLaQjtx+zXcYkxn42ADxpzI8eMRPGL8MRLaLEVeJxHW88R2-JXLvwOxEj5Gr3FznhxVJvjKWbo94LoBYAsSWJsQgCfEKAlFh3gLMXQHxL4mgSqKCfNuIAz7SH0h+BnHcUCKOZoTRRCI9CUV2Sy4SpRS-e9IRLWzS5YJ53e8Zd22iqj9+3o5NqaKZC6BBAY9MQLcLhrIUyJSNbHnv2w7aSmQuzZCaPwFHj85J8I6fvJOwn3pUR7XaUS7BX4lNNJxEryjbzvFfNCRao6iSSJO7E8+W4E7MY8Op4+jXhw4t0R8P-ZfCBcPw3Tjs3Z7gcsuAxHLu5OBGDFVBvkn0fR2F6mAXJYWFCTJJq7INERCknyXP3FFzZ-JZ4oKbKNX5Uc+uakn0d33Q7Dc9JgCPfuqNw6uNh2+HaXox3m40jFuivRHt0HSCHApe6vWbmWy3acifR3IySQjkallTZJtXRSd5MPEdSWuKkgKUNOCl0h1+Q0tFviPInRTDJNEwnvFLJGUYdRBDA0ccnd7vcgZ+o4GX9NBlydSGL9EyW-VUD8AtI2kCataJ-q190+gfV2lnxjqwRPK+4Z6VxI-GtR3gwgYQCwHUAkzJxX4NGZnz+hgQIIogEYOMEmDTAr8N4kaTZ3i6fB8IJfaGRTIJhUyRYofOMUuJZlJi2ZhdYwASlWDBByZ7kQVmGLCbWcpO+MuFI7A4pxTLSDLIZkkUlZqs1Z4iUvi2UwJ5ifRCsu3lGN4DIgMBJYtsVrLs4NFnGGo1xvrNlmGzc6xsl0RlLNkHYfaf4jWYBKVmtIaxXMy4TDO7rPD7S742gqpGeDSzrh41Kyfq1ECGt-6KUsOYBHSlPc3RwOQap8KMm6jDR4MqWoDJBnFywZJc7mnqNLmVyIZ-0y5EaOwbK16533F3hHAoYhgOeXDa4HQxQBMA2YFAJhlABmFswg64XKdppTYryV8JdoPhgI3UDCMU+NfW0RF0oZFS1KbVWqqrOrBOzl51DaRqPI4aAUnObjCOtOPMbUzMZzMzfn7TxmRzmYT+F-EHKSl1iT5UdDGabSuDzi-GQsy+QnQjmalgJANHsdzJlmhiXZTfX-O7IzmezixOU0ib-PtIyFrothblrrIuGPyQ5QKYVuGPBR+yb5rUaVqJBgWtjNZejVSAgulnZFcxrs4NgWMgXcSBgKs2gMjBjFlgwwVs4hbZ1IX2zpppIreTmLln5icFf85WQig3ncKvpuMjXuCUTSQl1xETNkRp1sSVskS1bb+ZMRek8kVR687GQlPpYC53OTlXSRRI6pAVzhMbV8WDQ9l0La8cBQkA0CcI2Evg3BFmI-icUuK9C7hQhXaDiFwKa8ozISUfOJahywmEkgxVFPslaUTFucquYXLrlEMG5cSxuQkvk7Ny7RbcleR3J0AECWAz+ZhsMVYBiE15PAH6owv+qHzeG-DOkLPNiQEsd6qM3mTOJD4wThZpY9sUxOfwBdAFwc93CApzLyyIFyYt0SUSdKeKr5Pi4fLeC4U6LhJIYgBrNF7omcBlns2ICxzTFQANqkGbaucM94+985L4G+FjVCT6AzAQcXYnjS7lMAWY2S3JRQCHkjy5s-5eTLPXgjgZX42AcsFCF0CtS0BqAMQqgKID0NbovAHxggHZA1Bj4EgNAESD0ETAO0nYUgPCvmAvK6U8LcrLEFYhLs02LKDNrItqlxo5uu0+HlyMR4dFkeZ7LBda1smPlNFyZRyaYs+m7l55CLF9mzxFylBpJJ0i6VhKunKSupkongOtmjTM5zxmIy8Y9L7w1YFlOksJWLyLpfEUFZi7CBdh5Ei5-hEHEqdzxBGVTuVBOCEZSofFXcaVkvEZdhkpGSLqRu3OkS2gZH69jVkxDbgtK177dOOevI7lEsdlAKBO402Soast53cWxW-MZffkIr81PuzuFJUvLSXUMMl5yuYTMIoB9yWYhSksOsgLyTzAI08ukGWHsBzzSeyMxeVnmfnB9X5VjDADY0PkSLGJnsgYZMu+mJS6lM+Bpa-KaWqK8S7C+LvYsfyOKfBbi5xfwVIB14hC0syCULBD45hza9Acss0utkkLvqw4URVMoCUiT2wYkrjCEtb5uiziwa+JUXMXq7Law+y4dN+kOUDlTl8yLub8tQFxrnF6vLJmTUuJKYmSNxegFVL3l0h4SGyuks8ojCvL3lu8L5QcN+UICAVJiYFaCvBU7goVZgGFX0XhWkBEV365FYytRXorKVpvUbhqChBEAmSTkuqYVKjVkqBQSlIBbM3TZsoOUwgUqdSpqDiqxUkqkXmNIolXE5VDs0kc+wxU7CV2EPFNFsyQkNS3JFJZqcci+WYTZ+rJZEbytPGBTCmfUkpmKqnWRS224S6jXSpJ5IzEw5PZVT4jZXHSBNImsUddIk10gBVa4NNYmEIlyaW1IqWjeoqpWmsMNHQ7DbapUhKrPmimmVcprdWu8AZNculAXJlqGiyEWQboPsHSBEtjeDG5Gphsc2eaW5jKA5eiCOWnrMlfgAeagGOjHQxC-PW9fBnvWMlKa8wamtc1fW8BqSpxUzJmNiRIqMobyuAB8v-U-K-lwGoFWiDA3rAIN+8KDXAFhVwBYN8GsALXJRVvM0VNmtDb6yi1q5-Voyw6eUHbkEaF1pfMHioDI2cpkaHmybYmAlU2b9V+klInluY1iKGVua9TS5usyLbV2PonjWyIJW5pRSxK6bXyNQlnT5JnK0TVkxuk9TpNF4-qRZvW0UqEahi1bf4ombPtcVnWVla5OhG6bzm7UsTZ1L2z+TjNQq3qV9tk3XjLNKATbXqq9XGYeA42-bQuu9QnajWAOpTUg2807LydZcrzbXMC35MQtYW0aSTplV478eta9ms9FgA8AgAA