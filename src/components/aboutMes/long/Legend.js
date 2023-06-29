import { HashLink as Link } from "react-router-hash-link";

export default function Legend({name}) {
  return <Link to={'#' + name} className="font-bold">{name}</Link>;
}
