
function rot13(str) {
  var characters = str.split('');

  return characters.map(function(letter){
    letter = letter.charCodeAt();

  if (letter >= 66 && letter <= 77) {
    letter += 13;
  } else if (letter >= 78 && letter <= 92) {
    letter -= 13;
  }

  return String.fromCharCode(letter);
}) .join('');
}

rot13('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar');
