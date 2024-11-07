import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 4tYZcKrI8KW1ThAL_Y0ptJ1Fg_YTbrWb1UFEsBmXmFg",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
