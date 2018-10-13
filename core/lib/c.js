'use strict'

const FnBase = require('./_base')
function FnC (pico, x, y) {
  FnBase.call(this, pico, x, y)

  this.name = 'clone'
  this.glyph = 'c'
  this.info = 'Clones the westward _fn__, eastwardly, on **bang**.'
  this.ports = [{ x: 0, y: 0, bang: true }, { x: 1, y: 0, output: true }, { x: -1, y: 0 }]

  this.operation = function () {
    if (this.bang() && this.left()) {
      pico.add(this.x + 1, this.y, this.left().glyph)
    }
  }
}

module.exports = FnC