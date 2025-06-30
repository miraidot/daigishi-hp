import React, { useState, useEffect, useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/outline';
import RankingForm from './RankingForm';

const garbageTypes = [
  { type: 'plastic', color: '#FF6B6B', text: 'ペットボトル' },
  { type: 'paper', color: '#4ECDC4', text: '紙くず' },
  { type: 'metal', color: '#96CEB4', text: '缶' },
  { type: 'glass', color: '#FFEEAD', text: 'ガラス瓶' },
];

const GarbageCollectionGame = () => {
  const [gameState, setGameState] = useState('ready');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [garbages, setGarbages] = useState([]);
  const [showRankingForm, setShowRankingForm] = useState(false);
  const [ranking, setRanking] = useState([]);
  const canvasRef = useRef(null);

  // ランキングの読み込み
  useEffect(() => {
    const savedRanking = JSON.parse(localStorage.getItem('garbageCollectionRanking') || '[]');
    setRanking(savedRanking);
  }, []);

  // スコアをランキングに追加
  const addToRanking = (name) => {
    const newRanking = [...ranking, { name, score }];
    newRanking.sort((a, b) => b.score - a.score);
    const top10 = newRanking.slice(0, 10);
    localStorage.setItem('garbageCollectionRanking', JSON.stringify(top10));
    setRanking(top10);
    setShowRankingForm(false);
    setGameState('ready');
  };

  useEffect(() => {
    if (gameState === 'playing') {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 0) {
            clearInterval(timer);
            setGameState('gameOver');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // ゲーム開始時にゴミを生成
      generateGarbage();
      generateGarbage();
      generateGarbage();

      return () => clearInterval(timer);
    }
  }, [gameState]);

  const generateGarbage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const newGarbage = {
      x: Math.random() * (canvasWidth - 50),
      y: Math.random() * (canvasHeight - 50),
      type: garbageTypes[Math.floor(Math.random() * garbageTypes.length)],
      collected: false
    };

    setGarbages(prev => [...prev, newGarbage]);
  };

  const handleCanvasClick = (e) => {
    if (gameState !== 'playing') return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedGarbage = garbages.find(garbage => {
      const dx = x - garbage.x;
      const dy = y - garbage.y;
      return Math.sqrt(dx * dx + dy * dy) < 25;
    });

    if (clickedGarbage) {
      setScore(prev => prev + 10);
      setGarbages(prev => prev.filter(g => g !== clickedGarbage));
      generateGarbage();
    }
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGarbages([]);
    setGameState('playing');
  };

  const drawGame = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // 背景を描画
    ctx.fillStyle = '#87CEEB'; // 青空
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // グラウンドを描画
    ctx.fillStyle = '#32CD32'; // 草地
    ctx.fillRect(0, canvasHeight * 0.7, canvasWidth, canvasHeight * 0.3);

    // ゴミを描画
    garbages.forEach(garbage => {
      if (!garbage.collected) {
        ctx.beginPath();
        ctx.arc(garbage.x, garbage.y, 25, 0, Math.PI * 2);
        ctx.fillStyle = garbage.type.color;
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.stroke();

        // ゴミの種類を描画
        ctx.font = '14px Arial';
        ctx.fillStyle = '#000';
        ctx.fillText(garbage.type.text, garbage.x - 20, garbage.y + 40);
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 400;
      canvas.height = 300;
      drawGame();
    }
  }, [garbages]);

  return (
    <section id="game" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ごみ拾いチャレンジ
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            10秒でどれだけのごみを集められるかチャレンジ！みんなで街をきれいにしよう！
          </p>
        </div>

        <div className="mt-12">
              {/* ゲームコンテンツ */}
            <div className="space-y-6">
              {gameState === 'ready' ? (
                <div className="flex flex-col items-center h-[400px] justify-center">
                  <button
                    onClick={startGame}
                    className="inline-flex items-center rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    ゲームを始める
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-6">
                  <div className="flex justify-between items-center w-full max-w-md">
                    <div className="text-2xl font-bold">スコア: {score}</div>
                    <div className="text-2xl font-bold">残り時間: {timeLeft}s</div>
                  </div>
                  
                  <div className="w-full max-w-md">
                    <canvas
                      ref={canvasRef}
                      onClick={handleCanvasClick}
                      className="border-2 border-gray-300 rounded-lg cursor-pointer mx-auto"
                    />
                  </div>
                </div>
              )}

              {/* ゲームオーバー時の表示 */}
              {gameState === 'gameOver' && (
                <div className="mt-8 text-center">
                  <div className="text-3xl font-bold mb-4">ゲーム終了！</div>
                  <div className="text-xl mb-4">最終スコア: {score}</div>
                  
                  {score > (ranking[9]?.score || 0) && !showRankingForm && (
                    <button
                      onClick={() => setShowRankingForm(true)}
                      className="inline-flex items-center rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mx-auto mb-4"
                    >
                      ランキングに登録する
                    </button>
                  )}

                  {showRankingForm && (
                    <RankingForm score={score} onRegister={addToRanking} />
                  )}

                  <button
                    onClick={startGame}
                    className="inline-flex items-center rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 mx-auto"
                  >
                    もう一度プレイ
                  </button>
                </div>
              )}

              {/* 常に表示されるランキング */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">ランキング</h3>
                <div className="overflow-y-auto max-h-48">
                  {ranking.map((entry, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 border-b border-gray-200"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{index + 1}位</span>
                        <span>{entry.name}</span>
                      </div>
                      <span className="font-medium">{entry.score}点</span>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GarbageCollectionGame;
