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
}

function draw() {
  data.update();
  background(0);
  // image(data.output.video, 0, 0); // Face cam

  if (data.output.expressions) {
    let count = 0;

    fill(255);
    textSize(32);

    for (let expression in data.output.expressions) {
      count++;
      text(Object.keys(data.output.expressions)[count - 1], 50, windowH - 50 * count); // write object key on the screen

      let emotion = Object.keys(data.output.expressions)[0];
      let gradientStep = null;

      switch (emotion) {
        case 'neutral':
          gradientStep1 = color(255, 0, 0);
          gradientStep2 = color(0, 255, 0);
          break;
        case 'happy':
          gradientStep1 = color(0, 0, 255);
          gradientStep2 = color(0, 255, 0);
          break;
        case 'angry':
          gradientStep1 = color(255, 0, 0);
          gradientStep2 = color(0, 255, 0);
          break;
        case 'disgusted':
          gradientStep1 = color(255, 0, 0);
          gradientStep2 = color(0, 255, 0);
          break;
        case 'surprised':
          gradientStep1 = color(255, 0, 0);
          gradientStep2 = color(0, 255, 0);
          break;
        case 'sad':
          gradientStep1 = color(255, 0, 0);
          gradientStep2 = color(0, 255, 0);
          break;
        case 'fearful':
          gradientStep1 = color(255, 0, 0);
          gradientStep2 = color(0, 255, 0);
          break;
        default:
      }

      let gradX = 0;
      let gradY = 0;
      let gradient = ctx.createRadialGradient(0, 0, 50, gradX, gradY, 0);
      gradient.addColorStop(0, gradientStep1);
      gradient.addColorStop(1, gradientStep2);
      ctx.fillStyle = gradient;
      ellipse(0, 0, 100, 100);
      translate(width / 2, height / 2);
    }
  }

  if (data.output.faceDimensions) {
    noFill();
    stroke(255, 0, 0);
    rect(
      data.output.faceDimensions.x,
      data.output.faceDimensions.y,
      data.output.faceDimensions.w,
      data.output.faceDimensions.h
    );
  }
}
