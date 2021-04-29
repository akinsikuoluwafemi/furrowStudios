import { Link } from 'gatsby';
import React from 'react';
import { Container, Flex } from '../../styles/globalStyles';
import {
  HomeFeaturedSection,
  FeaturedContent,
  FeaturedVideo,
  FeaturedProjects,
} from "../../styles/homeStyles"



const HomeFeatured = () => {
    return (
      <HomeFeaturedSection>
        <Container>
          <Link>
            <FeaturedContent>
              <Flex>
                <h3>Featured Projects</h3>
                <div className="meta">
                  <h4>PEI Seafood</h4>
                  <h4>2019</h4>
                </div>
              </Flex>
              
            </FeaturedContent>
            
            <FeaturedVideo>
              <video loop autoPlay src={require('../../assets/video/featured-video.mp4')}>
              </video>
            </FeaturedVideo>
          </Link>
        </Container>
            <Container>
                <FeaturedProjects>
                    <Flex flexEnd>
                        <button>
                            <span>All Projects</span>
                        </button>
                    </Flex>
                </FeaturedProjects>
            </Container>
      </HomeFeaturedSection>
    )
}

export default HomeFeatured;