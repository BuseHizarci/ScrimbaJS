// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let purchaseParagrapgh = document.getElementById("error")
console.log(purchaseParagrapgh)
function purchase (){
    console.log("Clicked")
    purchaseParagrapgh.textContent = "Error : Something went wrong!"
}

