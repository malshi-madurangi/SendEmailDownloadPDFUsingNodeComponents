const express       = require('express');
const pdfService    = require('../service/pdfService');

const router = express.Router();
router.get('/pdf', (req, res, next) => {
  const stream = res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment;filename=data.pdf`,
  });
  
  pdfService.createPDF(
    (chunk) => stream.write(chunk),
    () => stream.end()
  );
});

module.exports = router;