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
})
}

function handleClick(brewObj) {
    const div = document.querySelector('#detailed-info')
    const bName  = document.querySelector('#name')
    const bCity = document.querySelector('#city')
    const bState = document.querySelector('#state')
    bName.textContent = brewObj.name
    bCity.textContent = brewObj.city
    bState.textContent = brewObj.state
}


//
