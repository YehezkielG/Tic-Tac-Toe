var PlayerEngagement = 1;
var content = "";
var polaPlayer1 = "";
var polaPlayer2 = "";
var Arr1= 0;
var EndGame = false;
var detik = 0;
var menit = 0;
new Date().getFullYear();
var rotate = 0;
var Player1Score = 0;
var Player2Score = 0;
function gameStart(btn){
    document.getElementById(btn).addEventListener("click", function(index){
        var GetButton = document.getElementById(btn);
        if(PlayerEngagement%2==0){
            content = "<div class = 'charakter'><img src = 'o.png'></div>";
            GetButton.style = "color:red;"
            polaPlayer2 += GetButton.value;
        }
        else{
            content = "<div class = 'charakter'><img src = 'x.png'></div>";
            GetButton.style = "color:blue;"
            polaPlayer1 += GetButton.value;
        }
        GetButton.innerHTML = content;
        GetButton.disabled = true;
        for(let i=0; i<9; i++){
            var p1 = 0;
            var p2 = 0;
            try {   
            for(let j=0; j<3; j++){   
                if(polaPlayer1.match(pola[i][j])){                    
                    p1++;
                }
                if(polaPlayer2.match(pola[i][j])){                    
                    p2++;
                }
            }   
            } catch (error) {
                
            }
            if(p1==3){
                document.getElementById("popUp").style = "display:block;";
                document.querySelector("#winner").textContent = "Player 1 wins";      
                document.getElementById("TimeEnd").innerHTML = document.querySelector(".timer").innerHTML;
                Player1Score++;
                document.getElementById("Player1Score").textContent = Player1Score;
                EndGame = true;
                return 1;
            }
            else if(p2==3){
                document.getElementById("popUp").style = "display:block;";
                document.querySelector("#winner").textContent = "Player 2 wins";
                document.getElementById("TimeEnd").innerHTML = document.querySelector(".timer").innerHTML;
                Player2Score++;
                document.getElementById("Player2Score").textContent = Player2Score;
                EndGame = true;
                return 1;
            }
        }
        if(PlayerEngagement==9){
            document.getElementById("popUp").style = "display:block;";
            document.querySelector("#winner").textContent = "Draw";
            document.getElementById("TimeEnd").innerHTML = document.querySelector(".timer").innerHTML;
            EndGame = true;
            return 0;
        }
        PlayerEngagement++;
    })
}
gameStart("btn1");
gameStart("btn2");
gameStart("btn3");
gameStart("btn4");
gameStart("btn5");
gameStart("btn6");
gameStart("btn7");
gameStart("btn8");
gameStart("btn9");
var pola = [
    ["1","2","3"],
    ["1","5","9"],
    ["1","4","7"],
    ["7","5","3"],
    ["7","8","9"],
    ["2","5","8"],
    ["3","6","9"],
    ["4","5","6"]
]
setInterval(function() {
    if(!EndGame){
    detik++;
    if(detik==60){
        menit++;
       
    detik = 0;
    }
    if(detik<10){
        document.querySelector("#second").innerHTML = "0" + detik;
    }
    else{
        document.querySelector("#second").innerHTML = detik;
    }}
    if(menit<10){
        document.querySelector("#minute").innerHTML = "0" + menit;
    }
        else{
        document.querySelector("#minute").innerHTML = menit;
    }
},1000)

function repeatBtnPressed(){
    var TableChild= document.querySelector(".table").children;
    for (let i = 0; i < TableChild.length; i++) {
        TableChild[i].innerHTML = "";
        TableChild[i].disabled = false;
    }
    PlayerEngagement = 1;
     content = "";
     polaPlayer1 = "";
     polaPlayer2 = "";
     Arr1= 0;
     EndGame = false;
     detik = 0;
     menit = 0;
     rotate = 0;
document.getElementById("popUp").style = "display:none;";
}
 