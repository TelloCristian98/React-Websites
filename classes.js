class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
  introduction() {
    console.log(
      `My name is ${this.name} I'm a ${this.type} my color is ${this.color}`
    );
  }
}

class Mamal extends Animal {
  constructor(name, type, color, sound) {
    super(name, type, color);
    this.sound = sound;
  }
  makingSound() {
    console.log(`The ${this.type} sound is ${this.sound}`);
  }
}

const cow = new Mamal("Henry", "cow", "black and white", "muuuuuuuuu");
cow.introduction();
cow.makingSound();
