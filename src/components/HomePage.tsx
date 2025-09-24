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
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Heart className="w-8 h-8 text-pink-400 mr-3" />
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <img 
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80" 
            alt="Женщина улыбается" 
            className="rounded-2xl shadow-lg mx-auto mb-8 max-h-80 object-cover"
          />

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            <span className="block text-pink-600 font-serif italic text-3xl md:text-4xl mb-2">
              Я у себя одна!
            </span>
            <span className="block text-gray-700">
              Как забыть абьюзера
            </span>
            <span className="block text-gray-700">
              и стать счастливой
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" 
                alt="Поддержка и свобода" 
                className="rounded-xl mb-6 w-full object-cover max-h-64"
              />
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-100">
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
                <label htmlFor="agreement" className="text-sm text-gray-700 leading-relaxed">
                  Я принимаю оферту, политику конфиденциальности и даю согласие на обработку персональных данных
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
        <div className="mt-20 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <span className="text-pink-600 font-serif italic">Как это работает?</span>
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-100 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Разговор со мной</h3>
                    <p className="text-gray-600">Открытый диалог, где ты можешь поделиться своими переживаниями</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Тариф 25₽ = 1 секунда</h3>
                    <p className="text-gray-600">Честная оплата только за время реального общения</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Оплата по QR-коду</h3>
                    <p className="text-gray-600">Удобная оплата после завершения разговора</p>
                  </div>
                </div>
                
                <div className="bg-pink-50 rounded-xl p-4 border border-pink-100">
                  <p className="text-sm text-pink-700 font-medium text-center">
                    Никаких предоплат — сначала поддержка, потом оплата
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <div className="mt-16 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <span className="text-pink-600 font-serif italic">Отзывы</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80" 
                  alt="Анна" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">Анна</p>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Спасибо за поддержку! Наконец-то я поняла, что заслуживаю лучшего. Теперь я строю новую жизнь без страха."
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" 
                  alt="Мария" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">Мария</p>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Разговор помог мне разобраться в себе. Чувствую, как возвращается уверенность и желание жить полной жизнью."
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80" 
                  alt="Елена" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">Елена</p>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Честный подход и реальная помощь. Благодарна за то, что помогли найти силы начать новую главу жизни."
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
