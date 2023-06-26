import long from "./long";
import short from "./short";

export default function Ask(answer) {
 return answer === 'short' ? {short} : {long}
}
