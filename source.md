# Source Registry

Canonical list of all sources used in the Digital Money Intelligence Platform.

## Workflow

- **Adding data:** Any new source used when updating TypeScript data files must be added here immediately, with today's date as Last Verified.
- **Checking for updates:** When asked to check for updates, go through this file section by section, visit each URL, check for new publications or data changes, and update the relevant `src/data/` files. Update the Last Verified date for each source checked.
- **Never remove** a source even if an initiative is concluded — this is a permanent record.

Source types: `official` (central bank / government) | `BIS` | `regulator` | `industry` | `academic`

---

## Section 1: CBDC

### Asia

| ID | Title | Publisher | Type | Jurisdiction | URL | Last Verified |
|---|---|---|---|---|---|---|
| `pboc-ecny-2021` | Progress of Research & Development of E-CNY in China | People's Bank of China | official | China | https://www.pbc.gov.cn/en/3688110/3688172/4157443/4293696/2021071614584691871.pdf | 2025-06-10 |
| `bis-ecny-wp` | Working Paper: e-CNY | BIS | BIS | China | https://www.bis.org/publ/work1062.htm | 2025-06-10 |
| `mas-orchid` | Project Orchid: Purpose Bound Money | Monetary Authority of Singapore | official | Singapore | https://www.mas.gov.sg/schemes-and-initiatives/project-orchid | 2025-06-10 |
| `mas-ubin` | Project Ubin: Central Bank Digital Money using Distributed Ledger Technology | Monetary Authority of Singapore | official | Singapore | https://www.mas.gov.sg/schemes-and-initiatives/project-ubin | 2025-06-10 |
| `mas-ubin-plus` | MAS Launches Project Ubin+ for Cross-border Foreign Currency Settlement | Monetary Authority of Singapore | official | Singapore | https://www.mas.gov.sg/news/media-releases/2022/mas-launches-project-ubin-plus | 2025-06-10 |
| `mas-sgd-testnet-2025` | MAS Announces Successful Live Trial of Settlement of Interbank Overnight Lending Using Wholesale CBDC | Monetary Authority of Singapore | official | Singapore | https://www.mas.gov.sg/news/media-releases/2025/mas-announces-successful-live-trial-of-settlement-of-interbank-overnight-lending | 2026-06-16 |
| `partior` | Blockchain Interbank Settlement Network | Partior | industry | Singapore | https://www.partior.com | 2025-06-10 |
| `hkma-ehkd-phase1` | e-HKD Pilot Programme Phase 1 Report | Hong Kong Monetary Authority | official | Hong Kong | https://www.hkma.gov.hk/media/eng/doc/key-information/press-release/2023/20231030e1a1.pdf | 2025-06-10 |
| `hkma-ensemble` | Project Ensemble | Hong Kong Monetary Authority | official | Hong Kong | https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/project-ensemble/ | 2025-06-10 |
| `boj-cbdc-pilot` | Bank of Japan CBDC Pilot Programme | Bank of Japan | official | Japan | https://www.boj.or.jp/en/paym/digital/dig220401a.htm | 2025-06-10 |
| `rbi-cbdc-concept` | Concept Note on Central Bank Digital Currency | Reserve Bank of India | official | India | https://www.rbi.org.in/Scripts/PublicationsView.aspx?id=21823 | 2025-06-10 |
| `rbi-annual-2024` | RBI Annual Report 2023-24: Digital Rupee | Reserve Bank of India | official | India | https://www.rbi.org.in/Scripts/AnnualReportPublications.aspx | 2025-06-10 |
| `rba-acacia` | Project Acacia | Reserve Bank of Australia | official | Australia | https://www.rba.gov.au/payments-and-infrastructure/cbdc/project-acacia.html | 2025-06-10 |
| `bot-cbdc` | Bank of Thailand Retail CBDC | Bank of Thailand | official | Thailand | https://www.bot.or.th/en/financial-innovation/digital-finance/CBDC.html | 2025-06-10 |
| `bis-dunbar` | Project Dunbar Report | BIS | BIS | Malaysia / Multi | https://www.bis.org/publ/othp47.htm | 2025-06-10 |
| `bok-cbdc` | Bank of Korea CBDC Research | Bank of Korea | official | South Korea | https://www.bok.or.kr/eng/bbs/E0000737/list.do?menuNo=400214 | 2025-06-10 |

### Europe

| ID | Title | Publisher | Type | Jurisdiction | URL | Last Verified |
|---|---|---|---|---|---|---|
| `ecb-digital-euro` | Digital Euro | European Central Bank | official | EU | https://www.ecb.europa.eu/paym/digital_euro/html/index.en.html | 2025-06-10 |
| `ec-digital-euro-leg` | Digital Euro Legislative Proposal | European Commission | official | EU | https://finance.ec.europa.eu/digital-finance/digital-euro_en | 2025-06-10 |
| `bdf-wholesale` | Wholesale CBDC Experiments | Banque de France | official | France | https://www.banque-france.fr/en/financial-stability/digital-finance/banque-de-france-and-central-bank-digital-currency | 2025-06-10 |
| `riksbank-ekrona` | E-krona | Sveriges Riksbank | official | Sweden | https://www.riksbank.se/en-gb/payments--cash/e-krona/ | 2025-06-10 |
| `bis-helvetia` | Project Helvetia | BIS | BIS | Switzerland | https://www.bis.org/publ/othp45.htm | 2025-06-10 |
| `snb-wholesale-cbdc` | Wholesale CBDC on SIX Digital Exchange | Swiss National Bank | official | Switzerland | https://www.snb.ch/en/the-snb/mandates-goals/payment-system/wholesale-cbdc | 2025-06-10 |
| `boe-digital-pound` | The Digital Pound | Bank of England | official | United Kingdom | https://www.bankofengland.co.uk/the-digital-pound | 2026-06-17 |
| `boe-digital-pound-design-phase` | Progress Update: Digital Pound Design Phase | Bank of England | official | United Kingdom | https://www.bankofengland.co.uk/the-digital-pound/progress-update-digital-pound-design-phase | 2026-06-17 |
| `boe-digital-pound-lab` | Digital Pound Lab | Bank of England | official | United Kingdom | https://www.bankofengland.co.uk/the-digital-pound/lab | 2026-06-17 |

### Americas

| ID | Title | Publisher | Type | Jurisdiction | URL | Last Verified |
|---|---|---|---|---|---|---|
| `fed-cbdc-2022` | Money and Payments: The U.S. Dollar in the Digital Age | Federal Reserve | official | United States | https://www.federalreserve.gov/publications/money-and-payments-the-us-dollar-in-the-digital-age.htm | 2025-06-10 |
| `bcb-drex` | DREX | Banco Central do Brasil | official | Brazil | https://www.bcb.gov.br/en/financialstability/drex_en | 2025-06-10 |
| `boc-digital-money` | Digital Money | Bank of Canada | official | Canada | https://www.bankofcanada.ca/digitalmoney/ | 2025-06-10 |

### Middle East & Others

| ID | Title | Publisher | Type | Jurisdiction | URL | Last Verified |
|---|---|---|---|---|---|---|
| `cbuae-digital-dirham` | Digital Dirham Strategy | Central Bank of UAE | official | UAE | https://www.centralbank.ae/en/digital-dirham | 2025-06-10 |
| `bis-aber` | Project Aber Report | BIS | BIS | Saudi Arabia / UAE | https://www.bis.org/publ/othp33.htm | 2025-06-10 |
| `sarb-khokha2` | Project Khokha 2 | South African Reserve Bank | official | South Africa | https://www.resbank.co.za/en/home/publications/publication-detail-pages/other-publications/2021/project-khokha-2 | 2025-06-10 |
| `norges-cbdc` | CBDC Research | Norges Bank | official | Norway | https://www.norges-bank.no/en/topics/payment-systems/cbdc/ | 2025-06-10 |

---

## Section 2: Stablecoins

| ID | Title | Publisher | Type | Jurisdiction | URL | Last Verified |
|---|---|---|---|---|---|---|
| `mas-stablecoin` | Stablecoin Regulatory Framework | Monetary Authority of Singapore | official | Singapore | https://www.mas.gov.sg/regulation/payments/stablecoin-regulatory-framework | 2025-06-10 |
| `hkma-stablecoin-consult` | Stablecoin Consultation Conclusions (July 2024) | Hong Kong Monetary Authority | official | Hong Kong | https://www.hkma.gov.hk/eng/news-and-media/press-releases/2024/07/20240717-4/ | 2025-06-10 |
| `hk-stablecoins-ordinance-cap656` | Stablecoins Ordinance (Cap. 656, Ord. 17 of 2025) | Hong Kong Government (elegislation.gov.hk) | official | Hong Kong | https://www.elegislation.gov.hk/hk/cap656 | 2026-06-10 |
| `hkma-stablecoin-regime` | Regulatory Regime for Stablecoin Issuers | Hong Kong Monetary Authority | official | Hong Kong | https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/stablecoin-issuers/ | 2026-06-10 |
| `hkma-stablecoin-bill-passage` | Government Welcomes Passage of Stablecoins Bill (May 2025) | Hong Kong Monetary Authority | official | Hong Kong | https://www.hkma.gov.hk/eng/news-and-media/press-releases/2025/05/20250521-3/ | 2026-06-10 |
| `hkma-stablecoin-guideline` | Guideline on Supervision of Licensed Stablecoin Issuers | Hong Kong Monetary Authority | official | Hong Kong | https://www.hkma.gov.hk/media/eng/doc/key-functions/ifc/stablecoin-issuers/Consultation_conclusions_on_the_Guideline_on_Supervision_of_Licensed_Stablecoin_Issuers.pdf | 2026-06-10 |
| `fsa-japan-stablecoin` | Stablecoin Framework | Financial Services Agency Japan | regulator | Japan | https://www.fsa.go.jp/en/news/2023/20230601.html | 2025-06-10 |
| `mica-regulation` | MiCA Regulation (EU) 2023/1114 | European Parliament | official | EU | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114 | 2025-06-10 |
| `eba-mica` | MiCA Stablecoin Supervision | European Banking Authority | regulator | EU | https://www.eba.europa.eu/regulation-and-policy/crypto-assets | 2025-06-10 |
| `fca-stablecoin` | Stablecoin Regulation | Financial Conduct Authority | regulator | United Kingdom | https://www.fca.org.uk/firms/cryptoassets/stablecoins | 2025-06-10 |
| `genius-act` | GENIUS Act | US Senate Banking Committee | official | United States | https://www.banking.senate.gov/newsroom/majority/scott-and-colleagues-introduce-the-genius-act | 2025-06-10 |
| `genius-act-enacted` | GENIUS Act — Full Text (Pub. L. 119-XX, signed July 18, 2025) | US Congress | official | United States | https://www.congress.gov/bill/119th-congress/senate-bill/1582/text | 2026-06-10 |
| `australia-digital-assets-bill` | Corporations Amendment (Digital Assets Framework) Bill 2025 (Royal Assent April 8, 2026) | Parliament of Australia | official | Australia | https://www.aph.gov.au/Parliamentary_Business/Bills_Legislation/bd/bd2526/26bd040 | 2026-06-10 |
| `fca-cp25-14` | FCA CP25/14 — Stablecoin Issuance and Cryptoasset Custody | Financial Conduct Authority | regulator | United Kingdom | https://www.fca.org.uk/publications/consultation-papers/cp25-14-stablecoin-issuance-cryptoasset-custody | 2026-06-10 |
| `japan-psa-amendment-2025` | Amendment Act to Payment Services Act (June 2025, effective June 2026) | Financial Services Agency Japan | official | Japan | https://www.fsa.go.jp/en/news/2025/ | 2026-06-10 |
| `nydfs-stablecoin` | Stablecoin Guidance | New York Department of Financial Services | regulator | United States | https://www.dfs.ny.gov/guidance/guidance_stablecoins | 2025-06-10 |
| `bcb-resolution-87` | BCB Resolution 87 — Virtual Asset Service Providers | Banco Central do Brasil | official | Brazil | https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolução BCB&numero=87 | 2025-06-10 |
| `brazil-virtual-assets-act` | Law 14,478/2022 — Virtual Assets Act | Government of Brazil | official | Brazil | https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14478.htm | 2025-06-10 |
| `cbuae-ptsr` | CBUAE Payment Token Services Regulation | Central Bank of UAE | official | UAE | https://www.centralbank.ae/en/payment-token-services-regulation | 2025-06-10 |
| `vara-framework` | VARA Virtual Assets Regulatory Framework | Virtual Assets Regulatory Authority (Dubai) | regulator | UAE | https://www.vara.ae/en/regulatory-framework/ | 2025-06-10 |
| `finma-token-guidelines` | FINMA Guidelines on ICOs and Token Classification | FINMA | regulator | Switzerland | https://www.finma.ch/en/news/2019/03/20190326-mm-ico-wegleitung/ | 2025-06-10 |
| `switzerland-dlt-act` | Federal Act on the Adaptation of Federal Law to Developments in Distributed Ledger Technology (DLT Act) | Swiss Federal Council | official | Switzerland | https://www.fedlex.admin.ch/eli/cc/2021/33/en | 2025-06-10 |
| `australia-crypto-framework` | Australian Treasury — Crypto Asset Framework Consultation | Australian Treasury | official | Australia | https://treasury.gov.au/consultation/c2023-341659 | 2025-06-10 |
| `asic-crypto-guidance` | ASIC Crypto Asset Guidance | Australian Securities and Investments Commission | regulator | Australia | https://asic.gov.au/regulatory-resources/digital-transformation/crypto-assets/ | 2025-06-10 |
| `mas-psa` | Payment Services Act 2019 (amended 2023) | Monetary Authority of Singapore | official | Singapore | https://www.mas.gov.sg/regulation/acts/payment-services-act | 2025-06-10 |
| `australia-payment-systems-act` | Payment Systems (Regulation) Act 1998 | Australian Government | official | Australia | https://www.legislation.gov.au/Details/C2004A05132 | 2025-06-10 |
| `australia-corporations-act` | Corporations Act 2001 | Australian Government | official | Australia | https://www.legislation.gov.au/Details/C2023C00207 | 2025-06-10 |
| `swiss-banking-act` | Swiss Banking Act — FINMA Regulations Overview | FINMA | regulator | Switzerland | https://www.finma.ch/en/regulation/overview-of-regulations/acts/ | 2025-06-10 |
| `swiss-amla` | Anti-Money Laundering Act (AMLA) | Swiss Federal Council | official | Switzerland | https://www.fedlex.admin.ch/eli/cc/1998/892_892_892/en | 2025-06-10 |
| `uk-fsma-2023` | Financial Services and Markets Act 2023 | UK Parliament | official | United Kingdom | https://www.legislation.gov.uk/ukpga/2023/29/contents | 2025-06-10 |
| `uk-psr-stablecoin` | PSR Response to HM Treasury Stablecoin Consultation | Payment Systems Regulator | regulator | United Kingdom | https://www.psr.org.uk/publications/general/psr-response-hm-treasury-consultation-regulatory-approach-cryptoassets/ | 2025-06-10 |
| `us-stable-act` | STABLE Act (House, 2025) | US House Financial Services Committee | official | United States | https://financialservices.house.gov/news/documentsingle.aspx?DocumentID=409721 | 2025-06-10 |

---

## Section 3: Tokenisation

| ID | Title | Publisher | Type | Jurisdiction | URL | Last Verified |
|---|---|---|---|---|---|---|
| `mas-guardian` | Project Guardian | Monetary Authority of Singapore | official | Singapore | https://www.mas.gov.sg/schemes-and-initiatives/project-guardian | 2025-06-10 |
| `mas-guardian-report-2023` | Project Guardian Industry Report 2023 | Monetary Authority of Singapore | official | Singapore | https://www.mas.gov.sg/news/media-releases/2023/mas-releases-project-guardian-industry-report | 2025-06-10 |
| `hkma-ensemble-tokenisation` | Project Ensemble | Hong Kong Monetary Authority | official | Hong Kong | https://www.hkma.gov.hk/eng/key-functions/international-financial-centre/fintech/project-ensemble/ | 2025-06-10 |
| `ecb-dlt-settlement` | Eurosystem Exploratory Work on DLT Settlement | European Central Bank | official | EU | https://www.ecb.europa.eu/paym/target/target2/explor-work/html/index.en.html | 2025-06-10 |
| `franklin-fobxx` | Franklin OnChain US Government Money Fund (FOBXX) | Franklin Templeton | industry | United States | https://www.franklintempleton.com/strategies/franklin-onchain-us-government-money-fund | 2025-06-10 |
| `jpmorgan-kinexys` | Kinexys by JPMorgan | JPMorgan Chase | industry | United States | https://www.jpmorgan.com/onyx/kinexys | 2025-06-10 |
| `rln-uk` | Regulated Liability Network UK Experiment Report | UK Finance | industry | United Kingdom | https://www.ukfinance.org.uk/system/files/2023-11/Regulated%20Liability%20Network%20-%20UK%20Experiment%20Report.pdf | 2025-06-10 |

---

## Section 4: Interoperability

| ID | Title | Publisher | Type | Jurisdiction | URL | Last Verified |
|---|---|---|---|---|---|---|
| `bis-mbridge` | Project mBridge | BIS Innovation Hub | BIS | Multi (China, UAE, HK, Thailand) | https://www.bis.org/about/bisih/topics/cbdc/mbridge.htm | 2025-06-10 |
| `bis-nexus` | Project Nexus | BIS Innovation Hub | BIS | Multi (SG, IN, MY, TH, PH) | https://www.bis.org/about/bisih/topics/fmis/nexus.htm | 2026-06-17 — **removed from platform** (not a CBDC project; connects instant payment systems only) |
| `bis-dunbar-interop` | Project Dunbar Report | BIS | BIS | Multi (AU, SG, ZA, MY) | https://www.bis.org/publ/othp47.htm | 2025-06-10 |
| `bis-mariana` | Project Mariana Report | BIS | BIS | Multi (CH, FR, SG) | https://www.bis.org/publ/othp75.htm | 2025-06-10 |
| `bis-agora` | Project Agorá | BIS Innovation Hub | BIS | Multi | https://www.bis.org/about/bisih/topics/fmis/agora.htm | 2025-06-10 |
| `swift-iso20022` | ISO 20022 Programme | SWIFT | industry | Global | https://www.swift.com/our-solutions/interfaces-and-integration/iso-20022 | 2025-06-10 |

---

*Registry maintained by the Digital Money Intelligence Platform. Last updated: 2026-06-17.*
