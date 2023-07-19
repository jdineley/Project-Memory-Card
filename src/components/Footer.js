import React from 'react'
import styled from 'styled-components'


export default function Footer() {
    return (
        <FooterWrapper>
            <p>Copyright © 2023 jdineley</p>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`