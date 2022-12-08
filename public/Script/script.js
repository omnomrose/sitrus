window.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".teamCard");
  
    Array.from(boxes, function(box) {
      box.addEventListener("click", function() {
        if (this.classList[2] == 'giovana') {
            location.href = 'giovana.html';
        } else if (this.classList[2] == 'corey') {
            location.href = 'corey.html';
        } else if (this.classList[2] == 'aaron') {
            location.href = 'aaron.html';
        } else if (this.classList[2] == 'mariela') {
            location.href = 'mariela.html';
        } else if (this.classList[2] == 'rose') {
            location.href = 'rose.html';
        }
      });
    });

  });