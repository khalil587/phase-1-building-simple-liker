// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// we used the grab element Id to to grab the error message ID and attached the hidden method to hide it so it doesnt show up first on the page 
document.getElementById("modal").hidden = true;
// we created variable loves and made it equal to the like button by grabbing the class name for the button
const loves = document.getElementsByClassName("like-glyph");
//we created a for loop to gather and iterate/ attach the eventlistener function to ever heart button
for (let i = 0; i < loves.length; i++){
 loves[i].addEventListener("click", function(){
  //we created a API request that stated if the heart is activeted when pressed and again it will remove its activation 
  if (loves[i].classList.contains("activated-heart")){
    loves[i].classList.remove("activated-heart")
  }else{
   // if the heart hasnt been activated or pressed the it will do its normal run by activating it
    mimicServerCall().then(() => {
      loves[i].classList.add("activated-heart");
      
     // catch catches any error thats pops up through the website (like if it doestn receive the API request)
    }).catch((errorMessage)=> {
      // we are grabbing the element 'modal' by its ID and we are unhiding it
      document.getElementById("modal").hidden = false;
      // we are using innerHTML to add the inner meat of "modal-message" to the 'modal'
      document.getElementById("modal-message").innerHTML = errorMessage
      // this line is setting a timmer function to show the error message for only 3 seconds
      setTimeout(function(){
        document.getElementById("modal").hidden = true;
  
      },3000)
    });
  }
  
  
 });
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
