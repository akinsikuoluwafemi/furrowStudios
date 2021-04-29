import React, {useContext} from "react"
import Layout from "../components/layout"

// components
import HomeBanner from '../components/HomePage/HomeBanner';
import { GlobalStateContext} from '../context/globalContext';
import {HomeContentSection } from '../components/HomePage/';



const IndexPage = () => {
  
  const [{cursorStyles}, dispatch] = useContext(GlobalStateContext);

  const onCursor = cursorType => {
  cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }


  return (
      <Layout>
      <HomeBanner onCursor={onCursor} />
      
      </Layout>  
  )

}

export default IndexPage
