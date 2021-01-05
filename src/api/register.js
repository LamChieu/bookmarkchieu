import axiosClient from "./axiosClient";

const register = {
  addUser: (formValue) => {
    if (formValue === {}) return;

    const url = "/register";
    return axiosClient.post(url, formValue);
  },
};

export default register;
