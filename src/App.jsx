import { Suspense } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Suspense
      fallback="loading"
      className="flex justify-center items-center h-screen"
    >
      <div className="animation absolute top-0 left-0"></div>
      <Header />
      <Home />
      <Footer />
    </Suspense>
  );
}

export default App;
