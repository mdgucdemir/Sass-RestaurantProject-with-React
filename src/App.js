import "./App.scss";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <AboutUs />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
