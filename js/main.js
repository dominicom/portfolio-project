const page = $(window);

const menu = $('.hamburger');
const navi = $('nav');
const naviItem = $('nav a');

const projectItem = $('.project');

let PROJECT_ITEM_WIDTH = $('.project').width();


$(function() {
  projectItem.css('height', PROJECT_ITEM_WIDTH);
  page.resize( function(PROJECT_ITEM_WIDTH) {
    PROJECT_ITEM_WIDTH = $('.project').width();
    projectItem.css('height', PROJECT_ITEM_WIDTH);
  });
  menu.on('mouseover', function() {
    menu.addClass('hover');
  });
  menu.on('mouseout', function() {
    menu.removeClass('hover');
  });
  function menuDropDown() {
    menu.toggleClass('menu-down');
  }
  menu.on('click', function() {
    menuDropDown();
    navi.is(':hidden') ? navi.slideDown(200) : navi.slideUp(200);
  });
  naviItem.on('click', function() {
    menuDropDown();
    navi.slideUp(100);
  });
});
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});
