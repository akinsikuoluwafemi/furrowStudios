// import React, { useEffect, useRef, useContext, useState } from 'react';
// import { Banner, Video, Canvas, BannerTitle, Headline } from '../../styles/homeStyles';
// import HomeVideo from '../../assets/video/video.mp4';
// import { GlobalStateContext } from '../../context/globalContext';


// // customhook
// import useWindowSize from '../../hooks/useWindowSize';


// export default function HomeBanner({onCursor}) {
//     const [{currentTheme}] = useContext(GlobalStateContext);
    

//     let canvas = useRef(null);
//     const size = useWindowSize();

//     useEffect(() => {
        
//         let renderingElement = canvas.current;
//         let drawingElement = renderingElement.cloneNode();

//         let drawingCtx = drawingElement.getContext("2d");
//         let renderingCtx = renderingElement.getContext("2d");

//         let lastX;
//         let lastY;
        

//         let moving = false;
//         renderingCtx.globalCompositeOperation = "source-over";
//         renderingCtx.fillStyle = currentTheme === 'dark' ? '#000000' : '#ffffff';
//         renderingCtx.fillRect(0, 0, size.width, size.height);



//         renderingElement.addEventListener('mouseover', e => {
//             moving = true
//             lastX = e.pageX - renderingElement.offsetLeft;
//             lastY = e.pageY - renderingElement.offsetTop;

//         })

//         renderingElement.addEventListener("mouseup", e => {
//           moving = false
//           lastX = e.pageX - renderingElement.offsetLeft
//           lastY = e.pageY - renderingElement.offsetTop
//         })
 
//         renderingElement.addEventListener("mousemove", e => {
//             if(moving){
//                 drawingCtx.globalCompositeOperation = 'source-over';
//                 renderingCtx.globalCompositeOperation = "destination-out";

//                 let currentX = e.pageX - renderingElement.offsetLeft;
//                 let currentY = e.pageY - renderingElement.offsetTop;
//                 drawingCtx.lineJoin = 'round';
//                 drawingCtx.moveTo(lastX, lastY)
//                 drawingCtx.lineTo(currentX, currentY)
//                 drawingCtx.closePath()
//                 drawingCtx.lineWidth = 120
//                 drawingCtx.stroke()
//                 lastX = currentX;
//                 lastY = currentY;
//                 renderingCtx.drawImage(drawingElement, 0, 0);
//                 // console.log(lastX,lastY)

//             }



//         })


//     }, [currentTheme])

//     const parent = {
//         initial: { y: 800 },
//         animate: {
//             y: 0,
//             transition: {
//                 staggerChildren: .2
//             }
//         }
//     }

//     const child = {
//       initial: { y: 800 },
//       animate: {
//         y: 0,
//         transition: {
//             duration: 1,
//             ease: [0.6, 0.05, -0.01, 0.9]
//         },
//       },
//     }
    
    


//     return (
//       <Banner>
//         <Video>
//             <video
//             height="100%"
//             width="100%"
//             loop
//             autoPlay
//             src={HomeVideo}>
//             </video>
                
          
//         </Video>
//         <Canvas height={size ? size.height : ''} width={size ? size.width : ''} ref={canvas} onMouseEnter={() => onCursor('hovered')} onMouseLeave={onCursor} />
//             <BannerTitle variants={parent} initial="initial" animate="animate">
//                 <Headline variants={child}>DIG</Headline>
//                 <Headline variants={child}>DEEP</Headline>

//             </BannerTitle>
//       </Banner>
//     )
// }


import React, { useEffect, useRef, useContext, useState } from "react"
import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from "../../styles/homeStyles"
import HomeVideo from "../../assets/video/video.mp4"
import { GlobalStateContext } from "../../context/globalContext"

// customhook
import useWindowSize from "../../hooks/useWindowSize"

export default function HomeBanner({ onCursor }) {
    const [{ currentTheme }] = useContext(GlobalStateContext)
    const [moving, setMoving] = useState(false);
    const [lastX, setLastX] = useState(null);
    const [lastY, setLastY] = useState(null)
    const [currentX, setCurrentX] = useState(null);
    const [currentY, setCurrentY] = useState(null);



    const canvas = useRef(null);
    const size = useWindowSize();

  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let drawingCtx = drawingElement.getContext("2d")
      let renderingCtx = renderingElement.getContext("2d")
      console.log(drawingElement);
      console.log(renderingElement);

    // let lastX
    // let lastY

    // let moving = false
    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
    renderingCtx.fillRect(0, 0, size.width, size.height)

    renderingElement.addEventListener("mouseover", e => {
        setMoving(true);
        setLastX(() => e.pageX - renderingElement.offsetLeft);
        setLastY(() => e.pageY - renderingElement.offsetTop);
    })

    renderingElement.addEventListener("mouseup", e => {
        setMoving(false);
        setLastX(() => e.pageX - renderingElement.offsetLeft)
        setLastY(() => e.pageY - renderingElement.offsetTop)
    })

    renderingElement.addEventListener("mousemove", e => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
          renderingCtx.globalCompositeOperation = "destination-out"
          
          setCurrentX(() => e.pageX - renderingElement.offsetLeft);
          setCurrentY(() => e.pageY - renderingElement.offsetTop);

        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
        // console.log(lastX,lastY)
      }
    })
  }, [currentTheme])

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video height="100%" width="100%" loop autoPlay src={HomeVideo}></video>
      </Video>
      <Canvas
        height={size ? size.height : ""}
        width={size ? size.width : ""}
        ref={canvas}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      />
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>DIG</Headline>
        <Headline variants={child}>DEEP</Headline>
      </BannerTitle>
    </Banner>
  )
}
