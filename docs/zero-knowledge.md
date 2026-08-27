---
id: zero-knowledge
title: Zero Knowledge Technology
description: Cryptographic verification that powers MYRAD's privacy-first approach.
sidebar_position: 4
---

# Zero Knowledge Technology

Cryptographic verification is what makes MYRAD possible. It is how we verify activity without exposing it, and prove it without revealing it.

---

## The Simple Version

You can prove you are over 21 without showing your ID. You prove the fact without revealing the details.

Cryptographic verification does the same for your data:

- We verify you ordered from Zomato without seeing your orders
- We confirm your GitHub contributions without accessing your repositories
- We prove your Netflix activity without knowing what you watched
- We confirm your Strava distance without tracing where you went
- We verify your Spotify listening without reading your library

![Zero Knowledge Proof Illustration](/img/zk.png)

The verification is real, and your data stays private.

---

## Verification Without Exposure

MYRAD uses cryptographic verification to confirm that activity is real without revealing personal information. This means:

| Benefit | What It Means |
| --- | --- |
| **Enterprises trust the data** | Proofs confirm authenticity |
| **Users retain privacy** | Personal information is never exposed |
| **MYRAD avoids sensitive data** | No identifiers are handled |

---

## The Technical Foundation

MYRAD uses the **Reclaim Protocol's attestation network** to generate TLS-based proofs that verify data authenticity directly from source APIs.

### How Verification Works

1. **Secure Connection**: When you connect an app, the Reclaim Protocol establishes a secure TLS connection to the source (for example, Zomato's servers).
2. **Attestation**: The protocol cryptographically attests that specific data exists, without extracting or storing the actual content.
3. **Proof Generation**: A cryptographic proof is generated locally on your device, confirming the validity of your activity.
4. **Verification**: MYRAD verifies the proof, not your data, to confirm your contribution is authentic.

---

## What Stays Private

| Your Data | What Happens |
| --- | --- |
| **Order History** | Never seen by MYRAD |
| **Delivery Addresses** | Stays on your device |
| **Spending Patterns** | Verified, not exposed |
| **Watch History** | Remains private |
| **Personal Repositories** | Never accessed |

---

## Cohort Aggregation

All outputs are generated at a cohort level. Each signal represents the behavior of many users combined. This gives:

- **Strong privacy guarantees**: individual behavior is hidden in aggregate
- **Reduced noise**: statistical patterns emerge clearly
- **Higher stability**: signals are more reliable
- **Clear compliance boundaries**: privacy by design

---

## Why This Matters

Traditional platforms require you to trust them with your information. MYRAD does not, because the cryptography carries the privacy guarantee.

| Old Model | MYRAD Model |
| --- | --- |
| Trust corporate promises | Trust cryptographic proofs |
| Data stored on servers | Data stays on your device |
| Breach risk | No raw data to breach |
| Misuse possible | Misuse designed out |

Privacy here is a property of the cryptography, not a policy.

---

## Anchored On-Chain

Because MYRAD verifies proofs rather than data, a contribution can be both private and publicly verifiable. Verified contributions can be anchored on-chain, so participation can be confirmed by anyone without any personal data ever being exposed. See [Token & Staking](./token) for how this connects to on-chain rewards.
