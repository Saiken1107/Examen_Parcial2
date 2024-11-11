import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';

function ProductCard({ product }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={product.thumbnail} className="card-img-top" alt={product.title} />

                <div className="card-body">
                    <p className="card-text">
                        <b style={{ color: '#00994f' }}>
                            ${product.price - (product.price * product.discountPercentage / 100)}
                        </b>
                        &nbsp;
                        <del> ${product.price} </del>
                        &nbsp;
                        <small style={{ backgroundColor: '#ccffe6', color: '#00994f' }}>
                            &nbsp;<b>Ahorra ${(product.price * product.discountPercentage / 100)} </b>&nbsp;
                        </small>
                    </p>

                    <p className="card-text">
                        <b>{product.brand}</b>
                        &nbsp;
                        <strong style={{ color: 'red' }}> -{product.discountPercentage}% </strong>
                    </p>  

                    <p className="card-text">{product.description}</p>

                    <RatingStars rating={product.rating} />

                    <Link to={`/item/${product.id}`} className="btn btn-primary">
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
