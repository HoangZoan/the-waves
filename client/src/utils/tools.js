import { Link } from "react-router-dom";

export const WavesButton = (props) => {
  let template = "";

  switch (props.type) {
    case "default":
      template = (
        <Link
          className={props.altClass || "link_default"}
          to={props.linkTo}
          style={{ ...props.style }}
        >
          {props.title}
        </Link>
      );
      break;
    default:
      template = "";
  }

  return template;
};
