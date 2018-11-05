$(document).ready(function() {
  `use strict`;

  let numKey = ``,
    item = {},
    c = 0;

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
  $(".boxReSizer")
    .each(function() {
      this.setAttribute(
        "style",
        "height:" + this.scrollHeight + "px;overflow-y:hidden;"
      );
    })
    .on("input", function() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });

  // Name
  $(`#name`).blur(function() {
    let name = $(this).val() + ` &#13; `;
    myItem.push(name);
    localStorage.setItem("report", JSON.stringify(myItem));
    console.log(myItem);
  });

  // Birthday
  $(`#birthday`).blur(function() {
    let birthday = $(this).val() + ` &#13; `;
    myItem.push(birthday);
    localStorage.setItem("report", JSON.stringify(myItem));
    console.log(myItem);
  });

  // ok button
  $(`#OK`).click(function() {
    location.href = `report.html`;
  });

  // Cancel button
  $(`#cancel`).click(function() {
        window.localStorage.clear();
        location.reload(true);
  });

  //textarea
  $(`textarea`).on(`blur`, function() {
    let nums = $(this).val() + ` &#13; `,
      text = $(this).attr(`id`) + `:` + `&#13;`;
    myItem.push(text + nums);
    localStorage.setItem("report", JSON.stringify(myItem));
    console.log(`textarea`, myItem);
    $(this).removeClass(`borRed`);
  });

  $(`textarea`).focus( function() {
    $(this).addClass(`borRed`);
  });


  // DATE FORMATER
  function convertDate() {
    let d = new Date();
    let b = [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
    return b + " ";
  }
  console.log(convertDate());

  // Time

  (function(){
    $(`#time`).text(convertDate());
    let time = $(`#time`).html() + ` &#13; `;
    console.log(time);
    myItem.push(time);
    localStorage.setItem("report", JSON.stringify(myItem));
  })();





  //button push
  $(`.box`).on(`click`, function() {
    // gets textarea id
    let textareaId = $(`textarea`).attr(`id`),
      thisVal = $(this).text();
      console.log(`thisVal`, thisVal);

    // moves and colors buttons
    $(this).addClass(`push`);
    setTimeout(function() {
      $(`.num`).removeClass(`push`);
    }, 50);

    // gets number,
    // adds follow up clicks
    numKey += $(this).html();
    console.log(`numkey `, numKey);  //////////////////////////////////



    // // i loop through boxes
    // for (i = 0; i < 8; i++) {
    //   let box = boxes[c + i];
    //
    //
    //   // next
    //   if (thisVal === `Next`) {
    //      numKey = ``;
    //      c++;
    //      let boxId = boxes[c + i];
    //     $(boxId).addClass(`borRed`);
    //   }

    //   console.log(box, i, c);
    //   $(box).val(numKey);
    //
    //   // sets numKey to three then breaks
    //   if (numKey.length <= 2) {
    //
    //     break;
    //   }
    //
    //   // if (textareaId ==)
    //
    //     // report narrative box
    //     // item[box] = numKey + "  ";
    //     // myItem.push(item);
    //     // localStorage.setItem("report", JSON.stringify(myItem));
    //     // console.log(`nar`, myItem);
    //
    //   c++;
    //   numKey = ``;
    // } // end i loop
    ////// end numbers


  }); // end button push
}); // end doc ready
