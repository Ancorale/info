$(document).ready(function() {
  `use strict`;

  $(`.num`).on(`click`, function() {
    let num = $(`num`);
    num.animate({left: '20px'}, 100);
    num.animate({right: '2px'}, 100);

  });

});
