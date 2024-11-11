import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Sales() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        const storedSales = JSON.parse(localStorage.getItem('sales')) || [];
        setSales(storedSales);
    }, []);

    // Calcular el total de las compras
    const total = sales.reduce((sum, sale) => sum + sale.price * sale.quantity, 0);

    return (
        <div className="container mt-4">
            <center>
                <h1>Compras Registradas</h1>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>ID de Compra</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map((sale) => (
                            <tr key={sale.id}>
                                <td>{sale.id}</td>
                                <td>{sale.title}</td>
                                <td>{sale.quantity}</td>
                                <td>${sale.price}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="3"><strong>Total</strong></td>
                            <td><strong>${total.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/" className="btn btn-primary mt-3">Regresar a la pantalla principal</Link>
            </center>
        </div>
    );
}

export default Sales;
