function Sales() {
    return (
        <div className="container mt-4">
        <h1>Compras Registradas</h1>
        <table className="table table-striped mt-3">
            <thead>
            <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Fecha</th>
            </tr>
            </thead>
            <tbody>
            {/* Aquí se mapearán las compras */}
            </tbody>
        </table>
        </div>
    );
}

export default Sales;
