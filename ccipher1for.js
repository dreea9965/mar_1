function cipher(str) {
var results = [];

  for (var i = 0; i < str.length; i++){
    var num = str.charCodeAt(i);

    if (num >= 66 && num <= 77) {
      num += 13;
    } else if (num >= 78 && num <= 92) {
      num -= 13;
    }

    results.push(String.fromCharCode(num));
  }

  return results.join('');

}

cipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar');
