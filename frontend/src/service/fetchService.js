const PORT = 8080;

const loginService = async (credentials) => {
  return fetch(`http://localhost:${PORT}/app/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
const registerService = async (credentials) => {
  return fetch(`http://localhost:${PORT}/app/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
const pwdReset = async (credentials) => {
  return fetch(`http://localhost:${PORT}/app/forgotpwd`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
export const services = {
  registerService,
  loginService,
  pwdReset,
};
