import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import styled from "styled-components";

const SocialLinks = styled.div`
padding: 0 1rem;
`;

const StyledIcon = styled.span`
color: #7b7878;
padding 0 1rem;
`


function SocialMedia() {
    return (
        <SocialLinks>
            <StyledIcon><TwitterIcon fontSize="large"/></StyledIcon>
            <StyledIcon><FacebookIcon fontSize="large"/></StyledIcon>
            <StyledIcon><InstagramIcon fontSize="large"/></StyledIcon>
        </SocialLinks>
    )
}

export default SocialMedia
