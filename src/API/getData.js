import { mockedObj } from "./mockedResponse";

const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockedObj);
    }, 2500);
  });
};

export default getData;
