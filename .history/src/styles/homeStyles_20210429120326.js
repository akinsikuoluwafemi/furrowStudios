import styled from 'styled-components';
import { motion } from 'framer-motion';

// Banner
export const Banner = styled.div`
    background: ${({ theme }) => theme.background};
    height: 100vh;
    width: 100%;
    position: relative;
    margin-bottom: 296px;
`;
export const Video = styled.div`
    height: 100%;
    width: 100%;

    video {
        object-fit: cover;
    }

`;
 
export const Canvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: block;
`

export const BannerTitle = styled(motion.h1)`
         position: absolute;
         bottom: -120px;
         left: -18px;
         color: ${({ theme }) => theme.text};
         pointer-events: none;
       `;


export const Headline = styled(motion.span)`
    display: block;
    font-size: 23rem;
    font-weight: 900;
    line-height: 0.76;
`;

// content section
export const HomeContentSection = styled(motion.div)`
    margin-bottom: 200px;
`;

export const Content = styled.h2`
         width: 53%;
         font-size: 2.3rem;
         font-weight: 400;
         margin-left: 124px;
         color: ${({ theme }) => theme.text};
       `

export const HomeFeaturedSection = styled.div`
    margin-bottom: 200px;
    position: relative;
    a{
      margin-bottom: 200px;
      position: relative;
      display: block;
    }
`;
export const FeaturedContent = styled.div`
         height: 480px;
         width: 100%;
         padding: 56px 124px;
         box-sizing: border-box;
         color: ${({ theme }) => theme.text};
         h3 {
           font-size: 1.4rem;
         }

         .meta {
           display: flex;
           h4 {
             &:last-child {
               margin-left: 1rem;
             }
           }
         }

         .featured-title {
           position: relative;
           bottom: -128px;
           font-size: 7rem;
           font-weight: 900;
           
         }





       `
export const FeaturedVideo = styled.div`
  
  `;
export const FeaturedProjects = styled.div`
  
  `;