
function tip(service, amount, people){

  if (service === 'good') {
     console.log( amount * .2);
  }
    else if (service === 'fair') {
     console.log(amount * .15);
  }
    else {
    console.log((amount * .1) + (amount)/people);
    console.log((amount * .1)/people);


  }
}

tip('bad', 200, 2);
