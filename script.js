$(document).ready(function() {
  `use strict`;



  const boxes = {
    systolic,
    diastolic,
    pulse,
    respiration,
    SPO2,
    CO2,
    bloodSugar,
    pain,
    temperature
  };
  let numKey = ``;

  // resizer
  $(window).on('resize', function() {
    let win = $(this);
    if (win.width() < 800) {
      $(`.one1123`).addClass(`marbot20`);
    } else {
      $(`.one1123`).removeClass(`marbot20`);
    }
  });

  // DATE FORMATER
  function convertDate() {
    let d = new Date();
    let b = [(d.getHours()),
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
      }, 100);

      numKey += $(this).html(); // gets button number

      let textareaId = $(`textarea`).attr(`id`);

      for (i = 0; i < boxes.length; i++) {
        if (textareaId === i && numKey.length <= 3) {
          $(`#` + i).val(numKey); // set number in box
        }
        else {
          var j = i + 1;
        }
        console.log(textareaId, numKey.length, i);
      }

  }); // end button push


}); // end doc ready
