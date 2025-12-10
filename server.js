const express = require('express');
const quoteRoutes = require('./routes/quoteRoutes');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[LOG] Запрос: ${req.method} ${req.url} в ${new Date().toLocaleTimeString()}`);
    next();
});

app.use('/api/quotes', quoteRoutes);

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});