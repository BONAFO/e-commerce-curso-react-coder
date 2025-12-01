export default function Capitalizate(word = "") {
  return word[0].toUpperCase().concat(word.slice(1));
}
