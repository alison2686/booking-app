import React from 'react'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    // FooterLink,
    // SocialMedia,
    // SocialMediaWrap,
    // SocialLogo,
    // SocialIcons,
    // SocialIconLink,
    // WebsiteRights,
    // AffiliateLink,
    // ImgWrap,
    // Img
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
    <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLinkTitle>Affiliates</FooterLinkTitle>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
    </FooterWrap>
</FooterContainer>
  )
}

export default Footer