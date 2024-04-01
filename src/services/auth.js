import axios from 'axios';

import { STRAPI_URL } from 'src/config-global';

export async function signIn({ email, password }) {
  const res = await axios.post(`${STRAPI_URL}/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}

export async function register({ firstname, lastname, email, password }) {
  const res = await axios.post(`${STRAPI_URL}/api/auth/local/register`, {
    username: email,
    email,
    password,
    firstname,
    lastname,
  });
  return res.data;
}
