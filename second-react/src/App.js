import About from "./About/About";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Product from "./Product/Product";
import Services from "./Services/Services";
import SmallCard from "./SmallCard/SmallCard";
import { useTheme } from "./Context/ThemeContext";
import './App.css';


function App() {
  const [theme] =useTheme();
  return (
    <div className="App">
      <div id={theme}>
      <Header/>
      <SmallCard/>
      <About/>
      <Services/>
      <Product/>
      <div className="scroll">
      <a href="#header">Scroll To Top</a>
      </div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
