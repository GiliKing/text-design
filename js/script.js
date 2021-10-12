//select the h1 tag
const h1 = document.querySelector("h1");

const letters = h1.innerText.split("");

let html = "";

// loop through each letters and add a class to each letter
letters.forEach(function(letter, index){
    let classes = '';
    if(letter !== ' '){
        classes = 'letter js-letter';
    }
    html = `${html} <span class='${classes}'>${letter}</span>`
})

h1.innerHTML = html;


// select the class that is dynamically added to each indival letters
const move_letters = document.querySelectorAll(".js-letter");

// loop through the letters and add a temporary class that would move the letter on mouser over
move_letters.forEach(function(node, index) {
    node.addEventListener("mouseover", function(event) {
        console.log(this.innerHTML);
        this.classList.add("active")
    })
    node.addEventListener("mouseout", function(event) {
        console.log("out");
        this.classList.remove("active")
    })
})