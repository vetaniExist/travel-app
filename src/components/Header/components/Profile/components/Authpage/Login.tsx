import React, { useState } from "react";
import FormErrors from "./FormErrors";
import sendUserInfo from "./Send";

export default function Login({ url }:{url:string}) {
  const [user, setUser] = useState({
    name: "",
    password: "",
    formErrors: { name: "", password: "" },
    nameValid: false,
    passwordValid: false,
    validForm: false,
  });

  function handleSubmit(event: React.FormEvent) {
    sendUserInfo(user, url);
    event.preventDefault();
  }

  function handleChange(event: React.ChangeEvent<{ name: string, value: string }>) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name
            </label>
            <input autoComplete="off" className="form_input" id='name' 
            placeholder="Username" name="name" type="text" value={user.name} onChange={handleChange} />
            <label htmlFor="password"> Password
            </label>
            <input autoComplete="off" className="form_input" id="password" 
            placeholder="Password" type="password" name="password" value={user.password} onChange={handleChange} />
            <input type="submit" value="LogIn" />
            <FormErrors formErrors={user.formErrors} />
        </form>
  );
}
