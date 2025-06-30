import React, { useState } from 'react';

const RankingForm = ({ score, onRegister }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onRegister(name);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          お名前を入力してください
        </label>
        <div className="mt-1">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="例：山田太郎"
          />
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        ランキングに登録する
      </button>
    </form>
  );
};

export default RankingForm;
