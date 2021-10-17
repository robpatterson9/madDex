import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 24px;
  border: 4px solid #ff1100;

  max-width: 475px;
  width: 100%;

  background-image :url('./images/MAD_main.svg') 
 
  
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
