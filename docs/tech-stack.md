---
id: tech-stack
title: Architecture
description: Technical foundation powering MYRAD's verified behavior signals platform.
sidebar_position: 6
---

# Architecture

MYRAD is built on a modern, production-grade stack optimized for security, scalability, and privacy-first design.

---

## Technology Stack

| Layer | Technology | Rationale |
| --- | --- | --- |
| **Frontend** | React + TypeScript + Vite | Type-safe, fast, production-ready |
| **Styling & Motion** | Tailwind CSS + Framer Motion | Flexible design system with fluid animation |
| **Authentication** | Privy | Seamless email, social, and wallet sign-in |
| **Verification** | Reclaim Protocol | Zero-knowledge verification without exposure |
| **Backend** | Express + PostgreSQL | Lightweight, scalable API and analytics storage |
| **On-Chain** | Solidity + OpenZeppelin, on Base | Audited contract standards for the rewards layer |

---

## System Components

### Frontend Layer

- **React 18**: Latest concurrent rendering for smooth user experiences
- **TypeScript**: Full type safety across the application
- **Privy Integration**: Frictionless onboarding without complex wallet setup

### Verification Layer

- **Reclaim Protocol**: Cryptographic verification of app activity
- **TLS-Based Proofs**: Attestation from source APIs
- **On-Device Processing**: User data never leaves the device

### Backend Layer

- **Express API**: RESTful endpoints with rate limiting and validation
- **PostgreSQL**: Secure storage for aggregated signals
- **Pipeline Architecture**: Dedicated processing pipelines for each data provider

### On-Chain Layer

- **Base**: The MYRAD token and rewards layer settle on Base
- **Audited Standards**: Contracts build on OpenZeppelin's battle-tested libraries
- **Public Verifiability**: Verified contributions can be anchored on-chain. See [Token & Staking](./token)

---

## Data Flow

![MYRAD Data Flow](/img/dataflow.jpg)

---

## Privacy Architecture

MYRAD enforces privacy at the system level:

| Constraint | Implementation |
| --- | --- |
| **No raw data retention** | Personal data never stored |
| **No personal identifiers** | PII excluded from all outputs |
| **Cohort aggregation** | Signals represent group behavior |
| **Minimum k-anonymity** | Thresholds enforced automatically |

---

## Security Implementation

| Layer | Implementation |
| --- | --- |
| **Transport** | TLS 1.3 for all connections |
| **Authentication** | Privy-managed sign-in and sessions |
| **Data Storage** | Encrypted database connections |
| **API Security** | Rate limiting, input validation, CORS policies |
| **Proof Verification** | Reclaim Protocol attestation validation |

---

## Compliance

MYRAD is designed for GDPR and CCPA compatibility:

- Privacy by design architecture
- No personal data collection or retention
- Clear consent mechanisms
- User opt-out at any time
- Auditable data pipelines
