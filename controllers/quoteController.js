let quotes = [
    { id: 1, text: "Упал вставай, встал упай.", author: "Джейсон Стэтхэм" },
    { id: 2, text: "За дверью бессмысленно всё - особенно возглас счастья", author: "Иосиф Бродский" },
    { id: 3, text: "Я верю не в музыку, что жизнь мою сожгла, а в пепел, что остался от сожженья", author: "Георгий Иванов" }
];

exports.getRandomQuote = (req, res) => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(random);
};

exports.getAllQuotes = (req, res) => {
    const { author } = req.query;

    if (author) {
        const filtered = quotes.filter(q => q.author.includes(author));
        return res.json(filtered);
    }
    res.json(quotes);
};

exports.getQuoteById = (req, res) => {
    const { id } = req.params;
    const quote = quotes.find(q => q.id === parseInt(id));

    if (!quote) {
        return res.status(404).json({ message: "Цитата не найдена" });
    }
    res.json(quote);
};

exports.createQuote = (req, res) => {
    const { text, author } = req.body;

    if (!text || !author) {
        return res.status(400).json({ message: "Нужен текст и автор" });
    }

    const newQuote = {
        id: quotes.length + 1,
        text,
        author
    };
    quotes.push(newQuote);
    res.status(201).json(newQuote);
};