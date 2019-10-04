'use strict';

// 1
// avatar filenames function
var avatar = function (i) {
  return 'img/avatars/user0' + (i + 1) + '.png';
};

// offer parameters
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
var MAP_WIDTH = 1200;
var MAP_HEIGHT = 500;
var QTY_HOUSE_CARD = 8;
var PIN_OFFSET_X = -25;
var PIN_OFFSET_Y = -70;

// Random location
var getLocation = function (x) {
  return Math.round(Math.random() * x);
};

// Random photos gallery
var getPhotoArray = function (qtyPhoto) {
  var photoArray = [];
  for (var i = 0; i < qtyPhoto; i++) {
    photoArray.push('http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg');
  }
  return photoArray;
};

// One random element from array
var getRandomElement = function (anyArray) {
  return anyArray[Math.round(Math.random() * (anyArray.length - 1))];
};

// Several random elements from array
var getRandomArray = function (anyArray) {
  var newArray = [];
  for (var i = 0; i < Math.round(Math.random() * (anyArray.length - 1)); i++) {
    newArray.push(anyArray[i]);
  }
  return newArray;
};

// function to creating array of 'QTY_HOUSE_CARD' generated objects
var creatingArray = function (qty) {

  var genHousesArray = [];

  for (var i = 0; i < qty; i++) {
    var positionX = getLocation(MAP_WIDTH);
    var positionY = getLocation(MAP_HEIGHT) + 130;

    var houseTicket = {
      author: {
        avatar: avatar(i)
      },
      offer: {
        title: TITLE + i,
        address: positionX + ', ' + positionY,
        price: PRICE,
        type: getRandomElement(TYPE),
        rooms: ROOMS,
        guests: GUESTS,
        checkin: getRandomElement(CHECKIN),
        checkout: getRandomElement(CHECKOUT),
        features: getRandomArray(FEATURES),
        description: DESCRIPTION + i,
        photos: getPhotoArray(PHOTO_QTY)
      },
      location: {
        x: positionX,
        y: positionY
      },
    };

    genHousesArray.push(houseTicket);
  }

  return genHousesArray;
};

// 2
document.querySelector('.map').classList.remove('map--faded');

// 3
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
var mapPins = document.querySelector('.map__pins');
var fragment = document.createDocumentFragment();

// Add new styles to pin
var creatingPin = function (pinsArrayElement) {
  var newPin = pinTemplate.cloneNode(true);

  newPin.querySelector('img').src = pinsArrayElement.author.avatar;
  newPin.style.left = pinsArrayElement.location.x + PIN_OFFSET_X + 'px';
  newPin.style.top = pinsArrayElement.location.y + PIN_OFFSET_Y + 'px';

  return newPin;
};

// 4
var showPins = function () {
  var pinsArray = creatingArray(QTY_HOUSE_CARD);

  for (var i = 0; i < pinsArray.length; i++) {
    fragment.appendChild(creatingPin(pinsArray[i]));
  }

  mapPins.appendChild(fragment);
};

showPins();
