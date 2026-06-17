export type AssetSection = {
  id: string;
  title: string;
  lead: string;
  body: string[];
  examples: string[];
  trackerHref?: string;
  trackerLabel?: string;
};

export type SubSection = {
  id: string;
  title: string;
  body: string[];
  examples: string[];
};

export type AssetSectionWithSubs = AssetSection & {
  subsections?: SubSection[];
};

export type ComparisonRow = {
  asset: string;
  issuer: string;
  backedBy: string;
  whoHoldsIt: string;
  finality: string;
  regulated: string;
  keyRisk: string;
};

export const EXPLAINER_SECTIONS: AssetSectionWithSubs[] = [
  {
    id: 'wcbdc',
    title: 'Wholesale CBDC (wCBDC)',
    lead: 'Central bank money — the safest form of money — made available digitally to banks and financial institutions for settling large transactions instantly.',
    body: [
      'A wholesale CBDC is a digital form of central bank reserves. Unlike physical reserves held at a central bank, a wCBDC can be programmed, transferred on a distributed ledger, and settled atomically — meaning both sides of a transaction complete at exactly the same moment. This eliminates the settlement risk that exists in today\'s financial system, where there is always a window between when a payment is sent and when it is finally received.',
      'Today, banks settle large transactions through systems like RTGS (Real-Time Gross Settlement). Wholesale CBDCs aim to supercharge this by adding programmability — for example, automatically releasing payment for a bond the instant delivery is confirmed (Delivery versus Payment, or DvP), without any manual steps or delay.',
      'Wholesale CBDCs are not intended for the public. They operate between regulated institutions — central banks, commercial banks, and clearinghouses. Because both sides are known, regulated entities, privacy concerns are much less acute than for retail CBDCs. Most wholesale CBDC experiments operate on permissioned distributed ledgers, meaning only authorised participants can join the network.',
      'The most ambitious wholesale CBDC projects go cross-border: multiple central banks each issue their own wCBDC on a shared platform, so that banks in different countries can settle foreign exchange or international payments directly — without routing through correspondent banks, which adds cost, time, and counterparty risk.',
    ],
    examples: ['mBridge', 'Project Ubin+', 'DREX', 'SNB wCBDC on SDX', 'Project Agorá'],
    trackerHref: '/cbdc',
    trackerLabel: 'CBDC tracker',
  },
  {
    id: 'retail-cbdc',
    title: 'Retail CBDC',
    lead: 'The digital equivalent of cash — central bank money issued directly (or via banks) to the general public.',
    body: [
      'A retail CBDC is a digital currency issued by a central bank and made available to households and businesses — just like banknotes, but in digital form. Unlike a bank account balance, which is a liability of a commercial bank, a retail CBDC is a direct liability of the central bank. This means it carries the same creditworthiness as physical cash: it cannot be defaulted on.',
      'Most retail CBDC designs use a two-tier model. The central bank issues the CBDC to commercial banks (Tier 1), who then distribute it to consumers through wallets and apps (Tier 2). This preserves the role of the existing banking system while giving the central bank a new monetary tool. The central bank never deals directly with every citizen.',
      'Privacy is the central policy debate. Physical cash is anonymous — no record is kept of who spent it where. A digital currency could, in theory, allow the issuing authority to see every transaction. Most jurisdictions proposing retail CBDCs have committed to tiered privacy: small transactions would be treated like cash (low or no data collected), while larger transactions would require identity checks as required by anti-money laundering rules.',
      'Concerns about financial disintermediation are real: if citizens can hold risk-free CBDC directly at the central bank, they might pull deposits from commercial banks during a crisis, amplifying bank runs. To guard against this, many proposals include holding limits (e.g. €3,000 cap for the Digital Euro) and non-remuneration (CBDCs that pay no interest).',
    ],
    examples: ['e-CNY (China)', 'Digital Euro', 'Digital Pound', 'e-Naira', 'Sand Dollar (Bahamas)'],
    trackerHref: '/cbdc',
    trackerLabel: 'CBDC tracker',
  },
  {
    id: 'stablecoins',
    title: 'Stablecoins',
    lead: 'Privately issued digital tokens designed to maintain a stable value — usually pegged to a fiat currency like the US dollar.',
    body: [
      'A stablecoin is a cryptocurrency designed to minimise price volatility by pegging its value to a reference asset, most commonly the US dollar. Unlike bitcoin or ether, which fluctuate wildly in value, a stablecoin aims to be worth exactly $1 (or €1, or some other fixed amount) at all times. This makes them practical for payments, savings, and as a settlement medium in decentralised finance.',
      'Stablecoins are issued by private entities — companies or protocols — not central banks. The regulatory treatment of stablecoins is evolving rapidly: the EU\'s MiCA regulation (fully in force from 2024) categorises them as either E-Money Tokens (EMTs, pegged to a single currency) or Asset-Referenced Tokens (ARTs, backed by a basket). The US GENIUS Act (advancing through Congress in 2025) would require issuers to hold 1:1 reserves in cash or short-term Treasuries.',
    ],
    examples: [],
    trackerHref: '/stablecoins',
    trackerLabel: 'Stablecoins tracker',
    subsections: [
      {
        id: 'fiat-backed',
        title: 'Fiat-Backed',
        body: [
          'The most common and regulated type. Each token is backed 1:1 by fiat currency (or highly liquid equivalents like short-term government bonds) held in reserve by the issuer. When you buy 1 USDC, Circle holds $1 in reserve; when you redeem it, they give you $1 back. Auditors verify the reserves regularly.',
          'Fiat-backed stablecoins are the workhorses of crypto markets — used for trading, remittances, and DeFi. They are the primary target of stablecoin regulation because their stability depends entirely on the trustworthiness of the issuer and the quality of the reserve.',
        ],
        examples: ['USDC', 'USDT (Tether)', 'EURC', 'XSGD', 'PYUSD'],
      },
      {
        id: 'asset-backed',
        title: 'Asset-Backed',
        body: [
          'Backed by a basket of assets — government bonds, commodities, or other currencies — rather than a single fiat currency. Designed to be more resilient than a single-currency peg, but more complex to regulate and harder for consumers to understand. Under MiCA, these are classified as Asset-Referenced Tokens (ARTs) and face stricter rules.',
        ],
        examples: ['Libra/Diem (discontinued)', 'MiCA ARTs'],
      },
      {
        id: 'algorithmic',
        title: 'Algorithmic',
        body: [
          'Attempts to maintain a peg through supply-and-demand algorithms rather than direct asset backing. When the price rises above $1, new tokens are minted; when it falls below, tokens are burned or incentives encourage holders to buy. These mechanisms can enter a "death spiral" if confidence collapses.',
          'The collapse of TerraUSD (UST) in May 2022 wiped out approximately $40 billion in value in days and triggered regulatory action globally. Pure algorithmic stablecoins are now effectively banned under MiCA. Most jurisdictions treat them as unacceptably high risk.',
        ],
        examples: ['TerraUSD / UST (collapsed 2022)', 'DAI (partially algorithmic)'],
      },
      {
        id: 'institutional',
        title: 'Institutional Settlement Stablecoins',
        body: [
          'A distinct category of stablecoin designed not for retail consumers, but for settlement between regulated financial institutions. These are essentially bank-issued stablecoins for internal or interbank use — combining the 24/7, programmable settlement properties of stablecoins with the regulated, KYC\'d environment of wholesale banking.',
          'Unlike retail stablecoins, institutional settlement stablecoins are typically permissioned — only approved counterparties can hold or transact them. They blur the line between stablecoins and tokenised deposits.',
        ],
        examples: ['JPM Coin / Kinexys (JPMorgan)', 'EUR CoinVertible / EURCV (Société Générale)', 'USDF Consortium'],
      },
    ],
  },
  {
    id: 'tokenised-deposits',
    title: 'Tokenised Deposits',
    lead: 'A commercial bank deposit — the money in your bank account — represented as a programmable digital token on a distributed ledger.',
    body: [
      'A tokenised deposit is, in legal terms, the same as a regular bank account balance: it is a liability of the commercial bank, not the central bank. The difference is the form: instead of an entry in the bank\'s internal database, the deposit is represented as a token on a distributed ledger that can be transferred, used in smart contracts, and settled atomically.',
      'This distinction matters enormously. Unlike a stablecoin — which is issued by a private company that may or may not hold good-quality reserves — a tokenised deposit is covered by the same deposit insurance schemes that protect regular bank accounts (e.g. up to £85,000 in the UK under FSCS, €100,000 in the EU under DGSD). It inherits the regulated status of the bank that issued it.',
      'Tokenised deposits are designed to be the "cash leg" of tokenised asset transactions: when a bank settles the purchase of a tokenised bond, the payment is made in tokenised deposits, enabling true atomic Delivery versus Payment (DvP) — the bond token and the cash token swap simultaneously, with no settlement risk.',
      'The key concept is that tokenised deposits do not represent new money creation — they are simply a new, more efficient representation of existing commercial bank money. The Regulated Liability Network (RLN) in the UK and Project Ensemble in Hong Kong are the leading experiments in this space.',
    ],
    examples: ['Regulated Liability Network (UK)', 'Project Ensemble (HKMA)', 'Kinexys Digital Payments', 'Project Agorá'],
    trackerHref: '/tokenisation',
    trackerLabel: 'Tokenisation tracker',
  },
  {
    id: 'tokenised-rwas',
    title: 'Tokenised Real-World Assets (RWAs)',
    lead: 'Traditional assets — bonds, funds, real estate, commodities — represented as digital tokens on a blockchain, enabling fractional ownership and near-instant settlement.',
    body: [
      'Tokenisation converts the ownership rights of a real-world asset into a digital token on a distributed ledger. The token represents a legal claim on the underlying asset — a fraction of a bond, a share in a property fund, a commodity contract — and can be transferred digitally with the same finality as cryptocurrency.',
      'The operational benefits are significant. Government bond settlement, which typically takes T+2 days in traditional markets, can be reduced to near-instant when both the bond and the cash payment are tokenised on the same ledger. This atomic Delivery versus Payment eliminates settlement risk entirely. For less liquid assets — like real estate or private credit — tokenisation also enables fractional ownership, so a €1 million commercial property can be divided into 1,000 tokens of €1,000 each, opening investment to a broader range of investors.',
      'The most active area is tokenised government bonds, driven by central bank and BIS experiments: Project Guardian in Singapore has tokenised Singapore Government Securities and US Treasuries; the Swiss National Bank has enabled settlement of tokenised bonds against wCBDC on the SDX exchange; Brazil\'s DREX is being built specifically around tokenised federal bonds as the backbone asset.',
      'Regulatory treatment remains in flux. Some tokenised securities fall under existing securities law (and must be issued via regulated entities like SPVs). Others sit in a grey area, especially when tokenised on public blockchains without a clear legal wrapper. The EU is trialling a DLT Pilot Regime to allow regulated trading of tokenised securities under modified rules.',
    ],
    examples: ['Project Guardian (MAS)', 'SDX Bond Settlement (SIX)', 'DREX tokenised federal bonds', 'BlackRock BUIDL fund', 'Franklin OnChain US Govt Money Fund'],
    trackerHref: '/tokenisation',
    trackerLabel: 'Tokenisation tracker',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    asset: 'Wholesale CBDC',
    issuer: 'Central bank',
    backedBy: 'Central bank (risk-free)',
    whoHoldsIt: 'Banks & financial institutions',
    finality: 'Immediate / atomic',
    regulated: 'Yes — central bank law',
    keyRisk: 'Adoption & interop complexity',
  },
  {
    asset: 'Retail CBDC',
    issuer: 'Central bank',
    backedBy: 'Central bank (risk-free)',
    whoHoldsIt: 'General public',
    finality: 'Immediate',
    regulated: 'Yes — central bank law',
    keyRisk: 'Privacy & bank disintermediation',
  },
  {
    asset: 'Fiat-backed Stablecoin',
    issuer: 'Private company',
    backedBy: 'Fiat reserves / T-bills',
    whoHoldsIt: 'Anyone',
    finality: 'Blockchain confirmation',
    regulated: 'MiCA (EU), GENIUS Act (US)',
    keyRisk: 'Reserve quality & issuer solvency',
  },
  {
    asset: 'Tokenised Deposit',
    issuer: 'Commercial bank',
    backedBy: 'Bank deposit (insured)',
    whoHoldsIt: 'Institutions (primarily)',
    finality: 'Atomic (DLT)',
    regulated: 'Yes — banking law',
    keyRisk: 'Bank credit risk (as per deposits)',
  },
  {
    asset: 'Tokenised RWA',
    issuer: 'Issuer / SPV',
    backedBy: 'Underlying asset',
    whoHoldsIt: 'Institutions & accredited investors',
    finality: 'DvP atomic',
    regulated: 'Evolving — securities / pilot regimes',
    keyRisk: 'Legal wrapper & liquidity',
  },
];
