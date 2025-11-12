---
id: architecture
title: Architecture
description: Technical and economic architecture of MYRAD’s DataCoin model.
sidebar_position: 4
---

# Architecture Overview

MYRAD combines **on-chain logic** with **decentralized data storage** to enable trustless data ownership, transparent pricing, and automated monetization.

Each dataset is stored using **IPFS**, and a unique **DataCoin (ERC-20)** is minted on-chain, directly linked to the dataset’s **content identifier (CID)**.  
This connection allows every dataset to function as a self-contained, tradeable data economy.

## On-Chain Components

| Component | Description |
| --- | --- |
| **DataCoin (ERC-20)** | A dataset-specific token minted upon upload. The token contract is mapped to the dataset’s IPFS CID for traceable ownership. |
| **Automated Market Maker (AMM)** | Provides instant liquidity, price discovery, and decentralized exchange for each DataCoin. |
| **Burn Contract** | Executes the buy-and-burn logic whenever a dataset is accessed, reducing supply and redistributing value. |
| **Treasury Contract** | Manages protocol-level reserves, funds initial liquidity, and collects minimal network fees. |

## Off-Chain Components

| Service | Description |
| --- | --- |
| **Dataset Gateway** | Handles IPFS pinning, JWT-based access control, and dataset retrieval. |
| **Reputation Engine** | Scores datasets using metadata accuracy, usage metrics, and community validation. |
| **Enterprise API Layer** | Delivers stable, verified dataset access for enterprise clients and AI systems. |

## DataCoin Lifecycle and Utility

The economic model is integrated directly into the system architecture:

1. **Minting:** Uploading a dataset to IPFS automatically generates a DataCoin with a fixed total supply of **1,000,000 tokens**.  
2. **Liquidity Seeding:** **85%** of tokens are paired with USDC (funded by the MYRAD Treasury) to create an initial AMM pool.  
3. **Creator Allocation:** **10%** of tokens are distributed to the dataset creator.  
4. **Treasury Allocation:** **5%** of tokens are sent to the MYRAD Treasury for sustainability.  
5. **Fixed Access Price:** The creator defines a dataset access price (for example, **$0.50 USD**) that determines how many tokens a user must burn to access the data.  
6. **Buy and Burn:** When a user purchases access, an equivalent value of DataCoin is spent. **50%** is permanently burned and **50%** is returned to the liquidity pool to maintain stability.

No minting fees are charged.  
The MYRAD Treasury provides around **$10 in initial liquidity and gas** to cover deployment and pool creation.  
Creators can onboard data **at zero cost** and immediately start earning from usage and trading activity.

This ensures that every dataset has a self-sustaining token economy where access and speculation coexist in balance.

## Economic Alignment

Revenue and incentive flows are designed to align all ecosystem participants:

- **Treasury Allocation (5%)**: Collected at mint for protocol reserves.  
- **Creator Sale Fee (5%)**: Applied only when a creator realizes profit from sales.  
- **Swap Fee (0.3%)**: Paid to liquidity providers for maintaining active markets.  
- **Enterprise Access Subscriptions:** Recurring revenue from verified data feeds and B2B integrations.

The result is an open, scalable architecture where **data, tokens, and liquidity** operate as a unified economic system.  
Creators earn from both usage and market activity, users gain transparent access, and the protocol grows sustainably with network participation.
