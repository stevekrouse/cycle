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
  * ~~components~~
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
    * currently working on: todo item component
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

https://preview.c9users.io/stevekrouse_1/cycle-lang/cycle/index.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io#DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD5gAjCNQDGAaygYAntgCmqYZOEQZAfWwBDejJRQAJjOUZ1guSgBm6iAm1Qw1AG7HlqC1ZshUABh2SvvYAhGGDJgMnAYUHDqoagAwgASAJIAMgAiAEoAogBy-oIi4lKyqNYYKsIICP5mAJYGupHRpgAK6QDyzZnpACoAmrz86mL0tNQArnC6sdRCtMD4tfV8jhBjMo0xKABqAILJAKqZeUJiEtKmwSAY1XUQDVGb3ZkAGt28AMRmAKzf3-OLdz4+HyYiBKzWfDgMiufBBhXOqEctBqThkCBUpRu9Q2pl26V4EBqgX+t10y0saxxqF2ByOsJO8OKKEJgXRwloMnUwRUIWwUn8wIZYIpMkh0Iw9IKZyZSJRJnRmL4APuTWpO3xPFqEGCcwWpPJq3WD1xe0OxylRQu4qxdypKCer14OwgEBJS3mcOFhrFMIEDOlpgUSlUwjGgWoYB5ylC4X84KNqpQ2R2AFk6X6LQiUJdrkrSXaHW8eGhOboanB6G7AR6hfN4z6JRnTpb5IplOVqOF1OWZLR-IEuSEwhFjXEkmksrlJc2s6VypUbSrNq0Ol0+rwiDVdBg0FWycB43aaWbp4yrVdFwWXkWvp5PNgQHugZ66yKG6eAyUZGUKlU89jRxQFdOh6foeEGYZRgmKYZjoJ8DxFI9TXTOFP2za1-1tQDCw+Mw8PgwUCi9CFgChX1UJbFAg3bX81FGWRaH5A1KUAgBpTIwKbM9UBzS9sOvXgwHUBhywIl98HrBDDSQ2lzRnJleMwpdTBwnhPCgdQxgwagxNrCS31I8UP0o6iQ07Iwez7PgB2CGMR0TBIUgyHI5O4qi21UctsC0uNEMA48UP9SjZVRdEtFzYBlSQjUvK07pxV0ojX29AIgiHcI7UcicXOMrMQvlDFvz4xM8V4WKMHiq54MPfzkNctDFMi-N+MdIFlWfPTJLIxsKKzUz53RbB6N7JipJYxN2M43qFIwpqAMTVSNF0MsK0S0FkpImqSrq3KZovJSr1apgADYHygE6zoukAoGO+9Hz1d1CPW-SUu63bTDnX9iuXdoQPXHgywQbAIHUSRqr87bZPenjZqilqi3LQkoQAWjhNbRGI0VDPIoLZ2-AbvpaX61zAzdt13B7qy2zYAvqyjGrhhaBJ4AAWAAmO70cx98uLQz6FwOwDgJJ3gzHMgBlGoAC8ZHB6Taqh3n6dh5qmdatmWYfLmNqxt6lb6jyBro6gGNG6nTEmumswZ1XHmZ-g6H0XV2prJKXs2iGaZ2-W9oixm7dauBO1lyn9yejGdZ56bA0N2ihpNkbJF8+WJo4q3fcJ1BVPGDAkZDl3w+5saEy9xXo5h-a5qwtWiyDqFtfd3WjJ9mPgxULgIGN02k+YkuLbT6H0Mr-2VOZ4GhhkNAZidhvJPNtUy9xjPBZr3gAHU0C5SIZBkXQEAkagoH4dZdGDgB+WeDL18uUFEGRJDGbB+zSuy7ThP8W8RYS5WUBUipXr2MU4DeQqglUOvcZInk-igag-AABWMhhAYDCv-Yudo2gACEABSmRYhFmgbAhBSCUERXnigTBOC8Hp1MPlX+KhwqZ22OqXgMh7DDkvilMhltB423mgHIsRgGDfg4SRQukc0FsQHtA3h1d+G8HjCIrGYjG5RyXoGcyowrAqBqGYZO41NiJAAGLeEHkIegNRhAdjABoDkjCOi8EyAARTlvo0wOxqGoEIYg5B9DUFkIobg-BN9aFol8X7W2JoNSsPYeA12z056e37lNNRFdwl8NHq1O+khpj6EUR1N2CSU6bAwR4lAQkdwqDgGMMAx8rJV2UqgbI+wUy8CYBQPJcSI4qNSoOV+gFUhtBMdA+Owhd5jA5GySw8A6DfnGXAfwYAtJchqJ2O06hloH1PgKRZQQVlwHyc9Gy6VGzKL1soo5dkDldLOeJG5ek7luwec9J51zm6nLebcj5ekLnDlUZmJk-U47DUYj3CRqdkn-PPGk2RGSiwO1oE7VG1AsARg6WQ2mPCVbpKzszJgZ0EAzC3FAd4MhjqktJR095vpzkv1+djHqKSqIaJmOiMWtBMhDDQIw0qPAMA1FzvnfUYLNjJESOLIJjKzEWJUDqKItBQVkKMaUqVljhARhsdoABph7E8CcS4vuqB3GDxCSQ7lzDNQ1G1L2NFiTUAlMxcPCJOLWrOldLE5RkkPUGTId0eIOVoEmrCWajULIMA2qKaYTIyRxaBUhagFVMrexyoVbalASrTHUHMaq9VwlNX1PQc0BxzjYlkKNQG7+oUg1arVBqLUOpw2uLtaUmRDT7TMx2EgmobDKXiUKY2+0fqpzDNGKM3Q4zQnCCmRyDAcyFlLL5aswCQw+VsORtpU+H9hL0DtOVZIRIIr4C3UCHZyzOwQMAuqAA4kM4JFaCoMOrUwkN+6e2dW9amqNMbSkjLGRM8oU7Zm0HmXwE9C64B2jVdYwwu813UA3f4LdO7gFaT3YEAUR75igb2eexMV6b2MsDQ+-NtVn3Endb2gyXqUpUdERRlKPyMr9LaKUwF5luxQjqQx+ymwsrOSHTffmH8R6oGFqBUWEtpaCvdOi72N8W2HSLBrLW5G32vWbre5ElbFTEe2hqdd1BEjIdAVVEtqaMXSKxTC51+CVMFKvupxlgnGGif+jmVIiC6CnrgPqyBsb5KmATbK4SKaI2oHTdA0NJDDP6BAHO3ZqyuMuEsNYHQXIktuG2fO7DOnNgpjaKkOkl7MjdHgsJlAa8-VZF4MkHY4qfMKygRpn+oSiNlZ5XygVr67OcNTb6-1cnLOttUnnNdaAoL0ApgXOjHtQsoE-X5ty8n4a8DrlJ6sNGlHTabjjONTLwiaPRDouLXmoAGGsKgJgmX4v7OFaYIx+HduRbCdF6Ex2wNQES+YZLNg0vZloGsK7XnH15YK7wIrJXYllYq10Okhj2gphUOK9UEOXYycXrtwjqC2vmo68oBtBqUA7Albt8paBKnVNqYwppLSeBsy6-EgyXG7QDIe-51sbdyp6IJ+ZprlbWtOqfbwfThmQGVTDbZhn9HaWMYcuOPjLHY6VC7onLndpuEWcddittrUlorUrBLrpfbueycZUt1ePAmBfDOrdS6VvrqW+U1N1TJFr6MsBUr+O3dVeSIhWzoe0KhvMyEiJOAyNlBmHF077rM3+089N4NhTvBbyO6FRtv5fusmP2fr04cb8GQf15wVbT2O9NwYM0ZsX9XIaNcZV44hVbbuoACVQwedefFEf8dgwJpTMcB+iiwth4R8dq6kQNzXVntcCK3cIg3Rc0+N5QOrsfffls8AUbP8R8-Xe7bVftll2jdEgay6ss7MgdEXcB2BnDBjjHKszdKyDGq7GFt1cW1Hqay03zb6a6-2qu8t-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-bKijEgSjJ-gDnOPu23KKN-vlwXPl4foTQX5gfzD-9-8Aj-d-PyAetrT-Ye9+z-fzt-gfr+D-j+fz+qt+L+kf3JaX9qOM8-NCxxsehau2MXhPgl7rI9c3QE2LzxD4C5VI4dFPEx2+bp4zWePZzCzx4DKsKw6QF3jtwbZ7cg2ofXFHHx95IC52BMS6quGuoYD6AQdFFGACgHjsFecA+6MQPpSM8UB5Av6FNTAEqtw8OAoEnL2WqssLcRAufsozYHzt8e4vNAUT3oFgcFe7wfkooIz5u4NenuFXIy2xbMttWZLeFIinD6R8BBLLL+hbnxSEoGgJKMlJYOUG7Vre0rL3BoId668FeDsEAMjAQCbwNGBg6AVrlUjUNLoZ0BgIMAAAUngDWkKzCGhChWFLAAJQRCoAatM6BHQoBnRPgx0MwGkOOhxCWA-g66MjGSHXRAh6gEIREJKFRC2YsQoVudFOjXQI61Q4lOkIaGZDKhTAfkmdDZhnRkYdQwocUPCG9DhW5Q6wTCz2pwsf+CLIFlj2yiADo27An1hQP+iAw7qsg1Pp71agut26brFgR-wD5qCGWC+HXo6xWFFgqBYeGQBHi8EMDDhrSTwIMKt7tgk+nbFPnSRUBwJqA5YAmqU0GJltvKejZQBWAC64D3eKAH9GOj-SToXQ06WdNFyXSdpV0+mTdAwCQwgJUMB6DDJdybKlp0g16ZfjkVX4z8LSogj9gt1+ZTN02mNTNjBT3YzMWCj+TEo+h1R6oZehOH4WECTpFN+B36EdL+gnQAYZ0QGAmtCI2qwZ4MfARDIBF3T7p0MDAULgvjwzYjfS3fWfggOHY-NEBfzdVgTjZKMoOSFOPAo+l5IW44Om5Ttt+wuEx8iwvRWyCB3fqmiCBrUC0f0UNFhdVmyws0bwCgC8DHRl-Z-sfyhYi8aWNEb-rqKGpA0eMyLHHkAJmGLs5hYEBYTayWHC1LhPANYR9QKA3D-eqg23tjX2HPVtBQgnMMjEsBe1vMRvCfjaJgHMxRk4QQ3psIQ7+iQwNvGVkH3BTeCJ8i0bgRWBOFnCSxz3FsfASLD6s0xiHGiGGG0iRgDAxybGsmDTC9jaq+mZGHWmrEEiSI2jUwCdXDFDC24YAyIiAipypg6QC44ntRw76OcV+PxA8YOLrEqAtxnOPUXuLX7xicWTvHgK6gvFMg7AYYbPrnzGFHU+OujTvkXjeaGULUVqQ8eN1LFyDExL4zJv9yBYw84JW1X0X7yHEhgRxEYKMBOJgpTjDBuY4wXOPPHZUVx--SYQrk3HLRtxPkW8dOOAn1pGRjbOjmp3e7UTFxSoouFsMNjXijMu4qibjk2rsiyxPg9tDCPX6QkP+749Rjnwx6ItAIhfQvHQnW55Fa0lqGie33XYzjV8HaDameVf6Q94JgLY5CQOQnlBUJY46MMOEnF3j+JrY5mHhKUnMSiuvzQiSgDXFTDbhqgDiTuMon7jbJoElxk8zlEWUNuosbya+Nbjth3JFEnYlhPvG0S8B5PRMdMCgzfhd4IU1AGJM-GSTxh0kv8SeLkmATiqTEnybt0BGCDjBCU4GElN0BaT7+Okr0bf20nQ9apj-E-t6Nv4v9EetYgFLHGMnoS7I5kqiRBNdE8BgwwkZGKfHrgETMex1MMS5LQhpSNGGUn8TowKAF4CMJpeSURWs4Pi-cwI8dJMnBGAZti9TAUV2nbpwiEMCIsUUZmRGSj6A0ojEViP-E4iFR+Ilid9yJGHJqpH0i-hC0am6Sd+TUq-n9If5Ay3Y9UuHgDJakQzWpPo9qX6M6lf8RhQYxyc5LOoSDUB0YoXOKGdBFitpjvBXpWOUlLjfe4gsgbMM4GCQt05YCARHxinFSjBqkY6CINenbU4ZH0SMczwxlDTYIhUgEVH3l6JiG6ZgfgELLMApTP+NEBsfYL2GaC8ZiY-Frg1d7djjxLo20UWCYCkBBS8fdXgjIsijDgxvHUMQAJIl3DZoKHVqANNVm8BUg4wEwMjE47NhD4u8flBpE2Q6RoJb-WCawO1kBjEZnGSacDWIkJ8kOps5PubJVnljWoa8ZEFgDCBHxJAUAcWMEDYRQBWIUEawFVPf4dTQpZkX2b-wmHy4g5JsyuGbP8b4CI5RYZoMJAiDUAzAUACAafCgApgtgsQDOZ7J+ntz-pIMhqR3I9n6Tfp-cnuTVMHlfS25L4G+ICnyaqBxxvUmAKgBYBfB+SPgV2hQA5hcS6QNkkCbdztAYJasdIdQPBGRnTTjZIYSeeRM-pRSCp8ENibS1Pk3jIpFkniVfKzlfg0ZHAkWFzJ560y+ZJUv9ooM1k1jWZL80mVGPJnxsrgibTzCmxUnV5sJT4qdlrPHkZjGxWYmWU4MTFUDzhFs8ubwHyHr14B9k1UdfIll2D1B0sxwQcMGnB5zExYlgXxKwUCTWo+QsWdsMzEOC1J5uXQb2GRjssywYYTBeHIYVFgmFCClQbYMD4oLyFOYp8Zwp5kdtwJ4pLdmSKbE34kqNI2xHSJfwMjoFmwT-KtLe6WV8JtC1kv5KHIKTopLAuRQLRNH0KrJR0UwYSAaDdCWhXwMISzH5KuL3FZQ6IVaK-SWS+xK2YOJ6KIWqB7hnnR4VkQYmWVH57soeZ3IHlxLh54MruUkoQmfSI4iCm+amSnmmTYws8lAO7TYYLy2YKJHkhZOGm0BRpgSm5q2h3m+L95sSQ+UbJJkXUyZ78mQV-NgXyC-5zCpBVLOgKSKy5gi3gMcI9FKzVJfi2qsnmYFEyDJl40JQLXCVaCnxsQG4rQCgBQAyp0GSqTEu7kJKYJfcsRBkpoinzp5ZkvJQUsLpq1Q2a83gCWHWQqst5gEWpXSDLD2AD5-sw2YHOgTADW0cbMWOEElgyxcZaCwaVQ3wXzdCFz8lAD8rtCE9uZwKihZbJ4BOL+SLio+p4rcURDSAlubxSIojGvzWl11HMNjPoA0Lx+PYiZavgJl2SIVyo2ZfDKLmkJQ5pcuKYNLhHvlIZySsFt9LHmModpf6fQGYCDgQi+R5ypeSgFuj8kWYNyxXhsn0zwRIMr8bAOWChC6A4uXdFAGrXdpEALst0K2WiHZA1Bj4EgNAESBHoTBO0nYUgNavmCKq6UjkpHLEFYgQU98UFWIoqjgprNpULXPNBgXa5gdMKwhZRdlz5mklLK5USvDsrpVqipcUkmioMj0YMUS+9TM9glzRGU0a+PARfjGhEpN9bmNbB9oyJU45T5R0-HvszPn4LRvOj2PJlko6KFN3hwXMpol0prfDHppaxiRGofIELo1JI8rnMyPKPFYqp5MZWcW3JJUB10VdrplUb4zKY18HQBSgEDTrSuaQCUinwL8mUrzcHKuqWku5WjzawN8flaEkFUir5kYqqAGw2OgUBPA8dQLiKIumJhxRaGIEKiIG73yqJj+LZUKJmoKqIwSqlVbvHVWoAtVTtXVSYncwIBDVxqncGarMAWqwM1q0gLav-X2qPlpgR1c6vbXfFp+UIIgMiIRX7dfOJyoNQKBY5QqaCdBNlBymEBFNw12lYtbJI7XhqrpiontUXEckDIXVEjN1Vm09U5t0O+hLrkYx64nNWm0ozNTe2k53s6Qha7RSGrl5hrApSYz0ZxoTUdck1R3FNfhwbItrssma7NWuEeWJh7ucm8lXaEY16LIlymvDQRtHWPBq1l5U8dPxqCtyDl+yy5PEt7meayEWQboPsHSAzTn2U-RibZrY20r3OSUI9ZyJBEnrThZ6nQCHQuUSqvgFAFgK5QfXbpLpSIiUa+qlF6aLmWuC+cuhOk-qxWsSO1RlGVVwBVVwGzVdqvA36qoNyIGDaav3jwa4AlquAEhpQ1gBPNDqjwk6pMUrqZKYWl6WBIpVF8-OU80jXGS6gUbIKrKOgDRro3KbXNRanwiYs8ZxMkxrG8bRFuFLobUAXGsGotvoIUj+Ns5dZmwU2YL5tmAmvGsmpE2ndjm53XTemv01XsUuw3GTaN3rZ0KmNAUsxSpqjWRbVRamqpgFhaKaamK2m8TQVsvZa4Wyhm3NWR3zX3smaDGzbdhtMUbSVsRDOzUYs7aObomIW+jaDvP4HrQZe6p-ruov6+bisAWoLfRLJ02aCd4WubZRnEiwAeAQAA
