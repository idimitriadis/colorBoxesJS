var numSquares = 6;
var colors = generateRandomColors(numSquares);
console.log(colors);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares =3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for (var i=0;i<squares.length;i++){
       squares[i].style.backgroundColor=colors[i];
       squares[i].style.display="block";
    }
});

resetButton.addEventListener("click", function(){
    messageDisplay.textContent="";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent="";
    this.textContent = "New Colors";
    for (var i = 0; i<squares.length ; i++){
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];}
    h1.style.backgroundColor="steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i<squares.length ; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor,pickedColor);
        if (clickedColor === pickedColor){
            //alert("Correct!");
            messageDisplay.textContent = "Correct!";
            resetButton.textContent="Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            //alert("Wrong!");
            this.style.backgroundColor= "#232323";
            messageDisplay.textContent= "Try Again!";
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

//random numbers bettwen 0 and length of array
function pickColor(){
    var random  = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generate a random number(num) of different colors
function generateRandomColors(num){
    var arr=[];
    for (var i=0;i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}
//create one random color
function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    //rgb (red, green, blue)
    return "rgb("+ red +", " + green + ", " + blue +")";
}


