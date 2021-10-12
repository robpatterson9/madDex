/* eslint-disable react/style-prop-object */
import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'

import SalesSection from './components/SalesSection'

const StyledHeroSection = styled(PageSection)`
  padding-top: 116px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = {
    background: '#ffffff',
    margin: '0',
    width: '50%',
    maxWidth: '968px',
    marginBottom: '1300px',
  }

  return (
    <>
      {/* <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #09070C 22%, #201335 100%)'
            : 'linear-gradient(180deg, #FFFFFF 22%, #D7CAEC 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection> */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        // background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
        background="./MAD_main.svg"
      >
        <SalesSection {...swapSectionData} />
        <div>
          <br />
          <br />
          <br />

          <iframe
            src="https://widget.onramper.com??defaultCrypto=BNB&color=FF1100&apiKey=pk_prod_EMEhKOXNuUfrHnqu9Xg2w3hUVBPuurn8sHoPYvbbf4s0"
            height="595px"
            width="540px"
            title="Onramper widget"
            frameBorder="0"
            allow="accelerometer; autoplay; camera; gyroscope; payment"
          >
            <a href="https://widget.onramper.com" target="_blank" rel="noreferrer">
              Buy crypto
            </a>
          </iframe>
        </div>
      </PageSection>
    </>
  )
}

export default Home
