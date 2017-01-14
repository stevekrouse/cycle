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
   * ~~on blur~~
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

https://preview.c9users.io/stevekrouse_1/cycle-lang/cycle/index.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io#DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD5gAjCNQDGAaygYAntgCmqYZOEQZAfWwBDejJRQAJjOUZ1guSgBm6iAm1Qw1AG7HlqC1ZshUABh2TUTb3wIRhgyYDJwGFBw6mGoAMIAEgCSADIAIgBKAKIAcrwCQmIS0qbWGCrCCAj5ZgCWBrpRMaYAChkA8i1ZGQAqAJq8-Opi9LTUAK5wunHUQrTA+HUNfI4Q4zJNsSgAagCCKQCqWfmCIuJSsqghIBg19RCN0Vs9WQAaPbwAxGYArL+-CyWDz4+FOYhBq3WfDgMhufDB5xKqEctFqThkCBUZTuDU2pj2GV4EFqQUB910K0s6zxqD2h2O8MKiMuKGJQUxwloMnUIRUoWwUnyoKZEKpMmhsIwjLOxRZCiUqmE1Ai6lqMNo+SCPNC4UiT1MiVSmVyJyZstKMnKlWqfCBj2aqDanW6-V4ZmVGAAyrUAF4yMnLYCQjb62n7I6mmUXUzXW628k0lAvd68fyebAgAPAhYI0VrcXAGFwgpRpEoMoVKo4h6Jp1dXoDHhKuZZilBsWJukR6VFaNXSXV+3PN4fHgMIYACiYAHYfgAaKAAFmnC+XC88pCYPwAlK2QbmFsGJcWEebUBXrYPax1666eLHdsT6HA9+3853wwyS72y7Gr6GkxHXhhF1GR5kWcl9xFQ8xWPKVv2ZUx5WUFQ-0pd8AOTUcELPFA0OAO1Eyw3gMGoXRqAQV9hTOPMoRzaD8CLeDqPBBYmKgmi2MlDjWPwLUQjCCI4J7RD5EUFClRVNUwM1YIdQiRNDXSbI8hE3CLyreNcQAusXUbIhal0DA0FfYMP3pSMfxZfDCMwoCeB+Tx00zCDAxY0RaILdicL7ctLUrG0CITHSbz0wZhlEUYJimGYW1c7MzIArsv1PXybOCh1AJTHhvjMMwqIPfAj0LbifLLZDFSqNQxlkWhBXQ6kAIAaSyRsyusgctJrOzsrAdQGDVAqGOKxLMuSyzRLwzqgu0zLiJ4TwoHUcZSKGziitgkqTzNXyKoqD1VXVWTtUEvVMqU41VPapDxMqzFsBqsD6rfRrMpatrUt-abbLm+yNF0XQ1XoNbeJGjsks-CbcPS2bh2ypgADYMygRHkdRkAUaRly7R4jyYPzYTrrEhUVDVbAVvyUatnGtTfJRNETExLQ4xm7qxt2QkeDJlaeklEG8Y2gngH4+Szq2C6VKhun+oZ5RMWxLqh3xDneG5jBeZuUzwfZizaa+m5-1+7L+c8wnPpZDTAp+rZdIbXgDKMkz4rbKnld1ompoNxWiPstMAFITfxujvPNi0rU01mlcdUK7Z4d0Im9P0tYwnXuw9mG2bh0cACZFwzQPBeD0rQ-PfzL29kLnVj-g6H0WgAHVDOM5PXupyG9Y6r3I597LnIL4qQ528rbpULgIGq6haue13UHeqX9ZZ63THm7AIGGGQ0FmOv+82mednb9PvoyrPeHrtAeSiGQZF0BAJGoKB+A2ciYQAfh3oXB9LFlRBkSRxmwY6AldSJgRIFEuKB6bonlpaQ2bdOZqw1hgFuIZU4pSHiyag-AABWMhhAYCZjAhqKCtjtAAEIACkshxGwuAzBOC8EEJZnvMhlDqHzxZJAxmKhmawOVpzGQ9hdTvzonvOeHcYxH1hsveyRgGCWmEQWdypsXrENMGIw+Xcl6oHmsGBRuNlGfyskhD0YwrCkzMJTbWWwkgADEAgeyEPQWowh9pgA0FyXhqBOi8CyAARWQYmXY7DTB0Nwfg7hhCVGJhYVQmh6DTCcLlhExex8+G8AEUI52+ig4FlEa1YJ-ZNGpO0fZH+kgZj6D0fRdaYMU5bFIQUlAfVjIqDgOMMAj8NQV0yjkA4ABZVMFAqlKJyYEOSp1ExpHaPY8BD0RDX3GFyDklh4B0EtIsuA+QwArR5LUZUiZ1AAzvuRIU2zgh7LgNkvi4zdRXO8iM65J1bnVN4vcwqbyGIfPWl815pUHki1Oncv5hUAXPMMZNSSGBTGYndLQLIww0CeP3pzUi5EkgCQCQBFISRPRxK-gkmWUDklIoJESEkSCskvIFsVUFCkAJTMaXtSFh0ZJjKeXS86yRlImnEaXcOVtikoFtneeOXpfT+kpXvGmGiUlSJKdlXO+dKUPIHsXeJyJCVcIVt3CGKKyLUCSHAcm6s+aSqsW7NO4CM5RyythZVhVVXbXxXygKSLhWNljGkXBdBdnKkxagxpjjnGoTAtEWgkhLF1NMLYwN5LGGGv0CALZOyMAXKgLSjALhLDWB0DyLNbhTkpoud0rYfT2hpAZAAcSyD0V8WiUD1wSN0BkKRdi4v9W3d24DEkYmJSWtJ959XotCMMh1u9zXaKbVdK1kjM7SOysSGEABaYyYxxj0CdjjKlyi95ZBSJ6NBzrPayrnfK0ccBlQSq3SqzaN6P5qqPZC6F5jk3nP2QYawfhC1vsuVEgCtiZnqtZHG5JCbYSvt9XAdNNyIj5pzUtTNeFaDrG-ZB-tqAy0Vt4NW2tlL62NubbwGxHQ+kqFxRzXDW6pUH27ZqpJPD0PIpIkOjF9rhrjqjagXYeKjGoGaWgVp7TOlIt6QMng2dR3saFhmyZ0zGUjzVpG1uFrD28YgXR3tDGdXsz1Wio1PNTXXrHdJmDYsDRcsuo0sp5EiCbLZUAjlWxQGNJ7dAk9NrSWDr08axBHaVONNCQwvtf7MoxLYbylAgXwlaeYRQ2JLmNOMJJSrHgGSIhVLyR9ID1qe6jlkczSTNSOPKdnvkiLOWeqjl0WxorQs71FydWpp9sxMS1AsXwM5kGoAfpkG1r9IJOupuVEQxMAHA3UCcS4pUbj+raEY94ngfi-NcYC9gsJSWRsATCzxyarngv1s82lilRmpMiInSgdRM6ilyttbwMpFSr2QW3aM57hdcnnYaRF-jgmOmsu01sUTgzCug02jJ+lcmIvNbMW1pTqjUBjYi0GlxMJ6Dalh4mUh7R2gpEabGUmCAshuOnud6VtHUREq0wdlLqKDX6ZNZrGrIO6vGbovVgsYPMpTMA0etk4SyhgaTR1ot+y81IZQwN4Xv762YYZAeyjT38NNuyERkjZGegUeWygbFuKEvk64ZTwVnnecZfO9x2N7JSZTFhO0dr-3TC5DSERpIGR21ms4-vLtQG9sG5u0b8lJv3c2KSDkR3EXveRKp7pg1rGTu1dZyz977uejtHN+Ezk3JeQGWMhBobUHagCWQCgCgqHc+bcyrsNIaRudqfD+5j8UfDU+cM09tnZetgV7SEwcbk2VA11mNyOzdvUCY+x0R-YB6A8lZQB37O3fg19+UOoQf9aR8454DY8fWRgfUs2uC3Ce3tWR+Y95gzDOqMk5o9l2dNr5rb5BD8gWGarlP5C9YmxXfEcTeDdN9xc2h8oAWyWzdynyCQiyiw21f1MG2111lk0wj0NxSyO0nzhwuzKxlSRXmnuzIkezcgTyuVqSn0+w9m+zaV+y6X-0B3E2nDvxew5y2CmQ-wcRA35yt0F2AEGzTVFyhXFwWA4OG3-xl14DlzrUFQI2V3X1V3I16E121x2330S32wQM5mN0Zx3yFj3jN0RxAzVETRtyRQdydxd3l0DGo09yPVr2S2UP91UJ3XOyDxDxgIp3gN92pxYxHRsJe1b0gO0RTy0It3T21BUCz0RSFx-SgHz1CEL2Lwlx-Tb1MA72r0ml53jVYJzzTQzTgxsFF1cBzRiLQwEPLSrRrREJuzEIZCDyMM11Jy9wUJ91PSYy82j3cNjyZ3j1O0TxAMr0YPASR172oH7yXyRVXzH33S3w8LeziK40r1n0-x7wXwHyGKxzXw31GJoImNexfweQfxBBfz318kEEWUAVFhASZDASAyh1a1tz3gRwcS-2RxkFRxCHRwAmGPK0lHx0JwFAjUmI90tRqL13o2cPqM8xp0b1P2OxbzwNe2Ki8LoNMC51TzcwFzSJF0Q24L-3wD4Kl0FUEJ4GELw1EKV3KMkPV2kOAJQNkMcP1yBI8xSxUJaLULO3d00KYItx0Ot1t3rQMPX2d1d3P3d2qPMNqJpPrzJVJHGIIJQPsNDw9gsMYxBLcLADWMlKIl8NZLTy5ECOCJRLzwL1QGiN4Mlx+ISKpMBLr11WP1pybzP0hPaONK6LnxcXmMGMY1eJWInwlOKxQJn0dL6IGOX0FTdM32VN3wfRrwUMPyUMtLBPpwhJMIvzMLUwqyNjtQZOUS2OBQYk2JBVMyBWLH+VzI2MLLhNQD3QPXkxJmZWknIJLJQAlh5Q9ktjdRjjvGwAonzwuSqMvyPWTJPjHAMF2UESqT2OHkrIOmrKOImQAnrOnSAybMY3dV4EBgQFXnUEkC7MTMml7PnVHDVEXRkCXQRGHLDIhQUz6i0EnOAWnIs0lkhxHjHgninm+O8NQKyx7Ov1y14AQFoGEGQPMj+J5zuJDVoDDWfOuJsURNA1SNCK6wyPMGzSyMQxyIxKxMY1xJwxKPqLKN4FbT5Ke1MIAvDIBLgPNJ02jJj1tLj0UShL3h6CnVxw-MqyXJ5HUFwFqHPJkD4nsHoAAGpYAABuFaMwAADjnAADIIAMB+KEBuKYBIBEBUBMAcACBiAyBKAaAGB8Bs4nJPAuL6AdAHZjJUBFxvAoA0BesN1EMTKdB7B6giBSFqAPAUAl1-AoAXLhKUYnIUYKAfgUAxL6ApKJKpLhBagfzlAoBhAnLHIdAFBUBoqoBaA4rTK6gIAIBUAL0YQdAggxgf5UBPh+AAZDlfLoMcqDzDK0B9SUB8B-LArJL+KNBjIoAUq0qUBPgfhdBhBs51ALE9AMNpxs4oBs4fgUhFwBrpwmBBrpwoAfgEYIAl1FwlxBrFptKoAKBFwl0fhs4fQqqar+Kgr+K9Ldq-yAIyzVMtzGKUzmKjA2KOK9K+LIBBKMARLxK6qZL6A5L4BC8lK8BCASAiByAqA6BGBtKnI9KDKm4KqUBrKzKLLMBjLTLbKZB7LHLUAXLFp3LPLFomAfK-KAq9q6qQqwqNhIqkqYrfAUB4rEqKbkrahUr0rL0sqoVqBcrWrr42bdBGbSql1yrKrqq8b9rDq8aQz71GtJo7BxhrAbNB9aznM-C+dLRkSYLc8EMrhkMUKjSCisM8TiiCTSiiSVd2hSMpDjCEpztKSw9hTSK4ExS4zswvCNC5DfJkjLddDOTBVuSKi8L4yBTuyiLYCICj8eB6TKLWiOipTg8ZSyd-bFCXCG8KLcC7ToSvTVTIKAjM988Qj2DJdwi9Si8S9i0XyTS5aUjE0dToN2UkKELc1K6C08jS9NaiiTa2xFdCMeTKjyT-yzr5DiKA6ozGjh0lTPTmdE6NCHTZj59+jF8AybsgzVih6mTOi0gZjbie8Uc0cfjXj1SS7wMlb0jTNMjq6D666C7pdCjsMdat0W7xDcKm6fjBS-anCraB1QT467aoSvCP736cyK68zmJv6HM-7PlMz1pdiTzcImVxyjp7NjjryjRbzGyy4I561FyeBlzVz1yO6IZNzoYLq+y9zpJDymRjzRb1JEGBUbsUHPVvVaBIMNzCKkigKQgQL+owLzsY1i6oLS7d79k4LkLD74La7DTYiG7z7b7-9sKeAb66Gu7pYe6Y7gTXC0VX62xP6R7zs6KGyrsn6z0yVl1V0JgN1jrMpTqGLrt6j5oMqcC37E6vCRy5QR58JaL7It7OGd6s6wjeGq6VaBHcihH8jT6taMLdasL9a26vbTafbsHZHo66jaS47miQ7GTqLE67HTBdBBAlBnFRBLzHNTBZaXGWCuH3GusuC1b87+CAnZcL6FdCTW7iNDa1cNdMHMpzbZTLbLCbajH29Hayxnb2SQA9DGMPbeSxGCKZGyw5T-8-dxS0yXs95pTTSSKOn+7lH8Db0aL1G1SeiQM07VBtTuHdTIjKrj7+DR6q9ILmZFbinlbPGC1vG+GTnsSbt0LqnAwr7yiRnpHFne7Y7yKEmE6qK1n1DTcx6V6J7-TFjR8eAegMgjgun4jpjfS16niN6liLmFboLrm96K6D77mq7Hm0Kz6eAgnL7anr621RmEz6Hu6YmRSLSVn-nrHAWk7h7mXbGwHomiVIzfn+66dfNmnO1qWnaQNLnMWsTy6AHcXsj8W-H67KnRHMKbUJHPbKXImhWJn2n5TFGmjB7Zn1jVHvlgHeJsygH8z3kjWBZtiFhQGSHdoR5+AVpSJpbTNFIbzNG5yyHmyq47xmw6Avm3izGb97JPhhBhAWB1Bw3iH4JwF5z-8UGhgRg10YpZg-WBX-MA3tHbsco8p8p56vIOWyxY3kGWzGw2yEAOy-U02wwomF4MD7JjAEBZgVorGVGoTUniYJIqo5knzni3o0CtG63soa5aBt48277fbzrA3PyFolU9XHVo3ziR5rRHynpWH3dLsr8p2mKxxahLL4Xq31XO5M35p-BZ3EmDEC37GSZHH1HnGB3GN5pXgo2vsJhJbqBbMcmzNUB8ntmLdRWinxW4L0T+HgOCWRGeBsgy1tgxjSW9a6mSSmn+Sp977dtNWpm6TrC53k6AIWTf3wl+nBn-9hn26kOUCUOaXH7lng6AXQ6fiFmLa5HYnRSGXdXz3PCv6szCyMyzXTXAHDWeP+O+PfkBPhOhPH8uPzWRPLWLX78ZPrWJPOOf7XsrXGI5PVOpOdiFOQHCz22UAIGpIoHhYXXYHuVZyj0i3BUUH-pAY4B6AehJ5-X0CH3fY+4x2toF3zPPWFyS3eBrOgYMhd3MBHP73-8T2fgz2aOkmzYPX+UvXbxS3DkbP6AHKsBqBWPvbkOJ2cGt3LqeBT3sY2P1jdOLOKGfOeA-PbPlAzBbaXYqXxmj3B3RwtwIumXaP3OIsSv6iUHfXwJSPO7THj3g3pxhvn2PYmUu3Ho6o12p8N33ycu+zh264V0HO3OxmBvGvUxkZG3iRGhPgZAEZ9v9vRvwFxv7pJvid13+3N3Buh3HKl0EBz4bN93fj6uJF5udzeAsa0ZkZxx1AJxPB1xAeoANxs5tx1woBhLkZ0aKBkZvgEYzB4eEZweWBvuMYl0YeMZfv-ugeAfgfSBQfwf0Zge3KsYoA4eEeEfCfpxkZs5kYl1Sesfcemf1x8fdw3PdP9OjAJzoGpzOU4H3XPPYvvPvXGw0G14MG+usHD23ubvdy4B9zCGzhjvF3r3ponHjYtGVAsFqA1Qy6IiwAojynf0znEjcJnblBbPs9x2a2OE0PA7qPWuouWWF7vTQWejGHQ0WHe239fSf9ZskVAD-Eq3p9IKLeArM61uGPaXM3pmaugW2jmW94iDwESChM-t61KCmBhaXeiJ6KM2NueAc7GXW21H3cTH8-nPsoi+Dfs+w7AlEWK-Qv7IoAqu4-nfkm2XJOxPNOlOOel3IG-tayZzGlOubUUGxe1zgvruC-8Hl0jz2fL2boSYHXUvnWK7XX+ezOmsHG1fb2Nfp-K-RxHwIA1ibWPPt-l-HXlRP2N-TOKyUIb2k872D+m-spdg8Faghy3OCze-F+O3VAV+TrG-iZ0sx3lVeXcdXj0wa6H9eAMwNxIYGvin8tOonX+qgKLJKduO3fLiBp2wFYD1OeAlToQLU4qcTWgnNAZgPIFd9n8OnP-np374GdB+xnPnnfw65ec42ZXB8E+BfDB9yOaUXBh9ybCgReuhXedqwKF7sCRevAPqANDgD2dsAU-ObrL14AIxwuBXSLhe1taFs2BxbSQU2BTbCCMuZHLLnwPe46Mco-AMwBYIsHK9H09ArnoZyH5ust+p5cAUwj35QCZeBfNIBMBMBLpMmvYe+NfHzxLRjk1AJAb-00FXsJIA-GskwPFhOD7+qgR-lPlvwhd6080euKiCwDhAH4kgKAJ6BCCCIoATUNdNYHCEANoutgscgwNiHr8QB8DE7jvwgHuD1uMAngC0H6iRBqAZgKAPZ3IhQA+k2wOIOUNFiUDeOYwsgcpzU6kCUBUwnAfgImHGtkBeMWZGMBAi6BFkvafQGYAvRcgMAGyHQFFRYDTgfAqNBGCJl2B9IGQiXUIa+GmwTJsAaoGELoFxaQ1hKplIgH4ARgBAvUCATkLUEfgSA0AJIJqpMA-7KhSAkIhYPcOeS1lyMcQJqIyhMQtYX0PxG4u71XoPF16L5TeprxJCfELumXG3gSkY50syKXMPls3nUHscbGUJWsgiQ4aFM3G4raVoI0xIa15WPAYPAejJKwcQmrdKRsH1aZR1KOWrKwjMxEHYc5oWzIDM7V2ZBEM6evXOgaXZHCMTe3zeRnE1ViUibS1I9Ymc26KyigKzpaevUVnoeksOwLZkg3zBZOlJ6CxV0mi3XzBlv+bbWgQfjJHW0KR1pNvpHyc6v9Uyko1lrMJ-4VD0BYYh5LAB4BAA