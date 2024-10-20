import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center">
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;
