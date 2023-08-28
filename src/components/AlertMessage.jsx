import { Alert } from "react-bootstrap";

export default function AlertMessage({ message, success }) {
  if (message == false) {
    return "";
  }

  return <Alert variant={success ? "success" : "danger"}>{message}</Alert>;
}
