//fetch squers and set the start state 6 squares 

var numsquare = 9;
var squares = document.querySelectorAll(".square ");

//functions of colors depending on numsquares generat the colors
var colors = generaterandomcolor(numsquare);
var pickedcolor = pickcolor();
var colordisplay = document.querySelector("#colordisplay")

//text action if you win  
var massagedisplay = document.querySelector("#massage")
var headrgb = document.querySelector("#headrgb")
colordisplay.textContent = pickedcolor;

//choess for the game
var midumdbtn = document.querySelector('#midumdbtn')
var easybtn = document.querySelector('#easybtn')
var hardbtn = document.querySelector('#hardbtn')


//when clicked the easy btn 
easybtn.addEventListener('click', function() {
    massagedisplay.textContent = ""; 
    //make it selected(highlight) and set 3 squares 
    easybtn.classList.add('selected')
    midumdbtn.classList.remove('selected')
    hardbtn.classList.remove('selcted')
    
    numsquare = 3;

    // generate the color depending on the easy mood with 3 square
    colors = generaterandomcolor(numsquare);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;

    //loop in the squares and make it undisplay if it out of range 3(easy mood)
    for (var i = 0; i < squares.length; i++) {
        if (i < numsquare) {
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = 'none';
        }
    }
    headrgb.style.backgroundColor = 'royalblue';

})

//when clicked the mid btn 
midumdbtn.addEventListener('click', function() {
    massagedisplay.textContent = "";
    //make it selected (highlighted) and set 6 squares
    midumdbtn.classList.add('selected');
    hardbtn.classList.remove('selected')
    easybtn.classList.remove('selected')

    var numsquare = 6;

    // generate the color depending on the medium mood with 6 squares
    colors = generaterandomcolor(numsquare);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;

    //loop in the squares to put the colors for every block
    for (var i = 0; i < squares.length; i++) {
        if (i < numsquare) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
        } else {
            squares[i].style.display = 'none';
        }
    }
    headrgb.style.backgroundColor = pickcolor();
});

// when clicked the hard btn
hardbtn.addEventListener('click', function() {

    massagedisplay.textContent = "";
    //make it selected(highlight) and set 9 squares 
    midumdbtn.classList.remove('selected')
    easybtn.classList.remove('selected')
    hardbtn.classList.add('selected')
   
    numsquare = 9;

    // generate the color depending on the hard mood with 9 square
    colors = generaterandomcolor(numsquare);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;

    //loop in the squares to put the colors for every block
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = 'block';
    }
    headrgb.style.backgroundColor = 'royalblue';
})

function removeSelectedClassFromButtons(selectedButton) {
    var difficultyButtons = document.querySelectorAll('.difficulty-button');
    difficultyButtons.forEach(function(button) {
        button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
}



//when clickedin playagain
var reset = document.querySelector("#reset")
reset.addEventListener('click', function() {

    massagedisplay.textContent = "";

    // generate the color depending on the mood either easy or hard
    colors = generaterandomcolor(numsquare);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    this.textContent = "New Color"

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    headrgb.style.backgroundColor = 'royalblue';

})

//the game loop
for (var i = 0; i < squares.length; i++) {
    //intial color for the squares 
    squares[i].style.backgroundColor = colors[i];
    //add click listiner to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedcolor = this.style.backgroundColor;
        //compare color to the picked color
        if (clickedcolor === pickedcolor) {
            massagedisplay.textContent = "correct";
            changecolors(clickedcolor);
            headrgb.style.backgroundColor = clickedcolor;
            reset.textContent = 'play again';
        } else {
            this.style.backgroundColor = "#232323";
            massagedisplay.textContent = "TRY again";
        }
    });
}

function changecolors(color) {
    //loop throug all squares
    for (var i = 0; i < squares.length; i++) {
        //change every square color to the right color
        squares[i].style.backgroundColor = color;
    }
}

function pickcolor() {
    //generate random numbers to pick the color from the colors
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generaterandomcolor(num) {
    //make array 
    var arr = [];
    //add number 
    for (var i = 0; i < num; i++) {
        //get random color(function) and push into arr 
        arr.push(randomcolor());
    }
    //return that array
    return arr;
}

function randomcolor() {
    //every color consist of 3 chanele color RGB
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rgb;
}