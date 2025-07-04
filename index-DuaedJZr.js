(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        i(r);
    new MutationObserver(r => {
        for (const s of r)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function e(r) {
        const s = {};
        return r.integrity && (s.integrity = r.integrity),
        r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function i(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const s = e(r);
        fetch(r.href, s)
    }
}
)();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ea = "172"
  , Wi = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
}
  , Hi = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
}
  , Lh = 0
  , ml = 1
  , Uh = 2
  , zc = 1
  , Ih = 2
  , wn = 3
  , Yn = 0
  , Ne = 1
  , ln = 2
  , Xn = 0
  , Xi = 1
  , _l = 2
  , vl = 3
  , gl = 4
  , Nh = 5
  , oi = 100
  , Fh = 101
  , Oh = 102
  , Bh = 103
  , kh = 104
  , Vh = 200
  , zh = 201
  , Hh = 202
  , Gh = 203
  , Ao = 204
  , Po = 205
  , Wh = 206
  , Xh = 207
  , qh = 208
  , jh = 209
  , Yh = 210
  , Kh = 211
  , $h = 212
  , Zh = 213
  , Jh = 214
  , Ro = 0
  , Do = 1
  , Lo = 2
  , $i = 3
  , Uo = 4
  , Io = 5
  , No = 6
  , Fo = 7
  , Hc = 0
  , Qh = 1
  , td = 2
  , qn = 0
  , ed = 1
  , nd = 2
  , id = 3
  , rd = 4
  , sd = 5
  , od = 6
  , ad = 7
  , Gc = 300
  , Zi = 301
  , Ji = 302
  , Oo = 303
  , Bo = 304
  , Is = 306
  , ko = 1e3
  , li = 1001
  , Vo = 1002
  , on = 1003
  , ld = 1004
  , Kr = 1005
  , cn = 1006
  , Ws = 1007
  , ci = 1008
  , An = 1009
  , Wc = 1010
  , Xc = 1011
  , yr = 1012
  , wa = 1013
  , di = 1014
  , Mn = 1015
  , Ir = 1016
  , Ma = 1017
  , ya = 1018
  , Qi = 1020
  , qc = 35902
  , jc = 1021
  , Yc = 1022
  , rn = 1023
  , Kc = 1024
  , $c = 1025
  , qi = 1026
  , tr = 1027
  , Zc = 1028
  , Sa = 1029
  , Jc = 1030
  , Ta = 1031
  , Ca = 1033
  , xs = 33776
  , bs = 33777
  , Es = 33778
  , ws = 33779
  , zo = 35840
  , Ho = 35841
  , Go = 35842
  , Wo = 35843
  , Xo = 36196
  , qo = 37492
  , jo = 37496
  , Yo = 37808
  , Ko = 37809
  , $o = 37810
  , Zo = 37811
  , Jo = 37812
  , Qo = 37813
  , ta = 37814
  , ea = 37815
  , na = 37816
  , ia = 37817
  , ra = 37818
  , sa = 37819
  , oa = 37820
  , aa = 37821
  , Ms = 36492
  , la = 36494
  , ca = 36495
  , Qc = 36283
  , ua = 36284
  , ha = 36285
  , da = 36286
  , cd = 3200
  , ud = 3201
  , hd = 0
  , dd = 1
  , Gn = ""
  , ze = "srgb"
  , er = "srgb-linear"
  , Cs = "linear"
  , Jt = "srgb"
  , yi = 7680
  , xl = 519
  , pd = 512
  , fd = 513
  , md = 514
  , tu = 515
  , _d = 516
  , vd = 517
  , gd = 518
  , xd = 519
  , bl = 35044
  , El = "300 es"
  , yn = 2e3
  , As = 2001;
class gi {
    addEventListener(t, e) {
        this._listeners === void 0 && (this._listeners = {});
        const i = this._listeners;
        i[t] === void 0 && (i[t] = []),
        i[t].indexOf(e) === -1 && i[t].push(e)
    }
    hasEventListener(t, e) {
        if (this._listeners === void 0)
            return !1;
        const i = this._listeners;
        return i[t] !== void 0 && i[t].indexOf(e) !== -1
    }
    removeEventListener(t, e) {
        if (this._listeners === void 0)
            return;
        const r = this._listeners[t];
        if (r !== void 0) {
            const s = r.indexOf(e);
            s !== -1 && r.splice(s, 1)
        }
    }
    dispatchEvent(t) {
        if (this._listeners === void 0)
            return;
        const i = this._listeners[t.type];
        if (i !== void 0) {
            t.target = this;
            const r = i.slice(0);
            for (let s = 0, o = r.length; s < o; s++)
                r[s].call(this, t);
            t.target = null
        }
    }
}
const ye = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let wl = 1234567;
const wr = Math.PI / 180
  , Sr = 180 / Math.PI;
function rr() {
    const n = Math.random() * 4294967295 | 0
      , t = Math.random() * 4294967295 | 0
      , e = Math.random() * 4294967295 | 0
      , i = Math.random() * 4294967295 | 0;
    return (ye[n & 255] + ye[n >> 8 & 255] + ye[n >> 16 & 255] + ye[n >> 24 & 255] + "-" + ye[t & 255] + ye[t >> 8 & 255] + "-" + ye[t >> 16 & 15 | 64] + ye[t >> 24 & 255] + "-" + ye[e & 63 | 128] + ye[e >> 8 & 255] + "-" + ye[e >> 16 & 255] + ye[e >> 24 & 255] + ye[i & 255] + ye[i >> 8 & 255] + ye[i >> 16 & 255] + ye[i >> 24 & 255]).toLowerCase()
}
function It(n, t, e) {
    return Math.max(t, Math.min(e, n))
}
function Aa(n, t) {
    return (n % t + t) % t
}
function bd(n, t, e, i, r) {
    return i + (n - t) * (r - i) / (e - t)
}
function Ed(n, t, e) {
    return n !== t ? (e - n) / (t - n) : 0
}
function Mr(n, t, e) {
    return (1 - e) * n + e * t
}
function wd(n, t, e, i) {
    return Mr(n, t, 1 - Math.exp(-e * i))
}
function Md(n, t=1) {
    return t - Math.abs(Aa(n, t * 2) - t)
}
function yd(n, t, e) {
    return n <= t ? 0 : n >= e ? 1 : (n = (n - t) / (e - t),
    n * n * (3 - 2 * n))
}
function Sd(n, t, e) {
    return n <= t ? 0 : n >= e ? 1 : (n = (n - t) / (e - t),
    n * n * n * (n * (n * 6 - 15) + 10))
}
function Td(n, t) {
    return n + Math.floor(Math.random() * (t - n + 1))
}
function Cd(n, t) {
    return n + Math.random() * (t - n)
}
function Ad(n) {
    return n * (.5 - Math.random())
}
function Pd(n) {
    n !== void 0 && (wl = n);
    let t = wl += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1),
    t ^= t + Math.imul(t ^ t >>> 7, t | 61),
    ((t ^ t >>> 14) >>> 0) / 4294967296
}
function Rd(n) {
    return n * wr
}
function Dd(n) {
    return n * Sr
}
function Ld(n) {
    return (n & n - 1) === 0 && n !== 0
}
function Ud(n) {
    return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2))
}
function Id(n) {
    return Math.pow(2, Math.floor(Math.log(n) / Math.LN2))
}
function Nd(n, t, e, i, r) {
    const s = Math.cos
      , o = Math.sin
      , a = s(e / 2)
      , l = o(e / 2)
      , c = s((t + i) / 2)
      , u = o((t + i) / 2)
      , d = s((t - i) / 2)
      , p = o((t - i) / 2)
      , m = s((i - t) / 2)
      , g = o((i - t) / 2);
    switch (r) {
    case "XYX":
        n.set(a * u, l * d, l * p, a * c);
        break;
    case "YZY":
        n.set(l * p, a * u, l * d, a * c);
        break;
    case "ZXZ":
        n.set(l * d, l * p, a * u, a * c);
        break;
    case "XZX":
        n.set(a * u, l * g, l * m, a * c);
        break;
    case "YXY":
        n.set(l * m, a * u, l * g, a * c);
        break;
    case "ZYZ":
        n.set(l * g, l * m, a * u, a * c);
        break;
    default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
    }
}
function Vi(n, t) {
    switch (t.constructor) {
    case Float32Array:
        return n;
    case Uint32Array:
        return n / 4294967295;
    case Uint16Array:
        return n / 65535;
    case Uint8Array:
        return n / 255;
    case Int32Array:
        return Math.max(n / 2147483647, -1);
    case Int16Array:
        return Math.max(n / 32767, -1);
    case Int8Array:
        return Math.max(n / 127, -1);
    default:
        throw new Error("Invalid component type.")
    }
}
function Ce(n, t) {
    switch (t.constructor) {
    case Float32Array:
        return n;
    case Uint32Array:
        return Math.round(n * 4294967295);
    case Uint16Array:
        return Math.round(n * 65535);
    case Uint8Array:
        return Math.round(n * 255);
    case Int32Array:
        return Math.round(n * 2147483647);
    case Int16Array:
        return Math.round(n * 32767);
    case Int8Array:
        return Math.round(n * 127);
    default:
        throw new Error("Invalid component type.")
    }
}
const Fd = {
    DEG2RAD: wr,
    RAD2DEG: Sr,
    generateUUID: rr,
    clamp: It,
    euclideanModulo: Aa,
    mapLinear: bd,
    inverseLerp: Ed,
    lerp: Mr,
    damp: wd,
    pingpong: Md,
    smoothstep: yd,
    smootherstep: Sd,
    randInt: Td,
    randFloat: Cd,
    randFloatSpread: Ad,
    seededRandom: Pd,
    degToRad: Rd,
    radToDeg: Dd,
    isPowerOfTwo: Ld,
    ceilPowerOfTwo: Ud,
    floorPowerOfTwo: Id,
    setQuaternionFromProperEuler: Nd,
    normalize: Ce,
    denormalize: Vi
};
class Ut {
    constructor(t=0, e=0) {
        Ut.prototype.isVector2 = !0,
        this.x = t,
        this.y = e
    }
    get width() {
        return this.x
    }
    set width(t) {
        this.x = t
    }
    get height() {
        return this.y
    }
    set height(t) {
        this.y = t
    }
    set(t, e) {
        return this.x = t,
        this.y = e,
        this
    }
    setScalar(t) {
        return this.x = t,
        this.y = t,
        this
    }
    setX(t) {
        return this.x = t,
        this
    }
    setY(t) {
        return this.y = t,
        this
    }
    setComponent(t, e) {
        switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        default:
            throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(t) {
        return this.x = t.x,
        this.y = t.y,
        this
    }
    add(t) {
        return this.x += t.x,
        this.y += t.y,
        this
    }
    addScalar(t) {
        return this.x += t,
        this.y += t,
        this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x,
        this.y = t.y + e.y,
        this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e,
        this.y += t.y * e,
        this
    }
    sub(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this
    }
    subScalar(t) {
        return this.x -= t,
        this.y -= t,
        this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x,
        this.y = t.y - e.y,
        this
    }
    multiply(t) {
        return this.x *= t.x,
        this.y *= t.y,
        this
    }
    multiplyScalar(t) {
        return this.x *= t,
        this.y *= t,
        this
    }
    divide(t) {
        return this.x /= t.x,
        this.y /= t.y,
        this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    applyMatrix3(t) {
        const e = this.x
          , i = this.y
          , r = t.elements;
        return this.x = r[0] * e + r[3] * i + r[6],
        this.y = r[1] * e + r[4] * i + r[7],
        this
    }
    min(t) {
        return this.x = Math.min(this.x, t.x),
        this.y = Math.min(this.y, t.y),
        this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x),
        this.y = Math.max(this.y, t.y),
        this
    }
    clamp(t, e) {
        return this.x = It(this.x, t.x, e.x),
        this.y = It(this.y, t.y, e.y),
        this
    }
    clampScalar(t, e) {
        return this.x = It(this.x, t, e),
        this.y = It(this.y, t, e),
        this
    }
    clampLength(t, e) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(It(i, t, e))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y
    }
    cross(t) {
        return this.x * t.y - this.y * t.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (e === 0)
            return Math.PI / 2;
        const i = this.dot(t) / e;
        return Math.acos(It(i, -1, 1))
    }
    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
    }
    distanceToSquared(t) {
        const e = this.x - t.x
          , i = this.y - t.y;
        return e * e + i * i
    }
    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e,
        this.y += (t.y - this.y) * e,
        this
    }
    lerpVectors(t, e, i) {
        return this.x = t.x + (e.x - t.x) * i,
        this.y = t.y + (e.y - t.y) * i,
        this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y
    }
    fromArray(t, e=0) {
        return this.x = t[e],
        this.y = t[e + 1],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.x,
        t[e + 1] = this.y,
        t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e),
        this.y = t.getY(e),
        this
    }
    rotateAround(t, e) {
        const i = Math.cos(e)
          , r = Math.sin(e)
          , s = this.x - t.x
          , o = this.y - t.y;
        return this.x = s * i - o * r + t.x,
        this.y = s * r + o * i + t.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
class Pt {
    constructor(t, e, i, r, s, o, a, l, c) {
        Pt.prototype.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        t !== void 0 && this.set(t, e, i, r, s, o, a, l, c)
    }
    set(t, e, i, r, s, o, a, l, c) {
        const u = this.elements;
        return u[0] = t,
        u[1] = r,
        u[2] = a,
        u[3] = e,
        u[4] = s,
        u[5] = l,
        u[6] = i,
        u[7] = o,
        u[8] = c,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(t) {
        const e = this.elements
          , i = t.elements;
        return e[0] = i[0],
        e[1] = i[1],
        e[2] = i[2],
        e[3] = i[3],
        e[4] = i[4],
        e[5] = i[5],
        e[6] = i[6],
        e[7] = i[7],
        e[8] = i[8],
        this
    }
    extractBasis(t, e, i) {
        return t.setFromMatrix3Column(this, 0),
        e.setFromMatrix3Column(this, 1),
        i.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(t) {
        const e = t.elements;
        return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
        this
    }
    multiply(t) {
        return this.multiplyMatrices(this, t)
    }
    premultiply(t) {
        return this.multiplyMatrices(t, this)
    }
    multiplyMatrices(t, e) {
        const i = t.elements
          , r = e.elements
          , s = this.elements
          , o = i[0]
          , a = i[3]
          , l = i[6]
          , c = i[1]
          , u = i[4]
          , d = i[7]
          , p = i[2]
          , m = i[5]
          , g = i[8]
          , b = r[0]
          , f = r[3]
          , h = r[6]
          , T = r[1]
          , y = r[4]
          , M = r[7]
          , U = r[2]
          , D = r[5]
          , C = r[8];
        return s[0] = o * b + a * T + l * U,
        s[3] = o * f + a * y + l * D,
        s[6] = o * h + a * M + l * C,
        s[1] = c * b + u * T + d * U,
        s[4] = c * f + u * y + d * D,
        s[7] = c * h + u * M + d * C,
        s[2] = p * b + m * T + g * U,
        s[5] = p * f + m * y + g * D,
        s[8] = p * h + m * M + g * C,
        this
    }
    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t,
        e[3] *= t,
        e[6] *= t,
        e[1] *= t,
        e[4] *= t,
        e[7] *= t,
        e[2] *= t,
        e[5] *= t,
        e[8] *= t,
        this
    }
    determinant() {
        const t = this.elements
          , e = t[0]
          , i = t[1]
          , r = t[2]
          , s = t[3]
          , o = t[4]
          , a = t[5]
          , l = t[6]
          , c = t[7]
          , u = t[8];
        return e * o * u - e * a * c - i * s * u + i * a * l + r * s * c - r * o * l
    }
    invert() {
        const t = this.elements
          , e = t[0]
          , i = t[1]
          , r = t[2]
          , s = t[3]
          , o = t[4]
          , a = t[5]
          , l = t[6]
          , c = t[7]
          , u = t[8]
          , d = u * o - a * c
          , p = a * l - u * s
          , m = c * s - o * l
          , g = e * d + i * p + r * m;
        if (g === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const b = 1 / g;
        return t[0] = d * b,
        t[1] = (r * c - u * i) * b,
        t[2] = (a * i - r * o) * b,
        t[3] = p * b,
        t[4] = (u * e - r * l) * b,
        t[5] = (r * s - a * e) * b,
        t[6] = m * b,
        t[7] = (i * l - c * e) * b,
        t[8] = (o * e - i * s) * b,
        this
    }
    transpose() {
        let t;
        const e = this.elements;
        return t = e[1],
        e[1] = e[3],
        e[3] = t,
        t = e[2],
        e[2] = e[6],
        e[6] = t,
        t = e[5],
        e[5] = e[7],
        e[7] = t,
        this
    }
    getNormalMatrix(t) {
        return this.setFromMatrix4(t).invert().transpose()
    }
    transposeIntoArray(t) {
        const e = this.elements;
        return t[0] = e[0],
        t[1] = e[3],
        t[2] = e[6],
        t[3] = e[1],
        t[4] = e[4],
        t[5] = e[7],
        t[6] = e[2],
        t[7] = e[5],
        t[8] = e[8],
        this
    }
    setUvTransform(t, e, i, r, s, o, a) {
        const l = Math.cos(s)
          , c = Math.sin(s);
        return this.set(i * l, i * c, -i * (l * o + c * a) + o + t, -r * c, r * l, -r * (-c * o + l * a) + a + e, 0, 0, 1),
        this
    }
    scale(t, e) {
        return this.premultiply(Xs.makeScale(t, e)),
        this
    }
    rotate(t) {
        return this.premultiply(Xs.makeRotation(-t)),
        this
    }
    translate(t, e) {
        return this.premultiply(Xs.makeTranslation(t, e)),
        this
    }
    makeTranslation(t, e) {
        return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
        this
    }
    makeRotation(t) {
        const e = Math.cos(t)
          , i = Math.sin(t);
        return this.set(e, -i, 0, i, e, 0, 0, 0, 1),
        this
    }
    makeScale(t, e) {
        return this.set(t, 0, 0, 0, e, 0, 0, 0, 1),
        this
    }
    equals(t) {
        const e = this.elements
          , i = t.elements;
        for (let r = 0; r < 9; r++)
            if (e[r] !== i[r])
                return !1;
        return !0
    }
    fromArray(t, e=0) {
        for (let i = 0; i < 9; i++)
            this.elements[i] = t[i + e];
        return this
    }
    toArray(t=[], e=0) {
        const i = this.elements;
        return t[e] = i[0],
        t[e + 1] = i[1],
        t[e + 2] = i[2],
        t[e + 3] = i[3],
        t[e + 4] = i[4],
        t[e + 5] = i[5],
        t[e + 6] = i[6],
        t[e + 7] = i[7],
        t[e + 8] = i[8],
        t
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
const Xs = new Pt;
function eu(n) {
    for (let t = n.length - 1; t >= 0; --t)
        if (n[t] >= 65535)
            return !0;
    return !1
}
function Tr(n) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", n)
}
function Od() {
    const n = Tr("canvas");
    return n.style.display = "block",
    n
}
const Ml = {};
function zi(n) {
    n in Ml || (Ml[n] = !0,
    console.warn(n))
}
function Bd(n, t, e) {
    return new Promise(function(i, r) {
        function s() {
            switch (n.clientWaitSync(t, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
            case n.WAIT_FAILED:
                r();
                break;
            case n.TIMEOUT_EXPIRED:
                setTimeout(s, e);
                break;
            default:
                i()
            }
        }
        setTimeout(s, e)
    }
    )
}
function kd(n) {
    const t = n.elements;
    t[2] = .5 * t[2] + .5 * t[3],
    t[6] = .5 * t[6] + .5 * t[7],
    t[10] = .5 * t[10] + .5 * t[11],
    t[14] = .5 * t[14] + .5 * t[15]
}
function Vd(n) {
    const t = n.elements;
    t[11] === -1 ? (t[10] = -t[10] - 1,
    t[14] = -t[14]) : (t[10] = -t[10],
    t[14] = -t[14] + 1)
}
const yl = new Pt().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322)
  , Sl = new Pt().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function zd() {
    const n = {
        enabled: !0,
        workingColorSpace: er,
        spaces: {},
        convert: function(r, s, o) {
            return this.enabled === !1 || s === o || !s || !o || (this.spaces[s].transfer === Jt && (r.r = Tn(r.r),
            r.g = Tn(r.g),
            r.b = Tn(r.b)),
            this.spaces[s].primaries !== this.spaces[o].primaries && (r.applyMatrix3(this.spaces[s].toXYZ),
            r.applyMatrix3(this.spaces[o].fromXYZ)),
            this.spaces[o].transfer === Jt && (r.r = ji(r.r),
            r.g = ji(r.g),
            r.b = ji(r.b))),
            r
        },
        fromWorkingColorSpace: function(r, s) {
            return this.convert(r, this.workingColorSpace, s)
        },
        toWorkingColorSpace: function(r, s) {
            return this.convert(r, s, this.workingColorSpace)
        },
        getPrimaries: function(r) {
            return this.spaces[r].primaries
        },
        getTransfer: function(r) {
            return r === Gn ? Cs : this.spaces[r].transfer
        },
        getLuminanceCoefficients: function(r, s=this.workingColorSpace) {
            return r.fromArray(this.spaces[s].luminanceCoefficients)
        },
        define: function(r) {
            Object.assign(this.spaces, r)
        },
        _getMatrix: function(r, s, o) {
            return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)
        },
        _getDrawingBufferColorSpace: function(r) {
            return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace
        },
        _getUnpackColorSpace: function(r=this.workingColorSpace) {
            return this.spaces[r].workingColorSpaceConfig.unpackColorSpace
        }
    }
      , t = [.64, .33, .3, .6, .15, .06]
      , e = [.2126, .7152, .0722]
      , i = [.3127, .329];
    return n.define({
        [er]: {
            primaries: t,
            whitePoint: i,
            transfer: Cs,
            toXYZ: yl,
            fromXYZ: Sl,
            luminanceCoefficients: e,
            workingColorSpaceConfig: {
                unpackColorSpace: ze
            },
            outputColorSpaceConfig: {
                drawingBufferColorSpace: ze
            }
        },
        [ze]: {
            primaries: t,
            whitePoint: i,
            transfer: Jt,
            toXYZ: yl,
            fromXYZ: Sl,
            luminanceCoefficients: e,
            outputColorSpaceConfig: {
                drawingBufferColorSpace: ze
            }
        }
    }),
    n
}
const qt = zd();
function Tn(n) {
    return n < .04045 ? n * .0773993808 : Math.pow(n * .9478672986 + .0521327014, 2.4)
}
function ji(n) {
    return n < .0031308 ? n * 12.92 : 1.055 * Math.pow(n, .41666) - .055
}
let Si;
class Hd {
    static getDataURL(t) {
        if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
            return t.src;
        let e;
        if (t instanceof HTMLCanvasElement)
            e = t;
        else {
            Si === void 0 && (Si = Tr("canvas")),
            Si.width = t.width,
            Si.height = t.height;
            const i = Si.getContext("2d");
            t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height),
            e = Si
        }
        return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t),
        e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
    }
    static sRGBToLinear(t) {
        if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
            const e = Tr("canvas");
            e.width = t.width,
            e.height = t.height;
            const i = e.getContext("2d");
            i.drawImage(t, 0, 0, t.width, t.height);
            const r = i.getImageData(0, 0, t.width, t.height)
              , s = r.data;
            for (let o = 0; o < s.length; o++)
                s[o] = Tn(s[o] / 255) * 255;
            return i.putImageData(r, 0, 0),
            e
        } else if (t.data) {
            const e = t.data.slice(0);
            for (let i = 0; i < e.length; i++)
                e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[i] = Math.floor(Tn(e[i] / 255) * 255) : e[i] = Tn(e[i]);
            return {
                data: e,
                width: t.width,
                height: t.height
            }
        } else
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
            t
    }
}
let Gd = 0;
class nu {
    constructor(t=null) {
        this.isSource = !0,
        Object.defineProperty(this, "id", {
            value: Gd++
        }),
        this.uuid = rr(),
        this.data = t,
        this.dataReady = !0,
        this.version = 0
    }
    set needsUpdate(t) {
        t === !0 && this.version++
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        if (!e && t.images[this.uuid] !== void 0)
            return t.images[this.uuid];
        const i = {
            uuid: this.uuid,
            url: ""
        }
          , r = this.data;
        if (r !== null) {
            let s;
            if (Array.isArray(r)) {
                s = [];
                for (let o = 0, a = r.length; o < a; o++)
                    r[o].isDataTexture ? s.push(qs(r[o].image)) : s.push(qs(r[o]))
            } else
                s = qs(r);
            i.url = s
        }
        return e || (t.images[this.uuid] = i),
        i
    }
}
function qs(n) {
    return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? Hd.getDataURL(n) : n.data ? {
        data: Array.from(n.data),
        width: n.width,
        height: n.height,
        type: n.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."),
    {})
}
let Wd = 0;
class Pe extends gi {
    constructor(t=Pe.DEFAULT_IMAGE, e=Pe.DEFAULT_MAPPING, i=li, r=li, s=cn, o=ci, a=rn, l=An, c=Pe.DEFAULT_ANISOTROPY, u=Gn) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: Wd++
        }),
        this.uuid = rr(),
        this.name = "",
        this.source = new nu(t),
        this.mipmaps = [],
        this.mapping = e,
        this.channel = 0,
        this.wrapS = i,
        this.wrapT = r,
        this.magFilter = s,
        this.minFilter = o,
        this.anisotropy = c,
        this.format = a,
        this.internalFormat = null,
        this.type = l,
        this.offset = new Ut(0,0),
        this.repeat = new Ut(1,1),
        this.center = new Ut(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new Pt,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.colorSpace = u,
        this.userData = {},
        this.version = 0,
        this.onUpdate = null,
        this.renderTarget = null,
        this.isRenderTargetTexture = !1,
        this.pmremVersion = 0
    }
    get image() {
        return this.source.data
    }
    set image(t=null) {
        this.source.data = t
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        return this.name = t.name,
        this.source = t.source,
        this.mipmaps = t.mipmaps.slice(0),
        this.mapping = t.mapping,
        this.channel = t.channel,
        this.wrapS = t.wrapS,
        this.wrapT = t.wrapT,
        this.magFilter = t.magFilter,
        this.minFilter = t.minFilter,
        this.anisotropy = t.anisotropy,
        this.format = t.format,
        this.internalFormat = t.internalFormat,
        this.type = t.type,
        this.offset.copy(t.offset),
        this.repeat.copy(t.repeat),
        this.center.copy(t.center),
        this.rotation = t.rotation,
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this.matrix.copy(t.matrix),
        this.generateMipmaps = t.generateMipmaps,
        this.premultiplyAlpha = t.premultiplyAlpha,
        this.flipY = t.flipY,
        this.unpackAlignment = t.unpackAlignment,
        this.colorSpace = t.colorSpace,
        this.renderTarget = t.renderTarget,
        this.isRenderTargetTexture = t.isRenderTargetTexture,
        this.userData = JSON.parse(JSON.stringify(t.userData)),
        this.needsUpdate = !0,
        this
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        if (!e && t.textures[this.uuid] !== void 0)
            return t.textures[this.uuid];
        const i = {
            metadata: {
                version: 4.6,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (i.userData = this.userData),
        e || (t.textures[this.uuid] = i),
        i
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(t) {
        if (this.mapping !== Gc)
            return t;
        if (t.applyMatrix3(this.matrix),
        t.x < 0 || t.x > 1)
            switch (this.wrapS) {
            case ko:
                t.x = t.x - Math.floor(t.x);
                break;
            case li:
                t.x = t.x < 0 ? 0 : 1;
                break;
            case Vo:
                Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
                break
            }
        if (t.y < 0 || t.y > 1)
            switch (this.wrapT) {
            case ko:
                t.y = t.y - Math.floor(t.y);
                break;
            case li:
                t.y = t.y < 0 ? 0 : 1;
                break;
            case Vo:
                Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
                break
            }
        return this.flipY && (t.y = 1 - t.y),
        t
    }
    set needsUpdate(t) {
        t === !0 && (this.version++,
        this.source.needsUpdate = !0)
    }
    set needsPMREMUpdate(t) {
        t === !0 && this.pmremVersion++
    }
}
Pe.DEFAULT_IMAGE = null;
Pe.DEFAULT_MAPPING = Gc;
Pe.DEFAULT_ANISOTROPY = 1;
class de {
    constructor(t=0, e=0, i=0, r=1) {
        de.prototype.isVector4 = !0,
        this.x = t,
        this.y = e,
        this.z = i,
        this.w = r
    }
    get width() {
        return this.z
    }
    set width(t) {
        this.z = t
    }
    get height() {
        return this.w
    }
    set height(t) {
        this.w = t
    }
    set(t, e, i, r) {
        return this.x = t,
        this.y = e,
        this.z = i,
        this.w = r,
        this
    }
    setScalar(t) {
        return this.x = t,
        this.y = t,
        this.z = t,
        this.w = t,
        this
    }
    setX(t) {
        return this.x = t,
        this
    }
    setY(t) {
        return this.y = t,
        this
    }
    setZ(t) {
        return this.z = t,
        this
    }
    setW(t) {
        return this.w = t,
        this
    }
    setComponent(t, e) {
        switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        case 2:
            this.z = e;
            break;
        case 3:
            this.w = e;
            break;
        default:
            throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(t) {
        return this.x = t.x,
        this.y = t.y,
        this.z = t.z,
        this.w = t.w !== void 0 ? t.w : 1,
        this
    }
    add(t) {
        return this.x += t.x,
        this.y += t.y,
        this.z += t.z,
        this.w += t.w,
        this
    }
    addScalar(t) {
        return this.x += t,
        this.y += t,
        this.z += t,
        this.w += t,
        this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x,
        this.y = t.y + e.y,
        this.z = t.z + e.z,
        this.w = t.w + e.w,
        this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e,
        this.y += t.y * e,
        this.z += t.z * e,
        this.w += t.w * e,
        this
    }
    sub(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this.z -= t.z,
        this.w -= t.w,
        this
    }
    subScalar(t) {
        return this.x -= t,
        this.y -= t,
        this.z -= t,
        this.w -= t,
        this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x,
        this.y = t.y - e.y,
        this.z = t.z - e.z,
        this.w = t.w - e.w,
        this
    }
    multiply(t) {
        return this.x *= t.x,
        this.y *= t.y,
        this.z *= t.z,
        this.w *= t.w,
        this
    }
    multiplyScalar(t) {
        return this.x *= t,
        this.y *= t,
        this.z *= t,
        this.w *= t,
        this
    }
    applyMatrix4(t) {
        const e = this.x
          , i = this.y
          , r = this.z
          , s = this.w
          , o = t.elements;
        return this.x = o[0] * e + o[4] * i + o[8] * r + o[12] * s,
        this.y = o[1] * e + o[5] * i + o[9] * r + o[13] * s,
        this.z = o[2] * e + o[6] * i + o[10] * r + o[14] * s,
        this.w = o[3] * e + o[7] * i + o[11] * r + o[15] * s,
        this
    }
    divide(t) {
        return this.x /= t.x,
        this.y /= t.y,
        this.z /= t.z,
        this.w /= t.w,
        this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    setAxisAngleFromQuaternion(t) {
        this.w = 2 * Math.acos(t.w);
        const e = Math.sqrt(1 - t.w * t.w);
        return e < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = t.x / e,
        this.y = t.y / e,
        this.z = t.z / e),
        this
    }
    setAxisAngleFromRotationMatrix(t) {
        let e, i, r, s;
        const l = t.elements
          , c = l[0]
          , u = l[4]
          , d = l[8]
          , p = l[1]
          , m = l[5]
          , g = l[9]
          , b = l[2]
          , f = l[6]
          , h = l[10];
        if (Math.abs(u - p) < .01 && Math.abs(d - b) < .01 && Math.abs(g - f) < .01) {
            if (Math.abs(u + p) < .1 && Math.abs(d + b) < .1 && Math.abs(g + f) < .1 && Math.abs(c + m + h - 3) < .1)
                return this.set(1, 0, 0, 0),
                this;
            e = Math.PI;
            const y = (c + 1) / 2
              , M = (m + 1) / 2
              , U = (h + 1) / 2
              , D = (u + p) / 4
              , C = (d + b) / 4
              , I = (g + f) / 4;
            return y > M && y > U ? y < .01 ? (i = 0,
            r = .707106781,
            s = .707106781) : (i = Math.sqrt(y),
            r = D / i,
            s = C / i) : M > U ? M < .01 ? (i = .707106781,
            r = 0,
            s = .707106781) : (r = Math.sqrt(M),
            i = D / r,
            s = I / r) : U < .01 ? (i = .707106781,
            r = .707106781,
            s = 0) : (s = Math.sqrt(U),
            i = C / s,
            r = I / s),
            this.set(i, r, s, e),
            this
        }
        let T = Math.sqrt((f - g) * (f - g) + (d - b) * (d - b) + (p - u) * (p - u));
        return Math.abs(T) < .001 && (T = 1),
        this.x = (f - g) / T,
        this.y = (d - b) / T,
        this.z = (p - u) / T,
        this.w = Math.acos((c + m + h - 1) / 2),
        this
    }
    setFromMatrixPosition(t) {
        const e = t.elements;
        return this.x = e[12],
        this.y = e[13],
        this.z = e[14],
        this.w = e[15],
        this
    }
    min(t) {
        return this.x = Math.min(this.x, t.x),
        this.y = Math.min(this.y, t.y),
        this.z = Math.min(this.z, t.z),
        this.w = Math.min(this.w, t.w),
        this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x),
        this.y = Math.max(this.y, t.y),
        this.z = Math.max(this.z, t.z),
        this.w = Math.max(this.w, t.w),
        this
    }
    clamp(t, e) {
        return this.x = It(this.x, t.x, e.x),
        this.y = It(this.y, t.y, e.y),
        this.z = It(this.z, t.z, e.z),
        this.w = It(this.w, t.w, e.w),
        this
    }
    clampScalar(t, e) {
        return this.x = It(this.x, t, e),
        this.y = It(this.y, t, e),
        this.z = It(this.z, t, e),
        this.w = It(this.w, t, e),
        this
    }
    clampLength(t, e) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(It(i, t, e))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this.w = Math.trunc(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e,
        this.y += (t.y - this.y) * e,
        this.z += (t.z - this.z) * e,
        this.w += (t.w - this.w) * e,
        this
    }
    lerpVectors(t, e, i) {
        return this.x = t.x + (e.x - t.x) * i,
        this.y = t.y + (e.y - t.y) * i,
        this.z = t.z + (e.z - t.z) * i,
        this.w = t.w + (e.w - t.w) * i,
        this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
    }
    fromArray(t, e=0) {
        return this.x = t[e],
        this.y = t[e + 1],
        this.z = t[e + 2],
        this.w = t[e + 3],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.x,
        t[e + 1] = this.y,
        t[e + 2] = this.z,
        t[e + 3] = this.w,
        t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e),
        this.y = t.getY(e),
        this.z = t.getZ(e),
        this.w = t.getW(e),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
class Xd extends gi {
    constructor(t=1, e=1, i={}) {
        super(),
        this.isRenderTarget = !0,
        this.width = t,
        this.height = e,
        this.depth = 1,
        this.scissor = new de(0,0,t,e),
        this.scissorTest = !1,
        this.viewport = new de(0,0,t,e);
        const r = {
            width: t,
            height: e,
            depth: 1
        };
        i = Object.assign({
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: cn,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1
        }, i);
        const s = new Pe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);
        s.flipY = !1,
        s.generateMipmaps = i.generateMipmaps,
        s.internalFormat = i.internalFormat,
        this.textures = [];
        const o = i.count;
        for (let a = 0; a < o; a++)
            this.textures[a] = s.clone(),
            this.textures[a].isRenderTargetTexture = !0,
            this.textures[a].renderTarget = this;
        this.depthBuffer = i.depthBuffer,
        this.stencilBuffer = i.stencilBuffer,
        this.resolveDepthBuffer = i.resolveDepthBuffer,
        this.resolveStencilBuffer = i.resolveStencilBuffer,
        this._depthTexture = null,
        this.depthTexture = i.depthTexture,
        this.samples = i.samples
    }
    get texture() {
        return this.textures[0]
    }
    set texture(t) {
        this.textures[0] = t
    }
    set depthTexture(t) {
        this._depthTexture !== null && (this._depthTexture.renderTarget = null),
        t !== null && (t.renderTarget = this),
        this._depthTexture = t
    }
    get depthTexture() {
        return this._depthTexture
    }
    setSize(t, e, i=1) {
        if (this.width !== t || this.height !== e || this.depth !== i) {
            this.width = t,
            this.height = e,
            this.depth = i;
            for (let r = 0, s = this.textures.length; r < s; r++)
                this.textures[r].image.width = t,
                this.textures[r].image.height = e,
                this.textures[r].image.depth = i;
            this.dispose()
        }
        this.viewport.set(0, 0, t, e),
        this.scissor.set(0, 0, t, e)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        this.width = t.width,
        this.height = t.height,
        this.depth = t.depth,
        this.scissor.copy(t.scissor),
        this.scissorTest = t.scissorTest,
        this.viewport.copy(t.viewport),
        this.textures.length = 0;
        for (let i = 0, r = t.textures.length; i < r; i++)
            this.textures[i] = t.textures[i].clone(),
            this.textures[i].isRenderTargetTexture = !0,
            this.textures[i].renderTarget = this;
        const e = Object.assign({}, t.texture.image);
        return this.texture.source = new nu(e),
        this.depthBuffer = t.depthBuffer,
        this.stencilBuffer = t.stencilBuffer,
        this.resolveDepthBuffer = t.resolveDepthBuffer,
        this.resolveStencilBuffer = t.resolveStencilBuffer,
        t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()),
        this.samples = t.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class pi extends Xd {
    constructor(t=1, e=1, i={}) {
        super(t, e, i),
        this.isWebGLRenderTarget = !0
    }
}
class iu extends Pe {
    constructor(t=null, e=1, i=1, r=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: t,
            width: e,
            height: i,
            depth: r
        },
        this.magFilter = on,
        this.minFilter = on,
        this.wrapR = li,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.layerUpdates = new Set
    }
    addLayerUpdate(t) {
        this.layerUpdates.add(t)
    }
    clearLayerUpdates() {
        this.layerUpdates.clear()
    }
}
class qd extends Pe {
    constructor(t=null, e=1, i=1, r=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: t,
            width: e,
            height: i,
            depth: r
        },
        this.magFilter = on,
        this.minFilter = on,
        this.wrapR = li,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class fi {
    constructor(t=0, e=0, i=0, r=1) {
        this.isQuaternion = !0,
        this._x = t,
        this._y = e,
        this._z = i,
        this._w = r
    }
    static slerpFlat(t, e, i, r, s, o, a) {
        let l = i[r + 0]
          , c = i[r + 1]
          , u = i[r + 2]
          , d = i[r + 3];
        const p = s[o + 0]
          , m = s[o + 1]
          , g = s[o + 2]
          , b = s[o + 3];
        if (a === 0) {
            t[e + 0] = l,
            t[e + 1] = c,
            t[e + 2] = u,
            t[e + 3] = d;
            return
        }
        if (a === 1) {
            t[e + 0] = p,
            t[e + 1] = m,
            t[e + 2] = g,
            t[e + 3] = b;
            return
        }
        if (d !== b || l !== p || c !== m || u !== g) {
            let f = 1 - a;
            const h = l * p + c * m + u * g + d * b
              , T = h >= 0 ? 1 : -1
              , y = 1 - h * h;
            if (y > Number.EPSILON) {
                const U = Math.sqrt(y)
                  , D = Math.atan2(U, h * T);
                f = Math.sin(f * D) / U,
                a = Math.sin(a * D) / U
            }
            const M = a * T;
            if (l = l * f + p * M,
            c = c * f + m * M,
            u = u * f + g * M,
            d = d * f + b * M,
            f === 1 - a) {
                const U = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
                l *= U,
                c *= U,
                u *= U,
                d *= U
            }
        }
        t[e] = l,
        t[e + 1] = c,
        t[e + 2] = u,
        t[e + 3] = d
    }
    static multiplyQuaternionsFlat(t, e, i, r, s, o) {
        const a = i[r]
          , l = i[r + 1]
          , c = i[r + 2]
          , u = i[r + 3]
          , d = s[o]
          , p = s[o + 1]
          , m = s[o + 2]
          , g = s[o + 3];
        return t[e] = a * g + u * d + l * m - c * p,
        t[e + 1] = l * g + u * p + c * d - a * m,
        t[e + 2] = c * g + u * m + a * p - l * d,
        t[e + 3] = u * g - a * d - l * p - c * m,
        t
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x = t,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y = t,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(t) {
        this._z = t,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(t) {
        this._w = t,
        this._onChangeCallback()
    }
    set(t, e, i, r) {
        return this._x = t,
        this._y = e,
        this._z = i,
        this._w = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(t) {
        return this._x = t.x,
        this._y = t.y,
        this._z = t.z,
        this._w = t.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(t, e=!0) {
        const i = t._x
          , r = t._y
          , s = t._z
          , o = t._order
          , a = Math.cos
          , l = Math.sin
          , c = a(i / 2)
          , u = a(r / 2)
          , d = a(s / 2)
          , p = l(i / 2)
          , m = l(r / 2)
          , g = l(s / 2);
        switch (o) {
        case "XYZ":
            this._x = p * u * d + c * m * g,
            this._y = c * m * d - p * u * g,
            this._z = c * u * g + p * m * d,
            this._w = c * u * d - p * m * g;
            break;
        case "YXZ":
            this._x = p * u * d + c * m * g,
            this._y = c * m * d - p * u * g,
            this._z = c * u * g - p * m * d,
            this._w = c * u * d + p * m * g;
            break;
        case "ZXY":
            this._x = p * u * d - c * m * g,
            this._y = c * m * d + p * u * g,
            this._z = c * u * g + p * m * d,
            this._w = c * u * d - p * m * g;
            break;
        case "ZYX":
            this._x = p * u * d - c * m * g,
            this._y = c * m * d + p * u * g,
            this._z = c * u * g - p * m * d,
            this._w = c * u * d + p * m * g;
            break;
        case "YZX":
            this._x = p * u * d + c * m * g,
            this._y = c * m * d + p * u * g,
            this._z = c * u * g - p * m * d,
            this._w = c * u * d - p * m * g;
            break;
        case "XZY":
            this._x = p * u * d - c * m * g,
            this._y = c * m * d - p * u * g,
            this._z = c * u * g + p * m * d,
            this._w = c * u * d + p * m * g;
            break;
        default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o)
        }
        return e === !0 && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(t, e) {
        const i = e / 2
          , r = Math.sin(i);
        return this._x = t.x * r,
        this._y = t.y * r,
        this._z = t.z * r,
        this._w = Math.cos(i),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(t) {
        const e = t.elements
          , i = e[0]
          , r = e[4]
          , s = e[8]
          , o = e[1]
          , a = e[5]
          , l = e[9]
          , c = e[2]
          , u = e[6]
          , d = e[10]
          , p = i + a + d;
        if (p > 0) {
            const m = .5 / Math.sqrt(p + 1);
            this._w = .25 / m,
            this._x = (u - l) * m,
            this._y = (s - c) * m,
            this._z = (o - r) * m
        } else if (i > a && i > d) {
            const m = 2 * Math.sqrt(1 + i - a - d);
            this._w = (u - l) / m,
            this._x = .25 * m,
            this._y = (r + o) / m,
            this._z = (s + c) / m
        } else if (a > d) {
            const m = 2 * Math.sqrt(1 + a - i - d);
            this._w = (s - c) / m,
            this._x = (r + o) / m,
            this._y = .25 * m,
            this._z = (l + u) / m
        } else {
            const m = 2 * Math.sqrt(1 + d - i - a);
            this._w = (o - r) / m,
            this._x = (s + c) / m,
            this._y = (l + u) / m,
            this._z = .25 * m
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(t, e) {
        let i = t.dot(e) + 1;
        return i < Number.EPSILON ? (i = 0,
        Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
        this._y = t.x,
        this._z = 0,
        this._w = i) : (this._x = 0,
        this._y = -t.z,
        this._z = t.y,
        this._w = i)) : (this._x = t.y * e.z - t.z * e.y,
        this._y = t.z * e.x - t.x * e.z,
        this._z = t.x * e.y - t.y * e.x,
        this._w = i),
        this.normalize()
    }
    angleTo(t) {
        return 2 * Math.acos(Math.abs(It(this.dot(t), -1, 1)))
    }
    rotateTowards(t, e) {
        const i = this.angleTo(t);
        if (i === 0)
            return this;
        const r = Math.min(1, e / i);
        return this.slerp(t, r),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let t = this.length();
        return t === 0 ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (t = 1 / t,
        this._x = this._x * t,
        this._y = this._y * t,
        this._z = this._z * t,
        this._w = this._w * t),
        this._onChangeCallback(),
        this
    }
    multiply(t) {
        return this.multiplyQuaternions(this, t)
    }
    premultiply(t) {
        return this.multiplyQuaternions(t, this)
    }
    multiplyQuaternions(t, e) {
        const i = t._x
          , r = t._y
          , s = t._z
          , o = t._w
          , a = e._x
          , l = e._y
          , c = e._z
          , u = e._w;
        return this._x = i * u + o * a + r * c - s * l,
        this._y = r * u + o * l + s * a - i * c,
        this._z = s * u + o * c + i * l - r * a,
        this._w = o * u - i * a - r * l - s * c,
        this._onChangeCallback(),
        this
    }
    slerp(t, e) {
        if (e === 0)
            return this;
        if (e === 1)
            return this.copy(t);
        const i = this._x
          , r = this._y
          , s = this._z
          , o = this._w;
        let a = o * t._w + i * t._x + r * t._y + s * t._z;
        if (a < 0 ? (this._w = -t._w,
        this._x = -t._x,
        this._y = -t._y,
        this._z = -t._z,
        a = -a) : this.copy(t),
        a >= 1)
            return this._w = o,
            this._x = i,
            this._y = r,
            this._z = s,
            this;
        const l = 1 - a * a;
        if (l <= Number.EPSILON) {
            const m = 1 - e;
            return this._w = m * o + e * this._w,
            this._x = m * i + e * this._x,
            this._y = m * r + e * this._y,
            this._z = m * s + e * this._z,
            this.normalize(),
            this
        }
        const c = Math.sqrt(l)
          , u = Math.atan2(c, a)
          , d = Math.sin((1 - e) * u) / c
          , p = Math.sin(e * u) / c;
        return this._w = o * d + this._w * p,
        this._x = i * d + this._x * p,
        this._y = r * d + this._y * p,
        this._z = s * d + this._z * p,
        this._onChangeCallback(),
        this
    }
    slerpQuaternions(t, e, i) {
        return this.copy(t).slerp(e, i)
    }
    random() {
        const t = 2 * Math.PI * Math.random()
          , e = 2 * Math.PI * Math.random()
          , i = Math.random()
          , r = Math.sqrt(1 - i)
          , s = Math.sqrt(i);
        return this.set(r * Math.sin(t), r * Math.cos(t), s * Math.sin(e), s * Math.cos(e))
    }
    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
    }
    fromArray(t, e=0) {
        return this._x = t[e],
        this._y = t[e + 1],
        this._z = t[e + 2],
        this._w = t[e + 3],
        this._onChangeCallback(),
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this._x,
        t[e + 1] = this._y,
        t[e + 2] = this._z,
        t[e + 3] = this._w,
        t
    }
    fromBufferAttribute(t, e) {
        return this._x = t.getX(e),
        this._y = t.getY(e),
        this._z = t.getZ(e),
        this._w = t.getW(e),
        this._onChangeCallback(),
        this
    }
    toJSON() {
        return this.toArray()
    }
    _onChange(t) {
        return this._onChangeCallback = t,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
class F {
    constructor(t=0, e=0, i=0) {
        F.prototype.isVector3 = !0,
        this.x = t,
        this.y = e,
        this.z = i
    }
    set(t, e, i) {
        return i === void 0 && (i = this.z),
        this.x = t,
        this.y = e,
        this.z = i,
        this
    }
    setScalar(t) {
        return this.x = t,
        this.y = t,
        this.z = t,
        this
    }
    setX(t) {
        return this.x = t,
        this
    }
    setY(t) {
        return this.y = t,
        this
    }
    setZ(t) {
        return this.z = t,
        this
    }
    setComponent(t, e) {
        switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        case 2:
            this.z = e;
            break;
        default:
            throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(t) {
        return this.x = t.x,
        this.y = t.y,
        this.z = t.z,
        this
    }
    add(t) {
        return this.x += t.x,
        this.y += t.y,
        this.z += t.z,
        this
    }
    addScalar(t) {
        return this.x += t,
        this.y += t,
        this.z += t,
        this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x,
        this.y = t.y + e.y,
        this.z = t.z + e.z,
        this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e,
        this.y += t.y * e,
        this.z += t.z * e,
        this
    }
    sub(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this.z -= t.z,
        this
    }
    subScalar(t) {
        return this.x -= t,
        this.y -= t,
        this.z -= t,
        this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x,
        this.y = t.y - e.y,
        this.z = t.z - e.z,
        this
    }
    multiply(t) {
        return this.x *= t.x,
        this.y *= t.y,
        this.z *= t.z,
        this
    }
    multiplyScalar(t) {
        return this.x *= t,
        this.y *= t,
        this.z *= t,
        this
    }
    multiplyVectors(t, e) {
        return this.x = t.x * e.x,
        this.y = t.y * e.y,
        this.z = t.z * e.z,
        this
    }
    applyEuler(t) {
        return this.applyQuaternion(Tl.setFromEuler(t))
    }
    applyAxisAngle(t, e) {
        return this.applyQuaternion(Tl.setFromAxisAngle(t, e))
    }
    applyMatrix3(t) {
        const e = this.x
          , i = this.y
          , r = this.z
          , s = t.elements;
        return this.x = s[0] * e + s[3] * i + s[6] * r,
        this.y = s[1] * e + s[4] * i + s[7] * r,
        this.z = s[2] * e + s[5] * i + s[8] * r,
        this
    }
    applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize()
    }
    applyMatrix4(t) {
        const e = this.x
          , i = this.y
          , r = this.z
          , s = t.elements
          , o = 1 / (s[3] * e + s[7] * i + s[11] * r + s[15]);
        return this.x = (s[0] * e + s[4] * i + s[8] * r + s[12]) * o,
        this.y = (s[1] * e + s[5] * i + s[9] * r + s[13]) * o,
        this.z = (s[2] * e + s[6] * i + s[10] * r + s[14]) * o,
        this
    }
    applyQuaternion(t) {
        const e = this.x
          , i = this.y
          , r = this.z
          , s = t.x
          , o = t.y
          , a = t.z
          , l = t.w
          , c = 2 * (o * r - a * i)
          , u = 2 * (a * e - s * r)
          , d = 2 * (s * i - o * e);
        return this.x = e + l * c + o * d - a * u,
        this.y = i + l * u + a * c - s * d,
        this.z = r + l * d + s * u - o * c,
        this
    }
    project(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
    }
    unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
    }
    transformDirection(t) {
        const e = this.x
          , i = this.y
          , r = this.z
          , s = t.elements;
        return this.x = s[0] * e + s[4] * i + s[8] * r,
        this.y = s[1] * e + s[5] * i + s[9] * r,
        this.z = s[2] * e + s[6] * i + s[10] * r,
        this.normalize()
    }
    divide(t) {
        return this.x /= t.x,
        this.y /= t.y,
        this.z /= t.z,
        this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    min(t) {
        return this.x = Math.min(this.x, t.x),
        this.y = Math.min(this.y, t.y),
        this.z = Math.min(this.z, t.z),
        this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x),
        this.y = Math.max(this.y, t.y),
        this.z = Math.max(this.z, t.z),
        this
    }
    clamp(t, e) {
        return this.x = It(this.x, t.x, e.x),
        this.y = It(this.y, t.y, e.y),
        this.z = It(this.z, t.z, e.z),
        this
    }
    clampScalar(t, e) {
        return this.x = It(this.x, t, e),
        this.y = It(this.y, t, e),
        this.z = It(this.z, t, e),
        this
    }
    clampLength(t, e) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(It(i, t, e))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e,
        this.y += (t.y - this.y) * e,
        this.z += (t.z - this.z) * e,
        this
    }
    lerpVectors(t, e, i) {
        return this.x = t.x + (e.x - t.x) * i,
        this.y = t.y + (e.y - t.y) * i,
        this.z = t.z + (e.z - t.z) * i,
        this
    }
    cross(t) {
        return this.crossVectors(this, t)
    }
    crossVectors(t, e) {
        const i = t.x
          , r = t.y
          , s = t.z
          , o = e.x
          , a = e.y
          , l = e.z;
        return this.x = r * l - s * a,
        this.y = s * o - i * l,
        this.z = i * a - r * o,
        this
    }
    projectOnVector(t) {
        const e = t.lengthSq();
        if (e === 0)
            return this.set(0, 0, 0);
        const i = t.dot(this) / e;
        return this.copy(t).multiplyScalar(i)
    }
    projectOnPlane(t) {
        return js.copy(this).projectOnVector(t),
        this.sub(js)
    }
    reflect(t) {
        return this.sub(js.copy(t).multiplyScalar(2 * this.dot(t)))
    }
    angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (e === 0)
            return Math.PI / 2;
        const i = this.dot(t) / e;
        return Math.acos(It(i, -1, 1))
    }
    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
    }
    distanceToSquared(t) {
        const e = this.x - t.x
          , i = this.y - t.y
          , r = this.z - t.z;
        return e * e + i * i + r * r
    }
    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    }
    setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
    }
    setFromSphericalCoords(t, e, i) {
        const r = Math.sin(e) * t;
        return this.x = r * Math.sin(i),
        this.y = Math.cos(e) * t,
        this.z = r * Math.cos(i),
        this
    }
    setFromCylindrical(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
    }
    setFromCylindricalCoords(t, e, i) {
        return this.x = t * Math.sin(e),
        this.y = i,
        this.z = t * Math.cos(e),
        this
    }
    setFromMatrixPosition(t) {
        const e = t.elements;
        return this.x = e[12],
        this.y = e[13],
        this.z = e[14],
        this
    }
    setFromMatrixScale(t) {
        const e = this.setFromMatrixColumn(t, 0).length()
          , i = this.setFromMatrixColumn(t, 1).length()
          , r = this.setFromMatrixColumn(t, 2).length();
        return this.x = e,
        this.y = i,
        this.z = r,
        this
    }
    setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, e * 4)
    }
    setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, e * 3)
    }
    setFromEuler(t) {
        return this.x = t._x,
        this.y = t._y,
        this.z = t._z,
        this
    }
    setFromColor(t) {
        return this.x = t.r,
        this.y = t.g,
        this.z = t.b,
        this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z
    }
    fromArray(t, e=0) {
        return this.x = t[e],
        this.y = t[e + 1],
        this.z = t[e + 2],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.x,
        t[e + 1] = this.y,
        t[e + 2] = this.z,
        t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e),
        this.y = t.getY(e),
        this.z = t.getZ(e),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        const t = Math.random() * Math.PI * 2
          , e = Math.random() * 2 - 1
          , i = Math.sqrt(1 - e * e);
        return this.x = i * Math.cos(t),
        this.y = e,
        this.z = i * Math.sin(t),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
const js = new F
  , Tl = new fi;
class Nr {
    constructor(t=new F(1 / 0,1 / 0,1 / 0), e=new F(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = t,
        this.max = e
    }
    set(t, e) {
        return this.min.copy(t),
        this.max.copy(e),
        this
    }
    setFromArray(t) {
        this.makeEmpty();
        for (let e = 0, i = t.length; e < i; e += 3)
            this.expandByPoint(Qe.fromArray(t, e));
        return this
    }
    setFromBufferAttribute(t) {
        this.makeEmpty();
        for (let e = 0, i = t.count; e < i; e++)
            this.expandByPoint(Qe.fromBufferAttribute(t, e));
        return this
    }
    setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, i = t.length; e < i; e++)
            this.expandByPoint(t[e]);
        return this
    }
    setFromCenterAndSize(t, e) {
        const i = Qe.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(i),
        this.max.copy(t).add(i),
        this
    }
    setFromObject(t, e=!1) {
        return this.makeEmpty(),
        this.expandByObject(t, e)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        return this.min.copy(t.min),
        this.max.copy(t.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
    }
    expandByPoint(t) {
        return this.min.min(t),
        this.max.max(t),
        this
    }
    expandByVector(t) {
        return this.min.sub(t),
        this.max.add(t),
        this
    }
    expandByScalar(t) {
        return this.min.addScalar(-t),
        this.max.addScalar(t),
        this
    }
    expandByObject(t, e=!1) {
        t.updateWorldMatrix(!1, !1);
        const i = t.geometry;
        if (i !== void 0) {
            const s = i.getAttribute("position");
            if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0)
                for (let o = 0, a = s.count; o < a; o++)
                    t.isMesh === !0 ? t.getVertexPosition(o, Qe) : Qe.fromBufferAttribute(s, o),
                    Qe.applyMatrix4(t.matrixWorld),
                    this.expandByPoint(Qe);
            else
                t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(),
                $r.copy(t.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(),
                $r.copy(i.boundingBox)),
                $r.applyMatrix4(t.matrixWorld),
                this.union($r)
        }
        const r = t.children;
        for (let s = 0, o = r.length; s < o; s++)
            this.expandByObject(r[s], e);
        return this
    }
    containsPoint(t) {
        return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z
    }
    containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
    }
    getParameter(t, e) {
        return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(t) {
        return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z
    }
    intersectsSphere(t) {
        return this.clampPoint(t.center, Qe),
        Qe.distanceToSquared(t.center) <= t.radius * t.radius
    }
    intersectsPlane(t) {
        let e, i;
        return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
        i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
        i = t.normal.x * this.min.x),
        t.normal.y > 0 ? (e += t.normal.y * this.min.y,
        i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
        i += t.normal.y * this.min.y),
        t.normal.z > 0 ? (e += t.normal.z * this.min.z,
        i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
        i += t.normal.z * this.min.z),
        e <= -t.constant && i >= -t.constant
    }
    intersectsTriangle(t) {
        if (this.isEmpty())
            return !1;
        this.getCenter(pr),
        Zr.subVectors(this.max, pr),
        Ti.subVectors(t.a, pr),
        Ci.subVectors(t.b, pr),
        Ai.subVectors(t.c, pr),
        Un.subVectors(Ci, Ti),
        In.subVectors(Ai, Ci),
        Jn.subVectors(Ti, Ai);
        let e = [0, -Un.z, Un.y, 0, -In.z, In.y, 0, -Jn.z, Jn.y, Un.z, 0, -Un.x, In.z, 0, -In.x, Jn.z, 0, -Jn.x, -Un.y, Un.x, 0, -In.y, In.x, 0, -Jn.y, Jn.x, 0];
        return !Ys(e, Ti, Ci, Ai, Zr) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !Ys(e, Ti, Ci, Ai, Zr)) ? !1 : (Jr.crossVectors(Un, In),
        e = [Jr.x, Jr.y, Jr.z],
        Ys(e, Ti, Ci, Ai, Zr))
    }
    clampPoint(t, e) {
        return e.copy(t).clamp(this.min, this.max)
    }
    distanceToPoint(t) {
        return this.clampPoint(t, Qe).distanceTo(t)
    }
    getBoundingSphere(t) {
        return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center),
        t.radius = this.getSize(Qe).length() * .5),
        t
    }
    intersect(t) {
        return this.min.max(t.min),
        this.max.min(t.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(t) {
        return this.min.min(t.min),
        this.max.max(t.max),
        this
    }
    applyMatrix4(t) {
        return this.isEmpty() ? this : (_n[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        _n[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        _n[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        _n[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        _n[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        _n[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        _n[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        _n[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(_n),
        this)
    }
    translate(t) {
        return this.min.add(t),
        this.max.add(t),
        this
    }
    equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max)
    }
}
const _n = [new F, new F, new F, new F, new F, new F, new F, new F]
  , Qe = new F
  , $r = new Nr
  , Ti = new F
  , Ci = new F
  , Ai = new F
  , Un = new F
  , In = new F
  , Jn = new F
  , pr = new F
  , Zr = new F
  , Jr = new F
  , Qn = new F;
function Ys(n, t, e, i, r) {
    for (let s = 0, o = n.length - 3; s <= o; s += 3) {
        Qn.fromArray(n, s);
        const a = r.x * Math.abs(Qn.x) + r.y * Math.abs(Qn.y) + r.z * Math.abs(Qn.z)
          , l = t.dot(Qn)
          , c = e.dot(Qn)
          , u = i.dot(Qn);
        if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a)
            return !1
    }
    return !0
}
const jd = new Nr
  , fr = new F
  , Ks = new F;
class Pa {
    constructor(t=new F, e=-1) {
        this.isSphere = !0,
        this.center = t,
        this.radius = e
    }
    set(t, e) {
        return this.center.copy(t),
        this.radius = e,
        this
    }
    setFromPoints(t, e) {
        const i = this.center;
        e !== void 0 ? i.copy(e) : jd.setFromPoints(t).getCenter(i);
        let r = 0;
        for (let s = 0, o = t.length; s < o; s++)
            r = Math.max(r, i.distanceToSquared(t[s]));
        return this.radius = Math.sqrt(r),
        this
    }
    copy(t) {
        return this.center.copy(t.center),
        this.radius = t.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius
    }
    intersectsSphere(t) {
        const e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e
    }
    intersectsBox(t) {
        return t.intersectsSphere(this)
    }
    intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(t, e) {
        const i = this.center.distanceToSquared(t);
        return e.copy(t),
        i > this.radius * this.radius && (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
        e
    }
    getBoundingBox(t) {
        return this.isEmpty() ? (t.makeEmpty(),
        t) : (t.set(this.center, this.center),
        t.expandByScalar(this.radius),
        t)
    }
    applyMatrix4(t) {
        return this.center.applyMatrix4(t),
        this.radius = this.radius * t.getMaxScaleOnAxis(),
        this
    }
    translate(t) {
        return this.center.add(t),
        this
    }
    expandByPoint(t) {
        if (this.isEmpty())
            return this.center.copy(t),
            this.radius = 0,
            this;
        fr.subVectors(t, this.center);
        const e = fr.lengthSq();
        if (e > this.radius * this.radius) {
            const i = Math.sqrt(e)
              , r = (i - this.radius) * .5;
            this.center.addScaledVector(fr, r / i),
            this.radius += r
        }
        return this
    }
    union(t) {
        return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t),
        this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Ks.subVectors(t.center, this.center).setLength(t.radius),
        this.expandByPoint(fr.copy(t.center).add(Ks)),
        this.expandByPoint(fr.copy(t.center).sub(Ks))),
        this)
    }
    equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const vn = new F
  , $s = new F
  , Qr = new F
  , Nn = new F
  , Zs = new F
  , ts = new F
  , Js = new F;
class ru {
    constructor(t=new F, e=new F(0,0,-1)) {
        this.origin = t,
        this.direction = e
    }
    set(t, e) {
        return this.origin.copy(t),
        this.direction.copy(e),
        this
    }
    copy(t) {
        return this.origin.copy(t.origin),
        this.direction.copy(t.direction),
        this
    }
    at(t, e) {
        return e.copy(this.origin).addScaledVector(this.direction, t)
    }
    lookAt(t) {
        return this.direction.copy(t).sub(this.origin).normalize(),
        this
    }
    recast(t) {
        return this.origin.copy(this.at(t, vn)),
        this
    }
    closestPointToPoint(t, e) {
        e.subVectors(t, this.origin);
        const i = e.dot(this.direction);
        return i < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, i)
    }
    distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t))
    }
    distanceSqToPoint(t) {
        const e = vn.subVectors(t, this.origin).dot(this.direction);
        return e < 0 ? this.origin.distanceToSquared(t) : (vn.copy(this.origin).addScaledVector(this.direction, e),
        vn.distanceToSquared(t))
    }
    distanceSqToSegment(t, e, i, r) {
        $s.copy(t).add(e).multiplyScalar(.5),
        Qr.copy(e).sub(t).normalize(),
        Nn.copy(this.origin).sub($s);
        const s = t.distanceTo(e) * .5
          , o = -this.direction.dot(Qr)
          , a = Nn.dot(this.direction)
          , l = -Nn.dot(Qr)
          , c = Nn.lengthSq()
          , u = Math.abs(1 - o * o);
        let d, p, m, g;
        if (u > 0)
            if (d = o * l - a,
            p = o * a - l,
            g = s * u,
            d >= 0)
                if (p >= -g)
                    if (p <= g) {
                        const b = 1 / u;
                        d *= b,
                        p *= b,
                        m = d * (d + o * p + 2 * a) + p * (o * d + p + 2 * l) + c
                    } else
                        p = s,
                        d = Math.max(0, -(o * p + a)),
                        m = -d * d + p * (p + 2 * l) + c;
                else
                    p = -s,
                    d = Math.max(0, -(o * p + a)),
                    m = -d * d + p * (p + 2 * l) + c;
            else
                p <= -g ? (d = Math.max(0, -(-o * s + a)),
                p = d > 0 ? -s : Math.min(Math.max(-s, -l), s),
                m = -d * d + p * (p + 2 * l) + c) : p <= g ? (d = 0,
                p = Math.min(Math.max(-s, -l), s),
                m = p * (p + 2 * l) + c) : (d = Math.max(0, -(o * s + a)),
                p = d > 0 ? s : Math.min(Math.max(-s, -l), s),
                m = -d * d + p * (p + 2 * l) + c);
        else
            p = o > 0 ? -s : s,
            d = Math.max(0, -(o * p + a)),
            m = -d * d + p * (p + 2 * l) + c;
        return i && i.copy(this.origin).addScaledVector(this.direction, d),
        r && r.copy($s).addScaledVector(Qr, p),
        m
    }
    intersectSphere(t, e) {
        vn.subVectors(t.center, this.origin);
        const i = vn.dot(this.direction)
          , r = vn.dot(vn) - i * i
          , s = t.radius * t.radius;
        if (r > s)
            return null;
        const o = Math.sqrt(s - r)
          , a = i - o
          , l = i + o;
        return l < 0 ? null : a < 0 ? this.at(l, e) : this.at(a, e)
    }
    intersectsSphere(t) {
        return this.distanceSqToPoint(t.center) <= t.radius * t.radius
    }
    distanceToPlane(t) {
        const e = t.normal.dot(this.direction);
        if (e === 0)
            return t.distanceToPoint(this.origin) === 0 ? 0 : null;
        const i = -(this.origin.dot(t.normal) + t.constant) / e;
        return i >= 0 ? i : null
    }
    intersectPlane(t, e) {
        const i = this.distanceToPlane(t);
        return i === null ? null : this.at(i, e)
    }
    intersectsPlane(t) {
        const e = t.distanceToPoint(this.origin);
        return e === 0 || t.normal.dot(this.direction) * e < 0
    }
    intersectBox(t, e) {
        let i, r, s, o, a, l;
        const c = 1 / this.direction.x
          , u = 1 / this.direction.y
          , d = 1 / this.direction.z
          , p = this.origin;
        return c >= 0 ? (i = (t.min.x - p.x) * c,
        r = (t.max.x - p.x) * c) : (i = (t.max.x - p.x) * c,
        r = (t.min.x - p.x) * c),
        u >= 0 ? (s = (t.min.y - p.y) * u,
        o = (t.max.y - p.y) * u) : (s = (t.max.y - p.y) * u,
        o = (t.min.y - p.y) * u),
        i > o || s > r || ((s > i || isNaN(i)) && (i = s),
        (o < r || isNaN(r)) && (r = o),
        d >= 0 ? (a = (t.min.z - p.z) * d,
        l = (t.max.z - p.z) * d) : (a = (t.max.z - p.z) * d,
        l = (t.min.z - p.z) * d),
        i > l || a > r) || ((a > i || i !== i) && (i = a),
        (l < r || r !== r) && (r = l),
        r < 0) ? null : this.at(i >= 0 ? i : r, e)
    }
    intersectsBox(t) {
        return this.intersectBox(t, vn) !== null
    }
    intersectTriangle(t, e, i, r, s) {
        Zs.subVectors(e, t),
        ts.subVectors(i, t),
        Js.crossVectors(Zs, ts);
        let o = this.direction.dot(Js), a;
        if (o > 0) {
            if (r)
                return null;
            a = 1
        } else if (o < 0)
            a = -1,
            o = -o;
        else
            return null;
        Nn.subVectors(this.origin, t);
        const l = a * this.direction.dot(ts.crossVectors(Nn, ts));
        if (l < 0)
            return null;
        const c = a * this.direction.dot(Zs.cross(Nn));
        if (c < 0 || l + c > o)
            return null;
        const u = -a * Nn.dot(Js);
        return u < 0 ? null : this.at(u / o, s)
    }
    applyMatrix4(t) {
        return this.origin.applyMatrix4(t),
        this.direction.transformDirection(t),
        this
    }
    equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class me {
    constructor(t, e, i, r, s, o, a, l, c, u, d, p, m, g, b, f) {
        me.prototype.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        t !== void 0 && this.set(t, e, i, r, s, o, a, l, c, u, d, p, m, g, b, f)
    }
    set(t, e, i, r, s, o, a, l, c, u, d, p, m, g, b, f) {
        const h = this.elements;
        return h[0] = t,
        h[4] = e,
        h[8] = i,
        h[12] = r,
        h[1] = s,
        h[5] = o,
        h[9] = a,
        h[13] = l,
        h[2] = c,
        h[6] = u,
        h[10] = d,
        h[14] = p,
        h[3] = m,
        h[7] = g,
        h[11] = b,
        h[15] = f,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return new me().fromArray(this.elements)
    }
    copy(t) {
        const e = this.elements
          , i = t.elements;
        return e[0] = i[0],
        e[1] = i[1],
        e[2] = i[2],
        e[3] = i[3],
        e[4] = i[4],
        e[5] = i[5],
        e[6] = i[6],
        e[7] = i[7],
        e[8] = i[8],
        e[9] = i[9],
        e[10] = i[10],
        e[11] = i[11],
        e[12] = i[12],
        e[13] = i[13],
        e[14] = i[14],
        e[15] = i[15],
        this
    }
    copyPosition(t) {
        const e = this.elements
          , i = t.elements;
        return e[12] = i[12],
        e[13] = i[13],
        e[14] = i[14],
        this
    }
    setFromMatrix3(t) {
        const e = t.elements;
        return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(t, e, i) {
        return t.setFromMatrixColumn(this, 0),
        e.setFromMatrixColumn(this, 1),
        i.setFromMatrixColumn(this, 2),
        this
    }
    makeBasis(t, e, i) {
        return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(t) {
        const e = this.elements
          , i = t.elements
          , r = 1 / Pi.setFromMatrixColumn(t, 0).length()
          , s = 1 / Pi.setFromMatrixColumn(t, 1).length()
          , o = 1 / Pi.setFromMatrixColumn(t, 2).length();
        return e[0] = i[0] * r,
        e[1] = i[1] * r,
        e[2] = i[2] * r,
        e[3] = 0,
        e[4] = i[4] * s,
        e[5] = i[5] * s,
        e[6] = i[6] * s,
        e[7] = 0,
        e[8] = i[8] * o,
        e[9] = i[9] * o,
        e[10] = i[10] * o,
        e[11] = 0,
        e[12] = 0,
        e[13] = 0,
        e[14] = 0,
        e[15] = 1,
        this
    }
    makeRotationFromEuler(t) {
        const e = this.elements
          , i = t.x
          , r = t.y
          , s = t.z
          , o = Math.cos(i)
          , a = Math.sin(i)
          , l = Math.cos(r)
          , c = Math.sin(r)
          , u = Math.cos(s)
          , d = Math.sin(s);
        if (t.order === "XYZ") {
            const p = o * u
              , m = o * d
              , g = a * u
              , b = a * d;
            e[0] = l * u,
            e[4] = -l * d,
            e[8] = c,
            e[1] = m + g * c,
            e[5] = p - b * c,
            e[9] = -a * l,
            e[2] = b - p * c,
            e[6] = g + m * c,
            e[10] = o * l
        } else if (t.order === "YXZ") {
            const p = l * u
              , m = l * d
              , g = c * u
              , b = c * d;
            e[0] = p + b * a,
            e[4] = g * a - m,
            e[8] = o * c,
            e[1] = o * d,
            e[5] = o * u,
            e[9] = -a,
            e[2] = m * a - g,
            e[6] = b + p * a,
            e[10] = o * l
        } else if (t.order === "ZXY") {
            const p = l * u
              , m = l * d
              , g = c * u
              , b = c * d;
            e[0] = p - b * a,
            e[4] = -o * d,
            e[8] = g + m * a,
            e[1] = m + g * a,
            e[5] = o * u,
            e[9] = b - p * a,
            e[2] = -o * c,
            e[6] = a,
            e[10] = o * l
        } else if (t.order === "ZYX") {
            const p = o * u
              , m = o * d
              , g = a * u
              , b = a * d;
            e[0] = l * u,
            e[4] = g * c - m,
            e[8] = p * c + b,
            e[1] = l * d,
            e[5] = b * c + p,
            e[9] = m * c - g,
            e[2] = -c,
            e[6] = a * l,
            e[10] = o * l
        } else if (t.order === "YZX") {
            const p = o * l
              , m = o * c
              , g = a * l
              , b = a * c;
            e[0] = l * u,
            e[4] = b - p * d,
            e[8] = g * d + m,
            e[1] = d,
            e[5] = o * u,
            e[9] = -a * u,
            e[2] = -c * u,
            e[6] = m * d + g,
            e[10] = p - b * d
        } else if (t.order === "XZY") {
            const p = o * l
              , m = o * c
              , g = a * l
              , b = a * c;
            e[0] = l * u,
            e[4] = -d,
            e[8] = c * u,
            e[1] = p * d + b,
            e[5] = o * u,
            e[9] = m * d - g,
            e[2] = g * d - m,
            e[6] = a * u,
            e[10] = b * d + p
        }
        return e[3] = 0,
        e[7] = 0,
        e[11] = 0,
        e[12] = 0,
        e[13] = 0,
        e[14] = 0,
        e[15] = 1,
        this
    }
    makeRotationFromQuaternion(t) {
        return this.compose(Yd, t, Kd)
    }
    lookAt(t, e, i) {
        const r = this.elements;
        return ke.subVectors(t, e),
        ke.lengthSq() === 0 && (ke.z = 1),
        ke.normalize(),
        Fn.crossVectors(i, ke),
        Fn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? ke.x += 1e-4 : ke.z += 1e-4,
        ke.normalize(),
        Fn.crossVectors(i, ke)),
        Fn.normalize(),
        es.crossVectors(ke, Fn),
        r[0] = Fn.x,
        r[4] = es.x,
        r[8] = ke.x,
        r[1] = Fn.y,
        r[5] = es.y,
        r[9] = ke.y,
        r[2] = Fn.z,
        r[6] = es.z,
        r[10] = ke.z,
        this
    }
    multiply(t) {
        return this.multiplyMatrices(this, t)
    }
    premultiply(t) {
        return this.multiplyMatrices(t, this)
    }
    multiplyMatrices(t, e) {
        const i = t.elements
          , r = e.elements
          , s = this.elements
          , o = i[0]
          , a = i[4]
          , l = i[8]
          , c = i[12]
          , u = i[1]
          , d = i[5]
          , p = i[9]
          , m = i[13]
          , g = i[2]
          , b = i[6]
          , f = i[10]
          , h = i[14]
          , T = i[3]
          , y = i[7]
          , M = i[11]
          , U = i[15]
          , D = r[0]
          , C = r[4]
          , I = r[8]
          , E = r[12]
          , x = r[1]
          , A = r[5]
          , G = r[9]
          , k = r[13]
          , Y = r[2]
          , K = r[6]
          , X = r[10]
          , Z = r[14]
          , z = r[3]
          , rt = r[7]
          , ut = r[11]
          , gt = r[15];
        return s[0] = o * D + a * x + l * Y + c * z,
        s[4] = o * C + a * A + l * K + c * rt,
        s[8] = o * I + a * G + l * X + c * ut,
        s[12] = o * E + a * k + l * Z + c * gt,
        s[1] = u * D + d * x + p * Y + m * z,
        s[5] = u * C + d * A + p * K + m * rt,
        s[9] = u * I + d * G + p * X + m * ut,
        s[13] = u * E + d * k + p * Z + m * gt,
        s[2] = g * D + b * x + f * Y + h * z,
        s[6] = g * C + b * A + f * K + h * rt,
        s[10] = g * I + b * G + f * X + h * ut,
        s[14] = g * E + b * k + f * Z + h * gt,
        s[3] = T * D + y * x + M * Y + U * z,
        s[7] = T * C + y * A + M * K + U * rt,
        s[11] = T * I + y * G + M * X + U * ut,
        s[15] = T * E + y * k + M * Z + U * gt,
        this
    }
    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t,
        e[4] *= t,
        e[8] *= t,
        e[12] *= t,
        e[1] *= t,
        e[5] *= t,
        e[9] *= t,
        e[13] *= t,
        e[2] *= t,
        e[6] *= t,
        e[10] *= t,
        e[14] *= t,
        e[3] *= t,
        e[7] *= t,
        e[11] *= t,
        e[15] *= t,
        this
    }
    determinant() {
        const t = this.elements
          , e = t[0]
          , i = t[4]
          , r = t[8]
          , s = t[12]
          , o = t[1]
          , a = t[5]
          , l = t[9]
          , c = t[13]
          , u = t[2]
          , d = t[6]
          , p = t[10]
          , m = t[14]
          , g = t[3]
          , b = t[7]
          , f = t[11]
          , h = t[15];
        return g * (+s * l * d - r * c * d - s * a * p + i * c * p + r * a * m - i * l * m) + b * (+e * l * m - e * c * p + s * o * p - r * o * m + r * c * u - s * l * u) + f * (+e * c * d - e * a * m - s * o * d + i * o * m + s * a * u - i * c * u) + h * (-r * a * u - e * l * d + e * a * p + r * o * d - i * o * p + i * l * u)
    }
    transpose() {
        const t = this.elements;
        let e;
        return e = t[1],
        t[1] = t[4],
        t[4] = e,
        e = t[2],
        t[2] = t[8],
        t[8] = e,
        e = t[6],
        t[6] = t[9],
        t[9] = e,
        e = t[3],
        t[3] = t[12],
        t[12] = e,
        e = t[7],
        t[7] = t[13],
        t[13] = e,
        e = t[11],
        t[11] = t[14],
        t[14] = e,
        this
    }
    setPosition(t, e, i) {
        const r = this.elements;
        return t.isVector3 ? (r[12] = t.x,
        r[13] = t.y,
        r[14] = t.z) : (r[12] = t,
        r[13] = e,
        r[14] = i),
        this
    }
    invert() {
        const t = this.elements
          , e = t[0]
          , i = t[1]
          , r = t[2]
          , s = t[3]
          , o = t[4]
          , a = t[5]
          , l = t[6]
          , c = t[7]
          , u = t[8]
          , d = t[9]
          , p = t[10]
          , m = t[11]
          , g = t[12]
          , b = t[13]
          , f = t[14]
          , h = t[15]
          , T = d * f * c - b * p * c + b * l * m - a * f * m - d * l * h + a * p * h
          , y = g * p * c - u * f * c - g * l * m + o * f * m + u * l * h - o * p * h
          , M = u * b * c - g * d * c + g * a * m - o * b * m - u * a * h + o * d * h
          , U = g * d * l - u * b * l - g * a * p + o * b * p + u * a * f - o * d * f
          , D = e * T + i * y + r * M + s * U;
        if (D === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const C = 1 / D;
        return t[0] = T * C,
        t[1] = (b * p * s - d * f * s - b * r * m + i * f * m + d * r * h - i * p * h) * C,
        t[2] = (a * f * s - b * l * s + b * r * c - i * f * c - a * r * h + i * l * h) * C,
        t[3] = (d * l * s - a * p * s - d * r * c + i * p * c + a * r * m - i * l * m) * C,
        t[4] = y * C,
        t[5] = (u * f * s - g * p * s + g * r * m - e * f * m - u * r * h + e * p * h) * C,
        t[6] = (g * l * s - o * f * s - g * r * c + e * f * c + o * r * h - e * l * h) * C,
        t[7] = (o * p * s - u * l * s + u * r * c - e * p * c - o * r * m + e * l * m) * C,
        t[8] = M * C,
        t[9] = (g * d * s - u * b * s - g * i * m + e * b * m + u * i * h - e * d * h) * C,
        t[10] = (o * b * s - g * a * s + g * i * c - e * b * c - o * i * h + e * a * h) * C,
        t[11] = (u * a * s - o * d * s - u * i * c + e * d * c + o * i * m - e * a * m) * C,
        t[12] = U * C,
        t[13] = (u * b * r - g * d * r + g * i * p - e * b * p - u * i * f + e * d * f) * C,
        t[14] = (g * a * r - o * b * r - g * i * l + e * b * l + o * i * f - e * a * f) * C,
        t[15] = (o * d * r - u * a * r + u * i * l - e * d * l - o * i * p + e * a * p) * C,
        this
    }
    scale(t) {
        const e = this.elements
          , i = t.x
          , r = t.y
          , s = t.z;
        return e[0] *= i,
        e[4] *= r,
        e[8] *= s,
        e[1] *= i,
        e[5] *= r,
        e[9] *= s,
        e[2] *= i,
        e[6] *= r,
        e[10] *= s,
        e[3] *= i,
        e[7] *= r,
        e[11] *= s,
        this
    }
    getMaxScaleOnAxis() {
        const t = this.elements
          , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
          , i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
          , r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, i, r))
    }
    makeTranslation(t, e, i) {
        return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1),
        this
    }
    makeRotationX(t) {
        const e = Math.cos(t)
          , i = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(t) {
        const e = Math.cos(t)
          , i = Math.sin(t);
        return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(t) {
        const e = Math.cos(t)
          , i = Math.sin(t);
        return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(t, e) {
        const i = Math.cos(e)
          , r = Math.sin(e)
          , s = 1 - i
          , o = t.x
          , a = t.y
          , l = t.z
          , c = s * o
          , u = s * a;
        return this.set(c * o + i, c * a - r * l, c * l + r * a, 0, c * a + r * l, u * a + i, u * l - r * o, 0, c * l - r * a, u * l + r * o, s * l * l + i, 0, 0, 0, 0, 1),
        this
    }
    makeScale(t, e, i) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1),
        this
    }
    makeShear(t, e, i, r, s, o) {
        return this.set(1, i, s, 0, t, 1, o, 0, e, r, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(t, e, i) {
        const r = this.elements
          , s = e._x
          , o = e._y
          , a = e._z
          , l = e._w
          , c = s + s
          , u = o + o
          , d = a + a
          , p = s * c
          , m = s * u
          , g = s * d
          , b = o * u
          , f = o * d
          , h = a * d
          , T = l * c
          , y = l * u
          , M = l * d
          , U = i.x
          , D = i.y
          , C = i.z;
        return r[0] = (1 - (b + h)) * U,
        r[1] = (m + M) * U,
        r[2] = (g - y) * U,
        r[3] = 0,
        r[4] = (m - M) * D,
        r[5] = (1 - (p + h)) * D,
        r[6] = (f + T) * D,
        r[7] = 0,
        r[8] = (g + y) * C,
        r[9] = (f - T) * C,
        r[10] = (1 - (p + b)) * C,
        r[11] = 0,
        r[12] = t.x,
        r[13] = t.y,
        r[14] = t.z,
        r[15] = 1,
        this
    }
    decompose(t, e, i) {
        const r = this.elements;
        let s = Pi.set(r[0], r[1], r[2]).length();
        const o = Pi.set(r[4], r[5], r[6]).length()
          , a = Pi.set(r[8], r[9], r[10]).length();
        this.determinant() < 0 && (s = -s),
        t.x = r[12],
        t.y = r[13],
        t.z = r[14],
        tn.copy(this);
        const c = 1 / s
          , u = 1 / o
          , d = 1 / a;
        return tn.elements[0] *= c,
        tn.elements[1] *= c,
        tn.elements[2] *= c,
        tn.elements[4] *= u,
        tn.elements[5] *= u,
        tn.elements[6] *= u,
        tn.elements[8] *= d,
        tn.elements[9] *= d,
        tn.elements[10] *= d,
        e.setFromRotationMatrix(tn),
        i.x = s,
        i.y = o,
        i.z = a,
        this
    }
    makePerspective(t, e, i, r, s, o, a=yn) {
        const l = this.elements
          , c = 2 * s / (e - t)
          , u = 2 * s / (i - r)
          , d = (e + t) / (e - t)
          , p = (i + r) / (i - r);
        let m, g;
        if (a === yn)
            m = -(o + s) / (o - s),
            g = -2 * o * s / (o - s);
        else if (a === As)
            m = -o / (o - s),
            g = -o * s / (o - s);
        else
            throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
        return l[0] = c,
        l[4] = 0,
        l[8] = d,
        l[12] = 0,
        l[1] = 0,
        l[5] = u,
        l[9] = p,
        l[13] = 0,
        l[2] = 0,
        l[6] = 0,
        l[10] = m,
        l[14] = g,
        l[3] = 0,
        l[7] = 0,
        l[11] = -1,
        l[15] = 0,
        this
    }
    makeOrthographic(t, e, i, r, s, o, a=yn) {
        const l = this.elements
          , c = 1 / (e - t)
          , u = 1 / (i - r)
          , d = 1 / (o - s)
          , p = (e + t) * c
          , m = (i + r) * u;
        let g, b;
        if (a === yn)
            g = (o + s) * d,
            b = -2 * d;
        else if (a === As)
            g = s * d,
            b = -1 * d;
        else
            throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
        return l[0] = 2 * c,
        l[4] = 0,
        l[8] = 0,
        l[12] = -p,
        l[1] = 0,
        l[5] = 2 * u,
        l[9] = 0,
        l[13] = -m,
        l[2] = 0,
        l[6] = 0,
        l[10] = b,
        l[14] = -g,
        l[3] = 0,
        l[7] = 0,
        l[11] = 0,
        l[15] = 1,
        this
    }
    equals(t) {
        const e = this.elements
          , i = t.elements;
        for (let r = 0; r < 16; r++)
            if (e[r] !== i[r])
                return !1;
        return !0
    }
    fromArray(t, e=0) {
        for (let i = 0; i < 16; i++)
            this.elements[i] = t[i + e];
        return this
    }
    toArray(t=[], e=0) {
        const i = this.elements;
        return t[e] = i[0],
        t[e + 1] = i[1],
        t[e + 2] = i[2],
        t[e + 3] = i[3],
        t[e + 4] = i[4],
        t[e + 5] = i[5],
        t[e + 6] = i[6],
        t[e + 7] = i[7],
        t[e + 8] = i[8],
        t[e + 9] = i[9],
        t[e + 10] = i[10],
        t[e + 11] = i[11],
        t[e + 12] = i[12],
        t[e + 13] = i[13],
        t[e + 14] = i[14],
        t[e + 15] = i[15],
        t
    }
}
const Pi = new F
  , tn = new me
  , Yd = new F(0,0,0)
  , Kd = new F(1,1,1)
  , Fn = new F
  , es = new F
  , ke = new F
  , Cl = new me
  , Al = new fi;
class Pn {
    constructor(t=0, e=0, i=0, r=Pn.DEFAULT_ORDER) {
        this.isEuler = !0,
        this._x = t,
        this._y = e,
        this._z = i,
        this._order = r
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x = t,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y = t,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(t) {
        this._z = t,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(t) {
        this._order = t,
        this._onChangeCallback()
    }
    set(t, e, i, r=this._order) {
        return this._x = t,
        this._y = e,
        this._z = i,
        this._order = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(t) {
        return this._x = t._x,
        this._y = t._y,
        this._z = t._z,
        this._order = t._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(t, e=this._order, i=!0) {
        const r = t.elements
          , s = r[0]
          , o = r[4]
          , a = r[8]
          , l = r[1]
          , c = r[5]
          , u = r[9]
          , d = r[2]
          , p = r[6]
          , m = r[10];
        switch (e) {
        case "XYZ":
            this._y = Math.asin(It(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(-u, m),
            this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(p, c),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-It(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._y = Math.atan2(a, m),
            this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-d, s),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(It(p, -1, 1)),
            Math.abs(p) < .9999999 ? (this._y = Math.atan2(-d, m),
            this._z = Math.atan2(-o, c)) : (this._y = 0,
            this._z = Math.atan2(l, s));
            break;
        case "ZYX":
            this._y = Math.asin(-It(d, -1, 1)),
            Math.abs(d) < .9999999 ? (this._x = Math.atan2(p, m),
            this._z = Math.atan2(l, s)) : (this._x = 0,
            this._z = Math.atan2(-o, c));
            break;
        case "YZX":
            this._z = Math.asin(It(l, -1, 1)),
            Math.abs(l) < .9999999 ? (this._x = Math.atan2(-u, c),
            this._y = Math.atan2(-d, s)) : (this._x = 0,
            this._y = Math.atan2(a, m));
            break;
        case "XZY":
            this._z = Math.asin(-It(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(p, c),
            this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, m),
            this._y = 0);
            break;
        default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
        }
        return this._order = e,
        i === !0 && this._onChangeCallback(),
        this
    }
    setFromQuaternion(t, e, i) {
        return Cl.makeRotationFromQuaternion(t),
        this.setFromRotationMatrix(Cl, e, i)
    }
    setFromVector3(t, e=this._order) {
        return this.set(t.x, t.y, t.z, e)
    }
    reorder(t) {
        return Al.setFromEuler(this),
        this.setFromQuaternion(Al, t)
    }
    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
    }
    fromArray(t) {
        return this._x = t[0],
        this._y = t[1],
        this._z = t[2],
        t[3] !== void 0 && (this._order = t[3]),
        this._onChangeCallback(),
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this._x,
        t[e + 1] = this._y,
        t[e + 2] = this._z,
        t[e + 3] = this._order,
        t
    }
    _onChange(t) {
        return this._onChangeCallback = t,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
}
Pn.DEFAULT_ORDER = "XYZ";
class su {
    constructor() {
        this.mask = 1
    }
    set(t) {
        this.mask = (1 << t | 0) >>> 0
    }
    enable(t) {
        this.mask |= 1 << t | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(t) {
        this.mask ^= 1 << t | 0
    }
    disable(t) {
        this.mask &= ~(1 << t | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(t) {
        return (this.mask & t.mask) !== 0
    }
    isEnabled(t) {
        return (this.mask & (1 << t | 0)) !== 0
    }
}
let $d = 0;
const Pl = new F
  , Ri = new fi
  , gn = new me
  , ns = new F
  , mr = new F
  , Zd = new F
  , Jd = new fi
  , Rl = new F(1,0,0)
  , Dl = new F(0,1,0)
  , Ll = new F(0,0,1)
  , Ul = {
    type: "added"
}
  , Qd = {
    type: "removed"
}
  , Di = {
    type: "childadded",
    child: null
}
  , Qs = {
    type: "childremoved",
    child: null
};
class Fe extends gi {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: $d++
        }),
        this.uuid = rr(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = Fe.DEFAULT_UP.clone();
        const t = new F
          , e = new Pn
          , i = new fi
          , r = new F(1,1,1);
        function s() {
            i.setFromEuler(e, !1)
        }
        function o() {
            e.setFromQuaternion(i, void 0, !1)
        }
        e._onChange(s),
        i._onChange(o),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: r
            },
            modelViewMatrix: {
                value: new me
            },
            normalMatrix: {
                value: new Pt
            }
        }),
        this.matrix = new me,
        this.matrixWorld = new me,
        this.matrixAutoUpdate = Fe.DEFAULT_MATRIX_AUTO_UPDATE,
        this.matrixWorldAutoUpdate = Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new su,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.userData = {}
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(t),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(t) {
        return this.quaternion.premultiply(t),
        this
    }
    setRotationFromAxisAngle(t, e) {
        this.quaternion.setFromAxisAngle(t, e)
    }
    setRotationFromEuler(t) {
        this.quaternion.setFromEuler(t, !0)
    }
    setRotationFromMatrix(t) {
        this.quaternion.setFromRotationMatrix(t)
    }
    setRotationFromQuaternion(t) {
        this.quaternion.copy(t)
    }
    rotateOnAxis(t, e) {
        return Ri.setFromAxisAngle(t, e),
        this.quaternion.multiply(Ri),
        this
    }
    rotateOnWorldAxis(t, e) {
        return Ri.setFromAxisAngle(t, e),
        this.quaternion.premultiply(Ri),
        this
    }
    rotateX(t) {
        return this.rotateOnAxis(Rl, t)
    }
    rotateY(t) {
        return this.rotateOnAxis(Dl, t)
    }
    rotateZ(t) {
        return this.rotateOnAxis(Ll, t)
    }
    translateOnAxis(t, e) {
        return Pl.copy(t).applyQuaternion(this.quaternion),
        this.position.add(Pl.multiplyScalar(e)),
        this
    }
    translateX(t) {
        return this.translateOnAxis(Rl, t)
    }
    translateY(t) {
        return this.translateOnAxis(Dl, t)
    }
    translateZ(t) {
        return this.translateOnAxis(Ll, t)
    }
    localToWorld(t) {
        return this.updateWorldMatrix(!0, !1),
        t.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(t) {
        return this.updateWorldMatrix(!0, !1),
        t.applyMatrix4(gn.copy(this.matrixWorld).invert())
    }
    lookAt(t, e, i) {
        t.isVector3 ? ns.copy(t) : ns.set(t, e, i);
        const r = this.parent;
        this.updateWorldMatrix(!0, !1),
        mr.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? gn.lookAt(mr, ns, this.up) : gn.lookAt(ns, mr, this.up),
        this.quaternion.setFromRotationMatrix(gn),
        r && (gn.extractRotation(r.matrixWorld),
        Ri.setFromRotationMatrix(gn),
        this.quaternion.premultiply(Ri.invert()))
    }
    add(t) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++)
                this.add(arguments[e]);
            return this
        }
        return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
        this) : (t && t.isObject3D ? (t.removeFromParent(),
        t.parent = this,
        this.children.push(t),
        t.dispatchEvent(Ul),
        Di.child = t,
        this.dispatchEvent(Di),
        Di.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
        this)
    }
    remove(t) {
        if (arguments.length > 1) {
            for (let i = 0; i < arguments.length; i++)
                this.remove(arguments[i]);
            return this
        }
        const e = this.children.indexOf(t);
        return e !== -1 && (t.parent = null,
        this.children.splice(e, 1),
        t.dispatchEvent(Qd),
        Qs.child = t,
        this.dispatchEvent(Qs),
        Qs.child = null),
        this
    }
    removeFromParent() {
        const t = this.parent;
        return t !== null && t.remove(this),
        this
    }
    clear() {
        return this.remove(...this.children)
    }
    attach(t) {
        return this.updateWorldMatrix(!0, !1),
        gn.copy(this.matrixWorld).invert(),
        t.parent !== null && (t.parent.updateWorldMatrix(!0, !1),
        gn.multiply(t.parent.matrixWorld)),
        t.applyMatrix4(gn),
        t.removeFromParent(),
        t.parent = this,
        this.children.push(t),
        t.updateWorldMatrix(!1, !0),
        t.dispatchEvent(Ul),
        Di.child = t,
        this.dispatchEvent(Di),
        Di.child = null,
        this
    }
    getObjectById(t) {
        return this.getObjectByProperty("id", t)
    }
    getObjectByName(t) {
        return this.getObjectByProperty("name", t)
    }
    getObjectByProperty(t, e) {
        if (this[t] === e)
            return this;
        for (let i = 0, r = this.children.length; i < r; i++) {
            const o = this.children[i].getObjectByProperty(t, e);
            if (o !== void 0)
                return o
        }
    }
    getObjectsByProperty(t, e, i=[]) {
        this[t] === e && i.push(this);
        const r = this.children;
        for (let s = 0, o = r.length; s < o; s++)
            r[s].getObjectsByProperty(t, e, i);
        return i
    }
    getWorldPosition(t) {
        return this.updateWorldMatrix(!0, !1),
        t.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(t) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(mr, t, Zd),
        t
    }
    getWorldScale(t) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(mr, Jd, t),
        t
    }
    getWorldDirection(t) {
        this.updateWorldMatrix(!0, !1);
        const e = this.matrixWorld.elements;
        return t.set(e[8], e[9], e[10]).normalize()
    }
    raycast() {}
    traverse(t) {
        t(this);
        const e = this.children;
        for (let i = 0, r = e.length; i < r; i++)
            e[i].traverse(t)
    }
    traverseVisible(t) {
        if (this.visible === !1)
            return;
        t(this);
        const e = this.children;
        for (let i = 0, r = e.length; i < r; i++)
            e[i].traverseVisible(t)
    }
    traverseAncestors(t) {
        const e = this.parent;
        e !== null && (t(e),
        e.traverseAncestors(t))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        this.matrixWorldNeedsUpdate = !1,
        t = !0);
        const e = this.children;
        for (let i = 0, r = e.length; i < r; i++)
            e[i].updateMatrixWorld(t)
    }
    updateWorldMatrix(t, e) {
        const i = this.parent;
        if (t === !0 && i !== null && i.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        e === !0) {
            const r = this.children;
            for (let s = 0, o = r.length; s < o; s++)
                r[s].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string"
          , i = {};
        e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        i.metadata = {
            version: 4.6,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const r = {};
        r.uuid = this.uuid,
        r.type = this.type,
        this.name !== "" && (r.name = this.name),
        this.castShadow === !0 && (r.castShadow = !0),
        this.receiveShadow === !0 && (r.receiveShadow = !0),
        this.visible === !1 && (r.visible = !1),
        this.frustumCulled === !1 && (r.frustumCulled = !1),
        this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (r.userData = this.userData),
        r.layers = this.layers.mask,
        r.matrix = this.matrix.toArray(),
        r.up = this.up.toArray(),
        this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
        this.isInstancedMesh && (r.type = "InstancedMesh",
        r.count = this.count,
        r.instanceMatrix = this.instanceMatrix.toJSON(),
        this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh && (r.type = "BatchedMesh",
        r.perObjectFrustumCulled = this.perObjectFrustumCulled,
        r.sortObjects = this.sortObjects,
        r.drawRanges = this._drawRanges,
        r.reservedRanges = this._reservedRanges,
        r.visibility = this._visibility,
        r.active = this._active,
        r.bounds = this._bounds.map(a => ({
            boxInitialized: a.boxInitialized,
            boxMin: a.box.min.toArray(),
            boxMax: a.box.max.toArray(),
            sphereInitialized: a.sphereInitialized,
            sphereRadius: a.sphere.radius,
            sphereCenter: a.sphere.center.toArray()
        })),
        r.maxInstanceCount = this._maxInstanceCount,
        r.maxVertexCount = this._maxVertexCount,
        r.maxIndexCount = this._maxIndexCount,
        r.geometryInitialized = this._geometryInitialized,
        r.geometryCount = this._geometryCount,
        r.matricesTexture = this._matricesTexture.toJSON(t),
        this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(t)),
        this.boundingSphere !== null && (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius
        }),
        this.boundingBox !== null && (r.boundingBox = {
            min: r.boundingBox.min.toArray(),
            max: r.boundingBox.max.toArray()
        }));
        function s(a, l) {
            return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(t)),
            l.uuid
        }
        if (this.isScene)
            this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)),
            this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            r.geometry = s(t.geometries, this.geometry);
            const a = this.geometry.parameters;
            if (a !== void 0 && a.shapes !== void 0) {
                const l = a.shapes;
                if (Array.isArray(l))
                    for (let c = 0, u = l.length; c < u; c++) {
                        const d = l[c];
                        s(t.shapes, d)
                    }
                else
                    s(t.shapes, l)
            }
        }
        if (this.isSkinnedMesh && (r.bindMode = this.bindMode,
        r.bindMatrix = this.bindMatrix.toArray(),
        this.skeleton !== void 0 && (s(t.skeletons, this.skeleton),
        r.skeleton = this.skeleton.uuid)),
        this.material !== void 0)
            if (Array.isArray(this.material)) {
                const a = [];
                for (let l = 0, c = this.material.length; l < c; l++)
                    a.push(s(t.materials, this.material[l]));
                r.material = a
            } else
                r.material = s(t.materials, this.material);
        if (this.children.length > 0) {
            r.children = [];
            for (let a = 0; a < this.children.length; a++)
                r.children.push(this.children[a].toJSON(t).object)
        }
        if (this.animations.length > 0) {
            r.animations = [];
            for (let a = 0; a < this.animations.length; a++) {
                const l = this.animations[a];
                r.animations.push(s(t.animations, l))
            }
        }
        if (e) {
            const a = o(t.geometries)
              , l = o(t.materials)
              , c = o(t.textures)
              , u = o(t.images)
              , d = o(t.shapes)
              , p = o(t.skeletons)
              , m = o(t.animations)
              , g = o(t.nodes);
            a.length > 0 && (i.geometries = a),
            l.length > 0 && (i.materials = l),
            c.length > 0 && (i.textures = c),
            u.length > 0 && (i.images = u),
            d.length > 0 && (i.shapes = d),
            p.length > 0 && (i.skeletons = p),
            m.length > 0 && (i.animations = m),
            g.length > 0 && (i.nodes = g)
        }
        return i.object = r,
        i;
        function o(a) {
            const l = [];
            for (const c in a) {
                const u = a[c];
                delete u.metadata,
                l.push(u)
            }
            return l
        }
    }
    clone(t) {
        return new this.constructor().copy(this, t)
    }
    copy(t, e=!0) {
        if (this.name = t.name,
        this.up.copy(t.up),
        this.position.copy(t.position),
        this.rotation.order = t.rotation.order,
        this.quaternion.copy(t.quaternion),
        this.scale.copy(t.scale),
        this.matrix.copy(t.matrix),
        this.matrixWorld.copy(t.matrixWorld),
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate,
        this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
        this.layers.mask = t.layers.mask,
        this.visible = t.visible,
        this.castShadow = t.castShadow,
        this.receiveShadow = t.receiveShadow,
        this.frustumCulled = t.frustumCulled,
        this.renderOrder = t.renderOrder,
        this.animations = t.animations.slice(),
        this.userData = JSON.parse(JSON.stringify(t.userData)),
        e === !0)
            for (let i = 0; i < t.children.length; i++) {
                const r = t.children[i];
                this.add(r.clone())
            }
        return this
    }
}
Fe.DEFAULT_UP = new F(0,1,0);
Fe.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const en = new F
  , xn = new F
  , to = new F
  , bn = new F
  , Li = new F
  , Ui = new F
  , Il = new F
  , eo = new F
  , no = new F
  , io = new F
  , ro = new de
  , so = new de
  , oo = new de;
class nn {
    constructor(t=new F, e=new F, i=new F) {
        this.a = t,
        this.b = e,
        this.c = i
    }
    static getNormal(t, e, i, r) {
        r.subVectors(i, e),
        en.subVectors(t, e),
        r.cross(en);
        const s = r.lengthSq();
        return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0)
    }
    static getBarycoord(t, e, i, r, s) {
        en.subVectors(r, e),
        xn.subVectors(i, e),
        to.subVectors(t, e);
        const o = en.dot(en)
          , a = en.dot(xn)
          , l = en.dot(to)
          , c = xn.dot(xn)
          , u = xn.dot(to)
          , d = o * c - a * a;
        if (d === 0)
            return s.set(0, 0, 0),
            null;
        const p = 1 / d
          , m = (c * l - a * u) * p
          , g = (o * u - a * l) * p;
        return s.set(1 - m - g, g, m)
    }
    static containsPoint(t, e, i, r) {
        return this.getBarycoord(t, e, i, r, bn) === null ? !1 : bn.x >= 0 && bn.y >= 0 && bn.x + bn.y <= 1
    }
    static getInterpolation(t, e, i, r, s, o, a, l) {
        return this.getBarycoord(t, e, i, r, bn) === null ? (l.x = 0,
        l.y = 0,
        "z"in l && (l.z = 0),
        "w"in l && (l.w = 0),
        null) : (l.setScalar(0),
        l.addScaledVector(s, bn.x),
        l.addScaledVector(o, bn.y),
        l.addScaledVector(a, bn.z),
        l)
    }
    static getInterpolatedAttribute(t, e, i, r, s, o) {
        return ro.setScalar(0),
        so.setScalar(0),
        oo.setScalar(0),
        ro.fromBufferAttribute(t, e),
        so.fromBufferAttribute(t, i),
        oo.fromBufferAttribute(t, r),
        o.setScalar(0),
        o.addScaledVector(ro, s.x),
        o.addScaledVector(so, s.y),
        o.addScaledVector(oo, s.z),
        o
    }
    static isFrontFacing(t, e, i, r) {
        return en.subVectors(i, e),
        xn.subVectors(t, e),
        en.cross(xn).dot(r) < 0
    }
    set(t, e, i) {
        return this.a.copy(t),
        this.b.copy(e),
        this.c.copy(i),
        this
    }
    setFromPointsAndIndices(t, e, i, r) {
        return this.a.copy(t[e]),
        this.b.copy(t[i]),
        this.c.copy(t[r]),
        this
    }
    setFromAttributeAndIndices(t, e, i, r) {
        return this.a.fromBufferAttribute(t, e),
        this.b.fromBufferAttribute(t, i),
        this.c.fromBufferAttribute(t, r),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        return this.a.copy(t.a),
        this.b.copy(t.b),
        this.c.copy(t.c),
        this
    }
    getArea() {
        return en.subVectors(this.c, this.b),
        xn.subVectors(this.a, this.b),
        en.cross(xn).length() * .5
    }
    getMidpoint(t) {
        return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(t) {
        return nn.getNormal(this.a, this.b, this.c, t)
    }
    getPlane(t) {
        return t.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(t, e) {
        return nn.getBarycoord(t, this.a, this.b, this.c, e)
    }
    getInterpolation(t, e, i, r, s) {
        return nn.getInterpolation(t, this.a, this.b, this.c, e, i, r, s)
    }
    containsPoint(t) {
        return nn.containsPoint(t, this.a, this.b, this.c)
    }
    isFrontFacing(t) {
        return nn.isFrontFacing(this.a, this.b, this.c, t)
    }
    intersectsBox(t) {
        return t.intersectsTriangle(this)
    }
    closestPointToPoint(t, e) {
        const i = this.a
          , r = this.b
          , s = this.c;
        let o, a;
        Li.subVectors(r, i),
        Ui.subVectors(s, i),
        eo.subVectors(t, i);
        const l = Li.dot(eo)
          , c = Ui.dot(eo);
        if (l <= 0 && c <= 0)
            return e.copy(i);
        no.subVectors(t, r);
        const u = Li.dot(no)
          , d = Ui.dot(no);
        if (u >= 0 && d <= u)
            return e.copy(r);
        const p = l * d - u * c;
        if (p <= 0 && l >= 0 && u <= 0)
            return o = l / (l - u),
            e.copy(i).addScaledVector(Li, o);
        io.subVectors(t, s);
        const m = Li.dot(io)
          , g = Ui.dot(io);
        if (g >= 0 && m <= g)
            return e.copy(s);
        const b = m * c - l * g;
        if (b <= 0 && c >= 0 && g <= 0)
            return a = c / (c - g),
            e.copy(i).addScaledVector(Ui, a);
        const f = u * g - m * d;
        if (f <= 0 && d - u >= 0 && m - g >= 0)
            return Il.subVectors(s, r),
            a = (d - u) / (d - u + (m - g)),
            e.copy(r).addScaledVector(Il, a);
        const h = 1 / (f + b + p);
        return o = b * h,
        a = p * h,
        e.copy(i).addScaledVector(Li, o).addScaledVector(Ui, a)
    }
    equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
}
const ou = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , On = {
    h: 0,
    s: 0,
    l: 0
}
  , is = {
    h: 0,
    s: 0,
    l: 0
};
function ao(n, t, e) {
    return e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6 ? n + (t - n) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? n + (t - n) * 6 * (2 / 3 - e) : n
}
class Gt {
    constructor(t, e, i) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        this.set(t, e, i)
    }
    set(t, e, i) {
        if (e === void 0 && i === void 0) {
            const r = t;
            r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r)
        } else
            this.setRGB(t, e, i);
        return this
    }
    setScalar(t) {
        return this.r = t,
        this.g = t,
        this.b = t,
        this
    }
    setHex(t, e=ze) {
        return t = Math.floor(t),
        this.r = (t >> 16 & 255) / 255,
        this.g = (t >> 8 & 255) / 255,
        this.b = (t & 255) / 255,
        qt.toWorkingColorSpace(this, e),
        this
    }
    setRGB(t, e, i, r=qt.workingColorSpace) {
        return this.r = t,
        this.g = e,
        this.b = i,
        qt.toWorkingColorSpace(this, r),
        this
    }
    setHSL(t, e, i, r=qt.workingColorSpace) {
        if (t = Aa(t, 1),
        e = It(e, 0, 1),
        i = It(i, 0, 1),
        e === 0)
            this.r = this.g = this.b = i;
        else {
            const s = i <= .5 ? i * (1 + e) : i + e - i * e
              , o = 2 * i - s;
            this.r = ao(o, s, t + 1 / 3),
            this.g = ao(o, s, t),
            this.b = ao(o, s, t - 1 / 3)
        }
        return qt.toWorkingColorSpace(this, r),
        this
    }
    setStyle(t, e=ze) {
        function i(s) {
            s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
        }
        let r;
        if (r = /^(\w+)\(([^\)]*)\)/.exec(t)) {
            let s;
            const o = r[1]
              , a = r[2];
            switch (o) {
            case "rgb":
            case "rgba":
                if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                    return i(s[4]),
                    this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, e);
                if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                    return i(s[4]),
                    this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, e);
                break;
            case "hsl":
            case "hsla":
                if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                    return i(s[4]),
                    this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, e);
                break;
            default:
                console.warn("THREE.Color: Unknown color model " + t)
            }
        } else if (r = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const s = r[1]
              , o = s.length;
            if (o === 3)
                return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, e);
            if (o === 6)
                return this.setHex(parseInt(s, 16), e);
            console.warn("THREE.Color: Invalid hex color " + t)
        } else if (t && t.length > 0)
            return this.setColorName(t, e);
        return this
    }
    setColorName(t, e=ze) {
        const i = ou[t.toLowerCase()];
        return i !== void 0 ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(t) {
        return this.r = t.r,
        this.g = t.g,
        this.b = t.b,
        this
    }
    copySRGBToLinear(t) {
        return this.r = Tn(t.r),
        this.g = Tn(t.g),
        this.b = Tn(t.b),
        this
    }
    copyLinearToSRGB(t) {
        return this.r = ji(t.r),
        this.g = ji(t.g),
        this.b = ji(t.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(t=ze) {
        return qt.fromWorkingColorSpace(Se.copy(this), t),
        Math.round(It(Se.r * 255, 0, 255)) * 65536 + Math.round(It(Se.g * 255, 0, 255)) * 256 + Math.round(It(Se.b * 255, 0, 255))
    }
    getHexString(t=ze) {
        return ("000000" + this.getHex(t).toString(16)).slice(-6)
    }
    getHSL(t, e=qt.workingColorSpace) {
        qt.fromWorkingColorSpace(Se.copy(this), e);
        const i = Se.r
          , r = Se.g
          , s = Se.b
          , o = Math.max(i, r, s)
          , a = Math.min(i, r, s);
        let l, c;
        const u = (a + o) / 2;
        if (a === o)
            l = 0,
            c = 0;
        else {
            const d = o - a;
            switch (c = u <= .5 ? d / (o + a) : d / (2 - o - a),
            o) {
            case i:
                l = (r - s) / d + (r < s ? 6 : 0);
                break;
            case r:
                l = (s - i) / d + 2;
                break;
            case s:
                l = (i - r) / d + 4;
                break
            }
            l /= 6
        }
        return t.h = l,
        t.s = c,
        t.l = u,
        t
    }
    getRGB(t, e=qt.workingColorSpace) {
        return qt.fromWorkingColorSpace(Se.copy(this), e),
        t.r = Se.r,
        t.g = Se.g,
        t.b = Se.b,
        t
    }
    getStyle(t=ze) {
        qt.fromWorkingColorSpace(Se.copy(this), t);
        const e = Se.r
          , i = Se.g
          , r = Se.b;
        return t !== ze ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(r * 255)})`
    }
    offsetHSL(t, e, i) {
        return this.getHSL(On),
        this.setHSL(On.h + t, On.s + e, On.l + i)
    }
    add(t) {
        return this.r += t.r,
        this.g += t.g,
        this.b += t.b,
        this
    }
    addColors(t, e) {
        return this.r = t.r + e.r,
        this.g = t.g + e.g,
        this.b = t.b + e.b,
        this
    }
    addScalar(t) {
        return this.r += t,
        this.g += t,
        this.b += t,
        this
    }
    sub(t) {
        return this.r = Math.max(0, this.r - t.r),
        this.g = Math.max(0, this.g - t.g),
        this.b = Math.max(0, this.b - t.b),
        this
    }
    multiply(t) {
        return this.r *= t.r,
        this.g *= t.g,
        this.b *= t.b,
        this
    }
    multiplyScalar(t) {
        return this.r *= t,
        this.g *= t,
        this.b *= t,
        this
    }
    lerp(t, e) {
        return this.r += (t.r - this.r) * e,
        this.g += (t.g - this.g) * e,
        this.b += (t.b - this.b) * e,
        this
    }
    lerpColors(t, e, i) {
        return this.r = t.r + (e.r - t.r) * i,
        this.g = t.g + (e.g - t.g) * i,
        this.b = t.b + (e.b - t.b) * i,
        this
    }
    lerpHSL(t, e) {
        this.getHSL(On),
        t.getHSL(is);
        const i = Mr(On.h, is.h, e)
          , r = Mr(On.s, is.s, e)
          , s = Mr(On.l, is.l, e);
        return this.setHSL(i, r, s),
        this
    }
    setFromVector3(t) {
        return this.r = t.x,
        this.g = t.y,
        this.b = t.z,
        this
    }
    applyMatrix3(t) {
        const e = this.r
          , i = this.g
          , r = this.b
          , s = t.elements;
        return this.r = s[0] * e + s[3] * i + s[6] * r,
        this.g = s[1] * e + s[4] * i + s[7] * r,
        this.b = s[2] * e + s[5] * i + s[8] * r,
        this
    }
    equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b
    }
    fromArray(t, e=0) {
        return this.r = t[e],
        this.g = t[e + 1],
        this.b = t[e + 2],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.r,
        t[e + 1] = this.g,
        t[e + 2] = this.b,
        t
    }
    fromBufferAttribute(t, e) {
        return this.r = t.getX(e),
        this.g = t.getY(e),
        this.b = t.getZ(e),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
const Se = new Gt;
Gt.NAMES = ou;
let tp = 0;
class Ns extends gi {
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: tp++
        }),
        this.uuid = rr(),
        this.name = "",
        this.type = "Material",
        this.blending = Xi,
        this.side = Yn,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.alphaHash = !1,
        this.blendSrc = Ao,
        this.blendDst = Po,
        this.blendEquation = oi,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.blendColor = new Gt(0,0,0),
        this.blendAlpha = 0,
        this.depthFunc = $i,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = xl,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = yi,
        this.stencilZFail = yi,
        this.stencilZPass = yi,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.forceSinglePass = !1,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(t) {
        this._alphaTest > 0 != t > 0 && this.version++,
        this._alphaTest = t
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(t) {
        if (t !== void 0)
            for (const e in t) {
                const i = t[e];
                if (i === void 0) {
                    console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
                    continue
                }
                const r = this[e];
                if (r === void 0) {
                    console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
                    continue
                }
                r && r.isColor ? r.set(i) : r && r.isVector3 && i && i.isVector3 ? r.copy(i) : this[e] = i
            }
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        e && (t = {
            textures: {},
            images: {}
        });
        const i = {
            metadata: {
                version: 4.6,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        i.uuid = this.uuid,
        i.type = this.type,
        this.name !== "" && (i.name = this.name),
        this.color && this.color.isColor && (i.color = this.color.getHex()),
        this.roughness !== void 0 && (i.roughness = this.roughness),
        this.metalness !== void 0 && (i.metalness = this.metalness),
        this.sheen !== void 0 && (i.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (i.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (i.shininess = this.shininess),
        this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid,
        i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.dispersion !== void 0 && (i.dispersion = this.dispersion),
        this.iridescence !== void 0 && (i.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid),
        this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
        this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid),
        this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid,
        i.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid,
        i.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid,
        i.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid,
        i.normalMapType = this.normalMapType,
        i.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid,
        i.displacementScale = this.displacementScale,
        i.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid),
        this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid,
        this.combine !== void 0 && (i.combine = this.combine)),
        this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid),
        this.transmission !== void 0 && (i.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid),
        this.thickness !== void 0 && (i.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid),
        this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (i.size = this.size),
        this.shadowSide !== null && (i.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation),
        this.blending !== Xi && (i.blending = this.blending),
        this.side !== Yn && (i.side = this.side),
        this.vertexColors === !0 && (i.vertexColors = !0),
        this.opacity < 1 && (i.opacity = this.opacity),
        this.transparent === !0 && (i.transparent = !0),
        this.blendSrc !== Ao && (i.blendSrc = this.blendSrc),
        this.blendDst !== Po && (i.blendDst = this.blendDst),
        this.blendEquation !== oi && (i.blendEquation = this.blendEquation),
        this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha),
        this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha),
        this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()),
        this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha),
        this.depthFunc !== $i && (i.depthFunc = this.depthFunc),
        this.depthTest === !1 && (i.depthTest = this.depthTest),
        this.depthWrite === !1 && (i.depthWrite = this.depthWrite),
        this.colorWrite === !1 && (i.colorWrite = this.colorWrite),
        this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== xl && (i.stencilFunc = this.stencilFunc),
        this.stencilRef !== 0 && (i.stencilRef = this.stencilRef),
        this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== yi && (i.stencilFail = this.stencilFail),
        this.stencilZFail !== yi && (i.stencilZFail = this.stencilZFail),
        this.stencilZPass !== yi && (i.stencilZPass = this.stencilZPass),
        this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite),
        this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation),
        this.polygonOffset === !0 && (i.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth),
        this.dashSize !== void 0 && (i.dashSize = this.dashSize),
        this.gapSize !== void 0 && (i.gapSize = this.gapSize),
        this.scale !== void 0 && (i.scale = this.scale),
        this.dithering === !0 && (i.dithering = !0),
        this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
        this.alphaHash === !0 && (i.alphaHash = !0),
        this.alphaToCoverage === !0 && (i.alphaToCoverage = !0),
        this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (i.forceSinglePass = !0),
        this.wireframe === !0 && (i.wireframe = !0),
        this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (i.flatShading = !0),
        this.visible === !1 && (i.visible = !1),
        this.toneMapped === !1 && (i.toneMapped = !1),
        this.fog === !1 && (i.fog = !1),
        Object.keys(this.userData).length > 0 && (i.userData = this.userData);
        function r(s) {
            const o = [];
            for (const a in s) {
                const l = s[a];
                delete l.metadata,
                o.push(l)
            }
            return o
        }
        if (e) {
            const s = r(t.textures)
              , o = r(t.images);
            s.length > 0 && (i.textures = s),
            o.length > 0 && (i.images = o)
        }
        return i
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        this.name = t.name,
        this.blending = t.blending,
        this.side = t.side,
        this.vertexColors = t.vertexColors,
        this.opacity = t.opacity,
        this.transparent = t.transparent,
        this.blendSrc = t.blendSrc,
        this.blendDst = t.blendDst,
        this.blendEquation = t.blendEquation,
        this.blendSrcAlpha = t.blendSrcAlpha,
        this.blendDstAlpha = t.blendDstAlpha,
        this.blendEquationAlpha = t.blendEquationAlpha,
        this.blendColor.copy(t.blendColor),
        this.blendAlpha = t.blendAlpha,
        this.depthFunc = t.depthFunc,
        this.depthTest = t.depthTest,
        this.depthWrite = t.depthWrite,
        this.stencilWriteMask = t.stencilWriteMask,
        this.stencilFunc = t.stencilFunc,
        this.stencilRef = t.stencilRef,
        this.stencilFuncMask = t.stencilFuncMask,
        this.stencilFail = t.stencilFail,
        this.stencilZFail = t.stencilZFail,
        this.stencilZPass = t.stencilZPass,
        this.stencilWrite = t.stencilWrite;
        const e = t.clippingPlanes;
        let i = null;
        if (e !== null) {
            const r = e.length;
            i = new Array(r);
            for (let s = 0; s !== r; ++s)
                i[s] = e[s].clone()
        }
        return this.clippingPlanes = i,
        this.clipIntersection = t.clipIntersection,
        this.clipShadows = t.clipShadows,
        this.shadowSide = t.shadowSide,
        this.colorWrite = t.colorWrite,
        this.precision = t.precision,
        this.polygonOffset = t.polygonOffset,
        this.polygonOffsetFactor = t.polygonOffsetFactor,
        this.polygonOffsetUnits = t.polygonOffsetUnits,
        this.dithering = t.dithering,
        this.alphaTest = t.alphaTest,
        this.alphaHash = t.alphaHash,
        this.alphaToCoverage = t.alphaToCoverage,
        this.premultipliedAlpha = t.premultipliedAlpha,
        this.forceSinglePass = t.forceSinglePass,
        this.visible = t.visible,
        this.toneMapped = t.toneMapped,
        this.userData = JSON.parse(JSON.stringify(t.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(t) {
        t === !0 && this.version++
    }
    onBuild() {
        console.warn("Material: onBuild() has been removed.")
    }
}
class au extends Ns {
    constructor(t) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.type = "MeshBasicMaterial",
        this.color = new Gt(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new Pn,
        this.combine = Hc,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapRotation.copy(t.envMapRotation),
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.fog = t.fog,
        this
    }
}
const fe = new F
  , rs = new Ut;
class hn {
    constructor(t, e, i=!1) {
        if (Array.isArray(t))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0,
        this.name = "",
        this.array = t,
        this.itemSize = e,
        this.count = t !== void 0 ? t.length / e : 0,
        this.normalized = i,
        this.usage = bl,
        this.updateRanges = [],
        this.gpuType = Mn,
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(t) {
        t === !0 && this.version++
    }
    setUsage(t) {
        return this.usage = t,
        this
    }
    addUpdateRange(t, e) {
        this.updateRanges.push({
            start: t,
            count: e
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(t) {
        return this.name = t.name,
        this.array = new t.array.constructor(t.array),
        this.itemSize = t.itemSize,
        this.count = t.count,
        this.normalized = t.normalized,
        this.usage = t.usage,
        this.gpuType = t.gpuType,
        this
    }
    copyAt(t, e, i) {
        t *= this.itemSize,
        i *= e.itemSize;
        for (let r = 0, s = this.itemSize; r < s; r++)
            this.array[t + r] = e.array[i + r];
        return this
    }
    copyArray(t) {
        return this.array.set(t),
        this
    }
    applyMatrix3(t) {
        if (this.itemSize === 2)
            for (let e = 0, i = this.count; e < i; e++)
                rs.fromBufferAttribute(this, e),
                rs.applyMatrix3(t),
                this.setXY(e, rs.x, rs.y);
        else if (this.itemSize === 3)
            for (let e = 0, i = this.count; e < i; e++)
                fe.fromBufferAttribute(this, e),
                fe.applyMatrix3(t),
                this.setXYZ(e, fe.x, fe.y, fe.z);
        return this
    }
    applyMatrix4(t) {
        for (let e = 0, i = this.count; e < i; e++)
            fe.fromBufferAttribute(this, e),
            fe.applyMatrix4(t),
            this.setXYZ(e, fe.x, fe.y, fe.z);
        return this
    }
    applyNormalMatrix(t) {
        for (let e = 0, i = this.count; e < i; e++)
            fe.fromBufferAttribute(this, e),
            fe.applyNormalMatrix(t),
            this.setXYZ(e, fe.x, fe.y, fe.z);
        return this
    }
    transformDirection(t) {
        for (let e = 0, i = this.count; e < i; e++)
            fe.fromBufferAttribute(this, e),
            fe.transformDirection(t),
            this.setXYZ(e, fe.x, fe.y, fe.z);
        return this
    }
    set(t, e=0) {
        return this.array.set(t, e),
        this
    }
    getComponent(t, e) {
        let i = this.array[t * this.itemSize + e];
        return this.normalized && (i = Vi(i, this.array)),
        i
    }
    setComponent(t, e, i) {
        return this.normalized && (i = Ce(i, this.array)),
        this.array[t * this.itemSize + e] = i,
        this
    }
    getX(t) {
        let e = this.array[t * this.itemSize];
        return this.normalized && (e = Vi(e, this.array)),
        e
    }
    setX(t, e) {
        return this.normalized && (e = Ce(e, this.array)),
        this.array[t * this.itemSize] = e,
        this
    }
    getY(t) {
        let e = this.array[t * this.itemSize + 1];
        return this.normalized && (e = Vi(e, this.array)),
        e
    }
    setY(t, e) {
        return this.normalized && (e = Ce(e, this.array)),
        this.array[t * this.itemSize + 1] = e,
        this
    }
    getZ(t) {
        let e = this.array[t * this.itemSize + 2];
        return this.normalized && (e = Vi(e, this.array)),
        e
    }
    setZ(t, e) {
        return this.normalized && (e = Ce(e, this.array)),
        this.array[t * this.itemSize + 2] = e,
        this
    }
    getW(t) {
        let e = this.array[t * this.itemSize + 3];
        return this.normalized && (e = Vi(e, this.array)),
        e
    }
    setW(t, e) {
        return this.normalized && (e = Ce(e, this.array)),
        this.array[t * this.itemSize + 3] = e,
        this
    }
    setXY(t, e, i) {
        return t *= this.itemSize,
        this.normalized && (e = Ce(e, this.array),
        i = Ce(i, this.array)),
        this.array[t + 0] = e,
        this.array[t + 1] = i,
        this
    }
    setXYZ(t, e, i, r) {
        return t *= this.itemSize,
        this.normalized && (e = Ce(e, this.array),
        i = Ce(i, this.array),
        r = Ce(r, this.array)),
        this.array[t + 0] = e,
        this.array[t + 1] = i,
        this.array[t + 2] = r,
        this
    }
    setXYZW(t, e, i, r, s) {
        return t *= this.itemSize,
        this.normalized && (e = Ce(e, this.array),
        i = Ce(i, this.array),
        r = Ce(r, this.array),
        s = Ce(s, this.array)),
        this.array[t + 0] = e,
        this.array[t + 1] = i,
        this.array[t + 2] = r,
        this.array[t + 3] = s,
        this
    }
    onUpload(t) {
        return this.onUploadCallback = t,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (t.name = this.name),
        this.usage !== bl && (t.usage = this.usage),
        t
    }
}
class lu extends hn {
    constructor(t, e, i) {
        super(new Uint16Array(t), e, i)
    }
}
class cu extends hn {
    constructor(t, e, i) {
        super(new Uint32Array(t), e, i)
    }
}
class ui extends hn {
    constructor(t, e, i) {
        super(new Float32Array(t), e, i)
    }
}
let ep = 0;
const je = new me
  , lo = new Fe
  , Ii = new F
  , Ve = new Nr
  , _r = new Nr
  , Ee = new F;
class xi extends gi {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: ep++
        }),
        this.uuid = rr(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.indirect = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(t) {
        return Array.isArray(t) ? this.index = new (eu(t) ? cu : lu)(t,1) : this.index = t,
        this
    }
    setIndirect(t) {
        return this.indirect = t,
        this
    }
    getIndirect() {
        return this.indirect
    }
    getAttribute(t) {
        return this.attributes[t]
    }
    setAttribute(t, e) {
        return this.attributes[t] = e,
        this
    }
    deleteAttribute(t) {
        return delete this.attributes[t],
        this
    }
    hasAttribute(t) {
        return this.attributes[t] !== void 0
    }
    addGroup(t, e, i=0) {
        this.groups.push({
            start: t,
            count: e,
            materialIndex: i
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(t, e) {
        this.drawRange.start = t,
        this.drawRange.count = e
    }
    applyMatrix4(t) {
        const e = this.attributes.position;
        e !== void 0 && (e.applyMatrix4(t),
        e.needsUpdate = !0);
        const i = this.attributes.normal;
        if (i !== void 0) {
            const s = new Pt().getNormalMatrix(t);
            i.applyNormalMatrix(s),
            i.needsUpdate = !0
        }
        const r = this.attributes.tangent;
        return r !== void 0 && (r.transformDirection(t),
        r.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(t) {
        return je.makeRotationFromQuaternion(t),
        this.applyMatrix4(je),
        this
    }
    rotateX(t) {
        return je.makeRotationX(t),
        this.applyMatrix4(je),
        this
    }
    rotateY(t) {
        return je.makeRotationY(t),
        this.applyMatrix4(je),
        this
    }
    rotateZ(t) {
        return je.makeRotationZ(t),
        this.applyMatrix4(je),
        this
    }
    translate(t, e, i) {
        return je.makeTranslation(t, e, i),
        this.applyMatrix4(je),
        this
    }
    scale(t, e, i) {
        return je.makeScale(t, e, i),
        this.applyMatrix4(je),
        this
    }
    lookAt(t) {
        return lo.lookAt(t),
        lo.updateMatrix(),
        this.applyMatrix4(lo.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(Ii).negate(),
        this.translate(Ii.x, Ii.y, Ii.z),
        this
    }
    setFromPoints(t) {
        const e = this.getAttribute("position");
        if (e === void 0) {
            const i = [];
            for (let r = 0, s = t.length; r < s; r++) {
                const o = t[r];
                i.push(o.x, o.y, o.z || 0)
            }
            this.setAttribute("position", new ui(i,3))
        } else {
            const i = Math.min(t.length, e.count);
            for (let r = 0; r < i; r++) {
                const s = t[r];
                e.setXYZ(r, s.x, s.y, s.z || 0)
            }
            t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),
            e.needsUpdate = !0
        }
        return this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new Nr);
        const t = this.attributes.position
          , e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
            console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this),
            this.boundingBox.set(new F(-1 / 0,-1 / 0,-1 / 0), new F(1 / 0,1 / 0,1 / 0));
            return
        }
        if (t !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(t),
            e)
                for (let i = 0, r = e.length; i < r; i++) {
                    const s = e[i];
                    Ve.setFromBufferAttribute(s),
                    this.morphTargetsRelative ? (Ee.addVectors(this.boundingBox.min, Ve.min),
                    this.boundingBox.expandByPoint(Ee),
                    Ee.addVectors(this.boundingBox.max, Ve.max),
                    this.boundingBox.expandByPoint(Ee)) : (this.boundingBox.expandByPoint(Ve.min),
                    this.boundingBox.expandByPoint(Ve.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new Pa);
        const t = this.attributes.position
          , e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
            console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this),
            this.boundingSphere.set(new F, 1 / 0);
            return
        }
        if (t) {
            const i = this.boundingSphere.center;
            if (Ve.setFromBufferAttribute(t),
            e)
                for (let s = 0, o = e.length; s < o; s++) {
                    const a = e[s];
                    _r.setFromBufferAttribute(a),
                    this.morphTargetsRelative ? (Ee.addVectors(Ve.min, _r.min),
                    Ve.expandByPoint(Ee),
                    Ee.addVectors(Ve.max, _r.max),
                    Ve.expandByPoint(Ee)) : (Ve.expandByPoint(_r.min),
                    Ve.expandByPoint(_r.max))
                }
            Ve.getCenter(i);
            let r = 0;
            for (let s = 0, o = t.count; s < o; s++)
                Ee.fromBufferAttribute(t, s),
                r = Math.max(r, i.distanceToSquared(Ee));
            if (e)
                for (let s = 0, o = e.length; s < o; s++) {
                    const a = e[s]
                      , l = this.morphTargetsRelative;
                    for (let c = 0, u = a.count; c < u; c++)
                        Ee.fromBufferAttribute(a, c),
                        l && (Ii.fromBufferAttribute(t, c),
                        Ee.add(Ii)),
                        r = Math.max(r, i.distanceToSquared(Ee))
                }
            this.boundingSphere.radius = Math.sqrt(r),
            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const t = this.index
          , e = this.attributes;
        if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const i = e.position
          , r = e.normal
          , s = e.uv;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new hn(new Float32Array(4 * i.count),4));
        const o = this.getAttribute("tangent")
          , a = []
          , l = [];
        for (let I = 0; I < i.count; I++)
            a[I] = new F,
            l[I] = new F;
        const c = new F
          , u = new F
          , d = new F
          , p = new Ut
          , m = new Ut
          , g = new Ut
          , b = new F
          , f = new F;
        function h(I, E, x) {
            c.fromBufferAttribute(i, I),
            u.fromBufferAttribute(i, E),
            d.fromBufferAttribute(i, x),
            p.fromBufferAttribute(s, I),
            m.fromBufferAttribute(s, E),
            g.fromBufferAttribute(s, x),
            u.sub(c),
            d.sub(c),
            m.sub(p),
            g.sub(p);
            const A = 1 / (m.x * g.y - g.x * m.y);
            isFinite(A) && (b.copy(u).multiplyScalar(g.y).addScaledVector(d, -m.y).multiplyScalar(A),
            f.copy(d).multiplyScalar(m.x).addScaledVector(u, -g.x).multiplyScalar(A),
            a[I].add(b),
            a[E].add(b),
            a[x].add(b),
            l[I].add(f),
            l[E].add(f),
            l[x].add(f))
        }
        let T = this.groups;
        T.length === 0 && (T = [{
            start: 0,
            count: t.count
        }]);
        for (let I = 0, E = T.length; I < E; ++I) {
            const x = T[I]
              , A = x.start
              , G = x.count;
            for (let k = A, Y = A + G; k < Y; k += 3)
                h(t.getX(k + 0), t.getX(k + 1), t.getX(k + 2))
        }
        const y = new F
          , M = new F
          , U = new F
          , D = new F;
        function C(I) {
            U.fromBufferAttribute(r, I),
            D.copy(U);
            const E = a[I];
            y.copy(E),
            y.sub(U.multiplyScalar(U.dot(E))).normalize(),
            M.crossVectors(D, E);
            const A = M.dot(l[I]) < 0 ? -1 : 1;
            o.setXYZW(I, y.x, y.y, y.z, A)
        }
        for (let I = 0, E = T.length; I < E; ++I) {
            const x = T[I]
              , A = x.start
              , G = x.count;
            for (let k = A, Y = A + G; k < Y; k += 3)
                C(t.getX(k + 0)),
                C(t.getX(k + 1)),
                C(t.getX(k + 2))
        }
    }
    computeVertexNormals() {
        const t = this.index
          , e = this.getAttribute("position");
        if (e !== void 0) {
            let i = this.getAttribute("normal");
            if (i === void 0)
                i = new hn(new Float32Array(e.count * 3),3),
                this.setAttribute("normal", i);
            else
                for (let p = 0, m = i.count; p < m; p++)
                    i.setXYZ(p, 0, 0, 0);
            const r = new F
              , s = new F
              , o = new F
              , a = new F
              , l = new F
              , c = new F
              , u = new F
              , d = new F;
            if (t)
                for (let p = 0, m = t.count; p < m; p += 3) {
                    const g = t.getX(p + 0)
                      , b = t.getX(p + 1)
                      , f = t.getX(p + 2);
                    r.fromBufferAttribute(e, g),
                    s.fromBufferAttribute(e, b),
                    o.fromBufferAttribute(e, f),
                    u.subVectors(o, s),
                    d.subVectors(r, s),
                    u.cross(d),
                    a.fromBufferAttribute(i, g),
                    l.fromBufferAttribute(i, b),
                    c.fromBufferAttribute(i, f),
                    a.add(u),
                    l.add(u),
                    c.add(u),
                    i.setXYZ(g, a.x, a.y, a.z),
                    i.setXYZ(b, l.x, l.y, l.z),
                    i.setXYZ(f, c.x, c.y, c.z)
                }
            else
                for (let p = 0, m = e.count; p < m; p += 3)
                    r.fromBufferAttribute(e, p + 0),
                    s.fromBufferAttribute(e, p + 1),
                    o.fromBufferAttribute(e, p + 2),
                    u.subVectors(o, s),
                    d.subVectors(r, s),
                    u.cross(d),
                    i.setXYZ(p + 0, u.x, u.y, u.z),
                    i.setXYZ(p + 1, u.x, u.y, u.z),
                    i.setXYZ(p + 2, u.x, u.y, u.z);
            this.normalizeNormals(),
            i.needsUpdate = !0
        }
    }
    normalizeNormals() {
        const t = this.attributes.normal;
        for (let e = 0, i = t.count; e < i; e++)
            Ee.fromBufferAttribute(t, e),
            Ee.normalize(),
            t.setXYZ(e, Ee.x, Ee.y, Ee.z)
    }
    toNonIndexed() {
        function t(a, l) {
            const c = a.array
              , u = a.itemSize
              , d = a.normalized
              , p = new c.constructor(l.length * u);
            let m = 0
              , g = 0;
            for (let b = 0, f = l.length; b < f; b++) {
                a.isInterleavedBufferAttribute ? m = l[b] * a.data.stride + a.offset : m = l[b] * u;
                for (let h = 0; h < u; h++)
                    p[g++] = c[m++]
            }
            return new hn(p,u,d)
        }
        if (this.index === null)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const e = new xi
          , i = this.index.array
          , r = this.attributes;
        for (const a in r) {
            const l = r[a]
              , c = t(l, i);
            e.setAttribute(a, c)
        }
        const s = this.morphAttributes;
        for (const a in s) {
            const l = []
              , c = s[a];
            for (let u = 0, d = c.length; u < d; u++) {
                const p = c[u]
                  , m = t(p, i);
                l.push(m)
            }
            e.morphAttributes[a] = l
        }
        e.morphTargetsRelative = this.morphTargetsRelative;
        const o = this.groups;
        for (let a = 0, l = o.length; a < l; a++) {
            const c = o[a];
            e.addGroup(c.start, c.count, c.materialIndex)
        }
        return e
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.6,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (t.uuid = this.uuid,
        t.type = this.type,
        this.name !== "" && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        this.parameters !== void 0) {
            const l = this.parameters;
            for (const c in l)
                l[c] !== void 0 && (t[c] = l[c]);
            return t
        }
        t.data = {
            attributes: {}
        };
        const e = this.index;
        e !== null && (t.data.index = {
            type: e.array.constructor.name,
            array: Array.prototype.slice.call(e.array)
        });
        const i = this.attributes;
        for (const l in i) {
            const c = i[l];
            t.data.attributes[l] = c.toJSON(t.data)
        }
        const r = {};
        let s = !1;
        for (const l in this.morphAttributes) {
            const c = this.morphAttributes[l]
              , u = [];
            for (let d = 0, p = c.length; d < p; d++) {
                const m = c[d];
                u.push(m.toJSON(t.data))
            }
            u.length > 0 && (r[l] = u,
            s = !0)
        }
        s && (t.data.morphAttributes = r,
        t.data.morphTargetsRelative = this.morphTargetsRelative);
        const o = this.groups;
        o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
        const a = this.boundingSphere;
        return a !== null && (t.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius
        }),
        t
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const e = {};
        this.name = t.name;
        const i = t.index;
        i !== null && this.setIndex(i.clone(e));
        const r = t.attributes;
        for (const c in r) {
            const u = r[c];
            this.setAttribute(c, u.clone(e))
        }
        const s = t.morphAttributes;
        for (const c in s) {
            const u = []
              , d = s[c];
            for (let p = 0, m = d.length; p < m; p++)
                u.push(d[p].clone(e));
            this.morphAttributes[c] = u
        }
        this.morphTargetsRelative = t.morphTargetsRelative;
        const o = t.groups;
        for (let c = 0, u = o.length; c < u; c++) {
            const d = o[c];
            this.addGroup(d.start, d.count, d.materialIndex)
        }
        const a = t.boundingBox;
        a !== null && (this.boundingBox = a.clone());
        const l = t.boundingSphere;
        return l !== null && (this.boundingSphere = l.clone()),
        this.drawRange.start = t.drawRange.start,
        this.drawRange.count = t.drawRange.count,
        this.userData = t.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
const Nl = new me
  , ti = new ru
  , ss = new Pa
  , Fl = new F
  , os = new F
  , as = new F
  , ls = new F
  , co = new F
  , cs = new F
  , Ol = new F
  , us = new F;
class sn extends Fe {
    constructor(t=new xi, e=new au) {
        super(),
        this.isMesh = !0,
        this.type = "Mesh",
        this.geometry = t,
        this.material = e,
        this.updateMorphTargets()
    }
    copy(t, e) {
        return super.copy(t, e),
        t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
        this.material = Array.isArray(t.material) ? t.material.slice() : t.material,
        this.geometry = t.geometry,
        this
    }
    updateMorphTargets() {
        const e = this.geometry.morphAttributes
          , i = Object.keys(e);
        if (i.length > 0) {
            const r = e[i[0]];
            if (r !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let s = 0, o = r.length; s < o; s++) {
                    const a = r[s].name || String(s);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[a] = s
                }
            }
        }
    }
    getVertexPosition(t, e) {
        const i = this.geometry
          , r = i.attributes.position
          , s = i.morphAttributes.position
          , o = i.morphTargetsRelative;
        e.fromBufferAttribute(r, t);
        const a = this.morphTargetInfluences;
        if (s && a) {
            cs.set(0, 0, 0);
            for (let l = 0, c = s.length; l < c; l++) {
                const u = a[l]
                  , d = s[l];
                u !== 0 && (co.fromBufferAttribute(d, t),
                o ? cs.addScaledVector(co, u) : cs.addScaledVector(co.sub(e), u))
            }
            e.add(cs)
        }
        return e
    }
    raycast(t, e) {
        const i = this.geometry
          , r = this.material
          , s = this.matrixWorld;
        r !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(),
        ss.copy(i.boundingSphere),
        ss.applyMatrix4(s),
        ti.copy(t.ray).recast(t.near),
        !(ss.containsPoint(ti.origin) === !1 && (ti.intersectSphere(ss, Fl) === null || ti.origin.distanceToSquared(Fl) > (t.far - t.near) ** 2)) && (Nl.copy(s).invert(),
        ti.copy(t.ray).applyMatrix4(Nl),
        !(i.boundingBox !== null && ti.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(t, e, ti)))
    }
    _computeIntersections(t, e, i) {
        let r;
        const s = this.geometry
          , o = this.material
          , a = s.index
          , l = s.attributes.position
          , c = s.attributes.uv
          , u = s.attributes.uv1
          , d = s.attributes.normal
          , p = s.groups
          , m = s.drawRange;
        if (a !== null)
            if (Array.isArray(o))
                for (let g = 0, b = p.length; g < b; g++) {
                    const f = p[g]
                      , h = o[f.materialIndex]
                      , T = Math.max(f.start, m.start)
                      , y = Math.min(a.count, Math.min(f.start + f.count, m.start + m.count));
                    for (let M = T, U = y; M < U; M += 3) {
                        const D = a.getX(M)
                          , C = a.getX(M + 1)
                          , I = a.getX(M + 2);
                        r = hs(this, h, t, i, c, u, d, D, C, I),
                        r && (r.faceIndex = Math.floor(M / 3),
                        r.face.materialIndex = f.materialIndex,
                        e.push(r))
                    }
                }
            else {
                const g = Math.max(0, m.start)
                  , b = Math.min(a.count, m.start + m.count);
                for (let f = g, h = b; f < h; f += 3) {
                    const T = a.getX(f)
                      , y = a.getX(f + 1)
                      , M = a.getX(f + 2);
                    r = hs(this, o, t, i, c, u, d, T, y, M),
                    r && (r.faceIndex = Math.floor(f / 3),
                    e.push(r))
                }
            }
        else if (l !== void 0)
            if (Array.isArray(o))
                for (let g = 0, b = p.length; g < b; g++) {
                    const f = p[g]
                      , h = o[f.materialIndex]
                      , T = Math.max(f.start, m.start)
                      , y = Math.min(l.count, Math.min(f.start + f.count, m.start + m.count));
                    for (let M = T, U = y; M < U; M += 3) {
                        const D = M
                          , C = M + 1
                          , I = M + 2;
                        r = hs(this, h, t, i, c, u, d, D, C, I),
                        r && (r.faceIndex = Math.floor(M / 3),
                        r.face.materialIndex = f.materialIndex,
                        e.push(r))
                    }
                }
            else {
                const g = Math.max(0, m.start)
                  , b = Math.min(l.count, m.start + m.count);
                for (let f = g, h = b; f < h; f += 3) {
                    const T = f
                      , y = f + 1
                      , M = f + 2;
                    r = hs(this, o, t, i, c, u, d, T, y, M),
                    r && (r.faceIndex = Math.floor(f / 3),
                    e.push(r))
                }
            }
    }
}
function np(n, t, e, i, r, s, o, a) {
    let l;
    if (t.side === Ne ? l = i.intersectTriangle(o, s, r, !0, a) : l = i.intersectTriangle(r, s, o, t.side === Yn, a),
    l === null)
        return null;
    us.copy(a),
    us.applyMatrix4(n.matrixWorld);
    const c = e.ray.origin.distanceTo(us);
    return c < e.near || c > e.far ? null : {
        distance: c,
        point: us.clone(),
        object: n
    }
}
function hs(n, t, e, i, r, s, o, a, l, c) {
    n.getVertexPosition(a, os),
    n.getVertexPosition(l, as),
    n.getVertexPosition(c, ls);
    const u = np(n, t, e, i, os, as, ls, Ol);
    if (u) {
        const d = new F;
        nn.getBarycoord(Ol, os, as, ls, d),
        r && (u.uv = nn.getInterpolatedAttribute(r, a, l, c, d, new Ut)),
        s && (u.uv1 = nn.getInterpolatedAttribute(s, a, l, c, d, new Ut)),
        o && (u.normal = nn.getInterpolatedAttribute(o, a, l, c, d, new F),
        u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1));
        const p = {
            a,
            b: l,
            c,
            normal: new F,
            materialIndex: 0
        };
        nn.getNormal(os, as, ls, p.normal),
        u.face = p,
        u.barycoord = d
    }
    return u
}
class Fr extends xi {
    constructor(t=1, e=1, i=1, r=1, s=1, o=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: r,
            heightSegments: s,
            depthSegments: o
        };
        const a = this;
        r = Math.floor(r),
        s = Math.floor(s),
        o = Math.floor(o);
        const l = []
          , c = []
          , u = []
          , d = [];
        let p = 0
          , m = 0;
        g("z", "y", "x", -1, -1, i, e, t, o, s, 0),
        g("z", "y", "x", 1, -1, i, e, -t, o, s, 1),
        g("x", "z", "y", 1, 1, t, i, e, r, o, 2),
        g("x", "z", "y", 1, -1, t, i, -e, r, o, 3),
        g("x", "y", "z", 1, -1, t, e, i, r, s, 4),
        g("x", "y", "z", -1, -1, t, e, -i, r, s, 5),
        this.setIndex(l),
        this.setAttribute("position", new ui(c,3)),
        this.setAttribute("normal", new ui(u,3)),
        this.setAttribute("uv", new ui(d,2));
        function g(b, f, h, T, y, M, U, D, C, I, E) {
            const x = M / C
              , A = U / I
              , G = M / 2
              , k = U / 2
              , Y = D / 2
              , K = C + 1
              , X = I + 1;
            let Z = 0
              , z = 0;
            const rt = new F;
            for (let ut = 0; ut < X; ut++) {
                const gt = ut * A - k;
                for (let Nt = 0; Nt < K; Nt++) {
                    const te = Nt * x - G;
                    rt[b] = te * T,
                    rt[f] = gt * y,
                    rt[h] = Y,
                    c.push(rt.x, rt.y, rt.z),
                    rt[b] = 0,
                    rt[f] = 0,
                    rt[h] = D > 0 ? 1 : -1,
                    u.push(rt.x, rt.y, rt.z),
                    d.push(Nt / C),
                    d.push(1 - ut / I),
                    Z += 1
                }
            }
            for (let ut = 0; ut < I; ut++)
                for (let gt = 0; gt < C; gt++) {
                    const Nt = p + gt + K * ut
                      , te = p + gt + K * (ut + 1)
                      , W = p + (gt + 1) + K * (ut + 1)
                      , tt = p + (gt + 1) + K * ut;
                    l.push(Nt, te, tt),
                    l.push(te, W, tt),
                    z += 6
                }
            a.addGroup(m, z, E),
            m += z,
            p += Z
        }
    }
    copy(t) {
        return super.copy(t),
        this.parameters = Object.assign({}, t.parameters),
        this
    }
    static fromJSON(t) {
        return new Fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)
    }
}
function nr(n) {
    const t = {};
    for (const e in n) {
        t[e] = {};
        for (const i in n[e]) {
            const r = n[e][i];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),
            t[e][i] = null) : t[e][i] = r.clone() : Array.isArray(r) ? t[e][i] = r.slice() : t[e][i] = r
        }
    }
    return t
}
function Ae(n) {
    const t = {};
    for (let e = 0; e < n.length; e++) {
        const i = nr(n[e]);
        for (const r in i)
            t[r] = i[r]
    }
    return t
}
function ip(n) {
    const t = [];
    for (let e = 0; e < n.length; e++)
        t.push(n[e].clone());
    return t
}
function uu(n) {
    const t = n.getRenderTarget();
    return t === null ? n.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : qt.workingColorSpace
}
const rp = {
    clone: nr,
    merge: Ae
};
var sp = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
  , op = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class dn extends Ns {
    constructor(t) {
        super(),
        this.isShaderMaterial = !0,
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.uniformsGroups = [],
        this.vertexShader = sp,
        this.fragmentShader = op,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.forceSinglePass = !0,
        this.extensions = {
            clipCullDistance: !1,
            multiDraw: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv1: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        t !== void 0 && this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.fragmentShader = t.fragmentShader,
        this.vertexShader = t.vertexShader,
        this.uniforms = nr(t.uniforms),
        this.uniformsGroups = ip(t.uniformsGroups),
        this.defines = Object.assign({}, t.defines),
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.fog = t.fog,
        this.lights = t.lights,
        this.clipping = t.clipping,
        this.extensions = Object.assign({}, t.extensions),
        this.glslVersion = t.glslVersion,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        e.glslVersion = this.glslVersion,
        e.uniforms = {};
        for (const r in this.uniforms) {
            const o = this.uniforms[r].value;
            o && o.isTexture ? e.uniforms[r] = {
                type: "t",
                value: o.toJSON(t).uuid
            } : o && o.isColor ? e.uniforms[r] = {
                type: "c",
                value: o.getHex()
            } : o && o.isVector2 ? e.uniforms[r] = {
                type: "v2",
                value: o.toArray()
            } : o && o.isVector3 ? e.uniforms[r] = {
                type: "v3",
                value: o.toArray()
            } : o && o.isVector4 ? e.uniforms[r] = {
                type: "v4",
                value: o.toArray()
            } : o && o.isMatrix3 ? e.uniforms[r] = {
                type: "m3",
                value: o.toArray()
            } : o && o.isMatrix4 ? e.uniforms[r] = {
                type: "m4",
                value: o.toArray()
            } : e.uniforms[r] = {
                value: o
            }
        }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        e.vertexShader = this.vertexShader,
        e.fragmentShader = this.fragmentShader,
        e.lights = this.lights,
        e.clipping = this.clipping;
        const i = {};
        for (const r in this.extensions)
            this.extensions[r] === !0 && (i[r] = !0);
        return Object.keys(i).length > 0 && (e.extensions = i),
        e
    }
}
class hu extends Fe {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = "Camera",
        this.matrixWorldInverse = new me,
        this.projectionMatrix = new me,
        this.projectionMatrixInverse = new me,
        this.coordinateSystem = yn
    }
    copy(t, e) {
        return super.copy(t, e),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
        this.coordinateSystem = t.coordinateSystem,
        this
    }
    getWorldDirection(t) {
        return super.getWorldDirection(t).negate()
    }
    updateMatrixWorld(t) {
        super.updateMatrixWorld(t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(t, e) {
        super.updateWorldMatrix(t, e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const Bn = new F
  , Bl = new Ut
  , kl = new Ut;
class Ke extends hu {
    constructor(t=50, e=1, i=.1, r=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = "PerspectiveCamera",
        this.fov = t,
        this.zoom = 1,
        this.near = i,
        this.far = r,
        this.focus = 10,
        this.aspect = e,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.fov = t.fov,
        this.zoom = t.zoom,
        this.near = t.near,
        this.far = t.far,
        this.focus = t.focus,
        this.aspect = t.aspect,
        this.view = t.view === null ? null : Object.assign({}, t.view),
        this.filmGauge = t.filmGauge,
        this.filmOffset = t.filmOffset,
        this
    }
    setFocalLength(t) {
        const e = .5 * this.getFilmHeight() / t;
        this.fov = Sr * 2 * Math.atan(e),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        const t = Math.tan(wr * .5 * this.fov);
        return .5 * this.getFilmHeight() / t
    }
    getEffectiveFOV() {
        return Sr * 2 * Math.atan(Math.tan(wr * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    getViewBounds(t, e, i) {
        Bn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse),
        e.set(Bn.x, Bn.y).multiplyScalar(-t / Bn.z),
        Bn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse),
        i.set(Bn.x, Bn.y).multiplyScalar(-t / Bn.z)
    }
    getViewSize(t, e) {
        return this.getViewBounds(t, Bl, kl),
        e.subVectors(kl, Bl)
    }
    setViewOffset(t, e, i, r, s, o) {
        this.aspect = t / e,
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = t,
        this.view.fullHeight = e,
        this.view.offsetX = i,
        this.view.offsetY = r,
        this.view.width = s,
        this.view.height = o,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const t = this.near;
        let e = t * Math.tan(wr * .5 * this.fov) / this.zoom
          , i = 2 * e
          , r = this.aspect * i
          , s = -.5 * r;
        const o = this.view;
        if (this.view !== null && this.view.enabled) {
            const l = o.fullWidth
              , c = o.fullHeight;
            s += o.offsetX * r / l,
            e -= o.offsetY * i / c,
            r *= o.width / l,
            i *= o.height / c
        }
        const a = this.filmOffset;
        a !== 0 && (s += t * a / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(s, s + r, e, e - i, t, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.fov = this.fov,
        e.object.zoom = this.zoom,
        e.object.near = this.near,
        e.object.far = this.far,
        e.object.focus = this.focus,
        e.object.aspect = this.aspect,
        this.view !== null && (e.object.view = Object.assign({}, this.view)),
        e.object.filmGauge = this.filmGauge,
        e.object.filmOffset = this.filmOffset,
        e
    }
}
const Ni = -90
  , Fi = 1;
class ap extends Fe {
    constructor(t, e, i) {
        super(),
        this.type = "CubeCamera",
        this.renderTarget = i,
        this.coordinateSystem = null,
        this.activeMipmapLevel = 0;
        const r = new Ke(Ni,Fi,t,e);
        r.layers = this.layers,
        this.add(r);
        const s = new Ke(Ni,Fi,t,e);
        s.layers = this.layers,
        this.add(s);
        const o = new Ke(Ni,Fi,t,e);
        o.layers = this.layers,
        this.add(o);
        const a = new Ke(Ni,Fi,t,e);
        a.layers = this.layers,
        this.add(a);
        const l = new Ke(Ni,Fi,t,e);
        l.layers = this.layers,
        this.add(l);
        const c = new Ke(Ni,Fi,t,e);
        c.layers = this.layers,
        this.add(c)
    }
    updateCoordinateSystem() {
        const t = this.coordinateSystem
          , e = this.children.concat()
          , [i,r,s,o,a,l] = e;
        for (const c of e)
            this.remove(c);
        if (t === yn)
            i.up.set(0, 1, 0),
            i.lookAt(1, 0, 0),
            r.up.set(0, 1, 0),
            r.lookAt(-1, 0, 0),
            s.up.set(0, 0, -1),
            s.lookAt(0, 1, 0),
            o.up.set(0, 0, 1),
            o.lookAt(0, -1, 0),
            a.up.set(0, 1, 0),
            a.lookAt(0, 0, 1),
            l.up.set(0, 1, 0),
            l.lookAt(0, 0, -1);
        else if (t === As)
            i.up.set(0, -1, 0),
            i.lookAt(-1, 0, 0),
            r.up.set(0, -1, 0),
            r.lookAt(1, 0, 0),
            s.up.set(0, 0, 1),
            s.lookAt(0, 1, 0),
            o.up.set(0, 0, -1),
            o.lookAt(0, -1, 0),
            a.up.set(0, -1, 0),
            a.lookAt(0, 0, 1),
            l.up.set(0, -1, 0),
            l.lookAt(0, 0, -1);
        else
            throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
        for (const c of e)
            this.add(c),
            c.updateMatrixWorld()
    }
    update(t, e) {
        this.parent === null && this.updateMatrixWorld();
        const {renderTarget: i, activeMipmapLevel: r} = this;
        this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem,
        this.updateCoordinateSystem());
        const [s,o,a,l,c,u] = this.children
          , d = t.getRenderTarget()
          , p = t.getActiveCubeFace()
          , m = t.getActiveMipmapLevel()
          , g = t.xr.enabled;
        t.xr.enabled = !1;
        const b = i.texture.generateMipmaps;
        i.texture.generateMipmaps = !1,
        t.setRenderTarget(i, 0, r),
        t.render(e, s),
        t.setRenderTarget(i, 1, r),
        t.render(e, o),
        t.setRenderTarget(i, 2, r),
        t.render(e, a),
        t.setRenderTarget(i, 3, r),
        t.render(e, l),
        t.setRenderTarget(i, 4, r),
        t.render(e, c),
        i.texture.generateMipmaps = b,
        t.setRenderTarget(i, 5, r),
        t.render(e, u),
        t.setRenderTarget(d, p, m),
        t.xr.enabled = g,
        i.texture.needsPMREMUpdate = !0
    }
}
class Ra extends Pe {
    constructor(t, e, i, r, s, o, a, l, c, u) {
        t = t !== void 0 ? t : [],
        e = e !== void 0 ? e : Zi,
        super(t, e, i, r, s, o, a, l, c, u),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(t) {
        this.image = t
    }
}
class lp extends pi {
    constructor(t=1, e={}) {
        super(t, t, e),
        this.isWebGLCubeRenderTarget = !0;
        const i = {
            width: t,
            height: t,
            depth: 1
        }
          , r = [i, i, i, i, i, i];
        this.texture = new Ra(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),
        this.texture.isRenderTargetTexture = !0,
        this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1,
        this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : cn
    }
    fromEquirectangularTexture(t, e) {
        this.texture.type = e.type,
        this.texture.colorSpace = e.colorSpace,
        this.texture.generateMipmaps = e.generateMipmaps,
        this.texture.minFilter = e.minFilter,
        this.texture.magFilter = e.magFilter;
        const i = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }
          , r = new Fr(5,5,5)
          , s = new dn({
            name: "CubemapFromEquirect",
            uniforms: nr(i.uniforms),
            vertexShader: i.vertexShader,
            fragmentShader: i.fragmentShader,
            side: Ne,
            blending: Xn
        });
        s.uniforms.tEquirect.value = e;
        const o = new sn(r,s)
          , a = e.minFilter;
        return e.minFilter === ci && (e.minFilter = cn),
        new ap(1,10,this).update(t, o),
        e.minFilter = a,
        o.geometry.dispose(),
        o.material.dispose(),
        this
    }
    clear(t, e, i, r) {
        const s = t.getRenderTarget();
        for (let o = 0; o < 6; o++)
            t.setRenderTarget(this, o),
            t.clear(e, i, r);
        t.setRenderTarget(s)
    }
}
class cp extends Fe {
    constructor() {
        super(),
        this.isScene = !0,
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.backgroundBlurriness = 0,
        this.backgroundIntensity = 1,
        this.backgroundRotation = new Pn,
        this.environmentIntensity = 1,
        this.environmentRotation = new Pn,
        this.overrideMaterial = null,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(t, e) {
        return super.copy(t, e),
        t.background !== null && (this.background = t.background.clone()),
        t.environment !== null && (this.environment = t.environment.clone()),
        t.fog !== null && (this.fog = t.fog.clone()),
        this.backgroundBlurriness = t.backgroundBlurriness,
        this.backgroundIntensity = t.backgroundIntensity,
        this.backgroundRotation.copy(t.backgroundRotation),
        this.environmentIntensity = t.environmentIntensity,
        this.environmentRotation.copy(t.environmentRotation),
        t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()),
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return this.fog !== null && (e.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity),
        e.object.backgroundRotation = this.backgroundRotation.toArray(),
        this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity),
        e.object.environmentRotation = this.environmentRotation.toArray(),
        e
    }
}
const uo = new F
  , up = new F
  , hp = new Pt;
class Hn {
    constructor(t=new F(1,0,0), e=0) {
        this.isPlane = !0,
        this.normal = t,
        this.constant = e
    }
    set(t, e) {
        return this.normal.copy(t),
        this.constant = e,
        this
    }
    setComponents(t, e, i, r) {
        return this.normal.set(t, e, i),
        this.constant = r,
        this
    }
    setFromNormalAndCoplanarPoint(t, e) {
        return this.normal.copy(t),
        this.constant = -e.dot(this.normal),
        this
    }
    setFromCoplanarPoints(t, e, i) {
        const r = uo.subVectors(i, e).cross(up.subVectors(t, e)).normalize();
        return this.setFromNormalAndCoplanarPoint(r, t),
        this
    }
    copy(t) {
        return this.normal.copy(t.normal),
        this.constant = t.constant,
        this
    }
    normalize() {
        const t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t),
        this.constant *= t,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(t) {
        return this.normal.dot(t) + this.constant
    }
    distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius
    }
    projectPoint(t, e) {
        return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t))
    }
    intersectLine(t, e) {
        const i = t.delta(uo)
          , r = this.normal.dot(i);
        if (r === 0)
            return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
        const s = -(t.start.dot(this.normal) + this.constant) / r;
        return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(i, s)
    }
    intersectsLine(t) {
        const e = this.distanceToPoint(t.start)
          , i = this.distanceToPoint(t.end);
        return e < 0 && i > 0 || i < 0 && e > 0
    }
    intersectsBox(t) {
        return t.intersectsPlane(this)
    }
    intersectsSphere(t) {
        return t.intersectsPlane(this)
    }
    coplanarPoint(t) {
        return t.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(t, e) {
        const i = e || hp.getNormalMatrix(t)
          , r = this.coplanarPoint(uo).applyMatrix4(t)
          , s = this.normal.applyMatrix3(i).normalize();
        return this.constant = -r.dot(s),
        this
    }
    translate(t) {
        return this.constant -= t.dot(this.normal),
        this
    }
    equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const ei = new Pa
  , ds = new F;
class du {
    constructor(t=new Hn, e=new Hn, i=new Hn, r=new Hn, s=new Hn, o=new Hn) {
        this.planes = [t, e, i, r, s, o]
    }
    set(t, e, i, r, s, o) {
        const a = this.planes;
        return a[0].copy(t),
        a[1].copy(e),
        a[2].copy(i),
        a[3].copy(r),
        a[4].copy(s),
        a[5].copy(o),
        this
    }
    copy(t) {
        const e = this.planes;
        for (let i = 0; i < 6; i++)
            e[i].copy(t.planes[i]);
        return this
    }
    setFromProjectionMatrix(t, e=yn) {
        const i = this.planes
          , r = t.elements
          , s = r[0]
          , o = r[1]
          , a = r[2]
          , l = r[3]
          , c = r[4]
          , u = r[5]
          , d = r[6]
          , p = r[7]
          , m = r[8]
          , g = r[9]
          , b = r[10]
          , f = r[11]
          , h = r[12]
          , T = r[13]
          , y = r[14]
          , M = r[15];
        if (i[0].setComponents(l - s, p - c, f - m, M - h).normalize(),
        i[1].setComponents(l + s, p + c, f + m, M + h).normalize(),
        i[2].setComponents(l + o, p + u, f + g, M + T).normalize(),
        i[3].setComponents(l - o, p - u, f - g, M - T).normalize(),
        i[4].setComponents(l - a, p - d, f - b, M - y).normalize(),
        e === yn)
            i[5].setComponents(l + a, p + d, f + b, M + y).normalize();
        else if (e === As)
            i[5].setComponents(a, d, b, y).normalize();
        else
            throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
        return this
    }
    intersectsObject(t) {
        if (t.boundingSphere !== void 0)
            t.boundingSphere === null && t.computeBoundingSphere(),
            ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
        else {
            const e = t.geometry;
            e.boundingSphere === null && e.computeBoundingSphere(),
            ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)
        }
        return this.intersectsSphere(ei)
    }
    intersectsSprite(t) {
        return ei.center.set(0, 0, 0),
        ei.radius = .7071067811865476,
        ei.applyMatrix4(t.matrixWorld),
        this.intersectsSphere(ei)
    }
    intersectsSphere(t) {
        const e = this.planes
          , i = t.center
          , r = -t.radius;
        for (let s = 0; s < 6; s++)
            if (e[s].distanceToPoint(i) < r)
                return !1;
        return !0
    }
    intersectsBox(t) {
        const e = this.planes;
        for (let i = 0; i < 6; i++) {
            const r = e[i];
            if (ds.x = r.normal.x > 0 ? t.max.x : t.min.x,
            ds.y = r.normal.y > 0 ? t.max.y : t.min.y,
            ds.z = r.normal.z > 0 ? t.max.z : t.min.z,
            r.distanceToPoint(ds) < 0)
                return !1
        }
        return !0
    }
    containsPoint(t) {
        const e = this.planes;
        for (let i = 0; i < 6; i++)
            if (e[i].distanceToPoint(t) < 0)
                return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class ps extends Fe {
    constructor() {
        super(),
        this.isGroup = !0,
        this.type = "Group"
    }
}
class pu extends Pe {
    constructor(t, e, i, r, s, o, a, l, c, u=qi) {
        if (u !== qi && u !== tr)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        i === void 0 && u === qi && (i = di),
        i === void 0 && u === tr && (i = Qi),
        super(null, r, s, o, a, l, u, i, c),
        this.isDepthTexture = !0,
        this.image = {
            width: t,
            height: e
        },
        this.magFilter = a !== void 0 ? a : on,
        this.minFilter = l !== void 0 ? l : on,
        this.flipY = !1,
        this.generateMipmaps = !1,
        this.compareFunction = null
    }
    copy(t) {
        return super.copy(t),
        this.compareFunction = t.compareFunction,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return this.compareFunction !== null && (e.compareFunction = this.compareFunction),
        e
    }
}
class bi extends xi {
    constructor(t=1, e=1, i=1, r=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: r
        };
        const s = t / 2
          , o = e / 2
          , a = Math.floor(i)
          , l = Math.floor(r)
          , c = a + 1
          , u = l + 1
          , d = t / a
          , p = e / l
          , m = []
          , g = []
          , b = []
          , f = [];
        for (let h = 0; h < u; h++) {
            const T = h * p - o;
            for (let y = 0; y < c; y++) {
                const M = y * d - s;
                g.push(M, -T, 0),
                b.push(0, 0, 1),
                f.push(y / a),
                f.push(1 - h / l)
            }
        }
        for (let h = 0; h < l; h++)
            for (let T = 0; T < a; T++) {
                const y = T + c * h
                  , M = T + c * (h + 1)
                  , U = T + 1 + c * (h + 1)
                  , D = T + 1 + c * h;
                m.push(y, M, D),
                m.push(M, U, D)
            }
        this.setIndex(m),
        this.setAttribute("position", new ui(g,3)),
        this.setAttribute("normal", new ui(b,3)),
        this.setAttribute("uv", new ui(f,2))
    }
    copy(t) {
        return super.copy(t),
        this.parameters = Object.assign({}, t.parameters),
        this
    }
    static fromJSON(t) {
        return new bi(t.width,t.height,t.widthSegments,t.heightSegments)
    }
}
class dp extends Ns {
    constructor(t) {
        super(),
        this.isMeshDepthMaterial = !0,
        this.type = "MeshDepthMaterial",
        this.depthPacking = cd,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.depthPacking = t.depthPacking,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
}
class pp extends Ns {
    constructor(t) {
        super(),
        this.isMeshDistanceMaterial = !0,
        this.type = "MeshDistanceMaterial",
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this
    }
}
const Vl = {
    enabled: !1,
    files: {},
    add: function(n, t) {
        this.enabled !== !1 && (this.files[n] = t)
    },
    get: function(n) {
        if (this.enabled !== !1)
            return this.files[n]
    },
    remove: function(n) {
        delete this.files[n]
    },
    clear: function() {
        this.files = {}
    }
};
class fp {
    constructor(t, e, i) {
        const r = this;
        let s = !1, o = 0, a = 0, l;
        const c = [];
        this.onStart = void 0,
        this.onLoad = t,
        this.onProgress = e,
        this.onError = i,
        this.itemStart = function(u) {
            a++,
            s === !1 && r.onStart !== void 0 && r.onStart(u, o, a),
            s = !0
        }
        ,
        this.itemEnd = function(u) {
            o++,
            r.onProgress !== void 0 && r.onProgress(u, o, a),
            o === a && (s = !1,
            r.onLoad !== void 0 && r.onLoad())
        }
        ,
        this.itemError = function(u) {
            r.onError !== void 0 && r.onError(u)
        }
        ,
        this.resolveURL = function(u) {
            return l ? l(u) : u
        }
        ,
        this.setURLModifier = function(u) {
            return l = u,
            this
        }
        ,
        this.addHandler = function(u, d) {
            return c.push(u, d),
            this
        }
        ,
        this.removeHandler = function(u) {
            const d = c.indexOf(u);
            return d !== -1 && c.splice(d, 2),
            this
        }
        ,
        this.getHandler = function(u) {
            for (let d = 0, p = c.length; d < p; d += 2) {
                const m = c[d]
                  , g = c[d + 1];
                if (m.global && (m.lastIndex = 0),
                m.test(u))
                    return g
            }
            return null
        }
    }
}
const mp = new fp;
class Fs {
    constructor(t) {
        this.manager = t !== void 0 ? t : mp,
        this.crossOrigin = "anonymous",
        this.withCredentials = !1,
        this.path = "",
        this.resourcePath = "",
        this.requestHeader = {}
    }
    load() {}
    loadAsync(t, e) {
        const i = this;
        return new Promise(function(r, s) {
            i.load(t, r, e, s)
        }
        )
    }
    parse() {}
    setCrossOrigin(t) {
        return this.crossOrigin = t,
        this
    }
    setWithCredentials(t) {
        return this.withCredentials = t,
        this
    }
    setPath(t) {
        return this.path = t,
        this
    }
    setResourcePath(t) {
        return this.resourcePath = t,
        this
    }
    setRequestHeader(t) {
        return this.requestHeader = t,
        this
    }
}
Fs.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class fu extends Fs {
    constructor(t) {
        super(t)
    }
    load(t, e, i, r) {
        this.path !== void 0 && (t = this.path + t),
        t = this.manager.resolveURL(t);
        const s = this
          , o = Vl.get(t);
        if (o !== void 0)
            return s.manager.itemStart(t),
            setTimeout(function() {
                e && e(o),
                s.manager.itemEnd(t)
            }, 0),
            o;
        const a = Tr("img");
        function l() {
            u(),
            Vl.add(t, this),
            e && e(this),
            s.manager.itemEnd(t)
        }
        function c(d) {
            u(),
            r && r(d),
            s.manager.itemError(t),
            s.manager.itemEnd(t)
        }
        function u() {
            a.removeEventListener("load", l, !1),
            a.removeEventListener("error", c, !1)
        }
        return a.addEventListener("load", l, !1),
        a.addEventListener("error", c, !1),
        t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin),
        s.manager.itemStart(t),
        a.src = t,
        a
    }
}
class _p extends Fs {
    constructor(t) {
        super(t)
    }
    load(t, e, i, r) {
        const s = new Ra;
        s.colorSpace = ze;
        const o = new fu(this.manager);
        o.setCrossOrigin(this.crossOrigin),
        o.setPath(this.path);
        let a = 0;
        function l(c) {
            o.load(t[c], function(u) {
                s.images[c] = u,
                a++,
                a === 6 && (s.needsUpdate = !0,
                e && e(s))
            }, void 0, r)
        }
        for (let c = 0; c < t.length; ++c)
            l(c);
        return s
    }
}
class vp extends Fs {
    constructor(t) {
        super(t)
    }
    load(t, e, i, r) {
        const s = new Pe
          , o = new fu(this.manager);
        return o.setCrossOrigin(this.crossOrigin),
        o.setPath(this.path),
        o.load(t, function(a) {
            s.image = a,
            s.needsUpdate = !0,
            e !== void 0 && e(s)
        }, i, r),
        s
    }
}
class gp extends Fe {
    constructor(t, e=1) {
        super(),
        this.isLight = !0,
        this.type = "Light",
        this.color = new Gt(t),
        this.intensity = e
    }
    dispose() {}
    copy(t, e) {
        return super.copy(t, e),
        this.color.copy(t.color),
        this.intensity = t.intensity,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.color = this.color.getHex(),
        e.object.intensity = this.intensity,
        this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()),
        this.distance !== void 0 && (e.object.distance = this.distance),
        this.angle !== void 0 && (e.object.angle = this.angle),
        this.decay !== void 0 && (e.object.decay = this.decay),
        this.penumbra !== void 0 && (e.object.penumbra = this.penumbra),
        this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()),
        this.target !== void 0 && (e.object.target = this.target.uuid),
        e
    }
}
class xp extends hu {
    constructor(t=-1, e=1, i=1, r=-1, s=.1, o=2e3) {
        super(),
        this.isOrthographicCamera = !0,
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = t,
        this.right = e,
        this.top = i,
        this.bottom = r,
        this.near = s,
        this.far = o,
        this.updateProjectionMatrix()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.left = t.left,
        this.right = t.right,
        this.top = t.top,
        this.bottom = t.bottom,
        this.near = t.near,
        this.far = t.far,
        this.zoom = t.zoom,
        this.view = t.view === null ? null : Object.assign({}, t.view),
        this
    }
    setViewOffset(t, e, i, r, s, o) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = t,
        this.view.fullHeight = e,
        this.view.offsetX = i,
        this.view.offsetY = r,
        this.view.width = s,
        this.view.height = o,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const t = (this.right - this.left) / (2 * this.zoom)
          , e = (this.top - this.bottom) / (2 * this.zoom)
          , i = (this.right + this.left) / 2
          , r = (this.top + this.bottom) / 2;
        let s = i - t
          , o = i + t
          , a = r + e
          , l = r - e;
        if (this.view !== null && this.view.enabled) {
            const c = (this.right - this.left) / this.view.fullWidth / this.zoom
              , u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            s += c * this.view.offsetX,
            o = s + c * this.view.width,
            a -= u * this.view.offsetY,
            l = a - u * this.view.height
        }
        this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.zoom = this.zoom,
        e.object.left = this.left,
        e.object.right = this.right,
        e.object.top = this.top,
        e.object.bottom = this.bottom,
        e.object.near = this.near,
        e.object.far = this.far,
        this.view !== null && (e.object.view = Object.assign({}, this.view)),
        e
    }
}
class bp extends gp {
    constructor(t, e) {
        super(t, e),
        this.isAmbientLight = !0,
        this.type = "AmbientLight"
    }
}
class Ep extends Ke {
    constructor(t=[]) {
        super(),
        this.isArrayCamera = !0,
        this.cameras = t
    }
}
class wp {
    constructor(t=!0) {
        this.autoStart = t,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    start() {
        this.startTime = zl(),
        this.oldTime = this.startTime,
        this.elapsedTime = 0,
        this.running = !0
    }
    stop() {
        this.getElapsedTime(),
        this.running = !1,
        this.autoStart = !1
    }
    getElapsedTime() {
        return this.getDelta(),
        this.elapsedTime
    }
    getDelta() {
        let t = 0;
        if (this.autoStart && !this.running)
            return this.start(),
            0;
        if (this.running) {
            const e = zl();
            t = (e - this.oldTime) / 1e3,
            this.oldTime = e,
            this.elapsedTime += t
        }
        return t
    }
}
function zl() {
    return performance.now()
}
class Hl {
    constructor(t=1, e=0, i=0) {
        return this.radius = t,
        this.phi = e,
        this.theta = i,
        this
    }
    set(t, e, i) {
        return this.radius = t,
        this.phi = e,
        this.theta = i,
        this
    }
    copy(t) {
        return this.radius = t.radius,
        this.phi = t.phi,
        this.theta = t.theta,
        this
    }
    makeSafe() {
        return this.phi = It(this.phi, 1e-6, Math.PI - 1e-6),
        this
    }
    setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z)
    }
    setFromCartesianCoords(t, e, i) {
        return this.radius = Math.sqrt(t * t + e * e + i * i),
        this.radius === 0 ? (this.theta = 0,
        this.phi = 0) : (this.theta = Math.atan2(t, i),
        this.phi = Math.acos(It(e / this.radius, -1, 1))),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class Mp extends gi {
    constructor(t, e=null) {
        super(),
        this.object = t,
        this.domElement = e,
        this.enabled = !0,
        this.state = -1,
        this.keys = {},
        this.mouseButtons = {
            LEFT: null,
            MIDDLE: null,
            RIGHT: null
        },
        this.touches = {
            ONE: null,
            TWO: null
        }
    }
    connect() {}
    disconnect() {}
    dispose() {}
    update() {}
}
function Gl(n, t, e, i) {
    const r = yp(i);
    switch (e) {
    case jc:
        return n * t;
    case Kc:
        return n * t;
    case $c:
        return n * t * 2;
    case Zc:
        return n * t / r.components * r.byteLength;
    case Sa:
        return n * t / r.components * r.byteLength;
    case Jc:
        return n * t * 2 / r.components * r.byteLength;
    case Ta:
        return n * t * 2 / r.components * r.byteLength;
    case Yc:
        return n * t * 3 / r.components * r.byteLength;
    case rn:
        return n * t * 4 / r.components * r.byteLength;
    case Ca:
        return n * t * 4 / r.components * r.byteLength;
    case xs:
    case bs:
        return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Es:
    case ws:
        return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Ho:
    case Wo:
        return Math.max(n, 16) * Math.max(t, 8) / 4;
    case zo:
    case Go:
        return Math.max(n, 8) * Math.max(t, 8) / 2;
    case Xo:
    case qo:
        return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case jo:
        return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Yo:
        return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Ko:
        return Math.floor((n + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case $o:
        return Math.floor((n + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Zo:
        return Math.floor((n + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Jo:
        return Math.floor((n + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Qo:
        return Math.floor((n + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case ta:
        return Math.floor((n + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case ea:
        return Math.floor((n + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case na:
        return Math.floor((n + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case ia:
        return Math.floor((n + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case ra:
        return Math.floor((n + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case sa:
        return Math.floor((n + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case oa:
        return Math.floor((n + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case aa:
        return Math.floor((n + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Ms:
    case la:
    case ca:
        return Math.ceil(n / 4) * Math.ceil(t / 4) * 16;
    case Qc:
    case ua:
        return Math.ceil(n / 4) * Math.ceil(t / 4) * 8;
    case ha:
    case da:
        return Math.ceil(n / 4) * Math.ceil(t / 4) * 16
    }
    throw new Error(`Unable to determine texture byte length for ${e} format.`)
}
function yp(n) {
    switch (n) {
    case An:
    case Wc:
        return {
            byteLength: 1,
            components: 1
        };
    case yr:
    case Xc:
    case Ir:
        return {
            byteLength: 2,
            components: 1
        };
    case Ma:
    case ya:
        return {
            byteLength: 2,
            components: 4
        };
    case di:
    case wa:
    case Mn:
        return {
            byteLength: 4,
            components: 1
        };
    case qc:
        return {
            byteLength: 4,
            components: 3
        }
    }
    throw new Error(`Unknown texture type ${n}.`)
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: Ea
    }
}));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ea);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function mu() {
    let n = null
      , t = !1
      , e = null
      , i = null;
    function r(s, o) {
        e(s, o),
        i = n.requestAnimationFrame(r)
    }
    return {
        start: function() {
            t !== !0 && e !== null && (i = n.requestAnimationFrame(r),
            t = !0)
        },
        stop: function() {
            n.cancelAnimationFrame(i),
            t = !1
        },
        setAnimationLoop: function(s) {
            e = s
        },
        setContext: function(s) {
            n = s
        }
    }
}
function Sp(n) {
    const t = new WeakMap;
    function e(a, l) {
        const c = a.array
          , u = a.usage
          , d = c.byteLength
          , p = n.createBuffer();
        n.bindBuffer(l, p),
        n.bufferData(l, c, u),
        a.onUploadCallback();
        let m;
        if (c instanceof Float32Array)
            m = n.FLOAT;
        else if (c instanceof Uint16Array)
            a.isFloat16BufferAttribute ? m = n.HALF_FLOAT : m = n.UNSIGNED_SHORT;
        else if (c instanceof Int16Array)
            m = n.SHORT;
        else if (c instanceof Uint32Array)
            m = n.UNSIGNED_INT;
        else if (c instanceof Int32Array)
            m = n.INT;
        else if (c instanceof Int8Array)
            m = n.BYTE;
        else if (c instanceof Uint8Array)
            m = n.UNSIGNED_BYTE;
        else if (c instanceof Uint8ClampedArray)
            m = n.UNSIGNED_BYTE;
        else
            throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
        return {
            buffer: p,
            type: m,
            bytesPerElement: c.BYTES_PER_ELEMENT,
            version: a.version,
            size: d
        }
    }
    function i(a, l, c) {
        const u = l.array
          , d = l.updateRanges;
        if (n.bindBuffer(c, a),
        d.length === 0)
            n.bufferSubData(c, 0, u);
        else {
            d.sort( (m, g) => m.start - g.start);
            let p = 0;
            for (let m = 1; m < d.length; m++) {
                const g = d[p]
                  , b = d[m];
                b.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, b.start + b.count - g.start) : (++p,
                d[p] = b)
            }
            d.length = p + 1;
            for (let m = 0, g = d.length; m < g; m++) {
                const b = d[m];
                n.bufferSubData(c, b.start * u.BYTES_PER_ELEMENT, u, b.start, b.count)
            }
            l.clearUpdateRanges()
        }
        l.onUploadCallback()
    }
    function r(a) {
        return a.isInterleavedBufferAttribute && (a = a.data),
        t.get(a)
    }
    function s(a) {
        a.isInterleavedBufferAttribute && (a = a.data);
        const l = t.get(a);
        l && (n.deleteBuffer(l.buffer),
        t.delete(a))
    }
    function o(a, l) {
        if (a.isInterleavedBufferAttribute && (a = a.data),
        a.isGLBufferAttribute) {
            const u = t.get(a);
            (!u || u.version < a.version) && t.set(a, {
                buffer: a.buffer,
                type: a.type,
                bytesPerElement: a.elementSize,
                version: a.version
            });
            return
        }
        const c = t.get(a);
        if (c === void 0)
            t.set(a, e(a, l));
        else if (c.version < a.version) {
            if (c.size !== a.array.byteLength)
                throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
            i(c.buffer, a, l),
            c.version = a.version
        }
    }
    return {
        get: r,
        remove: s,
        update: o
    }
}
var Tp = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`
  , Cp = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`
  , Ap = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`
  , Pp = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , Rp = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`
  , Dp = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
  , Lp = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
  , Up = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
  , Ip = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`
  , Np = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`
  , Fp = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`
  , Op = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
  , Bp = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`
  , kp = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
  , Vp = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
  , zp = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`
  , Hp = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
  , Gp = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
  , Wp = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
  , Xp = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
  , qp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
  , jp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`
  , Yp = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`
  , Kp = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`
  , $p = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
  , Zp = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
  , Jp = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
  , Qp = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`
  , tf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
  , ef = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
  , nf = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
  , rf = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`
  , sf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
  , of = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`
  , af = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
  , lf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
  , cf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
  , uf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
  , hf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
  , df = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
  , pf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
  , ff = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
  , mf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
  , _f = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
  , vf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
  , gf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
  , xf = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`
  , bf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
  , Ef = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
  , wf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
  , Mf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
  , yf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`
  , Sf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
  , Tf = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
  , Cf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
  , Af = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`
  , Pf = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
  , Rf = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , Df = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , Lf = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`
  , Uf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
  , If = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
  , Nf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
  , Ff = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , Of = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`
  , Bf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
  , kf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`
  , Vf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
  , zf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
  , Hf = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`
  , Gf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
  , Wf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`
  , Xf = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
  , qf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , jf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , Yf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
  , Kf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`
  , $f = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`
  , Zf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`
  , Jf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`
  , Qf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
  , tm = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
  , em = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`
  , nm = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
  , im = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
  , rm = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
  , sm = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
  , om = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`
  , am = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
  , lm = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`
  , cm = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
  , um = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
  , hm = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
  , dm = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
  , pm = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , fm = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
  , mm = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
  , _m = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
  , vm = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
  , gm = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
  , xm = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
  , bm = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`
  , Em = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`
  , wm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , Mm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , ym = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`
  , Sm = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Tm = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
  , Cm = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Am = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Pm = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Rm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Dm = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Lm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
  , Um = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`
  , Im = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
  , Nm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`
  , Fm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
  , Om = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Bm = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , km = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , Vm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
  , zm = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Hm = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Gm = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Wm = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`
  , Xm = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , qm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`
  , jm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`
  , Ym = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Km = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , $m = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , Zm = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Jm = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Qm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , t_ = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`
  , e_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , n_ = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , i_ = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , r_ = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , s_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , Dt = {
    alphahash_fragment: Tp,
    alphahash_pars_fragment: Cp,
    alphamap_fragment: Ap,
    alphamap_pars_fragment: Pp,
    alphatest_fragment: Rp,
    alphatest_pars_fragment: Dp,
    aomap_fragment: Lp,
    aomap_pars_fragment: Up,
    batching_pars_vertex: Ip,
    batching_vertex: Np,
    begin_vertex: Fp,
    beginnormal_vertex: Op,
    bsdfs: Bp,
    iridescence_fragment: kp,
    bumpmap_pars_fragment: Vp,
    clipping_planes_fragment: zp,
    clipping_planes_pars_fragment: Hp,
    clipping_planes_pars_vertex: Gp,
    clipping_planes_vertex: Wp,
    color_fragment: Xp,
    color_pars_fragment: qp,
    color_pars_vertex: jp,
    color_vertex: Yp,
    common: Kp,
    cube_uv_reflection_fragment: $p,
    defaultnormal_vertex: Zp,
    displacementmap_pars_vertex: Jp,
    displacementmap_vertex: Qp,
    emissivemap_fragment: tf,
    emissivemap_pars_fragment: ef,
    colorspace_fragment: nf,
    colorspace_pars_fragment: rf,
    envmap_fragment: sf,
    envmap_common_pars_fragment: of,
    envmap_pars_fragment: af,
    envmap_pars_vertex: lf,
    envmap_physical_pars_fragment: xf,
    envmap_vertex: cf,
    fog_vertex: uf,
    fog_pars_vertex: hf,
    fog_fragment: df,
    fog_pars_fragment: pf,
    gradientmap_pars_fragment: ff,
    lightmap_pars_fragment: mf,
    lights_lambert_fragment: _f,
    lights_lambert_pars_fragment: vf,
    lights_pars_begin: gf,
    lights_toon_fragment: bf,
    lights_toon_pars_fragment: Ef,
    lights_phong_fragment: wf,
    lights_phong_pars_fragment: Mf,
    lights_physical_fragment: yf,
    lights_physical_pars_fragment: Sf,
    lights_fragment_begin: Tf,
    lights_fragment_maps: Cf,
    lights_fragment_end: Af,
    logdepthbuf_fragment: Pf,
    logdepthbuf_pars_fragment: Rf,
    logdepthbuf_pars_vertex: Df,
    logdepthbuf_vertex: Lf,
    map_fragment: Uf,
    map_pars_fragment: If,
    map_particle_fragment: Nf,
    map_particle_pars_fragment: Ff,
    metalnessmap_fragment: Of,
    metalnessmap_pars_fragment: Bf,
    morphinstance_vertex: kf,
    morphcolor_vertex: Vf,
    morphnormal_vertex: zf,
    morphtarget_pars_vertex: Hf,
    morphtarget_vertex: Gf,
    normal_fragment_begin: Wf,
    normal_fragment_maps: Xf,
    normal_pars_fragment: qf,
    normal_pars_vertex: jf,
    normal_vertex: Yf,
    normalmap_pars_fragment: Kf,
    clearcoat_normal_fragment_begin: $f,
    clearcoat_normal_fragment_maps: Zf,
    clearcoat_pars_fragment: Jf,
    iridescence_pars_fragment: Qf,
    opaque_fragment: tm,
    packing: em,
    premultiplied_alpha_fragment: nm,
    project_vertex: im,
    dithering_fragment: rm,
    dithering_pars_fragment: sm,
    roughnessmap_fragment: om,
    roughnessmap_pars_fragment: am,
    shadowmap_pars_fragment: lm,
    shadowmap_pars_vertex: cm,
    shadowmap_vertex: um,
    shadowmask_pars_fragment: hm,
    skinbase_vertex: dm,
    skinning_pars_vertex: pm,
    skinning_vertex: fm,
    skinnormal_vertex: mm,
    specularmap_fragment: _m,
    specularmap_pars_fragment: vm,
    tonemapping_fragment: gm,
    tonemapping_pars_fragment: xm,
    transmission_fragment: bm,
    transmission_pars_fragment: Em,
    uv_pars_fragment: wm,
    uv_pars_vertex: Mm,
    uv_vertex: ym,
    worldpos_vertex: Sm,
    background_vert: Tm,
    background_frag: Cm,
    backgroundCube_vert: Am,
    backgroundCube_frag: Pm,
    cube_vert: Rm,
    cube_frag: Dm,
    depth_vert: Lm,
    depth_frag: Um,
    distanceRGBA_vert: Im,
    distanceRGBA_frag: Nm,
    equirect_vert: Fm,
    equirect_frag: Om,
    linedashed_vert: Bm,
    linedashed_frag: km,
    meshbasic_vert: Vm,
    meshbasic_frag: zm,
    meshlambert_vert: Hm,
    meshlambert_frag: Gm,
    meshmatcap_vert: Wm,
    meshmatcap_frag: Xm,
    meshnormal_vert: qm,
    meshnormal_frag: jm,
    meshphong_vert: Ym,
    meshphong_frag: Km,
    meshphysical_vert: $m,
    meshphysical_frag: Zm,
    meshtoon_vert: Jm,
    meshtoon_frag: Qm,
    points_vert: t_,
    points_frag: e_,
    shadow_vert: n_,
    shadow_frag: i_,
    sprite_vert: r_,
    sprite_frag: s_
}
  , et = {
    common: {
        diffuse: {
            value: new Gt(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new Pt
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Pt
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        },
        specularMapTransform: {
            value: new Pt
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        envMapRotation: {
            value: new Pt
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        },
        aoMapTransform: {
            value: new Pt
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        },
        lightMapTransform: {
            value: new Pt
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpMapTransform: {
            value: new Pt
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalMapTransform: {
            value: new Pt
        },
        normalScale: {
            value: new Ut(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementMapTransform: {
            value: new Pt
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        },
        emissiveMapTransform: {
            value: new Pt
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        },
        metalnessMapTransform: {
            value: new Pt
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        },
        roughnessMapTransform: {
            value: new Pt
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new Gt(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotShadowMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new Gt(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Pt
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new Pt
        }
    },
    sprite: {
        diffuse: {
            value: new Gt(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new Ut(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new Pt
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Pt
        },
        alphaTest: {
            value: 0
        }
    }
}
  , an = {
    basic: {
        uniforms: Ae([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.fog]),
        vertexShader: Dt.meshbasic_vert,
        fragmentShader: Dt.meshbasic_frag
    },
    lambert: {
        uniforms: Ae([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.fog, et.lights, {
            emissive: {
                value: new Gt(0)
            }
        }]),
        vertexShader: Dt.meshlambert_vert,
        fragmentShader: Dt.meshlambert_frag
    },
    phong: {
        uniforms: Ae([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.fog, et.lights, {
            emissive: {
                value: new Gt(0)
            },
            specular: {
                value: new Gt(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: Dt.meshphong_vert,
        fragmentShader: Dt.meshphong_frag
    },
    standard: {
        uniforms: Ae([et.common, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.roughnessmap, et.metalnessmap, et.fog, et.lights, {
            emissive: {
                value: new Gt(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: Dt.meshphysical_vert,
        fragmentShader: Dt.meshphysical_frag
    },
    toon: {
        uniforms: Ae([et.common, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.gradientmap, et.fog, et.lights, {
            emissive: {
                value: new Gt(0)
            }
        }]),
        vertexShader: Dt.meshtoon_vert,
        fragmentShader: Dt.meshtoon_frag
    },
    matcap: {
        uniforms: Ae([et.common, et.bumpmap, et.normalmap, et.displacementmap, et.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: Dt.meshmatcap_vert,
        fragmentShader: Dt.meshmatcap_frag
    },
    points: {
        uniforms: Ae([et.points, et.fog]),
        vertexShader: Dt.points_vert,
        fragmentShader: Dt.points_frag
    },
    dashed: {
        uniforms: Ae([et.common, et.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: Dt.linedashed_vert,
        fragmentShader: Dt.linedashed_frag
    },
    depth: {
        uniforms: Ae([et.common, et.displacementmap]),
        vertexShader: Dt.depth_vert,
        fragmentShader: Dt.depth_frag
    },
    normal: {
        uniforms: Ae([et.common, et.bumpmap, et.normalmap, et.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Dt.meshnormal_vert,
        fragmentShader: Dt.meshnormal_frag
    },
    sprite: {
        uniforms: Ae([et.sprite, et.fog]),
        vertexShader: Dt.sprite_vert,
        fragmentShader: Dt.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new Pt
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: Dt.background_vert,
        fragmentShader: Dt.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            },
            backgroundRotation: {
                value: new Pt
            }
        },
        vertexShader: Dt.backgroundCube_vert,
        fragmentShader: Dt.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: Dt.cube_vert,
        fragmentShader: Dt.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: Dt.equirect_vert,
        fragmentShader: Dt.equirect_frag
    },
    distanceRGBA: {
        uniforms: Ae([et.common, et.displacementmap, {
            referencePosition: {
                value: new F
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: Dt.distanceRGBA_vert,
        fragmentShader: Dt.distanceRGBA_frag
    },
    shadow: {
        uniforms: Ae([et.lights, et.fog, {
            color: {
                value: new Gt(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Dt.shadow_vert,
        fragmentShader: Dt.shadow_frag
    }
};
an.physical = {
    uniforms: Ae([an.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatMapTransform: {
            value: new Pt
        },
        clearcoatNormalMap: {
            value: null
        },
        clearcoatNormalMapTransform: {
            value: new Pt
        },
        clearcoatNormalScale: {
            value: new Ut(1,1)
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatRoughnessMapTransform: {
            value: new Pt
        },
        dispersion: {
            value: 0
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceMapTransform: {
            value: new Pt
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        iridescenceThicknessMapTransform: {
            value: new Pt
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new Gt(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenColorMapTransform: {
            value: new Pt
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        sheenRoughnessMapTransform: {
            value: new Pt
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionMapTransform: {
            value: new Pt
        },
        transmissionSamplerSize: {
            value: new Ut
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        thicknessMapTransform: {
            value: new Pt
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new Gt(0)
        },
        specularColor: {
            value: new Gt(1,1,1)
        },
        specularColorMap: {
            value: null
        },
        specularColorMapTransform: {
            value: new Pt
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularIntensityMapTransform: {
            value: new Pt
        },
        anisotropyVector: {
            value: new Ut
        },
        anisotropyMap: {
            value: null
        },
        anisotropyMapTransform: {
            value: new Pt
        }
    }]),
    vertexShader: Dt.meshphysical_vert,
    fragmentShader: Dt.meshphysical_frag
};
const fs = {
    r: 0,
    b: 0,
    g: 0
}
  , ni = new Pn
  , o_ = new me;
function a_(n, t, e, i, r, s, o) {
    const a = new Gt(0);
    let l = s === !0 ? 0 : 1, c, u, d = null, p = 0, m = null;
    function g(y) {
        let M = y.isScene === !0 ? y.background : null;
        return M && M.isTexture && (M = (y.backgroundBlurriness > 0 ? e : t).get(M)),
        M
    }
    function b(y) {
        let M = !1;
        const U = g(y);
        U === null ? h(a, l) : U && U.isColor && (h(U, 1),
        M = !0);
        const D = n.xr.getEnvironmentBlendMode();
        D === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, o) : D === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o),
        (n.autoClear || M) && (i.buffers.depth.setTest(!0),
        i.buffers.depth.setMask(!0),
        i.buffers.color.setMask(!0),
        n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil))
    }
    function f(y, M) {
        const U = g(M);
        U && (U.isCubeTexture || U.mapping === Is) ? (u === void 0 && (u = new sn(new Fr(1,1,1),new dn({
            name: "BackgroundCubeMaterial",
            uniforms: nr(an.backgroundCube.uniforms),
            vertexShader: an.backgroundCube.vertexShader,
            fragmentShader: an.backgroundCube.fragmentShader,
            side: Ne,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })),
        u.geometry.deleteAttribute("normal"),
        u.geometry.deleteAttribute("uv"),
        u.onBeforeRender = function(D, C, I) {
            this.matrixWorld.copyPosition(I.matrixWorld)
        }
        ,
        Object.defineProperty(u.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }),
        r.update(u)),
        ni.copy(M.backgroundRotation),
        ni.x *= -1,
        ni.y *= -1,
        ni.z *= -1,
        U.isCubeTexture && U.isRenderTargetTexture === !1 && (ni.y *= -1,
        ni.z *= -1),
        u.material.uniforms.envMap.value = U,
        u.material.uniforms.flipEnvMap.value = U.isCubeTexture && U.isRenderTargetTexture === !1 ? -1 : 1,
        u.material.uniforms.backgroundBlurriness.value = M.backgroundBlurriness,
        u.material.uniforms.backgroundIntensity.value = M.backgroundIntensity,
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(o_.makeRotationFromEuler(ni)),
        u.material.toneMapped = qt.getTransfer(U.colorSpace) !== Jt,
        (d !== U || p !== U.version || m !== n.toneMapping) && (u.material.needsUpdate = !0,
        d = U,
        p = U.version,
        m = n.toneMapping),
        u.layers.enableAll(),
        y.unshift(u, u.geometry, u.material, 0, 0, null)) : U && U.isTexture && (c === void 0 && (c = new sn(new bi(2,2),new dn({
            name: "BackgroundMaterial",
            uniforms: nr(an.background.uniforms),
            vertexShader: an.background.vertexShader,
            fragmentShader: an.background.fragmentShader,
            side: Yn,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })),
        c.geometry.deleteAttribute("normal"),
        Object.defineProperty(c.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }),
        r.update(c)),
        c.material.uniforms.t2D.value = U,
        c.material.uniforms.backgroundIntensity.value = M.backgroundIntensity,
        c.material.toneMapped = qt.getTransfer(U.colorSpace) !== Jt,
        U.matrixAutoUpdate === !0 && U.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(U.matrix),
        (d !== U || p !== U.version || m !== n.toneMapping) && (c.material.needsUpdate = !0,
        d = U,
        p = U.version,
        m = n.toneMapping),
        c.layers.enableAll(),
        y.unshift(c, c.geometry, c.material, 0, 0, null))
    }
    function h(y, M) {
        y.getRGB(fs, uu(n)),
        i.buffers.color.setClear(fs.r, fs.g, fs.b, M, o)
    }
    function T() {
        u !== void 0 && (u.geometry.dispose(),
        u.material.dispose()),
        c !== void 0 && (c.geometry.dispose(),
        c.material.dispose())
    }
    return {
        getClearColor: function() {
            return a
        },
        setClearColor: function(y, M=1) {
            a.set(y),
            l = M,
            h(a, l)
        },
        getClearAlpha: function() {
            return l
        },
        setClearAlpha: function(y) {
            l = y,
            h(a, l)
        },
        render: b,
        addToRenderList: f,
        dispose: T
    }
}
function l_(n, t) {
    const e = n.getParameter(n.MAX_VERTEX_ATTRIBS)
      , i = {}
      , r = p(null);
    let s = r
      , o = !1;
    function a(x, A, G, k, Y) {
        let K = !1;
        const X = d(k, G, A);
        s !== X && (s = X,
        c(s.object)),
        K = m(x, k, G, Y),
        K && g(x, k, G, Y),
        Y !== null && t.update(Y, n.ELEMENT_ARRAY_BUFFER),
        (K || o) && (o = !1,
        M(x, A, G, k),
        Y !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer))
    }
    function l() {
        return n.createVertexArray()
    }
    function c(x) {
        return n.bindVertexArray(x)
    }
    function u(x) {
        return n.deleteVertexArray(x)
    }
    function d(x, A, G) {
        const k = G.wireframe === !0;
        let Y = i[x.id];
        Y === void 0 && (Y = {},
        i[x.id] = Y);
        let K = Y[A.id];
        K === void 0 && (K = {},
        Y[A.id] = K);
        let X = K[k];
        return X === void 0 && (X = p(l()),
        K[k] = X),
        X
    }
    function p(x) {
        const A = []
          , G = []
          , k = [];
        for (let Y = 0; Y < e; Y++)
            A[Y] = 0,
            G[Y] = 0,
            k[Y] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: A,
            enabledAttributes: G,
            attributeDivisors: k,
            object: x,
            attributes: {},
            index: null
        }
    }
    function m(x, A, G, k) {
        const Y = s.attributes
          , K = A.attributes;
        let X = 0;
        const Z = G.getAttributes();
        for (const z in Z)
            if (Z[z].location >= 0) {
                const ut = Y[z];
                let gt = K[z];
                if (gt === void 0 && (z === "instanceMatrix" && x.instanceMatrix && (gt = x.instanceMatrix),
                z === "instanceColor" && x.instanceColor && (gt = x.instanceColor)),
                ut === void 0 || ut.attribute !== gt || gt && ut.data !== gt.data)
                    return !0;
                X++
            }
        return s.attributesNum !== X || s.index !== k
    }
    function g(x, A, G, k) {
        const Y = {}
          , K = A.attributes;
        let X = 0;
        const Z = G.getAttributes();
        for (const z in Z)
            if (Z[z].location >= 0) {
                let ut = K[z];
                ut === void 0 && (z === "instanceMatrix" && x.instanceMatrix && (ut = x.instanceMatrix),
                z === "instanceColor" && x.instanceColor && (ut = x.instanceColor));
                const gt = {};
                gt.attribute = ut,
                ut && ut.data && (gt.data = ut.data),
                Y[z] = gt,
                X++
            }
        s.attributes = Y,
        s.attributesNum = X,
        s.index = k
    }
    function b() {
        const x = s.newAttributes;
        for (let A = 0, G = x.length; A < G; A++)
            x[A] = 0
    }
    function f(x) {
        h(x, 0)
    }
    function h(x, A) {
        const G = s.newAttributes
          , k = s.enabledAttributes
          , Y = s.attributeDivisors;
        G[x] = 1,
        k[x] === 0 && (n.enableVertexAttribArray(x),
        k[x] = 1),
        Y[x] !== A && (n.vertexAttribDivisor(x, A),
        Y[x] = A)
    }
    function T() {
        const x = s.newAttributes
          , A = s.enabledAttributes;
        for (let G = 0, k = A.length; G < k; G++)
            A[G] !== x[G] && (n.disableVertexAttribArray(G),
            A[G] = 0)
    }
    function y(x, A, G, k, Y, K, X) {
        X === !0 ? n.vertexAttribIPointer(x, A, G, Y, K) : n.vertexAttribPointer(x, A, G, k, Y, K)
    }
    function M(x, A, G, k) {
        b();
        const Y = k.attributes
          , K = G.getAttributes()
          , X = A.defaultAttributeValues;
        for (const Z in K) {
            const z = K[Z];
            if (z.location >= 0) {
                let rt = Y[Z];
                if (rt === void 0 && (Z === "instanceMatrix" && x.instanceMatrix && (rt = x.instanceMatrix),
                Z === "instanceColor" && x.instanceColor && (rt = x.instanceColor)),
                rt !== void 0) {
                    const ut = rt.normalized
                      , gt = rt.itemSize
                      , Nt = t.get(rt);
                    if (Nt === void 0)
                        continue;
                    const te = Nt.buffer
                      , W = Nt.type
                      , tt = Nt.bytesPerElement
                      , mt = W === n.INT || W === n.UNSIGNED_INT || rt.gpuType === wa;
                    if (rt.isInterleavedBufferAttribute) {
                        const st = rt.data
                          , Mt = st.stride
                          , Tt = rt.offset;
                        if (st.isInstancedInterleavedBuffer) {
                            for (let Ft = 0; Ft < z.locationSize; Ft++)
                                h(z.location + Ft, st.meshPerAttribute);
                            x.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = st.meshPerAttribute * st.count)
                        } else
                            for (let Ft = 0; Ft < z.locationSize; Ft++)
                                f(z.location + Ft);
                        n.bindBuffer(n.ARRAY_BUFFER, te);
                        for (let Ft = 0; Ft < z.locationSize; Ft++)
                            y(z.location + Ft, gt / z.locationSize, W, ut, Mt * tt, (Tt + gt / z.locationSize * Ft) * tt, mt)
                    } else {
                        if (rt.isInstancedBufferAttribute) {
                            for (let st = 0; st < z.locationSize; st++)
                                h(z.location + st, rt.meshPerAttribute);
                            x.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = rt.meshPerAttribute * rt.count)
                        } else
                            for (let st = 0; st < z.locationSize; st++)
                                f(z.location + st);
                        n.bindBuffer(n.ARRAY_BUFFER, te);
                        for (let st = 0; st < z.locationSize; st++)
                            y(z.location + st, gt / z.locationSize, W, ut, gt * tt, gt / z.locationSize * st * tt, mt)
                    }
                } else if (X !== void 0) {
                    const ut = X[Z];
                    if (ut !== void 0)
                        switch (ut.length) {
                        case 2:
                            n.vertexAttrib2fv(z.location, ut);
                            break;
                        case 3:
                            n.vertexAttrib3fv(z.location, ut);
                            break;
                        case 4:
                            n.vertexAttrib4fv(z.location, ut);
                            break;
                        default:
                            n.vertexAttrib1fv(z.location, ut)
                        }
                }
            }
        }
        T()
    }
    function U() {
        I();
        for (const x in i) {
            const A = i[x];
            for (const G in A) {
                const k = A[G];
                for (const Y in k)
                    u(k[Y].object),
                    delete k[Y];
                delete A[G]
            }
            delete i[x]
        }
    }
    function D(x) {
        if (i[x.id] === void 0)
            return;
        const A = i[x.id];
        for (const G in A) {
            const k = A[G];
            for (const Y in k)
                u(k[Y].object),
                delete k[Y];
            delete A[G]
        }
        delete i[x.id]
    }
    function C(x) {
        for (const A in i) {
            const G = i[A];
            if (G[x.id] === void 0)
                continue;
            const k = G[x.id];
            for (const Y in k)
                u(k[Y].object),
                delete k[Y];
            delete G[x.id]
        }
    }
    function I() {
        E(),
        o = !0,
        s !== r && (s = r,
        c(s.object))
    }
    function E() {
        r.geometry = null,
        r.program = null,
        r.wireframe = !1
    }
    return {
        setup: a,
        reset: I,
        resetDefaultState: E,
        dispose: U,
        releaseStatesOfGeometry: D,
        releaseStatesOfProgram: C,
        initAttributes: b,
        enableAttribute: f,
        disableUnusedAttributes: T
    }
}
function c_(n, t, e) {
    let i;
    function r(c) {
        i = c
    }
    function s(c, u) {
        n.drawArrays(i, c, u),
        e.update(u, i, 1)
    }
    function o(c, u, d) {
        d !== 0 && (n.drawArraysInstanced(i, c, u, d),
        e.update(u, i, d))
    }
    function a(c, u, d) {
        if (d === 0)
            return;
        t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, u, 0, d);
        let m = 0;
        for (let g = 0; g < d; g++)
            m += u[g];
        e.update(m, i, 1)
    }
    function l(c, u, d, p) {
        if (d === 0)
            return;
        const m = t.get("WEBGL_multi_draw");
        if (m === null)
            for (let g = 0; g < c.length; g++)
                o(c[g], u[g], p[g]);
        else {
            m.multiDrawArraysInstancedWEBGL(i, c, 0, u, 0, p, 0, d);
            let g = 0;
            for (let b = 0; b < d; b++)
                g += u[b] * p[b];
            e.update(g, i, 1)
        }
    }
    this.setMode = r,
    this.render = s,
    this.renderInstances = o,
    this.renderMultiDraw = a,
    this.renderMultiDrawInstances = l
}
function u_(n, t, e, i) {
    let r;
    function s() {
        if (r !== void 0)
            return r;
        if (t.has("EXT_texture_filter_anisotropic") === !0) {
            const C = t.get("EXT_texture_filter_anisotropic");
            r = n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else
            r = 0;
        return r
    }
    function o(C) {
        return !(C !== rn && i.convert(C) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))
    }
    function a(C) {
        const I = C === Ir && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
        return !(C !== An && i.convert(C) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) && C !== Mn && !I)
    }
    function l(C) {
        if (C === "highp") {
            if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0)
                return "highp";
            C = "mediump"
        }
        return C === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }
    let c = e.precision !== void 0 ? e.precision : "highp";
    const u = l(c);
    u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."),
    c = u);
    const d = e.logarithmicDepthBuffer === !0
      , p = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control")
      , m = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)
      , g = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
      , b = n.getParameter(n.MAX_TEXTURE_SIZE)
      , f = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE)
      , h = n.getParameter(n.MAX_VERTEX_ATTRIBS)
      , T = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS)
      , y = n.getParameter(n.MAX_VARYING_VECTORS)
      , M = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS)
      , U = g > 0
      , D = n.getParameter(n.MAX_SAMPLES);
    return {
        isWebGL2: !0,
        getMaxAnisotropy: s,
        getMaxPrecision: l,
        textureFormatReadable: o,
        textureTypeReadable: a,
        precision: c,
        logarithmicDepthBuffer: d,
        reverseDepthBuffer: p,
        maxTextures: m,
        maxVertexTextures: g,
        maxTextureSize: b,
        maxCubemapSize: f,
        maxAttributes: h,
        maxVertexUniforms: T,
        maxVaryings: y,
        maxFragmentUniforms: M,
        vertexTextures: U,
        maxSamples: D
    }
}
function h_(n) {
    const t = this;
    let e = null
      , i = 0
      , r = !1
      , s = !1;
    const o = new Hn
      , a = new Pt
      , l = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = l,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(d, p) {
        const m = d.length !== 0 || p || i !== 0 || r;
        return r = p,
        i = d.length,
        m
    }
    ,
    this.beginShadows = function() {
        s = !0,
        u(null)
    }
    ,
    this.endShadows = function() {
        s = !1
    }
    ,
    this.setGlobalState = function(d, p) {
        e = u(d, p, 0)
    }
    ,
    this.setState = function(d, p, m) {
        const g = d.clippingPlanes
          , b = d.clipIntersection
          , f = d.clipShadows
          , h = n.get(d);
        if (!r || g === null || g.length === 0 || s && !f)
            s ? u(null) : c();
        else {
            const T = s ? 0 : i
              , y = T * 4;
            let M = h.clippingState || null;
            l.value = M,
            M = u(g, p, y, m);
            for (let U = 0; U !== y; ++U)
                M[U] = e[U];
            h.clippingState = M,
            this.numIntersection = b ? this.numPlanes : 0,
            this.numPlanes += T
        }
    }
    ;
    function c() {
        l.value !== e && (l.value = e,
        l.needsUpdate = i > 0),
        t.numPlanes = i,
        t.numIntersection = 0
    }
    function u(d, p, m, g) {
        const b = d !== null ? d.length : 0;
        let f = null;
        if (b !== 0) {
            if (f = l.value,
            g !== !0 || f === null) {
                const h = m + b * 4
                  , T = p.matrixWorldInverse;
                a.getNormalMatrix(T),
                (f === null || f.length < h) && (f = new Float32Array(h));
                for (let y = 0, M = m; y !== b; ++y,
                M += 4)
                    o.copy(d[y]).applyMatrix4(T, a),
                    o.normal.toArray(f, M),
                    f[M + 3] = o.constant
            }
            l.value = f,
            l.needsUpdate = !0
        }
        return t.numPlanes = b,
        t.numIntersection = 0,
        f
    }
}
function d_(n) {
    let t = new WeakMap;
    function e(o, a) {
        return a === Oo ? o.mapping = Zi : a === Bo && (o.mapping = Ji),
        o
    }
    function i(o) {
        if (o && o.isTexture) {
            const a = o.mapping;
            if (a === Oo || a === Bo)
                if (t.has(o)) {
                    const l = t.get(o).texture;
                    return e(l, o.mapping)
                } else {
                    const l = o.image;
                    if (l && l.height > 0) {
                        const c = new lp(l.height);
                        return c.fromEquirectangularTexture(n, o),
                        t.set(o, c),
                        o.addEventListener("dispose", r),
                        e(c.texture, o.mapping)
                    } else
                        return null
                }
        }
        return o
    }
    function r(o) {
        const a = o.target;
        a.removeEventListener("dispose", r);
        const l = t.get(a);
        l !== void 0 && (t.delete(a),
        l.dispose())
    }
    function s() {
        t = new WeakMap
    }
    return {
        get: i,
        dispose: s
    }
}
const Gi = 4
  , Wl = [.125, .215, .35, .446, .526, .582]
  , ai = 20
  , ho = new xp
  , Xl = new Gt;
let po = null
  , fo = 0
  , mo = 0
  , _o = !1;
const si = (1 + Math.sqrt(5)) / 2
  , Oi = 1 / si
  , ql = [new F(-si,Oi,0), new F(si,Oi,0), new F(-Oi,0,si), new F(Oi,0,si), new F(0,si,-Oi), new F(0,si,Oi), new F(-1,1,-1), new F(1,1,-1), new F(-1,1,1), new F(1,1,1)];
class jl {
    constructor(t) {
        this._renderer = t,
        this._pingPongRenderTarget = null,
        this._lodMax = 0,
        this._cubeSize = 0,
        this._lodPlanes = [],
        this._sizeLods = [],
        this._sigmas = [],
        this._blurMaterial = null,
        this._cubemapMaterial = null,
        this._equirectMaterial = null,
        this._compileMaterial(this._blurMaterial)
    }
    fromScene(t, e=0, i=.1, r=100) {
        po = this._renderer.getRenderTarget(),
        fo = this._renderer.getActiveCubeFace(),
        mo = this._renderer.getActiveMipmapLevel(),
        _o = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1,
        this._setSize(256);
        const s = this._allocateTargets();
        return s.depthBuffer = !0,
        this._sceneToCubeUV(t, i, r, s),
        e > 0 && this._blur(s, 0, 0, e),
        this._applyPMREM(s),
        this._cleanup(s),
        s
    }
    fromEquirectangular(t, e=null) {
        return this._fromTexture(t, e)
    }
    fromCubemap(t, e=null) {
        return this._fromTexture(t, e)
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = $l(),
        this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = Kl(),
        this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose()
    }
    _setSize(t) {
        this._lodMax = Math.floor(Math.log2(t)),
        this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let t = 0; t < this._lodPlanes.length; t++)
            this._lodPlanes[t].dispose()
    }
    _cleanup(t) {
        this._renderer.setRenderTarget(po, fo, mo),
        this._renderer.xr.enabled = _o,
        t.scissorTest = !1,
        ms(t, 0, 0, t.width, t.height)
    }
    _fromTexture(t, e) {
        t.mapping === Zi || t.mapping === Ji ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4),
        po = this._renderer.getRenderTarget(),
        fo = this._renderer.getActiveCubeFace(),
        mo = this._renderer.getActiveMipmapLevel(),
        _o = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1;
        const i = e || this._allocateTargets();
        return this._textureToCubeUV(t, i),
        this._applyPMREM(i),
        this._cleanup(i),
        i
    }
    _allocateTargets() {
        const t = 3 * Math.max(this._cubeSize, 112)
          , e = 4 * this._cubeSize
          , i = {
            magFilter: cn,
            minFilter: cn,
            generateMipmaps: !1,
            type: Ir,
            format: rn,
            colorSpace: er,
            depthBuffer: !1
        }
          , r = Yl(t, e, i);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
            this._pingPongRenderTarget !== null && this._dispose(),
            this._pingPongRenderTarget = Yl(t, e, i);
            const {_lodMax: s} = this;
            ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = p_(s)),
            this._blurMaterial = f_(s, t, e)
        }
        return r
    }
    _compileMaterial(t) {
        const e = new sn(this._lodPlanes[0],t);
        this._renderer.compile(e, ho)
    }
    _sceneToCubeUV(t, e, i, r) {
        const a = new Ke(90,1,e,i)
          , l = [1, -1, 1, 1, 1, 1]
          , c = [1, 1, 1, -1, -1, -1]
          , u = this._renderer
          , d = u.autoClear
          , p = u.toneMapping;
        u.getClearColor(Xl),
        u.toneMapping = qn,
        u.autoClear = !1;
        const m = new au({
            name: "PMREM.Background",
            side: Ne,
            depthWrite: !1,
            depthTest: !1
        })
          , g = new sn(new Fr,m);
        let b = !1;
        const f = t.background;
        f ? f.isColor && (m.color.copy(f),
        t.background = null,
        b = !0) : (m.color.copy(Xl),
        b = !0);
        for (let h = 0; h < 6; h++) {
            const T = h % 3;
            T === 0 ? (a.up.set(0, l[h], 0),
            a.lookAt(c[h], 0, 0)) : T === 1 ? (a.up.set(0, 0, l[h]),
            a.lookAt(0, c[h], 0)) : (a.up.set(0, l[h], 0),
            a.lookAt(0, 0, c[h]));
            const y = this._cubeSize;
            ms(r, T * y, h > 2 ? y : 0, y, y),
            u.setRenderTarget(r),
            b && u.render(g, a),
            u.render(t, a)
        }
        g.geometry.dispose(),
        g.material.dispose(),
        u.toneMapping = p,
        u.autoClear = d,
        t.background = f
    }
    _textureToCubeUV(t, e) {
        const i = this._renderer
          , r = t.mapping === Zi || t.mapping === Ji;
        r ? (this._cubemapMaterial === null && (this._cubemapMaterial = $l()),
        this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Kl());
        const s = r ? this._cubemapMaterial : this._equirectMaterial
          , o = new sn(this._lodPlanes[0],s)
          , a = s.uniforms;
        a.envMap.value = t;
        const l = this._cubeSize;
        ms(e, 0, 0, 3 * l, 2 * l),
        i.setRenderTarget(e),
        i.render(o, ho)
    }
    _applyPMREM(t) {
        const e = this._renderer
          , i = e.autoClear;
        e.autoClear = !1;
        const r = this._lodPlanes.length;
        for (let s = 1; s < r; s++) {
            const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1])
              , a = ql[(r - s - 1) % ql.length];
            this._blur(t, s - 1, s, o, a)
        }
        e.autoClear = i
    }
    _blur(t, e, i, r, s) {
        const o = this._pingPongRenderTarget;
        this._halfBlur(t, o, e, i, r, "latitudinal", s),
        this._halfBlur(o, t, i, i, r, "longitudinal", s)
    }
    _halfBlur(t, e, i, r, s, o, a) {
        const l = this._renderer
          , c = this._blurMaterial;
        o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        const u = 3
          , d = new sn(this._lodPlanes[r],c)
          , p = c.uniforms
          , m = this._sizeLods[i] - 1
          , g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * ai - 1)
          , b = s / g
          , f = isFinite(s) ? 1 + Math.floor(u * b) : ai;
        f > ai && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ai}`);
        const h = [];
        let T = 0;
        for (let C = 0; C < ai; ++C) {
            const I = C / b
              , E = Math.exp(-I * I / 2);
            h.push(E),
            C === 0 ? T += E : C < f && (T += 2 * E)
        }
        for (let C = 0; C < h.length; C++)
            h[C] = h[C] / T;
        p.envMap.value = t.texture,
        p.samples.value = f,
        p.weights.value = h,
        p.latitudinal.value = o === "latitudinal",
        a && (p.poleAxis.value = a);
        const {_lodMax: y} = this;
        p.dTheta.value = g,
        p.mipInt.value = y - i;
        const M = this._sizeLods[r]
          , U = 3 * M * (r > y - Gi ? r - y + Gi : 0)
          , D = 4 * (this._cubeSize - M);
        ms(e, U, D, 3 * M, 2 * M),
        l.setRenderTarget(e),
        l.render(d, ho)
    }
}
function p_(n) {
    const t = []
      , e = []
      , i = [];
    let r = n;
    const s = n - Gi + 1 + Wl.length;
    for (let o = 0; o < s; o++) {
        const a = Math.pow(2, r);
        e.push(a);
        let l = 1 / a;
        o > n - Gi ? l = Wl[o - n + Gi - 1] : o === 0 && (l = 0),
        i.push(l);
        const c = 1 / (a - 2)
          , u = -c
          , d = 1 + c
          , p = [u, u, d, u, d, d, u, u, d, d, u, d]
          , m = 6
          , g = 6
          , b = 3
          , f = 2
          , h = 1
          , T = new Float32Array(b * g * m)
          , y = new Float32Array(f * g * m)
          , M = new Float32Array(h * g * m);
        for (let D = 0; D < m; D++) {
            const C = D % 3 * 2 / 3 - 1
              , I = D > 2 ? 0 : -1
              , E = [C, I, 0, C + 2 / 3, I, 0, C + 2 / 3, I + 1, 0, C, I, 0, C + 2 / 3, I + 1, 0, C, I + 1, 0];
            T.set(E, b * g * D),
            y.set(p, f * g * D);
            const x = [D, D, D, D, D, D];
            M.set(x, h * g * D)
        }
        const U = new xi;
        U.setAttribute("position", new hn(T,b)),
        U.setAttribute("uv", new hn(y,f)),
        U.setAttribute("faceIndex", new hn(M,h)),
        t.push(U),
        r > Gi && r--
    }
    return {
        lodPlanes: t,
        sizeLods: e,
        sigmas: i
    }
}
function Yl(n, t, e) {
    const i = new pi(n,t,e);
    return i.texture.mapping = Is,
    i.texture.name = "PMREM.cubeUv",
    i.scissorTest = !0,
    i
}
function ms(n, t, e, i, r) {
    n.viewport.set(t, e, i, r),
    n.scissor.set(t, e, i, r)
}
function f_(n, t, e) {
    const i = new Float32Array(ai)
      , r = new F(0,1,0);
    return new dn({
        name: "SphericalGaussianBlur",
        defines: {
            n: ai,
            CUBEUV_TEXEL_WIDTH: 1 / t,
            CUBEUV_TEXEL_HEIGHT: 1 / e,
            CUBEUV_MAX_MIP: `${n}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: i
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: r
            }
        },
        vertexShader: Da(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: Xn,
        depthTest: !1,
        depthWrite: !1
    })
}
function Kl() {
    return new dn({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: Da(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: Xn,
        depthTest: !1,
        depthWrite: !1
    })
}
function $l() {
    return new dn({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: Da(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: Xn,
        depthTest: !1,
        depthWrite: !1
    })
}
function Da() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
function m_(n) {
    let t = new WeakMap
      , e = null;
    function i(a) {
        if (a && a.isTexture) {
            const l = a.mapping
              , c = l === Oo || l === Bo
              , u = l === Zi || l === Ji;
            if (c || u) {
                let d = t.get(a);
                const p = d !== void 0 ? d.texture.pmremVersion : 0;
                if (a.isRenderTargetTexture && a.pmremVersion !== p)
                    return e === null && (e = new jl(n)),
                    d = c ? e.fromEquirectangular(a, d) : e.fromCubemap(a, d),
                    d.texture.pmremVersion = a.pmremVersion,
                    t.set(a, d),
                    d.texture;
                if (d !== void 0)
                    return d.texture;
                {
                    const m = a.image;
                    return c && m && m.height > 0 || u && m && r(m) ? (e === null && (e = new jl(n)),
                    d = c ? e.fromEquirectangular(a) : e.fromCubemap(a),
                    d.texture.pmremVersion = a.pmremVersion,
                    t.set(a, d),
                    a.addEventListener("dispose", s),
                    d.texture) : null
                }
            }
        }
        return a
    }
    function r(a) {
        let l = 0;
        const c = 6;
        for (let u = 0; u < c; u++)
            a[u] !== void 0 && l++;
        return l === c
    }
    function s(a) {
        const l = a.target;
        l.removeEventListener("dispose", s);
        const c = t.get(l);
        c !== void 0 && (t.delete(l),
        c.dispose())
    }
    function o() {
        t = new WeakMap,
        e !== null && (e.dispose(),
        e = null)
    }
    return {
        get: i,
        dispose: o
    }
}
function __(n) {
    const t = {};
    function e(i) {
        if (t[i] !== void 0)
            return t[i];
        let r;
        switch (i) {
        case "WEBGL_depth_texture":
            r = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            r = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            r = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            r = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default:
            r = n.getExtension(i)
        }
        return t[i] = r,
        r
    }
    return {
        has: function(i) {
            return e(i) !== null
        },
        init: function() {
            e("EXT_color_buffer_float"),
            e("WEBGL_clip_cull_distance"),
            e("OES_texture_float_linear"),
            e("EXT_color_buffer_half_float"),
            e("WEBGL_multisampled_render_to_texture"),
            e("WEBGL_render_shared_exponent")
        },
        get: function(i) {
            const r = e(i);
            return r === null && zi("THREE.WebGLRenderer: " + i + " extension not supported."),
            r
        }
    }
}
function v_(n, t, e, i) {
    const r = {}
      , s = new WeakMap;
    function o(d) {
        const p = d.target;
        p.index !== null && t.remove(p.index);
        for (const g in p.attributes)
            t.remove(p.attributes[g]);
        p.removeEventListener("dispose", o),
        delete r[p.id];
        const m = s.get(p);
        m && (t.remove(m),
        s.delete(p)),
        i.releaseStatesOfGeometry(p),
        p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount,
        e.memory.geometries--
    }
    function a(d, p) {
        return r[p.id] === !0 || (p.addEventListener("dispose", o),
        r[p.id] = !0,
        e.memory.geometries++),
        p
    }
    function l(d) {
        const p = d.attributes;
        for (const m in p)
            t.update(p[m], n.ARRAY_BUFFER)
    }
    function c(d) {
        const p = []
          , m = d.index
          , g = d.attributes.position;
        let b = 0;
        if (m !== null) {
            const T = m.array;
            b = m.version;
            for (let y = 0, M = T.length; y < M; y += 3) {
                const U = T[y + 0]
                  , D = T[y + 1]
                  , C = T[y + 2];
                p.push(U, D, D, C, C, U)
            }
        } else if (g !== void 0) {
            const T = g.array;
            b = g.version;
            for (let y = 0, M = T.length / 3 - 1; y < M; y += 3) {
                const U = y + 0
                  , D = y + 1
                  , C = y + 2;
                p.push(U, D, D, C, C, U)
            }
        } else
            return;
        const f = new (eu(p) ? cu : lu)(p,1);
        f.version = b;
        const h = s.get(d);
        h && t.remove(h),
        s.set(d, f)
    }
    function u(d) {
        const p = s.get(d);
        if (p) {
            const m = d.index;
            m !== null && p.version < m.version && c(d)
        } else
            c(d);
        return s.get(d)
    }
    return {
        get: a,
        update: l,
        getWireframeAttribute: u
    }
}
function g_(n, t, e) {
    let i;
    function r(p) {
        i = p
    }
    let s, o;
    function a(p) {
        s = p.type,
        o = p.bytesPerElement
    }
    function l(p, m) {
        n.drawElements(i, m, s, p * o),
        e.update(m, i, 1)
    }
    function c(p, m, g) {
        g !== 0 && (n.drawElementsInstanced(i, m, s, p * o, g),
        e.update(m, i, g))
    }
    function u(p, m, g) {
        if (g === 0)
            return;
        t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, m, 0, s, p, 0, g);
        let f = 0;
        for (let h = 0; h < g; h++)
            f += m[h];
        e.update(f, i, 1)
    }
    function d(p, m, g, b) {
        if (g === 0)
            return;
        const f = t.get("WEBGL_multi_draw");
        if (f === null)
            for (let h = 0; h < p.length; h++)
                c(p[h] / o, m[h], b[h]);
        else {
            f.multiDrawElementsInstancedWEBGL(i, m, 0, s, p, 0, b, 0, g);
            let h = 0;
            for (let T = 0; T < g; T++)
                h += m[T] * b[T];
            e.update(h, i, 1)
        }
    }
    this.setMode = r,
    this.setIndex = a,
    this.render = l,
    this.renderInstances = c,
    this.renderMultiDraw = u,
    this.renderMultiDrawInstances = d
}
function x_(n) {
    const t = {
        geometries: 0,
        textures: 0
    }
      , e = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function i(s, o, a) {
        switch (e.calls++,
        o) {
        case n.TRIANGLES:
            e.triangles += a * (s / 3);
            break;
        case n.LINES:
            e.lines += a * (s / 2);
            break;
        case n.LINE_STRIP:
            e.lines += a * (s - 1);
            break;
        case n.LINE_LOOP:
            e.lines += a * s;
            break;
        case n.POINTS:
            e.points += a * s;
            break;
        default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", o);
            break
        }
    }
    function r() {
        e.calls = 0,
        e.triangles = 0,
        e.points = 0,
        e.lines = 0
    }
    return {
        memory: t,
        render: e,
        programs: null,
        autoReset: !0,
        reset: r,
        update: i
    }
}
function b_(n, t, e) {
    const i = new WeakMap
      , r = new de;
    function s(o, a, l) {
        const c = o.morphTargetInfluences
          , u = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color
          , d = u !== void 0 ? u.length : 0;
        let p = i.get(a);
        if (p === void 0 || p.count !== d) {
            let x = function() {
                I.dispose(),
                i.delete(a),
                a.removeEventListener("dispose", x)
            };
            var m = x;
            p !== void 0 && p.texture.dispose();
            const g = a.morphAttributes.position !== void 0
              , b = a.morphAttributes.normal !== void 0
              , f = a.morphAttributes.color !== void 0
              , h = a.morphAttributes.position || []
              , T = a.morphAttributes.normal || []
              , y = a.morphAttributes.color || [];
            let M = 0;
            g === !0 && (M = 1),
            b === !0 && (M = 2),
            f === !0 && (M = 3);
            let U = a.attributes.position.count * M
              , D = 1;
            U > t.maxTextureSize && (D = Math.ceil(U / t.maxTextureSize),
            U = t.maxTextureSize);
            const C = new Float32Array(U * D * 4 * d)
              , I = new iu(C,U,D,d);
            I.type = Mn,
            I.needsUpdate = !0;
            const E = M * 4;
            for (let A = 0; A < d; A++) {
                const G = h[A]
                  , k = T[A]
                  , Y = y[A]
                  , K = U * D * 4 * A;
                for (let X = 0; X < G.count; X++) {
                    const Z = X * E;
                    g === !0 && (r.fromBufferAttribute(G, X),
                    C[K + Z + 0] = r.x,
                    C[K + Z + 1] = r.y,
                    C[K + Z + 2] = r.z,
                    C[K + Z + 3] = 0),
                    b === !0 && (r.fromBufferAttribute(k, X),
                    C[K + Z + 4] = r.x,
                    C[K + Z + 5] = r.y,
                    C[K + Z + 6] = r.z,
                    C[K + Z + 7] = 0),
                    f === !0 && (r.fromBufferAttribute(Y, X),
                    C[K + Z + 8] = r.x,
                    C[K + Z + 9] = r.y,
                    C[K + Z + 10] = r.z,
                    C[K + Z + 11] = Y.itemSize === 4 ? r.w : 1)
                }
            }
            p = {
                count: d,
                texture: I,
                size: new Ut(U,D)
            },
            i.set(a, p),
            a.addEventListener("dispose", x)
        }
        if (o.isInstancedMesh === !0 && o.morphTexture !== null)
            l.getUniforms().setValue(n, "morphTexture", o.morphTexture, e);
        else {
            let g = 0;
            for (let f = 0; f < c.length; f++)
                g += c[f];
            const b = a.morphTargetsRelative ? 1 : 1 - g;
            l.getUniforms().setValue(n, "morphTargetBaseInfluence", b),
            l.getUniforms().setValue(n, "morphTargetInfluences", c)
        }
        l.getUniforms().setValue(n, "morphTargetsTexture", p.texture, e),
        l.getUniforms().setValue(n, "morphTargetsTextureSize", p.size)
    }
    return {
        update: s
    }
}
function E_(n, t, e, i) {
    let r = new WeakMap;
    function s(l) {
        const c = i.render.frame
          , u = l.geometry
          , d = t.get(l, u);
        if (r.get(d) !== c && (t.update(d),
        r.set(d, c)),
        l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a),
        r.get(l) !== c && (e.update(l.instanceMatrix, n.ARRAY_BUFFER),
        l.instanceColor !== null && e.update(l.instanceColor, n.ARRAY_BUFFER),
        r.set(l, c))),
        l.isSkinnedMesh) {
            const p = l.skeleton;
            r.get(p) !== c && (p.update(),
            r.set(p, c))
        }
        return d
    }
    function o() {
        r = new WeakMap
    }
    function a(l) {
        const c = l.target;
        c.removeEventListener("dispose", a),
        e.remove(c.instanceMatrix),
        c.instanceColor !== null && e.remove(c.instanceColor)
    }
    return {
        update: s,
        dispose: o
    }
}
const _u = new Pe
  , Zl = new pu(1,1)
  , vu = new iu
  , gu = new qd
  , xu = new Ra
  , Jl = []
  , Ql = []
  , tc = new Float32Array(16)
  , ec = new Float32Array(9)
  , nc = new Float32Array(4);
function sr(n, t, e) {
    const i = n[0];
    if (i <= 0 || i > 0)
        return n;
    const r = t * e;
    let s = Jl[r];
    if (s === void 0 && (s = new Float32Array(r),
    Jl[r] = s),
    t !== 0) {
        i.toArray(s, 0);
        for (let o = 1, a = 0; o !== t; ++o)
            a += e,
            n[o].toArray(s, a)
    }
    return s
}
function xe(n, t) {
    if (n.length !== t.length)
        return !1;
    for (let e = 0, i = n.length; e < i; e++)
        if (n[e] !== t[e])
            return !1;
    return !0
}
function be(n, t) {
    for (let e = 0, i = t.length; e < i; e++)
        n[e] = t[e]
}
function Os(n, t) {
    let e = Ql[t];
    e === void 0 && (e = new Int32Array(t),
    Ql[t] = e);
    for (let i = 0; i !== t; ++i)
        e[i] = n.allocateTextureUnit();
    return e
}
function w_(n, t) {
    const e = this.cache;
    e[0] !== t && (n.uniform1f(this.addr, t),
    e[0] = t)
}
function M_(n, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y) && (n.uniform2f(this.addr, t.x, t.y),
        e[0] = t.x,
        e[1] = t.y);
    else {
        if (xe(e, t))
            return;
        n.uniform2fv(this.addr, t),
        be(e, t)
    }
}
function y_(n, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3f(this.addr, t.x, t.y, t.z),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z);
    else if (t.r !== void 0)
        (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (n.uniform3f(this.addr, t.r, t.g, t.b),
        e[0] = t.r,
        e[1] = t.g,
        e[2] = t.b);
    else {
        if (xe(e, t))
            return;
        n.uniform3fv(this.addr, t),
        be(e, t)
    }
}
function S_(n, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4f(this.addr, t.x, t.y, t.z, t.w),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z,
        e[3] = t.w);
    else {
        if (xe(e, t))
            return;
        n.uniform4fv(this.addr, t),
        be(e, t)
    }
}
function T_(n, t) {
    const e = this.cache
      , i = t.elements;
    if (i === void 0) {
        if (xe(e, t))
            return;
        n.uniformMatrix2fv(this.addr, !1, t),
        be(e, t)
    } else {
        if (xe(e, i))
            return;
        nc.set(i),
        n.uniformMatrix2fv(this.addr, !1, nc),
        be(e, i)
    }
}
function C_(n, t) {
    const e = this.cache
      , i = t.elements;
    if (i === void 0) {
        if (xe(e, t))
            return;
        n.uniformMatrix3fv(this.addr, !1, t),
        be(e, t)
    } else {
        if (xe(e, i))
            return;
        ec.set(i),
        n.uniformMatrix3fv(this.addr, !1, ec),
        be(e, i)
    }
}
function A_(n, t) {
    const e = this.cache
      , i = t.elements;
    if (i === void 0) {
        if (xe(e, t))
            return;
        n.uniformMatrix4fv(this.addr, !1, t),
        be(e, t)
    } else {
        if (xe(e, i))
            return;
        tc.set(i),
        n.uniformMatrix4fv(this.addr, !1, tc),
        be(e, i)
    }
}
function P_(n, t) {
    const e = this.cache;
    e[0] !== t && (n.uniform1i(this.addr, t),
    e[0] = t)
}
function R_(n, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y) && (n.uniform2i(this.addr, t.x, t.y),
        e[0] = t.x,
        e[1] = t.y);
    else {
        if (xe(e, t))
            return;
        n.uniform2iv(this.addr, t),
        be(e, t)
    }
}
function D_(n, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3i(this.addr, t.x, t.y, t.z),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z);
    else {
        if (xe(e, t))
            return;
        n.uniform3iv(this.addr, t),
        be(e, t)
    }
}
function L_(n, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4i(this.addr, t.x, t.y, t.z, t.w),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z,
        e[3] = t.w);
    else {
        if (xe(e, t))
            return;
        n.uniform4iv(this.addr, t),
        be(e, t)
    }
}
function U_(n, t) {
    const e = this.cache;
    e[0] !== t && (n.uniform1ui(this.addr, t),
    e[0] = t)
}
function I_(n, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y) && (n.uniform2ui(this.addr, t.x, t.y),
        e[0] = t.x,
        e[1] = t.y);
    else {
        if (xe(e, t))
            return;
        n.uniform2uiv(this.addr, t),
        be(e, t)
    }
}
function N_(n, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3ui(this.addr, t.x, t.y, t.z),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z);
    else {
        if (xe(e, t))
            return;
        n.uniform3uiv(this.addr, t),
        be(e, t)
    }
}
function F_(n, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z,
        e[3] = t.w);
    else {
        if (xe(e, t))
            return;
        n.uniform4uiv(this.addr, t),
        be(e, t)
    }
}
function O_(n, t, e) {
    const i = this.cache
      , r = e.allocateTextureUnit();
    i[0] !== r && (n.uniform1i(this.addr, r),
    i[0] = r);
    let s;
    this.type === n.SAMPLER_2D_SHADOW ? (Zl.compareFunction = tu,
    s = Zl) : s = _u,
    e.setTexture2D(t || s, r)
}
function B_(n, t, e) {
    const i = this.cache
      , r = e.allocateTextureUnit();
    i[0] !== r && (n.uniform1i(this.addr, r),
    i[0] = r),
    e.setTexture3D(t || gu, r)
}
function k_(n, t, e) {
    const i = this.cache
      , r = e.allocateTextureUnit();
    i[0] !== r && (n.uniform1i(this.addr, r),
    i[0] = r),
    e.setTextureCube(t || xu, r)
}
function V_(n, t, e) {
    const i = this.cache
      , r = e.allocateTextureUnit();
    i[0] !== r && (n.uniform1i(this.addr, r),
    i[0] = r),
    e.setTexture2DArray(t || vu, r)
}
function z_(n) {
    switch (n) {
    case 5126:
        return w_;
    case 35664:
        return M_;
    case 35665:
        return y_;
    case 35666:
        return S_;
    case 35674:
        return T_;
    case 35675:
        return C_;
    case 35676:
        return A_;
    case 5124:
    case 35670:
        return P_;
    case 35667:
    case 35671:
        return R_;
    case 35668:
    case 35672:
        return D_;
    case 35669:
    case 35673:
        return L_;
    case 5125:
        return U_;
    case 36294:
        return I_;
    case 36295:
        return N_;
    case 36296:
        return F_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return O_;
    case 35679:
    case 36299:
    case 36307:
        return B_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return k_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return V_
    }
}
function H_(n, t) {
    n.uniform1fv(this.addr, t)
}
function G_(n, t) {
    const e = sr(t, this.size, 2);
    n.uniform2fv(this.addr, e)
}
function W_(n, t) {
    const e = sr(t, this.size, 3);
    n.uniform3fv(this.addr, e)
}
function X_(n, t) {
    const e = sr(t, this.size, 4);
    n.uniform4fv(this.addr, e)
}
function q_(n, t) {
    const e = sr(t, this.size, 4);
    n.uniformMatrix2fv(this.addr, !1, e)
}
function j_(n, t) {
    const e = sr(t, this.size, 9);
    n.uniformMatrix3fv(this.addr, !1, e)
}
function Y_(n, t) {
    const e = sr(t, this.size, 16);
    n.uniformMatrix4fv(this.addr, !1, e)
}
function K_(n, t) {
    n.uniform1iv(this.addr, t)
}
function $_(n, t) {
    n.uniform2iv(this.addr, t)
}
function Z_(n, t) {
    n.uniform3iv(this.addr, t)
}
function J_(n, t) {
    n.uniform4iv(this.addr, t)
}
function Q_(n, t) {
    n.uniform1uiv(this.addr, t)
}
function tv(n, t) {
    n.uniform2uiv(this.addr, t)
}
function ev(n, t) {
    n.uniform3uiv(this.addr, t)
}
function nv(n, t) {
    n.uniform4uiv(this.addr, t)
}
function iv(n, t, e) {
    const i = this.cache
      , r = t.length
      , s = Os(e, r);
    xe(i, s) || (n.uniform1iv(this.addr, s),
    be(i, s));
    for (let o = 0; o !== r; ++o)
        e.setTexture2D(t[o] || _u, s[o])
}
function rv(n, t, e) {
    const i = this.cache
      , r = t.length
      , s = Os(e, r);
    xe(i, s) || (n.uniform1iv(this.addr, s),
    be(i, s));
    for (let o = 0; o !== r; ++o)
        e.setTexture3D(t[o] || gu, s[o])
}
function sv(n, t, e) {
    const i = this.cache
      , r = t.length
      , s = Os(e, r);
    xe(i, s) || (n.uniform1iv(this.addr, s),
    be(i, s));
    for (let o = 0; o !== r; ++o)
        e.setTextureCube(t[o] || xu, s[o])
}
function ov(n, t, e) {
    const i = this.cache
      , r = t.length
      , s = Os(e, r);
    xe(i, s) || (n.uniform1iv(this.addr, s),
    be(i, s));
    for (let o = 0; o !== r; ++o)
        e.setTexture2DArray(t[o] || vu, s[o])
}
function av(n) {
    switch (n) {
    case 5126:
        return H_;
    case 35664:
        return G_;
    case 35665:
        return W_;
    case 35666:
        return X_;
    case 35674:
        return q_;
    case 35675:
        return j_;
    case 35676:
        return Y_;
    case 5124:
    case 35670:
        return K_;
    case 35667:
    case 35671:
        return $_;
    case 35668:
    case 35672:
        return Z_;
    case 35669:
    case 35673:
        return J_;
    case 5125:
        return Q_;
    case 36294:
        return tv;
    case 36295:
        return ev;
    case 36296:
        return nv;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return iv;
    case 35679:
    case 36299:
    case 36307:
        return rv;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return sv;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return ov
    }
}
class lv {
    constructor(t, e, i) {
        this.id = t,
        this.addr = i,
        this.cache = [],
        this.type = e.type,
        this.setValue = z_(e.type)
    }
}
class cv {
    constructor(t, e, i) {
        this.id = t,
        this.addr = i,
        this.cache = [],
        this.type = e.type,
        this.size = e.size,
        this.setValue = av(e.type)
    }
}
class uv {
    constructor(t) {
        this.id = t,
        this.seq = [],
        this.map = {}
    }
    setValue(t, e, i) {
        const r = this.seq;
        for (let s = 0, o = r.length; s !== o; ++s) {
            const a = r[s];
            a.setValue(t, e[a.id], i)
        }
    }
}
const vo = /(\w+)(\])?(\[|\.)?/g;
function ic(n, t) {
    n.seq.push(t),
    n.map[t.id] = t
}
function hv(n, t, e) {
    const i = n.name
      , r = i.length;
    for (vo.lastIndex = 0; ; ) {
        const s = vo.exec(i)
          , o = vo.lastIndex;
        let a = s[1];
        const l = s[2] === "]"
          , c = s[3];
        if (l && (a = a | 0),
        c === void 0 || c === "[" && o + 2 === r) {
            ic(e, c === void 0 ? new lv(a,n,t) : new cv(a,n,t));
            break
        } else {
            let d = e.map[a];
            d === void 0 && (d = new uv(a),
            ic(e, d)),
            e = d
        }
    }
}
class ys {
    constructor(t, e) {
        this.seq = [],
        this.map = {};
        const i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
        for (let r = 0; r < i; ++r) {
            const s = t.getActiveUniform(e, r)
              , o = t.getUniformLocation(e, s.name);
            hv(s, o, this)
        }
    }
    setValue(t, e, i, r) {
        const s = this.map[e];
        s !== void 0 && s.setValue(t, i, r)
    }
    setOptional(t, e, i) {
        const r = e[i];
        r !== void 0 && this.setValue(t, i, r)
    }
    static upload(t, e, i, r) {
        for (let s = 0, o = e.length; s !== o; ++s) {
            const a = e[s]
              , l = i[a.id];
            l.needsUpdate !== !1 && a.setValue(t, l.value, r)
        }
    }
    static seqWithValue(t, e) {
        const i = [];
        for (let r = 0, s = t.length; r !== s; ++r) {
            const o = t[r];
            o.id in e && i.push(o)
        }
        return i
    }
}
function rc(n, t, e) {
    const i = n.createShader(t);
    return n.shaderSource(i, e),
    n.compileShader(i),
    i
}
const dv = 37297;
let pv = 0;
function fv(n, t) {
    const e = n.split(`
`)
      , i = []
      , r = Math.max(t - 6, 0)
      , s = Math.min(t + 6, e.length);
    for (let o = r; o < s; o++) {
        const a = o + 1;
        i.push(`${a === t ? ">" : " "} ${a}: ${e[o]}`)
    }
    return i.join(`
`)
}
const sc = new Pt;
function mv(n) {
    qt._getMatrix(sc, qt.workingColorSpace, n);
    const t = `mat3( ${sc.elements.map(e => e.toFixed(4))} )`;
    switch (qt.getTransfer(n)) {
    case Cs:
        return [t, "LinearTransferOETF"];
    case Jt:
        return [t, "sRGBTransferOETF"];
    default:
        return console.warn("THREE.WebGLProgram: Unsupported color space: ", n),
        [t, "LinearTransferOETF"]
    }
}
function oc(n, t, e) {
    const i = n.getShaderParameter(t, n.COMPILE_STATUS)
      , r = n.getShaderInfoLog(t).trim();
    if (i && r === "")
        return "";
    const s = /ERROR: 0:(\d+)/.exec(r);
    if (s) {
        const o = parseInt(s[1]);
        return e.toUpperCase() + `

` + r + `

` + fv(n.getShaderSource(t), o)
    } else
        return r
}
function _v(n, t) {
    const e = mv(t);
    return [`vec4 ${n}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`)
}
function vv(n, t) {
    let e;
    switch (t) {
    case ed:
        e = "Linear";
        break;
    case nd:
        e = "Reinhard";
        break;
    case id:
        e = "Cineon";
        break;
    case rd:
        e = "ACESFilmic";
        break;
    case od:
        e = "AgX";
        break;
    case ad:
        e = "Neutral";
        break;
    case sd:
        e = "Custom";
        break;
    default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        e = "Linear"
    }
    return "vec3 " + n + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
}
const _s = new F;
function gv() {
    qt.getLuminanceCoefficients(_s);
    const n = _s.x.toFixed(4)
      , t = _s.y.toFixed(4)
      , e = _s.z.toFixed(4);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${n}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`)
}
function xv(n) {
    return [n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Er).join(`
`)
}
function bv(n) {
    const t = [];
    for (const e in n) {
        const i = n[e];
        i !== !1 && t.push("#define " + e + " " + i)
    }
    return t.join(`
`)
}
function Ev(n, t) {
    const e = {}
      , i = n.getProgramParameter(t, n.ACTIVE_ATTRIBUTES);
    for (let r = 0; r < i; r++) {
        const s = n.getActiveAttrib(t, r)
          , o = s.name;
        let a = 1;
        s.type === n.FLOAT_MAT2 && (a = 2),
        s.type === n.FLOAT_MAT3 && (a = 3),
        s.type === n.FLOAT_MAT4 && (a = 4),
        e[o] = {
            type: s.type,
            location: n.getAttribLocation(t, o),
            locationSize: a
        }
    }
    return e
}
function Er(n) {
    return n !== ""
}
function ac(n, t) {
    const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
    return n.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
}
function lc(n, t) {
    return n.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
}
const wv = /^[ \t]*#include +<([\w\d./]+)>/gm;
function pa(n) {
    return n.replace(wv, yv)
}
const Mv = new Map;
function yv(n, t) {
    let e = Dt[t];
    if (e === void 0) {
        const i = Mv.get(t);
        if (i !== void 0)
            e = Dt[i],
            console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, i);
        else
            throw new Error("Can not resolve #include <" + t + ">")
    }
    return pa(e)
}
const Sv = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function cc(n) {
    return n.replace(Sv, Tv)
}
function Tv(n, t, e, i) {
    let r = "";
    for (let s = parseInt(t); s < parseInt(e); s++)
        r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
    return r
}
function uc(n) {
    let t = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;
    return n.precision === "highp" ? t += `
#define HIGH_PRECISION` : n.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (t += `
#define LOW_PRECISION`),
    t
}
function Cv(n) {
    let t = "SHADOWMAP_TYPE_BASIC";
    return n.shadowMapType === zc ? t = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === Ih ? t = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === wn && (t = "SHADOWMAP_TYPE_VSM"),
    t
}
function Av(n) {
    let t = "ENVMAP_TYPE_CUBE";
    if (n.envMap)
        switch (n.envMapMode) {
        case Zi:
        case Ji:
            t = "ENVMAP_TYPE_CUBE";
            break;
        case Is:
            t = "ENVMAP_TYPE_CUBE_UV";
            break
        }
    return t
}
function Pv(n) {
    let t = "ENVMAP_MODE_REFLECTION";
    if (n.envMap)
        switch (n.envMapMode) {
        case Ji:
            t = "ENVMAP_MODE_REFRACTION";
            break
        }
    return t
}
function Rv(n) {
    let t = "ENVMAP_BLENDING_NONE";
    if (n.envMap)
        switch (n.combine) {
        case Hc:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case Qh:
            t = "ENVMAP_BLENDING_MIX";
            break;
        case td:
            t = "ENVMAP_BLENDING_ADD";
            break
        }
    return t
}
function Dv(n) {
    const t = n.envMapCubeUVHeight;
    if (t === null)
        return null;
    const e = Math.log2(t) - 2
      , i = 1 / t;
    return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)),
        texelHeight: i,
        maxMip: e
    }
}
function Lv(n, t, e, i) {
    const r = n.getContext()
      , s = e.defines;
    let o = e.vertexShader
      , a = e.fragmentShader;
    const l = Cv(e)
      , c = Av(e)
      , u = Pv(e)
      , d = Rv(e)
      , p = Dv(e)
      , m = xv(e)
      , g = bv(s)
      , b = r.createProgram();
    let f, h, T = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
    e.isRawShaderMaterial ? (f = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(Er).join(`
`),
    f.length > 0 && (f += `
`),
    h = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(Er).join(`
`),
    h.length > 0 && (h += `
`)) : (f = [uc(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + u : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Er).join(`
`),
    h = [uc(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + u : "", e.envMap ? "#define " + d : "", p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "", p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "", p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== qn ? "#define TONE_MAPPING" : "", e.toneMapping !== qn ? Dt.tonemapping_pars_fragment : "", e.toneMapping !== qn ? vv("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Dt.colorspace_pars_fragment, _v("linearToOutputTexel", e.outputColorSpace), gv(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Er).join(`
`)),
    o = pa(o),
    o = ac(o, e),
    o = lc(o, e),
    a = pa(a),
    a = ac(a, e),
    a = lc(a, e),
    o = cc(o),
    a = cc(a),
    e.isRawShaderMaterial !== !0 && (T = `#version 300 es
`,
    f = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + f,
    h = ["#define varying in", e.glslVersion === El ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === El ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + h);
    const y = T + f + o
      , M = T + h + a
      , U = rc(r, r.VERTEX_SHADER, y)
      , D = rc(r, r.FRAGMENT_SHADER, M);
    r.attachShader(b, U),
    r.attachShader(b, D),
    e.index0AttributeName !== void 0 ? r.bindAttribLocation(b, 0, e.index0AttributeName) : e.morphTargets === !0 && r.bindAttribLocation(b, 0, "position"),
    r.linkProgram(b);
    function C(A) {
        if (n.debug.checkShaderErrors) {
            const G = r.getProgramInfoLog(b).trim()
              , k = r.getShaderInfoLog(U).trim()
              , Y = r.getShaderInfoLog(D).trim();
            let K = !0
              , X = !0;
            if (r.getProgramParameter(b, r.LINK_STATUS) === !1)
                if (K = !1,
                typeof n.debug.onShaderError == "function")
                    n.debug.onShaderError(r, b, U, D);
                else {
                    const Z = oc(r, U, "vertex")
                      , z = oc(r, D, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(b, r.VALIDATE_STATUS) + `

Material Name: ` + A.name + `
Material Type: ` + A.type + `

Program Info Log: ` + G + `
` + Z + `
` + z)
                }
            else
                G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (k === "" || Y === "") && (X = !1);
            X && (A.diagnostics = {
                runnable: K,
                programLog: G,
                vertexShader: {
                    log: k,
                    prefix: f
                },
                fragmentShader: {
                    log: Y,
                    prefix: h
                }
            })
        }
        r.deleteShader(U),
        r.deleteShader(D),
        I = new ys(r,b),
        E = Ev(r, b)
    }
    let I;
    this.getUniforms = function() {
        return I === void 0 && C(this),
        I
    }
    ;
    let E;
    this.getAttributes = function() {
        return E === void 0 && C(this),
        E
    }
    ;
    let x = e.rendererExtensionParallelShaderCompile === !1;
    return this.isReady = function() {
        return x === !1 && (x = r.getProgramParameter(b, dv)),
        x
    }
    ,
    this.destroy = function() {
        i.releaseStatesOfProgram(this),
        r.deleteProgram(b),
        this.program = void 0
    }
    ,
    this.type = e.shaderType,
    this.name = e.shaderName,
    this.id = pv++,
    this.cacheKey = t,
    this.usedTimes = 1,
    this.program = b,
    this.vertexShader = U,
    this.fragmentShader = D,
    this
}
let Uv = 0;
class Iv {
    constructor() {
        this.shaderCache = new Map,
        this.materialCache = new Map
    }
    update(t) {
        const e = t.vertexShader
          , i = t.fragmentShader
          , r = this._getShaderStage(e)
          , s = this._getShaderStage(i)
          , o = this._getShaderCacheForMaterial(t);
        return o.has(r) === !1 && (o.add(r),
        r.usedTimes++),
        o.has(s) === !1 && (o.add(s),
        s.usedTimes++),
        this
    }
    remove(t) {
        const e = this.materialCache.get(t);
        for (const i of e)
            i.usedTimes--,
            i.usedTimes === 0 && this.shaderCache.delete(i.code);
        return this.materialCache.delete(t),
        this
    }
    getVertexShaderID(t) {
        return this._getShaderStage(t.vertexShader).id
    }
    getFragmentShaderID(t) {
        return this._getShaderStage(t.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(),
        this.materialCache.clear()
    }
    _getShaderCacheForMaterial(t) {
        const e = this.materialCache;
        let i = e.get(t);
        return i === void 0 && (i = new Set,
        e.set(t, i)),
        i
    }
    _getShaderStage(t) {
        const e = this.shaderCache;
        let i = e.get(t);
        return i === void 0 && (i = new Nv(t),
        e.set(t, i)),
        i
    }
}
class Nv {
    constructor(t) {
        this.id = Uv++,
        this.code = t,
        this.usedTimes = 0
    }
}
function Fv(n, t, e, i, r, s, o) {
    const a = new su
      , l = new Iv
      , c = new Set
      , u = []
      , d = r.logarithmicDepthBuffer
      , p = r.vertexTextures;
    let m = r.precision;
    const g = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    function b(E) {
        return c.add(E),
        E === 0 ? "uv" : `uv${E}`
    }
    function f(E, x, A, G, k) {
        const Y = G.fog
          , K = k.geometry
          , X = E.isMeshStandardMaterial ? G.environment : null
          , Z = (E.isMeshStandardMaterial ? e : t).get(E.envMap || X)
          , z = Z && Z.mapping === Is ? Z.image.height : null
          , rt = g[E.type];
        E.precision !== null && (m = r.getMaxPrecision(E.precision),
        m !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", m, "instead."));
        const ut = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color
          , gt = ut !== void 0 ? ut.length : 0;
        let Nt = 0;
        K.morphAttributes.position !== void 0 && (Nt = 1),
        K.morphAttributes.normal !== void 0 && (Nt = 2),
        K.morphAttributes.color !== void 0 && (Nt = 3);
        let te, W, tt, mt;
        if (rt) {
            const Zt = an[rt];
            te = Zt.vertexShader,
            W = Zt.fragmentShader
        } else
            te = E.vertexShader,
            W = E.fragmentShader,
            l.update(E),
            tt = l.getVertexShaderID(E),
            mt = l.getFragmentShaderID(E);
        const st = n.getRenderTarget()
          , Mt = n.state.buffers.depth.getReversed()
          , Tt = k.isInstancedMesh === !0
          , Ft = k.isBatchedMesh === !0
          , oe = !!E.map
          , Vt = !!E.matcap
          , he = !!Z
          , S = !!E.aoMap
          , We = !!E.lightMap
          , Ot = !!E.bumpMap
          , Bt = !!E.normalMap
          , xt = !!E.displacementMap
          , ie = !!E.emissiveMap
          , vt = !!E.metalnessMap
          , w = !!E.roughnessMap
          , _ = E.anisotropy > 0
          , N = E.clearcoat > 0
          , q = E.dispersion > 0
          , $ = E.iridescence > 0
          , H = E.sheen > 0
          , _t = E.transmission > 0
          , ot = _ && !!E.anisotropyMap
          , ht = N && !!E.clearcoatMap
          , zt = N && !!E.clearcoatNormalMap
          , Q = N && !!E.clearcoatRoughnessMap
          , dt = $ && !!E.iridescenceMap
          , wt = $ && !!E.iridescenceThicknessMap
          , yt = H && !!E.sheenColorMap
          , pt = H && !!E.sheenRoughnessMap
          , kt = !!E.specularMap
          , Rt = !!E.specularColorMap
          , ee = !!E.specularIntensityMap
          , P = _t && !!E.transmissionMap
          , nt = _t && !!E.thicknessMap
          , V = !!E.gradientMap
          , j = !!E.alphaMap
          , lt = E.alphaTest > 0
          , at = !!E.alphaHash
          , At = !!E.extensions;
        let le = qn;
        E.toneMapped && (st === null || st.isXRRenderTarget === !0) && (le = n.toneMapping);
        const Me = {
            shaderID: rt,
            shaderType: E.type,
            shaderName: E.name,
            vertexShader: te,
            fragmentShader: W,
            defines: E.defines,
            customVertexShaderID: tt,
            customFragmentShaderID: mt,
            isRawShaderMaterial: E.isRawShaderMaterial === !0,
            glslVersion: E.glslVersion,
            precision: m,
            batching: Ft,
            batchingColor: Ft && k._colorsTexture !== null,
            instancing: Tt,
            instancingColor: Tt && k.instanceColor !== null,
            instancingMorph: Tt && k.morphTexture !== null,
            supportsVertexTextures: p,
            outputColorSpace: st === null ? n.outputColorSpace : st.isXRRenderTarget === !0 ? st.texture.colorSpace : er,
            alphaToCoverage: !!E.alphaToCoverage,
            map: oe,
            matcap: Vt,
            envMap: he,
            envMapMode: he && Z.mapping,
            envMapCubeUVHeight: z,
            aoMap: S,
            lightMap: We,
            bumpMap: Ot,
            normalMap: Bt,
            displacementMap: p && xt,
            emissiveMap: ie,
            normalMapObjectSpace: Bt && E.normalMapType === dd,
            normalMapTangentSpace: Bt && E.normalMapType === hd,
            metalnessMap: vt,
            roughnessMap: w,
            anisotropy: _,
            anisotropyMap: ot,
            clearcoat: N,
            clearcoatMap: ht,
            clearcoatNormalMap: zt,
            clearcoatRoughnessMap: Q,
            dispersion: q,
            iridescence: $,
            iridescenceMap: dt,
            iridescenceThicknessMap: wt,
            sheen: H,
            sheenColorMap: yt,
            sheenRoughnessMap: pt,
            specularMap: kt,
            specularColorMap: Rt,
            specularIntensityMap: ee,
            transmission: _t,
            transmissionMap: P,
            thicknessMap: nt,
            gradientMap: V,
            opaque: E.transparent === !1 && E.blending === Xi && E.alphaToCoverage === !1,
            alphaMap: j,
            alphaTest: lt,
            alphaHash: at,
            combine: E.combine,
            mapUv: oe && b(E.map.channel),
            aoMapUv: S && b(E.aoMap.channel),
            lightMapUv: We && b(E.lightMap.channel),
            bumpMapUv: Ot && b(E.bumpMap.channel),
            normalMapUv: Bt && b(E.normalMap.channel),
            displacementMapUv: xt && b(E.displacementMap.channel),
            emissiveMapUv: ie && b(E.emissiveMap.channel),
            metalnessMapUv: vt && b(E.metalnessMap.channel),
            roughnessMapUv: w && b(E.roughnessMap.channel),
            anisotropyMapUv: ot && b(E.anisotropyMap.channel),
            clearcoatMapUv: ht && b(E.clearcoatMap.channel),
            clearcoatNormalMapUv: zt && b(E.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: Q && b(E.clearcoatRoughnessMap.channel),
            iridescenceMapUv: dt && b(E.iridescenceMap.channel),
            iridescenceThicknessMapUv: wt && b(E.iridescenceThicknessMap.channel),
            sheenColorMapUv: yt && b(E.sheenColorMap.channel),
            sheenRoughnessMapUv: pt && b(E.sheenRoughnessMap.channel),
            specularMapUv: kt && b(E.specularMap.channel),
            specularColorMapUv: Rt && b(E.specularColorMap.channel),
            specularIntensityMapUv: ee && b(E.specularIntensityMap.channel),
            transmissionMapUv: P && b(E.transmissionMap.channel),
            thicknessMapUv: nt && b(E.thicknessMap.channel),
            alphaMapUv: j && b(E.alphaMap.channel),
            vertexTangents: !!K.attributes.tangent && (Bt || _),
            vertexColors: E.vertexColors,
            vertexAlphas: E.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4,
            pointsUvs: k.isPoints === !0 && !!K.attributes.uv && (oe || j),
            fog: !!Y,
            useFog: E.fog === !0,
            fogExp2: !!Y && Y.isFogExp2,
            flatShading: E.flatShading === !0,
            sizeAttenuation: E.sizeAttenuation === !0,
            logarithmicDepthBuffer: d,
            reverseDepthBuffer: Mt,
            skinning: k.isSkinnedMesh === !0,
            morphTargets: K.morphAttributes.position !== void 0,
            morphNormals: K.morphAttributes.normal !== void 0,
            morphColors: K.morphAttributes.color !== void 0,
            morphTargetsCount: gt,
            morphTextureStride: Nt,
            numDirLights: x.directional.length,
            numPointLights: x.point.length,
            numSpotLights: x.spot.length,
            numSpotLightMaps: x.spotLightMap.length,
            numRectAreaLights: x.rectArea.length,
            numHemiLights: x.hemi.length,
            numDirLightShadows: x.directionalShadowMap.length,
            numPointLightShadows: x.pointShadowMap.length,
            numSpotLightShadows: x.spotShadowMap.length,
            numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
            numLightProbes: x.numLightProbes,
            numClippingPlanes: o.numPlanes,
            numClipIntersection: o.numIntersection,
            dithering: E.dithering,
            shadowMapEnabled: n.shadowMap.enabled && A.length > 0,
            shadowMapType: n.shadowMap.type,
            toneMapping: le,
            decodeVideoTexture: oe && E.map.isVideoTexture === !0 && qt.getTransfer(E.map.colorSpace) === Jt,
            decodeVideoTextureEmissive: ie && E.emissiveMap.isVideoTexture === !0 && qt.getTransfer(E.emissiveMap.colorSpace) === Jt,
            premultipliedAlpha: E.premultipliedAlpha,
            doubleSided: E.side === ln,
            flipSided: E.side === Ne,
            useDepthPacking: E.depthPacking >= 0,
            depthPacking: E.depthPacking || 0,
            index0AttributeName: E.index0AttributeName,
            extensionClipCullDistance: At && E.extensions.clipCullDistance === !0 && i.has("WEBGL_clip_cull_distance"),
            extensionMultiDraw: (At && E.extensions.multiDraw === !0 || Ft) && i.has("WEBGL_multi_draw"),
            rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"),
            customProgramCacheKey: E.customProgramCacheKey()
        };
        return Me.vertexUv1s = c.has(1),
        Me.vertexUv2s = c.has(2),
        Me.vertexUv3s = c.has(3),
        c.clear(),
        Me
    }
    function h(E) {
        const x = [];
        if (E.shaderID ? x.push(E.shaderID) : (x.push(E.customVertexShaderID),
        x.push(E.customFragmentShaderID)),
        E.defines !== void 0)
            for (const A in E.defines)
                x.push(A),
                x.push(E.defines[A]);
        return E.isRawShaderMaterial === !1 && (T(x, E),
        y(x, E),
        x.push(n.outputColorSpace)),
        x.push(E.customProgramCacheKey),
        x.join()
    }
    function T(E, x) {
        E.push(x.precision),
        E.push(x.outputColorSpace),
        E.push(x.envMapMode),
        E.push(x.envMapCubeUVHeight),
        E.push(x.mapUv),
        E.push(x.alphaMapUv),
        E.push(x.lightMapUv),
        E.push(x.aoMapUv),
        E.push(x.bumpMapUv),
        E.push(x.normalMapUv),
        E.push(x.displacementMapUv),
        E.push(x.emissiveMapUv),
        E.push(x.metalnessMapUv),
        E.push(x.roughnessMapUv),
        E.push(x.anisotropyMapUv),
        E.push(x.clearcoatMapUv),
        E.push(x.clearcoatNormalMapUv),
        E.push(x.clearcoatRoughnessMapUv),
        E.push(x.iridescenceMapUv),
        E.push(x.iridescenceThicknessMapUv),
        E.push(x.sheenColorMapUv),
        E.push(x.sheenRoughnessMapUv),
        E.push(x.specularMapUv),
        E.push(x.specularColorMapUv),
        E.push(x.specularIntensityMapUv),
        E.push(x.transmissionMapUv),
        E.push(x.thicknessMapUv),
        E.push(x.combine),
        E.push(x.fogExp2),
        E.push(x.sizeAttenuation),
        E.push(x.morphTargetsCount),
        E.push(x.morphAttributeCount),
        E.push(x.numDirLights),
        E.push(x.numPointLights),
        E.push(x.numSpotLights),
        E.push(x.numSpotLightMaps),
        E.push(x.numHemiLights),
        E.push(x.numRectAreaLights),
        E.push(x.numDirLightShadows),
        E.push(x.numPointLightShadows),
        E.push(x.numSpotLightShadows),
        E.push(x.numSpotLightShadowsWithMaps),
        E.push(x.numLightProbes),
        E.push(x.shadowMapType),
        E.push(x.toneMapping),
        E.push(x.numClippingPlanes),
        E.push(x.numClipIntersection),
        E.push(x.depthPacking)
    }
    function y(E, x) {
        a.disableAll(),
        x.supportsVertexTextures && a.enable(0),
        x.instancing && a.enable(1),
        x.instancingColor && a.enable(2),
        x.instancingMorph && a.enable(3),
        x.matcap && a.enable(4),
        x.envMap && a.enable(5),
        x.normalMapObjectSpace && a.enable(6),
        x.normalMapTangentSpace && a.enable(7),
        x.clearcoat && a.enable(8),
        x.iridescence && a.enable(9),
        x.alphaTest && a.enable(10),
        x.vertexColors && a.enable(11),
        x.vertexAlphas && a.enable(12),
        x.vertexUv1s && a.enable(13),
        x.vertexUv2s && a.enable(14),
        x.vertexUv3s && a.enable(15),
        x.vertexTangents && a.enable(16),
        x.anisotropy && a.enable(17),
        x.alphaHash && a.enable(18),
        x.batching && a.enable(19),
        x.dispersion && a.enable(20),
        x.batchingColor && a.enable(21),
        E.push(a.mask),
        a.disableAll(),
        x.fog && a.enable(0),
        x.useFog && a.enable(1),
        x.flatShading && a.enable(2),
        x.logarithmicDepthBuffer && a.enable(3),
        x.reverseDepthBuffer && a.enable(4),
        x.skinning && a.enable(5),
        x.morphTargets && a.enable(6),
        x.morphNormals && a.enable(7),
        x.morphColors && a.enable(8),
        x.premultipliedAlpha && a.enable(9),
        x.shadowMapEnabled && a.enable(10),
        x.doubleSided && a.enable(11),
        x.flipSided && a.enable(12),
        x.useDepthPacking && a.enable(13),
        x.dithering && a.enable(14),
        x.transmission && a.enable(15),
        x.sheen && a.enable(16),
        x.opaque && a.enable(17),
        x.pointsUvs && a.enable(18),
        x.decodeVideoTexture && a.enable(19),
        x.decodeVideoTextureEmissive && a.enable(20),
        x.alphaToCoverage && a.enable(21),
        E.push(a.mask)
    }
    function M(E) {
        const x = g[E.type];
        let A;
        if (x) {
            const G = an[x];
            A = rp.clone(G.uniforms)
        } else
            A = E.uniforms;
        return A
    }
    function U(E, x) {
        let A;
        for (let G = 0, k = u.length; G < k; G++) {
            const Y = u[G];
            if (Y.cacheKey === x) {
                A = Y,
                ++A.usedTimes;
                break
            }
        }
        return A === void 0 && (A = new Lv(n,x,E,s),
        u.push(A)),
        A
    }
    function D(E) {
        if (--E.usedTimes === 0) {
            const x = u.indexOf(E);
            u[x] = u[u.length - 1],
            u.pop(),
            E.destroy()
        }
    }
    function C(E) {
        l.remove(E)
    }
    function I() {
        l.dispose()
    }
    return {
        getParameters: f,
        getProgramCacheKey: h,
        getUniforms: M,
        acquireProgram: U,
        releaseProgram: D,
        releaseShaderCache: C,
        programs: u,
        dispose: I
    }
}
function Ov() {
    let n = new WeakMap;
    function t(o) {
        return n.has(o)
    }
    function e(o) {
        let a = n.get(o);
        return a === void 0 && (a = {},
        n.set(o, a)),
        a
    }
    function i(o) {
        n.delete(o)
    }
    function r(o, a, l) {
        n.get(o)[a] = l
    }
    function s() {
        n = new WeakMap
    }
    return {
        has: t,
        get: e,
        remove: i,
        update: r,
        dispose: s
    }
}
function Bv(n, t) {
    return n.groupOrder !== t.groupOrder ? n.groupOrder - t.groupOrder : n.renderOrder !== t.renderOrder ? n.renderOrder - t.renderOrder : n.material.id !== t.material.id ? n.material.id - t.material.id : n.z !== t.z ? n.z - t.z : n.id - t.id
}
function hc(n, t) {
    return n.groupOrder !== t.groupOrder ? n.groupOrder - t.groupOrder : n.renderOrder !== t.renderOrder ? n.renderOrder - t.renderOrder : n.z !== t.z ? t.z - n.z : n.id - t.id
}
function dc() {
    const n = [];
    let t = 0;
    const e = []
      , i = []
      , r = [];
    function s() {
        t = 0,
        e.length = 0,
        i.length = 0,
        r.length = 0
    }
    function o(d, p, m, g, b, f) {
        let h = n[t];
        return h === void 0 ? (h = {
            id: d.id,
            object: d,
            geometry: p,
            material: m,
            groupOrder: g,
            renderOrder: d.renderOrder,
            z: b,
            group: f
        },
        n[t] = h) : (h.id = d.id,
        h.object = d,
        h.geometry = p,
        h.material = m,
        h.groupOrder = g,
        h.renderOrder = d.renderOrder,
        h.z = b,
        h.group = f),
        t++,
        h
    }
    function a(d, p, m, g, b, f) {
        const h = o(d, p, m, g, b, f);
        m.transmission > 0 ? i.push(h) : m.transparent === !0 ? r.push(h) : e.push(h)
    }
    function l(d, p, m, g, b, f) {
        const h = o(d, p, m, g, b, f);
        m.transmission > 0 ? i.unshift(h) : m.transparent === !0 ? r.unshift(h) : e.unshift(h)
    }
    function c(d, p) {
        e.length > 1 && e.sort(d || Bv),
        i.length > 1 && i.sort(p || hc),
        r.length > 1 && r.sort(p || hc)
    }
    function u() {
        for (let d = t, p = n.length; d < p; d++) {
            const m = n[d];
            if (m.id === null)
                break;
            m.id = null,
            m.object = null,
            m.geometry = null,
            m.material = null,
            m.group = null
        }
    }
    return {
        opaque: e,
        transmissive: i,
        transparent: r,
        init: s,
        push: a,
        unshift: l,
        finish: u,
        sort: c
    }
}
function kv() {
    let n = new WeakMap;
    function t(i, r) {
        const s = n.get(i);
        let o;
        return s === void 0 ? (o = new dc,
        n.set(i, [o])) : r >= s.length ? (o = new dc,
        s.push(o)) : o = s[r],
        o
    }
    function e() {
        n = new WeakMap
    }
    return {
        get: t,
        dispose: e
    }
}
function Vv() {
    const n = {};
    return {
        get: function(t) {
            if (n[t.id] !== void 0)
                return n[t.id];
            let e;
            switch (t.type) {
            case "DirectionalLight":
                e = {
                    direction: new F,
                    color: new Gt
                };
                break;
            case "SpotLight":
                e = {
                    position: new F,
                    direction: new F,
                    color: new Gt,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                e = {
                    position: new F,
                    color: new Gt,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                e = {
                    direction: new F,
                    skyColor: new Gt,
                    groundColor: new Gt
                };
                break;
            case "RectAreaLight":
                e = {
                    color: new Gt,
                    position: new F,
                    halfWidth: new F,
                    halfHeight: new F
                };
                break
            }
            return n[t.id] = e,
            e
        }
    }
}
function zv() {
    const n = {};
    return {
        get: function(t) {
            if (n[t.id] !== void 0)
                return n[t.id];
            let e;
            switch (t.type) {
            case "DirectionalLight":
                e = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ut
                };
                break;
            case "SpotLight":
                e = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ut
                };
                break;
            case "PointLight":
                e = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ut,
                    shadowCameraNear: 1,
                    shadowCameraFar: 1e3
                };
                break
            }
            return n[t.id] = e,
            e
        }
    }
}
let Hv = 0;
function Gv(n, t) {
    return (t.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (n.map ? 1 : 0)
}
function Wv(n) {
    const t = new Vv
      , e = zv()
      , i = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
    };
    for (let c = 0; c < 9; c++)
        i.probe.push(new F);
    const r = new F
      , s = new me
      , o = new me;
    function a(c) {
        let u = 0
          , d = 0
          , p = 0;
        for (let E = 0; E < 9; E++)
            i.probe[E].set(0, 0, 0);
        let m = 0
          , g = 0
          , b = 0
          , f = 0
          , h = 0
          , T = 0
          , y = 0
          , M = 0
          , U = 0
          , D = 0
          , C = 0;
        c.sort(Gv);
        for (let E = 0, x = c.length; E < x; E++) {
            const A = c[E]
              , G = A.color
              , k = A.intensity
              , Y = A.distance
              , K = A.shadow && A.shadow.map ? A.shadow.map.texture : null;
            if (A.isAmbientLight)
                u += G.r * k,
                d += G.g * k,
                p += G.b * k;
            else if (A.isLightProbe) {
                for (let X = 0; X < 9; X++)
                    i.probe[X].addScaledVector(A.sh.coefficients[X], k);
                C++
            } else if (A.isDirectionalLight) {
                const X = t.get(A);
                if (X.color.copy(A.color).multiplyScalar(A.intensity),
                A.castShadow) {
                    const Z = A.shadow
                      , z = e.get(A);
                    z.shadowIntensity = Z.intensity,
                    z.shadowBias = Z.bias,
                    z.shadowNormalBias = Z.normalBias,
                    z.shadowRadius = Z.radius,
                    z.shadowMapSize = Z.mapSize,
                    i.directionalShadow[m] = z,
                    i.directionalShadowMap[m] = K,
                    i.directionalShadowMatrix[m] = A.shadow.matrix,
                    T++
                }
                i.directional[m] = X,
                m++
            } else if (A.isSpotLight) {
                const X = t.get(A);
                X.position.setFromMatrixPosition(A.matrixWorld),
                X.color.copy(G).multiplyScalar(k),
                X.distance = Y,
                X.coneCos = Math.cos(A.angle),
                X.penumbraCos = Math.cos(A.angle * (1 - A.penumbra)),
                X.decay = A.decay,
                i.spot[b] = X;
                const Z = A.shadow;
                if (A.map && (i.spotLightMap[U] = A.map,
                U++,
                Z.updateMatrices(A),
                A.castShadow && D++),
                i.spotLightMatrix[b] = Z.matrix,
                A.castShadow) {
                    const z = e.get(A);
                    z.shadowIntensity = Z.intensity,
                    z.shadowBias = Z.bias,
                    z.shadowNormalBias = Z.normalBias,
                    z.shadowRadius = Z.radius,
                    z.shadowMapSize = Z.mapSize,
                    i.spotShadow[b] = z,
                    i.spotShadowMap[b] = K,
                    M++
                }
                b++
            } else if (A.isRectAreaLight) {
                const X = t.get(A);
                X.color.copy(G).multiplyScalar(k),
                X.halfWidth.set(A.width * .5, 0, 0),
                X.halfHeight.set(0, A.height * .5, 0),
                i.rectArea[f] = X,
                f++
            } else if (A.isPointLight) {
                const X = t.get(A);
                if (X.color.copy(A.color).multiplyScalar(A.intensity),
                X.distance = A.distance,
                X.decay = A.decay,
                A.castShadow) {
                    const Z = A.shadow
                      , z = e.get(A);
                    z.shadowIntensity = Z.intensity,
                    z.shadowBias = Z.bias,
                    z.shadowNormalBias = Z.normalBias,
                    z.shadowRadius = Z.radius,
                    z.shadowMapSize = Z.mapSize,
                    z.shadowCameraNear = Z.camera.near,
                    z.shadowCameraFar = Z.camera.far,
                    i.pointShadow[g] = z,
                    i.pointShadowMap[g] = K,
                    i.pointShadowMatrix[g] = A.shadow.matrix,
                    y++
                }
                i.point[g] = X,
                g++
            } else if (A.isHemisphereLight) {
                const X = t.get(A);
                X.skyColor.copy(A.color).multiplyScalar(k),
                X.groundColor.copy(A.groundColor).multiplyScalar(k),
                i.hemi[h] = X,
                h++
            }
        }
        f > 0 && (n.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = et.LTC_FLOAT_1,
        i.rectAreaLTC2 = et.LTC_FLOAT_2) : (i.rectAreaLTC1 = et.LTC_HALF_1,
        i.rectAreaLTC2 = et.LTC_HALF_2)),
        i.ambient[0] = u,
        i.ambient[1] = d,
        i.ambient[2] = p;
        const I = i.hash;
        (I.directionalLength !== m || I.pointLength !== g || I.spotLength !== b || I.rectAreaLength !== f || I.hemiLength !== h || I.numDirectionalShadows !== T || I.numPointShadows !== y || I.numSpotShadows !== M || I.numSpotMaps !== U || I.numLightProbes !== C) && (i.directional.length = m,
        i.spot.length = b,
        i.rectArea.length = f,
        i.point.length = g,
        i.hemi.length = h,
        i.directionalShadow.length = T,
        i.directionalShadowMap.length = T,
        i.pointShadow.length = y,
        i.pointShadowMap.length = y,
        i.spotShadow.length = M,
        i.spotShadowMap.length = M,
        i.directionalShadowMatrix.length = T,
        i.pointShadowMatrix.length = y,
        i.spotLightMatrix.length = M + U - D,
        i.spotLightMap.length = U,
        i.numSpotLightShadowsWithMaps = D,
        i.numLightProbes = C,
        I.directionalLength = m,
        I.pointLength = g,
        I.spotLength = b,
        I.rectAreaLength = f,
        I.hemiLength = h,
        I.numDirectionalShadows = T,
        I.numPointShadows = y,
        I.numSpotShadows = M,
        I.numSpotMaps = U,
        I.numLightProbes = C,
        i.version = Hv++)
    }
    function l(c, u) {
        let d = 0
          , p = 0
          , m = 0
          , g = 0
          , b = 0;
        const f = u.matrixWorldInverse;
        for (let h = 0, T = c.length; h < T; h++) {
            const y = c[h];
            if (y.isDirectionalLight) {
                const M = i.directional[d];
                M.direction.setFromMatrixPosition(y.matrixWorld),
                r.setFromMatrixPosition(y.target.matrixWorld),
                M.direction.sub(r),
                M.direction.transformDirection(f),
                d++
            } else if (y.isSpotLight) {
                const M = i.spot[m];
                M.position.setFromMatrixPosition(y.matrixWorld),
                M.position.applyMatrix4(f),
                M.direction.setFromMatrixPosition(y.matrixWorld),
                r.setFromMatrixPosition(y.target.matrixWorld),
                M.direction.sub(r),
                M.direction.transformDirection(f),
                m++
            } else if (y.isRectAreaLight) {
                const M = i.rectArea[g];
                M.position.setFromMatrixPosition(y.matrixWorld),
                M.position.applyMatrix4(f),
                o.identity(),
                s.copy(y.matrixWorld),
                s.premultiply(f),
                o.extractRotation(s),
                M.halfWidth.set(y.width * .5, 0, 0),
                M.halfHeight.set(0, y.height * .5, 0),
                M.halfWidth.applyMatrix4(o),
                M.halfHeight.applyMatrix4(o),
                g++
            } else if (y.isPointLight) {
                const M = i.point[p];
                M.position.setFromMatrixPosition(y.matrixWorld),
                M.position.applyMatrix4(f),
                p++
            } else if (y.isHemisphereLight) {
                const M = i.hemi[b];
                M.direction.setFromMatrixPosition(y.matrixWorld),
                M.direction.transformDirection(f),
                b++
            }
        }
    }
    return {
        setup: a,
        setupView: l,
        state: i
    }
}
function pc(n) {
    const t = new Wv(n)
      , e = []
      , i = [];
    function r(u) {
        c.camera = u,
        e.length = 0,
        i.length = 0
    }
    function s(u) {
        e.push(u)
    }
    function o(u) {
        i.push(u)
    }
    function a() {
        t.setup(e)
    }
    function l(u) {
        t.setupView(e, u)
    }
    const c = {
        lightsArray: e,
        shadowsArray: i,
        camera: null,
        lights: t,
        transmissionRenderTarget: {}
    };
    return {
        init: r,
        state: c,
        setupLights: a,
        setupLightsView: l,
        pushLight: s,
        pushShadow: o
    }
}
function Xv(n) {
    let t = new WeakMap;
    function e(r, s=0) {
        const o = t.get(r);
        let a;
        return o === void 0 ? (a = new pc(n),
        t.set(r, [a])) : s >= o.length ? (a = new pc(n),
        o.push(a)) : a = o[s],
        a
    }
    function i() {
        t = new WeakMap
    }
    return {
        get: e,
        dispose: i
    }
}
const qv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
  , jv = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Yv(n, t, e) {
    let i = new du;
    const r = new Ut
      , s = new Ut
      , o = new de
      , a = new dp({
        depthPacking: ud
    })
      , l = new pp
      , c = {}
      , u = e.maxTextureSize
      , d = {
        [Yn]: Ne,
        [Ne]: Yn,
        [ln]: ln
    }
      , p = new dn({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new Ut
            },
            radius: {
                value: 4
            }
        },
        vertexShader: qv,
        fragmentShader: jv
    })
      , m = p.clone();
    m.defines.HORIZONTAL_PASS = 1;
    const g = new xi;
    g.setAttribute("position", new hn(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    const b = new sn(g,p)
      , f = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = zc;
    let h = this.type;
    this.render = function(D, C, I) {
        if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || D.length === 0)
            return;
        const E = n.getRenderTarget()
          , x = n.getActiveCubeFace()
          , A = n.getActiveMipmapLevel()
          , G = n.state;
        G.setBlending(Xn),
        G.buffers.color.setClear(1, 1, 1, 1),
        G.buffers.depth.setTest(!0),
        G.setScissorTest(!1);
        const k = h !== wn && this.type === wn
          , Y = h === wn && this.type !== wn;
        for (let K = 0, X = D.length; K < X; K++) {
            const Z = D[K]
              , z = Z.shadow;
            if (z === void 0) {
                console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
                continue
            }
            if (z.autoUpdate === !1 && z.needsUpdate === !1)
                continue;
            r.copy(z.mapSize);
            const rt = z.getFrameExtents();
            if (r.multiply(rt),
            s.copy(z.mapSize),
            (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / rt.x),
            r.x = s.x * rt.x,
            z.mapSize.x = s.x),
            r.y > u && (s.y = Math.floor(u / rt.y),
            r.y = s.y * rt.y,
            z.mapSize.y = s.y)),
            z.map === null || k === !0 || Y === !0) {
                const gt = this.type !== wn ? {
                    minFilter: on,
                    magFilter: on
                } : {};
                z.map !== null && z.map.dispose(),
                z.map = new pi(r.x,r.y,gt),
                z.map.texture.name = Z.name + ".shadowMap",
                z.camera.updateProjectionMatrix()
            }
            n.setRenderTarget(z.map),
            n.clear();
            const ut = z.getViewportCount();
            for (let gt = 0; gt < ut; gt++) {
                const Nt = z.getViewport(gt);
                o.set(s.x * Nt.x, s.y * Nt.y, s.x * Nt.z, s.y * Nt.w),
                G.viewport(o),
                z.updateMatrices(Z, gt),
                i = z.getFrustum(),
                M(C, I, z.camera, Z, this.type)
            }
            z.isPointLightShadow !== !0 && this.type === wn && T(z, I),
            z.needsUpdate = !1
        }
        h = this.type,
        f.needsUpdate = !1,
        n.setRenderTarget(E, x, A)
    }
    ;
    function T(D, C) {
        const I = t.update(b);
        p.defines.VSM_SAMPLES !== D.blurSamples && (p.defines.VSM_SAMPLES = D.blurSamples,
        m.defines.VSM_SAMPLES = D.blurSamples,
        p.needsUpdate = !0,
        m.needsUpdate = !0),
        D.mapPass === null && (D.mapPass = new pi(r.x,r.y)),
        p.uniforms.shadow_pass.value = D.map.texture,
        p.uniforms.resolution.value = D.mapSize,
        p.uniforms.radius.value = D.radius,
        n.setRenderTarget(D.mapPass),
        n.clear(),
        n.renderBufferDirect(C, null, I, p, b, null),
        m.uniforms.shadow_pass.value = D.mapPass.texture,
        m.uniforms.resolution.value = D.mapSize,
        m.uniforms.radius.value = D.radius,
        n.setRenderTarget(D.map),
        n.clear(),
        n.renderBufferDirect(C, null, I, m, b, null)
    }
    function y(D, C, I, E) {
        let x = null;
        const A = I.isPointLight === !0 ? D.customDistanceMaterial : D.customDepthMaterial;
        if (A !== void 0)
            x = A;
        else if (x = I.isPointLight === !0 ? l : a,
        n.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
            const G = x.uuid
              , k = C.uuid;
            let Y = c[G];
            Y === void 0 && (Y = {},
            c[G] = Y);
            let K = Y[k];
            K === void 0 && (K = x.clone(),
            Y[k] = K,
            C.addEventListener("dispose", U)),
            x = K
        }
        if (x.visible = C.visible,
        x.wireframe = C.wireframe,
        E === wn ? x.side = C.shadowSide !== null ? C.shadowSide : C.side : x.side = C.shadowSide !== null ? C.shadowSide : d[C.side],
        x.alphaMap = C.alphaMap,
        x.alphaTest = C.alphaTest,
        x.map = C.map,
        x.clipShadows = C.clipShadows,
        x.clippingPlanes = C.clippingPlanes,
        x.clipIntersection = C.clipIntersection,
        x.displacementMap = C.displacementMap,
        x.displacementScale = C.displacementScale,
        x.displacementBias = C.displacementBias,
        x.wireframeLinewidth = C.wireframeLinewidth,
        x.linewidth = C.linewidth,
        I.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
            const G = n.properties.get(x);
            G.light = I
        }
        return x
    }
    function M(D, C, I, E, x) {
        if (D.visible === !1)
            return;
        if (D.layers.test(C.layers) && (D.isMesh || D.isLine || D.isPoints) && (D.castShadow || D.receiveShadow && x === wn) && (!D.frustumCulled || i.intersectsObject(D))) {
            D.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, D.matrixWorld);
            const k = t.update(D)
              , Y = D.material;
            if (Array.isArray(Y)) {
                const K = k.groups;
                for (let X = 0, Z = K.length; X < Z; X++) {
                    const z = K[X]
                      , rt = Y[z.materialIndex];
                    if (rt && rt.visible) {
                        const ut = y(D, rt, E, x);
                        D.onBeforeShadow(n, D, C, I, k, ut, z),
                        n.renderBufferDirect(I, null, k, ut, D, z),
                        D.onAfterShadow(n, D, C, I, k, ut, z)
                    }
                }
            } else if (Y.visible) {
                const K = y(D, Y, E, x);
                D.onBeforeShadow(n, D, C, I, k, K, null),
                n.renderBufferDirect(I, null, k, K, D, null),
                D.onAfterShadow(n, D, C, I, k, K, null)
            }
        }
        const G = D.children;
        for (let k = 0, Y = G.length; k < Y; k++)
            M(G[k], C, I, E, x)
    }
    function U(D) {
        D.target.removeEventListener("dispose", U);
        for (const I in c) {
            const E = c[I]
              , x = D.target.uuid;
            x in E && (E[x].dispose(),
            delete E[x])
        }
    }
}
const Kv = {
    [Ro]: Do,
    [Lo]: No,
    [Uo]: Fo,
    [$i]: Io,
    [Do]: Ro,
    [No]: Lo,
    [Fo]: Uo,
    [Io]: $i
};
function $v(n, t) {
    function e() {
        let P = !1;
        const nt = new de;
        let V = null;
        const j = new de(0,0,0,0);
        return {
            setMask: function(lt) {
                V !== lt && !P && (n.colorMask(lt, lt, lt, lt),
                V = lt)
            },
            setLocked: function(lt) {
                P = lt
            },
            setClear: function(lt, at, At, le, Me) {
                Me === !0 && (lt *= le,
                at *= le,
                At *= le),
                nt.set(lt, at, At, le),
                j.equals(nt) === !1 && (n.clearColor(lt, at, At, le),
                j.copy(nt))
            },
            reset: function() {
                P = !1,
                V = null,
                j.set(-1, 0, 0, 0)
            }
        }
    }
    function i() {
        let P = !1
          , nt = !1
          , V = null
          , j = null
          , lt = null;
        return {
            setReversed: function(at) {
                if (nt !== at) {
                    const At = t.get("EXT_clip_control");
                    nt ? At.clipControlEXT(At.LOWER_LEFT_EXT, At.ZERO_TO_ONE_EXT) : At.clipControlEXT(At.LOWER_LEFT_EXT, At.NEGATIVE_ONE_TO_ONE_EXT);
                    const le = lt;
                    lt = null,
                    this.setClear(le)
                }
                nt = at
            },
            getReversed: function() {
                return nt
            },
            setTest: function(at) {
                at ? st(n.DEPTH_TEST) : Mt(n.DEPTH_TEST)
            },
            setMask: function(at) {
                V !== at && !P && (n.depthMask(at),
                V = at)
            },
            setFunc: function(at) {
                if (nt && (at = Kv[at]),
                j !== at) {
                    switch (at) {
                    case Ro:
                        n.depthFunc(n.NEVER);
                        break;
                    case Do:
                        n.depthFunc(n.ALWAYS);
                        break;
                    case Lo:
                        n.depthFunc(n.LESS);
                        break;
                    case $i:
                        n.depthFunc(n.LEQUAL);
                        break;
                    case Uo:
                        n.depthFunc(n.EQUAL);
                        break;
                    case Io:
                        n.depthFunc(n.GEQUAL);
                        break;
                    case No:
                        n.depthFunc(n.GREATER);
                        break;
                    case Fo:
                        n.depthFunc(n.NOTEQUAL);
                        break;
                    default:
                        n.depthFunc(n.LEQUAL)
                    }
                    j = at
                }
            },
            setLocked: function(at) {
                P = at
            },
            setClear: function(at) {
                lt !== at && (nt && (at = 1 - at),
                n.clearDepth(at),
                lt = at)
            },
            reset: function() {
                P = !1,
                V = null,
                j = null,
                lt = null,
                nt = !1
            }
        }
    }
    function r() {
        let P = !1
          , nt = null
          , V = null
          , j = null
          , lt = null
          , at = null
          , At = null
          , le = null
          , Me = null;
        return {
            setTest: function(Zt) {
                P || (Zt ? st(n.STENCIL_TEST) : Mt(n.STENCIL_TEST))
            },
            setMask: function(Zt) {
                nt !== Zt && !P && (n.stencilMask(Zt),
                nt = Zt)
            },
            setFunc: function(Zt, Ze, mn) {
                (V !== Zt || j !== Ze || lt !== mn) && (n.stencilFunc(Zt, Ze, mn),
                V = Zt,
                j = Ze,
                lt = mn)
            },
            setOp: function(Zt, Ze, mn) {
                (at !== Zt || At !== Ze || le !== mn) && (n.stencilOp(Zt, Ze, mn),
                at = Zt,
                At = Ze,
                le = mn)
            },
            setLocked: function(Zt) {
                P = Zt
            },
            setClear: function(Zt) {
                Me !== Zt && (n.clearStencil(Zt),
                Me = Zt)
            },
            reset: function() {
                P = !1,
                nt = null,
                V = null,
                j = null,
                lt = null,
                at = null,
                At = null,
                le = null,
                Me = null
            }
        }
    }
    const s = new e
      , o = new i
      , a = new r
      , l = new WeakMap
      , c = new WeakMap;
    let u = {}
      , d = {}
      , p = new WeakMap
      , m = []
      , g = null
      , b = !1
      , f = null
      , h = null
      , T = null
      , y = null
      , M = null
      , U = null
      , D = null
      , C = new Gt(0,0,0)
      , I = 0
      , E = !1
      , x = null
      , A = null
      , G = null
      , k = null
      , Y = null;
    const K = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let X = !1
      , Z = 0;
    const z = n.getParameter(n.VERSION);
    z.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(z)[1]),
    X = Z >= 1) : z.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),
    X = Z >= 2);
    let rt = null
      , ut = {};
    const gt = n.getParameter(n.SCISSOR_BOX)
      , Nt = n.getParameter(n.VIEWPORT)
      , te = new de().fromArray(gt)
      , W = new de().fromArray(Nt);
    function tt(P, nt, V, j) {
        const lt = new Uint8Array(4)
          , at = n.createTexture();
        n.bindTexture(P, at),
        n.texParameteri(P, n.TEXTURE_MIN_FILTER, n.NEAREST),
        n.texParameteri(P, n.TEXTURE_MAG_FILTER, n.NEAREST);
        for (let At = 0; At < V; At++)
            P === n.TEXTURE_3D || P === n.TEXTURE_2D_ARRAY ? n.texImage3D(nt, 0, n.RGBA, 1, 1, j, 0, n.RGBA, n.UNSIGNED_BYTE, lt) : n.texImage2D(nt + At, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, lt);
        return at
    }
    const mt = {};
    mt[n.TEXTURE_2D] = tt(n.TEXTURE_2D, n.TEXTURE_2D, 1),
    mt[n.TEXTURE_CUBE_MAP] = tt(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
    mt[n.TEXTURE_2D_ARRAY] = tt(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1),
    mt[n.TEXTURE_3D] = tt(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1),
    s.setClear(0, 0, 0, 1),
    o.setClear(1),
    a.setClear(0),
    st(n.DEPTH_TEST),
    o.setFunc($i),
    Ot(!1),
    Bt(ml),
    st(n.CULL_FACE),
    S(Xn);
    function st(P) {
        u[P] !== !0 && (n.enable(P),
        u[P] = !0)
    }
    function Mt(P) {
        u[P] !== !1 && (n.disable(P),
        u[P] = !1)
    }
    function Tt(P, nt) {
        return d[P] !== nt ? (n.bindFramebuffer(P, nt),
        d[P] = nt,
        P === n.DRAW_FRAMEBUFFER && (d[n.FRAMEBUFFER] = nt),
        P === n.FRAMEBUFFER && (d[n.DRAW_FRAMEBUFFER] = nt),
        !0) : !1
    }
    function Ft(P, nt) {
        let V = m
          , j = !1;
        if (P) {
            V = p.get(nt),
            V === void 0 && (V = [],
            p.set(nt, V));
            const lt = P.textures;
            if (V.length !== lt.length || V[0] !== n.COLOR_ATTACHMENT0) {
                for (let at = 0, At = lt.length; at < At; at++)
                    V[at] = n.COLOR_ATTACHMENT0 + at;
                V.length = lt.length,
                j = !0
            }
        } else
            V[0] !== n.BACK && (V[0] = n.BACK,
            j = !0);
        j && n.drawBuffers(V)
    }
    function oe(P) {
        return g !== P ? (n.useProgram(P),
        g = P,
        !0) : !1
    }
    const Vt = {
        [oi]: n.FUNC_ADD,
        [Fh]: n.FUNC_SUBTRACT,
        [Oh]: n.FUNC_REVERSE_SUBTRACT
    };
    Vt[Bh] = n.MIN,
    Vt[kh] = n.MAX;
    const he = {
        [Vh]: n.ZERO,
        [zh]: n.ONE,
        [Hh]: n.SRC_COLOR,
        [Ao]: n.SRC_ALPHA,
        [Yh]: n.SRC_ALPHA_SATURATE,
        [qh]: n.DST_COLOR,
        [Wh]: n.DST_ALPHA,
        [Gh]: n.ONE_MINUS_SRC_COLOR,
        [Po]: n.ONE_MINUS_SRC_ALPHA,
        [jh]: n.ONE_MINUS_DST_COLOR,
        [Xh]: n.ONE_MINUS_DST_ALPHA,
        [Kh]: n.CONSTANT_COLOR,
        [$h]: n.ONE_MINUS_CONSTANT_COLOR,
        [Zh]: n.CONSTANT_ALPHA,
        [Jh]: n.ONE_MINUS_CONSTANT_ALPHA
    };
    function S(P, nt, V, j, lt, at, At, le, Me, Zt) {
        if (P === Xn) {
            b === !0 && (Mt(n.BLEND),
            b = !1);
            return
        }
        if (b === !1 && (st(n.BLEND),
        b = !0),
        P !== Nh) {
            if (P !== f || Zt !== E) {
                if ((h !== oi || M !== oi) && (n.blendEquation(n.FUNC_ADD),
                h = oi,
                M = oi),
                Zt)
                    switch (P) {
                    case Xi:
                        n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
                        break;
                    case _l:
                        n.blendFunc(n.ONE, n.ONE);
                        break;
                    case vl:
                        n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
                        break;
                    case gl:
                        n.blendFuncSeparate(n.ZERO, n.SRC_COLOR, n.ZERO, n.SRC_ALPHA);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", P);
                        break
                    }
                else
                    switch (P) {
                    case Xi:
                        n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
                        break;
                    case _l:
                        n.blendFunc(n.SRC_ALPHA, n.ONE);
                        break;
                    case vl:
                        n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
                        break;
                    case gl:
                        n.blendFunc(n.ZERO, n.SRC_COLOR);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", P);
                        break
                    }
                T = null,
                y = null,
                U = null,
                D = null,
                C.set(0, 0, 0),
                I = 0,
                f = P,
                E = Zt
            }
            return
        }
        lt = lt || nt,
        at = at || V,
        At = At || j,
        (nt !== h || lt !== M) && (n.blendEquationSeparate(Vt[nt], Vt[lt]),
        h = nt,
        M = lt),
        (V !== T || j !== y || at !== U || At !== D) && (n.blendFuncSeparate(he[V], he[j], he[at], he[At]),
        T = V,
        y = j,
        U = at,
        D = At),
        (le.equals(C) === !1 || Me !== I) && (n.blendColor(le.r, le.g, le.b, Me),
        C.copy(le),
        I = Me),
        f = P,
        E = !1
    }
    function We(P, nt) {
        P.side === ln ? Mt(n.CULL_FACE) : st(n.CULL_FACE);
        let V = P.side === Ne;
        nt && (V = !V),
        Ot(V),
        P.blending === Xi && P.transparent === !1 ? S(Xn) : S(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha),
        o.setFunc(P.depthFunc),
        o.setTest(P.depthTest),
        o.setMask(P.depthWrite),
        s.setMask(P.colorWrite);
        const j = P.stencilWrite;
        a.setTest(j),
        j && (a.setMask(P.stencilWriteMask),
        a.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask),
        a.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)),
        ie(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits),
        P.alphaToCoverage === !0 ? st(n.SAMPLE_ALPHA_TO_COVERAGE) : Mt(n.SAMPLE_ALPHA_TO_COVERAGE)
    }
    function Ot(P) {
        x !== P && (P ? n.frontFace(n.CW) : n.frontFace(n.CCW),
        x = P)
    }
    function Bt(P) {
        P !== Lh ? (st(n.CULL_FACE),
        P !== A && (P === ml ? n.cullFace(n.BACK) : P === Uh ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : Mt(n.CULL_FACE),
        A = P
    }
    function xt(P) {
        P !== G && (X && n.lineWidth(P),
        G = P)
    }
    function ie(P, nt, V) {
        P ? (st(n.POLYGON_OFFSET_FILL),
        (k !== nt || Y !== V) && (n.polygonOffset(nt, V),
        k = nt,
        Y = V)) : Mt(n.POLYGON_OFFSET_FILL)
    }
    function vt(P) {
        P ? st(n.SCISSOR_TEST) : Mt(n.SCISSOR_TEST)
    }
    function w(P) {
        P === void 0 && (P = n.TEXTURE0 + K - 1),
        rt !== P && (n.activeTexture(P),
        rt = P)
    }
    function _(P, nt, V) {
        V === void 0 && (rt === null ? V = n.TEXTURE0 + K - 1 : V = rt);
        let j = ut[V];
        j === void 0 && (j = {
            type: void 0,
            texture: void 0
        },
        ut[V] = j),
        (j.type !== P || j.texture !== nt) && (rt !== V && (n.activeTexture(V),
        rt = V),
        n.bindTexture(P, nt || mt[P]),
        j.type = P,
        j.texture = nt)
    }
    function N() {
        const P = ut[rt];
        P !== void 0 && P.type !== void 0 && (n.bindTexture(P.type, null),
        P.type = void 0,
        P.texture = void 0)
    }
    function q() {
        try {
            n.compressedTexImage2D.apply(n, arguments)
        } catch (P) {
            console.error("THREE.WebGLState:", P)
        }
    }
    function $() {
        try {
            n.compressedTexImage3D.apply(n, arguments)
        } catch (P) {
            console.error("THREE.WebGLState:", P)
        }
    }
    function H() {
        try {
            n.texSubImage2D.apply(n, arguments)
        } catch (P) {
            console.error("THREE.WebGLState:", P)
        }
    }
    function _t() {
        try {
            n.texSubImage3D.apply(n, arguments)
        } catch (P) {
            console.error("THREE.WebGLState:", P)
        }
    }
    function ot() {
        try {
            n.compressedTexSubImage2D.apply(n, arguments)
        } catch (P) {
            console.error("THREE.WebGLState:", P)
        }
    }
    function ht() {
        try {
            n.compressedTexSubImage3D.apply(n, arguments)
        } catch (P) {
            console.error("THREE.WebGLState:", P)
        }
    }
    function zt() {
        try {
            n.texStorage2D.apply(n, arguments)
        } catch (P) {
            console.error("THREE.WebGLState:", P)
        }
    }
    function Q() {
        try {
            n.texStorage3D.apply(n, arguments)
        } catch (P) {
            console.error("THREE.WebGLState:", P)
        }
    }
    function dt() {
        try {
            n.texImage2D.apply(n, arguments)
        } catch (P) {
            console.error("THREE.WebGLState:", P)
        }
    }
    function wt() {
        try {
            n.texImage3D.apply(n, arguments)
        } catch (P) {
            console.error("THREE.WebGLState:", P)
        }
    }
    function yt(P) {
        te.equals(P) === !1 && (n.scissor(P.x, P.y, P.z, P.w),
        te.copy(P))
    }
    function pt(P) {
        W.equals(P) === !1 && (n.viewport(P.x, P.y, P.z, P.w),
        W.copy(P))
    }
    function kt(P, nt) {
        let V = c.get(nt);
        V === void 0 && (V = new WeakMap,
        c.set(nt, V));
        let j = V.get(P);
        j === void 0 && (j = n.getUniformBlockIndex(nt, P.name),
        V.set(P, j))
    }
    function Rt(P, nt) {
        const j = c.get(nt).get(P);
        l.get(nt) !== j && (n.uniformBlockBinding(nt, j, P.__bindingPointIndex),
        l.set(nt, j))
    }
    function ee() {
        n.disable(n.BLEND),
        n.disable(n.CULL_FACE),
        n.disable(n.DEPTH_TEST),
        n.disable(n.POLYGON_OFFSET_FILL),
        n.disable(n.SCISSOR_TEST),
        n.disable(n.STENCIL_TEST),
        n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),
        n.blendEquation(n.FUNC_ADD),
        n.blendFunc(n.ONE, n.ZERO),
        n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO),
        n.blendColor(0, 0, 0, 0),
        n.colorMask(!0, !0, !0, !0),
        n.clearColor(0, 0, 0, 0),
        n.depthMask(!0),
        n.depthFunc(n.LESS),
        o.setReversed(!1),
        n.clearDepth(1),
        n.stencilMask(4294967295),
        n.stencilFunc(n.ALWAYS, 0, 4294967295),
        n.stencilOp(n.KEEP, n.KEEP, n.KEEP),
        n.clearStencil(0),
        n.cullFace(n.BACK),
        n.frontFace(n.CCW),
        n.polygonOffset(0, 0),
        n.activeTexture(n.TEXTURE0),
        n.bindFramebuffer(n.FRAMEBUFFER, null),
        n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
        n.bindFramebuffer(n.READ_FRAMEBUFFER, null),
        n.useProgram(null),
        n.lineWidth(1),
        n.scissor(0, 0, n.canvas.width, n.canvas.height),
        n.viewport(0, 0, n.canvas.width, n.canvas.height),
        u = {},
        rt = null,
        ut = {},
        d = {},
        p = new WeakMap,
        m = [],
        g = null,
        b = !1,
        f = null,
        h = null,
        T = null,
        y = null,
        M = null,
        U = null,
        D = null,
        C = new Gt(0,0,0),
        I = 0,
        E = !1,
        x = null,
        A = null,
        G = null,
        k = null,
        Y = null,
        te.set(0, 0, n.canvas.width, n.canvas.height),
        W.set(0, 0, n.canvas.width, n.canvas.height),
        s.reset(),
        o.reset(),
        a.reset()
    }
    return {
        buffers: {
            color: s,
            depth: o,
            stencil: a
        },
        enable: st,
        disable: Mt,
        bindFramebuffer: Tt,
        drawBuffers: Ft,
        useProgram: oe,
        setBlending: S,
        setMaterial: We,
        setFlipSided: Ot,
        setCullFace: Bt,
        setLineWidth: xt,
        setPolygonOffset: ie,
        setScissorTest: vt,
        activeTexture: w,
        bindTexture: _,
        unbindTexture: N,
        compressedTexImage2D: q,
        compressedTexImage3D: $,
        texImage2D: dt,
        texImage3D: wt,
        updateUBOMapping: kt,
        uniformBlockBinding: Rt,
        texStorage2D: zt,
        texStorage3D: Q,
        texSubImage2D: H,
        texSubImage3D: _t,
        compressedTexSubImage2D: ot,
        compressedTexSubImage3D: ht,
        scissor: yt,
        viewport: pt,
        reset: ee
    }
}
function Zv(n, t, e, i, r, s, o) {
    const a = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null
      , l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent)
      , c = new Ut
      , u = new WeakMap;
    let d;
    const p = new WeakMap;
    let m = !1;
    try {
        m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1,1).getContext("2d") !== null
    } catch {}
    function g(w, _) {
        return m ? new OffscreenCanvas(w,_) : Tr("canvas")
    }
    function b(w, _, N) {
        let q = 1;
        const $ = vt(w);
        if (($.width > N || $.height > N) && (q = N / Math.max($.width, $.height)),
        q < 1)
            if (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w instanceof ImageBitmap || typeof VideoFrame < "u" && w instanceof VideoFrame) {
                const H = Math.floor(q * $.width)
                  , _t = Math.floor(q * $.height);
                d === void 0 && (d = g(H, _t));
                const ot = _ ? g(H, _t) : d;
                return ot.width = H,
                ot.height = _t,
                ot.getContext("2d").drawImage(w, 0, 0, H, _t),
                console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + H + "x" + _t + ")."),
                ot
            } else
                return "data"in w && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."),
                w;
        return w
    }
    function f(w) {
        return w.generateMipmaps
    }
    function h(w) {
        n.generateMipmap(w)
    }
    function T(w) {
        return w.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : w.isWebGL3DRenderTarget ? n.TEXTURE_3D : w.isWebGLArrayRenderTarget || w.isCompressedArrayTexture ? n.TEXTURE_2D_ARRAY : n.TEXTURE_2D
    }
    function y(w, _, N, q, $=!1) {
        if (w !== null) {
            if (n[w] !== void 0)
                return n[w];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'")
        }
        let H = _;
        if (_ === n.RED && (N === n.FLOAT && (H = n.R32F),
        N === n.HALF_FLOAT && (H = n.R16F),
        N === n.UNSIGNED_BYTE && (H = n.R8)),
        _ === n.RED_INTEGER && (N === n.UNSIGNED_BYTE && (H = n.R8UI),
        N === n.UNSIGNED_SHORT && (H = n.R16UI),
        N === n.UNSIGNED_INT && (H = n.R32UI),
        N === n.BYTE && (H = n.R8I),
        N === n.SHORT && (H = n.R16I),
        N === n.INT && (H = n.R32I)),
        _ === n.RG && (N === n.FLOAT && (H = n.RG32F),
        N === n.HALF_FLOAT && (H = n.RG16F),
        N === n.UNSIGNED_BYTE && (H = n.RG8)),
        _ === n.RG_INTEGER && (N === n.UNSIGNED_BYTE && (H = n.RG8UI),
        N === n.UNSIGNED_SHORT && (H = n.RG16UI),
        N === n.UNSIGNED_INT && (H = n.RG32UI),
        N === n.BYTE && (H = n.RG8I),
        N === n.SHORT && (H = n.RG16I),
        N === n.INT && (H = n.RG32I)),
        _ === n.RGB_INTEGER && (N === n.UNSIGNED_BYTE && (H = n.RGB8UI),
        N === n.UNSIGNED_SHORT && (H = n.RGB16UI),
        N === n.UNSIGNED_INT && (H = n.RGB32UI),
        N === n.BYTE && (H = n.RGB8I),
        N === n.SHORT && (H = n.RGB16I),
        N === n.INT && (H = n.RGB32I)),
        _ === n.RGBA_INTEGER && (N === n.UNSIGNED_BYTE && (H = n.RGBA8UI),
        N === n.UNSIGNED_SHORT && (H = n.RGBA16UI),
        N === n.UNSIGNED_INT && (H = n.RGBA32UI),
        N === n.BYTE && (H = n.RGBA8I),
        N === n.SHORT && (H = n.RGBA16I),
        N === n.INT && (H = n.RGBA32I)),
        _ === n.RGB && N === n.UNSIGNED_INT_5_9_9_9_REV && (H = n.RGB9_E5),
        _ === n.RGBA) {
            const _t = $ ? Cs : qt.getTransfer(q);
            N === n.FLOAT && (H = n.RGBA32F),
            N === n.HALF_FLOAT && (H = n.RGBA16F),
            N === n.UNSIGNED_BYTE && (H = _t === Jt ? n.SRGB8_ALPHA8 : n.RGBA8),
            N === n.UNSIGNED_SHORT_4_4_4_4 && (H = n.RGBA4),
            N === n.UNSIGNED_SHORT_5_5_5_1 && (H = n.RGB5_A1)
        }
        return (H === n.R16F || H === n.R32F || H === n.RG16F || H === n.RG32F || H === n.RGBA16F || H === n.RGBA32F) && t.get("EXT_color_buffer_float"),
        H
    }
    function M(w, _) {
        let N;
        return w ? _ === null || _ === di || _ === Qi ? N = n.DEPTH24_STENCIL8 : _ === Mn ? N = n.DEPTH32F_STENCIL8 : _ === yr && (N = n.DEPTH24_STENCIL8,
        console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === di || _ === Qi ? N = n.DEPTH_COMPONENT24 : _ === Mn ? N = n.DEPTH_COMPONENT32F : _ === yr && (N = n.DEPTH_COMPONENT16),
        N
    }
    function U(w, _) {
        return f(w) === !0 || w.isFramebufferTexture && w.minFilter !== on && w.minFilter !== cn ? Math.log2(Math.max(_.width, _.height)) + 1 : w.mipmaps !== void 0 && w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? _.mipmaps.length : 1
    }
    function D(w) {
        const _ = w.target;
        _.removeEventListener("dispose", D),
        I(_),
        _.isVideoTexture && u.delete(_)
    }
    function C(w) {
        const _ = w.target;
        _.removeEventListener("dispose", C),
        x(_)
    }
    function I(w) {
        const _ = i.get(w);
        if (_.__webglInit === void 0)
            return;
        const N = w.source
          , q = p.get(N);
        if (q) {
            const $ = q[_.__cacheKey];
            $.usedTimes--,
            $.usedTimes === 0 && E(w),
            Object.keys(q).length === 0 && p.delete(N)
        }
        i.remove(w)
    }
    function E(w) {
        const _ = i.get(w);
        n.deleteTexture(_.__webglTexture);
        const N = w.source
          , q = p.get(N);
        delete q[_.__cacheKey],
        o.memory.textures--
    }
    function x(w) {
        const _ = i.get(w);
        if (w.depthTexture && (w.depthTexture.dispose(),
        i.remove(w.depthTexture)),
        w.isWebGLCubeRenderTarget)
            for (let q = 0; q < 6; q++) {
                if (Array.isArray(_.__webglFramebuffer[q]))
                    for (let $ = 0; $ < _.__webglFramebuffer[q].length; $++)
                        n.deleteFramebuffer(_.__webglFramebuffer[q][$]);
                else
                    n.deleteFramebuffer(_.__webglFramebuffer[q]);
                _.__webglDepthbuffer && n.deleteRenderbuffer(_.__webglDepthbuffer[q])
            }
        else {
            if (Array.isArray(_.__webglFramebuffer))
                for (let q = 0; q < _.__webglFramebuffer.length; q++)
                    n.deleteFramebuffer(_.__webglFramebuffer[q]);
            else
                n.deleteFramebuffer(_.__webglFramebuffer);
            if (_.__webglDepthbuffer && n.deleteRenderbuffer(_.__webglDepthbuffer),
            _.__webglMultisampledFramebuffer && n.deleteFramebuffer(_.__webglMultisampledFramebuffer),
            _.__webglColorRenderbuffer)
                for (let q = 0; q < _.__webglColorRenderbuffer.length; q++)
                    _.__webglColorRenderbuffer[q] && n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);
            _.__webglDepthRenderbuffer && n.deleteRenderbuffer(_.__webglDepthRenderbuffer)
        }
        const N = w.textures;
        for (let q = 0, $ = N.length; q < $; q++) {
            const H = i.get(N[q]);
            H.__webglTexture && (n.deleteTexture(H.__webglTexture),
            o.memory.textures--),
            i.remove(N[q])
        }
        i.remove(w)
    }
    let A = 0;
    function G() {
        A = 0
    }
    function k() {
        const w = A;
        return w >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + w + " texture units while this GPU supports only " + r.maxTextures),
        A += 1,
        w
    }
    function Y(w) {
        const _ = [];
        return _.push(w.wrapS),
        _.push(w.wrapT),
        _.push(w.wrapR || 0),
        _.push(w.magFilter),
        _.push(w.minFilter),
        _.push(w.anisotropy),
        _.push(w.internalFormat),
        _.push(w.format),
        _.push(w.type),
        _.push(w.generateMipmaps),
        _.push(w.premultiplyAlpha),
        _.push(w.flipY),
        _.push(w.unpackAlignment),
        _.push(w.colorSpace),
        _.join()
    }
    function K(w, _) {
        const N = i.get(w);
        if (w.isVideoTexture && xt(w),
        w.isRenderTargetTexture === !1 && w.version > 0 && N.__version !== w.version) {
            const q = w.image;
            if (q === null)
                console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else if (q.complete === !1)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                W(N, w, _);
                return
            }
        }
        e.bindTexture(n.TEXTURE_2D, N.__webglTexture, n.TEXTURE0 + _)
    }
    function X(w, _) {
        const N = i.get(w);
        if (w.version > 0 && N.__version !== w.version) {
            W(N, w, _);
            return
        }
        e.bindTexture(n.TEXTURE_2D_ARRAY, N.__webglTexture, n.TEXTURE0 + _)
    }
    function Z(w, _) {
        const N = i.get(w);
        if (w.version > 0 && N.__version !== w.version) {
            W(N, w, _);
            return
        }
        e.bindTexture(n.TEXTURE_3D, N.__webglTexture, n.TEXTURE0 + _)
    }
    function z(w, _) {
        const N = i.get(w);
        if (w.version > 0 && N.__version !== w.version) {
            tt(N, w, _);
            return
        }
        e.bindTexture(n.TEXTURE_CUBE_MAP, N.__webglTexture, n.TEXTURE0 + _)
    }
    const rt = {
        [ko]: n.REPEAT,
        [li]: n.CLAMP_TO_EDGE,
        [Vo]: n.MIRRORED_REPEAT
    }
      , ut = {
        [on]: n.NEAREST,
        [ld]: n.NEAREST_MIPMAP_NEAREST,
        [Kr]: n.NEAREST_MIPMAP_LINEAR,
        [cn]: n.LINEAR,
        [Ws]: n.LINEAR_MIPMAP_NEAREST,
        [ci]: n.LINEAR_MIPMAP_LINEAR
    }
      , gt = {
        [pd]: n.NEVER,
        [xd]: n.ALWAYS,
        [fd]: n.LESS,
        [tu]: n.LEQUAL,
        [md]: n.EQUAL,
        [gd]: n.GEQUAL,
        [_d]: n.GREATER,
        [vd]: n.NOTEQUAL
    };
    function Nt(w, _) {
        if (_.type === Mn && t.has("OES_texture_float_linear") === !1 && (_.magFilter === cn || _.magFilter === Ws || _.magFilter === Kr || _.magFilter === ci || _.minFilter === cn || _.minFilter === Ws || _.minFilter === Kr || _.minFilter === ci) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),
        n.texParameteri(w, n.TEXTURE_WRAP_S, rt[_.wrapS]),
        n.texParameteri(w, n.TEXTURE_WRAP_T, rt[_.wrapT]),
        (w === n.TEXTURE_3D || w === n.TEXTURE_2D_ARRAY) && n.texParameteri(w, n.TEXTURE_WRAP_R, rt[_.wrapR]),
        n.texParameteri(w, n.TEXTURE_MAG_FILTER, ut[_.magFilter]),
        n.texParameteri(w, n.TEXTURE_MIN_FILTER, ut[_.minFilter]),
        _.compareFunction && (n.texParameteri(w, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE),
        n.texParameteri(w, n.TEXTURE_COMPARE_FUNC, gt[_.compareFunction])),
        t.has("EXT_texture_filter_anisotropic") === !0) {
            if (_.magFilter === on || _.minFilter !== Kr && _.minFilter !== ci || _.type === Mn && t.has("OES_texture_float_linear") === !1)
                return;
            if (_.anisotropy > 1 || i.get(_).__currentAnisotropy) {
                const N = t.get("EXT_texture_filter_anisotropic");
                n.texParameterf(w, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, r.getMaxAnisotropy())),
                i.get(_).__currentAnisotropy = _.anisotropy
            }
        }
    }
    function te(w, _) {
        let N = !1;
        w.__webglInit === void 0 && (w.__webglInit = !0,
        _.addEventListener("dispose", D));
        const q = _.source;
        let $ = p.get(q);
        $ === void 0 && ($ = {},
        p.set(q, $));
        const H = Y(_);
        if (H !== w.__cacheKey) {
            $[H] === void 0 && ($[H] = {
                texture: n.createTexture(),
                usedTimes: 0
            },
            o.memory.textures++,
            N = !0),
            $[H].usedTimes++;
            const _t = $[w.__cacheKey];
            _t !== void 0 && ($[w.__cacheKey].usedTimes--,
            _t.usedTimes === 0 && E(_)),
            w.__cacheKey = H,
            w.__webglTexture = $[H].texture
        }
        return N
    }
    function W(w, _, N) {
        let q = n.TEXTURE_2D;
        (_.isDataArrayTexture || _.isCompressedArrayTexture) && (q = n.TEXTURE_2D_ARRAY),
        _.isData3DTexture && (q = n.TEXTURE_3D);
        const $ = te(w, _)
          , H = _.source;
        e.bindTexture(q, w.__webglTexture, n.TEXTURE0 + N);
        const _t = i.get(H);
        if (H.version !== _t.__version || $ === !0) {
            e.activeTexture(n.TEXTURE0 + N);
            const ot = qt.getPrimaries(qt.workingColorSpace)
              , ht = _.colorSpace === Gn ? null : qt.getPrimaries(_.colorSpace)
              , zt = _.colorSpace === Gn || ot === ht ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
            n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, _.flipY),
            n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
            n.pixelStorei(n.UNPACK_ALIGNMENT, _.unpackAlignment),
            n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, zt);
            let Q = b(_.image, !1, r.maxTextureSize);
            Q = ie(_, Q);
            const dt = s.convert(_.format, _.colorSpace)
              , wt = s.convert(_.type);
            let yt = y(_.internalFormat, dt, wt, _.colorSpace, _.isVideoTexture);
            Nt(q, _);
            let pt;
            const kt = _.mipmaps
              , Rt = _.isVideoTexture !== !0
              , ee = _t.__version === void 0 || $ === !0
              , P = H.dataReady
              , nt = U(_, Q);
            if (_.isDepthTexture)
                yt = M(_.format === tr, _.type),
                ee && (Rt ? e.texStorage2D(n.TEXTURE_2D, 1, yt, Q.width, Q.height) : e.texImage2D(n.TEXTURE_2D, 0, yt, Q.width, Q.height, 0, dt, wt, null));
            else if (_.isDataTexture)
                if (kt.length > 0) {
                    Rt && ee && e.texStorage2D(n.TEXTURE_2D, nt, yt, kt[0].width, kt[0].height);
                    for (let V = 0, j = kt.length; V < j; V++)
                        pt = kt[V],
                        Rt ? P && e.texSubImage2D(n.TEXTURE_2D, V, 0, 0, pt.width, pt.height, dt, wt, pt.data) : e.texImage2D(n.TEXTURE_2D, V, yt, pt.width, pt.height, 0, dt, wt, pt.data);
                    _.generateMipmaps = !1
                } else
                    Rt ? (ee && e.texStorage2D(n.TEXTURE_2D, nt, yt, Q.width, Q.height),
                    P && e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, Q.width, Q.height, dt, wt, Q.data)) : e.texImage2D(n.TEXTURE_2D, 0, yt, Q.width, Q.height, 0, dt, wt, Q.data);
            else if (_.isCompressedTexture)
                if (_.isCompressedArrayTexture) {
                    Rt && ee && e.texStorage3D(n.TEXTURE_2D_ARRAY, nt, yt, kt[0].width, kt[0].height, Q.depth);
                    for (let V = 0, j = kt.length; V < j; V++)
                        if (pt = kt[V],
                        _.format !== rn)
                            if (dt !== null)
                                if (Rt) {
                                    if (P)
                                        if (_.layerUpdates.size > 0) {
                                            const lt = Gl(pt.width, pt.height, _.format, _.type);
                                            for (const at of _.layerUpdates) {
                                                const At = pt.data.subarray(at * lt / pt.data.BYTES_PER_ELEMENT, (at + 1) * lt / pt.data.BYTES_PER_ELEMENT);
                                                e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, V, 0, 0, at, pt.width, pt.height, 1, dt, At)
                                            }
                                            _.clearLayerUpdates()
                                        } else
                                            e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, V, 0, 0, 0, pt.width, pt.height, Q.depth, dt, pt.data)
                                } else
                                    e.compressedTexImage3D(n.TEXTURE_2D_ARRAY, V, yt, pt.width, pt.height, Q.depth, 0, pt.data, 0, 0);
                            else
                                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
                        else
                            Rt ? P && e.texSubImage3D(n.TEXTURE_2D_ARRAY, V, 0, 0, 0, pt.width, pt.height, Q.depth, dt, wt, pt.data) : e.texImage3D(n.TEXTURE_2D_ARRAY, V, yt, pt.width, pt.height, Q.depth, 0, dt, wt, pt.data)
                } else {
                    Rt && ee && e.texStorage2D(n.TEXTURE_2D, nt, yt, kt[0].width, kt[0].height);
                    for (let V = 0, j = kt.length; V < j; V++)
                        pt = kt[V],
                        _.format !== rn ? dt !== null ? Rt ? P && e.compressedTexSubImage2D(n.TEXTURE_2D, V, 0, 0, pt.width, pt.height, dt, pt.data) : e.compressedTexImage2D(n.TEXTURE_2D, V, yt, pt.width, pt.height, 0, pt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Rt ? P && e.texSubImage2D(n.TEXTURE_2D, V, 0, 0, pt.width, pt.height, dt, wt, pt.data) : e.texImage2D(n.TEXTURE_2D, V, yt, pt.width, pt.height, 0, dt, wt, pt.data)
                }
            else if (_.isDataArrayTexture)
                if (Rt) {
                    if (ee && e.texStorage3D(n.TEXTURE_2D_ARRAY, nt, yt, Q.width, Q.height, Q.depth),
                    P)
                        if (_.layerUpdates.size > 0) {
                            const V = Gl(Q.width, Q.height, _.format, _.type);
                            for (const j of _.layerUpdates) {
                                const lt = Q.data.subarray(j * V / Q.data.BYTES_PER_ELEMENT, (j + 1) * V / Q.data.BYTES_PER_ELEMENT);
                                e.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, j, Q.width, Q.height, 1, dt, wt, lt)
                            }
                            _.clearLayerUpdates()
                        } else
                            e.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, dt, wt, Q.data)
                } else
                    e.texImage3D(n.TEXTURE_2D_ARRAY, 0, yt, Q.width, Q.height, Q.depth, 0, dt, wt, Q.data);
            else if (_.isData3DTexture)
                Rt ? (ee && e.texStorage3D(n.TEXTURE_3D, nt, yt, Q.width, Q.height, Q.depth),
                P && e.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, dt, wt, Q.data)) : e.texImage3D(n.TEXTURE_3D, 0, yt, Q.width, Q.height, Q.depth, 0, dt, wt, Q.data);
            else if (_.isFramebufferTexture) {
                if (ee)
                    if (Rt)
                        e.texStorage2D(n.TEXTURE_2D, nt, yt, Q.width, Q.height);
                    else {
                        let V = Q.width
                          , j = Q.height;
                        for (let lt = 0; lt < nt; lt++)
                            e.texImage2D(n.TEXTURE_2D, lt, yt, V, j, 0, dt, wt, null),
                            V >>= 1,
                            j >>= 1
                    }
            } else if (kt.length > 0) {
                if (Rt && ee) {
                    const V = vt(kt[0]);
                    e.texStorage2D(n.TEXTURE_2D, nt, yt, V.width, V.height)
                }
                for (let V = 0, j = kt.length; V < j; V++)
                    pt = kt[V],
                    Rt ? P && e.texSubImage2D(n.TEXTURE_2D, V, 0, 0, dt, wt, pt) : e.texImage2D(n.TEXTURE_2D, V, yt, dt, wt, pt);
                _.generateMipmaps = !1
            } else if (Rt) {
                if (ee) {
                    const V = vt(Q);
                    e.texStorage2D(n.TEXTURE_2D, nt, yt, V.width, V.height)
                }
                P && e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, dt, wt, Q)
            } else
                e.texImage2D(n.TEXTURE_2D, 0, yt, dt, wt, Q);
            f(_) && h(q),
            _t.__version = H.version,
            _.onUpdate && _.onUpdate(_)
        }
        w.__version = _.version
    }
    function tt(w, _, N) {
        if (_.image.length !== 6)
            return;
        const q = te(w, _)
          , $ = _.source;
        e.bindTexture(n.TEXTURE_CUBE_MAP, w.__webglTexture, n.TEXTURE0 + N);
        const H = i.get($);
        if ($.version !== H.__version || q === !0) {
            e.activeTexture(n.TEXTURE0 + N);
            const _t = qt.getPrimaries(qt.workingColorSpace)
              , ot = _.colorSpace === Gn ? null : qt.getPrimaries(_.colorSpace)
              , ht = _.colorSpace === Gn || _t === ot ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
            n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, _.flipY),
            n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
            n.pixelStorei(n.UNPACK_ALIGNMENT, _.unpackAlignment),
            n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, ht);
            const zt = _.isCompressedTexture || _.image[0].isCompressedTexture
              , Q = _.image[0] && _.image[0].isDataTexture
              , dt = [];
            for (let j = 0; j < 6; j++)
                !zt && !Q ? dt[j] = b(_.image[j], !0, r.maxCubemapSize) : dt[j] = Q ? _.image[j].image : _.image[j],
                dt[j] = ie(_, dt[j]);
            const wt = dt[0]
              , yt = s.convert(_.format, _.colorSpace)
              , pt = s.convert(_.type)
              , kt = y(_.internalFormat, yt, pt, _.colorSpace)
              , Rt = _.isVideoTexture !== !0
              , ee = H.__version === void 0 || q === !0
              , P = $.dataReady;
            let nt = U(_, wt);
            Nt(n.TEXTURE_CUBE_MAP, _);
            let V;
            if (zt) {
                Rt && ee && e.texStorage2D(n.TEXTURE_CUBE_MAP, nt, kt, wt.width, wt.height);
                for (let j = 0; j < 6; j++) {
                    V = dt[j].mipmaps;
                    for (let lt = 0; lt < V.length; lt++) {
                        const at = V[lt];
                        _.format !== rn ? yt !== null ? Rt ? P && e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, lt, 0, 0, at.width, at.height, yt, at.data) : e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, lt, kt, at.width, at.height, 0, at.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Rt ? P && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, lt, 0, 0, at.width, at.height, yt, pt, at.data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, lt, kt, at.width, at.height, 0, yt, pt, at.data)
                    }
                }
            } else {
                if (V = _.mipmaps,
                Rt && ee) {
                    V.length > 0 && nt++;
                    const j = vt(dt[0]);
                    e.texStorage2D(n.TEXTURE_CUBE_MAP, nt, kt, j.width, j.height)
                }
                for (let j = 0; j < 6; j++)
                    if (Q) {
                        Rt ? P && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, dt[j].width, dt[j].height, yt, pt, dt[j].data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, kt, dt[j].width, dt[j].height, 0, yt, pt, dt[j].data);
                        for (let lt = 0; lt < V.length; lt++) {
                            const At = V[lt].image[j].image;
                            Rt ? P && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, lt + 1, 0, 0, At.width, At.height, yt, pt, At.data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, lt + 1, kt, At.width, At.height, 0, yt, pt, At.data)
                        }
                    } else {
                        Rt ? P && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, yt, pt, dt[j]) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, kt, yt, pt, dt[j]);
                        for (let lt = 0; lt < V.length; lt++) {
                            const at = V[lt];
                            Rt ? P && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, lt + 1, 0, 0, yt, pt, at.image[j]) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + j, lt + 1, kt, yt, pt, at.image[j])
                        }
                    }
            }
            f(_) && h(n.TEXTURE_CUBE_MAP),
            H.__version = $.version,
            _.onUpdate && _.onUpdate(_)
        }
        w.__version = _.version
    }
    function mt(w, _, N, q, $, H) {
        const _t = s.convert(N.format, N.colorSpace)
          , ot = s.convert(N.type)
          , ht = y(N.internalFormat, _t, ot, N.colorSpace)
          , zt = i.get(_)
          , Q = i.get(N);
        if (Q.__renderTarget = _,
        !zt.__hasExternalTextures) {
            const dt = Math.max(1, _.width >> H)
              , wt = Math.max(1, _.height >> H);
            $ === n.TEXTURE_3D || $ === n.TEXTURE_2D_ARRAY ? e.texImage3D($, H, ht, dt, wt, _.depth, 0, _t, ot, null) : e.texImage2D($, H, ht, dt, wt, 0, _t, ot, null)
        }
        e.bindFramebuffer(n.FRAMEBUFFER, w),
        Bt(_) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, q, $, Q.__webglTexture, 0, Ot(_)) : ($ === n.TEXTURE_2D || $ >= n.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, q, $, Q.__webglTexture, H),
        e.bindFramebuffer(n.FRAMEBUFFER, null)
    }
    function st(w, _, N) {
        if (n.bindRenderbuffer(n.RENDERBUFFER, w),
        _.depthBuffer) {
            const q = _.depthTexture
              , $ = q && q.isDepthTexture ? q.type : null
              , H = M(_.stencilBuffer, $)
              , _t = _.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT
              , ot = Ot(_);
            Bt(_) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, ot, H, _.width, _.height) : N ? n.renderbufferStorageMultisample(n.RENDERBUFFER, ot, H, _.width, _.height) : n.renderbufferStorage(n.RENDERBUFFER, H, _.width, _.height),
            n.framebufferRenderbuffer(n.FRAMEBUFFER, _t, n.RENDERBUFFER, w)
        } else {
            const q = _.textures;
            for (let $ = 0; $ < q.length; $++) {
                const H = q[$]
                  , _t = s.convert(H.format, H.colorSpace)
                  , ot = s.convert(H.type)
                  , ht = y(H.internalFormat, _t, ot, H.colorSpace)
                  , zt = Ot(_);
                N && Bt(_) === !1 ? n.renderbufferStorageMultisample(n.RENDERBUFFER, zt, ht, _.width, _.height) : Bt(_) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, zt, ht, _.width, _.height) : n.renderbufferStorage(n.RENDERBUFFER, ht, _.width, _.height)
            }
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null)
    }
    function Mt(w, _) {
        if (_ && _.isWebGLCubeRenderTarget)
            throw new Error("Depth Texture with cube render targets is not supported");
        if (e.bindFramebuffer(n.FRAMEBUFFER, w),
        !(_.depthTexture && _.depthTexture.isDepthTexture))
            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        const q = i.get(_.depthTexture);
        q.__renderTarget = _,
        (!q.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width,
        _.depthTexture.image.height = _.height,
        _.depthTexture.needsUpdate = !0),
        K(_.depthTexture, 0);
        const $ = q.__webglTexture
          , H = Ot(_);
        if (_.depthTexture.format === qi)
            Bt(_) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, $, 0, H) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, $, 0);
        else if (_.depthTexture.format === tr)
            Bt(_) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, $, 0, H) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, $, 0);
        else
            throw new Error("Unknown depthTexture format")
    }
    function Tt(w) {
        const _ = i.get(w)
          , N = w.isWebGLCubeRenderTarget === !0;
        if (_.__boundDepthTexture !== w.depthTexture) {
            const q = w.depthTexture;
            if (_.__depthDisposeCallback && _.__depthDisposeCallback(),
            q) {
                const $ = () => {
                    delete _.__boundDepthTexture,
                    delete _.__depthDisposeCallback,
                    q.removeEventListener("dispose", $)
                }
                ;
                q.addEventListener("dispose", $),
                _.__depthDisposeCallback = $
            }
            _.__boundDepthTexture = q
        }
        if (w.depthTexture && !_.__autoAllocateDepthBuffer) {
            if (N)
                throw new Error("target.depthTexture not supported in Cube render targets");
            Mt(_.__webglFramebuffer, w)
        } else if (N) {
            _.__webglDepthbuffer = [];
            for (let q = 0; q < 6; q++)
                if (e.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer[q]),
                _.__webglDepthbuffer[q] === void 0)
                    _.__webglDepthbuffer[q] = n.createRenderbuffer(),
                    st(_.__webglDepthbuffer[q], w, !1);
                else {
                    const $ = w.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT
                      , H = _.__webglDepthbuffer[q];
                    n.bindRenderbuffer(n.RENDERBUFFER, H),
                    n.framebufferRenderbuffer(n.FRAMEBUFFER, $, n.RENDERBUFFER, H)
                }
        } else if (e.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer),
        _.__webglDepthbuffer === void 0)
            _.__webglDepthbuffer = n.createRenderbuffer(),
            st(_.__webglDepthbuffer, w, !1);
        else {
            const q = w.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT
              , $ = _.__webglDepthbuffer;
            n.bindRenderbuffer(n.RENDERBUFFER, $),
            n.framebufferRenderbuffer(n.FRAMEBUFFER, q, n.RENDERBUFFER, $)
        }
        e.bindFramebuffer(n.FRAMEBUFFER, null)
    }
    function Ft(w, _, N) {
        const q = i.get(w);
        _ !== void 0 && mt(q.__webglFramebuffer, w, w.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0),
        N !== void 0 && Tt(w)
    }
    function oe(w) {
        const _ = w.texture
          , N = i.get(w)
          , q = i.get(_);
        w.addEventListener("dispose", C);
        const $ = w.textures
          , H = w.isWebGLCubeRenderTarget === !0
          , _t = $.length > 1;
        if (_t || (q.__webglTexture === void 0 && (q.__webglTexture = n.createTexture()),
        q.__version = _.version,
        o.memory.textures++),
        H) {
            N.__webglFramebuffer = [];
            for (let ot = 0; ot < 6; ot++)
                if (_.mipmaps && _.mipmaps.length > 0) {
                    N.__webglFramebuffer[ot] = [];
                    for (let ht = 0; ht < _.mipmaps.length; ht++)
                        N.__webglFramebuffer[ot][ht] = n.createFramebuffer()
                } else
                    N.__webglFramebuffer[ot] = n.createFramebuffer()
        } else {
            if (_.mipmaps && _.mipmaps.length > 0) {
                N.__webglFramebuffer = [];
                for (let ot = 0; ot < _.mipmaps.length; ot++)
                    N.__webglFramebuffer[ot] = n.createFramebuffer()
            } else
                N.__webglFramebuffer = n.createFramebuffer();
            if (_t)
                for (let ot = 0, ht = $.length; ot < ht; ot++) {
                    const zt = i.get($[ot]);
                    zt.__webglTexture === void 0 && (zt.__webglTexture = n.createTexture(),
                    o.memory.textures++)
                }
            if (w.samples > 0 && Bt(w) === !1) {
                N.__webglMultisampledFramebuffer = n.createFramebuffer(),
                N.__webglColorRenderbuffer = [],
                e.bindFramebuffer(n.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
                for (let ot = 0; ot < $.length; ot++) {
                    const ht = $[ot];
                    N.__webglColorRenderbuffer[ot] = n.createRenderbuffer(),
                    n.bindRenderbuffer(n.RENDERBUFFER, N.__webglColorRenderbuffer[ot]);
                    const zt = s.convert(ht.format, ht.colorSpace)
                      , Q = s.convert(ht.type)
                      , dt = y(ht.internalFormat, zt, Q, ht.colorSpace, w.isXRRenderTarget === !0)
                      , wt = Ot(w);
                    n.renderbufferStorageMultisample(n.RENDERBUFFER, wt, dt, w.width, w.height),
                    n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ot, n.RENDERBUFFER, N.__webglColorRenderbuffer[ot])
                }
                n.bindRenderbuffer(n.RENDERBUFFER, null),
                w.depthBuffer && (N.__webglDepthRenderbuffer = n.createRenderbuffer(),
                st(N.__webglDepthRenderbuffer, w, !0)),
                e.bindFramebuffer(n.FRAMEBUFFER, null)
            }
        }
        if (H) {
            e.bindTexture(n.TEXTURE_CUBE_MAP, q.__webglTexture),
            Nt(n.TEXTURE_CUBE_MAP, _);
            for (let ot = 0; ot < 6; ot++)
                if (_.mipmaps && _.mipmaps.length > 0)
                    for (let ht = 0; ht < _.mipmaps.length; ht++)
                        mt(N.__webglFramebuffer[ot][ht], w, _, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + ot, ht);
                else
                    mt(N.__webglFramebuffer[ot], w, _, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + ot, 0);
            f(_) && h(n.TEXTURE_CUBE_MAP),
            e.unbindTexture()
        } else if (_t) {
            for (let ot = 0, ht = $.length; ot < ht; ot++) {
                const zt = $[ot]
                  , Q = i.get(zt);
                e.bindTexture(n.TEXTURE_2D, Q.__webglTexture),
                Nt(n.TEXTURE_2D, zt),
                mt(N.__webglFramebuffer, w, zt, n.COLOR_ATTACHMENT0 + ot, n.TEXTURE_2D, 0),
                f(zt) && h(n.TEXTURE_2D)
            }
            e.unbindTexture()
        } else {
            let ot = n.TEXTURE_2D;
            if ((w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (ot = w.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY),
            e.bindTexture(ot, q.__webglTexture),
            Nt(ot, _),
            _.mipmaps && _.mipmaps.length > 0)
                for (let ht = 0; ht < _.mipmaps.length; ht++)
                    mt(N.__webglFramebuffer[ht], w, _, n.COLOR_ATTACHMENT0, ot, ht);
            else
                mt(N.__webglFramebuffer, w, _, n.COLOR_ATTACHMENT0, ot, 0);
            f(_) && h(ot),
            e.unbindTexture()
        }
        w.depthBuffer && Tt(w)
    }
    function Vt(w) {
        const _ = w.textures;
        for (let N = 0, q = _.length; N < q; N++) {
            const $ = _[N];
            if (f($)) {
                const H = T(w)
                  , _t = i.get($).__webglTexture;
                e.bindTexture(H, _t),
                h(H),
                e.unbindTexture()
            }
        }
    }
    const he = []
      , S = [];
    function We(w) {
        if (w.samples > 0) {
            if (Bt(w) === !1) {
                const _ = w.textures
                  , N = w.width
                  , q = w.height;
                let $ = n.COLOR_BUFFER_BIT;
                const H = w.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT
                  , _t = i.get(w)
                  , ot = _.length > 1;
                if (ot)
                    for (let ht = 0; ht < _.length; ht++)
                        e.bindFramebuffer(n.FRAMEBUFFER, _t.__webglMultisampledFramebuffer),
                        n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ht, n.RENDERBUFFER, null),
                        e.bindFramebuffer(n.FRAMEBUFFER, _t.__webglFramebuffer),
                        n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ht, n.TEXTURE_2D, null, 0);
                e.bindFramebuffer(n.READ_FRAMEBUFFER, _t.__webglMultisampledFramebuffer),
                e.bindFramebuffer(n.DRAW_FRAMEBUFFER, _t.__webglFramebuffer);
                for (let ht = 0; ht < _.length; ht++) {
                    if (w.resolveDepthBuffer && (w.depthBuffer && ($ |= n.DEPTH_BUFFER_BIT),
                    w.stencilBuffer && w.resolveStencilBuffer && ($ |= n.STENCIL_BUFFER_BIT)),
                    ot) {
                        n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, _t.__webglColorRenderbuffer[ht]);
                        const zt = i.get(_[ht]).__webglTexture;
                        n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, zt, 0)
                    }
                    n.blitFramebuffer(0, 0, N, q, 0, 0, N, q, $, n.NEAREST),
                    l === !0 && (he.length = 0,
                    S.length = 0,
                    he.push(n.COLOR_ATTACHMENT0 + ht),
                    w.depthBuffer && w.resolveDepthBuffer === !1 && (he.push(H),
                    S.push(H),
                    n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, S)),
                    n.invalidateFramebuffer(n.READ_FRAMEBUFFER, he))
                }
                if (e.bindFramebuffer(n.READ_FRAMEBUFFER, null),
                e.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
                ot)
                    for (let ht = 0; ht < _.length; ht++) {
                        e.bindFramebuffer(n.FRAMEBUFFER, _t.__webglMultisampledFramebuffer),
                        n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ht, n.RENDERBUFFER, _t.__webglColorRenderbuffer[ht]);
                        const zt = i.get(_[ht]).__webglTexture;
                        e.bindFramebuffer(n.FRAMEBUFFER, _t.__webglFramebuffer),
                        n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ht, n.TEXTURE_2D, zt, 0)
                    }
                e.bindFramebuffer(n.DRAW_FRAMEBUFFER, _t.__webglMultisampledFramebuffer)
            } else if (w.depthBuffer && w.resolveDepthBuffer === !1 && l) {
                const _ = w.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
                n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [_])
            }
        }
    }
    function Ot(w) {
        return Math.min(r.maxSamples, w.samples)
    }
    function Bt(w) {
        const _ = i.get(w);
        return w.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1
    }
    function xt(w) {
        const _ = o.render.frame;
        u.get(w) !== _ && (u.set(w, _),
        w.update())
    }
    function ie(w, _) {
        const N = w.colorSpace
          , q = w.format
          , $ = w.type;
        return w.isCompressedTexture === !0 || w.isVideoTexture === !0 || N !== er && N !== Gn && (qt.getTransfer(N) === Jt ? (q !== rn || $ !== An) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)),
        _
    }
    function vt(w) {
        return typeof HTMLImageElement < "u" && w instanceof HTMLImageElement ? (c.width = w.naturalWidth || w.width,
        c.height = w.naturalHeight || w.height) : typeof VideoFrame < "u" && w instanceof VideoFrame ? (c.width = w.displayWidth,
        c.height = w.displayHeight) : (c.width = w.width,
        c.height = w.height),
        c
    }
    this.allocateTextureUnit = k,
    this.resetTextureUnits = G,
    this.setTexture2D = K,
    this.setTexture2DArray = X,
    this.setTexture3D = Z,
    this.setTextureCube = z,
    this.rebindTextures = Ft,
    this.setupRenderTarget = oe,
    this.updateRenderTargetMipmap = Vt,
    this.updateMultisampleRenderTarget = We,
    this.setupDepthRenderbuffer = Tt,
    this.setupFrameBufferTexture = mt,
    this.useMultisampledRTT = Bt
}
function Jv(n, t) {
    function e(i, r=Gn) {
        let s;
        const o = qt.getTransfer(r);
        if (i === An)
            return n.UNSIGNED_BYTE;
        if (i === Ma)
            return n.UNSIGNED_SHORT_4_4_4_4;
        if (i === ya)
            return n.UNSIGNED_SHORT_5_5_5_1;
        if (i === qc)
            return n.UNSIGNED_INT_5_9_9_9_REV;
        if (i === Wc)
            return n.BYTE;
        if (i === Xc)
            return n.SHORT;
        if (i === yr)
            return n.UNSIGNED_SHORT;
        if (i === wa)
            return n.INT;
        if (i === di)
            return n.UNSIGNED_INT;
        if (i === Mn)
            return n.FLOAT;
        if (i === Ir)
            return n.HALF_FLOAT;
        if (i === jc)
            return n.ALPHA;
        if (i === Yc)
            return n.RGB;
        if (i === rn)
            return n.RGBA;
        if (i === Kc)
            return n.LUMINANCE;
        if (i === $c)
            return n.LUMINANCE_ALPHA;
        if (i === qi)
            return n.DEPTH_COMPONENT;
        if (i === tr)
            return n.DEPTH_STENCIL;
        if (i === Zc)
            return n.RED;
        if (i === Sa)
            return n.RED_INTEGER;
        if (i === Jc)
            return n.RG;
        if (i === Ta)
            return n.RG_INTEGER;
        if (i === Ca)
            return n.RGBA_INTEGER;
        if (i === xs || i === bs || i === Es || i === ws)
            if (o === Jt)
                if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"),
                s !== null) {
                    if (i === xs)
                        return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (i === bs)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (i === Es)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (i === ws)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else
                    return null;
            else if (s = t.get("WEBGL_compressed_texture_s3tc"),
            s !== null) {
                if (i === xs)
                    return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (i === bs)
                    return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (i === Es)
                    return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (i === ws)
                    return s.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else
                return null;
        if (i === zo || i === Ho || i === Go || i === Wo)
            if (s = t.get("WEBGL_compressed_texture_pvrtc"),
            s !== null) {
                if (i === zo)
                    return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (i === Ho)
                    return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (i === Go)
                    return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (i === Wo)
                    return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else
                return null;
        if (i === Xo || i === qo || i === jo)
            if (s = t.get("WEBGL_compressed_texture_etc"),
            s !== null) {
                if (i === Xo || i === qo)
                    return o === Jt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                if (i === jo)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC
            } else
                return null;
        if (i === Yo || i === Ko || i === $o || i === Zo || i === Jo || i === Qo || i === ta || i === ea || i === na || i === ia || i === ra || i === sa || i === oa || i === aa)
            if (s = t.get("WEBGL_compressed_texture_astc"),
            s !== null) {
                if (i === Yo)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (i === Ko)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (i === $o)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (i === Zo)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (i === Jo)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (i === Qo)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (i === ta)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (i === ea)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (i === na)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (i === ia)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (i === ra)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (i === sa)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (i === oa)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (i === aa)
                    return o === Jt ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR
            } else
                return null;
        if (i === Ms || i === la || i === ca)
            if (s = t.get("EXT_texture_compression_bptc"),
            s !== null) {
                if (i === Ms)
                    return o === Jt ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (i === la)
                    return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (i === ca)
                    return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
            } else
                return null;
        if (i === Qc || i === ua || i === ha || i === da)
            if (s = t.get("EXT_texture_compression_rgtc"),
            s !== null) {
                if (i === Ms)
                    return s.COMPRESSED_RED_RGTC1_EXT;
                if (i === ua)
                    return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (i === ha)
                    return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (i === da)
                    return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
            } else
                return null;
        return i === Qi ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null
    }
    return {
        convert: e
    }
}
const Qv = {
    type: "move"
};
class go {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new ps,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new ps,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new F,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new F),
        this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new ps,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new F,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new F),
        this._grip
    }
    dispatchEvent(t) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(t),
        this._grip !== null && this._grip.dispatchEvent(t),
        this._hand !== null && this._hand.dispatchEvent(t),
        this
    }
    connect(t) {
        if (t && t.hand) {
            const e = this._hand;
            if (e)
                for (const i of t.hand.values())
                    this._getHandJoint(e, i)
        }
        return this.dispatchEvent({
            type: "connected",
            data: t
        }),
        this
    }
    disconnect(t) {
        return this.dispatchEvent({
            type: "disconnected",
            data: t
        }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
    }
    update(t, e, i) {
        let r = null
          , s = null
          , o = null;
        const a = this._targetRay
          , l = this._grip
          , c = this._hand;
        if (t && e.session.visibilityState !== "visible-blurred") {
            if (c && t.hand) {
                o = !0;
                for (const b of t.hand.values()) {
                    const f = e.getJointPose(b, i)
                      , h = this._getHandJoint(c, b);
                    f !== null && (h.matrix.fromArray(f.transform.matrix),
                    h.matrix.decompose(h.position, h.rotation, h.scale),
                    h.matrixWorldNeedsUpdate = !0,
                    h.jointRadius = f.radius),
                    h.visible = f !== null
                }
                const u = c.joints["index-finger-tip"]
                  , d = c.joints["thumb-tip"]
                  , p = u.position.distanceTo(d.position)
                  , m = .02
                  , g = .005;
                c.inputState.pinching && p > m + g ? (c.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: t.handedness,
                    target: this
                })) : !c.inputState.pinching && p <= m - g && (c.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: t.handedness,
                    target: this
                }))
            } else
                l !== null && t.gripSpace && (s = e.getPose(t.gripSpace, i),
                s !== null && (l.matrix.fromArray(s.transform.matrix),
                l.matrix.decompose(l.position, l.rotation, l.scale),
                l.matrixWorldNeedsUpdate = !0,
                s.linearVelocity ? (l.hasLinearVelocity = !0,
                l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1,
                s.angularVelocity ? (l.hasAngularVelocity = !0,
                l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
            a !== null && (r = e.getPose(t.targetRaySpace, i),
            r === null && s !== null && (r = s),
            r !== null && (a.matrix.fromArray(r.transform.matrix),
            a.matrix.decompose(a.position, a.rotation, a.scale),
            a.matrixWorldNeedsUpdate = !0,
            r.linearVelocity ? (a.hasLinearVelocity = !0,
            a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1,
            r.angularVelocity ? (a.hasAngularVelocity = !0,
            a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1,
            this.dispatchEvent(Qv)))
        }
        return a !== null && (a.visible = r !== null),
        l !== null && (l.visible = s !== null),
        c !== null && (c.visible = o !== null),
        this
    }
    _getHandJoint(t, e) {
        if (t.joints[e.jointName] === void 0) {
            const i = new ps;
            i.matrixAutoUpdate = !1,
            i.visible = !1,
            t.joints[e.jointName] = i,
            t.add(i)
        }
        return t.joints[e.jointName]
    }
}
const tg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`
  , eg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class ng {
    constructor() {
        this.texture = null,
        this.mesh = null,
        this.depthNear = 0,
        this.depthFar = 0
    }
    init(t, e, i) {
        if (this.texture === null) {
            const r = new Pe
              , s = t.properties.get(r);
            s.__webglTexture = e.texture,
            (e.depthNear !== i.depthNear || e.depthFar !== i.depthFar) && (this.depthNear = e.depthNear,
            this.depthFar = e.depthFar),
            this.texture = r
        }
    }
    getMesh(t) {
        if (this.texture !== null && this.mesh === null) {
            const e = t.cameras[0].viewport
              , i = new dn({
                vertexShader: tg,
                fragmentShader: eg,
                uniforms: {
                    depthColor: {
                        value: this.texture
                    },
                    depthWidth: {
                        value: e.z
                    },
                    depthHeight: {
                        value: e.w
                    }
                }
            });
            this.mesh = new sn(new bi(20,20),i)
        }
        return this.mesh
    }
    reset() {
        this.texture = null,
        this.mesh = null
    }
    getDepthTexture() {
        return this.texture
    }
}
class ig extends gi {
    constructor(t, e) {
        super();
        const i = this;
        let r = null
          , s = 1
          , o = null
          , a = "local-floor"
          , l = 1
          , c = null
          , u = null
          , d = null
          , p = null
          , m = null
          , g = null;
        const b = new ng
          , f = e.getContextAttributes();
        let h = null
          , T = null;
        const y = []
          , M = []
          , U = new Ut;
        let D = null;
        const C = new Ke;
        C.viewport = new de;
        const I = new Ke;
        I.viewport = new de;
        const E = [C, I]
          , x = new Ep;
        let A = null
          , G = null;
        this.cameraAutoUpdate = !0,
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(W) {
            let tt = y[W];
            return tt === void 0 && (tt = new go,
            y[W] = tt),
            tt.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(W) {
            let tt = y[W];
            return tt === void 0 && (tt = new go,
            y[W] = tt),
            tt.getGripSpace()
        }
        ,
        this.getHand = function(W) {
            let tt = y[W];
            return tt === void 0 && (tt = new go,
            y[W] = tt),
            tt.getHandSpace()
        }
        ;
        function k(W) {
            const tt = M.indexOf(W.inputSource);
            if (tt === -1)
                return;
            const mt = y[tt];
            mt !== void 0 && (mt.update(W.inputSource, W.frame, c || o),
            mt.dispatchEvent({
                type: W.type,
                data: W.inputSource
            }))
        }
        function Y() {
            r.removeEventListener("select", k),
            r.removeEventListener("selectstart", k),
            r.removeEventListener("selectend", k),
            r.removeEventListener("squeeze", k),
            r.removeEventListener("squeezestart", k),
            r.removeEventListener("squeezeend", k),
            r.removeEventListener("end", Y),
            r.removeEventListener("inputsourceschange", K);
            for (let W = 0; W < y.length; W++) {
                const tt = M[W];
                tt !== null && (M[W] = null,
                y[W].disconnect(tt))
            }
            A = null,
            G = null,
            b.reset(),
            t.setRenderTarget(h),
            m = null,
            p = null,
            d = null,
            r = null,
            T = null,
            te.stop(),
            i.isPresenting = !1,
            t.setPixelRatio(D),
            t.setSize(U.width, U.height, !1),
            i.dispatchEvent({
                type: "sessionend"
            })
        }
        this.setFramebufferScaleFactor = function(W) {
            s = W,
            i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(W) {
            a = W,
            i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return c || o
        }
        ,
        this.setReferenceSpace = function(W) {
            c = W
        }
        ,
        this.getBaseLayer = function() {
            return p !== null ? p : m
        }
        ,
        this.getBinding = function() {
            return d
        }
        ,
        this.getFrame = function() {
            return g
        }
        ,
        this.getSession = function() {
            return r
        }
        ,
        this.setSession = async function(W) {
            if (r = W,
            r !== null) {
                if (h = t.getRenderTarget(),
                r.addEventListener("select", k),
                r.addEventListener("selectstart", k),
                r.addEventListener("selectend", k),
                r.addEventListener("squeeze", k),
                r.addEventListener("squeezestart", k),
                r.addEventListener("squeezeend", k),
                r.addEventListener("end", Y),
                r.addEventListener("inputsourceschange", K),
                f.xrCompatible !== !0 && await e.makeXRCompatible(),
                D = t.getPixelRatio(),
                t.getSize(U),
                r.enabledFeatures !== void 0 && r.enabledFeatures.includes("layers")) {
                    let mt = null
                      , st = null
                      , Mt = null;
                    f.depth && (Mt = f.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24,
                    mt = f.stencil ? tr : qi,
                    st = f.stencil ? Qi : di);
                    const Tt = {
                        colorFormat: e.RGBA8,
                        depthFormat: Mt,
                        scaleFactor: s
                    };
                    d = new XRWebGLBinding(r,e),
                    p = d.createProjectionLayer(Tt),
                    r.updateRenderState({
                        layers: [p]
                    }),
                    t.setPixelRatio(1),
                    t.setSize(p.textureWidth, p.textureHeight, !1),
                    T = new pi(p.textureWidth,p.textureHeight,{
                        format: rn,
                        type: An,
                        depthTexture: new pu(p.textureWidth,p.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,mt),
                        stencilBuffer: f.stencil,
                        colorSpace: t.outputColorSpace,
                        samples: f.antialias ? 4 : 0,
                        resolveDepthBuffer: p.ignoreDepthValues === !1
                    })
                } else {
                    const mt = {
                        antialias: f.antialias,
                        alpha: !0,
                        depth: f.depth,
                        stencil: f.stencil,
                        framebufferScaleFactor: s
                    };
                    m = new XRWebGLLayer(r,e,mt),
                    r.updateRenderState({
                        baseLayer: m
                    }),
                    t.setPixelRatio(1),
                    t.setSize(m.framebufferWidth, m.framebufferHeight, !1),
                    T = new pi(m.framebufferWidth,m.framebufferHeight,{
                        format: rn,
                        type: An,
                        colorSpace: t.outputColorSpace,
                        stencilBuffer: f.stencil
                    })
                }
                T.isXRRenderTarget = !0,
                this.setFoveation(l),
                c = null,
                o = await r.requestReferenceSpace(a),
                te.setContext(r),
                te.start(),
                i.isPresenting = !0,
                i.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ,
        this.getEnvironmentBlendMode = function() {
            if (r !== null)
                return r.environmentBlendMode
        }
        ,
        this.getDepthTexture = function() {
            return b.getDepthTexture()
        }
        ;
        function K(W) {
            for (let tt = 0; tt < W.removed.length; tt++) {
                const mt = W.removed[tt]
                  , st = M.indexOf(mt);
                st >= 0 && (M[st] = null,
                y[st].disconnect(mt))
            }
            for (let tt = 0; tt < W.added.length; tt++) {
                const mt = W.added[tt];
                let st = M.indexOf(mt);
                if (st === -1) {
                    for (let Tt = 0; Tt < y.length; Tt++)
                        if (Tt >= M.length) {
                            M.push(mt),
                            st = Tt;
                            break
                        } else if (M[Tt] === null) {
                            M[Tt] = mt,
                            st = Tt;
                            break
                        }
                    if (st === -1)
                        break
                }
                const Mt = y[st];
                Mt && Mt.connect(mt)
            }
        }
        const X = new F
          , Z = new F;
        function z(W, tt, mt) {
            X.setFromMatrixPosition(tt.matrixWorld),
            Z.setFromMatrixPosition(mt.matrixWorld);
            const st = X.distanceTo(Z)
              , Mt = tt.projectionMatrix.elements
              , Tt = mt.projectionMatrix.elements
              , Ft = Mt[14] / (Mt[10] - 1)
              , oe = Mt[14] / (Mt[10] + 1)
              , Vt = (Mt[9] + 1) / Mt[5]
              , he = (Mt[9] - 1) / Mt[5]
              , S = (Mt[8] - 1) / Mt[0]
              , We = (Tt[8] + 1) / Tt[0]
              , Ot = Ft * S
              , Bt = Ft * We
              , xt = st / (-S + We)
              , ie = xt * -S;
            if (tt.matrixWorld.decompose(W.position, W.quaternion, W.scale),
            W.translateX(ie),
            W.translateZ(xt),
            W.matrixWorld.compose(W.position, W.quaternion, W.scale),
            W.matrixWorldInverse.copy(W.matrixWorld).invert(),
            Mt[10] === -1)
                W.projectionMatrix.copy(tt.projectionMatrix),
                W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);
            else {
                const vt = Ft + xt
                  , w = oe + xt
                  , _ = Ot - ie
                  , N = Bt + (st - ie)
                  , q = Vt * oe / w * vt
                  , $ = he * oe / w * vt;
                W.projectionMatrix.makePerspective(_, N, q, $, vt, w),
                W.projectionMatrixInverse.copy(W.projectionMatrix).invert()
            }
        }
        function rt(W, tt) {
            tt === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(tt.matrixWorld, W.matrix),
            W.matrixWorldInverse.copy(W.matrixWorld).invert()
        }
        this.updateCamera = function(W) {
            if (r === null)
                return;
            let tt = W.near
              , mt = W.far;
            b.texture !== null && (b.depthNear > 0 && (tt = b.depthNear),
            b.depthFar > 0 && (mt = b.depthFar)),
            x.near = I.near = C.near = tt,
            x.far = I.far = C.far = mt,
            (A !== x.near || G !== x.far) && (r.updateRenderState({
                depthNear: x.near,
                depthFar: x.far
            }),
            A = x.near,
            G = x.far),
            C.layers.mask = W.layers.mask | 2,
            I.layers.mask = W.layers.mask | 4,
            x.layers.mask = C.layers.mask | I.layers.mask;
            const st = W.parent
              , Mt = x.cameras;
            rt(x, st);
            for (let Tt = 0; Tt < Mt.length; Tt++)
                rt(Mt[Tt], st);
            Mt.length === 2 ? z(x, C, I) : x.projectionMatrix.copy(C.projectionMatrix),
            ut(W, x, st)
        }
        ;
        function ut(W, tt, mt) {
            mt === null ? W.matrix.copy(tt.matrixWorld) : (W.matrix.copy(mt.matrixWorld),
            W.matrix.invert(),
            W.matrix.multiply(tt.matrixWorld)),
            W.matrix.decompose(W.position, W.quaternion, W.scale),
            W.updateMatrixWorld(!0),
            W.projectionMatrix.copy(tt.projectionMatrix),
            W.projectionMatrixInverse.copy(tt.projectionMatrixInverse),
            W.isPerspectiveCamera && (W.fov = Sr * 2 * Math.atan(1 / W.projectionMatrix.elements[5]),
            W.zoom = 1)
        }
        this.getCamera = function() {
            return x
        }
        ,
        this.getFoveation = function() {
            if (!(p === null && m === null))
                return l
        }
        ,
        this.setFoveation = function(W) {
            l = W,
            p !== null && (p.fixedFoveation = W),
            m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = W)
        }
        ,
        this.hasDepthSensing = function() {
            return b.texture !== null
        }
        ,
        this.getDepthSensingMesh = function() {
            return b.getMesh(x)
        }
        ;
        let gt = null;
        function Nt(W, tt) {
            if (u = tt.getViewerPose(c || o),
            g = tt,
            u !== null) {
                const mt = u.views;
                m !== null && (t.setRenderTargetFramebuffer(T, m.framebuffer),
                t.setRenderTarget(T));
                let st = !1;
                mt.length !== x.cameras.length && (x.cameras.length = 0,
                st = !0);
                for (let Tt = 0; Tt < mt.length; Tt++) {
                    const Ft = mt[Tt];
                    let oe = null;
                    if (m !== null)
                        oe = m.getViewport(Ft);
                    else {
                        const he = d.getViewSubImage(p, Ft);
                        oe = he.viewport,
                        Tt === 0 && (t.setRenderTargetTextures(T, he.colorTexture, p.ignoreDepthValues ? void 0 : he.depthStencilTexture),
                        t.setRenderTarget(T))
                    }
                    let Vt = E[Tt];
                    Vt === void 0 && (Vt = new Ke,
                    Vt.layers.enable(Tt),
                    Vt.viewport = new de,
                    E[Tt] = Vt),
                    Vt.matrix.fromArray(Ft.transform.matrix),
                    Vt.matrix.decompose(Vt.position, Vt.quaternion, Vt.scale),
                    Vt.projectionMatrix.fromArray(Ft.projectionMatrix),
                    Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),
                    Vt.viewport.set(oe.x, oe.y, oe.width, oe.height),
                    Tt === 0 && (x.matrix.copy(Vt.matrix),
                    x.matrix.decompose(x.position, x.quaternion, x.scale)),
                    st === !0 && x.cameras.push(Vt)
                }
                const Mt = r.enabledFeatures;
                if (Mt && Mt.includes("depth-sensing")) {
                    const Tt = d.getDepthInformation(mt[0]);
                    Tt && Tt.isValid && Tt.texture && b.init(t, Tt, r.renderState)
                }
            }
            for (let mt = 0; mt < y.length; mt++) {
                const st = M[mt]
                  , Mt = y[mt];
                st !== null && Mt !== void 0 && Mt.update(st, tt, c || o)
            }
            gt && gt(W, tt),
            tt.detectedPlanes && i.dispatchEvent({
                type: "planesdetected",
                data: tt
            }),
            g = null
        }
        const te = new mu;
        te.setAnimationLoop(Nt),
        this.setAnimationLoop = function(W) {
            gt = W
        }
        ,
        this.dispose = function() {}
    }
}
const ii = new Pn
  , rg = new me;
function sg(n, t) {
    function e(f, h) {
        f.matrixAutoUpdate === !0 && f.updateMatrix(),
        h.value.copy(f.matrix)
    }
    function i(f, h) {
        h.color.getRGB(f.fogColor.value, uu(n)),
        h.isFog ? (f.fogNear.value = h.near,
        f.fogFar.value = h.far) : h.isFogExp2 && (f.fogDensity.value = h.density)
    }
    function r(f, h, T, y, M) {
        h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(f, h) : h.isMeshToonMaterial ? (s(f, h),
        d(f, h)) : h.isMeshPhongMaterial ? (s(f, h),
        u(f, h)) : h.isMeshStandardMaterial ? (s(f, h),
        p(f, h),
        h.isMeshPhysicalMaterial && m(f, h, M)) : h.isMeshMatcapMaterial ? (s(f, h),
        g(f, h)) : h.isMeshDepthMaterial ? s(f, h) : h.isMeshDistanceMaterial ? (s(f, h),
        b(f, h)) : h.isMeshNormalMaterial ? s(f, h) : h.isLineBasicMaterial ? (o(f, h),
        h.isLineDashedMaterial && a(f, h)) : h.isPointsMaterial ? l(f, h, T, y) : h.isSpriteMaterial ? c(f, h) : h.isShadowMaterial ? (f.color.value.copy(h.color),
        f.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1)
    }
    function s(f, h) {
        f.opacity.value = h.opacity,
        h.color && f.diffuse.value.copy(h.color),
        h.emissive && f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),
        h.map && (f.map.value = h.map,
        e(h.map, f.mapTransform)),
        h.alphaMap && (f.alphaMap.value = h.alphaMap,
        e(h.alphaMap, f.alphaMapTransform)),
        h.bumpMap && (f.bumpMap.value = h.bumpMap,
        e(h.bumpMap, f.bumpMapTransform),
        f.bumpScale.value = h.bumpScale,
        h.side === Ne && (f.bumpScale.value *= -1)),
        h.normalMap && (f.normalMap.value = h.normalMap,
        e(h.normalMap, f.normalMapTransform),
        f.normalScale.value.copy(h.normalScale),
        h.side === Ne && f.normalScale.value.negate()),
        h.displacementMap && (f.displacementMap.value = h.displacementMap,
        e(h.displacementMap, f.displacementMapTransform),
        f.displacementScale.value = h.displacementScale,
        f.displacementBias.value = h.displacementBias),
        h.emissiveMap && (f.emissiveMap.value = h.emissiveMap,
        e(h.emissiveMap, f.emissiveMapTransform)),
        h.specularMap && (f.specularMap.value = h.specularMap,
        e(h.specularMap, f.specularMapTransform)),
        h.alphaTest > 0 && (f.alphaTest.value = h.alphaTest);
        const T = t.get(h)
          , y = T.envMap
          , M = T.envMapRotation;
        y && (f.envMap.value = y,
        ii.copy(M),
        ii.x *= -1,
        ii.y *= -1,
        ii.z *= -1,
        y.isCubeTexture && y.isRenderTargetTexture === !1 && (ii.y *= -1,
        ii.z *= -1),
        f.envMapRotation.value.setFromMatrix4(rg.makeRotationFromEuler(ii)),
        f.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1,
        f.reflectivity.value = h.reflectivity,
        f.ior.value = h.ior,
        f.refractionRatio.value = h.refractionRatio),
        h.lightMap && (f.lightMap.value = h.lightMap,
        f.lightMapIntensity.value = h.lightMapIntensity,
        e(h.lightMap, f.lightMapTransform)),
        h.aoMap && (f.aoMap.value = h.aoMap,
        f.aoMapIntensity.value = h.aoMapIntensity,
        e(h.aoMap, f.aoMapTransform))
    }
    function o(f, h) {
        f.diffuse.value.copy(h.color),
        f.opacity.value = h.opacity,
        h.map && (f.map.value = h.map,
        e(h.map, f.mapTransform))
    }
    function a(f, h) {
        f.dashSize.value = h.dashSize,
        f.totalSize.value = h.dashSize + h.gapSize,
        f.scale.value = h.scale
    }
    function l(f, h, T, y) {
        f.diffuse.value.copy(h.color),
        f.opacity.value = h.opacity,
        f.size.value = h.size * T,
        f.scale.value = y * .5,
        h.map && (f.map.value = h.map,
        e(h.map, f.uvTransform)),
        h.alphaMap && (f.alphaMap.value = h.alphaMap,
        e(h.alphaMap, f.alphaMapTransform)),
        h.alphaTest > 0 && (f.alphaTest.value = h.alphaTest)
    }
    function c(f, h) {
        f.diffuse.value.copy(h.color),
        f.opacity.value = h.opacity,
        f.rotation.value = h.rotation,
        h.map && (f.map.value = h.map,
        e(h.map, f.mapTransform)),
        h.alphaMap && (f.alphaMap.value = h.alphaMap,
        e(h.alphaMap, f.alphaMapTransform)),
        h.alphaTest > 0 && (f.alphaTest.value = h.alphaTest)
    }
    function u(f, h) {
        f.specular.value.copy(h.specular),
        f.shininess.value = Math.max(h.shininess, 1e-4)
    }
    function d(f, h) {
        h.gradientMap && (f.gradientMap.value = h.gradientMap)
    }
    function p(f, h) {
        f.metalness.value = h.metalness,
        h.metalnessMap && (f.metalnessMap.value = h.metalnessMap,
        e(h.metalnessMap, f.metalnessMapTransform)),
        f.roughness.value = h.roughness,
        h.roughnessMap && (f.roughnessMap.value = h.roughnessMap,
        e(h.roughnessMap, f.roughnessMapTransform)),
        h.envMap && (f.envMapIntensity.value = h.envMapIntensity)
    }
    function m(f, h, T) {
        f.ior.value = h.ior,
        h.sheen > 0 && (f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),
        f.sheenRoughness.value = h.sheenRoughness,
        h.sheenColorMap && (f.sheenColorMap.value = h.sheenColorMap,
        e(h.sheenColorMap, f.sheenColorMapTransform)),
        h.sheenRoughnessMap && (f.sheenRoughnessMap.value = h.sheenRoughnessMap,
        e(h.sheenRoughnessMap, f.sheenRoughnessMapTransform))),
        h.clearcoat > 0 && (f.clearcoat.value = h.clearcoat,
        f.clearcoatRoughness.value = h.clearcoatRoughness,
        h.clearcoatMap && (f.clearcoatMap.value = h.clearcoatMap,
        e(h.clearcoatMap, f.clearcoatMapTransform)),
        h.clearcoatRoughnessMap && (f.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap,
        e(h.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)),
        h.clearcoatNormalMap && (f.clearcoatNormalMap.value = h.clearcoatNormalMap,
        e(h.clearcoatNormalMap, f.clearcoatNormalMapTransform),
        f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),
        h.side === Ne && f.clearcoatNormalScale.value.negate())),
        h.dispersion > 0 && (f.dispersion.value = h.dispersion),
        h.iridescence > 0 && (f.iridescence.value = h.iridescence,
        f.iridescenceIOR.value = h.iridescenceIOR,
        f.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0],
        f.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1],
        h.iridescenceMap && (f.iridescenceMap.value = h.iridescenceMap,
        e(h.iridescenceMap, f.iridescenceMapTransform)),
        h.iridescenceThicknessMap && (f.iridescenceThicknessMap.value = h.iridescenceThicknessMap,
        e(h.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))),
        h.transmission > 0 && (f.transmission.value = h.transmission,
        f.transmissionSamplerMap.value = T.texture,
        f.transmissionSamplerSize.value.set(T.width, T.height),
        h.transmissionMap && (f.transmissionMap.value = h.transmissionMap,
        e(h.transmissionMap, f.transmissionMapTransform)),
        f.thickness.value = h.thickness,
        h.thicknessMap && (f.thicknessMap.value = h.thicknessMap,
        e(h.thicknessMap, f.thicknessMapTransform)),
        f.attenuationDistance.value = h.attenuationDistance,
        f.attenuationColor.value.copy(h.attenuationColor)),
        h.anisotropy > 0 && (f.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)),
        h.anisotropyMap && (f.anisotropyMap.value = h.anisotropyMap,
        e(h.anisotropyMap, f.anisotropyMapTransform))),
        f.specularIntensity.value = h.specularIntensity,
        f.specularColor.value.copy(h.specularColor),
        h.specularColorMap && (f.specularColorMap.value = h.specularColorMap,
        e(h.specularColorMap, f.specularColorMapTransform)),
        h.specularIntensityMap && (f.specularIntensityMap.value = h.specularIntensityMap,
        e(h.specularIntensityMap, f.specularIntensityMapTransform))
    }
    function g(f, h) {
        h.matcap && (f.matcap.value = h.matcap)
    }
    function b(f, h) {
        const T = t.get(h).light;
        f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),
        f.nearDistance.value = T.shadow.camera.near,
        f.farDistance.value = T.shadow.camera.far
    }
    return {
        refreshFogUniforms: i,
        refreshMaterialUniforms: r
    }
}
function og(n, t, e, i) {
    let r = {}
      , s = {}
      , o = [];
    const a = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
    function l(T, y) {
        const M = y.program;
        i.uniformBlockBinding(T, M)
    }
    function c(T, y) {
        let M = r[T.id];
        M === void 0 && (g(T),
        M = u(T),
        r[T.id] = M,
        T.addEventListener("dispose", f));
        const U = y.program;
        i.updateUBOMapping(T, U);
        const D = t.render.frame;
        s[T.id] !== D && (p(T),
        s[T.id] = D)
    }
    function u(T) {
        const y = d();
        T.__bindingPointIndex = y;
        const M = n.createBuffer()
          , U = T.__size
          , D = T.usage;
        return n.bindBuffer(n.UNIFORM_BUFFER, M),
        n.bufferData(n.UNIFORM_BUFFER, U, D),
        n.bindBuffer(n.UNIFORM_BUFFER, null),
        n.bindBufferBase(n.UNIFORM_BUFFER, y, M),
        M
    }
    function d() {
        for (let T = 0; T < a; T++)
            if (o.indexOf(T) === -1)
                return o.push(T),
                T;
        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
        0
    }
    function p(T) {
        const y = r[T.id]
          , M = T.uniforms
          , U = T.__cache;
        n.bindBuffer(n.UNIFORM_BUFFER, y);
        for (let D = 0, C = M.length; D < C; D++) {
            const I = Array.isArray(M[D]) ? M[D] : [M[D]];
            for (let E = 0, x = I.length; E < x; E++) {
                const A = I[E];
                if (m(A, D, E, U) === !0) {
                    const G = A.__offset
                      , k = Array.isArray(A.value) ? A.value : [A.value];
                    let Y = 0;
                    for (let K = 0; K < k.length; K++) {
                        const X = k[K]
                          , Z = b(X);
                        typeof X == "number" || typeof X == "boolean" ? (A.__data[0] = X,
                        n.bufferSubData(n.UNIFORM_BUFFER, G + Y, A.__data)) : X.isMatrix3 ? (A.__data[0] = X.elements[0],
                        A.__data[1] = X.elements[1],
                        A.__data[2] = X.elements[2],
                        A.__data[3] = 0,
                        A.__data[4] = X.elements[3],
                        A.__data[5] = X.elements[4],
                        A.__data[6] = X.elements[5],
                        A.__data[7] = 0,
                        A.__data[8] = X.elements[6],
                        A.__data[9] = X.elements[7],
                        A.__data[10] = X.elements[8],
                        A.__data[11] = 0) : (X.toArray(A.__data, Y),
                        Y += Z.storage / Float32Array.BYTES_PER_ELEMENT)
                    }
                    n.bufferSubData(n.UNIFORM_BUFFER, G, A.__data)
                }
            }
        }
        n.bindBuffer(n.UNIFORM_BUFFER, null)
    }
    function m(T, y, M, U) {
        const D = T.value
          , C = y + "_" + M;
        if (U[C] === void 0)
            return typeof D == "number" || typeof D == "boolean" ? U[C] = D : U[C] = D.clone(),
            !0;
        {
            const I = U[C];
            if (typeof D == "number" || typeof D == "boolean") {
                if (I !== D)
                    return U[C] = D,
                    !0
            } else if (I.equals(D) === !1)
                return I.copy(D),
                !0
        }
        return !1
    }
    function g(T) {
        const y = T.uniforms;
        let M = 0;
        const U = 16;
        for (let C = 0, I = y.length; C < I; C++) {
            const E = Array.isArray(y[C]) ? y[C] : [y[C]];
            for (let x = 0, A = E.length; x < A; x++) {
                const G = E[x]
                  , k = Array.isArray(G.value) ? G.value : [G.value];
                for (let Y = 0, K = k.length; Y < K; Y++) {
                    const X = k[Y]
                      , Z = b(X)
                      , z = M % U
                      , rt = z % Z.boundary
                      , ut = z + rt;
                    M += rt,
                    ut !== 0 && U - ut < Z.storage && (M += U - ut),
                    G.__data = new Float32Array(Z.storage / Float32Array.BYTES_PER_ELEMENT),
                    G.__offset = M,
                    M += Z.storage
                }
            }
        }
        const D = M % U;
        return D > 0 && (M += U - D),
        T.__size = M,
        T.__cache = {},
        this
    }
    function b(T) {
        const y = {
            boundary: 0,
            storage: 0
        };
        return typeof T == "number" || typeof T == "boolean" ? (y.boundary = 4,
        y.storage = 4) : T.isVector2 ? (y.boundary = 8,
        y.storage = 8) : T.isVector3 || T.isColor ? (y.boundary = 16,
        y.storage = 12) : T.isVector4 ? (y.boundary = 16,
        y.storage = 16) : T.isMatrix3 ? (y.boundary = 48,
        y.storage = 48) : T.isMatrix4 ? (y.boundary = 64,
        y.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T),
        y
    }
    function f(T) {
        const y = T.target;
        y.removeEventListener("dispose", f);
        const M = o.indexOf(y.__bindingPointIndex);
        o.splice(M, 1),
        n.deleteBuffer(r[y.id]),
        delete r[y.id],
        delete s[y.id]
    }
    function h() {
        for (const T in r)
            n.deleteBuffer(r[T]);
        o = [],
        r = {},
        s = {}
    }
    return {
        bind: l,
        update: c,
        dispose: h
    }
}
class ag {
    constructor(t={}) {
        const {canvas: e=Od(), context: i=null, depth: r=!0, stencil: s=!1, alpha: o=!1, antialias: a=!1, premultipliedAlpha: l=!0, preserveDrawingBuffer: c=!1, powerPreference: u="default", failIfMajorPerformanceCaveat: d=!1, reverseDepthBuffer: p=!1} = t;
        this.isWebGLRenderer = !0;
        let m;
        if (i !== null) {
            if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext)
                throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
            m = i.getContextAttributes().alpha
        } else
            m = o;
        const g = new Uint32Array(4)
          , b = new Int32Array(4);
        let f = null
          , h = null;
        const T = []
          , y = [];
        this.domElement = e,
        this.debug = {
            checkShaderErrors: !0,
            onShaderError: null
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this._outputColorSpace = ze,
        this.toneMapping = qn,
        this.toneMappingExposure = 1;
        const M = this;
        let U = !1
          , D = 0
          , C = 0
          , I = null
          , E = -1
          , x = null;
        const A = new de
          , G = new de;
        let k = null;
        const Y = new Gt(0);
        let K = 0
          , X = e.width
          , Z = e.height
          , z = 1
          , rt = null
          , ut = null;
        const gt = new de(0,0,X,Z)
          , Nt = new de(0,0,X,Z);
        let te = !1;
        const W = new du;
        let tt = !1
          , mt = !1;
        this.transmissionResolutionScale = 1;
        const st = new me
          , Mt = new me
          , Tt = new F
          , Ft = new de
          , oe = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        let Vt = !1;
        function he() {
            return I === null ? z : 1
        }
        let S = i;
        function We(v, R) {
            return e.getContext(v, R)
        }
        try {
            const v = {
                alpha: !0,
                depth: r,
                stencil: s,
                antialias: a,
                premultipliedAlpha: l,
                preserveDrawingBuffer: c,
                powerPreference: u,
                failIfMajorPerformanceCaveat: d
            };
            if ("setAttribute"in e && e.setAttribute("data-engine", `three.js r${Ea}`),
            e.addEventListener("webglcontextlost", j, !1),
            e.addEventListener("webglcontextrestored", lt, !1),
            e.addEventListener("webglcontextcreationerror", at, !1),
            S === null) {
                const R = "webgl2";
                if (S = We(R, v),
                S === null)
                    throw We(R) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
        } catch (v) {
            throw console.error("THREE.WebGLRenderer: " + v.message),
            v
        }
        let Ot, Bt, xt, ie, vt, w, _, N, q, $, H, _t, ot, ht, zt, Q, dt, wt, yt, pt, kt, Rt, ee, P;
        function nt() {
            Ot = new __(S),
            Ot.init(),
            Rt = new Jv(S,Ot),
            Bt = new u_(S,Ot,t,Rt),
            xt = new $v(S,Ot),
            Bt.reverseDepthBuffer && p && xt.buffers.depth.setReversed(!0),
            ie = new x_(S),
            vt = new Ov,
            w = new Zv(S,Ot,xt,vt,Bt,Rt,ie),
            _ = new d_(M),
            N = new m_(M),
            q = new Sp(S),
            ee = new l_(S,q),
            $ = new v_(S,q,ie,ee),
            H = new E_(S,$,q,ie),
            yt = new b_(S,Bt,w),
            Q = new h_(vt),
            _t = new Fv(M,_,N,Ot,Bt,ee,Q),
            ot = new sg(M,vt),
            ht = new kv,
            zt = new Xv(Ot),
            wt = new a_(M,_,N,xt,H,m,l),
            dt = new Yv(M,H,Bt),
            P = new og(S,ie,Bt,xt),
            pt = new c_(S,Ot,ie),
            kt = new g_(S,Ot,ie),
            ie.programs = _t.programs,
            M.capabilities = Bt,
            M.extensions = Ot,
            M.properties = vt,
            M.renderLists = ht,
            M.shadowMap = dt,
            M.state = xt,
            M.info = ie
        }
        nt();
        const V = new ig(M,S);
        this.xr = V,
        this.getContext = function() {
            return S
        }
        ,
        this.getContextAttributes = function() {
            return S.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            const v = Ot.get("WEBGL_lose_context");
            v && v.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            const v = Ot.get("WEBGL_lose_context");
            v && v.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return z
        }
        ,
        this.setPixelRatio = function(v) {
            v !== void 0 && (z = v,
            this.setSize(X, Z, !1))
        }
        ,
        this.getSize = function(v) {
            return v.set(X, Z)
        }
        ,
        this.setSize = function(v, R, O=!0) {
            if (V.isPresenting) {
                console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                return
            }
            X = v,
            Z = R,
            e.width = Math.floor(v * z),
            e.height = Math.floor(R * z),
            O === !0 && (e.style.width = v + "px",
            e.style.height = R + "px"),
            this.setViewport(0, 0, v, R)
        }
        ,
        this.getDrawingBufferSize = function(v) {
            return v.set(X * z, Z * z).floor()
        }
        ,
        this.setDrawingBufferSize = function(v, R, O) {
            X = v,
            Z = R,
            z = O,
            e.width = Math.floor(v * O),
            e.height = Math.floor(R * O),
            this.setViewport(0, 0, v, R)
        }
        ,
        this.getCurrentViewport = function(v) {
            return v.copy(A)
        }
        ,
        this.getViewport = function(v) {
            return v.copy(gt)
        }
        ,
        this.setViewport = function(v, R, O, B) {
            v.isVector4 ? gt.set(v.x, v.y, v.z, v.w) : gt.set(v, R, O, B),
            xt.viewport(A.copy(gt).multiplyScalar(z).round())
        }
        ,
        this.getScissor = function(v) {
            return v.copy(Nt)
        }
        ,
        this.setScissor = function(v, R, O, B) {
            v.isVector4 ? Nt.set(v.x, v.y, v.z, v.w) : Nt.set(v, R, O, B),
            xt.scissor(G.copy(Nt).multiplyScalar(z).round())
        }
        ,
        this.getScissorTest = function() {
            return te
        }
        ,
        this.setScissorTest = function(v) {
            xt.setScissorTest(te = v)
        }
        ,
        this.setOpaqueSort = function(v) {
            rt = v
        }
        ,
        this.setTransparentSort = function(v) {
            ut = v
        }
        ,
        this.getClearColor = function(v) {
            return v.copy(wt.getClearColor())
        }
        ,
        this.setClearColor = function() {
            wt.setClearColor.apply(wt, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return wt.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            wt.setClearAlpha.apply(wt, arguments)
        }
        ,
        this.clear = function(v=!0, R=!0, O=!0) {
            let B = 0;
            if (v) {
                let L = !1;
                if (I !== null) {
                    const J = I.texture.format;
                    L = J === Ca || J === Ta || J === Sa
                }
                if (L) {
                    const J = I.texture.type
                      , it = J === An || J === di || J === yr || J === Qi || J === Ma || J === ya
                      , ct = wt.getClearColor()
                      , ft = wt.getClearAlpha()
                      , St = ct.r
                      , Ct = ct.g
                      , bt = ct.b;
                    it ? (g[0] = St,
                    g[1] = Ct,
                    g[2] = bt,
                    g[3] = ft,
                    S.clearBufferuiv(S.COLOR, 0, g)) : (b[0] = St,
                    b[1] = Ct,
                    b[2] = bt,
                    b[3] = ft,
                    S.clearBufferiv(S.COLOR, 0, b))
                } else
                    B |= S.COLOR_BUFFER_BIT
            }
            R && (B |= S.DEPTH_BUFFER_BIT),
            O && (B |= S.STENCIL_BUFFER_BIT,
            this.state.buffers.stencil.setMask(4294967295)),
            S.clear(B)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            e.removeEventListener("webglcontextlost", j, !1),
            e.removeEventListener("webglcontextrestored", lt, !1),
            e.removeEventListener("webglcontextcreationerror", at, !1),
            wt.dispose(),
            ht.dispose(),
            zt.dispose(),
            vt.dispose(),
            _.dispose(),
            N.dispose(),
            H.dispose(),
            ee.dispose(),
            P.dispose(),
            _t.dispose(),
            V.dispose(),
            V.removeEventListener("sessionstart", ll),
            V.removeEventListener("sessionend", cl),
            $n.stop()
        }
        ;
        function j(v) {
            v.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            U = !0
        }
        function lt() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            U = !1;
            const v = ie.autoReset
              , R = dt.enabled
              , O = dt.autoUpdate
              , B = dt.needsUpdate
              , L = dt.type;
            nt(),
            ie.autoReset = v,
            dt.enabled = R,
            dt.autoUpdate = O,
            dt.needsUpdate = B,
            dt.type = L
        }
        function at(v) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage)
        }
        function At(v) {
            const R = v.target;
            R.removeEventListener("dispose", At),
            le(R)
        }
        function le(v) {
            Me(v),
            vt.remove(v)
        }
        function Me(v) {
            const R = vt.get(v).programs;
            R !== void 0 && (R.forEach(function(O) {
                _t.releaseProgram(O)
            }),
            v.isShaderMaterial && _t.releaseShaderCache(v))
        }
        this.renderBufferDirect = function(v, R, O, B, L, J) {
            R === null && (R = oe);
            const it = L.isMesh && L.matrixWorld.determinant() < 0
              , ct = Th(v, R, O, B, L);
            xt.setMaterial(B, it);
            let ft = O.index
              , St = 1;
            if (B.wireframe === !0) {
                if (ft = $.getWireframeAttribute(O),
                ft === void 0)
                    return;
                St = 2
            }
            const Ct = O.drawRange
              , bt = O.attributes.position;
            let Ht = Ct.start * St
              , Yt = (Ct.start + Ct.count) * St;
            J !== null && (Ht = Math.max(Ht, J.start * St),
            Yt = Math.min(Yt, (J.start + J.count) * St)),
            ft !== null ? (Ht = Math.max(Ht, 0),
            Yt = Math.min(Yt, ft.count)) : bt != null && (Ht = Math.max(Ht, 0),
            Yt = Math.min(Yt, bt.count));
            const pe = Yt - Ht;
            if (pe < 0 || pe === 1 / 0)
                return;
            ee.setup(L, B, ct, O, ft);
            let ce, Xt = pt;
            if (ft !== null && (ce = q.get(ft),
            Xt = kt,
            Xt.setIndex(ce)),
            L.isMesh)
                B.wireframe === !0 ? (xt.setLineWidth(B.wireframeLinewidth * he()),
                Xt.setMode(S.LINES)) : Xt.setMode(S.TRIANGLES);
            else if (L.isLine) {
                let Et = B.linewidth;
                Et === void 0 && (Et = 1),
                xt.setLineWidth(Et * he()),
                L.isLineSegments ? Xt.setMode(S.LINES) : L.isLineLoop ? Xt.setMode(S.LINE_LOOP) : Xt.setMode(S.LINE_STRIP)
            } else
                L.isPoints ? Xt.setMode(S.POINTS) : L.isSprite && Xt.setMode(S.TRIANGLES);
            if (L.isBatchedMesh)
                if (L._multiDrawInstances !== null)
                    Xt.renderMultiDrawInstances(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount, L._multiDrawInstances);
                else if (Ot.get("WEBGL_multi_draw"))
                    Xt.renderMultiDraw(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount);
                else {
                    const Et = L._multiDrawStarts
                      , we = L._multiDrawCounts
                      , Kt = L._multiDrawCount
                      , Je = ft ? q.get(ft).bytesPerElement : 1
                      , Mi = vt.get(B).currentProgram.getUniforms();
                    for (let Be = 0; Be < Kt; Be++)
                        Mi.setValue(S, "_gl_DrawID", Be),
                        Xt.render(Et[Be] / Je, we[Be])
                }
            else if (L.isInstancedMesh)
                Xt.renderInstances(Ht, pe, L.count);
            else if (O.isInstancedBufferGeometry) {
                const Et = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0
                  , we = Math.min(O.instanceCount, Et);
                Xt.renderInstances(Ht, pe, we)
            } else
                Xt.render(Ht, pe)
        }
        ;
        function Zt(v, R, O) {
            v.transparent === !0 && v.side === ln && v.forceSinglePass === !1 ? (v.side = Ne,
            v.needsUpdate = !0,
            Yr(v, R, O),
            v.side = Yn,
            v.needsUpdate = !0,
            Yr(v, R, O),
            v.side = ln) : Yr(v, R, O)
        }
        this.compile = function(v, R, O=null) {
            O === null && (O = v),
            h = zt.get(O),
            h.init(R),
            y.push(h),
            O.traverseVisible(function(L) {
                L.isLight && L.layers.test(R.layers) && (h.pushLight(L),
                L.castShadow && h.pushShadow(L))
            }),
            v !== O && v.traverseVisible(function(L) {
                L.isLight && L.layers.test(R.layers) && (h.pushLight(L),
                L.castShadow && h.pushShadow(L))
            }),
            h.setupLights();
            const B = new Set;
            return v.traverse(function(L) {
                if (!(L.isMesh || L.isPoints || L.isLine || L.isSprite))
                    return;
                const J = L.material;
                if (J)
                    if (Array.isArray(J))
                        for (let it = 0; it < J.length; it++) {
                            const ct = J[it];
                            Zt(ct, O, L),
                            B.add(ct)
                        }
                    else
                        Zt(J, O, L),
                        B.add(J)
            }),
            y.pop(),
            h = null,
            B
        }
        ,
        this.compileAsync = function(v, R, O=null) {
            const B = this.compile(v, R, O);
            return new Promise(L => {
                function J() {
                    if (B.forEach(function(it) {
                        vt.get(it).currentProgram.isReady() && B.delete(it)
                    }),
                    B.size === 0) {
                        L(v);
                        return
                    }
                    setTimeout(J, 10)
                }
                Ot.get("KHR_parallel_shader_compile") !== null ? J() : setTimeout(J, 10)
            }
            )
        }
        ;
        let Ze = null;
        function mn(v) {
            Ze && Ze(v)
        }
        function ll() {
            $n.stop()
        }
        function cl() {
            $n.start()
        }
        const $n = new mu;
        $n.setAnimationLoop(mn),
        typeof self < "u" && $n.setContext(self),
        this.setAnimationLoop = function(v) {
            Ze = v,
            V.setAnimationLoop(v),
            v === null ? $n.stop() : $n.start()
        }
        ,
        V.addEventListener("sessionstart", ll),
        V.addEventListener("sessionend", cl),
        this.render = function(v, R) {
            if (R !== void 0 && R.isCamera !== !0) {
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                return
            }
            if (U === !0)
                return;
            if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(),
            R.parent === null && R.matrixWorldAutoUpdate === !0 && R.updateMatrixWorld(),
            V.enabled === !0 && V.isPresenting === !0 && (V.cameraAutoUpdate === !0 && V.updateCamera(R),
            R = V.getCamera()),
            v.isScene === !0 && v.onBeforeRender(M, v, R, I),
            h = zt.get(v, y.length),
            h.init(R),
            y.push(h),
            Mt.multiplyMatrices(R.projectionMatrix, R.matrixWorldInverse),
            W.setFromProjectionMatrix(Mt),
            mt = this.localClippingEnabled,
            tt = Q.init(this.clippingPlanes, mt),
            f = ht.get(v, T.length),
            f.init(),
            T.push(f),
            V.enabled === !0 && V.isPresenting === !0) {
                const J = M.xr.getDepthSensingMesh();
                J !== null && Hs(J, R, -1 / 0, M.sortObjects)
            }
            Hs(v, R, 0, M.sortObjects),
            f.finish(),
            M.sortObjects === !0 && f.sort(rt, ut),
            Vt = V.enabled === !1 || V.isPresenting === !1 || V.hasDepthSensing() === !1,
            Vt && wt.addToRenderList(f, v),
            this.info.render.frame++,
            tt === !0 && Q.beginShadows();
            const O = h.state.shadowsArray;
            dt.render(O, v, R),
            tt === !0 && Q.endShadows(),
            this.info.autoReset === !0 && this.info.reset();
            const B = f.opaque
              , L = f.transmissive;
            if (h.setupLights(),
            R.isArrayCamera) {
                const J = R.cameras;
                if (L.length > 0)
                    for (let it = 0, ct = J.length; it < ct; it++) {
                        const ft = J[it];
                        hl(B, L, v, ft)
                    }
                Vt && wt.render(v);
                for (let it = 0, ct = J.length; it < ct; it++) {
                    const ft = J[it];
                    ul(f, v, ft, ft.viewport)
                }
            } else
                L.length > 0 && hl(B, L, v, R),
                Vt && wt.render(v),
                ul(f, v, R);
            I !== null && C === 0 && (w.updateMultisampleRenderTarget(I),
            w.updateRenderTargetMipmap(I)),
            v.isScene === !0 && v.onAfterRender(M, v, R),
            ee.resetDefaultState(),
            E = -1,
            x = null,
            y.pop(),
            y.length > 0 ? (h = y[y.length - 1],
            tt === !0 && Q.setGlobalState(M.clippingPlanes, h.state.camera)) : h = null,
            T.pop(),
            T.length > 0 ? f = T[T.length - 1] : f = null
        }
        ;
        function Hs(v, R, O, B) {
            if (v.visible === !1)
                return;
            if (v.layers.test(R.layers)) {
                if (v.isGroup)
                    O = v.renderOrder;
                else if (v.isLOD)
                    v.autoUpdate === !0 && v.update(R);
                else if (v.isLight)
                    h.pushLight(v),
                    v.castShadow && h.pushShadow(v);
                else if (v.isSprite) {
                    if (!v.frustumCulled || W.intersectsSprite(v)) {
                        B && Ft.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Mt);
                        const it = H.update(v)
                          , ct = v.material;
                        ct.visible && f.push(v, it, ct, O, Ft.z, null)
                    }
                } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || W.intersectsObject(v))) {
                    const it = H.update(v)
                      , ct = v.material;
                    if (B && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(),
                    Ft.copy(v.boundingSphere.center)) : (it.boundingSphere === null && it.computeBoundingSphere(),
                    Ft.copy(it.boundingSphere.center)),
                    Ft.applyMatrix4(v.matrixWorld).applyMatrix4(Mt)),
                    Array.isArray(ct)) {
                        const ft = it.groups;
                        for (let St = 0, Ct = ft.length; St < Ct; St++) {
                            const bt = ft[St]
                              , Ht = ct[bt.materialIndex];
                            Ht && Ht.visible && f.push(v, it, Ht, O, Ft.z, bt)
                        }
                    } else
                        ct.visible && f.push(v, it, ct, O, Ft.z, null)
                }
            }
            const J = v.children;
            for (let it = 0, ct = J.length; it < ct; it++)
                Hs(J[it], R, O, B)
        }
        function ul(v, R, O, B) {
            const L = v.opaque
              , J = v.transmissive
              , it = v.transparent;
            h.setupLightsView(O),
            tt === !0 && Q.setGlobalState(M.clippingPlanes, O),
            B && xt.viewport(A.copy(B)),
            L.length > 0 && jr(L, R, O),
            J.length > 0 && jr(J, R, O),
            it.length > 0 && jr(it, R, O),
            xt.buffers.depth.setTest(!0),
            xt.buffers.depth.setMask(!0),
            xt.buffers.color.setMask(!0),
            xt.setPolygonOffset(!1)
        }
        function hl(v, R, O, B) {
            if ((O.isScene === !0 ? O.overrideMaterial : null) !== null)
                return;
            h.state.transmissionRenderTarget[B.id] === void 0 && (h.state.transmissionRenderTarget[B.id] = new pi(1,1,{
                generateMipmaps: !0,
                type: Ot.has("EXT_color_buffer_half_float") || Ot.has("EXT_color_buffer_float") ? Ir : An,
                minFilter: ci,
                samples: 4,
                stencilBuffer: s,
                resolveDepthBuffer: !1,
                resolveStencilBuffer: !1,
                colorSpace: qt.workingColorSpace
            }));
            const J = h.state.transmissionRenderTarget[B.id]
              , it = B.viewport || A;
            J.setSize(it.z * M.transmissionResolutionScale, it.w * M.transmissionResolutionScale);
            const ct = M.getRenderTarget();
            M.setRenderTarget(J),
            M.getClearColor(Y),
            K = M.getClearAlpha(),
            K < 1 && M.setClearColor(16777215, .5),
            M.clear(),
            Vt && wt.render(O);
            const ft = M.toneMapping;
            M.toneMapping = qn;
            const St = B.viewport;
            if (B.viewport !== void 0 && (B.viewport = void 0),
            h.setupLightsView(B),
            tt === !0 && Q.setGlobalState(M.clippingPlanes, B),
            jr(v, O, B),
            w.updateMultisampleRenderTarget(J),
            w.updateRenderTargetMipmap(J),
            Ot.has("WEBGL_multisampled_render_to_texture") === !1) {
                let Ct = !1;
                for (let bt = 0, Ht = R.length; bt < Ht; bt++) {
                    const Yt = R[bt]
                      , pe = Yt.object
                      , ce = Yt.geometry
                      , Xt = Yt.material
                      , Et = Yt.group;
                    if (Xt.side === ln && pe.layers.test(B.layers)) {
                        const we = Xt.side;
                        Xt.side = Ne,
                        Xt.needsUpdate = !0,
                        dl(pe, O, B, ce, Xt, Et),
                        Xt.side = we,
                        Xt.needsUpdate = !0,
                        Ct = !0
                    }
                }
                Ct === !0 && (w.updateMultisampleRenderTarget(J),
                w.updateRenderTargetMipmap(J))
            }
            M.setRenderTarget(ct),
            M.setClearColor(Y, K),
            St !== void 0 && (B.viewport = St),
            M.toneMapping = ft
        }
        function jr(v, R, O) {
            const B = R.isScene === !0 ? R.overrideMaterial : null;
            for (let L = 0, J = v.length; L < J; L++) {
                const it = v[L]
                  , ct = it.object
                  , ft = it.geometry
                  , St = B === null ? it.material : B
                  , Ct = it.group;
                ct.layers.test(O.layers) && dl(ct, R, O, ft, St, Ct)
            }
        }
        function dl(v, R, O, B, L, J) {
            v.onBeforeRender(M, R, O, B, L, J),
            v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, v.matrixWorld),
            v.normalMatrix.getNormalMatrix(v.modelViewMatrix),
            L.onBeforeRender(M, R, O, B, v, J),
            L.transparent === !0 && L.side === ln && L.forceSinglePass === !1 ? (L.side = Ne,
            L.needsUpdate = !0,
            M.renderBufferDirect(O, R, B, L, v, J),
            L.side = Yn,
            L.needsUpdate = !0,
            M.renderBufferDirect(O, R, B, L, v, J),
            L.side = ln) : M.renderBufferDirect(O, R, B, L, v, J),
            v.onAfterRender(M, R, O, B, L, J)
        }
        function Yr(v, R, O) {
            R.isScene !== !0 && (R = oe);
            const B = vt.get(v)
              , L = h.state.lights
              , J = h.state.shadowsArray
              , it = L.state.version
              , ct = _t.getParameters(v, L.state, J, R, O)
              , ft = _t.getProgramCacheKey(ct);
            let St = B.programs;
            B.environment = v.isMeshStandardMaterial ? R.environment : null,
            B.fog = R.fog,
            B.envMap = (v.isMeshStandardMaterial ? N : _).get(v.envMap || B.environment),
            B.envMapRotation = B.environment !== null && v.envMap === null ? R.environmentRotation : v.envMapRotation,
            St === void 0 && (v.addEventListener("dispose", At),
            St = new Map,
            B.programs = St);
            let Ct = St.get(ft);
            if (Ct !== void 0) {
                if (B.currentProgram === Ct && B.lightsStateVersion === it)
                    return fl(v, ct),
                    Ct
            } else
                ct.uniforms = _t.getUniforms(v),
                v.onBeforeCompile(ct, M),
                Ct = _t.acquireProgram(ct, ft),
                St.set(ft, Ct),
                B.uniforms = ct.uniforms;
            const bt = B.uniforms;
            return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (bt.clippingPlanes = Q.uniform),
            fl(v, ct),
            B.needsLights = Ah(v),
            B.lightsStateVersion = it,
            B.needsLights && (bt.ambientLightColor.value = L.state.ambient,
            bt.lightProbe.value = L.state.probe,
            bt.directionalLights.value = L.state.directional,
            bt.directionalLightShadows.value = L.state.directionalShadow,
            bt.spotLights.value = L.state.spot,
            bt.spotLightShadows.value = L.state.spotShadow,
            bt.rectAreaLights.value = L.state.rectArea,
            bt.ltc_1.value = L.state.rectAreaLTC1,
            bt.ltc_2.value = L.state.rectAreaLTC2,
            bt.pointLights.value = L.state.point,
            bt.pointLightShadows.value = L.state.pointShadow,
            bt.hemisphereLights.value = L.state.hemi,
            bt.directionalShadowMap.value = L.state.directionalShadowMap,
            bt.directionalShadowMatrix.value = L.state.directionalShadowMatrix,
            bt.spotShadowMap.value = L.state.spotShadowMap,
            bt.spotLightMatrix.value = L.state.spotLightMatrix,
            bt.spotLightMap.value = L.state.spotLightMap,
            bt.pointShadowMap.value = L.state.pointShadowMap,
            bt.pointShadowMatrix.value = L.state.pointShadowMatrix),
            B.currentProgram = Ct,
            B.uniformsList = null,
            Ct
        }
        function pl(v) {
            if (v.uniformsList === null) {
                const R = v.currentProgram.getUniforms();
                v.uniformsList = ys.seqWithValue(R.seq, v.uniforms)
            }
            return v.uniformsList
        }
        function fl(v, R) {
            const O = vt.get(v);
            O.outputColorSpace = R.outputColorSpace,
            O.batching = R.batching,
            O.batchingColor = R.batchingColor,
            O.instancing = R.instancing,
            O.instancingColor = R.instancingColor,
            O.instancingMorph = R.instancingMorph,
            O.skinning = R.skinning,
            O.morphTargets = R.morphTargets,
            O.morphNormals = R.morphNormals,
            O.morphColors = R.morphColors,
            O.morphTargetsCount = R.morphTargetsCount,
            O.numClippingPlanes = R.numClippingPlanes,
            O.numIntersection = R.numClipIntersection,
            O.vertexAlphas = R.vertexAlphas,
            O.vertexTangents = R.vertexTangents,
            O.toneMapping = R.toneMapping
        }
        function Th(v, R, O, B, L) {
            R.isScene !== !0 && (R = oe),
            w.resetTextureUnits();
            const J = R.fog
              , it = B.isMeshStandardMaterial ? R.environment : null
              , ct = I === null ? M.outputColorSpace : I.isXRRenderTarget === !0 ? I.texture.colorSpace : er
              , ft = (B.isMeshStandardMaterial ? N : _).get(B.envMap || it)
              , St = B.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4
              , Ct = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0)
              , bt = !!O.morphAttributes.position
              , Ht = !!O.morphAttributes.normal
              , Yt = !!O.morphAttributes.color;
            let pe = qn;
            B.toneMapped && (I === null || I.isXRRenderTarget === !0) && (pe = M.toneMapping);
            const ce = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color
              , Xt = ce !== void 0 ? ce.length : 0
              , Et = vt.get(B)
              , we = h.state.lights;
            if (tt === !0 && (mt === !0 || v !== x)) {
                const Te = v === x && B.id === E;
                Q.setState(B, v, Te)
            }
            let Kt = !1;
            B.version === Et.__version ? (Et.needsLights && Et.lightsStateVersion !== we.state.version || Et.outputColorSpace !== ct || L.isBatchedMesh && Et.batching === !1 || !L.isBatchedMesh && Et.batching === !0 || L.isBatchedMesh && Et.batchingColor === !0 && L.colorTexture === null || L.isBatchedMesh && Et.batchingColor === !1 && L.colorTexture !== null || L.isInstancedMesh && Et.instancing === !1 || !L.isInstancedMesh && Et.instancing === !0 || L.isSkinnedMesh && Et.skinning === !1 || !L.isSkinnedMesh && Et.skinning === !0 || L.isInstancedMesh && Et.instancingColor === !0 && L.instanceColor === null || L.isInstancedMesh && Et.instancingColor === !1 && L.instanceColor !== null || L.isInstancedMesh && Et.instancingMorph === !0 && L.morphTexture === null || L.isInstancedMesh && Et.instancingMorph === !1 && L.morphTexture !== null || Et.envMap !== ft || B.fog === !0 && Et.fog !== J || Et.numClippingPlanes !== void 0 && (Et.numClippingPlanes !== Q.numPlanes || Et.numIntersection !== Q.numIntersection) || Et.vertexAlphas !== St || Et.vertexTangents !== Ct || Et.morphTargets !== bt || Et.morphNormals !== Ht || Et.morphColors !== Yt || Et.toneMapping !== pe || Et.morphTargetsCount !== Xt) && (Kt = !0) : (Kt = !0,
            Et.__version = B.version);
            let Je = Et.currentProgram;
            Kt === !0 && (Je = Yr(B, R, L));
            let Mi = !1
              , Be = !1
              , dr = !1;
            const re = Je.getUniforms()
              , Xe = Et.uniforms;
            if (xt.useProgram(Je.program) && (Mi = !0,
            Be = !0,
            dr = !0),
            B.id !== E && (E = B.id,
            Be = !0),
            Mi || x !== v) {
                xt.buffers.depth.getReversed() ? (st.copy(v.projectionMatrix),
                kd(st),
                Vd(st),
                re.setValue(S, "projectionMatrix", st)) : re.setValue(S, "projectionMatrix", v.projectionMatrix),
                re.setValue(S, "viewMatrix", v.matrixWorldInverse);
                const Le = re.map.cameraPosition;
                Le !== void 0 && Le.setValue(S, Tt.setFromMatrixPosition(v.matrixWorld)),
                Bt.logarithmicDepthBuffer && re.setValue(S, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)),
                (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && re.setValue(S, "isOrthographic", v.isOrthographicCamera === !0),
                x !== v && (x = v,
                Be = !0,
                dr = !0)
            }
            if (L.isSkinnedMesh) {
                re.setOptional(S, L, "bindMatrix"),
                re.setOptional(S, L, "bindMatrixInverse");
                const Te = L.skeleton;
                Te && (Te.boneTexture === null && Te.computeBoneTexture(),
                re.setValue(S, "boneTexture", Te.boneTexture, w))
            }
            L.isBatchedMesh && (re.setOptional(S, L, "batchingTexture"),
            re.setValue(S, "batchingTexture", L._matricesTexture, w),
            re.setOptional(S, L, "batchingIdTexture"),
            re.setValue(S, "batchingIdTexture", L._indirectTexture, w),
            re.setOptional(S, L, "batchingColorTexture"),
            L._colorsTexture !== null && re.setValue(S, "batchingColorTexture", L._colorsTexture, w));
            const qe = O.morphAttributes;
            if ((qe.position !== void 0 || qe.normal !== void 0 || qe.color !== void 0) && yt.update(L, O, Je),
            (Be || Et.receiveShadow !== L.receiveShadow) && (Et.receiveShadow = L.receiveShadow,
            re.setValue(S, "receiveShadow", L.receiveShadow)),
            B.isMeshGouraudMaterial && B.envMap !== null && (Xe.envMap.value = ft,
            Xe.flipEnvMap.value = ft.isCubeTexture && ft.isRenderTargetTexture === !1 ? -1 : 1),
            B.isMeshStandardMaterial && B.envMap === null && R.environment !== null && (Xe.envMapIntensity.value = R.environmentIntensity),
            Be && (re.setValue(S, "toneMappingExposure", M.toneMappingExposure),
            Et.needsLights && Ch(Xe, dr),
            J && B.fog === !0 && ot.refreshFogUniforms(Xe, J),
            ot.refreshMaterialUniforms(Xe, B, z, Z, h.state.transmissionRenderTarget[v.id]),
            ys.upload(S, pl(Et), Xe, w)),
            B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (ys.upload(S, pl(Et), Xe, w),
            B.uniformsNeedUpdate = !1),
            B.isSpriteMaterial && re.setValue(S, "center", L.center),
            re.setValue(S, "modelViewMatrix", L.modelViewMatrix),
            re.setValue(S, "normalMatrix", L.normalMatrix),
            re.setValue(S, "modelMatrix", L.matrixWorld),
            B.isShaderMaterial || B.isRawShaderMaterial) {
                const Te = B.uniformsGroups;
                for (let Le = 0, Gs = Te.length; Le < Gs; Le++) {
                    const Zn = Te[Le];
                    P.update(Zn, Je),
                    P.bind(Zn, Je)
                }
            }
            return Je
        }
        function Ch(v, R) {
            v.ambientLightColor.needsUpdate = R,
            v.lightProbe.needsUpdate = R,
            v.directionalLights.needsUpdate = R,
            v.directionalLightShadows.needsUpdate = R,
            v.pointLights.needsUpdate = R,
            v.pointLightShadows.needsUpdate = R,
            v.spotLights.needsUpdate = R,
            v.spotLightShadows.needsUpdate = R,
            v.rectAreaLights.needsUpdate = R,
            v.hemisphereLights.needsUpdate = R
        }
        function Ah(v) {
            return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0
        }
        this.getActiveCubeFace = function() {
            return D
        }
        ,
        this.getActiveMipmapLevel = function() {
            return C
        }
        ,
        this.getRenderTarget = function() {
            return I
        }
        ,
        this.setRenderTargetTextures = function(v, R, O) {
            vt.get(v.texture).__webglTexture = R,
            vt.get(v.depthTexture).__webglTexture = O;
            const B = vt.get(v);
            B.__hasExternalTextures = !0,
            B.__autoAllocateDepthBuffer = O === void 0,
            B.__autoAllocateDepthBuffer || Ot.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),
            B.__useRenderToTexture = !1)
        }
        ,
        this.setRenderTargetFramebuffer = function(v, R) {
            const O = vt.get(v);
            O.__webglFramebuffer = R,
            O.__useDefaultFramebuffer = R === void 0
        }
        ;
        const Ph = S.createFramebuffer();
        this.setRenderTarget = function(v, R=0, O=0) {
            I = v,
            D = R,
            C = O;
            let B = !0
              , L = null
              , J = !1
              , it = !1;
            if (v) {
                const ft = vt.get(v);
                if (ft.__useDefaultFramebuffer !== void 0)
                    xt.bindFramebuffer(S.FRAMEBUFFER, null),
                    B = !1;
                else if (ft.__webglFramebuffer === void 0)
                    w.setupRenderTarget(v);
                else if (ft.__hasExternalTextures)
                    w.rebindTextures(v, vt.get(v.texture).__webglTexture, vt.get(v.depthTexture).__webglTexture);
                else if (v.depthBuffer) {
                    const bt = v.depthTexture;
                    if (ft.__boundDepthTexture !== bt) {
                        if (bt !== null && vt.has(bt) && (v.width !== bt.image.width || v.height !== bt.image.height))
                            throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                        w.setupDepthRenderbuffer(v)
                    }
                }
                const St = v.texture;
                (St.isData3DTexture || St.isDataArrayTexture || St.isCompressedArrayTexture) && (it = !0);
                const Ct = vt.get(v).__webglFramebuffer;
                v.isWebGLCubeRenderTarget ? (Array.isArray(Ct[R]) ? L = Ct[R][O] : L = Ct[R],
                J = !0) : v.samples > 0 && w.useMultisampledRTT(v) === !1 ? L = vt.get(v).__webglMultisampledFramebuffer : Array.isArray(Ct) ? L = Ct[O] : L = Ct,
                A.copy(v.viewport),
                G.copy(v.scissor),
                k = v.scissorTest
            } else
                A.copy(gt).multiplyScalar(z).floor(),
                G.copy(Nt).multiplyScalar(z).floor(),
                k = te;
            if (O !== 0 && (L = Ph),
            xt.bindFramebuffer(S.FRAMEBUFFER, L) && B && xt.drawBuffers(v, L),
            xt.viewport(A),
            xt.scissor(G),
            xt.setScissorTest(k),
            J) {
                const ft = vt.get(v.texture);
                S.framebufferTexture2D(S.FRAMEBUFFER, S.COLOR_ATTACHMENT0, S.TEXTURE_CUBE_MAP_POSITIVE_X + R, ft.__webglTexture, O)
            } else if (it) {
                const ft = vt.get(v.texture)
                  , St = R;
                S.framebufferTextureLayer(S.FRAMEBUFFER, S.COLOR_ATTACHMENT0, ft.__webglTexture, O, St)
            } else if (v !== null && O !== 0) {
                const ft = vt.get(v.texture);
                S.framebufferTexture2D(S.FRAMEBUFFER, S.COLOR_ATTACHMENT0, S.TEXTURE_2D, ft.__webglTexture, O)
            }
            E = -1
        }
        ,
        this.readRenderTargetPixels = function(v, R, O, B, L, J, it) {
            if (!(v && v.isWebGLRenderTarget)) {
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                return
            }
            let ct = vt.get(v).__webglFramebuffer;
            if (v.isWebGLCubeRenderTarget && it !== void 0 && (ct = ct[it]),
            ct) {
                xt.bindFramebuffer(S.FRAMEBUFFER, ct);
                try {
                    const ft = v.texture
                      , St = ft.format
                      , Ct = ft.type;
                    if (!Bt.textureFormatReadable(St)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        return
                    }
                    if (!Bt.textureTypeReadable(Ct)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        return
                    }
                    R >= 0 && R <= v.width - B && O >= 0 && O <= v.height - L && S.readPixels(R, O, B, L, Rt.convert(St), Rt.convert(Ct), J)
                } finally {
                    const ft = I !== null ? vt.get(I).__webglFramebuffer : null;
                    xt.bindFramebuffer(S.FRAMEBUFFER, ft)
                }
            }
        }
        ,
        this.readRenderTargetPixelsAsync = async function(v, R, O, B, L, J, it) {
            if (!(v && v.isWebGLRenderTarget))
                throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let ct = vt.get(v).__webglFramebuffer;
            if (v.isWebGLCubeRenderTarget && it !== void 0 && (ct = ct[it]),
            ct) {
                const ft = v.texture
                  , St = ft.format
                  , Ct = ft.type;
                if (!Bt.textureFormatReadable(St))
                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
                if (!Bt.textureTypeReadable(Ct))
                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
                if (R >= 0 && R <= v.width - B && O >= 0 && O <= v.height - L) {
                    xt.bindFramebuffer(S.FRAMEBUFFER, ct);
                    const bt = S.createBuffer();
                    S.bindBuffer(S.PIXEL_PACK_BUFFER, bt),
                    S.bufferData(S.PIXEL_PACK_BUFFER, J.byteLength, S.STREAM_READ),
                    S.readPixels(R, O, B, L, Rt.convert(St), Rt.convert(Ct), 0);
                    const Ht = I !== null ? vt.get(I).__webglFramebuffer : null;
                    xt.bindFramebuffer(S.FRAMEBUFFER, Ht);
                    const Yt = S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE, 0);
                    return S.flush(),
                    await Bd(S, Yt, 4),
                    S.bindBuffer(S.PIXEL_PACK_BUFFER, bt),
                    S.getBufferSubData(S.PIXEL_PACK_BUFFER, 0, J),
                    S.deleteBuffer(bt),
                    S.deleteSync(Yt),
                    J
                } else
                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")
            }
        }
        ,
        this.copyFramebufferToTexture = function(v, R=null, O=0) {
            v.isTexture !== !0 && (zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),
            R = arguments[0] || null,
            v = arguments[1]);
            const B = Math.pow(2, -O)
              , L = Math.floor(v.image.width * B)
              , J = Math.floor(v.image.height * B)
              , it = R !== null ? R.x : 0
              , ct = R !== null ? R.y : 0;
            w.setTexture2D(v, 0),
            S.copyTexSubImage2D(S.TEXTURE_2D, O, 0, 0, it, ct, L, J),
            xt.unbindTexture()
        }
        ;
        const Rh = S.createFramebuffer()
          , Dh = S.createFramebuffer();
        this.copyTextureToTexture = function(v, R, O=null, B=null, L=0, J=null) {
            v.isTexture !== !0 && (zi("WebGLRenderer: copyTextureToTexture function signature has changed."),
            B = arguments[0] || null,
            v = arguments[1],
            R = arguments[2],
            J = arguments[3] || 0,
            O = null),
            J === null && (L !== 0 ? (zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),
            J = L,
            L = 0) : J = 0);
            let it, ct, ft, St, Ct, bt, Ht, Yt, pe;
            const ce = v.isCompressedTexture ? v.mipmaps[J] : v.image;
            if (O !== null)
                it = O.max.x - O.min.x,
                ct = O.max.y - O.min.y,
                ft = O.isBox3 ? O.max.z - O.min.z : 1,
                St = O.min.x,
                Ct = O.min.y,
                bt = O.isBox3 ? O.min.z : 0;
            else {
                const qe = Math.pow(2, -L);
                it = Math.floor(ce.width * qe),
                ct = Math.floor(ce.height * qe),
                v.isDataArrayTexture ? ft = ce.depth : v.isData3DTexture ? ft = Math.floor(ce.depth * qe) : ft = 1,
                St = 0,
                Ct = 0,
                bt = 0
            }
            B !== null ? (Ht = B.x,
            Yt = B.y,
            pe = B.z) : (Ht = 0,
            Yt = 0,
            pe = 0);
            const Xt = Rt.convert(R.format)
              , Et = Rt.convert(R.type);
            let we;
            R.isData3DTexture ? (w.setTexture3D(R, 0),
            we = S.TEXTURE_3D) : R.isDataArrayTexture || R.isCompressedArrayTexture ? (w.setTexture2DArray(R, 0),
            we = S.TEXTURE_2D_ARRAY) : (w.setTexture2D(R, 0),
            we = S.TEXTURE_2D),
            S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL, R.flipY),
            S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL, R.premultiplyAlpha),
            S.pixelStorei(S.UNPACK_ALIGNMENT, R.unpackAlignment);
            const Kt = S.getParameter(S.UNPACK_ROW_LENGTH)
              , Je = S.getParameter(S.UNPACK_IMAGE_HEIGHT)
              , Mi = S.getParameter(S.UNPACK_SKIP_PIXELS)
              , Be = S.getParameter(S.UNPACK_SKIP_ROWS)
              , dr = S.getParameter(S.UNPACK_SKIP_IMAGES);
            S.pixelStorei(S.UNPACK_ROW_LENGTH, ce.width),
            S.pixelStorei(S.UNPACK_IMAGE_HEIGHT, ce.height),
            S.pixelStorei(S.UNPACK_SKIP_PIXELS, St),
            S.pixelStorei(S.UNPACK_SKIP_ROWS, Ct),
            S.pixelStorei(S.UNPACK_SKIP_IMAGES, bt);
            const re = v.isDataArrayTexture || v.isData3DTexture
              , Xe = R.isDataArrayTexture || R.isData3DTexture;
            if (v.isDepthTexture) {
                const qe = vt.get(v)
                  , Te = vt.get(R)
                  , Le = vt.get(qe.__renderTarget)
                  , Gs = vt.get(Te.__renderTarget);
                xt.bindFramebuffer(S.READ_FRAMEBUFFER, Le.__webglFramebuffer),
                xt.bindFramebuffer(S.DRAW_FRAMEBUFFER, Gs.__webglFramebuffer);
                for (let Zn = 0; Zn < ft; Zn++)
                    re && (S.framebufferTextureLayer(S.READ_FRAMEBUFFER, S.COLOR_ATTACHMENT0, vt.get(v).__webglTexture, L, bt + Zn),
                    S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER, S.COLOR_ATTACHMENT0, vt.get(R).__webglTexture, J, pe + Zn)),
                    S.blitFramebuffer(St, Ct, it, ct, Ht, Yt, it, ct, S.DEPTH_BUFFER_BIT, S.NEAREST);
                xt.bindFramebuffer(S.READ_FRAMEBUFFER, null),
                xt.bindFramebuffer(S.DRAW_FRAMEBUFFER, null)
            } else if (L !== 0 || v.isRenderTargetTexture || vt.has(v)) {
                const qe = vt.get(v)
                  , Te = vt.get(R);
                xt.bindFramebuffer(S.READ_FRAMEBUFFER, Rh),
                xt.bindFramebuffer(S.DRAW_FRAMEBUFFER, Dh);
                for (let Le = 0; Le < ft; Le++)
                    re ? S.framebufferTextureLayer(S.READ_FRAMEBUFFER, S.COLOR_ATTACHMENT0, qe.__webglTexture, L, bt + Le) : S.framebufferTexture2D(S.READ_FRAMEBUFFER, S.COLOR_ATTACHMENT0, S.TEXTURE_2D, qe.__webglTexture, L),
                    Xe ? S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER, S.COLOR_ATTACHMENT0, Te.__webglTexture, J, pe + Le) : S.framebufferTexture2D(S.DRAW_FRAMEBUFFER, S.COLOR_ATTACHMENT0, S.TEXTURE_2D, Te.__webglTexture, J),
                    L !== 0 ? S.blitFramebuffer(St, Ct, it, ct, Ht, Yt, it, ct, S.COLOR_BUFFER_BIT, S.NEAREST) : Xe ? S.copyTexSubImage3D(we, J, Ht, Yt, pe + Le, St, Ct, it, ct) : S.copyTexSubImage2D(we, J, Ht, Yt, St, Ct, it, ct);
                xt.bindFramebuffer(S.READ_FRAMEBUFFER, null),
                xt.bindFramebuffer(S.DRAW_FRAMEBUFFER, null)
            } else
                Xe ? v.isDataTexture || v.isData3DTexture ? S.texSubImage3D(we, J, Ht, Yt, pe, it, ct, ft, Xt, Et, ce.data) : R.isCompressedArrayTexture ? S.compressedTexSubImage3D(we, J, Ht, Yt, pe, it, ct, ft, Xt, ce.data) : S.texSubImage3D(we, J, Ht, Yt, pe, it, ct, ft, Xt, Et, ce) : v.isDataTexture ? S.texSubImage2D(S.TEXTURE_2D, J, Ht, Yt, it, ct, Xt, Et, ce.data) : v.isCompressedTexture ? S.compressedTexSubImage2D(S.TEXTURE_2D, J, Ht, Yt, ce.width, ce.height, Xt, ce.data) : S.texSubImage2D(S.TEXTURE_2D, J, Ht, Yt, it, ct, Xt, Et, ce);
            S.pixelStorei(S.UNPACK_ROW_LENGTH, Kt),
            S.pixelStorei(S.UNPACK_IMAGE_HEIGHT, Je),
            S.pixelStorei(S.UNPACK_SKIP_PIXELS, Mi),
            S.pixelStorei(S.UNPACK_SKIP_ROWS, Be),
            S.pixelStorei(S.UNPACK_SKIP_IMAGES, dr),
            J === 0 && R.generateMipmaps && S.generateMipmap(we),
            xt.unbindTexture()
        }
        ,
        this.copyTextureToTexture3D = function(v, R, O=null, B=null, L=0) {
            return v.isTexture !== !0 && (zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),
            O = arguments[0] || null,
            B = arguments[1] || null,
            v = arguments[2],
            R = arguments[3],
            L = arguments[4] || 0),
            zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),
            this.copyTextureToTexture(v, R, O, B, L)
        }
        ,
        this.initRenderTarget = function(v) {
            vt.get(v).__webglFramebuffer === void 0 && w.setupRenderTarget(v)
        }
        ,
        this.initTexture = function(v) {
            v.isCubeTexture ? w.setTextureCube(v, 0) : v.isData3DTexture ? w.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? w.setTexture2DArray(v, 0) : w.setTexture2D(v, 0),
            xt.unbindTexture()
        }
        ,
        this.resetState = function() {
            D = 0,
            C = 0,
            I = null,
            xt.reset(),
            ee.reset()
        }
        ,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    get coordinateSystem() {
        return yn
    }
    get outputColorSpace() {
        return this._outputColorSpace
    }
    set outputColorSpace(t) {
        this._outputColorSpace = t;
        const e = this.getContext();
        e.drawingBufferColorspace = qt._getDrawingBufferColorSpace(t),
        e.unpackColorSpace = qt._getUnpackColorSpace()
    }
}
const fc = {
    type: "change"
}
  , La = {
    type: "start"
}
  , bu = {
    type: "end"
}
  , vs = new ru
  , mc = new Hn
  , lg = Math.cos(70 * Fd.DEG2RAD)
  , ve = new F
  , Ue = 2 * Math.PI
  , Qt = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
}
  , xo = 1e-6;
class cg extends Mp {
    constructor(t, e=null) {
        super(t, e),
        this.state = Qt.NONE,
        this.enabled = !0,
        this.target = new F,
        this.cursor = new F,
        this.minDistance = 0,
        this.maxDistance = 1 / 0,
        this.minZoom = 0,
        this.maxZoom = 1 / 0,
        this.minTargetRadius = 0,
        this.maxTargetRadius = 1 / 0,
        this.minPolarAngle = 0,
        this.maxPolarAngle = Math.PI,
        this.minAzimuthAngle = -1 / 0,
        this.maxAzimuthAngle = 1 / 0,
        this.enableDamping = !1,
        this.dampingFactor = .05,
        this.enableZoom = !0,
        this.zoomSpeed = 1,
        this.enableRotate = !0,
        this.rotateSpeed = 1,
        this.keyRotateSpeed = 1,
        this.enablePan = !0,
        this.panSpeed = 1,
        this.screenSpacePanning = !0,
        this.keyPanSpeed = 7,
        this.zoomToCursor = !1,
        this.autoRotate = !1,
        this.autoRotateSpeed = 2,
        this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        },
        this.mouseButtons = {
            LEFT: Wi.ROTATE,
            MIDDLE: Wi.DOLLY,
            RIGHT: Wi.PAN
        },
        this.touches = {
            ONE: Hi.ROTATE,
            TWO: Hi.DOLLY_PAN
        },
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone(),
        this.zoom0 = this.object.zoom,
        this._domElementKeyEvents = null,
        this._lastPosition = new F,
        this._lastQuaternion = new fi,
        this._lastTargetPosition = new F,
        this._quat = new fi().setFromUnitVectors(t.up, new F(0,1,0)),
        this._quatInverse = this._quat.clone().invert(),
        this._spherical = new Hl,
        this._sphericalDelta = new Hl,
        this._scale = 1,
        this._panOffset = new F,
        this._rotateStart = new Ut,
        this._rotateEnd = new Ut,
        this._rotateDelta = new Ut,
        this._panStart = new Ut,
        this._panEnd = new Ut,
        this._panDelta = new Ut,
        this._dollyStart = new Ut,
        this._dollyEnd = new Ut,
        this._dollyDelta = new Ut,
        this._dollyDirection = new F,
        this._mouse = new Ut,
        this._performCursorZoom = !1,
        this._pointers = [],
        this._pointerPositions = {},
        this._controlActive = !1,
        this._onPointerMove = hg.bind(this),
        this._onPointerDown = ug.bind(this),
        this._onPointerUp = dg.bind(this),
        this._onContextMenu = xg.bind(this),
        this._onMouseWheel = mg.bind(this),
        this._onKeyDown = _g.bind(this),
        this._onTouchStart = vg.bind(this),
        this._onTouchMove = gg.bind(this),
        this._onMouseDown = pg.bind(this),
        this._onMouseMove = fg.bind(this),
        this._interceptControlDown = bg.bind(this),
        this._interceptControlUp = Eg.bind(this),
        this.domElement !== null && this.connect(),
        this.update()
    }
    connect() {
        this.domElement.addEventListener("pointerdown", this._onPointerDown),
        this.domElement.addEventListener("pointercancel", this._onPointerUp),
        this.domElement.addEventListener("contextmenu", this._onContextMenu),
        this.domElement.addEventListener("wheel", this._onMouseWheel, {
            passive: !1
        }),
        this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
            passive: !0,
            capture: !0
        }),
        this.domElement.style.touchAction = "none"
    }
    disconnect() {
        this.domElement.removeEventListener("pointerdown", this._onPointerDown),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.domElement.removeEventListener("pointercancel", this._onPointerUp),
        this.domElement.removeEventListener("wheel", this._onMouseWheel),
        this.domElement.removeEventListener("contextmenu", this._onContextMenu),
        this.stopListenToKeyEvents(),
        this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, {
            capture: !0
        }),
        this.domElement.style.touchAction = "auto"
    }
    dispose() {
        this.disconnect()
    }
    getPolarAngle() {
        return this._spherical.phi
    }
    getAzimuthalAngle() {
        return this._spherical.theta
    }
    getDistance() {
        return this.object.position.distanceTo(this.target)
    }
    listenToKeyEvents(t) {
        t.addEventListener("keydown", this._onKeyDown),
        this._domElementKeyEvents = t
    }
    stopListenToKeyEvents() {
        this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown),
        this._domElementKeyEvents = null)
    }
    saveState() {
        this.target0.copy(this.target),
        this.position0.copy(this.object.position),
        this.zoom0 = this.object.zoom
    }
    reset() {
        this.target.copy(this.target0),
        this.object.position.copy(this.position0),
        this.object.zoom = this.zoom0,
        this.object.updateProjectionMatrix(),
        this.dispatchEvent(fc),
        this.update(),
        this.state = Qt.NONE
    }
    update(t=null) {
        const e = this.object.position;
        ve.copy(e).sub(this.target),
        ve.applyQuaternion(this._quat),
        this._spherical.setFromVector3(ve),
        this.autoRotate && this.state === Qt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)),
        this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor,
        this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta,
        this._spherical.phi += this._sphericalDelta.phi);
        let i = this.minAzimuthAngle
          , r = this.maxAzimuthAngle;
        isFinite(i) && isFinite(r) && (i < -Math.PI ? i += Ue : i > Math.PI && (i -= Ue),
        r < -Math.PI ? r += Ue : r > Math.PI && (r -= Ue),
        i <= r ? this._spherical.theta = Math.max(i, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + r) / 2 ? Math.max(i, this._spherical.theta) : Math.min(r, this._spherical.theta)),
        this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)),
        this._spherical.makeSafe(),
        this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset),
        this.target.sub(this.cursor),
        this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
        this.target.add(this.cursor);
        let s = !1;
        if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
            this._spherical.radius = this._clampDistance(this._spherical.radius);
        else {
            const o = this._spherical.radius;
            this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale),
            s = o != this._spherical.radius
        }
        if (ve.setFromSpherical(this._spherical),
        ve.applyQuaternion(this._quatInverse),
        e.copy(this.target).add(ve),
        this.object.lookAt(this.target),
        this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor,
        this._sphericalDelta.phi *= 1 - this.dampingFactor,
        this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0),
        this._panOffset.set(0, 0, 0)),
        this.zoomToCursor && this._performCursorZoom) {
            let o = null;
            if (this.object.isPerspectiveCamera) {
                const a = ve.length();
                o = this._clampDistance(a * this._scale);
                const l = a - o;
                this.object.position.addScaledVector(this._dollyDirection, l),
                this.object.updateMatrixWorld(),
                s = !!l
            } else if (this.object.isOrthographicCamera) {
                const a = new F(this._mouse.x,this._mouse.y,0);
                a.unproject(this.object);
                const l = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
                this.object.updateProjectionMatrix(),
                s = l !== this.object.zoom;
                const c = new F(this._mouse.x,this._mouse.y,0);
                c.unproject(this.object),
                this.object.position.sub(c).add(a),
                this.object.updateMatrixWorld(),
                o = ve.length()
            } else
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),
                this.zoomToCursor = !1;
            o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (vs.origin.copy(this.object.position),
            vs.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(vs.direction)) < lg ? this.object.lookAt(this.target) : (mc.setFromNormalAndCoplanarPoint(this.object.up, this.target),
            vs.intersectPlane(mc, this.target))))
        } else if (this.object.isOrthographicCamera) {
            const o = this.object.zoom;
            this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
            o !== this.object.zoom && (this.object.updateProjectionMatrix(),
            s = !0)
        }
        return this._scale = 1,
        this._performCursorZoom = !1,
        s || this._lastPosition.distanceToSquared(this.object.position) > xo || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > xo || this._lastTargetPosition.distanceToSquared(this.target) > xo ? (this.dispatchEvent(fc),
        this._lastPosition.copy(this.object.position),
        this._lastQuaternion.copy(this.object.quaternion),
        this._lastTargetPosition.copy(this.target),
        !0) : !1
    }
    _getAutoRotationAngle(t) {
        return t !== null ? Ue / 60 * this.autoRotateSpeed * t : Ue / 60 / 60 * this.autoRotateSpeed
    }
    _getZoomScale(t) {
        const e = Math.abs(t * .01);
        return Math.pow(.95, this.zoomSpeed * e)
    }
    _rotateLeft(t) {
        this._sphericalDelta.theta -= t
    }
    _rotateUp(t) {
        this._sphericalDelta.phi -= t
    }
    _panLeft(t, e) {
        ve.setFromMatrixColumn(e, 0),
        ve.multiplyScalar(-t),
        this._panOffset.add(ve)
    }
    _panUp(t, e) {
        this.screenSpacePanning === !0 ? ve.setFromMatrixColumn(e, 1) : (ve.setFromMatrixColumn(e, 0),
        ve.crossVectors(this.object.up, ve)),
        ve.multiplyScalar(t),
        this._panOffset.add(ve)
    }
    _pan(t, e) {
        const i = this.domElement;
        if (this.object.isPerspectiveCamera) {
            const r = this.object.position;
            ve.copy(r).sub(this.target);
            let s = ve.length();
            s *= Math.tan(this.object.fov / 2 * Math.PI / 180),
            this._panLeft(2 * t * s / i.clientHeight, this.object.matrix),
            this._panUp(2 * e * s / i.clientHeight, this.object.matrix)
        } else
            this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / i.clientWidth, this.object.matrix),
            this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / i.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
            this.enablePan = !1)
    }
    _dollyOut(t) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        this.enableZoom = !1)
    }
    _dollyIn(t) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        this.enableZoom = !1)
    }
    _updateZoomParameters(t, e) {
        if (!this.zoomToCursor)
            return;
        this._performCursorZoom = !0;
        const i = this.domElement.getBoundingClientRect()
          , r = t - i.left
          , s = e - i.top
          , o = i.width
          , a = i.height;
        this._mouse.x = r / o * 2 - 1,
        this._mouse.y = -(s / a) * 2 + 1,
        this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize()
    }
    _clampDistance(t) {
        return Math.max(this.minDistance, Math.min(this.maxDistance, t))
    }
    _handleMouseDownRotate(t) {
        this._rotateStart.set(t.clientX, t.clientY)
    }
    _handleMouseDownDolly(t) {
        this._updateZoomParameters(t.clientX, t.clientX),
        this._dollyStart.set(t.clientX, t.clientY)
    }
    _handleMouseDownPan(t) {
        this._panStart.set(t.clientX, t.clientY)
    }
    _handleMouseMoveRotate(t) {
        this._rotateEnd.set(t.clientX, t.clientY),
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        const e = this.domElement;
        this._rotateLeft(Ue * this._rotateDelta.x / e.clientHeight),
        this._rotateUp(Ue * this._rotateDelta.y / e.clientHeight),
        this._rotateStart.copy(this._rotateEnd),
        this.update()
    }
    _handleMouseMoveDolly(t) {
        this._dollyEnd.set(t.clientX, t.clientY),
        this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
        this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
        this._dollyStart.copy(this._dollyEnd),
        this.update()
    }
    _handleMouseMovePan(t) {
        this._panEnd.set(t.clientX, t.clientY),
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd),
        this.update()
    }
    _handleMouseWheel(t) {
        this._updateZoomParameters(t.clientX, t.clientY),
        t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)),
        this.update()
    }
    _handleKeyDown(t) {
        let e = !1;
        switch (t.code) {
        case this.keys.UP:
            t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(Ue * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed),
            e = !0;
            break;
        case this.keys.BOTTOM:
            t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-Ue * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed),
            e = !0;
            break;
        case this.keys.LEFT:
            t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(Ue * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0),
            e = !0;
            break;
        case this.keys.RIGHT:
            t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-Ue * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0),
            e = !0;
            break
        }
        e && (t.preventDefault(),
        this.update())
    }
    _handleTouchStartRotate(t) {
        if (this._pointers.length === 1)
            this._rotateStart.set(t.pageX, t.pageY);
        else {
            const e = this._getSecondPointerPosition(t)
              , i = .5 * (t.pageX + e.x)
              , r = .5 * (t.pageY + e.y);
            this._rotateStart.set(i, r)
        }
    }
    _handleTouchStartPan(t) {
        if (this._pointers.length === 1)
            this._panStart.set(t.pageX, t.pageY);
        else {
            const e = this._getSecondPointerPosition(t)
              , i = .5 * (t.pageX + e.x)
              , r = .5 * (t.pageY + e.y);
            this._panStart.set(i, r)
        }
    }
    _handleTouchStartDolly(t) {
        const e = this._getSecondPointerPosition(t)
          , i = t.pageX - e.x
          , r = t.pageY - e.y
          , s = Math.sqrt(i * i + r * r);
        this._dollyStart.set(0, s)
    }
    _handleTouchStartDollyPan(t) {
        this.enableZoom && this._handleTouchStartDolly(t),
        this.enablePan && this._handleTouchStartPan(t)
    }
    _handleTouchStartDollyRotate(t) {
        this.enableZoom && this._handleTouchStartDolly(t),
        this.enableRotate && this._handleTouchStartRotate(t)
    }
    _handleTouchMoveRotate(t) {
        if (this._pointers.length == 1)
            this._rotateEnd.set(t.pageX, t.pageY);
        else {
            const i = this._getSecondPointerPosition(t)
              , r = .5 * (t.pageX + i.x)
              , s = .5 * (t.pageY + i.y);
            this._rotateEnd.set(r, s)
        }
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        const e = this.domElement;
        this._rotateLeft(Ue * this._rotateDelta.x / e.clientHeight),
        this._rotateUp(Ue * this._rotateDelta.y / e.clientHeight),
        this._rotateStart.copy(this._rotateEnd)
    }
    _handleTouchMovePan(t) {
        if (this._pointers.length === 1)
            this._panEnd.set(t.pageX, t.pageY);
        else {
            const e = this._getSecondPointerPosition(t)
              , i = .5 * (t.pageX + e.x)
              , r = .5 * (t.pageY + e.y);
            this._panEnd.set(i, r)
        }
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd)
    }
    _handleTouchMoveDolly(t) {
        const e = this._getSecondPointerPosition(t)
          , i = t.pageX - e.x
          , r = t.pageY - e.y
          , s = Math.sqrt(i * i + r * r);
        this._dollyEnd.set(0, s),
        this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)),
        this._dollyOut(this._dollyDelta.y),
        this._dollyStart.copy(this._dollyEnd);
        const o = (t.pageX + e.x) * .5
          , a = (t.pageY + e.y) * .5;
        this._updateZoomParameters(o, a)
    }
    _handleTouchMoveDollyPan(t) {
        this.enableZoom && this._handleTouchMoveDolly(t),
        this.enablePan && this._handleTouchMovePan(t)
    }
    _handleTouchMoveDollyRotate(t) {
        this.enableZoom && this._handleTouchMoveDolly(t),
        this.enableRotate && this._handleTouchMoveRotate(t)
    }
    _addPointer(t) {
        this._pointers.push(t.pointerId)
    }
    _removePointer(t) {
        delete this._pointerPositions[t.pointerId];
        for (let e = 0; e < this._pointers.length; e++)
            if (this._pointers[e] == t.pointerId) {
                this._pointers.splice(e, 1);
                return
            }
    }
    _isTrackingPointer(t) {
        for (let e = 0; e < this._pointers.length; e++)
            if (this._pointers[e] == t.pointerId)
                return !0;
        return !1
    }
    _trackPointer(t) {
        let e = this._pointerPositions[t.pointerId];
        e === void 0 && (e = new Ut,
        this._pointerPositions[t.pointerId] = e),
        e.set(t.pageX, t.pageY)
    }
    _getSecondPointerPosition(t) {
        const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
        return this._pointerPositions[e]
    }
    _customWheelEvent(t) {
        const e = t.deltaMode
          , i = {
            clientX: t.clientX,
            clientY: t.clientY,
            deltaY: t.deltaY
        };
        switch (e) {
        case 1:
            i.deltaY *= 16;
            break;
        case 2:
            i.deltaY *= 100;
            break
        }
        return t.ctrlKey && !this._controlActive && (i.deltaY *= 10),
        i
    }
}
function ug(n) {
    this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(n.pointerId),
    this.domElement.addEventListener("pointermove", this._onPointerMove),
    this.domElement.addEventListener("pointerup", this._onPointerUp)),
    !this._isTrackingPointer(n) && (this._addPointer(n),
    n.pointerType === "touch" ? this._onTouchStart(n) : this._onMouseDown(n)))
}
function hg(n) {
    this.enabled !== !1 && (n.pointerType === "touch" ? this._onTouchMove(n) : this._onMouseMove(n))
}
function dg(n) {
    switch (this._removePointer(n),
    this._pointers.length) {
    case 0:
        this.domElement.releasePointerCapture(n.pointerId),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.dispatchEvent(bu),
        this.state = Qt.NONE;
        break;
    case 1:
        const t = this._pointers[0]
          , e = this._pointerPositions[t];
        this._onTouchStart({
            pointerId: t,
            pageX: e.x,
            pageY: e.y
        });
        break
    }
}
function pg(n) {
    let t;
    switch (n.button) {
    case 0:
        t = this.mouseButtons.LEFT;
        break;
    case 1:
        t = this.mouseButtons.MIDDLE;
        break;
    case 2:
        t = this.mouseButtons.RIGHT;
        break;
    default:
        t = -1
    }
    switch (t) {
    case Wi.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseDownDolly(n),
        this.state = Qt.DOLLY;
        break;
    case Wi.ROTATE:
        if (n.ctrlKey || n.metaKey || n.shiftKey) {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(n),
            this.state = Qt.PAN
        } else {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(n),
            this.state = Qt.ROTATE
        }
        break;
    case Wi.PAN:
        if (n.ctrlKey || n.metaKey || n.shiftKey) {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(n),
            this.state = Qt.ROTATE
        } else {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(n),
            this.state = Qt.PAN
        }
        break;
    default:
        this.state = Qt.NONE
    }
    this.state !== Qt.NONE && this.dispatchEvent(La)
}
function fg(n) {
    switch (this.state) {
    case Qt.ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleMouseMoveRotate(n);
        break;
    case Qt.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseMoveDolly(n);
        break;
    case Qt.PAN:
        if (this.enablePan === !1)
            return;
        this._handleMouseMovePan(n);
        break
    }
}
function mg(n) {
    this.enabled === !1 || this.enableZoom === !1 || this.state !== Qt.NONE || (n.preventDefault(),
    this.dispatchEvent(La),
    this._handleMouseWheel(this._customWheelEvent(n)),
    this.dispatchEvent(bu))
}
function _g(n) {
    this.enabled !== !1 && this._handleKeyDown(n)
}
function vg(n) {
    switch (this._trackPointer(n),
    this._pointers.length) {
    case 1:
        switch (this.touches.ONE) {
        case Hi.ROTATE:
            if (this.enableRotate === !1)
                return;
            this._handleTouchStartRotate(n),
            this.state = Qt.TOUCH_ROTATE;
            break;
        case Hi.PAN:
            if (this.enablePan === !1)
                return;
            this._handleTouchStartPan(n),
            this.state = Qt.TOUCH_PAN;
            break;
        default:
            this.state = Qt.NONE
        }
        break;
    case 2:
        switch (this.touches.TWO) {
        case Hi.DOLLY_PAN:
            if (this.enableZoom === !1 && this.enablePan === !1)
                return;
            this._handleTouchStartDollyPan(n),
            this.state = Qt.TOUCH_DOLLY_PAN;
            break;
        case Hi.DOLLY_ROTATE:
            if (this.enableZoom === !1 && this.enableRotate === !1)
                return;
            this._handleTouchStartDollyRotate(n),
            this.state = Qt.TOUCH_DOLLY_ROTATE;
            break;
        default:
            this.state = Qt.NONE
        }
        break;
    default:
        this.state = Qt.NONE
    }
    this.state !== Qt.NONE && this.dispatchEvent(La)
}
function gg(n) {
    switch (this._trackPointer(n),
    this.state) {
    case Qt.TOUCH_ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleTouchMoveRotate(n),
        this.update();
        break;
    case Qt.TOUCH_PAN:
        if (this.enablePan === !1)
            return;
        this._handleTouchMovePan(n),
        this.update();
        break;
    case Qt.TOUCH_DOLLY_PAN:
        if (this.enableZoom === !1 && this.enablePan === !1)
            return;
        this._handleTouchMoveDollyPan(n),
        this.update();
        break;
    case Qt.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === !1 && this.enableRotate === !1)
            return;
        this._handleTouchMoveDollyRotate(n),
        this.update();
        break;
    default:
        this.state = Qt.NONE
    }
}
function xg(n) {
    this.enabled !== !1 && n.preventDefault()
}
function bg(n) {
    n.key === "Control" && (this._controlActive = !0,
    this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
function Eg(n) {
    n.key === "Control" && (this._controlActive = !1,
    this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
const wg = `precision highp float;

uniform float uTime;

uniform float uWavesAmplitude;
uniform float uWavesSpeed;
uniform float uWavesFrequency;
uniform float uWavesPersistence;
uniform float uWavesLacunarity;
uniform float uWavesIterations;

varying vec3 vNormal;
varying vec3 vWorldPosition;

//	Simplex 3D Noise 
//	by Ian McEwan, Stefan Gustavson (https://github.com/stegu/webgl-noise)
//
vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

// Simplex 2D noise
//
vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Helper function to calculate elevation at any point
float getElevation(float x, float z) {
  vec2 pos = vec2(x, z);

  float elevation = 0.0;
  float amplitude = 1.0;
  float frequency = uWavesFrequency;
  vec2 p = pos.xy;

  for(float i = 0.0; i < uWavesIterations; i++) {
    float noiseValue = snoise(p * frequency + uTime * uWavesSpeed);
    elevation += amplitude * noiseValue;
    amplitude *= uWavesPersistence;
    frequency *= uWavesLacunarity;
  }

  elevation *= uWavesAmplitude;

  return elevation;
}

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = getElevation(modelPosition.x, modelPosition.z);
  modelPosition.y += elevation;

  // Calculate normal using partial derivatives
  float eps = 0.001;
  vec3 tangent = normalize(vec3(eps, getElevation(modelPosition.x - eps, modelPosition.z) - elevation, 0.0));
  vec3 bitangent = normalize(vec3(0.0, getElevation(modelPosition.x, modelPosition.z - eps) - elevation, eps));
  vec3 objectNormal = normalize(cross(tangent, bitangent));

  vNormal = objectNormal;
  vWorldPosition = modelPosition.xyz;

  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}`
  , Mg = `precision highp float;

uniform float uOpacity;

uniform vec3 uTroughColor;
uniform vec3 uSurfaceColor;
uniform vec3 uPeakColor;

uniform float uPeakThreshold;
uniform float uPeakTransition;
uniform float uTroughThreshold;
uniform float uTroughTransition;

uniform float uFresnelScale;
uniform float uFresnelPower;

varying vec3 vNormal;
varying vec3 vWorldPosition;

uniform samplerCube uEnvironmentMap;

void main() {
  // Calculate vector from camera to the vertex
  vec3 viewDirection = normalize(vWorldPosition - cameraPosition);
  vec3 reflectedDirection = reflect(viewDirection, vNormal);
  reflectedDirection.x = -reflectedDirection.x;

  // Sample environment map to get the reflected color
  vec4 reflectionColor = textureCube(uEnvironmentMap, reflectedDirection);

  // Calculate fresnel effect
  float fresnel = uFresnelScale * pow(1.0 - clamp(dot(viewDirection, vNormal), 0.0, 1.0), uFresnelPower);

  // Calculate elevation-based color
  float elevation = vWorldPosition.y;

  // Calculate transition factors using smoothstep
  float peakFactor = smoothstep(uPeakThreshold - uPeakTransition, uPeakThreshold + uPeakTransition, elevation);
  float troughFactor = smoothstep(uTroughThreshold - uTroughTransition, uTroughThreshold + uTroughTransition, elevation);

  // Mix between trough and surface colors based on trough transition
  vec3 mixedColor1 = mix(uTroughColor, uSurfaceColor, troughFactor);

  // Mix between surface and peak colors based on peak transition 
  vec3 mixedColor2 = mix(mixedColor1, uPeakColor, peakFactor);

  // Mix the final color with the reflection color
  vec3 finalColor = mix(mixedColor2, reflectionColor.rgb, fresnel);

  gl_FragColor = vec4(finalColor, uOpacity);
}
`;
class yg extends sn {
    constructor(t={}) {
        super(),
        this.material = new dn({
            vertexShader: wg,
            fragmentShader: Mg,
            uniforms: {
                uTime: {
                    value: 0
                },
                uOpacity: {
                    value: .8
                },
                uEnvironmentMap: {
                    value: t.environmentMap
                },
                uWavesAmplitude: {
                    value: .025
                },
                uWavesFrequency: {
                    value: 1.07
                },
                uWavesPersistence: {
                    value: .3
                },
                uWavesLacunarity: {
                    value: 2.18
                },
                uWavesIterations: {
                    value: 8
                },
                uWavesSpeed: {
                    value: .4
                },
                uTroughColor: {
                    value: new Gt("#186691")
                },
                uSurfaceColor: {
                    value: new Gt("#9bd8c0")
                },
                uPeakColor: {
                    value: new Gt("#bbd8e0")
                },
                uPeakThreshold: {
                    value: .08
                },
                uPeakTransition: {
                    value: .05
                },
                uTroughThreshold: {
                    value: -.01
                },
                uTroughTransition: {
                    value: .15
                },
                uFresnelScale: {
                    value: .8
                },
                uFresnelPower: {
                    value: .5
                }
            },
            transparent: !0,
            depthTest: !0,
            side: ln
        }),
        this.geometry = new bi(2,2,t.resolution || 512,t.resolution || 512),
        this.rotation.x = Math.PI * .5,
        this.position.y = 0
    }
    update(t) {
        this.material.uniforms.uTime.value = t
    }
}
const Sg = `varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`
  , Tg = `uniform float uTime;
uniform sampler2D uTexture;
uniform vec3 uCausticsColor;
uniform float uCausticsIntensity;
uniform float uCausticsOffset;
uniform float uCausticsScale;
uniform float uCausticsSpeed;
uniform float uCausticsThickness;

varying vec2 vUv;

//	Simplex 3D Noise 
//	by Ian McEwan, Stefan Gustavson (https://github.com/stegu/webgl-noise)
//
vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //  x0 = x0 - 0. + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);    // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
  vec4 texColor = texture2D(uTexture, vUv);

  float caustics = 0.0;

  // Layer multiple caustic patterns
  caustics += uCausticsIntensity * (uCausticsOffset - abs(snoise(vec3(vUv.xy * uCausticsScale, uTime * uCausticsSpeed))));
  caustics += uCausticsIntensity * (uCausticsOffset - abs(snoise(vec3(vUv.yx * uCausticsScale, -uTime * uCausticsSpeed))));

  // Shape the caustics
  caustics = smoothstep(0.5 - uCausticsThickness, 0.5 + uCausticsThickness, caustics);

  vec3 finalColor = texColor.rgb + caustics * uCausticsColor;

  gl_FragColor = vec4(finalColor, 1.0);
}`;
class Cg extends sn {
    constructor(t={}) {
        super(),
        this.material = new dn({
            vertexShader: Sg,
            fragmentShader: Tg,
            uniforms: {
                uTexture: {
                    value: t.texture
                },
                uTime: {
                    value: 0
                },
                uCausticsColor: {
                    value: new Gt("#ffffff")
                },
                uCausticsIntensity: {
                    value: .2
                },
                uCausticsScale: {
                    value: 20
                },
                uCausticsSpeed: {
                    value: 1
                },
                uCausticsThickness: {
                    value: .4
                },
                uCausticsOffset: {
                    value: .75
                }
            }
        }),
        this.geometry = new bi(2,2),
        this.rotation.x = -Math.PI * .5,
        this.position.y = -.12
    }
    update(t) {
        this.material.uniforms.uTime.value = t
    }
}
/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */
function ne(n) {
    return n == null
}
function Ua(n) {
    return n !== null && typeof n == "object"
}
function fa(n) {
    return n !== null && typeof n == "object"
}
function Ag(n, t) {
    if (n.length !== t.length)
        return !1;
    for (let e = 0; e < n.length; e++)
        if (n[e] !== t[e])
            return !1;
    return !0
}
function mi(n, t) {
    return Array.from(new Set([...Object.keys(n), ...Object.keys(t)])).reduce( (i, r) => {
        const s = n[r]
          , o = t[r];
        return fa(s) && fa(o) ? Object.assign(Object.assign({}, i), {
            [r]: mi(s, o)
        }) : Object.assign(Object.assign({}, i), {
            [r]: r in t ? o : s
        })
    }
    , {})
}
function Ia(n) {
    return Ua(n) ? "target"in n : !1
}
const Pg = {
    alreadydisposed: () => "View has been already disposed",
    invalidparams: n => `Invalid parameters for '${n.name}'`,
    nomatchingcontroller: n => `No matching controller for '${n.key}'`,
    nomatchingview: n => `No matching view for '${JSON.stringify(n.params)}'`,
    notbindable: () => "Value is not bindable",
    notcompatible: n => `Not compatible with  plugin '${n.id}'`,
    propertynotfound: n => `Property '${n.name}' not found`,
    shouldneverhappen: () => "This error should never happen"
};
class ue {
    static alreadyDisposed() {
        return new ue({
            type: "alreadydisposed"
        })
    }
    static notBindable() {
        return new ue({
            type: "notbindable"
        })
    }
    static notCompatible(t, e) {
        return new ue({
            type: "notcompatible",
            context: {
                id: `${t}.${e}`
            }
        })
    }
    static propertyNotFound(t) {
        return new ue({
            type: "propertynotfound",
            context: {
                name: t
            }
        })
    }
    static shouldNeverHappen() {
        return new ue({
            type: "shouldneverhappen"
        })
    }
    constructor(t) {
        var e;
        this.message = (e = Pg[t.type](t.context)) !== null && e !== void 0 ? e : "Unexpected error",
        this.name = this.constructor.name,
        this.stack = new Error(this.message).stack,
        this.type = t.type
    }
    toString() {
        return this.message
    }
}
class Ps {
    constructor(t, e) {
        this.obj_ = t,
        this.key = e
    }
    static isBindable(t) {
        return !(t === null || typeof t != "object" && typeof t != "function")
    }
    read() {
        return this.obj_[this.key]
    }
    write(t) {
        this.obj_[this.key] = t
    }
    writeProperty(t, e) {
        const i = this.read();
        if (!Ps.isBindable(i))
            throw ue.notBindable();
        if (!(t in i))
            throw ue.propertyNotFound(t);
        i[t] = e
    }
}
class _e {
    constructor() {
        this.observers_ = {}
    }
    on(t, e, i) {
        var r;
        let s = this.observers_[t];
        return s || (s = this.observers_[t] = []),
        s.push({
            handler: e,
            key: (r = i == null ? void 0 : i.key) !== null && r !== void 0 ? r : e
        }),
        this
    }
    off(t, e) {
        const i = this.observers_[t];
        return i && (this.observers_[t] = i.filter(r => r.key !== e)),
        this
    }
    emit(t, e) {
        const i = this.observers_[t];
        i && i.forEach(r => {
            r.handler(e)
        }
        )
    }
}
class Rg {
    constructor(t, e) {
        var i;
        this.constraint_ = e == null ? void 0 : e.constraint,
        this.equals_ = (i = e == null ? void 0 : e.equals) !== null && i !== void 0 ? i : (r, s) => r === s,
        this.emitter = new _e,
        this.rawValue_ = t
    }
    get constraint() {
        return this.constraint_
    }
    get rawValue() {
        return this.rawValue_
    }
    set rawValue(t) {
        this.setRawValue(t, {
            forceEmit: !1,
            last: !0
        })
    }
    setRawValue(t, e) {
        const i = e ?? {
            forceEmit: !1,
            last: !0
        }
          , r = this.constraint_ ? this.constraint_.constrain(t) : t
          , s = this.rawValue_;
        this.equals_(s, r) && !i.forceEmit || (this.emitter.emit("beforechange", {
            sender: this
        }),
        this.rawValue_ = r,
        this.emitter.emit("change", {
            options: i,
            previousRawValue: s,
            rawValue: r,
            sender: this
        }))
    }
}
class Dg {
    constructor(t) {
        this.emitter = new _e,
        this.value_ = t
    }
    get rawValue() {
        return this.value_
    }
    set rawValue(t) {
        this.setRawValue(t, {
            forceEmit: !1,
            last: !0
        })
    }
    setRawValue(t, e) {
        const i = e ?? {
            forceEmit: !1,
            last: !0
        }
          , r = this.value_;
        r === t && !i.forceEmit || (this.emitter.emit("beforechange", {
            sender: this
        }),
        this.value_ = t,
        this.emitter.emit("change", {
            options: i,
            previousRawValue: r,
            rawValue: this.value_,
            sender: this
        }))
    }
}
class Lg {
    constructor(t) {
        this.emitter = new _e,
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this),
        this.onValueChange_ = this.onValueChange_.bind(this),
        this.value_ = t,
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_),
        this.value_.emitter.on("change", this.onValueChange_)
    }
    get rawValue() {
        return this.value_.rawValue
    }
    onValueBeforeChange_(t) {
        this.emitter.emit("beforechange", Object.assign(Object.assign({}, t), {
            sender: this
        }))
    }
    onValueChange_(t) {
        this.emitter.emit("change", Object.assign(Object.assign({}, t), {
            sender: this
        }))
    }
}
function se(n, t) {
    const e = t == null ? void 0 : t.constraint
      , i = t == null ? void 0 : t.equals;
    return !e && !i ? new Dg(n) : new Rg(n,t)
}
function Ug(n) {
    return [new Lg(n), (t, e) => {
        n.setRawValue(t, e)
    }
    ]
}
class Lt {
    constructor(t) {
        this.emitter = new _e,
        this.valMap_ = t;
        for (const e in this.valMap_)
            this.valMap_[e].emitter.on("change", () => {
                this.emitter.emit("change", {
                    key: e,
                    sender: this
                })
            }
            )
    }
    static createCore(t) {
        return Object.keys(t).reduce( (i, r) => Object.assign(i, {
            [r]: se(t[r])
        }), {})
    }
    static fromObject(t) {
        const e = this.createCore(t);
        return new Lt(e)
    }
    get(t) {
        return this.valMap_[t].rawValue
    }
    set(t, e) {
        this.valMap_[t].rawValue = e
    }
    value(t) {
        return this.valMap_[t]
    }
}
class Or {
    constructor(t) {
        this.values = Lt.fromObject({
            max: t.max,
            min: t.min
        })
    }
    constrain(t) {
        const e = this.values.get("max")
          , i = this.values.get("min");
        return Math.min(Math.max(t, i), e)
    }
}
class Ig {
    constructor(t) {
        this.values = Lt.fromObject({
            max: t.max,
            min: t.min
        })
    }
    constrain(t) {
        const e = this.values.get("max")
          , i = this.values.get("min");
        let r = t;
        return ne(i) || (r = Math.max(r, i)),
        ne(e) || (r = Math.min(r, e)),
        r
    }
}
class Ng {
    constructor(t, e=0) {
        this.step = t,
        this.origin = e
    }
    constrain(t) {
        const e = this.origin % this.step
          , i = Math.round((t - e) / this.step);
        return e + i * this.step
    }
}
class Fg {
    constructor(t) {
        this.text = t
    }
    evaluate() {
        return Number(this.text)
    }
    toString() {
        return this.text
    }
}
const Og = {
    "**": (n, t) => Math.pow(n, t),
    "*": (n, t) => n * t,
    "/": (n, t) => n / t,
    "%": (n, t) => n % t,
    "+": (n, t) => n + t,
    "-": (n, t) => n - t,
    "<<": (n, t) => n << t,
    ">>": (n, t) => n >> t,
    ">>>": (n, t) => n >>> t,
    "&": (n, t) => n & t,
    "^": (n, t) => n ^ t,
    "|": (n, t) => n | t
};
class Bg {
    constructor(t, e, i) {
        this.left = e,
        this.operator = t,
        this.right = i
    }
    evaluate() {
        const t = Og[this.operator];
        if (!t)
            throw new Error(`unexpected binary operator: '${this.operator}`);
        return t(this.left.evaluate(), this.right.evaluate())
    }
    toString() {
        return ["b(", this.left.toString(), this.operator, this.right.toString(), ")"].join(" ")
    }
}
const kg = {
    "+": n => n,
    "-": n => -n,
    "~": n => ~n
};
class Vg {
    constructor(t, e) {
        this.operator = t,
        this.expression = e
    }
    evaluate() {
        const t = kg[this.operator];
        if (!t)
            throw new Error(`unexpected unary operator: '${this.operator}`);
        return t(this.expression.evaluate())
    }
    toString() {
        return ["u(", this.operator, this.expression.toString(), ")"].join(" ")
    }
}
function Na(n) {
    return (t, e) => {
        for (let i = 0; i < n.length; i++) {
            const r = n[i](t, e);
            if (r !== "")
                return r
        }
        return ""
    }
}
function Cr(n, t) {
    var e;
    const i = n.substr(t).match(/^\s+/);
    return (e = i && i[0]) !== null && e !== void 0 ? e : ""
}
function zg(n, t) {
    const e = n.substr(t, 1);
    return e.match(/^[1-9]$/) ? e : ""
}
function Ar(n, t) {
    var e;
    const i = n.substr(t).match(/^[0-9]+/);
    return (e = i && i[0]) !== null && e !== void 0 ? e : ""
}
function Hg(n, t) {
    const e = Ar(n, t);
    if (e !== "")
        return e;
    const i = n.substr(t, 1);
    if (t += 1,
    i !== "-" && i !== "+")
        return "";
    const r = Ar(n, t);
    return r === "" ? "" : i + r
}
function Fa(n, t) {
    const e = n.substr(t, 1);
    if (t += 1,
    e.toLowerCase() !== "e")
        return "";
    const i = Hg(n, t);
    return i === "" ? "" : e + i
}
function Eu(n, t) {
    const e = n.substr(t, 1);
    if (e === "0")
        return e;
    const i = zg(n, t);
    return t += i.length,
    i === "" ? "" : i + Ar(n, t)
}
function Gg(n, t) {
    const e = Eu(n, t);
    if (t += e.length,
    e === "")
        return "";
    const i = n.substr(t, 1);
    if (t += i.length,
    i !== ".")
        return "";
    const r = Ar(n, t);
    return t += r.length,
    e + i + r + Fa(n, t)
}
function Wg(n, t) {
    const e = n.substr(t, 1);
    if (t += e.length,
    e !== ".")
        return "";
    const i = Ar(n, t);
    return t += i.length,
    i === "" ? "" : e + i + Fa(n, t)
}
function Xg(n, t) {
    const e = Eu(n, t);
    return t += e.length,
    e === "" ? "" : e + Fa(n, t)
}
const qg = Na([Gg, Wg, Xg]);
function jg(n, t) {
    var e;
    const i = n.substr(t).match(/^[01]+/);
    return (e = i && i[0]) !== null && e !== void 0 ? e : ""
}
function Yg(n, t) {
    const e = n.substr(t, 2);
    if (t += e.length,
    e.toLowerCase() !== "0b")
        return "";
    const i = jg(n, t);
    return i === "" ? "" : e + i
}
function Kg(n, t) {
    var e;
    const i = n.substr(t).match(/^[0-7]+/);
    return (e = i && i[0]) !== null && e !== void 0 ? e : ""
}
function $g(n, t) {
    const e = n.substr(t, 2);
    if (t += e.length,
    e.toLowerCase() !== "0o")
        return "";
    const i = Kg(n, t);
    return i === "" ? "" : e + i
}
function Zg(n, t) {
    var e;
    const i = n.substr(t).match(/^[0-9a-f]+/i);
    return (e = i && i[0]) !== null && e !== void 0 ? e : ""
}
function Jg(n, t) {
    const e = n.substr(t, 2);
    if (t += e.length,
    e.toLowerCase() !== "0x")
        return "";
    const i = Zg(n, t);
    return i === "" ? "" : e + i
}
const Qg = Na([Yg, $g, Jg])
  , tx = Na([Qg, qg]);
function ex(n, t) {
    const e = tx(n, t);
    return t += e.length,
    e === "" ? null : {
        evaluable: new Fg(e),
        cursor: t
    }
}
function nx(n, t) {
    const e = n.substr(t, 1);
    if (t += e.length,
    e !== "(")
        return null;
    const i = Mu(n, t);
    if (!i)
        return null;
    t = i.cursor,
    t += Cr(n, t).length;
    const r = n.substr(t, 1);
    return t += r.length,
    r !== ")" ? null : {
        evaluable: i.evaluable,
        cursor: t
    }
}
function ix(n, t) {
    var e;
    return (e = ex(n, t)) !== null && e !== void 0 ? e : nx(n, t)
}
function wu(n, t) {
    const e = ix(n, t);
    if (e)
        return e;
    const i = n.substr(t, 1);
    if (t += i.length,
    i !== "+" && i !== "-" && i !== "~")
        return null;
    const r = wu(n, t);
    return r ? (t = r.cursor,
    {
        cursor: t,
        evaluable: new Vg(i,r.evaluable)
    }) : null
}
function rx(n, t, e) {
    e += Cr(t, e).length;
    const i = n.filter(r => t.startsWith(r, e))[0];
    return i ? (e += i.length,
    e += Cr(t, e).length,
    {
        cursor: e,
        operator: i
    }) : null
}
function sx(n, t) {
    return (e, i) => {
        const r = n(e, i);
        if (!r)
            return null;
        i = r.cursor;
        let s = r.evaluable;
        for (; ; ) {
            const o = rx(t, e, i);
            if (!o)
                break;
            i = o.cursor;
            const a = n(e, i);
            if (!a)
                return null;
            i = a.cursor,
            s = new Bg(o.operator,s,a.evaluable)
        }
        return s ? {
            cursor: i,
            evaluable: s
        } : null
    }
}
const ox = [["**"], ["*", "/", "%"], ["+", "-"], ["<<", ">>>", ">>"], ["&"], ["^"], ["|"]].reduce( (n, t) => sx(n, t), wu);
function Mu(n, t) {
    return t += Cr(n, t).length,
    ox(n, t)
}
function ax(n) {
    const t = Mu(n, 0);
    return !t || t.cursor + Cr(n, t.cursor).length !== n.length ? null : t.evaluable
}
function Rn(n) {
    var t;
    const e = ax(n);
    return (t = e == null ? void 0 : e.evaluate()) !== null && t !== void 0 ? t : null
}
function yu(n) {
    if (typeof n == "number")
        return n;
    if (typeof n == "string") {
        const t = Rn(n);
        if (!ne(t))
            return t
    }
    return 0
}
function lx(n) {
    return String(n)
}
function Oe(n) {
    return t => t.toFixed(Math.max(Math.min(n, 20), 0))
}
function $t(n, t, e, i, r) {
    const s = (n - t) / (e - t);
    return i + s * (r - i)
}
function _c(n) {
    return String(n.toFixed(10)).split(".")[1].replace(/0+$/, "").length
}
function ge(n, t, e) {
    return Math.min(Math.max(n, t), e)
}
function Su(n, t) {
    return (n % t + t) % t
}
function cx(n, t) {
    return ne(n.step) ? Math.max(_c(t), 2) : _c(n.step)
}
function Tu(n) {
    var t;
    return (t = n.step) !== null && t !== void 0 ? t : 1
}
function Cu(n, t) {
    var e;
    const i = Math.abs((e = n.step) !== null && e !== void 0 ? e : t);
    return i === 0 ? .1 : Math.pow(10, Math.floor(Math.log10(i)) - 1)
}
function Au(n, t) {
    return ne(n.step) ? null : new Ng(n.step,t)
}
function Pu(n) {
    return !ne(n.max) && !ne(n.min) ? new Or({
        max: n.max,
        min: n.min
    }) : !ne(n.max) || !ne(n.min) ? new Ig({
        max: n.max,
        min: n.min
    }) : null
}
function Ru(n, t) {
    var e, i, r;
    return {
        formatter: (e = n.format) !== null && e !== void 0 ? e : Oe(cx(n, t)),
        keyScale: (i = n.keyScale) !== null && i !== void 0 ? i : Tu(n),
        pointerScale: (r = n.pointerScale) !== null && r !== void 0 ? r : Cu(n, t)
    }
}
function Du(n) {
    return {
        format: n.optional.function,
        keyScale: n.optional.number,
        max: n.optional.number,
        min: n.optional.number,
        pointerScale: n.optional.number,
        step: n.optional.number
    }
}
function Oa(n) {
    return {
        constraint: n.constraint,
        textProps: Lt.fromObject(Ru(n.params, n.initialValue))
    }
}
class Ei {
    constructor(t) {
        this.controller = t
    }
    get element() {
        return this.controller.view.element
    }
    get disabled() {
        return this.controller.viewProps.get("disabled")
    }
    set disabled(t) {
        this.controller.viewProps.set("disabled", t)
    }
    get hidden() {
        return this.controller.viewProps.get("hidden")
    }
    set hidden(t) {
        this.controller.viewProps.set("hidden", t)
    }
    dispose() {
        this.controller.viewProps.set("disposed", !0)
    }
    importState(t) {
        return this.controller.importState(t)
    }
    exportState() {
        return this.controller.exportState()
    }
}
class Bs {
    constructor(t) {
        this.target = t
    }
}
class Br extends Bs {
    constructor(t, e, i) {
        super(t),
        this.value = e,
        this.last = i ?? !0
    }
}
class ux extends Bs {
    constructor(t, e) {
        super(t),
        this.expanded = e
    }
}
class hx extends Bs {
    constructor(t, e) {
        super(t),
        this.index = e
    }
}
class dx extends Bs {
    constructor(t, e) {
        super(t),
        this.native = e
    }
}
class Pr extends Ei {
    constructor(t) {
        super(t),
        this.onValueChange_ = this.onValueChange_.bind(this),
        this.emitter_ = new _e,
        this.controller.value.emitter.on("change", this.onValueChange_)
    }
    get label() {
        return this.controller.labelController.props.get("label")
    }
    set label(t) {
        this.controller.labelController.props.set("label", t)
    }
    get key() {
        return this.controller.value.binding.target.key
    }
    get tag() {
        return this.controller.tag
    }
    set tag(t) {
        this.controller.tag = t
    }
    on(t, e) {
        const i = e.bind(this);
        return this.emitter_.on(t, r => {
            i(r)
        }
        , {
            key: e
        }),
        this
    }
    off(t, e) {
        return this.emitter_.off(t, e),
        this
    }
    refresh() {
        this.controller.value.fetch()
    }
    onValueChange_(t) {
        const e = this.controller.value;
        this.emitter_.emit("change", new Br(this,e.binding.target.read(),t.options.last))
    }
}
class px {
    constructor(t, e) {
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this),
        this.onValueChange_ = this.onValueChange_.bind(this),
        this.binding = e,
        this.value_ = t,
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_),
        this.value_.emitter.on("change", this.onValueChange_),
        this.emitter = new _e
    }
    get rawValue() {
        return this.value_.rawValue
    }
    set rawValue(t) {
        this.value_.rawValue = t
    }
    setRawValue(t, e) {
        this.value_.setRawValue(t, e)
    }
    fetch() {
        this.value_.rawValue = this.binding.read()
    }
    push() {
        this.binding.write(this.value_.rawValue)
    }
    onValueBeforeChange_(t) {
        this.emitter.emit("beforechange", Object.assign(Object.assign({}, t), {
            sender: this
        }))
    }
    onValueChange_(t) {
        this.push(),
        this.emitter.emit("change", Object.assign(Object.assign({}, t), {
            sender: this
        }))
    }
}
function fx(n) {
    if (!("binding"in n))
        return !1;
    const t = n.binding;
    return Ia(t) && "read"in t && "write"in t
}
function mx(n, t) {
    const i = Object.keys(t).reduce( (r, s) => {
        if (r === void 0)
            return;
        const o = t[s]
          , a = o(n[s]);
        return a.succeeded ? Object.assign(Object.assign({}, r), {
            [s]: a.value
        }) : void 0
    }
    , {});
    return i
}
function _x(n, t) {
    return n.reduce( (e, i) => {
        if (e === void 0)
            return;
        const r = t(i);
        if (!(!r.succeeded || r.value === void 0))
            return [...e, r.value]
    }
    , [])
}
function vx(n) {
    return n === null ? !1 : typeof n == "object"
}
function En(n) {
    return t => e => {
        if (!t && e === void 0)
            return {
                succeeded: !1,
                value: void 0
            };
        if (t && e === void 0)
            return {
                succeeded: !0,
                value: void 0
            };
        const i = n(e);
        return i !== void 0 ? {
            succeeded: !0,
            value: i
        } : {
            succeeded: !1,
            value: void 0
        }
    }
}
function vc(n) {
    return {
        custom: t => En(t)(n),
        boolean: En(t => typeof t == "boolean" ? t : void 0)(n),
        number: En(t => typeof t == "number" ? t : void 0)(n),
        string: En(t => typeof t == "string" ? t : void 0)(n),
        function: En(t => typeof t == "function" ? t : void 0)(n),
        constant: t => En(e => e === t ? t : void 0)(n),
        raw: En(t => t)(n),
        object: t => En(e => {
            if (vx(e))
                return mx(e, t)
        }
        )(n),
        array: t => En(e => {
            if (Array.isArray(e))
                return _x(e, t)
        }
        )(n)
    }
}
const ma = {
    optional: vc(!0),
    required: vc(!1)
};
function ae(n, t) {
    const e = t(ma)
      , i = ma.required.object(e)(n);
    return i.succeeded ? i.value : void 0
}
function He(n, t, e, i) {
    if (t && !t(n))
        return !1;
    const r = ae(n, e);
    return r ? i(r) : !1
}
function Ge(n, t) {
    var e;
    return mi((e = n == null ? void 0 : n()) !== null && e !== void 0 ? e : {}, t)
}
function hi(n) {
    return "value"in n
}
function Lu(n) {
    if (!Ua(n) || !("binding"in n))
        return !1;
    const t = n.binding;
    return Ia(t)
}
const un = "http://www.w3.org/2000/svg";
function Rs(n) {
    n.offsetHeight
}
function gx(n, t) {
    const e = n.style.transition;
    n.style.transition = "none",
    t(),
    n.style.transition = e
}
function Ba(n) {
    return n.ontouchstart !== void 0
}
function xx() {
    return globalThis
}
function bx() {
    return xx().document
}
function Ex(n) {
    const t = n.ownerDocument.defaultView;
    return t && "document"in t ? n.getContext("2d", {
        willReadFrequently: !0
    }) : null
}
const wx = {
    check: '<path d="M2 8l4 4l8 -8"/>',
    dropdown: '<path d="M5 7h6l-3 3 z"/>',
    p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'
};
function ks(n, t) {
    const e = n.createElementNS(un, "svg");
    return e.innerHTML = wx[t],
    e
}
function Uu(n, t, e) {
    n.insertBefore(t, n.children[e])
}
function ka(n) {
    n.parentElement && n.parentElement.removeChild(n)
}
function Iu(n) {
    for (; n.children.length > 0; )
        n.removeChild(n.children[0])
}
function Mx(n) {
    for (; n.childNodes.length > 0; )
        n.removeChild(n.childNodes[0])
}
function Nu(n) {
    return n.relatedTarget ? n.relatedTarget : "explicitOriginalTarget"in n ? n.explicitOriginalTarget : null
}
function Cn(n, t) {
    n.emitter.on("change", e => {
        t(e.rawValue)
    }
    ),
    t(n.rawValue)
}
function pn(n, t, e) {
    Cn(n.value(t), e)
}
const yx = "tp";
function Wt(n) {
    return (e, i) => [yx, "-", n, "v", e ? `_${e}` : "", i ? `-${i}` : ""].join("")
}
const vr = Wt("lbl");
function Sx(n, t) {
    const e = n.createDocumentFragment();
    return t.split(`
`).map(r => n.createTextNode(r)).forEach( (r, s) => {
        s > 0 && e.appendChild(n.createElement("br")),
        e.appendChild(r)
    }
    ),
    e
}
class Fu {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(vr()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("div");
        i.classList.add(vr("l")),
        pn(e.props, "label", s => {
            ne(s) ? this.element.classList.add(vr(void 0, "nol")) : (this.element.classList.remove(vr(void 0, "nol")),
            Mx(i),
            i.appendChild(Sx(t, s)))
        }
        ),
        this.element.appendChild(i),
        this.labelElement = i;
        const r = t.createElement("div");
        r.classList.add(vr("v")),
        this.element.appendChild(r),
        this.valueElement = r
    }
}
class Ou {
    constructor(t, e) {
        this.props = e.props,
        this.valueController = e.valueController,
        this.viewProps = e.valueController.viewProps,
        this.view = new Fu(t,{
            props: e.props,
            viewProps: this.viewProps
        }),
        this.view.valueElement.appendChild(this.valueController.view.element)
    }
    importProps(t) {
        return He(t, null, e => ({
            label: e.optional.string
        }), e => (this.props.set("label", e.label),
        !0))
    }
    exportProps() {
        return Ge(null, {
            label: this.props.get("label")
        })
    }
}
function Tx() {
    return ["veryfirst", "first", "last", "verylast"]
}
const gc = Wt("")
  , xc = {
    veryfirst: "vfst",
    first: "fst",
    last: "lst",
    verylast: "vlst"
};
class Vs {
    constructor(t) {
        this.parent_ = null,
        this.blade = t.blade,
        this.view = t.view,
        this.viewProps = t.viewProps;
        const e = this.view.element;
        this.blade.value("positions").emitter.on("change", () => {
            Tx().forEach(i => {
                e.classList.remove(gc(void 0, xc[i]))
            }
            ),
            this.blade.get("positions").forEach(i => {
                e.classList.add(gc(void 0, xc[i]))
            }
            )
        }
        ),
        this.viewProps.handleDispose( () => {
            ka(e)
        }
        )
    }
    get parent() {
        return this.parent_
    }
    set parent(t) {
        this.parent_ = t,
        this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null)
    }
    importState(t) {
        return He(t, null, e => ({
            disabled: e.required.boolean,
            hidden: e.required.boolean
        }), e => (this.viewProps.importState(e),
        !0))
    }
    exportState() {
        return Ge(null, Object.assign({}, this.viewProps.exportState()))
    }
}
class _i extends Vs {
    constructor(t, e) {
        if (e.value !== e.valueController.value)
            throw ue.shouldNeverHappen();
        const i = e.valueController.viewProps
          , r = new Ou(t,{
            blade: e.blade,
            props: e.props,
            valueController: e.valueController
        });
        super(Object.assign(Object.assign({}, e), {
            view: new Fu(t,{
                props: e.props,
                viewProps: i
            }),
            viewProps: i
        })),
        this.labelController = r,
        this.value = e.value,
        this.valueController = e.valueController,
        this.view.valueElement.appendChild(this.valueController.view.element)
    }
    importState(t) {
        return He(t, e => {
            var i, r, s;
            return super.importState(e) && this.labelController.importProps(e) && ((s = (r = (i = this.valueController).importProps) === null || r === void 0 ? void 0 : r.call(i, t)) !== null && s !== void 0 ? s : !0)
        }
        , e => ({
            value: e.optional.raw
        }), e => (e.value && (this.value.rawValue = e.value),
        !0))
    }
    exportState() {
        var t, e, i;
        return Ge( () => super.exportState(), Object.assign(Object.assign({
            value: this.value.rawValue
        }, this.labelController.exportProps()), (i = (e = (t = this.valueController).exportProps) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : {}))
    }
}
function bc(n) {
    const t = Object.assign({}, n);
    return delete t.value,
    t
}
class Bu extends _i {
    constructor(t, e) {
        super(t, e),
        this.tag = e.tag
    }
    importState(t) {
        return He(t, e => super.importState(bc(t)), e => ({
            tag: e.optional.string
        }), e => (this.tag = e.tag,
        !0))
    }
    exportState() {
        return Ge( () => bc(super.exportState()), {
            binding: {
                key: this.value.binding.target.key,
                value: this.value.binding.target.read()
            },
            tag: this.tag
        })
    }
}
function Cx(n) {
    return hi(n) && Lu(n.value)
}
class Ax extends Bu {
    importState(t) {
        return He(t, e => super.importState(e), e => ({
            binding: e.required.object({
                value: e.required.raw
            })
        }), e => (this.value.binding.inject(e.binding.value),
        this.value.fetch(),
        !0))
    }
}
function Px(n) {
    return hi(n) && fx(n.value)
}
function ku(n, t) {
    for (; n.length < t; )
        n.push(void 0)
}
function Rx(n) {
    const t = [];
    return ku(t, n),
    t
}
function Dx(n) {
    const t = n.indexOf(void 0);
    return t < 0 ? n : n.slice(0, t)
}
function Lx(n, t) {
    const e = [...Dx(n), t];
    return e.length > n.length ? e.splice(0, e.length - n.length) : ku(e, n.length),
    e
}
class Ux {
    constructor(t) {
        this.emitter = new _e,
        this.onTick_ = this.onTick_.bind(this),
        this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this),
        this.onValueChange_ = this.onValueChange_.bind(this),
        this.binding = t.binding,
        this.value_ = se(Rx(t.bufferSize)),
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_),
        this.value_.emitter.on("change", this.onValueChange_),
        this.ticker = t.ticker,
        this.ticker.emitter.on("tick", this.onTick_),
        this.fetch()
    }
    get rawValue() {
        return this.value_.rawValue
    }
    set rawValue(t) {
        this.value_.rawValue = t
    }
    setRawValue(t, e) {
        this.value_.setRawValue(t, e)
    }
    fetch() {
        this.value_.rawValue = Lx(this.value_.rawValue, this.binding.read())
    }
    onTick_() {
        this.fetch()
    }
    onValueBeforeChange_(t) {
        this.emitter.emit("beforechange", Object.assign(Object.assign({}, t), {
            sender: this
        }))
    }
    onValueChange_(t) {
        this.emitter.emit("change", Object.assign(Object.assign({}, t), {
            sender: this
        }))
    }
}
function Ix(n) {
    if (!("binding"in n))
        return !1;
    const t = n.binding;
    return Ia(t) && "read"in t && !("write"in t)
}
class Nx extends Bu {
    exportState() {
        return Ge( () => super.exportState(), {
            binding: {
                readonly: !0
            }
        })
    }
}
function Fx(n) {
    return hi(n) && Ix(n.value)
}
class Ox extends Ei {
    get label() {
        return this.controller.labelController.props.get("label")
    }
    set label(t) {
        this.controller.labelController.props.set("label", t)
    }
    get title() {
        var t;
        return (t = this.controller.buttonController.props.get("title")) !== null && t !== void 0 ? t : ""
    }
    set title(t) {
        this.controller.buttonController.props.set("title", t)
    }
    on(t, e) {
        const i = e.bind(this);
        return this.controller.buttonController.emitter.on(t, s => {
            i(new dx(this,s.nativeEvent))
        }
        ),
        this
    }
    off(t, e) {
        return this.controller.buttonController.emitter.off(t, e),
        this
    }
}
function Bx(n, t, e) {
    e ? n.classList.add(t) : n.classList.remove(t)
}
function or(n, t) {
    return e => {
        Bx(n, t, e)
    }
}
function Va(n, t) {
    Cn(n, e => {
        t.textContent = e ?? ""
    }
    )
}
const bo = Wt("btn");
class kx {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(bo()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("button");
        i.classList.add(bo("b")),
        e.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        this.buttonElement = i;
        const r = t.createElement("div");
        r.classList.add(bo("t")),
        Va(e.props.value("title"), r),
        this.buttonElement.appendChild(r)
    }
}
class Vx {
    constructor(t, e) {
        this.emitter = new _e,
        this.onClick_ = this.onClick_.bind(this),
        this.props = e.props,
        this.viewProps = e.viewProps,
        this.view = new kx(t,{
            props: this.props,
            viewProps: this.viewProps
        }),
        this.view.buttonElement.addEventListener("click", this.onClick_)
    }
    importProps(t) {
        return He(t, null, e => ({
            title: e.optional.string
        }), e => (this.props.set("title", e.title),
        !0))
    }
    exportProps() {
        return Ge(null, {
            title: this.props.get("title")
        })
    }
    onClick_(t) {
        this.emitter.emit("click", {
            nativeEvent: t,
            sender: this
        })
    }
}
class Ec extends Vs {
    constructor(t, e) {
        const i = new Vx(t,{
            props: e.buttonProps,
            viewProps: e.viewProps
        })
          , r = new Ou(t,{
            blade: e.blade,
            props: e.labelProps,
            valueController: i
        });
        super({
            blade: e.blade,
            view: r.view,
            viewProps: e.viewProps
        }),
        this.buttonController = i,
        this.labelController = r
    }
    importState(t) {
        return He(t, e => super.importState(e) && this.buttonController.importProps(e) && this.labelController.importProps(e), () => ({}), () => !0)
    }
    exportState() {
        return Ge( () => super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()))
    }
}
class Vu {
    constructor(t) {
        const [e,i] = t.split("-")
          , r = e.split(".");
        this.major = parseInt(r[0], 10),
        this.minor = parseInt(r[1], 10),
        this.patch = parseInt(r[2], 10),
        this.prerelease = i ?? null
    }
    toString() {
        const t = [this.major, this.minor, this.patch].join(".");
        return this.prerelease !== null ? [t, this.prerelease].join("-") : t
    }
}
const ar = new Vu("2.0.5");
function De(n) {
    return Object.assign({
        core: ar
    }, n)
}
const zx = De({
    id: "button",
    type: "blade",
    accept(n) {
        const t = ae(n, e => ({
            title: e.required.string,
            view: e.required.constant("button"),
            label: e.optional.string
        }));
        return t ? {
            params: t
        } : null
    },
    controller(n) {
        return new Ec(n.document,{
            blade: n.blade,
            buttonProps: Lt.fromObject({
                title: n.params.title
            }),
            labelProps: Lt.fromObject({
                label: n.params.label
            }),
            viewProps: n.viewProps
        })
    },
    api(n) {
        return n.controller instanceof Ec ? new Ox(n.controller) : null
    }
});
function Hx(n, t) {
    return n.addBlade(Object.assign(Object.assign({}, t), {
        view: "button"
    }))
}
function Gx(n, t) {
    return n.addBlade(Object.assign(Object.assign({}, t), {
        view: "folder"
    }))
}
function Wx(n, t) {
    return n.addBlade(Object.assign(Object.assign({}, t), {
        view: "tab"
    }))
}
function Xx(n) {
    return Ua(n) ? "refresh"in n && typeof n.refresh == "function" : !1
}
function qx(n, t) {
    if (!Ps.isBindable(n))
        throw ue.notBindable();
    return new Ps(n,t)
}
class jx {
    constructor(t, e) {
        this.onRackValueChange_ = this.onRackValueChange_.bind(this),
        this.controller_ = t,
        this.emitter_ = new _e,
        this.pool_ = e,
        this.controller_.rack.emitter.on("valuechange", this.onRackValueChange_)
    }
    get children() {
        return this.controller_.rack.children.map(t => this.pool_.createApi(t))
    }
    addBinding(t, e, i) {
        const r = i ?? {}
          , s = this.controller_.element.ownerDocument
          , o = this.pool_.createBinding(s, qx(t, e), r)
          , a = this.pool_.createBindingApi(o);
        return this.add(a, r.index)
    }
    addFolder(t) {
        return Gx(this, t)
    }
    addButton(t) {
        return Hx(this, t)
    }
    addTab(t) {
        return Wx(this, t)
    }
    add(t, e) {
        const i = t.controller;
        return this.controller_.rack.add(i, e),
        t
    }
    remove(t) {
        this.controller_.rack.remove(t.controller)
    }
    addBlade(t) {
        const e = this.controller_.element.ownerDocument
          , i = this.pool_.createBlade(e, t)
          , r = this.pool_.createApi(i);
        return this.add(r, t.index)
    }
    on(t, e) {
        const i = e.bind(this);
        return this.emitter_.on(t, r => {
            i(r)
        }
        , {
            key: e
        }),
        this
    }
    off(t, e) {
        return this.emitter_.off(t, e),
        this
    }
    refresh() {
        this.children.forEach(t => {
            Xx(t) && t.refresh()
        }
        )
    }
    onRackValueChange_(t) {
        const e = t.bladeController
          , i = this.pool_.createApi(e)
          , r = Lu(e.value) ? e.value.binding : null;
        this.emitter_.emit("change", new Br(i,r ? r.target.read() : e.value.rawValue,t.options.last))
    }
}
class za extends Ei {
    constructor(t, e) {
        super(t),
        this.rackApi_ = new jx(t.rackController,e)
    }
    refresh() {
        this.rackApi_.refresh()
    }
}
class Ha extends Vs {
    constructor(t) {
        super({
            blade: t.blade,
            view: t.view,
            viewProps: t.rackController.viewProps
        }),
        this.rackController = t.rackController
    }
    importState(t) {
        return He(t, e => super.importState(e), e => ({
            children: e.required.array(e.required.raw)
        }), e => this.rackController.rack.children.every( (i, r) => i.importState(e.children[r])))
    }
    exportState() {
        return Ge( () => super.exportState(), {
            children: this.rackController.rack.children.map(t => t.exportState())
        })
    }
}
function _a(n) {
    return "rackController"in n
}
class Yx {
    constructor(t) {
        this.emitter = new _e,
        this.items_ = [],
        this.cache_ = new Set,
        this.onSubListAdd_ = this.onSubListAdd_.bind(this),
        this.onSubListRemove_ = this.onSubListRemove_.bind(this),
        this.extract_ = t
    }
    get items() {
        return this.items_
    }
    allItems() {
        return Array.from(this.cache_)
    }
    find(t) {
        for (const e of this.allItems())
            if (t(e))
                return e;
        return null
    }
    includes(t) {
        return this.cache_.has(t)
    }
    add(t, e) {
        if (this.includes(t))
            throw ue.shouldNeverHappen();
        const i = e !== void 0 ? e : this.items_.length;
        this.items_.splice(i, 0, t),
        this.cache_.add(t);
        const r = this.extract_(t);
        r && (r.emitter.on("add", this.onSubListAdd_),
        r.emitter.on("remove", this.onSubListRemove_),
        r.allItems().forEach(s => {
            this.cache_.add(s)
        }
        )),
        this.emitter.emit("add", {
            index: i,
            item: t,
            root: this,
            target: this
        })
    }
    remove(t) {
        const e = this.items_.indexOf(t);
        if (e < 0)
            return;
        this.items_.splice(e, 1),
        this.cache_.delete(t);
        const i = this.extract_(t);
        i && (i.allItems().forEach(r => {
            this.cache_.delete(r)
        }
        ),
        i.emitter.off("add", this.onSubListAdd_),
        i.emitter.off("remove", this.onSubListRemove_)),
        this.emitter.emit("remove", {
            index: e,
            item: t,
            root: this,
            target: this
        })
    }
    onSubListAdd_(t) {
        this.cache_.add(t.item),
        this.emitter.emit("add", {
            index: t.index,
            item: t.item,
            root: this,
            target: t.target
        })
    }
    onSubListRemove_(t) {
        this.cache_.delete(t.item),
        this.emitter.emit("remove", {
            index: t.index,
            item: t.item,
            root: this,
            target: t.target
        })
    }
}
function Kx(n, t) {
    for (let e = 0; e < n.length; e++) {
        const i = n[e];
        if (hi(i) && i.value === t)
            return i
    }
    return null
}
function $x(n) {
    return _a(n) ? n.rackController.rack.bcSet_ : null
}
class Zx {
    constructor(t) {
        var e, i;
        this.emitter = new _e,
        this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this),
        this.onSetAdd_ = this.onSetAdd_.bind(this),
        this.onSetRemove_ = this.onSetRemove_.bind(this),
        this.onChildDispose_ = this.onChildDispose_.bind(this),
        this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this),
        this.onChildValueChange_ = this.onChildValueChange_.bind(this),
        this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this),
        this.onRackLayout_ = this.onRackLayout_.bind(this),
        this.onRackValueChange_ = this.onRackValueChange_.bind(this),
        this.blade_ = (e = t.blade) !== null && e !== void 0 ? e : null,
        (i = this.blade_) === null || i === void 0 || i.value("positions").emitter.on("change", this.onBladePositionsChange_),
        this.viewProps = t.viewProps,
        this.bcSet_ = new Yx($x),
        this.bcSet_.emitter.on("add", this.onSetAdd_),
        this.bcSet_.emitter.on("remove", this.onSetRemove_)
    }
    get children() {
        return this.bcSet_.items
    }
    add(t, e) {
        var i;
        (i = t.parent) === null || i === void 0 || i.remove(t),
        t.parent = this,
        this.bcSet_.add(t, e)
    }
    remove(t) {
        t.parent = null,
        this.bcSet_.remove(t)
    }
    find(t) {
        return this.bcSet_.allItems().filter(t)
    }
    onSetAdd_(t) {
        this.updatePositions_();
        const e = t.target === t.root;
        if (this.emitter.emit("add", {
            bladeController: t.item,
            index: t.index,
            root: e,
            sender: this
        }),
        !e)
            return;
        const i = t.item;
        if (i.viewProps.emitter.on("change", this.onChildViewPropsChange_),
        i.blade.value("positions").emitter.on("change", this.onChildPositionsChange_),
        i.viewProps.handleDispose(this.onChildDispose_),
        hi(i))
            i.value.emitter.on("change", this.onChildValueChange_);
        else if (_a(i)) {
            const r = i.rackController.rack;
            if (r) {
                const s = r.emitter;
                s.on("layout", this.onRackLayout_),
                s.on("valuechange", this.onRackValueChange_)
            }
        }
    }
    onSetRemove_(t) {
        this.updatePositions_();
        const e = t.target === t.root;
        if (this.emitter.emit("remove", {
            bladeController: t.item,
            root: e,
            sender: this
        }),
        !e)
            return;
        const i = t.item;
        if (hi(i))
            i.value.emitter.off("change", this.onChildValueChange_);
        else if (_a(i)) {
            const r = i.rackController.rack;
            if (r) {
                const s = r.emitter;
                s.off("layout", this.onRackLayout_),
                s.off("valuechange", this.onRackValueChange_)
            }
        }
    }
    updatePositions_() {
        const t = this.bcSet_.items.filter(r => !r.viewProps.get("hidden"))
          , e = t[0]
          , i = t[t.length - 1];
        this.bcSet_.items.forEach(r => {
            const s = [];
            r === e && (s.push("first"),
            (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && s.push("veryfirst")),
            r === i && (s.push("last"),
            (!this.blade_ || this.blade_.get("positions").includes("verylast")) && s.push("verylast")),
            r.blade.set("positions", s)
        }
        )
    }
    onChildPositionsChange_() {
        this.updatePositions_(),
        this.emitter.emit("layout", {
            sender: this
        })
    }
    onChildViewPropsChange_(t) {
        this.updatePositions_(),
        this.emitter.emit("layout", {
            sender: this
        })
    }
    onChildDispose_() {
        this.bcSet_.items.filter(e => e.viewProps.get("disposed")).forEach(e => {
            this.bcSet_.remove(e)
        }
        )
    }
    onChildValueChange_(t) {
        const e = Kx(this.find(hi), t.sender);
        if (!e)
            throw ue.alreadyDisposed();
        this.emitter.emit("valuechange", {
            bladeController: e,
            options: t.options,
            sender: this
        })
    }
    onRackLayout_(t) {
        this.updatePositions_(),
        this.emitter.emit("layout", {
            sender: this
        })
    }
    onRackValueChange_(t) {
        this.emitter.emit("valuechange", {
            bladeController: t.bladeController,
            options: t.options,
            sender: this
        })
    }
    onBladePositionsChange_() {
        this.updatePositions_()
    }
}
class Ga {
    constructor(t) {
        this.onRackAdd_ = this.onRackAdd_.bind(this),
        this.onRackRemove_ = this.onRackRemove_.bind(this),
        this.element = t.element,
        this.viewProps = t.viewProps;
        const e = new Zx({
            blade: t.root ? void 0 : t.blade,
            viewProps: t.viewProps
        });
        e.emitter.on("add", this.onRackAdd_),
        e.emitter.on("remove", this.onRackRemove_),
        this.rack = e,
        this.viewProps.handleDispose( () => {
            for (let i = this.rack.children.length - 1; i >= 0; i--)
                this.rack.children[i].viewProps.set("disposed", !0)
        }
        )
    }
    onRackAdd_(t) {
        t.root && Uu(this.element, t.bladeController.view.element, t.index)
    }
    onRackRemove_(t) {
        t.root && ka(t.bladeController.view.element)
    }
}
function lr() {
    return new Lt({
        positions: se([], {
            equals: Ag
        })
    })
}
class kr extends Lt {
    constructor(t) {
        super(t)
    }
    static create(t) {
        const e = {
            completed: !0,
            expanded: t,
            expandedHeight: null,
            shouldFixHeight: !1,
            temporaryExpanded: null
        }
          , i = Lt.createCore(e);
        return new kr(i)
    }
    get styleExpanded() {
        var t;
        return (t = this.get("temporaryExpanded")) !== null && t !== void 0 ? t : this.get("expanded")
    }
    get styleHeight() {
        if (!this.styleExpanded)
            return "0";
        const t = this.get("expandedHeight");
        return this.get("shouldFixHeight") && !ne(t) ? `${t}px` : "auto"
    }
    bindExpandedClass(t, e) {
        const i = () => {
            this.styleExpanded ? t.classList.add(e) : t.classList.remove(e)
        }
        ;
        pn(this, "expanded", i),
        pn(this, "temporaryExpanded", i)
    }
    cleanUpTransition() {
        this.set("shouldFixHeight", !1),
        this.set("expandedHeight", null),
        this.set("completed", !0)
    }
}
function Jx(n, t) {
    let e = 0;
    return gx(t, () => {
        n.set("expandedHeight", null),
        n.set("temporaryExpanded", !0),
        Rs(t),
        e = t.clientHeight,
        n.set("temporaryExpanded", null),
        Rs(t)
    }
    ),
    e
}
function wc(n, t) {
    t.style.height = n.styleHeight
}
function Wa(n, t) {
    n.value("expanded").emitter.on("beforechange", () => {
        if (n.set("completed", !1),
        ne(n.get("expandedHeight"))) {
            const e = Jx(n, t);
            e > 0 && n.set("expandedHeight", e)
        }
        n.set("shouldFixHeight", !0),
        Rs(t)
    }
    ),
    n.emitter.on("change", () => {
        wc(n, t)
    }
    ),
    wc(n, t),
    t.addEventListener("transitionend", e => {
        e.propertyName === "height" && n.cleanUpTransition()
    }
    )
}
class zu extends za {
    constructor(t, e) {
        super(t, e),
        this.emitter_ = new _e,
        this.controller.foldable.value("expanded").emitter.on("change", i => {
            this.emitter_.emit("fold", new ux(this,i.sender.rawValue))
        }
        ),
        this.rackApi_.on("change", i => {
            this.emitter_.emit("change", i)
        }
        )
    }
    get expanded() {
        return this.controller.foldable.get("expanded")
    }
    set expanded(t) {
        this.controller.foldable.set("expanded", t)
    }
    get title() {
        return this.controller.props.get("title")
    }
    set title(t) {
        this.controller.props.set("title", t)
    }
    get children() {
        return this.rackApi_.children
    }
    addBinding(t, e, i) {
        return this.rackApi_.addBinding(t, e, i)
    }
    addFolder(t) {
        return this.rackApi_.addFolder(t)
    }
    addButton(t) {
        return this.rackApi_.addButton(t)
    }
    addTab(t) {
        return this.rackApi_.addTab(t)
    }
    add(t, e) {
        return this.rackApi_.add(t, e)
    }
    remove(t) {
        this.rackApi_.remove(t)
    }
    addBlade(t) {
        return this.rackApi_.addBlade(t)
    }
    on(t, e) {
        const i = e.bind(this);
        return this.emitter_.on(t, r => {
            i(r)
        }
        , {
            key: e
        }),
        this
    }
    off(t, e) {
        return this.emitter_.off(t, e),
        this
    }
}
const Hu = Wt("cnt");
class Qx {
    constructor(t, e) {
        var i;
        this.className_ = Wt((i = e.viewName) !== null && i !== void 0 ? i : "fld"),
        this.element = t.createElement("div"),
        this.element.classList.add(this.className_(), Hu()),
        e.viewProps.bindClassModifiers(this.element),
        this.foldable_ = e.foldable,
        this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")),
        pn(this.foldable_, "completed", or(this.element, this.className_(void 0, "cpl")));
        const r = t.createElement("button");
        r.classList.add(this.className_("b")),
        pn(e.props, "title", c => {
            ne(c) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"))
        }
        ),
        e.viewProps.bindDisabled(r),
        this.element.appendChild(r),
        this.buttonElement = r;
        const s = t.createElement("div");
        s.classList.add(this.className_("i")),
        this.element.appendChild(s);
        const o = t.createElement("div");
        o.classList.add(this.className_("t")),
        Va(e.props.value("title"), o),
        this.buttonElement.appendChild(o),
        this.titleElement = o;
        const a = t.createElement("div");
        a.classList.add(this.className_("m")),
        this.buttonElement.appendChild(a);
        const l = t.createElement("div");
        l.classList.add(this.className_("c")),
        this.element.appendChild(l),
        this.containerElement = l
    }
}
class va extends Ha {
    constructor(t, e) {
        var i;
        const r = kr.create((i = e.expanded) !== null && i !== void 0 ? i : !0)
          , s = new Qx(t,{
            foldable: r,
            props: e.props,
            viewName: e.root ? "rot" : void 0,
            viewProps: e.viewProps
        });
        super(Object.assign(Object.assign({}, e), {
            rackController: new Ga({
                blade: e.blade,
                element: s.containerElement,
                root: e.root,
                viewProps: e.viewProps
            }),
            view: s
        })),
        this.onTitleClick_ = this.onTitleClick_.bind(this),
        this.props = e.props,
        this.foldable = r,
        Wa(this.foldable, this.view.containerElement),
        this.rackController.rack.emitter.on("add", () => {
            this.foldable.cleanUpTransition()
        }
        ),
        this.rackController.rack.emitter.on("remove", () => {
            this.foldable.cleanUpTransition()
        }
        ),
        this.view.buttonElement.addEventListener("click", this.onTitleClick_)
    }
    get document() {
        return this.view.element.ownerDocument
    }
    importState(t) {
        return He(t, e => super.importState(e), e => ({
            expanded: e.required.boolean,
            title: e.optional.string
        }), e => (this.foldable.set("expanded", e.expanded),
        this.props.set("title", e.title),
        !0))
    }
    exportState() {
        return Ge( () => super.exportState(), {
            expanded: this.foldable.get("expanded"),
            title: this.props.get("title")
        })
    }
    onTitleClick_() {
        this.foldable.set("expanded", !this.foldable.get("expanded"))
    }
}
const tb = De({
    id: "folder",
    type: "blade",
    accept(n) {
        const t = ae(n, e => ({
            title: e.required.string,
            view: e.required.constant("folder"),
            expanded: e.optional.boolean
        }));
        return t ? {
            params: t
        } : null
    },
    controller(n) {
        return new va(n.document,{
            blade: n.blade,
            expanded: n.params.expanded,
            props: Lt.fromObject({
                title: n.params.title
            }),
            viewProps: n.viewProps
        })
    },
    api(n) {
        return n.controller instanceof va ? new zu(n.controller,n.pool) : null
    }
})
  , eb = Wt("");
function Mc(n, t) {
    return or(n, eb(void 0, t))
}
class Ln extends Lt {
    constructor(t) {
        var e;
        super(t),
        this.onDisabledChange_ = this.onDisabledChange_.bind(this),
        this.onParentChange_ = this.onParentChange_.bind(this),
        this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this),
        [this.globalDisabled_,this.setGlobalDisabled_] = Ug(se(this.getGlobalDisabled_())),
        this.value("disabled").emitter.on("change", this.onDisabledChange_),
        this.value("parent").emitter.on("change", this.onParentChange_),
        (e = this.get("parent")) === null || e === void 0 || e.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_)
    }
    static create(t) {
        var e, i, r;
        const s = t ?? {};
        return new Ln(Lt.createCore({
            disabled: (e = s.disabled) !== null && e !== void 0 ? e : !1,
            disposed: !1,
            hidden: (i = s.hidden) !== null && i !== void 0 ? i : !1,
            parent: (r = s.parent) !== null && r !== void 0 ? r : null
        }))
    }
    get globalDisabled() {
        return this.globalDisabled_
    }
    bindClassModifiers(t) {
        Cn(this.globalDisabled_, Mc(t, "disabled")),
        pn(this, "hidden", Mc(t, "hidden"))
    }
    bindDisabled(t) {
        Cn(this.globalDisabled_, e => {
            t.disabled = e
        }
        )
    }
    bindTabIndex(t) {
        Cn(this.globalDisabled_, e => {
            t.tabIndex = e ? -1 : 0
        }
        )
    }
    handleDispose(t) {
        this.value("disposed").emitter.on("change", e => {
            e && t()
        }
        )
    }
    importState(t) {
        this.set("disabled", t.disabled),
        this.set("hidden", t.hidden)
    }
    exportState() {
        return {
            disabled: this.get("disabled"),
            hidden: this.get("hidden")
        }
    }
    getGlobalDisabled_() {
        const t = this.get("parent");
        return (t ? t.globalDisabled.rawValue : !1) || this.get("disabled")
    }
    updateGlobalDisabled_() {
        this.setGlobalDisabled_(this.getGlobalDisabled_())
    }
    onDisabledChange_() {
        this.updateGlobalDisabled_()
    }
    onParentGlobalDisabledChange_() {
        this.updateGlobalDisabled_()
    }
    onParentChange_(t) {
        var e;
        const i = t.previousRawValue;
        i == null || i.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_),
        (e = this.get("parent")) === null || e === void 0 || e.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_),
        this.updateGlobalDisabled_()
    }
}
const yc = Wt("tbp");
class nb {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(yc()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("div");
        i.classList.add(yc("c")),
        this.element.appendChild(i),
        this.containerElement = i
    }
}
const gr = Wt("tbi");
class ib {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(gr()),
        e.viewProps.bindClassModifiers(this.element),
        pn(e.props, "selected", s => {
            s ? this.element.classList.add(gr(void 0, "sel")) : this.element.classList.remove(gr(void 0, "sel"))
        }
        );
        const i = t.createElement("button");
        i.classList.add(gr("b")),
        e.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        this.buttonElement = i;
        const r = t.createElement("div");
        r.classList.add(gr("t")),
        Va(e.props.value("title"), r),
        this.buttonElement.appendChild(r),
        this.titleElement = r
    }
}
class rb {
    constructor(t, e) {
        this.emitter = new _e,
        this.onClick_ = this.onClick_.bind(this),
        this.props = e.props,
        this.viewProps = e.viewProps,
        this.view = new ib(t,{
            props: e.props,
            viewProps: e.viewProps
        }),
        this.view.buttonElement.addEventListener("click", this.onClick_)
    }
    onClick_() {
        this.emitter.emit("click", {
            sender: this
        })
    }
}
class ga extends Ha {
    constructor(t, e) {
        const i = new nb(t,{
            viewProps: e.viewProps
        });
        super(Object.assign(Object.assign({}, e), {
            rackController: new Ga({
                blade: e.blade,
                element: i.containerElement,
                viewProps: e.viewProps
            }),
            view: i
        })),
        this.onItemClick_ = this.onItemClick_.bind(this),
        this.ic_ = new rb(t,{
            props: e.itemProps,
            viewProps: Ln.create()
        }),
        this.ic_.emitter.on("click", this.onItemClick_),
        this.props = e.props,
        pn(this.props, "selected", r => {
            this.itemController.props.set("selected", r),
            this.viewProps.set("hidden", !r)
        }
        )
    }
    get itemController() {
        return this.ic_
    }
    importState(t) {
        return He(t, e => super.importState(e), e => ({
            selected: e.required.boolean,
            title: e.required.string
        }), e => (this.ic_.props.set("selected", e.selected),
        this.ic_.props.set("title", e.title),
        !0))
    }
    exportState() {
        return Ge( () => super.exportState(), {
            selected: this.ic_.props.get("selected"),
            title: this.ic_.props.get("title")
        })
    }
    onItemClick_() {
        this.props.set("selected", !0)
    }
}
class sb extends za {
    constructor(t, e) {
        super(t, e),
        this.emitter_ = new _e,
        this.onSelect_ = this.onSelect_.bind(this),
        this.pool_ = e,
        this.rackApi_.on("change", i => {
            this.emitter_.emit("change", i)
        }
        ),
        this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_)
    }
    get pages() {
        return this.rackApi_.children
    }
    addPage(t) {
        const e = this.controller.view.element.ownerDocument
          , i = new ga(e,{
            blade: lr(),
            itemProps: Lt.fromObject({
                selected: !1,
                title: t.title
            }),
            props: Lt.fromObject({
                selected: !1
            }),
            viewProps: Ln.create()
        })
          , r = this.pool_.createApi(i);
        return this.rackApi_.add(r, t.index)
    }
    removePage(t) {
        this.rackApi_.remove(this.rackApi_.children[t])
    }
    on(t, e) {
        const i = e.bind(this);
        return this.emitter_.on(t, r => {
            i(r)
        }
        , {
            key: e
        }),
        this
    }
    off(t, e) {
        return this.emitter_.off(t, e),
        this
    }
    onSelect_(t) {
        this.emitter_.emit("select", new hx(this,t.rawValue))
    }
}
class ob extends za {
    get title() {
        var t;
        return (t = this.controller.itemController.props.get("title")) !== null && t !== void 0 ? t : ""
    }
    set title(t) {
        this.controller.itemController.props.set("title", t)
    }
    get selected() {
        return this.controller.props.get("selected")
    }
    set selected(t) {
        this.controller.props.set("selected", t)
    }
    get children() {
        return this.rackApi_.children
    }
    addButton(t) {
        return this.rackApi_.addButton(t)
    }
    addFolder(t) {
        return this.rackApi_.addFolder(t)
    }
    addTab(t) {
        return this.rackApi_.addTab(t)
    }
    add(t, e) {
        this.rackApi_.add(t, e)
    }
    remove(t) {
        this.rackApi_.remove(t)
    }
    addBinding(t, e, i) {
        return this.rackApi_.addBinding(t, e, i)
    }
    addBlade(t) {
        return this.rackApi_.addBlade(t)
    }
}
const Sc = -1;
class ab {
    constructor() {
        this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this),
        this.empty = se(!0),
        this.selectedIndex = se(Sc),
        this.items_ = []
    }
    add(t, e) {
        const i = e ?? this.items_.length;
        this.items_.splice(i, 0, t),
        t.emitter.on("change", this.onItemSelectedChange_),
        this.keepSelection_()
    }
    remove(t) {
        const e = this.items_.indexOf(t);
        e < 0 || (this.items_.splice(e, 1),
        t.emitter.off("change", this.onItemSelectedChange_),
        this.keepSelection_())
    }
    keepSelection_() {
        if (this.items_.length === 0) {
            this.selectedIndex.rawValue = Sc,
            this.empty.rawValue = !0;
            return
        }
        const t = this.items_.findIndex(e => e.rawValue);
        t < 0 ? (this.items_.forEach( (e, i) => {
            e.rawValue = i === 0
        }
        ),
        this.selectedIndex.rawValue = 0) : (this.items_.forEach( (e, i) => {
            e.rawValue = i === t
        }
        ),
        this.selectedIndex.rawValue = t),
        this.empty.rawValue = !1
    }
    onItemSelectedChange_(t) {
        if (t.rawValue) {
            const e = this.items_.findIndex(i => i === t.sender);
            this.items_.forEach( (i, r) => {
                i.rawValue = r === e
            }
            ),
            this.selectedIndex.rawValue = e
        } else
            this.keepSelection_()
    }
}
const xr = Wt("tab");
class lb {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(xr(), Hu()),
        e.viewProps.bindClassModifiers(this.element),
        Cn(e.empty, or(this.element, xr(void 0, "nop")));
        const i = t.createElement("div");
        i.classList.add(xr("t")),
        this.element.appendChild(i),
        this.itemsElement = i;
        const r = t.createElement("div");
        r.classList.add(xr("i")),
        this.element.appendChild(r);
        const s = t.createElement("div");
        s.classList.add(xr("c")),
        this.element.appendChild(s),
        this.contentsElement = s
    }
}
class Tc extends Ha {
    constructor(t, e) {
        const i = new ab
          , r = new lb(t,{
            empty: i.empty,
            viewProps: e.viewProps
        });
        super({
            blade: e.blade,
            rackController: new Ga({
                blade: e.blade,
                element: r.contentsElement,
                viewProps: e.viewProps
            }),
            view: r
        }),
        this.onRackAdd_ = this.onRackAdd_.bind(this),
        this.onRackRemove_ = this.onRackRemove_.bind(this);
        const s = this.rackController.rack;
        s.emitter.on("add", this.onRackAdd_),
        s.emitter.on("remove", this.onRackRemove_),
        this.tab = i
    }
    add(t, e) {
        this.rackController.rack.add(t, e)
    }
    remove(t) {
        this.rackController.rack.remove(this.rackController.rack.children[t])
    }
    onRackAdd_(t) {
        if (!t.root)
            return;
        const e = t.bladeController;
        Uu(this.view.itemsElement, e.itemController.view.element, t.index),
        e.itemController.viewProps.set("parent", this.viewProps),
        this.tab.add(e.props.value("selected"))
    }
    onRackRemove_(t) {
        if (!t.root)
            return;
        const e = t.bladeController;
        ka(e.itemController.view.element),
        e.itemController.viewProps.set("parent", null),
        this.tab.remove(e.props.value("selected"))
    }
}
const Gu = De({
    id: "tab",
    type: "blade",
    accept(n) {
        const t = ae(n, e => ({
            pages: e.required.array(e.required.object({
                title: e.required.string
            })),
            view: e.required.constant("tab")
        }));
        return !t || t.pages.length === 0 ? null : {
            params: t
        }
    },
    controller(n) {
        const t = new Tc(n.document,{
            blade: n.blade,
            viewProps: n.viewProps
        });
        return n.params.pages.forEach(e => {
            const i = new ga(n.document,{
                blade: lr(),
                itemProps: Lt.fromObject({
                    selected: !1,
                    title: e.title
                }),
                props: Lt.fromObject({
                    selected: !1
                }),
                viewProps: Ln.create()
            });
            t.add(i)
        }
        ),
        t
    },
    api(n) {
        return n.controller instanceof Tc ? new sb(n.controller,n.pool) : n.controller instanceof ga ? new ob(n.controller,n.pool) : null
    }
});
function cb(n, t) {
    const e = n.accept(t.params);
    if (!e)
        return null;
    const i = ae(t.params, r => ({
        disabled: r.optional.boolean,
        hidden: r.optional.boolean
    }));
    return n.controller({
        blade: lr(),
        document: t.document,
        params: Object.assign(Object.assign({}, e.params), {
            disabled: i == null ? void 0 : i.disabled,
            hidden: i == null ? void 0 : i.hidden
        }),
        viewProps: Ln.create({
            disabled: i == null ? void 0 : i.disabled,
            hidden: i == null ? void 0 : i.hidden
        })
    })
}
class Xa extends Pr {
    get options() {
        return this.controller.valueController.props.get("options")
    }
    set options(t) {
        this.controller.valueController.props.set("options", t)
    }
}
class ub {
    constructor() {
        this.disabled = !1,
        this.emitter = new _e
    }
    dispose() {}
    tick() {
        this.disabled || this.emitter.emit("tick", {
            sender: this
        })
    }
}
class hb {
    constructor(t, e) {
        this.disabled_ = !1,
        this.timerId_ = null,
        this.onTick_ = this.onTick_.bind(this),
        this.doc_ = t,
        this.emitter = new _e,
        this.interval_ = e,
        this.setTimer_()
    }
    get disabled() {
        return this.disabled_
    }
    set disabled(t) {
        this.disabled_ = t,
        this.disabled_ ? this.clearTimer_() : this.setTimer_()
    }
    dispose() {
        this.clearTimer_()
    }
    clearTimer_() {
        if (this.timerId_ === null)
            return;
        const t = this.doc_.defaultView;
        t && t.clearInterval(this.timerId_),
        this.timerId_ = null
    }
    setTimer_() {
        if (this.clearTimer_(),
        this.interval_ <= 0)
            return;
        const t = this.doc_.defaultView;
        t && (this.timerId_ = t.setInterval(this.onTick_, this.interval_))
    }
    onTick_() {
        this.disabled_ || this.emitter.emit("tick", {
            sender: this
        })
    }
}
class Vr {
    constructor(t) {
        this.constraints = t
    }
    constrain(t) {
        return this.constraints.reduce( (e, i) => i.constrain(e), t)
    }
}
function Ds(n, t) {
    if (n instanceof t)
        return n;
    if (n instanceof Vr) {
        const e = n.constraints.reduce( (i, r) => i || (r instanceof t ? r : null), null);
        if (e)
            return e
    }
    return null
}
class zr {
    constructor(t) {
        this.values = Lt.fromObject({
            options: t
        })
    }
    constrain(t) {
        const e = this.values.get("options");
        return e.length === 0 || e.filter(r => r.value === t).length > 0 ? t : e[0].value
    }
}
function Hr(n) {
    var t;
    const e = ma;
    if (Array.isArray(n))
        return (t = ae({
            items: n
        }, i => ({
            items: i.required.array(i.required.object({
                text: i.required.string,
                value: i.required.raw
            }))
        }))) === null || t === void 0 ? void 0 : t.items;
    if (typeof n == "object")
        return e.required.raw(n).value
}
function qa(n) {
    if (Array.isArray(n))
        return n;
    const t = [];
    return Object.keys(n).forEach(e => {
        t.push({
            text: e,
            value: n[e]
        })
    }
    ),
    t
}
function ja(n) {
    return ne(n) ? null : new zr(qa(n))
}
const Eo = Wt("lst");
class db {
    constructor(t, e) {
        this.onValueChange_ = this.onValueChange_.bind(this),
        this.props_ = e.props,
        this.element = t.createElement("div"),
        this.element.classList.add(Eo()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("select");
        i.classList.add(Eo("s")),
        e.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        this.selectElement = i;
        const r = t.createElement("div");
        r.classList.add(Eo("m")),
        r.appendChild(ks(t, "dropdown")),
        this.element.appendChild(r),
        e.value.emitter.on("change", this.onValueChange_),
        this.value_ = e.value,
        pn(this.props_, "options", s => {
            Iu(this.selectElement),
            s.forEach(o => {
                const a = t.createElement("option");
                a.textContent = o.text,
                this.selectElement.appendChild(a)
            }
            ),
            this.update_()
        }
        )
    }
    update_() {
        const t = this.props_.get("options").map(e => e.value);
        this.selectElement.selectedIndex = t.indexOf(this.value_.rawValue)
    }
    onValueChange_() {
        this.update_()
    }
}
class Kn {
    constructor(t, e) {
        this.onSelectChange_ = this.onSelectChange_.bind(this),
        this.props = e.props,
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.view = new db(t,{
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        }),
        this.view.selectElement.addEventListener("change", this.onSelectChange_)
    }
    onSelectChange_(t) {
        const e = t.currentTarget;
        this.value.rawValue = this.props.get("options")[e.selectedIndex].value
    }
    importProps(t) {
        return He(t, null, e => ({
            options: e.required.custom(Hr)
        }), e => (this.props.set("options", qa(e.options)),
        !0))
    }
    exportProps() {
        return Ge(null, {
            options: this.props.get("options")
        })
    }
}
const Cc = Wt("pop");
class pb {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(Cc()),
        e.viewProps.bindClassModifiers(this.element),
        Cn(e.shows, or(this.element, Cc(void 0, "v")))
    }
}
class Wu {
    constructor(t, e) {
        this.shows = se(!1),
        this.viewProps = e.viewProps,
        this.view = new pb(t,{
            shows: this.shows,
            viewProps: this.viewProps
        })
    }
}
const Ac = Wt("txt");
class fb {
    constructor(t, e) {
        this.onChange_ = this.onChange_.bind(this),
        this.element = t.createElement("div"),
        this.element.classList.add(Ac()),
        e.viewProps.bindClassModifiers(this.element),
        this.props_ = e.props,
        this.props_.emitter.on("change", this.onChange_);
        const i = t.createElement("input");
        i.classList.add(Ac("i")),
        i.type = "text",
        e.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        this.inputElement = i,
        e.value.emitter.on("change", this.onChange_),
        this.value_ = e.value,
        this.refresh()
    }
    refresh() {
        const t = this.props_.get("formatter");
        this.inputElement.value = t(this.value_.rawValue)
    }
    onChange_() {
        this.refresh()
    }
}
class Rr {
    constructor(t, e) {
        this.onInputChange_ = this.onInputChange_.bind(this),
        this.parser_ = e.parser,
        this.props = e.props,
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.view = new fb(t,{
            props: e.props,
            value: this.value,
            viewProps: this.viewProps
        }),
        this.view.inputElement.addEventListener("change", this.onInputChange_)
    }
    onInputChange_(t) {
        const i = t.currentTarget.value
          , r = this.parser_(i);
        ne(r) || (this.value.rawValue = r),
        this.view.refresh()
    }
}
function mb(n) {
    return String(n)
}
function Xu(n) {
    return n === "false" ? !1 : !!n
}
function Pc(n) {
    return mb(n)
}
function _b(n) {
    return t => n.reduce( (e, i) => e !== null ? e : i(t), null)
}
const vb = Oe(0);
function Ls(n) {
    return vb(n) + "%"
}
function qu(n) {
    return String(n)
}
function xa(n) {
    return n
}
function cr({primary: n, secondary: t, forward: e, backward: i}) {
    let r = !1;
    function s(o) {
        r || (r = !0,
        o(),
        r = !1)
    }
    n.emitter.on("change", o => {
        s( () => {
            t.setRawValue(e(n.rawValue, t.rawValue), o.options)
        }
        )
    }
    ),
    t.emitter.on("change", o => {
        s( () => {
            n.setRawValue(i(n.rawValue, t.rawValue), o.options)
        }
        ),
        s( () => {
            t.setRawValue(e(n.rawValue, t.rawValue), o.options)
        }
        )
    }
    ),
    s( () => {
        t.setRawValue(e(n.rawValue, t.rawValue), {
            forceEmit: !1,
            last: !0
        })
    }
    )
}
function Ie(n, t) {
    const e = n * (t.altKey ? .1 : 1) * (t.shiftKey ? 10 : 1);
    return t.upKey ? +e : t.downKey ? -e : 0
}
function Dr(n) {
    return {
        altKey: n.altKey,
        downKey: n.key === "ArrowDown",
        shiftKey: n.shiftKey,
        upKey: n.key === "ArrowUp"
    }
}
function Dn(n) {
    return {
        altKey: n.altKey,
        downKey: n.key === "ArrowLeft",
        shiftKey: n.shiftKey,
        upKey: n.key === "ArrowRight"
    }
}
function gb(n) {
    return n === "ArrowUp" || n === "ArrowDown"
}
function ju(n) {
    return gb(n) || n === "ArrowLeft" || n === "ArrowRight"
}
function wo(n, t) {
    var e, i;
    const r = t.ownerDocument.defaultView
      , s = t.getBoundingClientRect();
    return {
        x: n.pageX - (((e = r && r.scrollX) !== null && e !== void 0 ? e : 0) + s.left),
        y: n.pageY - (((i = r && r.scrollY) !== null && i !== void 0 ? i : 0) + s.top)
    }
}
class wi {
    constructor(t) {
        this.lastTouch_ = null,
        this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this),
        this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this),
        this.onMouseDown_ = this.onMouseDown_.bind(this),
        this.onTouchEnd_ = this.onTouchEnd_.bind(this),
        this.onTouchMove_ = this.onTouchMove_.bind(this),
        this.onTouchStart_ = this.onTouchStart_.bind(this),
        this.elem_ = t,
        this.emitter = new _e,
        t.addEventListener("touchstart", this.onTouchStart_, {
            passive: !1
        }),
        t.addEventListener("touchmove", this.onTouchMove_, {
            passive: !0
        }),
        t.addEventListener("touchend", this.onTouchEnd_),
        t.addEventListener("mousedown", this.onMouseDown_)
    }
    computePosition_(t) {
        const e = this.elem_.getBoundingClientRect();
        return {
            bounds: {
                width: e.width,
                height: e.height
            },
            point: t ? {
                x: t.x,
                y: t.y
            } : null
        }
    }
    onMouseDown_(t) {
        var e;
        t.preventDefault(),
        (e = t.currentTarget) === null || e === void 0 || e.focus();
        const i = this.elem_.ownerDocument;
        i.addEventListener("mousemove", this.onDocumentMouseMove_),
        i.addEventListener("mouseup", this.onDocumentMouseUp_),
        this.emitter.emit("down", {
            altKey: t.altKey,
            data: this.computePosition_(wo(t, this.elem_)),
            sender: this,
            shiftKey: t.shiftKey
        })
    }
    onDocumentMouseMove_(t) {
        this.emitter.emit("move", {
            altKey: t.altKey,
            data: this.computePosition_(wo(t, this.elem_)),
            sender: this,
            shiftKey: t.shiftKey
        })
    }
    onDocumentMouseUp_(t) {
        const e = this.elem_.ownerDocument;
        e.removeEventListener("mousemove", this.onDocumentMouseMove_),
        e.removeEventListener("mouseup", this.onDocumentMouseUp_),
        this.emitter.emit("up", {
            altKey: t.altKey,
            data: this.computePosition_(wo(t, this.elem_)),
            sender: this,
            shiftKey: t.shiftKey
        })
    }
    onTouchStart_(t) {
        t.preventDefault();
        const e = t.targetTouches.item(0)
          , i = this.elem_.getBoundingClientRect();
        this.emitter.emit("down", {
            altKey: t.altKey,
            data: this.computePosition_(e ? {
                x: e.clientX - i.left,
                y: e.clientY - i.top
            } : void 0),
            sender: this,
            shiftKey: t.shiftKey
        }),
        this.lastTouch_ = e
    }
    onTouchMove_(t) {
        const e = t.targetTouches.item(0)
          , i = this.elem_.getBoundingClientRect();
        this.emitter.emit("move", {
            altKey: t.altKey,
            data: this.computePosition_(e ? {
                x: e.clientX - i.left,
                y: e.clientY - i.top
            } : void 0),
            sender: this,
            shiftKey: t.shiftKey
        }),
        this.lastTouch_ = e
    }
    onTouchEnd_(t) {
        var e;
        const i = (e = t.targetTouches.item(0)) !== null && e !== void 0 ? e : this.lastTouch_
          , r = this.elem_.getBoundingClientRect();
        this.emitter.emit("up", {
            altKey: t.altKey,
            data: this.computePosition_(i ? {
                x: i.clientX - r.left,
                y: i.clientY - r.top
            } : void 0),
            sender: this,
            shiftKey: t.shiftKey
        })
    }
}
const Ye = Wt("txt");
class xb {
    constructor(t, e) {
        this.onChange_ = this.onChange_.bind(this),
        this.props_ = e.props,
        this.props_.emitter.on("change", this.onChange_),
        this.element = t.createElement("div"),
        this.element.classList.add(Ye(), Ye(void 0, "num")),
        e.arrayPosition && this.element.classList.add(Ye(void 0, e.arrayPosition)),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("input");
        i.classList.add(Ye("i")),
        i.type = "text",
        e.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        this.inputElement = i,
        this.onDraggingChange_ = this.onDraggingChange_.bind(this),
        this.dragging_ = e.dragging,
        this.dragging_.emitter.on("change", this.onDraggingChange_),
        this.element.classList.add(Ye()),
        this.inputElement.classList.add(Ye("i"));
        const r = t.createElement("div");
        r.classList.add(Ye("k")),
        this.element.appendChild(r),
        this.knobElement = r;
        const s = t.createElementNS(un, "svg");
        s.classList.add(Ye("g")),
        this.knobElement.appendChild(s);
        const o = t.createElementNS(un, "path");
        o.classList.add(Ye("gb")),
        s.appendChild(o),
        this.guideBodyElem_ = o;
        const a = t.createElementNS(un, "path");
        a.classList.add(Ye("gh")),
        s.appendChild(a),
        this.guideHeadElem_ = a;
        const l = t.createElement("div");
        l.classList.add(Wt("tt")()),
        this.knobElement.appendChild(l),
        this.tooltipElem_ = l,
        e.value.emitter.on("change", this.onChange_),
        this.value = e.value,
        this.refresh()
    }
    onDraggingChange_(t) {
        if (t.rawValue === null) {
            this.element.classList.remove(Ye(void 0, "drg"));
            return
        }
        this.element.classList.add(Ye(void 0, "drg"));
        const e = t.rawValue / this.props_.get("pointerScale")
          , i = e + (e > 0 ? -1 : e < 0 ? 1 : 0)
          , r = ge(-i, -4, 4);
        this.guideHeadElem_.setAttributeNS(null, "d", [`M ${i + r},0 L${i},4 L${i + r},8`, `M ${e},-1 L${e},9`].join(" ")),
        this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${e},4`);
        const s = this.props_.get("formatter");
        this.tooltipElem_.textContent = s(this.value.rawValue),
        this.tooltipElem_.style.left = `${e}px`
    }
    refresh() {
        const t = this.props_.get("formatter");
        this.inputElement.value = t(this.value.rawValue)
    }
    onChange_() {
        this.refresh()
    }
}
class Gr {
    constructor(t, e) {
        var i;
        this.originRawValue_ = 0,
        this.onInputChange_ = this.onInputChange_.bind(this),
        this.onInputKeyDown_ = this.onInputKeyDown_.bind(this),
        this.onInputKeyUp_ = this.onInputKeyUp_.bind(this),
        this.onPointerDown_ = this.onPointerDown_.bind(this),
        this.onPointerMove_ = this.onPointerMove_.bind(this),
        this.onPointerUp_ = this.onPointerUp_.bind(this),
        this.parser_ = e.parser,
        this.props = e.props,
        this.sliderProps_ = (i = e.sliderProps) !== null && i !== void 0 ? i : null,
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.dragging_ = se(null),
        this.view = new xb(t,{
            arrayPosition: e.arrayPosition,
            dragging: this.dragging_,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        }),
        this.view.inputElement.addEventListener("change", this.onInputChange_),
        this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_),
        this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
        const r = new wi(this.view.knobElement);
        r.emitter.on("down", this.onPointerDown_),
        r.emitter.on("move", this.onPointerMove_),
        r.emitter.on("up", this.onPointerUp_)
    }
    constrainValue_(t) {
        var e, i;
        const r = (e = this.sliderProps_) === null || e === void 0 ? void 0 : e.get("min")
          , s = (i = this.sliderProps_) === null || i === void 0 ? void 0 : i.get("max");
        let o = t;
        return r !== void 0 && (o = Math.max(o, r)),
        s !== void 0 && (o = Math.min(o, s)),
        o
    }
    onInputChange_(t) {
        const i = t.currentTarget.value
          , r = this.parser_(i);
        ne(r) || (this.value.rawValue = this.constrainValue_(r)),
        this.view.refresh()
    }
    onInputKeyDown_(t) {
        const e = Ie(this.props.get("keyScale"), Dr(t));
        e !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + e), {
            forceEmit: !1,
            last: !1
        })
    }
    onInputKeyUp_(t) {
        Ie(this.props.get("keyScale"), Dr(t)) !== 0 && this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
        })
    }
    onPointerDown_() {
        this.originRawValue_ = this.value.rawValue,
        this.dragging_.rawValue = 0
    }
    computeDraggingValue_(t) {
        if (!t.point)
            return null;
        const e = t.point.x - t.bounds.width / 2;
        return this.constrainValue_(this.originRawValue_ + e * this.props.get("pointerScale"))
    }
    onPointerMove_(t) {
        const e = this.computeDraggingValue_(t.data);
        e !== null && (this.value.setRawValue(e, {
            forceEmit: !1,
            last: !1
        }),
        this.dragging_.rawValue = this.value.rawValue - this.originRawValue_)
    }
    onPointerUp_(t) {
        const e = this.computeDraggingValue_(t.data);
        e !== null && (this.value.setRawValue(e, {
            forceEmit: !0,
            last: !0
        }),
        this.dragging_.rawValue = null)
    }
}
const Mo = Wt("sld");
class bb {
    constructor(t, e) {
        this.onChange_ = this.onChange_.bind(this),
        this.props_ = e.props,
        this.props_.emitter.on("change", this.onChange_),
        this.element = t.createElement("div"),
        this.element.classList.add(Mo()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("div");
        i.classList.add(Mo("t")),
        e.viewProps.bindTabIndex(i),
        this.element.appendChild(i),
        this.trackElement = i;
        const r = t.createElement("div");
        r.classList.add(Mo("k")),
        this.trackElement.appendChild(r),
        this.knobElement = r,
        e.value.emitter.on("change", this.onChange_),
        this.value = e.value,
        this.update_()
    }
    update_() {
        const t = ge($t(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
        this.knobElement.style.width = `${t}%`
    }
    onChange_() {
        this.update_()
    }
}
class Eb {
    constructor(t, e) {
        this.onKeyDown_ = this.onKeyDown_.bind(this),
        this.onKeyUp_ = this.onKeyUp_.bind(this),
        this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this),
        this.onPointerUp_ = this.onPointerUp_.bind(this),
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.props = e.props,
        this.view = new bb(t,{
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        }),
        this.ptHandler_ = new wi(this.view.trackElement),
        this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_),
        this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_),
        this.ptHandler_.emitter.on("up", this.onPointerUp_),
        this.view.trackElement.addEventListener("keydown", this.onKeyDown_),
        this.view.trackElement.addEventListener("keyup", this.onKeyUp_)
    }
    handlePointerEvent_(t, e) {
        t.point && this.value.setRawValue($t(ge(t.point.x, 0, t.bounds.width), 0, t.bounds.width, this.props.get("min"), this.props.get("max")), e)
    }
    onPointerDownOrMove_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !1,
            last: !1
        })
    }
    onPointerUp_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !0,
            last: !0
        })
    }
    onKeyDown_(t) {
        const e = Ie(this.props.get("keyScale"), Dn(t));
        e !== 0 && this.value.setRawValue(this.value.rawValue + e, {
            forceEmit: !1,
            last: !1
        })
    }
    onKeyUp_(t) {
        Ie(this.props.get("keyScale"), Dn(t)) !== 0 && this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
        })
    }
}
const yo = Wt("sldtxt");
class wb {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(yo());
        const i = t.createElement("div");
        i.classList.add(yo("s")),
        this.sliderView_ = e.sliderView,
        i.appendChild(this.sliderView_.element),
        this.element.appendChild(i);
        const r = t.createElement("div");
        r.classList.add(yo("t")),
        this.textView_ = e.textView,
        r.appendChild(this.textView_.element),
        this.element.appendChild(r)
    }
}
class Us {
    constructor(t, e) {
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.sliderC_ = new Eb(t,{
            props: e.sliderProps,
            value: e.value,
            viewProps: this.viewProps
        }),
        this.textC_ = new Gr(t,{
            parser: e.parser,
            props: e.textProps,
            sliderProps: e.sliderProps,
            value: e.value,
            viewProps: e.viewProps
        }),
        this.view = new wb(t,{
            sliderView: this.sliderC_.view,
            textView: this.textC_.view
        })
    }
    get sliderController() {
        return this.sliderC_
    }
    get textController() {
        return this.textC_
    }
    importProps(t) {
        return He(t, null, e => ({
            max: e.required.number,
            min: e.required.number
        }), e => {
            const i = this.sliderC_.props;
            return i.set("max", e.max),
            i.set("min", e.min),
            !0
        }
        )
    }
    exportProps() {
        const t = this.sliderC_.props;
        return Ge(null, {
            max: t.get("max"),
            min: t.get("min")
        })
    }
}
function Yu(n) {
    return {
        sliderProps: new Lt({
            keyScale: n.keyScale,
            max: n.max,
            min: n.min
        }),
        textProps: new Lt({
            formatter: se(n.formatter),
            keyScale: n.keyScale,
            pointerScale: se(n.pointerScale)
        })
    }
}
const Mb = {
    containerUnitSize: "cnt-usz"
};
function Ku(n) {
    return `--${Mb[n]}`
}
function Lr(n) {
    return Du(n)
}
function Wn(n) {
    if (fa(n))
        return ae(n, Lr)
}
function Sn(n, t) {
    if (!n)
        return;
    const e = []
      , i = Au(n, t);
    i && e.push(i);
    const r = Pu(n);
    return r && e.push(r),
    new Vr(e)
}
function yb(n) {
    return n ? n.major === ar.major : !1
}
function $u(n) {
    if (n === "inline" || n === "popup")
        return n
}
function Wr(n, t) {
    n.write(t)
}
const gs = Wt("ckb");
class Sb {
    constructor(t, e) {
        this.onValueChange_ = this.onValueChange_.bind(this),
        this.element = t.createElement("div"),
        this.element.classList.add(gs()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("label");
        i.classList.add(gs("l")),
        this.element.appendChild(i),
        this.labelElement = i;
        const r = t.createElement("input");
        r.classList.add(gs("i")),
        r.type = "checkbox",
        this.labelElement.appendChild(r),
        this.inputElement = r,
        e.viewProps.bindDisabled(this.inputElement);
        const s = t.createElement("div");
        s.classList.add(gs("w")),
        this.labelElement.appendChild(s);
        const o = ks(t, "check");
        s.appendChild(o),
        e.value.emitter.on("change", this.onValueChange_),
        this.value = e.value,
        this.update_()
    }
    update_() {
        this.inputElement.checked = this.value.rawValue
    }
    onValueChange_() {
        this.update_()
    }
}
class Tb {
    constructor(t, e) {
        this.onInputChange_ = this.onInputChange_.bind(this),
        this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this),
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.view = new Sb(t,{
            value: this.value,
            viewProps: this.viewProps
        }),
        this.view.inputElement.addEventListener("change", this.onInputChange_),
        this.view.labelElement.addEventListener("mousedown", this.onLabelMouseDown_)
    }
    onInputChange_(t) {
        const e = t.currentTarget;
        this.value.rawValue = e.checked,
        t.preventDefault(),
        t.stopPropagation()
    }
    onLabelMouseDown_(t) {
        t.preventDefault()
    }
}
function Cb(n) {
    const t = []
      , e = ja(n.options);
    return e && t.push(e),
    new Vr(t)
}
const Ab = De({
    id: "input-bool",
    type: "input",
    accept: (n, t) => {
        if (typeof n != "boolean")
            return null;
        const e = ae(t, i => ({
            options: i.optional.custom(Hr),
            readonly: i.optional.constant(!1)
        }));
        return e ? {
            initialValue: n,
            params: e
        } : null
    }
    ,
    binding: {
        reader: n => Xu,
        constraint: n => Cb(n.params),
        writer: n => Wr
    },
    controller: n => {
        const t = n.document
          , e = n.value
          , i = n.constraint
          , r = i && Ds(i, zr);
        return r ? new Kn(t,{
            props: new Lt({
                options: r.values.value("options")
            }),
            value: e,
            viewProps: n.viewProps
        }) : new Tb(t,{
            value: e,
            viewProps: n.viewProps
        })
    }
    ,
    api(n) {
        return typeof n.controller.value.rawValue != "boolean" ? null : n.controller.valueController instanceof Kn ? new Xa(n.controller) : null
    }
})
  , ri = Wt("col");
class Pb {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(ri()),
        e.foldable.bindExpandedClass(this.element, ri(void 0, "expanded")),
        pn(e.foldable, "completed", or(this.element, ri(void 0, "cpl")));
        const i = t.createElement("div");
        i.classList.add(ri("h")),
        this.element.appendChild(i);
        const r = t.createElement("div");
        r.classList.add(ri("s")),
        i.appendChild(r),
        this.swatchElement = r;
        const s = t.createElement("div");
        if (s.classList.add(ri("t")),
        i.appendChild(s),
        this.textElement = s,
        e.pickerLayout === "inline") {
            const o = t.createElement("div");
            o.classList.add(ri("p")),
            this.element.appendChild(o),
            this.pickerElement = o
        } else
            this.pickerElement = null
    }
}
function Rb(n, t, e) {
    const i = ge(n / 255, 0, 1)
      , r = ge(t / 255, 0, 1)
      , s = ge(e / 255, 0, 1)
      , o = Math.max(i, r, s)
      , a = Math.min(i, r, s)
      , l = o - a;
    let c = 0
      , u = 0;
    const d = (a + o) / 2;
    return l !== 0 && (u = l / (1 - Math.abs(o + a - 1)),
    i === o ? c = (r - s) / l : r === o ? c = 2 + (s - i) / l : c = 4 + (i - r) / l,
    c = c / 6 + (c < 0 ? 1 : 0)),
    [c * 360, u * 100, d * 100]
}
function Db(n, t, e) {
    const i = (n % 360 + 360) % 360
      , r = ge(t / 100, 0, 1)
      , s = ge(e / 100, 0, 1)
      , o = (1 - Math.abs(2 * s - 1)) * r
      , a = o * (1 - Math.abs(i / 60 % 2 - 1))
      , l = s - o / 2;
    let c, u, d;
    return i >= 0 && i < 60 ? [c,u,d] = [o, a, 0] : i >= 60 && i < 120 ? [c,u,d] = [a, o, 0] : i >= 120 && i < 180 ? [c,u,d] = [0, o, a] : i >= 180 && i < 240 ? [c,u,d] = [0, a, o] : i >= 240 && i < 300 ? [c,u,d] = [a, 0, o] : [c,u,d] = [o, 0, a],
    [(c + l) * 255, (u + l) * 255, (d + l) * 255]
}
function Lb(n, t, e) {
    const i = ge(n / 255, 0, 1)
      , r = ge(t / 255, 0, 1)
      , s = ge(e / 255, 0, 1)
      , o = Math.max(i, r, s)
      , a = Math.min(i, r, s)
      , l = o - a;
    let c;
    l === 0 ? c = 0 : o === i ? c = 60 * (((r - s) / l % 6 + 6) % 6) : o === r ? c = 60 * ((s - i) / l + 2) : c = 60 * ((i - r) / l + 4);
    const u = o === 0 ? 0 : l / o
      , d = o;
    return [c, u * 100, d * 100]
}
function Zu(n, t, e) {
    const i = Su(n, 360)
      , r = ge(t / 100, 0, 1)
      , s = ge(e / 100, 0, 1)
      , o = s * r
      , a = o * (1 - Math.abs(i / 60 % 2 - 1))
      , l = s - o;
    let c, u, d;
    return i >= 0 && i < 60 ? [c,u,d] = [o, a, 0] : i >= 60 && i < 120 ? [c,u,d] = [a, o, 0] : i >= 120 && i < 180 ? [c,u,d] = [0, o, a] : i >= 180 && i < 240 ? [c,u,d] = [0, a, o] : i >= 240 && i < 300 ? [c,u,d] = [a, 0, o] : [c,u,d] = [o, 0, a],
    [(c + l) * 255, (u + l) * 255, (d + l) * 255]
}
function Ub(n, t, e) {
    const i = e + t * (100 - Math.abs(2 * e - 100)) / 200;
    return [n, i !== 0 ? t * (100 - Math.abs(2 * e - 100)) / i : 0, e + t * (100 - Math.abs(2 * e - 100)) / (2 * 100)]
}
function Ib(n, t, e) {
    const i = 100 - Math.abs(e * (200 - t) / 100 - 100);
    return [n, i !== 0 ? t * e / i : 0, e * (200 - t) / (2 * 100)]
}
function fn(n) {
    return [n[0], n[1], n[2]]
}
function zs(n, t) {
    return [n[0], n[1], n[2], t]
}
const Nb = {
    hsl: {
        hsl: (n, t, e) => [n, t, e],
        hsv: Ub,
        rgb: Db
    },
    hsv: {
        hsl: Ib,
        hsv: (n, t, e) => [n, t, e],
        rgb: Zu
    },
    rgb: {
        hsl: Rb,
        hsv: Lb,
        rgb: (n, t, e) => [n, t, e]
    }
};
function ir(n, t) {
    return [t === "float" ? 1 : n === "rgb" ? 255 : 360, t === "float" ? 1 : n === "rgb" ? 255 : 100, t === "float" ? 1 : n === "rgb" ? 255 : 100]
}
function Fb(n, t) {
    return n === t ? t : Su(n, t)
}
function Ju(n, t, e) {
    var i;
    const r = ir(t, e);
    return [t === "rgb" ? ge(n[0], 0, r[0]) : Fb(n[0], r[0]), ge(n[1], 0, r[1]), ge(n[2], 0, r[2]), ge((i = n[3]) !== null && i !== void 0 ? i : 1, 0, 1)]
}
function Rc(n, t, e, i) {
    const r = ir(t, e)
      , s = ir(t, i);
    return n.map( (o, a) => o / r[a] * s[a])
}
function Qu(n, t, e) {
    const i = Rc(n, t.mode, t.type, "int")
      , r = Nb[t.mode][e.mode](...i);
    return Rc(r, e.mode, "int", e.type)
}
class jt {
    static black() {
        return new jt([0, 0, 0],"rgb")
    }
    constructor(t, e) {
        this.type = "int",
        this.mode = e,
        this.comps_ = Ju(t, e, this.type)
    }
    getComponents(t) {
        return zs(Qu(fn(this.comps_), {
            mode: this.mode,
            type: this.type
        }, {
            mode: t ?? this.mode,
            type: this.type
        }), this.comps_[3])
    }
    toRgbaObject() {
        const t = this.getComponents("rgb");
        return {
            r: t[0],
            g: t[1],
            b: t[2],
            a: t[3]
        }
    }
}
const kn = Wt("colp");
class Ob {
    constructor(t, e) {
        this.alphaViews_ = null,
        this.element = t.createElement("div"),
        this.element.classList.add(kn()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("div");
        i.classList.add(kn("hsv"));
        const r = t.createElement("div");
        r.classList.add(kn("sv")),
        this.svPaletteView_ = e.svPaletteView,
        r.appendChild(this.svPaletteView_.element),
        i.appendChild(r);
        const s = t.createElement("div");
        s.classList.add(kn("h")),
        this.hPaletteView_ = e.hPaletteView,
        s.appendChild(this.hPaletteView_.element),
        i.appendChild(s),
        this.element.appendChild(i);
        const o = t.createElement("div");
        if (o.classList.add(kn("rgb")),
        this.textsView_ = e.textsView,
        o.appendChild(this.textsView_.element),
        this.element.appendChild(o),
        e.alphaViews) {
            this.alphaViews_ = {
                palette: e.alphaViews.palette,
                text: e.alphaViews.text
            };
            const a = t.createElement("div");
            a.classList.add(kn("a"));
            const l = t.createElement("div");
            l.classList.add(kn("ap")),
            l.appendChild(this.alphaViews_.palette.element),
            a.appendChild(l);
            const c = t.createElement("div");
            c.classList.add(kn("at")),
            c.appendChild(this.alphaViews_.text.element),
            a.appendChild(c),
            this.element.appendChild(a)
        }
    }
    get allFocusableElements() {
        const t = [this.svPaletteView_.element, this.hPaletteView_.element, this.textsView_.modeSelectElement, ...this.textsView_.inputViews.map(e => e.inputElement)];
        return this.alphaViews_ && t.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement),
        t
    }
}
function Bb(n) {
    return n === "int" ? "int" : n === "float" ? "float" : void 0
}
function Ya(n) {
    return ae(n, t => ({
        color: t.optional.object({
            alpha: t.optional.boolean,
            type: t.optional.custom(Bb)
        }),
        expanded: t.optional.boolean,
        picker: t.optional.custom($u),
        readonly: t.optional.constant(!1)
    }))
}
function vi(n) {
    return n ? .1 : 1
}
function th(n) {
    var t;
    return (t = n.color) === null || t === void 0 ? void 0 : t.type
}
class Ka {
    constructor(t, e) {
        this.type = "float",
        this.mode = e,
        this.comps_ = Ju(t, e, this.type)
    }
    getComponents(t) {
        return zs(Qu(fn(this.comps_), {
            mode: this.mode,
            type: this.type
        }, {
            mode: t ?? this.mode,
            type: this.type
        }), this.comps_[3])
    }
    toRgbaObject() {
        const t = this.getComponents("rgb");
        return {
            r: t[0],
            g: t[1],
            b: t[2],
            a: t[3]
        }
    }
}
const kb = {
    int: (n, t) => new jt(n,t),
    float: (n, t) => new Ka(n,t)
};
function $a(n, t, e) {
    return kb[e](n, t)
}
function Vb(n) {
    return n.type === "float"
}
function zb(n) {
    return n.type === "int"
}
function Hb(n) {
    const t = n.getComponents()
      , e = ir(n.mode, "int");
    return new jt([Math.round($t(t[0], 0, 1, 0, e[0])), Math.round($t(t[1], 0, 1, 0, e[1])), Math.round($t(t[2], 0, 1, 0, e[2])), t[3]],n.mode)
}
function Gb(n) {
    const t = n.getComponents()
      , e = ir(n.mode, "int");
    return new Ka([$t(t[0], 0, e[0], 0, 1), $t(t[1], 0, e[1], 0, 1), $t(t[2], 0, e[2], 0, 1), t[3]],n.mode)
}
function Re(n, t) {
    if (n.type === t)
        return n;
    if (zb(n) && t === "float")
        return Gb(n);
    if (Vb(n) && t === "int")
        return Hb(n);
    throw ue.shouldNeverHappen()
}
function Wb(n, t) {
    return n.alpha === t.alpha && n.mode === t.mode && n.notation === t.notation && n.type === t.type
}
function $e(n, t) {
    const e = n.match(/^(.+)%$/);
    return Math.min(e ? parseFloat(e[1]) * .01 * t : parseFloat(n), t)
}
const Xb = {
    deg: n => n,
    grad: n => n * 360 / 400,
    rad: n => n * 360 / (2 * Math.PI),
    turn: n => n * 360
};
function eh(n) {
    const t = n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
    if (!t)
        return parseFloat(n);
    const e = parseFloat(t[1])
      , i = t[2];
    return Xb[i](e)
}
function nh(n) {
    const t = n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!t)
        return null;
    const e = [$e(t[1], 255), $e(t[2], 255), $e(t[3], 255)];
    return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e
}
function qb(n) {
    const t = nh(n);
    return t ? new jt(t,"rgb") : null
}
function ih(n) {
    const t = n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!t)
        return null;
    const e = [$e(t[1], 255), $e(t[2], 255), $e(t[3], 255), $e(t[4], 1)];
    return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e
}
function jb(n) {
    const t = ih(n);
    return t ? new jt(t,"rgb") : null
}
function rh(n) {
    const t = n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!t)
        return null;
    const e = [eh(t[1]), $e(t[2], 100), $e(t[3], 100)];
    return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e
}
function Yb(n) {
    const t = rh(n);
    return t ? new jt(t,"hsl") : null
}
function sh(n) {
    const t = n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
    if (!t)
        return null;
    const e = [eh(t[1]), $e(t[2], 100), $e(t[3], 100), $e(t[4], 1)];
    return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e
}
function Kb(n) {
    const t = sh(n);
    return t ? new jt(t,"hsl") : null
}
function oh(n) {
    const t = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (t)
        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
    const e = n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : null
}
function $b(n) {
    const t = oh(n);
    return t ? new jt(t,"rgb") : null
}
function ah(n) {
    const t = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (t)
        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), $t(parseInt(t[4] + t[4], 16), 0, 255, 0, 1)];
    const e = n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
    return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), $t(parseInt(e[4], 16), 0, 255, 0, 1)] : null
}
function Zb(n) {
    const t = ah(n);
    return t ? new jt(t,"rgb") : null
}
function lh(n) {
    const t = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!t)
        return null;
    const e = [parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3])];
    return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e
}
function Jb(n) {
    return t => {
        const e = lh(t);
        return e ? $a(e, "rgb", n) : null
    }
}
function ch(n) {
    const t = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
    if (!t)
        return null;
    const e = [parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3]), parseFloat(t[4])];
    return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e
}
function Qb(n) {
    return t => {
        const e = ch(t);
        return e ? $a(e, "rgb", n) : null
    }
}
const t0 = [{
    parser: oh,
    result: {
        alpha: !1,
        mode: "rgb",
        notation: "hex"
    }
}, {
    parser: ah,
    result: {
        alpha: !0,
        mode: "rgb",
        notation: "hex"
    }
}, {
    parser: nh,
    result: {
        alpha: !1,
        mode: "rgb",
        notation: "func"
    }
}, {
    parser: ih,
    result: {
        alpha: !0,
        mode: "rgb",
        notation: "func"
    }
}, {
    parser: rh,
    result: {
        alpha: !1,
        mode: "hsl",
        notation: "func"
    }
}, {
    parser: sh,
    result: {
        alpha: !0,
        mode: "hsl",
        notation: "func"
    }
}, {
    parser: lh,
    result: {
        alpha: !1,
        mode: "rgb",
        notation: "object"
    }
}, {
    parser: ch,
    result: {
        alpha: !0,
        mode: "rgb",
        notation: "object"
    }
}];
function e0(n) {
    return t0.reduce( (t, {parser: e, result: i}) => t || (e(n) ? i : null), null)
}
function n0(n, t="int") {
    const e = e0(n);
    return e ? e.notation === "hex" && t !== "float" ? Object.assign(Object.assign({}, e), {
        type: "int"
    }) : e.notation === "func" ? Object.assign(Object.assign({}, e), {
        type: t
    }) : null : null
}
function Xr(n) {
    const t = [$b, Zb, qb, jb, Yb, Kb];
    t.push(Jb("int"), Qb("int"));
    const e = _b(t);
    return i => {
        const r = e(i);
        return r ? Re(r, n) : null
    }
}
function i0(n) {
    const t = Xr("int");
    if (typeof n != "string")
        return jt.black();
    const e = t(n);
    return e ?? jt.black()
}
function uh(n) {
    const t = ge(Math.floor(n), 0, 255).toString(16);
    return t.length === 1 ? `0${t}` : t
}
function Za(n, t="#") {
    const e = fn(n.getComponents("rgb")).map(uh).join("");
    return `${t}${e}`
}
function Ja(n, t="#") {
    const e = n.getComponents("rgb")
      , i = [e[0], e[1], e[2], e[3] * 255].map(uh).join("");
    return `${t}${i}`
}
function hh(n) {
    const t = Oe(0)
      , e = Re(n, "int");
    return `rgb(${fn(e.getComponents("rgb")).map(r => t(r)).join(", ")})`
}
function Ss(n) {
    const t = Oe(2)
      , e = Oe(0);
    return `rgba(${Re(n, "int").getComponents("rgb").map( (s, o) => (o === 3 ? t : e)(s)).join(", ")})`
}
function r0(n) {
    const t = [Oe(0), Ls, Ls]
      , e = Re(n, "int");
    return `hsl(${fn(e.getComponents("hsl")).map( (r, s) => t[s](r)).join(", ")})`
}
function s0(n) {
    const t = [Oe(0), Ls, Ls, Oe(2)];
    return `hsla(${Re(n, "int").getComponents("hsl").map( (r, s) => t[s](r)).join(", ")})`
}
function dh(n, t) {
    const e = Oe(t === "float" ? 2 : 0)
      , i = ["r", "g", "b"]
      , r = Re(n, t);
    return `{${fn(r.getComponents("rgb")).map( (o, a) => `${i[a]}: ${e(o)}`).join(", ")}}`
}
function o0(n) {
    return t => dh(t, n)
}
function ph(n, t) {
    const e = Oe(2)
      , i = Oe(t === "float" ? 2 : 0)
      , r = ["r", "g", "b", "a"];
    return `{${Re(n, t).getComponents("rgb").map( (a, l) => {
        const c = l === 3 ? e : i;
        return `${r[l]}: ${c(a)}`
    }
    ).join(", ")}}`
}
function a0(n) {
    return t => ph(t, n)
}
const l0 = [{
    format: {
        alpha: !1,
        mode: "rgb",
        notation: "hex",
        type: "int"
    },
    stringifier: Za
}, {
    format: {
        alpha: !0,
        mode: "rgb",
        notation: "hex",
        type: "int"
    },
    stringifier: Ja
}, {
    format: {
        alpha: !1,
        mode: "rgb",
        notation: "func",
        type: "int"
    },
    stringifier: hh
}, {
    format: {
        alpha: !0,
        mode: "rgb",
        notation: "func",
        type: "int"
    },
    stringifier: Ss
}, {
    format: {
        alpha: !1,
        mode: "hsl",
        notation: "func",
        type: "int"
    },
    stringifier: r0
}, {
    format: {
        alpha: !0,
        mode: "hsl",
        notation: "func",
        type: "int"
    },
    stringifier: s0
}, ...["int", "float"].reduce( (n, t) => [...n, {
    format: {
        alpha: !1,
        mode: "rgb",
        notation: "object",
        type: t
    },
    stringifier: o0(t)
}, {
    format: {
        alpha: !0,
        mode: "rgb",
        notation: "object",
        type: t
    },
    stringifier: a0(t)
}], [])];
function fh(n) {
    return l0.reduce( (t, e) => t || (Wb(e.format, n) ? e.stringifier : null), null)
}
const br = Wt("apl");
class c0 {
    constructor(t, e) {
        this.onValueChange_ = this.onValueChange_.bind(this),
        this.value = e.value,
        this.value.emitter.on("change", this.onValueChange_),
        this.element = t.createElement("div"),
        this.element.classList.add(br()),
        e.viewProps.bindClassModifiers(this.element),
        e.viewProps.bindTabIndex(this.element);
        const i = t.createElement("div");
        i.classList.add(br("b")),
        this.element.appendChild(i);
        const r = t.createElement("div");
        r.classList.add(br("c")),
        i.appendChild(r),
        this.colorElem_ = r;
        const s = t.createElement("div");
        s.classList.add(br("m")),
        this.element.appendChild(s),
        this.markerElem_ = s;
        const o = t.createElement("div");
        o.classList.add(br("p")),
        this.markerElem_.appendChild(o),
        this.previewElem_ = o,
        this.update_()
    }
    update_() {
        const t = this.value.rawValue
          , e = t.getComponents("rgb")
          , i = new jt([e[0], e[1], e[2], 0],"rgb")
          , r = new jt([e[0], e[1], e[2], 255],"rgb")
          , s = ["to right", Ss(i), Ss(r)];
        this.colorElem_.style.background = `linear-gradient(${s.join(",")})`,
        this.previewElem_.style.backgroundColor = Ss(t);
        const o = $t(e[3], 0, 1, 0, 100);
        this.markerElem_.style.left = `${o}%`
    }
    onValueChange_() {
        this.update_()
    }
}
class u0 {
    constructor(t, e) {
        this.onKeyDown_ = this.onKeyDown_.bind(this),
        this.onKeyUp_ = this.onKeyUp_.bind(this),
        this.onPointerDown_ = this.onPointerDown_.bind(this),
        this.onPointerMove_ = this.onPointerMove_.bind(this),
        this.onPointerUp_ = this.onPointerUp_.bind(this),
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.view = new c0(t,{
            value: this.value,
            viewProps: this.viewProps
        }),
        this.ptHandler_ = new wi(this.view.element),
        this.ptHandler_.emitter.on("down", this.onPointerDown_),
        this.ptHandler_.emitter.on("move", this.onPointerMove_),
        this.ptHandler_.emitter.on("up", this.onPointerUp_),
        this.view.element.addEventListener("keydown", this.onKeyDown_),
        this.view.element.addEventListener("keyup", this.onKeyUp_)
    }
    handlePointerEvent_(t, e) {
        if (!t.point)
            return;
        const i = t.point.x / t.bounds.width
          , r = this.value.rawValue
          , [s,o,a] = r.getComponents("hsv");
        this.value.setRawValue(new jt([s, o, a, i],"hsv"), e)
    }
    onPointerDown_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !1,
            last: !1
        })
    }
    onPointerMove_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !1,
            last: !1
        })
    }
    onPointerUp_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !0,
            last: !0
        })
    }
    onKeyDown_(t) {
        const e = Ie(vi(!0), Dn(t));
        if (e === 0)
            return;
        const i = this.value.rawValue
          , [r,s,o,a] = i.getComponents("hsv");
        this.value.setRawValue(new jt([r, s, o, a + e],"hsv"), {
            forceEmit: !1,
            last: !1
        })
    }
    onKeyUp_(t) {
        Ie(vi(!0), Dn(t)) !== 0 && this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
        })
    }
}
const Bi = Wt("coltxt");
function h0(n) {
    const t = n.createElement("select")
      , e = [{
        text: "RGB",
        value: "rgb"
    }, {
        text: "HSL",
        value: "hsl"
    }, {
        text: "HSV",
        value: "hsv"
    }, {
        text: "HEX",
        value: "hex"
    }];
    return t.appendChild(e.reduce( (i, r) => {
        const s = n.createElement("option");
        return s.textContent = r.text,
        s.value = r.value,
        i.appendChild(s),
        i
    }
    , n.createDocumentFragment())),
    t
}
class d0 {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(Bi()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("div");
        i.classList.add(Bi("m")),
        this.modeElem_ = h0(t),
        this.modeElem_.classList.add(Bi("ms")),
        i.appendChild(this.modeSelectElement),
        e.viewProps.bindDisabled(this.modeElem_);
        const r = t.createElement("div");
        r.classList.add(Bi("mm")),
        r.appendChild(ks(t, "dropdown")),
        i.appendChild(r),
        this.element.appendChild(i);
        const s = t.createElement("div");
        s.classList.add(Bi("w")),
        this.element.appendChild(s),
        this.inputsElem_ = s,
        this.inputViews_ = e.inputViews,
        this.applyInputViews_(),
        Cn(e.mode, o => {
            this.modeElem_.value = o
        }
        )
    }
    get modeSelectElement() {
        return this.modeElem_
    }
    get inputViews() {
        return this.inputViews_
    }
    set inputViews(t) {
        this.inputViews_ = t,
        this.applyInputViews_()
    }
    applyInputViews_() {
        Iu(this.inputsElem_);
        const t = this.element.ownerDocument;
        this.inputViews_.forEach(e => {
            const i = t.createElement("div");
            i.classList.add(Bi("c")),
            i.appendChild(e.element),
            this.inputsElem_.appendChild(i)
        }
        )
    }
}
function p0(n) {
    return Oe(n === "float" ? 2 : 0)
}
function f0(n, t, e) {
    const i = ir(n, t)[e];
    return new Or({
        min: 0,
        max: i
    })
}
function m0(n, t, e) {
    return new Gr(n,{
        arrayPosition: e === 0 ? "fst" : e === 2 ? "lst" : "mid",
        parser: t.parser,
        props: Lt.fromObject({
            formatter: p0(t.colorType),
            keyScale: vi(!1),
            pointerScale: t.colorType === "float" ? .01 : 1
        }),
        value: se(0, {
            constraint: f0(t.colorMode, t.colorType, e)
        }),
        viewProps: t.viewProps
    })
}
function _0(n, t) {
    const e = {
        colorMode: t.colorMode,
        colorType: t.colorType,
        parser: Rn,
        viewProps: t.viewProps
    };
    return [0, 1, 2].map(i => {
        const r = m0(n, e, i);
        return cr({
            primary: t.value,
            secondary: r.value,
            forward(s) {
                return Re(s, t.colorType).getComponents(t.colorMode)[i]
            },
            backward(s, o) {
                const a = t.colorMode
                  , c = Re(s, t.colorType).getComponents(a);
                c[i] = o;
                const u = $a(zs(fn(c), c[3]), a, t.colorType);
                return Re(u, "int")
            }
        }),
        r
    }
    )
}
function v0(n, t) {
    const e = new Rr(n,{
        parser: Xr("int"),
        props: Lt.fromObject({
            formatter: Za
        }),
        value: se(jt.black()),
        viewProps: t.viewProps
    });
    return cr({
        primary: t.value,
        secondary: e.value,
        forward: i => new jt(fn(i.getComponents()),i.mode),
        backward: (i, r) => new jt(zs(fn(r.getComponents(i.mode)), i.getComponents()[3]),i.mode)
    }),
    [e]
}
function g0(n) {
    return n !== "hex"
}
class x0 {
    constructor(t, e) {
        this.onModeSelectChange_ = this.onModeSelectChange_.bind(this),
        this.colorType_ = e.colorType,
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.colorMode = se(this.value.rawValue.mode),
        this.ccs_ = this.createComponentControllers_(t),
        this.view = new d0(t,{
            mode: this.colorMode,
            inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view],
            viewProps: this.viewProps
        }),
        this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_)
    }
    createComponentControllers_(t) {
        const e = this.colorMode.rawValue;
        return g0(e) ? _0(t, {
            colorMode: e,
            colorType: this.colorType_,
            value: this.value,
            viewProps: this.viewProps
        }) : v0(t, {
            value: this.value,
            viewProps: this.viewProps
        })
    }
    onModeSelectChange_(t) {
        const e = t.currentTarget;
        this.colorMode.rawValue = e.value,
        this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument),
        this.view.inputViews = this.ccs_.map(i => i.view)
    }
}
const So = Wt("hpl");
class b0 {
    constructor(t, e) {
        this.onValueChange_ = this.onValueChange_.bind(this),
        this.value = e.value,
        this.value.emitter.on("change", this.onValueChange_),
        this.element = t.createElement("div"),
        this.element.classList.add(So()),
        e.viewProps.bindClassModifiers(this.element),
        e.viewProps.bindTabIndex(this.element);
        const i = t.createElement("div");
        i.classList.add(So("c")),
        this.element.appendChild(i);
        const r = t.createElement("div");
        r.classList.add(So("m")),
        this.element.appendChild(r),
        this.markerElem_ = r,
        this.update_()
    }
    update_() {
        const t = this.value.rawValue
          , [e] = t.getComponents("hsv");
        this.markerElem_.style.backgroundColor = hh(new jt([e, 100, 100],"hsv"));
        const i = $t(e, 0, 360, 0, 100);
        this.markerElem_.style.left = `${i}%`
    }
    onValueChange_() {
        this.update_()
    }
}
class E0 {
    constructor(t, e) {
        this.onKeyDown_ = this.onKeyDown_.bind(this),
        this.onKeyUp_ = this.onKeyUp_.bind(this),
        this.onPointerDown_ = this.onPointerDown_.bind(this),
        this.onPointerMove_ = this.onPointerMove_.bind(this),
        this.onPointerUp_ = this.onPointerUp_.bind(this),
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.view = new b0(t,{
            value: this.value,
            viewProps: this.viewProps
        }),
        this.ptHandler_ = new wi(this.view.element),
        this.ptHandler_.emitter.on("down", this.onPointerDown_),
        this.ptHandler_.emitter.on("move", this.onPointerMove_),
        this.ptHandler_.emitter.on("up", this.onPointerUp_),
        this.view.element.addEventListener("keydown", this.onKeyDown_),
        this.view.element.addEventListener("keyup", this.onKeyUp_)
    }
    handlePointerEvent_(t, e) {
        if (!t.point)
            return;
        const i = $t(ge(t.point.x, 0, t.bounds.width), 0, t.bounds.width, 0, 360)
          , r = this.value.rawValue
          , [,s,o,a] = r.getComponents("hsv");
        this.value.setRawValue(new jt([i, s, o, a],"hsv"), e)
    }
    onPointerDown_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !1,
            last: !1
        })
    }
    onPointerMove_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !1,
            last: !1
        })
    }
    onPointerUp_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !0,
            last: !0
        })
    }
    onKeyDown_(t) {
        const e = Ie(vi(!1), Dn(t));
        if (e === 0)
            return;
        const i = this.value.rawValue
          , [r,s,o,a] = i.getComponents("hsv");
        this.value.setRawValue(new jt([r + e, s, o, a],"hsv"), {
            forceEmit: !1,
            last: !1
        })
    }
    onKeyUp_(t) {
        Ie(vi(!1), Dn(t)) !== 0 && this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
        })
    }
}
const To = Wt("svp")
  , Dc = 64;
class w0 {
    constructor(t, e) {
        this.onValueChange_ = this.onValueChange_.bind(this),
        this.value = e.value,
        this.value.emitter.on("change", this.onValueChange_),
        this.element = t.createElement("div"),
        this.element.classList.add(To()),
        e.viewProps.bindClassModifiers(this.element),
        e.viewProps.bindTabIndex(this.element);
        const i = t.createElement("canvas");
        i.height = Dc,
        i.width = Dc,
        i.classList.add(To("c")),
        this.element.appendChild(i),
        this.canvasElement = i;
        const r = t.createElement("div");
        r.classList.add(To("m")),
        this.element.appendChild(r),
        this.markerElem_ = r,
        this.update_()
    }
    update_() {
        const t = Ex(this.canvasElement);
        if (!t)
            return;
        const i = this.value.rawValue.getComponents("hsv")
          , r = this.canvasElement.width
          , s = this.canvasElement.height
          , o = t.getImageData(0, 0, r, s)
          , a = o.data;
        for (let u = 0; u < s; u++)
            for (let d = 0; d < r; d++) {
                const p = $t(d, 0, r, 0, 100)
                  , m = $t(u, 0, s, 100, 0)
                  , g = Zu(i[0], p, m)
                  , b = (u * r + d) * 4;
                a[b] = g[0],
                a[b + 1] = g[1],
                a[b + 2] = g[2],
                a[b + 3] = 255
            }
        t.putImageData(o, 0, 0);
        const l = $t(i[1], 0, 100, 0, 100);
        this.markerElem_.style.left = `${l}%`;
        const c = $t(i[2], 0, 100, 100, 0);
        this.markerElem_.style.top = `${c}%`
    }
    onValueChange_() {
        this.update_()
    }
}
class M0 {
    constructor(t, e) {
        this.onKeyDown_ = this.onKeyDown_.bind(this),
        this.onKeyUp_ = this.onKeyUp_.bind(this),
        this.onPointerDown_ = this.onPointerDown_.bind(this),
        this.onPointerMove_ = this.onPointerMove_.bind(this),
        this.onPointerUp_ = this.onPointerUp_.bind(this),
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.view = new w0(t,{
            value: this.value,
            viewProps: this.viewProps
        }),
        this.ptHandler_ = new wi(this.view.element),
        this.ptHandler_.emitter.on("down", this.onPointerDown_),
        this.ptHandler_.emitter.on("move", this.onPointerMove_),
        this.ptHandler_.emitter.on("up", this.onPointerUp_),
        this.view.element.addEventListener("keydown", this.onKeyDown_),
        this.view.element.addEventListener("keyup", this.onKeyUp_)
    }
    handlePointerEvent_(t, e) {
        if (!t.point)
            return;
        const i = $t(t.point.x, 0, t.bounds.width, 0, 100)
          , r = $t(t.point.y, 0, t.bounds.height, 100, 0)
          , [s,,,o] = this.value.rawValue.getComponents("hsv");
        this.value.setRawValue(new jt([s, i, r, o],"hsv"), e)
    }
    onPointerDown_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !1,
            last: !1
        })
    }
    onPointerMove_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !1,
            last: !1
        })
    }
    onPointerUp_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !0,
            last: !0
        })
    }
    onKeyDown_(t) {
        ju(t.key) && t.preventDefault();
        const [e,i,r,s] = this.value.rawValue.getComponents("hsv")
          , o = vi(!1)
          , a = Ie(o, Dn(t))
          , l = Ie(o, Dr(t));
        a === 0 && l === 0 || this.value.setRawValue(new jt([e, i + a, r + l, s],"hsv"), {
            forceEmit: !1,
            last: !1
        })
    }
    onKeyUp_(t) {
        const e = vi(!1)
          , i = Ie(e, Dn(t))
          , r = Ie(e, Dr(t));
        i === 0 && r === 0 || this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
        })
    }
}
class y0 {
    constructor(t, e) {
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.hPaletteC_ = new E0(t,{
            value: this.value,
            viewProps: this.viewProps
        }),
        this.svPaletteC_ = new M0(t,{
            value: this.value,
            viewProps: this.viewProps
        }),
        this.alphaIcs_ = e.supportsAlpha ? {
            palette: new u0(t,{
                value: this.value,
                viewProps: this.viewProps
            }),
            text: new Gr(t,{
                parser: Rn,
                props: Lt.fromObject({
                    pointerScale: .01,
                    keyScale: .1,
                    formatter: Oe(2)
                }),
                value: se(0, {
                    constraint: new Or({
                        min: 0,
                        max: 1
                    })
                }),
                viewProps: this.viewProps
            })
        } : null,
        this.alphaIcs_ && cr({
            primary: this.value,
            secondary: this.alphaIcs_.text.value,
            forward: i => i.getComponents()[3],
            backward: (i, r) => {
                const s = i.getComponents();
                return s[3] = r,
                new jt(s,i.mode)
            }
        }),
        this.textsC_ = new x0(t,{
            colorType: e.colorType,
            value: this.value,
            viewProps: this.viewProps
        }),
        this.view = new Ob(t,{
            alphaViews: this.alphaIcs_ ? {
                palette: this.alphaIcs_.palette.view,
                text: this.alphaIcs_.text.view
            } : null,
            hPaletteView: this.hPaletteC_.view,
            supportsAlpha: e.supportsAlpha,
            svPaletteView: this.svPaletteC_.view,
            textsView: this.textsC_.view,
            viewProps: this.viewProps
        })
    }
    get textsController() {
        return this.textsC_
    }
}
const Co = Wt("colsw");
class S0 {
    constructor(t, e) {
        this.onValueChange_ = this.onValueChange_.bind(this),
        e.value.emitter.on("change", this.onValueChange_),
        this.value = e.value,
        this.element = t.createElement("div"),
        this.element.classList.add(Co()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("div");
        i.classList.add(Co("sw")),
        this.element.appendChild(i),
        this.swatchElem_ = i;
        const r = t.createElement("button");
        r.classList.add(Co("b")),
        e.viewProps.bindDisabled(r),
        this.element.appendChild(r),
        this.buttonElement = r,
        this.update_()
    }
    update_() {
        const t = this.value.rawValue;
        this.swatchElem_.style.backgroundColor = Ja(t)
    }
    onValueChange_() {
        this.update_()
    }
}
class T0 {
    constructor(t, e) {
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.view = new S0(t,{
            value: this.value,
            viewProps: this.viewProps
        })
    }
}
class Qa {
    constructor(t, e) {
        this.onButtonBlur_ = this.onButtonBlur_.bind(this),
        this.onButtonClick_ = this.onButtonClick_.bind(this),
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this),
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this),
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.foldable_ = kr.create(e.expanded),
        this.swatchC_ = new T0(t,{
            value: this.value,
            viewProps: this.viewProps
        });
        const i = this.swatchC_.view.buttonElement;
        i.addEventListener("blur", this.onButtonBlur_),
        i.addEventListener("click", this.onButtonClick_),
        this.textC_ = new Rr(t,{
            parser: e.parser,
            props: Lt.fromObject({
                formatter: e.formatter
            }),
            value: this.value,
            viewProps: this.viewProps
        }),
        this.view = new Pb(t,{
            foldable: this.foldable_,
            pickerLayout: e.pickerLayout
        }),
        this.view.swatchElement.appendChild(this.swatchC_.view.element),
        this.view.textElement.appendChild(this.textC_.view.element),
        this.popC_ = e.pickerLayout === "popup" ? new Wu(t,{
            viewProps: this.viewProps
        }) : null;
        const r = new y0(t,{
            colorType: e.colorType,
            supportsAlpha: e.supportsAlpha,
            value: this.value,
            viewProps: this.viewProps
        });
        r.view.allFocusableElements.forEach(s => {
            s.addEventListener("blur", this.onPopupChildBlur_),
            s.addEventListener("keydown", this.onPopupChildKeydown_)
        }
        ),
        this.pickerC_ = r,
        this.popC_ ? (this.view.element.appendChild(this.popC_.view.element),
        this.popC_.view.element.appendChild(r.view.element),
        cr({
            primary: this.foldable_.value("expanded"),
            secondary: this.popC_.shows,
            forward: s => s,
            backward: (s, o) => o
        })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element),
        Wa(this.foldable_, this.view.pickerElement))
    }
    get textController() {
        return this.textC_
    }
    onButtonBlur_(t) {
        if (!this.popC_)
            return;
        const e = this.view.element
          , i = t.relatedTarget;
        (!i || !e.contains(i)) && (this.popC_.shows.rawValue = !1)
    }
    onButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded")),
        this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus()
    }
    onPopupChildBlur_(t) {
        if (!this.popC_)
            return;
        const e = this.popC_.view.element
          , i = Nu(t);
        i && e.contains(i) || i && i === this.swatchC_.view.buttonElement && !Ba(e.ownerDocument) || (this.popC_.shows.rawValue = !1)
    }
    onPopupChildKeydown_(t) {
        this.popC_ ? t.key === "Escape" && (this.popC_.shows.rawValue = !1) : this.view.pickerElement && t.key === "Escape" && this.swatchC_.view.buttonElement.focus()
    }
}
function C0(n) {
    return fn(n.getComponents("rgb")).reduce( (t, e) => t << 8 | Math.floor(e) & 255, 0)
}
function A0(n) {
    return n.getComponents("rgb").reduce( (t, e, i) => {
        const r = Math.floor(i === 3 ? e * 255 : e) & 255;
        return t << 8 | r
    }
    , 0) >>> 0
}
function P0(n) {
    return new jt([n >> 16 & 255, n >> 8 & 255, n & 255],"rgb")
}
function R0(n) {
    return new jt([n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, $t(n & 255, 0, 255, 0, 1)],"rgb")
}
function D0(n) {
    return typeof n != "number" ? jt.black() : P0(n)
}
function L0(n) {
    return typeof n != "number" ? jt.black() : R0(n)
}
function Ts(n, t) {
    return typeof n != "object" || ne(n) ? !1 : t in n && typeof n[t] == "number"
}
function mh(n) {
    return Ts(n, "r") && Ts(n, "g") && Ts(n, "b")
}
function _h(n) {
    return mh(n) && Ts(n, "a")
}
function vh(n) {
    return mh(n)
}
function tl(n, t) {
    if (n.mode !== t.mode || n.type !== t.type)
        return !1;
    const e = n.getComponents()
      , i = t.getComponents();
    for (let r = 0; r < e.length; r++)
        if (e[r] !== i[r])
            return !1;
    return !0
}
function Lc(n) {
    return "a"in n ? [n.r, n.g, n.b, n.a] : [n.r, n.g, n.b]
}
function U0(n) {
    const t = fh(n);
    return t ? (e, i) => {
        Wr(e, t(i))
    }
    : null
}
function I0(n) {
    const t = n ? A0 : C0;
    return (e, i) => {
        Wr(e, t(i))
    }
}
function N0(n, t, e) {
    const r = Re(t, e).toRgbaObject();
    n.writeProperty("r", r.r),
    n.writeProperty("g", r.g),
    n.writeProperty("b", r.b),
    n.writeProperty("a", r.a)
}
function F0(n, t, e) {
    const r = Re(t, e).toRgbaObject();
    n.writeProperty("r", r.r),
    n.writeProperty("g", r.g),
    n.writeProperty("b", r.b)
}
function O0(n, t) {
    return (e, i) => {
        n ? N0(e, i, t) : F0(e, i, t)
    }
}
function B0(n) {
    var t;
    return !!(!((t = n == null ? void 0 : n.color) === null || t === void 0) && t.alpha)
}
function k0(n) {
    return n ? t => Ja(t, "0x") : t => Za(t, "0x")
}
function V0(n) {
    return "color"in n || n.view === "color"
}
const z0 = De({
    id: "input-color-number",
    type: "input",
    accept: (n, t) => {
        if (typeof n != "number" || !V0(t))
            return null;
        const e = Ya(t);
        return e ? {
            initialValue: n,
            params: Object.assign(Object.assign({}, e), {
                supportsAlpha: B0(t)
            })
        } : null
    }
    ,
    binding: {
        reader: n => n.params.supportsAlpha ? L0 : D0,
        equals: tl,
        writer: n => I0(n.params.supportsAlpha)
    },
    controller: n => {
        var t, e;
        return new Qa(n.document,{
            colorType: "int",
            expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : !1,
            formatter: k0(n.params.supportsAlpha),
            parser: Xr("int"),
            pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup",
            supportsAlpha: n.params.supportsAlpha,
            value: n.value,
            viewProps: n.viewProps
        })
    }
});
function H0(n, t) {
    if (!vh(n))
        return Re(jt.black(), t);
    if (t === "int") {
        const e = Lc(n);
        return new jt(e,"rgb")
    }
    if (t === "float") {
        const e = Lc(n);
        return new Ka(e,"rgb")
    }
    return Re(jt.black(), "int")
}
function G0(n) {
    return _h(n)
}
function W0(n) {
    return t => {
        const e = H0(t, n);
        return Re(e, "int")
    }
}
function X0(n, t) {
    return e => n ? ph(e, t) : dh(e, t)
}
const q0 = De({
    id: "input-color-object",
    type: "input",
    accept: (n, t) => {
        var e;
        if (!vh(n))
            return null;
        const i = Ya(t);
        return i ? {
            initialValue: n,
            params: Object.assign(Object.assign({}, i), {
                colorType: (e = th(t)) !== null && e !== void 0 ? e : "int"
            })
        } : null
    }
    ,
    binding: {
        reader: n => W0(n.params.colorType),
        equals: tl,
        writer: n => O0(G0(n.initialValue), n.params.colorType)
    },
    controller: n => {
        var t, e;
        const i = _h(n.initialValue);
        return new Qa(n.document,{
            colorType: n.params.colorType,
            expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : !1,
            formatter: X0(i, n.params.colorType),
            parser: Xr("int"),
            pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup",
            supportsAlpha: i,
            value: n.value,
            viewProps: n.viewProps
        })
    }
})
  , j0 = De({
    id: "input-color-string",
    type: "input",
    accept: (n, t) => {
        if (typeof n != "string" || t.view === "text")
            return null;
        const e = n0(n, th(t));
        if (!e)
            return null;
        const i = fh(e);
        if (!i)
            return null;
        const r = Ya(t);
        return r ? {
            initialValue: n,
            params: Object.assign(Object.assign({}, r), {
                format: e,
                stringifier: i
            })
        } : null
    }
    ,
    binding: {
        reader: () => i0,
        equals: tl,
        writer: n => {
            const t = U0(n.params.format);
            if (!t)
                throw ue.notBindable();
            return t
        }
    },
    controller: n => {
        var t, e;
        return new Qa(n.document,{
            colorType: n.params.format.type,
            expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : !1,
            formatter: n.params.stringifier,
            parser: Xr("int"),
            pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup",
            supportsAlpha: n.params.format.alpha,
            value: n.value,
            viewProps: n.viewProps
        })
    }
});
class el {
    constructor(t) {
        this.components = t.components,
        this.asm_ = t.assembly
    }
    constrain(t) {
        const e = this.asm_.toComponents(t).map( (i, r) => {
            var s, o;
            return (o = (s = this.components[r]) === null || s === void 0 ? void 0 : s.constrain(i)) !== null && o !== void 0 ? o : i
        }
        );
        return this.asm_.fromComponents(e)
    }
}
const Uc = Wt("pndtxt");
class Y0 {
    constructor(t, e) {
        this.textViews = e.textViews,
        this.element = t.createElement("div"),
        this.element.classList.add(Uc()),
        this.textViews.forEach(i => {
            const r = t.createElement("div");
            r.classList.add(Uc("a")),
            r.appendChild(i.element),
            this.element.appendChild(r)
        }
        )
    }
}
function K0(n, t, e) {
    return new Gr(n,{
        arrayPosition: e === 0 ? "fst" : e === t.axes.length - 1 ? "lst" : "mid",
        parser: t.parser,
        props: t.axes[e].textProps,
        value: se(0, {
            constraint: t.axes[e].constraint
        }),
        viewProps: t.viewProps
    })
}
class nl {
    constructor(t, e) {
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.acs_ = e.axes.map( (i, r) => K0(t, e, r)),
        this.acs_.forEach( (i, r) => {
            cr({
                primary: this.value,
                secondary: i.value,
                forward: s => e.assembly.toComponents(s)[r],
                backward: (s, o) => {
                    const a = e.assembly.toComponents(s);
                    return a[r] = o,
                    e.assembly.fromComponents(a)
                }
            })
        }
        ),
        this.view = new Y0(t,{
            textViews: this.acs_.map(i => i.view)
        })
    }
    get textControllers() {
        return this.acs_
    }
}
class $0 extends Pr {
    get max() {
        return this.controller.valueController.sliderController.props.get("max")
    }
    set max(t) {
        this.controller.valueController.sliderController.props.set("max", t)
    }
    get min() {
        return this.controller.valueController.sliderController.props.get("min")
    }
    set min(t) {
        this.controller.valueController.sliderController.props.set("min", t)
    }
}
function Z0(n, t) {
    const e = []
      , i = Au(n, t);
    i && e.push(i);
    const r = Pu(n);
    r && e.push(r);
    const s = ja(n.options);
    return s && e.push(s),
    new Vr(e)
}
const J0 = De({
    id: "input-number",
    type: "input",
    accept: (n, t) => {
        if (typeof n != "number")
            return null;
        const e = ae(t, i => Object.assign(Object.assign({}, Du(i)), {
            options: i.optional.custom(Hr),
            readonly: i.optional.constant(!1)
        }));
        return e ? {
            initialValue: n,
            params: e
        } : null
    }
    ,
    binding: {
        reader: n => yu,
        constraint: n => Z0(n.params, n.initialValue),
        writer: n => Wr
    },
    controller: n => {
        const t = n.value
          , e = n.constraint
          , i = e && Ds(e, zr);
        if (i)
            return new Kn(n.document,{
                props: new Lt({
                    options: i.values.value("options")
                }),
                value: t,
                viewProps: n.viewProps
            });
        const r = Ru(n.params, t.rawValue)
          , s = e && Ds(e, Or);
        return s ? new Us(n.document,Object.assign(Object.assign({}, Yu(Object.assign(Object.assign({}, r), {
            keyScale: se(r.keyScale),
            max: s.values.value("max"),
            min: s.values.value("min")
        }))), {
            parser: Rn,
            value: t,
            viewProps: n.viewProps
        })) : new Gr(n.document,{
            parser: Rn,
            props: Lt.fromObject(r),
            value: t,
            viewProps: n.viewProps
        })
    }
    ,
    api(n) {
        return typeof n.controller.value.rawValue != "number" ? null : n.controller.valueController instanceof Us ? new $0(n.controller) : n.controller.valueController instanceof Kn ? new Xa(n.controller) : null
    }
});
class jn {
    constructor(t=0, e=0) {
        this.x = t,
        this.y = e
    }
    getComponents() {
        return [this.x, this.y]
    }
    static isObject(t) {
        if (ne(t))
            return !1;
        const e = t.x
          , i = t.y;
        return !(typeof e != "number" || typeof i != "number")
    }
    static equals(t, e) {
        return t.x === e.x && t.y === e.y
    }
    toObject() {
        return {
            x: this.x,
            y: this.y
        }
    }
}
const gh = {
    toComponents: n => n.getComponents(),
    fromComponents: n => new jn(...n)
}
  , ki = Wt("p2d");
class Q0 {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(ki()),
        e.viewProps.bindClassModifiers(this.element),
        Cn(e.expanded, or(this.element, ki(void 0, "expanded")));
        const i = t.createElement("div");
        i.classList.add(ki("h")),
        this.element.appendChild(i);
        const r = t.createElement("button");
        r.classList.add(ki("b")),
        r.appendChild(ks(t, "p2dpad")),
        e.viewProps.bindDisabled(r),
        i.appendChild(r),
        this.buttonElement = r;
        const s = t.createElement("div");
        if (s.classList.add(ki("t")),
        i.appendChild(s),
        this.textElement = s,
        e.pickerLayout === "inline") {
            const o = t.createElement("div");
            o.classList.add(ki("p")),
            this.element.appendChild(o),
            this.pickerElement = o
        } else
            this.pickerElement = null
    }
}
const Vn = Wt("p2dp");
class tE {
    constructor(t, e) {
        this.onFoldableChange_ = this.onFoldableChange_.bind(this),
        this.onPropsChange_ = this.onPropsChange_.bind(this),
        this.onValueChange_ = this.onValueChange_.bind(this),
        this.props_ = e.props,
        this.props_.emitter.on("change", this.onPropsChange_),
        this.element = t.createElement("div"),
        this.element.classList.add(Vn()),
        e.layout === "popup" && this.element.classList.add(Vn(void 0, "p")),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("div");
        i.classList.add(Vn("p")),
        e.viewProps.bindTabIndex(i),
        this.element.appendChild(i),
        this.padElement = i;
        const r = t.createElementNS(un, "svg");
        r.classList.add(Vn("g")),
        this.padElement.appendChild(r),
        this.svgElem_ = r;
        const s = t.createElementNS(un, "line");
        s.classList.add(Vn("ax")),
        s.setAttributeNS(null, "x1", "0"),
        s.setAttributeNS(null, "y1", "50%"),
        s.setAttributeNS(null, "x2", "100%"),
        s.setAttributeNS(null, "y2", "50%"),
        this.svgElem_.appendChild(s);
        const o = t.createElementNS(un, "line");
        o.classList.add(Vn("ax")),
        o.setAttributeNS(null, "x1", "50%"),
        o.setAttributeNS(null, "y1", "0"),
        o.setAttributeNS(null, "x2", "50%"),
        o.setAttributeNS(null, "y2", "100%"),
        this.svgElem_.appendChild(o);
        const a = t.createElementNS(un, "line");
        a.classList.add(Vn("l")),
        a.setAttributeNS(null, "x1", "50%"),
        a.setAttributeNS(null, "y1", "50%"),
        this.svgElem_.appendChild(a),
        this.lineElem_ = a;
        const l = t.createElement("div");
        l.classList.add(Vn("m")),
        this.padElement.appendChild(l),
        this.markerElem_ = l,
        e.value.emitter.on("change", this.onValueChange_),
        this.value = e.value,
        this.update_()
    }
    get allFocusableElements() {
        return [this.padElement]
    }
    update_() {
        const [t,e] = this.value.rawValue.getComponents()
          , i = this.props_.get("max")
          , r = $t(t, -i, +i, 0, 100)
          , s = $t(e, -i, +i, 0, 100)
          , o = this.props_.get("invertsY") ? 100 - s : s;
        this.lineElem_.setAttributeNS(null, "x2", `${r}%`),
        this.lineElem_.setAttributeNS(null, "y2", `${o}%`),
        this.markerElem_.style.left = `${r}%`,
        this.markerElem_.style.top = `${o}%`
    }
    onValueChange_() {
        this.update_()
    }
    onPropsChange_() {
        this.update_()
    }
    onFoldableChange_() {
        this.update_()
    }
}
function Ic(n, t, e) {
    return [Ie(t[0], Dn(n)), Ie(t[1], Dr(n)) * (e ? 1 : -1)]
}
class eE {
    constructor(t, e) {
        this.onPadKeyDown_ = this.onPadKeyDown_.bind(this),
        this.onPadKeyUp_ = this.onPadKeyUp_.bind(this),
        this.onPointerDown_ = this.onPointerDown_.bind(this),
        this.onPointerMove_ = this.onPointerMove_.bind(this),
        this.onPointerUp_ = this.onPointerUp_.bind(this),
        this.props = e.props,
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.view = new tE(t,{
            layout: e.layout,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        }),
        this.ptHandler_ = new wi(this.view.padElement),
        this.ptHandler_.emitter.on("down", this.onPointerDown_),
        this.ptHandler_.emitter.on("move", this.onPointerMove_),
        this.ptHandler_.emitter.on("up", this.onPointerUp_),
        this.view.padElement.addEventListener("keydown", this.onPadKeyDown_),
        this.view.padElement.addEventListener("keyup", this.onPadKeyUp_)
    }
    handlePointerEvent_(t, e) {
        if (!t.point)
            return;
        const i = this.props.get("max")
          , r = $t(t.point.x, 0, t.bounds.width, -i, +i)
          , s = $t(this.props.get("invertsY") ? t.bounds.height - t.point.y : t.point.y, 0, t.bounds.height, -i, +i);
        this.value.setRawValue(new jn(r,s), e)
    }
    onPointerDown_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !1,
            last: !1
        })
    }
    onPointerMove_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !1,
            last: !1
        })
    }
    onPointerUp_(t) {
        this.handlePointerEvent_(t.data, {
            forceEmit: !0,
            last: !0
        })
    }
    onPadKeyDown_(t) {
        ju(t.key) && t.preventDefault();
        const [e,i] = Ic(t, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
        e === 0 && i === 0 || this.value.setRawValue(new jn(this.value.rawValue.x + e,this.value.rawValue.y + i), {
            forceEmit: !1,
            last: !1
        })
    }
    onPadKeyUp_(t) {
        const [e,i] = Ic(t, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
        e === 0 && i === 0 || this.value.setRawValue(this.value.rawValue, {
            forceEmit: !0,
            last: !0
        })
    }
}
class nE {
    constructor(t, e) {
        var i, r;
        this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this),
        this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this),
        this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this),
        this.onPadButtonClick_ = this.onPadButtonClick_.bind(this),
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.foldable_ = kr.create(e.expanded),
        this.popC_ = e.pickerLayout === "popup" ? new Wu(t,{
            viewProps: this.viewProps
        }) : null;
        const s = new eE(t,{
            layout: e.pickerLayout,
            props: new Lt({
                invertsY: se(e.invertsY),
                max: se(e.max),
                xKeyScale: e.axes[0].textProps.value("keyScale"),
                yKeyScale: e.axes[1].textProps.value("keyScale")
            }),
            value: this.value,
            viewProps: this.viewProps
        });
        s.view.allFocusableElements.forEach(o => {
            o.addEventListener("blur", this.onPopupChildBlur_),
            o.addEventListener("keydown", this.onPopupChildKeydown_)
        }
        ),
        this.pickerC_ = s,
        this.textC_ = new nl(t,{
            assembly: gh,
            axes: e.axes,
            parser: e.parser,
            value: this.value,
            viewProps: this.viewProps
        }),
        this.view = new Q0(t,{
            expanded: this.foldable_.value("expanded"),
            pickerLayout: e.pickerLayout,
            viewProps: this.viewProps
        }),
        this.view.textElement.appendChild(this.textC_.view.element),
        (i = this.view.buttonElement) === null || i === void 0 || i.addEventListener("blur", this.onPadButtonBlur_),
        (r = this.view.buttonElement) === null || r === void 0 || r.addEventListener("click", this.onPadButtonClick_),
        this.popC_ ? (this.view.element.appendChild(this.popC_.view.element),
        this.popC_.view.element.appendChild(this.pickerC_.view.element),
        cr({
            primary: this.foldable_.value("expanded"),
            secondary: this.popC_.shows,
            forward: o => o,
            backward: (o, a) => a
        })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element),
        Wa(this.foldable_, this.view.pickerElement))
    }
    get textController() {
        return this.textC_
    }
    onPadButtonBlur_(t) {
        if (!this.popC_)
            return;
        const e = this.view.element
          , i = t.relatedTarget;
        (!i || !e.contains(i)) && (this.popC_.shows.rawValue = !1)
    }
    onPadButtonClick_() {
        this.foldable_.set("expanded", !this.foldable_.get("expanded")),
        this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus()
    }
    onPopupChildBlur_(t) {
        if (!this.popC_)
            return;
        const e = this.popC_.view.element
          , i = Nu(t);
        i && e.contains(i) || i && i === this.view.buttonElement && !Ba(e.ownerDocument) || (this.popC_.shows.rawValue = !1)
    }
    onPopupChildKeydown_(t) {
        this.popC_ ? t.key === "Escape" && (this.popC_.shows.rawValue = !1) : this.view.pickerElement && t.key === "Escape" && this.view.buttonElement.focus()
    }
}
function iE(n) {
    return jn.isObject(n) ? new jn(n.x,n.y) : new jn
}
function rE(n, t) {
    n.writeProperty("x", t.x),
    n.writeProperty("y", t.y)
}
function sE(n, t) {
    return new el({
        assembly: gh,
        components: [Sn(Object.assign(Object.assign({}, n), n.x), t.x), Sn(Object.assign(Object.assign({}, n), n.y), t.y)]
    })
}
function Nc(n, t) {
    var e, i;
    if (!ne(n.min) || !ne(n.max))
        return Math.max(Math.abs((e = n.min) !== null && e !== void 0 ? e : 0), Math.abs((i = n.max) !== null && i !== void 0 ? i : 0));
    const r = Tu(n);
    return Math.max(Math.abs(r) * 10, Math.abs(t) * 10)
}
function oE(n, t) {
    var e, i;
    const r = Nc(mi(n, (e = n.x) !== null && e !== void 0 ? e : {}), t.x)
      , s = Nc(mi(n, (i = n.y) !== null && i !== void 0 ? i : {}), t.y);
    return Math.max(r, s)
}
function aE(n) {
    if (!("y"in n))
        return !1;
    const t = n.y;
    return t && "inverted"in t ? !!t.inverted : !1
}
const lE = De({
    id: "input-point2d",
    type: "input",
    accept: (n, t) => {
        if (!jn.isObject(n))
            return null;
        const e = ae(t, i => Object.assign(Object.assign({}, Lr(i)), {
            expanded: i.optional.boolean,
            picker: i.optional.custom($u),
            readonly: i.optional.constant(!1),
            x: i.optional.custom(Wn),
            y: i.optional.object(Object.assign(Object.assign({}, Lr(i)), {
                inverted: i.optional.boolean
            }))
        }));
        return e ? {
            initialValue: n,
            params: e
        } : null
    }
    ,
    binding: {
        reader: () => iE,
        constraint: n => sE(n.params, n.initialValue),
        equals: jn.equals,
        writer: () => rE
    },
    controller: n => {
        var t, e;
        const i = n.document
          , r = n.value
          , s = n.constraint
          , o = [n.params.x, n.params.y];
        return new nE(i,{
            axes: r.rawValue.getComponents().map( (a, l) => {
                var c;
                return Oa({
                    constraint: s.components[l],
                    initialValue: a,
                    params: mi(n.params, (c = o[l]) !== null && c !== void 0 ? c : {})
                })
            }
            ),
            expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : !1,
            invertsY: aE(n.params),
            max: oE(n.params, r.rawValue),
            parser: Rn,
            pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup",
            value: r,
            viewProps: n.viewProps
        })
    }
});
class Yi {
    constructor(t=0, e=0, i=0) {
        this.x = t,
        this.y = e,
        this.z = i
    }
    getComponents() {
        return [this.x, this.y, this.z]
    }
    static isObject(t) {
        if (ne(t))
            return !1;
        const e = t.x
          , i = t.y
          , r = t.z;
        return !(typeof e != "number" || typeof i != "number" || typeof r != "number")
    }
    static equals(t, e) {
        return t.x === e.x && t.y === e.y && t.z === e.z
    }
    toObject() {
        return {
            x: this.x,
            y: this.y,
            z: this.z
        }
    }
}
const xh = {
    toComponents: n => n.getComponents(),
    fromComponents: n => new Yi(...n)
};
function cE(n) {
    return Yi.isObject(n) ? new Yi(n.x,n.y,n.z) : new Yi
}
function uE(n, t) {
    n.writeProperty("x", t.x),
    n.writeProperty("y", t.y),
    n.writeProperty("z", t.z)
}
function hE(n, t) {
    return new el({
        assembly: xh,
        components: [Sn(Object.assign(Object.assign({}, n), n.x), t.x), Sn(Object.assign(Object.assign({}, n), n.y), t.y), Sn(Object.assign(Object.assign({}, n), n.z), t.z)]
    })
}
const dE = De({
    id: "input-point3d",
    type: "input",
    accept: (n, t) => {
        if (!Yi.isObject(n))
            return null;
        const e = ae(t, i => Object.assign(Object.assign({}, Lr(i)), {
            readonly: i.optional.constant(!1),
            x: i.optional.custom(Wn),
            y: i.optional.custom(Wn),
            z: i.optional.custom(Wn)
        }));
        return e ? {
            initialValue: n,
            params: e
        } : null
    }
    ,
    binding: {
        reader: n => cE,
        constraint: n => hE(n.params, n.initialValue),
        equals: Yi.equals,
        writer: n => uE
    },
    controller: n => {
        const t = n.value
          , e = n.constraint
          , i = [n.params.x, n.params.y, n.params.z];
        return new nl(n.document,{
            assembly: xh,
            axes: t.rawValue.getComponents().map( (r, s) => {
                var o;
                return Oa({
                    constraint: e.components[s],
                    initialValue: r,
                    params: mi(n.params, (o = i[s]) !== null && o !== void 0 ? o : {})
                })
            }
            ),
            parser: Rn,
            value: t,
            viewProps: n.viewProps
        })
    }
});
class Ki {
    constructor(t=0, e=0, i=0, r=0) {
        this.x = t,
        this.y = e,
        this.z = i,
        this.w = r
    }
    getComponents() {
        return [this.x, this.y, this.z, this.w]
    }
    static isObject(t) {
        if (ne(t))
            return !1;
        const e = t.x
          , i = t.y
          , r = t.z
          , s = t.w;
        return !(typeof e != "number" || typeof i != "number" || typeof r != "number" || typeof s != "number")
    }
    static equals(t, e) {
        return t.x === e.x && t.y === e.y && t.z === e.z && t.w === e.w
    }
    toObject() {
        return {
            x: this.x,
            y: this.y,
            z: this.z,
            w: this.w
        }
    }
}
const bh = {
    toComponents: n => n.getComponents(),
    fromComponents: n => new Ki(...n)
};
function pE(n) {
    return Ki.isObject(n) ? new Ki(n.x,n.y,n.z,n.w) : new Ki
}
function fE(n, t) {
    n.writeProperty("x", t.x),
    n.writeProperty("y", t.y),
    n.writeProperty("z", t.z),
    n.writeProperty("w", t.w)
}
function mE(n, t) {
    return new el({
        assembly: bh,
        components: [Sn(Object.assign(Object.assign({}, n), n.x), t.x), Sn(Object.assign(Object.assign({}, n), n.y), t.y), Sn(Object.assign(Object.assign({}, n), n.z), t.z), Sn(Object.assign(Object.assign({}, n), n.w), t.w)]
    })
}
const _E = De({
    id: "input-point4d",
    type: "input",
    accept: (n, t) => {
        if (!Ki.isObject(n))
            return null;
        const e = ae(t, i => Object.assign(Object.assign({}, Lr(i)), {
            readonly: i.optional.constant(!1),
            w: i.optional.custom(Wn),
            x: i.optional.custom(Wn),
            y: i.optional.custom(Wn),
            z: i.optional.custom(Wn)
        }));
        return e ? {
            initialValue: n,
            params: e
        } : null
    }
    ,
    binding: {
        reader: n => pE,
        constraint: n => mE(n.params, n.initialValue),
        equals: Ki.equals,
        writer: n => fE
    },
    controller: n => {
        const t = n.value
          , e = n.constraint
          , i = [n.params.x, n.params.y, n.params.z, n.params.w];
        return new nl(n.document,{
            assembly: bh,
            axes: t.rawValue.getComponents().map( (r, s) => {
                var o;
                return Oa({
                    constraint: e.components[s],
                    initialValue: r,
                    params: mi(n.params, (o = i[s]) !== null && o !== void 0 ? o : {})
                })
            }
            ),
            parser: Rn,
            value: t,
            viewProps: n.viewProps
        })
    }
});
function vE(n) {
    const t = []
      , e = ja(n.options);
    return e && t.push(e),
    new Vr(t)
}
const gE = De({
    id: "input-string",
    type: "input",
    accept: (n, t) => {
        if (typeof n != "string")
            return null;
        const e = ae(t, i => ({
            readonly: i.optional.constant(!1),
            options: i.optional.custom(Hr)
        }));
        return e ? {
            initialValue: n,
            params: e
        } : null
    }
    ,
    binding: {
        reader: n => qu,
        constraint: n => vE(n.params),
        writer: n => Wr
    },
    controller: n => {
        const t = n.document
          , e = n.value
          , i = n.constraint
          , r = i && Ds(i, zr);
        return r ? new Kn(t,{
            props: new Lt({
                options: r.values.value("options")
            }),
            value: e,
            viewProps: n.viewProps
        }) : new Rr(t,{
            parser: s => s,
            props: Lt.fromObject({
                formatter: xa
            }),
            value: e,
            viewProps: n.viewProps
        })
    }
    ,
    api(n) {
        return typeof n.controller.value.rawValue != "string" ? null : n.controller.valueController instanceof Kn ? new Xa(n.controller) : null
    }
})
  , qr = {
    monitor: {
        defaultInterval: 200,
        defaultRows: 3
    }
}
  , Fc = Wt("mll");
class xE {
    constructor(t, e) {
        this.onValueUpdate_ = this.onValueUpdate_.bind(this),
        this.formatter_ = e.formatter,
        this.element = t.createElement("div"),
        this.element.classList.add(Fc()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("textarea");
        i.classList.add(Fc("i")),
        i.style.height = `calc(var(${Ku("containerUnitSize")}) * ${e.rows})`,
        i.readOnly = !0,
        e.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        this.textareaElem_ = i,
        e.value.emitter.on("change", this.onValueUpdate_),
        this.value = e.value,
        this.update_()
    }
    update_() {
        const t = this.textareaElem_
          , e = t.scrollTop === t.scrollHeight - t.clientHeight
          , i = [];
        this.value.rawValue.forEach(r => {
            r !== void 0 && i.push(this.formatter_(r))
        }
        ),
        t.textContent = i.join(`
`),
        e && (t.scrollTop = t.scrollHeight)
    }
    onValueUpdate_() {
        this.update_()
    }
}
class il {
    constructor(t, e) {
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.view = new xE(t,{
            formatter: e.formatter,
            rows: e.rows,
            value: this.value,
            viewProps: this.viewProps
        })
    }
}
const Oc = Wt("sgl");
class bE {
    constructor(t, e) {
        this.onValueUpdate_ = this.onValueUpdate_.bind(this),
        this.formatter_ = e.formatter,
        this.element = t.createElement("div"),
        this.element.classList.add(Oc()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("input");
        i.classList.add(Oc("i")),
        i.readOnly = !0,
        i.type = "text",
        e.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        this.inputElement = i,
        e.value.emitter.on("change", this.onValueUpdate_),
        this.value = e.value,
        this.update_()
    }
    update_() {
        const t = this.value.rawValue
          , e = t[t.length - 1];
        this.inputElement.value = e !== void 0 ? this.formatter_(e) : ""
    }
    onValueUpdate_() {
        this.update_()
    }
}
class rl {
    constructor(t, e) {
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.view = new bE(t,{
            formatter: e.formatter,
            value: this.value,
            viewProps: this.viewProps
        })
    }
}
const EE = De({
    id: "monitor-bool",
    type: "monitor",
    accept: (n, t) => {
        if (typeof n != "boolean")
            return null;
        const e = ae(t, i => ({
            readonly: i.required.constant(!0),
            rows: i.optional.number
        }));
        return e ? {
            initialValue: n,
            params: e
        } : null
    }
    ,
    binding: {
        reader: n => Xu
    },
    controller: n => {
        var t;
        return n.value.rawValue.length === 1 ? new rl(n.document,{
            formatter: Pc,
            value: n.value,
            viewProps: n.viewProps
        }) : new il(n.document,{
            formatter: Pc,
            rows: (t = n.params.rows) !== null && t !== void 0 ? t : qr.monitor.defaultRows,
            value: n.value,
            viewProps: n.viewProps
        })
    }
});
class wE extends Pr {
    get max() {
        return this.controller.valueController.props.get("max")
    }
    set max(t) {
        this.controller.valueController.props.set("max", t)
    }
    get min() {
        return this.controller.valueController.props.get("min")
    }
    set min(t) {
        this.controller.valueController.props.set("min", t)
    }
}
const zn = Wt("grl");
class ME {
    constructor(t, e) {
        this.onCursorChange_ = this.onCursorChange_.bind(this),
        this.onValueUpdate_ = this.onValueUpdate_.bind(this),
        this.element = t.createElement("div"),
        this.element.classList.add(zn()),
        e.viewProps.bindClassModifiers(this.element),
        this.formatter_ = e.formatter,
        this.props_ = e.props,
        this.cursor_ = e.cursor,
        this.cursor_.emitter.on("change", this.onCursorChange_);
        const i = t.createElementNS(un, "svg");
        i.classList.add(zn("g")),
        i.style.height = `calc(var(${Ku("containerUnitSize")}) * ${e.rows})`,
        this.element.appendChild(i),
        this.svgElem_ = i;
        const r = t.createElementNS(un, "polyline");
        this.svgElem_.appendChild(r),
        this.lineElem_ = r;
        const s = t.createElement("div");
        s.classList.add(zn("t"), Wt("tt")()),
        this.element.appendChild(s),
        this.tooltipElem_ = s,
        e.value.emitter.on("change", this.onValueUpdate_),
        this.value = e.value,
        this.update_()
    }
    get graphElement() {
        return this.svgElem_
    }
    update_() {
        const {clientWidth: t, clientHeight: e} = this.element
          , i = this.value.rawValue.length - 1
          , r = this.props_.get("min")
          , s = this.props_.get("max")
          , o = [];
        this.value.rawValue.forEach( (d, p) => {
            if (d === void 0)
                return;
            const m = $t(p, 0, i, 0, t)
              , g = $t(d, r, s, e, 0);
            o.push([m, g].join(","))
        }
        ),
        this.lineElem_.setAttributeNS(null, "points", o.join(" "));
        const a = this.tooltipElem_
          , l = this.value.rawValue[this.cursor_.rawValue];
        if (l === void 0) {
            a.classList.remove(zn("t", "a"));
            return
        }
        const c = $t(this.cursor_.rawValue, 0, i, 0, t)
          , u = $t(l, r, s, e, 0);
        a.style.left = `${c}px`,
        a.style.top = `${u}px`,
        a.textContent = `${this.formatter_(l)}`,
        a.classList.contains(zn("t", "a")) || (a.classList.add(zn("t", "a"), zn("t", "in")),
        Rs(a),
        a.classList.remove(zn("t", "in")))
    }
    onValueUpdate_() {
        this.update_()
    }
    onCursorChange_() {
        this.update_()
    }
}
class Eh {
    constructor(t, e) {
        if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this),
        this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this),
        this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this),
        this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this),
        this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this),
        this.props = e.props,
        this.value = e.value,
        this.viewProps = e.viewProps,
        this.cursor_ = se(-1),
        this.view = new ME(t,{
            cursor: this.cursor_,
            formatter: e.formatter,
            rows: e.rows,
            props: this.props,
            value: this.value,
            viewProps: this.viewProps
        }),
        !Ba(t))
            this.view.element.addEventListener("mousemove", this.onGraphMouseMove_),
            this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
        else {
            const i = new wi(this.view.element);
            i.emitter.on("down", this.onGraphPointerDown_),
            i.emitter.on("move", this.onGraphPointerMove_),
            i.emitter.on("up", this.onGraphPointerUp_)
        }
    }
    importProps(t) {
        return He(t, null, e => ({
            max: e.required.number,
            min: e.required.number
        }), e => (this.props.set("max", e.max),
        this.props.set("min", e.min),
        !0))
    }
    exportProps() {
        return Ge(null, {
            max: this.props.get("max"),
            min: this.props.get("min")
        })
    }
    onGraphMouseLeave_() {
        this.cursor_.rawValue = -1
    }
    onGraphMouseMove_(t) {
        const {clientWidth: e} = this.view.element;
        this.cursor_.rawValue = Math.floor($t(t.offsetX, 0, e, 0, this.value.rawValue.length))
    }
    onGraphPointerDown_(t) {
        this.onGraphPointerMove_(t)
    }
    onGraphPointerMove_(t) {
        if (!t.data.point) {
            this.cursor_.rawValue = -1;
            return
        }
        this.cursor_.rawValue = Math.floor($t(t.data.point.x, 0, t.data.bounds.width, 0, this.value.rawValue.length))
    }
    onGraphPointerUp_() {
        this.cursor_.rawValue = -1
    }
}
function ba(n) {
    return ne(n.format) ? Oe(2) : n.format
}
function yE(n) {
    var t;
    return n.value.rawValue.length === 1 ? new rl(n.document,{
        formatter: ba(n.params),
        value: n.value,
        viewProps: n.viewProps
    }) : new il(n.document,{
        formatter: ba(n.params),
        rows: (t = n.params.rows) !== null && t !== void 0 ? t : qr.monitor.defaultRows,
        value: n.value,
        viewProps: n.viewProps
    })
}
function SE(n) {
    var t, e, i;
    return new Eh(n.document,{
        formatter: ba(n.params),
        rows: (t = n.params.rows) !== null && t !== void 0 ? t : qr.monitor.defaultRows,
        props: Lt.fromObject({
            max: (e = n.params.max) !== null && e !== void 0 ? e : 100,
            min: (i = n.params.min) !== null && i !== void 0 ? i : 0
        }),
        value: n.value,
        viewProps: n.viewProps
    })
}
function Bc(n) {
    return n.view === "graph"
}
const TE = De({
    id: "monitor-number",
    type: "monitor",
    accept: (n, t) => {
        if (typeof n != "number")
            return null;
        const e = ae(t, i => ({
            format: i.optional.function,
            max: i.optional.number,
            min: i.optional.number,
            readonly: i.required.constant(!0),
            rows: i.optional.number,
            view: i.optional.string
        }));
        return e ? {
            initialValue: n,
            params: e
        } : null
    }
    ,
    binding: {
        defaultBufferSize: n => Bc(n) ? 64 : 1,
        reader: n => yu
    },
    controller: n => Bc(n.params) ? SE(n) : yE(n),
    api: n => n.controller.valueController instanceof Eh ? new wE(n.controller) : null
})
  , CE = De({
    id: "monitor-string",
    type: "monitor",
    accept: (n, t) => {
        if (typeof n != "string")
            return null;
        const e = ae(t, i => ({
            multiline: i.optional.boolean,
            readonly: i.required.constant(!0),
            rows: i.optional.number
        }));
        return e ? {
            initialValue: n,
            params: e
        } : null
    }
    ,
    binding: {
        reader: n => qu
    },
    controller: n => {
        var t;
        const e = n.value;
        return e.rawValue.length > 1 || n.params.multiline ? new il(n.document,{
            formatter: xa,
            rows: (t = n.params.rows) !== null && t !== void 0 ? t : qr.monitor.defaultRows,
            value: e,
            viewProps: n.viewProps
        }) : new rl(n.document,{
            formatter: xa,
            value: e,
            viewProps: n.viewProps
        })
    }
});
class AE {
    constructor() {
        this.map_ = new Map
    }
    get(t) {
        var e;
        return (e = this.map_.get(t)) !== null && e !== void 0 ? e : null
    }
    has(t) {
        return this.map_.has(t)
    }
    add(t, e) {
        return this.map_.set(t, e),
        t.viewProps.handleDispose( () => {
            this.map_.delete(t)
        }
        ),
        e
    }
}
class PE {
    constructor(t) {
        this.target = t.target,
        this.reader_ = t.reader,
        this.writer_ = t.writer
    }
    read() {
        return this.reader_(this.target.read())
    }
    write(t) {
        this.writer_(this.target, t)
    }
    inject(t) {
        this.write(this.reader_(t))
    }
}
function RE(n, t) {
    var e;
    const i = n.accept(t.target.read(), t.params);
    if (ne(i))
        return null;
    const r = {
        target: t.target,
        initialValue: i.initialValue,
        params: i.params
    }
      , s = ae(t.params, d => ({
        disabled: d.optional.boolean,
        hidden: d.optional.boolean,
        label: d.optional.string,
        tag: d.optional.string
    }))
      , o = n.binding.reader(r)
      , a = n.binding.constraint ? n.binding.constraint(r) : void 0
      , l = new PE({
        reader: o,
        target: t.target,
        writer: n.binding.writer(r)
    })
      , c = new px(se(o(i.initialValue), {
        constraint: a,
        equals: n.binding.equals
    }),l)
      , u = n.controller({
        constraint: a,
        document: t.document,
        initialValue: i.initialValue,
        params: i.params,
        value: c,
        viewProps: Ln.create({
            disabled: s == null ? void 0 : s.disabled,
            hidden: s == null ? void 0 : s.hidden
        })
    });
    return new Ax(t.document,{
        blade: lr(),
        props: Lt.fromObject({
            label: "label"in t.params ? (e = s == null ? void 0 : s.label) !== null && e !== void 0 ? e : null : t.target.key
        }),
        tag: s == null ? void 0 : s.tag,
        value: c,
        valueController: u
    })
}
class DE {
    constructor(t) {
        this.target = t.target,
        this.reader_ = t.reader
    }
    read() {
        return this.reader_(this.target.read())
    }
}
function LE(n, t) {
    return t === 0 ? new ub : new hb(n,t ?? qr.monitor.defaultInterval)
}
function UE(n, t) {
    var e, i, r;
    const s = n.accept(t.target.read(), t.params);
    if (ne(s))
        return null;
    const o = {
        target: t.target,
        initialValue: s.initialValue,
        params: s.params
    }
      , a = ae(t.params, p => ({
        bufferSize: p.optional.number,
        disabled: p.optional.boolean,
        hidden: p.optional.boolean,
        interval: p.optional.number,
        label: p.optional.string
    }))
      , l = n.binding.reader(o)
      , c = (i = (e = a == null ? void 0 : a.bufferSize) !== null && e !== void 0 ? e : n.binding.defaultBufferSize && n.binding.defaultBufferSize(s.params)) !== null && i !== void 0 ? i : 1
      , u = new Ux({
        binding: new DE({
            reader: l,
            target: t.target
        }),
        bufferSize: c,
        ticker: LE(t.document, a == null ? void 0 : a.interval)
    })
      , d = n.controller({
        document: t.document,
        params: s.params,
        value: u,
        viewProps: Ln.create({
            disabled: a == null ? void 0 : a.disabled,
            hidden: a == null ? void 0 : a.hidden
        })
    });
    return d.viewProps.bindDisabled(u.ticker),
    d.viewProps.handleDispose( () => {
        u.ticker.dispose()
    }
    ),
    new Nx(t.document,{
        blade: lr(),
        props: Lt.fromObject({
            label: "label"in t.params ? (r = a == null ? void 0 : a.label) !== null && r !== void 0 ? r : null : t.target.key
        }),
        value: u,
        valueController: d
    })
}
class IE {
    constructor(t) {
        this.pluginsMap_ = {
            blades: [],
            inputs: [],
            monitors: []
        },
        this.apiCache_ = t
    }
    getAll() {
        return [...this.pluginsMap_.blades, ...this.pluginsMap_.inputs, ...this.pluginsMap_.monitors]
    }
    register(t, e) {
        if (!yb(e.core))
            throw ue.notCompatible(t, e.id);
        e.type === "blade" ? this.pluginsMap_.blades.unshift(e) : e.type === "input" ? this.pluginsMap_.inputs.unshift(e) : e.type === "monitor" && this.pluginsMap_.monitors.unshift(e)
    }
    createInput_(t, e, i) {
        return this.pluginsMap_.inputs.reduce( (r, s) => r ?? RE(s, {
            document: t,
            target: e,
            params: i
        }), null)
    }
    createMonitor_(t, e, i) {
        return this.pluginsMap_.monitors.reduce( (r, s) => r ?? UE(s, {
            document: t,
            params: i,
            target: e
        }), null)
    }
    createBinding(t, e, i) {
        const r = e.read();
        if (ne(r))
            throw new ue({
                context: {
                    key: e.key
                },
                type: "nomatchingcontroller"
            });
        const s = this.createInput_(t, e, i);
        if (s)
            return s;
        const o = this.createMonitor_(t, e, i);
        if (o)
            return o;
        throw new ue({
            context: {
                key: e.key
            },
            type: "nomatchingcontroller"
        })
    }
    createBlade(t, e) {
        const i = this.pluginsMap_.blades.reduce( (r, s) => r ?? cb(s, {
            document: t,
            params: e
        }), null);
        if (!i)
            throw new ue({
                type: "nomatchingview",
                context: {
                    params: e
                }
            });
        return i
    }
    createInputBindingApi_(t) {
        const e = this.pluginsMap_.inputs.reduce( (i, r) => {
            var s, o;
            return i || ((o = (s = r.api) === null || s === void 0 ? void 0 : s.call(r, {
                controller: t
            })) !== null && o !== void 0 ? o : null)
        }
        , null);
        return this.apiCache_.add(t, e ?? new Pr(t))
    }
    createMonitorBindingApi_(t) {
        const e = this.pluginsMap_.monitors.reduce( (i, r) => {
            var s, o;
            return i || ((o = (s = r.api) === null || s === void 0 ? void 0 : s.call(r, {
                controller: t
            })) !== null && o !== void 0 ? o : null)
        }
        , null);
        return this.apiCache_.add(t, e ?? new Pr(t))
    }
    createBindingApi(t) {
        if (this.apiCache_.has(t))
            return this.apiCache_.get(t);
        if (Px(t))
            return this.createInputBindingApi_(t);
        if (Fx(t))
            return this.createMonitorBindingApi_(t);
        throw ue.shouldNeverHappen()
    }
    createApi(t) {
        if (this.apiCache_.has(t))
            return this.apiCache_.get(t);
        if (Cx(t))
            return this.createBindingApi(t);
        const e = this.pluginsMap_.blades.reduce( (i, r) => i ?? r.api({
            controller: t,
            pool: this
        }), null);
        if (!e)
            throw ue.shouldNeverHappen();
        return this.apiCache_.add(t, e)
    }
}
const NE = new AE;
function FE() {
    const n = new IE(NE);
    return [lE, dE, _E, gE, J0, j0, q0, z0, Ab, EE, CE, TE, zx, tb, Gu].forEach(t => {
        n.register("core", t)
    }
    ),
    n
}
class OE extends Ei {
    constructor(t) {
        super(t),
        this.emitter_ = new _e,
        this.controller.value.emitter.on("change", e => {
            this.emitter_.emit("change", new Br(this,e.rawValue))
        }
        )
    }
    get label() {
        return this.controller.labelController.props.get("label")
    }
    set label(t) {
        this.controller.labelController.props.set("label", t)
    }
    get options() {
        return this.controller.valueController.props.get("options")
    }
    set options(t) {
        this.controller.valueController.props.set("options", t)
    }
    get value() {
        return this.controller.value.rawValue
    }
    set value(t) {
        this.controller.value.rawValue = t
    }
    on(t, e) {
        const i = e.bind(this);
        return this.emitter_.on(t, r => {
            i(r)
        }
        , {
            key: e
        }),
        this
    }
    off(t, e) {
        return this.emitter_.off(t, e),
        this
    }
}
class BE extends Ei {
}
class kE extends Ei {
    constructor(t) {
        super(t),
        this.emitter_ = new _e,
        this.controller.value.emitter.on("change", e => {
            this.emitter_.emit("change", new Br(this,e.rawValue))
        }
        )
    }
    get label() {
        return this.controller.labelController.props.get("label")
    }
    set label(t) {
        this.controller.labelController.props.set("label", t)
    }
    get max() {
        return this.controller.valueController.sliderController.props.get("max")
    }
    set max(t) {
        this.controller.valueController.sliderController.props.set("max", t)
    }
    get min() {
        return this.controller.valueController.sliderController.props.get("min")
    }
    set min(t) {
        this.controller.valueController.sliderController.props.set("min", t)
    }
    get value() {
        return this.controller.value.rawValue
    }
    set value(t) {
        this.controller.value.rawValue = t
    }
    on(t, e) {
        const i = e.bind(this);
        return this.emitter_.on(t, r => {
            i(r)
        }
        , {
            key: e
        }),
        this
    }
    off(t, e) {
        return this.emitter_.off(t, e),
        this
    }
}
class VE extends Ei {
    constructor(t) {
        super(t),
        this.emitter_ = new _e,
        this.controller.value.emitter.on("change", e => {
            this.emitter_.emit("change", new Br(this,e.rawValue))
        }
        )
    }
    get label() {
        return this.controller.labelController.props.get("label")
    }
    set label(t) {
        this.controller.labelController.props.set("label", t)
    }
    get formatter() {
        return this.controller.valueController.props.get("formatter")
    }
    set formatter(t) {
        this.controller.valueController.props.set("formatter", t)
    }
    get value() {
        return this.controller.value.rawValue
    }
    set value(t) {
        this.controller.value.rawValue = t
    }
    on(t, e) {
        const i = e.bind(this);
        return this.emitter_.on(t, r => {
            i(r)
        }
        , {
            key: e
        }),
        this
    }
    off(t, e) {
        return this.emitter_.off(t, e),
        this
    }
}
const zE = function() {
    return {
        id: "list",
        type: "blade",
        core: ar,
        accept(n) {
            const t = ae(n, e => ({
                options: e.required.custom(Hr),
                value: e.required.raw,
                view: e.required.constant("list"),
                label: e.optional.string
            }));
            return t ? {
                params: t
            } : null
        },
        controller(n) {
            const t = new zr(qa(n.params.options))
              , e = se(n.params.value, {
                constraint: t
            })
              , i = new Kn(n.document,{
                props: new Lt({
                    options: t.values.value("options")
                }),
                value: e,
                viewProps: n.viewProps
            });
            return new _i(n.document,{
                blade: n.blade,
                props: Lt.fromObject({
                    label: n.params.label
                }),
                value: e,
                valueController: i
            })
        },
        api(n) {
            return !(n.controller instanceof _i) || !(n.controller.valueController instanceof Kn) ? null : new OE(n.controller)
        }
    }
}();
class HE extends zu {
    constructor(t, e) {
        super(t, e)
    }
    get element() {
        return this.controller.view.element
    }
}
class GE extends va {
    constructor(t, e) {
        super(t, {
            expanded: e.expanded,
            blade: e.blade,
            props: e.props,
            root: !0,
            viewProps: e.viewProps
        })
    }
}
const kc = Wt("spr");
class WE {
    constructor(t, e) {
        this.element = t.createElement("div"),
        this.element.classList.add(kc()),
        e.viewProps.bindClassModifiers(this.element);
        const i = t.createElement("hr");
        i.classList.add(kc("r")),
        this.element.appendChild(i)
    }
}
class Vc extends Vs {
    constructor(t, e) {
        super(Object.assign(Object.assign({}, e), {
            view: new WE(t,{
                viewProps: e.viewProps
            })
        }))
    }
}
const XE = {
    id: "separator",
    type: "blade",
    core: ar,
    accept(n) {
        const t = ae(n, e => ({
            view: e.required.constant("separator")
        }));
        return t ? {
            params: t
        } : null
    },
    controller(n) {
        return new Vc(n.document,{
            blade: n.blade,
            viewProps: n.viewProps
        })
    },
    api(n) {
        return n.controller instanceof Vc ? new BE(n.controller) : null
    }
}
  , qE = {
    id: "slider",
    type: "blade",
    core: ar,
    accept(n) {
        const t = ae(n, e => ({
            max: e.required.number,
            min: e.required.number,
            view: e.required.constant("slider"),
            format: e.optional.function,
            label: e.optional.string,
            value: e.optional.number
        }));
        return t ? {
            params: t
        } : null
    },
    controller(n) {
        var t, e;
        const i = (t = n.params.value) !== null && t !== void 0 ? t : 0
          , r = new Or({
            max: n.params.max,
            min: n.params.min
        })
          , s = se(i, {
            constraint: r
        })
          , o = new Us(n.document,Object.assign(Object.assign({}, Yu({
            formatter: (e = n.params.format) !== null && e !== void 0 ? e : lx,
            keyScale: se(1),
            max: r.values.value("max"),
            min: r.values.value("min"),
            pointerScale: Cu(n.params, i)
        })), {
            parser: Rn,
            value: s,
            viewProps: n.viewProps
        }));
        return new _i(n.document,{
            blade: n.blade,
            props: Lt.fromObject({
                label: n.params.label
            }),
            value: s,
            valueController: o
        })
    },
    api(n) {
        return !(n.controller instanceof _i) || !(n.controller.valueController instanceof Us) ? null : new kE(n.controller)
    }
}
  , jE = function() {
    return {
        id: "text",
        type: "blade",
        core: ar,
        accept(n) {
            const t = ae(n, e => ({
                parse: e.required.function,
                value: e.required.raw,
                view: e.required.constant("text"),
                format: e.optional.function,
                label: e.optional.string
            }));
            return t ? {
                params: t
            } : null
        },
        controller(n) {
            var t;
            const e = se(n.params.value)
              , i = new Rr(n.document,{
                parser: n.params.parse,
                props: Lt.fromObject({
                    formatter: (t = n.params.format) !== null && t !== void 0 ? t : r => String(r)
                }),
                value: e,
                viewProps: n.viewProps
            });
            return new _i(n.document,{
                blade: n.blade,
                props: Lt.fromObject({
                    label: n.params.label
                }),
                value: e,
                valueController: i
            })
        },
        api(n) {
            return !(n.controller instanceof _i) || !(n.controller.valueController instanceof Rr) ? null : new VE(n.controller)
        }
    }
}();
function YE(n) {
    const t = n.createElement("div");
    return t.classList.add(Wt("dfw")()),
    n.body && n.body.appendChild(t),
    t
}
function KE(n, t, e) {
    if (n.querySelector(`style[data-tp-style=${t}]`))
        return;
    const i = n.createElement("style");
    i.dataset.tpStyle = t,
    i.textContent = e,
    n.head.appendChild(i)
}
class $E extends HE {
    constructor(t) {
        var e, i;
        const r = t ?? {}
          , s = (e = r.document) !== null && e !== void 0 ? e : bx()
          , o = FE()
          , a = new GE(s,{
            expanded: r.expanded,
            blade: lr(),
            props: Lt.fromObject({
                title: r.title
            }),
            viewProps: Ln.create()
        });
        super(a, o),
        this.pool_ = o,
        this.containerElem_ = (i = r.container) !== null && i !== void 0 ? i : YE(s),
        this.containerElem_.appendChild(this.element),
        this.doc_ = s,
        this.usesDefaultWrapper_ = !r.container,
        this.setUpDefaultPlugins_()
    }
    get document() {
        if (!this.doc_)
            throw ue.alreadyDisposed();
        return this.doc_
    }
    dispose() {
        const t = this.containerElem_;
        if (!t)
            throw ue.alreadyDisposed();
        if (this.usesDefaultWrapper_) {
            const e = t.parentElement;
            e && e.removeChild(t)
        }
        this.containerElem_ = null,
        this.doc_ = null,
        super.dispose()
    }
    registerPlugin(t) {
        t.css && KE(this.document, `plugin-${t.id}`, t.css),
        ("plugin"in t ? [t.plugin] : "plugins"in t ? t.plugins : []).forEach(i => {
            this.pool_.register(t.id, i)
        }
        )
    }
    setUpDefaultPlugins_() {
        this.registerPlugin({
            id: "default",
            css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',
            plugins: [zE, XE, qE, Gu, jE]
        })
    }
}
new Vu("4.0.5");
function ZE({waterResolution: n, water: t, ground: e}) {
    const r = new $E().addFolder({
        title: "Water"
    });
    r.addFolder({
        title: "Geometry"
    }).addBinding(n, "size", {
        min: 2,
        max: 1024,
        step: 2,
        label: "Resolution"
    }).on("change", ({value: u}) => {
        console.log(u);
        const d = new bi(2,2,n.size,n.size);
        t.geometry.dispose(),
        t.geometry = d
    }
    );
    const o = r.addFolder({
        title: "Waves"
    });
    o.addBinding(t.material.uniforms.uWavesAmplitude, "value", {
        min: 0,
        max: .1,
        label: "Amplitude"
    }),
    o.addBinding(t.material.uniforms.uWavesFrequency, "value", {
        min: .1,
        max: 10,
        label: "Frequency"
    }),
    o.addBinding(t.material.uniforms.uWavesPersistence, "value", {
        min: 0,
        max: 1,
        label: "Persistence"
    }),
    o.addBinding(t.material.uniforms.uWavesLacunarity, "value", {
        min: 0,
        max: 3,
        label: "Lacunarity"
    }),
    o.addBinding(t.material.uniforms.uWavesIterations, "value", {
        min: 1,
        max: 10,
        step: 1,
        label: "Iterations"
    }),
    o.addBinding(t.material.uniforms.uWavesSpeed, "value", {
        min: 0,
        max: 1,
        label: "Speed"
    });
    const a = r.addFolder({
        title: "Color"
    });
    a.addBinding(t.material.uniforms.uOpacity, "value", {
        min: 0,
        max: 1,
        step: .01,
        label: "Opacity"
    }),
    a.addBinding(t.material.uniforms.uTroughColor, "value", {
        label: "Trough Color",
        view: "color",
        color: {
            type: "float"
        }
    }),
    a.addBinding(t.material.uniforms.uSurfaceColor, "value", {
        label: "Surface Color",
        view: "color",
        color: {
            type: "float"
        }
    }),
    a.addBinding(t.material.uniforms.uPeakColor, "value", {
        label: "Peak Color",
        view: "color",
        color: {
            type: "float"
        }
    }),
    a.addBinding(t.material.uniforms.uPeakThreshold, "value", {
        min: 0,
        max: .5,
        label: "Peak Threshold"
    }),
    a.addBinding(t.material.uniforms.uPeakTransition, "value", {
        min: 0,
        max: .5,
        label: "Peak Transition"
    }),
    a.addBinding(t.material.uniforms.uTroughThreshold, "value", {
        min: -.5,
        max: 0,
        label: "Trough Threshold"
    }),
    a.addBinding(t.material.uniforms.uTroughTransition, "value", {
        min: 0,
        max: .5,
        label: "Trough Transition"
    });
    const l = r.addFolder({
        title: "Fresnel"
    });
    l.addBinding(t.material.uniforms.uFresnelScale, "value", {
        min: 0,
        max: 1,
        label: "Scale"
    }),
    l.addBinding(t.material.uniforms.uFresnelPower, "value", {
        min: 0,
        max: 3,
        label: "Power"
    });
    const c = r.addFolder({
        title: "Caustics"
    });
    c.addBinding(e.material.uniforms.uCausticsColor, "value", {
        label: "Color",
        view: "color",
        color: {
            type: "float"
        }
    }),
    c.addBinding(e.material.uniforms.uCausticsIntensity, "value", {
        min: 0,
        max: 2,
        label: "Intensity"
    }),
    c.addBinding(e.material.uniforms.uCausticsScale, "value", {
        min: 0,
        max: 200,
        label: "Scale"
    }),
    c.addBinding(e.material.uniforms.uCausticsSpeed, "value", {
        min: 0,
        max: 1,
        label: "Speed"
    }),
    c.addBinding(e.material.uniforms.uCausticsOffset, "value", {
        min: 0,
        max: 2,
        label: "Offset"
    }),
    c.addBinding(e.material.uniforms.uCausticsThickness, "value", {
        min: 0,
        max: 1,
        label: "Thickness"
    })
}
const JE = new wp
  , ur = new cp
  , Ur = new Ke(60,window.innerWidth / window.innerHeight,.001,100)
  , hr = new ag({
    antialias: !0
});
hr.setSize(window.innerWidth, window.innerHeight);
hr.setPixelRatio(devicePixelRatio);
document.body.appendChild(hr.domElement);
const wh = new _p;
wh.setPath("/threejs-water-shader/");
const sl = wh.load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"])
  , QE = new vp().load("/threejs-water-shader/ocean_floor.png");
ur.background = sl;
ur.environment = sl;
Ur.position.set(.8, .03, 0);
const Mh = new cg(Ur,hr.domElement);
Mh.enableDamping = !0;
const tw = new bp(16777215,.8);
ur.add(tw);
const yh = {
    size: 512
}
  , ol = new yg({
    environmentMap: sl,
    resolution: yh.size
});
ur.add(ol);
const al = new Cg({
    texture: QE
});
ur.add(al);
function Sh() {
    const n = JE.getElapsedTime();
    ol.update(n),
    al.update(n),
    Mh.update(),
    hr.render(ur, Ur),
    requestAnimationFrame(Sh)
}
window.addEventListener("resize", () => {
    Ur.aspect = window.innerWidth / window.innerHeight,
    Ur.updateProjectionMatrix(),
    hr.setSize(window.innerWidth, window.innerHeight)
}
);
Sh();
ZE({
    waterResolution: yh,
    water: ol,
    ground: al
});
//# sourceMappingURL=index-DuaedJZr.js.map
