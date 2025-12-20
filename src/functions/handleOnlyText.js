export default function handleOnlyText(text = "", limit) {
  let admit = "qwertyuiopasdfghjklñzxcvbnm ";
  admit = admit.concat(admit.toUpperCase()).split("");
  text = text
    .split("")
    .map((t) => (admit.indexOf(t) != -1 ? t : null))
    .filter((t) => t != null)
    .join("")
    .slice(0, text.length > limit ? limit : text.length);
  return text.length > 0 ? text : " ";
}
