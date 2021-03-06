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
              <h2 className="featured-title">
                NOT <br /> HUMBLE
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fill="#FFF"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </h2>
            </FeaturedContent>
            
            <FeaturedVideo>
              <Container>

              </Container>
              
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