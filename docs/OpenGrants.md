---
sidebar_position: 3
description: Breif intro to OpenGrants
title: OpenGrants 
author: Rashmi V Abbigeri
---

# Introducing OpenGrants

OpenGrants by DAOstar is a composable grants data layer for Web3 Grant Funding Data.

1. We help you streamline the process of grants reporting
2. We collect the grant data , standardize it and create datasets for data analysis. 
3. We enable cross-grant system analysis though our standardized datasets


At its core, OpenGrants is built on DAOIP-5, the grant metadata specification and integrates with the Open Source Observer (OSO) to deliver public-good infrastructure for grant ecosystems.

### Goals

* Standardize grant data from diverse sources (Airtables, APIs, spreadsheets, etc.)
* Enable comparitive grant analyitcs to provide ecosystem insights.
* Build AI-ready datasets to support research, governance, and decision-making
* Promote transparent, interoperable grant ecosystems

### What OpenGrants Infra Offers

1. **DAOIP-5 Specification**

   * Open metadata standard for grants
   * Structured as JSON-lD for machine-readability and cross-ecosystem use
   * Supports extensions for custom metadata
   * Maintained here: [DAOIP-5 Spec](https://github.com/metagov/daostar/blob/main/DAOIPs/daoip-5.md)   , [DAOIP-5 Extension](https://github.com/metagov/daostar/blob/main/DAOIPs/x-daoip-5.md)

2. **Gateway API** (For Live Data)

   * Unified access to DAOIP-5 formatted grant data
   * Preview here: [grants.daostar.org](https://grants.daostar.org)
   * Query by grant system, grant pool

3. **Static Grant Reporting Support**

   * Raw files (Airtable, Sheets, CSVs) → DAOIP-5 JSON
   * Stored in `oss-funding/daoip-5/json`
        https://github.com/metagov/oss-funding/tree/main/daoip-5/json
   * API access at [daoip5.daostar.org](https://daoip5.daostar.org)

4. **Grants Datalake** (For Historical Data)
    - Archive Web3 Funding Data in OSO's Datalake
    - [Set up API Crawlers and Static data Storage](https://docs.opensource.observer/docs/contribute-data/
    - Create MART models of  DAOIP-5 grant data


4. **Analytics Dashboard (In progress)**

   * Overview of funding trends, domain distributions analysis, grant system funding stats like unique funded projects vs repeat funded projects
   * Cross-ecosystem comparisons
   * Stack: Gateway API + OSO + DAOIP-5 marts + Karma GAP Project UIDs

---

### Current Status

We’ve done full ingestion + structuring for:

* **Giveth** (API Access)
* **Octant** (API Access)
* **Stellar Community Fund** (Rounds 1 -36)
* **Celo Public Goods** (5 rounds)
* **Optimism (partial)**
* **Arbitrum (STIP-1)**
* **KarmaGAP** - All application projects are matched with KarmaGAP Project and matched project's UID is added to extension field `x-karmagap-uid` for project identity and impact reporting reference


### OpenGrants Partnership Roles

| Type                    | Financial Support | Data Support         | Data Sharing Scope            | Use Cases                                 |
| ----------------------- | ----------------- | -------------------- | ----------------------------- | ----------------------------------------- |
| Consumer                | No                | No                   | Uses public DAOIP-5 data only | Ecosystem research, analytics             |
| Sponsor                 | Yes               | No                   | No data shared                | Funds operations, public goods support    |
| Data Partner            | No                | Full                 | All grants & fields (public)  | Open data advocacy and insights           |
| Strategic Partner       | Yes               | Full                 | All grants & fields (public)  | Full transparency, co-branded initiatives |
| Supportive Data Partner | Optional          | Conditional, Partial | Partial sharing allowed       | Privacy-conscious programs                |

---

### Our Approach to Data Integration

### Formats of Data Availablity

1. CSV Files
2. JSON Files
3. Airtable 
4. Custom API
5. Third Party Grant Manager


#### Type 1: API Integration

Grant systems that provide us direct API access to all their grant data. We fetch and transform this data to DAOIP-5 format in real-time. This is integrated to Grants Metadata API and OSO Data pipelines.
Access DAOIP-5 Data: grants.daostar.org

- Giveth
- Octant

#### Type 2: Data Integration
Grant systems that share their data in CSV/JSON format with consent to translate to DAOIP-5. Static Data available at daoip5.daostar.org
This is currently stored in Github Repo as JSON formatted files and further indexed into OSO datalake. Static files being indexed into datalake is still being worked on.

- Stellar community fund
- Celo

#### Type 3: Endpoint-Based Integration

Grant systems that provide their own DAOIP-5 compliant API endpoint. We monitor.
- [Questbook](https://api.questbook.app/daoip-5)


---

### OpenGrants x OSO: Infra Mapping

Everything runs on OSO data infra, follows clean ELT patterns:

1. **Ingest** (via Dagster) **[Infra Setup In Progress]**

   * API / CSV / GraphQL / JSON → BigQuery
      https://dagster.opensource.observer/assets/giveth/qf_rounds

2. **Stage** (SQLMesh)

   * Clean + normalize schemas
   * Add ecosystem + round metadata

3. **Model → Mart**

   * DAOIP-5 compliant models
   * Served via Gateway API / dashboards

#### With OpenGrants you can:

* Structure grant rounds as per DAOIP-5 within the same domain
* Combine grant distributions from different mechanisms
* Surface project overlaps
* Add outcome metadata by extending DAOIP-5
* Compare funding impact

### Summary

Many of the Registry and Impact Reporting features are things we already do: we structure grants data using DAOIP-5, support ingestion from APIs, CSVs, and custom endpoints, and expose the data via an unified API at grants.daostar.org. We’re already aggregating grants across ecosystems like Giveth, Octant, SCF, Celo, and Optimism. We also match projects to KarmaGAP UIDs for cross-system identity and downstream impact attribution.

Some features we don’t yet do, but could: we can support structured outcome submissions and can work with domain leads or ecosystem partners to extend DAOIP-5 to include reporting fields. DAOstar does not currently build native AI-based grant reviewers (e.g., Checker 2), but we can structure data in a way that makes it easy for tools like that to plug in.

What we probably won’t do: we don’t aim to build frontend dashboards for grantees to submit or edit data we leave that to the grant platforms themselves. We dont intend to clone KarmaGAP / QuestBook/ Charmverse or to replace grant software UX .

We intend to streamline grant reporting for all grant systems [supporting various privacy levels](https://hackmd.io/Nx2oJgkRSnqZc7oxC06S3w?view#Privacy-Configuration-Matrix) , provide grant funding analysis and also provide impact reporting in the future. Once we reach Data readiness for AI, we would enable AI driven grant analysis powered by our datalake, on our dashboard.