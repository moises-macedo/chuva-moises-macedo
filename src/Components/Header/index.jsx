import Language from "../../Assests/Img/language.png";
import DropDown from '../../Assests/Img/dropdown.png';
import User from "../../Assests/Img/user.png";
import "../../Assests/Styles/Css/header.css"

const Header = () => {
    return(
        <div className="container--header">
             <div className="header-description">
                 <p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
                 <h3>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </h3>
                 <p>ISSN: 1234-5678</p>
             </div> 
             <button className="header-language">
                 <img src={Language} alt="language" />
                 <p>pt, br</p>
                 <img src={DropDown} alt="DropDown" />
             </button>
             <div className="header-user">
                 <div className="user-login">
                     <h6>Bem vindo!</h6>
                     <p>alguem12@galoascience.com</p>
                 </div>
                 <div className="user-img">
                     <img src={User} alt="usuário" />
                     <span>2</span>
                 </div>
             </div>
        </div>

         
    )
}

export default Header