import React from 'react'
import SocialMedia from './SocialMedia'
import { Container } from "./globalStyles"

function Footer() {
    return (
        <Container>
            <footer>
                <div>
                    <h3>Heading 1</h3>
                </div>
                <div>
                    <h3>Heading 2</h3>
                </div>
                <div>
                    <h3>Stay Social</h3>
                    <SocialMedia />
                </div>
            </footer>
        </Container>
    )
}

export default Footer
