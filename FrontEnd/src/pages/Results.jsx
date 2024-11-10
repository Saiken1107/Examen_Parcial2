import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Results() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('search');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Aquí haremos una llamada API cuando el backend esté listo
        // setProducts(resultado de la llamada API)
    }, [query]);

    return (
        <div className="container mt-4">
            <h1>Resultados de búsqueda para: "{query}"</h1>
            <div className="row">
                {products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Results;
