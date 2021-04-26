import React, {useState, useEffect, useContext} from 'react';
import { Cursor } from '../styles/globalStyles';
import { GlobalStateContext } from "../context/globalContext"


const CustomCursor = ({toggleMenu}) =>{
    
    const [{cursorType}] = useContext(GlobalStateContext);
    
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400
    })

    const onMouseMove = event => {
        const { pageX: x, pageY: y } = event;
        // console.log(x,y)
        setMousePosition({x,y})
    }

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove)

        return () => {
            document.removeEventListener("mousemove", onMouseMove)
        }

    },[])

    return (
        <>
            <Cursor
                className={`${!!cursorType ? 'hovered' : ''} ${cursorType} ${toggleMenu ? 'nav-open' : ''}`}
                style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
        </>
    )
}

export default CustomCursor;