import React from "react";
import { ICountry } from "../store.example";

// @ts-ignore
const Context = React.createContext<ICountry[]>();
export default Context;
