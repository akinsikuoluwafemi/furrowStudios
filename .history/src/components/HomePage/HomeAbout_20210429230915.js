import React from 'react'
import { Container, Flex } from '../../styles/globalStyles'
import { AccordionHeader, AccordionIcon, AccordionContent, HomeAboutSection, About, Services } from '../../styles/homeStyles';


const HomeAbout = () => {
    return (
      <HomeAboutSection>
        <Container>
          <Flex>
            <About>
              <h2>
                Furrow is an integrated, full-service creative studio offering
                video production, creative development, and post-production
                services.
              </h2>
              <p>
                Everybody’s got a story. And we don’t stop until we’ve uncovered
                what makes yours worth telling. Whether it’s working directly
                with you, an agency partner, or putting the finishing touches on
                something special, we’re ready to dig in and get our hands
                dirty—are you?
              </p>
                </About>
                <Services>
                    <h3>Services</h3>
                    <Accordion/>
                </Services>
          </Flex>
        </Container>
      </HomeAboutSection>
    )
}


export default HomeAbout

const Accordion = () => {
    return (
      <>
        <AccordionHeader>
          <AccordionIcon>
            <span></span>
            <span></span>
          </AccordionIcon>
          Hello Youtube
        </AccordionHeader>
        <AccordionContent>
          <span>Kimi</span>
          <span>Lewis</span>
          <span>Leclerc</span>
        </AccordionContent>
      </>
    )
}

