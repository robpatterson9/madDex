import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'MAD ',
  bodyText: 'Make A Difference Token',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xb08ba8C99A883D85D929f561B81Bb8C365A5a93b',
    text: 'Swap BNB for MAD',
    external: false,
  },

  secondaryButton: {
    to: '/swap?inputCurrency=0xb08ba8C99A883D85D929f561B81Bb8C365A5a93b',
    
    text: 'Swap MAD for BNB',
    external: false,
  },
  
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}
export const wapSectionData: SalesSectionProps = {
  headingText: 'MAD ',
  bodyText: 'Make A Difference Token',
  reverse: false,
  primaryButton: {
      to: '/swap?inputCurrency=0xb08ba8C99A883D85D929f561B81Bb8C365A5a93b',
    text: 'BUY MAD!',
    external: false,
  },

  secondaryButton: {
    to: '/swap?inputCurrency=0xb08ba8C99A883D85D929f561B81Bb8C365A5a93b',
    
    text: 'Swap MAD for BNB',
    external: false,
  },
  
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}



export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'PancakeSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://madtoken.org',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'CAKE makes our world go round.',
  bodyText:
    'CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xb08ba8C99A883D85D929f561B81Bb8C365A5a93b',
    text: 'Buy CAKE',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d pancake' },
      { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'coin', alt: 'CAKE token' },
      { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
