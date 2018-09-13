'use strict'


//CLICK ON THE IMAGE AND COUNT THE CLICKS

var num = 0;
  $(document).ready(function() {
    $('.fortuneCookieImg').click(function() {
      num++;
      console.log('hey the click is working!')
      $('.fortuneNumber').text('Fortunes Generated: ' + num);
      console.log('fortunt gen', num);
      fortuneGenerator();
    })
  });

function fortuneGenerator(){
  let firstHalf;
  let secondHalf;
  var firstRand = Math.floor(Math.random() * 10);
  var secondRand = Math.floor(Math.random() * 10);

  console.log('rand1', firstRand);
  console.log('rand2', secondRand);

  // switch(firstHalf) {
  //   case 1:
  //   fdsfd
  //    break;
  // }

  if(firstRand===0){
    firstHalf="On Tuesday you will";
  }
  else if(firstRand===1){
    console.log('in first');
    firstHalf="Very soon, you will";
  }
  else if(firstRand===2){
    firstHalf="At the appointed time,";
  }
  else if(firstRand===3){
    firstHalf="Though you may not believe it at first, you will";
  }
  else if(firstRand===4){
    firstHalf="Next week your friend will";
  }
  else if(firstRand===5){
    firstHalf="On Tuesday, you will";
  }
  else if(firstRand===6){
    firstHalf="Stop worrying. The following Sunday will be the day you ";
  }
  else if(firstRand===7){
    firstHalf="Consider all things joy, because soon you will";
  }
  else if(firstRand===8){
    firstHalf="On the 30 of April, you will";
  }
  else if(firstRand===9){
    firstHalf="Your mother has said that you will";
  }
  else if(firstRand===10){
    firstHalf="Next week your friend will";
  }

  //SECOND IF STATEMENT
  if(secondRand===0){
    secondHalf=" find love.";
  }
  else if(secondRand===1){
    secondHalf=" meet a kind neighbor.";
  }
  else if(secondRand===2){
    secondHalf=" meet a mysterious gypsy.";
  }
  else if(secondRand===3){
    secondHalf=" join the circus.";
  }
  else if(secondRand===4){
    secondHalf="find love.";
  }
  else if(secondRand===5){
    secondHalf="make a drastic change.";
  }
  else if(secondRand===6){
    secondHalf=" get a phone call from a kind stranger. Do what she says.";
  }
  else if(secondRand===7){
    secondHalf=" show up in a yellow rain jacket.";
  }
  else if(secondRand===8){
    secondHalf=" finally meet Nicholas Cage.";
  }
  else if(secondRand===9){
    secondHalf=" drink the best cup of coffee you've ever had.";
  }
  else if(secondRand===10){
    secondHalf=" join a community of people who love people well.";
  }

$('.fortune').text(firstHalf + secondHalf);
  console.log('clicked twice');

}
