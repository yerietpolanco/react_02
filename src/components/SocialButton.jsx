import { StyleSheet } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialButton(options) {
  const { icon } = options;

  return (
    <div className="">
      <FontAwesomeIcon className="social-button border border-black rounded-circle" icon={icon} />
    </div>
  )
}
