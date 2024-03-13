---
sidebar_position: 3
title: Contract Documentation
---

# EIP-4824 DAO Registration Contract Documentation

This documentation provides an overview of Solidity contracts designed to support EIP-4824, facilitating the registration, update, and management of DAO metadata in a decentralized manner, with code snippets for key functionalities.

## Contracts Overview

### `IEIP4824` Interface

Defines the essential function `daoURI` for EIP-4824 compliant DAOs to retrieve their metadata URI.

```solidity
interface IEIP4824 {
    function daoURI() external view returns (string memory _daoURI);
}
```

### `EIP4824Index` Contract

Manages permissions for DAO registration using OpenZeppelin's `AccessControl`.

```solidity
contract EIP4824Index is AccessControl {
    bytes32 public constant REGISTRATION_ROLE = keccak256("REGISTRATION_ROLE");

    event DAOURIRegistered(address daoAddress);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(REGISTRATION_ROLE, msg.sender);
    }

    function logRegistration(address daoAddress) external {
        if (!daoAddress.supportsInterface(type(IEIP4824).interfaceId))
            revert EIP4824InterfaceNotSupported();
        emit DAOURIRegistered(daoAddress);
    }
}
```

### `EIP4824Registration` Contract

Manages a DAO's metadata URI and includes role-based access control for management.

```solidity
contract EIP4824Registration is IEIP4824, AccessControl {
    string private _daoURI;

    function initialize(address _daoAddress, string memory daoURI_) external {
        // Ensure not already initialized
        if (daoAddress != address(0)) revert AlreadyInitialized();
        _setURI(daoURI_);
        // Grant roles
        _grantRole(DEFAULT_ADMIN_ROLE, _daoAddress);
        _grantRole(MANAGER_ROLE, _daoAddress);
    }

    function setURI(string memory daoURI_) public onlyRole(MANAGER_ROLE) {
        _setURI(daoURI_);
    }

    function _setURI(string memory daoURI_) internal {
        _daoURI = daoURI_;
        emit DAOURIUpdate(daoAddress, daoURI_);
    }

    function daoURI() external view returns (string memory) {
        return _daoURI;
    }
}
```

### `EIP4824RegistrationSummoner` Contract

Facilitates the efficient creation of `EIP4824Registration` instances using cloning.

```solidity
contract EIP4824RegistrationSummoner {
    address public template;

    function summonRegistration(
        string calldata daoURI_,
        address manager
    ) external returns (address registration) {
        registration = Clones.clone(template);
        EIP4824Registration(registration).initialize(msg.sender, daoURI_);
        if (manager != address(0)) {
            EIP4824Registration(registration).grantRole(MANAGER_ROLE, manager);
        }
        emit NewRegistration(msg.sender, daoURI_, registration);
    }
}
```

## Events and Errors

### Events

- **DAOURIUpdate**: Indicates an update to a DAO's metadata URI.
    ```solidity
    event DAOURIUpdate(address indexed daoAddress, string daoURI);
    ```

- **DAOURIRegistered**: Signals the registration of a DAO's address.
    ```solidity
    event DAOURIRegistered(address daoAddress);
    ```

### Errors

- **EIP4824InterfaceNotSupported**: Indicates an address does not support the required interface.
    ```solidity
    error EIP4824InterfaceNotSupported();
    ```


