import React, {useContext, useEffect} from 'react';
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from '../styles/globalStyles';
import { Link } from 'gatsby';
import { GlobalStateContext } from '../context/globalContext';


const Header = ({onCursor, toggleMenu, setToggleMenu}) => {
  
 

  const [{ currentTheme }, dispatch] = useContext(GlobalStateContext);

  // use this
  // const setToLocalStorage = () => {
  //    window.localStorage.setItem("theme", currentTheme)
    
  // }

  const toggleTheme = () => {
    if(currentTheme === "dark"){
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
      // setToLocalStorage()
      
    }else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
      setToLocalStorage()
    }

  }

  // use this
   useEffect(() => {
     localStorage.setItem('theme', currentTheme)
  },[currentTheme])


   

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">FURR</Link>
            <span
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              onClick={toggleTheme}
            ></span>
            <Link to="/">W</Link>
          </Logo>
          <Menu
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header;
