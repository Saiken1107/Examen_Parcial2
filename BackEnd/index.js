const express = require('express');
const cors = require('cors');
const products = require('./data/products.json').products;
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let sales = [];

// Endpoint para buscar productos
app.get('/api/items', (req, res) => {
    const query = req.query.q?.toLowerCase();
    const results = products.filter((product) =>
        product.title.toLowerCase().includes(query)
    );
    res.json(results);
});

// Endpoint para obtener detalle de un producto por ID
app.get('/api/items/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find((p) => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Producto no encontrado.' });
    }
});

// Endpoint para registrar una compra
app.post('/api/addSale', (req, res) => {
    const { productId, quantity } = req.body;
    const product = products.find((p) => p.id === productId);

    if (!product || quantity <= 0) {
        return res.status(400).json({ error: 'Producto no encontrado o cantidad inválida.' });
    }

    const sale = {
        id: sales.length + 1,
        productId,
        quantity,
        title: product.title,
        price: product.price,
        date: new Date(),
    };
    sales.push(sale);

    res.json({ success: true, sale });
});

// Endpoint para obtener todas las compras registradas
app.get('/api/sales', (req, res) => {
    res.json(sales);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
