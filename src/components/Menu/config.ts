import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://weedswap.io/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://weedswap.io/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://weedswap.io/#/pools',
  },
  {
    label: 'Coffeeshop',
    icon: 'BushIcon',
    href: 'https://weedswap.io/#/bush',
  },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon', // ShieldIcon
  //   href: 'https://twitter.com/weedswapdefi/status/1367218225310818308',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x4B4c5D87fa1aFE3365Fa1ee9cb6c38cC6FAB8fEf',
        target: '_blank',
      },
      // {
      //   label: 'Token',
      //   href: 'https://doc.weedswap.io/tokennomics/weedswap-token',
      //   target: '_blank',
      // },
      // {
      //   label: 'Contracts',
      //   href: 'https://doc.weedswap.io/security/contracts',
      //   target: '_blank',
      // },
      // {
      //   label: 'Transparency',
      //   href: 'https://doc.weedswap.io/transparency/transparency',
      //   target: '_blank',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/weedswaptoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/weedswaptoken/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/WeedSwapDefi',
        target: '_blank',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://doc.weedswap.io/',
      //   target: '_blank',
      // },
      {
        label: 'Blog',
        href: 'https://weedswapdefi.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/weedswapdefi',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/weedswapdefichat',
        target: '_blank',
      },
    ],
  },
]

export default config
