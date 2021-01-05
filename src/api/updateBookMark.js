import axiosClient from "./axiosClient";

const updateBookMark = {
  update: (formValue) => {
    if (formValue === {}) return;

    const url = "/updatebookmark/";
    return axiosClient.put(url, formValue);
  },
};

export default updateBookMark;
