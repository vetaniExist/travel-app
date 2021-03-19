import React from "react";
import { Interface } from "readline";
import Login from "./Login";
import Register from "./Register";

export interface IAutorization {
    login: Boolean
    register: Boolean
}

function Autorization({ login, register }: IAutorization ) {
    return (
        <>
            { login && <Login url={'//'} />}
            { register && <Register url={'//'} />}
        </>
    )
};

export default Autorization;