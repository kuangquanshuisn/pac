function FindProxyForURL(url, host) {
    // ���� `*.koyeb.app` ����
    if (shExpMatch(host, "*.koyeb.app")) {
        return "SOCKS5 localhost:7897";
    }
  
    // ���� `*.googleapis.com` ����
    if (shExpMatch(host, "*.googleapis.com")) {
        return "SOCKS5 localhost:7897";
    }

    // ���������ʹ�ô���
    return "DIRECT";
}