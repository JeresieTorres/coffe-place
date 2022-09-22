import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
  return (
    <header>
      <h1 className="titulo" >Coffe Place</h1>
      <nav>
          <a href='#' className="estilosDeNav">HOME</a>
          <a href='#'className="estilosDeNav">MENÚ</a>
          <a href='#' className="estilosDeNav">CONTACTO</a>
      </nav>
      <CartWidget/>
    </header>
  );
}

export default NavBar;
