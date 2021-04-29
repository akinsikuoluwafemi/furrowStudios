import { Link } from 'gatsby';
import React from 'react';
import { Container } from '../../styles/globalStyles';

const HomeFeatured = () => {
    return (
        <HomeFeaturedSection>
            <Container>
                <Link>
                    <FeaturedContent>
                        <Flex>
                            <h3>
                                Featured Projects 
                            </h3>
                            <div className="meta">
                                <h4>PEI Seafood</h4>
                                <h4>2019</h4>
                            </div>
                        </Flex>
                        <h2 className="featured-title">
                            NOT <br/> HUMBLE
                        </h2>
                    </FeaturedContent>
                </Link>
            </Container>
            <Container>

            </Container>
        </HomeFeaturedSection>
    )
}

export default HomeFeatured;