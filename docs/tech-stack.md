---
id: tech-stack
title: Architecture
description: Technical foundation powering MYRAD's verified insights platform.
sidebar_position: 6
---

# Architecture

MYRAD is built on a modern, production-grade stack optimized for security, scalability, and developer experience.

---

## Technology Stack

| Layer | Technology | Rationale |
| --- | --- | --- |
| **Frontend** | React 18 + TypeScript | Type-safe, performant, production-ready |
| **Styling** | Vanilla CSS + Tailwind | Maximum design flexibility |
| **Authentication** | Privy Auth | Seamless email, social, and wallet support |
| **Verification** | Reclaim Protocol | Industry-leading zero-knowledge proofs |
| **Backend** | Express.js | Lightweight, scalable API layer |
| **Database** | PostgreSQL | Reliable, queryable analytics storage |

---

## System Components

### Frontend Layer

- **React 18**: Latest concurrent rendering for smooth user experiences
- **TypeScript**: Full type safety across the application
- **Privy Integration**: Frictionless onboarding without complex wallet setup

### Verification Layer

- **Reclaim Protocol**: Zero-knowledge verification of app activity
- **TLS-Based Proofs**: Cryptographic attestation from source APIs
- **On-Device Processing**: User data never leaves the device

### Backend Layer

- **Express.js API**: RESTful endpoints with rate limiting and validation
- **PostgreSQL Database**: Secure storage for analytics and user records
- **Pipeline Architecture**: Dedicated processing pipelines for each data provider

---

## Data Flow


![MYRAD Data Flow](/img/dataflow.jpg)


---

## Security Implementation

| Layer | Implementation |
| --- | --- |
| **Transport** | TLS 1.3 for all connections |
| **Authentication** | Privy-managed sessions with JWT tokens |
| **Data Storage** | Encrypted PostgreSQL connections |
| **API Security** | Rate limiting, input validation, CORS policies |
| **Proof Verification** | Reclaim Protocol attestation validation |
