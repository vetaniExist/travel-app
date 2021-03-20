import React, { useState, useCallback } from "react";
import FormErrors from "./FormErrors";
import sendUserInfo from "./Send";

export default function Register({ url }: { url: string }) {
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    formErrors: { name: "", password: "", email: "" },
    validForm: false,
  });
  const [nameValidForm, setNameValid] = useState(false);
  const [passwordValidForm, setPasswordValid] = useState(false);
  const [emailValidForm, setEmailValid] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    if (nameValidForm && passwordValidForm && emailValidForm) {
      sendUserInfo(user, url);
    }
    event.preventDefault();
  }

  const validateField = useCallback((fieldName: string, value: string) => {
    const fieldValidationErrors = user.formErrors;
    let nameValid; //= user.nameValid;
    let passwordValid; //= user.passwordValid;
    let emailValid; //= user.emailValid;

    switch (fieldName) {
      case "name":
        nameValid = value.length >= 3;
        fieldValidationErrors.name = nameValid ? "" : "is to short";
        setNameValid(!!nameValid);
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : "is to short";
        setPasswordValid(!!passwordValid);
        break;
      case "email":
        // eslint-disable-next-line no-case-declarations
        const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        emailValid = !!value.match(re);
        fieldValidationErrors.email = emailValid ? "" : "is invalid";
        setEmailValid(!!emailValid);
        break;
      default:
        break;
    }
  }, [user]);

  function handleChange(event: React.ChangeEvent<{ name: string, value: string }>) {
    validateField(event.target.name, event.target.value);
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email
             <input
                    autoComplete="off"
                    className="form_input"
                    id='email'
                    placeholder="Name@mail.com"
                    name="email" type="text"
                    value={user.email}
                    onChange={handleChange} />
            </label>

            <label htmlFor="name">Name
            <input
                    autoComplete="off"
                    className="form_input"
                    id='name'
                    placeholder="Username"
                    name="name" type="text"
                    value={user.name}
                    onChange={handleChange} />
            </label>

            <label htmlFor="password"> Password
             <input
                    autoComplete="off"
                    className="form_input"
                    id="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange} />
            </label>
            <input type="submit" value="SignUp" />

            <FormErrors formErrors={user.formErrors} />
        </form>
  );
}
