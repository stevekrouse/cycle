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

### Total TODO MVC parity
   * focus in events (might need to give elements their ids) 
     * create a directive focus that you can set to an expression and when true, it focuses on that element
   * trim text
   * localstorage set, get
   * check/uncheck all box
   * window.loation.hash (or could look at full routing https://github.com/flatiron/director)
 

## Things I'm currently leaving simple (and ugly, and not easy)

* HTML props (including, value, src, href)
* CSS properties and values
* including CSS link and JS script tags 


### Big technical projects
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
  * ~~change firing when typing in textbox~~ *Acheived!*
    * ~~there's a chance that we can prevent this by looking at the blockly event~~ 
      * ~~update blocky to get new events https://github.com/google/blockly~~
      * ~~never mind, I just made the debounce 2000 miliseconds instead of 500~~
  * currently working on: input text scaffolding 
    * ~~remove value block and make it set HTML prop~~
    * figure out how to add blocks to workspace
    * detect when input block is added to workspace from pannel
  * prevention of name collisions
  * prevention of blocks where they are not in scope (or better errors)
    * THIS IS SO KEY  


* ideas
  * chat app
  * pinterest clone


## Eventually

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
* list filtering (and other HOF)
    * design block
    * figure out how to add "element" to scope (or another thing if that's already in scope)
* better error when using a component that's undefined
* bubble.is typing 's thing and speeadsheet like database and schema thing
* hot reloading
  * keep track of data between renders and set it as initial values for the next render (refresh clears this) 
* inspecting html highlights code, and clicking on code highlights html
* allow users to cycle their cycle project's data to firebase (firebase bindings)
  * initializeApp 
  * every time REF change (value)
    * limit
    * order by
    * equal to
  * after getting REF once (value)
  * set REF to (value)  (returns ID)
  * push (value) to REF (returns ID)
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

https://preview.c9users.io/stevekrouse_1/cycle-lang/cycle/index.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io#DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD5gAjCNQDGAaygYAntgCmqYZOEQZAfWwBDejJRQAJjOUZ1guSgBm6iAm1Qw1AG7HlqC1ZshUABh2SvvYAhGGDJgMnAYUHDqoagAwgASAJIAMgAiAEoAogBy-oIi4lKyqNYYKsIICP5mAJYGupHRpgAK6QDyzZnpACoAmrz86mL0tNQArnC6sdRCtMD4tfV8jhBjMo0xKABqAILJAKqZeUJiEtKmwSAY1XUQDVGb3ZkAGt28AMRmAKzf3-OLdz4+HyYiBKzWfDgMiufBBhXOqEctBqThkCBUpRu9Q2pl26V4EBqgX+t10y0saxxqF2ByOsJO8OKKEJgXRwloMnUwRUIWwUn8wIZYIpMkh0Iw9IKZyZSJRJnRmL4APuTWpO3xPFqEGCcwWpPJq3WD1xe0OxylRQu4qxdypKCer14OwgEBJS3mcOFhrFMIEDOlpgUSlUwjGgWoYB5ylC4X84KNqpQ2R2AFk6X6LQiUJdrkrSXaHW8eGhOboanB6G7AR6hfN4z6JRnTpb5IplOVqOF1OWZLR-IEuSEwhFjXEkmksrlJc2s6VypUbSrNq0Ol0+rwiDVdBg0FWycB43aaWbp4yrVdFwWXkWvp5PNgQHugZ66yKG6eAyUZGUKlU89jRxQFdOh6foeEGYZRgmKYZjoJ8DxFI9TXTOFP2za1-1tQDCw+Mw8PgwUCi9CFgChX1UJbFAg3bX81FGWRaH5A1KUAgBpTIwKbM9UBzS9sOvXgwHUBhywIl98HrBDDSQ2lzRnJleMwpdTBwnhPCgdQxgwagxNrCS31I8UP0o6iQ07Iwez7PgB2CGMR0TBIUgyHI5O4qi21UctsC0-sgiHcI7UcicXOMrNZVRBVvz4xM8V4LytO6cV4MPQDjxQ-1KMU4BlSvR0gWVZ89MksjGworNTJULgIDo6gGKYqSWMTdjOLKhSMOy-N+Ly+NdKI19vQahNNjS1y0PC+UVC0XMOoAmL1TiuBvIwRKrl60F+pIkrQqZCraOweje3qlKmo40bMvanKuqLDRdDLCs1tEYjRUGmSTy4tCssuxNVKYAA2B8oD+gGgZAKBfvvR89XdQj1v0gatveyi51-aLl3aED1x4MsEGwCB1EkZLENS5CzqzT7Ou+gSeHLQkoQAWjhB6nvfRHZ2-ec-xmrDE2AtcwM3bddyh6tjuGkntvPaavseKmABYACYIaZjbnoR1rTGRhclLtXnQN4MxzIAZRqAAvGRCek4nZIlniLopmW8vl2WH2VuHNqM1mdo8jmarqyQ4yJk6Woysm7dmh2i34Oh9F1Aqaz6t3ntFk1rc9yXUZUqm4E7c3hf3GHHpVln1dbYMff22rDv95ihtMZrSbai9tau3hxgwWnc7jgvmZeq23pL9Cm655TUFU7OoVd4qPYHiqqt9quA8toOG-T5vKby3GhhkNAZhjyeDOTtVU4H8nw8zvKAHU0C5SIZBkXQEAkagoH4dZdBzgB+ff4enkOmVEGQkgxjYF8oOOydo4ScwHuNZQkUpb2xNBqeKy0kp5xrq9dKmYmTUH4AAKxkMIDA6IpqL0apsNoAAhAAUpkWIRY06oBwfgwhxCoroMApQmhdCV6ImEnKWBk02HDyQhqGQ9hhzfxIofFA9cbaD3gWfUeVMjAMG-JI563ci692XnI0+3MI68B6mg+OsNJKaMTsXP+gZzKjCsCoGoZhSG11QIkAAYt4ORQh6A1GEB2MAGgOQZ1QB0XgmQACKFsyGmB2DwlATCCFEMEdNaRnDaH0OgXwiKSSgnbHmjwMREjjHmMktI2RDD5E5NUgAyQ0x9DqMKgnEpgdNgUNiUJHcKg4BjDAK-KywjALZH2CmXgTAKD1JMYXCxAQ-LgMAqkNoHjykV2EPfMYHI2SWHgHQb8ay4D+DAFpLkNROx2nULdJ+78BQHKCMcuADTYY2X8o2cxCNzGPLsvcyZrzxLfL0r8hO-zYaAq+R7F5oKfngr+ZChO7zhyWKwYGb2e0DqMWrtozYZST5h30efSO0dewM2oFgCM4zpEjV0dike9oqZMABggGYW4oDvBkL9FlLLxlgt9G8mZcLDLkSsfIGxMx0QG1oJkIYaAcmxR4Npd+iRbKROcSgZIiRDbpIFcyag3jfE6iiLQNF0i3GxK8T4vxATtBr3Ic0UJETjHSJiXImBaJsmWsQfrGo2peykuaaYVpFKh7S1xU6F0HLxJNKXo8eIIVylOtYQonFaoNQsgwN6iNphMjJENpg+SpgTU6t7Hqg1PqXGuONVq01wgIzmpySEng4TFV2gdTGzJE0SGusTe6z1sd9QTJ7tIv15S9FUtUjsQhNRxGhqKgfYt9oo1TiWaMFZug1nOuEJsjkGBdn7MORgW5pyx3iLprK6gnNhL0DtMg5IRJpr4DPUCa5RzOzsMTOqAA4osjJyIsltv6XNJN17J2NOnWm1AGas2xOWas9Z5R107NoHsvgD7d0nMApW-xhh75HuoO-U9DAL2LS0lewIAo73zCQ7c59mw30fo1bGl1v6xb-uJEUsNBlilsdYwNdjA1YUBTmW0WJu0wzaUjAYJ5Ti7TJjTLEoduUizHrpmJuy4zeP2U2EFZy86Z7ezOboexBH41Uqk3SY98qQgNr7tmtydGf2Bo7TK7D1AzNgHGWrDVQnwyifEbGSjphjMycpXJ3gwDdCDiw+-FTPK+OJkgca69cDEiTGhNum5JyuQ8VoGsK5O6KMMdMCmNoqQ6RZu6PBOzKAL5RqyLwVx7QUwqDVeqUrdqZ0qrVbEmzQjyvSuTamqJqAdjqoRagZN6Jyz6BAG0Rx7aUA5FSDVxI6Q1UWbmsfWjLaBG2YQfZ3rLGp0DWka4xI2R5uOo286rbijckalMwqvbQGuOcakTO7oAmztftbV17b13eAFPCIBh5UXGxueG+5MuoZPM8m88kmd-n-WGaC1jMTwRws6Xu6YgyqmIEMigRq0bSTEsTZS4+uAUBVMZayxpDAFOLVkZy0+vLqACtFd4FkArWxMhle+5VrodJattHq41noK2xZrdB51hHxMmMpvR5M8N-WUCDbi6yfTE2ps5LmwtpbzW45kvFs2j7m2vtXZ6wB2XfaZ1HZOx187capV5Nu+Z83WjuMkW5WA3lnLnkQq5eJVTnygT+75aVdzSLzLdihH0rHgENOTliZrTm5XdaYxundeg3Raoi5Tv3DVsmW48CYErZ3UyQc5q-D+LWjOgLoz5rwVP5Z6DpBqPQTAWej459B3n9eRYmBfBdsXqe-LQcJ5ycnsC9eKwUKJSJtvuSxdl4qTNn6Reu5PdVr-Yf7MUYzbH3X3TDflBmBl7rmd5LB2Bfz73-vq-9vuyHwvkfO+a96x4JW2Ys+z9YoDd91S7wADsABrmG+C+u0lQ88qKEmbEp08OlSVMUctAMcWG2AfWSqn+ueF+3eIydKDKDQzKrK+BQB9+bkoB6IFcfskBOi5+3+V2qkUcIAdMCA1878RAKBGCAW1BCa1KeU6ktKoMvBUADAgwAAFJ4AADRQBiESHiGeCkDywACU0hUAAAHADOpHTBQADJ8L9GYNob9IoSwMDADOoQDIIeoCIdIRYRIbIQoRIYDP9KDGofYUyjoS4XobYUwH-gDPLEYU4aYeYVIQETIfIYQSHqDrtOHpZKArZMOIFOOJpvHlvpXkns-pjNjJvATC1iBnPh3gvl3gYtTHAB3AzAyCEXIiQeAUdDOpiugRwcOlTBPvQHTIfsfj2q7knKfvrl-pLpgTwH3pDDfg9nfqESAd7FlNIqpFQWULgtQOWMTshqTjULZMgCgBQNlqlncuitEqkKkDRqDvjsoBWDuBQaLjkW5JBsutBmui6BuluohvTqToBEMLuoeserhueoBJeteiRgwPevcb5gNukO+jbobhdsbpwabsxgMRjo9rfhomvv8YrtsUwGWtqioLqsJEWlkUap4uWr4mhtWjNrWvWpkQrk2gPPsWEPQEcQiWgaDucSuhstcXBghsAORihomE8eOjIKjm8fhktERjeqRvgGyRsfaoCbsQvhLvbtLgDnLhxrCQiQOgPO0mgJ0t0r0jkoMsMgXrKRblkd0HOuwd0fkVAIsU7lCXKQdjOmBlZh9BgSaWaWAAgLqVovatsfLEabAXlFAM0S6VMl7gHvMMCoHkDvCiMeDhEZHlEU8rEU5HHnIo-lXrvljESOkR-p0TUcaUGgUUUYzAPgZKXsQUimAWQQvAidUZ3vadmTmHTJYM3nAKwZZp6UvlTCsuEF6vmT-EQWhOUaWRAeWdAZMV6ddPvhWE0TIEfo2atqcXabUYjuDNfq0fCcHmUUisJhGFGOJgiXDkOS2XlAplqDqJFh7tFupnEfGeUhVLpvpktJqamHSIeR2SflkbSZKbbvRt1nko+d2tDMuYWT2TprdDeT5DNnDruu3J3D2nrvPm5Hkdmc6K6J2UMXInYGGPfNQEQCydHjFjjsCfws6oqFXtKt+emTBbOVmUonlAhX6UHgGb2kGdCoDiecDsAUWeDuuaJtGMOMcX5vec2VXqpAeR6keUhc9NhWeXGdGtpmXNecgnedJpqMJU+VBR0WRZRFKTNsRUpT+dWG0WGWxe2LJQZvJSZoscoKRTOedHOfnqOs8ZBb+QqSueUqhdYMwVhUDtjgULjuLu+YRZ+RqCRSSagRmZWdZT0bZVyTRaGfRfgMGQxb7npEHv+SZGuZDkptxduXxTAXufJo5nTIFRaT3OJaYLHlJaHjJUBXJaBVlQVSpS+SFW+SCXbppV+dpaUZeYBXplVVXmBWZfZSLKpZZaHGFfkdMOht+PfO1cqeMK5Rhe5cxZ5WIN5Y1fhXAtKZ2iJc+Qrq+bBVWZRUWGNbjBNboFFcxYGbFYxSCglTCtFXRXdT7t7lCtdUCpdSGWdU5dJTRBxZuXZDxagDuV0cObwMGMJHTO-BPKJdZB5THueWVaDi5ehZhdGbMjhV5XhVkn5d9hCS0e6NBUNUyPSZcbBpuvBnMXuo8Qetya8f4GenyYRl8UCEKSKQidRujZ9hRT9jwLtoVS7sue7tEeEOdbRQ9edXFRdc9VdY9QCq9fFVLS9RLUCGLWLcLU9XLZLaLTLeLWrYrZrUlaxQBRGV2JEVDQtTDZJVphqomckauC-jmM6PWRZbaVZRzapG2ZtUuY5clWzBXont9smUJCJHABnsgUFWwdlQJVTL9H0VNZbYkb7VdsmW-nBKHU2eHeVr-vwGYJnZnTHWEcWaQSipUVkRWbkXtVwUWEUSWM3q3pDZse3k7cNS7TSqQH-rneGTRJGb2MjTEWbcFBbXnWXGMS9lTLuRHXlKkOMCYHTEoD4oUM-PfIsRpBcmjjzf6X7tFV7V7IbRZFGSbQLWpiVbDf3e3aoEPfqSPYDTlbwBfMiFgGEC-JIFAIbMEOIlAKxFBNYKdfvfpQbR3UbbvdMqbQ5EfYJqMe1OMRfZmUDTwM0MJBENQGYFABnu-FACmFsLEF-U8hrQrbLdg9rbgzFUrbrbdSLYQ5rUQzg1rULSQ7WJ9SGByIOD9dxTAKgEwL3n-j4KgF8Bw9VQpQpulf9sYuVhQjsOBimfYPBMVWOObaA+Dgw9yN1eVmBY5s5vBJvaYHRpjSbg7iowZitDjQNfVWpY3dA23W5FbX7SkWBAbOEMbGbI7fxenVTE7IuQ5YMevt2UjHHaPlY7wDmKkAQnQCTg4ziaieifqn9SgNieUvjlNITslncesWTkDi4JYNYDoOluYGk7TsKX8VXsznSK+pkDrj2uVjztVjwMkKIyU7jYNQ3TKO+ZduCTo3KndqvWYsueMYaWnT-lTEUTuFBC3lOZsDaY4703lOPP1fnHzX+frSZEKnYg4mTScgYNYKw2sSTgiW4hKW5LE9+PEyAMs6TuTlk24Bk9TtmJljk8zfk4VoU8U1zlduU3znVg1t0E1iEwbqtR+VjS005m0x7e4yzUNgviqWqT0l3aBUMrwPLH6ZJFIygPMjs7-Z5MZXvTGb3fEauWXHPH2UXQriXbtSNdmUYu08BttQ1dZo02CVStKqZno6gmS12cMQZSGCWYXZiQS4OZfWPSObdA3sM9nvU6vLyyMn0WDBDIDOK1fv0YC9CchR1eDuy5XP2XXTIty1A1fTwAHd4nAOOZObXXjcK7bMS-tbwLeK47pbM541mNUsAt3aeaYLFu9t81o80zdro0tPo58wPPEiwvRiktQmkrEn64kj+oG1wiC1S01T89o6ItDoK6gIS+RdAyolNHC+S0qsm87dA6S3K5aW7tayyz2Qs2NtNqyfcVAKszIA4us78esVs+4iiRWlWsJLTuVkSbaltUqmSRqqG81Wq6ktwi69+jSyIr9gm4a1URq6FU3XlNUrUlM+dR045f2m0lyKqV0hC30ko9CwXmMrXXpYA-vXaEi4JqW-YuW4ak26E6alCPQIOJExQm0G0MkEafYggJkP4vi8FcYw0zG007S384ll64y-mz3Ee0ewi2e9i+2CEIsZEwDZq6KzwCFmFseom4i4Nr23sfFuUPI6oJuNSRW0k46csasfW5s2qzsNsci+pdSxzXS56wlGB24-K+0VkTR6kMibe74lHDMJyCycIy+2+zwK4nsFmph1xx6bxyoPx8oOoEJ99s+6+zVhJ5zoe0WyOxNG60Bx63Kgy6tCndOca4vih36crTQzde9dezxzE7iWam2zWtanWl23VaSSG3ggkgOxG8G9p0box3kn9gY9M6u9O8HLO9Awu9hkuzFSu0C2q0qRqmC1uxqVC9qfLK3Zp45dB20HZ3QzyGAAh5lQpaPU43lGhyjhh1O1kakNh8rokuyJyNyER5KokyTqaUsagBR3Tg29R7Rw13Ggc0c8k8xak2c1TuN+k5R-MTNgU7wEUzU9WGU1VnzotstsZycaZxpURcBwC2xwW3CWF5x0ic23x9QAJ4pzkip6J+J5mhp0y89id6kDJ-Z6ifJ4J9dyJ2p-dxm8y-5wRWO1Ln48xygkZ922HWV+M-Qtl9LZQyrXD-g-gHrTa0yIIGsg6wfagM65eRe0s423R1mHmp0jIA+8EE+99-Dh+1+3yJy7+-jRowx+tQ5gZ6B+D+B7zY5VB9DYmDB4q3B0VzDlkUh5F1q5V1TY5ph3V+84N-h814R4sW1yRx12R91xs7N-1zsWzQF8z-S2zyF8u5m42qd7Jx91dzNjdz95JzV6Se6Wd3Jxdwp0p1dpb2J+p39wq5+q60D3+iD6zyx+z7U0Ywzya3OzD490d4j9Q+9fzVg2Q5QxQ0j5ZzH+ve9Qi6Mwmd40-jbSnieosbcj68h+V0WByHjHZWYyix2P-ZC8exi8AzI5nz7T4zn2BGkXjBkRD6nVDzQVTDTD2MUQUBXylWXDUEJFoJj7GX3bI+2Lixy5E9myY1qwgLQMIJhztWhMT+E3T3aNE+SXh3E0loc+1-MaN-vVNzYJk64NN711R+VvNzwIt485wc87wFUxt53yZ9r6CYF-p-8+aRz2vWO4K4DScNUuqa3Lq8BQsRgXAKP00AyBke9gegAAGpYAAAbi0hmAlCohAAGTahUBCARATAEgCIBUAmAHAAQGIBkBKANABgPgEVh3gEB9AHQALB3CoBZY3gKAFXRbwXN2BOgewHUCIBT4PAKAOmIXigCiClCgMO8IDAoBfAUA2AqkqgNwEYBUBwgGoCv2UBQBhAwg28DoAUBcMOBtAAwToC1AQBUAkzHQIEFGAAJUA7wfgLdDORyDkm1g7kiwLQBq98ACglQcoNQEaAdwUAUwbYK+C6BhA8sdQI4j0BM4-88sKAPLC+DJAFYUAP-EwFiF-4oAXwX6BADpiywoAOQxWLEPUgUBZYdML4PLBNgoBPBignwYwK8GoDMOGfbvpwVUhQD1AMAsfvAIIHIC0BGArAT4M6FED4AyxMgXgEIAkAiA5AKgHQEYD0DPAjA5gVuFYEoBeBnAmttwLYEcD+BMgQQdQGEGiC1CTASQYXh4KyD5BVQvAWoI0HrBtBxgrQb4BQC6CBCNwwISgAsHODqANglAMyn0DfDLBGAFwXTDcEeDah1QzobUI94eNi2lEBGm5Qn6AQceBXeDkLwVwi8wBYfYLNgCgES8IsNvJVNLxw4L58cTXRhq1xG6q8Vi6vXLG6S16eJ9++zQ-iNxOZX8L+FzJkRSIZx387mC3B5kI25yrctc7-dzvT225M8Wqv-VRrD3Y4s0Teb3U1Gb2d6cFXed3a3hHylEvd7e97R9oqUp4xNaRGAYbsfz3SMjsm5zc-myI2IciWcD-bkXHBW685X+1TQvj5QA4+9GMfvP-i5glGHdDeMJBLrHw+Tx8keCPeWoGI3pzNyoYeavlHh54SUp+sHNlgXRVY-s7QC-RuGiK5r98uBNdFUWq3X45stWTAWQkP3DFKsEx5BAchF1RGptaAinBAPn07Br9KWKbLVknVoBWFZYzpWuuo1Lg0RlWZYtVimJFbF898-Le6DiMh48shxBecVguT4LSto6nYsMUyAsYJ1fGKZHGO30dGVitWffemHmWzFdiUAy4zgsmTcGbiiWaYlgJ4AACkRYpcVnyTKrj-GgTasfMTPEb8HOW-SJrvzxy6j9RyvE-kaIm6X9jRM3XLBaPuZLd9wtoipm-0gk0lGx9HZ0T-zdHijsxR7LpqAPPHQN+maAQZkLGzHSIGhE46HrwEmbgif6XjJvtnwxhgQWxb4yiJvwLQYkvxpaGkSrgP5E4DRJyQCek0m6nNr+uTPruBK5FwSq8L-Spg6M25Csv+A7fyihP25WsuenTF7N00aF1E8o7wXQCwC0laT6h93MZj3w0myxdAxk4yeRI+rlV2wZ9YAZA1w7sS6RnE-8YaJSb8TmRpo0CeyO+z39H+PIp5nyLE7rdRJRrGSbG3dbyT-+B3CDlp3KS6BBAM9MQLCNRpLUQpuncdizycyGcDeOYhCUT1-H0iuJxzFyayL4msiPJ5oryZyKtGiToJa3bXPRLCgijduYohSaF19HRSERgvRDllTUmI5xeqOKXvVzYmNcCOKgEkQVM64hByOZo1UYTyZB7M9R+UpydxKKnGiSpIEm-hr2ElVSn+VKcSUdjqlST66IUwDmlMdwei0Jyk57vlzxwOc5RX3VTjwG6DpBDgUnO3rJw1Hk8tRD0nUfZIWmOSRSp-J5KaLWlnMypc3SqT5JtG8i7REkgUUHwpZ-tGeSE3XioxanejC2SkzGW1NVrR9v6AYvBgTPxlEz7qOM4manzxkHiKo-ALSNpHmontMWF5AeEeKpSJ1YIOlfcMFJ6aGSiw7wYQMIBYDqABZt4jWPeOto0SBgQwUQCMHGCTBpg7+Q6dkVM5wUzWPAT4PhAXGo8RZVEh8S3zrx59XxCs3MYvxQ7GB6UqwYIMLO7HxiKi2-KAhWKwlat4Ce8McV32InczeAK+AAYPkhHFiexpYssv2JnZbiUOyIbgQ2MRmh9oGheS1q1MlEWSB6fsm2fPyDkOyUO2kEOgRLqYGSmhNKecfuMXGIpB64DYenlB6n55nglslANCLmqJTNg8IyyaoERFdTSubsnOXlH0AYZ+pnot6njJJlR8yZpMvucGMJl+jPcpDIeerRipBjJ5E8nWgn2IYp9aGDcuXowwEbXAWGKAJgPLAoAcMoAdw+WFHTs5KMsqQlLtDtLtAiMxG6gSRtGMPoN9+e9DeXsBQ5pw5aq7oSmUihGmKNvsvVCCmowLnl4OYzfcWa-jZn1TUx0Df-IAQ1k+y7x2ssWbXhlTigAmlaF8QX0Nk5SIFWrMiTArjHlw5+5Y7OepL5Zp5w5IfMzpOI0KgxPCsrSKVog-klik5hCrmW3KLA6tRILsz-iwuIUeyM5XsgsgArByJy8Wtsygq3J4XgR8UtAOmNWLLBhgyFSssuqpCoWVzeyBCwOfbKbEocnZylOhVMk5kyj808GZiY23t74knOhJFzsSQ-5UZjpLot1IpTPmcKWkdi5CTKj6rmSMJx9VOZOP4JmzGUfhDwl8HEKyw-8ISsJVYWCLOL00+k7hYjhwUXTPagiiqNZKVQTEveo7NxeBXMrdyCGs8vJePMKWDyil-c0eYLXooFciR3INeToGEEsAACnDFYqwCUImVgaCnaReDVi7CNRGdIa+cYgRalVvFaEZmTrFXF0SMFEcihSRNVkAEsu+czWVbPwWJjRFGKFOVosnENF9WWU9CVnLiX54KAnsvRd7LwWpLEcZcnorEHaVQAoAh1DDCdVyVUMB51nXuS+AHiE1nU+gMwNnBuKk0N5TAWWPUsaUUAD5R8n+VlV0zL14IaGcBNgHLBQhdAwM9wSgCUIcCiArDcGLwACYIB2QNQV+BIDQBEgAhEwMdJ2FIBkr5g0K3lAi0ayxBWI57cILYjLYsTZpuaBzh9Npz9ptRXRant+xWXSSAesk35kgkynmTueQDTYHzz34q5Sgf4gGcBNBkbSwJFUy0cdizTC5fJz-fybBNnxtYo2Y0RqXJPTGQl+FVpfUm9h+nDSn5Y0paQsS67kiwZmvFlbwmRmiiFo+vV6dx3t53SLelPJUQ9xNVPdbeao03o70+4+qHpfq8yQeM0b2L7MyCb1hMvIXKyIB+UANZH2HlTyrOTFF5UvITmPzV5XFWMH8oeF3CKAO82WK0uLClgBWGqqlJfLpBlgJG-S2+dI1jHlIRlgEZMjYwwB2NYuBi8RYjiOExz0ZEIxvkAuomILxlNi-lecvyKBK-8wS3IREtCXSFSAveOQpXI7U8xHx4oe2vQAbKJrFF4A12sOF0WKSEuDCqycXPPqlyB1+eV4hZ3IZPr4eWawuG8sXRQYPlE5H5Xsg3koqOBpa0Ja9xua00PiBmAUt8XoAOrj5ClfEncp5JQqIwMKuFffERWoAUVzA9FR4ixU4q8VO4QlWYGJXzEyVpAClUhqpUtqUANKulQKoxCxrOaUIIgAKXAW5o8OVSxubyoFDtT3MF7UVOKmEBK9DVNQHVaqj1WITvmJ04HgUX5Jm5sxuXelX8OFSXtmVsvDiQkxtWAy7IwM+VQJJuZbTIZpTaGTBMknTqjptGyTb72pjmTcuTq5kHhxlWLS5VLI9aYJNv7Kq6QqqtcOfMAjiTtVCs3Va4uZ6MbmN0S0eOaoyXs1mewmh5dPJ7lx98lyPaKtIiyDdB9g6QIZeJsyVBathIWxJX1HfUiBP16IT5T+tqV+A95qAX6L9CUI9cQNeGMDTJuIyM0fiiqzyVdjhyckXijmDsXHEpUBRYVcAeFWhuRWoqsNmKtELhvWD4bH4hGuACSrgAkayNYAf0dSvea0qUp9G6VMFtk2CjxxP4lXOxsK608uNSShZVRF410B+NgmoVXFBE3tZzNm2vJJ8WNVHLMclG+ZApsZXKaCe6o0npqMS5cr9tYbByepoBk8S3Jrk6abc0tEGb3QNU+0XDMMYIzyFO3ITaKuXI2bZeDm-6ZWx03XM8mW0zzeqqhl+SYZfm0zcqlE2BbXVPAbbS9vPVxzxi4W9bC6qam3aYtr6uLf6IS1B5ktxTNLRloams7DVdO7ZTMz0iwAeAQAA