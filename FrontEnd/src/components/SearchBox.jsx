import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) {
        navigate(`/items?search=${query}`);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center my-4">
            
            {/* Campo de texto para la búsqueda */}
            <input
                type="text"
                className="form-control mb-3"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar ..."
                style={{ maxWidth: '300px', textAlign: 'center' }}
            />

            {/* Botón de búsqueda estilizado */}
            <button
                className="btn"
                onClick={handleSearch}
                style={{ backgroundColor: 'ORANGE', color: 'WHITE', fontWeight: 'bold' }}
            >
                BUSCAR PRODUCTO
            </button>
        </div>
    );
}

export default SearchBox;
