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

http://todomvc.com/examples/vue/#/all
https://github.com/tastejs/todomvc/blob/master/app-spec.md
   

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

* Big technical projects:
  * bootstrap everything option (or seperate library)
  * components
  * broadcasting
  * strategy for html props and css --> better abstractions
  * input text scaffolding
<<<<<<< HEAD
=======
  * list filtering
 
>>>>>>> 8cfaf0fb03d31d232ece7ad5d207d6f677669260


* teacher roster app
  * classes { [dates and times], {date: [normal teacher, sub]}, [normal teachers] }
  * firebase
  * notification to being added to a class and to confirm
  * notification for class day of
  * (potentially) notifications for day where there is no class but you thought there might be



## Eventually

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

https://preview.c9users.io/stevekrouse_1/cycle-lang/cycle/index.html?_c9_id=livepreview1&_c9_host=https://ide.c9.io#DwDwtgNgBOEHYGcC8AiAFgFwwBwFwHp8B3EgOiIGZSB7AJwHN8BGATjfxE0hQD5gAjCNQDGAaygYAntgCmqYZOEQZAfWwBDejJRQAJjOUZ1guSgBm6iAm1Qw1AG7HlqC1ZshUABh2SvvYAhGGDJgMnAYUHDqoagAwgASAJIAMgAiAEoAogBy-oIi4lKyqNYYKsIICP5mAJYGupHRpgAK6QDyzZnpACoAmrz86mL0tNQArnC6sdRCtMD4tfV8jhBjMo0xKABqAILJAKqZeUJiEtKmwSAY1XUQDVGb3ZkAGt28AMRmAKzf3-OLdz4+HyYiBKzWfDgMiufBBhXOqEctBqThkCBUpRu9Q2pl26V4EBqgX+t10y0saxxqF2ByOsJO8OKKEJgXRwloMnUwRUIWwUn8wIZYIpMkh0Iw9IKZyZSJRJnRmL4APuTWpO3xPFqEGCcwWpPJq3WD1xe0OxylRQu4qxdypKCer14lggJKW8zhwsNYphAgZ0tMCiUqmE1HC6hqUNo-kCXJCYQixriSTSWVyktOlpKMjKFSqStJdtaHS6fV4ZlDGAAyjUAF4yV2A4Dgo2q7amum+i0IlCXa757GJ+0vN48JieTzYEANsnuoXzZveiWdjPd0rlSo2lWbIudHr9Hgh2bTg2Uwc0s3pxlWq6bu0OkcMQYACiYAHYvgAaKAAFlfX9-X6eKQTBfAAlMes4FJ6ELAFCPpwv6WY5hu-a2oOO4lvuvY7IS9BwBBzZ2ueHYIZmPbWqhW6mPevDCPGMi6sqQIevOIqLpeiEoIGygqL2-iEYONEcWRfGUXew68Bg1C6NQCAQYKUGsV6kGgvMcFLgpqn4OpzFztp4q6Yp+AxsEoThOxy5XvIig8SGYYRgx0ZBHG4R2gkKQZDk5orkya65re6HtLupY8EQNS6BgaAESKRHtt5VnkTeYmCRJPBfOOk7ySx+ALrBBmWZxfkocAyqFkFmEDEMogjOMkzTEeepugJrbEfFnGiSVBYpY6PCfGYZhZXpuU6QVZHccGlRqKMsi0PyJ4tpsADSmT7qN3YdaV3UjmA6gMBGg1GblzWbK1wnrRRnUDq2QmeFA6hjFJB1acN+Wkd243lBW4aRk5sZmQmrbuSmXlnUyH0RtgD38TFZ5xaDpiyqi6JaH2l1oS16q8BDD3dOKT2iNBooBM5-1ucmnlpmtMq7XKygKtmAUYxq2MYLjVzRYasW0m1IkXZt12pfjhMWW9YM2RN6LYNNDFzU2MOtstq2i9eqP848qUaLougRvQQtKTBx0mtz8OoBtXUCz1TAAGyTlA1u2-bIBQFbE5To1jaaQT+tEyNytIeueZo1RqAYXuvDawg2AQOokgc6eGPG1TKuM+rPURoSUIALRwnrOVsXl8F+mRRWB2rLTlWHoXhZFccLUbF5J6bfPm6nI7fgATK7ucvYXXa+dmAcp+XxaV+W4TVnWtdcw3fuJarLfUal7ffpl7szp7wsF0us8fbmU3UDNsuG6gis8+dSVB+JPX8HQ+iMfqKle3nynH22iez2bV2t7wcChvWa+GWevnX2Rd3riwDvvQ+khoac0HKfE2c8h6oCEuMDAGd-5MUfpvV+p1G6IOShbEcv8oTd2Aa9UBYsgwqC4BASBMtoHzTtPAvBn90bfx4FHIYMg0AzDvqQl+8sTpwxYc3L+i8eoAHU0BckiDIGQugEASGoFAfg6wZJQgAPz8JgiAvuphRAyEkGMbAv1TLxjtHCQOs9EbygxAzAhQjmZwEhqzPGAC5awITjPChphqD8AAFYyGEBgZG9iPHx02G0AAQgAKUyLEEceC-GBOCaE1Gr9olxISWfamyIkYqBRkgtsGoZD2HjNoomr9mEf1EWw8RI4jAMGzBUwBT8jqCNMNUnxTcL5l2QalZsLSsHexFt0riFZRhWBUDUMwMCImmESAAMW8AgoQ9AajCE+mADQHIikdF4JkAAilPQcOwcm+ICUEkJBSwkZNifExJ1iab5MKQ4k0JSynhCGVUla5yenzzEf0nqBjJDTH0EMjeIzwl11QFEv5KAdqRRUHAMYYBVFRjeagbI+wACyvAmAUAhdlXKJkXIA02KkNoKy8FSxEPIsYHI2TOl-hyDADK4D+DAA9LkNRQx2nUFrJRMkBRcqCLyuArSgSkv+pKtS+VIXGRJvGWV+kfQKpGuq+V2UNXaq1XpHV+q9VGQNUZaVyqt4IN3pNWlUC5kwpQF0vR-yilCRvrQO+2dqBYGoGAb5HS1TvzGaw4OQ5La2wQDMcKUB3gyCtrG2NRLDVquyma8yFq8F2QwJM9E5ZaCZCGGgIpeJJLSWoIkUyJzWzJESJWR5Yy1kbN4gxKItAGHQrtEs+FDbNkhm2btbQmKUD7J4EcytmwzkIJsXTG5AK6lqg1FqHUfrPGbDhQg4NV8RzOkTYdfOr9ujxBBngqdaIZ1FsxjwFkGBl3zNQJkZIlYSL1uoOszZOoW1ttfp21ZL7G29p2QOy+g5h2jvca-Cdx7nm2NeUBpmZYajagYje+1a6RG9IXkCrdwSahlJ3UAgRK7qKHsprPWldFdAMtPcIZ0rL2Wcu5RgcV-LsNlP8LtegdoWbJCJKjfA7GgSip5aGRhpz0gAHFqVPLydBsJfTikEh43htpe7-UoHvY++FZH6WMvKDR7MdG+CCcY3ywc-7DDyLYwwTjziHrccCAKfj8wjPipE62dUEn4UnrSeejUV6lObwVblQL+dU3ktMJS+Fu8voOQxcTP65jBxAwpvCkuRTQ4hTHlWWsGCH44OETU9DgLQ0jmXqvTBwXlK6J8gjKD07FSwccSWmSiQbOuPZmB1TuCCuzpDUJIZVWEqpcHelrC4pUhBLoEJ-CHXCMBu8U65kv633Nt2p+1T368FXrSS1-QIB6Nir5aFlwlhrA6C5MdtwIqGMuYa6YHFbRUh0jE5kboEE5MSMPVkXgyQdi1rHfXJ9C2vNnsHcWngUlmsVvcRVmCMPKmqYPUe7rLrUroMzpFUYYx6BRWh8SlTs21MPsB9V51g6hLEJy26OHKqe7bzGZm7N0zZmGeu3ygw1hUBMCuwdiV7bBxLMk-Wnj23JjQn21NqAR3zAnZsOdnstA1jc6m4O+7j3eDPde+497n26SLPaDilQtb1Sa8wXlwNQPaunpg3JsHEOy1Q-K3jgjt6UA7DrQtxFaBkWovRUU7FeKeDt381C0LdpKWC4W+DVrdrp7E4SsD63GH5Pg9LS1lxbNr246GiFpVrlEvk1TJF8Be8bX0Jj3A3567am9Y1gK7WcBdZZ93c7+1XWg3V83fir4tsXYO2707ECZWH7U-TTvYv1rpazTWwTx1JP8G3cw7wHae04CZ2UGYTPjvs8t9j-CjdW1eDpSH1Tp3OjyELZBcY0xZKLEMisWM4H9WbcXrt2nnGbjTedfy2M5JVzvOuciXuWyQQV-1SRBz51bEyQeU80t3-wX2T1KXKSb3wwNlU1nwSn30IUknY2aWQOU2UhHx+SVnb0KznWK14EGTwIC1Px9nPznwZxmHRBmXF2MzgCgHZxkBmU5yV1YIAIWWWS7SWy2QAz2WaAOWORmxdwg1nlAOuRgzuSyXdznwT1kyTzB0QK+SoKhSIL3w7wPx4BBTBUpw9hoJp3xxd1Q1nk929zRUckHX93xUJS0Oflh1MLizMTz1bHD0iwmUYKZ3L1bAF0ENfWRRkHoFjACNXTaDaGSF0KuGmQQEyG2SPi-3N2UNgPAOfw1Ff1awz2DxcKJhH1D0HG8NWWFzsQwB2zFxZx5zugwFNgV0A3wGc2E3gNVzpEfRNwfm1y6F1310N26GN3+1QGrVrRgOk2nUTyKzBz82cPaQJzdy7XKIjF2zaGZ3gJyFSF4EWUSHSD+0kNb2-wtwmKt1UOmIvVmK32b1QIJx2OyC2MnQyKmLINt1Twd2HzcMIIRzaCWNZHKA5FjBUDCkihYKYxqFMmQBQAoB4Ju3A1SFSAj3SJOLgKyKazLVyI-w+O3xuKkPhK5x-RCJvhmE5A5UHSiWiNiJ4EWT2EfWQztB2HhPbmCMbSJOUHUFJPgPJJiO2JpMyHyNp0eORIqJ8zRLfza031y1SPmzn0wPYXyJNS0lCxVSVIgM2CWXxM2yEP-X7VEPEOGNd3hVkLgIUOgMFNplOJ61ig+SQKuJQPhxn0rzQ0tP0MMOkmMPXk+LcNfksLGWsJRVsNizkwcMD1fH5Jz3i08IpTaA1Nni2wqKqL2xqIlzlyzUVwE1Z15zk3aN4E6LeyTw+16O2P6KNx6H1NGKUPjyeLOJeIuMUzmPMPtUWLKL+JWOhDWKKU2O2N2P2M-wJzb2OPNJRLUNrOJHrJ30HDuIeMgyFOeJDVeMhxCDDPHOuh+ObOuXZE5G5GBMLSTNYKgHBJCEhOhPTJ5z4NQAZIRN+LkOzATNBMO1z3qOl0uzqIu1OxPOVzaIeyexezzKKwLK+ypO7K6KailLj04hUOdLgxTwXN9THNcOxPtNxNSBjOfUJOoGJPZKKS5MpOpKJzpNOUZOZM2VZJJKwopJ5LwrgsKLcIG3AoyKf2HOyNTwxPa17Jd37JlL0KwKBFtPwPguNSNUVIfJVQVKfhVNorIkEAZWv1JkHEsR8PCEZ2YLPJQCCIJMbShHCOCEiNMGwriLKCJCSL5Gn3YqOKRMHMyMYtFJYolJPwQrMIILcOKK8KpSvPpkqNF0TOABaLYJTMaJhNaKzK-JzJ-K13zJ1yLLaANxLOAsbFfnLPGIstnKtIU1HN4uwVUybM22WM8vbMHU7MAr2NipnDN2lMrJnOrLnJHNspMPstVNMEnMSpeUqpSugvt0XKoocpxPtW6FXOyr+I3MBO3LvLYIPLACPICt5zhMvLNOasgsazarFLyM6vqvPLxKIpUBIswrJPIqpN5Pwrc0IvUuIvQrZI5Lkz0r2sovSqhRHwku7EfxathiYuaxsv1I4owK4rlJWs1WTT0hVIVQBt1T+oEpBq0lEqlWEuGUVQjKXGcs2HUzAuLgHn8mGwrhCmwFknBPFXerMs+tIJrx6g5GjkY1wxWvusoVsmix+j4HhtMCS0LwQSG3gJG3DiJE4VjgON3yrwJs7x4HTgcmzgZH6zoISnBh2i0BkoS0BgLyR3p3ARoToSnx0pPkdORzJ1SgQFoGEAOqETSISm7SbVoA-RVtUsWTcpnVvN3KYyl1cFOxfKfLfKcwzJV2Cp4A11-LIP-LpB+x7MlL7LxrooqvmveVFPeLsuuOorqv3WI30pRx6l0C5HUFwBqAlpkGMnsHoAAGpYAABuB6MwAADg-AADJtRc6EBM6YBIBEBUBMAcACBiAyBKAaAGB8BO5xwM76AdAwoIo0BUBvxvAoA0BODsdHzB6dB7A6giAolqAPAUBM4xwoBF7C67Zxw7YKAvgUAS76AMBc6y697hAahtblAoBhB570odAFBUBL6oBaAb6h6tQIBUAKcdBAhRgDFUB3h+AtYBUt7Jcs1qADFM5e7IpUBoT8Ad696D7c6NBIooAn6v6vhdBhB251BZk9BUAcVXx24oB24vhkgO4oBXwmA8HXwoAvgrYIBM5vwfw8HbpO4oAKBvxM4vh24awUBIHd797y6u6oHc7dbTBEa46NaE6k6U606u6c7IB86MAi7S7y7K6ONYBa70AsA8BCASAiByAqA6BGAO7PAu6e7q5+6UAJ7h7R7MAB6h6p6ZAZ657UBF7boV617boCUt7+GYGj6T71hz6H6r7fAUBb776gnH6ENn6UBX6AGP7TAY19B4m37AHgHQHTGIHPHeGlH+Glyz9e4587AxhrAZIiAOS6bUB5K1z3KrbvKMyHbUymifLXa1ceBcywq-yIqqTizBjSyubBwErZqZMQ751UqaqPTo7MqKzOI4zWyQA8qNj7iuyircb9ag6kqnqoLLisTI6VLGr+nJi1mFrX9w7aqtnob5iXdeqLbBqtzwSdzqnaixqJr3zeDVrXd4TESDbyiUYqmfKAHYbXzZdHy7b6mXbPymmPbWmvb2mdjFmemvEkaHqqzBnk9DmOqbqCiurELGz1rjrNrTrSKdruSrraSVrpqmScXNKIiVLLr+rryPLdsRrfmPDAWZcztmXLsnmbsgqwXQrMEeiALfbiqVKPqVm5qRTFqjnRmTmR9pXPT-qobfqNIU15XgbFW5XYbRlI9i9qa7D3Cb988PJGaM1x9JZJ8UiHTiCFtZT6kFMs4R6agx7BG5t4WmQrXF9RxSAg9ybRbOIrUTWD4y8VL0D2ovrrXwdaB2SEBsbQxHW34yrg3eb9DDw6AoAgJvw5IvXcmxbjWlazWXcg3eYE3uLNZ69G80WznDjlmC2kWhJB8nZe8B9+87Z+8RbM3CoUbio5NWaeAI4Oalm42q346RwBas4c4M26cFtmbO30b9wUm+3nXk5RGRwWBPAABSFt8dufSdpPLt3scbEMcN1gudja99VbU2jbWMz5m8zyhl22llh2oFyaxp78wV+A7277X7F90q+dxERFsVlF2Cst-OL4gnRHEjEg6t1HQWjHcYbHGN4RnmiDnqCnbJ2g1t5G5CUubd6d2iGYOgI9nFk91tM982ipy26962+8v5x2gF-5x90F59z2kNN9ngAV-D6c1ZpF+c9qgDzZu0jFlS0DkR+AoSd4XQFgMTsTuDonITuTET78XQeT+TlDjV+g8BDqfdQWC9v4r58ju5iXW958uXB9jlwKpPbM92nl7o8Kwswqv2kCgOythF4Ov9t41F3jviqOk5im0wXQQQJQDZUQKWyM0wcpmlyp3Tn5vytM5208+jkKl9vlvoqKgYoY2FzYPp9j0V0HaqmNrKrT65aZ2ZuTAq6FuzuK0CpqgZsVjZiOvjl5nZzLqr7Ll67j5Tl5i50jq51QYaij0aiE8Buj6a95yZy9ul6ovTvcgz+2ozllkzzMszt28F3l6zgC0rz9ir3Zi0lzmCtr6alChbQ2ra86pPS67odIQ4XLo6zUkIil7Sql3asLsj+l3rxlslWj+92bmLj8rlhjiFpj9p1jtLgHSrvZzjl-Vznj2rjz-j05oDmi71siR6sHlrpazE+z0yxzpkOMnT57ibm2h897mb9lr755n79XSzt0RLhZsrkqjbxr0H7b1rn62V0G1V01ZVpNNn8GwSp+CGuVMG3nnnoEPn1VLnwXgXyG9V0feWqhfgB6KSEph8smA1uWid9tzDorLtpN++dHit-t8+RDkcd4YQYQFgdQM39dpm9XtLbDngQYYYTHOqXDnX8rhz-Xl1kNt1vqAaMdq3jDm3keDGrGw9oHp1mTpPISYwCNVYYIS3o1qhEvU1ky+1fNg3wdgYW+JDElun9W4T1KLuX3+P2yCff15WwNtW8D9PngZEB17Pt379+fWT1KMcY-Y5ur7z6yBPkv21cvi1ziwt9hKSbAGN4VgdxdrvVvyV9vhHsBKhdThHTTyv8fngZ4OPqw8YQp6gYpoLsLMpu-C2nH8bn5qXOp1lho6L5okFsnngLIe7LYPkv7u0ZjvXZLmKtjqTDj6ruswD5c8dCZsiKZrlXWLFd5mtndbvXxB5bdmuwzGNg1w-5Zd4CXHctG5yh7UE6qgNDnqzxEpC9+eYvYXjgNF7YCJeuA5UpgO57EDCB0NEXkDU55EC8BJA6GjQPZ5S8O+XELVvZBpq6tZKMtFXmBzV7+80agffcMWx1jdAD47-Jfnn0tgF8f+OTDdoNmt6CDgowguvDrHSD2tMAEgy1p73IKjhm2hfWeFu01628RBDeWet6kh6u8Me7vBdlIJHAt83Ysg1DvILbYCCWaJg1QQ3nXwjMhWgdMfnYIn6OD3Om8VgUYLIJa9neWg-vobw+Cvg4ha-GXsXz9Y98XmqfD3gP1DZuoPUQ-Efn4LT7L8mA4aSNA0BjRxoyhCQzVl32SEBtUhFfbQRkLdY3wQAmcBANIiKa5DMetgpvj1DcYOxbYj4dQE+E8CAQRhKbD1qBEAhQBC6tsZxhQFtifArYZgRYVbEmEsA+hTsTOHMKdgDChhow4YWMPbgTCU2dsG2E7GcanDo0Swq4SsOOFvhbY7cW2JnAuE7D9hrwwCOMIqGqcE+2rWLKUxQAM1Vem7RQe4KEFs1I40cTmmxT14N9XWug4djICFoFBPhWbKoTm2T5MI6h0QqvqYPoBr4ZAG+DoTYNJwBDRwngZET6zU4XQNOPUJ0ioH8TUAIwDLB5gNzm4qULyw3AAeUWUAN4QSvgzoagC0wUYdM1GCABAFozG0GWg4IYKTUAzsZrMLiOzLxkcyX9Yu4GcTByKc6f9oBl6b-sENuos86ue3Y9itiI4qVz2qFP9D6hEKDoQMEhKEfSQtrcjd6tzL9pplGDkZKMTKUUeKI5I-MpRLGWUVZkHBcYeMDmBgKyJebuYNRuSLUYgJy7M90BXpVTD6Q9xcgvc-pX3PYVxT4pduCOWOghyr77kJWMPV+PBydKFiHmuYhYld1z7dCRwUAbwW1wVZ0DSBLAmfpTWDA-Cd+yvYGHwKBFuCp2oI7tuzQhFRD8aMQ-mnADRyjsnBKnFEUkLRGm00hXQiPqlF7CZxLA9rabLOJeaj98hJIuiOECz47jWBvrRcb33D5FYhIOIvEQSLr7WCYROgoSPW3JFjRwEGcQLrTSV76texKWYEYOOUE4cGo9o2GPyMb6rieo7wOIaGQMFjIwhIaHdmNgmwHscaofWNo+IaG6DkOsEyoQuNLxl9ahffccdiM8Gls9R6LXcXkPSETithxDSfjD1PHZt8JubFPpiOInL9l86ybceRPLbc1yxy-LYa+Nn54Sk+S4tifGwnFZCGImccNtrAKaEiMJNE+ibD0qztiAwTE0SReILHL8pJLvKftD0olgTDahHdEfzhI7XdLRfaXZDaLEIjo7R-tKQpAKHLnEF0CGJdPeJQyXiyCkfUUVWPOb5j+JJIwoU7Gj5Rodhb4T8D+D-BRT3hhwqThpm0kkjsJO4u6mpM748R5+IHRfvUInE4QXQOEvJhv3kRb9FesNW-AUHvwDl8kDFFyfBkQx6S+RRI8CVeNSjboExzApli2KoEECRevUnqf1IoHiU0pbAqhB+O7E-jksfvQeEoIqgHhIhaEvcdRKr5QT4hBUhQQOKw5Djd2yEqbGOIklV9kpPEshGh2EkSxzxhEryYTRHA4iFJl0vmrRNfDKTUpJ0jsRAmYmmSFY4k-wXWKXzsZ9oHkvibWIgkjhBJa0ikaiPeliSiJ+0nSZn1oAySBUNQeSQDNAlNTYRQkUGSeOGlnjIZWkwKT9Lt5wzbpBHE0R9LVLmTYyWpK0TqRsl6k0J0hB-L+21GLpjxR03-rpTun6FpROGd0jD2A7+TAR7EoKUUMJANBwp74f8NFIAgHDwIKM1sGWKBktSkOf8NroxLn5UiF+NIxWd5NSg7AAxQkpkPk037b8vxZUuSvv027uUxWLMhqYZLRlPjWp+s9qUJSl7NjupFAvqR7IGn0DKBGAtsS9PUmjSIwn4rgdLU2AAi+x606aSCMAlzTgJDk6EZzO4orSYJWMgOf7FRoxzZp20-drtIWlUSVxSsohCrLBlviIZmki6YlIJk3S5Zete2ZhIxm2xHpQQ1AVCjVkiTS+LEjEdDO+nAzfpK+YmfjL7k8BMZbMuQZag0mdyyZnSL6fuIJm6SEZck9NjuNdFVzh5o81uRRPblnTcZlcoeUXIz7upWZm83iajIb7GTSZxHDatqWsnwFbR+pBmVVKa5xjXJ9UmNimKxHL8zM2YeRH5J6oBTtZV0-FCLLCn0BnwEUyWZAplnxTFJB0kuSlPh7pyRpGUjWVlK1mSCCZ0wbZOZl0AGzTARs4qSbNDnBc9+FUpycKWZluTj5VgxOWvIPlzTsFP83Bc7LEpkDxePsz2Rwu9ldS3Zfszqe7K4VeyhFgin2UNKQUfQxppsplj2Mml4J4JZUIcdrz2m9z6FKcvBelJ3kVydCdCnWT1BvGNja5wPHRUArSgyCx5zgieerIvjUj-+c84ebEDZK0AoAUALBVHCYXqKEURUopqVOkXmyyFlsihS-JgH5ywJgoz0bpm9H6YJRL3f0TKMswcZgxrWRUWGPoARi1RHmAJclWerBKEFiYtVvwt4UqseFSrV2UUoEXFLaB5SqpYUsqU1KOpZKCpVgOqVlK6lLs-hdvM+gcCdWfwiOX+I2nGCtp4oHCFuOUV2L6Fh49yWnJcHodo5AE2aZxIjBiDh+IS+uROKtj6CplU0zOXMsrhKKVlsC5ft-TMD8BjlPvTZUX00VTyoZSc9hGjjta18V5OfDBcPKYCkBU55iuceDKppdLfh34ngb+MsUoLrFms2xUtOX6pBxgJgTOP5wzDKJ5E4JO6EKmoD5ExF0y06Z0qMAxZxp-y2RWPisXpIQVNy0NhImRBYAwgKiSQFAErDBAykUARaJjmsAoqoaHSzNN9G6V-Lw5stSOV8tUCZTzm2Uz+SSOaC7QIg1AMwFADEEyQoAOKLYLECZWlLalLSpVYqpVVNK+FDS5paqvIEiLGlbSjVZClIzujtMp6fQGYBZRRKOUMAG+h3B8A30rYr4alEGR2A4o6QdeJFRBF7SkxsAEYKELoHe6mNC6Q9IgJzhdi8BxsCAdkDUFUQSA0ARIBBhMGwyhhSAya+YJ6vNR-CjcsQRaApUAZTJlKLzNShZM2S3dAM3pB7t1gSJGUu5Z88hVkqgosxlquSqVk5Q5XhZXKpHUoN8xqZE8naKo77gtyaaJBsgj6bpstzaY2dAeIEqtDWlBU1ZnO2omrm3wMn7o+q+XNkACWua8i8efKZkVCUG6ZU3mta-ZqHUnHp40eS6jKtWOQobUjuZFQlrhWJaPKr1ZLItbiwwrHcisl1B9Q-ybXT8kFSPMVg2vPW08IBxivmvKQIFMC9VMqYZIarpRCiTV+In0ToHnoUAcGtqlAC7EDUjU+AcoxJQqNDFAhlRDTeAtkGdV0hv5wQZhZgjTWuRvVcAX1f6tQDYaoAwalANbBWThrI10ayKHGrMAJrWCya0gKmp9QwaM1gxLNeQpqk1kNQUIIgIqNGVY9yiXXHkMkTbTPS0VYMXwlMlzT5phAtzVEvzTLIzqj1yPLGEkt1EnzwyvilyjmqUrrEv0AhUjofy8rH8Ce1HM-h5ojHX8luVncdfyw-aKa51sYwzTUDa5-DSij3TtRF27Vste1JG6-kOpHUJcVuPtQLWhIy7wDn5hmuTQpsMXIJV1jM+dUEqM0sLJeBSkpRVq1WsKper8LIN0H2DpBuViPJmSVty2WaL1+oucHBo9E6ZTVyGq1SgCHqBMrY7cV8N+Bw3AA8NrYEMfZiI3hiSenLJPGRpdVOgnZNG0TeYno2MaPNw9ZjUGpDWca0Q3G9YLxsUT8a4AiauAEJpE1gAxNra1AJmuzUBLpNVVWTXYzy1Tq65585TRutUC8hZYGmy1NppzR0A9NBmqyqVq+2mBMtRWkLZDtm0+CVJMECLYVsjwg7-CZopza+pLWm1qWa6p7kfxqZTcaOXmxbaZyKzmdfNlPVLe+xp6NSG+EFQDU2JbVmyXK0Y0wHGWi249IucW4FrF0S3DqSwjHJ-gD3S3Q6RiJmzJceqGY8B2taVD5e1zR3mUEBoW+VVVvqUwbWlNW-hXVpeyNbmtmo1XZDvl1I6ZWekWADwCAA
