import React from 'react';
import { X, Download } from 'lucide-react';
import jsPDF from 'jspdf';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const DocumentModal: React.FC<DocumentModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  const downloadPDF = () => {
    const pdf = new jsPDF();
    
    // Настройки для русского текста
    pdf.setFont('helvetica');
    pdf.setFontSize(16);
    
    // Заголовок
    pdf.text(title, 20, 30);
    
    // Разбиваем текст на строки для корректного отображения
    const lines = pdf.splitTextToSize(content, 170);
    pdf.setFontSize(12);
    pdf.text(lines, 20, 50);
    
    // Скачиваем файл
    pdf.save(`${title}.pdf`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;