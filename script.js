$(document).ready(function() {
  `use strict`;

  let numKey = ``,
    item = {};

  myItem = [];
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

  // report window resizer
  $('.boxReSizer').each(function() {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

  // resizer
  // $(window).on('resize', function() {
  //   let win = $(this);
  //   if (win.width() < 800) {
  //     $(`.one1123`).addClass(`marbot20`);
  //   } else {
  //     $(`.one1123`).removeClass(`marbot20`);
  //   }
  // });

  // Name
  $(`#name`).blur(function() {
    let name = $(this).val() + ` &#13; `;
    myItem.push(name);
    localStorage.setItem('report', JSON.stringify(myItem));
    console.log(myItem);
  })

  //

  // ok button
  $(`#OK`).click(function(){
    location.href=`report.html`;
  })

  // Cancel button
  $(`#cancel`).click(function(){
    location.reload(true);
  })

  // back button
  // $(`#back`).click(function(){
  //   window.history.back()"
  // })

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
      let box = boxes[c+i];

      console.log(box, i, c);
      $(box).val(numKey);
      // sets numKey to three then breaks
      if (numKey.length <= 2) {

        break;
      }


      // report narrative box

    item[box] = numKey + "  ";
    myItem.push(item);
    localStorage.setItem('report', JSON.stringify(myItem));
    console.log(myItem);

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
