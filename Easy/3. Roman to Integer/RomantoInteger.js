var romanToInt = function (s) {
  a = s.length - 1;
  let i = 0;
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  while (a >= 0) {
    if (roman[s[a]] > 1) {
      roman['I'] = -1;
    }
    if (roman[s[a]] > 5) {
      roman['V'] = -5;
    }
    if (roman[s[a]] > 10) {
      roman['X'] = -10;
    }
    if (roman[s[a]] > 50) {
      roman['L'] = -50;
    }
    if (roman[s[a]] > 100) {
      roman['C'] = -100;
    }
    if (roman[s[a]] > 500) {
      roman['D'] = -500;
    }
    if (roman[s[a]] > 1000) {
      roman['M'] = -1000;
    }

    i += roman[s[a]];
    a--;
  }
  return i;
};
