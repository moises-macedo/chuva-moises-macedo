import MenuNav from "./Components/MenuNav";
import Header from "./Components/Header";
import TitleVideo from "./Components/TitleVideo";
import VideoDescription from "./Components/VideoDescription";
import Resumo from "./Components/Resumo";
import TopicoForm from "./Components/TopicoForm";


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
      </div>
    </>
  );
}

export default App;
