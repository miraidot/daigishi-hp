import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import VisualSection from './components/VisualSection';
import Profile from './components/Profile';
import Policy from './components/Policy';
import ActivityReport from './components/ActivityReport';
import Notice from './components/Notice';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import GarbageCollectionGame from './components/GarbageCollectionGame';

const App = () => {
  // AOSの初期化
  React.useEffect(() => {
    AOS.init({
      duration: 800, // アニメーションの持続時間（ミリ秒）
      offset: 100,   // スクロール位置のオフセット
      once: true,    // スクロールしてから一度だけアニメーションを実行
    });
  }, []);
  const [activeSection, setActiveSection] = React.useState('profile');

  // スムーズスクロールの設定
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header setActiveSection={setActiveSection} handleScroll={handleScroll} />
        
        <main className="relative">
          <VisualSection />
          <div className="px-4 sm:px-6 lg:px-8">
            <Profile id="profile" />
            <Policy id="policy" />
            <ActivityReport id="activity" />
            <Notice id="notice" />
            <Contact id="contact" />
            <GarbageCollectionGame />
          </div>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
