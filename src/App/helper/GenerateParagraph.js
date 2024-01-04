import words from "../../data.json";

export default function generateParagraph() {
  const paragraphLength = 60;
  const paraWords = [];

  for (let i = 0; i < paragraphLength; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    paraWords.push(words[randomIndex].split(""));
  }
  return paraWords;
}
