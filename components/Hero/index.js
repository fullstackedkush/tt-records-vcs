import styled from "styled-components";

const Wrapper = styled.div`
    padding: 172px 150px 142px;
    background: ${props => props.bg};
`

const Hero = ({ title, children }) => (
    <Wrapper bg={'blue'}>
        <h1>{ title }</h1>
        { children }
    </Wrapper>
);

export default Hero;
