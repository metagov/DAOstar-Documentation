---
sidebar_position: 3
title: The Grants Metadata Standard
---

### Overview of DAOIP-5: Grants Management Standard

DAOIP-5 is a standard that defines data schemas and processes to streamline grants management for DAOs. It provides a structured way to organize, share, and manage information about grant systems, funding pools, and project applications. The goal is to improve transparency, interoperability, and efficiency across DAO-based grant programs.

### How DAOIP-5 Works

1. **Core Components**:
   - **Grant Systems**: Represent the governance or administration body managing the grants, such as a DAO or foundation. They publish a `grantPoolsURI` to enable indexing and discovery of available funding pools.
   - **Grant Pools**: These are resources, such as smart contracts or off-chain funds, allocated to specific grant purposes. Each pool includes metadata like application status, governance information, and contact details.
   - **Projects**: Represent individuals or teams seeking funding. Projects provide structured information about their goals, milestones, and relevance to specific grant pools via a `projectsURI`.
   - **Applications**: Link projects to specific grant pools, detailing the funding requested, proposal status, and payout details.

2. **Schemas and Attestations**:
   - DAOIP-5 uses JSON-LD schemas to structure data, ensuring it is machine-readable and interoperable.
   - It integrates with DAOIP-3 for attestations, allowing trusted verification of project credentials, such as ownership or past contributions.

3. **Interoperability**:
   - By adhering to a shared schema, DAOIP-5 enables seamless collaboration between different DAOs and grant tools, supporting use cases like a "common application" for grants.

### Benefits of DAOIP-5

- **Transparency**: Makes it easy to see which projects are funded, how grants are allocated, and what governance rules apply.
- **Efficiency**: Reduces redundant work by standardizing application and reporting processes.
- **Interoperability**: Facilitates coordination between grant programs, allowing DAOs to co-fund projects or share applicant data.
- **Trust**: Builds credibility through verified project and member attestations.

### Example Use Case

Imagine a developer wants to apply for funding from three DAOs—Gitcoin, Optimism, and Ethereum Foundation. With DAOIP-5:
- The developer publishes a `projectURI` containing all relevant details.
- Each DAO retrieves this information from the shared URI, without needing separate applications.
- The DAOs can collaborate on funding decisions, co-fund the project, or use attestations to verify the developer's credentials.

### TL:DR

DAOIP-5 simplifies grants management for DAOs, fostering better collaboration and transparency. By creating a common language for grants data, it helps DAOs and grant recipients achieve their goals more effectively.

