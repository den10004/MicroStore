import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="App">
      <header>
        <Link to="/">Главная</Link>
      </header>

      <div>Страница не найдена</div>
    </div>
  );
}

export default NotFound;
