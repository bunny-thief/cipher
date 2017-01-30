# Cipher n

Cipher n is simple encryption method that takes a message and shifts each character by a desired number in order to encode the message and make it unreadable until it is decoded.

This project was inspired by a coding challenge on [freeCodeCamp's](https://freecodecamp.com/) (FCC) Basic Algorithm scripting section called [Caesar's Cipher](https://www.freecodecamp.com/challenges/caesars-cipher). This FCC challenge required the user to implement a Javascript function to decode messages by shifting each letter by 13 letters. This variation of a Caesar's cipher, also referred to as [ROT-13](https://en.wikipedia.org/wiki/ROT13), is special because it allows one method to both encode and decode messages. It is however, considered to be a very weak encryption.

The goal of the project was to broaden the encription method to accept both uppercase and lowercase letters, spaces and allow positive and negative shifts of encryption and decryption.

## Usage:

A message to be encrypted is passed by entering into a text area in an html page. The shift amount is included at the end of the message and needs to be separated by a space. The shift amount can be positive or negative. After the text is entered the _submit_ button will take the text apply the shift, and remove the shift number and return the encrypted text below the text area. The input text area and encoded output message can be cleared by clicking on the _Clear_ button.

Entering the following text into the text area **_We attack at dawn 15_** would return **_Lt piiprz pi splc_**. To decode the message you simply paste the encoded message and add -15 at the end: **_Lt piiprz pi splc -15_**.

## Contributing:

This is a personal project but you are welcome to fork this repository.

## Credits:

I used [Atom.io](https://atom.io/) as my text editor and Chrome Dev Tools to test and debug.


## History:
V1.0 of this projects accepts uppercase, lowercase letters and spaces and can shift letters using positive and negative numbers.

In future, I hope to implement more features including numbers (0-9) and a user selectable option to include all of the printable ascii characters from code 32 - 126.

## License:

This project open source under the [MIT Lincense](https://github.com/the-thief/cipher/blob/master/LICENSE) Copyright (c) 2017 Jacques Navarro.
