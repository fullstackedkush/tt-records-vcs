import styled from "styled-components";

const Wrapper = styled.div`
    background: ${props => props.bg};
    color: white;
    position: relative;
    padding-left: 36px;
    padding-bottom: 42px;

    h1 {
        font-family: 'Nimbus Sans L';
        font-weight: bold;
        font-size: 48px;
        letter-spacing: -1.44px;
        line-height: 57px;
        max-width: 1260px;
        padding-right: 50px;
        padding-top: 230px;
        color: white;
        text-transform: uppercase;
    }

    div {
        width: 100%;
        color: white;
        margin-top: 18px;
    }

    p {
        font-size: 14px;
        margin-bottom: 8px;
    }

    ul {
        display: flex;
        list-style: none;
    }

    ul li {
        position: relative;
        cursor: pointer;
        font-size: 18px;
    }

    li:last-of-type {
        margin-left: 20px;
    }

    .full svg {
        margin-right: 14px;
    }
    .compact svg {
        margin-right: 14px;
    }
`

const Hero = ({ title, children, props }) => (

    <Wrapper bg={'#111'}>
        <h1>{ title }</h1>
        { children }
    </Wrapper>
);

export default Hero;
