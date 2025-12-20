export default function handleNumeric(text = "", limit) {
  const admit = "0123456789".split("");
  text = text
    .split("")
    .map((t) => (admit.indexOf(t) != -1 ? t : null))
    .filter((t) => t != null)
    .join("")
    .slice(0, text.length > limit ? limit : text.length);
  return text.length > 0 ? text : " ";
}
