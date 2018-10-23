$(document).ready(function() {
  `use strict`;

  $(`.num`).on(`click`, function() {
    $(this).addClass(`push`);
    setTimeout(function(){
      $(`.num`).removeClass(`push`);
    }, 200);

    let con = $(this).html();
    console.log(con);
    let atrib = $(this).attr();
    console.log(`attr= ` + atrib);

  });

});
