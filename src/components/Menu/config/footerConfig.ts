import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
 
      {
        label: t('MAD Store'),
        href: 'https://madtoken.org/',
        isHighlighted: true,
      },
    ],
  }
 
]
