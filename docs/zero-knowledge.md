---
id: zero-knowledge
title: Zero Knowledge Technology
description: Cryptographic verification that powers Myrad's privacy-first approach.
sidebar_position: 4
---

# Zero Knowledge Technology

Cryptographic verification is the breakthrough that makes Myrad possible. It is the reason we can verify without exposing, and prove without revealing.

---

## The Simple Version

Imagine proving you are over 21 without showing your ID. You prove the fact without revealing the details.

That is exactly what cryptographic verification does for your data:

- We verify you ordered from Zomato without seeing your orders
- We confirm your GitHub contributions without accessing your repositories
- We prove your Netflix activity without knowing what you watched

![Zero Knowledge Proof Illustration](/img/zk.png)

The verification is real. The privacy is absolute.

---

## Verification Without Exposure

Myrad uses cryptographic verification mechanisms to confirm that activity is real without revealing personal information. This allows:

| Benefit | What It Means |
| --- | --- |
| **Enterprises trust the data** | Proofs confirm authenticity |
| **Users retain privacy** | Personal information never exposed |
| **Myrad avoids sensitive data** | No identifiers handled |

---

## The Technical Foundation

Myrad leverages the **Reclaim Protocol's attestation network** to generate TLS-based proofs that verify data authenticity directly from source APIs.

### How Verification Works

1. **Secure Connection**: When you connect an app, the Reclaim Protocol establishes a secure TLS connection to the source (for example, Zomato's servers)

2. **Attestation**: The protocol cryptographically attests that specific data exists without extracting or storing the actual content

3. **Proof Generation**: A cryptographic proof is generated locally on your device, confirming the validity of your activity

4. **Verification**: Myrad verifies the proof, not your data, to confirm your contribution is authentic

---

## What Stays Private

| Your Data | What Happens |
| --- | --- |
| **Order History** | Never seen by Myrad |
| **Delivery Addresses** | Stays on your device |
| **Spending Patterns** | Verified, not exposed |
| **Watch History** | Remains completely private |
| **Personal Repositories** | Never accessed |

---

## Cohort Aggregation

All outputs are generated at a cohort level. Each signal represents the behavior of many users combined. This ensures:

- **Strong privacy guarantees**: Individual behavior hidden in aggregate
- **Reduced noise**: Statistical patterns emerge clearly
- **Higher statistical stability**: More reliable signals
- **Clear compliance boundaries**: Privacy by design

---

## Why This Changes Everything

Traditional platforms require you to **trust** them with your information. Myrad requires **zero trust** because the cryptography guarantees your privacy.

| Old Model | Myrad Model |
| --- | --- |
| Trust corporate promises | Trust mathematical proofs |
| Data stored on servers | Data stays on your device |
| Breach risk | Nothing to breach |
| Misuse possible | Misuse impossible |

This is not privacy as a feature. This is privacy as a **mathematical guarantee**.
