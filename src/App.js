import MenuNav from "./Components/MenuNav";
import Header from "./Components/Header";
import TitleVideo from "./Components/TitleVideo";
import VideoDescription from "./Components/VideoDescription";
import Resumo from "./Components/Resumo";
import TopicoForm from "./Components/TopicoForm";
import Footer from "./Components/Footer";
import { useState } from "react";


function App() {
  
  return (
    <>
      <MenuNav />
      <div className="container--page-main">
        <Header />
        <TitleVideo />
        <VideoDescription />
        <Resumo />
        <TopicoForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
