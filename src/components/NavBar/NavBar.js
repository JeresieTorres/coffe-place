import "./NavBar.css"

function NavBar() {
  return (
    <header>

      <h1>Coffe Place</h1>

      <nav>
          <a href='#' className="estilosDeNav">HOME</a>

          <a href='#'className="estilosDeNav">MENÚ</a>
        
          <a href='#' className="estilosDeNav">CONTACTO</a>
      </nav>

      <div>
        carrito
      </div>
      
    </header>
  );
}

export default NavBar;
