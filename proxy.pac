function FindProxyForURL(url, host) {     
    // Handle `*.koyeb.app` domains
    if (shExpMatch(host, "*.koyeb.app")) {         
        return "SOCKS5 localhost:7897";     
    }     
  
    // Handle `*.googleapis.com` domains
    if (shExpMatch(host, "*.googleapis.com")) {         
        return "SOCKS5 localhost:7897";     
    }     

    // Handle `*.google.com` domains
    if (shExpMatch(host, "*.google.com")) {         
        return "SOCKS5 localhost:7897";     
    }

    // Do not use a proxy for other cases
    return "DIRECT"; 
}
