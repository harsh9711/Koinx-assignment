const annualIncomeData = [
  { id: 1, incomeRange: '$0 - $18,200', incomeId: 18200 },
  { id: 2, incomeRange: '$18,201 - $45,000', incomeId: 45000 },
  { id: 3, incomeRange: '$45,001 - $120,000', incomeId: 120000 },
  { id: 4, incomeRange: '$120,001 - $180,000', incomeId: 180000 },
  { id: 5, incomeRange: '$180,001+', incomeId: 190000 },
];

const taxData = [
  { id: 1, incomeRange: '$0 - $18,200', taxRate: '0%' },
  { id: 2, incomeRange: '$18,201 - $45,000', taxRate: 'Nil + 19% of the excess over $18,200' },
  { id: 3, incomeRange: '$45,001 - $120,000', taxRate: '$5,092 + 32.5% of the excess over $45,000' },
  { id: 4, incomeRange: '$120,001 - $180,000', taxRate: '$29,467 + 37% of the excess over $120,000' },
  { id: 5, incomeRange: '$180,001+', taxRate: '$51,667 + 45% of the excess over $180,000' },
];

const navbarLinks = [
  { title: 'Features', href: '/' },
  { title: 'Exchanges', href: '/' },
  { title: 'How it works?', href: '/' },
  { title: 'Blog', href: '/' },
  { title: 'About us', href: '/' },
];

const financialYearData = [
  { id: 1, year: 'FY 2023-24', value: '2023-24' },
  { id: 2, year: 'FY 2022-23', value: '2022-23' },
  { id: 3, year: 'FY 2021-22', value: '2021-22' },
  { id: 4, year: 'FY 2020-21', value: '2020-21' },
];

const countryData = [
  { id: 1, name: 'Australia', img_url: '', value: 'Australia' },
  { id: 2, name: 'India', img_url: '', value: 'India' },
  { id: 3, name: 'America', img_url: '', value: 'America' },
  { id: 4, name: 'Russia', img_url: '', value: 'Russia' },
];

const faqDetails = [
  {
    id: 1,
    question: 'How are cryptocurrencies taxed in Australia?',
    answer: [
      'The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax...',
    ],
  },
  {
    id: 2,
    question: 'What\'s the difference between long-term and short-term capital gains?',
    answer: [
      'The distinction between long-term and short-term capital gains lies in the duration of ownership...',
    ],
  },
  {
    id: 3,
    question: 'Do I have to pay tax on crypto-to-crypto transactions?',
    answer: [
      'Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, it\'s seen as selling one asset to buy another...',
      'Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, it\'s seen as selling one asset to buy another...',
    ],
    paragraph: true,
  },
  {
    id: 4,
    question: 'How do I lower my cryptocurrency taxes?',
    answer: [
      'Here are the top 6 strategies for lowering your cryptocurrency taxes in Australia:',
    ],
  },
  {
    id: 5,
    question: 'What is the minimum amount to invest?',
    answer: [
      'The minimum amount to invest is $100. You can invest any amount above $100.',
    ],
  },
  {
    id: 6,
    question: 'What is the minimum amount to invest?',
    answer: [
      'The minimum amount to invest is $100. You can invest any amount above $100.',
    ],
  },
];

const footerLinksImageData = [
  { id: 1, href: '/', imgURL: '/assets/footer-icons/x-logo.svg' },
  { id: 2, href: '/', imgURL: '/assets/footer-icons/youtube-logo.svg' },
  { id: 3, href: '/', imgURL: '/assets/footer-icons/linkedin-logo.svg' },
  { id: 4, href: '/', imgURL: '/assets/footer-icons/telegram-icon.svg' },
  { id: 5, href: '/', imgURL: '/assets/footer-icons/facebook-icon.svg' },
  { id: 6, href: '/', imgURL: '/assets/footer-icons/messenger-icon.svg' },
];

const footerLinkData = [
  {
    id: 1,
    href: '/',
    heading: 'Crypto Taxes for ',
    subHeading: [
      'Individuals and investors',
      'Tax Professionals and Accountants',
      'Exchanges and Web3 projects',
    ],
  },
  {
    id: 2,
    href: '/',
    heading: 'Free Tools ',
    subHeading: [
      'Crypto Prices Live',
      'Crypto Tax Calculator',
      'Crypto Tax Saving Speculator',
      'Crypto Profit Calculator',
      'Crypto Converter',
      'Crypto Staking ROI Calculator',
    ],
  },
  {
    id: 3,
    href: '/',
    heading: 'Resource Center ',
    subHeading: [
      'Crypto Tax Guides',
      'Dumb Ways To Lose Money',
      'Crypto Tax Savings Guide ',
      'Blogs',
      'Crypto Buying Guides',
      'Crypto Staking Guides',
      'Crypto Mining Guides',
      'Crypto Price Predictions',
    ],
  },
  {
    id: 4,
    href: '/',
    heading: 'Help And Support ',
    subHeading: [
      'Product Guides',
      'How To Guides',
      'Templates ',
      'Contact us',
    ],
  },
  {
    id: 5,
    href: '/',
    heading: 'Company',
    subHeading: [
      'About Us',
      'Backed by',
      'Media and Press ',
      'Careers',
      'Refund Policy',
      'Brand Assets',
      'Terms of use',
      'Privacy Policys',
    ],
  },
];

export {
  annualIncomeData,
  taxData,
  navbarLinks,
  financialYearData,
  countryData,
  faqDetails,
  footerLinksImageData,
  footerLinkData,
};
