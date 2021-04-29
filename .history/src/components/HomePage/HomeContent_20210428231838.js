import React from 'react';
import { Container } from '../../styles/globalStyles';
import { HomeContentSection, Content } from "../../styles/homeStyles";


// Scroll behaviour
import { useInView } from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';

const HomeContent = () => {
    
  const animation = useAnimation();
  const [contentRef, inView] = useInVi({

  })


  return (
      <HomeContentSection>
        <Container>
          <Content>
            Great stories don’t just happen— <br/> they need to be uncovered.
            And we dig deep to discover the great stories that lie just below
            the surface. Dirt under our fingernails and all. Featured Project
          </Content>
        </Container>
      </HomeContentSection>
    )
}

export default HomeContent;