---
sidebar_position: 3
---

# Pathways to EIP-4824 Compliance

In this artcle, we'll dive deeper into the technicalities of adopting EIP-4824. 

## Steps involved in EIP-4824 Adoption 
EIP-4824 Adoption involves two main steps:

### Step 1: Creating a daoURI (Off-Chain Process): 
- Prepare, organize and host data about your DAO offchain according to EIP-4824 specifications. This step involves structuring information on your DAO into the daoURI JSON-LD specified by EIP-4824 and hosting a queryable endpoint.

### Step 2: Publishing the DAO URI: 
- Once a DAO URI is created , it needs to be published so that it can be indexed. The daoURI can be published on-chain as well as off-chain, by the DAO or by other entities on behalf of the DAO. [DAOIP-6](https://github.com/metagov/daostar/blob/main/DAOIPs/daoip-6.md#indexing-priority) defines the indexing priority of different methods. 

EIP-4824 ensures the reliability of DAO metadata. As described above, the first step involved in EIP-4824 adoption is collecting and structuring data and the second step involves publishing it, which is essential in verifying the source of information. 

## Methods to create a daoURI
To become EIP-4824 compliant and effectively manage and share DAO metadata, creating a daoURI is the first step. Here are expanded details on different methods for creating a daoURI:

### 1. Python Flask API

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

- **Overview**: DAOstar offers a registration form that simplifies the process of generating a daoURI. This form guides users through inputting essential DAO information, automatically generating a daoURI that complies with the EIP-4824 schema.

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


## Methods to publish DAO URI

#### 1) DAOstar Factory Registration Contract
- Deploying a DAOstar factory registration contract on-chain that includes the DAO’s daoURI involves creating a smart contract that stores the daoURI on the blockchain. This makes the DAO’s metadata publicly accessible and verifiable, ensuring transparency and interoperability.

#### 2) Purchase an ENS Name
- Acquiring an ENS (Ethereum Name Service) name for the daoURI potentially requires DAO approval, depending on the governance structure. This ENS name can then point to the daoURI, making it easier to access the DAO’s information through a human-readable address.

#### 3) EAS Attestations
- This method utilizes Ethereum Attestation Service (EAS) to issue onchain attestations containing the DAO's daoURI.
- This method is akin to notarizing the daoURI on the blockchain, providing a secure and transparent way to verify the DAO’s metadata.
- As DAOs do not have methods to interact with EAS, this method is utilized most by DAO Foundations, trusted 3rd parties and others to supply information on the DAO. As this method involves a higher degree of trust, DAOstar will manually ensure the legitimacy of each registration through an allowlist enforced via a resolver contract.  

Steps for Implementation:

1. Get added to the allowlist: contact Amandeep (_aman@doastar.org_ via email, _amanwithwings_ via TG) or Joshua Tan (_josh@daostar.org_ via email, _thelastjosh_ via TG) to get your organization's wallet added to the allowlist. Only addresses included in the allowlist will be able to make attestations.   
  
2. Access the EIP-4824 Schema: Visit the [register page](https://daostar.org/register) on the DAOstar website and toggle to "register via EAS". Fill in _DAO Name_, _daoURI_ and hit Register! Note that you need to connect your wallet on Optimism Mainnet, and be a member of the allowlist to be able to attest:
![image](https://hackmd.io/_uploads/HyR8nGkyC.png)

Alternatively, you can also attest directly using EAS's front-end interface. This is the [EIP-4824 Schema](https://optimism-sepolia.easscan.org/schema/view/0xf90c716cef83b64e4b9cbf5babeb4ee65662e2081535afd76cad37dde744c2dd), deployed to Optimism Mainnet.


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

- For DAOs using Snapshot, Snapshot publishes an EIP-4824 endpoint essentaily creating DAO URIs for Snapshot DAO:

##### https://hub.snapshot.org/api/eip4824/[Snapshot_space_id]

Ex: https://hub.snapshot.org/api/eip4824/opcollective.eth

- Here, the next step is to publish the DAO URI via one of the listed on-chain publication methods
