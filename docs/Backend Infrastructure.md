---
sidebar_position: 7
---

# DAOstar Backend Service (draft)

## Tech Architecture diagram

![](https://lh7-us.googleusercontent.com/KuSv4wynh7MJcRofPujyg2vPmvVf3fGlu0kv9KiBGH-j4RHALHiiGFO4TcpjEZDUbCa9G9sWEa3jYc9CduQk9ZOGF1mMyuFUyVRBfJrzA01TltRxWi38GLFvINdOnAt_asI4QGPfIog1UubeHN9YY5Q)

Backend service 
================

DAOstar Website API Service
---------------------------

Status: Running

Technologies: Python

Github: [daostar/Implementations/API at main - metagov/daostar (github.com)](https://github.com/metagov/daostar/tree/main/Implementations/API)

Description: 

1\. Provide API for the DAOstar website.

2\. Deployed on DigitalOcean. Database on AWS.

DAO Framework URI API Service for framework (hosted by DAO*)
------------------------------------------------------------

Status: Running

Technologies: Nodejs

Github: [metagov/daostar-api (github.com)](https://github.com/metagov/daostar-api)

Description: 

1\. Support ERC-4824 standard implement.

2\. Provide API for framework and DAO custom URI API.

3\. Pull data, parse, and respond. Have no database.

4\. Deployed on AWS lambda.

DAO URI Data Indexer Service (hosted by DAO*)
---------------------------------------------

Status: In design

Technologies: Nodejs

Description:

1\. Provide data for custom DAO URI requests.

### Solution

Who will benefit from it:

Some DAOs do not have their own API for ERC-4824 and frameworks.

Why: 

1\. The acquired data from the framework or other resources cannot meet the ERC-4824 standard and requires some additional complex processing. More computing and network delay is inappropriate in one URI request.

2\. More and more custom URI implements are required in the future.

What:

1\. Pull data and store these in a database.

How:

1\. Some frameworks have data access permission, so we may need to establish a partnership first, for example: Boardroom.

2\. Pull data by schedule from GraphQL API, HTTP API, and Smart Contract, which are provided by frameworks, DAO, for example: Snapshot, Gnosis, DAODAO, Boardroom, etc.

3\. Parse data to meet requirements and store these in aws database.

Shortcoming: The real-time performance of the data is poor and there is a delay.

Case 1: Snapshot integration.

1\. Some DAO on Snapshot, but we can't pull the members list from it, because it makes proposals, and vote rights are determined by strategy, which comes from many smart contracts, and up to 8 can be used simultaneously, with hundreds of options to choose from.

2\. We ask for somebody and research, A feasible solution is designed to obtain 1000(maybe more) latest votes from the Snapshot GraphQL API by schedule(1 day), remove duplicate voters, obtain member list data, and then store these in the database.

3\. When DAO members' URI request from the DAO URI API service, get data from the database and respond directly without any process.

Summarize: The combination of DAO URI Data Indexer Service and DAO URI Data Indexer Service constitutes an ERC-4824 custom URI hosted service.