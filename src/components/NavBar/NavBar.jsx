import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import Profile from "../Profile/Profile"
import Swal from "sweetalert2";

function NavBar() {
    const imgLogo = "https://res.cloudinary.com/df4wfmkk1/image/upload/v1682700045/DigitalDrinksLogo_odwwyh.png"

    const data = window.localStorage.getItem('login',)
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


    const  desloguear  = async () =>  {
        window.localStorage.clear();
        Swal.fire('Estas navegando como Invitado')
        await sleep(2000);
        window.location.href='/'
     }
     

    

  return (
    <header>
        <Link to={"/"}><img className="imgLogo" src={imgLogo} alt="Digital Drinks" /></Link>

        <nav>
            <ul>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" : "NavLinkDesactivo"} to={`/categoria/1`}>VINOS</NavLink>
                </li>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/2`}>ESPUMANTES</NavLink>
                </li>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/3`}>WHISKIES</NavLink>    
                </li>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/4`}>GIN</NavLink>    
                </li>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/5`}>LICORES</NavLink>       
                </li>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/6`}>VODKA</NavLink>  
                </li>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/7`}>RON</NavLink>  
                </li>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/8`}>APERITIVOS</NavLink>  
                </li>
                <li>
                   <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/categoria/9`}>CERVEZAS</NavLink>   
                </li>
            </ul>
        </nav>

                  {data ? (  

        <nav className="profile">
            <ul>
                <li>
                     <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/`}>{<Profile/>}</NavLink>
                </li>
                <li>
                      <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/registro`} onClick={desloguear}>desloguear</NavLink> 
              </li>     
            </ul>
        </nav>

                  ) : 
                       
                  (

        <nav className="ingresa">
            <ul>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/login`}>INGRESÁ</NavLink>
                </li>
                <li>
                    <NavLink end className={({isActive}) => isActive ? "NavLinkActivo" :"NavLinkDesactivo"} to={`/registro`}>REGSITRATE</NavLink> 
                </li>     
            </ul>
        </nav>
   
                    )}

        <li><CartWidget/></li>
       
    </header>
  )
}

export default NavBar