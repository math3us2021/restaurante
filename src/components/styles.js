import styled from "styled-components";

export const Card = styled.div`
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;

div{
    justify-content: center;
    text-align: center;
    align-items: center;
};

h1{
    opacity: 0.5;
    font-size: 3em;
    color: ##DAF7A6;
    -webkit-box-shadow: 11px 2px 8px 7px rgba(50, 53, 56, 0.76);
}

img{
    opacity: 0.8;
    border: 2px solid #A04000;
}
    
`;
// export const NavGeral = styled.div`
//     align-items: center;
//     justify-content: center;
//     diplay: flex;
//     flex-direction: row;
//     `;

export const Nav = styled.div`
    
    div{
        margin: 1rem;
        text-align: center;
    }

    img{
    background: transparent;
    }
`;

export const ButtonNav = styled.button`

text-align: center; 
width: 250px;
hight: 50px;
margin: 1rem;
background: #222;
color: #fff;
border: 5px solid #fff;
border-radius: 10px;
opacity: 0.8;
`;