---
id: zero-knowledge
title: Zero Knowledge Technology
description: The cryptographic foundation that powers MYRAD's verified insights.
sidebar_position: 4
---

# Zero Knowledge Technology

Zero Knowledge Proofs are the cryptographic breakthrough that makes MYRAD possible. They are the reason we can verify without exposing, and prove without revealing.

---

## The Simple Version

Imagine proving you are over 21 without showing your ID. You prove the fact without revealing the details.

That is exactly what zero-knowledge proofs do for your data:

- We verify you ordered from Zomato without seeing your orders
- We confirm your GitHub contributions without accessing your repositories
- We prove your Netflix activity without knowing what you watched

![Zero Knowledge Proof Illustration](/img/zk.png)


The verification is real. The privacy is absolute.

---

## The Technical Foundation

Zero knowledge proofs are cryptographic protocols that allow one party to prove knowledge of a value without revealing the value itself.

MYRAD leverages the **Reclaim Protocol's attestation network** to generate TLS-based proofs that verify data authenticity directly from source APIs.

### How Verification Works

1. **Secure Connection**: When you connect an app, the Reclaim Protocol establishes a secure TLS connection to the source (for example, Zomato's servers)

2. **Attestation**: The protocol cryptographically attests that specific data exists without extracting or storing the actual content

3. **Proof Generation**: A zero-knowledge proof is generated locally on your device, confirming the validity of your activity

4. **Verification**: MYRAD verifies the proof, not your data, to confirm your contribution is authentic

---

## What Stays Private

| Your Data | What Happens |
| --- | --- |
| **Order History** | Never seen by MYRAD |
| **Delivery Addresses** | Stays on your device |
| **Spending Patterns** | Verified, not exposed |
| **Watch History** | Remains completely private |
| **Personal Repositories** | Never accessed |

---

## Why This Changes Everything

Traditional platforms require you to **trust** them with your information. MYRAD requires **zero trust** because the cryptography guarantees your privacy.

| Old Model | MYRAD Model |
| --- | --- |
| Trust corporate promises | Trust mathematical proofs |
| Data stored on servers | Data stays on your device |
| Breach risk | Nothing to breach |
| Misuse possible | Misuse impossible |

This is not privacy as a feature. This is privacy as a **mathematical guarantee**.
