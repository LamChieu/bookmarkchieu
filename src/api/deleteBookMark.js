import axiosClient from "./axiosClient";

const deleteBookMark = {
  delete: (id) => {
    if (id === {}) return;

    const url = `/deletebookmark/:${JSON.stringify(id)}`;
    return axiosClient.delete(url);
  },
};

export default deleteBookMark;
