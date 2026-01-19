---
id: tech-stack
title: Architecture
description: Technical foundation powering Myrad's verified behavior signals platform.
sidebar_position: 6
---

# Architecture

Myrad is built on a modern, production-grade stack optimized for security, scalability, and privacy-first design.

---

## Technology Stack

| Layer | Technology | Rationale |
| --- | --- | --- |
| **Frontend** | React 18 + TypeScript | Type-safe, performant, production-ready |
| **Styling** | Vanilla CSS + Tailwind | Maximum design flexibility |
| **Authentication** | Privy Auth | Seamless email, social, and wallet support |
| **Verification** | Reclaim Protocol | Cryptographic verification without exposure |
| **Backend** | Express.js | Lightweight, scalable API layer |
| **Database** | PostgreSQL | Reliable, queryable analytics storage |

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

- **Express.js API**: RESTful endpoints with rate limiting and validation
- **PostgreSQL Database**: Secure storage for aggregated signals
- **Pipeline Architecture**: Dedicated processing pipelines for each data provider

---

## Data Flow

![Myrad Data Flow](/img/dataflow.jpg)

---

## Privacy Architecture

Myrad enforces privacy at the system level:

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
| **Authentication** | Privy-managed sessions with JWT tokens |
| **Data Storage** | Encrypted PostgreSQL connections |
| **API Security** | Rate limiting, input validation, CORS policies |
| **Proof Verification** | Reclaim Protocol attestation validation |

---

## Compliance

Myrad is designed for GDPR and CCPA compatibility:

- Privacy by design architecture
- No personal data collection or retention
- Clear consent mechanisms
- User opt-out at any time
- Auditable data pipelines
