function FindProxyForURL(url, host) {
    // 处理 `*.koyeb.app` 域名
    if (shExpMatch(host, "*.koyeb.app")) {
        return "SOCKS5 localhost:7897";
    }
  
    // 处理 `*.googleapis.com` 域名
    if (shExpMatch(host, "*.googleapis.com")) {
        return "SOCKS5 localhost:7897";
    }

    // 其它情况不使用代理
    return "DIRECT";
}