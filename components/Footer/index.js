import styled from "styled-components";

const FooterWrapper = styled.footer`
    background: url('https://media.graphcms.com/yW7qcti0SR9mkCt5aVqW');
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    border-top: 1px solid #111;

    .footer__inner__container {
        border: 1px solid #111;
    }
    
    .footer__inner__container ul {
        color: white;
        display: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
    
        flex-direction: column;
        justify-content: center;
    }
    
    .footer__inner__container ul li {
        margin: 0 .8rem;
        color: #111;
        text-align: center;
        padding: 0.4rem 0;
    }
    
    .footer__inner__container ul li a {
        margin: 0 .8rem;
        color: #111;
        text-decoration: none;
    }
    
    .footer__inner__container {
        background-color: white;
        padding: 0.9rem 1rem;
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 40px;
        margin-bottom: 40px;
    }
    
    @media only screen and (min-width: 800px) {
        .footer__inner__container {
            display: flex;
            flex-direction: row;
        }

        .footer__inner__container ul li a {
            margin: 0.1rem;
        }

        .footer__inner__container ul {
            width: 50%;
            flex-direction: row;
        }

        .footer__inner__container ul {
            justify-content: left;
        }

        .links {
            display: flex;
            flex-direction: column;
        }

        ul.copyright {
            justify-content: right;
        }
    }
`


const Footer = () => (
	<FooterWrapper>
		<div class="footer__inner__container">
            <ul class="links">
                <li><a href="#">Soundcloud</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
            </ul>
            <ul class="copyright"><li>© Copyright TT 2020</li></ul>
        </div>
	</FooterWrapper>
)

export default Footer