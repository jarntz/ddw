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
      }

      let gradX = 0;
      let gradY = 0;
      let gradient = ctx.createRadialGradient(0, 0, 200, gradX, gradY, 0);
      gradient.addColorStop(0, gradientStep1);
      gradient.addColorStop(1, gradientStep2);
      ctx.fillStyle = gradient;
      ellipse(0, 0, 200, 200);
      translate(width / 2, height / 2);
    }
  }

  if (data.output.faceDimensions) {
    noFill();
    // stroke(255, 0, 0);
    // rect(
    //   data.output.faceDimensions.x,
    //   data.output.faceDimensions.y,
    //   data.output.faceDimensions.w,
    //   data.output.faceDimensions.h
    // );
  }
}
