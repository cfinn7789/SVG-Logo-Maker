class Shape { // Creates class of Shape
    constructor(text, textcolor, color) {
        this.text = text;
        this.textcolor = textcolor;
        this.color = color;
    }
}
// Creates class of Triangle which returns svg formatting based on constructor
class Triangle extends Shape {
    constructor(text, textcolor, color) {
        super(text, textcolor, color);
    }
    createSvg(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="175,50 225,150 125,150" fill="${this.color}" /><text x="177" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
}
// Creates class of Circle which returns svg formatting based on constructor
class Circle extends Shape {
    constructor(text, textcolor, color) {
        super(text, textcolor, color);
    }
    createSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
  }
// Creates class of Square which returns svg formatting based on constructor
  class Square extends Shape {
    constructor(text, textcolor, color) {
        super(text, textcolor, color);
    }
    createSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="110" y="60" width="80" height="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
  }

  module.exports = {Triangle, Circle, Square}
  