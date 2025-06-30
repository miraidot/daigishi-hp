function Policy({ id, activeSection }) {
  const policies = [
    {
      title: '高齢者の安心を支える地域づくり',
      description: '独居高齢者の見守り、移動支援、通いの場の充実を目指します。',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: '子育て世代が暮らしやすい町に',
      description: '保育・教育の充実と、親の負担軽減を地域ぐるみで支えます。',
      icon: '👶'
    },
    {
      title: '町の声を議会に届ける、対話の政治',
      description: '小さな声にこそ耳を傾け、誰ひとり取り残さない仕組みづくりを。',
      icon: '👥'
    }
  ];

  return (
    <section id={id} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-aos="fade-up">
            政策・取り組み
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3" data-aos="fade-up">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-lg"
            >
              <div className="text-4xl text-blue-600">{policy.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{policy.title}</h3>
              <p className="text-gray-600">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Policy;
