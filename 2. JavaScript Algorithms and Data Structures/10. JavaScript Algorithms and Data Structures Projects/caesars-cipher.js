function rot13(str) {
    return str.replace(/[A-Z]/g, l => String.fromCharCode((l.charCodeAt(0) % 26) + 65));
}