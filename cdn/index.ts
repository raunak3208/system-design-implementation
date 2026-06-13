import CDN from "./CDN";

const cdn = new CDN(2);

console.log(cdn.getAsset("index.html"));
console.log();

console.log(cdn.getAsset("logo.png"));
console.log();

console.log(cdn.getAsset("index.html"));
console.log();

console.log(cdn.getAsset("video.mp4"));
console.log();

console.log(cdn.getAsset("logo.png"));