import SocialButton from "./SocialButton";
import Form from "./Form";

import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column gap-3">
      <h1>Crea una cuenta</h1>
      <div className="d-flex gap-3">
        <SocialButton icon={faFacebook} />
        <SocialButton icon={faGithub} />
        <SocialButton icon={faLinkedin} />
      </div>
      <p>O usa tu email para registrarte</p>
      <Form />
    </div>
  );
}
