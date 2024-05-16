import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { CookieName } from "../constants";
export async function decodeToken(token: string) {
  return jwtDecode(token);
}

export function getAuthToken() {
  return Cookies.get(CookieName.TOKEN);
}
