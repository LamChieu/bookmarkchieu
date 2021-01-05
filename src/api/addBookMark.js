import axiosClient from "./axiosClient";

const addBookMark = {
  add: (formValue) => {
    if (formValue === {}) return;

    const url = "/bookmark";
    return axiosClient.post(url, formValue);
  },
};

export default addBookMark;
