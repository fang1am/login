import axios from "axios";
import { LoginFormSubmitValues } from "../types/domains/Login";
const handleResponseError = (error: any) => {
  if (error?.response?.data?.error) {
    throw error.response.data.error;
  }
  throw error;
};
export const requestAuthLogin = async (
  username: string,
  password: string
): Promise<LoginFormSubmitValues> => {
  const data: LoginFormSubmitValues = await axios
    .post("http://localhost:4000/auth/login", {
      username,
      password,
    })
    .then((response) => response.data)
    .catch((error) => handleResponseError(error));
  return data;
};
export default { requestAuthLogin };
