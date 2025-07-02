const MICROCMS_ENDPOINT = 'https://aoyamasaru.microcms.io/api/v1/news';
const MICROCMS_API_KEY = import.meta.env.VITE_MICROCMS_API_KEY;

export const getNews = async () => {
  try {
    const response = await fetch(`${MICROCMS_ENDPOINT}?limit=100`, {
      headers: {
        'X-API-KEY': MICROCMS_API_KEY
      }
    });
    if (!response.ok) throw new Error('Failed to fetch news');
    return await response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    return { contents: [] };
  }
};

export const getNewsByCategory = async (categoryId) => {
  try {
    const response = await fetch(`${MICROCMS_ENDPOINT}?limit=100&filters=category[equals]${categoryId}`, {
      headers: {
        'X-API-KEY': MICROCMS_API_KEY
      }
    });
    if (!response.ok) throw new Error('Failed to fetch news by category');
    return await response.json();
  } catch (error) {
    console.error('Error fetching news by category:', error);
    return { contents: [] };
  }
};
