class SlidingWindowLimiter {

    constructor(limit, windowMs) {
        this.limit = limit;
        this.windowMs = windowMs;

        this.requests = new Map();
    }

    allowRequest(ip) {

        const now = Date.now();

        if (!this.requests.has(ip)) {
            this.requests.set(ip, []);
        }

        const timestamps =
        this.requests.get(ip);

        while (
            timestamps.length &&
            now - timestamps[0] > this.windowMs
        ) {
            timestamps.shift();
        }

        if (
            timestamps.length >= this.limit
        ) {
            return false;
        }

        timestamps.push(now);

        return true;
    }
}

module.exports =
SlidingWindowLimiter;