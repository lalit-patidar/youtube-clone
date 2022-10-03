import axios from "./instance";

const fetchData = async (url, params) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    throw err
  }
};

export default fetchData;
