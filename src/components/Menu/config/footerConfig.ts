import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: ('mad'),
    items: [
 
      {
        label: t('madtoken.org'),
        href: 'https://madtoken.org/',
        isHighlighted: true,
      },
    ],
  }
 
]
