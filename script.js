const shareBtn = document.querySelector('.share-btn');
const shareWrap = document.querySelector('.share-wrap');

// const shareOption = function() {
//   shareWrap.style.display = "block";
// }

function shareOption() {
  if(shareWrap.style.display === "none") {
    shareWrap.style.display = "block";
    shareBtn.style.color = "white";
    shareBtn.style.backgroundColor = "hsl(214, 17%, 51%)";
  
  } else {
  shareWrap.style.display = "none";
  shareBtn.style.color = "hsl(214, 17%, 51%)";
  shareBtn.style.backgroundColor = "hsl(210, 46%, 95%)";
  }
}

shareBtn.addEventListener('click', shareOption)