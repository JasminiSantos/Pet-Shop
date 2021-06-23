import React, {useEffect, useState} from 'react';
import {IconContext} from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavMenu,
    Navlogo,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavBtnLinkSignUp

} from './NavbarElements';

const Navbar = () => {
    
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {

        if(window.scrollY >= 80) {
            setScrollNav(true)

        } else {
            setScrollNav(false)
        }

    }

    useEffect (() => {

        window.addEventListener('scroll', changeNav)
    }, [])


        return (
            <>
            <IconContext.Provider value={{ color: '#000' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <Navlogo to ="/" >  <i className="fas fa-dog"/></Navlogo> 
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/page1">
                                    Images
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/page2">
                                    Videos
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                           <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                        <NavBtn>
                            <NavBtnLinkSignUp to="/register">Sign Up</NavBtnLinkSignUp>
                        </NavBtn>
                </Nav>
            </IconContext.Provider>
            </>
        );
};

export default Navbar

