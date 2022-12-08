window.addEventListener("DOMContentLoaded", function() {
  let boxes = document.querySelectorAll(".serviceBoxSection1");
  console.log(boxes);
  Array.from(boxes, function(box) {
    box.addEventListener("click", function() {
      if (this.classList[1] == 'ecommerce') {
          location.href = '#eComSection';
      } else if (this.classList[1] == 'frontEndDev') {
          location.href = '#webDevSection';
      } else if (this.classList[1] == 'emailMarketing') {
          location.href = '#emailMarketingSection';
      }
    });
  });
});

var click = 0;

function changeMainImage() {
  if ( click == 0 ){
      click = 1;
      document.getElementById("coreyImage1").src = "./public/assets/coreyVector.png";
  } else if (click == 1) {
      click = 0;
      document.getElementById("coreyImage1").src = "./public/assets/Corey.png";
  }
}


function boxTerra1ImageChange() {
  document.getElementById("webDevImageBig").src = "./public/assets/boxTerra1Big.png";
}

function boxTerra2ImageChange() {
  document.getElementById("webDevImageBig").src = "./public/assets/boxTerra2Big.png";
}

function indoorNow1ImageChange() {
  document.getElementById("webDevImageBig").src = "./public/assets/indoorNowBig1.png";
}

function indoorNow2ImageChange() {
  document.getElementById("webDevImageBig").src = "./public/assets/indoorNowBig2.png";
}
