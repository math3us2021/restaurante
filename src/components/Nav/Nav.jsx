import React from "react";
import { Nav , ButtonNav,Logo} from "../styles";
import { Link } from "react-router-dom";

export default () => {
    return (
        
        <Nav>
            <div>
            <Link to="/">
                <img src="https://seensp.com/wp-content/themes/seen/images/seen.png">
                </img>
            </Link>
            </div>
            <div>
                <Link to="/cardapio">
                <ButtonNav>Cardápio</ButtonNav>
                </Link>
                
                <Link to="/employees">
                <ButtonNav>Equipe </ButtonNav>
                </Link>

                <Link to="/user">
                <ButtonNav>Cadastro Cliente </ButtonNav>
                </Link>
              
            </div>
        </Nav>
    );
}