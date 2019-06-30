'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similar = document.querySelector('.setup-similar');
similar.classList.remove('hidden');

var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SECOND_NAME = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// var fragment = document.createElementFragment();
var wizarlSimilarList = document.querySelector('.setup-similar-list');

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomName = function () {
  return WIZARD_NAME[getRandomInt(0, WIZARD_NAME.length)];
};

var getRandomCoat = function () {
  return COAT_COLOR[getRandomInt(0, COAT_COLOR.length)];
};

var getRandomCoats = function () {
  var coats = [];
  for (var i = 0; i < 4; i++) {

    coats[i] = getRandomCoat();
  }
  return coats;
};

var getRandomEye = function () {
  return EYES_COLOR[getRandomInt(0, EYES_COLOR.length)];
};

var getRandomEyes = function () {
  var eyes = [];
  for (var i = 0; i < 4; i++) {
    eyes[i] = getRandomEye();
  }
  return eyes;
};

var sumName = function () {
  var sumNames = [];
  for (var i = 0; i < WIZARD_NAME.length; i++) {
    getRandomName();
    sumNames[i] = getRandomName() + SECOND_NAME[i];
  }
  return sumNames;
};


var wizardFeature = {
  name: sumName(),
  coatColor: getRandomCoats(),
  eyesColor: getRandomEyes()
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');


for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizarlSimilarList.appendChild(wizardElement);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardFeature.name[i];
  wizardElement.querySelector('.wizard-coat').style.fill = wizardFeature.coatColor[i];
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardFeature.eyesColor[i];
}
