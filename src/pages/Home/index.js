import Cliente from "../../models/Cliente";
import "./index.css";
import Logo from "./Logo.png"
export default function Home(){
    return (
        <div className="tittle">
        <h2>Seja nosso cliente, e tenha uma<br/> das melhores experiências web aqui </h2>
        <button  id="btn">Virar um cliente</button>
        <div className="imagem">
        <img id='ima' src={Logo}></img>        
        </div>
        </div>
    )
}
