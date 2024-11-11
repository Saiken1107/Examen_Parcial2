import SearchBox from '../components/SearchBox';
import ShopNetLogo from '../assets/ShopNet.com.png';

function Home() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <center>
                <h2 className="mb-4">
                    Bienvenido a la mejor 
                    <br />
                    tienda online del mundo.
                </h2>

                {/* Imagen en la parte superior */}
                <img src={ShopNetLogo} alt="ShopNet" className="mb-2" style={{ width: '60px' }} />
                <h6 style={{ color: 'orange' }}>ShopNet.com</h6>

                {/* Caja de búsqueda */}
                <SearchBox />
            </center>
        </div>
    );
}

export default Home;
