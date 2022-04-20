//See information about brewery & 
// a random image of beer (click to chose a brewery)
// Filter out breweries by state via drop down menu (submit event)
// Submit form for likes (user can “like” the brewery)
// Submit a form to leave a review of the brewery.

document.addEventListener('DOMContentLoaded', () => {

    const arrBrew = "https://api.openbrewerydb.org/breweries"

    fetch(arrBrew)
    .then(resp => resp.json())
    .then(data => {

        function breweryName(name) {
            const container = document.getElementById("brewery-list")
            const arrName = document.createElement('name')

        arrBrew.forEach(breweryName => renderName(breweryName));

        }
    
   

})})
