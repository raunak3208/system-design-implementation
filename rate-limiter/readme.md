# Rate Limiter

A Rate Limiter controls how many requests a client can make to a service within a specified time period. It is a fundamental component in distributed systems used to protect services from abuse, prevent server overload, and ensure fair resource usage.

This repository contains implementations of four popular rate-limiting algorithms used in modern backend systems.

---

## Implemented Algorithms

### 1. Fixed Window

A counter is maintained for a fixed time interval.

Example:

- Limit: 5 requests/minute
- Requests beyond the limit are rejected until the next window begins.

#### Pros

- Simple implementation
- Low memory usage

#### Cons

- Can allow burst traffic at window boundaries

---

### 2. Sliding Window

Tracks request timestamps and considers only requests within the last time window.

Example:

- Limit: 5 requests in the last 60 seconds

#### Pros

- More accurate than Fixed Window
- Prevents boundary bursts

#### Cons

- Higher memory consumption

---

### 3. Token Bucket

Tokens are added to a bucket at a fixed rate.

Each request consumes one token.

If no tokens are available, the request is rejected.

Example:

- Capacity = 10 tokens
- Refill Rate = 2 tokens/second

#### Pros

- Supports controlled bursts
- Widely used in API gateways

#### Cons

- More complex than Fixed Window

---

### 4. Leaky Bucket

Requests enter a bucket and leave at a constant rate.

If the bucket becomes full, incoming requests are rejected.

Example:

- Capacity = 10 requests
- Leak Rate = 2 requests/second

#### Pros

- Smooth traffic flow
- Prevents sudden spikes

#### Cons

- Less flexible for burst traffic

---

## Project Structure

```text
rate-limiter/
│
├── fixed-window/
│   ├── fixedWindow.js
│   ├── server.js
│   
│
├── sliding-window/
│   ├── slidingWindow.js
│   ├── server.js
│   
│
├── token-bucket/
│   ├── tokenBucket.js
│   ├── server.js
│   
│
├── leaky-bucket/
│   ├── leakyBucket.js
│   ├── server.js
│   
│
└── README.md
```

---

## Installation

```bash
npm install
```

---

## Running an Implementation

Example:

```bash
cd fixed-window

npm install

npm start
```

Server runs on:

```text
http://localhost:3000
```

---

## Testing

Send multiple requests:

```bash
for i in {1..10}
do
  curl http://localhost:3000
done
```

After exceeding the configured limit:

```json
{
  "message": "Rate limit exceeded"
}
```

---

## Real-World Use Cases

- API Gateways
- Authentication Systems
- Login Protection
- Payment Services
- Cloud Platforms
- SaaS Applications
- Distributed Systems

---

## Concepts Covered

- Request Throttling
- Traffic Shaping
- Fixed Window Algorithm
- Sliding Window Algorithm
- Token Bucket Algorithm
- Leaky Bucket Algorithm
- Backend Scalability
- System Design Fundamentals

---

## Future Improvements

- Redis-Based Distributed Rate Limiting
- User-Based Rate Limiting
- IP-Based Rate Limiting
- API Key Based Quotas
- Distributed Token Bucket
- Rate Limiting Middleware for Express

---

## License

This project is for learning and educational purposes.