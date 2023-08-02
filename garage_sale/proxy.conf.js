module.exports = {
    "/api": {
        "target": "http://localhost:8080/",
        "secure": false,
        "changeOrigin": true,
        "onProxyReq": (proxyReq, req, res) => {
            console.log("\x1b[0m>> proxying request to", req.url);
        },
        "onProxyRes": (proxyRes, req, res) => {
            const color = proxyRes.statusCode <= 299 ? "\x1b[32m" : "\x1b[31m";
            console.log(`\x1b[0m<< ${req.url} ${color}${proxyRes.statusCode}`,'\x1b[0m');
        }
    }
}