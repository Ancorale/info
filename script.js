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
  $(document).on('resize', function() {
    let win = $(this);
    if (win.width() > 800) {

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

    numKey += $(this).html();// gets button number

    for (i in boxes) {
      let c = 0;
      if (numKey.length < 3) {
        $(i + c).nextAll('div:first').focus();// sets box
        $(`#` + i).val(numKey);// set number in box
      }
    }

  // end button push
  });
// end doc ready
});
