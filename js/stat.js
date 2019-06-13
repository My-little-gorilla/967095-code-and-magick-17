
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_HEIGHT = 20;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var offsetX = CLOUD_X + BAR_GAP;
var offsetY = CLOUD_Y + BAR_GAP + GAP * 3;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandom = function (max, min) {
  return Math.random() * (max - min) + min;
};

var renderDescription = function (ctx, color, font) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_HEIGHT, CLOUD_Y + 30);
  ctx.fillText('Список результатов:', CLOUD_X + BAR_HEIGHT, CLOUD_Y + 50);
};

var renderBar = function (ctx, time, player, position, maxTime) {
  var roundedMaxTime = Math.round(maxTime);
  var roundedTime = Math.round(time);

  var x = offsetX + position * (BAR_WIDTH + BAR_GAP);
  var height = (MAX_BAR_HEIGHT * roundedTime) / roundedMaxTime;
  var y = offsetY + MAX_BAR_HEIGHT - height;

  if (player === 'Вы') {
    ctx.fillStyle = 'red';
  } else {
    ctx.fillStyle = 'rgba(16, 40, 255, ' + getRandom(1, 0.1) + ')';
  }

  ctx.fillRect(x, y, BAR_WIDTH, height);
  ctx.fillStyle = '#000';
  ctx.fillText(roundedTime, x, y - GAP);
  ctx.fillText(player, x, CLOUD_HEIGHT - GAP);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var time = times[i];
    var player = players[i];
    renderBar(ctx, time, player, i, maxTime);
  }

  renderDescription(ctx, '#000', '16px PT Mono');
};
