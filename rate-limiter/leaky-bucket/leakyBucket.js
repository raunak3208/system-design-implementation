const express = require("express");
const LeakyBucket = require("./leakyBucket");

class LeakyBucket {

    constructor(
        capacity,
        leakRate
    ) {
        this.capacity = capacity;

        this.leakRate = leakRate;

        this.water = 0;

        this.lastLeak = Date.now();
    }

    allowRequest() {

        const now = Date.now();

        const elapsed =
        (now - this.lastLeak) / 1000;

        this.water = Math.max(
            0,
            this.water -
            elapsed * this.leakRate
        );

        this.lastLeak = now;

        if (
            this.water >= this.capacity
        ) {
            return false;
        }

        this.water++;

        return true;
    }
}

module.exports = LeakyBucket;
