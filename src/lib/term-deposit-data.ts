export type NavItem = {
  label: string;
  href: string;
};

export type ProductCard = {
  badge?: string;
  title: string;
  description: string;
  bullets: { label: string; text: string }[];
  primaryAction: string;
  primaryHref: string;
  secondaryAction: string;
  secondaryHref: string;
};

export type SimpleRateRow = {
  term: string;
  maturity: string;
};

export type DetailedRateRow = {
  term: string;
  maturity: string;
  monthly: string;
  quarterly: string;
  halfYearly: string;
  annually: string;
};

export type AccordionItem = {
  title: string;
  paragraphs: string[];
  links?: { label: string; href: string }[];
};

export type OpenAccountOption = {
  value: "individual" | "company";
  label: string;
  title: string;
  intro: string;
  details: string[];
  note?: string;
};

export type FaqItem = {
  question: string;
  blocks: {
    title?: string;
    text?: string;
    bullets?: string[];
  }[];
};

const heroImagePrompt =
  "professional asian couple sitting on a light beige sofa in a modern upscale living room, looking at a smartphone together, warm natural daylight, bookshelf in background, realistic banking advertisement photography, premium financial brand, wide composition";

export const heroImageUrl = `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(heroImagePrompt)}&image_size=landscape_16_9`;

const bankingAppImagePrompt =
  "close-up hand holding a modern smartphone showing a clean mobile banking app interface, warm neutral background, premium financial technology advertising photography, soft natural light, realistic product shot";

export const bankingAppImageUrl = `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(bankingAppImagePrompt)}&image_size=portrait_4_3`;

export const utilityNavItems: NavItem[] = [
  { label: "Personal and Business", href: "/" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Help centre", href: "/help-centre" },
];

export const primaryNavItems: NavItem[] = [
  { label: "Individual Accounts", href: "#products" },
  { label: "Company Accounts", href: "#products" },
];

export const sectionNavItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Rates and fees", href: "#rates-and-fees" },
  { label: "Open an account", href: "#open-an-account" },
  { label: "FAQs", href: "#faqs" },
];

export const productCards: ProductCard[] = [
  {
    title: "For individual accounts",
    description:
      "We've reimagined how term deposits work with the Macquarie Term Deposit.",
    bullets: [
      {
        label: "Term periods:",
        text: "Choose from 3, 6, 9, or 12 month fixed terms.",
      },
      {
        label: "At the end of your term:",
        text: "Funds will be automatically transferred to your linked account, and you can open a new term deposit at any time.",
      },
      {
        label: "To break your term deposit early:",
        text: "You'll need to provide at least 31 days notice and will not earn interest during the notice period.",
      },
    ],
    primaryAction: "Open now",
    primaryHref: "/contact-us",
    secondaryAction: "Discover more",
    secondaryHref: "#rates-and-fees",
  },
  {
    title: "For company accounts",
    description: "Our classic Macquarie Term Deposit rates are offered to Australian companies.",
    bullets: [
      {
        label: "Term periods:",
        text: "Choose a fixed term from 1 month.",
      },
      {
        label: "At the end of your term:",
        text: "Funds will automatically rollover to the same term, with the option to update the maturity instructions in banking.",
      },
      {
        label: "To break your term deposit early:",
        text: "You'll need to provide at least 31 days notice and will incur a break fee.",
      },
    ],
    primaryAction: "Open now",
    primaryHref: "/contact-us",
    secondaryAction: "Discover more",
    secondaryHref: "#rates-and-fees",
  },
];

export const digitalRatesUnderMillion: SimpleRateRow[] = [
  { term: "3 months", maturity: "7.00% p.a." },
  { term: "6 months", maturity: "7.10% p.a." },
  { term: "9 months", maturity: "7.15% p.a." },
  { term: "1 year", maturity: "7.20% p.a." },
];

export const digitalRatesOverMillion: SimpleRateRow[] = [
  { term: "3 months", maturity: "6.75% p.a." },
  { term: "6 months", maturity: "6.95% p.a." },
  { term: "9 months", maturity: "7.05% p.a." },
  { term: "1 year", maturity: "7.10% p.a." },
];

export const classicRatesUnderMillion: DetailedRateRow[] = [
  {
    term: "1 month",
    maturity: "2.10% p.a.",
    monthly: "-",
    quarterly: "-",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "2 months",
    maturity: "2.10% p.a.",
    monthly: "2.10% p.a.",
    quarterly: "-",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "3 months",
    maturity: "5.00% p.a.",
    monthly: "4.98% p.a.",
    quarterly: "-",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "4 months",
    maturity: "5.00% p.a.",
    monthly: "4.97% p.a.",
    quarterly: "-",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "6 months",
    maturity: "5.10% p.a.",
    monthly: "5.05% p.a.",
    quarterly: "5.07% p.a.",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "9 months",
    maturity: "5.15% p.a.",
    monthly: "5.06% p.a.",
    quarterly: "5.09% p.a.",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "1 year",
    maturity: "5.20% p.a.",
    monthly: "5.08% p.a.",
    quarterly: "5.10% p.a.",
    halfYearly: "5.13% p.a.",
    annually: "-",
  },
  {
    term: "2 years",
    maturity: "-",
    monthly: "1.98% p.a.",
    quarterly: "1.99% p.a.",
    halfYearly: "1.99% p.a.",
    annually: "2.00% p.a.",
  },
  {
    term: "3 years",
    maturity: "-",
    monthly: "1.98% p.a.",
    quarterly: "1.99% p.a.",
    halfYearly: "1.99% p.a.",
    annually: "2.00% p.a.",
  },
  {
    term: "4 years",
    maturity: "-",
    monthly: "1.98% p.a.",
    quarterly: "1.99% p.a.",
    halfYearly: "1.99% p.a.",
    annually: "2.00% p.a.",
  },
  {
    term: "5 years",
    maturity: "-",
    monthly: "1.98% p.a.",
    quarterly: "1.99% p.a.",
    halfYearly: "1.99% p.a.",
    annually: "2.00% p.a.",
  },
];

export const classicRatesOverMillion: DetailedRateRow[] = [
  {
    term: "1 month",
    maturity: "2.10% p.a.",
    monthly: "-",
    quarterly: "-",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "2 months",
    maturity: "2.10% p.a.",
    monthly: "2.10% p.a.",
    quarterly: "-",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "3 months",
    maturity: "4.75% p.a.",
    monthly: "4.73% p.a.",
    quarterly: "-",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "4 months",
    maturity: "4.75% p.a.",
    monthly: "4.72% p.a.",
    quarterly: "-",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "6 months",
    maturity: "4.95% p.a.",
    monthly: "4.90% p.a.",
    quarterly: "4.92% p.a.",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "9 months",
    maturity: "5.05% p.a.",
    monthly: "4.97% p.a.",
    quarterly: "4.99% p.a.",
    halfYearly: "-",
    annually: "-",
  },
  {
    term: "1 year",
    maturity: "5.05% p.a.",
    monthly: "4.94% p.a.",
    quarterly: "4.96% p.a.",
    halfYearly: "4.99% p.a.",
    annually: "-",
  },
  {
    term: "2 years",
    maturity: "-",
    monthly: "1.98% p.a.",
    quarterly: "1.99% p.a.",
    halfYearly: "1.99% p.a.",
    annually: "2.00% p.a.",
  },
  {
    term: "3 years",
    maturity: "-",
    monthly: "1.98% p.a.",
    quarterly: "1.99% p.a.",
    halfYearly: "1.99% p.a.",
    annually: "2.00% p.a.",
  },
  {
    term: "4 years",
    maturity: "-",
    monthly: "1.98% p.a.",
    quarterly: "1.99% p.a.",
    halfYearly: "1.99% p.a.",
    annually: "2.00% p.a.",
  },
  {
    term: "5 years",
    maturity: "-",
    monthly: "1.98% p.a.",
    quarterly: "1.99% p.a.",
    halfYearly: "1.99% p.a.",
    annually: "2.00% p.a.",
  },
];

export const digitalAccordionItems: AccordionItem[] = [
  {
    title: "Fees, terms and conditions",
    paragraphs: [
      "No account fees.",
      "Macquarie Term Deposit funds are locked in until maturity. At least 31 days' notice is required to close your account and access your funds prior to the maturity date, except in cases of hardship. Term Deposits will not earn any interest (0%) during the notice period.",
      "If you're opening multiple term deposit accounts with similar investment terms within a short period of time, the lower rate may be applied across the total balance of your term deposits.",
    ],
  },
];

export const classicAccordionItems: AccordionItem[] = [
  {
    title: "Fees, terms and conditions",
    paragraphs: [
      "Break fee - 25% of interest earned.",
      "Macquarie Term Deposit funds are locked in until maturity. At least 31 days notice is required to close your account and access funds prior to the maturity date, except in cases of hardship.",
      "If you're opening multiple term deposit accounts with similar investment terms within a short period of time, the lower rate may be applied across the total balance of your term deposits.",
    ],
    links: [
      {
        label: "Macquarie Term Deposit Account Terms and Conditions",
        href: "#",
      },
      {
        label: "Macquarie Banking Terms and Conditions",
        href: "#",
      },
    ],
  },
];

export const futureSections = [
  {
    id: "open-an-account",
    eyebrow: "Coming next",
    title: "Open an account",
    description:
      "This section is wired into the page and ready for the exact content and screenshots you send next.",
  },
  {
    id: "digital-banking",
    eyebrow: "Coming next",
    title: "Digital banking",
    description:
      "The layout is ready for your next round of app features, cards, and supporting images.",
  },
  {
    id: "faqs",
    eyebrow: "Coming next",
    title: "FAQs",
    description:
      "This area is reserved for the final FAQ content, accordion items, and any extra visuals you want added.",
  },
] as const;

export const openAccountOptions: OpenAccountOption[] = [
  {
    value: "individual",
    label: "An individual account",
    title: "How do I open a term deposit as an individual account holder?",
    intro:
      "If you're applying as an individual account holder, you'll first need to have a Macquarie Transaction Account in the same name as the term deposit you're applying for.",
    details: [
      "If you don't already have a Macquarie Transaction Account, please visit the Help Centre.",
      "Once your Macquarie Transaction Account is ready, we can open a Macquarie Term Deposit in the same name.",
      "Macquarie Term Deposits are for individual account holders without a financial adviser.",
      "For more information on opening a Macquarie Transaction Account or a Macquarie Term Deposit, visit the Help Centre.",
    ],
    note: "Macquarie Term Deposits are not available for clients with a financial adviser. Please contact our adviser to open a Macquarie Term Deposit.",
  },
  {
    value: "company",
    label: "A company account",
    title: "How do I open a term deposit as a company?",
    intro:
      "To open a term deposit as a company, you'll need to open a Macquarie Term Deposit online with the help of our adviser.",
    details: [
      "You need to be an Australian resident, be at least 18 years old, and have a minimum investment of $25,000.",
      "You'll need a driver's licence or passport, your current email and mobile number.",
      "During the application, you can choose the amount you want to invest, how often you want interest paid, and which bank account funds will be debited from and returned to at maturity.",
      "For more information, please visit the Help Centre.",
    ],
  },
];

export const digitalBankingBullets = [
  "Designed with you in mind, Q is your AI agent, here to make managing your money easier, with 24/7 support.",
  "Attach receipts and tag statements to make tax time easier.",
];

export const faqItems: FaqItem[] = [
  {
    question: "How do I open a term deposit as an individual account holder?",
    blocks: [
      {
        text: "If you're applying as an individual holder, you'll first need to have a Macquarie Transaction Account in the same name as the term deposit you're applying for.",
      },
      {
        text: "If you don't have a Macquarie Transaction Account, you can open one by simply contacting Macquarie Support using the Help Centre.",
      },
      {
        text: "Note: Macquarie Term Deposits are not available for clients with a financial adviser. Please contact our adviser to open a Macquarie Term Deposit.",
      },
    ],
  },
  {
    question: "How do I open a term deposit as a company?",
    blocks: [
      {
        title: "To open a Macquarie Term Deposit, you need to:",
        bullets: [
          "Be an Australian resident",
          "Be at least 18 years old",
          "Have a minimum investment of $25,000",
          "Have a driver's licence or passport",
          "Provide your current email and mobile number",
        ],
      },
      {
        text: "As part of your application, you can elect the amount you want to invest, the frequency of your interest payments and which bank account your funds will be debited from and returned to when your term deposit reaches maturity.",
      },
    ],
  },
  {
    question: "What happens when my term deposit matures?",
    blocks: [
      {
        title: "If you hold a Macquarie Term Deposit",
        text: "On maturity, your Macquarie Term Deposit will be closed and your investment amount plus any interest earned will be returned to your linked Macquarie Transaction Account or your given Bank Account.",
      },
    ],
  },
  {
    question: "How do I fund my term deposit account?",
    blocks: [
      {
        title: "Macquarie Term Deposit",
        bullets: [
          "All deposits are made by transfer from the selected Macquarie Transaction Account or your Bank Account on account opening process.",
          "You can't add additional funds to your Macquarie Term Deposit during your investment term.",
        ],
      },
    ],
  },
  {
    question: "Is my account protected by the Government Guarantee?",
    blocks: [
      {
        text: "Yes. The Australian Government guarantees aggregated deposits with Australian authorised deposit-taking institutions, including Macquarie Bank, of up to $A250,000.",
      },
      {
        text: "The Financial Claims Scheme (FCS) is an Australian Government scheme that was established during the 2008 global financial crisis to provide financial protection for consumers in the unlikely event of a failure of a bank, credit union, building society or general insurer.",
      },
      {
        text: "The FCS provides protection for depositors of banks, credit unions and building societies that are incorporated in Australia, also known as authorised deposit-taking institutions or ADIs, for deposits up to $250,000 per account holder per ADI.",
      },
      {
        text: "The scheme aims to return deposits to account holders within seven days of activation of the FCS. Once activated, the FCS will be administered by APRA.",
      },
    ],
  },
];

export const existingHelpCards = [
  {
    title: "Download the app",
    description:
      "Download the Macquarie Mobile Banking app to start managing your banking on the go.",
    action: "Download Macquarie App",
    href: "#digital-banking",
  },
  {
    title: "Need help with your term deposit?",
    description:
      "Quickly search and find the answer to common questions to manage your term deposit.",
    action: "Visit Help Centre",
    href: "/help-centre",
  },
  {
    title: "Find information on your existing term deposit",
    description:
      "Information on your existing term deposit can be found in Macquarie Online Banking or Macquarie Business Online.",
    action: "View account support",
    href: "#faqs",
  },
] as const;

export const saveWays = [
  "Savings account",
  "Business savings account",
] as const;

export const additionalInformation = [
  "This information has been prepared by Macquarie Bank Limited AFSL and Australian Credit Licence 237502 (MBL) and does not take into account your objectives, financial situation or needs. You should consider whether it is appropriate for you. Lending criteria, fees and T&Cs apply.",
  "Government Guarantee: The Australian Government guarantees aggregated deposits with Australian authorised deposit-taking institutions, including Macquarie Bank, of up to $A250,000. Further information about the Government Guarantee can be obtained from the APRA website at www.fcs.gov.au.",
  "Apple, the Apple logo and iPhone are trademarks of Apple Inc, registered in the U.S. and other countries. App Store is a service mark of Apple Inc.",
  "Android, Google Pay, Google Chrome and the Google Logo are trademarks of Google LLC.",
];

export const footerPrimaryLinks: string[] = [];

export const footerSecondaryLinks: string[] = [];

export const footerDisclaimer =
  "Except for Macquarie Bank Limited ABN 46 008 583 542 AFSL and Australian Credit Licence 237502 (MBL), any Macquarie entity referred to on this page is not an authorised deposit-taking institution for the purposes of the Banking Act 1959 (Cth). That entity's obligations do not represent deposits or other liabilities of MBL. Any investments are subject to investment risk including possible delays in repayment and loss of income and principal invested. MBL does not guarantee or otherwise provide assurance in respect of the obligations of that entity, unless noted otherwise.";
