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
  { label: "Personal and Business", href: "#" },
  { label: "Advisers", href: "#" },
  { label: "Brokers", href: "#" },
  { label: "Digital banking", href: "#digital-banking" },
  { label: "Contact us", href: "#open-an-account" },
  { label: "Help Centre", href: "#faqs" },
];

export const primaryNavItems: NavItem[] = [
  { label: "Everyday banking", href: "/" },
  { label: "Home loans", href: "#" },
  { label: "Investing and super", href: "#" },
  { label: "Business banking", href: "#" },
  { label: "Private Bank", href: "#" },
];

export const sectionNavItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Rates and fees", href: "#rates-and-fees" },
  { label: "Open an account", href: "#open-an-account" },
  { label: "Digital banking", href: "#digital-banking" },
  { label: "FAQs", href: "#faqs" },
];

export const productCards: ProductCard[] = [
  {
    badge: "New",
    title: "For individual or joint accounts",
    description:
      "We've reimagined how term deposits work with the Macquarie Digital Term Deposit.",
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
    primaryHref: "#open-an-account",
    secondaryAction: "Discover more",
    secondaryHref: "#digital-rates",
  },
  {
    title: "For company or trust accounts",
    description: "Our classic Macquarie Term Deposit offering.",
    bullets: [
      {
        label: "Term periods:",
        text: "Choose a fixed term from 1 month.",
      },
      {
        label: "At the end of your term:",
        text: "Funds will automatically rollover to the same term, with the option to update the maturity instructions in-app.",
      },
      {
        label: "To break your term deposit early:",
        text: "You'll need to provide at least 31 days notice and will incur a break fee.",
      },
    ],
    primaryAction: "Open now",
    primaryHref: "#open-an-account",
    secondaryAction: "Discover more",
    secondaryHref: "#classic-rates",
  },
];

export const digitalRatesUnderMillion: SimpleRateRow[] = [
  { term: "3 months", maturity: "5.00% p.a." },
  { term: "6 months", maturity: "5.10% p.a." },
  { term: "9 months", maturity: "5.15% p.a." },
  { term: "1 year", maturity: "5.20% p.a." },
];

export const digitalRatesOverMillion: SimpleRateRow[] = [
  { term: "3 months", maturity: "4.75% p.a." },
  { term: "6 months", maturity: "4.95% p.a." },
  { term: "9 months", maturity: "5.05% p.a." },
  { term: "1 year", maturity: "5.05% p.a." },
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
      "Macquarie Digital Term Deposit funds are locked in until maturity. At least 31 days' notice is required to close your account and access your funds prior to the maturity date, except in cases of hardship. Digital Term Deposits will not earn any interest (0%) during the notice period.",
      "If you're opening multiple term deposit accounts with similar investment terms within a short period of time, the lower rate may be applied across the total balance of your term deposits.",
    ],
    links: [
      {
        label: "Macquarie Digital Term Deposit Account Terms and Conditions",
        href: "#",
      },
      {
        label: "Macquarie Banking Terms and Conditions",
        href: "#",
      },
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
    label: "An individual or joint account",
    title: "How do I open a term deposit as an individual or joint account holder?",
    intro:
      "If you're applying as an individual or joint account holder, you'll first need to have a Macquarie Transaction or Savings Account in the same name(s) as the term deposit you're applying for.",
    details: [
      "If you don't already have a Macquarie Transaction Account, you can open one by completing the online application via Macquarie Online Banking or the Macquarie Mobile Banking app.",
      "Once your linked Macquarie Transaction or Savings Account is ready, you can open a Macquarie Digital Term Deposit in the same name(s).",
      "Macquarie Digital Term Deposits are for individual and joint account holders without a financial adviser.",
      "For more information on opening a Macquarie Transaction Account or a Macquarie Digital Term Deposit, visit the Help Centre.",
    ],
    note: "Macquarie Digital Term Deposits are not available for clients with a financial adviser. Please contact your adviser to open a Macquarie Term Deposit.",
  },
  {
    value: "company",
    label: "A company or trust account",
    title: "How do I open a term deposit as a company or trust?",
    intro:
      "To open a term deposit as a company or trust, you'll need to open a Macquarie Term Deposit online and select your account type before you begin the application.",
    details: [
      "You need to be an Australian resident, be at least 18 years old, and have a minimum investment of $5,000.",
      "You'll need a driver's licence or passport, your current email and mobile number, and a nominated bank account for us to fund your term deposit.",
      "During the application, you can choose the amount you want to invest, how often you want interest paid, and which bank account funds will be debited from and returned to at maturity.",
      "Your nominated account must be in the same name and structure as your term deposit, accept both direct debits and credits, contain sufficient funds, and not be a Macquarie Cash Management Accelerator Account or Macquarie Vision Savings Account.",
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
    question: "What's the difference between a Macquarie Term Deposit and Macquarie Digital Term Deposit?",
    blocks: [
      {
        text: "Macquarie offers two types of term deposits. The type of account you need depends on your entity type and whether you have a financial adviser.",
      },
      {
        title: "Macquarie Digital Term Deposit",
        bullets: [
          "Eligible: Individual and joint account holders without a financial adviser",
          "Minimum deposit: $25,000",
          "Terms available: 3, 6, 9, or 12 months",
          "Interest payment: Paid at maturity",
          "Account linking: Requires a linked Macquarie Transaction or Savings Account",
          "At maturity: Automatically closes and funds return to your linked account with no rollovers",
          "Early withdrawal: 31-day notice required; interest rate adjusts to 0% for the notice period",
        ],
      },
      {
        title: "Macquarie Term Deposit",
        bullets: [
          "Eligible: Individual and joint account holders with a financial adviser, plus companies, trusts and SMSFs",
          "Minimum deposit: $5,000",
          "Terms available: Between 1-12 months, or 2-5 years",
          "Interest payment: Monthly, quarterly, bi-annually, annually, or at maturity",
          "At maturity: Option to withdraw funds or roll over into a new term",
          "Early withdrawal: 31-day notice required; 25% break fee applied to accrued interest",
        ],
      },
      {
        text: "For more information please visit our Help Centre.",
      },
    ],
  },
  {
    question:
      "I already have a term deposit with Macquarie. How do I check if it is a Macquarie Term Deposit or Macquarie Digital Term Deposit?",
    blocks: [
      {
        text: "You can check your account type by logging into your Macquarie Mobile Banking app or Macquarie Online Banking.",
      },
      {
        bullets: [
          "Select your term deposit from your account list.",
          "Select I want to -> view account and term details.",
          "Under Product, it will specifically state whether it is a Macquarie Digital Term Deposit or Term Deposit for Macquarie Term Deposit.",
        ],
      },
      {
        text: "For more information please visit our Help Centre.",
      },
    ],
  },
  {
    question: "How do I open a term deposit as an individual or joint account holder?",
    blocks: [
      {
        text: "If you're applying as an individual or joint account holder, you'll first need to have a Macquarie Transaction or Savings Account in the same name(s) as the term deposit you're applying for.",
      },
      {
        text: "If you don't have a Macquarie Transaction Account, you can open one by completing the online application via Macquarie Online Banking or the Macquarie Mobile Banking app.",
      },
      {
        text: "For more information on how to open a Macquarie Transaction Account or a Macquarie Digital Term Deposit please visit our Help Centre.",
      },
      {
        text: "Note: Macquarie Digital Term Deposits are not available for clients with a financial adviser. Please contact your adviser to open a Macquarie Term Deposit.",
      },
    ],
  },
  {
    question: "How do I open a term deposit as a company or trust?",
    blocks: [
      {
        text: "To open a term deposit as a company or trust, you'll need to open a Macquarie Term Deposit online.",
      },
      {
        text: "Before you begin your application, you'll need to select your account type, for example company or trust.",
      },
      {
        title: "To open a Macquarie Term Deposit, you need to:",
        bullets: [
          "Be an Australian resident",
          "Be at least 18 years old",
          "Have a minimum investment of $5,000",
          "Have a driver's licence or passport",
          "Provide a nominated bank account for us to fund your term deposit",
          "Provide your current email and mobile number",
        ],
      },
      {
        text: "As part of your application, you can elect the amount you want to invest, the frequency of your interest payments and which bank account your funds will be debited from and returned to when your term deposit reaches maturity.",
      },
      {
        title: "Your nominated account must:",
        bullets: [
          "Be in the same name and structure as your term deposit",
          "Be able to accept both direct debits and credits",
          "Contain sufficient funds for the investment amount",
          "Not be a Macquarie Cash Management Accelerator Account or Macquarie Vision Savings Account",
        ],
      },
      {
        text: "For more information please visit our Help Centre.",
      },
    ],
  },
  {
    question: "What happens when my term deposit matures?",
    blocks: [
      {
        title: "If you hold a Macquarie Digital Term Deposit",
        text: "On maturity, your Macquarie Digital Term Deposit will be closed and your investment amount plus any interest earned will be returned to your linked Macquarie Transaction or Savings Account. Rollovers are not available for this product.",
      },
      {
        title: "If you hold a Macquarie Term Deposit",
        text: "Before the maturity date of your Macquarie Term Deposit, you can provide maturity instructions via Macquarie Online Banking or the Macquarie Mobile Banking app.",
      },
      {
        bullets: [
          "Reinvest principal and interest",
          "Reinvest principal only",
          "Close your account and withdraw funds",
        ],
      },
      {
        text: "If you don't provide maturity instructions by the maturity date, your Macquarie Term Deposit funds will be automatically reinvested for the same term.",
      },
      {
        text: "After your term deposit has matured, you will have a grace period of 5 business days or 7 calendar days, whichever is longer, to make certain changes to your term deposit details or close your account and withdraw funds.",
      },
      {
        text: "After this time, if you don't update your maturity instructions, your term deposit funds will be reinvested and you will need to provide 31 days' notice to withdraw it.",
      },
      {
        text: "To find out more on how to provide maturity instructions, please see Viewing and managing term deposit maturity and instructions.",
      },
    ],
  },
  {
    question: "How do I fund my term deposit account?",
    blocks: [
      {
        title: "Macquarie Digital Term Deposit",
        bullets: [
          "All deposits are made by transfer from the selected Macquarie Transaction Account or Macquarie Savings Account on account opening.",
          "You can't add additional funds to your Macquarie Digital Term Deposit during your investment term.",
        ],
      },
      {
        title: "Macquarie Term Deposit",
        bullets: [
          "All deposits are made via direct debit from a nominated bank account established during the account opening process.",
          "Your term deposit will be funded overnight from the bank account nominated during the online application, and funds will appear in your account on the day after the Term Deposit has been opened.",
          "You can't add additional funds to your Macquarie Term Deposit during your investment term.",
        ],
      },
      {
        text: "Visit Help Centre for more information.",
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
      {
        title: "The objectives of the FCS are to:",
        bullets: [
          "Protect depositors of ADIs and claimants of general insurers from potential loss in the unlikely event of failure",
          "Provide depositors with prompt access to protected deposits",
          "Support the stability of the Australian financial system",
        ],
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
    href: "#faqs",
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
  "Transaction account",
  "Business savings account",
] as const;

export const additionalInformation = [
  "This information has been prepared by Macquarie Bank Limited AFSL and Australian Credit Licence 237502 (MBL) and does not take into account your objectives, financial situation or needs. You should consider whether it is appropriate for you. Lending criteria, fees and T&Cs apply.",
  "Government Guarantee: The Australian Government guarantees aggregated deposits with Australian authorised deposit-taking institutions, including Macquarie Bank, of up to $A250,000. Further information about the Government Guarantee can be obtained from the APRA website at www.fcs.gov.au.",
  "Apple, the Apple logo and iPhone are trademarks of Apple Inc, registered in the U.S. and other countries. App Store is a service mark of Apple Inc.",
  "Android, Google Pay, Google Chrome and the Google Logo are trademarks of Google LLC.",
];

export const footerPrimaryLinks = [
  "Macquarie Group",
  "Everyday banking",
  "Home loans",
  "Investing and super",
  "Business banking",
  "Private Bank",
];

export const footerSecondaryLinks = [
  "Download Macquarie App",
  "Important information",
  "Privacy and cookies",
  "Security and scams",
  "Resolve a complaint",
  "Financial assistance",
  "Financial Services Guide",
  "Social media",
  "Careers",
];

export const footerDisclaimer =
  "Except for Macquarie Bank Limited ABN 46 008 583 542 AFSL and Australian Credit Licence 237502 (MBL), any Macquarie entity referred to on this page is not an authorised deposit-taking institution for the purposes of the Banking Act 1959 (Cth). That entity's obligations do not represent deposits or other liabilities of MBL. Any investments are subject to investment risk including possible delays in repayment and loss of income and principal invested. MBL does not guarantee or otherwise provide assurance in respect of the obligations of that entity, unless noted otherwise.";
