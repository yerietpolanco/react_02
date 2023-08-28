import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import AlertMessage from './AlertMessage';

export default function Form() {
  const [formMessage, setFormMessage] = useState('');
  const [formIsValid, setFormIsValid] = useState(true)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  
  const validateForm = (e) => {
    console.log('validate form')
    e.preventDefault();

    let isValid = false;

    console.log('Nombre: ' + name);
    // Debe tener solo letras de la A a la Z y entre 3 y 20 caracteres
    isValid = /^([a-zA-Z]+){3,20}$/.test(name);
    console.log(isValid)

    // Regex para validar email
    isValid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email);
    console.log('Email: ' + email);

    // Validar si las contraseñas son iguales, se puede mejorar con un regex
    isValid = password == passwordConfirm && password.length >= 8;
    console.log('Password: ' + password);
    console.log('Password confirm: ' + passwordConfirm);
    console.log(isValid)

    if (isValid) {
      setFormIsValid(isValid);
      setFormMessage('Te has registrado con éxito!');
    } else {
      setFormIsValid(isValid);
      setFormMessage('Revisa los campos e intenta nuevamente');
    }
  }
  
  return (
    <>
      <form className="d-flex gap-3 flex-column form-register" onSubmit={e => validateForm(e)}>
        <input type="text" className="form-control" placeholder="Nombre" name="name" onChange={e => setName(e.target.value)} />
        <input type="email" className="form-control" placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} />
        <input type="password" className="form-control" placeholder="Contraseña" name="password" onChange={e => setPassword(e.target.value)} />
        <input type="password" className="form-control" placeholder="Reingresa tu contraseña" name="password_confirm" onChange={e => setPasswordConfirm(e.target.value)} />
        <Button variant="primary" type="submit">Registrarse</Button>
      </form>

      <AlertMessage message={formMessage} success={formIsValid} />
    </>
  );
}
