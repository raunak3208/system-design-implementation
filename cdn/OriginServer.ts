class OriginServer {
    private assets: Map<string, string>;

    constructor() {
        this.assets = new Map();

        this.assets.set("index.html", "<h1>Home Page</h1>");
        this.assets.set("logo.png", "IMAGE_DATA");
        this.assets.set("video.mp4", "VIDEO_DATA");
    }

    fetchAsset(name: string): string {
        console.log(`Fetching ${name} from Origin`);

        return this.assets.get(name) || "Not Found";
    }
}

export default OriginServer;