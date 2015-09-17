
"use strict"

var Point2d = require('../class/Point2d')

class Point3d extends Point2d {
  constructor (x, y, z) {
    super(x, y)

    this.z = z
  }
}

module.exports = Point3d

