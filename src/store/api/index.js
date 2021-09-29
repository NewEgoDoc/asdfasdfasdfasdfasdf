import instance from "../axios";

export default {
  testAPICall: () => {
    console.log("api call");
    return instance
      .get(`/msg/recent/100000006a1aa27d`)
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
      });
  },
};
