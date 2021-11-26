// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let commentHeart = document.getElementsByClassName("like-glyph") // We are adding the add the HTML class called like-glyph to this new varaible so we can call on it later


function likeHeart(e) { 
  let heart = e.target;
  mimicServerCall()
    .then(function() {
      if (heart.innerHTML == [EMPTY_HEART]) {
        heart.innerHTML = [FULL_HEART];
        heart.classList.add("activated-heart");
    }  else {
        heart.innerHTML = [EMPTY_HEART];
        heart.classList.remove("activated-heart")
      }
    })
    .catch(function(reject) {
      const element = document.getElementById("modal");
      element.classList.remove("hidden");
      element.innerHTML = [reject];
      setTimeout(function() {
        document.getElementById("modal").classList.add("hidden")
      }, 3000)
    });
}

for (let glyph of commentHeart) {
  glyph.addEventListener("click", likeHeart)
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
