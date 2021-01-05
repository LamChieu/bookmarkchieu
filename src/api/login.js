import axiosClient from "./axiosClient";

const login = {
  getUser: (formValue) => {
    if (formValue === {}) return;

    const url = "/login";
    return axiosClient.post(url, formValue);
  },
};

export default login;
