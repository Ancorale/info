$(document).ready(function() {
  `use strict`;

  let numKey = ``;
  const boxes = {
    0: `#systolic`,
    1: `#diastolic`,
    2: `#pulse`,
    3: `#respiration`,
    4: `#SPO2`,
    5: `#CO2`,
    6: `#bloodSugar`,
    7: `#pain`,
    8: `#temperature`
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
    let b = [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
    return b + " ";
  }
  console.log(convertDate());

  // Time
  $(`#time`).text(convertDate());
  let c = 0;
  //button push
  $(`.num`).on(`click`, function() {
    // gets textarea id
    let textareaId = $(`textarea`).attr(`id`);

    // moves and colors buttons
    $(this).addClass(`push`);
    setTimeout(function() {
      $(`.num`).removeClass(`push`);
    }, 50);

    // gets number,
    // adds follow up clicks
    numKey += $(this).html();

    console.log(numKey, typeof numKey);

    // i loop through boxes
    for (i = 0; i < 8; i++) {
      console.log(boxes[i + c], i, c);

      // sets numKey to three then breaks
      if (numKey.length < 4) {
        $(boxes[i + c]).val(numKey);
        return;
      }
      c++;
      numKey = ``;
    } // end i loop
    ////// end numbers

    //// textarea
    $(`textarea`).focus(function() {
      $(`.num`).onclick(function() {
        numKey += $(this).html();
      });
    });
  }); // end button push
}); // end doc ready
