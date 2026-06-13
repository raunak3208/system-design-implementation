import LRUCache from "./LRUCache";
import OriginServer from "./OriginServer";

class CDN {
    private cache: LRUCache<string, string>;
    private origin: OriginServer;

    constructor(size: number) {
        this.cache = new LRUCache(size);
        this.origin = new OriginServer();
    }

    getAsset(assetName: string): string {
        const cached = this.cache.get(assetName);

        if (cached) {
            console.log("Cache HIT");
            return cached;
        }

        console.log("Cache MISS");

        const data = this.origin.fetchAsset(assetName);

        this.cache.put(assetName, data);

        return data;
    }
}

export default CDN;