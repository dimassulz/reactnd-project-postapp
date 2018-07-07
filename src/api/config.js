let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
export const config = {
  api: "http://localhost:3001",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token
  }
};
