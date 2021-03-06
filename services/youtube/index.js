import { YOUTUBE_URL } from "../../constants";

const YotubeService = {
  getVideos: async () => {
    return await fetch(YOUTUBE_URL)
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.error(err));
  },
};

export default YotubeService;
