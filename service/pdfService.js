const PDFDocument   = require('pdfkit');

function createPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });

  doc.on('data', dataCallback);
  doc.on('end', endCallback);

  doc.image('./images/cbsd.jpg', {
    fit: [250, 300], 
    align: 'center', 
    valign: 'center' 
  });

  doc
  .fontSize(20)
  .text('Advanced Software Engineering', { align: 'center' });
  
  doc
  .fontSize(18)
  .text('Component-Based Software Engineering', { align: 'center' });
  
  doc.moveDown(2);

  doc
    .fontSize(12)
    .text(
      'This project is for an assignment related to Component based Software Development lesson of Advanced Software Engineering subject. Here I am trying to use pdfkit node component to download PDFs.'
    );

  doc.moveDown(14);

  doc
    .fontSize(12)
    .text(
      '2022/MCS/010 \nH M Malshi Madurangi De Silva'
    );

  doc.end();
}

module.exports = { createPDF };