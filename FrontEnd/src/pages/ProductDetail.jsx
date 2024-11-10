import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    // Aquí cargaremos los detalles del producto

    return (
        <div className="container mt-4">
        <div className="card">
            <div className="card-body">
            <h1>Detalles del Producto</h1>
            {/* Mostrar detalles completos del producto aquí */}
            <button className="btn btn-success mt-3">Comprar</button>
            </div>
        </div>
        </div>
    );
}

export default ProductDetail;
