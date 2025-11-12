---
id: architecture
title: Architecture
description: Technical and economic architecture of MYRAD’s Deflationary DataCoin model.
sidebar_position: 4
---

# Architecture Overview

MYRAD operates through a hybrid on-chain and off-chain system that enables decentralized data monetization, liquidity, and access control.

---

## On-Chain Components

| Component | Description |
| --- | --- |
| **DataCoin (ERC20)** | Each dataset mints its own token with fixed supply. |
| **Automated Market Maker (AMM)** | Establishes instant liquidity and price discovery. |
| **Burn Contract** | Executes the buy-and-burn process during dataset access. |
| **Treasury Contract** | Seeds new pools and collects protocol-level fees. |

---

## Off-Chain Components

| Service | Description |
| --- | --- |
| **Dataset Gateway** | Manages dataset storage, JWT authentication, and user access. |
| **Reputation Engine** | Rates datasets through community validation and metadata scoring. |
| **Enterprise API Layer** | Provides stable, verified access for enterprise customers. |

---

## Integrated Token Utility

The economic model is embedded into the architecture itself:

1. **Minting:** Every dataset upload creates a DataCoin with 1,000,000 total supply.  
2. **Liquidity Seeding:** 85% of the supply is paired with USDC (funded by MYRAD).  
3. **Creator Allocation:** 10% of tokens are granted to the creator.  
4. **Buy-and-Burn:** Accessing a dataset burns 50% of tokens spent and returns 50% to the liquidity pool.

This architecture maintains long-term price stability and ensures value accrues to both creators and the protocol.

---

## Economic Alignment

Revenue flows are built into the system:

- **Mint Fee (5%)** — for initial liquidity and protocol operations.  
- **Creator Sale Fee (5%)** — only triggered when the creator realizes profit.  
- **Swap Fee (0.3%)** — distributed to liquidity providers.  
- **Enterprise Access Subscriptions** — recurring income for verified data feeds.  

This ensures protocol health scales naturally with network growth.
