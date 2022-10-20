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
  blob7 = new Blob();
  blob8 = new Blob();
  blob9 = new Blob();
  blob10 = new Blob();
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
          background(224, 227, 226);
          gradientStep1 = color(255, 255, 255);
          gradientStep2 = color(224, 227, 226);
          break;
        case 'happy':
          background(0, 127, 201);
          gradientStep1 = color(255, 255, 255);
          gradientStep2 = color(0, 127, 201);
          break;
        case 'angry':
          background(253, 98, 70);
          gradientStep1 = color(70, 68, 158);
          gradientStep2 = color(253, 98, 70);
          break;
        case 'disgusted':
          background(195, 237, 45);
          gradientStep1 = color(137, 167, 31);
          gradientStep2 = color(195, 237, 45);
          break;
        case 'surprised':
          background(70, 68, 158);
          gradientStep1 = color(255, 255, 255);
          gradientStep2 = color(70, 68, 158);
          break;
        case 'sad':
          background(85, 85, 85);
          gradientStep1 = color(224, 227, 226);
          gradientStep2 = color(85, 85, 85);
          break;
        case 'fearful':
          background(85, 85, 85);
          gradientStep1 = color(224, 227, 226);
          gradientStep2 = color(85, 85, 85);
          break;
        default:
          background(0, 0, 0);
          gradientStep1 = color(0, 0, 0);
          gradientStep2 = color(0, 0, 0);
      }

      let gradient = ctx.createRadialGradient(0, 0, width, width / 2, height / 2, 0);

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
      blob7.move();
      blob7.display();
      blob8.move();
      blob8.display();
      blob9.move();
      blob9.display();
      blob10.move();
      blob10.display();
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
