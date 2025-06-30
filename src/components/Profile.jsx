import React from 'react';

const Profile = ({ id, activeSection }) => {
  return (
    <section id={id} className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            プロフィール
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            青山 まさる（65歳）。大学卒業後、△△町に就職で移り住み、以来40年、地域と共に歩んできました。
            この町で結婚し、子育てをし、仲間と働き、そして定年まで勤め上げることができたのは、町の温かさと支えのおかげです。
            第二の人生は、「恩返し」の人生。町の声を丁寧に聴き、安心して暮らせる未来を子どもたちに繋げていきます。
          </p>
        </div>

        {/* Activity photos grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <img
              src="./images/activity1.jpg"
              alt="活動中の風景"
              className="aspect-[7/5] w-full rounded-2xl bg-gray-50 object-cover"
            />
            <img
              src="./images/activity2.jpg"
              alt="地域の人との交流"
              className="aspect-[7/5] w-full rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./images/activity3.jpg"
              alt="地域活動"
              className="aspect-[7/5] w-full rounded-2xl bg-gray-50 object-cover"
            />
            <img
              src="./images/activity4.jpg"
              alt="地域イベント"
              className="aspect-[7/5] w-full rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./images/activity5.jpg"
              alt="地域の祭り"
              className="aspect-[7/5] w-full rounded-2xl bg-gray-50 object-cover"
            />
            <img
              src="./images/activity6.jpg"
              alt="地域の行事"
              className="aspect-[7/5] w-full rounded-2xl bg-gray-50 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
