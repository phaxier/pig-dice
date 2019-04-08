
$().ready(()=>{

      var objectPlayer = {
          name: '',
          role:[]

      }
      var objectPlayer2 = {
          name: '',
          role:[]

      }
       function getSum(a,b){
          return a + b;
      }


      //Player 1
      //add name
  document.getElementById('addname').addEventListener('click', function(){
    objectPlayer.name = document.getElementById('name').value;
    document.getElementById('inner').innerHTML = objectPlayer.name
  });
  // Role Dice
  document.getElementById('roll').addEventListener('click', function(){
      var roleArray = objectPlayer.role
      var random = Math.ceil((Math.random()*6)+0)
      var randomNumber = roleArray.unshift(random);
      var total = objectPlayer.role.reduce(getSum)
      var recent = objectPlayer.role[0];
  document.getElementById('recent').innerHTML= recent
     if(roleArray[0] > 1){

         document.getElementById('inner1').innerHTML = roleArray
  document.getElementById('total').innerHTML = total



     }

     else{
      delete roleArray
      delete objectPlayer.name
      //document.getElementById('inner').remove('active')
      //document.getElementById('inner1').remove('active')
      var result = "Game Over!"
      document.getElementById('result').innerHTML = result
      document.getElementById('roll').disabled = true
      document.getElementById('addname').disabled = true
      document.getElementById('addname1').disabled = false
      document.getElementById('roll1').disabled = false
     }



  });
     //Player 2
     //add name
     document.getElementById('addname1').addEventListener('click', function(){
    objectPlayer2.name = document.getElementById('name1').value;
    document.getElementById('inner2').innerHTML = objectPlayer2.name
  });
  // Role Dice
  document.getElementById('roll1').addEventListener('click', function(){
      var roleArray1 = objectPlayer2.role
      var random = Math.ceil((Math.random()*6)+0)
      var randomNumber = roleArray1.unshift(random);
      var total1 = objectPlayer2.role.reduce(getSum)
      var recent = objectPlayer2.role[0];
  document.getElementById('recent2').innerHTML= recent
     if(roleArray1[0] > 1){

         document.getElementById('inner3').innerHTML = roleArray1
  document.getElementById('total1').innerHTML = total1
  console.log(objectPlayer2.role.reduce(getSum))


     }

     else{
      delete roleArray2
      delete objectPlayer2.name
      //document.getElementById('inner2').remove('active')
      //document.getElementById('inner3').remove('active')

      var result = "Game Over!"
      document.getElementById('result1').innerHTML = result
      document.getElementById('roll').disabled = true
      document.getElementById('addname').disabled = true
      document.getElementById('addname1').disabled = true
      document.getElementById('roll1').disabled = true
      winner()
     }



  });

  //who is the winner
  function winner(){
  var win1 = objectPlayer.role.reduce(getSum)
  var win2 = objectPlayer2.role.reduce(getSum)
  if(win1>win2)
  {
      var textWinner =  "Player1 has won"
      document.getElementById('winner').innerHTML = textWinner
  }
  else{
      var textWinner2 =   "Player2 has won"
      document.getElementById('winner').innerHTML = textWinner2
  }
  }
});
