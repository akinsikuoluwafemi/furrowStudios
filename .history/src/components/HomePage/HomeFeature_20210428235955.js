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
                            <div cl>

                            </div>
                        </Flex>
                    </FeaturedContent>
                </Link>
            </Container>
            <Container>

            </Container>
        </HomeFeaturedSection>
    )
}

export default HomeFeatured;