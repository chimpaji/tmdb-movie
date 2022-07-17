import axios from 'axios';

export default (imagePath: string | null) => {
  // let config, baseUrl, size;
  // if (!config) {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/configuration?api_key=${
  //       import.meta.env.VITE_TMBD_API_KEY_PRIVATE
  //     }`
  //   );
  //   config = data;
  //   baseUrl = config.images.base_url;
  //   size = config.images.poster_sized[4];
  // }

  // return baseUrl + '/' + size + '/' + imagePath;
  if (!imagePath)
    return 'https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?auto=webp&quality=95&crop=16:9&width=675';
  return 'http://image.tmdb.org/t/p/w500' + imagePath;
};
