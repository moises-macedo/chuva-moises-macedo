import Language from "../../Assests/Img/language.png";
import DropDown from '../../Assests/Img/dropdown.png';
import User from "../../Assests/Img/user.png"

const Header = () => {
    return(
        <div>
             <div>
                 <p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
                 <h3>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </h3>
                 <p>ISSN: 1234-5678</p>
             </div> 
             <div>
                 <img src={Language} alt="language" />
                 <p>pt,br</p>
                 <img src={DropDown} alt="DropDown" />
             </div>
             <div>
                 <div>
                     <h5>Bem vindo!</h5>
                     <p>alguem12@galoascience.com</p>
                 </div>
                 <div>
                     <img src={User} alt="usuário" />
                 </div>
             </div>
        </div>

         
    )
}

export default Header