//^ ----------------------------------------sidebar-------------------------------------
let sideBarWidth = $(`nav`).outerWidth();
console.log(sideBarWidth);
// close icon function
$(`.x-icon`).click(function () {
  $(this).parent().animate({ left: -sideBarWidth });
});
// toggle function------------------------------------------

$(`nav`).css(`left`, -sideBarWidth);
$(`.open-side`).click(function () {
  console.log("no");
  if ($(`nav`).css(`left`) == `0px`) {
    $(this).parent().animate({ left: -sideBarWidth });
  } else {
    $(this).parent().animate({ left: `0px` });
  }
});
// hide open-side while scrolling
spaceFromTop = $(`#duration`).offset().top;
console.log(spaceFromTop);

$(window).scroll(function () {
  if ($(window).scrollTop() > spaceFromTop) {
    $(`.open-side`).css(`display`, `none`);
  } else {
    $(`.open-side`).css(`display`, `flex`);
  }
});
console.log($(window).scrollTop());
// ^ ------------------------------------duration section------------------------------------

$(`.duration h2`).click(function () {
  $(this).next().toggle(500);
  $(this).prev().hide(500);
});

// ^ -----------------------------------------COUNTER------------------------------------------------

let endDate = new Date(2024, 11, 1, 8);
let endTime = endDate.getTime();

let counter = setInterval(() => {
  let currentDate = new Date();
  let currentTime = currentDate.getTime();

  if (endTime < currentTime) {
    $(`.count-down`).html(`<p> Counydown is expired<p>`).css({
      "text-align": "center",
      "font-size": "40px",
      "font-family": `"Playfair Display", serif`,
    });
  } else {
    let reminingTime = endTime - currentTime;

    let days = Math.floor(reminingTime / (1000 * 60 * 60 * 24));
    $(".day-box").html(`${days} D`);

    let hours = Math.floor(
      (reminingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    $(".hour-box").html(`${hours} hr`);

    let minutes = Math.floor((reminingTime % (1000 * 60 * 60)) / (1000 * 60));

    $(".minute-box").html(`${minutes} m`);

    let seconds = Math.floor((reminingTime % (1000 * 60)) / 1000);
    $(".second-box").html(`${seconds} s`);
  }
}, 1000);

// ^-----------------------------------remining characters------------------------------------------

//  7adtt hena l max length = 100
let ourText = $(`#uMsg`).attr(`maxlength`);

let reminingMessage = $(`.colored-span`).html(`${ourText}`);

$(`#uMsg`).keyup(function () {
  let charcLength = $(this).val().length;
  let reminCharc = ourText - charcLength;
  reminingMessage.html(reminCharc);
});
