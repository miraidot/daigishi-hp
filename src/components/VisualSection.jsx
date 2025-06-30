import React from 'react';

const VisualSection = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="./images/landscape.jpg"
          alt="地元の風景"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-[1100px] lg:mx-0">
          <div className="flex items-center gap-x-12">
            {/* Member photo with white background */}
            <div className="relative z-20">
              <div className="absolute inset-0 bg-white rounded-full shadow-lg" />
              <img
                src="./images/member-photo.jpg"
                alt="青山まさる議員"
                className="h-64 w-64 rounded-full relative z-30 object-cover"
              />
            </div>
            
            {/* Catch copy */}
            <div className="max-w-[1100px]">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                この町に育ててもらった。<br />
                今こそ、恩返しの番です。
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualSection;
