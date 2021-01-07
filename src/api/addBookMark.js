import axiosClient from "./axiosClient";

const addBookMark = {
  add: (formValue) => {
    if (formValue === {}) return;

    console.log(formValue)

    const url = "/bookmark";
    return axiosClient.post(url, formValue);
  },
};

export default addBookMark;
