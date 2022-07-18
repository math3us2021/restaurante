import React from "react";
import { Nav , ButtonNav} from "../styles";
import { Link } from "react-router-dom";

export default () => {
    return (
        <Nav>
            <Link to="/">
                <img src="https://seensp.com/wp-content/themes/seen/images/seen.png">
                </img>
            </Link>
            <div>
                <Link to="/">
                <ButtonNav>Equipe </ButtonNav>
                </Link>
                <Link to="/user">
                <ButtonNav>Cadastro Cliente </ButtonNav>
                </Link>
            </div>
        </Nav>
    );
}