const {Triangle, Circle, Square} = require("./shapes.js")

describe('Triangle', () =>{
    it('should return an svg generated triangle', () =>{
        const triangle = new Triangle("tdl", "black", "yellow");
        const Svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="200,100 250,200 150,200" fill=yellow /><text x="150" y="125" font-size="60" text-anchor="middle" fill=black>tdl</text></svg>`
        expect(triangle.createSvg()).toEqual(Svg);
    });
});


describe('Circle', () => {
    it('should return an svg generated circle', () => {
      const circle = new Circle("cat", "red", "green");
      const Svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill=green /><text x="150" y="125" font-size="60" text-anchor="middle" fill=red>cat</text></svg>`
      expect(circle.createSvg()).toEqual(Svg);
    });
  });

  describe('Square', () => {
    it('should return an svg generated square', () => {
        const square = new Square("mdl", "red", "tan");
        const Svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="110" y="60" width="80" height="80" fill=tan /><text x="150" y="125" font-size="60" text-anchor="middle" fill=red>mdl</text></svg>`
        expect(square.createSvg()).toEqual(Svg);
    });
  });