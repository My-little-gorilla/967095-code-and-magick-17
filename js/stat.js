'use strict';

var CLOUD_WIDTH = 420; //ширина облака
var CLOUD_HEIGHT = 270; //Высота облака
var CLOUD_X = 100; //x-облака
var CLOUD_Y = 10; //y-облака
var GAP = 10; //отступ(small)
var FONT_GAP = 15;
var BAR_GAP = 50;//отступ между колонками
var BAR_HEIGHT = 20; //высота колонки(?)
var MAX_BAR_HEIGHT = 150;//макс.высота колонки
var BAR_WIDTH = 40;//ширина колонки
var barWidth = 40;//еще одна лол

var renderCloud = function(ctx, x, y, color) {//создаем облако
  ctx.fillStyle = color; //задаем цвет
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT); //положение и размеры облака
};

var getMaxElement = function(arr) { //поиск максимального числа
  var maxElement = arr[0];  // 1 элемент массива в переменную как самый большой
  for (var i = 0; i < arr.length; i++) { //стнд.счетчик
    if (arr[i] > maxElement) { // проверяем сравнениваем эл.мас. с усл.макс.числом
      maxElement = arr[i]; //записываем самое большое число в переменную
    }
  }
  return maxElement; //сохраняем в переменную
};


window.renderStatistics = function(ctx, players, times) { //рисуем гистограмму
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');//тень
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');//осн.окно
  ctx.fillStyle = '#000';//цвет
  var maxTime = getMaxElement(times);//перебор массива времени на самое большое число

var offsetX = CLOUD_X + BAR_GAP; //нач.положение колонки
var offsetY = CLOUD_Y + BAR_GAP + GAP * 3;


  for (var i = 0; i < players.length; i++) {
    var player = players[i];//перебор игроков
    var time = times[i]; //перебор времени


    var x = offsetX + i * (BAR_WIDTH + BAR_GAP);// находим число, которое сдвинет колонку по X.
    var height = (MAX_BAR_HEIGHT * Math.round(time))/ maxTime;//высота колонки.
    var y = offsetY + MAX_BAR_HEIGHT - height; //положение колонки


    if(players[i] === 'Вы'){//поиск себя
      ctx.fillStyle = 'red'; //столбик в красный
    }
    else {
      ctx.fillStyle = 'rgba(16, 40, 255, ' + (Math.random() * (1 - 0.1) + 0.1) + ')';// не себя в синий
    };


    ctx.fillRect(x, y, BAR_WIDTH, height);//рисуем гистограмму
    ctx.fillStyle = '#000';//красим буквы
    ctx.fillText(Math.floor(times[i]), x, y - GAP);
    ctx.fillText(players[i], x, CLOUD_HEIGHT - GAP);  //CLOUD_Y + GAP + FONT_GAP
  };

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + BAR_HEIGHT, CLOUD_Y + 30);
  ctx.fillText('Список результатов:',  CLOUD_X + BAR_HEIGHT, CLOUD_Y + 50);

};
