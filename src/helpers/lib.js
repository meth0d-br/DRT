// src/lib.js

const randChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890"

export function randStr (length) {
  var out = []

  for (var i = 0; i < length; i++) {
    out.push(randChars.charAt(Math.floor(Math.random() * randChars.length)))
  }

  return out.join('')
}
