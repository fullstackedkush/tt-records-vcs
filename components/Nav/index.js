import styled from "styled-components";
import React, {useState} from "react";



const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #111;
    padding-top: 40px;
    background: ${props => props.bg};
    flex-direction: column;
`

const NavContainer = styled.div`
    display: flex;
    width: 93%;
    justify-content: space-between;
    background-color: #111;
    margin: 0 auto;
`


const Logo = styled.li`
    min-width: 72px;
    height: 44px;
    margin-right: 28px;

    img {
        width: 72px;
        height: 44px;
        position: relative;
        top: 2px;
    }
`


const Menu = styled.div`
    display: flex;
`

const MobileFilter = styled.div`

@media only screen and (min-width: 1099px) {
    display: none;
}
    display: flex;
    width: 100%;
    background-color: purple;
    color: white;
    padding-left: 24px;
    background-color: #111;
    height: auto;
    color: white;
    position: absolute;
    top: 90px;
    padding-bottom: 32px;
    padding-right: 20px;
    border-bottom: 1px solid white;
        opacity: ${props => props.show ? 1 : 0};
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    z-index: 1;

form {
    height: 100%;
    display: block;
    min-width: 100%;

    @media only screen and (min-width: 1100px) {
        display: flex;
    }
}

label {
    display: flex;
    flex-direction: row-reverse;
    vertical-align: middle;
    padding-right: 40px;
    margin-top: 14px;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    margin-top: 30px;

    &:hover > span {
        background: #ccc;   
    }
}

label input[type="radio"] {
    display: none;
}

label:last-of-type {
    padding-right: 9px;
}

label span {
    width: 15px;
    height: 15px;
    border: 1px white solid;
    display: block;
    position: absolute;
    right: 10px;
    top: 1px;
}

label span:after {
    content: "";
    top: 2px;
    left: 2px;
    width: 9px;
    height: 9px;
    background: white;
    position: absolute;
    opacity: 0;
}

@media only screen and (min-width: 1148px and max-width: 1200px) {
    width: 576px;
}

    label input[type="radio"]:checked ~ span:after {
        opacity: 1;
    }
    
    label input[type="radio"]:checked ~ span {
        background-color: white;
    }
`


const MenuPages = styled.ul`
    text-align: left;
    vertical-align: top;
    display: flex;
    justify-content: space-around;
    padding-right: 24px;
    border-left: none;
    background-color: white;
    border-right: none;
    padding-left: 24px;
    border: 1px solid black;
    border-right: none;
    height: 45px;
    display: none;

    @media only screen and (min-width: 1100px) {
        display: flex;
    }

    @media only screen and (max-width: 1148px) {
        padding-left: 0;
        padding-right: 0;
    }

    li {
        padding-left: 1.2rem;
        padding-right: 1.2rem;
        padding-top: 14px;
    }

    a {
        text-decoration: none;
        color: #111;
    }
    
    input[type=search] {
        display: none;
    }

    li img {
        display: none;
    }

    li.open {
        position: relative;

        img {
            width: 18px;
            height: auto;
            position: absolute;
            top: 65px;
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
        height: 45px;
        width: 334px;
        left: 0;
        padding-left: 36px;
        font-size: 18px;
    }

    li.open input[type=search]::-webkit-input-placeholder { /* Edge */
        color: black;
      }
      
      li.open input[type=search]:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: black;
      }
      
      li.open input[type=search]::placeholder {
        color: black;
        opacity: 1;
        font-size: 18px;
      }

`

const MobileMenuPages = styled.ul`
    display: none;

    @media only screen and (max-width: 1099px) {
        display: flex;
        color: white;
        font-size: 18px;
        
        a.menu {
            position: relative;
            padding-right: 8px;
        }

        a.menu span {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid white;
            display: block;
            position: absolute;
            right: -20px;
            top: 0;
        }

        a.menu span:after {
            content: "";
            height: 8px;
            width: 8px;
            background-color: white;
            display: block;
            border-radius: 50%;
            position: absolute;
            top: 2px;
            left: 2px;
        }

        a.filter{
            position: relative;
        }

        a.filter:after {
            content: "";
            background-color: white;
            width: 1px;
            height: 12px;
            position: absolute;
            top: 3px;
            right: -16px;
        }

        li.filter:after {
            width: 100px;
            height: 100px;
            background: red;
            border-radius: 50%
            content: "";
        }

        li {
            padding: 0 1rem;
        }
    }

`

const NavHub = styled.div`
display: none;
width: 560px;
border: 1px solid black;
border-left-color: black;
border-left-style: solid;
border-left-width: 1px;
padding-right: 24px;
border-left: none;
background-color: white;
height: 45px;

@media screen and (min-width: 1100px) {
    width: 620px;
    display: block;
}

form {
    display: flex;
    justify-content: space-between;
    text-align: left;
    verticle-align: top;

    &::before {
        content: "";
        background-image: url('https://media.graphcms.com/snjbEbWZTd2g1OLDm3uH');
        background-size: contain;
        width: 14px;
        height: 43px;
        background-repeat: no-repeat;
        display: block;
    }

    @media only screen and (min-width: 1100px) {
        display: flex;
    }
}

label {
    display: inline-block;
    vertical-align: middle;
    padding-left: 30px;
    margin-top: 14px;
    position: relative;
    cursor: pointer;

    &:hover > span {
        background: #ccc;   
    }
}

label input[type="radio"] {
    display: none;
}


label span {
    width: 15px;
    height: 15px;
    border: 1px #111 solid;
    display: block;
    position: absolute;
    left: 0;
    top: -1px;


}

label span:after {
    content: "";
    top: 2px;
    left: 2px;
    width: 9px;
    height: 9px;
    background: #111;
    position: absolute;
    opacity: 0;
}

@media only screen and (min-width: 1148px and max-width: 1200px) {
    width: 576px;
}

    label input[type="radio"]:checked ~ span:after {
        opacity: 1;
    }
    
    label input[type="radio"]:checked ~ span {
        background-color: white;
    }
`




const Nav = ({title, children, setShow, changeCategory , filters}) => {

    const [filterOpen, setFilterOpen] = useState(false);

    console.log(filterOpen)
    return (
        <NavWrapper>

            <NavContainer>

                <Logo><a href="#"><img src="https://media.graphcms.com/WMGtnEUQ3GYWQcKDQHdn" alt="" /></a></Logo>

                <Menu>
                    <MenuPages>
                        <li><a href="#">Artists</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About</a></li>
                        <li className=""><a href="#">Search</a><img src="https://media.graphcms.com/eDrHGLAQbW1Px8TAEVKg" /><input type="search" /></li>
                    </MenuPages>

                    <MobileMenuPages>
                        <li><a className="filter" href="#" onClick={() => setFilterOpen(!filterOpen)}>Filter</a></li>
                        <li><a className="menu" href="#" onClick={() => setShow(true)}>Menu<span></span></a></li>
                    </MobileMenuPages>


                    <NavHub title="">
                        <p>{title}</p>
                        {children}
                    </NavHub>

                </Menu>
            </NavContainer>

            <MobileFilter show={filterOpen}>
                <form>
                    {filters.map(v => (
                        <label key={v.value}>
                            <input type="radio" value={v.value} name="filter" onChange={changeCategory} />
                            {v.label}
                            <span/>
                        </label>
                    ))}
                </form>
            </MobileFilter>

        </NavWrapper>
    );
}


export default Nav;
