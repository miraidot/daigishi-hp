function Notice({ id, activeSection }) {
  const notices = [
    {
      id: 1,
      date: '2025年6月28日',
      title: '7月10日：町民との意見交換会を開催します',
      description: '△△町公民館で意見交換会を開催します。皆様のご参加をお待ちしております。',
    },
    {
      id: 2,
      date: '2025年6月25日',
      title: '町議会報告会のお知らせ',
      description: '次回の町議会の日程と議題についてご案内します。',
    },
    {
      id: 3,
      date: '2025年6月20日',
      title: '地域の交通安全活動への参加',
      description: '地元の交通安全協会との活動についてご案内します。',
    },
  ];

  return (
    <section id={id} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            お知らせ
          </h2>
        </div>

        <div className="mt-16">
          <div className="space-y-6">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <time className="text-sm text-gray-500">
                  {notice.date}
                </time>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {notice.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {notice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notice;
