import axiosClient from "./axiosClient";

const getBookMarks = {
  get: (id) => {
    if (id === "") return;

    const url = "/bookmarks";
    return axiosClient.post(url, id);
  },
};

export default getBookMarks;
