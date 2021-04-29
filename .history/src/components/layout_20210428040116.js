import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { GlobalStateContext } from '../context/globalContext';
import CustomCursor from './CustomCursor';
import Navigation from '../components/Navigation';

// components
import Header from './header';


// styled components
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased; 
    font-sise: 16px;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behaviour: none;
    overflow-x: hidden;
    
  
  }




`



const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const darkTheme = {
    background: '#000',
    text: '#fff',
    red: '#ea291e'
  }

    const lightTheme = {
      background: "#fff",
      text: "#000",
      red: '#ea291e'
      
    }

  

  const [state, dispatch] = useContext(GlobalStateContext);
  const  = state;
  
 const onCursor = cursorType => {
  cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
 }
  
  const [toggleMenu, setToggleMenu] = useState(false);
  

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <CustomCursor toggleMenu={toggleMenu}/>
      <Header onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} onCursor={onCursor}  />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
