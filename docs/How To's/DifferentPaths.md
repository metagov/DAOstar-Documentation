---
sidebar_position: 2
---

# Pathways to EIP-4824 Compliance

In this artcle, we'll dive deeper into the technicalities of adopting EIP-4824. 

## Steps involved in EIP-4824 Adoption 
EIP-4824 Adoption involves two main steps:

### Step 1: Creating a daoURI (Off-Chain Process): 
- Prepare, organize and host data about your DAO offchain according to EIP-4824 specifications. This step involves structuring information on your DAO into the daoURI JSON-LD specified by EIP-4824 and hosting a queryable endpoint.

### Step 2: Publishing the daoURI: 
- Once a DAO URI is created , it needs to be published so that it can be indexed. The daoURI can be published on-chain as well as off-chain, by the DAO or by other entities on behalf of the DAO. [DAOIP-6](https://github.com/metagov/daostar/blob/main/DAOIPs/daoip-6.md#indexing-priority) defines the indexing priority of different methods. 

EIP-4824 ensures the reliability of DAO metadata. As described above, the first step involved in EIP-4824 adoption is collecting and structuring data and the second step involves publishing it, which is essential in verifying the source of information. 

## Methods to create a daoURI
To become EIP-4824 compliant and effectively manage and share DAO metadata, creating a daoURI is the first step. Here are expanded details on different methods for creating a daoURI:

### 1. Self-hosting via Python Flask API 

- **Overview**: Utilize Python's Flask framework to create a lightweight web server that hosts an API endpoint. This endpoint can dynamically generate and return the daoURI in JSON-LD format for your DAO. This method allows for real-time updating of DAO metadata and can be customized according to specific needs

Publishing an API endpoint may require DAO approval, especially if it involves allocating resources or making decisions on how the DAO’s data is accessed publicly. This method has been used by DAOs that prefer to manage their metadata in a more centralized manner or wish to provide dynamic access to their data. It involves creating an endpoint where the daoURI and associated data can be accessed programmatically.

- **Implementation Steps**:
  1. **Set Up Flask**: Install Flask and set up a basic project structure. Flask is a micro web framework in Python, well-suited for small to medium web applications.
  2. **Develop API Endpoint**: Code a Flask route that listens for requests to your designated endpoint (e.g., `/daoURI`). This route will handle generating or retrieving your DAO's metadata.
  3. **Generate JSON-LD Response**: Implement logic within the Flask route to construct the daoURI's JSON-LD response based on the EIP-4824 schema. This might involve fetching data from various sources, such as smart contracts, off-chain databases, or other APIs.
  4. **Host and Secure Your API**: Deploy your Flask application to a reliable hosting service that supports Python (e.g., Render, AWS, Heroku, DigitalOcean).

- **Key Point**:
  - Full control over the data and its presentation.

- **Example:** Shapeshift, Lodestar are a few examples of DAOs where publishing a DAO URI was a subject in EIP-4824 Adoption Governance Proposal
- For Lodestar, we hosted an membersURI endpoint to publish info on members; https://lodestar-members-uri.onrender.com/members

### 2. Generate a DAO URI Using DAOstar Registration Form

- **Overview**: DAOstar offers a registration form that simplifies the process of generating a daoURI. This form guides users through inputting essential DAO information, automatically generating a daoURI that complies with the EIP-4824 schema. DAOstar hosts the frontend and backend infrastructure to collect the info of a DAO, upload it to IPFS, and provide a DAO URI link, this link is of the format `https://api.daostar.org/immutable/<CID>`. One could choose to get the CID and use any IPFS gateway for example, ipfs.io, to view the DAO URI.

- **How to Use**:
  1. **Access the DAOstar Register Page**: Navigate to the registration form provided by DAOstar.
  2. **Input DAO Information**: Fill in the fields with your DAO's details, such as name, description, governance structure, and relevant URIs for members, proposals, etc.
  3. **Generate daoURI**: Upon submission, the form will generate a daoURI, which is then stored on IPFS, providing a permanent, decentralized reference for your DAO's metadata.

- **Key Points**:
  - User-friendly and accessible to those without technical expertise.
  - Automatic compliance with the EIP-4824 schema.
  - Decentralized storage of the daoURI on IPFS.

### 3. Get Your DAO URI from DAO Frameworks or DAO Tools like Snapshot

- **Overview**: Many DAO frameworks and tools, such as Aragon, Snapshot, Boardroom, DAODAO and others, offer built-in support for EIP-4824. These platforms can automatically generate a daoURI for DAOs created or managed within their ecosystems.

- **How to Obtain**:
  1. **Use a Supported Platform**: Create or manage your DAO using a platform that supports EIP-4824.
  2. **Automatic daoURI Generation**: The platform will automatically generate a daoURI for your DAO based on its on-platform data and activities.
  3. **Retrieve daoURI**: Access your daoURI through the platform's interface or API, depending on the platform's capabilities.


Example: https://hub.snapshot.org/api/eip4824/opcollective.eth

### 4. Host your DAO URI on Github

- **Overview**: Hosting your `daoURI.json` on GitHub is a simple and accessible method for making your DAO metadata publicly available. By using GitHub, you can ensure that your `daoURI` is easily accessible and can be shared with others, while also providing version control and transparency through GitHub's infrastructure. This method is perfect for maintaining a simple, transparent, and publicly accessible `daoURI` without needing a decentralized storage solution like IPFS.

- **Steps**:

  1. **Clone Your Repository**:
     - Clone the repository where you will store the `daoURI.json` file.
       ```sh
       git clone <your-github-repo-url>
       ```

  2. **Modify or Add the JSON File**:
     - Create or modify a file in the repository (e.g., `daoURI.json`).
     - Define your DAO's metadata using the EIP-4824 schema:
       ```json
       {
           "@context": "http://www.daostar.org/schemas",
           "type": "DAO",
           "name": "<name of the DAO>",
           "description": "<description>",
           "membersURI": "<URI>",
           "proposalsURI": "<URI>",
           "activityLogURI": "<URI>",
           "governanceURI": "<URI>",
           "contractsRegistryURI": "<URI>"
       }
       ```

  3. **Commit the Changes**:
     - After modifying or adding the file, commit your changes with a descriptive message:
       ```sh
       git commit -m "Added DAO URI JSON-LD file"
       ```

  4. **Push to GitHub**:
     - Push the changes to your GitHub repository:
       ```sh
       git push
       ```

  5. **Access the JSON-LD File**:
     - Once the file is in your GitHub repository, it will have a publicly accessible URL, something like:
       ```
       https://raw.githubusercontent.com/<your-github-username>/<repository-name>/main/daoURI.json
       ```
     - This link can be shared as your DAO's URI.

  6. **(Optional) Use GitHub Pages**:
     - For a more user-friendly URL, you can enable GitHub Pages in your repository settings. This will provide a direct web link to your `daoURI.json`:
       ```
       https://<your-github-username>.github.io/<repository-name>/daoURI.json
       ```

- **Key Benefits**:
  1. **Simple and Accessible**: GitHub provides an easy-to-use platform for hosting the `daoURI.json` file, making it suitable even for non-technical users.
  2. **Version Control**: GitHub's version control system allows for tracking changes made to the `daoURI.json` over time, ensuring transparency and auditability.
  3. **Publicly Accessible**: Once hosted, the `daoURI` can be accessed from anywhere, allowing it to be integrated into your DAO's governance framework or shared with external parties.
  4. **Cost-Free**: Hosting on GitHub is free, making it an economical option for DAOs of all sizes.

## Methods to publish DAO URI

#### 1) DAOstar Factory Registration Contract
- Deploying a DAOstar factory registration contract on-chain that includes the DAO’s daoURI involves creating a smart contract that stores the daoURI on the blockchain. This makes the DAO’s metadata publicly accessible and verifiable, ensuring transparency and interoperability.

#### 2) Set as an ENS Text Record
- daoURI can be set as an ENS (Ethereum Name Service) text record. Depending on the management of the ENS name, this may require governance approval. 

#### 3) EAS Attestations
- This method utilizes Ethereum Attestation Service (EAS) to issue onchain attestations containing the DAO's daoURI.
- This method is akin to notarizing the daoURI on the blockchain, providing a secure and transparent way to verify the DAO’s metadata.
- This method is intended for the usage of  DAO Foundations, OpCo's, working groups and other trusted 3rd parties to supply information on the DAO. As this method involves a higher degree of trust, DAOstar ensures the legitimacy of each registration through an allowlist enforced via a resolver contract.  

Instructions:

1. Get added to the allowlist: Submit this [form](https://forms.gle/24CnDQvyuGj1nLT58) to get added to the allowlist of issuers. Only addresses included in the allowlist will be able to make attestations.   
  
2. Registration: Visit the [register page](https://daostar.org/register) on the DAOstar website and toggle to "Register through EAS". Fill in the required fields. Note that you (the organization that is publishing the daoURI on behalf of the DAO) are the issuer. Hit Register! Note that you need to connect your wallet on Optimism Mainnet, and be a member of the allowlist to be able to attest:
![image](https://hackmd.io/_uploads/BkAAAvTJC.png)

Alternatively, you can also attest directly using EAS's front-end interface. This is the [EIP-4824 Schema](https://optimism.easscan.org/schema/view/0x1b1837dfb994702896d5d19bb0d66cf16ea30d8523765b938ec029088f90f904), deployed to Optimism Mainnet.


#### 4) External Registration Contract
- Deploying an external registration contract compliant with the DAOstar factory registration involves creating a custom smart contract that adheres to the standards set by EIP-4824.
- If done, the DAOstar Explorer page will indeed only display Registration Instances of DAOstar EIP-4824 Contracts. Because we index our contracts. 
- This method has been explored by Aragon. Aragon core contracts implement DAO URI parameter and functions to set it. Although Aragon's adoption can be categorized as adoption by DAO Framework's inbuilt support. This method can be reserved for DAOs with Custom DAO frameworks.

## Preliminary Considerations

#### a) DAO Framework with Inbuilt Support for EIP-4824
- If a DAO was created using a framework that already supports EIP-4824, this means the framework can automatically generate and manage a daoURI compliant with the EIP-4824 schema. **No further action** is necessary for compliance, but the DAO should ensure that the daoURI is up-to-date and reflects accurate DAO metadata.

Ex: Aragon DAO Framework, ie Aragon OSX Protocol has implemented this.

#### b) DAO Tooling provider supported; Boardroom.io
- For DAOs utilizing Boardroom.io, member information may be auto-filled due to Boardroom's API integration, simplifying the process of gathering some of the necessary data for the daoURI. However, additional information would still need to be compiled to complete the daoURI, **confirming that other aspects** of the DAO's operations (proposals, governance structure, etc.) are also represented.
- A DAO which is supported by Boardroom, can create a DAO URI via DAOstar on daostar.org/register
- After DAO URI is created, they can make an onchain transacation , ENS or EAS attestations

#### c) DAO Framework with DAO URI Support; Snapshot

- For DAOs using Snapshot, Snapshot publishes an EIP-4824 endpoint essentaily creating DAO URIs for Snapshot DAOs:

##### https://hub.snapshot.org/api/eip4824/[Snapshot_space_id]

Ex: https://hub.snapshot.org/api/eip4824/opcollective.eth

- Here, the next step is to publish the DAO URI via one of the listed on-chain publication methods
  
###### Note: 
You can check out our deployed contracts [here](https://docs.daostar.org/Contract%20Registry)
