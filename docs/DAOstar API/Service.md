---
sidebar_position: 2
---
# DAOstar Endpoint Service API Documentation

## Overview

The DAOstar Endpoint Service is a hosting service for DAO schemas as described by EIP-4824. This service provides endpoints to create, update, retrieve, and delete DAO metadata in both mutable and immutable forms.

### Base URL

```plaintext
https://api.daostar.org
```

### Contact

For any inquiries, please reach out to Luke at [luke@metagov.org](mailto:luke@metagov.org).

## Paths

### Mutable Endpoints

#### Create a New Mutable DAO Endpoint

- **POST** `/mutable`
  - **Summary**: Creates a new mutable DAO endpoint.
  - **RequestBody**: Application/json containing `caip` and `data` according to the `DAO` schema.
  - **Responses**:
    - **200**: Successfully created endpoint. Returns the URL of the created endpoint.
    - **400**: Bad request.
    - **409**: Endpoint already exists.

#### Retrieve DAO Schema

- **GET** `/mutable/{caip}`
  - **Summary**: Returns DAO schema for the given CAIP-10 address.
  - **Parameters**: `caip` - CAIP-10 address of a DAO.
  - **Responses**:
    - **200**: Found requested DAO schema.
    - **400**: Bad request.
    - **404**: Endpoint not found.

#### Update DAO Schema

- **PUT** `/mutable/{caip}`
  - **Summary**: Updates DAO schema for the given CAIP-10 address.
  - **Parameters**: `caip` - CAIP-10 address of a DAO.
  - **RequestBody**: Application/json containing `data` according to the `DAO` schema.
  - **Responses**:
    - **200**: Successfully updated DAO schema.
    - **400**: Bad request.
    - **404**: Endpoint not found.

#### Delete DAO Schema Endpoint

- **DELETE** `/mutable/{caip}`
  - **Summary**: Deletes a DAO schema endpoint for the given CAIP-10 address.
  - **Parameters**: `caip` - CAIP-10 address of a DAO.
  - **Responses**:
    - **200**: Successfully deleted endpoint.
    - **400**: Bad request.
    - **404**: Endpoint not found.

### Immutable Endpoints

#### Create a New Immutable DAO Endpoint

- **POST** `/immutable`
  - **Summary**: Creates a new immutable DAO endpoint.
  - **RequestBody**: Application/json containing `data` according to the `DAO` schema.
  - **Responses**:
    - **200**: Successfully created endpoint. Returns the URL and CID of the created endpoint.
    - **400**: Bad request.

#### Retrieve DAO Schema

- **GET** `/immutable/{cid}`
  - **Summary**: Returns DAO schema for the given CID.
  - **Parameters**: `cid` - CID of stored DAO Schema.
  - **Responses**:
    - **200**: Found requested DAO schema.
    - **400**: Bad request.
    - **404**: Endpoint not found.

## Schemas

### DAO Schema

- **Type**: object
- **Properties**:
  - `name`: The name of the DAO.
  - `description`: A description of the DAO.
  - `membersURI`: URI for the DAO's members.
  - `proposalsURI`: URI for the DAO's proposals.
  - `activityLogURI`: URI for the DAO's activity log.
  - `governanceURI`: URI for the DAO's governance documentation.

### Examples

```json
{
  "name": "MyDAO",
  "description": "Demonstrates DAOstar setup process",
  "membersURI": "ipfs://Qme7ss3ARVgxv6rXqVPiikMJ8u2NLgmgszg13pYrDKEoiu",
  "proposalsURI": "https://mydao.github.io/proposals",
  "activityLogURI": "https://mydao.com/activityLog.json",
  "governanceURI": "https://github.com/MyDAO/MyDAO/governance.md"
}
```

This documentation outlines the available API endpoints, methods, request bodies, and responses for interacting with the DAOstar Endpoint Service, enabling users to manage DAO metadata efficiently.