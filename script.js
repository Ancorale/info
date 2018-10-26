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

  // textarea
  // $(`textarea`).on('change focus', function() {
  //   var txArea = $(this).val() + " &#64; ";
  //   var itemTime = convertDate() + " &#13; ";
  //   var itemName = $(this).prop('id');
  //   var item = {};
  //   item[itemName] = txArea;
  //   item["TIME"] = itemTime;
  //   myItem.push(item);
  //   localStorage.setItem('report', JSON.stringify(myItem));
  //   console.log(myItem);
  // });

  // button push
  $(`.num`).on(`click`, function() {
    $(`textarea`).on('focus', function() {
      if (numKey.length <= 3) {
        console.log(numKey.length);
        $(this).val(numKey);// set number in box
      }
    })

    $(this).addClass(`push`);
      setTimeout(function() {
        $(`.num`).removeClass(`push`);
      }, 100);
    numKey += $(this).html();// gets button number

  });// end button push

});// end doc ready
