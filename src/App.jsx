import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animation absolute top-0 left-0"></div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
