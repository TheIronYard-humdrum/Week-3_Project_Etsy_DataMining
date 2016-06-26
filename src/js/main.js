import $ from 'jquery';
import {originalItems} from './items.js'

var items = (originalItems.results);

var imgURLs = [];
var itemPages = [];
var titles = [];
var storeNames = [];
var storeURLs = [];
var itemPrice = [];
var itemsFallOver = [];

var items = originalItems.results.map(function (item) {
  return {
    image_url: item.Images[0].url_170x135,
    item_page: item.url,
    title: item.title,
    store: item.Shop.shop_name,
    storeURL: item.Shop.url,
    currency_code: item.currency_code,
    price: item.price
  };
});

while (items.length > 16){
itemsFallOver.push(items.pop());
}

items.forEach(function(item) {

  if (item.currency_code === "USD") {
    item.price = ('\x24' + item.price)
  } else if (item.currency_code === "GBP") {
      item.price = ('\xA3' + item.price)
     }
});


var number = function () {return Math.floor(Math.random()*255)}

var colorString = ("rgb(" + number() + ", " + number() + ", " + number() + ")")

var colorString = function() {
  var number = function () {return Math.floor(Math.random()*255)}
  return ("rgb(" + number() + ", " + number() + ", " + number() + ")")
}

$(document).ready(function(){
  $('.img-container').on('click', function(){
    $(this).css("background-color", colorString())
  });
    console.log(items)
    items.forEach(function(item) {
      var html = `<div class="img-container">
          <div class="img">
            <img src="${item.image_url}">
            <p class="favorite"><img src="images/heart.png"></p>
            <p class="img-menu"><img src="images/hamburger.png"></p>
          </div>
          <div class="store-info">
          <a class="item-name" href="${item.item_page}">${item.title}</a>
          <a class="store-name" href="${item.storeURL}">${item.store}</a>
          <p class="item-price">${item.price}</p>
          </div>
        </div>`
        $('.imgs').append(html)
    })

    $('.show-more').on('click', function(){
      itemsFallOver.forEach(function(item) {
      var html = `<div class="img-container">
          <div class="img">
            <img src="${item.image_url}">
            <p class="favorite"><img src="images/heart.png"></p>
            <p class="img-menu"><img src="images/hamburger.png"></p>
          </div>
          <div class="hidden store-info">
          <a class="item-name" href="${item.item_page}">${item.title}</a>
          <a class="store-name" href="${item.storeURL}">${item.store}</a>
          <p class="item-price">${item.price}</p>
          </div>
        </div>`
        $('.imgs').append(html)
      })
      $(this)[0].textContent = "Show fewer results."
      $(this)[0].classList = "show-fewer"
      while (itemsFallOver.length > 0){
        items.push(itemsFallOver.pop())
      }
    });

    $('.show-fewer').on('click', function(){
      while (items.length > 16) {
        itemsFallOver.push(items.pop())
        $('image-container').lastChild.remove()
      }
    })
});











