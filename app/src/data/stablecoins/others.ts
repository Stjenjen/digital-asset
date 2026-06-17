import type { StablecoinJurisdiction } from '@/types/stablecoins';

export const othersStablecoins: StablecoinJurisdiction[] = [
  {
    id: 'uae-stablecoins',
    jurisdiction: 'uae',
    regulation: {
      status: 'licensing-regime-live',
      existingFramework: 'Central Bank of UAE (CBUAE) Payment Token Services Regulation (PTSR) issued June 2024. Covers "Dirham-Referenced Payment Tokens" (AED-pegged) and "Foreign Referenced Payment Tokens" (e.g. USD-pegged). The PTSR is one of the most comprehensive stablecoin licensing regimes in the Middle East.',
      proposedLegislation: null,
      licensingRequirements: 'Payment Token Service Provider (PTSP) licence required from CBUAE for issuers and service providers. Onshore UAE incorporation required for AED-pegged issuers. Minimum capital: AED 50 million for issuers.',
      reserveRequirements: '100% reserve backing for Dirham-Referenced Tokens in AED cash or Central Bank of UAE reserves. Foreign Referenced Tokens: 100% in corresponding foreign currency assets (HQLA).',
      redemptionRequirements: 'Redemption at par on demand within 1 business day.',
      prudentialStandards: 'Ongoing capital requirements; liquidity stress testing; annual independent audit.',
      consumerProtection: 'Mandatory disclosure of reserve composition and risks. Segregation of client assets. No yield on payment tokens.',
      keyLegislation: [
        { title: 'CBUAE Payment Token Services Regulation (June 2024)', url: 'https://www.centralbank.ae/en/payment-token-services-regulation' },
        { title: 'VARA Virtual Assets Regulatory Framework (Dubai)', url: 'https://www.vara.ae/en/regulatory-framework/' },
      ],
    },
    regulatoryAuthorities: {
      centralBank: 'Central Bank of UAE (CBUAE)',
      financialRegulator: 'Central Bank of UAE (CBUAE)',
      securitiesRegulator: 'Securities and Commodities Authority (SCA)',
      other: ['Virtual Assets Regulatory Authority (VARA) — Dubai-specific', 'ADGM Financial Services Regulatory Authority (ADGM/FSRA) — Abu Dhabi'],
    },
    categories: ['fiat-backed', 'institutional-settlement'],
    issuers: [
      {
        name: 'AE Coin',
        coins: ['AEC'],
        category: 'fiat-backed',
        jurisdiction: 'uae',
        regulatoryStatus: 'CBUAE PTSR approved — first licensed AED-pegged stablecoin',
        reserveModel: '100% AED reserves held at CBUAE-approved banks',
        strategicImportance: 'high',
        partnerships: ['Central Bank of UAE', 'local commercial banks'],
        notes: 'AE Coin received the first CBUAE approval under the PTSR framework (2024). Designed for domestic retail and cross-border payments within the GCC.',
      },
      {
        name: 'Tether (USDT)',
        coins: ['USDT'],
        category: 'fiat-backed',
        jurisdiction: 'uae',
        regulatoryStatus: 'Tether has relocated headquarters to Dubai; seeking VARA licence',
        reserveModel: 'US Treasuries and cash; reserve transparency improved post-2021',
        strategicImportance: 'high',
        partnerships: ['Bitfinex', 'various UAE exchanges'],
        notes: 'UAE / Dubai has become a strategic base for Tether. USDT is the dominant stablecoin by trading volume in the MENA region.',
      },
    ],
    marketDevelopment: {
      bankingSectorParticipation: 'Major UAE banks (Emirates NBD, First Abu Dhabi Bank) exploring stablecoin and tokenised deposit infrastructure. ADGM is a hub for digital asset innovation with its own regulatory sandbox.',
      paymentEcosystemAdoption: 'Growing rapidly. Cross-border payment corridors to India, South Asia, and East Africa are key use cases. UAE is a major remittance hub ($45B+ outflows annually).',
      institutionalUsage: 'Institutional adoption accelerating. mBridge (cross-border CBDC) and stablecoin infrastructure viewed as complementary. DIFC and ADGM attracting global stablecoin issuers.',
    },
    relationshipToCBDC: 'UAE is pursuing both CBDC (Digital Dirham via CBUAE) and stablecoin licensing in parallel. The PTSR explicitly distinguishes payment tokens from the Digital Dirham. AED-pegged payment tokens are viewed as a bridge mechanism until the Digital Dirham reaches full deployment.',
    lastUpdated: '2025-06-10',
    sources: [
      { title: 'CBUAE Payment Token Services Regulation', url: 'https://www.centralbank.ae/en/payment-token-services-regulation', publisher: 'Central Bank of UAE', type: 'official' },
      { title: 'VARA Virtual Assets Regulatory Framework', url: 'https://www.vara.ae/en/regulatory-framework/', publisher: 'Virtual Assets Regulatory Authority (Dubai)', type: 'official' },
    ],
  },
];
