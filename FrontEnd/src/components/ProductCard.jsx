import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <div className="col-md-4 mb-4">
        <div className="card h-100">
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
                <strong>Precio:</strong> ${product.price}
            </p>
            <Link to={`/item/${product.id}`} className="btn btn-primary">
                Ver Detalle
            </Link>
            </div>
        </div>
        </div>
    );
}

export default ProductCard;
