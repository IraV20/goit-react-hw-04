import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImages = async (value, page) => {
  const API_KEY = "5f0aNi8-OvnhNxTQmVqKjOh36mJUbjp-CS5M1SiBKE4";

  const res = await axios.get("/search/photos/", {
    params: {
      client_id: API_KEY,
      query: value,
      page: page,
      per_page: 12,
    },
  });
  return res.data.results;
};
