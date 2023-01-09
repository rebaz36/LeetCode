var isPalindrome = function (x) {
  let revX = 0;
  let numX = x;
  if (x < 0) {
    return false;
  } else if (x < 10) {
    return true;
  } else if (x % 10 === 0) {
    return false;
  } else {
    while (x) {
      revX = revX * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    if (revX === numX) {
      return true;
    }
  }
  return false;
};
