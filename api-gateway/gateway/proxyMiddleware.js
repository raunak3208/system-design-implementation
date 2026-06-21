const {
    createProxyMiddleware
} = require(
    "http-proxy-middleware"
);

const userProxy =
createProxyMiddleware({
    target:
        "http://localhost:4001",
    changeOrigin: true
});

const productProxy =
createProxyMiddleware({
    target:
        "http://localhost:4002",
    changeOrigin: true
});

const orderProxy =
createProxyMiddleware({
    target:
        "http://localhost:4003",
    changeOrigin: true
});

module.exports = {
    userProxy,
    productProxy,
    orderProxy
};