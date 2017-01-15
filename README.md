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


## Technical Goals

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

* Things needed for 95% TODO MVC parity 
   * http://todomvc.com/examples/vue/#/all
   * https://github.com/tastejs/todomvc/blob/master/app-spec.md
   * ~~input placeholder~~
   * ~~images (for checkbox)~~
   * ~~on blur~~
   * ~~box shadow~~
   * ~~list filtering~~
   * ~~input no highlight on hover~~
   * ~~links~~
   

* Total TODO MVC parity
   * focus in events (might need to give elements their ids) 
   * trim text
   * localstorage set, get
   * check/uncheck all box
   * window.loation.hash (or could look at full routing https://github.com/flatiron/director)


* After Todo MVC, big projects:
  * bootstrap everything option (or seperate library)
  * components
  * broadcasting
  * if/else attributes bug
  * strategy for html props and css --> better abstractions
  * input text scaffolding
 

* allow users to cycle their cycle project's data to firebase (firebase bindings)
   * on value REF change (value)
   * after getting REF once (value)
   * set REF to (value)  (how do we get ID out of this?)
   * push (value) to REF


## Eventually

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

https://preview.c9users.io/stevekrouse_1/cycle-lang/cycle/index.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io#DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD5gAjCNQDGAaygYAntgCmqYZOEQZAfWwBDejJRQAJjOUZ1guSgBm6iAm1Qw1AG7HlqC1ZshUABh2SvvYAhGGDJgMnAYUHDqoagAwgASAJIAMgAiAEoAogBy-oIi4lKyqNYYKsIICP5mAJYGupHRpgAK6QDyzZnpACoAmrz86mL0tNQArnC6sdRCtMD4tfV8jhBjMo0xKABqAILJAKqZeUJiEtKmwSAY1XUQDVGb3ZkAGt28AMRmAKzf3-OLdz4+HyYiBKzWfDgMiufBBhXOqEctBqThkCBUpRu9Q2pl26V4EBqgX+t10y0saxxqF2ByOsJO8OKKEJgXRwloMnUwRUIWwUn8wIZYIpMkh0Iw9IKZyZSJRJnRmL4APuTWpO3xPFqEGCcwWpPJq3WD1xe0OxylRQu4qxdypKCer14lggJKW8zhwsNYphAgZ0tMCiUqmE1HC6hqUNo-kCXJCYQixriSTSWVyktOlpKMjKFSqStJdtaHS6fV4ZlDGAAyjUAF4yV2A4Dgo2q7amum+i0IlCXa757GJ+0vN48JieTzYEANsnuoXzZveiWdjPd0rlSo2lWbIudHr9Hgh2bTg2Uwc0s3pxlWq6bu0OkcMQYACiYAHYvgAaKAAFlfX9-X6eKQTBfAAlMes4FJ6ELAFCPpwv6WY5hu-a2oOO4lvuvY7IS9BwBBzZ2ueHYIZmPbWqhW6mPevDCPGMi6sqQIevOIqLpeiEoIGygqL2-iEYONEcWRfGUXew68Bg1C6NQCAQYKUGsV6kGgvMcFLgpqn4OpzFztp4q6Yp+AxsEoThOxy5XvIig8SGYYRgx0ZBHG4R2gkKQZDk5orkya65re6HtLupY8EQNS6BgaAESKRHtt5VnkTeYmCRJPBfOOk7ySx+ALrBBmWZxfkocAyqFkFmEDEMogjOMkzTEeepugJrbEfFnGiSVBYpY6PCfGYZhZXpuU6QVZHccGlRqKMsi0PyJ4tpsADSmT7qN3YdaV3UjmA6gMBGg1GblzWbK1wnrRRnUDq2QmeFA6hjFJB1acN+Wkd243lBW4aRk5sZmQmrbuSmXlnUyH0RtgD38TFZ5xaDpiyqi6JaH2l1oS16q8BDD3dOKT2iNBooBM5-1ucmnlpmtMq7XKygKtmAUYxq2MYLjVzRYasW0m1IkXZt12pfjhMWW9YM2RN6LYNNDFzU2MOtstq2i9eqP848qUaLougRvQQtKTBx0mtz8OoBtXUCz1TAAGyTlA1u2-bIBQFbE5To1jaaQT+tEyNytIeueZo1RqAYXuvDawg2AQOokgc6eGPG1TKuM+rPURoSUIALRwnrOVsXl8F+mRRWB2rLTlWHoXhZFccLUbF5J6bfPm6nI7fgATK7ucvYXXa+dmAcp+XxaV+W4TVnWtdcw3fuJarLfUal7ffpl7szp7wsF0us8fbmU3UDNsuG6gis8+dSVB+JPX8HQ+iMfqKle3nynH22iez2bV2t7wcChvWa+GWevnX2Rd3riwDvvQ+khoac0HKfE2c8h6oCEuMDAGd-5MUfpvV+p1G6IOShbEcv8oTd2Aa9UBYsgwqC4BASBMtoHzTtPAvBn90bfx4FHIYMg0AzDvqQl+8sTpwxYc3L+i8eoAHU0BckiDIGQugEASGoFAfg6wZJQgAPz8JgiAvuphRAyEkGMbAv1TLxjtHCQOs9EbygxAzAhQjmZwEhqzPGAC5awITjPChphqD8AAFYyGEBgZG9iPHx02G0AAQgAKUyLEEceC-GBOCaE1Gr9olxISWfamyIkYqBRkgtsGoZD2HjNoomr9mEf1EWw8RI4jAMGzBUwBT8jqCNMNUnxTcL5l2QalZsLSsHexFt0riFZRhWBUDUMwMCImmESAAMW8AgoQ9AajCE+mADQHIikdF4JkAAilPQcOwcm+ICUEkJBSwkZNifExJ1iab5MKQ4k0JSynhCGVUla5yenzzEf0nqBjJDTH0EMjeIzwl11QFEv5KAdqRRUHAMYYBVFRjeagbI+wACyvAmAUAhdlXKJkXIA02KkNoKy8FSxEPIsYHI2TOl-hyDADK4D+DAA9LkNRQx2nUFrJRMkBRcqCLyuArSgSkv+pKtS+VIXGRJvGWV+kfQKpGuq+V2UNXaq1XpHV+q9VGQNUZaVyqt4IN3pNWlUC5kwpQF0vR-yilCRvrQO+2dqBYGoGAb5HS1TvzGaw4OQ5La2wQDMcKUB3gyCtrG2NRLDVquyma8yFq8F2QwJM9E5ZaCZCGGgIpeJJLSWoIkUyJzWzJESJWR5Yy1kbN4gxKItAGHQrtEs+FDbNkhm2btbQmKUD7J4EcytmwzkIJsXTG5AK6lqg1FqHUfrPGbDhQg4NV8RzOkTYdfOr9ujxBBngqdaIZ1FsxjwFkGBl3zNQJkZIlYSL1uoOszZOoW1ttfp21ZL7G29p2QOy+g5h2jvca-Cdx7nm2NeUBpmZYajagYje+1a6RG9IXkCrdwSahlJ3UAgRK7qKHsprPWldFdAMtPcIZ0rL2Wcu5RgcV-LsNlP8LtegdoWbJCJKjfA7GgSip5aGRhpz0gAHFqVPLydBsJfTikEh43htpe7-UoHvY++FZH6WMvKDR7MdG+CCcY3ywc-7DDyLYwwTjziHrccCAKfj8wjPipE62dUEn4UnrSeejUV6lObwVblQL+dU3ktMJS+Fu8voOQxcTP65jBxAwpvCkuRTQ4hTHlWWsGCH44OETU9DgLQ0jmXqvTBwXlK6J8gjKD07FSwccSWmSiQbOuPZmB1TuCCuzpDUJIZVWEqpcHelrC4pUhBLoEJ-CHXCMBu8U65kv633Nt2p+1T368FXrSS1-QIB6Nir5aFlwlhrA6C5MdtwIqGMuYa6YHFbRUh0jE5kboEE5MSMPVkXgyQdi1rHfXJ9C2vNnsHcWngUlmsVvcRVmCMPKmqYPUe7rLrUroMzpFUYYx6BRWh8SlTs21MPsB9V51g6hLEJy26OHKqe7bzGZm7N0zZmGeu3ygw1hUBMCuwdiV7bBxLMk-Wnj23JjQn21NqAR3zAnZsOdnstA1jc6m4O+7j3eDPde+497n26SLPaDilQtb1Sa8wXlwNQPaunpg3JsHEOy1Q-K3jgjt6UA7DrQtxFaBkWovRUU7FeKeDt381C0LdpKWC4W+DVrdrp7E4SsD63GH5Pg9LS1lxbNr246GiFpVrlEvk1TJF8Be8bX0Jj3A3567am9Y1gK7WcBdZZ93c7+1XWg3V83fir4tsXYO2707ECZWH7U-TTvYv1rpazTWwTx1JP8G3cw7wHae04CZ2UGYTPjvs8t9j-CjdW1eDpSH1Tp3OjyELZBTJIgHK+Ch8HJYzzlv6Y9dihqO3aecZuNN51-LYzklXO81c0iXuWyQQX-1SRBz51bEyQeUf2k2nUTyKzB1KXKSb3wwNlU1nwSn30IUknY2aTQOU2UhHx+SVnb0KznWK14EGUIIC1Px9nPznwZxmHRBmXF2MzgCgHZxkBmU5yVw4KAIWWWS7SWy2QAz2WaAOWORmxdwg1nnAOuRgzuSyXdznwT1kyT2QM+U32H3oMEJPkrzQxfwPx4BBTBUpw9j0OGWfgwIJ1Q1nk929zRUckHX93xUJVoKhRHzv1bHD0iwmRYKZ3L1bAFxENfWRRkHoFjGCNXTaDaGSD33FGmQQEyG2SPh-3NzUKf0gJtwvXf1awz2DxsKJm8NzzC1QD8NWWFzsQwB2zFxZx5zugwFNgV0A3wGc2EwXxQFVzpEfRNwfm1y6F1310N26GN3+1QGrVrTgNpitw0KQIvT808OKP0Nd1UISi22mVFxADaGZy6JyFSF4EWUSHSD+xkNb1-wt3gLmOMLg0vUU2WPaQJ2OOyEOMnWyMQMoNt1Twd10O31hysP3TaC7WqPZE5G5DCkinYKYxqFMmQBQAoH4Ju3A1SFSAjyyOuMAK6O+OawKK-z+Ob1sNkNRK5x-XCJvhmE5Bvy6KiTiISJ4EWT2EfWQztB2FRPbjCMbQpOUHUGpLk1pPiKOKZMyCKNp3eMxJqJ8yazLTxPa2-wJzbwWxwPYSKJNS0lCxVQ1KgM2CWVJM21EP-X7QkKkImNd3hQUKxOUNgPFNmKxNyI+VQK30JPhxn0MORzJ1SjMOkgsPXisJINU3sLGUcJRWcNizkzcMD1fFFJz3izz18LaD1Nnk2NKDqL2waIlzlyzUVwE1Z15zkx6N4D6LeyTw+yGKOJGKNx6FNKmPWM4nUNuMa3uOJEePx1kNrLIk2IjF212KKQOKOJOLOPlJd0VIxNtJyM0MWIeKdPQJdJdxeLeMgwlM+JDRxPtxCGjJ30EmBKqNZHKA5FjBUEhMLXTI4KgFhJCHhMRJzJ51WLZLRJBN3JRlTOhMOzKIu1OyaPfLaI6LzKTwLJ4A12LKK1LK+wZIHP6KagyPm1HJeXmK+LyJ+PXJbOIMBNUzvMTOfXJOoEpN5KKQFPpMZKJxZNOXZM5M2W5KpLwrpKFKIuQoBP+JKJTTKJVTVKfi1IG04kEAZVMTJQsQZCsXpwCKmTYNWNCLJMbShCiOCBiNMHwsSKuGSNSL5Gn2HMuJgpkwbPeWlI-zax0JPwYpp3zlKNjPKJQEqM22qJTO2JfM4MzNaKRM6PzIe16JeyAsoJAuGLaAN0rIgsbFfhrJmNgs0vnQU2bOnKIKJPtTdwfOuS7OhB7MHT7LAtON8pnDN2gvjw+LgpXMnLCoJJnNWPnMCo0qlJT0hyQvCroIMu1Oom3Ist3LBIPKPJsrPLhNQCvKc1zNvNRPRMyqXOytf20tlL0ssOqpRNSAwoW27RUAotwsHTkoZOFOIrc1IvEvIuwp5L5KTwWsIuZLosYuqo4rImB3q3tKGvT3xMgoVLUuwI7xMNVKNXVOYusK1M1WTSTQ0l1XetNWeoVS1J8M2HUzj04ii3sh+lvzKLJg8kLwQSGy6JG14GwFklhPFVNJHNuooJrx6g5GjkY1w32tGUj2L2i3BrizMTjM2CSxhrwThrkwRp4Ajk4VjnON3yr0xs7x4HTgcmzgZH60YISnBh2i0B4tJnz2hqR3p3ARoToSnxkoMLIKVLutwJ4AQFoGEGWqEUyI2NEPfVWzlpQA2yTOqKfOspPKYyl1cA-Ll0tu-K6q6P-MAq1xLJ12+1+1StWPRrrKyuCuT3f1+P0udMMs3OumI3kp9qEl0C5HUFwBqCFpkGMnsHoAAGpYAABuB6MwAADg-AADJtRU6EBE6YBIBEBUBMAcACBiAyBKAaAGB8BO5xwE76AdAwoIo0BUBvxvAoA0AeDsdmiUBO6dB7A6giAolqAPAUBM4xwoAp7M67Zxw7YKAvgUAc76AMBU68717hAag1blAoBhAJ70odAFBUAj6oBaBT6u6tQIBUAKcdBAhRgDFUB3h+AtYBVl7Jcs1qADFM5W7Ip2qUB8BV717N7U6NBIooBr7n6vhdBhB251BZk9BUAcVXx24oB24vhkgO4oBXwmB0HXwoAvgrYIBM5vwfx0HbpO4oAKBvxM4vh24axAHgGN786m7mGNbTAgaw6UcepI6jAY646m6U7IB06MAs7c787C6ONYBS70AsA8BCASAiByAqA6BGAG7PAm6W7q526B6u6e6ag+6O6u7h6ZBR7x7UAp7bpZ757boCVl7mHQHt7d71gD7L7j7fAUAz6L6vGr6EMb6UA77P7H7TAY19Bwn76v6f6-7dHESgG16WH162GEmNyz9e4587AxhrAr9qSAbTAH8dzrkrLdsWq7LszOqbz7bnLCzXKnbgKXaGSKyxiqyWbBwAqbSgrSqljKqoVwN2zuxOztiEr9jXj+yUq0abqvb+qfawdun8qIrZz7UiqOmSrQcELyrfUCbrCniXdug6qjaGr9yITYTjzgAfzWqLyAHrzlcarUA7zerOJNiTaSmzbXyTKvyzt+6baHLfyisHbanMFBjQLjjxnWmvFgbjrvbSq-aKr5mqrA7bnXcSSyKZqNrKL5rqLFraKemVjEW7yOS1qIipLANX4Fr6rFDsxnzXnOCLaZdPmPnrmBCqm1cAKAWBjnayyeAftBzcsoKIXux6zoXELNmcWgs-TxXqq-rfqvrPq9JXqZXNTnqjqwEqFM1voXCybeKxbgYSNJbVWJ8D4y9VisD2olb2E0cDG+6OG5t+WmRlT6l8VSAg8tnlXKFbIDXbVjW3TyDw7Uos1eSEAUbQxrW34MrTX2aTDDw6AoAgJvw5IXX+aQbx9JZJ90jXSFa597XF8OE68dYQ3PbeYI3lbB8nZe8B9+87Z+8+b0nBsB5-JhsK4QpGbo5mahyLitbw3fW044A0cc4E2a3Co63io6bG39wYmJmO3C2u2RwWBPAABSatunBbWmpPem3scbEMWgKbCdsNjsnWlbVtfWw2oXR8yl02s53Mz+956XS7T8m907Rlm7Jyllx2wFjl0C7l92xFgtgVqFtZt-YV1JxZu8UOtm6dhTLODHcYbHENrhsDnhohP+IDwmufFdoremqN++K61SydgZ-d2gD9I9xZGKkXF5i9xo2l2962ulx9xyv86p1lr9oFukT9nd21mraZoVjZ5DxFxHXVxWot9hd4XQFgETkT2Donbhj0nqd4b8XQOTuTnj11gMcBDqfdQWA5il2o8985yjq2r5mjipm559p7Nlt0ZjsZnl7D9t3d39zj-97S-20ahFkfZT1AXQQQJQDZUQEWhLVsAp8l5-Kl8jjM-urM22ypkzmppj99zy7y5pr9-ymtfp3JMc5cwapska30satClL0wQZ7svYuTJKkFqzvyvl4qhAga2GXzKcuF3p1TZZxctL6ru4mFkV+r3F-0gnPZkjvc8E1QZq6li5sAS8n57q+8wp0j+okL08vT2XAzy7Wj35yg-5mL+pzl0rxLirlZqrmZ9ZtcjrgOgq7Z1sqK5Fwl2araorBa7odIQ4EN-FlFyS6I1YslzT6btM2b82t8+9hbhlozplqLxjtykNDy12srtKnb5rzphzsqw7njkfVzxNyFiU06icgD3Ei6uU3l663DpkJ5s9sj3T3775u9755blXBj199ljb4F8Ctjyrm4rjhHrZpHhVl66Vj6lix6p+VioEfnuVb6rSQX1VWV41XnqVJVlHlVnifgB6KSXJyG7V5LWGod0uVd0d2iGYOgRn+D6Tkcd4YQYQFgdQU3xdtX5CDX9DrXngQYYYTHOqHXrD8rvH2zu1s1h13qfqAaftpd1D9XtLW3pGwNjgvXowhDp0fgCNVYYIC3jNZNmWtNl3E1qdyPu32+JDLZ9K9j0nLom6Y-Zzk7tzriRP0vWWr1jNjG8DngZEK17P6H90-P1KMcQv7LhFkvq1FNw1ivxF1P8+GvqSbAfNyZtPg3rvNvoOtJ-3gW1Ti6dTnqCP8fngZ4ePhw8YbJ6ga-Xzim-J-ivr55mbkn698L+l+Xcp9ou24HrIe7LYEUup9yhpvXLy0Y8YsFzW93jjlr-b2rvK47hZ28nl1QAFd4qRXJPCVwZ7v8AcTPO0hj1CpZcp+wHQcE1ykzf8We5aWFv-3hYncpWJlHnsLz56S8he4vEXkQLF74CSBhAggVLzwHWFRe9AsgfKzlZc8Je1A4gRQMVa0DcB5NJcJ32Jpg0NWeTJMOLX44B8reQfEeCFE1j156A3QA+OHyb5yYhIrfN2KKzIQDti4gfBtpIP3DSCdY6QQxpgAUE+t0+JbNfmMjQ6UF6aeghvGPW9RHdXeOHT-nnyUEt8u4fvS3oPG0HBRdBubBvOvgQHftR+A-UwVWw8E00tB8NW3ph2MECca+7wV8IkPMFE19W3fT1n329ZxD0+bqD1EPxH749k4y-JgOGkjQNAY0caCockKYJl9U2Kle1P3w96CcveN8EAJnAQDSIr8+Q5wfPlcE9Q7GDsW2I+HUBPhPAgEMYTGydagRAIUATOrbGsYUBbYnwK2GYGWFWxphLAAYU7EzgLCnYQwkYeMNGETD24UwmNnbBthOxrG5w6NCsJuFrDThb4W2O3FtiZwrheww4e8MAiTCqhs-VViTUEHK9AYBeCWsu0iEjsdB4cIkEzViGZtPe2bLmlnD7ZqDKsMvN1hLCT51CmEmQmEU0OzY2D6Aa+GQBvi6G58ehSeZQZ4G+FJsqEanBHBpx9YqB-E1ACMC1XPKjcrmgPZEmhR6p9dlADeKEh7WCFMgtMFGHTNRggAQBaMBHFqoOCGB41AM7GazC4jsy8ZHMl-SpuBnEwPNUeaAuHnMywFeEJWCLcapNTnzTVdah7USsR0JaGldkg6EDNITbaskeRYQNeqcxz6aZRg5GSjEynFGSjqS5zGUSxnlFWZBwXGHjA5gYCU88WmomAeOQWK-9Ah7PSVqhTsLwpgyPuDVuGVxT4oeO+6UDkv2b49QRuEnDTPr0LEjgRu8bJEfRSNFcjUgBLAsb0IrEBDEeHPN6pQJoE8CUOPw2yH8NixCCUAVNYEWIK8FRDwRDNSES22hHV90+8ImQDzQKCUixoNQnvsn3qFYiZxy-XsJnEsCGNps1YpAeCyk7ljaI9EF3u32L4oiVOqQ9EfrQaGFCTxObLWDrAJFEiG+bvEkVmyoI8BM67gg8d2KpE8QM4PnCGiZSho6sUsoIzXuOJiFQCbWx4psR8ESFRlwhs8SwSGjXZjYJsW7MPnBNDafjYR34inEuNl5ojy+a4zEVX07bp88RxIhCWSNSg7CcGk-U7siI0GkSIE5EjERXiolj9Hxy+dZPuM647MbOBEnEd+J2EkTURnE2oXeI3HUTl+OQhiJnC3bawsmdEssYhJ4CSTUJerd1mkKNYZDeJIQxSZn3PGICBRBQ4Afh0I6WiUWNowDHJntGmk5CYyQVnD0XRZ9-xiLQMlkOX7bo2eKY3ZvmMUEMSw0TsGPlGj2FvhPwP4P8HFM+HHCSxYkmvsRMCmHUrx1kakfP1pGL9QpRWISDhBdC6SPcG-eRFvyV5gT78+-XbqenR7xj4MiGcyUEKsmkiCpqUAKd5O4FkoOBdAsgQwLYHkC+pg00XuxUyml8qEwEnfqZSHGiDa24g7wRVAPDO9pxCkx8QkKSElSRx9bMcT4MkhYTN227PCT+0aGpSkOW0nsWRNkmV96J7UnqLRPfFOCUp6fJia+BYnI92J0kkvNdKMm3TKCQkASftEemiS-pWNEcDpO8l8CbxXEuScZNOnZCzJKkgVDUHUnAzWajYsKeDPelWEoZ+k28TdM0mYyBgZkjSfqXCLmjuJIRK0WTL-Q+pxCdoyQiOgdG49ZCsY9LjV0alLo0Zg4XydiJr6yicMPpCyaxMiogdhxm4x8cUIimlDz69AZ8DFP-DxSAIRw8CNzNbBwcMZd0xDiQnSkd9xpH0GkT1zpF+THxOwIMVJNMCZNN+2-UCTwL4oFABKVxMcvVPgoLoEMXMx0bDFalfihIAs-Gl1KYpcC2xwc7nsNI7HsCw5vU7qTKlHx6TVAU022Vq0BEiDIJC03aUtNgmeyjxhMrWUhM2mQzxp6EsqOOPXbYSjpWcj-s9OX5pSC5n068XjJhkEzNZ-02vM+Ibykz8pLcnqK9OxkZS65WUhuT9NIKgyOagMoSfqNxbuic5XcrGaoOEnqCZ+gEq6auMplLR5JfErSUpNoBIy1JVY+ecHUrkjyTCEM-edP0tQrj0hw86eWDOJnuovJp8w8YfMJYUyiO9kumUaQZkmk8Jrkp2bD2xIXpPJzU7ri7l5kSytJZmbMPIlzEI4QpJgooSUMJANBop74RWagpVnJSj5ytGuQ-OFm4zVAhs3ZsbL5np9pg2yczLoAtmoArZ5Um2Zq1Fr+capMPWxC7Jypuympq0jeUTOWlkLIFFC3WU9SDmhz2xUckOawPDlDThFnPQRWIpEVCLRFpAwaWNP7kTSgJEYECXQr86U0gRc0wdmnLBF7TlpDUCudAOvkc0NpKE2uYvOXHQyh5mBdeSZMfF4jXxiYoKSDNMUmEj8c8ieWKQT7ZSL4C-IAW1Jnm8BYgPJWgFACgCkKo4vCyhQijKk5Npp9ssQI7PUp1ZWujZPUY4LcU0pPR2mKjHpjZRSjhugYuUZZg4yhjWsyoiMfQCjEaiPMtU2AQ1My6tjmB0ihReIoGniKmBMiyOb0skX9L5FVAjpf1MYEsD2lsinpQMrkWtKuxsclIb2IEH9iARWilOZ4J2n6Klp2EXCOPKyXozO5N8g8GeNiVFzAo44seXIOH7HTBRD4rSVbDCGWK1lw7aCQYszkszsl+ysxfwDMBfKvlsSrvvjN+nuLlaFrXukYLVlPzm5BypgKQAsU4K5l1Q34YssSUq9qaY+PxeklymBKfZqUVIOMBMCZwvOGYZRPIlhJ3QhU1AIokoqsUcS1WMWZFcnIgnnz0V+tPrB8pMISJkQWAMICokkBQBKwwQMpFAEWiY5rAlK6XsotBpGA6Vic+hSssZW+KeIBC+1KyrgWPjmgu0CINQDMBQA5BMkKADii2CxAxVbSoZRMvGV9LBlAvUZSaqtUjSRldqh1V0rGVexSMuSkUaen0BmAWU+mKUTAFPodwfAp9K2K+GpThkdgOKOkHXnJUQRe0pMbABGChC6APm3dVAL+Jbqc4XYvAcbAgHZA1BVEEgNAESEgYTBsMoYUgOWvmCxrzUA4o3LEEWj+FwgjOESoizEo0zNkL3aSm90xZGFFKaRVeSYqYV7dSqLMQovwoAEiyiYA48yh9xqLBdzm1HJbhyLo5-MGOiQbII+haZvs6eLHN2tWWS5sz0lWlZpeCtqp9dGqxzfkd9z5SsixutSusVqLs46j-5TibHi4py4E50KKLK7lRUFJYs9q3k8ag2KTKiFv1GLX9btXv4By+51K1LvkhYUZcR1l1XZV7O6HYrF+Y621U6ptXzBulqkV1XSndXohPVfonQBPS7qeMXYg9alnwAVEVKlR4YoEKqJ-KuFw1dICBcED4WYIq1rkeNXAETXJrdGaaqAEQAzUrJs1ua-NZFCLVmAS1HBctaQErU+oY5NasYnWtjHwaOZPAKEEQGVEcKBmoJI5qoF5CywPpMGgMEJRzR0B80wgU5mdU5p7rpiDSuMa7KxiVK6u3imMnbMHARZLUFmoIpaIfUE9jaRPI-pe3m5n8KeS6lbiGjW6g87Q4PLlruquWtT3Jz6rGDxynVUo+uxTULY0QXUPsotVPFlmuo3XrdH+nLVjnhPaaDrmecPbTbppPXIJ9mbkv9mlvs0YacNzqzsT1ItUzKetr8LIN0H2DpAdF2ov+XZvq3uai+46yFPhq9E6ZiNPqjlH6pQDkbUAVsduK+G-A2UaNIY1sGGPsyMbIxhWrotkFY1OhzZ7ibjREF438a-uOgQTV3RE0oBrYYmtEBJvWBSbFEMmuAKWrgDybFNYAZTcstMC1r61TmjTXcUm1-9kN2cwLv1wPLGa20pm3zY2sCK5prNtmuAe1uMWTF91Tm9mXcQO1vqEWmWhtV-WEp7Ev0whQlh2pJYBlu1M6w-l92P48Dk1+WiLsZ3o4vszOjYCzolsh6WTuhqWuzTUBaWk6QdFRLLVN1nU6dL2HO8bsyzpAlaSwcWwcAlsq246UA1W1AeNux3Q6SdJ3IEgep-7paOtiqbDRbtmVTKfqtAgbS9mG2jbH1euppQbqKKwAeAQAA