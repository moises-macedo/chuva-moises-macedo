import MenuNav from "./Components/MenuNav";
import Header from "./Components/Header";
import TitleVideo from "./Components/TitleVideo";
import VideoDescription from "./Components/VideoDescription";
import Resumo from "./Components/Resumo";


function App() {
  return (
    <>
      <MenuNav />
      <div className="container--page-main">
        <Header />
        <TitleVideo />
        <VideoDescription />
        <Resumo/>
      </div>
    </>
  );
}

export default App;
