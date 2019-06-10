'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var barWidth = 40;
 // CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// var renderDescription = function(ctx, x, y, color) {
//   ctx.fillText('Ура вы победили!');
//   ctx.fillText(' Список результатов:');
// };

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if(players[i] === 'Вы'){
      ctx.fillStyle = 'red';
    }
    else {
      ctx.fillStyle = 'blue';
    };
    ctx.fillRect((CLOUD_X + GAP - TEXT_WIDTH) * i, CLOUD_Y + GAP + GAP + BAR_HEIGHT, BAR_WIDTH, (MAX_BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (GAP + barWidth) * i, (MAX_BAR_HEIGHT * times[i]) / maxTime) + GAP;
    ctx.fillText(players[i], CLOUD_X + GAP  + (GAP + barWidth) * i, CLOUD_HEIGHT - GAP);  //CLOUD_Y + GAP + FONT_GAP
  };

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_HEIGHT, CLOUD_Y + 30);
  ctx.fillText('Список результатов:',  CLOUD_X + BAR_HEIGHT, CLOUD_Y + 50);

};
