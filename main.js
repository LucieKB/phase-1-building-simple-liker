// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Event Listeners
const emojiHeart = (document.querySelectorAll(".like-glyph"))
for (emoji of emojiHeart) {addEventListener('click', changeHeartColor)}

//Event Handler

function changeHeartColor(emojiHeart){
  const heart = emojiHeart.target;
  console.log(heart.innerText)
  if (heart.innerText === EMPTY_HEART){
    heart.innerText = FULL_HEART
    heart.className = "activated-heart"
  } else if (heart.innerText === FULL_HEART){
    heart.innerText = EMPTY_HEART
    heart.className = ""
  }
} 


//Fetch request

function likePost(){
  mimicServerCall()
  .then(heart => changeHeartColor(heart))
  .catch(function(error){
    alert (document.getElementsByClassName("hidden").remove())
    setTimeOut(() => error.message, 3000)
  })

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
