import React, { useEffect, useState } from 'react';
import { getNews } from '../utils/microcms';

function News({ id, activeSection }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const data = await getNews();
        setNews(data.contents);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <>
      <section id={id} className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              お知らせ
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <div className="col-span-full text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
              </div>
            ) : (
              news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
                >
                  {item.image && (
                    <img
                      src={item.image.url}
                      alt={item.title}
                      className="w-full rounded-lg mb-4"
                    />
                  )}
                  <time className="text-sm text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </time>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {item.content ? item.content.replace(/<[^>]+>/g, '') : ''}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedNews(item);
                      setIsModalOpen(true);
                    }}
                    className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    詳細を読む
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Pagination */}
      {news.length > itemsPerPage && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 border rounded-md hover:bg-gray-100 disabled:opacity-50"
          >
            前へ
          </button>
          <span className="px-4 py-2 mx-2 text-gray-700">
            {currentPage} / {Math.ceil(news.length / itemsPerPage)}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(Math.ceil(news.length / itemsPerPage), prev + 1))}
            disabled={currentPage === Math.ceil(news.length / itemsPerPage)}
            className="px-4 py-2 mx-2 border rounded-md hover:bg-gray-100 disabled:opacity-50"
          >
            次へ
          </button>
        </div>
      )}

      <div className={isModalOpen ? 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4' : 'hidden'}>
        <div className="relative bg-white rounded-lg p-6 w-[90vw] max-w-[90vw] h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              {selectedNews?.title}
            </h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              ✕
            </button>
          </div>
          <div className="mt-2 max-h-[80vh] overflow-y-auto w-full">
            {selectedNews?.image && (
              <img
                src={selectedNews.image.url}
                alt={selectedNews.title}
                className="w-full rounded-lg mb-4"
              />
            )}
            <div
              className="text-base text-gray-700"
              dangerouslySetInnerHTML={{ __html: selectedNews?.content }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
