---
sidebar_position: 2
title: The DAO API
---

### Overview of DAOIP-2: Common Interfaces for DAOs

DAOIP-2 establishes a standard for Decentralized Autonomous Organizations (DAOs) to publish metadata through a `daoURI`, enabling consistent access to both on-chain and off-chain data about the DAO. This standard provides a unified way to represent DAOs, improving discoverability, governance transparency, and interoperability with tools and platforms.

### Key Components of DAOIP-2

1. **The `daoURI`**:
   - A `daoURI` is a Uniform Resource Identifier (URI) that points to a JSON-LD object containing structured metadata about a DAO.
   - The metadata includes information such as:
     - DAO description.
     - Member details (`membersURI`).
     - Proposal data (`proposalsURI`).
     - Activity logs (`activityLogURI`).
     - Governance rules (`governanceURI`).
     - Associated smart contracts (`contractsURI`).

2. **JSON-LD Schemas**:
   - DAOIP-2 uses JSON-LD (Linked Data) schemas to ensure data is structured, machine-readable, and extensible for multi-chain or off-chain use cases.
   - These schemas support both minimal metadata (e.g., for simpler DAOs) and complex relationships (e.g., subDAOs, cross-chain setups).

3. **Flexibility in Adoption**:
   - DAOs can implement `daoURI` directly in their governance smart contracts or through ENS or EAS.
   - The standard supports both static and dynamically generated JSON data, giving DAOs flexibility in how they publish their metadata.


### Benefits of DAOIP-2

- **Enhanced Discoverability**:
  - Platforms like DeepDAO, Snapshot, or Tally can easily find and display consistent information about DAOs, increasing their visibility in the ecosystem.
  
- **Improved Governance Transparency**:
  - By standardizing how DAOs share data about members, proposals, and activity logs, DAOIP-2 enables more transparent decision-making processes.

- **Tool Interoperability**:
  - The `daoURI` allows governance tools, analytics platforms, and ecosystem services to work seamlessly with any DAO adopting the standard.

- **Multi-Chain Support**:
  - DAOIP-2 is designed to work across different blockchains, enhancing interoperability in a fragmented ecosystem.

### Use Cases

1. **Member Lists**:
   - A DAO publishes a `membersURI` containing a list of active members or addresses, which can be used for voting eligibility or community engagement.

2. **Proposal Metadata**:
   - The `proposalsURI` includes details about active and past proposals, enabling participants to track decision-making processes.

3. **Activity Logs**:
   - The `activityLogURI` tracks member interactions, such as votes, discussions, or disputes, offering an auditable history of DAO actions.

4. **Governance Rules**:
   - A `governanceURI` links to a Markdown file outlining the DAO’s governance processes, enhancing transparency and trust.

### Example Adoption Workflow

1. **Define Metadata**:
   - The DAO collects information about its members, proposals, governance rules, and related contracts.

2. **Generate a `daoURI`**:
   - The DAO uses the DAOIP-2 JSON-LD schema to format this metadata and publishes it to a hosting platform like IPFS or GitHub.

3. **Implement in Contracts**:
   - The DAO updates its governance contract or deploys a registration contract to point to the `daoURI`.

4. **Enable Ecosystem Access**:
   - Tools and platforms automatically fetch the `daoURI` to display the DAO’s metadata, improving user experience.

### TL:DR

DAOIP-2 bridges the gap between on-chain and off-chain data, offering a robust foundation for DAO transparency, discoverability, and interoperability. By adopting this standard, DAOs can ensure they are easily understood and engaged with by their members, partners, and the broader ecosystem.