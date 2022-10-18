let data;
let windowW = window.innerWidth;
let windowH = window.innerHeight;

let canvas;
let ctx;

function setup() {
  pixelDensity(1);
  canvas = createCanvas(windowW, windowH, P2D);
  canvas.id('p5canvas');
  ctx = canvas.drawingContext;
  noStroke();

  data = new Data();
  blob1 = new Blob();
  blob2 = new Blob();
  blob3 = new Blob();
  blob4 = new Blob();
  blob5 = new Blob();
  blob6 = new Blob();
}

function draw() {
  data.update();
  background(0, 0, 0);
  // image(data.output.video, 0, 0); // Face cam

  if (data.output.expressions) {
    let count = 0;

    fill(255);
    textSize(32);

    for (let expression in data.output.expressions) {
      count++;
      text(Object.keys(data.output.expressions)[count - 1], 50, windowH - 50 * count); // write object key on the screen

      let emotion = Object.keys(data.output.expressions)[0];

      switch (emotion) {
        case 'neutral':
          background(218, 49, 218);
          gradientStep1 = color(111, 23, 110);
          gradientStep2 = color(221, 45, 219);
          break;
        case 'happy':
          background(185, 125, 32);
          gradientStep1 = color(124, 85, 30);
          gradientStep2 = color(248, 170, 59);
          break;
        case 'angry':
          background(220, 95, 80);
          gradientStep1 = color(107, 36, 34);
          gradientStep2 = color(214, 71, 67);
          break;
        case 'disgusted':
          background(220, 95, 80);
          gradientStep1 = color(1, 61, 31);
          gradientStep2 = color(1, 122, 62);
          break;
        case 'surprised':
          background(185, 125, 32);
          gradientStep1 = color(124, 85, 30);
          gradientStep2 = color(248, 170, 59);
          break;
        case 'sad':
          background(111, 148, 185);
          gradientStep1 = color(127, 170, 214);
          gradientStep2 = color(255, 255, 255);
          break;
        case 'fearful':
          background(218, 49, 218);
          gradientStep1 = color(111, 23, 110);
          gradientStep2 = color(221, 45, 219);
          break;
        default:
          background(0, 0, 0);
          gradientStep1 = color(0, 0, 0);
          gradientStep2 = color(0, 0, 0);
      }

      let gradient = ctx.createRadialGradient(0, 0, 400, 0, 0, 0);

      gradient.addColorStop(0, gradientStep1);
      gradient.addColorStop(1, gradientStep2);
      ctx.fillStyle = gradient;

      blob1.move();
      blob1.display();
      blob2.move();
      blob2.display();
      blob3.move();
      blob3.display();
      blob4.move();
      blob4.display();
      blob5.move();
      blob5.display();
      blob6.move();
      blob6.display();
    }
  }

  if (data.output.faceDimensions) {
    // noFill();
    // stroke(255, 0, 0);
    // rect(
    //   data.output.faceDimensions.x,
    //   data.output.faceDimensions.y,
    //   data.output.faceDimensions.w,
    //   data.output.faceDimensions.h
    // );
  }
}

class Blob {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(50, 400);
    this.speed = 5;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
