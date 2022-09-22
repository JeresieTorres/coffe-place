import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Coffe place" />
    <Footer/>
    </>
  );
}

export default App;