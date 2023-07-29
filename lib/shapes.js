class Shape {
    constructor(text, textcolor, color) {
        this.text = text;
        this.textcolor = textcolor;
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(text, textcolor, color) {
        super(text, textcolor, color);
    }
    createSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill=${this.color} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text></svg>`
    }
  }

class Triangle extends Shape {
    constructor(text, textcolor, color) {
        super(text, textcolor, color);
    }
    createSvg(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="200,100 250,200 150,200" fill=${this.color} /><text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text></svg>`
    }
}

  module.exports = {Circle, Triangle}
  