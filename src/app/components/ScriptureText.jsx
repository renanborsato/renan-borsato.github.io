import { materials } from "../data/portfolio";

const passages = ["Mosiah 2:17", "1 Corinthians 12:4–7", "Doctrine and Covenants 88:118", "Doctrine and Covenants 58:27–28", "Ether 12:27", "Proverbs 11:3", "Colossians 3:23", "thirteenth Article of Faith", "Articles of Faith 1:13"];
const pattern = new RegExp(`(${passages.join("|")})`, "g");

export default function ScriptureText({ children }) {
  return children.split(pattern).map((part, index) => {
    const match = passages.indexOf(part);
    if (match < 0) return part;
    const material = materials[match === 8 ? 7 : match];
    return <a href={`#ref-${material.id}`} key={index}>{part}</a>;
  });
}
