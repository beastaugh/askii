Askii
=====

`Askii` is a library of JavaScript utilities to solve common problems
encountered when working with ASCII characters, such as converting character
codes to strings, detecting control characters and so on.


API
---

The utility functions provided by Askii are all methods on the global Askii
object.


### `intToChar`

`Askii.intToChar` converts integer values less than 128 to ASCII characters.


### `charToInt`

`Askii.charToInt` converts ASCII characters to their decimal equivalent.


### `isControlChar`

`Askii.isControlChar` determines whether a given character is an ASCII control
character.


### `getControlInt`

`Askii.getControlInt` returns the decimal value of an ASCII control character,
where the argument supplied is a name for the character rather than the
character itself (e.g. `DEL` or `ESC`).
