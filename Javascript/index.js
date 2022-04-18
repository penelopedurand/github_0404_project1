//See information about brewery & 
// a random image of beer (click to chose a brewery)
// Filter out breweries by state via drop down menu (submit event)
// Submit form for likes (user can “like” the brewery)
// Submit a form to leave a review of the brewery.

window.addEventListener('DOMContentLoaded', () => {
    fetch("https://api.openbrewerydb.org/breweries")
    .then(resp => resp.json())
    .then(data => console.log(data))
});

// arrBrew => individBrew