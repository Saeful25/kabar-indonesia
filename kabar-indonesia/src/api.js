import axios from "axios";


export const getNewList = async () => {
  const New = await axios.get(
    `https://api-berita-indonesia.vercel.app/antara/terbaru/`
  );

  return New.data.data.posts;
};

export const getDetailNew = async (title) => {
  const New = await axios.get(
    `https://api-berita-indonesia.vercel.app/antara/terbaru/${title}`
  );

  return New.data;
};


export const getPolNew = async () => {
  const New = await axios.get(
    `https://api-berita-indonesia.vercel.app/antara/politik/`
  );

  return New.data.data.posts;
};

export const getPopNew = async () => {
  const New = await axios.get(
    `https://api-berita-indonesia.vercel.app/antara/olahraga/`
  );

  return New.data.data.posts;
};

