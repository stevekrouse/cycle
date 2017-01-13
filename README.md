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


## Current TODOS

* components


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

* Things needed for TODO MVC parity https://github.com/tastejs/todomvc/blob/master/app-spec.md
   * ~~input placeholder~~
   * images (for checkbox)
   * on blur
   * box shadow
   * focus self
   * list filtering
   * trim text
   * object creation and updating (and can fix get)
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


https://preview.c9users.io/stevekrouse_1/cycle-lang/cycle/index.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io#DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD5gAjCNQDGAaygYAntgCmqYZOEQZAfWwBDejJRQAJjOUZ1guSgBm6iAm1Qw1AG7HlqC1ZshUABh2TUTb3wIRhgyYDJwGFBw6mGoAMIAEgCSADIAIgBKAKIAcrwCQmIS0qbWGCrCCAj5ZgCWBrpRMaYAChkA8i1ZGQAqAJq8-Opi9LTUAK5wunHUQrTA+HUNfI4Q4zJNsSgAagCCKQCqWfmCIuJSsqghIBg19RCN0Vs9WQAaPbwAxGYArL+-CyWDz4+FOYhBq3WfDgMhufDB5xKqEctFqThkCBUZTuDU2pj2GV4EFqQUB910K0s6zxqD2h2O8MKiMuKGJQUxwloMnUIRUoWwUnyoKZEKpMmhsIwjLOxRZCiUqmE1Ai6lqMNo+SCPNC4UiT1MiVSmVyJyZstKMnKlWqfCBj2aqDanW6-V4ZmVGAAyrUAF4yMnLYCQjb62n7I6mmUXUzXW628k0lAvd68fyebAgAPAhYI0VrcXAGFwgpRpEoMoVKo4h6Jp1dXoDHhKuZZilBsWJukR6VFaNXSXV+3PN4fHgMIYACiYAHYfgAaKAAFmnC+XC88pCYPwAlK2QbmFsGJcWEebUBXrYPax1666eLHdsT6HA9+3853wwyS72y7Gr6GkxHXhhF1GR5kWcl9xFQ8xWPKVv2ZUx5WUFQ-0pd8AOTUcELPFA0OAO1Eyw3gMGoXRqAQV9hTOPMoRzaD8CLeDqPBBYmKgmi2MlDjWPwLUQjCCI4J7RD5EUFClRVNUwM1YIdQiRNDXSbI8hE3CLyreNcQAusXUbIhal0DA0FfYMP3pSMfxZfDCMwoCeB+Tx00zCDAxY0RaILdicL7ctLUrG0CITHSbz0wZhlEUYJimGYW1c7MzIArsv1PXybOCh1AJTHhvjMMwqIPfAj0LbifLLZDFSqNQxlkWhBXQ6kAIAaSyRsyusgctJrOzsrAdQGDVAqGOKxLMuSyzRLwzqgu0zLiJ4TwoHUcZSKGziitgkqTzNXyKoqD1VXVWTtUEvVMqU41VPapDxMqzFsBqsD6rfRrMpatrUt-abbLm+yNF0XQ1XoNbeJGjsks-CbcPS2bh2ypgADYMygRHkdRkAUaRly7R4jyYPzYTrrEhUVDVbAVvyUatnGtTfJRNETExLQ4xm7qxt2QkeDJlaeklEG8Y2gngH4+Szq2C6VKhun+oZ5RMWxLqh3xDneG5jBeZuUzwfZizaa+m5-1+7L+c8wnPpZDTAp+rZdIbXgDKMkz4rbKnld1ompoNxWiPstMAFITfxujvPNi0rU01mlcdUK7Z4d0Im9P0tYwnXuw9mG2bh0cACZFwzQPBeD0rQ-PfzL29kLnVj-g6H0WgAHVDOM5PXupyG9Y6r3I597LnIL4qQ528rbpULgIGq6haue13UHeqX9ZZ63THm7AIGGGQ0FmOv+82mednb9PvoyrPeHrtAeSiGQZF0BAJGoKB+A2ciYQAfh3oXB9LFlRBkSRxmwY6AldSJgRIFEuKB6bonlpaQ2bdOZqw1hgFuIZU4pSHiyag-AABWMhhAYCZjAhqKCtjtAAEIACkshxGwuAzBOC8EEJZnvMhlDqHzxZJAxmKhmawOVpzGQ9hdTvzonvOeHcYxH1hsveyRgGCWmEQWdypsXrENMGIw+Xcl6oHmsGBRuNlGfyskhD0YwrCkzMJTbWWwkgADEAgeyEPQWowh9pgA0FyXhqBOi8CyAARWQYmXY7DTB0Nwfg7hhCVGJhYVQmh6DTCcLlhExex8+G8AEUI52+ig4FlEa1YJ-ZNGpO0fZH+kgZj6D0fRdaYMU5bFIQUlAfVjIqDgOMMAj8NQV0yjkA4ABZVMFAqlKJyYEOSp1ExpHaPY8BD0RDX3GFyDklh4B0EtIsuA+QwArR5LUZUiZ1AAzvuRIU2zgh7LgNkvi4zdRXO8iM65J1bnVN4vcwqbyGIfPWl815pUHki1Oncv5hUAXPMMZNSSGBTGYndLQLIww0CeP3pzUi5EkgCQCQBFISRPRxK-gkmWUDklIoJESEkSCskvIFsVUFCkAJTMaXtSFh0ZJjKeXS86yRlImnEaXcOVtikoFtneeOXpfT+kpXvGmGiUlSJKdlXO+dKUPIHsXeJyJCVcIVt3CGKKyLUCSHAcm6s+aSqsW7NO4CM5RyythZVhVVXbXxXygKSLhWNljGkXBdBdnKkxagxpjjnGoTAtEWgkhLF1NMLYwN5LGGGv0CALZOyMAXKgLSjALhLDWB0DyLNbhTkpoud0rYfT2hpAZAAcSyD0V8WiUD1wSN0BkKRdi4v9W3d24DEkYmJSWtJ959XotCMMh1u9zXaKbVdK1kjM7SOysSGEABaYyYxxj0CdjjKlyi95ZBSJ6NBzrPayrnfK0ccBlQSq3SqzaN6P5qqPZC6F5jk3nP2QYawfhC1vsuVEgCtiZnqtZHG5JCbYSvt9XAdNNyIj5pzUtTNeFaDrG-ZB-tqAy0Vt4NW2tlL62NubbwGxHQ+kqFxRzXDW6pUH27ZqpJPD0PIpIkOjF9rhrjqjagXYeKjGoGaWgVp7TOlIt6QMng2dR3saFhmyZ0zGUjzVpG1uFrD28YgXR3tDGdXsz1Wio1PNTXXrHdJmDYsDRcsuo0sp5EiCbLZUAjlWxQGNJ7dAk9NrSWDr08axBHaVONNCQwvtf7MoxLYbylAgXwlaeYRQ2JLmNOMJJSrHgGSIhVLyR9ID1qe6jlkczSTNSOPKdnvkiLOWeqjl0WxorQs71FydWpp9sxMS1AsUQxMAHA3UCcS4mE9BtRKdUagUh7R2gpEabGUmCAshuOnhO-eXagOueC-WzzqKDX6ZNZrGroNb3GbovVgsMn6VyYi81sxbWIOpvfW4NrX6QRnLQyF6xdjuu9dce47QjHvE8D8X5rjAXsFhKSx1gCYWeOTRW1ptbKW0sUqM1JkRC31EzqKXK21vAykVKvZBbdoz8eF1yQthpEX+OCY6ay7TWxRODMK3tkz7KzOoCmYBo9bJwllDA0mvgT2btQbzUhlDj2i3KkY5hhkB7KN4-w027IRGSNkZ6BRgHKBsW4oS6iIlMPBWeY5xlhb3HY3slJlMWE7R2vU9MLkNIRGkgZHbWazji3LXLcS6t3XKX9e7epcV4bKAbFJByLbiL0PImw90wa1jiPauHYO8T53PR2jG-CZybkvIDLGWu2m2oAlkAoAoKh-nYPMq7DSGkNnamw-uY-JHw1PnDN46OyXrYZe0hMHe8GmusxuR2atyNsbE2eA2P2Aeg3zu2-Z07y47vyh1B9-raN8bRHR9ZHp77+9jWofu+1RH5j3mDM7aowt6VaOa+VaFDHhncfPnAoYhmlv0abEd4i0GlxSo3H9W+-3lAv3-tO5KxQCCQiyi1Bxe1MAh011lk03D0934UEXSx9x3RRzKxlSRXmmxzIlxzcnjyuVqUANJw9nJzaUpy6R-1p3E2nHX2URO0yimRfwcRAy5zNx52AD5zTUFyhWFwWHYLFx-wl14ClzrUFQI3l2H0V3I16FV3V0h1wmr2S05m9yvw32Rwn1kN8g51axYItyRRtztwd2l0DGoyWyPXkMYz13JXH0AMD2DygO11gIx3WxYxHSQIJ2b3AO0WT1fxAzT21BUEz0RV51Fyg1z1CHz0LxFx-Ufy43L0r0mk0NAxYOz32QzTgxsEF1cBzUiOe3rQEJ4Bw2EIx1EIZEDwMNV1Pzdy1y4R10cJSw22HTAGoIJz3jbwYPATfxUFn17yRSXyHxH33TX1cKJ2iKAPLyn1fx6y72oB73nx6MHxXwGKaOGMJwfxWNMyBWLH+XWLWKZyuVWNoK2D3QPXkxJmZWkjIIOPMyNElnOxHn4BWlIj70uPiAsxuI9j2nwj3nmgcUmJcRCFoDDQjRGJjW8JN2Zm52SKg1SPMGzXSMQ0yO-3wF4N-VyPLSrRrUKNPQbTlxbTbUMIShPxo0qOgLAL3y8yjxcOUOUXcK+KnUm1nRtXmgODgGEDQFwVECsP9yONU0mgqyNlHDiDZLECWMdXgnATsHGGsBsyeNMxASZDASAwSOYMTUhIQyuGQ0RORPFzRMEIxLwxEJxIV3aFI0kPxJdgWxkLsOqIcKxIsNJCGPwP9yN1BPCTVETR0MYz0OH3t0d2P2dwqNMPdxqNtK90sIdL90TBsJDw9jMJ-ycLRWjyb1wMJ0dKIi8MYJN18Iz1z0CLYOCKgFCLAHCKL2LQ8NGIrxT3jSSKCJ-WgyZzSNzXhNhJLL4NRKw3yL1K3Vl0I29LKIAP9wDKryDJtI8zqOcMaPDLq2TJaPLzaMVN+M6OmLnwX0FV6IWLH0nNUMAMn2n1aRkAGxCCG0TDXJdKrJVJrMgzrIcybILTVJhILWyOL34J1I7LNMY2KN4FbV9Lx2MNd0DKqPoxHNr33wpInKpLcOTPcKgpBW2IeR+QFlWPBVwiZQOnOMAVFkUleJ5Q9ktjdRjjvEBgQFXnUEkHKKJKPT5JPi5jgEXRkCXQRCqSQt2hHk+IW2+PaJA3BOrLzNrOhIRMbIbMfNLLbPRLfJ-w-N7O-KMMJJMKHIApgPPx0xAoaJFM2iYrLF0EECUGcVEHQomQAmc1PKxEtAhIvP5zvK4M1OCO1PbKEP1KKMNPEONKVxV37MTEtND2HMUrgTJXtPAuWJaPULLASLdPN0t3rS9NKKkoJP9PIrkpJI91qMULDP8tTIAijKtMAu8oHXqMTJwKR0UWnLYvTI4szK5D8ICNVMLOLKEr4JnIrKMq4vPJ4svL4ubLvP4tqpRMFTyIKPsqxIkqirEt-J5LkK8oUOUryuzGgoKpGNaN3K6NmMYxPJ6AyCOE5MCTGN3P60GxGJPIzOixMu4uRKvNFgbI6ubK6pstEsxJtQkq-OGpkr-PivsOyrDDrymrbBmtj0KtmpTLUofReq1SAt1WUq218zcohlkviM4qOuapOratvIyMup4OsufPbL6q7INJ7KGrIuhrGvktJLgMmspKTL+u+t+U2Jgt2MJ3gpBDpoWEQsBohTuIeOVD0uAQAglmwvAVwsY3dWAlmDoDxuet5IZNyy+GEGEBYHUBlsYuZvUjLgjnrQFp4CGBGDXRiiFvAj9MAMHLFvRyxPmlynyk3K8gVuYpJlYsT3sjQMY3mleHlq31wglKlOoFsw5sc1MEMoOrPPAzMrTWhMsoEqFysqiPRoZGyDLW2EGKxocpxokOVykMhoDU8sJsSpDOSr8rJp+rmqCpZBCu0PCsFUip9MetivxulnTuDNHKzoRxzuvwT2sKD2jNo2rpBqUvJJUrNrwP23v1gveTv2+SHspuYmpuvI2LHtvypv7ppq2LnsHpnuHqXtHr2IHtnonq2jFKAxQqkiOnswwq5qwunSAz5p-1Vv+kBjgHoB6EnhFtGrSnFovx4H8CVVSoBudt8jPpVvwsbEvqBgyFqA3XrukortFuhifv5NTB+DfobpUPNs-rLG-sFQvsOSvvoFIWoCwGoDAp-KeofoXnQN9j7h7q3oi2QYx1QYBiBmUDMBAZir1rioNresxxfpgexjgYMQtqQaVoFUod-sFril1oHKYYgcNsZPsk+GnGkadu3sfRHmtAniniBLLNR2y0gaoprloDrhXTvtIZGvpPEYlpfuRgQFmEMigE+BkARmsesdkduNONQv3uFllKPuuJ5tPt4bwqrgIpJGItIpTs7XAcfqMefrVFovoqZHsfeJYumi+NtrPxUCwWoDVCqrz1QAiNRvDvqriNwgSOUGvqzxGP1oJoSpruAp4CUM4Ygr+vqrnPZwXP+MBKPP-RsV3I-y+yRT-38UCdMGAN9pUAKfoCKbLJKarrKY7p8sqZSuqeWJpJJ0aWIKEyp3rQoKYFUqFlpI8Yoo0fnVHALM+t7s2YW25MMZYfmgObCI2a3KdK2vK12bPV4CgFofoa+sgveenqnvWiZsQblAUacap2eJQG5pPqPQoaxNVsIv8fvrOaIeynCekkibOGifAT2nuOwZlKZ0wvcdBaa1ia7nieNjPzhdHEfAgCWJ+bkbxZJnRceM9uZ2BePpOJQmtsAPYvUdCagZ4F2DwVqEEQpe2PUr+ZpbZsxevOxe5VxZZqtribYoSY5fOfshmDcUMGvgFYXs+cnq1Z2M3rgpHoFgZsYn1fpuNa4hXoNdNaNfNZBFWL1etbNa+dXtpstcNcpYcYkgBYuNcc5RxcaXBZtVVofCfBfF6bDErsIftvshAgiDAhRc8f5W8dvEbD6gGjgFvuwBhfuc5aooRnYbjbBa8f5oEabG1szbtp-2Nv4DMCrarfzepY9b3sBe9fFiZfddUFZf93ZZ2ezb2d4DSAmBMCXW0t7HvmvlzyWmOWoHVc3qFZukccba9axbccleZfbdlZtqJYVZJdPlRCwHCAfkkCgE9BCEESgCajXWsGndFjNh3v+YXfpYlcszbZDQJblc3e7cVeyhaH6kiGoDMCgFvvIigD6W2DiCvcBWdftatcdYtag8NddfXuXpg5Nbg5dctdtYPFmTGBAl0EWV7X0DMAvS5AwA2R0A8BQB+BYGnB8FQCXQRhE12D6QZDQcndfA-wmWwDVBhF0HOrQFQAAA5vAoAiA-AEYAgvUEBORahH4JA0ASQoAzBJheXlRSBVOFh2PnkgXyM4gmpGUTEWsX1gS3sJiPsdrDy9r5is3ygSRZsBQVGDG06JmWHPMEFG98rc7-qpy-qgXWdKzjKMBTKWrzLkaHysmcieqXyg8D1k646BrHKHrpCcV86CV27nPQzs73PG6Rik8-OszVBKqA79lqqMmWzf0cnMqFKJrqKG8j9Zm0rS9ZyFqlzujlrLP+iNz37jmJ87mfiPtFqVyMcTz2vY66u+6PPZ2NV07d9ibqvD9XninRGQnP27VOub8kO16NXvnEPeJYAeAgA