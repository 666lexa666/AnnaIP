import React from 'react';
import { MessageCircle, ArrowLeft, QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const ConsultationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
      {/* Фоновая картинка */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1600&q=80"
          alt="Закат"
          className="w-full h-full object-cover"
        />
        {/* Матовое стекло */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Вернуться на главную
          </button>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="text-pink-600 font-serif italic">Консультация</span>
          </h1>
          <p className="text-xl text-gray-600">
            Ваш путь к освобождению начинается здесь
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Section */}
          <div className="bg-white/70 rounded-2xl p-8 shadow-xl border border-pink-100 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <MessageCircle className="w-6 h-6 text-pink-500 mr-3" />
              Связь со мной
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Готова поддержать тебя на пути к внутренней свободе. Напиши мне, и мы начнём вместе 💌
            </p>

            <a
              href="https://t.me/Anna_k0uch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center w-full justify-center py-4 px-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Написать в Telegram
            </a>
          </div>

          {/* Payment Section */}
          <div className="bg-white/70 rounded-2xl p-8 shadow-xl border border-pink-100 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <QrCode className="w-6 h-6 text-yellow-500 mr-3" />
              Оплата консультации
            </h2>

            <div className="mb-6">
              <p className="text-lg text-gray-700 mb-4">
                Оплатить консультацию —{' '}
                <span className="font-semibold text-pink-600">
                  25 рублей за 1 секунду общения
                </span>
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Качественная поддержка стоит инвестиций в себя
              </p>

              <div className="flex gap-4">
                <img src="/images/mir.svg" alt="Мир" className="w-14 h-14 object-contain" />
                <img src="/images/sbp.svg" alt="SBP" className="w-14 h-14 object-contain" />
                <img src="/images/pay.svg" alt="Paymaster" className="w-14 h-14 object-contain" />
              </div>
            </div>

            {/* QR Code Container */}
            <div className="bg-gray-50/70 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center backdrop-blur-sm">
              <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Место для QR-кода оплаты</p>
              <p className="text-sm text-gray-400 mt-2">
                Вставьте сюда ваш QR-код для оплаты
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-pink-50/70 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-pink-700">Помни:</strong> каждый шаг к освобождению — это акт
              самолюбви. Ты достойна счастья, уважения и внутреннего покоя.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ConsultationPage;
