# Load Balancer

This folder contains implementations of different load balancing algorithms used in distributed systems and backend architectures.

The goal is to understand how requests are distributed across multiple servers and how real-world systems handle scalability and traffic management.

---

## Algorithms Implemented

### Round Robin
Distributes requests sequentially across all available servers.

### Least Connections
Routes requests to the server with the fewest active connections.

---

## Concepts Covered

- Horizontal Scaling
- Traffic Distribution
- Reverse Proxy Basics
- Backend Server Management
- Distributed Systems Fundamentals

---

## Tech Stack

- Node.js
- HTTP Module

---

## Run

Start backend servers:

```bash
node server1.js
node server2.js
node server3.js
```

Start load balancer:

```bash
node loadBalancer.js
```

---

## Purpose

This implementation is created for:

- Learning system design concepts
- Understanding distributed systems
- Backend engineering practice
- System design interview preparation