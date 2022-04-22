//See information about brewery & 
// a random image of beer (click to chose a brewery)
// Filter out breweries by state via drop down menu (submit event)
// Submit form for likes (user can “like” the brewery)
// Submit a form to leave a review of the brewery.
window.addEventListener('DOMContentLoaded', () => {
    fetch("https://api.openbrewerydb.org/breweries")
    .then(resp => resp.json())
    .then(arrBrew => individBrew(arrBrew))
});


const individBrew = (arr) => {
    arr.forEach(brewObj => {
    const div = document.querySelector('.logo')
    const ul = document.createElement('ul')
    ul.textContent = brewObj.name
    // console.log(brewObj.name)
    div.appendChild(ul);
    ul.addEventListener('click', () => handleClick(brewObj))
// mouseover Event
// let bar = document.querySelector('#brewery-bar')
ul.addEventListener("mouseover", (e) => {
    // highlight the mouseover target
    e.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(() => {
      e.target.style.color = "";
    }, 500);
  }, false);
})
}

function handleClick(brewObj) {
    const div = document.querySelector('#detailed-info')
    const bName  = document.querySelector('#name')
    const bCity = document.querySelector('#city')
    const bState = document.querySelector('#state')
    const comment = document.getElementById('commentarea')
    bName.textContent = brewObj.name
    bCity.textContent = brewObj.city
    bState.textContent = brewObj.state
    comment.textContent = " "
}

// Likes Counter
const likesCount = document.getElementById("likes-count")
let upCount = 0
function likeIncrement(){
    upCount = upCount + 1
    likesCount.innerText = upCount
}
// Dislikes Counter
const dislikesCount = document.getElementById("dislikes-count")
let disCount = 0 
function disIncrement(){
    disCount = disCount + 1
    dislikesCount.innerText = disCount
}

//Comment Section
const form = document.querySelector('#comment-form')
 form.addEventListener('submit', handleSubmit)

 function handleSubmit (e) {
     e.preventDefault();
     console.log(e)
     const div = document.querySelector("#detailed-info")
     const textarea = document.getElementById("txtarea")
    // const newComment = textarea.value
     const disComment = document.getElementById('commentarea')
     disComment.textContent = textarea.value
    //  div.append(disComment)
     form.reset()
    }
    

