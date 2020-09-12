import styled from "styled-components";

const ArtistList = styled.ul`
li {
    color: white;
    font-family: 'Nimbus Sans L';
    font-weight: 400;
    font-size: 48px;
    letter-spacing: -1.44px;
    line-height: 54px;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 34px;
}

li:after {
    content: "";
    background: url('data:image/svg+xml;utf8,<svg width="332" height="1" viewBox="0 0 332 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.14474 0.5H331.145" stroke="white" stroke-linecap="square" stroke-dasharray="1 2"/></svg>');
    min-width: 100%;
    display: block;
    height: 20px;
    background-repeat: repeat-x;
    margin-top: 30px;
    position: absolute;
    left: 0;
    bottom: -30px;
}

span.name {
    min-width: 90%;
    display: flex;
    justify-content: space-between;
}

span a {
    margin: 0 8px;
    cursor: pointer;
    text-decoration: none;
    color: white;
}

a.soundcloud {
    position: relative;
    top: -5px;
}

span.icons {opacity: 0; transition: opacity 0.4s cubic-bezier(0.6, -0.28, 0.735, 0.045);}
li:hover span.icons  {opacity: 1;}

@media screen and (max-width: 900px) {
    span.name {
        flex-direction: column;
    }	

    span.icons  {opacity: 1;}
}

`

const Artist = ({ title, children, props }) => (

    <ArtistList>
        { children }
    </ArtistList>
);

export default Artist;