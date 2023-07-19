import React from 'react'
import styled from 'styled-components'


export default function Footer() {
    return (
        <FooterWrapper>
            <p>Copyright © 2023 jdineley</p>
            <GithubLink href="https://github.com/jdineley" target="_blank">
                Github
            </GithubLink>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
background-color: ${({theme}) => theme.colors.darkHover};
color: ${({ theme }) => theme.colors.light};
`

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  padding-bottom: 0.3rem;
  margin-left: 0.7rem;
  color: ${({ theme }) => theme.colors.light};
  

  &:hover {
    color: ${({ theme }) => theme.colors.lightHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.lightActive};
  }
`