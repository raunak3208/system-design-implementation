class LRUCache<K, V> {
    private cap: number;
    private cache: Map<K, V>;

    constructor(cap: number) {
        this.cap = cap;
        this.cache = new Map();
    }

    get(key: K): V | null {
        if (!this.cache.has(key)) return null;

        const val = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, val);

        return val;
    }

    put(key: K, value: V): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        if (this.cache.size >= this.cap) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        this.cache.set(key, value);
    }
}

export default LRUCache;