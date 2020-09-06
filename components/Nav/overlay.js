import styled from "styled-components";

const OverlayContainer = styled.div`
    position: fixed; /* Sit on top of the page content */
    
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #111; /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    display: none;

    ul {
        position: absolute;
        font-size: 50px;
        color: white;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        bottom: 40px;
        left: 120px;
    }

    li {
        margin-bottom: 18px;
    }

    li.open {
        position: relative;
        top: -50px;

        img {
            width: 18px;
            height: auto;
            position: absolute;
            top: 73px;
            left: 15px;
            z-index: 99;
        }
    }

    li.open input[type=search] {
        height: 24px;
        margin-top: -4px;
        margin-left: 4px;
        position: relative;
        right: -20px;
        border: 1px solid black;
        display: inline;
        position: absolute;
        top: 55px;
        height: 64px;
        width: 334px;
        left: 0;
        padding-left: 36px;
        padding-left: 42px;
        font-size: 24px;
    }

    li.open input[type=search]::-webkit-input-placeholder { /* Edge */
        color: black;
        font-size: 24px;
        opacity: 1;
      }
      
      li.open input[type=search]:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: black;
        font-size: 24px;
        opacity: 1;
      }
      
      li.open input[type=search]::placeholder {
        color: black;
        opacity: 1;
        font-size: 24px;
      }
`
const Overlay = () => (
    <OverlayContainer>
        <ul>
            <li><a href="#">Artists</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li class="open"><img src="https://media.graphcms.com/eDrHGLAQbW1Px8TAEVKg" /><input placeholder="Search" type="search" /></li>
        </ul>
    </OverlayContainer>
);

export default Overlay;