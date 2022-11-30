window.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".teamCard");
  
    Array.from(boxes, function(box) {
      box.addEventListener("click", function() {
        if (this.classList[2] == 'giovana') {
            location.href = 'index.html';
        } else if (this.classList[2] == 'corey') {
            location.href = 'index.html';
        } else if (this.classList[2] == 'aaron') {
            location.href = 'index.html';
        } else if (this.classList[2] == 'mariela') {
            location.href = 'index.html';
        } else if (this.classList[2] == 'rose') {
            location.href = 'index.html';
        }
      });
    });
    
  });