$(document).ready(function() {
  `use strict`;
  // resizer
  $(window).on('resize', function() {
  var win = $(this);
  if (win.width() > 800) {

    $(`.one1123`).addClass(`marbot20`);

  } else {
    $(`.one1123`).removeClass(`marbot20`);
  }
});

  // DATE FORMATER
  function convertDate() {
    var d = new Date();
    /*  var a = [(d.getMonth() + 1),
        (d.getDate()),
        (d.getFullYear()),
      ].join('/');  */
    var b = [(d.getHours()),
      (d.getMinutes()),
      (d.getSeconds()),
    ].join(':');
    return (b + ' ');
  }
  console.log(convertDate());


  // Time
  $(`#time`).text(convertDate());

  // button push
  $(`.num`).on(`click`, function() {
    $(this).addClass(`push`);
    setTimeout(function() {
      $(`.num`).removeClass(`push`);
    }, 200);

    let con = $(this).html();
    console.log(con);
    let atrib = $(this).attr();
    console.log(`attr= ` + atrib);

  });

});
