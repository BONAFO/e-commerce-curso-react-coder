import mock from "./mock/service";
import firestore from "./firestore/services";

export const MODE = "mock";

const service = {
  mock,
  firestore,
};

export default service;
