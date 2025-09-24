import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';
import Footer from './Footer';

const HomePage = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAgreed) {
      navigate('/consultation');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
      {/* Фоновая картинка с закатом */}
      <div
        className="absolute top-0 left-0 w-full h-72 bg-cover bg-center blur-sm opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* затемнение, чтобы текст лучше читался */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-white/80 to-transparent"></div>

      <div className="relative max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Heart className="w-8 h-8 text-pink-400 mr-3" />
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            <span className="block text-pink-600 font-serif italic text-3xl md:text-4xl mb-2">
              Я у себя одна!
            </span>
            <span className="block text-gray-700">Как забыть абьюзера</span>
            <span className="block text-gray-700">и стать счастливой</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Я помогу тебе освободиться от токсичных отношений, вернуть уверенность в себе и снова почувствовать вкус к жизни.
                </p>
                <p className="text-lg">
                  Мой путь — это путь женщины, которая выбрала себя.
                </p>
                <p className="text-lg">
                  Здесь ты получишь поддержку, разберёшься в своих чувствах и научишься строить жизнь без боли и страха.
                </p>
                <p className="text-lg font-medium text-pink-700">
                  Вместе мы найдём ответы, восстановим твою внутреннюю силу и создадим основу для счастливого будущего.
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Получить поддержку
            </h2>

            <img
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
              alt="Консультация"
              className="rounded-xl mb-6 w-full object-cover max-h-56"
            />

            <p className="text-gray-600 mb-6 text-center">
              Чтобы получить консультацию, подтвердите своё согласие
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreement"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="w-5 h-5 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 focus:ring-2 mt-0.5"
                />
                <label
                  htmlFor="agreement"
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  Я принимаю оферту, политику конфиденциальности и даю согласие
                  на обработку персональных данных
                </label>
              </div>

              <button
                type="submit"
                disabled={!isAgreed}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
                  isAgreed
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:shadow-xl hover:scale-105 hover:from-pink-600 hover:to-rose-600'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Получить консультацию
              </button>
            </form>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-200/25 rounded-full blur-lg"></div>

        {/* How it works section */}
        {/* ... остальное без изменений ... */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
