import React from 'react';

const activities = [
  {
    id: 1,
    date: '2025年6月15日',
    title: '町内清掃活動に参加しました',
    thumbnail: './images/activity1.jpg',
    description: '地元の小学生たちと一緒に、町内公園の草刈りやごみ拾いを行いました。',
  },
  {
    id: 2,
    date: '2025年6月10日',
    title: '地域の高齢者施設を訪問',
    thumbnail: './images/activity2.jpg',
    description: '施設の皆様と交流し、今後の支援策について話し合いました。',
  },
  {
    id: 3,
    date: '2025年6月5日',
    title: '教育委員会との意見交換会',
    thumbnail: './images/activity3.jpg',
    description: '地域の教育環境改善について意見交換を行いました。',
  },
];

const ActivityReport = ({ id, activeSection }) => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <section id={id} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            活動報告
          </h2>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.slice(0, showMore ? undefined : 3).map((activity) => (
              <div
                key={activity.id}
                className="group relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100"
              >
                <img
                  src={activity.thumbnail}
                  alt={activity.title}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute inset-0 p-6">
                  <time className="text-sm font-medium text-white">
                    {activity.date}
                  </time>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {activity.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="mt-8 inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              もっと見る
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ActivityReport;
