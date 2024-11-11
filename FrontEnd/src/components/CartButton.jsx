
import { useNavigate } from 'react-router-dom';

function CartButton() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/sales'); // Ruta que dirige a Sales.jsx
    };

    return (
        <button className="btn btn-success btn-sm" onClick={handleNavigate}>
            Ver Carrito
        </button>
    );
}

export default CartButton;
