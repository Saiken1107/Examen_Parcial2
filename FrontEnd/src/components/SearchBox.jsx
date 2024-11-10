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
        <div className="input-group my-4">
        <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar productos..."
        />
        <button className="btn btn-primary" onClick={handleSearch}>
            Buscar
        </button>
        </div>
    );
}

export default SearchBox;
