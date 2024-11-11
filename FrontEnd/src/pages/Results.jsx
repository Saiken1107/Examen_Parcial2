import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import SearchBox from '../components/SearchBox';

function Results() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('search');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await api.get(`/items?q=${query}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error al buscar productos:', error);
        }
        };

        if (query) {
        fetchProducts();
        }
    }, [query]);

    return (
        <div className="container mt-4">
            <SearchBox />
            
            <h3>Resultados de búsqueda para: &quot;{query}&quot;</h3>
            <div className="row">
                {products.map((product) => (
            
                <ProductCard key={product.id} product={product} />
            
            ))}
            </div>
        </div>
    );
}

export default Results;
