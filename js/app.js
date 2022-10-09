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
  image(data.output.video, 0, 0); // Face cam

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
          gradientStep = color(255, 255, 255);
          break;
        case 'happy':
          gradientStep = color(0, 255, 0);
          break;
        case 'angry':
          gradientStep = color(255, 0, 0);
          break;
        case 'disgusted':
          gradientStep = color(100, 75, 30);
          break;
        case 'surprised':
          gradientStep = color(255, 0, 255);
          break;
        case 'sad':
          gradientStep = color(0, 0, 255);
          break;
        case 'fearful':
          gradientStep = color(0, 0, 0);
          break;
        default:
      }

      let gradX = mouseX - width / 2;
      let gradY = mouseY - height / 2;
      let gradient = ctx.createRadialGradient(0, 0, 50, gradX, gradY, 0);
      gradient.addColorStop(0, 'black');
      gradient.addColorStop(1, 'white');
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
