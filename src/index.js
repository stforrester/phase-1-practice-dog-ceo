console.log('%c HI', 'color: firebrick')


// on page load, fetches the images using the url above ⬆️
function fetchFunction() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then((data)=>{
     data.message.forEach((element)=>{
         let img = document.createElement("img")
         let div = document.getElementById("dog-image-container")
         img.src = `${element}`
         div.appendChild(img)
         console.log(div)
     })
    })
} 

// fetchFunction()

document.addEventListener("DOMContentLoaded", fetchFunction)
// // parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array