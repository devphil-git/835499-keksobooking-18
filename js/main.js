'use strict';

//1    *** Функция для создания массива из 8 сгенерированных JS объектов ***

//avatar filenames function
var avatar = function (i) {
  return 'img/avatars/user0' + i + '.png';
};

//offer parameters
var TITLE = 'заголовок предложения';
var PRICE = Math.round(Math.random() * 1000 + 100);
var TYPE = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS = Math.round(Math.random() * 9 + 1);
var GUESTS = Math.round(Math.random() * 9 + 1);
var CHECKIN = ['12:00', '13:00', '14:00'];
var CHECKOUT = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCRIPTION = 'строка с описанием';
var PHOTO_QTY = Math.round(Math.random() * 5);
var MAP_WIDTH = 600;
var MAP_HEIGHT = 350;
var QTY_HOUSE_CARD = 8;

//Random location
var getLocation = function (x) {
  return Math.round(Math.random() * x);
};

//Random photos gallery
var getPhotoArray = function (qtyPhoto) {
  var photoArray = [];
  for (var i = 0; i < qtyPhoto; i++) {
    photoArray.push('http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg');
  }
  return photoArray;
};

//Random element from array
var getRandomElement = function (anyArray) {
  return anyArray[Math.round(Math.random() * (anyArray.length - 1))];
};

//Random elements from basic array
var getRandomArray = function (anyArray) {
  var newArray = [];
    for (var i = 0; i < Math.round(Math.random() * (anyArray.length - 1)); i++) {
      newArray.push(anyArray[i]);
    }
  return newArray;
};

//function to creating array of 'QTY_HOUSE_CARD' generated objecrs
var createArrayOf8GenObject = function (qty) {

  var genHousesArray = [];

  for (var i = 0; i < qty; i++) {

    var author = {
      "avatar": avatar(i)
    };

    var position = {
      "x": getLocation(MAP_WIDTH),
      "y": getLocation(MAP_HEIGHT)
    };

    var offer = {
      "title": TITLE + i,
      "address": position.x + ', ' + position.y,
      "price": PRICE,
      "type": getRandomElement(TYPE),
      "rooms": ROOMS,
      "guests": GUESTS,
      "checkin": getRandomElement(CHECKIN),
      "checkout": getRandomElement(CHECKOUT),
      "features": getRandomArray(FEATURES),
      "description": DESCRIPTION + i,
      "photos": getPhotoArray(PHOTO_QTY)
    };

    var houseTicket = [author, offer, position];

    genHousesArray.push(houseTicket);
  }
  //console.log(genHousesArray);
};

createArrayOf8GenObject(QTY_HOUSE_CARD);



//2     Какое-то временно решение
 var map = document.querySelector('.map');
 map.classList.remove('map-faded');




//3

//4



