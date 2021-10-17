import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'
import MADmain from './MAD_main.svg'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  page {
    background-image :url('./images/MAD_main.svg')


  }
  
body {
    background-image :url('./images/MAD_main.svg') 
  



 

  }


  .Iframe {
    padding: 6px;

    border: 2px solid #ff1100;

    border-radius: 20px;
    background: #ff1100;
  }

#Flex {
     border: 2px solid;
   }

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
