---
Sidebar_position: 2
---

## Add new network support for DAOstar

### 1. Deploy smart contracts 

Deploy Registration.sol and get three contract addresses

**Reference folder:**
https://github.com/metagov/daostar/tree/main/contracts/src

**For example:**

*OP Mainnet*

[EIP4824Index](https://optimistic.etherscan.io/address/0x18CbB356cd64193b1a0CA49911fc72CB3D02a5E4)
[EIP4824Registration](https://optimistic.etherscan.io/address/0x65D17d117C190f7A4cc784b56a17E3f7Edde5762)
[EIP4824RegistrationSummoner](https://optimistic.etherscan.io/address/0x5C0340AD34f7284f9272E784FF76638E8dDb5dE4)

### 2. Add network to supgraph and deploy a new subgraph for that network

Prerequisites for this step:
- Have your The Graph Auth Token initialized 
- Create a subgraph for the new netowork via The Graph Dashboard

1. Add network and contract address of EIP4824Index in this file

**Reference file:**
https://github.com/metagov/daostar/blob/main/Implementations/Subgraph/daostar/networks.json


```
"optimism": {
        "EIP4824Index": {
            "address": "0x18CbB356cd64193b1a0CA49911fc72CB3D02a5E4",
            "startBlock": 109109991
        }
    }
```

2. Add and run build commands

```
"build:optimism": "graph codegen && graph build --network optimism",
```

3. Add and run deploy command

```
"deploy:optimism": "graph deploy --node https://api.thegraph.com/deploy/ crazyyuan/daostar-optimism",
```

4. Get your https api query endpoint url

In this case,
```
https://api.thegraph.com/subgraphs/name/crazyyuan/daostar-optimism
```

### 3. Make the changes to the frontend, deploy and publish

1.  Add API URL 

**Reference file:**
https://github.com/metagov/daostar/blob/main/daostar-website/src/index.js#L36

```
const client = new ApolloClient({
    link: ApolloLink.from([
        new MultiAPILink({
            endpoints: {
                goerli: `https://api.thegraph.com/subgraphs/name/ipatka/daostar-goerli`,
                optimismGoerli: `https://api.thegraph.com/subgraphs/name/rashmi-278/daostar-optimism-goerli`,
                mainnet: `https://api.thegraph.com/subgraphs/name/ipatka/daostar`,
                gnosis: `https://api.thegraph.com/subgraphs/name/rashmi-278/daostar-gnosis`,
                arbitrumGoerli: `https://api.thegraph.com/subgraphs/name/crazyyuan/daostar-arbitrum-goerli`,
                chapel:`https://api.thegraph.com/subgraphs/name/crazyyuan/daostar-bnb-bruno`,
                optimism: `https://api.thegraph.com/subgraphs/name/crazyyuan/daostar-optimism`

            },
            // defaultEndpoint: 'https://api.thegraph.com/subgraphs/name/ipatka/daostar',
            httpSuffix: "",
            createHttpLink: createHttpLink,
        }),
    ]),
    cache: new InMemoryCache({}),
});

```

2. Set up queries

**Reference file:**
https://github.com/metagov/daostar/blob/main/daostar-website/src/App.js

```
const optimismRes = useQuery(queries.REGISTRATIONS, {
        context: { apiName: "optimism" },
        variables: { id: "optimism" },
    });
    
    
     const {
        loading: optimismLoading,
        error: optimismError,
        data: optimismData,
    } = optimismRes;
    
     if (error || goerliError || optimismGoerliError || arbitrumGoerliError || chapelError || optimismError ) {
        ...
        console.error("Optimism Error" + optimismError)
    };
    
        if (loading || goerliLoading || gnosisLoading || optimismGoerliLoading || arbitrumGoerliLoading || chapelLoading || optimismLoading) return "loading...";

const optimismRegistrations =
        optimismData?.registrationNetwork?.registrations || [];
        
         const allRegistrationInstances = mainnetRegistrations.concat(
       ...
        optimismRegistrations
    );
```

3. Add RegistrationSummoner address here

**Reference file:**
https://github.com/metagov/daostar/blob/main/daostar-website/src/components/Register/RegistrationReceived/RegistrationReceived.js

```
 const factoryContracts = {
    ...
    optimism: `0x5C0340AD34f7284f9272E784FF76638E8dDb5dE4`,

  };
```

4. Add network ID and labels

**Reference file:**
https://github.com/metagov/daostar/blob/main/daostar-website/src/components/Register/RegistrationForm/RegistrationForm.js#L13

https://github.com/metagov/daostar/blob/main/daostar-website/src/components/Register/RegistrationForm/RegistrationForm.js#L213

```
const networkIds = {
    ...
    optimism:10
}

 const EthNetworksSelect = (
        <HTMLSelect
            style={{ minWidth: 140 }}
            iconProps={{ icon: 'caret-down', color: '#fff' }}
            value={daoContractNetwork}
            onChange={onChangeDaoContractNetwork}
            options={[
                { label: 'Mainnet', value: 'mainnet' },
                { label: 'Optimism', value: 'optimism'},
               ...
            ]}
        />
    )
```

5. Make sure build is successful

```
npm run build
```

Now you can commit and publish the changes!