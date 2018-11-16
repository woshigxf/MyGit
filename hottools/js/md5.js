function hex_md5(n) {
    return binl2hex(core_md5(str2binl(n), n.length * chrsz))
}

function b64_md5(n) {
    return binl2b64(core_md5(str2binl(n), n.length * chrsz))
}

function str_md5(n) {
    return binl2str(core_md5(str2binl(n), n.length * chrsz))
}

function hex_hmac_md5(n, t) {
    return binl2hex(core_hmac_md5(n, t))
}

function b64_hmac_md5(n, t) {
    return binl2b64(core_hmac_md5(n, t))
}

function str_hmac_md5(n, t) {
    return binl2str(core_hmac_md5(n, t))
}

function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
}

function core_md5(n, t) {
    var e;
    n[t >> 5] |= 128 << t % 32, n[(t + 64 >>> 9 << 4) + 14] = t;
    var u = 1732584193,
        f = -271733879,
        i = -1732584194,
        r = 271733878;
    for (e = 0; e < n.length; e += 16) {
        var h = u,
            c = f,
            o = i,
            s = r;
        u = md5_ff(u, f, i, r, n[e + 0], 7, -680876936), r = md5_ff(r, u, f, i, n[e + 1], 12, -389564586), i = md5_ff(i, r, u, f, n[e + 2], 17, 606105819), f = md5_ff(f, i, r, u, n[e + 3], 22, -1044525330), u = md5_ff(u, f, i, r, n[e + 4], 7, -176418897), r = md5_ff(r, u, f, i, n[e + 5], 12, 1200080426), i = md5_ff(i, r, u, f, n[e + 6], 17, -1473231341), f = md5_ff(f, i, r, u, n[e + 7], 22, -45705983), u = md5_ff(u, f, i, r, n[e + 8], 7, 1770035416), r = md5_ff(r, u, f, i, n[e + 9], 12, -1958414417), i = md5_ff(i, r, u, f, n[e + 10], 17, -42063), f = md5_ff(f, i, r, u, n[e + 11], 22, -1990404162), u = md5_ff(u, f, i, r, n[e + 12], 7, 1804603682), r = md5_ff(r, u, f, i, n[e + 13], 12, -40341101), i = md5_ff(i, r, u, f, n[e + 14], 17, -1502002290), f = md5_ff(f, i, r, u, n[e + 15], 22, 1236535329), u = md5_gg(u, f, i, r, n[e + 1], 5, -165796510), r = md5_gg(r, u, f, i, n[e + 6], 9, -1069501632), i = md5_gg(i, r, u, f, n[e + 11], 14, 643717713), f = md5_gg(f, i, r, u, n[e + 0], 20, -373897302), u = md5_gg(u, f, i, r, n[e + 5], 5, -701558691), r = md5_gg(r, u, f, i, n[e + 10], 9, 38016083), i = md5_gg(i, r, u, f, n[e + 15], 14, -660478335), f = md5_gg(f, i, r, u, n[e + 4], 20, -405537848), u = md5_gg(u, f, i, r, n[e + 9], 5, 568446438), r = md5_gg(r, u, f, i, n[e + 14], 9, -1019803690), i = md5_gg(i, r, u, f, n[e + 3], 14, -187363961), f = md5_gg(f, i, r, u, n[e + 8], 20, 1163531501), u = md5_gg(u, f, i, r, n[e + 13], 5, -1444681467), r = md5_gg(r, u, f, i, n[e + 2], 9, -51403784), i = md5_gg(i, r, u, f, n[e + 7], 14, 1735328473), f = md5_gg(f, i, r, u, n[e + 12], 20, -1926607734), u = md5_hh(u, f, i, r, n[e + 5], 4, -378558), r = md5_hh(r, u, f, i, n[e + 8], 11, -2022574463), i = md5_hh(i, r, u, f, n[e + 11], 16, 1839030562), f = md5_hh(f, i, r, u, n[e + 14], 23, -35309556), u = md5_hh(u, f, i, r, n[e + 1], 4, -1530992060), r = md5_hh(r, u, f, i, n[e + 4], 11, 1272893353), i = md5_hh(i, r, u, f, n[e + 7], 16, -155497632), f = md5_hh(f, i, r, u, n[e + 10], 23, -1094730640), u = md5_hh(u, f, i, r, n[e + 13], 4, 681279174), r = md5_hh(r, u, f, i, n[e + 0], 11, -358537222), i = md5_hh(i, r, u, f, n[e + 3], 16, -722521979), f = md5_hh(f, i, r, u, n[e + 6], 23, 76029189), u = md5_hh(u, f, i, r, n[e + 9], 4, -640364487), r = md5_hh(r, u, f, i, n[e + 12], 11, -421815835), i = md5_hh(i, r, u, f, n[e + 15], 16, 530742520), f = md5_hh(f, i, r, u, n[e + 2], 23, -995338651), u = md5_ii(u, f, i, r, n[e + 0], 6, -198630844), r = md5_ii(r, u, f, i, n[e + 7], 10, 1126891415), i = md5_ii(i, r, u, f, n[e + 14], 15, -1416354905), f = md5_ii(f, i, r, u, n[e + 5], 21, -57434055), u = md5_ii(u, f, i, r, n[e + 12], 6, 1700485571), r = md5_ii(r, u, f, i, n[e + 3], 10, -1894986606), i = md5_ii(i, r, u, f, n[e + 10], 15, -1051523), f = md5_ii(f, i, r, u, n[e + 1], 21, -2054922799), u = md5_ii(u, f, i, r, n[e + 8], 6, 1873313359), r = md5_ii(r, u, f, i, n[e + 15], 10, -30611744), i = md5_ii(i, r, u, f, n[e + 6], 15, -1560198380), f = md5_ii(f, i, r, u, n[e + 13], 21, 1309151649), u = md5_ii(u, f, i, r, n[e + 4], 6, -145523070), r = md5_ii(r, u, f, i, n[e + 11], 10, -1120210379), i = md5_ii(i, r, u, f, n[e + 2], 15, 718787259), f = md5_ii(f, i, r, u, n[e + 9], 21, -343485551), u = safe_add(u, h), f = safe_add(f, c), i = safe_add(i, o), r = safe_add(r, s)
    }
    return Array(u, f, i, r)
}

function md5_cmn(n, t, i, r, u, f) {
    return safe_add(bit_rol(safe_add(safe_add(t, n), safe_add(r, f)), u), i)
}

function md5_ff(n, t, i, r, u, f, e) {
    return md5_cmn(t & i | ~t & r, n, t, u, f, e)
}

function md5_gg(n, t, i, r, u, f, e) {
    return md5_cmn(t & r | i & ~r, n, t, u, f, e)
}

function md5_hh(n, t, i, r, u, f, e) {
    return md5_cmn(t ^ i ^ r, n, t, u, f, e)
}

function md5_ii(n, t, i, r, u, f, e) {
    return md5_cmn(i ^ (t | ~r), n, t, u, f, e)
}

function core_hmac_md5(n, t) {
    var r = str2binl(n),
        f, u, i, e;
    for (r.length > 16 && (r = core_md5(r, n.length * chrsz)), f = Array(16), u = Array(16), i = 0; i < 16; i++) f[i] = r[i] ^ 909522486, u[i] = r[i] ^ 1549556828;
    return e = core_md5(f.concat(str2binl(t)), 512 + t.length * chrsz), core_md5(u.concat(e), 640)
}

function safe_add(n, t) {
    var i = (n & 65535) + (t & 65535),
        r = (n >> 16) + (t >> 16) + (i >> 16);
    return r << 16 | i & 65535
}

function bit_rol(n, t) {
    return n << t | n >>> 32 - t
}

function str2binl(n) {
    for (var i = Array(), r = (1 << chrsz) - 1, t = 0; t < n.length * chrsz; t += chrsz) i[t >> 5] |= (n.charCodeAt(t / chrsz) & r) << t % 32;
    return i
}

function binl2str(n) {
    for (var i = "", r = (1 << chrsz) - 1, t = 0; t < n.length * 32; t += chrsz) i += String.fromCharCode(n[t >> 5] >>> t % 32 & r);
    return i
}

function binl2hex(n) {
    for (var i = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", t = 0; t < n.length * 4; t++) r += i.charAt(n[t >> 2] >> t % 4 * 8 + 4 & 15) + i.charAt(n[t >> 2] >> t % 4 * 8 & 15);
    return r
}

function binl2b64(n) {
    for (var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "", u, i, t = 0; t < n.length * 4; t += 3)
        for (u = (n[t >> 2] >> 8 * (t % 4) & 255) << 16 | (n[t + 1 >> 2] >> 8 * ((t + 1) % 4) & 255) << 8 | n[t + 2 >> 2] >> 8 * ((t + 2) % 4) & 255, i = 0; i < 4; i++) r += t * 8 + i * 6 > n.length * 32 ? b64pad : f.charAt(u >> 6 * (3 - i) & 63);
    return r
}
var hexcase = 0,
    b64pad = "",
    chrsz = 8