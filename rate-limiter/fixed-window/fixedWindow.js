class FixedWindowLimiter {
    constructor(limit, windowMs) {
        this.limit = limit;
        this.windowMs = windowMs;

        this.requests = new Map();
    }

    allowRequest(ip) {
        const now = Date.now();

        if (!this.requests.has(ip)) {
            this.requests.set(ip, {
                count: 1,
                startTime: now
            });

            return true;
        }

        const user = this.requests.get(ip);

        if (now - user.startTime > this.windowMs) {
            user.count = 1;
            user.startTime = now;

            return true;
        }

        if (user.count >= this.limit) {
            return false;
        }

        user.count++;

        return true;
    }
}

module.exports = FixedWindowLimiter;