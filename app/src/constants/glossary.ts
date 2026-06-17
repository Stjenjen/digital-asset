export type GlossaryEntry = {
  term: string;
  definition: string;
  category: 'cbdc' | 'stablecoin' | 'tokenisation' | 'interop' | 'general';
};

export const GLOSSARY: GlossaryEntry[] = [
  // Tech Models
  {
    term: 'Two-Tier',
    definition: 'The central bank issues CBDC to commercial banks (Tier 1), who then distribute it to consumers and businesses (Tier 2). The central bank never deals directly with the public. Most CBDCs use this model to preserve the role of commercial banks.',
    category: 'cbdc',
  },
  {
    term: 'Token-Based',
    definition: 'CBDC is held as a digital token, similar to physical cash. Ownership is proved by possessing a cryptographic key. Transactions are validated by verifying the token itself, not an account balance.',
    category: 'cbdc',
  },
  {
    term: 'Account-Based',
    definition: 'CBDC is held in an account linked to the holder\'s identity. Transactions require identity verification, similar to a traditional bank account.',
    category: 'cbdc',
  },
  {
    term: 'Hybrid',
    definition: 'Combines elements of both account-based and token-based models. May use tokens for transactions but accounts for identity and compliance.',
    category: 'cbdc',
  },
  {
    term: 'DLT',
    definition: 'Distributed Ledger Technology. A shared, decentralised database maintained across multiple nodes. Includes blockchain and other architectures. Used by many wholesale CBDC and tokenisation projects for settlement.',
    category: 'general',
  },
  // Privacy
  {
    term: 'Tiered Privacy',
    definition: 'Low-value transactions are anonymous (like cash), but larger transactions require identity verification. Most retail CBDCs propose this model to balance privacy with anti-money laundering requirements.',
    category: 'cbdc',
  },
  {
    term: 'Supervised Anonymity',
    definition: 'Transactions appear anonymous to other participants, but a designated authority (e.g. the central bank or a court) can de-anonymise transactions if legally required.',
    category: 'cbdc',
  },
  {
    term: 'Pseudonymous',
    definition: 'Transactions are linked to a pseudonym rather than a real identity. The pseudonym can potentially be traced back to a real person by authorities.',
    category: 'cbdc',
  },
  {
    term: 'Fully Traceable',
    definition: 'All transactions are fully visible to the issuing authority. No anonymity. Often used in wholesale CBDC between regulated institutions.',
    category: 'cbdc',
  },
  // Settlement
  {
    term: 'DvP',
    definition: 'Delivery versus Payment. A settlement mechanism where the transfer of a security (delivery) happens simultaneously with the transfer of funds (payment), eliminating settlement risk. Critical for tokenised bond and securities markets.',
    category: 'tokenisation',
  },
  {
    term: 'PvP',
    definition: 'Payment versus Payment. Both legs of a foreign exchange transaction settle simultaneously, eliminating the risk that one party pays but the other doesn\'t. Used in cross-border CBDC projects like mBridge.',
    category: 'interop',
  },
  {
    term: 'Atomic Settlement',
    definition: 'Both sides of a transaction complete at exactly the same moment — either both succeed or both fail. There is no window where one party has transferred value but the other hasn\'t. Enabled by smart contracts on DLT.',
    category: 'tokenisation',
  },
  {
    term: 'Programmable Settlement',
    definition: 'Settlement that executes automatically when predefined conditions are met, coded as smart contracts. For example: release payment when delivery is confirmed, or execute a trade at a specific time or price.',
    category: 'tokenisation',
  },
  // CBDC types
  {
    term: 'Retail CBDC',
    definition: 'Digital central bank money available to the general public — households and businesses. The digital equivalent of cash. Examples: e-CNY, Digital Euro, Digital Pound.',
    category: 'cbdc',
  },
  {
    term: 'Wholesale CBDC',
    definition: 'Digital central bank money restricted to financial institutions (banks, clearinghouses). Used for interbank settlement, securities settlement, and cross-border payments. Examples: Project Ubin+, DREX, SNB wCBDC on SDX.',
    category: 'cbdc',
  },
  // Stablecoins
  {
    term: 'Fiat-Backed',
    definition: 'A stablecoin backed 1:1 by fiat currency (e.g. USD, EUR) held in reserve. The most common and regulated type. Examples: USDC, EURC, XSGD.',
    category: 'stablecoin',
  },
  {
    term: 'Asset-Backed',
    definition: 'A stablecoin backed by a basket of assets such as government bonds, commodities, or other financial instruments. Regulated under MiCA as an Asset-Referenced Token (ART).',
    category: 'stablecoin',
  },
  {
    term: 'Algorithmic',
    definition: 'A stablecoin that maintains its peg through algorithmic mechanisms rather than direct asset backing. High risk — the collapse of TerraUSD (UST) in 2022 wiped out $40B and triggered global regulatory action.',
    category: 'stablecoin',
  },
  {
    term: 'Institutional Settlement Stablecoin',
    definition: 'A stablecoin designed specifically for use between regulated financial institutions — not retail consumers. Examples: JPM Coin (now Kinexys), Société Générale EUR CoinVertible (EURCV).',
    category: 'stablecoin',
  },
  {
    term: 'ART',
    definition: 'Asset-Referenced Token. MiCA\'s regulatory category for stablecoins backed by a basket of assets, currencies, or commodities. Subject to EBA supervision if deemed significant.',
    category: 'stablecoin',
  },
  {
    term: 'EMT',
    definition: 'E-Money Token. MiCA\'s regulatory category for stablecoins pegged to a single fiat currency (e.g. USDC, EURC). Must be issued by an authorised credit institution or e-money institution.',
    category: 'stablecoin',
  },
  // Interop
  {
    term: 'mCBDC',
    definition: 'Multi-CBDC. A platform or arrangement where multiple central banks issue their own CBDCs on a shared infrastructure, enabling direct cross-border transactions without correspondent banks. Example: mBridge.',
    category: 'interop',
  },
  {
    term: 'ISO 20022',
    definition: 'The global standard for financial messaging, replacing legacy SWIFT MT messages. Its rich structured data format is critical infrastructure for CBDC interoperability, automated compliance, and cross-border payment efficiency.',
    category: 'interop',
  },
  {
    term: 'Tokenised Deposit',
    definition: 'A commercial bank deposit represented as a digital token on a distributed ledger. Unlike stablecoins, tokenised deposits remain a liability of the bank and are covered by deposit insurance. Key concept in the Regulated Liability Network and Project Ensemble.',
    category: 'tokenisation',
  },
  {
    term: 'RWA',
    definition: 'Real-World Asset. Physical or traditional financial assets — property, bonds, commodities, invoices — represented as digital tokens on a blockchain. Enables fractional ownership and 24/7 settlement of traditionally illiquid assets.',
    category: 'tokenisation',
  },
  {
    term: 'AMM',
    definition: 'Automated Market Maker. A smart contract-based system that provides liquidity for trading without a traditional order book. Used in Project Mariana to enable FX settlement between three wholesale CBDCs without FX dealers.',
    category: 'interop',
  },
];

export const TERM_MAP: Record<string, string> = Object.fromEntries(
  GLOSSARY.map((e) => [e.term.toLowerCase(), e.definition])
);

export function getDefinition(term: string): string | undefined {
  return TERM_MAP[term.toLowerCase()];
}
