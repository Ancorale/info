$(document).ready(function() {
  `use strict`;



  const boxes = {
    1: `systolic`,
    2: `diastolic`,
    3: `pulse`,
    4: `respiration`,
    5: `SPO2`,
    6: `CO2`,
    7: `bloodSugar`,
    8: `pain`,
    9: `temperature`
  };


  // resizer
  // $(window).on('resize', function() {
  //   let win = $(this);
  //   if (win.width() < 800) {
  //     $(`.one1123`).addClass(`marbot20`);
  //   } else {
  //     $(`.one1123`).removeClass(`marbot20`);
  //   }
  // });

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

  let numKey = ``;
  // button push
  $(`.num`).on(`click`, function() {
    let textareaId = $(`textarea`).attr(`id`);

    $(this).addClass(`push`);
    setTimeout(function() {
      $(`.num`).removeClass(`push`);
    }, 100);

    numKey += $(this).html(); // gets button number
    console.log(typeof(numKey));

    let c = 1;

    for (i in boxes){

      if (numKey.length <= 3) {
        console.log(c);
        $(`#` + boxes[c]).val(numKey); // set number in box

      }
      else {
        numKey = ``;
        c++;

        $(`#` + boxes[c]).val(numKey);
          console.log(boxes[c]);

      }

    }// end for i


  }); // end button push

}); // end doc ready
