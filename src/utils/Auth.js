import { checkResponse } from "./utils";

export const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000'}`;

export const signup = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
      name: name,
    }),
  }).then(checkResponse);
};