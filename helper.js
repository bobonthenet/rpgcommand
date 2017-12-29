function roll(d, s){
  var total = 0;
  for(i = 0; i < d; i++){
    total += Math.floor((Math.random() * s) + 1);
  }

  return total;
}

module.exports = { roll };
