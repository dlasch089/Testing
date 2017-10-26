'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

console.log(ctx);

// ctx.fillStyle = 'rgba(0, 165, 0, 0.5)';
// ctx.fillRect(150, 450, 100, 100);
//
// ctx.clearRect(200, 450, 50, 50);
//
// ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
// ctx.fillRect(190, 190, 300, 300);
//
// ctx.strokeStyle = 'rgba(180,0,200,0.5)';
// ctx.strokeRect(200, 200, 300, 300);
//
//
//
// ctx.beginPath();
// ctx.fillStyle = 'rgba(0,165,200,0.7)';
// ctx.arc(350, 350, 150, 150, Math.PI * 2, true);
// ctx.closePath();
// ctx.fill();
//
// ctx.beginPath();
// ctx.strokeStyle = 'rgba(0,0,0,0.5)';
// ctx.arc(380, 380, 150, 150, Math.PI * 2, true);
// ctx.closePath();
// ctx.stroke();



// function drawOlympics(x, y) {
//   // for (var ix = x; ix < 400; ix += 100) {
//   //   for (var iy = y; iy < 400; iy += 100) {
//   ctx.beginPath();
//   ctx.strokeStyle = 'rgba(0,165,200,0.7)';
//   ctx.lineWidth = 10;
//   ctx.arc(x, y, 100, 100, Math.PI * 2, true);
//   ctx.closePath();
//   ctx.stroke();
//   //   }
//   // }
// }
//
// // drawOlympics(100, 100);
//
// function olympics() {
//   for (var ix = 200; ix <= 500; ix += 150) {
//     drawOlympics(ix, 200);
//   }
//   for (var iy = 270; iy <= 450; iy += 170) {
//     drawOlympics(iy, 300);
//   }
// }
//
// olympics();

function moveOlympics(x, y) {

  ctx.clearRect(100, 100, 900, 600);

  var colors = ['rgba(0,165,200,0.7)', 'rgba(0, 165, 0, 0.5)', 'rgba(180,0,200,0.5)', 'rgba(165,0,0,0.7)', 'rgba(65,20,150,0.7)'];

  function randomNumber() {
    return Math.floor(Math.random() * 4);
  }

  ctx.beginPath();
  var lineWidth = 5;
  ctx.strokeStyle = colors[randomNumber()];
  ctx.lineWidth = lineWidth;
  ctx.arc(x, y, 100, 100, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = colors[randomNumber()];
  ctx.lineWidth = lineWidth;
  ctx.arc(x + 150, y, 100, 100, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = colors[randomNumber()];
  ctx.lineWidth = lineWidth;
  ctx.arc(x + 300, y, 100, 100, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = colors[randomNumber()];
  ctx.lineWidth = lineWidth;
  ctx.arc(x + 70, y + 100, 100, 100, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = colors[randomNumber()];
  ctx.lineWidth = lineWidth;
  ctx.arc(x + 220, y + 100, 100, 100, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();
}

function blinkOlypmics(max) {
  for (var ix = 0; ix < max; ix++) {
    moveOlympics(200, 200);
  }
}

blinkOlypmics(5);

setInterval(function() {
  var randomNumerX = Math.floor(Math.random() * 1100);
  var randomNumerY = Math.floor(Math.random() * 1100);
  moveOlympics(randomNumerX, randomNumerY);
}, 500);
