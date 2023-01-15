var isValid = function (s) {
  let stack = [];
  let open = ['(', '[', '{'];
  let close = [')', ']', '}'];
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (open.includes(char)) {
      stack.push(char);
    } else if (close.includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      let last = stack.pop();
      if (map[char] !== last) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
