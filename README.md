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

* Things needed for TODO MVC parity 
   * http://todomvc.com/examples/vue/#/all
   * https://github.com/tastejs/todomvc/blob/master/app-spec.md
   * ~~input placeholder~~
   * ~~images (for checkbox)~~
   * on blur
   * ~~box shadow~~
   * focus in events (might need to give elements their ids)
   * list filtering
   * trim text
   * object creation and updating (and can fix get)
     * only show delete on hover 
   * localstorage set, get
   * links
   * window.loation.hash (or could look at full routing https://github.com/flatiron/director)
   * input no highlight on hover

* to do mvc with components
  * broadcasting

* allow users to cycle their cycle project's data to firebase (firebase bindings)
   * on value REF change (value)
   * after getting REF once (value)
   * set REF to (value)  (how do we get ID out of this?)
   * push (value) to REF


## Eventually

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


https://preview.c9users.io/stevekrouse_1/cycle-lang/cycle/index.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io#DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD5gAjCNQDGAaygYAntgCmqYZOEQZAfWwBDejJRQAJjOUZ1guSgBm6iAm1Qw1AG7HlqC1ZshUABh2TUTb3wIRhgyYDJwGFBw6mGoAMIAEgCSADIAIgBKAKIAcrwCQmIS0qbWGCrCCAj5ZgCWBrpRMaYAChkA8i1ZGQAqAJq8-Opi9LTUAK5wunHUQrTA+HUNfI4Q4zJNsSgAagCCKQCqWfmCIuJSsqghIBg19RCN0Vs9WQAaPbwAxGYArL+-CyWDz4+FOYhBq3WfDgMhufDB5xKqEctFqThkCBUZTuDU2pj2GV4EFqQUB910K0s6zxqD2h2O8MKiMuKGJQUxwloMnUIRUoWwUnyoKZEKpMmhsIwjLOxRZCiUqmE1Ai6lqMNo+SCPNC4UiT1MiVSmVyJyZstKMnKlWqfCBj2aqDanW6-V4ZmVGAAyrUAF4yMnLYCQjb62n7I6mmUXUzXW628k0lAvd68fyebAgAPAhYI0VrcXAGFwgpRpEoMoVKo4h6Jp1dXoDHhKuZZilBsWJukR6VFaNXSXV+3PN4fHgMIYACiYAHYfgAaKAAFmnC+XC88pCYPwAlK2QbmFsGJcWEebUBXrYPax1666eLHdsT6HA9+3853wwyS72y7Gr6GkxHXhhF1GR5kWcl9xFQ8xWPKVv2ZUx5WUFQ-0pd8AOTUcELPFA0OAO1Eyw3gMGoXRqAQV9hTOPMoRzaD8CLeDqPBBYmKgmi2MlDjWPwLUQjCCI4J7RD5EUFClRVNUwM1YIdQiRNDXSbI8hE3CLyreNcQAusXUbIhal0DA0FfYMP3pSMfxZfDCMwoCeB+Tx00zCDAxY0RaILdicL7ctLUrG0CITHSbz0wZhlEUYJimGYW1c7MzIArsv1PXybOCh1AJTHhvjMMwqIPfAj0LbifLLZDFSqNQxlkWhBXQ6kAIAaSyRsyusgctJrOzsrAdQGDVAqGOKxLMuSyzRLwzqgu0zLiJ4TwoHUcZSKGziitgkqTzNXyKoqD1VXVWTtUEvVMqU41VPapDxMqzFsBqsD6rfRrMpatrUt-abbLm+yNF0XQ1XoNbeJGjsks-CbcPS2bh2ypgADYMygRHkdRkAUaRly7R4jyYPzYTrrEhUVDVbAVvyUatnGtTfJRNETExLQ4xm7qxt2QkeDJlaeklEG8Y2gngH4+Szq2C6VKhun+oZ5RMWxLqh3xDneG5jBeZuUzwfZizaa+m5-1+7L+c8wnPpZDTAp+rZdIbXgDKMkz4rbKnld1ompoNxWiPstMAFITfxujvPNi0rU01mlcdUK7Z4d0Im9P0tYwnXuw9mG2bh0cACZFwzQPBeD0rQ-PfzL29kLnVj-g6H0WgAHVDOM5PXupyG9Y6r3I597LnIL4qQ528rbpULgIGq6haue13UHeqX9ZZ63THm7AIGGGQ0FmOv+82mednb9PvoyrPeHrtAeSiGQZF0BAJGoKB+A2ciYQAfh3oXB9LFlRBkSRxmwY6AldSJgRIFEuKB6bonlpaQ2bdOZqw1hgFuIZU4pSHiyag-AABWMhhAYCZjAhqKCtjtAAEIACkshxGwuAzBOC8EEJZnvMhlDqHzxZJAxmKhmawOVpzGQ9hdTvzonvOeHcYxH1hsveyRgGCWmEQWdypsXrENMGIw+Xcl6oHmsGBRuNlGfyskhD0YwrCkzMJTbWWwkgADEAgeyEPQWowh9pgA0FyXhqBOi8CyAARWQYmXY7DTB0Nwfg7hhCVGJhYVQmh6DTCcLlhExex8+G8AEUI52+ig4FlEa1YJ-ZNGpO0fZH+kgZj6D0fRdaYMU5bFIQUlAfVjIqDgOMMAj8NQV0yjkA4ABZVMFAqlKJyYEOSp1ExpHaPY8BD0RDX3GFyDklh4B0EtIsuA+QwArR5LUZUiZ1AAzvuRIU2zgh7LgNkvi4zdRXO8iM65J1bnVN4vcwqbyGIfPWl815pUHki1Oncv5hUAXPMMZNSSGBTGYndLQLIww0CeP3pzUi5EkgCQCQBFISRPRxK-gkmWUDklIoJESEkSCskvIFsVUFCkAJTMaXtSFh0ZJjKeXS86yRlImnEaXcOVtikoFtneeOXpfT+kpXvGmGiUlSJKdlXO+dKUPIHsXeJyJCVcIVt3CGKKyLUCSHAcm6s+aSqsW7NO4CM5RyythZVhVVXbXxXygKSLhWNljGkXBdBdnKkxagxpjjnGoTAtEWgkhLF1NMLYwN5LGGGv0CALZOyMAXKgLSjALhLDWB0DyLNbhTkpoud0rYfT2hpAZAAcSyD0V8WiUD1wSN0BkKRdi4v9W3d24DEkYmJSWtJ959XotCMMh1u9zXaKbVdK1kjM7SOysSGEABaYyYxxj0CdjjKlyi95ZBSJ6NBzrPayrnfK0ccBlQSq3SqzaN6P5qqPZC6F5jk3nP2QYawfhC1vsuVEgCtiZnqtZHG5JCbYSvt9XAdNNyIj5pzUtTNeFaDrG-ZB-tqAy0Vt4NW2tlL62NubbwGxHQ+kqFxRzXDW6pUH27ZqpJPD0PIpIkOjF9rhrjqjagXYeKjGoGaWgVp7TOlIt6QMng2dR3saFhmyZ0zGUjzVpG1uFrD28YgXR3tDGdXsz1Wio1PNTXXrHdJmDYsDRcsuo0sp5EiCbLZUAjlWxQGNJ7dAk9NrSWDr08axBHaVONNCQwvtf7MoxLYbylAgXwlaeYRQ2JLmNOMJJSrHgGSIhVLyR9ID1qe6jlkczSTNSOPKdnvkiLOWeqjl0WxorQs71FydWpp9sxMS1AsUQxMAHA3UCcS4mE9BtRKdUagUh7R2gpEabGUmCAshuOnhO-eXagOueC-WzzqKDX6ZNZrGroNb3GbovVgsMn6VyYi81sxbWIOpvfW4NrX6QRnLQyF6xdjuu9dce47QjHvE8D8X5rjAXsFhKSx1gCYWeOTRW1ptbKW0sUqM1JkRC31EzqKXK21vAykVKvZBbdoz8eF1yQthpEX+OCY6ay7TWxRODMK3tkz7KzOoCmYBo9bJwllDA0mvgT2btQbzUhlDj2i3KkY5hhkB7KN4-w027IRGSNkZ6BRgHKBsW4oS6iIlMPBWeY5xlhb3HY3slJlMWE7R2vU9MLkNIRGkgZHbWazji3LXLcS6t3XKX9e7epcV4bKAbFJByLbiL0PImw90wa1jiPauHYO8T53PR2jG-CZybkvIDLGWu2m2oAlkAoAoKh-nYPMq7DSGkNnamw-uY-JHw1PnDN46OyXrYZe0hMHe8GmusxuR2atyNsbE2eA2P2Aeg3zu2-Z07y47vyh1B9-raN8bRHR9ZHp77+9jWofu+1RH5j3mDM7aowt6VaOa+VaFDHhncfPnAoYhmlv0abEd4i0GlxSo3H9W+-3lAv3-tO5KxQCCQiyi1Bxe1MAh011lk03D0934UEXSx9x3RRzKxlSRXmmxzIlxzcnjyuVqUANJw9nJzaUpy6R-1p3E2nHX2URO0yimRfwcRAy5zNx52AD5zTUFyhWFwWHYLFx-wl14ClzrUFQI3l2H0V3I16FV3V0h1wmr2S05m9yvw32Rwn1kN8g51axYItyRRtztwd2l0DGoyWyPXkMYz13JXH0AMD2DygO11gIx3WxYxHSQIJ2b3AO0WT1fxAzT21BUEz0RV51Fyg1z1CHz0LxFx-Ufy43L0r0mk0NAxYOz32QzTgxsEF1cBzUiOe3rQEJ4Bw2EIx1EIZEDwMNV1Pzdy1y4R10cJSw22HTAGoIJz3jbwYPATfxUFn17yRSXyHxH33TX1cKJ2iKAPLyn1fx6y72oB73nx6MHxXwGKaOGMJwfxWNMyBWLH+XWLWKZyuVWNoK2D3QPXkxJmZWkjIIOPMyNElgi0tjdRjjvGwAolzwuXKJo2y1nRtXmi5DXlTUESqXBVwgu1a0t14Kgw-VMAYPwDBJGK628JN2Zm52SKg1SPMGzXSMQ0yO-2hOCPF3LSrRrUKNPQbTlxbTbUMIShP3eNMPdxqOJKcLRWjyb1wMJxpVM1kziKBJHjOKOns1FkUgsxuI9juMY3dV4EBgQFXnUEkDeJMLUwqyNlHDVEXRkCXQRABIfSawUz6i0EAX5IAglh5Q9j2jHgningjRGNRw+PR2JPmgQFoGECsP9wqKPQVJPh4F0B5HUFwFqB1JkD4nsHoAAGpYAABuFaMwAADjnAADIIAMBQyEBAyYBIBEBUBMAcACBiAyBKAaAGB8Bs4nJPAAz6AdAHZjJUBFxvAoA0AZBagN1EMqydB7B6giBSFqAPAUAl1-AoBuzIyUYnIUYKAfgUAYz6AEy4yEzhBagHTlAoBhBOzHIdAFBUAlyoBaBVzqy6gIAIBUAL0YQdAggxgf5UBPh+AAZDkRzoNjzVTyy0BUBC98AxyJz4zQyNBjIoBtzdyUBPgfhdBhBs51ALE9AMNpxs4oBs4fgUhFxwLpwmAILpwoAfgEYIAl1FwlwILFpCyoAKBFwl0fhs4fQUAnzxzQzJzQySznzQyNSt9cI7BxhrAbM+9LjUBnN4TOdLQkSgif0EMrhkNsSYT+D8TBDCS8MRDSSFd2hSNJCKSXYFsZC7DqiHD6SvdLChj8D-cjd2KtDE0dDGM9Dh97dHdj9ncXSq9aTlKPNVLSR1K-dEwbCQ8PYzCf8GSo8XDlDlF3C94k8U8OQuQ-CAjkSoBQiwBwii9i0PDRiK9fLEjE0grUSsTc1MT0Twq+DcjhL8jRKt1ZdCNDKyiADnTqTzKqj6NLLa9983LGjbK6sWSWjy82igMOiujZjGNeiFix9qrVDADJ9p9WkZABsQghtEw2rtLYrwNuLINoMmc0ikqZrsji8hKsNMrZLGNijeBW1jK8djDXcaSSqYDz8dMKqGiljip3CzqQVtiHkfkBZVirq791pbqLrdjhZ2SAIjjVMIVuSDpzi9SJkDTBSjTwERSf8xSPSSQpSZSCrzIdr5TPjctVY4AVS1SmQaL4JwE9pfTNBv8WKUBDTp0gMTSMBIAzSnoLTIqrTXS4aL8eB7THTOqE9ACzLJo3T51RxPSjAfS-SSyQzIBwyMAozYzXykz6AUz4B88My8BCASAiByAqA6BGBCynISyyym57yUAmyay6yGzKzqyWyZA2yOzUBuzFo+yBzFomBhzRzSLyLpzZyNgFzNzlzfAUA1yNyXatzagdy9zL1DyoVqATyfzr4g7dBfabyl07yHziKqLyLKLSLUaycJhGLqBbNfrgEAI2LGCTdmC4qJr+deKhcBLcTFrJcsqZdxLcriMpKlcVcoasUcV1CyxnK98eAlDmSkcGbNKG6WQEi1RdLLd60DLSjNqjCqS5Tt89qwDm7W6cD26RiHLFLSqDq4EjqmSZ7Y9FFaqFsfLRrfCM9c9Ai2Dgjgq89I75qIq6rorRrESkjc600EqUr87Eqz60rBU8iCixKiiJK8rh7KTTKirx7oDJ64CV73K27168C7KAJWjermqF9BURr+iOqPLmjDcxjer+tBsRiRrM7otOKb7D6eL76C1H6Urn7f10qlr37sry6xCNqVrIqma5CLKl6B16jV7sxzrZ7WT9suGtjnq7rNinqHNmJ3l7reJHr79tjATdovqpJeSXqmcBTrjAagNgb61QaJSIbZSYbmaqbFSEakb1T6azZVGy4I51GHiPVJQvUlRaBINtGPrcIOiQhaAw0ya94Y0r68Gc6CHJqiH4MMjSGeCi6KGCT6GcraHySHGF79qFCQGqrkHlivKt6p1Js9H3SkbV0JgN0nTEx3q0mbSvj7J9zsCOGWT3DpHh4SZ8JvL7IcH418GwSprhGZqSGC0yG8TKHS7AwImSijL6HtrHHpYJ6Pdai692G2xOHwGto0agNdBBAlBnFRBU7HNTAM72imDvHxrfG87OD+LUryHX6MqhCP7iS1rxCq6ZLpD66YmgGxmyUbLEmNLAku7TAe7tD+7BVB7+nonQ9mG4mW61KnnIHMp56-mRm6SrLxnQG17r8N6uHvKvD6mKh-K96s9b79kQqwqOnIq29OSNCQNr6fGmn-GMS5rgmoji7sNunsxen9Cf65K-6x6mGIWyrdV4mTqQXW96qYHpi584GMcRqegMgjhcmoG0GJiPsMHBqsH5ivGMAuKdm77TNWnAn2mKWcijmunwmaGySGWRjGHhnAHRmVLoWEmwG4WIGareGWTKmOEd82XDqvNNsG8j8trR6dGnHCWtnWCSWVW0TiG1WsiNWFrQnqWdXP6K6fna6A1wXjXIXyrnXjrjHuHrXvkxGbrLrRHBHb8c30283xGpHNTPqSZ+AVpSJmLXrOVlH8aj01HBVQbmw6Bfm0DGN5pPhhBhAWB1Bu347hSzGBUMdQahgRg10YpZhm2Y3O1PW0p0nWavg8p8oU27Ww5XVRTLHeAniEAXi-Up3-Nys52z1eBjAEBZgVpSnJnbXi2uTTiqo5lzShrmpUCz90D7Ia5aBt4U3BmCmWGj2FolVgXN9ZnH1uS73Ho6p3GUCstKbCn4axx6zMAxXY3W2f95p-AAOLWVCvJr2ZHqnppanjYX2237JXg+3wF6Kk6U6+S-rMp1nGrvWFXGmj7USuCyWC6DnOmGRsgy1thBjqHI2xDK7pLlcpC92wxmWjX7Df2mNAXHnMPkC1CYre7zdPmMdvn8qTLGb-6WX43HXl7ZOEd5OUHncwWnL-nzC6jnDzXYWsOrWb8Hqs3c2RGnONjnP823PfkC2BZrqQQJH3PXOAudjhG9jHP-PCcfOuIvPfPQvC3nqV3iYJJvr5Gca8bGl62h2N2eB-pAY4B6AehJ4W2iPUPfY+5l2cOyx0viTQbsugYMgEPDOR6mWZ2F5X34YfgMObODFyuLYB37iq5HjDkcv6B2ysBqBrPf6tOJOWviP4ZSvAOGtgO1NKubVqvBugZlAzAGuJvCqpvO5pO0P2vsYjPlj4u-J+U+vbxGwm3wJNOdvmu9vWvRxPhpwXuyOCbQP7pwP5tncKbYbYPqb3264V0Cuv2PWhnpviv4ZkZT3iRGhPgZAEYEeEe3uQPb3PvJ5SbH23pn3rT9u32Oyl0EBz4bMkPp3weHuZvRxza0ZkZxx1AJxPB1wmeoANxs5tx1woBIzkYTaKBkZvgEYzABeEYOeWAaeMYl1eeMY6eGfmfGeWfSA2eOf0YWfeysYoB+fBfBelfpxkZs5kYl01fpe5fjf1wFfdwyvaLcPEu5GqcUuAba2lvev13+vGxNG15IbbvobyeJF-v9GuZEbpJkazgUetS8Ou4CPXnClygsFqA1QgqsXT6Q3z7UHL7kXlBcv0WGHtPJOlLpOLC5POu3DN6J8eXJXg0XG3GsfXteqP8vskU-9-ExOgCYr0-xyD7v242pOAXp6ymbWEWSdGliChMqd60KCmBOWhZvLUmD3ff3Tj6YXe-pnd0Bif3HveB5-QqJ+urNKJWUP615ooANutvL2+-pmBGPPM24vuubpTikvbeq3xZ7e0uneQbMu3fpTCvce1--fDGUaLfFuS2KEMtqN0raKN-qNbE4ihBqZb06mRXffvZEfAQAliqxU7ntGAEVsVmzOXGk-3OwjxoBieWAV-0p68BdgeCWoP8RTZ8NguMzXAaW3LbKhMBSjblA70AGqB8BgBeaHv0FTzQZgbiQwNfGQExdvOGbEEBF0YgiCFgfnTzhf1EESDxBUXSLjIMUGBdz+KgoRqLDUEudwucgsQWIJQHX8EuioO-hcQf5XFmBz-c7s70u4kRJQj4esi+Cb6GsIe8A7KCBAiBgQQ+k0ZbteBd68A+oA0OAPl2wCf8YOePbKAjEO6eD1IL-Cxr4KbATsbu7rJrt7yj7f8zyZgfgBkKXbzdsOlvKptbyMA-VqOadatuYNoFQD8OMAwjkQMh6jg0gEwEwEukWa9h7418XPEtGOTUBBBV-PIXKFkaFDkupg+IDgONJ4DKhBA6oaEO-71xUQWAcIA-EkBQBPQIQQRFACahrprA3Q6gagP6EsoTBYA0oZZnKFsDxhHAwgVMOIE8AWg-USINQDMBQB8u5EKAH0m2BxAthGg7QQoPkFKDvhmgsLlQI+GqDPhPw3QXIKkF4xZkYwECLoEWS9p9AZgC9FyAwAbIdAi5FgNOB8BG0EYImXYH0gZCDdOhr4D-BMmwBqgYQugVpmrUjLVkiAfgBGAEC9QIBOQtQR+BIDQAkhPykwMgcqFIC8iFgxI55DjXIxxAmojKExC1hfSwk3sZfPrP1UwaRVsGZ+abLNgFCQdkhtzE1lCwRqutj+dneFmfxZI41WcMVbOtsyaZBtC6lLMNjwCDwHpRO-HM5l-TobXMNcnfXPt3yBbHdnmmEJFhsxNy71VAgVDFiERPoF4OOuLWIhqITbst-eOo0nqYGgYyjOifLboq1TlaIM+OXorlgmN37tFJiM+FMS1R-wINV8W-XIQAJ05Epd8wDWMYfl1FZ9duPvMIXahyF-DYu1AgEYCkJywAeAQAA