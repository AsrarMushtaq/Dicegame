document.onload = inputName();

function inputName(){
  var player1 = prompt("Enter name of player 1");
  var player2 = prompt("Enter name of player2");
  document.querySelector("#p1").innerHTML = player1;
  document.querySelector("#p2").innerHTML = player2;
}

function randomNumber(){
    var n1 = Math.floor(Math.random()*6)+1;
    var n2 = Math.floor(Math.random()*6)+1;
    var player1 = document.querySelector("#p1").innerHTML;
    var player2 = document.querySelector("#p2").innerHTML;

  if(n1 > n2){
    document.querySelector("#winner").innerHTML = player1+" wins";
  }
  else if(n1<n2){
    document.querySelector("#winner").innerHTML = player2+" wins";
  }
  else{
    document.querySelector("#winner").innerHTML = "It's a draw! Roll Again";
  }


  switch(n1){
    case 1 :
    document.querySelector(".imgdice1").src = "css/dice1.png";

      break;
      case 2 :
      document.querySelector(".imgdice1").src = "css/dice2.png";

        break;
        case 3 :
        document.querySelector(".imgdice1").src = "css/dice3.png";

          break;
          case 4 :
          document.querySelector(".imgdice1").src = "css/dice4.png";

            break;
            case 5 :
            document.querySelector(".imgdice1").src = "css/dice5.png";

              break;
              case 6 :
              document.querySelector(".imgdice1").src = "css/dice6.png";

                break;
  }


  switch(n2){
    case 1 :
    document.querySelector(".imgdice2").src = "css/dice1.png";

      break;
      case 2 :
      document.querySelector(".imgdice2").src = "css/dice2.png";

        break;
        case 3 :
        document.querySelector(".imgdice2").src = "css/dice3.png";

          break;
          case 4 :
          document.querySelector(".imgdice2").src = "css/dice4.png";

            break;
            case 5 :
            document.querySelector(".imgdice2").src = "css/dice5.png";

              break;
              case 6 :
              document.querySelector(".imgdice2").src = "css/dice6.png";

                break;
  }
  document.querySelector(".rollbtn").innerHTML = "ROLL AGAIN!";
    document.querySelector(".namebtn").style.visibility = "hidden";
}
