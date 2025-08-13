document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('agree');
  const button = document.getElementById('consultBtn');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const closeModal = document.querySelector('.close');
  const downloadBtn = document.getElementById('download-pdf');

  // Документы
  const docs = {
    offer: { title: "Договор оферты", text: "Текст договора оферты...\n\nПункт 1: ...\nПункт 2: ..." },
    privacy: { title: "Политика конфиденциальности", text: "Текст политики конфиденциальности...\n\nРаздел 1: ...\nРаздел 2: ..." },
    consent: { title: "Согласие на обработку персональных данных", text: "Текст согласия...\n\nПодпись: ..." },
    refund: { title: "Отказ от услуги", text: "Текст отказа от услуги...\n\nУсловия: ..." }
  };

  // Активация кнопки
  if (checkbox && button) {
    checkbox.addEventListener('change', () => {
      button.disabled = !checkbox.checked;
    });

    button.addEventListener('click', () => {
      window.location.href = 'consult.html';
    });
  }

  // Модалки для документов
  document.querySelectorAll('.doc-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const docKey = link.dataset.doc;
      modalTitle.textContent = docs[docKey].title;
      modalText.textContent = docs[docKey].text;
      modal.style.display = 'block';

      // Скачать PDF с форматированием
      downloadBtn.onclick = () => {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF();
        pdf.setFontSize(18);
        pdf.text(docs[docKey].title, 10, 20);
        pdf.setFontSize(12);
        const splitText = pdf.splitTextToSize(docs[docKey].text, 180);
        pdf.text(splitText, 10, 30);
        pdf.save(docs[docKey].title + ".pdf");
      };
    });
  });

  // Закрытие модалки
  closeModal.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
