import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import api from '../services/api';
import RatingStars from '../components/RatingStars';
import SearchBox from '../components/SearchBox';
import CartButton from '../components/CartButton';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get(`/items/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error al obtener detalles del producto:', error);
            }
        };

        fetchProduct();
    }, [id]);

    // Función para manejar la compra
    const handlePurchase = async () => {
        try {
            const response = await api.post('/addSale', {
                productId: product.id,
                quantity: 1,
                title: product.title,
                price: product.price,
            });
            if (response.data.success) {
                // Generar un ID único para la compra
                const saleId = uuidv4();
                // Almacenar los datos de la compra en localStorage
                const sales = JSON.parse(localStorage.getItem('sales')) || [];
                sales.push({
                    id: saleId,
                    productId: product.id,
                    title: product.title,
                    quantity: 1,
                    price: product.price,
                });
                localStorage.setItem('sales', JSON.stringify(sales));
                alert('Compra registrada exitosamente');
            } else {
                alert('Error al registrar la compra');
            }
        } catch (error) {
            console.error('Error al registrar la compra:', error);
            alert('Ocurrió un error al registrar la compra');
        }
    };

    if (!product) return <div>Cargando...</div>;

    return (
        <div className="container mt-4">
            <div className="card">
                <SearchBox />
                <CartButton />
                <hr />
                <div className="card-body">
                    <img src={product.images} className="card-img-top" alt={product.title} />
                    
                    <h1>{product.title}</h1>
                    
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

                        <div>
                            <strong>Categoría:</strong> {product.category}
                        </div>
                        
                        <div>
                            <RatingStars rating={product.rating} />
                        </div>

                        <hr />

                        <strong>{product.stock} piezas disponibles. </strong>

                        <div className="card-text">
                            <strong>SKU: </strong> {product.sku}
                        </div>

                        <p>
                            <strong>Garantía: </strong> {product.warrantyInformation}
                        </p>

                        <p>
                            <strong>Estado de disponibilidad: </strong> {product.availabilityStatus}
                        </p>

                        <p>
                            <strong>Politica de devoluciónes: </strong> {product.returnPolicy}
                        </p>
                    </div>
                    
                    <button className="btn btn-success mt-3" onClick={handlePurchase}>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
