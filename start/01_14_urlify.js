// Write your code here
function urlify(string) {
  string = string.toLowerCase();
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, "")
  string = string.replace(/\s+/g, '-');
  return string;
}

console.log(urlify('Bhanu h\'nw.,HNK'));