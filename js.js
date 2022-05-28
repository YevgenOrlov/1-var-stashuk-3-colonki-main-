function isUnique(string) {
  for (let i = 0; i < string.lenght; i++) {
    const char = string[i];
    if (string.lastindexOf(char) !== i) {
      console.log(isUnique(string.lastindexOf(char)));
      return false;
    }
  }
  return true;
}

console.log(isUnique("abcdef"));
console.log(isUnique("1234567"));
console.log(isUnique("abcABC"));
console.log(isUnique("abcadef"));
