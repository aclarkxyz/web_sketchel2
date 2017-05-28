class Vec {
    static arrayLength(arr) { return arr == null ? 0 : arr.length; }
    static arrayNumber(arr) { return arr == null ? [] : arr; }
    static arrayString(arr) { return arr == null ? [] : arr; }
    static arrayBoolean(arr) { return arr == null ? [] : arr; }
    static arrayAny(arr) { return arr == null ? [] : arr; }
    static anyTrue(arr) {
        if (arr == null)
            return false;
        for (let v of arr)
            if (v)
                return true;
        return false;
    }
    static allTrue(arr) {
        if (arr == null)
            return true;
        for (let v of arr)
            if (!v)
                return false;
        return true;
    }
    static anyFalse(arr) {
        if (arr == null)
            return false;
        for (let v of arr)
            if (!v)
                return true;
        return false;
    }
    static allFalse(arr) {
        if (arr == null)
            return true;
        for (let v of arr)
            if (v)
                return false;
        return true;
    }
    static swap(arr, idx1, idx2) {
        let v = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = v;
    }
    static equals(arr1, arr2) {
        if (arr1 == null && arr2 == null)
            return true;
        if (arr1 == null || arr2 == null)
            return false;
        if (arr1.length != arr2.length)
            return false;
        for (let n = 0; n < arr1.length; n++)
            if (arr1[n] != arr2[n])
                return false;
        return true;
    }
    static equivalent(arr1, arr2) {
        const len1 = arr1 == null ? 0 : arr1.length, len2 = arr2 == null ? 0 : arr2.length;
        if (len1 != len2)
            return false;
        for (let n = 0; n < len1; n++)
            if (arr1[n] != arr2[n])
                return false;
        return true;
    }
    static booleanArray(val, sz) {
        let arr = new Array(sz);
        for (let n = sz - 1; n >= 0; n--)
            arr[n] = val;
        return arr;
    }
    static numberArray(val, sz) {
        let arr = new Array(sz);
        for (let n = sz - 1; n >= 0; n--)
            arr[n] = val;
        return arr;
    }
    static stringArray(val, sz) {
        let arr = new Array(sz);
        for (let n = sz - 1; n >= 0; n--)
            arr[n] = val;
        return arr;
    }
    static anyArray(val, sz) {
        let arr = new Array(sz);
        for (let n = sz - 1; n >= 0; n--)
            arr[n] = val;
        return arr;
    }
    static min(arr) {
        if (arr == null || arr.length == 0)
            return Number.MAX_VALUE;
        let v = arr[0];
        for (let n = 1; n < arr.length; n++)
            v = Math.min(v, arr[n]);
        return v;
    }
    static max(arr) {
        if (arr == null || arr.length == 0)
            return Number.MIN_VALUE;
        let v = arr[0];
        for (let n = 1; n < arr.length; n++)
            v = Math.max(v, arr[n]);
        return v;
    }
    static idxMin(arr) {
        if (arr == null || arr.length == 0)
            return -1;
        let idx = 0;
        for (let n = 1; n < arr.length; n++)
            if (arr[n] < arr[idx])
                idx = n;
        return idx;
    }
    static idxMax(arr) {
        if (arr == null || arr.length == 0)
            return -1;
        let idx = 0;
        for (let n = 1; n < arr.length; n++)
            if (arr[n] > arr[idx])
                idx = n;
        return idx;
    }
    static reverse(arr) {
        let ret = [];
        for (let n = arr.length - 1; n >= 0; n--)
            ret.push(arr[n]);
        return ret;
    }
    static identity0(sz) {
        let ret = new Array(sz);
        for (let n = 0; n < sz; n++)
            ret[n] = n;
        return ret;
    }
    static identity1(sz) {
        let ret = new Array(sz);
        for (let n = 0; n < sz; n++)
            ret[n] = n + 1;
        return ret;
    }
    static notMask(mask) {
        let ret = new Array(mask.length);
        for (let n = mask.length - 1; n >= 0; n--)
            ret[n] = !mask[n];
        return ret;
    }
    static idxGet(arr, idx) {
        let ret = [];
        for (let n = 0; n < idx.length; n++)
            ret.push(arr[idx[n]]);
        return ret;
    }
    static maskCount(mask) {
        let c = 0;
        for (let n = mask.length - 1; n >= 0; n--)
            if (mask[n])
                c++;
        return c;
    }
    static maskIdx(mask) {
        let idx = [];
        for (let n = 0; n < mask.length; n++)
            if (mask[n])
                idx.push(n);
        return idx;
    }
    static idxMask(idx, sz) {
        let mask = Vec.booleanArray(false, sz);
        for (let n of idx)
            mask[n] = true;
        return mask;
    }
    static maskMap(mask) {
        let ret = [];
        for (let n = 0, pos = 0; n < mask.length; n++)
            ret.push(mask[n] ? pos++ : -1);
        return ret;
    }
    static maskGet(arr, mask) {
        let ret = [];
        for (let n = 0, p = 0; n < arr.length; n++)
            if (mask[n])
                ret.push(arr[n]);
        return ret;
    }
    static maskEqual(arr1, val) {
        let ret = [];
        if (val.constructor === Array) {
            let arr2 = val;
            for (let n = 0; n < arr1.length; n++)
                ret.push(arr1[n] == arr2[n]);
        }
        else {
            for (let n = 0; n < arr1.length; n++)
                ret.push(arr1[n] == val);
        }
        return ret;
    }
    static sum(arr) {
        if (arr == null || arr.length == 0)
            return 0;
        let t = arr[0];
        for (let n = 1; n < arr.length; n++)
            t += arr[n];
        return t;
    }
    static add(arr1, val) {
        let ret = [];
        if (val.constructor === Array) {
            let arr2 = val;
            for (let n = 0; n < arr1.length; n++)
                ret.push(arr1[n] + arr2[n]);
        }
        else {
            for (let n = 0; n < arr1.length; n++)
                ret.push(arr1[n] + val);
        }
        return ret;
    }
    static sub(arr1, val) {
        let ret = [];
        if (val.constructor === Array) {
            let arr2 = val;
            for (let n = 0; n < arr1.length; n++)
                ret.push(arr1[n] - arr2[n]);
        }
        else {
            for (let n = 0; n < arr1.length; n++)
                ret.push(arr1[n] - val);
        }
        return ret;
    }
    static mul(arr1, val) {
        let ret = [];
        if (val.constructor === Array) {
            let arr2 = val;
            for (let n = 0; n < arr1.length; n++)
                ret.push(arr1[n] * arr2[n]);
        }
        else {
            for (let n = 0; n < arr1.length; n++)
                ret.push(arr1[n] * val);
        }
        return ret;
    }
    static neg(arr) {
        let ret = arr.slice(0);
        for (let n = ret.length - 1; n >= 0; n--)
            ret[n] *= -1;
        return ret;
    }
    static setTo(arr, val) { for (let n = arr == null ? -1 : arr.length - 1; n >= 0; n--)
        arr[n] = val; }
    static addTo(arr, val) { for (let n = arr == null ? -1 : arr.length - 1; n >= 0; n--)
        arr[n] += val; }
    static mulBy(arr, val) { for (let n = arr == null ? -1 : arr.length - 1; n >= 0; n--)
        arr[n] *= val; }
    static addToArray(arr, val) { for (let n = arr == null ? -1 : arr.length - 1; n >= 0; n--)
        arr[n] += val[n]; }
    static subFromArray(arr, val) { for (let n = arr == null ? -1 : arr.length - 1; n >= 0; n--)
        arr[n] -= val[n]; }
    static mulByArray(arr, val) { for (let n = arr == null ? -1 : arr.length - 1; n >= 0; n--)
        arr[n] *= val[n]; }
    static divByArray(arr, val) { for (let n = arr == null ? -1 : arr.length - 1; n >= 0; n--)
        arr[n] /= val[n]; }
    static idxSort(arr) {
        let idx = new Array(arr.length);
        for (let n = 0; n < arr.length; n++)
            idx[n] = n;
        idx.sort((a, b) => arr[a] < arr[b] ? -1 : arr[a] > arr[b] ? 1 : 0);
        return idx;
    }
    static sort(arr) {
        arr.sort((v1, v2) => v1 - v2);
    }
    static sorted(arr) {
        arr = arr.slice(0);
        this.sort(arr);
        return arr;
    }
}
class Permutation {
    static parityPerms(idx) {
        let v = Vec.booleanArray(false, idx.length);
        let p = 0;
        for (let i = idx.length - 1; i >= 0; i--) {
            if (v[i])
                p++;
            else {
                let j = i;
                do {
                    j = idx[j];
                    v[j] = true;
                } while (j != i);
            }
        }
        return p;
    }
    static parityIdentity(idx) {
        return this.parityPerms(idx) & 1;
    }
    static parityOrder(src) {
        if (src.length <= 1)
            return 0;
        else if (src.length == 2)
            return src[0] < src[1] ? 0 : 1;
        else if (src.length == 3) {
            let p = 1;
            if (src[0] < src[1])
                p++;
            if (src[0] < src[2])
                p++;
            if (src[1] < src[2])
                p++;
            return p & 1;
        }
        else if (src.length == 4) {
            let p = 0;
            if (src[0] < src[1])
                p++;
            if (src[0] < src[2])
                p++;
            if (src[0] < src[3])
                p++;
            if (src[1] < src[2])
                p++;
            if (src[1] < src[3])
                p++;
            if (src[2] < src[3])
                p++;
            return p & 1;
        }
        let idx = [], sorted = src.slice(0);
        sorted.sort();
        for (let n = 0; n < src.length; n++)
            idx.push(sorted.indexOf(src[n]));
        return this.parityIdentity(idx);
    }
    static smallPermutation(sz) {
        if (sz == 1)
            return this.PERM1;
        else if (sz == 2)
            return this.PERM2;
        else if (sz == 3)
            return this.PERM3;
        else if (sz == 4)
            return this.PERM4;
        else
            return null;
    }
    static allPermutations(sz) {
        if (sz <= this.SMALL_PERMS)
            return this.smallPermutation(sz);
        while (this.PERM_CACHE.length < this.MAX_CACHE - this.SMALL_PERMS)
            this.PERM_CACHE.push(null);
        if (sz < this.MAX_CACHE && this.PERM_CACHE[sz - this.SMALL_PERMS] != null)
            return this.PERM_CACHE[sz - this.SMALL_PERMS];
        let nperms = 1;
        for (let n = 2; n <= sz; n++)
            nperms *= n;
        let perms = [];
        let idx = Vec.identity0(sz);
        perms.push(idx.slice(0));
        let mask = Vec.booleanArray(false, sz);
        for (let n = 1; n < nperms; n++) {
            nonunique: while (idx[0] < sz) {
                idx[sz - 1]++;
                for (let i = sz - 1; i > 0; i--) {
                    if (idx[i] < sz)
                        break;
                    idx[i] = 0;
                    idx[i - 1]++;
                }
                Vec.setTo(mask, false);
                for (let i of idx) {
                    if (mask[i])
                        continue nonunique;
                    mask[i] = true;
                }
                perms[n] = idx.slice(0);
                break;
            }
        }
        if (sz < this.MAX_CACHE)
            this.PERM_CACHE[sz - this.SMALL_PERMS] = perms;
        return perms;
    }
}
Permutation.PERM1 = [[0]];
Permutation.PERM2 = [[0, 1], [1, 0]];
Permutation.PERM3 = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
Permutation.PERM4 = [
    [0, 1, 2, 3], [0, 1, 3, 2], [0, 2, 1, 3], [0, 2, 3, 1], [0, 3, 1, 2], [0, 3, 2, 1],
    [1, 0, 2, 3], [1, 0, 3, 2], [1, 2, 0, 3], [1, 2, 3, 0], [1, 3, 0, 2], [1, 3, 2, 0],
    [2, 0, 1, 3], [2, 0, 3, 1], [2, 1, 0, 3], [2, 1, 3, 0], [2, 3, 0, 1], [2, 3, 1, 0],
    [3, 0, 1, 2], [3, 0, 2, 1], [3, 1, 0, 2], [3, 1, 2, 0], [3, 2, 0, 1], [3, 2, 1, 0]
];
Permutation.SMALL_PERMS = 4;
Permutation.MAX_CACHE = 8;
Permutation.PERM_CACHE = [];
function newElement(parent, tag, attr) {
    let el = $(`<${tag}>`);
    if (attr)
        el.attr(attr);
    $(parent).append(el);
    return el[0];
}
function addText(parent, text) {
    let el = parent instanceof jQuery ? parent[0] : parent;
    el.appendChild(document.createTextNode(text));
}
function setVisible(node, visible) {
    if (visible)
        $(node).show();
    else
        $(node).hide();
}
function plural(count) {
    return count == 1 ? '' : 's';
}
function formatDouble(value, sigfig) {
    if (value == null)
        return '';
    let str = value.toPrecision(sigfig);
    if (str.indexOf('.') > 0)
        while (str.endsWith('0') || str.endsWith('.'))
            str = str.substring(0, str.length - 1);
    return str;
}
function htmlToRGB(col) {
    if (col == null || col.charAt(0) != '#' || col.length != 7)
        return null;
    return parseInt(col.substring(1), 16);
}
function colourCode(col) {
    var hex = (col & 0xFFFFFF).toString(16);
    while (hex.length < 6)
        hex = '0' + hex;
    return '#' + hex;
}
function colourAlpha(col) {
    var transp = (col >>> 24) & 0xFF;
    return transp == 0 ? 1 : transp == 0xFF ? 0 : 1 - (transp * (1.0 / 255));
}
const ONE_OVER_255 = 1.0 / 255;
function colourCanvas(col) {
    if (col == 0xFFFFFF)
        return 'white';
    if (col == 0x000000)
        return 'black';
    if (col == -1)
        return null;
    if (col >= 0 && col <= 0xFFFFFF)
        return colourCode(col);
    const t = ((col >> 24) & 0xFF) * ONE_OVER_255;
    const r = ((col >> 16) & 0xFF);
    const g = ((col >> 8) & 0xFF);
    const b = (col & 0xFF);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + (1 - t) + ')';
}
function blendRGB(fract, rgb1, rgb2, rgb3) {
    fract = Math.max(0, Math.min(1, fract));
    let r1 = ((rgb1 >> 16) & 0xFF) * ONE_OVER_255, g1 = ((rgb1 >> 8) & 0xFF) * ONE_OVER_255, b1 = (rgb1 & 0xFF) * ONE_OVER_255;
    let r2 = ((rgb2 >> 16) & 0xFF) * ONE_OVER_255, g2 = ((rgb2 >> 8) & 0xFF) * ONE_OVER_255, b2 = (rgb2 & 0xFF) * ONE_OVER_255;
    let R, G, B;
    if (rgb3 == null) {
        let f1 = 1 - fract, f2 = fract;
        R = Math.round(0xFF * (f1 * r1 + f2 * r2));
        G = Math.round(0xFF * (f1 * g1 + f2 * g2));
        B = Math.round(0xFF * (f1 * b1 + f2 * b2));
    }
    else {
        let r3 = ((rgb3 >> 16) & 0xFF) * ONE_OVER_255, g3 = ((rgb3 >> 8) & 0xFF) * ONE_OVER_255, b3 = (rgb3 & 0xFF) * ONE_OVER_255;
        if (fract < 0.5) {
            let f2 = fract * 2, f1 = 1 - f2;
            R = Math.round(0xFF * (f1 * r1 + f2 * r2));
            G = Math.round(0xFF * (f1 * g1 + f2 * g2));
            B = Math.round(0xFF * (f1 * b1 + f2 * b2));
        }
        else {
            let f2 = (fract - 0.5) * 2, f1 = 1 - f2;
            R = Math.round(0xFF * (f1 * r2 + f2 * r3));
            G = Math.round(0xFF * (f1 * g2 + f2 * g3));
            B = Math.round(0xFF * (f1 * b2 + f2 * b3));
        }
    }
    return (R << 16) | (G << 8) | B;
}
function nodeText(node) {
    var ret = '';
    if (!node)
        return;
    node = node.firstChild;
    while (node) {
        if (node.nodeType == 3 || node.nodeType == 4)
            ret += node.nodeValue;
        node = node.nextSibling;
    }
    return ret;
}
function isDef(v) {
    return !(v === null || typeof v === 'undefined');
}
function notDef(v) {
    return v === null || typeof v === 'undefined';
}
function eventCoords(event, container) {
    var parentOffset = $(container).offset();
    var relX = event.pageX - parentOffset.left;
    var relY = event.pageY - parentOffset.top;
    return [relX, relY];
}
function norm_xy(dx, dy) {
    return Math.sqrt(dx * dx + dy * dy);
}
function norm_xyz(dx, dy, dz) {
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
function norm2_xy(dx, dy) {
    return dx * dx + dy * dy;
}
function norm2_xyz(dx, dy, dz) {
    return dx * dx + dy * dy + dz * dz;
}
function sqr(v) {
    return v * v;
}
function invZ(v) { return v == 0 ? 0 : 1.0 / v; }
function realEqual(v1, v2) { return v1 == v2 || Math.abs(v1 - v2) <= 1E-14 * Math.max(v1, v2); }
const TWOPI = 2 * Math.PI;
const INV_TWOPI = 1.0 / TWOPI;
const DEGRAD = Math.PI / 180;
const RADDEG = 180 / Math.PI;
function angleNorm(th) {
    if (th == -Math.PI)
        return Math.PI;
    if (th < -Math.PI) {
        let mod = Math.ceil((-th - Math.PI) * INV_TWOPI);
        return th + mod * TWOPI;
    }
    if (th > Math.PI) {
        let mod = Math.ceil((th - Math.PI) * INV_TWOPI);
        return th - mod * TWOPI;
    }
    return th;
}
function angleDiff(th1, th2) {
    let theta = angleNorm(th1) - angleNorm(th2);
    return theta - (theta > Math.PI ? TWOPI : 0) + (theta <= -Math.PI ? TWOPI : 0);
}
function angleDiffPos(th1, th2) {
    let theta = angleNorm(th1) - angleNorm(th2);
    return theta + (theta < 0 ? TWOPI : 0);
}
function sortAngles(theta) {
    if (theta == null || theta.length < 2)
        return theta;
    theta = theta.slice(0);
    for (let n = 0; n < theta.length; n++)
        theta[n] = angleNorm(theta[n]);
    Vec.sort(theta);
    while (true) {
        let a = theta[theta.length - 1], b = theta[0], c = theta[1];
        if (angleDiff(b, a) <= angleDiff(c, b))
            break;
        for (let n = theta.length - 1; n > 0; n--)
            theta[n] = theta[n - 1];
        theta[0] = a;
    }
    return theta;
}
function uniqueAngles(theta, threshold) {
    theta = sortAngles(theta);
    for (let n = 1; n < theta.length; n++) {
        if (Math.abs(angleDiff(theta[n], theta[n - 1])) <= threshold) {
            theta.splice(n, 1);
            n--;
        }
    }
    return theta;
}
function minArray(a) {
    if (a == null || a.length == 0)
        return 0;
    var v = a[0];
    for (var n = 1; n < a.length; n++)
        v = Math.min(v, a[n]);
    return v;
}
function maxArray(a) {
    if (a == null || a.length == 0)
        return 0;
    var v = a[0];
    for (var n = 1; n < a.length; n++)
        v = Math.max(v, a[n]);
    return v;
}
function findNode(parent, name) {
    if (parent == null)
        return null;
    var node = parent.firstChild;
    while (node) {
        if (node.nodeType == Node.ELEMENT_NODE && node.nodeName == name)
            return node;
        node = node.nextSibling;
    }
    return null;
}
function findNodes(parent, name) {
    if (parent == null)
        return null;
    var node = parent.firstChild;
    var list = [];
    while (node) {
        if (node.nodeType == Node.ELEMENT_NODE && node.nodeName == name)
            list.push(node);
        node = node.nextSibling;
    }
    return list;
}
function pathRoundedRect(x1, y1, x2, y2, rad) {
    var path = new Path2D();
    path.moveTo(x2 - rad, y1);
    path.quadraticCurveTo(x2, y1, x2, y1 + rad);
    path.lineTo(x2, y2 - rad);
    path.quadraticCurveTo(x2, y2, x2 - rad, y2);
    path.lineTo(x1 + rad, y2);
    path.quadraticCurveTo(x1, y2, x1, y2 - rad);
    path.lineTo(x1, y1 + rad);
    path.quadraticCurveTo(x1, y1, x1 + rad, y1);
    path.closePath();
    return path;
}
function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
const ASCENT_FUDGE = 1.4;
function fontSansSerif(ascent) { return `${ascent * ASCENT_FUDGE}px sans-serif`; }
function pixelDensity() {
    if ('devicePixelRatio' in window && window.devicePixelRatio > 1)
        return window.devicePixelRatio;
    return 1;
}
function clone(obj) {
    let dup = {};
    for (let key in obj)
        dup[key] = obj[key];
    return dup;
}
function escapeHTML(text) {
    if (!text)
        return '';
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}
class Cookies {
    constructor() {
        this.molecules = [];
        this.ASPIRIN = 'SketchEl!(13,13)\n' +
            'C=-1.6010,4.3000;0,0,i0\n' +
            'C=-2.9000,3.5500;0,0,i1\n' +
            'C=-0.3019,3.5500;0,0,i0\n' +
            'C=-2.9000,2.0500;0,0,i1\n' +
            'C=-1.6010,1.3000;0,0,i1\n' +
            'C=-0.3019,2.0500;0,0,i1\n' +
            'C=-1.6010,5.8000;0,0,i0\n' +
            'O=-0.3019,6.5500;0,0,i1\n' +
            'O=-2.9000,6.5500;0,0,i0\n' +
            'O=0.9971,4.3000;0,0,i0\n' +
            'C=2.2962,3.5500;0,0,i0\n' +
            'C=3.5952,4.3000;0,0,i3\n' +
            'O=2.2962,2.0500;0,0,i0\n' +
            '1-2=1,0\n' +
            '1-3=2,0\n' +
            '2-4=2,0\n' +
            '4-5=1,0\n' +
            '5-6=2,0\n' +
            '6-3=1,0\n' +
            '1-7=1,0\n' +
            '7-8=1,0\n' +
            '7-9=2,0\n' +
            '3-10=1,0\n' +
            '10-11=1,0\n' +
            '11-12=1,0\n' +
            '11-13=2,0\n' +
            '!End';
        this.CAFFEINE = 'SketchEl!(14,15)\n' +
            'N=-0.2062,0.7255;0,0,i0\n' +
            'C=1.0929,1.4755;0,0,i0\n' +
            'C=-1.5052,1.4755;0,0,i0\n' +
            'C=1.0929,2.9755;0,0,i0\n' +
            'C=-0.2062,3.7255;0,0,i0\n' +
            'N=-1.5052,2.9755;0,0,i0\n' +
            'N=2.5142,1.0083;0,0,i0\n' +
            'C=3.3966,2.2166;0,0,i1\n' +
            'N=2.5208,3.4370;0,0,i0\n' +
            'O=-2.8042,0.7255;0,0,i0\n' +
            'O=-0.2062,5.2255;0,0,i0\n' +
            'C=2.9896,4.8619;0,0,i3\n' +
            'C=-2.8042,3.7255;0,0,i3\n' +
            'C=-0.2062,-0.7745;0,0,i3\n' +
            '1-2=1,0\n' +
            '1-3=1,0\n' +
            '2-4=2,0\n' +
            '4-5=1,0\n' +
            '5-6=1,0\n' +
            '6-3=1,0\n' +
            '9-8=1,0\n' +
            '8-7=2,0\n' +
            '7-2=1,0\n' +
            '4-9=1,0\n' +
            '3-10=2,0\n' +
            '5-11=2,0\n' +
            '9-12=1,0\n' +
            '6-13=1,0\n' +
            '1-14=1,0\n' +
            '!End';
        this.MAX_MOL_STASH = 20;
        for (var idx = 0;; idx++) {
            let str = this.get('mol' + idx);
            if (str == null)
                break;
            let mol = Molecule.fromString(str);
            if (mol == null)
                break;
            this.molecules.push(mol);
        }
    }
    numMolecules() {
        return this.molecules.length;
    }
    getMolecule(idx) {
        return this.molecules[idx];
    }
    deleteMolecule(idx) {
        this.molecules.splice(idx, 1);
        this.setMolecules();
    }
    stashMolecule(mol) {
        if (MolUtil.isBlank(mol))
            return;
        for (let n = 0; n < this.molecules.length; n++)
            if (mol.compareTo(this.molecules[n]) == 0) {
                if (n > 0) {
                    this.molecules.splice(n, 1);
                    this.molecules.splice(0, 0, mol.clone());
                    this.setMolecules();
                }
                return;
            }
        this.molecules.splice(0, 0, mol);
        while (this.molecules.length > this.MAX_MOL_STASH)
            this.molecules.pop();
        this.setMolecules();
    }
    promoteToTop(idx) {
        if (idx == 0)
            return;
        let mol = this.molecules.splice(idx, 1)[0];
        this.molecules.splice(0, 0, mol);
        this.setMolecules();
    }
    seedMolecules() {
        this.molecules = [];
        this.molecules.push(Molecule.fromString(this.CAFFEINE));
        this.molecules.push(Molecule.fromString(this.ASPIRIN));
        this.setMolecules();
    }
    setMolecules() {
        for (let n = 0; n < this.molecules.length; n++)
            this.set('mol' + n, this.molecules[n].toString());
        this.remove('mol' + this.molecules.length);
    }
    get(key) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + key + "=");
        if (parts.length == 2)
            return decodeURIComponent(parts.pop().split(";").shift());
        return null;
    }
    set(key, val) {
        document.cookie = key + '=' + encodeURIComponent(val);
    }
    remove(key) {
        document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
}
class GeomUtil {
    static pointInPolygon(x, y, px, py) {
        if (x < minArray(px) || x > maxArray(px) || y < minArray(py) || y > maxArray(py))
            return false;
        let sz = px.length;
        for (let n = 0; n < sz; n++)
            if (px[n] == x && py[n] == y)
                return true;
        let phase = false;
        for (let n = 0; n < sz; n++) {
            let x1 = px[n], y1 = py[n], x2 = px[n + 1 < sz ? n + 1 : 0], y2 = py[n + 1 < sz ? n + 1 : 0];
            if (y > Math.min(y1, y2) && y <= Math.max(y1, y2) && x <= Math.max(x1, x2) && y1 != y2) {
                let intr = (y - y1) * (x2 - x1) / (y2 - y1) + x1;
                if (x1 == x2 || x <= intr)
                    phase = !phase;
            }
        }
        return phase;
    }
    static areLinesParallel(x1, y1, x2, y2, x3, y3, x4, y4) {
        let dxa = x2 - x1, dxb = x4 - x3, dya = y2 - y1, dyb = y4 - y3;
        return (realEqual(dxa, dxb) && realEqual(dya, dyb)) || (realEqual(dxa, -dxb) && realEqual(dya, -dyb));
    }
    static lineIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        let u = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
        return [x1 + u * (x2 - x1), y1 + u * (y2 - y1)];
    }
    static isPointOnLineSeg(px, py, x1, y1, x2, y2) {
        if (px < Math.min(x1, x2) || px > Math.max(x1, x2) || py < Math.min(y1, y2) || py > Math.max(y1, y2))
            return false;
        if ((px == x1 && py == y1) || (px == x2 && py == y2))
            return true;
        let dx = x2 - x1, dy = y2 - y1;
        if (Math.abs(dx) > Math.abs(dy))
            return realEqual(py, (dy / dx) * (px - x1) + y1);
        else
            return realEqual(px, (dx / dy) * (py - y1) + x1);
    }
    static doLineSegsIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (Math.max(x1, x2) < Math.min(x3, x4) || Math.max(y1, y2) < Math.min(y3, y4))
            return false;
        if (Math.min(x1, x2) > Math.max(x3, x4) || Math.min(y1, y2) > Math.max(y3, y4))
            return false;
        if ((x1 == x3 && y1 == y3) || (x1 == x4 && y1 == y4) || (x2 == x3 && y2 == y3) || (x2 == x4 && y2 == y4))
            return true;
        if ((x1 == x2 || x3 == x4) && (x1 == x3 || x1 == x4 || x2 == x3 || x2 == x4))
            return true;
        if ((y1 == y2 || y3 == y4) && (y1 == y3 || y1 == y4 || y2 == y3 || y2 == y4))
            return true;
        let x4_x3 = x4 - x3, y4_y3 = y4 - y3, x2_x1 = x2 - x1, y2_y1 = y2 - y1, x1_x3 = x1 - x3, y1_y3 = y1 - y3;
        let nx = x4_x3 * y1_y3 - y4_y3 * x1_x3;
        let ny = x2_x1 * y1_y3 - y2_y1 * x1_x3;
        let dn = y4_y3 * x2_x1 - x4_x3 * y2_y1;
        if (dn == 0)
            return false;
        if (dn < 0) {
            dn = -dn;
            nx = -nx;
            ny = -ny;
        }
        return nx >= 0 && nx <= dn && ny >= 0 && ny <= dn;
    }
    static rectsIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
        if (x1 <= x2 && x1 + w1 >= x2 + w2 && y1 <= y2 && y1 + h1 >= y2 + h2)
            return true;
        if (x2 <= x1 && x2 + w2 >= x1 + w1 && y2 <= y1 && y2 + h2 >= y1 + h1)
            return true;
        if (x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1)
            return false;
        return true;
    }
    static sortAngles(theta) {
        if (theta == null || theta.length < 2)
            return theta;
        theta = theta.slice(0);
        for (let n = 0; n < theta.length; n++)
            theta[n] = angleNorm(theta[n]);
        Vec.sort(theta);
        if (theta.length == 2)
            return theta;
        while (true) {
            let a = theta[theta.length - 1], b = theta[0], c = theta[1];
            if (angleDiff(b, a) <= angleDiff(c, b))
                break;
            for (let n = theta.length - 1; n > 0; n--)
                theta[n] = theta[n - 1];
            theta[0] = a;
        }
        return theta;
    }
    static uniqueAngles(theta, threshold) {
        let ang = GeomUtil.sortAngles(theta), ret = [];
        ret.push(ang[0]);
        for (let n = 1; n < ang.length; n++) {
            if (Math.abs(angleDiff(ang[n], ang[n - 1])) > threshold)
                ret.push(ang[n]);
        }
        return ret;
    }
    static thetaObtuse(th1, th2) {
        let dth = th2 - th1;
        while (dth < -Math.PI)
            dth += 2 * Math.PI;
        while (dth > Math.PI)
            dth -= 2 * Math.PI;
        return dth > 0 ? th1 - 0.5 * (2 * Math.PI - dth) : th1 + 0.5 * (2 * Math.PI + dth);
    }
    static emergentAngle(theta) {
        let len = theta.length;
        if (len == 1)
            return theta[0];
        if (len == 2)
            return 0.5 * (theta[0] + theta[1]);
        Vec.sort(theta);
        let bottom = 0;
        let behind = angleDiffPos(theta[0], theta[len - 1]);
        for (let n = 1; n < len; n++) {
            let delta = angleDiffPos(theta[n], theta[n - 1]);
            if (delta > behind) {
                bottom = n;
                behind = delta;
            }
        }
        let sum = 0;
        for (let n = 0; n < len; n++) {
            let delta = theta[n] - theta[bottom];
            if (delta < 0)
                delta += TWOPI;
            sum += delta;
        }
        return sum / len + theta[bottom];
    }
    static dotProduct(v1, v2) {
        return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
    }
    static crossProduct(v1, v2) {
        const x = v1[1] * v2[2] - v1[2] * v2[1];
        const y = v1[2] * v2[0] - v1[0] * v2[2];
        const z = v1[0] * v2[1] - v1[1] * v2[0];
        return [x, y, z];
    }
    static magnitude2(v) {
        return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
    }
    static magnitude(v) {
        return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    }
    static dist2(v1, v2) {
        let dx = v1[0] - v2[0], dy = v1[1] - v2[1], dz = v1[2] - v2[2];
        return dx * dx + dy * dy + dz * dz;
    }
    static dist(v1, v2) {
        let dx = v1[0] - v2[0], dy = v1[1] - v2[1], dz = v1[2] - v2[2];
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    static normalise(v) {
        const dsq = v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
        if (dsq == 0)
            return;
        const inv = 1.0 / Math.sqrt(dsq);
        v[0] *= inv;
        v[1] *= inv;
        v[2] *= inv;
    }
    static normalised(v) {
        let ret = v.slice(0);
        this.normalise(ret);
        return ret;
    }
    static acuteAngle(v1, v2) {
        let mag1 = this.magnitude(v1), mag2 = this.magnitude(v2);
        if (mag1 == 0 || mag2 == 0)
            return 0;
        let dot = this.dotProduct(v1, v2);
        let cosTheta = dot / (mag1 * mag2);
        cosTheta = Math.max(-1, Math.min(1, cosTheta));
        return Math.acos(cosTheta);
    }
}
class QuickHull {
    constructor(x, y, threshSq) {
        this.x = x;
        this.y = y;
        this.threshSq = threshSq;
        this.hsz = 0;
        this.hullX = [];
        this.hullY = [];
        const sz = x.length;
        let l = 0, r = 0;
        for (let n = 0; n < sz; n++) {
            if (x[r] > x[n] || (x[r] == x[n] && y[r] > y[n]))
                r = n;
            if (x[l] < x[n] || (x[l] == x[n] && y[l] < y[n]))
                l = n;
        }
        let al1 = [], al2 = [];
        for (let n = 0; n < sz; n++) {
            if (n != l && n != r) {
                if (this.right(r, l, n) > 0)
                    al1.push(n);
                else
                    al2.push(n);
            }
        }
        this.hullX.push(x[r]);
        this.hullY.push(y[r]);
        this.quickHull(r, l, al1);
        this.hullX.push(x[l]);
        this.hullY.push(y[l]);
        this.quickHull(l, r, al2);
        for (let n = 0; n < this.hullX.length - 1;) {
            if (norm2_xy(this.hullX[n] - this.hullY[n + 1], this.hullY[n] - this.hullY[n + 1]) < threshSq) {
                this.hullX.splice(n + 1, 1);
                this.hullY.splice(n + 1, 1);
            }
            else
                n++;
        }
    }
    quickHull(a, b, al) {
        if (al.length == 0)
            return;
        let c = this.furthestPoint(a, b, al);
        let al1 = [], al2 = [];
        for (let n = 0; n < al.length; n++) {
            let p = al[n];
            if (p == a || p == b)
                continue;
            if (this.right(a, c, p) > 0)
                al1.push(p);
            else if (this.right(c, b, p) > 0)
                al2.push(p);
        }
        this.quickHull(a, c, al1);
        this.hullX.push(this.x[c]);
        this.hullY.push(this.y[c]);
        this.quickHull(c, b, al2);
    }
    right(a, b, p) {
        const x = this.x, y = this.y;
        return (x[a] - x[b]) * (y[p] - y[b]) - (x[p] - x[b]) * (y[a] - y[b]);
    }
    distance(a, b, p) {
        const x = this.x, y = this.y;
        let u = ((x[p] - x[a]) * (x[b] - x[a]) + (y[p] - y[a]) * (y[b] - y[a])) / ((x[b] - x[a]) * (x[b] - x[a]) + (y[b] - y[a]) * (y[b] - y[a]));
        let ux = x[a] + u * (x[b] - x[a]);
        let uy = y[a] + u * (y[b] - y[a]);
        return ((ux - x[p]) * (ux - x[p]) + (uy - y[p]) * (uy - y[p]));
    }
    furthestPoint(a, b, al) {
        let maxDist = -1;
        let maxPos = -1;
        for (let n = 0; n < al.length; n++) {
            let p = al[n];
            if (p == a || p == b)
                continue;
            let dist = this.distance(a, b, p);
            if (dist > maxDist) {
                maxDist = dist;
                maxPos = p;
            }
        }
        return maxPos;
    }
}
class Pos {
    static zero() { return new Pos(); }
    static fromArray(src) { return new Pos(src[0], src[1]); }
    constructor(x, y) {
        this.x = x == null ? 0 : x;
        this.y = y == null ? 0 : y;
    }
    clone() { return new Pos(this.x, this.y); }
    scaleBy(mag) {
        if (mag == 1)
            return;
        this.x *= mag;
        this.y *= mag;
    }
    offsetBy(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    toString() { return '[' + this.x + ',' + this.y + ']'; }
}
class Size {
    static zero() { return new Size(); }
    static fromArray(src) { return new Size(src[0], src[1]); }
    constructor(w, h) {
        this.w = w == null ? 0 : w;
        this.h = h == null ? 0 : h;
    }
    clone() { return new Size(this.w, this.h); }
    scaleBy(mag) {
        if (mag == 1)
            return;
        this.w *= mag;
        this.h *= mag;
    }
    fitInto(maxW, maxH) {
        let scale = 1;
        if (this.w > maxW)
            scale = maxW / this.w;
        if (this.h > maxH)
            scale = Math.min(scale, maxH / this.h);
        if (scale < 1)
            this.scaleBy(scale);
    }
    toString() { return '[' + this.w + ',' + this.h + ']'; }
}
class Box {
    static zero() { return new Box(); }
    static fromSize(sz) { return new Box(0, 0, sz.w, sz.h); }
    static fromOval(oval) { return new Box(oval.cx - oval.rw, oval.cy - oval.rh, 2 * oval.rw, 2 * oval.rh); }
    static fromArray(src) { return new Box(src[0], src[1], src[2], src[3]); }
    constructor(x, y, w, h) {
        this.x = x == null ? 0 : x;
        this.y = y == null ? 0 : y;
        this.w = w == null ? 0 : w;
        this.h = h == null ? 0 : h;
    }
    clone() { return new Box(this.x, this.y, this.w, this.h); }
    setPos(pos) {
        this.x = pos.x;
        this.y = pos.y;
    }
    setSize(sz) {
        this.w = sz.w;
        this.h = sz.h;
    }
    minX() { return this.x; }
    minY() { return this.y; }
    midX() { return this.x + 0.5 * this.w; }
    midY() { return this.y + 0.5 * this.h; }
    maxX() { return this.x + this.w; }
    maxY() { return this.y + this.h; }
    scaleBy(mag) {
        if (mag == 1)
            return;
        this.x *= mag;
        this.y *= mag;
        this.w *= mag;
        this.h *= mag;
    }
    offsetBy(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    intersects(other) {
        return GeomUtil.rectsIntersect(this.x, this.y, this.w, this.h, other.x, other.y, other.w, other.h);
    }
    toString() { return '[' + this.x + ',' + this.y + ';' + this.w + ',' + this.h + ']'; }
}
class Oval {
    static zero() { return new Oval(); }
    static fromBox(box) { return new Oval(box.x + 0.5 * box.w, box.y + 0.5 * box.h, 0.5 * box.w, 0.5 * box.h); }
    static fromArray(src) { return new Oval(src[0], src[1], src[2], src[3]); }
    constructor(cx, cy, rw, rh) {
        this.cx = cx == null ? 0 : cx;
        this.cy = cy == null ? 0 : cy;
        this.rw = rw == null ? 0 : rw;
        this.rh = rh == null ? 0 : rh;
    }
    clone() { return new Oval(this.cx, this.cy, this.rw, this.rh); }
    setCentre(pos) {
        this.cx = pos.x;
        this.cy = pos.y;
    }
    setRadius(sz) {
        this.rw = sz.w;
        this.rh = sz.h;
    }
    minX() { return this.cx - this.rw; }
    minY() { return this.cy - this.rh; }
    maxX() { return this.cx + this.rw; }
    maxY() { return this.cy + this.rh; }
    scaleBy(mag) {
        if (mag == 1)
            return;
        this.cx *= mag;
        this.cy *= mag;
        this.rw *= mag;
        this.rh *= mag;
    }
    offsetBy(dx, dy) {
        this.cx += dx;
        this.cy += dy;
    }
    toString() { return '[' + this.cx + ',' + this.cy + ';' + this.rw + ',' + this.rh + ']'; }
}
class Line {
    static zero() { return new Line(); }
    constructor(x1, y1, x2, y2) {
        this.x1 = x1 == null ? 0 : x1;
        this.y1 = y1 == null ? 0 : y1;
        this.x2 = x2 == null ? 0 : x2;
        this.y2 = y2 == null ? 0 : y2;
    }
    clone() { return new Line(this.x1, this.y1, this.x2, this.y2); }
    setPos1(pos) {
        this.x1 = pos.x;
        this.y1 = pos.y;
    }
    setPos2(pos) {
        this.x2 = pos.x;
        this.y2 = pos.y;
    }
    minX() { return Math.min(this.x1, this.x2); }
    minY() { return Math.min(this.y1, this.y2); }
    maxX() { return Math.max(this.x1, this.x2); }
    maxY() { return Math.max(this.y1, this.y2); }
    scaleBy(mag) {
        if (mag == 1)
            return;
        this.x1 *= mag;
        this.y1 *= mag;
        this.x2 *= mag;
        this.y2 *= mag;
    }
    offsetBy(dx, dy) {
        this.x1 += dx;
        this.y1 += dy;
        this.x2 += dx;
        this.y2 += dy;
    }
    toString() { return '[' + this.x1 + ',' + this.y1 + ';' + this.x2 + ',' + this.y2 + ']'; }
}
var globalPopover = null;
var globalTooltip = null;
var globalPopWatermark = 0;
function addTooltip(parent, bodyHTML, titleHTML, delay) {
    let widget = $(parent);
    if (globalPopover == null) {
        globalPopover = $(document.createElement('div'));
        globalPopover.css('position', 'absolute');
        globalPopover.css('background-color', '#F0F0FF');
        globalPopover.css('color', 'black');
        globalPopover.css('border', '1px solid black');
        globalPopover.css('padding', '0.3em');
        globalPopover.hide();
        globalPopover.appendTo(document.body);
    }
    const tooltip = new Tooltip(widget, bodyHTML, titleHTML, delay == null ? 1000 : delay);
    let prevEnter = widget.attr('onmouseenter'), prevLeave = widget.attr('onmouseleave');
    widget.mouseenter((e) => { tooltip.start(); if (prevEnter)
        prevEnter(e); });
    widget.mouseleave((e) => { tooltip.stop(); if (prevLeave)
        prevLeave(e); });
}
function clearTooltip() {
    if (globalTooltip == null)
        return;
    globalPopWatermark++;
    globalTooltip.lower();
}
class Tooltip {
    constructor(widget, bodyHTML, titleHTML, delay) {
        this.widget = widget;
        this.bodyHTML = bodyHTML;
        this.titleHTML = titleHTML;
        this.delay = delay;
    }
    start() {
        globalPopover.hide();
        this.watermark = ++globalPopWatermark;
        window.setTimeout(() => {
            if (this.watermark == globalPopWatermark)
                this.raise();
        }, this.delay);
    }
    stop() {
        if (this.watermark == globalPopWatermark)
            this.lower();
        globalPopWatermark++;
    }
    raise() {
        globalTooltip = this;
        let pop = globalPopover;
        pop.css('max-width', '20em');
        pop.empty();
        let hasTitle = this.titleHTML != null && this.titleHTML.length > 0, hasBody = this.bodyHTML != null && this.bodyHTML.length > 0;
        if (hasTitle)
            ($('<div></div>').appendTo(pop)).html('<b>' + this.titleHTML + '</b>');
        if (hasTitle && hasBody)
            pop.append('<hr>');
        if (hasBody)
            ($('<div></div>').appendTo(pop)).html(this.bodyHTML);
        let popW = pop.width(), popH = pop.height();
        let wpos = this.widget.offset(), width = this.widget.width(), height = this.widget.height();
        let posX = wpos.left;
        let posY = wpos.top + height + 2;
        pop.css('left', `${posX}px`);
        pop.css('top', `${posY}px`);
        pop.show();
    }
    lower() {
        let pop = globalPopover;
        pop.hide();
    }
}
class Widget {
    constructor() {
        this.tagType = 'div';
        this.content = null;
    }
    render(parent) {
        let tag = this.tagType;
        this.content = $(`<${tag}></${tag}>`).appendTo($(parent));
    }
    addTooltip(bodyHTML, titleHTML) {
        addTooltip(this.content, bodyHTML, titleHTML);
    }
}
class RenderPolicy {
    constructor(data) {
        if (!data) {
            data =
                {
                    'name': 'default',
                    'pointScale': 20,
                    'resolutionDPI': 100,
                    'fontSize': 0.65,
                    'lineSize': 0.075,
                    'bondSep': 0.2,
                    'defaultPadding': 0.2,
                    'foreground': 0x000000,
                    'background': 0xFFFFFF,
                    'atomCols': new Array(112)
                };
            for (var n = 0; n <= 111; n++)
                data.atomCols[n] = 0x000000;
            this.data = data;
        }
        else {
            this.data = clone(data);
        }
    }
    ;
    static defaultBlackOnWhite() {
        var policy = new RenderPolicy();
        return policy;
    }
    ;
    static defaultWhiteOnBlack() {
        var policy = new RenderPolicy();
        policy.data.foreground = 0xFFFFFF;
        policy.data.background = 0x000000;
        for (var n = 0; n <= 111; n++)
            policy.data.atomCols[n] = 0xFFFFFF;
        return policy;
    }
    ;
    static defaultColourOnWhite() {
        var policy = RenderPolicy.defaultBlackOnWhite();
        policy.data.atomCols[0] = 0x404040;
        policy.data.atomCols[1] = 0x808080;
        policy.data.atomCols[6] = 0x000000;
        policy.data.atomCols[7] = 0x0000FF;
        policy.data.atomCols[8] = 0xFF0000;
        policy.data.atomCols[9] = 0xFF8080;
        policy.data.atomCols[15] = 0xFF8000;
        policy.data.atomCols[16] = 0x808000;
        policy.data.atomCols[17] = 0x00C000;
        policy.data.atomCols[35] = 0xC04000;
        return policy;
    }
    ;
    static defaultColourOnBlack() {
        var policy = RenderPolicy.defaultWhiteOnBlack();
        policy.data.atomCols[0] = 0xA0A0A0;
        policy.data.atomCols[1] = 0x808080;
        policy.data.atomCols[6] = 0xFFFFFF;
        policy.data.atomCols[7] = 0x4040FF;
        policy.data.atomCols[8] = 0xFF4040;
        policy.data.atomCols[9] = 0xFF8080;
        policy.data.atomCols[15] = 0xFF8000;
        policy.data.atomCols[16] = 0xFFFF00;
        policy.data.atomCols[17] = 0x40FF40;
        policy.data.atomCols[35] = 0xFF8040;
        return policy;
    }
    ;
    static defaultPrintedPublication() {
        var policy = RenderPolicy.defaultBlackOnWhite();
        policy.data.pointScale = 9.6;
        policy.data.resolutionDPI = 600;
        policy.data.fontSize = 0.80;
        policy.data.bondSep = 0.27;
        policy.data.lineSize = 0.0625;
        return policy;
    }
    ;
}
class RenderEffects {
    constructor() {
        this.colAtom = {};
        this.colBond = {};
        this.dottedRectOutline = {};
        this.dottedBondCross = {};
        this.hideAtoms = new Set();
        this.hideBonds = new Set();
        this.atomFrameDotSz = [];
        this.atomFrameCol = [];
        this.atomCircleSz = [];
        this.atomCircleCol = [];
        this.atomDecoText = [];
        this.atomDecoCol = [];
        this.atomDecoSize = [];
        this.bondDecoText = [];
        this.bondDecoCol = [];
        this.bondDecoSize = [];
        this.overlapAtoms = [];
    }
}
class FontData {
    constructor() {
        this.GLYPH_MIN = 32;
        this.GLYPH_MAX = 127;
        this.GLYPH_COUNT = 96;
        this.FONT_ADV = 1041;
        this.UNITS_PER_EM = 2048;
        this.INV_UNITS_PER_EM = 1.0 / this.UNITS_PER_EM;
        this.ASCENT = 2059;
        this.DESCENT = -430;
        this.MISSING_HORZ = 2048;
        this.MISSING_DATA = "M256 0V1536H1792V0H256ZM384 128H1664V1408H384V128Z";
        this.ASCENT_FUDGE = 0.75;
        this.UNICODE = [
            " ", "!", "&quot;", "#", "$", "%", "&amp;", "&apos;", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "&lt;", "=", "&gt;", "?", "@",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "b", "c", "d", "e",
            "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "&#x80;"
        ];
        this.GLYPH_NAME = [
            "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero",
            "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I",
            "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d",
            "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis"
        ];
        this.HORIZ_ADV_X = [
            720, 806, 940, 1676, 1302, 2204, 1488, 550, 930, 930, 1302, 1676, 745, 930, 745, 930, 1302, 1302, 1302, 1302, 1302, 1302, 1302, 1302, 1302, 1302, 930, 930, 1676, 1676, 1676, 1117, 2048,
            1400, 1404, 1430, 1578, 1295, 1177, 1588, 1539, 862, 931, 1419, 1140, 1726, 1532, 1612, 1235, 1612, 1424, 1400, 1262, 1499, 1400, 2025, 1403, 1260, 1403, 930, 930, 930, 1676, 1302, 1302,
            1230, 1276, 1067, 1276, 1220, 720, 1276, 1296, 562, 705, 1212, 562, 1992, 1296, 1243, 1276, 1276, 874, 1067, 807, 1296, 1212, 1676, 1212, 1212, 1076, 1300, 930, 1300, 1676, 1400
        ];
        this.GLYPH_DATA = [
            "",
            "M515 1489L489 410H319L291 1489H515ZM505 0H301V211H505V0Z",
            "M772 1556L729 977H597L554 1556H772ZM386 1556L343 977H211L168 1556H386Z",
            "M1481 932H1148L1056 556H1364V421H1021L917 0H788L892 421H622L518 0H389L493 421H195V556H528L620 932H312V1067H655L760 1489H889L784 1067H1054L1159 1489H1288L1183 1067H1481V932ZM1022 "
                + "934H748L654 554H928L1022 934Z",
            "M1160 380Q1160 225 1039 123T722 1V-361H604V-4Q472 -3 356 21T155 85V283H171Q190 269 239 243T334 199Q386 180 455 164T604 144V577Q564 585 530 592T467 608Q304 649 233 731T162 935Q162 1083 "
                + "278 1185T604 1304V1576H722V1306Q823 1304 929 1282T1107 1231V1035H1093Q1018 1081 937 1116T722 1161V730Q752 725 787 717T848 703Q997 671 1078 593T1160 380ZM604 747V1160Q497 1152 424 1102T351 961Q351 870 405 824T604 747ZM971 354Q971 448 913 491T722 "
                + "560V146Q842 158 906 207T971 354Z",
            "M884 1076Q884 852 790 743T517 634Q335 634 242 743T149 1075Q149 1299 244 1408T517 1517Q698 1517 791 1407T884 1076ZM1575 1489L795 0H630L1410 1489H1575ZM2055 413Q2055 189 1960 80T1687 "
                + "-29Q1506 -29 1413 81T1320 412Q1320 636 1414 745T1687 854Q1869 854 1962 745T2055 413ZM706 1076Q706 1248 662 1316T517 1384Q415 1384 371 1316T327 1075Q327 902 371 835T517 767Q617 767 661 834T706 1076ZM1877 413Q1877 585 1833 653T1688 721Q1586 721 "
                + "1542 653T1498 412Q1498 239 1542 172T1688 104Q1788 104 1832 171T1877 413Z",
            "M792 1191Q792 1286 736 1340T591 1395Q499 1395 441 1334T383 1183Q383 1108 422 1050T593 913Q691 948 741 1015T792 1191ZM986 315L508 781Q477 766 446 742T384 675Q356 636 338 581T320 "
                + "457Q320 311 405 222T648 132Q741 132 832 177T986 315ZM1287 909V813Q1287 717 1262 597T1177 368L1555 0H1309L1080 224Q965 82 845 26T598 -31Q390 -31 253 90T115 409Q115 501 141 568T202 684Q237 731 289 772T394 845Q284 917 236 990T187 1174Q187 1241 "
                + "213 1301T293 1412Q343 1460 423 1490T601 1520Q774 1520 881 1433T988 1211Q988 1167 976 1112T935 1012Q903 963 844 918T691 841L1062 479Q1076 519 1083 567T1091 667Q1093 723 1093 792T1092 909H1287Z",
            "M386 1556L343 977H207L164 1556H386Z",
            "M783 -412H554Q377 -209 279 31T181 572Q181 873 279 1113T554 1556H783V1546Q702 1473 629 1378T492 1155Q432 1032 395 884T357 572Q357 401 393 259T492 -11Q552 -134 629 -233T783 -402V-412Z",
            "M749 572Q749 271 651 31T376 -412H147V-402Q224 -333 301 -234T438 -11Q500 117 536 259T573 572Q573 736 536 884T438 1155Q375 1282 302 1377T147 1546V1556H376Q553 1353 651 1113T749 572Z",
            "M1137 887L1073 777L711 990L717 630H588L593 990L232 776L167 886L548 1093L167 1300L232 1410L594 1197L588 1556H717L710 1197L1073 1409L1137 1299L757 1094L1137 887Z",
            "M1466 572H921V27H755V572H210V732H755V1277H921V732H1466V572Z",
            "M575 285L293 -370H147L321 285H575Z",
            "M777 561H153V742H777V561Z",
            "M492 0H253V285H492V0Z",
            "M860 1556L143 -304H-30L684 1556H860Z",
            "M1167 745Q1167 344 1042 157T652 -31Q384 -31 261 159T137 743Q137 1140 262 1329T652 1519Q920 1519 1043 1327T1167 745ZM904 291Q939 372 951 481T964 745Q964 897 952 1009T903 1199Q868 1276 "
                + "808 1315T652 1354Q558 1354 497 1315T399 1197Q365 1123 353 1004T340 743Q340 587 351 482T398 294Q431 216 491 175T652 134Q746 134 808 173T904 291Z",
            "M1084 0H278V152H588V1150H278V1286Q341 1286 413 1296T522 1327Q568 1352 594 1390T625 1494H780V152H1084V0Z",
            "M1169 0H161V209Q266 299 371 389T568 568Q760 754 831 863T902 1100Q902 1216 826 1281T612 1347Q521 1347 415 1315T208 1217H198V1427Q269 1462 387 1491T617 1520Q846 1520 976 1410T1106 1110Q1106 "
                + "1025 1085 952T1021 812Q982 750 930 690T802 557Q695 452 581 354T368 171H1169V0Z",
            "M1038 717Q1086 674 1117 609T1148 441Q1148 339 1111 254T1007 106Q932 36 831 3T608 -31Q484 -31 364 -2T167 63V272H182Q267 216 382 179T604 142Q667 142 738 163T853 225Q899 269 921 322T944 "
                + "456Q944 536 919 588T848 671Q803 702 739 713T601 725H511V891H581Q733 891 823 954T914 1140Q914 1194 891 1234T827 1301Q784 1327 735 1337T624 1347Q529 1347 422 1313T220 1217H210V1426Q281 1461 399 1490T629 1520Q738 1520 821 1500T971 1436Q1043 1388 "
                + "1080 1320T1117 1161Q1117 1037 1030 945T823 828V814Q871 806 933 781T1038 717Z",
            "M1203 419H982V0H790V419H77V649L798 1489H982V579H1203V419ZM790 579V1251L213 579H790Z",
            "M1157 473Q1157 369 1119 274T1015 114Q943 44 844 7T613 -31Q491 -31 378 -6T187 56V267H201Q283 215 393 179T609 142Q680 142 746 162T865 232Q909 275 931 335T954 474Q954 551 928 604T854 689Q802 "
                + "727 728 742T561 758Q473 758 392 746T251 722V1489H1147V1314H444V918Q487 922 532 924T610 926Q731 926 822 906T989 833Q1069 778 1113 691T1157 473Z",
            "M1191 483Q1191 256 1042 113T675 -31Q565 -31 475 3T316 104Q230 187 184 324T137 654Q137 852 179 1005T315 1277Q403 1390 542 1453T866 1517Q925 1517 965 1512T1046 1494V1303H1036Q1008 1318 "
                + "952 1331T836 1345Q621 1345 493 1211T344 847Q428 898 509 924T698 951Q793 951 865 934T1014 863Q1102 802 1146 709T1191 483ZM988 475Q988 568 961 629T870 735Q824 767 768 777T651 787Q566 787 493 767T343 705Q341 683 340 663T339 611Q339 453 371 362T461 "
                + "217Q507 173 560 153T677 132Q822 132 905 220T988 475Z",
            "M1173 1266L499 0H285L1002 1314H154V1489H1173V1266Z",
            "M1180 415Q1180 222 1030 94T651 -34Q409 -34 266 91T122 411Q122 535 194 635T397 795V801Q277 865 220 941T162 1131Q162 1299 300 1411T651 1523Q874 1523 1007 1416T1140 1144Q1140 1043 1077 "
                + "946T892 793V787Q1032 727 1106 639T1180 415ZM943 1142Q943 1249 861 1312T650 1376Q524 1376 444 1316T363 1154Q363 1082 403 1030T526 936Q563 918 632 889T768 841Q867 907 905 978T943 1142ZM974 396Q974 488 934 543T775 655Q728 677 672 696T523 749Q433 "
                + "700 379 616T324 426Q324 291 417 203T653 115Q799 115 886 190T974 396Z",
            "M1167 834Q1167 639 1123 480T988 209Q897 95 760 33T438 -29Q386 -29 340 -24T258 -6V185H268Q297 170 350 157T468 143Q689 143 814 275T960 641Q867 585 785 561T606 537Q514 537 440 555T290 625Q202 "
                + "686 158 780T113 1005Q113 1233 263 1376T629 1519Q737 1519 829 1486T990 1385Q1075 1302 1121 1172T1167 834ZM965 877Q965 1032 933 1126T845 1272Q798 1317 744 1336T627 1356Q483 1356 400 1266T316 1013Q316 918 343 858T434 753Q479 722 533 712T653 701Q731 "
                + "701 811 722T961 783Q962 804 963 824T965 877Z",
            "M585 832H346V1117H585V832ZM585 0H346V285H585V0Z",
            "M585 832H346V1117H585V832ZM658 285L376 -370H230L404 285H658Z",
            "M1408 77L254 590V714L1408 1227V1047L498 652L1408 257V77Z",
            "M1431 782H245V942H1431V782ZM1431 362H245V522H1431V362Z",
            "M1422 590L268 77V257L1178 652L268 1047V1227L1422 714V590Z",
            "M1005 1139Q1005 1041 970 965T878 829Q822 772 749 722T594 625V400H415V705Q480 742 555 786T679 875Q737 927 769 982T801 1124Q801 1237 725 1292T527 1348Q419 1348 323 1314T170 1245H160V1449Q230 "
                + "1476 337 1497T541 1519Q756 1519 880 1415T1005 1139ZM610 0H406V211H610V0Z",
            "M1870 663Q1870 524 1830 394T1714 157H1274L1247 273Q1173 213 1105 181T949 149Q781 149 681 276T580 631Q580 858 703 993T997 1128Q1070 1128 1126 1112T1247 1062V1110H1406V268H1649Q1691 343 "
                + "1712 455T1734 657Q1734 821 1689 955T1555 1185Q1467 1281 1337 1332T1042 1384Q882 1384 750 1326T522 1170Q426 1072 372 936T317 645Q317 480 369 344T516 110Q615 9 748 -42T1038 -94Q1124 -94 1215 -83T1391 -48V-190Q1294 -211 1210 -218T1037 -226Q851 "
                + "-226 692 -163T419 15Q304 130 240 291T176 647Q176 832 243 991T426 1268Q542 1385 701 1452T1041 1519Q1237 1519 1391 1457T1651 1283Q1757 1171 1813 1014T1870 663ZM1245 408V926Q1182 955 1132 967T1025 980Q896 980 823 890T750 634Q750 471 808 388T989 "
                + "304Q1056 304 1123 335T1245 408Z",
            "M1374 0H1163L1017 415H373L227 0H26L568 1489H832L1374 0ZM956 585L695 1316L433 585H956Z",
            "M1323 458Q1323 347 1281 262T1168 122Q1084 56 984 28T728 0H200V1489H641Q804 1489 885 1477T1040 1427Q1122 1384 1159 1317T1196 1155Q1196 1049 1142 975T998 855V847Q1149 816 1236 715T1323 458ZM990 "
                + "1129Q990 1183 972 1220T914 1280Q867 1307 800 1313T634 1320H398V890H654Q747 890 802 899T904 939Q951 969 970 1016T990 1129ZM1117 450Q1117 540 1090 593T992 683Q944 708 876 715T709 723H398V169H660Q790 169 873 182T1009 232Q1065 271 1091 321T1117 "
                + "450Z",
            "M1350 108Q1295 84 1251 63T1134 19Q1073 0 1002 -13T844 -27Q682 -27 550 18T319 161Q223 256 169 402T115 743Q115 927 167 1072T317 1317Q412 1414 546 1465T845 1516Q965 1516 1084 1487T1350 1385V1150H1335Q1212 "
                + "1253 1091 1300T832 1347Q719 1347 629 1311T467 1197Q398 1122 360 1008T321 743Q321 586 363 473T473 289Q543 215 636 180T834 144Q977 144 1102 193T1336 340H1350V108Z",
            "M1458 743Q1458 540 1370 375T1134 119Q1032 56 907 28T576 0H200V1489H572Q790 1489 918 1458T1136 1371Q1288 1276 1373 1118T1458 743ZM1251 746Q1251 921 1190 1041T1008 1230Q920 1280 821 1299T584 "
                + "1319H398V170H584Q727 170 833 191T1029 269Q1140 340 1195 456T1251 746Z",
            "M1181 0H200V1489H1181V1313H398V905H1181V729H398V176H1181V0Z",
            "M1151 1313H398V893H1045V717H398V0H200V1489H1151V1313Z",
            "M1442 110Q1320 54 1176 13T896 -29Q722 -29 577 19T330 163Q227 260 171 405T115 746Q115 1103 323 1309T896 1516Q1023 1516 1155 1486T1441 1382V1147H1423Q1392 1171 1333 1210T1217 1275Q1148 1306 "
                + "1061 1326T862 1347Q612 1347 467 1187T321 752Q321 463 473 303T887 142Q983 142 1078 161T1246 210V575H847V749H1442V110Z",
            "M1339 0H1141V729H398V0H200V1489H398V905H1141V1489H1339V0Z",
            "M725 0H137V152H332V1337H137V1489H725V1337H530V152H725V0Z",
            "M746 387Q746 191 627 85T306 -21Q258 -21 178 -13T44 8V193H55Q96 179 156 164T279 149Q371 149 425 170T506 230Q533 270 540 328T548 462V1331H233V1489H746V387Z",
            "M1397 0H1140L551 663L403 505V0H205V1489H403V712L1126 1489H1366L701 789L1397 0Z",
            "M1142 0H200V1489H398V176H1142V0Z",
            "M1526 0H1328V1283L914 410H796L385 1283V0H200V1489H470L867 660L1251 1489H1526V0Z",
            "M1336 0H1091L385 1332V0H200V1489H507L1151 273V1489H1336V0Z",
            "M1310 1318Q1401 1218 1449 1073T1498 744Q1498 560 1449 415T1310 172Q1218 71 1093 20T806 -31Q649 -31 521 21T302 172Q212 271 164 415T115 744Q115 926 163 1070T303 1318Q391 1416 521 1468T806 "
                + "1520Q966 1520 1093 1468T1310 1318ZM1292 744Q1292 1034 1162 1191T807 1349Q580 1349 451 1192T321 744Q321 451 453 296T807 140Q1029 140 1160 295T1292 744Z",
            "M1174 1039Q1174 940 1140 856T1043 709Q966 632 861 594T596 555H398V0H200V1489H604Q738 1489 831 1467T996 1396Q1081 1339 1127 1254T1174 1039ZM968 1034Q968 1111 941 1168T859 1261Q811 1292 750 "
                + "1305T594 1319H398V724H565Q685 724 760 745T882 814Q929 862 948 915T968 1034Z",
            "M1528 -365Q1468 -380 1410 -386T1290 -393Q1116 -393 1011 -298T896 -24Q872 -28 850 -29T806 -31Q649 -31 521 21T302 172Q212 271 164 415T115 744Q115 926 163 1070T303 1318Q391 1416 521 1468T806 "
                + "1520Q966 1520 1093 1468T1310 1318Q1401 1218 1449 1073T1498 744Q1498 471 1387 284T1087 22Q1091 -92 1141 -155T1323 -218Q1364 -218 1420 -206T1501 -183H1528V-365ZM1292 744Q1292 1034 1162 1191T807 1349Q580 1349 451 1192T321 744Q321 451 453 296T807 "
                + "140Q1029 140 1160 295T1292 744Z",
            "M1432 0H1175L677 592H398V0H200V1489H617Q752 1489 842 1472T1004 1409Q1085 1358 1130 1281T1176 1084Q1176 923 1095 815T872 651L1432 0ZM969 1070Q969 1134 947 1183T872 1267Q829 1296 770 1307T631 "
                + "1319H398V757H598Q692 757 762 773T881 835Q926 877 947 931T969 1070Z",
            "M1282 425Q1282 338 1242 253T1128 109Q1048 45 942 9T685 -27Q524 -27 396 3T134 92V340H148Q261 246 409 195T687 144Q871 144 973 213T1076 397Q1076 496 1028 543T880 616Q805 636 718 649T532 682Q334 "
                + "724 239 825T143 1090Q143 1277 301 1396T702 1516Q859 1516 990 1486T1222 1412V1178H1208Q1123 1250 985 1297T701 1345Q542 1345 446 1279T349 1109Q349 1016 397 963T566 882Q630 868 748 848T948 807Q1114 763 1198 674T1282 425Z",
            "M1262 1313H730V0H532V1313H0V1489H1262V1313Z",
            "M1321 598Q1321 436 1286 316T1169 115Q1092 39 989 4T749 -31Q609 -31 505 6T330 115Q249 197 214 313T178 598V1489H376V588Q376 467 392 397T448 270Q492 205 567 172T749 139Q856 139 931 171T1051 "
                + "270Q1090 327 1106 400T1123 583V1489H1321V598Z",
            "M1374 1489L832 0H568L26 1489H238L705 179L1172 1489H1374Z",
            "M1933 1489L1546 0H1323L1010 1236L704 0H486L92 1489H295L608 251L916 1489H1117L1428 239L1739 1489H1933Z",
            "M1336 1489L822 753L1335 0H1106L700 613L284 0H68L587 744L80 1489H308L709 884L1119 1489H1336Z",
            "M1254 1489L730 653V0H532V632L6 1489H225L632 823L1043 1489H1254Z",
            "M1288 0H126V184L1039 1313H160V1489H1266V1310L344 176H1288V0Z",
            "M759 -392H239V1556H759V1413H413V-249H759V-392Z",
            "M960 -304H787L70 1556H246L960 -304Z",
            "M691 -392H171V-249H517V1413H171V1556H691V-392Z",
            "M1490 684H1292L837 1311L383 682H186L775 1489H901L1490 684Z",
            "M1306 -300H-4V-180H1306V-300Z",
            "M762 1302H613L340 1676H583L762 1302Z",
            "M1053 0H866V119Q841 102 799 72T716 23Q669 0 608 -15T465 -31Q314 -31 209 69T104 324Q104 451 158 529T314 653Q416 698 559 714T866 738V767Q866 831 844 873T779 939Q739 962 683 970T566 978Q492 "
                + "978 401 959T213 902H203V1093Q258 1108 362 1126T567 1144Q685 1144 772 1125T924 1058Q987 1012 1020 939T1053 758V0ZM866 275V586Q780 581 664 571T479 542Q398 519 348 471T298 337Q298 241 356 193T533 144Q632 144 714 182T866 275Z",
            "M1168 567Q1168 427 1129 315T1022 127Q951 48 866 9T679 -31Q584 -31 513 -9T373 52L361 0H185V1556H373V1000Q452 1065 541 1106T741 1148Q939 1148 1053 996T1168 567ZM974 562Q974 762 908 865T695 "
                + "969Q613 969 529 934T373 842V202Q453 166 510 152T641 138Q797 138 885 240T974 562Z",
            "M1011 70Q917 25 833 0T653 -25Q532 -25 431 10T258 118Q185 190 145 300T105 557Q105 831 255 987T653 1143Q749 1143 841 1116T1011 1050V841H1001Q915 908 824 944T645 980Q485 980 393 873T300 557Q300 "
                + "355 390 247T645 138Q702 138 761 153T867 192Q908 213 944 236T1001 277H1011V70Z",
            "M1091 0H903V117Q822 47 734 8T543 -31Q343 -31 226 123T108 550Q108 692 148 803T258 992Q326 1068 416 1108T604 1148Q692 1148 760 1130T903 1072V1556H1091V0ZM903 275V916Q827 950 767 963T636 976Q478 "
                + "976 390 866T302 554Q302 355 370 252T588 148Q668 148 750 183T903 275Z",
            "M1120 539H297Q297 436 328 360T413 234Q465 186 536 162T694 138Q808 138 923 183T1088 273H1098V68Q1003 28 904 1T696 -26Q418 -26 262 124T106 552Q106 826 255 987T649 1148Q875 1148 997 1016T1120 "
                + "641V539ZM937 683Q936 831 863 912T639 993Q488 993 399 904T297 683H937Z",
            "M786 1374H776Q745 1383 695 1392T607 1402Q486 1402 432 1349T377 1155V1117H716V959H383V0H195V959H68V1117H195V1154Q195 1353 294 1459T580 1566Q643 1566 693 1560T786 1546V1374Z",
            "M1091 127Q1091 -157 962 -290T565 -423Q476 -423 392 -411T225 -375V-183H235Q281 -201 381 -227T581 -254Q677 -254 740 -231T838 -167Q873 -128 888 -73T903 50V152Q818 84 741 51T543 17Q343 17 226 "
                + "161T108 569Q108 713 148 817T259 998Q324 1069 417 1108T602 1148Q699 1148 764 1129T903 1069L915 1117H1091V127ZM903 307V916Q828 950 764 964T635 979Q480 979 391 875T302 573Q302 385 368 288T587 191Q669 191 751 222T903 307Z",
            "M1119 0H931V636Q931 713 922 780T889 886Q864 928 817 948T695 969Q618 969 534 931T373 834V0H185V1556H373V993Q461 1066 555 1107T748 1148Q929 1148 1024 1039T1119 725V0Z",
            "M387 1304H175V1499H387V1304ZM375 0H187V1117H375V0Z",
            "M533 1304H321V1499H533V1304ZM521 -27Q521 -223 421 -323T153 -423Q113 -423 48 -415T-62 -395V-216H-52Q-24 -227 23 -241T116 -255Q188 -255 232 -235T298 -175Q320 -135 326 -79T333 59V959H100V1117H521V-27Z",
            "M1199 0H951L503 489L381 373V0H193V1556H381V558L924 1117H1161L642 601L1199 0Z",
            "M375 0H187V1556H375V0Z",
            "M1815 0H1627V636Q1627 708 1621 775T1593 882Q1570 925 1527 947T1403 969Q1324 969 1245 930T1087 829Q1090 806 1092 776T1094 715V0H906V636Q906 710 900 776T872 883Q849 926 806 947T682 969Q605 "
                + "969 528 931T373 834V0H185V1117H373V993Q461 1066 548 1107T735 1148Q849 1148 928 1100T1047 967Q1161 1063 1255 1105T1456 1148Q1640 1148 1727 1037T1815 725V0Z",
            "M1119 0H931V636Q931 713 922 780T889 886Q864 928 817 948T695 969Q618 969 534 931T373 834V0H185V1117H373V993Q461 1066 555 1107T748 1148Q929 1148 1024 1039T1119 725V0Z",
            "M1137 558Q1137 285 997 127T622 -31Q385 -31 246 127T106 558Q106 831 245 989T622 1148Q857 1148 997 990T1137 558ZM943 558Q943 775 858 880T622 986Q469 986 385 881T300 558Q300 348 385 240T622 "
                + "131Q772 131 857 238T943 558Z",
            "M1168 572Q1168 436 1129 324T1019 133Q953 59 864 19T674 -22Q587 -22 517 -3T373 56V-412H185V1117H373V1000Q448 1063 541 1105T741 1148Q943 1148 1055 996T1168 572ZM974 567Q974 769 905 869T693 "
                + "969Q612 969 530 934T373 842V209Q453 173 510 160T641 147Q798 147 886 253T974 567Z",
            "M1091 -412H903V126Q816 51 730 15T544 -22Q345 -22 227 131T108 555Q108 699 149 809T259 995Q325 1068 414 1108T602 1148Q692 1148 761 1128T903 1069L915 1117H1091V-412ZM903 284V916Q825 951 765 "
                + "965T635 979Q472 979 387 869T302 564Q302 368 370 263T586 157Q668 157 750 192T903 284Z",
            "M882 912H872Q830 922 791 926T697 931Q610 931 529 893T373 793V0H185V1117H373V952Q485 1042 570 1079T745 1117Q794 1117 816 1115T882 1105V912Z",
            "M983 322Q983 169 857 71T511 -27Q387 -27 284 2T110 67V278H120Q209 211 318 172T527 132Q651 132 721 172T791 298Q791 364 753 398Q715 432 607 456Q567 465 503 477T385 503Q238 542 177 617T115 "
                + "803Q115 872 143 933T230 1042Q286 1089 372 1116T566 1144Q666 1144 768 1120T939 1060V859H929Q857 912 754 948T552 985Q449 985 378 946T307 828Q307 759 350 724Q392 689 486 667Q538 655 602 643T710 621Q841 591 912 518Q983 444 983 322Z",
            "M765 10Q712 -4 650 -13T538 -22Q367 -22 278 70T189 365V959H62V1117H189V1438H377V1117H765V959H377V450Q377 362 381 313T409 220Q431 180 469 162T587 143Q633 143 683 156T755 179H765V10Z",
            "M1111 0H923V124Q828 49 741 9T549 -31Q373 -31 275 76T177 392V1117H365V481Q365 396 373 336T407 232Q434 188 477 168T602 148Q675 148 761 186T923 283V1117H1111V0Z",
            "M1151 1117L699 0H510L61 1117H265L611 228L954 1117H1151Z",
            "M1590 1117L1299 0H1125L838 861L553 0H380L86 1117H282L487 252L766 1117H921L1207 252L1401 1117H1590Z",
            "M1152 0H915L598 429L279 0H60L496 557L64 1117H301L616 695L932 1117H1152L713 567L1152 0Z",
            "M1151 1117L499 -412H298L506 54L61 1117H265L608 289L954 1117H1151Z",
            "M995 0H93V139L744 960H107V1117H978V983L324 159H995V0Z",
            "M1113 -392H963Q784 -392 673 -293T561 -5V144Q561 313 478 408T224 504H173V660H224Q395 660 478 755T561 1020V1169Q561 1357 672 1456T963 1556H1113V1418H999Q863 1418 802 1355T740 1152V977Q740 "
                + "838 663 744T449 594V570Q586 515 663 421T740 187V12Q740 -128 801 -191T999 -254H1113V-392Z",
            "M552 -392H378V1556H552V-392Z",
            "M1127 504H1076Q905 504 822 409T739 144V-5Q739 -193 628 -292T337 -392H187V-254H301Q437 -254 498 -191T560 12V187Q560 326 637 420T851 570V594Q714 649 637 743T560 977V1152Q560 1292 "
                + "499 1355T301 1418H187V1556H337Q516 1556 627 1457T739 1169V1020Q739 851 822 756T1076 660H1127V504Z",
            "M1489 927Q1487 828 1467 732T1401 561Q1355 484 1290 440T1125 396Q1031 396 958 435T801 577Q699 702 653 734T557 766Q463 766 413 679T354 395H187Q189 495 209 589T274 761Q317 835 386 "
                + "880T551 926Q644 926 717 888T876 745Q956 647 1007 602T1119 556Q1222 556 1270 657T1322 927H1489Z",
            "M1374 0H1163L1017 415H373L227 0H26L568 1489H832L1374 0ZM956 585L695 1316L433 585H956ZM1005 1677H806V1872H1005V1677ZM592 1677H393V1872H592V1677Z"
        ];
        this.KERN_G1 = [
            7, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 34, 34, 34, 35, 36, 36, 36, 36, 36, 36, 36, 38, 38, 38, 38,
            38, 38, 38, 38, 38, 38, 41, 42, 42, 42, 43, 43, 43, 43, 43, 43, 43, 43, 43, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 47, 47, 47, 47, 47, 47, 48, 48, 48, 48, 48, 48, 48, 49, 49, 50,
            50, 50, 50, 50, 50, 50, 50, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 53, 53, 53, 54, 54, 54, 54, 54, 54,
            54, 54, 54, 54, 54, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 56, 56, 56, 56, 56, 56, 56, 56, 56, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 58,
            58, 58, 58, 58, 58, 58, 58, 58, 58, 65, 65, 65, 66, 66, 66, 67, 67, 69, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 72, 72, 72, 75, 75, 75, 77, 77, 77, 78, 78, 78, 79, 79, 79, 79, 79,
            80, 80, 80, 82, 82, 82, 82, 84, 84, 86, 86, 86, 86, 86, 86, 87, 87, 87, 87, 88, 88, 88, 88, 88, 88, 89, 89, 89, 89, 89, 89, 89, 89, 89, 89, 90, 90, 90, 90, 90, 90, 90
        ];
        this.KERN_G2 = [
            33, 33, 41, 42, 51, 52, 54, 55, 56, 57, 58, 65, 86, 87, 88, 89, 90, 12, 13, 13, 51, 52, 53, 54, 55, 57, 84, 85, 86, 87, 89, 12, 13, 14, 52, 13, 12, 14, 52, 55, 56, 57, 58, 12, 14, 26, 27,
            31, 33, 52, 65, 69, 79, 13, 12, 14, 33, 13, 47, 65, 69, 79, 85, 86, 87, 89, 7, 13, 35, 39, 42, 47, 52, 54, 55, 57, 86, 89, 12, 14, 52, 56, 57, 58, 12, 14, 33, 57, 65, 69, 79, 12, 14, 13,
            52, 57, 65, 69, 79, 85, 89, 12, 14, 33, 51, 86, 87, 89, 12, 13, 14, 26, 27, 31, 33, 35, 39, 47, 51, 52, 65, 67, 69, 71, 79, 82, 83, 85, 86, 87, 89, 90, 12, 14, 33, 12, 13, 14, 26, 27, 33,
            65, 69, 79, 85, 89, 12, 13, 14, 26, 27, 33, 65, 69, 79, 82, 85, 89, 13, 35, 39, 47, 65, 69, 79, 85, 89, 12, 13, 14, 26, 27, 33, 47, 65, 68, 69, 71, 77, 78, 79, 80, 81, 82, 83, 85, 86, 13,
            35, 39, 47, 58, 65, 69, 79, 87, 89, 86, 87, 89, 12, 14, 89, 13, 52, 52, 2, 7, 9, 10, 12, 13, 14, 31, 60, 61, 89, 93, 86, 87, 89, 13, 69, 79, 86, 87, 89, 86, 87, 89, 12, 14, 86, 88, 89,
            12, 14, 89, 12, 13, 14, 65, 13, 89, 12, 13, 14, 65, 69, 79, 12, 13, 14, 65, 13, 67, 68, 69, 71, 79, 12, 13, 14, 65, 67, 68, 69, 71, 79, 81, 13, 67, 68, 69, 71, 79, 81
        ];
        this.KERN_K = [
            100, 50, 30, 100, 20, 150, 50, 50, 80, 140, 30, 20, 40, 20, 50, 40, 40, 130, 160, 50, 10, 120, 10, 60, 50, 80, 20, 10, 50, 30, 50, 20, -10, 20, 60, 50, 50, 50, 50, 20, 10, 20, 20, 300,
            300, 60, 60, -60, 100, -30, 100, 50, 50, 30, 20, 20, 10, 110, 20, 60, 70, 70, 50, 80, 70, 80, 120, 160, 20, 20, -100, 20, 170, 110, 100, 160, 110, 110, 30, 30, 50, 10, 20, 20, 300, 300,
            50, -20, 50, 50, 50, 30, 30, 100, 60, 20, 40, 50, 50, 20, 55, 20, 20, 20, 22, 30, 20, 30, 290, 150, 290, 200, 200, -60, 120, 40, 40, 50, 12, 70, 240, 220, 220, 210, 220, 200, 180, 200,
            200, 200, 200, 170, 20, 20, 10, 290, 50, 290, 80, 80, 60, 100, 100, 100, 60, 65, 290, 50, 220, 80, 80, 50, 100, 100, 100, 60, 60, 65, 80, 10, 10, 10, 50, 60, 60, 30, 80, 290, 140, 290,
            200, 200, 80, 20, 140, 120, 130, 130, 100, 100, 130, 100, 130, 100, 110, 110, 100, 60, 20, 20, 20, 10, 50, 60, 60, 40, 65, 16, 10, 16, 30, 20, 5, 20, 60, 140, -60, -60, -100, -50, 130,
            50, 120, -110, -100, -100, 10, -100, 20, 10, 20, 100, 20, 20, 20, 10, 20, 20, 10, 20, 30, 20, 15, 20, 15, 30, 20, 5, 290, 20, 290, 36, 40, 10, 180, 40, 180, 40, 18, 18, 70, 20, 70, 20,
            50, 20, 10, 24, 10, 24, 190, 40, 190, 40, 18, 10, 18, 10, 18, 10, 20, 10, 10, 12, 10, 12, 10
        ];
        this.OUTLINE_X = [
            [], [291, 301, 505, 515], [168, 211, 729, 772, 554], [195, 389, 917, 1364, 1481, 1481, 1288, 760, 312, 195], [155, 604, 722, 1129.75, 1160, 1107, 722, 604, 278, 191, 162, 155], [149, 172.25, 242, 630,
                1687, 1844.25, 1960, 2031.25, 2055, 2031.75, 1962, 1575, 517, 359.75, 244, 172.75], [115, 150, 253, 407.75, 598, 1555, 1287, 961.25, 881, 757.5, 601, 423, 293, 213, 187], [164, 207, 343, 386], [181,
                205.5, 279, 554, 783, 783, 554, 279, 205.5], [147, 376, 651, 724.5, 749, 724.5, 651, 376, 147], [167, 232, 588, 717, 1073, 1137, 1137, 1073, 717, 588, 232, 167], [210, 755, 921, 1466, 1466, 921, 755,
                210], [147, 293, 575, 321], [153, 777, 777, 153], [253, 492, 492, 253], [-30, 143, 860, 684], [137, 168.5, 261, 420.25, 652, 882, 1042, 1135.75, 1167, 1135.5, 1043, 883.75, 652, 422, 262, 168.25],
            [278, 1084, 1084, 780, 625, 278], [161, 1169, 1169, 1106, 1073.5, 976, 821.25, 617, 387, 198, 161], [167, 364, 608, 831, 1007, 1111, 1148, 1117, 1080, 971, 821, 629, 399, 210, 167], [77, 790, 982, 1203,
                1203, 982, 798, 77], [187, 378, 613, 844, 1015, 1119, 1157, 1147, 251, 187], [137, 184, 316, 475, 675, 875.75, 1042, 1153.75, 1191, 1046, 965, 866, 542, 315, 179], [154, 285, 499, 1173, 1173, 154],
            [122, 158.5, 266, 433.75, 651, 860.25, 1030, 1142.5, 1180, 1140, 1106.75, 1007, 851.5, 651, 456.75, 300, 196.5, 162], [113, 258, 340, 438, 760, 988, 1123, 1167, 1121, 990, 829, 629, 429.5, 263,
                150.5], [346, 585, 585, 346], [230, 376, 658, 585, 346], [254, 1408, 1408, 254], [245, 1431, 1431, 245], [268, 1422, 1422, 268], [160, 406, 610, 970, 1005, 973.25, 880, 733.25, 541, 337, 160], [176,
                240, 419, 692, 1037, 1210, 1391, 1714, 1830, 1870, 1813, 1651, 1391, 1041, 701, 426, 243], [26, 1374, 832, 568], [200, 728, 984, 1168, 1281, 1323, 1301.25, 1196, 1159, 1040, 885, 641, 200], [115, 169,
                319, 550, 844, 1002, 1134, 1251, 1350, 1350, 1084, 845, 546, 317, 167], [200, 576, 907, 1134, 1370, 1458, 1373, 1136, 918, 572, 200], [200, 1181, 1181, 200], [200, 398, 1045, 1151, 1151, 200], [115,
                171, 330, 577, 896, 1176, 1442, 1442, 1441, 1155, 896, 570.25, 323, 167], [200, 1339, 1339, 200], [137, 725, 725, 137], [44, 178, 306, 487.25, 627, 716.25, 746, 746, 233, 44], [205, 1397, 1366, 205],
            [200, 1142, 1142, 398, 200], [200, 1526, 1526, 200], [200, 1336, 1336, 200], [115, 164, 302, 521, 806, 1093, 1310, 1449, 1498, 1449, 1310, 1093, 806, 521, 303, 163], [200, 398, 1043, 1140, 1174, 1127,
                996, 831, 604, 200], [115, 164, 302, 521, 1011, 1133.25, 1290, 1410, 1528, 1528, 1498, 1449, 1310, 1093, 806, 521, 303, 163], [200, 1432, 1130, 1004, 842, 617, 200], [134, 396, 685, 942, 1128, 1242,
                1282, 1222, 990, 702, 480.25, 301, 182.5, 143, 134], [0, 532, 730, 1262, 1262, 0], [178, 214, 330, 505, 749, 989, 1169, 1286, 1321, 1321, 178], [26, 568, 832, 1374, 238], [92, 486, 1546, 1933, 295],
            [68, 1335, 1336, 80], [6, 532, 730, 1254, 225], [126, 1288, 1288, 1266, 160, 126], [239, 759, 759, 239], [70, 787, 960, 246], [171, 691, 691, 171], [186, 383, 1490, 901, 775], [-4, 1306, 1306, -4], [340,
                613, 762, 583], [104, 130.25, 209, 325.5, 465, 1053, 1053, 1020, 924, 772, 567, 362, 203], [185, 679, 866, 1022, 1129, 1168, 1138.75, 1053, 918, 373, 185], [105, 145, 258, 431, 653, 833, 1011, 1011,
                841, 653, 429.5, 255, 142.5], [108, 138, 226, 363.75, 543, 1091, 1091, 903, 258, 148], [106, 145, 262, 448.5, 696, 904, 1098, 1120, 1120, 1088.75, 997, 849, 649, 428, 255, 143.25], [68, 195, 383, 716,
                786, 786, 693, 580, 415, 294, 68], [108, 225, 392, 565, 798.25, 962, 1058.75, 1091, 1091, 602, 417, 259, 148], [185, 1119, 1119, 1095.25, 1024, 373, 185], [175, 187, 375, 387, 387, 175], [-62, 48, 153,
                304, 421, 496, 521, 533, 533, 321, 100, -62], [193, 1199, 1161, 381, 193], [187, 375, 375, 187], [185, 1815, 1815, 1792.5, 1727, 1615.75, 1456, 735, 185], [185, 1119, 1119, 1095.25, 1024, 907.5, 748,
                185], [106, 141.5, 246, 409.5, 622, 833.25, 997, 1102, 1137, 1102, 997, 833.25, 622, 408.75, 245, 140.75], [185, 373, 1019, 1129, 1168, 1139.25, 1055, 920.5, 741, 185], [108, 138.25, 227, 365.25,
                903, 1091, 1091, 602, 414, 259, 149], [185, 373, 882, 882, 816, 745, 185], [110, 284, 511, 707.5, 857, 951.5, 983, 939, 768, 566, 372, 230, 143, 115, 110], [62, 211.25, 278, 387.5, 538, 650, 765, 765,
                377, 189, 62], [177, 201.5, 275, 392.5, 549, 1111, 1111, 177], [61, 510, 699, 1151, 265], [86, 380, 1299, 1590, 766], [60, 1152, 1152, 64], [61, 298, 499, 1151, 265], [93, 995, 995, 978, 107, 93], [173,
                589.5, 673, 801, 963, 1113, 1113, 963, 800.25, 672, 588.75, 173], [378, 552, 552, 378], [187, 337, 499.75, 628, 711.25, 1127, 1127, 710.5, 627, 499, 337, 187], [187, 354, 1125, 1290, 1401, 1467, 1489,
                1322, 551, 386, 274, 209], [26, 1374, 1005, 806, 393]
        ];
        this.OUTLINE_Y = [
            [], [1489, 0, 0, 1489], [1556, 977, 977, 1556, 1556], [421, 0, 0, 421, 932, 1067, 1489, 1489, 1067, 556], [85, -361, -361, 238.25, 380, 1231, 1576, 1576, 1185, 1071.5, 935, 283], [1075, 880.5, 743, 0,
                -29, -1.75, 80, 217.75, 413, 607.5, 745, 1489, 1517, 1489.75, 1408, 1270.25], [409, 230.25, 90, -0.75, -31, 0, 909, 1334, 1433, 1498.25, 1520, 1490, 1412, 1301, 1174], [1556, 977, 977, 1556], [572,
                286.25, 31, -412, -412, 1556, 1556, 1113, 857.75], [-412, -412, 31, 286.25, 572, 857.75, 1113, 1556, 1556], [886, 776, 630, 630, 777, 887, 1299, 1409, 1556, 1556, 1410, 1300], [572, 27, 27, 572, 732,
                1277, 1277, 732], [-370, -370, 285, 285], [561, 561, 742, 742], [0, 0, 285, 285], [-304, -304, 1556, 1556], [743, 400, 159, 16.5, -31, 16.5, 157, 397.5, 745, 1085.5, 1327, 1471, 1519, 1471, 1329, 1088],
            [0, 0, 152, 1494, 1494, 1286], [0, 0, 171, 1110, 1280, 1410, 1492.5, 1520, 1491, 1427, 209], [63, -2, -31, 3, 106, 254, 441, 1161, 1320, 1436, 1500, 1520, 1490, 1426, 272], [419, 0, 0, 419, 579, 1489, 1489,
                649], [56, -6, -31, 7, 114, 274, 473, 1489, 1489, 267], [654, 324, 104, 3, -31, 5.5, 113, 277, 483, 1494, 1512, 1517, 1453, 1277, 1005], [1314, 0, 0, 1266, 1489, 1489], [411, 233.5, 91, -2.75, -34, -2, 94,
                238.25, 415, 1144, 1294.5, 1416, 1496.25, 1523, 1495, 1411, 1285, 1131], [1005, -6, -24, -29, 33, 209, 480, 834, 1172, 1385, 1486, 1519, 1483.25, 1376, 1211.75], [0, 0, 1117, 1117], [-370, -370, 285,
                1117, 1117], [590, 77, 1227, 714], [362, 362, 942, 942], [77, 590, 714, 1227], [1245, 0, 0, 965, 1139, 1294, 1415, 1493, 1519, 1497, 1449], [647, 291, 15, -163, -226, -218, -190, 157, 394, 663, 1014,
                1283, 1457, 1519, 1452, 1268, 991], [0, 0, 1489, 1489], [0, 0, 28, 122, 262, 458, 600.25, 1155, 1317, 1427, 1477, 1489, 1489], [743, 402, 161, 18, -27, -13, 19, 63, 108, 1385, 1487, 1516, 1465, 1317,
                1072], [0, 0, 28, 119, 375, 743, 1118, 1371, 1458, 1489, 1489], [0, 0, 1489, 1489], [0, 0, 717, 1313, 1489, 1489], [746, 405, 163, 19, -29, 13, 110, 749, 1382, 1486, 1516, 1463.75, 1309, 1065.25], [0, 0,
                1489, 1489], [0, 0, 1489, 1489], [8, -13, -21, 5.5, 85, 213.5, 387, 1489, 1489, 193], [0, 0, 1489, 1489], [0, 0, 176, 1489, 1489], [0, 0, 1489, 1489], [0, 0, 1489, 1489], [744, 415, 172, 21, -31, 20, 172,
                415, 744, 1073, 1318, 1468, 1520, 1468, 1318, 1070], [0, 0, 709, 856, 1039, 1254, 1396, 1467, 1489, 1489], [744, 415, 172, 21, -298, -369.25, -393, -386, -365, -183, 744, 1073, 1318, 1468, 1520, 1468,
                1318, 1070], [0, 0, 1281, 1409, 1472, 1489, 1489], [92, 3, -27, 9, 109, 253, 425, 1412, 1486, 1516, 1485.5, 1396, 1260, 1090, 340], [1313, 0, 0, 1313, 1489, 1489], [598, 313, 115, 6, -31, 4, 115, 316, 598,
                1489, 1489], [1489, 0, 0, 1489, 1489], [1489, 0, 0, 1489, 1489], [0, 0, 1489, 1489], [1489, 0, 0, 1489, 1489], [0, 0, 176, 1489, 1489, 184], [-392, -392, 1556, 1556], [1556, -304, -304, 1556], [-392,
                -392, 1556, 1556], [682, 682, 684, 1489, 1489], [-300, -300, -180, -180], [1676, 1302, 1302, 1676], [324, 182.75, 69, -6, -31, 0, 758, 939, 1058, 1125, 1144, 1126, 1093], [0, -31, 9, 127, 315, 567,
                812.75, 996, 1110, 1556, 1556], [557, 300, 118, 10, -25, 0, 70, 1050, 1116, 1143, 1104, 987, 801.5], [550, 306.75, 123, 7.5, -31, 0, 1556, 1556, 992, 803], [552, 306, 124, 11.5, -26, 1, 68, 539, 641,
                856.25, 1016, 1115, 1148, 1107.75, 987, 797.75], [959, 0, 0, 959, 1374, 1546, 1560, 1566, 1538.75, 1459, 1117], [569, -375, -411, -423, -389.75, -290, -119.25, 127, 1117, 1148, 1108, 998, 817],
            [0, 0, 725, 906, 1039, 1556, 1556], [1304, 0, 0, 1304, 1499, 1499], [-395, -415, -423, -398, -323, -199, -27, 1304, 1499, 1499, 1117, -216], [0, 0, 1117, 1556, 1556], [0, 0, 1556, 1556], [0, 0, 725,
                903.5, 1037, 1120.25, 1148, 1148, 1117], [0, 0, 725, 906, 1039, 1120.75, 1148, 1117], [558, 313.75, 127, 8.5, -31, 8.5, 127, 313.75, 558, 803, 990, 1108.5, 1148, 1107.75, 989, 802.25], [-412, -412,
                133, 324, 572, 814, 996, 1110, 1148, 1117], [555, 313.5, 131, 16.25, -412, -412, 1117, 1148, 1108, 995, 809], [0, 0, 912, 1105, 1115, 1117, 1117], [67, 2, -27, -2.5, 71, 182.75, 322, 1060, 1120, 1144,
                1116, 1042, 933, 803, 278], [959, 189.75, 70, 1, -22, -13, 10, 1117, 1438, 1438, 1117], [392, 208.5, 76, -4.25, -31, 0, 1117, 1117], [1117, 0, 0, 1117, 1117], [1117, 0, 0, 1117, 1117], [0, 0, 1117, 1117],
            [1117, -412, -412, 1117, 1117], [0, 0, 159, 1117, 1117, 139], [504, -171.5, -293, -367.25, -392, -392, 1556, 1556, 1530.5, 1456, 1334.75, 660], [-392, -392, 1556, 1556], [-392, -392, -366.5, -292,
                -170.75, 504, 660, 1335.5, 1457, 1531.25, 1556, 1556], [395, 395, 396, 440, 561, 732, 927, 927, 926, 880, 761, 589], [0, 0, 1872, 1872, 1872]
        ];
        this.pathCache = [];
        for (var n = this.GLYPH_DATA.length - 1; n >= 0; n--)
            this.pathCache[n] = null;
    }
    getKerning(g1, g2) {
        for (let n = 0; n < this.GLYPH_COUNT; n++)
            if (this.KERN_G1[n] == g1 && this.KERN_G2[n] == g2)
                return this.KERN_K[n];
        return 0;
    }
    measureText(txt, size) {
        let font = FontData.main;
        let scale = size / font.UNITS_PER_EM;
        let dx = 0;
        for (let n = 0; n < txt.length; n++) {
            let i = txt.charCodeAt(n) - font.GLYPH_MIN;
            if (i < 0 || i >= font.GLYPH_COUNT) {
                dx += font.MISSING_HORZ;
                continue;
            }
            dx += font.HORIZ_ADV_X[i];
            if (n < txt.length - 1) {
                let j = txt.charCodeAt(n + 1) - font.GLYPH_MIN;
                dx += font.getKerning(i, j);
            }
        }
        return [dx * scale, font.ASCENT * scale * font.ASCENT_FUDGE, -font.DESCENT * scale];
    }
    getRawGlyph(idx) {
        return this.GLYPH_DATA[idx];
    }
    ;
    getGlyphPath(idx) {
        path = this.pathCache[idx];
        if (path != null)
            return path;
        var path = new Path2D(this.GLYPH_DATA[idx]);
        this.pathCache[idx] = path;
        return path;
    }
    getOutlineX(idx) { return this.OUTLINE_X[idx].slice(0); }
    getOutlineY(idx) { return this.OUTLINE_Y[idx].slice(0); }
}
FontData.main = new FontData();
var TextAlign;
(function (TextAlign) {
    TextAlign[TextAlign["Centre"] = 0] = "Centre";
    TextAlign[TextAlign["Left"] = 1] = "Left";
    TextAlign[TextAlign["Right"] = 2] = "Right";
    TextAlign[TextAlign["Baseline"] = 0] = "Baseline";
    TextAlign[TextAlign["Middle"] = 4] = "Middle";
    TextAlign[TextAlign["Top"] = 8] = "Top";
    TextAlign[TextAlign["Bottom"] = 16] = "Bottom";
})(TextAlign || (TextAlign = {}));
class MetaVector {
    constructor(vec) {
        this.PRIM_LINE = 1;
        this.PRIM_RECT = 2;
        this.PRIM_OVAL = 3;
        this.PRIM_PATH = 4;
        this.PRIM_TEXT = 5;
        this.ONE_THIRD = 1.0 / 3;
        this.types = [];
        this.prims = [];
        this.width = 0;
        this.height = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.scale = 1;
        this.density = 1;
        this.lowX = null;
        this.lowY = null;
        this.highX = null;
        this.highY = null;
        const font = FontData.main;
        this.charMask = Vec.booleanArray(false, font.GLYPH_COUNT);
        if (vec != null) {
            if (vec.size != null) {
                this.width = vec.size[0];
                this.height = vec.size[1];
            }
            if (vec.types != null)
                this.types = vec.types;
            if (vec.prims != null)
                this.prims = vec.prims;
            for (let p of this.prims)
                if (p[0] == this.PRIM_TEXT) {
                    let txt = p[4];
                    for (let n = 0; n < txt.length; n++) {
                        let i = txt.charCodeAt(n) - font.GLYPH_MIN;
                        if (i >= 0 && i < font.GLYPH_COUNT)
                            this.charMask[i] = true;
                    }
                }
        }
    }
    drawLine(x1, y1, x2, y2, colour, thickness) {
        if (thickness == null)
            thickness = 1;
        let typeidx = this.findOrCreateType([this.PRIM_LINE, thickness, colour]);
        const bump = 0.5 * thickness;
        this.updateBounds(Math.min(x1, x2) - bump, Math.min(y1, y2) - bump);
        this.updateBounds(Math.max(x1, x2) + bump, Math.max(y1, y2) + bump);
        this.prims.push([this.PRIM_LINE, typeidx, x1, y1, x2, y2]);
    }
    drawRect(x, y, w, h, edgeCol, thickness, fillCol) {
        if (edgeCol == null)
            edgeCol = -1;
        if (fillCol == null)
            fillCol = -1;
        if (thickness == null)
            thickness = 1;
        let typeidx = this.findOrCreateType([this.PRIM_RECT, edgeCol, fillCol, thickness]);
        const bump = 0.5 * thickness;
        this.updateBounds(x - bump, y - bump);
        this.updateBounds(x + w + bump, y + h + bump);
        this.prims.push([this.PRIM_RECT, typeidx, x, y, w, h]);
    }
    drawOval(cx, cy, rw, rh, edgeCol, thickness, fillCol) {
        if (edgeCol == null)
            edgeCol = -1;
        if (fillCol == null)
            fillCol = -1;
        if (thickness == null)
            thickness = 1;
        const bump = 0.5 * thickness;
        this.updateBounds(cx - rw - bump, cy - rh - bump);
        this.updateBounds(cx + rw + bump, cy + rh + bump);
        let typeidx = this.findOrCreateType([this.PRIM_OVAL, edgeCol, fillCol, thickness]);
        this.prims.push([this.PRIM_OVAL, typeidx, cx, cy, rw, rh]);
    }
    drawPath(xpoints, ypoints, ctrlFlags, isClosed, edgeCol, thickness, fillCol, hardEdge) {
        if (edgeCol == null)
            edgeCol = -1;
        if (fillCol == null)
            fillCol = -1;
        if (thickness == null)
            thickness = 1;
        if (hardEdge == null)
            hardEdge = false;
        const bump = 0.5 * thickness;
        for (let n = 0; n < xpoints.length; n++) {
            this.updateBounds(xpoints[n] - bump, ypoints[n] - bump);
            if (bump != 0)
                this.updateBounds(xpoints[n] + bump, ypoints[n] + bump);
        }
        let typeidx = this.findOrCreateType([this.PRIM_PATH, edgeCol, fillCol, thickness, hardEdge]);
        this.prims.push([this.PRIM_PATH, typeidx, xpoints.length, xpoints, ypoints, ctrlFlags, isClosed]);
    }
    drawPoly(xpoints, ypoints, edgeCol, thickness, fillCol, hardEdge) {
        this.drawPath(xpoints, ypoints, null, true, edgeCol, thickness, fillCol, hardEdge);
    }
    drawText(x, y, txt, size, colour, align) {
        if (align == null)
            align = TextAlign.Left | TextAlign.Baseline;
        const font = FontData.main;
        for (let n = 0; n < txt.length; n++) {
            let i = txt.charCodeAt(n);
            if (i >= font.GLYPH_MIN && i <= font.GLYPH_MAX)
                this.charMask[i - font.GLYPH_MIN] = true;
        }
        let metrics = font.measureText(txt, size);
        let bx = 0, by = 0;
        if ((align & TextAlign.Left) != 0) { }
        else if ((align & TextAlign.Right) != 0)
            bx = -metrics[0];
        else
            bx = -0.5 * metrics[0];
        if ((align & TextAlign.Middle) != 0)
            by += 0.5 * metrics[1];
        else if ((align & TextAlign.Top) != 0)
            by += metrics[1];
        else if ((align & TextAlign.Bottom) != 0)
            by -= metrics[2];
        let x1 = 0, y1 = 0, x2 = 0, y2 = 0;
        let dx = 0;
        for (let n = 0; n < txt.length; n++) {
            let i = txt.charCodeAt(n) - font.GLYPH_MIN;
            if (i >= 0 && i < font.GLYPH_COUNT) {
                let outlineX = font.getOutlineX(i), outlineY = font.getOutlineY(i);
                x1 = Math.min(x1, dx + Vec.min(outlineX));
                x2 = Math.max(x2, dx + Vec.max(outlineX));
                y1 = Math.min(y1, -Vec.max(outlineY));
                y2 = Math.max(y2, -Vec.min(outlineY));
                dx += font.HORIZ_ADV_X[i];
                if (n < txt.length - 1) {
                    let j = txt.charCodeAt(n + 1) - font.GLYPH_MIN;
                    dx += font.getKerning(i, j);
                }
            }
            else
                dx += font.MISSING_HORZ;
        }
        const mscale = size * font.INV_UNITS_PER_EM;
        this.updateBounds(x + bx + x1 * mscale, y + by + y1 * mscale);
        this.updateBounds(x + bx + x2 * mscale, y + by + y2 * mscale);
        let typeidx = this.findOrCreateType([this.PRIM_TEXT, size, colour]);
        this.prims.push([this.PRIM_TEXT, typeidx, x + bx, y + by, txt]);
    }
    boundLowX() { return this.lowX; }
    boundLowY() { return this.lowY; }
    boundHighX() { return this.highX; }
    boundHighY() { return this.highY; }
    measure() {
        this.width = Math.ceil(this.highX - this.lowX);
        this.height = Math.ceil(this.highY - this.lowY);
    }
    normalise() {
        if (this.lowX != 0 || this.lowY != 0)
            this.transformPrimitives(-this.lowX, -this.lowY, 1, 1);
        this.width = Math.ceil(this.highX - this.lowX);
        this.height = Math.ceil(this.highY - this.lowY);
    }
    setSize(width, height) { this.width = width; this.height = height; }
    transformIntoBox(box) {
        this.transformPrimitives(-this.lowX, -this.lowY, 1, 1);
        let nw = Math.ceil(this.highX - this.lowX), nh = Math.ceil(this.highY - this.lowY);
        let scale = 1;
        if (nw > box.w) {
            let mod = box.w / nw;
            nw = box.w;
            nh *= mod;
            scale *= mod;
        }
        if (nh > box.h) {
            let mod = box.h / nh;
            nh = box.h;
            nw *= mod;
            scale *= mod;
        }
        let ox = 0.5 * (box.w - nw), oy = 0.5 * (box.h - nh);
        this.transformPrimitives(box.x + ox, box.y + oy, scale, scale);
    }
    transformPrimitives(ox, oy, sw, sh) {
        if (ox == 0 && oy == 0 && sw == 1 && sh == 1)
            return;
        for (let a of this.prims) {
            const type = a[0];
            if (type == this.PRIM_LINE) {
                a[2] = ox + ((a[2] - this.lowX) * sw + this.lowX);
                a[3] = oy + ((a[3] - this.lowY) * sh + this.lowY);
                a[4] = ox + ((a[4] - this.lowX) * sw + this.lowX);
                a[5] = oy + ((a[5] - this.lowY) * sh + this.lowY);
            }
            else if (type == this.PRIM_RECT) {
                a[2] = ox + ((a[2] - this.lowX) * sw + this.lowX);
                a[3] = oy + ((a[3] - this.lowY) * sh + this.lowY);
                a[4] = a[4] * sw;
                a[5] = a[5] * sh;
            }
            else if (type == this.PRIM_OVAL) {
                a[2] = ox + ((a[2] - this.lowX) * sw + this.lowX);
                a[3] = oy + ((a[3] - this.lowY) * sh + this.lowY);
                a[4] *= sw;
                a[5] *= sh;
            }
            else if (type == this.PRIM_PATH) {
                let sz = a[2], px = a[3], py = a[4];
                for (let n = 0; n < sz; n++) {
                    px[n] = ox + ((px[n] - this.lowX) * sw + this.lowX);
                    py[n] = oy + ((py[n] - this.lowY) * sh + this.lowY);
                }
            }
            else if (type == this.PRIM_TEXT) {
                a[2] = ox + ((a[2] - this.lowX) * sw + this.lowX);
                a[3] = oy + ((a[3] - this.lowY) * sh + this.lowY);
            }
        }
        let swsh = 0.5 * (sw + sh);
        if (swsh != 1)
            for (let t of this.types) {
                const type = t[0];
                if (type == this.PRIM_LINE)
                    t[1] *= swsh;
                else if (type == this.PRIM_RECT)
                    t[3] *= swsh;
                else if (type == this.PRIM_OVAL)
                    t[3] *= swsh;
                else if (type == this.PRIM_PATH)
                    t[3] *= swsh;
                else if (type == this.PRIM_TEXT)
                    t[1] *= swsh;
            }
        this.highX = ox + this.lowX + (this.highX - this.lowX) * sw;
        this.highY = oy + this.lowY + (this.highY - this.lowY) * sh;
        this.lowX += ox;
        this.lowY += oy;
    }
    renderInto(parent) {
        let canvas = newElement(parent, 'canvas', { 'width': this.width, 'height': this.height });
        this.renderCanvas(canvas);
        return canvas;
    }
    renderCanvas(canvas, clearFirst) {
        let ctx = canvas.getContext('2d');
        if (clearFirst)
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        let w = canvas.style.width ? parseInt(canvas.style.width) : canvas.width / this.density;
        let h = canvas.style.height ? parseInt(canvas.style.height) : canvas.height / this.density;
        this.density = pixelDensity();
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = w * this.density;
        canvas.height = h * this.density;
        this.renderContext(ctx);
    }
    renderContext(ctx) {
        ctx.save();
        ctx.scale(this.density, this.density);
        this.typeObj = [];
        for (let n = 0; n < this.types.length; n++) {
            let t = this.types[n];
            if (t[0] == this.PRIM_LINE)
                this.typeObj[n] = this.setupTypeLine(t);
            else if (t[0] == this.PRIM_RECT)
                this.typeObj[n] = this.setupTypeRect(t);
            else if (t[0] == this.PRIM_OVAL)
                this.typeObj[n] = this.setupTypeOval(t);
            else if (t[0] == this.PRIM_PATH)
                this.typeObj[n] = this.setupTypePath(t);
            else if (t[0] == this.PRIM_TEXT)
                this.typeObj[n] = this.setupTypeText(t);
        }
        for (let n = 0; n < this.prims.length; n++) {
            let p = this.prims[n];
            if (p[0] == this.PRIM_LINE)
                this.renderLine(ctx, p);
            else if (p[0] == this.PRIM_RECT)
                this.renderRect(ctx, p);
            else if (p[0] == this.PRIM_OVAL)
                this.renderOval(ctx, p);
            else if (p[0] == this.PRIM_PATH)
                this.renderPath(ctx, p);
            else if (p[0] == this.PRIM_TEXT)
                this.renderText(ctx, p);
        }
        ctx.restore();
    }
    createSVG() {
        let svg = $('<svg></svg>');
        svg.attr('xmlns', 'http://www.w3.org/2000/svg');
        svg.attr('width', this.width);
        svg.attr('height', this.height);
        svg.attr('viewBox', '0 0 ' + this.width + ' ' + this.height);
        this.renderSVG(svg);
        let tmp = $('<tmp></tmp>');
        tmp.append(svg);
        return tmp.html();
    }
    renderSVG(svg) {
        this.typeObj = [];
        const font = FontData.main;
        let defs = $('<defs></defs>').appendTo(svg);
        for (let n = 0; n < font.GLYPH_COUNT; n++)
            if (this.charMask[n]) {
                let path = $('<path></path>').appendTo(defs);
                path.attr('id', 'char' + n);
                path.attr('d', font.GLYPH_DATA[n]);
                path.attr('edge', 'none');
            }
        for (let n = 0; n < this.types.length; n++) {
            let t = this.types[n];
            if (t[0] == this.PRIM_LINE)
                this.typeObj[n] = this.setupTypeLine(t);
            else if (t[0] == this.PRIM_RECT)
                this.typeObj[n] = this.setupTypeRect(t);
            else if (t[0] == this.PRIM_OVAL)
                this.typeObj[n] = this.setupTypeOval(t);
            else if (t[0] == this.PRIM_PATH)
                this.typeObj[n] = this.setupTypePath(t);
            else if (t[0] == this.PRIM_TEXT)
                this.typeObj[n] = this.setupTypeText(t);
        }
        for (let n = 0; n < this.prims.length;) {
            let p = this.prims[n], num = 1;
            if (p[0] != this.PRIM_PATH && p[0] != this.PRIM_TEXT) {
                for (; n + num < this.prims.length; num++)
                    if (this.prims[n + num][0] != p[0] || this.prims[n + num][1] != p[1])
                        break;
            }
            if (p[0] == this.PRIM_LINE) {
                if (num == 1)
                    this.svgLine1(svg, p);
                else
                    this.svgLineN(svg, p, n, num);
            }
            else if (p[0] == this.PRIM_RECT) {
                if (num == 1)
                    this.svgRect1(svg, p);
                else
                    this.svgRectN(svg, p, n, num);
            }
            else if (p[0] == this.PRIM_OVAL) {
                if (num == 1)
                    this.svgOval1(svg, p);
                else
                    this.svgOvalN(svg, p, n, num);
            }
            else if (p[0] == this.PRIM_PATH)
                this.svgPath(svg, p);
            else if (p[0] == this.PRIM_TEXT)
                this.svgText(svg, p);
            n += num;
        }
    }
    setupTypeLine(t) {
        let thickness = t[1] * this.scale;
        let colour = t[2];
        return { 'thickness': thickness, 'colour': colourCanvas(colour) };
    }
    setupTypeRect(t) {
        let edgeCol = t[1];
        let fillCol = t[2];
        let thickness = t[3] * this.scale;
        return { 'edgeCol': colourCanvas(edgeCol), 'fillCol': colourCanvas(fillCol), 'thickness': thickness };
    }
    setupTypeOval(t) {
        let edgeCol = t[1];
        let fillCol = t[2];
        let thickness = t[3] * this.scale;
        return { 'edgeCol': colourCanvas(edgeCol), 'fillCol': colourCanvas(fillCol), 'thickness': thickness };
    }
    setupTypePath(t) {
        let edgeCol = t[1];
        let fillCol = t[2];
        let thickness = t[3] * this.scale;
        let hardEdge = t[4];
        return { 'edgeCol': colourCanvas(edgeCol), 'fillCol': colourCanvas(fillCol), 'thickness': thickness, 'hardEdge': hardEdge };
    }
    setupTypeText(t) {
        let sz = t[1] * this.scale;
        let colour = t[2];
        return { 'colour': colourCanvas(colour), 'size': sz };
    }
    renderLine(ctx, p) {
        let type = this.typeObj[p[1]];
        let x1 = p[2], y1 = p[3];
        let x2 = p[4], y2 = p[5];
        x1 = this.offsetX + this.scale * x1;
        y1 = this.offsetY + this.scale * y1;
        x2 = this.offsetX + this.scale * x2;
        y2 = this.offsetY + this.scale * y2;
        if (type.colour != null) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = type.colour;
            ctx.lineWidth = type.thickness;
            ctx.lineCap = 'round';
            ctx.stroke();
        }
    }
    renderRect(ctx, p) {
        let type = this.typeObj[p[1]];
        let x = p[2], y = p[3];
        let w = p[4], h = p[5];
        x = this.offsetX + this.scale * x;
        y = this.offsetY + this.scale * y;
        w *= this.scale;
        h *= this.scale;
        if (type.fillCol != null) {
            ctx.fillStyle = type.fillCol;
            ctx.fillRect(x, y, w, h);
        }
        if (type.edgeCol != null) {
            ctx.strokeStyle = type.edgeCol;
            ctx.lineWidth = type.thickness;
            ctx.lineCap = 'square';
            ctx.strokeRect(x, y, w, h);
        }
    }
    renderOval(ctx, p) {
        let type = this.typeObj[p[1]];
        let cx = p[2], cy = p[3];
        let rw = p[4], rh = p[5];
        cx = this.offsetX + this.scale * cx;
        cy = this.offsetY + this.scale * cy;
        rw *= this.scale;
        rh *= this.scale;
        if (type.fillCol != null) {
            ctx.fillStyle = type.fillCol;
            ctx.beginPath();
            ctx.ellipse(cx, cy, rw, rh, 0, 0, 2 * Math.PI, true);
            ctx.fill();
        }
        if (type.edgeCol != null) {
            ctx.strokeStyle = type.edgeCol;
            ctx.lineWidth = type.thickness;
            ctx.beginPath();
            ctx.ellipse(cx, cy, rw, rh, 0, 0, 2 * Math.PI, true);
            ctx.stroke();
        }
    }
    renderPath(ctx, p) {
        let type = this.typeObj[p[1]];
        let npts = p[2];
        if (npts == 0)
            return;
        let x = p[3], y = p[4];
        let ctrl = p[5];
        let isClosed = p[6];
        for (let n = 0; n < npts; n++) {
            x[n] = this.offsetX + this.scale * x[n];
            y[n] = this.offsetY + this.scale * y[n];
        }
        for (let layer = 1; layer <= 2; layer++) {
            if (layer == 1 && type.fillCol == null)
                continue;
            if (layer == 2 && type.edgeCol == null)
                continue;
            ctx.beginPath();
            ctx.moveTo(x[0], y[0]);
            for (let i = 1; i < npts; i++) {
                if (!ctrl || !ctrl[i]) {
                    ctx.lineTo(x[i], y[i]);
                }
                else if (i < npts - 1 && !ctrl[i + 1]) {
                    ctx.quadraticCurveTo(x[i], y[i], x[i + 1], y[i + 1]);
                    i++;
                }
                else if (i < npts - 1 && !ctrl[i + 2]) {
                    ctx.bezierCurveTo(x[i], y[i], x[i + 1], y[i + 1], x[i + 2], y[i + 2]);
                    i += 2;
                }
            }
            if (isClosed)
                ctx.closePath();
            if (layer == 1) {
                ctx.fillStyle = type.fillCol;
                ctx.fill();
            }
            else {
                ctx.strokeStyle = type.edgeCol;
                ctx.lineWidth = type.thickness;
                ctx.lineCap = type.hardEdge ? 'square' : 'round';
                ctx.lineJoin = type.hardEdge ? 'miter' : 'round';
                ctx.stroke();
            }
        }
    }
    renderText(ctx, p) {
        let type = this.typeObj[p[1]];
        let x = p[2], y = p[3];
        let txt = p[4];
        let sz = type.size;
        let fill = type.colour;
        x = this.offsetX + this.scale * x;
        y = this.offsetY + this.scale * y;
        let font = FontData.main;
        let scale = sz / font.UNITS_PER_EM;
        let dx = 0;
        for (let n = 0; n < txt.length; n++) {
            let i = txt.charCodeAt(n) - 32;
            if (i < 0 || i >= 96) {
                dx += font.MISSING_HORZ;
                continue;
            }
            let path = font.getGlyphPath(i);
            if (path) {
                ctx.save();
                ctx.translate(x + dx * scale, y);
                ctx.scale(scale, -scale);
                ctx.fillStyle = fill;
                ctx.fill(path);
                ctx.restore();
            }
            dx += font.HORIZ_ADV_X[i];
            if (n < txt.length - 1) {
                let j = txt.charCodeAt(n + 1) - 32;
                dx += font.getKerning(i, j);
            }
        }
    }
    svgLine1(svg, p) {
        let type = this.typeObj[p[1]];
        let x1 = p[2], y1 = p[3];
        let x2 = p[4], y2 = p[5];
        x1 = this.offsetX + this.scale * x1;
        y1 = this.offsetY + this.scale * y1;
        x2 = this.offsetX + this.scale * x2;
        y2 = this.offsetY + this.scale * y2;
        if (type.colour != null) {
            let line = $('<line></line>').appendTo(svg);
            line.attr('x1', x1);
            line.attr('y1', y1);
            line.attr('x2', x2);
            line.attr('y2', y2);
            line.attr('stroke', type.colour);
            line.attr('stroke-width', type.thickness);
            line.attr('stroke-linecap', 'round');
        }
    }
    svgLineN(svg, p, pos, sz) {
        let type = this.typeObj[p[1]];
        if (type.colour == null)
            return;
        let g = $('<g></g>').appendTo(svg);
        g.attr('stroke', type.colour);
        g.attr('stroke-width', type.thickness);
        g.attr('stroke-linecap', 'round');
        for (let n = 0; n < sz; n++) {
            let p = this.prims[pos + n];
            let x1 = p[2], y1 = p[3];
            let x2 = p[4], y2 = p[5];
            x1 = this.offsetX + this.scale * x1;
            y1 = this.offsetY + this.scale * y1;
            x2 = this.offsetX + this.scale * x2;
            y2 = this.offsetY + this.scale * y2;
            let line = $('<line></line>').appendTo(g);
            line.attr('x1', x1);
            line.attr('y1', y1);
            line.attr('x2', x2);
            line.attr('y2', y2);
        }
    }
    svgRect1(svg, p) {
        let type = this.typeObj[p[1]];
        let x = p[2], y = p[3];
        let w = p[4], h = p[5];
        x = this.offsetX + this.scale * x;
        y = this.offsetY + this.scale * y;
        w *= this.scale;
        h *= this.scale;
        let rect = $('<rect></rect>').appendTo(svg);
        rect.attr('x', x);
        rect.attr('y', y);
        rect.attr('width', w);
        rect.attr('height', h);
        if (type.edgeCol != null) {
            rect.attr('stroke', type.edgeCol);
            rect.attr('stroke-width', type.thickness);
            rect.attr('stroke-linecap', 'square');
        }
        else
            rect.attr('stroke', 'none');
        rect.attr('fill', type.fillCol == null ? 'none' : type.fillCol);
    }
    svgRectN(svg, p, pos, sz) {
        let type = this.typeObj[p[1]];
        let g = $('<g></g>').appendTo(svg);
        if (type.edgeCol != null) {
            g.attr('stroke', type.edgeCol);
            g.attr('stroke-width', type.thickness);
            g.attr('stroke-linecap', 'square');
        }
        else
            g.attr('stroke', 'none');
        g.attr('fill', type.fillCol == null ? 'none' : type.fillCol);
        for (let n = 0; n < sz; n++) {
            let p = this.prims[pos + n];
            let x = p[2], y = p[3];
            let w = p[4], h = p[5];
            x = this.offsetX + this.scale * x;
            y = this.offsetY + this.scale * y;
            w *= this.scale;
            h *= this.scale;
            let rect = $('<rect></rect>').appendTo(g);
            rect.attr('x', x);
            rect.attr('y', y);
            rect.attr('width', w);
            rect.attr('height', h);
        }
    }
    svgOval1(svg, p) {
        let type = this.typeObj[p[1]];
        let cx = p[2], cy = p[3];
        let rw = p[4], rh = p[5];
        cx = this.offsetX + this.scale * cx;
        cy = this.offsetY + this.scale * cy;
        rw *= this.scale;
        rh *= this.scale;
        let oval = $('<ellipse></ellipse>').appendTo(svg);
        oval.attr('cx', cx);
        oval.attr('cy', cy);
        oval.attr('rx', rw);
        oval.attr('ry', rh);
        if (type.edgeCol != null) {
            oval.attr('stroke', type.edgeCol);
            oval.attr('stroke-width', type.thickness);
            oval.attr('stroke-linecap', 'square');
        }
        else
            oval.attr('stroke', 'none');
        oval.attr('fill', type.fillCol == null ? 'none' : type.fillCol);
    }
    svgOvalN(svg, p, pos, sz) {
        let type = this.typeObj[p[1]];
        let x = p[2], y = p[3];
        let w = p[4], h = p[5];
        let g = $('<g></g>').appendTo(svg);
        if (type.edgeCol != null) {
            g.attr('stroke', type.edgeCol);
            g.attr('stroke-width', type.thickness);
            g.attr('stroke-linecap', 'square');
        }
        else
            g.attr('stroke', 'none');
        g.attr('fill', type.fillCol == null ? 'none' : type.fillCol);
        for (let n = 0; n < sz; n++) {
            let p = this.prims[pos + n];
            let cx = p[2], cy = p[3];
            let rw = p[4], rh = p[5];
            cx = this.offsetX + this.scale * cx;
            cy = this.offsetY + this.scale * cy;
            rw *= this.scale;
            rh *= this.scale;
            let oval = $('<ellipse></ellipse>').appendTo(g);
            oval.attr('cx', cx);
            oval.attr('cy', cy);
            oval.attr('rx', rw);
            oval.attr('ry', rh);
        }
    }
    svgPath(svg, p) {
        let type = this.typeObj[p[1]];
        let npts = p[2];
        if (npts == 0)
            return;
        let x = p[3].slice(0), y = p[4].slice(0);
        let ctrl = p[5];
        let isClosed = p[6];
        for (let n = 0; n < npts; n++) {
            x[n] = this.offsetX + this.scale * x[n];
            y[n] = this.offsetY + this.scale * y[n];
        }
        let shape = 'M ' + x[0] + ' ' + y[0];
        let n = 1;
        while (n < npts) {
            if (!ctrl || !ctrl[n]) {
                shape += ' L ' + x[n] + ' ' + y[n];
                n++;
            }
            else if (ctrl[n] && n < npts - 1 && !ctrl[n + 1]) {
                shape += ' Q ' + x[n] + ' ' + y[n] + ' ' + x[n + 1] + ' ' + y[n + 1];
                n += 2;
            }
            else if (ctrl[n] && n < npts - 2 && ctrl[n + 1] && !ctrl[n + 2]) {
                shape += ' C ' + x[n] + ' ' + y[n] + ' ' + x[n + 1] + ' ' + y[n + 1] + ' ' + x[n + 2] + ' ' + y[n + 2];
                n += 3;
            }
            else
                n++;
        }
        if (isClosed)
            shape += ' Z';
        let path = $('<path></path>').appendTo(svg);
        path.attr('d', shape);
        if (type.edgeCol != null) {
            path.attr('stroke', type.edgeCol);
            path.attr('stroke-width', type.thickness);
            path.attr('stroke-linejoin', type.hardEdge ? 'miter' : 'round');
            path.attr('stroke-linecap', type.hardEdge ? 'square' : 'round');
        }
        else
            path.attr('stroke', 'none');
        path.attr('fill', type.fillCol == null ? 'none' : type.fillCol);
    }
    svgText(svg, p) {
        let type = this.typeObj[p[1]];
        let x = p[2], y = p[3];
        let txt = p[4];
        let sz = type.size;
        let fill = type.colour;
        x = this.offsetX + this.scale * x;
        y = this.offsetY + this.scale * y;
        let font = FontData.main;
        let scale = sz / font.UNITS_PER_EM;
        let gdelta = $('<g></g>').appendTo(svg);
        gdelta.attr('transform', 'translate(' + x + ',' + y + ')');
        gdelta.attr('fill', fill);
        let gscale = $('<g></g>').appendTo(gdelta);
        gscale.attr('transform', 'scale(' + scale + ',' + (-scale) + ')');
        let dx = 0;
        for (let n = 0; n < txt.length; n++) {
            let i = txt.charCodeAt(n) - font.GLYPH_MIN;
            if (i >= 0 && i < font.GLYPH_COUNT) {
                let use = $('<use></use>').appendTo(gscale);
                use.attr('xlink:href', '#char' + i);
                use.attr('x', dx);
                dx += font.HORIZ_ADV_X[i];
                if (n < txt.length - 1) {
                    let j = txt.charAt(n + 1) - font.GLYPH_MIN;
                    dx += font.getKerning(i, j);
                }
            }
            else
                dx += font.MISSING_HORZ;
        }
    }
    findOrCreateType(typeDef) {
        for (let i = 0; i < this.types.length; i++) {
            if (this.types[i].length != typeDef.length)
                continue;
            let match = true;
            for (let j = 0; j < typeDef.length; j++)
                if (typeDef[j] != this.types[i][j]) {
                    match = false;
                    break;
                }
            if (match)
                return i;
        }
        this.types.push(typeDef);
        return this.types.length - 1;
    }
    updateBounds(x, y) {
        if (this.lowX == null) {
            this.lowX = x;
            this.lowY = y;
            this.highX = x;
            this.highY = y;
            return;
        }
        this.lowX = Math.min(this.lowX, x);
        this.lowY = Math.min(this.lowY, y);
        this.highX = Math.max(this.highX, x);
        this.highY = Math.max(this.highY, y);
    }
}
MetaVector.NOCOLOUR = -1;
var Geometry;
(function (Geometry) {
    Geometry[Geometry["Linear"] = 0] = "Linear";
    Geometry[Geometry["Bent"] = 1] = "Bent";
    Geometry[Geometry["Trigonal"] = 2] = "Trigonal";
    Geometry[Geometry["Tetra1"] = 3] = "Tetra1";
    Geometry[Geometry["Tetra2"] = 4] = "Tetra2";
    Geometry[Geometry["SqPlan"] = 5] = "SqPlan";
    Geometry[Geometry["BasePyram"] = 6] = "BasePyram";
    Geometry[Geometry["TrigBip"] = 7] = "TrigBip";
    Geometry[Geometry["Octa1"] = 8] = "Octa1";
    Geometry[Geometry["Octa2"] = 9] = "Octa2";
})(Geometry || (Geometry = {}));
class SketchUtil {
    static placeNewAtom(mol, el) {
        let box = mol.boundary();
        let x = box.maxX() + Molecule.IDEALBOND, y = box.maxY();
        return mol.addAtom(el, x, y);
    }
    static placeNewFragment(mol, frag) {
        if (frag.numAtoms == 0)
            return;
        let dirX = [1, 0, -1, 1, -1, 1, 0, -1], dirY = [1, 1, 1, 0, 0, -1, -1, -1];
        let dx = Vec.numberArray(0, 8), dy = Vec.numberArray(0, 8), score = Vec.numberArray(0, 8);
        let mbox = mol.boundary(), fbox = frag.boundary();
        for (let n = 0; n < 8; n++) {
            let vx = dirX[n], vy = dirY[n];
            if (n == 0 || n == 3 || n == 5)
                dx[n] = mbox.minX() - fbox.maxX();
            else if (n == 2 || n == 4 || n == 7)
                dx[n] = mbox.maxX() - fbox.minX();
            else
                dx[n] = 0.5 * (mbox.minX() + mbox.maxX() - fbox.minX() - fbox.maxX());
            if (n == 5 || n == 6 || n == 7)
                dy[n] = mbox.minY() - fbox.maxY();
            else if (n == 0 || n == 1 || n == 2)
                dy[n] = mbox.maxY() - fbox.minY();
            else
                dy[n] = 0.5 * (mbox.minY() + mbox.maxY() - fbox.minY() - fbox.maxY());
            dx[n] -= vx;
            dy[n] -= vy;
            score[n] = SketchUtil.fragPosScore(mol, frag, dx[n], dy[n]);
            vx *= 0.25;
            vy *= 0.25;
            for (let iter = 100; iter > 0; iter--) {
                let iscore = SketchUtil.fragPosScore(mol, frag, dx[n] + vx, dy[n] + vy);
                if (iscore <= score[n])
                    break;
                score[n] = iscore;
                dx[n] += vx;
                dy[n] += vy;
            }
            for (let iter = 100; iter > 0; iter--)
                for (let d = 0; d < 8; d++) {
                    vx = dirX[d] * 0.1;
                    vy = dirY[d] * 0.1;
                    let iscore = SketchUtil.fragPosScore(mol, frag, dx[n] + vx, dy[n] + vy);
                    if (iscore <= score[n])
                        break;
                    score[n] = iscore;
                    dx[n] += vx;
                    dy[n] += vy;
                }
        }
        let best = 0;
        for (let n = 1; n < 8; n++)
            if (score[n] > score[best])
                best = n;
        frag = frag.clone();
        for (let n = 1; n <= frag.numAtoms; n++)
            frag.setAtomPos(n, frag.atomX(n) + dx[best], frag.atomY(n) + dy[best]);
        mol.append(frag);
    }
    static fragPosScore(mol, frag, dx, dy) {
        let score = 0;
        for (let i = 1; i <= mol.numAtoms; i++)
            for (let j = 1; j <= frag.numAtoms; j++) {
                let ox = frag.atomX(j) + dx - mol.atomX(i), oy = frag.atomY(j) + dy - mol.atomY(i);
                let dist2 = ox * ox + oy * oy;
                if (dist2 < 1)
                    return 0;
                score += 1 / dist2;
            }
        let mbox = mol.boundary(), fbox = frag.boundary();
        let minX = Math.min(fbox.minX() + dx, mbox.minX()), maxX = Math.max(fbox.maxX() + dx, mbox.maxX());
        let minY = Math.min(fbox.minY() + dy, mbox.minY()), maxY = Math.max(fbox.maxY() + dy, mbox.maxY());
        let rangeX = Math.max(1, maxX - minX), rangeY = Math.max(1, maxY - minY);
        let ratio = Math.max(rangeX / rangeY, rangeY / rangeX);
        return score / ratio;
    }
    static mergeOverlappingAtoms(mol) {
        return SketchUtil.mergeFragmentsDiv(mol, 0);
    }
    static mergeFragmentsDiv(mol, div) {
        const na = mol.numAtoms;
        let omask = CoordUtil.overlappingAtomMask(mol);
        let chopmask = Vec.booleanArray(false, na);
        let mx = MolUtil.arrayAtomX(mol), my = MolUtil.arrayAtomY(mol);
        let remap = [];
        for (let n = 0; n < na; n++)
            remap.push(n + 1);
        let div1 = div, div2 = div + 1;
        if (div == 0)
            div1 = na;
        for (let i = 1; i <= div1; i++)
            if (omask[i - 1] && !chopmask[i - 1]) {
                if (div == 0)
                    div2 = i + 1;
                for (let j = div2; j <= na; j++)
                    if (omask[j - 1] && !chopmask[j - 1]) {
                        if (norm2_xy(mx[i - 1] - mx[j - 1], my[i - 1] - my[j - 1]) > CoordUtil.OVERLAP_THRESHOLD_SQ)
                            continue;
                        let oldN = j, newN = i;
                        let exotic = [0, 0];
                        for (let k = 0; k < 2; k++) {
                            let a = k == 0 ? i : j;
                            exotic[k] = (mol.atomElement(a) == 'C' ? 0 : 1)
                                + (mol.atomElement(a) == 'X' ? -100 : 0)
                                + (mol.atomCharge(a) != 0 ? 1 : 0)
                                + (mol.atomUnpaired(a) != 0 ? 1 : 0)
                                + (mol.atomIsotope(a) != Molecule.ISOTOPE_NATURAL ? 1 : 0)
                                + (mol.atomHExplicit(a) != Molecule.HEXPLICIT_UNKNOWN ? 1 : 0)
                                + (MolUtil.hasAbbrev(mol, a) ? 1000 : 0);
                        }
                        if (exotic[1] > exotic[0]) {
                            oldN = i;
                            newN = j;
                        }
                        for (let n = 1; n <= mol.numBonds; n++) {
                            if (mol.bondFrom(n) == oldN)
                                mol.setBondFrom(n, newN);
                            if (mol.bondTo(n) == oldN)
                                mol.setBondTo(n, newN);
                        }
                        chopmask[oldN - 1] = true;
                        remap[oldN - 1] = newN;
                    }
            }
        for (let n = na; n >= 1; n--)
            if (chopmask[n - 1]) {
                if (n <= div)
                    div--;
                mol.deleteAtomAndBonds(n);
                for (let i = 0; i < na; i++)
                    if (remap[i] > n)
                        remap[i]--;
            }
        for (let n = mol.numAtoms; n > div; n--)
            if (mol.atomElement(n) == 'X') {
                mol.deleteAtomAndBonds(n);
                for (let i = 0; i < na; i++)
                    if (remap[i] > n)
                        remap[i]--;
            }
        MolUtil.removeDuplicateBonds(mol);
        return remap;
    }
    static mergeFragmentsMask(mol, mask) {
        let chopmask = Vec.booleanArray(false, mol.numAtoms);
        let na = mol.numAtoms;
        let mx = MolUtil.arrayAtomX(mol), my = MolUtil.arrayAtomY(mol);
        for (let i = 1; i <= na; i++)
            if (mask[i - 1])
                for (let j = 1; j <= na; j++)
                    if (!mask[j - 1] && !chopmask[j - 1])
                        if (norm2_xy(mx[i - 1] - mx[j - 1], my[i - 1] - my[j - 1]) < CoordUtil.OVERLAP_THRESHOLD_SQ) {
                            let oldN = j, newN = i;
                            if (mol.atomElement(i) == 'C' && mol.atomElement(j) != 'C' && mol.atomElement(j) != 'X') {
                                oldN = i;
                                newN = j;
                            }
                            for (let n = 1; n <= mol.numBonds; n++) {
                                if (mol.bondFrom(n) == oldN)
                                    mol.setBondFrom(n, newN);
                                if (mol.bondTo(n) == oldN)
                                    mol.setBondTo(n, newN);
                            }
                            chopmask[oldN - 1] = true;
                        }
        for (let n = chopmask.length; n >= 1; n--)
            if (chopmask[n - 1])
                mol.deleteAtomAndBonds(n);
        MolUtil.removeDuplicateBonds(mol);
    }
    static matchAngleGeometry(geom, theta) {
        if (theta.length <= 1)
            return true;
        let match = SketchUtil.GEOM_ANGLES[geom], mtheta = Vec.numberArray(0, theta.length);
        let hit = Vec.booleanArray(false, match.length);
        for (let n = 0; n < theta.length; n++)
            for (let s = 1; s >= -1; s -= 2) {
                for (let i = 0; i < theta.length; i++)
                    mtheta[i] = (theta[i] - theta[0]) * s;
                Vec.setTo(hit, false);
                let gotall = true;
                for (let i = 0; i < mtheta.length; i++) {
                    let got = false;
                    for (let j = 0; j < match.length; j++)
                        if (!hit[j] && Math.abs(angleDiff(mtheta[i], match[j])) < 3 * DEGRAD) {
                            hit[j] = true;
                            got = true;
                            break;
                        }
                    if (!got) {
                        gotall = false;
                        break;
                    }
                }
                if (gotall)
                    return true;
            }
        return false;
    }
    static primeDirections(mol, atom) {
        let angles = SketchUtil.calculateNewBondAngles(mol, atom, 1);
        let exits = SketchUtil.exitVectors(mol, atom);
        return GeomUtil.uniqueAngles(angles.concat(exits), 2 * DEGRAD);
    }
    static exitVectors(mol, atom) {
        let adj = mol.atomAdjList(atom), sz = adj.length;
        if (sz == 0)
            return [0, 90 * DEGRAD, 180 * DEGRAD, -90 * DEGRAD];
        if (sz == 1)
            return [];
        let ret = [];
        let ang = GeomUtil.sortAngles(CoordUtil.atomBondAngles(mol, atom, adj));
        for (let n = 0; n < sz; n++) {
            let nn = n < sz - 1 ? n + 1 : 0;
            ret.push(angleNorm(ang[n] + 0.5 * angleDiffPos(ang[nn], ang[n])));
        }
        return ret;
    }
    static calculateNewBondAngles(mol, atom, order) {
        let adj = mol.atomAdjList(atom);
        const sz = adj.length;
        if (sz == 0) {
            let atno = mol.atomicNumber(atom), atblk = Chemistry.ELEMENT_BLOCKS[atno];
            if (atblk <= 2)
                return [0, 90 * DEGRAD, 180 * DEGRAD, -90 * DEGRAD];
            else
                return [90 * DEGRAD, -90 * DEGRAD, 30 * DEGRAD, 150 * DEGRAD, 210 * DEGRAD, -30 * DEGRAD, 180 * DEGRAD, 0 * DEGRAD];
        }
        let geom = SketchUtil.guessAtomGeometry(mol, atom, order);
        let ang = CoordUtil.atomBondAngles(mol, atom, adj);
        for (let n = 0; n < geom.length; n++) {
            let ret = SketchUtil.mapAngleSubstituent(geom[n], ang);
            if (ret != null)
                return ret;
        }
        return [];
    }
    static guessAtomGeometry(mol, atom, order) {
        let adj = mol.atomAdjList(atom);
        let sz = adj.length, atno = mol.atomicNumber(atom);
        let atblk = Chemistry.ELEMENT_BLOCKS[atno], elrow = Chemistry.ELEMENT_ROWS[atno];
        let el = mol.atomElement(atom);
        let adjBO = [], adjAN = [], pri = [];
        let allSingle = true;
        for (let n = 0; n < sz; n++) {
            adjBO.push(mol.bondOrder(mol.findBond(atom, adj[n])));
            adjAN.push(mol.atomicNumber(adj[n]));
            pri.push(adjBO[n] * 200 + adjAN[n]);
            if (adjBO[n] != 1)
                allSingle = true;
        }
        for (let p = 0; p < sz - 1;) {
            if (pri[p] > pri[p + 1]) {
                Vec.swap(adj, p, p + 1);
                Vec.swap(adjBO, p, p + 1);
                Vec.swap(adjAN, p, p + 1);
                Vec.swap(pri, p, p + 1);
                if (p > 0)
                    p--;
            }
            else
                p++;
        }
        let ang = CoordUtil.atomBondAngles(mol, atom, adj);
        if (sz == 1) {
            if (el == 'C' || el == 'N') {
                if (adjBO[0] == 2 && order == 2)
                    return [Geometry.Linear];
                if ((adjBO[0] == 3 && order == 1) || (adjBO[0] == 1 && order == 3))
                    return [Geometry.Linear];
            }
            if (atblk > 2)
                return [Geometry.Octa1, Geometry.Octa2];
            if (order != 0 && (el == 'C' || el == 'N' || el == 'O'))
                return [Geometry.Trigonal];
            return [Geometry.Trigonal, Geometry.Linear];
        }
        if (sz == 2 && Math.abs(angleDiff(ang[0], ang[1])) >= 175 * DEGRAD) {
            if (atblk <= 2)
                return [Geometry.SqPlan];
            else
                return [Geometry.Octa1, Geometry.Octa2];
        }
        let geom = [];
        if (atblk == 0)
            geom = [Geometry.Trigonal, Geometry.SqPlan];
        else if (atblk == 1)
            geom = [Geometry.Trigonal, Geometry.SqPlan, Geometry.Octa1, Geometry.Octa2];
        else if (atblk == 2) {
            geom.push(Geometry.Trigonal);
            if (el == 'C' && allSingle) {
                geom.push(Geometry.Tetra1);
                geom.push(Geometry.Tetra2);
                geom.push(Geometry.SqPlan);
            }
            else if (el == 'C' && !allSingle) {
            }
            else if (elrow <= 3) {
                geom.push(Geometry.Tetra1);
                geom.push(Geometry.Tetra2);
                geom.push(Geometry.SqPlan);
            }
            else {
                geom.push(Geometry.Tetra1);
                geom.push(Geometry.Tetra2);
                geom.push(Geometry.SqPlan);
                geom.push(Geometry.Octa1);
                geom.push(Geometry.Octa2);
            }
        }
        else {
            geom.push(Geometry.Octa1);
            geom.push(Geometry.Octa2);
        }
        for (let n = geom.length - 1; n >= 0; n--) {
            if (!SketchUtil.matchAngleGeometry(geom[n], ang))
                geom.splice(n, 1);
        }
        return geom;
    }
    static mapAngleSubstituent(geom, ang) {
        let gtheta = SketchUtil.GEOM_ANGLES[geom];
        const asz = ang.length, gsz = gtheta.length;
        if (asz >= gsz)
            return null;
        if (asz == 0)
            return gtheta.slice(0);
        let vac = [];
        for (let n = 0; n < asz; n++)
            for (let k = 0; k < gsz; k++)
                for (let s = 1; s >= -1; s -= 2) {
                    let gang = [];
                    for (let i = 0; i < gsz; i++)
                        gang.push(angleNorm(ang[n] + s * (gtheta[i] - gtheta[k])));
                    let mask = Vec.booleanArray(false, gsz);
                    let mcount = 0;
                    for (let i = 0; i < gsz; i++)
                        if (!mask[i])
                            for (let j = 0; j < asz; j++)
                                if (Math.abs(angleDiff(gang[i], ang[j])) < 3 * DEGRAD) {
                                    mask[i] = true;
                                    mcount++;
                                    break;
                                }
                    if (mcount != asz)
                        continue;
                    for (let i = 0; i < gsz; i++)
                        if (!mask[i])
                            vac.push(gang[i]);
                }
        if (vac.length == 0)
            return null;
        vac = GeomUtil.sortAngles(vac);
        for (let n = 0; n < vac.length - 1; n++) {
            let th1 = vac[n], th2 = vac[n + 1], dth = angleDiff(th2, th1);
            if (Math.abs(dth) < 5 * DEGRAD) {
                vac[n] = th1 + 0.5 * dth;
                vac.splice(n + 1, 1);
                n--;
            }
        }
        return vac;
    }
    static refitAtomGeometry(mol, atom, geom) {
        let gtheta = SketchUtil.GEOM_ANGLES[geom];
        let gsz = gtheta.length;
        let adj = mol.atomAdjList(atom);
        let asz = adj.length;
        if (asz <= 1 || asz > gsz)
            return null;
        let ang = CoordUtil.atomBondAngles(mol, atom, adj);
        let inRing = Vec.booleanArray(false, asz);
        let allInRing = true;
        for (let n = 0; n < asz; n++) {
            inRing[n] = mol.bondInRing(mol.findBond(atom, adj[n]));
            if (!inRing[n])
                allInRing = false;
        }
        if (allInRing)
            return null;
        let bestAng = null;
        let bestScore = 0;
        let ww = MolUtil.calculateWalkWeight(mol, atom);
        for (let i = 0; i < gsz; i++)
            for (let j = 0; j < asz; j++)
                for (let s = 1; s >= -1; s -= 2) {
                    let newAng = Vec.numberArray(0, asz);
                    let mask = Vec.booleanArray(false, gsz);
                    for (let n1 = 0; n1 < asz; n1++) {
                        let best = -1;
                        let bdiff = 0;
                        for (let n2 = 0; n2 < gsz; n2++)
                            if (!mask[n2]) {
                                let th = angleNorm(gtheta[n2] * s - gtheta[i] + ang[j]);
                                let diff = Math.abs(angleDiff(th, ang[n1]));
                                if (best < 0 || diff < bdiff) {
                                    best = n2;
                                    bdiff = diff;
                                    newAng[n1] = th;
                                }
                            }
                        mask[best] = true;
                    }
                    let ringClash = false;
                    for (let n = 0; n < asz; n++)
                        if (inRing[n] && Math.abs(angleDiff(newAng[n], ang[n])) > 2 * DEGRAD) {
                            ringClash = true;
                            break;
                        }
                    if (ringClash)
                        continue;
                    let score = 0;
                    for (let n = 0; n < asz; n++)
                        score += ww[adj[n] - 1] * Math.abs(angleDiff(newAng[n], ang[n]));
                    if (bestAng == null || score < bestScore) {
                        bestAng = newAng;
                        bestScore = score;
                    }
                }
        if (bestAng == null)
            return null;
        let same = true;
        for (let n = 0; n < asz; n++)
            if (Math.abs(angleDiff(bestAng[n], ang[n])) > 2 * DEGRAD) {
                same = false;
                break;
            }
        if (same)
            return null;
        mol = mol.clone();
        for (let n = 0; n < asz; n++)
            if (!inRing[n])
                CoordUtil.rotateBond(mol, atom, adj[n], bestAng[n] - ang[n]);
        return mol;
    }
    static switchAtomGeometry(mol, src, dst, geoms) {
        let bestAtom = 0;
        let bestAng = 0, bestX = 0, bestY = 0;
        let adj = mol.atomAdjList(src);
        let ang = CoordUtil.atomBondAngles(mol, src, adj), theta = Vec.numberArray(0, ang.length - 1);
        let cx = mol.atomX(src), cy = mol.atomY(src);
        for (let i = 0; i < dst.length; i++) {
            let a = adj.indexOf(dst[i]);
            let curth = ang[a];
            for (let n = 0, p = 0; n < adj.length; n++)
                if (n != a)
                    theta[p++] = ang[n];
            let r = norm_xy(mol.atomX(dst[i]) - cx, mol.atomY(dst[i]) - cy);
            for (let j = 0; j < geoms.length; j++) {
                if (adj.length >= SketchUtil.GEOM_ANGLES[geoms[j]].length)
                    continue;
                let newAng = SketchUtil.mapAngleSubstituent(geoms[j], theta);
                if (newAng != null)
                    for (let n = 0; n < newAng.length; n++) {
                        let dth = angleDiff(newAng[n], curth);
                        if (Math.abs(dth) < 3 * DEGRAD)
                            continue;
                        if (dth < 0)
                            dth += TWOPI;
                        if (bestAtom == 0 || dth < bestAng - 2 * DEGRAD || (dth < bestAng + 2 * DEGRAD && dst[i] < bestAtom)) {
                            let x = cx + r * Math.cos(newAng[n]);
                            let y = cy + r * Math.sin(newAng[n]);
                            if (CoordUtil.atomAtPoint(mol, x, y) != 0)
                                continue;
                            bestAtom = dst[i];
                            bestAng = dth;
                            bestX = x;
                            bestY = y;
                        }
                    }
                break;
            }
        }
        if (bestAtom == 0)
            return null;
        mol = mol.clone();
        mol.setAtomPos(bestAtom, bestX, bestY);
        return mol;
    }
    static pickAtomsToConnect(mol, aidx) {
        if (aidx.length < 2)
            return null;
        if (aidx.length == 2) {
            if (mol.findBond(aidx[0], aidx[1]) > 0)
                return null;
            return aidx;
        }
        const AUTO_DSQ = sqr(Molecule.IDEALBOND + 0.1);
        let bestDSQ = Number.MAX_VALUE;
        let bestA1 = 0, bestA2 = 0;
        let conn = [];
        for (let i = 0; i < aidx.length - 1; i++)
            for (let j = i + 1; j < aidx.length; j++) {
                if (mol.findBond(aidx[i], aidx[j]) > 0)
                    continue;
                let dsq = norm2_xy(mol.atomX(aidx[i]) - mol.atomX(aidx[j]), mol.atomY(aidx[i]) - mol.atomY(aidx[j]));
                if (dsq < AUTO_DSQ) {
                    conn.push(aidx[i]);
                    conn.push(aidx[j]);
                }
                else if (dsq < bestDSQ) {
                    bestDSQ = dsq;
                    bestA1 = aidx[i];
                    bestA2 = aidx[j];
                }
            }
        if (conn.length == 0 && bestA1 != 0) {
            conn.push(bestA1);
            conn.push(bestA2);
        }
        return conn.length == 0 ? null : conn;
    }
    static pickNewAtomDirection(mol, atom, theta) {
        if (theta.length == 1)
            return theta[0];
        let bestTheta = theta[0], bestScore = Number.MAX_VALUE;
        for (let n = 0; n < theta.length; n++) {
            let px = mol.atomX(atom) + Molecule.IDEALBOND * Math.cos(theta[n]);
            let py = mol.atomY(atom) + Molecule.IDEALBOND * Math.sin(theta[n]);
            let score = CoordUtil.congestionPoint(mol, px, py);
            if (score > bestScore)
                continue;
            if (CoordUtil.overlapsAtom(mol, px, py, 0.2))
                score += 1E5;
            if (score < bestScore) {
                bestTheta = theta[n];
                bestScore = score;
            }
        }
        return bestTheta;
    }
    static joinOverlappingAtoms(mol, mask) {
        mol = mol.clone();
        mask = mask.slice(0);
        const na = mol.numAtoms;
        let mx = MolUtil.arrayAtomX(mol), my = MolUtil.arrayAtomY(mol);
        let groups = [];
        let groupX = [], groupY = [];
        for (let i = 0; i < na - 1; i++)
            if (mask[i]) {
                let g = [i + 1];
                let x = mx[i], y = my[i];
                for (let j = i + 1; j < na; j++)
                    if (mask[j]) {
                        if (norm2_xy(mx[j] - mx[i], my[j] - my[i]) > CoordUtil.OVERLAP_THRESHOLD_SQ)
                            continue;
                        g.push(j + 1);
                        x += mx[j];
                        y += my[j];
                        let adjb = mol.atomAdjBonds(j + 1);
                        for (let n = 0; n < adjb.length; n++) {
                            if (mol.bondFrom(adjb[n]) == j + 1)
                                mol.setBondFrom(adjb[n], i + 1);
                            else if (mol.bondTo(adjb[n]) == j + 1)
                                mol.setBondTo(adjb[n], i + 1);
                        }
                    }
                if (g.length == 1)
                    continue;
                groups.push(g);
                groupX.push(x / g.length);
                groupY.push(y / g.length);
            }
        if (groups.length == 0)
            return null;
        let keepmask = Vec.booleanArray(true, na);
        for (let n = 0; n < groups.length; n++) {
            let g = groups[n];
            mol.setAtomPos(g[0], groupX[n], groupY[n]);
            for (let i = 1; i < g.length; i++)
                keepmask[g[i] - 1] = false;
        }
        mol = MolUtil.subgraphMask(mol, keepmask);
        MolUtil.removeDuplicateBonds(mol);
        return mol;
    }
    static moveToEdge(mol, mask, dx, dy) {
        let gotS = false, gotN = false;
        let sx1 = 0, sy1 = 0, sx2 = 0, sy2 = 0;
        let nx1 = 0, ny1 = 0, nx2 = 0, ny2 = 0;
        for (let n = 1; n <= mol.numAtoms; n++) {
            let x = mol.atomX(n), y = mol.atomY(n);
            if (mask[n - 1]) {
                if (!gotS || x < sx1)
                    sx1 = x;
                if (!gotS || y < sy1)
                    sy1 = y;
                if (!gotS || x > sx2)
                    sx2 = x;
                if (!gotS || y > sy2)
                    sy2 = y;
                gotS = true;
            }
            else {
                if (!gotN || x < nx1)
                    nx1 = x;
                if (!gotN || y < ny1)
                    ny1 = y;
                if (!gotN || x > nx2)
                    nx2 = x;
                if (!gotN || y > ny2)
                    ny2 = y;
                gotN = true;
            }
        }
        const SEPARATE = 1.0, SEPTEST = 0.9;
        if ((dx < 0 && dy == 0 && sx2 <= nx1 - SEPTEST) ||
            (dx > 0 && dy == 0 && sx1 >= nx2 + SEPTEST) ||
            (dx == 0 && dy < 0 && sy2 <= ny1 - SEPTEST) ||
            (dx == 0 && dy > 0 && sy1 >= ny2 + SEPTEST)) {
            return null;
        }
        mol = mol.clone();
        let ox = 0, oy = 0;
        if (dx < 0)
            ox = nx1 - sx2 - SEPARATE;
        if (dx > 0)
            ox = nx2 - sx1 + SEPARATE;
        if (dy < 0)
            oy = ny1 - sy2 - SEPARATE;
        if (dy > 0)
            oy = ny2 - sy1 + SEPARATE;
        for (let n = 1; n <= mol.numAtoms; n++)
            if (mask[n - 1])
                mol.setAtomPos(n, mol.atomX(n) + ox, mol.atomY(n) + oy);
        return mol;
    }
    static placeAdditionalHydrogens(mol, atom, numH) {
        let base = mol.numAtoms;
        const x0 = mol.atomX(atom), y0 = mol.atomY(atom);
        let adj = mol.atomAdjList(atom);
        if (adj.length == 2 && numH == 2) {
            const th1 = Math.atan2(mol.atomY(adj[0]) - y0, mol.atomX(adj[0]) - x0);
            const th2 = Math.atan2(mol.atomY(adj[1]) - y0, mol.atomX(adj[1]) - x0);
            if (Math.abs(angleDiff(th1, th2)) < 170 * DEGRAD) {
                let theta = 0.5 * (th1 + th2) + Math.PI;
                let th3 = theta - 30 * DEGRAD, th4 = theta + 30 * DEGRAD;
                mol.addAtom("H", x0 + Molecule.IDEALBOND * Math.cos(th3), y0 + Molecule.IDEALBOND * Math.sin(th3));
                mol.addAtom("H", x0 + Molecule.IDEALBOND * Math.cos(th4), y0 + Molecule.IDEALBOND * Math.sin(th4));
                mol.addBond(atom, base + 1, 1);
                mol.addBond(atom, base + 2, 1);
                return;
            }
        }
        if (adj.length == 1 && numH == 3) {
            let th1 = Math.atan2(mol.atomY(adj[0]) - y0, mol.atomX(adj[0]) - x0);
            let th2 = th1 + 90 * DEGRAD, th3 = th1 + 180 * DEGRAD, th4 = th1 + 270 * DEGRAD;
            mol.addAtom("H", x0 + Molecule.IDEALBOND * Math.cos(th2), y0 + Molecule.IDEALBOND * Math.sin(th2));
            mol.addAtom("H", x0 + Molecule.IDEALBOND * Math.cos(th3), y0 + Molecule.IDEALBOND * Math.sin(th3));
            mol.addAtom("H", x0 + Molecule.IDEALBOND * Math.cos(th4), y0 + Molecule.IDEALBOND * Math.sin(th4));
            mol.addBond(atom, base + 1, 1);
            mol.addBond(atom, base + 2, 1);
            mol.addBond(atom, base + 3, 1);
            return;
        }
        let theta = SketchUtil.pickNewAtomDirection(mol, atom, SketchUtil.primeDirections(mol, atom));
        mol.addAtom("H", x0 + Molecule.IDEALBOND * Math.cos(theta), y0 + Molecule.IDEALBOND * Math.sin(theta));
        mol.addBond(atom, base + 1, 1);
        if (numH > 1)
            SketchUtil.placeAdditionalHydrogens(mol, atom, numH - 1);
    }
    static allViableDirections(mol, atom, order) {
        if (mol.atomAdjCount(atom) == 0) {
            let angles = [];
            for (let n = 0; n < 12; n++)
                angles.push(30 * DEGRAD);
            return angles;
        }
        let adj = mol.atomAdjList(atom);
        let angles = SketchUtil.exitVectors(mol, atom);
        let geom = SketchUtil.guessAtomGeometry(mol, atom, order);
        if (adj.length == 1 && geom.indexOf(Geometry.Linear) < 0)
            geom.push(Geometry.Linear);
        let bndang = CoordUtil.atomBondAngles(mol, atom, adj);
        for (let g of geom) {
            let map = SketchUtil.mapAngleSubstituent(g, bndang);
            if (map != null)
                for (let th of map)
                    angles.push(th);
        }
        return GeomUtil.uniqueAngles(angles, 2 * DEGRAD);
    }
    static proposeNewRing(mol, rsz, x, y, dx, dy, snap) {
        let theta = Math.atan2(dy, dx);
        if (snap) {
            const chunk = 30 * DEGRAD;
            theta = Math.round(theta / chunk) * chunk;
        }
        return SketchUtil.positionSimpleRing(mol, rsz, x, y, theta);
    }
    static proposeAtomRing(mol, rsz, atom, dx, dy) {
        let thsnap = [];
        let cx = mol.atomX(atom), cy = mol.atomY(atom);
        if (mol.atomAdjCount(atom) == 0) {
            for (let n = 0; n < 12; n++)
                thsnap.push(TWOPI * n / 12);
        }
        else if (mol.atomAdjCount(atom) == 1) {
            let nbr = mol.atomAdjList(atom)[0];
            thsnap.push(angleNorm(Math.atan2(mol.atomY(nbr) - cy, mol.atomX(nbr) - cx) + Math.PI));
        }
        else {
            let angs = [];
            for (let nbr of mol.atomAdjList(atom))
                angs.push(Math.atan2(mol.atomY(nbr) - cy, mol.atomX(nbr) - cx));
            angs = sortAngles(angs);
            for (let n = 0; n < angs.length; n++) {
                let th1 = angs[n], th2 = angs[n < angs.length - 1 ? n + 1 : 0];
                thsnap.push(th1 + 0.5 * angleDiffPos(th2, th1));
            }
        }
        let theta = Math.atan2(dy, dx);
        var bestTheta = 0, bestDelta = Number.MAX_VALUE;
        for (let th of thsnap) {
            let delta = Math.abs(angleDiff(th, theta));
            if (delta < bestDelta) {
                bestTheta = th;
                bestDelta = delta;
            }
        }
        return SketchUtil.positionSimpleRing(mol, rsz, mol.atomX(atom), mol.atomY(atom), bestTheta);
    }
    static proposeBondRing(mol, rsz, bond, dx, dy) {
        let bfr = mol.bondFrom(bond), bto = mol.bondTo(bond);
        let bx = mol.atomX(bto) - mol.atomX(bfr), by = mol.atomY(bto) - mol.atomY(bfr);
        let sign = dx * by - dy * bx;
        let delta = sign > 0 ? -90 * DEGRAD : 90 * DEGRAD;
        let theta = Math.atan2(by, bx) + delta;
        let dth = TWOPI / rsz;
        let rad = Molecule.IDEALBOND / (2.0 * Math.sin(0.5 * dth)), brad = rad * Math.cos(0.5 * dth);
        let cx = 0.5 * (mol.atomX(bfr) + mol.atomX(bto)) + brad * Math.cos(theta);
        let cy = 0.5 * (mol.atomY(bfr) + mol.atomY(bto)) + brad * Math.sin(theta);
        let rx = [], ry = [];
        for (let n = 0; n < rsz; n++) {
            let th = theta - Math.PI + (n - 0.5) * dth;
            rx.push(cx + Math.cos(th) * rad);
            ry.push(cy + Math.sin(th) * rad);
        }
        let [i1, i2] = sign < 0 ? [bfr, bto] : [bto, bfr];
        rx[0] = mol.atomX(i1);
        ry[0] = mol.atomY(i1);
        rx[1] = mol.atomX(i2);
        ry[1] = mol.atomY(i2);
        return [rx, ry];
    }
    static positionSimpleRing(mol, rsz, x, y, theta) {
        let dth = TWOPI / rsz;
        let rad = Molecule.IDEALBOND / (2 * Math.sin(0.5 * dth));
        let cx = x + rad * Math.cos(theta), cy = y + rad * Math.sin(theta);
        let rx = [], ry = [];
        for (let n = 0; n < rsz; n++) {
            let th = theta - Math.PI + n * dth;
            rx.push(cx + Math.cos(th) * rad);
            ry.push(cy + Math.sin(th) * rad);
        }
        return [rx, ry];
    }
    static guidelineSprouts(mol, atom) {
        let sprouts = [];
        let angs = [], ords = [];
        for (let n = 0; n < 3; n++) {
            angs.push(SketchUtil.allViableDirections(mol, atom, n + 1));
            ords.push([n + 1]);
            for (let i = 0; i < n; i++)
                if (angs[i] != null && Vec.equals(angs[n], angs[i])) {
                    angs[n] = null;
                    ords[i].push(n + 1);
                }
        }
        const cx = mol.atomX(atom), cy = mol.atomY(atom);
        for (let n = 0; n < 3; n++)
            if (angs[n] != null) {
                let sprout = {
                    'atom': atom,
                    'orders': ords[n],
                    'x': [],
                    'y': [],
                };
                for (let i = 0; i < angs[n].length; i++) {
                    sprout.x[i] = cx + Math.cos(angs[n][i]) * Molecule.IDEALBOND;
                    sprout.y[i] = cy + Math.sin(angs[n][i]) * Molecule.IDEALBOND;
                }
                sprouts.push(sprout);
            }
        return sprouts;
    }
}
SketchUtil.GEOM_ANGLES = [
    [0, 180 * DEGRAD],
    [0, 120 * DEGRAD],
    [0, 120 * DEGRAD, 240 * DEGRAD],
    [0, 90 * DEGRAD, 150 * DEGRAD, 240 * DEGRAD],
    [0, 120 * DEGRAD, 180 * DEGRAD, 240 * DEGRAD],
    [0, 90 * DEGRAD, 180 * DEGRAD, 270 * DEGRAD],
    [0, 90 * DEGRAD, 150 * DEGRAD, 210 * DEGRAD, 270 * DEGRAD],
    [0, 60 * DEGRAD, 90 * DEGRAD, 180 * DEGRAD, 210 * DEGRAD],
    [0, 60 * DEGRAD, 120 * DEGRAD, 180 * DEGRAD, 240 * DEGRAD, 300 * DEGRAD],
    [0, 45 * DEGRAD, 90 * DEGRAD, 180 * DEGRAD, 225 * DEGRAD, 270 * DEGRAD]
];
class MolUtil {
    static isBlank(mol) {
        if (mol == null)
            return true;
        return mol.numAtoms == 0;
    }
    static notBlank(mol) {
        if (mol == null)
            return false;
        return mol.numAtoms > 0;
    }
    static orBlank(mol) { return mol == null ? new Molecule() : mol; }
    static hasAnyAbbrev(mol) {
        for (let n = 1; n <= mol.numAtoms; n++)
            if (MolUtil.hasAbbrev(mol, n))
                return true;
        return false;
    }
    static hasAbbrev(mol, atom) {
        let extra = mol.atomExtra(atom);
        for (let n = 0; n < (extra == null ? 0 : extra.length); n++)
            if (extra[n].startsWith('a'))
                return true;
        return false;
    }
    static getAbbrev(mol, atom) {
        let extra = mol.atomExtra(atom);
        for (let n = 0; n < (extra != null ? extra.length : 0); n++)
            if (extra[n].startsWith("a")) {
                return Molecule.fromString(extra[n].substring(1));
            }
        return null;
    }
    static setAbbrev(mol, atom, frag) {
        let attidx = 0;
        for (let n = 1; n <= frag.numAtoms; n++)
            if (frag.atomElement(n) == MolUtil.ABBREV_ATTACHMENT) {
                if (attidx > 0)
                    throw 'Multiple attachment points indicated: invalid.';
                attidx = n;
            }
        if (attidx == 0)
            throw 'No attachment points indicated.';
        if (attidx >= 2) {
            frag = frag.clone();
            frag.swapAtoms(attidx, 1);
        }
        let adj = mol.atomAdjList(atom);
        if (adj.length > 1)
            throw 'Setting abbreviation for non-terminal atom.';
        if (frag.atomAdjCount(1) == 1 && mol.atomAdjCount(atom) > 0) {
            let b1 = mol.findBond(atom, mol.atomAdjList(atom)[0]);
            let b2 = frag.findBond(1, frag.atomAdjList(1)[0]);
            mol.setBondOrder(b1, frag.bondOrder(b2));
        }
        let extra = mol.atomExtra(atom);
        let idx = -1;
        for (let n = 0; n < (extra != null ? extra.length : 0); n++)
            if (extra[n].startsWith("a")) {
                idx = n;
                break;
            }
        if (idx < 0)
            idx = extra.push(null) - 1;
        extra[idx] = "a" + frag.toString();
        mol.setAtomExtra(atom, extra);
    }
    static validateAbbrevs(mol) {
        for (let n = 1; n <= mol.numAtoms; n++)
            if (MolUtil.hasAbbrev(mol, n)) {
                if (mol.atomAdjCount(n) > 1)
                    MolUtil.clearAbbrev(mol, n);
                if (mol.atomCharge(n) != 0)
                    mol.setAtomCharge(n, 0);
                if (mol.atomUnpaired(n) != 0)
                    mol.setAtomUnpaired(n, 0);
                if (mol.atomIsotope(n) != 0)
                    mol.setAtomIsotope(n, Molecule.ISOTOPE_NATURAL);
                if (mol.atomHExplicit(n) != Molecule.HEXPLICIT_UNKNOWN)
                    mol.setAtomHExplicit(n, Molecule.HEXPLICIT_UNKNOWN);
            }
    }
    static convertToAbbrev(mol, srcmask, abbrevName) {
        let junction = 0;
        for (let n = 1; n <= mol.numBonds; n++) {
            let b1 = mol.bondFrom(n), b2 = mol.bondTo(n), atom = 0;
            if (srcmask[b1 - 1] && !srcmask[b2 - 1])
                atom = b1;
            else if (!srcmask[b1 - 1] && srcmask[b2 - 1])
                atom = b2;
            if (atom == 0)
                continue;
            if (junction > 0 && atom != junction)
                return null;
            junction = atom;
        }
        if (junction == 0)
            return null;
        let na = mol.numAtoms, molidx = 0, fragidx = 0;
        let maskmol = Vec.booleanArray(false, na), maskfrag = Vec.booleanArray(false, na);
        for (let n = 0; n < na; n++) {
            maskmol[n] = srcmask[n];
            maskfrag[n] = !srcmask[n] || n + 1 == junction;
            if (maskmol[n] && n + 1 <= junction)
                molidx++;
            if (maskfrag[n] && n + 1 <= junction)
                fragidx++;
        }
        let frag = MolUtil.subgraphMask(mol, maskfrag);
        frag.setAtomElement(fragidx, MolUtil.ABBREV_ATTACHMENT);
        frag.setAtomCharge(fragidx, 0);
        frag.setAtomUnpaired(fragidx, 0);
        frag.setAtomHExplicit(fragidx, Molecule.HEXPLICIT_UNKNOWN);
        frag.setAtomMapNum(fragidx, 0);
        frag.setAtomExtra(fragidx, []);
        frag.setAtomTransient(fragidx, []);
        let adj = frag.atomAdjList(fragidx);
        let x = 0, y = 0, inv = 1.0 / adj.length;
        let bondOrder = 1;
        for (let n = 0; n < adj.length; n++) {
            x += frag.atomX(adj[n]);
            y += frag.atomY(adj[n]);
            let b = frag.findBond(fragidx, adj[n]);
            if (n == 0)
                bondOrder = frag.bondOrder(b);
            else if (bondOrder != frag.bondOrder(b))
                bondOrder = 1;
        }
        x *= inv;
        y *= inv;
        let newmol = MolUtil.subgraphMask(mol, maskmol);
        let newatom = newmol.addAtom(abbrevName, x, y);
        newmol.addBond(molidx, newatom, bondOrder);
        MolUtil.setAbbrev(newmol, newatom, frag);
        return newmol;
    }
    static expandAbbrevs(mol, alignCoords) {
        while (true) {
            let anything = false;
            for (let n = 1; n <= mol.numAtoms; n++)
                if (MolUtil.hasAbbrev(mol, n)) {
                    if (MolUtil.expandOneAbbrev(mol, n, alignCoords))
                        anything = true;
                    n--;
                }
            if (!anything)
                break;
        }
    }
    static expandOneAbbrev(mol, atom, alignCoords) {
        let frag = MolUtil.getAbbrev(mol, atom);
        if (frag == null)
            return false;
        if (mol.atomAdjCount(atom) != 1 || frag.numAtoms == 0) {
            MolUtil.clearAbbrev(mol, atom);
            return false;
        }
        let m = mol.atomMapNum(atom);
        if (m > 0)
            for (let n of frag.atomAdjList(1))
                frag.setAtomMapNum(n, m);
        MolUtil.expandOneAbbrevFrag(mol, atom, frag, alignCoords);
        return true;
    }
    static expandOneAbbrevFrag(mol, atom, frag, alignCoords) {
        let nbr = mol.atomAdjCount(atom) == 1 ? mol.atomAdjList(atom)[0] : 0;
        if (alignCoords) {
            let vx1 = mol.atomX(atom) - mol.atomX(nbr), vy1 = mol.atomY(atom) - mol.atomY(nbr);
            let adj = frag.atomAdjList(1);
            let vx2 = 0, vy2 = 0, inv = 1.0 / adj.length;
            for (let n = 0; n < adj.length; n++) {
                vx2 += frag.atomX(adj[n]) - frag.atomX(1);
                vy2 += frag.atomY(adj[n]) - frag.atomY(1);
            }
            vx2 *= inv;
            vy2 *= inv;
            let th1 = Math.atan2(vy1, vx1), th2 = Math.atan2(vy2, vx2);
            CoordUtil.rotateMolecule(frag, th1 - th2);
            CoordUtil.translateMolecule(frag, mol.atomX(nbr) - frag.atomX(1), mol.atomY(nbr) - frag.atomY(1));
        }
        let join = mol.numAtoms + 1;
        mol.append(frag);
        for (let n = 1; n <= mol.numBonds; n++) {
            if (mol.bondFrom(n) == join)
                mol.setBondFrom(n, nbr);
            if (mol.bondTo(n) == join)
                mol.setBondTo(n, nbr);
        }
        mol.deleteAtomAndBonds(join);
        mol.deleteAtomAndBonds(atom);
    }
    static clearAbbrev(mol, atom) {
        let extra = mol.atomExtra(atom);
        for (let n = 0; n < (extra != null ? extra.length : 0); n++)
            if (extra[n].startsWith("a")) {
                extra.splice(n, 1);
                mol.setAtomExtra(atom, extra);
                mol.setAtomElement(atom, 'C');
                return;
            }
    }
    static setAtomElement(mol, atom, el) {
        if (mol.atomElement(atom) == el)
            return;
        this.clearAbbrev(mol, atom);
        mol.setAtomElement(atom, el);
    }
    static addBond(mol, bfr, bto, order, type) {
        if (type == null)
            type = Molecule.BONDTYPE_NORMAL;
        if (mol.atomAdjCount(bfr) >= 1)
            this.clearAbbrev(mol, bfr);
        if (mol.atomAdjCount(bto) >= 1)
            this.clearAbbrev(mol, bto);
        let b = mol.findBond(bfr, bto);
        if (b > 0)
            mol.deleteBond(b);
        return mol.addBond(bfr, bto, order, type);
    }
    static subgraphMask(mol, mask) {
        let invidx = [];
        let sum = 0;
        for (let n = 0; n < mol.numAtoms; n++) {
            if (mask[n])
                invidx.push(++sum);
            else
                invidx.push(0);
        }
        if (sum == 0)
            return new Molecule();
        if (sum == mol.numAtoms)
            return mol.clone();
        let frag = new Molecule();
        for (let n = 1; n <= mol.numAtoms; n++)
            if (mask[n - 1]) {
                let num = frag.addAtom(mol.atomElement(n), mol.atomX(n), mol.atomY(n), mol.atomCharge(n), mol.atomUnpaired(n));
                frag.setAtomIsotope(num, mol.atomIsotope(n));
                frag.setAtomHExplicit(num, mol.atomHExplicit(n));
                frag.setAtomMapNum(num, mol.atomMapNum(n));
                frag.setAtomExtra(num, mol.atomExtra(n));
            }
        for (let n = 1; n <= mol.numBonds; n++) {
            let bfr = invidx[mol.bondFrom(n) - 1], bto = invidx[mol.bondTo(n) - 1];
            if (bfr > 0 && bto > 0) {
                let num = frag.addBond(bfr, bto, mol.bondOrder(n), mol.bondType(n));
                frag.setBondExtra(num, mol.bondExtra(n));
            }
        }
        return frag;
    }
    static subgraphIndex(mol, idx) {
        let invidx = Vec.numberArray(0, mol.numAtoms);
        for (let n = 0; n < invidx.length; n++)
            invidx[n] = 0;
        for (let n = 0; n < idx.length; n++)
            invidx[idx[n] - 1] = n + 1;
        let frag = new Molecule();
        for (let n = 0; n < idx.length; n++) {
            let num = frag.addAtom(mol.atomElement(idx[n]), mol.atomX(idx[n]), mol.atomY(idx[n]), mol.atomCharge(idx[n]), mol.atomUnpaired(idx[n]));
            frag.setAtomIsotope(num, mol.atomIsotope(idx[n]));
            frag.setAtomHExplicit(num, mol.atomHExplicit(idx[n]));
            frag.setAtomMapNum(num, mol.atomMapNum(idx[n]));
            frag.setAtomExtra(num, mol.atomExtra(idx[n]));
        }
        for (let n = 1; n <= mol.numBonds; n++) {
            let bfr = invidx[mol.bondFrom(n) - 1], bto = invidx[mol.bondTo(n) - 1];
            if (bfr > 0 && bto > 0) {
                let num = frag.addBond(bfr, bto, mol.bondOrder(n), mol.bondType(n));
                frag.setBondExtra(num, mol.bondExtra(n));
            }
        }
        return frag;
    }
    static subgraphWithAttachments(mol, mask) {
        let xmask = mask.slice(0);
        for (let n = 1; n <= mol.numBonds; n++) {
            let bfr = mol.bondFrom(n) - 1, bto = mol.bondTo(n) - 1;
            if (mask[bfr] && !mask[bto])
                xmask[bto] = true;
            else if (mask[bto] && !mask[bfr])
                xmask[bfr] = true;
        }
        let xmol = mol.clone();
        for (let n = 1; n <= xmol.numAtoms; n++)
            if (xmask[n - 1] && !mask[n - 1])
                xmol.setAtomElement(n, 'X');
        return MolUtil.subgraphMask(xmol, xmask);
    }
    static append(mol, frag) {
        let boxm = mol.boundary(), boxf = frag.boundary();
        let dx = boxm.maxX() + Molecule.IDEALBOND - boxm.minX();
        let dy = 0.5 * (boxm.minY() + boxm.maxY() - boxf.minY() - boxf.maxY());
        let top = mol.numAtoms;
        mol.append(frag);
        for (let n = top + 1; n <= mol.numAtoms; n++)
            mol.setAtomPos(n, mol.atomX(n) + dx, mol.atomY(n) + dy);
    }
    static deleteAtoms(mol, idx) {
        let mask = Vec.booleanArray(true, mol.numAtoms);
        for (let n = 0; n < idx.length; n++)
            mask[idx[n] - 1] = false;
        return MolUtil.subgraphMask(mol, mask);
    }
    static componentList(mol) {
        let sz = mol.numAtoms;
        if (sz == 0)
            return null;
        let g = Graph.fromMolecule(mol);
        let groups = g.calculateComponentGroups();
        for (let grp of groups)
            Vec.addTo(grp, 1);
        return groups;
    }
    static getAtomSides(mol, atom) {
        let g = Graph.fromMolecule(mol);
        let cc = g.calculateComponents();
        let mask = [];
        for (let n = 0; n < cc.length; n++)
            mask.push(cc[n] == cc[atom - 1]);
        mask[atom - 1] = false;
        let oldmap = Vec.maskIdx(mask);
        g.keepNodesMask(mask);
        cc = g.calculateComponents();
        let ccmax = Vec.max(cc);
        let grps = [];
        for (let n = 0; n < ccmax; n++)
            grps.push([atom]);
        for (let n = 0; n < cc.length; n++)
            grps[cc[n] - 1].push(oldmap[n] + 1);
        return grps;
    }
    static getBondSides(mol, bond) {
        let bf = mol.bondFrom(bond), bt = mol.bondTo(bond);
        let inRing = mol.bondInRing(bond);
        let g = Graph.fromMolecule(mol);
        let cc = g.calculateComponents();
        let mask = [];
        for (let n = 0; n < cc.length; n++)
            mask.push(cc[n] == cc[bf - 1]);
        if (!inRing)
            g.removeEdge(bf - 1, bt - 1);
        else {
            mask[bf - 1] = false;
            mask[bt - 1] = false;
        }
        let oldmap = Vec.maskIdx(mask);
        g.keepNodesMask(mask);
        cc = g.calculateComponents();
        let ccmax = Vec.max(cc);
        let grps = [];
        for (let n = 0; n < ccmax; n++) {
            grps[n] = [];
            if (inRing) {
                grps[n].push(bf);
                grps[n].push(bt);
            }
        }
        for (let n = 0; n < cc.length; n++)
            grps[cc[n] - 1].push(oldmap[n] + 1);
        return grps;
    }
    static arrayAtomX(mol) {
        let x = Vec.numberArray(0, mol.numAtoms);
        for (let n = x.length - 1; n >= 0; n--)
            x[n] = mol.atomX(n + 1);
        return x;
    }
    static arrayAtomY(mol) {
        let y = Vec.numberArray(0, mol.numAtoms);
        for (let n = y.length - 1; n >= 0; n--)
            y[n] = mol.atomY(n + 1);
        return y;
    }
    static molecularFormula(mol, punctuation) {
        let puncEnter = '', puncExit = '', puncEnterSuper = '', puncExitSuper = '';
        if (punctuation == true)
            [puncEnter, puncExit] = ['{', '}', '{^', '}'];
        else if (punctuation instanceof Array) {
            puncEnter = punctuation[0];
            puncExit = punctuation[1];
            puncEnterSuper = punctuation[2];
            puncExitSuper = punctuation[3];
        }
        for (let n = 1; n <= mol.numAtoms; n++)
            if (MolUtil.hasAbbrev(mol, n)) {
                mol = mol.clone();
                MolUtil.expandAbbrevs(mol, false);
                break;
            }
        let countC = 0, countH = 0;
        let elements = Vec.stringArray('', mol.numAtoms);
        for (let n = 1; n <= mol.numAtoms; n++) {
            countH += mol.atomHydrogens(n);
            let el = mol.atomElement(n);
            if (mol.atomIsotope(n) != Molecule.ISOTOPE_NATURAL)
                el = puncEnterSuper + mol.atomIsotope(n) + puncExitSuper + el;
            if (el == 'C')
                countC++;
            else if (el == 'H')
                countH++;
            else
                elements[n - 1] = el;
        }
        elements.sort();
        let formula = '';
        if (countC > 0)
            formula += 'C';
        if (countC > 1) {
            if (punctuation)
                formula += puncEnter;
            formula += countC;
            if (punctuation)
                formula += puncExit;
        }
        if (countH > 0)
            formula += 'H';
        if (countH > 1) {
            if (punctuation)
                formula += puncEnter;
            formula += countH;
            if (punctuation)
                formula += puncExit;
        }
        for (let n = 0; n < elements.length; n++)
            if (elements[n].length > 0) {
                let count = 1;
                for (; n + 1 < elements.length && elements[n] == elements[n + 1]; n++)
                    count++;
                formula += elements[n];
                if (count > 1) {
                    if (punctuation)
                        formula += puncEnter;
                    formula += count;
                    if (punctuation)
                        formula += puncExit;
                }
            }
        return formula.toString();
    }
    static molecularWeight(mol) {
        for (let n = 1; n <= mol.numAtoms; n++)
            if (MolUtil.hasAbbrev(mol, n)) {
                mol = mol.clone();
                MolUtil.expandAbbrevs(mol, false);
                break;
            }
        let mw = 0;
        for (let n = 1; n <= mol.numAtoms; n++) {
            mw += mol.atomHydrogens(n) * Chemistry.NATURAL_ATOMIC_WEIGHTS[1];
            let iso = mol.atomIsotope(n);
            if (iso != Molecule.ISOTOPE_NATURAL) {
                mw += iso;
                continue;
            }
            let an = Molecule.elementAtomicNumber(mol.atomElement(n));
            if (an > 0 && an < Chemistry.NATURAL_ATOMIC_WEIGHTS.length)
                mw += Chemistry.NATURAL_ATOMIC_WEIGHTS[an];
        }
        return mw;
    }
    static removeDuplicateBonds(mol) {
        let bpri = [];
        for (let n = 1; n <= mol.numBonds; n++) {
            let p = Math.min(mol.bondFrom(n), mol.bondTo(n)) * mol.numAtoms + Math.max(mol.bondFrom(n), mol.bondTo(n));
            bpri.push(p);
        }
        let bidx = Vec.idxSort(bpri);
        let keepmask = Vec.booleanArray(false, bidx.length);
        let p = 0;
        while (p < bidx.length) {
            let sz = 1;
            while (p + sz < bidx.length && bpri[bidx[p]] == bpri[bidx[p + sz]])
                sz++;
            let best = p;
            for (let n = p + 1; n < p + sz; n++) {
                let b1 = bidx[best] + 1, b2 = bidx[n] + 1;
                let a1 = mol.bondFrom(b1), a2 = mol.bondTo(b1);
                let el1 = mol.atomElement(a1), el2 = mol.atomElement(a2);
                let limit1 = 0, limit2 = 0;
                if (el1 == 'C' || el1 == 'N')
                    limit1 = 4;
                else if (el1 == 'O')
                    limit1 = 3;
                if (el2 == 'C' || el2 == 'N')
                    limit2 = 4;
                else if (el2 == 'O')
                    limit2 = 3;
                if (limit1 > 0 || limit2 > 0) {
                    let boB1A1 = 0, boB1A2 = 0, boB2A1 = 0, boB2A2 = 0;
                    for (let i = 1; i <= mol.numBonds; i++) {
                        if (i != b2 && (mol.bondFrom(i) == a1 || mol.bondTo(i) == a1))
                            boB1A1 += mol.bondOrder(i);
                        if (i != b2 && (mol.bondFrom(i) == a2 || mol.bondTo(i) == a2))
                            boB1A2 += mol.bondOrder(i);
                        if (i != b1 && (mol.bondFrom(i) == a1 || mol.bondTo(i) == a1))
                            boB2A1 += mol.bondOrder(i);
                        if (i != b1 && (mol.bondFrom(i) == a2 || mol.bondTo(i) == a2))
                            boB2A2 += mol.bondOrder(i);
                    }
                    let bad1 = 0, bad2 = 0;
                    if (limit1 > 0 && boB1A1 > limit1)
                        bad1++;
                    if (limit2 > 0 && boB1A2 > limit2)
                        bad1++;
                    if (limit1 > 0 && boB2A1 > limit1)
                        bad2++;
                    if (limit2 > 0 && boB2A2 > limit2)
                        bad2++;
                    if (bad1 < bad2)
                        continue;
                    if (bad1 > bad2) {
                        best = n;
                        continue;
                    }
                }
                let exotic1 = 2 * mol.bondOrder(b1), exotic2 = 2 * mol.bondOrder(b2);
                exotic1 += (exotic1 == 0 ? 4 : 0) + (mol.bondType(b1) != Molecule.BONDTYPE_NORMAL ? 1 : 0);
                exotic2 += (exotic2 == 0 ? 4 : 0) + (mol.bondType(b2) != Molecule.BONDTYPE_NORMAL ? 1 : 0);
                if (exotic2 > exotic1)
                    best = n;
            }
            keepmask[bidx[best]] = true;
            p += sz;
        }
        for (let n = mol.numBonds; n >= 1; n--)
            if (!keepmask[n - 1] || mol.bondFrom(n) == mol.bondTo(n))
                mol.deleteBond(n);
    }
    static calculateWalkWeight(mol, atom) {
        let ccsz = 0, cc = Graph.fromMolecule(mol).calculateComponents();
        for (let n = 0; n < cc.length; n++)
            if (cc[n] == cc[atom - 1])
                ccsz++;
        let w = Vec.numberArray(1, mol.numAtoms), wn = Vec.numberArray(0, mol.numAtoms);
        w[atom - 1] = 0;
        for (; ccsz > 0; ccsz--) {
            for (let n = 0; n < mol.numAtoms; n++)
                wn[n] = w[n];
            for (let n = 1; n <= mol.numBonds; n++) {
                let a1 = mol.bondFrom(n) - 1, a2 = mol.bondTo(n) - 1;
                w[a1] += wn[a2] * 0.1;
                w[a2] += wn[a1] * 0.1;
            }
            w[atom - 1] = 0;
        }
        return w;
    }
    static totalHydrogens(mol, atom) {
        let hc = mol.atomHydrogens(atom);
        let adj = mol.atomAdjList(atom);
        for (let n = 0; n < adj.length; n++)
            if (mol.atomElement(adj[n]) == 'H')
                hc++;
        return hc;
    }
    static stripHydrogens(mol, force) {
        if (force == null)
            force = false;
        for (let n = mol.numAtoms; n >= 1; n--) {
            if (mol.atomElement(n) != 'H')
                continue;
            if (!force) {
                if (mol.atomCharge(n) != 0 || mol.atomUnpaired(n) != 0)
                    continue;
                if (mol.atomIsotope(n) != Molecule.ISOTOPE_NATURAL)
                    continue;
                if (mol.atomExtra(n) != null || mol.atomTransient(n) != null)
                    continue;
                if (mol.atomAdjCount(n) != 1)
                    continue;
                let other = mol.atomAdjList(n)[0];
                if (mol.atomElement(other) == 'H')
                    continue;
                let bond = mol.atomAdjBonds(n)[0];
                if (mol.bondOrder(bond) != 1 || mol.bondType(bond) != Molecule.BONDTYPE_NORMAL)
                    continue;
                if (mol.atomHExplicit(other) != Molecule.HEXPLICIT_UNKNOWN)
                    continue;
                if (Molecule.HYVALENCE_EL.indexOf(mol.atomElement(other)) < 0)
                    continue;
            }
            mol.deleteAtomAndBonds(n);
        }
    }
    static createHydrogens(mol, position) {
        if (position == null)
            position = false;
        let na = mol.numAtoms;
        for (let n = 1; n <= na; n++) {
            let hc = mol.atomHydrogens(n);
            if (hc == 0)
                continue;
            if (mol.atomHExplicit(n) != Molecule.HEXPLICIT_UNKNOWN)
                mol.setAtomHExplicit(n, 0);
            if (!position) {
                for (; hc > 0; hc--) {
                    let a = mol.addAtom("H", mol.atomX(n), mol.atomY(n));
                    mol.addBond(n, a, 1);
                }
            }
            else
                SketchUtil.placeAdditionalHydrogens(mol, n, hc);
        }
        return mol.numAtoms - na;
    }
    static atomVec3(mol, atom) {
        if (mol.is3D())
            return [mol.atomX(atom), mol.atomY(atom), mol.atomZ(atom)];
        else
            return [mol.atomX(atom), mol.atomY(atom), 0];
    }
}
MolUtil.TEMPLATE_ATTACHMENT = 'X';
MolUtil.ABBREV_ATTACHMENT = '*';
class Graph {
    constructor(sz, edge1, edge2) {
        this.nbrs = [];
        this.indices = null;
        this.labels = null;
        this.props = null;
        if (sz != null)
            for (let n = 0; n < sz; n++)
                this.nbrs.push([]);
        if (edge1 != null && edge2 != null) {
            for (let n = 0; n < edge1.length; n++) {
                this.nbrs[edge1[n]].push(edge2[n]);
                this.nbrs[edge2[n]].push(edge1[n]);
            }
        }
    }
    clone() {
        let g = new Graph();
        for (let nbr of this.nbrs)
            g.nbrs.push(nbr.slice(0));
        g.indices = this.indices == null ? null : this.indices.slice(0);
        g.labels = this.labels == null ? null : this.labels.slice(0);
        g.props = this.props == null ? null : this.props.slice(0);
        return g;
    }
    static fromMolecule(mol) {
        let g = new Graph();
        g.indices = [];
        for (let n = 0; n < mol.numAtoms; n++) {
            g.nbrs.push([]);
            g.indices.push(n + 1);
        }
        for (let n = 1; n <= mol.numBonds; n++) {
            let bfr = mol.bondFrom(n) - 1, bto = mol.bondTo(n) - 1;
            g.nbrs[bfr].push(bto);
            g.nbrs[bto].push(bfr);
        }
        return g;
    }
    toString() {
        let buff = '#nodes=' + this.nbrs.length;
        for (let n = 0; n < this.nbrs.length; n++) {
            buff += ' ' + n + ':{' + this.nbrs[n] + '}';
            if (n < Vec.arrayLength(this.indices))
                buff += '[i=' + this.indices[n] + ']';
            if (n < Vec.arrayLength(this.labels))
                buff += '[l=' + this.labels[n] + ']';
        }
        return buff;
    }
    get numNodes() { return this.nbrs.length; }
    numEdges(N) { return this.nbrs[N].length; }
    getEdge(N, E) { return this.nbrs[N][E]; }
    getAdj(N) { return this.nbrs[N]; }
    getIndex(N) { return this.indices == null ? 0 : this.indices[N]; }
    setIndex(N, idx) {
        if (this.indices == null)
            this.indices = Vec.numberArray(0, this.nbrs.length);
        this.indices[N] = idx;
    }
    getLabel(N) { return this.labels == null ? null : this.labels[N]; }
    setLabel(N, lbl) {
        if (this.labels == null)
            this.labels = Vec.stringArray('', this.nbrs.length);
        this.labels[N] = lbl;
    }
    getProperty(N) { return this.props == null ? null : this.props[N]; }
    setProperty(N, prp) {
        if (this.props == null)
            this.props = new Array(this.nbrs.length);
        this.props[N] = prp;
    }
    addNode() {
        this.nbrs.push([]);
        if (this.indices != null)
            this.indices.push(0);
        if (this.labels != null)
            this.labels.push('');
        if (this.props != null)
            this.props.push(null);
        return this.nbrs.length - 1;
    }
    hasEdge(N1, N2) {
        if (this.nbrs[N1].length <= this.nbrs[N2].length)
            return this.nbrs[N1].indexOf(N2) >= 0;
        else
            return this.nbrs[N2].indexOf(N1) >= 0;
    }
    addEdge(N1, N2) {
        this.nbrs[N1].push(N2);
        this.nbrs[N2].push(N1);
    }
    removeEdge(N1, N2) {
        let i1 = this.nbrs[N1].indexOf(N2), i2 = this.nbrs[N2].indexOf(N1);
        if (i1 >= 0)
            this.nbrs[N1].splice(i1, 1);
        if (i2 >= 0)
            this.nbrs[N2].splice(i2, 1);
    }
    isolateNode(N) {
        for (let o of this.nbrs[N]) {
            let i = this.nbrs[o].indexOf(N);
            if (i >= 0)
                this.nbrs[o].splice(i, 1);
        }
        this.nbrs[N] = [];
    }
    keepNodesMask(mask) {
        const oldsz = this.nbrs.length, newsz = Vec.maskCount(mask);
        if (newsz == oldsz)
            return;
        if (newsz == 0) {
            this.nbrs = [];
            this.indices = null;
            this.labels = null;
            this.props = null;
            return;
        }
        let newmap = Vec.maskMap(mask);
        let newnbrs = [];
        for (let n = 0; n < newsz; n++)
            newnbrs.push([]);
        for (let n = 0, pos = 0; n < oldsz; n++)
            if (mask[n]) {
                for (let i of this.nbrs[n])
                    if (mask[i])
                        newnbrs[pos].push(newmap[i]);
                pos++;
            }
        this.nbrs = newnbrs;
        if (this.indices != null)
            this.indices = Vec.maskGet(this.indices, mask);
        if (this.labels != null)
            this.labels = Vec.maskGet(this.labels, mask);
        if (this.props != null)
            this.props = Vec.maskGet(this.props, mask);
    }
    calculateComponents() {
        const sz = this.nbrs.length;
        if (sz == 0)
            return [];
        let cc = Vec.numberArray(0, sz);
        cc[0] = 1;
        let first = 1, high = 1;
        while (true) {
            while (first < sz && cc[first] > 0) {
                first++;
            }
            if (first >= sz)
                break;
            let anything = false;
            for (let i = first; i < sz; i++)
                if (cc[i] == 0) {
                    for (let j = 0; j < this.nbrs[i].length; j++) {
                        if (cc[this.nbrs[i][j]] != 0) {
                            cc[i] = cc[this.nbrs[i][j]];
                            anything = true;
                        }
                    }
                }
            if (!anything)
                cc[first] = ++high;
        }
        return cc;
    }
    calculateComponentGroups() {
        if (this.nbrs.length == 0)
            return [];
        let cc = this.calculateComponents();
        let sz = Vec.max(cc);
        let grp = [];
        for (let n = 0; n < sz; n++)
            grp.push([]);
        for (let n = 0; n < cc.length; n++)
            grp[cc[n] - 1].push(n);
        return grp;
    }
    calculateBFS(idx) {
        let ret = Vec.numberArray(-1, this.numNodes);
        ret[idx] = 0;
        let curnum = 0, lsz = 1, watermark = 0;
        let list = Vec.numberArray(0, this.numNodes);
        list[0] = idx;
        while (true) {
            let newsz = lsz;
            for (let n = watermark; n < lsz; n++) {
                for (let i = 0; i < this.nbrs[list[n]].length; i++) {
                    let j = this.nbrs[list[n]][i];
                    if (ret[j] < 0) {
                        ret[j] = curnum + 1;
                        list[newsz++] = j;
                    }
                }
            }
            if (newsz == lsz)
                break;
            watermark = lsz;
            lsz = newsz;
            curnum++;
        }
        return ret;
    }
}
class CoordUtil {
    static atomAtPoint(mol, x, y, tolerance) {
        if (tolerance == null)
            tolerance = CoordUtil.OVERLAP_THRESHOLD;
        const tolsq = tolerance * tolerance;
        for (let n = 1; n <= mol.numAtoms; n++)
            if (norm2_xy(mol.atomX(n) - x, mol.atomY(n) - y) < tolsq)
                return n;
        return 0;
    }
    static sketchEquivalent(mol1, mol2, tolerance) {
        if (tolerance == null)
            tolerance = CoordUtil.DEFAULT_EQUIV_TOLERANCE;
        const na = mol1.numAtoms, nb = mol1.numBonds;
        if (na != mol2.numAtoms || nb != mol2.numBonds)
            return false;
        const tolsq = tolerance * tolerance;
        let box1 = mol1.boundary(), box2 = mol2.boundary();
        if (Math.abs(box1.minX() - box2.minX()) > tolerance)
            return false;
        if (Math.abs(box1.minY() - box2.minY()) > tolerance)
            return false;
        if (Math.abs(box1.maxX() - box2.maxX()) > tolerance)
            return false;
        if (Math.abs(box1.maxY() - box2.maxY()) > tolerance)
            return false;
        let mx1 = MolUtil.arrayAtomX(mol1), my1 = MolUtil.arrayAtomY(mol1);
        let mx2 = MolUtil.arrayAtomX(mol2), my2 = MolUtil.arrayAtomY(mol2);
        let map = Vec.numberArray(0, na);
        let mask = Vec.booleanArray(false, na);
        for (let i = 0; i < na; i++) {
            let j = -1;
            if (norm2_xy(mx1[i] - mx2[i], my1[i] - my2[i]) < tolsq)
                j = i;
            if (j < 0) {
                let bestdsq = Number.MAX_VALUE;
                for (let n = 0; n < na; n++)
                    if (!mask[n]) {
                        let dsq = norm2_xy(mx1[i] - mx2[n], my1[i] - my2[n]);
                        if (dsq < bestdsq) {
                            bestdsq = dsq;
                            j = n;
                        }
                    }
                if (j < 0 || bestdsq > tolsq)
                    return false;
            }
            map[i] = j + 1;
            mask[j] = true;
            if (mol1.atomElement(i + 1) != mol2.atomElement(j + 1))
                return false;
            if (mol1.atomCharge(i + 1) != mol2.atomCharge(j + 1))
                return false;
            if (mol1.atomUnpaired(i + 1) != mol2.atomUnpaired(j + 1))
                return false;
            if (mol1.atomHExplicit(i + 1) != mol2.atomHExplicit(j + 1) &&
                mol1.atomHExplicit(i + 1) != Molecule.HEXPLICIT_UNKNOWN &&
                mol2.atomHExplicit(j + 1) != Molecule.HEXPLICIT_UNKNOWN)
                return false;
        }
        for (let i = 1; i <= nb; i++) {
            let i1 = mol1.bondFrom(i), i2 = mol1.bondTo(i), j1 = map[i1 - 1], j2 = map[i2 - 1];
            let j = mol2.findBond(j1, j2);
            if (j == 0)
                return false;
            if (mol1.bondOrder(i) != mol2.bondOrder(j) || mol1.bondType(i) != mol2.bondType(j))
                return false;
            if (mol2.bondFrom(j) == j1 && mol2.bondTo(j) == j2) { }
            else if (mol2.bondType(j) != Molecule.BONDTYPE_INCLINED &&
                mol2.bondType(j) != Molecule.BONDTYPE_DECLINED &&
                mol2.bondFrom(j) == j2 && mol2.bondTo(j) == j1) { }
            else
                return false;
        }
        return true;
    }
    static sketchMappable(mol1, mol2, tolerance) {
        if (tolerance == null)
            tolerance = CoordUtil.DEFAULT_EQUIV_TOLERANCE;
        let box1 = mol1.boundary(), box2 = mol2.boundary();
        let dx = box1.minX() - box2.minX(), dy = box1.minY() - box2.minY();
        if (Math.abs(dx) > tolerance * 0.1 || Math.abs(dy) > tolerance * 0.1) {
            mol2 = mol2.clone();
            for (let n = 1; n <= mol2.numAtoms; n++)
                mol2.setAtomPos(n, mol2.atomX(n) + dx, mol2.atomY(n) + dy);
        }
        return CoordUtil.sketchEquivalent(mol1, mol2, tolerance);
    }
    static atomBondAngles(mol, atom, adj) {
        if (adj == null)
            adj = mol.atomAdjList(atom);
        let bndang = [];
        let cx = mol.atomX(atom), cy = mol.atomY(atom);
        for (let a of adj)
            bndang.push(Math.atan2(mol.atomY(a) - cy, mol.atomX(a) - cx));
        return bndang;
    }
    static overlapsAtom(mol, x, y, tol) {
        const tolsq = tol * tol;
        for (let n = 1; n <= mol.numAtoms; n++)
            if (norm2_xy(mol.atomX(n) - x, mol.atomY(n) - y) < tolsq)
                return true;
        return false;
    }
    static overlappingAtomMask(mol, thresh) {
        if (thresh == null)
            thresh = CoordUtil.OVERLAP_THRESHOLD;
        const sz = mol.numAtoms;
        let box = mol.boundary();
        let p1, p2;
        if (box.w > box.h) {
            p1 = MolUtil.arrayAtomX(mol);
            p2 = MolUtil.arrayAtomY(mol);
        }
        else {
            p1 = MolUtil.arrayAtomY(mol);
            p2 = MolUtil.arrayAtomX(mol);
        }
        let omask = Vec.booleanArray(false, sz);
        let idx = Vec.idxSort(p1);
        const threshSQ = thresh * thresh;
        for (let i = 1; i < sz - 1; i++) {
            for (let j = i - 1; j >= 0; j--) {
                let d1 = p1[idx[i]] - p1[idx[j]];
                if (d1 > thresh)
                    break;
                if (norm2_xy(d1, p2[idx[i]] - p2[idx[j]]) < threshSQ) {
                    omask[idx[i]] = true;
                    omask[idx[j]] = true;
                }
            }
            for (let j = i + 1; j < sz; j++) {
                let d1 = p1[idx[j]] - p1[idx[i]];
                if (d1 > thresh)
                    break;
                if (norm2_xy(d1, p2[idx[j]] - p2[idx[i]]) < threshSQ) {
                    omask[idx[i]] = true;
                    omask[idx[j]] = true;
                }
            }
        }
        return omask;
    }
    static overlappingAtomList(mol, thresh) {
        if (thresh == null)
            thresh = CoordUtil.OVERLAP_THRESHOLD;
        return Vec.add(Vec.maskIdx(CoordUtil.overlappingAtomMask(mol, thresh)), 1);
    }
    static congestionPoint(mol, x, y, approach) {
        if (approach == null)
            approach = 1E-5;
        let score = 0;
        let na = mol.numAtoms;
        for (let n = 1; n <= na; n++)
            score += 1.0 / (approach + norm2_xy(mol.atomX(n) - x, mol.atomY(n) - y));
        return score;
    }
    static congestionMolecule(mol, approach) {
        if (approach == null)
            approach = 1E-5;
        let score = 0;
        const na = mol.numAtoms;
        let mx = MolUtil.arrayAtomX(mol), my = MolUtil.arrayAtomY(mol);
        for (let i = 0; i < na - 1; i++)
            for (let j = i + 1; j < na; j++)
                score += 1.0 / (approach + norm2_xy(mx[i] - mx[j], my[i] - my[j]));
        return score;
    }
    static translateMolecule(mol, ox, oy) {
        for (let n = 1; n <= mol.numAtoms; n++)
            mol.setAtomPos(n, mol.atomX(n) + ox, mol.atomY(n) + oy);
    }
    static rotateMolecule(mol, theta, cx, cy) {
        if (cx == null || cy == null) {
            let box = mol.boundary();
            cx = box.midX();
            cy = box.midY();
        }
        let cosTheta = Math.cos(theta), sinTheta = Math.sin(theta);
        for (let n = 1; n <= mol.numAtoms; n++) {
            let x = mol.atomX(n) - cx, y = mol.atomY(n) - cy;
            mol.setAtomPos(n, cx + x * cosTheta - y * sinTheta, cy + x * sinTheta + y * cosTheta);
        }
    }
    static rotateBond(mol, centre, atom, theta) {
        theta = angleNorm(theta);
        if (Math.abs(theta) < 0.1 * DEGRAD)
            return;
        let g = Graph.fromMolecule(mol);
        g.isolateNode(centre - 1);
        let cc = g.calculateComponents();
        let cx = mol.atomX(centre), cy = mol.atomY(centre);
        let cosTheta = Math.cos(theta), sinTheta = Math.sin(theta);
        for (let n = 1; n <= mol.numAtoms; n++)
            if (cc[n - 1] == cc[atom - 1]) {
                let x = mol.atomX(n) - cx, y = mol.atomY(n) - cy;
                mol.setAtomPos(n, cx + x * cosTheta - y * sinTheta, cy + x * sinTheta + y * cosTheta);
            }
    }
    static rotateAtoms(mol, mask, cx, cy, theta) {
        let cosTheta = Math.cos(theta), sinTheta = Math.sin(theta);
        for (let n = 1; n <= mol.numAtoms; n++)
            if (mask[n - 1]) {
                let x = mol.atomX(n) - cx, y = mol.atomY(n) - cy;
                mol.setAtomPos(n, cx + x * cosTheta - y * sinTheta, cy + x * sinTheta + y * cosTheta);
            }
    }
    static angleNeighbours(mol, atom) {
        let adj = mol.atomAdjList(atom);
        if (adj.length <= 1)
            return null;
        let th = [];
        for (let n = 0; n < adj.length; n++)
            th.push(Math.atan2(mol.atomY(adj[n]) - mol.atomY(atom), mol.atomX(adj[n]) - mol.atomX(atom)));
        if (adj.length == 2) {
            if (angleDiff(th[1], th[0]) > 0)
                return adj;
            return [adj[1], adj[0]];
        }
        let idx = Vec.idxSort(th);
        return Vec.idxGet(adj, idx);
    }
    static mergeAtoms(mol, oldN, newN) {
        for (let n = 1; n <= mol.numBonds; n++) {
            if (mol.bondFrom(n) == oldN)
                mol.setBondFrom(n, newN);
            if (mol.bondTo(n) == oldN)
                mol.setBondTo(n, newN);
        }
        mol.deleteAtomAndBonds(oldN);
    }
    static normaliseBondDistances(mol) {
        const nb = mol.numBonds;
        if (nb == 0)
            return;
        let dsq = [];
        for (let n = 1; n <= nb; n++) {
            let bfr = mol.bondFrom(n), bto = mol.bondTo(n);
            dsq.push(norm2_xy(mol.atomX(bto) - mol.atomX(bfr), mol.atomY(bto) - mol.atomY(bfr)));
        }
        Vec.sort(dsq);
        let median = (nb & 1) == 1 ? Math.sqrt(dsq[nb >> 1]) : 0.5 * (Math.sqrt(dsq[nb >> 1]) + Math.sqrt(dsq[(nb >> 1) - 1]));
        if (median < 0.1 || (median > Molecule.IDEALBOND * 0.9 && median < Molecule.IDEALBOND * 1.1))
            return;
        let box = mol.boundary();
        let cx = box.midX(), cy = box.midY();
        let scale = Molecule.IDEALBOND / median;
        for (let n = mol.numAtoms; n >= 1; n--) {
            let x = (mol.atomX(n) - cx) * scale + cx;
            let y = (mol.atomY(n) - cy) * scale + cy;
            mol.setAtomPos(n, x, y);
        }
    }
    static mirrorImage(mol) {
        mol = mol.clone();
        for (let n = 1; n <= mol.numAtoms; n++)
            mol.setAtomX(n, -mol.atomX(n));
        for (let n = 1; n <= mol.numBonds; n++) {
            if (mol.bondType(n) == Molecule.BONDTYPE_DECLINED)
                mol.setBondType(n, Molecule.BONDTYPE_INCLINED);
            else if (mol.bondType(n) == Molecule.BONDTYPE_INCLINED)
                mol.setBondType(n, Molecule.BONDTYPE_DECLINED);
        }
        return mol;
    }
    static alignOrientFlip(mol1, idx1, mol2, idx2) {
        if (idx1.length < 2 || idx1.length != idx2.length)
            throw 'Invalid mapping indices.';
        let x0 = mol1.atomX(idx1[0]), y0 = mol1.atomY(idx1[0]);
        CoordUtil.translateMolecule(mol2, x0 - mol2.atomX(idx2[0]), y0 - mol2.atomY(idx2[0]));
        const sz = idx1.length - 1;
        let th1 = [], th2 = [];
        let deltaA = 0, deltaB = 0;
        for (let n = 0; n < sz; n++) {
            th1.push(Math.atan2(mol1.atomY(idx1[n + 1]) - y0, mol1.atomX(idx1[n + 1]) - x0));
            th2.push(Math.atan2(mol2.atomY(idx2[n + 1]) - y0, mol2.atomX(idx2[n + 1]) - x0));
            let dthA = angleDiff(th1[n], th2[n]), dthB = angleDiff(th1[n], -th2[n]);
            if (dthA < -175 * DEGRAD && deltaA > 0)
                dthA += TWOPI;
            else if (dthA > 175 * DEGRAD && deltaA < 0)
                dthA -= TWOPI;
            if (dthB < -175 * DEGRAD && deltaB > 0)
                dthB += TWOPI;
            else if (dthB > 175 * DEGRAD && deltaB < 0)
                dthB -= TWOPI;
            deltaA += dthA;
            deltaB += dthB;
        }
        if (sz > 1) {
            let inv = 1.0 / sz;
            deltaA *= inv;
            deltaB *= inv;
        }
        let scoreA = 0, scoreB = 0;
        for (let n = 0; n < sz; n++) {
            scoreA += Math.abs(angleDiff(th1[n], th2[n] + deltaA));
            scoreB += Math.abs(angleDiff(th1[n], -th2[n] + deltaB));
        }
        if (scoreB < scoreA) {
            for (let n = 1; n <= mol2.numAtoms; n++)
                mol2.setAtomY(n, 2 * y0 - mol2.atomY(n));
            for (let n = 1; n <= mol2.numBonds; n++) {
                if (mol2.bondType(n) == Molecule.BONDTYPE_DECLINED)
                    mol2.setBondType(n, Molecule.BONDTYPE_INCLINED);
                else if (mol2.bondType(n) == Molecule.BONDTYPE_INCLINED)
                    mol2.setBondType(n, Molecule.BONDTYPE_DECLINED);
            }
            CoordUtil.rotateMolecule(mol2, x0, y0, deltaB);
        }
        else
            CoordUtil.rotateMolecule(mol2, x0, y0, deltaA);
    }
}
CoordUtil.OVERLAP_THRESHOLD = 0.2;
CoordUtil.OVERLAP_THRESHOLD_SQ = CoordUtil.OVERLAP_THRESHOLD * CoordUtil.OVERLAP_THRESHOLD;
CoordUtil.DEFAULT_EQUIV_TOLERANCE = 0.2;
var OpenMolType;
(function (OpenMolType) {
    OpenMolType[OpenMolType["None"] = 0] = "None";
    OpenMolType[OpenMolType["AtomCount1000"] = 1] = "AtomCount1000";
    OpenMolType[OpenMolType["BondCount1000"] = 2] = "BondCount1000";
    OpenMolType[OpenMolType["InlineAbbreviations"] = 3] = "InlineAbbreviations";
    OpenMolType[OpenMolType["ZeroOrderBonds"] = 4] = "ZeroOrderBonds";
    OpenMolType[OpenMolType["HydrogenCounting"] = 5] = "HydrogenCounting";
    OpenMolType[OpenMolType["MoleculeName"] = 6] = "MoleculeName";
    OpenMolType[OpenMolType["QueryResonance"] = 7] = "QueryResonance";
    OpenMolType[OpenMolType["QueryHCount"] = 8] = "QueryHCount";
})(OpenMolType || (OpenMolType = {}));
const OPENMOL_LEVEL_1_1 = [
    OpenMolType.AtomCount1000,
    OpenMolType.BondCount1000,
];
const OPENMOL_LEVEL_1_2 = [
    OpenMolType.InlineAbbreviations,
];
const OPENMOL_LEVEL_1_3 = [
    OpenMolType.ZeroOrderBonds,
    OpenMolType.HydrogenCounting,
];
const OPENMOL_INVALID = [
    OpenMolType.QueryResonance,
    OpenMolType.QueryHCount,
];
class OpenMolSpec {
    constructor() {
        this.level = 1.0;
        this.invalid = false;
        this.notes = [];
    }
    add(type, atoms, bonds, source) {
        this.addNote({ 'type': type, 'atoms': atoms, 'bonds': bonds, 'source': source });
    }
    addNote(note) {
        this.notes.push(note);
        note.level = 1.0;
        if (OPENMOL_LEVEL_1_1.indexOf(note.type) >= 0)
            note.level = 1.1;
        else if (OPENMOL_LEVEL_1_2.indexOf(note.type) >= 0)
            note.level = 1.2;
        else if (OPENMOL_LEVEL_1_3.indexOf(note.type) >= 0)
            note.level = 1.3;
        this.level = Math.max(this.level, note.level);
        this.invalid = this.invalid || OPENMOL_INVALID.indexOf(note.type) >= 0;
    }
    addJoin(type, atoms, bonds, source) {
        for (let note of this.notes)
            if (note.type == type) {
                if (atoms && note.atoms)
                    note.atoms = note.atoms.concat(atoms);
                else if (atoms)
                    note.atoms = atoms;
                if (bonds && note.bonds)
                    note.bonds = note.bonds.concat(bonds);
                else if (bonds)
                    note.bonds = bonds;
                if (source && note.source)
                    note.source = note.source.concat(source);
                else if (source)
                    note.source = source;
                return;
            }
        this.add(type, atoms, bonds, source);
    }
    derive(mol) {
        if (mol.numAtoms >= 1000)
            this.add(OpenMolType.AtomCount1000);
        if (mol.numBonds >= 1000)
            this.add(OpenMolType.BondCount1000);
    }
}
class MDLMOLReader {
    constructor(strData) {
        this.parseHeader = true;
        this.parseExtended = true;
        this.allowV3000 = true;
        this.considerRescale = true;
        this.relaxed = false;
        this.keepAromatic = false;
        this.keepParity = false;
        this.mol = null;
        this.molName = '';
        this.openmol = new OpenMolSpec();
        this.atomHyd = null;
        this.resBonds = null;
        this.pos = 0;
        this.lines = strData.split(/\r?\n/);
    }
    parse() {
        if (this.parseHeader) {
            this.molName = this.lines[0];
            if (this.molName) {
                let src = { 'row': 0, 'col': 0, 'len': this.molName.length };
                this.openmol.add(OpenMolType.MoleculeName, null, null, [src]);
            }
            this.pos = 3;
        }
        this.parseCTAB();
        return this.mol;
    }
    nextLine() {
        if (this.pos >= this.lines.length)
            throw 'MDL Molfile parser: premature end, at line ' + (this.pos + 1);
        return this.lines[this.pos++];
    }
    parseCTAB() {
        this.mol = new Molecule();
        this.mol.keepTransient = true;
        let line = this.nextLine();
        if (!this.relaxed) {
            let version = line.length >= 39 ? line.substring(34, 39) : '';
            if (this.allowV3000 && version == 'V3000') {
                this.parseV3000();
                this.openmol.derive(this.mol);
                return;
            }
            if (version != 'V2000')
                throw 'Invalid MDL MOL: no Vx000 tag.';
        }
        let numAtoms = parseInt(line.substring(0, 3).trim());
        let numBonds = parseInt(line.substring(3, 6).trim());
        for (let n = 0; n < numAtoms; n++) {
            line = this.nextLine();
            if (line.length < 39)
                throw 'Invalid MDL MOL: atom line' + (n + 1);
            let x = parseFloat(line.substring(0, 10).trim());
            let y = parseFloat(line.substring(10, 20).trim());
            let z = parseFloat(line.substring(20, 30).trim());
            let el = line.substring(31, 34).trim();
            let chg = parseInt(line.substring(36, 39).trim()), rad = 0;
            let stereo = line.length < 42 ? 0 : parseInt(line.substring(39, 42).trim());
            let hyd = line.length < 45 ? 0 : parseInt(line.substring(42, 45).trim());
            let mapnum = line.length < 63 ? 0 : parseInt(line.substring(60, 63).trim());
            if (chg >= 1 && chg <= 3)
                chg = 4 - chg;
            else if (chg == 4) {
                chg = 0;
                rad = 2;
            }
            else if (chg >= 5 && chg <= 7)
                chg = 4 - chg;
            else
                chg = 0;
            let a = this.mol.addAtom(el, x, y, chg, rad);
            if (z != 0) {
                this.mol.setAtomZ(a, z);
                this.mol.setIs3D(true);
            }
            this.mol.setAtomMapNum(a, mapnum);
            if (hyd > 0) {
                this.openmol.addJoin(OpenMolType.QueryHCount, [a]);
                if (this.atomHyd == null)
                    this.atomHyd = Vec.numberArray(Molecule.HEXPLICIT_UNKNOWN, numAtoms);
                this.atomHyd[n] = hyd - 1;
            }
            if (stereo > 0 && this.keepParity) {
            }
        }
        for (let n = 0; n < numBonds; n++) {
            line = this.nextLine();
            if (line.length < 12)
                throw 'Invalid MDL MOL: bond line' + (n + 1);
            let bfr = parseInt(line.substring(0, 3).trim()), bto = parseInt(line.substring(3, 6).trim());
            let type = parseInt(line.substring(6, 9).trim()), stereo = parseInt(line.substring(9, 12).trim());
            if (bfr == bto || bfr < 1 || bfr > numAtoms || bto < 1 || bto > numAtoms)
                throw 'Invalid MDL MOL: bond line' + (n + 1);
            let order = type >= 1 && type <= 3 ? type : 1;
            let style = Molecule.BONDTYPE_NORMAL;
            if (stereo == 1)
                style = Molecule.BONDTYPE_INCLINED;
            else if (stereo == 6)
                style = Molecule.BONDTYPE_DECLINED;
            let b = this.mol.addBond(bfr, bto, order, style);
            if (type == 4) {
                let src = { 'row': this.pos - 1, 'col': 6, 'len': 3 };
                this.openmol.addJoin(OpenMolType.QueryResonance, null, [b], [src]);
            }
        }
        const MBLK_CHG = 1, MBLK_RAD = 2, MBLK_ISO = 3, MBLK_RGP = 4, MBLK_HYD = 5, MBLK_ZCH = 6, MBLK_ZBO = 7;
        while (true) {
            line = this.nextLine();
            if (line.startsWith("M  END"))
                break;
            let type = 0;
            if (line.startsWith("M  CHG"))
                type = MBLK_CHG;
            else if (line.startsWith("M  RAD"))
                type = MBLK_RAD;
            else if (line.startsWith("M  ISO"))
                type = MBLK_ISO;
            else if (line.startsWith("M  RGP"))
                type = MBLK_RGP;
            else if (this.parseExtended && line.startsWith("M  HYD"))
                type = MBLK_HYD;
            else if (this.parseExtended && line.startsWith("M  ZCH"))
                type = MBLK_ZCH;
            else if (this.parseExtended && line.startsWith("M  ZBO"))
                type = MBLK_ZBO;
            else if (line.startsWith("A  ") && line.length >= 6) {
                let anum = parseInt(line.substring(3, 6).trim());
                if (anum >= 1 && anum <= this.mol.numAtoms) {
                    line = this.nextLine();
                    if (line == null)
                        break;
                    this.mol.setAtomElement(anum, line);
                    continue;
                }
            }
            if (type > 0) {
                let len = parseInt(line.substring(6, 9).trim());
                for (let n = 0; n < len; n++) {
                    let pos = parseInt(line.substring(9 + 8 * n, 13 + 8 * n).trim());
                    let val = parseInt(line.substring(13 + 8 * n, 17 + 8 * n).trim());
                    if (pos < 1)
                        throw 'Invalid MDL MOL: M-block';
                    if (type == MBLK_CHG)
                        this.mol.setAtomCharge(pos, val);
                    else if (type == MBLK_RAD)
                        this.mol.setAtomUnpaired(pos, val);
                    else if (type == MBLK_ISO)
                        this.mol.setAtomIsotope(pos, val);
                    else if (type == MBLK_RGP)
                        this.mol.setAtomElement(pos, "R" + val);
                    else if (type == MBLK_HYD) {
                        this.mol.setAtomHExplicit(pos, val);
                        let src = { 'row': this.pos - 1, 'col': 9 + 8 * n, 'len': 8 };
                        this.openmol.addJoin(OpenMolType.HydrogenCounting, [pos], null, [src]);
                    }
                    else if (type == MBLK_ZCH)
                        this.mol.setAtomCharge(pos, val);
                    else if (type == MBLK_ZBO) {
                        this.mol.setBondOrder(pos, val);
                        let src = { 'row': this.pos - 1, 'col': 9 + 8 * n, 'len': 8 };
                        this.openmol.addJoin(OpenMolType.ZeroOrderBonds, null, [pos], [src]);
                    }
                }
            }
        }
        this.postFix();
        this.openmol.derive(this.mol);
    }
    postFix() {
        const mol = this.mol;
        for (let n = 1; n <= mol.numAtoms; n++) {
            let el = mol.atomElement(n);
            if (el == 'D') {
                mol.setAtomElement(n, 'H');
                mol.setAtomIsotope(n, 2);
            }
            else if (el == 'T') {
                mol.setAtomElement(n, 'H');
                mol.setAtomIsotope(n, 3);
            }
            if ((el == 'F' || el == 'Cl' || el == 'Br' || el == 'I' || el == 'At') &&
                mol.atomCharge(n) == 0 && mol.atomHExplicit(n) == Molecule.HEXPLICIT_UNKNOWN && mol.atomAdjCount(n) == 0) {
                mol.setAtomHExplicit(n, 1);
            }
        }
        if (this.considerRescale)
            CoordUtil.normaliseBondDistances(mol);
        mol.keepTransient = false;
    }
    parseV3000() {
        let inCTAB = false, inAtom = false, inBond = false;
        let lineCounts = null;
        let lineAtoms = [], lineBonds = [];
        const ERRPFX = 'Invalid MDL MOL V3000: ';
        while (true) {
            let line = this.nextLine();
            if (line == 'M  END')
                break;
            if (!line.startsWith('M  V30 '))
                continue;
            line = line.substring(7);
            if (line.startsWith('COUNTS '))
                lineCounts = line.substring(7);
            else if (line.startsWith('BEGIN CTAB'))
                inCTAB = true;
            else if (line.startsWith('END CTAB'))
                inCTAB = false;
            else if (line.startsWith('BEGIN ATOM'))
                inAtom = true;
            else if (line.startsWith('END ATOM'))
                inAtom = false;
            else if (line.startsWith('BEGIN BOND'))
                inBond = true;
            else if (line.startsWith('END BOND'))
                inBond = false;
            else if (inCTAB && inAtom && !inBond)
                lineAtoms.push(line);
            else if (inCTAB && inBond && !inAtom)
                lineBonds.push(line);
        }
        let counts = lineCounts.split("\\s+");
        if (counts.length < 2)
            throw ERRPFX + 'counts line malformatted';
        let numAtoms = parseInt(counts[0]), numBonds = parseInt(counts[1]);
        if (numAtoms < 0 || numAtoms > lineAtoms.length)
            throw ERRPFX + 'unreasonable atom count: ' + numAtoms;
        if (numBonds < 0 || numBonds > lineBonds.length)
            throw ERRPFX + 'unreasonable bond count: ' + numBonds;
        let atomBits = [], bondBits = [];
        for (let n = 0; n < lineAtoms.length; n++) {
            let line = lineAtoms[n];
            while (n < lineAtoms.length - 1 && line.endsWith('-')) {
                n++;
                line = line.substring(0, line.length - 1) + lineAtoms[n];
            }
            let bits = this.splitWithQuotes(line);
            if (bits.length < 6)
                throw ERRPFX + 'atom line has too few components: ' + line;
            let idx = parseInt(bits[0], 0);
            if (idx < 1 || idx > numAtoms)
                throw ERRPFX + 'invalid atom index: ' + bits[0];
            if (atomBits[idx - 1] != null)
                throw ERRPFX + 'duplicate atom index: ' + idx;
            atomBits[idx - 1] = bits;
        }
        for (let n = 0; n < lineBonds.length; n++) {
            let line = lineBonds[n];
            while (n < lineBonds.length - 1 && line.endsWith("-")) {
                n++;
                line = line.substring(0, line.length - 1) + lineBonds[n];
            }
            let bits = this.splitWithQuotes(line);
            if (bits.length < 4)
                throw ERRPFX + 'bond line has too few components: ' + line;
            let idx = parseInt(bits[0], 0);
            if (idx < 1 || idx > numBonds)
                throw ERRPFX + 'invalid bond index: ' + bits[0];
            if (bondBits[idx - 1] != null)
                throw ERRPFX + 'duplicate bond index: ' + idx;
            bondBits[idx - 1] = bits;
        }
        for (let n = 1; n <= numAtoms; n++) {
            let bits = atomBits[n - 1];
            if (bits == null)
                throw ERRPFX + 'atom definition missing for #' + n;
            let type = bits[1];
            let x = parseFloat(bits[2]), y = parseFloat(bits[3]), z = parseFloat(bits[4]);
            let map = parseInt(bits[5]);
            this.mol.addAtom(type, x, y);
            this.mol.setAtomMapNum(n, map);
            for (let i = 6; i < bits.length; i++) {
                let eq = bits[i].indexOf('=');
                if (eq < 0)
                    continue;
                let key = bits[i].substring(0, eq), val = bits[i].substring(eq + 1);
                if (key == 'CHG')
                    this.mol.setAtomCharge(n, parseInt(val));
                else if (key == 'RAD')
                    this.mol.setAtomUnpaired(n, parseInt(val));
                else if (key == 'MASS')
                    this.mol.setAtomIsotope(n, parseInt(val));
                else if (key == 'CFG') {
                    let stereo = parseInt(val);
                    if (stereo > 0 && this.keepParity) {
                    }
                }
            }
        }
        for (let n = 1; n <= numBonds; n++) {
            let bits = bondBits[n - 1];
            if (bits == null)
                throw ERRPFX + 'bond definition missing for #' + n;
            let type = parseInt(bits[1]), bfr = parseInt(bits[2]), bto = parseInt(bits[3]);
            let order = type >= 1 && type <= 3 ? type : 1;
            this.mol.addBond(bfr, bto, order);
            if (type == 4) {
            }
            for (let i = 4; i < bits.length; i++) {
                let eq = bits[i].indexOf('=');
                if (eq < 0)
                    continue;
                let key = bits[i].substring(0, eq), val = bits[i].substring(eq + 1);
                if (key == 'CFG') {
                    let dir = parseInt(val);
                    this.mol.setBondType(n, dir == 1 ? Molecule.BONDTYPE_INCLINED :
                        dir == 2 ? Molecule.BONDTYPE_UNKNOWN :
                            dir == 3 ? Molecule.BONDTYPE_DECLINED : Molecule.BONDTYPE_NORMAL);
                }
            }
        }
        this.postFix();
    }
    splitWithQuotes(line) {
        return line.split('\\s+');
    }
}
class MDLSDFReader {
    constructor(strData) {
        this.ds = new DataSheet();
        this.upcastColumns = true;
        this.pos = 0;
        this.lines = strData.split(/\r?\n/);
    }
    parse() {
        this.parseStream();
        if (this.upcastColumns)
            this.upcastStringColumns();
        return this.ds;
    }
    parseStream() {
        let ds = this.ds;
        ds.appendColumn('Molecule', DataSheet.COLTYPE_MOLECULE, 'Molecular structure');
        let entry = [];
        while (this.pos < this.lines.length) {
            let line = this.lines[this.pos++];
            if (!line.startsWith('$$$$')) {
                entry.push(line);
                continue;
            }
            let rn = ds.appendRow();
            let molstr = '';
            let pos = 0;
            while (pos < entry.length) {
                line = entry[pos];
                if (line.startsWith('> '))
                    break;
                molstr += line + '\n';
                pos++;
                if (line.startsWith('M	END'))
                    break;
            }
            let mol = null;
            try {
                if (molstr.length > 0) {
                    let mdl = new MDLMOLReader(molstr);
                    mdl.parse();
                    mol = mdl.mol;
                }
            }
            catch (ex) {
            }
            if (mol != null)
                ds.setMolecule(rn, 0, mol);
            if (rn == 0 && mol != null) {
                let str1 = entry[0], str3 = entry[2];
                if (str1.length >= 7 && str1.startsWith("$name=")) {
                    ds.changeColumnName(0, str1.substring(6), ds.colDescr(0));
                }
                if (str3.length >= 8 && str3.startsWith("$title=")) {
                    ds.setTitle(str3.substring(7));
                }
            }
            for (; pos + 1 < entry.length; pos += 3) {
                let key = entry[pos], val = entry[pos + 1];
                if (!key.startsWith('>'))
                    continue;
                let z = key.indexOf('<');
                if (z < 0)
                    continue;
                key = key.substring(z + 1);
                z = key.indexOf('>');
                if (z < 0)
                    continue;
                key = key.substring(0, z);
                if (key.length == 0)
                    continue;
                while (pos + 2 < entry.length && entry[pos + 2].length > 0) {
                    val += '\n' + entry[pos + 2];
                    pos++;
                }
                let cn = ds.findColByName(key);
                if (cn < 0)
                    cn = ds.appendColumn(key, DataSheet.COLTYPE_STRING, '');
                if (val.length == 0)
                    ds.setToNull(rn, cn);
                else
                    ds.setString(rn, cn, val);
            }
            entry = [];
        }
        if (ds.numRows == 0)
            this.ds = null;
    }
    upcastStringColumns() {
        let ds = this.ds;
        for (let i = 0; i < ds.numCols; i++)
            if (ds.colType(i) == DataSheet.COLTYPE_STRING) {
                let allnull = true, allreal = true, allint = true, allbool = true;
                for (let j = 0; j < ds.numRows; j++) {
                    if (!allreal && !allint && !allbool)
                        break;
                    if (ds.isNull(j, i))
                        continue;
                    allnull = false;
                    let val = ds.getString(j, i);
                    if (allbool) {
                        let lc = val.toLowerCase();
                        if (lc != 'true' && lc != 'false')
                            allbool = false;
                    }
                    if (allint) {
                        let int = parseInt(val);
                        if (!isFinite(int) || int != parseFloat(val))
                            allint = false;
                    }
                    if (allreal) {
                        if (!isFinite(parseFloat(val)))
                            allreal = false;
                    }
                }
                if (allnull) { }
                else if (allint)
                    ds.changeColumnType(i, DataSheet.COLTYPE_INTEGER);
                else if (allreal)
                    ds.changeColumnType(i, DataSheet.COLTYPE_REAL);
                else if (allbool)
                    ds.changeColumnType(i, DataSheet.COLTYPE_BOOLEAN);
            }
    }
}
class DataSheet {
    constructor(data) {
        if (!data)
            data = {};
        if (!data.title)
            data.title = '';
        if (!data.description)
            data.description = '';
        if (data.numCols == null)
            data.numCols = 0;
        if (data.numRows == null)
            data.numRows = 0;
        if (data.numExtens == null)
            data.numExtens = 0;
        if (data.colData == null)
            data.colData = [];
        if (data.rowData == null)
            data.rowData = [];
        if (data.extData == null)
            data.extData = [];
        this.data = data;
    }
    getData() {
        return this.data;
    }
    get numCols() {
        return this.data.numCols;
    }
    get numRows() {
        return this.data.numRows;
    }
    getTitle() {
        return this.data.title;
    }
    getDescription() {
        return this.data.description;
    }
    setTitle(val) {
        this.data.title = val;
    }
    setDescription(val) {
        this.data.description = val;
    }
    get numExtensions() {
        return this.data.numExtens;
    }
    getExtName(idx) {
        return this.data.extData[idx].name;
    }
    getExtType(idx) {
        return this.data.extData[idx].type;
    }
    getExtData(idx) {
        return this.data.extData[idx].data;
    }
    setExtName(idx, val) {
        this.data.extData[idx].name = val;
    }
    setExtType(idx, val) {
        this.data.extData[idx].type = val;
    }
    setExtData(idx, val) {
        this.data.extData[idx].data = val;
    }
    appendExtension(name, type, data) {
        this.data.numExtens++;
        this.data.extData.push({ 'name': name, 'type': type, 'data': data });
        return this.data.numExtens - 1;
    }
    deleteExtension(idx) {
        this.data.extData.splice(idx, 1);
    }
    colName(col) {
        return this.data.colData[col].name;
    }
    colType(col) {
        return this.data.colData[col].type;
    }
    colDescr(col) {
        return this.data.colData[col].descr;
    }
    isNull(row, col) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return null;
        return this.data.rowData[row][col] == null;
    }
    notNull(row, col) { return !this.isNull(row, col); }
    getObject(row, col) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        return this.data.rowData[row][col];
    }
    getMolecule(row, col) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return null;
        let datum = this.data.rowData[row][col];
        if (datum == null)
            return null;
        if (typeof datum === 'string') {
            datum = Molecule.fromString(datum);
            this.data.rowData[row][col] = datum;
        }
        return datum;
    }
    getString(row, col) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return null;
        let str = this.data.rowData[row][col];
        return str == null ? '' : str;
    }
    getInteger(row, col) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return null;
        return this.data.rowData[row][col];
    }
    getReal(row, col) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return null;
        return this.data.rowData[row][col];
    }
    getBoolean(row, col) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return null;
        return this.data.rowData[row][col];
    }
    getExtend(row, col) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return null;
        return this.data.rowData[row][col];
    }
    setToNull(row, col) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return;
        this.data.rowData[row][col] = null;
    }
    setObject(row, col, val) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return;
        this.data.rowData[row][col] = val;
    }
    setMolecule(row, col, mol) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return;
        this.data.rowData[row][col] = mol.clone();
    }
    setString(row, col, val) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return;
        this.data.rowData[row][col] = val;
    }
    setInteger(row, col, val) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return;
        this.data.rowData[row][col] = val;
    }
    setReal(row, col, val) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return;
        this.data.rowData[row][col] = val;
    }
    setBoolean(row, col, val) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return;
        this.data.rowData[row][col] = val;
    }
    setExtend(row, col, val) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (col < 0)
            return;
        this.data.rowData[row][col] = val;
    }
    isEqualMolecule(row, col, mol) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (this.isNull(row, col) != (mol == null))
            return false;
        if (mol == null)
            return true;
        return this.getMolecule(row, col).compareTo(mol) == 0;
    }
    isEqualString(row, col, val) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (this.isNull(row, col) != (val == null || val == ''))
            return false;
        if (val == null || val == '')
            return true;
        return this.getString(row, col) == val;
    }
    isEqualInteger(row, col, val) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (this.isNull(row, col) != (val == null))
            return false;
        if (val == null)
            return true;
        return this.getInteger(row, col) == val;
    }
    isEqualReal(row, col, val) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (this.isNull(row, col) != (val == null))
            return false;
        if (val == null)
            return true;
        return this.getReal(row, col) == val;
    }
    isEqualBoolean(row, col, val) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        if (this.isNull(row, col) != (val == null))
            return false;
        if (val == null)
            return true;
        return this.getBoolean(row, col) == val;
    }
    appendColumn(name, type, descr) {
        this.data.numCols++;
        this.data.colData.push({ 'name': name, 'type': type, 'descr': descr });
        for (let n = 0; n < this.data.numRows; n++)
            this.data.rowData[n].push(null);
        return this.data.numCols - 1;
    }
    deleteColumn(col) {
        this.data.numCols--;
        this.data.colData.splice(col, 1);
        for (let n = 0; n < this.data.numRows; n++)
            this.data.rowData[n].splice(col, 1);
    }
    changeColumnName(col, name, descr) {
        this.data.colData[col].name = col;
        this.data.colData[col].descr = descr;
    }
    changeColumnType(col, newType) {
        let oldType = this.colType(col);
        if (oldType == newType)
            return;
        let incompatible = oldType == DataSheet.COLTYPE_MOLECULE || newType == DataSheet.COLTYPE_MOLECULE ||
            oldType == DataSheet.COLTYPE_EXTEND || newType == DataSheet.COLTYPE_EXTEND;
        for (let n = this.data.rowData.length - 1; n >= 0; n--) {
            let row = this.data.rowData[n];
            if (row[col] == null)
                continue;
            if (incompatible) {
                row[col] = null;
                continue;
            }
            let val = '';
            if (oldType == DataSheet.COLTYPE_STRING)
                val = row[col];
            else if (oldType == DataSheet.COLTYPE_INTEGER)
                val = row[col].toString();
            else if (oldType == DataSheet.COLTYPE_REAL)
                val = row[col].toString();
            else if (oldType == DataSheet.COLTYPE_BOOLEAN)
                val = row[col] ? 'true' : 'false';
            row[col] = null;
            if (newType == DataSheet.COLTYPE_STRING)
                row[col] = val;
            else if (newType == DataSheet.COLTYPE_INTEGER) {
                let num = parseInt(val);
                row[col] = isFinite(num) ? num : null;
            }
            else if (newType == DataSheet.COLTYPE_REAL) {
                let num = parseFloat(val);
                row[col] = isFinite(num) ? num : null;
            }
            else if (newType == DataSheet.COLTYPE_BOOLEAN)
                row[col] = val.toLowerCase() == 'true' ? true : false;
        }
        this.data.colData[col].type = newType;
    }
    ensureColumn(name, type, descr) {
        for (let n = 0; n < this.data.numCols; n++)
            if (this.data.colData[n].name == name) {
                if (this.data.colData[n].type != type)
                    this.changeColumnType(n, type);
                this.data.colData[n].descr = descr;
                return n;
            }
        return this.appendColumn(name, type, descr);
    }
    appendRow() {
        this.data.numRows++;
        let row = new Array();
        for (let n = 0; n < this.data.numCols; n++)
            row.push(null);
        this.data.rowData.push(row);
        return this.data.numRows - 1;
    }
    appendRowFrom(srcDS, row) {
        this.data.numRows++;
        this.data.rowData.push(srcDS.data.rowData[row].slice(0));
        return this.data.numRows - 1;
    }
    insertRow(row) {
        this.data.numRows++;
        let data = new Array();
        for (let n = 0; n < this.data.numCols; n++)
            data.push(null);
        this.data.rowData.splice(row, 0, data);
    }
    deleteRow(row) {
        this.data.numRows--;
        this.data.rowData.splice(row, 1);
    }
    deleteAllRows() {
        this.data.numRows = 0;
        this.data.rowData = new Array();
    }
    moveRowUp(row) {
        let data = this.data.rowData[row];
        this.data.rowData[row] = this.data.rowData[row - 1];
        this.data.rowData[row - 1] = data;
    }
    moveRowDown(row) {
        let data = this.data.rowData[row];
        this.data.rowData[row] = this.data.rowData[row + 1];
        this.data.rowData[row + 1] = data;
    }
    exciseSingleRow(row) {
        let newData = {
            'title': this.data.title,
            'description': this.data.description,
            'numCols': this.data.numCols,
            'numRows': 1,
            'numExtens': this.data.numExtens,
            'colData': this.data.colData.slice(0),
            'rowData': [this.data.rowData[row].slice(0)],
            'extData': this.data.extData.slice(0)
        };
        return new DataSheet(newData);
    }
    colIsPrimitive(col) {
        if (typeof col === 'string')
            col = this.findColByName(col);
        let ct = this.data.colData[col].type;
        return ct == 'string' || ct == 'real' || ct == 'integer' || ct == 'boolean';
    }
    findColByName(name, type) {
        for (let n = 0; n < this.data.numCols; n++)
            if (this.data.colData[n].name == name) {
                if (type == null || this.data.colData[n].type == type)
                    return n;
            }
        return -1;
    }
    firstColOfType(type) {
        for (let n = 0; n < this.data.numCols; n++)
            if (this.data.colData[n].type == type)
                return n;
        return -1;
    }
}
DataSheet.COLTYPE_MOLECULE = 'molecule';
DataSheet.COLTYPE_STRING = 'string';
DataSheet.COLTYPE_REAL = 'real';
DataSheet.COLTYPE_INTEGER = 'integer';
DataSheet.COLTYPE_BOOLEAN = 'boolean';
DataSheet.COLTYPE_EXTEND = 'extend';
class MDLMOLWriter {
    constructor(mol) {
        this.mol = mol;
        this.includeHeader = true;
        this.enhancedFields = true;
        this.chargeSeparate = true;
        this.molName = '';
        this.lines = [];
    }
    write() {
        if (this.includeHeader) {
            this.lines.push(this.molName);
            this.lines.push('Generated by WebMolKit');
            this.lines.push('');
            this.writeCTAB();
        }
        return this.lines.join('\n');
    }
    getResult() {
        return this.lines.join('\n');
    }
    writeCTAB() {
        let mol = this.mol;
        for (let n = 1; n <= mol.numAtoms; n++)
            if (MolUtil.hasAbbrev(mol, n)) {
                mol = mol.clone();
                MolUtil.expandAbbrevs(mol, true);
                break;
            }
        this.lines.push(this.intrpad(mol.numAtoms, 3) + this.intrpad(mol.numBonds, 3) + '  0  0  0  0  0  0  0  0999 V2000');
        let chgidx = [], chgval = [];
        let radidx = [], radval = [];
        let isoidx = [], isoval = [];
        let rgpidx = [], rgpval = [];
        let hydidx = [], hydval = [];
        let zchidx = [], zchval = [];
        let zboidx = [], zboval = [];
        for (let n = 1; n <= mol.numAtoms; n++) {
            let x = mol.atomX(n), y = mol.atomY(n), z = 0;
            let line = this.rpad(x.toFixed(4), 10) + this.rpad(y.toFixed(4), 10) + this.rpad(z.toFixed(4), 10);
            let str = mol.atomElement(n);
            if (str.length > 3)
                str = str.substring(0, 3);
            if (str.length > 1 && str.charAt(0) == 'R' && str.charAt(1) >= '0' && str.charAt(1) <= '9') {
                rgpidx.push(n);
                rgpval.push(parseInt(str.substring(1)));
                str = 'R#';
            }
            while (str.length < 4)
                str += ' ';
            line += ' ' + str + '0';
            let chg = mol.atomCharge(n), rad = mol.atomUnpaired(n), mapnum = mol.atomMapNum(n);
            if (chg >= -3 && chg <= -1)
                chg = 4 - chg;
            else if (chg == 0 && rad == 2)
                chg = 4;
            else if (chg >= 1 && chg <= 3)
                chg = 4 - chg;
            else
                chg = 0;
            line += this.intrpad(chg, 3) + '  0  0  0  0  0  0  0' + this.intrpad(mapnum, 3) + '  0  0';
            this.lines.push(line);
            if (mol.atomCharge(n) != 0) {
                chgidx.push(n);
                chgval.push(mol.atomCharge(n));
            }
            if (mol.atomUnpaired(n) != 0) {
                radidx.push(n);
                radval.push(mol.atomUnpaired(n));
            }
            if (mol.atomIsotope(n) != Molecule.ISOTOPE_NATURAL) {
                isoidx.push(n);
                isoval.push(mol.atomIsotope(n));
            }
        }
        for (let n = 1; n <= mol.numBonds; n++) {
            let type = mol.bondOrder(n);
            let stereo = mol.bondType(n);
            if (stereo == Molecule.BONDTYPE_NORMAL) { }
            else if (stereo == Molecule.BONDTYPE_INCLINED) {
                stereo = 1;
                type = 1;
            }
            else if (stereo == Molecule.BONDTYPE_DECLINED) {
                stereo = 6;
                type = 1;
            }
            else if (stereo == Molecule.BONDTYPE_UNKNOWN) {
                stereo = 4;
                type = 1;
            }
            else
                stereo = 0;
            let line = this.intrpad(mol.bondFrom(n), 3) + this.intrpad(mol.bondTo(n), 3) +
                this.intrpad(type, 3) + this.intrpad(stereo, 3) + '  0  0  0';
            this.lines.push(line);
        }
        this.writeMBlock('CHG', chgidx, chgval);
        this.writeMBlock('RAD', radidx, radval);
        this.writeMBlock('ISO', isoidx, isoval);
        this.writeMBlock('RGP', rgpidx, rgpval);
        this.writeMBlock('HYD', hydidx, hydval);
        this.writeMBlock('ZCH', zchidx, zchval);
        this.writeMBlock('ZBO', zboidx, zboval);
        for (let n = 1; n <= mol.numAtoms; n++)
            if (mol.atomElement(n).length > 2) {
                this.lines.push('A  ' + this.intrpad(n, 3));
                this.lines.push(mol.atomElement(n));
            }
        this.lines.push('M  END');
    }
    writeMBlock(token, idx, val) {
        const sz = idx.length;
        for (let i = 0; i < sz; i += 8) {
            let count = Math.min(8, sz - i);
            let line = "M  " + token + this.intrpad(count, 3);
            for (let j = 0; j < count; j++)
                line += this.intrpad(idx[i + j], 4) + this.intrpad(val[i + j], 4);
            this.lines.push(line);
        }
    }
    intrpad(num, sz) {
        return this.rpad(num.toString(), sz);
    }
    rpad(str, sz) {
        while (str.length < sz)
            str = ' ' + str;
        return str;
    }
}
class MDLSDFWriter {
    constructor(ds) {
        this.ds = ds;
        this.lines = [];
    }
    write() {
        let ds = this.ds, lines = this.lines;
        let colMol = this.ds.firstColOfType(DataSheet.COLTYPE_MOLECULE);
        for (let i = 0; i < ds.numRows; i++) {
            let mol = colMol < 0 ? null : ds.getMolecule(i, colMol);
            if (MolUtil.notBlank(mol)) {
                let molstr = new MDLMOLWriter(mol).write();
                lines.push(molstr);
            }
            for (let j = 0; j < ds.numCols; j++)
                if (j != colMol && ds.notNull(i, j)) {
                    let ct = ds.colType(j);
                    let val = '';
                    if (ct == DataSheet.COLTYPE_STRING)
                        val = ds.getString(i, j);
                    else if (ct == DataSheet.COLTYPE_INTEGER)
                        val = ds.getInteger(i, j).toString();
                    else if (ct == DataSheet.COLTYPE_REAL)
                        val = ds.getReal(i, j).toString();
                    else if (ct == DataSheet.COLTYPE_BOOLEAN)
                        val = ds.getBoolean(i, j) ? 'true' : 'false';
                    if (val != '') {
                        lines.push('> <' + ds.colName(j) + '>');
                        lines.push(val);
                        lines.push('');
                    }
                }
            lines.push('$$$$');
        }
        return lines.join('\n');
    }
    getResult() {
        return this.lines.join('\n');
    }
}
class MoleculeStream {
    static readUnknown(strData) {
        let mol = MoleculeStream.readNative(strData);
        if (mol)
            return mol;
        try {
            mol = MoleculeStream.readMDLMOL(strData);
        }
        catch (e) { }
        return mol;
    }
    static readNative(strData) {
        let mol = new Molecule();
        mol.keepTransient = true;
        let lines = strData.split(/\r?\n/);
        if (lines.length < 2)
            return null;
        if (!lines[0].startsWith('SketchEl!') && lines.length >= 4 && lines[3].indexOf('V2000') >= 0) {
            let i = strData.indexOf('SketchEl!');
            if (i < 0)
                return null;
            lines = strData.substring(i).split(/r?\n/);
        }
        let bits = lines[0].match(/^SketchEl\!\((\d+)\,(\d+)\)/);
        if (!bits)
            return null;
        let numAtoms = parseInt(bits[1]), numBonds = parseInt(bits[2]);
        if (lines.length < 2 + numAtoms + numBonds)
            return null;
        if (!lines[1 + numAtoms + numBonds].match(/^!End/))
            return null;
        for (let n = 0; n < numAtoms; n++) {
            bits = lines[1 + n].split(/[=,;]/);
            let num = mol.addAtom(bits[0], parseFloat(bits[1]), parseFloat(bits[2]), parseInt(bits[3]), parseInt(bits[4]));
            let extra = [], trans = [];
            for (let i = 5; i < bits.length; i++) {
                let ch = bits[i].charAt(0);
                if (bits[i].charAt(0) == 'i') { }
                else if (bits[i].charAt(0) == 'e')
                    mol.setAtomHExplicit(num, parseInt(bits[i].substring(1)));
                else if (bits[i].charAt(0) == 'm')
                    mol.setAtomIsotope(num, parseInt(bits[i].substring(1)));
                else if (bits[i].charAt(0) == 'n')
                    mol.setAtomMapNum(num, parseInt(bits[i].substring(1)));
                else if (bits[i].charAt(0) == 'x')
                    extra.push(MoleculeStream.sk_unescape(bits[i]));
                else if (bits[i].charAt(0) == 'y')
                    trans.push(MoleculeStream.sk_unescape(bits[i]));
                else if (bits[i].charAt(0) == 'z') {
                    mol.setAtomZ(num, parseFloat(bits[i].substring(1)));
                    mol.setIs3D(true);
                }
                else
                    extra.push(MoleculeStream.sk_unescape(bits[i]));
            }
            mol.setAtomExtra(num, extra);
            mol.setAtomTransient(num, trans);
        }
        for (let n = 0; n < numBonds; n++) {
            bits = lines[1 + numAtoms + n].split(/[-=,]/);
            let num = mol.addBond(parseInt(bits[0]), parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3]));
            let extra = new Array(), trans = new Array();
            for (let i = 4; i < bits.length; i++) {
                let ch = bits[i].charAt(0);
                if (bits[i].charAt(0) == 'x')
                    extra.push(MoleculeStream.sk_unescape(bits[i]));
                else if (bits[i].charAt(0) == 'y')
                    trans.push(MoleculeStream.sk_unescape(bits[i]));
                else
                    extra.push(MoleculeStream.sk_unescape(bits[i]));
            }
            mol.setBondExtra(num, extra);
            mol.setBondTransient(num, trans);
        }
        mol.keepTransient = false;
        return mol;
    }
    static writeNative(mol) {
        let ret = 'SketchEl!(' + mol.numAtoms + ',' + mol.numBonds + ')\n';
        for (let n = 1; n <= mol.numAtoms; n++) {
            let el = mol.atomElement(n), x = mol.atomX(n), y = mol.atomY(n), charge = mol.atomCharge(n), unpaired = mol.atomUnpaired(n);
            let hy = mol.atomHExplicit(n) != Molecule.HEXPLICIT_UNKNOWN ? ('e' + mol.atomHExplicit(n)) : ('i' + mol.atomHydrogens(n));
            ret += MoleculeStream.sk_escape(el) + '=' + x.toFixed(4) + ',' + y.toFixed(4) + ';' + charge + ',' + unpaired + ',' + hy;
            if (mol.is3D())
                ret += ',z' + mol.atomZ(n);
            if (mol.atomIsotope(n) != Molecule.ISOTOPE_NATURAL)
                ret += ',m' + mol.atomIsotope(n);
            if (mol.atomMapNum(n) > 0)
                ret += ',n' + mol.atomMapNum(n);
            ret += MoleculeStream.sk_encodeExtra(mol.atomExtra(n));
            ret += MoleculeStream.sk_encodeExtra(mol.atomTransient(n));
            ret += '\n';
        }
        for (let n = 1; n <= mol.numBonds; n++) {
            ret += mol.bondFrom(n) + '-' + mol.bondTo(n) + '=' + mol.bondOrder(n) + ',' + mol.bondType(n);
            ret += MoleculeStream.sk_encodeExtra(mol.bondExtra(n));
            ret += MoleculeStream.sk_encodeExtra(mol.bondTransient(n));
            ret += '\n';
        }
        ret += '!End\n';
        return ret;
    }
    static readMDLMOL(strData) {
        let src = new MDLMOLReader(strData);
        src.parseHeader = true;
        src.parse();
        return src.mol;
    }
    static writeMDLMOL(mol) {
        return new MDLMOLWriter(mol).write();
    }
    static sk_unescape(str) {
        let ret = '', match;
        while (match = str.match(/^(.*?)\\([0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f])(.*)/)) {
            ret += match[1] + String.fromCharCode(parseInt("0x" + match[2]));
            str = match[3];
        }
        return ret + str;
    }
    static sk_escape(str) {
        let ret = '';
        for (let n = 0; n < str.length; n++) {
            let ch = str.charAt(n), code = str.charCodeAt(n);
            if (code <= 32 || code > 127 || ch == '\\' || ch == ',' || ch == ';' || ch == '=') {
                let hex = (code & 0xFFFF).toString(16).toUpperCase();
                ret += '\\';
                for (let i = 4 - hex.length; i > 0; i--)
                    ret += '0';
                ret += hex;
            }
            else
                ret += ch;
        }
        return ret;
    }
    static sk_encodeExtra(extra) {
        let ret = '';
        for (let n = 0; n < extra.length; n++)
            ret += ',' + MoleculeStream.sk_escape(extra[n]);
        return ret;
    }
    ;
}
class Chemistry {
}
Chemistry.ELEMENTS = [
    null,
    "H", "He",
    "Li", "Be", "B", "C", "N", "O", "F", "Ne",
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
    "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
    "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
    "Cs", "Ba",
    "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb",
    "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn",
    "Fr", "Ra",
    "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No",
    "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn"
];
Chemistry.ELEMENT_GROUPS = [
    0,
    1, 18,
    1, 2, 13, 14, 15, 16, 17, 18,
    1, 2, 13, 14, 15, 16, 17, 18,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    1, 2,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    1, 2,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];
Chemistry.ELEMENT_ROWS = [
    0,
    1, 1,
    2, 2, 2, 2, 2, 2, 2, 2,
    3, 3, 3, 3, 3, 3, 3, 3,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    6, 6,
    6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
    6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
    7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7
];
Chemistry.ELEMENT_BLOCKS = [
    0,
    1, 2,
    1, 1, 2, 2, 2, 2, 2, 2,
    1, 1, 2, 2, 2, 2, 2, 2,
    1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2,
    1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2,
    1, 1,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2,
    1, 1,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3
];
Chemistry.ELEMENT_VALENCE = [
    0,
    1, 2,
    1, 2, 3, 4, 5, 6, 7, 8,
    1, 2, 3, 4, 5, 6, 7, 8,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 4, 5, 6, 7, 8,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 4, 5, 6, 7, 8,
    1, 2,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 4, 5, 6, 7, 8,
    1, 1,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];
Chemistry.ELEMENT_BONDING = [
    0,
    1, 0,
    1, 2, 3, 4, 3, 2, 1, 0,
    1, 2, 3, 4, 3, 2, 1, 0,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 4, 3, 2, 1, 0,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 4, 3, 2, 1, 0,
    1, 2,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 4, 3, 2, 1, 0,
    1, 1,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12
];
Chemistry.ELEMENT_SHELL = [
    0,
    2, 2,
    8, 8, 8, 8, 8, 8, 8, 8,
    8, 8, 8, 8, 8, 8, 8, 8,
    8, 8, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 8, 8, 8, 8, 8, 8,
    8, 8, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 8, 8, 8, 8, 8, 8,
    8, 8,
    18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
    18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
    8, 8,
    18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
    18, 18, 18, 18, 18, 18, 18, 18, 18, 18
];
Chemistry.NATURAL_ATOMIC_WEIGHTS = [
    0, 1.00794, 4.002602, 6.941, 9.012182, 10.811, 12.0107, 14.0067, 15.9994, 18.9984032, 20.1797,
    22.989770, 24.3050, 26.981538, 28.0855, 30.973761, 32.065, 35.453, 39.948, 39.0983, 40.078,
    44.955910, 47.867, 50.9415, 51.9961, 54.938049, 55.845, 58.933200, 58.6934, 63.546, 65.409,
    69.723, 72.64, 74.92160, 78.96, 79.904, 83.798, 85.4678, 87.62, 88.90585, 91.224, 92.90638,
    95.94, 98, 101.07, 102.90550, 106.42, 107.8682, 112.411, 114.818, 118.710, 121.760, 127.60,
    126.90447, 131.293, 132.90545, 137.327, 138.9055, 140.116, 140.90765, 144.24, 145, 150.36,
    151.964, 157.25, 158.92534, 162.500, 164.93032, 167.259, 168.93421, 173.04, 174.967, 178.49,
    180.9479, 183.84, 186.207, 190.23, 192.217, 195.078, 196.96655, 200.59, 204.3833, 207.2, 208.98038,
    209, 210, 222, 223, 226, 227, 230.0331266, 231.03588, 233.039628, 237, 244, 243, 247, 247, 251, 252, 257,
    258, 259, 262, 261, 262, 266, 264, 277, 268, 271, 272, 285
];
Chemistry.ELEMENT_H = 1;
Chemistry.ELEMENT_He = 2;
Chemistry.ELEMENT_Li = 3;
Chemistry.ELEMENT_Be = 4;
Chemistry.ELEMENT_B = 5;
Chemistry.ELEMENT_C = 6;
Chemistry.ELEMENT_N = 7;
Chemistry.ELEMENT_O = 8;
Chemistry.ELEMENT_F = 9;
Chemistry.ELEMENT_Ne = 10;
Chemistry.ELEMENT_Na = 11;
Chemistry.ELEMENT_Mg = 12;
Chemistry.ELEMENT_Al = 13;
Chemistry.ELEMENT_Si = 14;
Chemistry.ELEMENT_P = 15;
Chemistry.ELEMENT_S = 16;
Chemistry.ELEMENT_Cl = 17;
Chemistry.ELEMENT_Ar = 18;
Chemistry.ELEMENT_K = 19;
Chemistry.ELEMENT_Ca = 20;
Chemistry.ELEMENT_Sc = 21;
Chemistry.ELEMENT_Ti = 22;
Chemistry.ELEMENT_V = 23;
Chemistry.ELEMENT_Cr = 24;
Chemistry.ELEMENT_Mn = 25;
Chemistry.ELEMENT_Fe = 26;
Chemistry.ELEMENT_Co = 27;
Chemistry.ELEMENT_Ni = 28;
Chemistry.ELEMENT_Cu = 29;
Chemistry.ELEMENT_Zn = 30;
Chemistry.ELEMENT_Ga = 31;
Chemistry.ELEMENT_Ge = 32;
Chemistry.ELEMENT_As = 33;
Chemistry.ELEMENT_Se = 34;
Chemistry.ELEMENT_Br = 35;
Chemistry.ELEMENT_Kr = 36;
Chemistry.ELEMENT_Rb = 37;
Chemistry.ELEMENT_Sr = 38;
Chemistry.ELEMENT_Y = 39;
Chemistry.ELEMENT_Zr = 40;
Chemistry.ELEMENT_Nb = 41;
Chemistry.ELEMENT_Mo = 42;
Chemistry.ELEMENT_Tc = 43;
Chemistry.ELEMENT_Ru = 44;
Chemistry.ELEMENT_Rh = 45;
Chemistry.ELEMENT_Pd = 46;
Chemistry.ELEMENT_Ag = 47;
Chemistry.ELEMENT_Cd = 48;
Chemistry.ELEMENT_In = 49;
Chemistry.ELEMENT_Sn = 50;
Chemistry.ELEMENT_Sb = 51;
Chemistry.ELEMENT_Te = 52;
Chemistry.ELEMENT_I = 53;
Chemistry.ELEMENT_Xe = 54;
Chemistry.ELEMENT_Cs = 55;
Chemistry.ELEMENT_Ba = 56;
Chemistry.ELEMENT_La = 57;
Chemistry.ELEMENT_Ce = 58;
Chemistry.ELEMENT_Pr = 59;
Chemistry.ELEMENT_Nd = 60;
Chemistry.ELEMENT_Pm = 61;
Chemistry.ELEMENT_Sm = 62;
Chemistry.ELEMENT_Eu = 63;
Chemistry.ELEMENT_Gd = 64;
Chemistry.ELEMENT_Tb = 65;
Chemistry.ELEMENT_Dy = 66;
Chemistry.ELEMENT_Ho = 67;
Chemistry.ELEMENT_Er = 68;
Chemistry.ELEMENT_Tm = 69;
Chemistry.ELEMENT_Yb = 70;
Chemistry.ELEMENT_Lu = 71;
Chemistry.ELEMENT_Hf = 72;
Chemistry.ELEMENT_Ta = 73;
Chemistry.ELEMENT_W = 74;
Chemistry.ELEMENT_Re = 75;
Chemistry.ELEMENT_Os = 76;
Chemistry.ELEMENT_Ir = 77;
Chemistry.ELEMENT_Pt = 78;
Chemistry.ELEMENT_Au = 79;
Chemistry.ELEMENT_Hg = 80;
Chemistry.ELEMENT_Tl = 81;
Chemistry.ELEMENT_Pb = 82;
Chemistry.ELEMENT_Bi = 83;
Chemistry.ELEMENT_Po = 84;
Chemistry.ELEMENT_At = 85;
Chemistry.ELEMENT_Rn = 86;
Chemistry.ELEMENT_Fr = 87;
Chemistry.ELEMENT_Ra = 88;
Chemistry.ELEMENT_Ac = 89;
Chemistry.ELEMENT_Th = 90;
Chemistry.ELEMENT_Pa = 91;
Chemistry.ELEMENT_U = 92;
Chemistry.ELEMENT_Np = 93;
Chemistry.ELEMENT_Pu = 94;
Chemistry.ELEMENT_Am = 95;
Chemistry.ELEMENT_Cm = 96;
Chemistry.ELEMENT_Bk = 97;
Chemistry.ELEMENT_Cf = 98;
Chemistry.ELEMENT_Es = 99;
Chemistry.ELEMENT_Fm = 100;
Chemistry.ELEMENT_Md = 101;
Chemistry.ELEMENT_No = 102;
Chemistry.ELEMENT_Lr = 103;
Chemistry.ELEMENT_Rf = 104;
Chemistry.ELEMENT_Db = 105;
Chemistry.ELEMENT_Sg = 106;
Chemistry.ELEMENT_Bh = 107;
Chemistry.ELEMENT_Hs = 108;
Chemistry.ELEMENT_Mt = 109;
Chemistry.ELEMENT_Ds = 110;
Chemistry.ELEMENT_Rg = 111;
Chemistry.ELEMENT_Cn = 112;
class Atom {
}
class Bond {
}
class Molecule {
    constructor() {
        this.atoms = [];
        this.bonds = [];
        this.hasZCoord = false;
        this.keepTransient = false;
        this.hasTransient = false;
        this.graph = null;
        this.graphBond = null;
        this.ringID = null;
        this.compID = null;
        this.ring3 = null;
        this.ring4 = null;
        this.ring5 = null;
        this.ring6 = null;
        this.ring7 = null;
    }
    clone() { return Molecule.fromString(this.toString()); }
    static fromString(strData) { return MoleculeStream.readNative(strData); }
    toString() { return MoleculeStream.writeNative(this); }
    append(frag) {
        let base = this.atoms.length;
        for (let n = 1; n <= frag.numAtoms; n++) {
            let num = this.addAtom(frag.atomElement(n), frag.atomX(n), frag.atomY(n), frag.atomCharge(n), frag.atomUnpaired(n));
            this.setAtomIsotope(num, frag.atomIsotope(n));
            this.setAtomHExplicit(num, frag.atomHExplicit(n));
            this.setAtomMapNum(num, frag.atomMapNum(n));
            this.setAtomExtra(num, frag.atomExtra(n));
        }
        for (let n = 1; n <= frag.numBonds; n++) {
            let num = this.addBond(frag.bondFrom(n) + base, frag.bondTo(n) + base, frag.bondOrder(n), frag.bondType(n));
            this.setBondExtra(num, frag.bondExtra(n));
        }
        this.trashTransient();
    }
    get numAtoms() { return this.atoms.length; }
    getAtom(idx) {
        if (idx < 1 || idx > this.atoms.length)
            throw `Molecule.getAtom: index ${idx} out of range (#atoms=${this.atoms.length})`;
        ;
        return this.atoms[idx - 1];
    }
    atomElement(idx) { return this.getAtom(idx).element; }
    atomX(idx) { return this.getAtom(idx).x; }
    atomY(idx) { return this.getAtom(idx).y; }
    atomCharge(idx) { return this.getAtom(idx).charge; }
    atomUnpaired(idx) { return this.getAtom(idx).unpaired; }
    atomIsotope(idx) { return this.getAtom(idx).isotope; }
    atomHExplicit(idx) { return this.getAtom(idx).hExplicit; }
    atomMapNum(idx) { return this.getAtom(idx).mapNum; }
    atomExtra(idx) { return this.getAtom(idx).extra.slice(0); }
    atomTransient(idx) { return this.getAtom(idx).transient.slice(0); }
    get numBonds() { return this.bonds.length; }
    getBond(idx) {
        if (idx < 1 || idx > this.bonds.length)
            throw `Molecule.getBond: index ${idx} out of range (#bonds=${this.bonds.length})`;
        ;
        return this.bonds[idx - 1];
    }
    bondFrom(idx) { return this.getBond(idx).from; }
    bondTo(idx) { return this.getBond(idx).to; }
    bondOrder(idx) { return this.getBond(idx).order; }
    bondType(idx) { return this.getBond(idx).type; }
    bondExtra(idx) { return this.getBond(idx).extra.slice(0); }
    bondTransient(idx) { return this.getBond(idx).transient.slice(0); }
    addAtom(element, x, y, charge = 0, unpaired = 0) {
        let a = new Atom();
        a.element = element;
        a.x = x;
        a.y = y;
        a.charge = charge;
        a.unpaired = unpaired;
        a.isotope = Molecule.ISOTOPE_NATURAL;
        a.hExplicit = Molecule.HEXPLICIT_UNKNOWN;
        a.mapNum = 0;
        a.extra = [];
        a.transient = [];
        this.atoms.push(a);
        this.trashTransient();
        this.trashGraph();
        return this.atoms.length;
    }
    setAtomElement(idx, element) {
        this.getAtom(idx).element = element;
        this.trashTransient();
    }
    setAtomPos(idx, x, y, z) {
        let a = this.getAtom(idx);
        a.x = x;
        a.y = y;
        a.z = z == null ? 0 : z;
        this.trashTransient();
    }
    setAtomX(idx, x) {
        this.getAtom(idx).x = x;
        this.trashTransient();
    }
    setAtomY(idx, y) {
        this.getAtom(idx).y = y;
        this.trashTransient();
    }
    setAtomCharge(idx, charge) {
        this.getAtom(idx).charge = charge;
        this.trashTransient();
    }
    setAtomUnpaired(idx, unpaired) {
        this.getAtom(idx).unpaired = unpaired;
        this.trashTransient();
    }
    setAtomIsotope(idx, isotope) {
        this.getAtom(idx).isotope = isotope;
        this.trashTransient();
    }
    setAtomHExplicit(idx, hExplicit) {
        this.getAtom(idx).hExplicit = hExplicit;
        this.trashTransient();
    }
    setAtomMapNum(idx, mapNum) {
        this.getAtom(idx).mapNum = mapNum;
        this.trashTransient();
    }
    setAtomExtra(idx, extra) {
        this.getAtom(idx).extra = extra.slice(0);
    }
    setAtomTransient(idx, transi) {
        this.getAtom(idx).transient = transi.slice(0);
        if (transi.length > 0)
            this.hasTransient = true;
    }
    swapAtoms(a1, a2) {
        let a = this.atoms[a1 - 1];
        this.atoms[a1 - 1] = this.atoms[a2 - 1];
        this.atoms[a2 - 1] = a;
        for (let n = 0; n < this.bonds.length; n++) {
            let b = this.bonds[n];
            if (b.from == a2)
                b.from = a1;
            else if (b.from == a1)
                b.from = a2;
            if (b.to == a2)
                b.to = a1;
            else if (b.to == a1)
                b.to = a2;
        }
        this.trashGraph();
        this.trashTransient();
    }
    addBond(from, to, order, type = Molecule.BONDTYPE_NORMAL) {
        let b = new Bond();
        b.from = from;
        b.to = to;
        b.order = order;
        b.type = type;
        b.extra = [];
        b.transient = [];
        this.bonds.push(b);
        this.trashTransient();
        this.trashGraph();
        return this.bonds.length;
    }
    setBondFrom(idx, bfr) {
        this.getBond(idx).from = bfr;
        this.trashTransient();
        this.trashGraph();
    }
    setBondTo(idx, to) {
        this.getBond(idx).to = to;
        this.trashTransient();
        this.trashGraph();
    }
    setBondFromTo(idx, bfr, bto) {
        this.getBond(idx).from = bfr;
        this.getBond(idx).to = bto;
        this.trashTransient();
        this.trashGraph();
    }
    setBondOrder(idx, order) {
        this.getBond(idx).order = order;
        this.trashTransient();
    }
    setBondType(idx, type) {
        this.getBond(idx).type = type;
        this.trashTransient();
    }
    setBondExtra(idx, extra) {
        this.getBond(idx).extra = extra.slice(0);
    }
    setBondTransient(idx, transi) {
        this.getBond(idx).transient = transi.slice(0);
        if (transi.length > 0)
            this.hasTransient = true;
    }
    deleteAtomAndBonds(idx) {
        for (let n = this.numBonds; n >= 1; n--) {
            if (this.bondFrom(n) == idx || this.bondTo(n) == idx)
                this.deleteBond(n);
            else {
                if (this.bondFrom(n) > idx)
                    this.setBondFrom(n, this.bondFrom(n) - 1);
                if (this.bondTo(n) > idx)
                    this.setBondTo(n, this.bondTo(n) - 1);
            }
        }
        this.atoms.splice(idx - 1, 1);
        this.trashTransient();
        this.trashGraph();
    }
    deleteBond(idx) {
        this.bonds.splice(idx - 1, 1);
        this.trashTransient();
        this.trashGraph();
    }
    atomHydrogens(idx) {
        let hy = this.atomHExplicit(idx);
        if (hy != Molecule.HEXPLICIT_UNKNOWN)
            return hy;
        for (let n = 0; n < Molecule.HYVALENCE_EL.length; n++)
            if (Molecule.HYVALENCE_EL[n] == this.atomElement(idx)) {
                hy = Molecule.HYVALENCE_VAL[n];
                break;
            }
        if (hy == Molecule.HEXPLICIT_UNKNOWN)
            return 0;
        let ch = this.atomCharge(idx);
        if (this.atomElement(idx) == 'C')
            ch = -Math.abs(ch);
        hy += ch - this.atomUnpaired(idx);
        let adjBonds = this.atomAdjBonds(idx);
        for (let n = 0; n < adjBonds.length; n++)
            hy -= this.bondOrder(adjBonds[n]);
        return hy < 0 ? 0 : hy;
    }
    findBond(a1, a2) {
        for (let n = 1; n <= this.numBonds; n++) {
            let b1 = this.bondFrom(n), b2 = this.bondTo(n);
            if ((a1 == b1 && a2 == b2) || (a1 == b2 && a2 == b1))
                return n;
        }
        return 0;
    }
    bondOther(idx, ref) {
        let b1 = this.bondFrom(idx), b2 = this.bondTo(idx);
        if (b1 == ref)
            return b2;
        if (b2 == ref)
            return b1;
        return 0;
    }
    atomExplicit(idx) {
        let a = this.atoms[idx - 1];
        if (a.isotope != Molecule.ISOTOPE_NATURAL)
            return true;
        if (a.element != 'C' || a.charge != 0 || a.unpaired != 0)
            return true;
        if (this.atomAdjCount(idx) == 0)
            return true;
        return false;
    }
    atomRingBlock(idx) {
        if (this.graph == null)
            this.buildGraph();
        if (this.ringID == null)
            this.buildRingID();
        return this.ringID[idx - 1];
    }
    bondInRing(idx) {
        let r1 = this.atomRingBlock(this.bondFrom(idx)), r2 = this.atomRingBlock(this.bondTo(idx));
        return r1 > 0 && r1 == r2;
    }
    atomConnComp(idx) {
        if (this.graph == null)
            this.buildGraph();
        if (this.compID == null)
            this.buildConnComp();
        return this.compID[idx - 1];
    }
    atomAdjCount(idx) {
        this.buildGraph();
        return this.graph[idx - 1].length;
    }
    atomAdjList(idx) {
        this.buildGraph();
        let adj = this.graph[idx - 1].slice(0);
        for (let n = adj.length - 1; n >= 0; n--)
            adj[n]++;
        return adj;
    }
    atomAdjBonds(idx) {
        this.buildGraph();
        return this.graphBond[idx - 1].slice(0);
    }
    findRingsOfSize(size) {
        let rings = null;
        if (size == 3 && this.ring3 != null)
            rings = this.ring3;
        if (size == 4 && this.ring4 != null)
            rings = this.ring4;
        if (size == 5 && this.ring5 != null)
            rings = this.ring5;
        if (size == 6 && this.ring6 != null)
            rings = this.ring6;
        if (size == 7 && this.ring7 != null)
            rings = this.ring7;
        if (rings == null) {
            if (this.graph == null)
                this.buildGraph();
            if (this.ringID == null)
                this.buildRingID();
            rings = [];
            for (let n = 1; n <= this.atoms.length; n++) {
                if (this.ringID[n - 1] > 0) {
                    let path = Vec.numberArray(0, size);
                    path[0] = n;
                    this.recursiveRingFind(path, 1, size, this.ringID[n - 1], rings);
                }
            }
            if (size == 3)
                this.ring3 = rings;
            if (size == 4)
                this.ring4 = rings;
            if (size == 5)
                this.ring5 = rings;
            if (size == 6)
                this.ring6 = rings;
            if (size == 7)
                this.ring7 = rings;
        }
        let ret = [];
        for (let n = 0; n < rings.length; n++)
            ret.push(rings[n].slice(0));
        return ret;
    }
    boundary() {
        if (this.atoms.length == 0)
            return Box.zero();
        let x1 = this.atoms[0].x, x2 = x1;
        let y1 = this.atoms[0].y, y2 = y1;
        for (let n = 1; n < this.atoms.length; n++) {
            x1 = Math.min(x1, this.atoms[n].x);
            y1 = Math.min(y1, this.atoms[n].y);
            x2 = Math.max(x2, this.atoms[n].x);
            y2 = Math.max(y2, this.atoms[n].y);
        }
        return new Box(x1, y1, x2 - x1, y2 - y1);
    }
    atomicNumber(idx) {
        return Molecule.elementAtomicNumber(this.atomElement(idx));
    }
    static elementAtomicNumber(element) {
        return Math.max(0, Chemistry.ELEMENTS.indexOf(element));
    }
    is3D() { return this.hasZCoord; }
    setIs3D(v) { this.hasZCoord = v; }
    atomZ(idx) { return this.getAtom(idx).z; }
    setAtomZ(idx, z) { this.getAtom(idx).z = z; }
    compareTo(other) {
        if (other == null || other.numAtoms == 0)
            return this.numAtoms == 0 ? 0 : 1;
        if (this.numAtoms < other.numAtoms)
            return -1;
        if (this.numAtoms > other.numAtoms)
            return 1;
        if (this.numBonds < other.numBonds)
            return -1;
        if (this.numBonds > other.numBonds)
            return 1;
        for (let n = 1; n <= this.numAtoms; n++) {
            if (this.atomElement(n) < other.atomElement(n))
                return -1;
            if (this.atomElement(n) > other.atomElement(n))
                return 1;
            if (this.atomX(n) < other.atomX(n))
                return -1;
            if (this.atomX(n) > other.atomX(n))
                return 1;
            if (this.atomY(n) < other.atomY(n))
                return -1;
            if (this.atomY(n) > other.atomY(n))
                return 1;
            if (this.atomCharge(n) < other.atomCharge(n))
                return -1;
            if (this.atomCharge(n) > other.atomCharge(n))
                return 1;
            if (this.atomUnpaired(n) < other.atomUnpaired(n))
                return -1;
            if (this.atomUnpaired(n) > other.atomUnpaired(n))
                return 1;
            if (this.atomHExplicit(n) < other.atomHExplicit(n))
                return -1;
            if (this.atomHExplicit(n) > other.atomHExplicit(n))
                return 1;
            if (this.atomIsotope(n) < other.atomIsotope(n))
                return -1;
            if (this.atomIsotope(n) > other.atomIsotope(n))
                return 1;
            if (this.atomMapNum(n) < other.atomMapNum(n))
                return -1;
            if (this.atomMapNum(n) > other.atomMapNum(n))
                return 1;
            let tx1 = this.atomExtra(n), tx2 = other.atomExtra(n);
            if (tx1.length < tx2.length)
                return -1;
            if (tx1.length > tx2.length)
                return 1;
            for (let i = 0; i < tx1.length; i++)
                if (tx1[i] < tx2[i])
                    return -1;
                else if (tx1[i] > tx2[i])
                    return 1;
            tx1 = this.atomTransient(n);
            tx2 = other.atomTransient(n);
            if (tx1.length < tx2.length)
                return -1;
            if (tx1.length > tx2.length)
                return 1;
            for (let i = 0; i < tx1.length; i++)
                if (tx1[i] < tx2[i])
                    return -1;
                else if (tx1[i] > tx2[i])
                    return 1;
        }
        for (let n = 1; n <= this.numBonds; n++) {
            if (this.bondFrom(n) < other.bondFrom(n))
                return -1;
            if (this.bondFrom(n) > other.bondFrom(n))
                return 1;
            if (this.bondTo(n) < other.bondTo(n))
                return -1;
            if (this.bondTo(n) > other.bondTo(n))
                return 1;
            if (this.bondOrder(n) < other.bondOrder(n))
                return -1;
            if (this.bondOrder(n) > other.bondOrder(n))
                return 1;
            if (this.bondType(n) < other.bondType(n))
                return -1;
            if (this.bondType(n) > other.bondType(n))
                return 1;
            let tx1 = this.bondExtra(n), tx2 = other.bondExtra(n);
            if (tx1.length < tx2.length)
                return -1;
            if (tx1.length > tx2.length)
                return 1;
            for (let i = 0; i < tx1.length; i++)
                if (tx1[i] < tx2[i])
                    return -1;
                else if (tx1[i] > tx2[i])
                    return 1;
            tx1 = this.bondTransient(n);
            tx2 = other.bondTransient(n);
            if (tx1.length < tx2.length)
                return -1;
            if (tx1.length > tx2.length)
                return 1;
            for (let i = 0; i < tx1.length; i++)
                if (tx1[i] < tx2[i])
                    return -1;
                else if (tx1[i] > tx2[i])
                    return 1;
        }
        return 0;
    }
    trashGraph() {
        this.graph = null;
        this.graphBond = null;
    }
    trashTransient() {
        if (this.keepTransient || !this.hasTransient)
            return;
        for (let a of this.atoms)
            a.transient = [];
        for (let b of this.bonds)
            b.transient = [];
        this.hasTransient = false;
    }
    buildGraph() {
        if (this.graph != null && this.graphBond != null)
            return;
        let graph = [], graphBond = [];
        let na = this.numAtoms, nb = this.numBonds;
        for (let n = 0; n < na; n++) {
            graph.push([]);
            graphBond.push([]);
        }
        for (let n = 1; n <= nb; n++) {
            let b = this.getBond(n);
            graph[b.from - 1].push(b.to - 1);
            graph[b.to - 1].push(b.from - 1);
            graphBond[b.from - 1].push(n);
            graphBond[b.to - 1].push(n);
        }
        this.graph = graph;
        this.graphBond = graphBond;
    }
    buildConnComp() {
        const numAtoms = this.atoms.length;
        this.compID = Vec.numberArray(0, numAtoms);
        for (let n = 0; n < numAtoms; n++)
            this.compID[n] = 0;
        let comp = 1;
        this.compID[0] = comp;
        while (true) {
            let anything = false;
            for (let n = 0; n < numAtoms; n++)
                if (this.compID[n] == comp) {
                    for (let i = 0; i < this.graph[n].length; i++) {
                        if (this.compID[this.graph[n][i]] == 0) {
                            this.compID[this.graph[n][i]] = comp;
                            anything = true;
                        }
                    }
                }
            if (!anything) {
                for (let n = 0; n < numAtoms; n++) {
                    if (this.compID[n] == 0) {
                        this.compID[n] = ++comp;
                        anything = true;
                        break;
                    }
                }
                if (!anything)
                    break;
            }
        }
    }
    buildRingID() {
        const numAtoms = this.atoms.length;
        this.ringID = Vec.numberArray(0, numAtoms);
        if (numAtoms == 0)
            return;
        let visited = Vec.booleanArray(false, numAtoms);
        for (let n = 0; n < numAtoms; n++) {
            this.ringID[n] = 0;
            visited[n] = false;
        }
        let path = Vec.numberArray(0, numAtoms + 1), plen = 0, numVisited = 0;
        while (true) {
            let last, current;
            if (plen == 0) {
                last = -1;
                for (current = 0; visited[current]; current++) { }
            }
            else {
                last = path[plen - 1];
                current = -1;
                for (let n = 0; n < this.graph[last].length; n++) {
                    if (!visited[this.graph[last][n]]) {
                        current = this.graph[last][n];
                        break;
                    }
                }
            }
            if (current >= 0 && plen >= 2) {
                let back = path[plen - 1];
                for (let n = 0; n < this.graph[current].length; n++) {
                    let join = this.graph[current][n];
                    if (join != back && visited[join]) {
                        path[plen] = current;
                        for (let i = plen; i == plen || path[i + 1] != join; i--) {
                            let id = this.ringID[path[i]];
                            if (id == 0)
                                this.ringID[path[i]] = last;
                            else if (id != last) {
                                for (let j = 0; j < numAtoms; j++)
                                    if (this.ringID[j] == id)
                                        this.ringID[j] = last;
                            }
                        }
                    }
                }
            }
            if (current >= 0) {
                visited[current] = true;
                path[plen++] = current;
                numVisited++;
            }
            else {
                plen--;
            }
            if (numVisited == numAtoms)
                break;
        }
        let nextID = 0;
        for (let i = 0; i < numAtoms; i++) {
            if (this.ringID[i] > 0) {
                nextID--;
                for (let j = numAtoms - 1; j >= i; j--)
                    if (this.ringID[j] == this.ringID[i])
                        this.ringID[j] = nextID;
            }
        }
        for (let i = 0; i < numAtoms; i++)
            this.ringID[i] = -this.ringID[i];
    }
    recursiveRingFind(path, psize, capacity, rblk, rings) {
        if (psize < capacity) {
            let last = path[psize - 1];
            for (let n = 0; n < this.graph[last - 1].length; n++) {
                let adj = this.graph[last - 1][n] + 1;
                if (this.ringID[adj - 1] != rblk)
                    continue;
                let fnd = false;
                for (let i = 0; i < psize; i++) {
                    if (path[i] == adj) {
                        fnd = true;
                        break;
                    }
                }
                if (!fnd) {
                    let newPath = path.slice(0);
                    newPath[psize] = adj;
                    this.recursiveRingFind(newPath, psize + 1, capacity, rblk, rings);
                }
            }
            return;
        }
        let last = path[psize - 1];
        let fnd = false;
        for (let n = 0; n < this.graph[last - 1].length; n++) {
            if (this.graph[last - 1][n] + 1 == path[0]) {
                fnd = true;
                break;
            }
        }
        if (!fnd)
            return;
        for (let n = 0; n < path.length; n++) {
            let count = 0, p = path[n] - 1;
            for (let i = 0; i < this.graph[p].length; i++)
                if (path.indexOf(this.graph[p][i] + 1) >= 0)
                    count++;
            if (count != 2)
                return;
        }
        let first = 0;
        for (let n = 1; n < psize; n++)
            if (path[n] < path[first])
                first = n;
        let fm = (first - 1 + psize) % psize, fp = (first + 1) % psize;
        let flip = path[fm] < path[fp];
        if (first != 0 || flip) {
            let newPath = Vec.numberArray(0, psize);
            for (let n = 0; n < psize; n++)
                newPath[n] = path[(first + (flip ? psize - n : n)) % psize];
            path = newPath;
        }
        for (let n = 0; n < rings.length; n++) {
            let look = rings[n];
            let same = true;
            for (let i = 0; i < psize; i++) {
                if (look[i] != path[i]) {
                    same = false;
                    break;
                }
            }
            if (same)
                return;
        }
        rings.push(path);
    }
}
Molecule.IDEALBOND = 1.5;
Molecule.HEXPLICIT_UNKNOWN = -1;
Molecule.ISOTOPE_NATURAL = 0;
Molecule.BONDTYPE_NORMAL = 0;
Molecule.BONDTYPE_INCLINED = 1;
Molecule.BONDTYPE_DECLINED = 2;
Molecule.BONDTYPE_UNKNOWN = 3;
Molecule.HYVALENCE_EL = ['C', 'N', 'O', 'S', 'P'];
Molecule.HYVALENCE_VAL = [4, 3, 2, 2, 3];
class OutlineMeasurement {
    constructor(offsetX, offsetY, pointScale) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.pointScale = pointScale;
        this.invScale = 1 / pointScale;
    }
    scale() { return this.pointScale; }
    angToX(ax) { return ax * this.pointScale + this.offsetX; }
    angToY(ay) { return ay * -this.pointScale + this.offsetY; }
    xToAng(px) { return (px - this.offsetX) * this.invScale; }
    yToAng(py) { return (py - this.offsetY) * -this.invScale; }
    yIsUp() { return false; }
    measureText(str, fontSize) { return FontData.main.measureText(str, fontSize); }
}
var BLineType;
(function (BLineType) {
    BLineType[BLineType["Normal"] = 1] = "Normal";
    BLineType[BLineType["Inclined"] = 2] = "Inclined";
    BLineType[BLineType["Declined"] = 3] = "Declined";
    BLineType[BLineType["Unknown"] = 4] = "Unknown";
    BLineType[BLineType["Dotted"] = 5] = "Dotted";
    BLineType[BLineType["DotDir"] = 6] = "DotDir";
    BLineType[BLineType["IncDouble"] = 7] = "IncDouble";
    BLineType[BLineType["IncTriple"] = 8] = "IncTriple";
    BLineType[BLineType["IncQuadruple"] = 9] = "IncQuadruple";
})(BLineType || (BLineType = {}));
class ArrangeMolecule {
    constructor(mol, measure, policy, effects) {
        this.mol = mol;
        this.measure = measure;
        this.policy = policy;
        this.effects = effects;
        this.MINBOND_LINE = 0.25;
        this.MINBOND_EXOTIC = 0.5;
        this.points = [];
        this.lines = [];
        this.space = [];
    }
    static guestimateSize(mol, policy, maxW, maxH) {
        let box = mol.boundary();
        let minX = box.minX(), minY = box.minY(), maxX = box.maxX(), maxY = box.maxY();
        let fontSize = policy.data.fontSize * this.FONT_CORRECT;
        for (let n = 1; n <= mol.numAtoms; n++)
            if (mol.atomExplicit(n)) {
                let plusH = mol.atomHydrogens(n) > 0 ? 1 : 0;
                const aw = 0.5 * 0.7 * fontSize * (mol.atomElement(n).length + plusH);
                const ah = 0.5 * fontSize * (1 + plusH);
                const ax = mol.atomX(n), ay = mol.atomY(n);
                minX = Math.min(minX, ax - aw);
                maxX = Math.max(maxX, ax + aw);
                minY = Math.min(minY, ay - ah);
                maxY = Math.max(maxY, ay + ah);
            }
        let w = Math.max(1, (maxX - minX)) * policy.data.pointScale;
        let h = Math.max(1, (maxY - minY)) * policy.data.pointScale;
        if (maxW > 0 && w > maxW) {
            h *= maxW / w;
            w = maxW;
        }
        if (maxH > 0 && h > maxH) {
            w *= maxH / h;
            h = maxH;
        }
        return [w, h];
    }
    getMolecule() { return this.mol; }
    getMeasure() { return this.measure; }
    getPolicy() { return this.policy; }
    getEffects() { return this.effects; }
    getScale() { return this.scale; }
    arrange() {
        this.scale = this.measure.scale();
        this.bondSepPix = this.policy.data.bondSep * this.measure.scale();
        this.lineSizePix = this.policy.data.lineSize * this.measure.scale();
        this.fontSizePix = this.policy.data.fontSize * this.measure.scale() * ArrangeMolecule.FONT_CORRECT;
        this.ymul = this.measure.yIsUp() ? -1 : 1;
        for (let n = 1; n <= this.mol.numAtoms; n++) {
            if (this.mol.atomElement(n).length > 2 && this.mol.atomHydrogens(n) == 0) {
                this.points.push(null);
                this.space.push(null);
                continue;
            }
            let a = {
                'anum': n,
                'text': this.mol.atomExplicit(n) || this.atomIsWeirdLinear(n) ? this.mol.atomElement(n) : null,
                'fsz': this.fontSizePix,
                'bold': this.mol.atomMapNum(n) > 0,
                'col': this.policy.data.atomCols[this.mol.atomicNumber(n)],
                'oval': new Oval(this.measure.angToX(this.mol.atomX(n)), this.measure.angToY(this.mol.atomY(n)), 0, 0)
            };
            let overCol = this.effects.colAtom[n];
            if (overCol)
                a.col = overCol;
            if (a.text != null) {
                let wad = this.measure.measureText(a.text, a.fsz);
                const PADDING = 1.1;
                a.oval.rw = 0.5 * wad[0] * PADDING;
                a.oval.rh = 0.5 * wad[1] * PADDING;
            }
            this.points.push(a);
            this.space.push(this.computeSpacePoint(a));
        }
        for (let n = 1; n <= this.mol.numAtoms; n++)
            if (this.points[n - 1] == null)
                this.processLabel(n);
        let bdbl = Vec.booleanArray(false, this.mol.numBonds);
        for (let n = 1; n <= this.mol.numBonds; n++) {
            let bfr = this.mol.bondFrom(n), bto = this.mol.bondTo(n);
            let bt = this.mol.bondType(n), bo = this.mol.bondOrder(n);
            let col = this.effects.colBond[n];
            if (!col)
                col = this.policy.data.foreground;
            bdbl[n - 1] = bo == 2 && (bt == Molecule.BONDTYPE_NORMAL || bt == Molecule.BONDTYPE_UNKNOWN);
            let a1 = this.points[bfr - 1], a2 = this.points[bto - 1];
            let x1 = a1.oval.cx, y1 = a1.oval.cy, x2 = a2.oval.cx, y2 = a2.oval.cy;
            if (Math.abs(x2 - x1) <= 1 && Math.abs(y2 - y1) <= 1) {
                bdbl[n - 1] = false;
                continue;
            }
            if (bdbl[n - 1])
                continue;
            let minDist = (bo == 1 && bt == Molecule.BONDTYPE_NORMAL ? this.MINBOND_LINE : this.MINBOND_EXOTIC) * this.measure.scale();
            let xy1 = this.backOffAtom(bfr, x1, y1, x2, y2, minDist);
            let xy2 = this.backOffAtom(bto, x2, y2, x1, y1, minDist);
            this.ensureMinimumBondLength(xy1, xy2, x1, y1, x2, y2, minDist);
            let sz = this.lineSizePix, head = 0;
            let ltype = BLineType.Normal;
            if (bo == 1 && bt == Molecule.BONDTYPE_INCLINED) {
                ltype = BLineType.Inclined;
                head = 0.15 * this.measure.scale();
            }
            else if (bo == 1 && bt == Molecule.BONDTYPE_DECLINED) {
                ltype = BLineType.Declined;
                head = 0.15 * this.measure.scale();
            }
            else if (bt == Molecule.BONDTYPE_UNKNOWN) {
                ltype = BLineType.Unknown;
                head = 0.2 * this.measure.scale();
            }
            else if (bo == 0) {
                if (bt == Molecule.BONDTYPE_INCLINED || bt == Molecule.BONDTYPE_DECLINED)
                    ltype = BLineType.DotDir;
                else
                    ltype = BLineType.Dotted;
            }
            else if ((bo == 2 || bo == 3 || bo == 4) && (bt == Molecule.BONDTYPE_INCLINED || bt == Molecule.BONDTYPE_DECLINED)) {
                ltype = bo == 2 ? BLineType.IncDouble : bo == 3 ? BLineType.IncTriple : BLineType.IncQuadruple;
                head = (bo == 2 ? 0.20 : 0.25) * this.measure.scale();
            }
            if (bo == 0) {
                let dx = xy2[0] - xy1[0], dy = xy2[1] - xy1[1];
                let d = norm_xy(dx, dy), invD = 1 / d;
                let ox = 0.5 * dx * invD * this.bondSepPix, oy = 0.5 * dy * invD * this.bondSepPix;
                if (this.mol.atomAdjCount(bfr) > 1) {
                    xy1[0] += ox;
                    xy1[1] += oy;
                }
                if (this.mol.atomAdjCount(bto) > 1) {
                    xy2[0] -= ox;
                    xy2[1] -= oy;
                }
            }
            if (bo != 1 && bt == Molecule.BONDTYPE_DECLINED) {
                let tmp = xy1;
                xy1 = xy2;
                xy2 = tmp;
            }
            if (bo > 1 && (bt == Molecule.BONDTYPE_NORMAL || bt == Molecule.BONDTYPE_UNKNOWN)) {
                let oxy = this.orthogonalDelta(xy1[0], xy1[1], xy2[0], xy2[1], this.bondSepPix);
                let v = -0.5 * (bo - 1);
                for (let i = 0; i < bo; i++, v++) {
                    let lx1 = xy1[0] + v * oxy[0], ly1 = xy1[1] + v * oxy[1], lx2 = xy2[0] + v * oxy[0], ly2 = xy2[1] + v * oxy[1];
                    let b = {
                        'bnum': n,
                        'bfr': bfr,
                        'bto': bto,
                        'type': ltype,
                        'line': new Line(lx1, ly1, lx2, ly2),
                        'size': sz,
                        'head': 0,
                        'col': col
                    };
                    this.lines.push(b);
                    this.space.push(this.computeSpaceLine(b));
                }
            }
            else {
                let b = {
                    'bnum': n,
                    'bfr': bfr,
                    'bto': bto,
                    'type': ltype,
                    'line': new Line(xy1[0], xy1[1], xy2[0], xy2[1]),
                    'size': sz,
                    'head': head,
                    'col': col
                };
                this.lines.push(b);
                this.space.push(this.computeSpaceLine(b));
            }
        }
        let rings = this.orderedRingList();
        for (let i = 0; i < rings.length; i++) {
            for (let j = 0; j < rings[i].length; j++) {
                let k = this.mol.findBond(rings[i][j], rings[i][j < rings[i].length - 1 ? j + 1 : 0]);
                if (bdbl[k - 1]) {
                    this.processDoubleBond(k, rings[i]);
                    bdbl[k - 1] = false;
                }
            }
        }
        for (let i = 1; i <= this.mol.numBonds; i++)
            if (bdbl[i - 1])
                this.processDoubleBond(i, this.priorityDoubleSubstit(i));
        let hcount = Vec.numberArray(0, this.mol.numAtoms);
        for (let n = 1; n <= this.mol.numAtoms; n++)
            hcount[n - 1] = this.points[n - 1].text == null ? 0 : this.mol.atomHydrogens(n);
        for (let n = 0; n < this.mol.numAtoms; n++)
            if (hcount[n] > 0 && this.placeHydrogen(n, hcount[n], true))
                hcount[n] = 0;
        for (let n = 0; n < this.mol.numAtoms; n++)
            if (hcount[n] > 0)
                this.placeHydrogen(n, hcount[n], false);
        for (let n = 1; n <= this.mol.numAtoms; n++)
            if (this.mol.atomIsotope(n) != Molecule.ISOTOPE_NATURAL) {
                let isostr = this.mol.atomIsotope(n).toString();
                let col = this.policy.data.atomCols[this.mol.atomicNumber(n)];
                this.placeAdjunct(n, isostr, this.fontSizePix * 0.6, col, 150 * DEGRAD);
            }
        for (let n = 1; n <= this.mol.numAtoms; n++) {
            let str = '';
            let chg = this.mol.atomCharge(n);
            if (chg == -1)
                str = '-';
            else if (chg == 1)
                str = '+';
            else if (chg < -1)
                str = Math.abs(chg) + '-';
            else if (chg > 1)
                str = chg + '+';
            for (let i = this.mol.atomUnpaired(n); i > 0; i--)
                str += '.';
            if (str.length == 0)
                continue;
            let col = this.policy.data.atomCols[this.mol.atomicNumber(n)];
            this.placeAdjunct(n, str, str.length == 1 ? 0.8 * this.fontSizePix : 0.6 * this.fontSizePix, col, 30 * DEGRAD);
        }
    }
    numPoints() { return this.points.length; }
    getPoint(idx) { return this.points[idx]; }
    numLines() { return this.lines.length; }
    getLine(idx) { return this.lines[idx]; }
    numSpace() { return this.space.length; }
    getSpace(idx) { return this.space[idx]; }
    offsetEverything(dx, dy) {
        for (let a of this.points)
            a.oval.offsetBy(dx, dy);
        for (let b of this.lines)
            b.line.offsetBy(dx, dy);
        for (let spc of this.space) {
            spc.box.offsetBy(dx, dy);
            Vec.addTo(spc.px, dx);
            Vec.addTo(spc.py, dy);
        }
    }
    scaleEverything(scaleBy) {
        this.scale *= scaleBy;
        for (let a of this.points) {
            a.oval.scaleBy(scaleBy);
            a.fsz *= scaleBy;
        }
        for (let b of this.lines) {
            b.line.scaleBy(scaleBy);
            b.size *= scaleBy;
            b.head *= scaleBy;
        }
        for (let spc of this.space) {
            spc.box.scaleBy(scaleBy);
            Vec.mulBy(spc.px, scaleBy);
            Vec.mulBy(spc.py, scaleBy);
        }
    }
    determineBoundary(padding) {
        if (padding == null)
            padding = 0;
        if (this.space.length == 0)
            return [0, 0, 2 * padding, 2 * padding];
        let bounds = Vec.numberArray(0, 4);
        let spc = this.space[0];
        bounds[0] = spc.box.x;
        bounds[1] = spc.box.y;
        bounds[2] = spc.box.x + spc.box.w;
        bounds[3] = spc.box.y + spc.box.h;
        for (let n = this.space.length - 1; n > 0; n--) {
            spc = this.space[n];
            bounds[0] = Math.min(bounds[0], spc.box.x);
            bounds[1] = Math.min(bounds[1], spc.box.y);
            bounds[2] = Math.max(bounds[2], spc.box.x + spc.box.w);
            bounds[3] = Math.max(bounds[3], spc.box.y + spc.box.h);
        }
        return bounds;
    }
    squeezeInto(x, y, w, h, padding) {
        if (padding != null && padding > 0) {
            x += padding;
            y += padding;
            w -= 2 * padding;
            h -= 2 * padding;
        }
        let bounds = this.determineBoundary(0);
        let bw = bounds[2] - bounds[0], bh = bounds[3] - bounds[1];
        if (bw > w || bh > h) {
            let downScale = 1;
            if (bw > w)
                downScale = w / bw;
            if (bh > h)
                downScale = Math.min(downScale, h / bh);
            this.scaleEverything(downScale);
            Vec.mulBy(bounds, downScale);
        }
        this.offsetEverything(x - bounds[0] + 0.5 * (w - bounds[2] + bounds[0]), y - bounds[1] + 0.5 * (h - bounds[3] + bounds[1]));
    }
    monochromate(col) {
        for (let a of this.points)
            a.col = col;
        for (let b of this.lines)
            b.col = col;
    }
    clone() {
        let dup = new ArrangeMolecule(this.mol, this.measure, this.policy, this.effects);
        dup.scale = this.scale;
        dup.bondSepPix = this.bondSepPix;
        dup.lineSizePix = this.lineSizePix;
        dup.fontSizePix = this.fontSizePix;
        dup.ymul = this.ymul;
        for (let a of this.points)
            dup.points.push(clone(a));
        for (let b of this.lines)
            dup.lines.push(clone(b));
        for (let s of this.space)
            dup.space.push(clone(s));
        return dup;
    }
    placeAdjunct(atom, str, fsz, col, angdir) {
        let wad = this.measure.measureText(str, fsz);
        let a = this.points[atom - 1];
        let cx = a.oval.cx, cy = a.oval.cy, rw = 0.55 * wad[0], rh = 0.55 * wad[1];
        let bestScore = 0, bestDX = 0, bestDY = 0;
        let px = Vec.numberArray(0, 4), py = Vec.numberArray(0, 4);
        let angThresh = 10;
        let shorted = false;
        for (let ext = 0.5 * (a.oval.rw + a.oval.rh); !shorted && ext < 1.5 * this.measure.scale(); ext += 0.1 * this.measure.scale()) {
            const DELTA = 5 * DEGRAD;
            for (let d = 0; !shorted && d < Math.PI - 0.0001; d += DELTA)
                for (let s = -1; s <= 1; s += 2) {
                    let dang = d * s + (s > 0 ? DELTA : 0), ang = angdir + dang;
                    let dx = ext * Math.cos(ang), dy = ext * Math.sin(ang) * -this.ymul;
                    let x1 = cx + dx - rw, x2 = cx + dx + rw, y1 = cy + dy - rh, y2 = cy + dy + rh;
                    px[0] = x1;
                    py[0] = y1;
                    px[1] = x2;
                    py[1] = y1;
                    px[2] = x2;
                    py[2] = y2;
                    px[3] = x1;
                    py[3] = y2;
                    let viol = this.countPolyViolations(px, py, false);
                    let score = 10 * viol + Math.abs(dang) + 10 * ext;
                    let shortCircuit = viol == 0 && Math.abs(dang) < (angThresh + 1) * DEGRAD;
                    if (bestScore == 0 || shortCircuit || score < bestScore) {
                        bestScore = score;
                        bestDX = dx;
                        bestDY = dy;
                    }
                    if (shortCircuit) {
                        shorted = true;
                        break;
                    }
                }
            angThresh += 5;
        }
        a =
            {
                'anum': 0,
                'text': str,
                'fsz': fsz,
                'bold': false,
                'col': col,
                'oval': new Oval(cx + bestDX, cy + bestDY, rw, rh)
            };
        this.points.push(a);
        let spc = {
            'anum': 0,
            'bnum': 0,
            'box': new Box(a.oval.cx - rw, a.oval.cy - rh, 2 * rw, 2 * rh),
            'px': [a.oval.cx - rw, a.oval.cx + rw, a.oval.cx + rw, a.oval.cx - rw],
            'py': [a.oval.cy - rh, a.oval.cy - rh, a.oval.cy + rh, a.oval.cy + rh]
        };
        this.space.push(spc);
    }
    processLabel(anum) {
        let ax = this.mol.atomX(anum), ay = this.mol.atomY(anum);
        let left = 0, right = 0;
        let adj = this.mol.atomAdjList(anum);
        for (let n = 0; n < adj.length; n++) {
            let theta = Math.atan2(this.mol.atomY(adj[n]) - ay, this.mol.atomX(adj[n]) - ax) * RADDEG;
            if (theta >= -15 && theta <= 15)
                right += 3;
            else if (theta >= -85 && theta <= 85)
                right++;
            else if (theta > 85 && theta < 95) { }
            else if (theta < -85 && theta > -95) { }
            else if (theta > 165 || theta < -165)
                left += 3;
            else
                left++;
        }
        let label = this.mol.atomElement(anum);
        let ibar = label.indexOf('|'), ibrace = label.indexOf('{');
        let side = 0;
        if (left == 0 && right == 0 && ibar < 0 && ibrace < 0) { }
        else if (left < right)
            side = -1;
        else if (right < left)
            side = 1;
        else {
            let score1 = CoordUtil.congestionPoint(this.mol, ax - 1, ay);
            let score2 = CoordUtil.congestionPoint(this.mol, ax + 1, ay);
            if (score1 < 0.5 * score2)
                side = -1;
            else
                side = 1;
        }
        let chunks = null;
        let position = null;
        let primary = null;
        let refchunk = 0;
        if (ibar < 0 && ibrace < 0) {
            if (side == 0)
                chunks = [label];
            else if (side < 0) {
                chunks = [label.substring(0, label.length - 1), label.substring(label.length - 1)];
                refchunk = 1;
            }
            else
                chunks = [label.substring(0, 1), label.substring(1)];
        }
        else {
            let bits = [];
            let bpos = [];
            let bpri = [];
            let blocks = label.split('|');
            if (side < 0) {
                let oldblk = blocks;
                blocks = [];
                for (let i = oldblk.length - 1; i >= 0; i--)
                    blocks.push(oldblk[i]);
            }
            let buff = '';
            for (let i = 0; i < blocks.length; i++) {
                let isPrimary = (side >= 0 && i == 0) || (side < 0 && i == blocks.length - 1);
                if (side < 0 && refchunk == 0 && i == blocks.length - 1)
                    refchunk = bits.length;
                let pos = 0;
                buff = '';
                for (let j = 0; j < blocks[i].length; j++) {
                    let ch = blocks[i].charAt(j);
                    if (ch == '{' || ch == '}') {
                        if (buff.length > 0) {
                            bits.push(buff.toString());
                            bpos.push(pos);
                            bpri.push(isPrimary);
                        }
                        buff = '';
                        pos = ch == '{' ? -1 : 0;
                    }
                    else if (ch == '^' && pos == -1 && buff.length == 0)
                        pos = 1;
                    else
                        buff += ch;
                }
                if (buff.length > 0) {
                    bits.push(buff.toString());
                    bpos.push(pos);
                    bpri.push(isPrimary);
                }
            }
            chunks = bits;
            position = bpos;
            primary = bpri;
            while (refchunk < chunks.length - 1 && position[refchunk] != 0)
                refchunk++;
        }
        let PADDING = 1.1;
        let SSFRACT = 0.6;
        let chunkw = Vec.numberArray(0, chunks.length);
        let tw = 0;
        for (let n = 0; n < chunks.length; n++) {
            chunkw[n] = this.measure.measureText(chunks[n], this.fontSizePix)[0];
            if (position != null && position[n] != 0)
                chunkw[n] *= SSFRACT;
            tw += chunkw[n];
        }
        let x = this.measure.angToX(ax), y = this.measure.angToY(ay);
        if (side == 0)
            x -= 0.5 * chunkw[0];
        else if (side < 0) {
            for (let n = 0; n < refchunk; n++)
                x -= chunkw[n];
            x -= 0.5 * chunkw[refchunk];
        }
        else {
            x -= 0.5 * chunkw[0];
        }
        for (let n = 0; n < chunks.length; n++) {
            let a = {
                'anum': (n == refchunk || (primary != null && primary[n])) ? anum : 0,
                'text': chunks[n],
                'fsz': this.fontSizePix,
                'bold': false,
                'col': this.policy.data.atomCols[this.mol.atomicNumber(anum)],
                'oval': new Oval(x + 0.5 * chunkw[n], y, 0.5 * chunkw[n] * PADDING, 0.5 * this.fontSizePix * PADDING)
            };
            if (position != null && position[n] != 0) {
                a.fsz *= SSFRACT;
                if (position[n] < 0)
                    a.oval.cy += a.fsz * 0.7 * (this.measure.yIsUp() ? -1 : 1);
                else
                    a.oval.cy -= a.fsz * 0.3 * (this.measure.yIsUp() ? -1 : 1);
            }
            if (n == refchunk) {
                this.points[anum - 1] = a;
                this.space[anum - 1] = this.computeSpacePoint(a);
            }
            else {
                this.points.push(a);
                this.space.push(this.computeSpacePoint(a));
            }
            x += chunkw[n];
        }
    }
    atomIsWeirdLinear(idx) {
        let bonds = this.mol.atomAdjBonds(idx);
        if (bonds.length != 2)
            return false;
        for (let n = 0; n < bonds.length; n++)
            if (this.mol.bondOrder(bonds[n]) == 3)
                return false;
        let adj = this.mol.atomAdjList(idx);
        let th1 = Math.atan2(this.mol.atomY(adj[0]) - this.mol.atomY(idx), this.mol.atomX(adj[0]) - this.mol.atomX(idx));
        let th2 = Math.atan2(this.mol.atomY(adj[1]) - this.mol.atomY(idx), this.mol.atomX(adj[1]) - this.mol.atomX(idx));
        return Math.abs(angleDiff(th1, th2)) >= 175 * DEGRAD;
    }
    backOffAtom(atom, x, y, fx, fy, minDist) {
        if (x == fx && y == fy)
            return [x, y];
        let active = false;
        let dx = 0, dy = 0, dst = 0, ext = 0;
        for (let s = 0; s < this.space.length; s++) {
            let spc = this.space[s];
            if (spc.anum != atom)
                continue;
            const sz = spc.px.length;
            if (sz == 0)
                continue;
            for (let n = 0; n < sz; n++) {
                let nn = n < sz - 1 ? n + 1 : 0;
                let x1 = spc.px[n], y1 = spc.py[n], x2 = spc.px[nn], y2 = spc.py[nn];
                if (!GeomUtil.doLineSegsIntersect(x, y, fx, fy, x1, y1, x2, y2))
                    continue;
                let xy = GeomUtil.lineIntersect(x, y, fx, fy, x1, y1, x2, y2);
                if (!active) {
                    dx = x - fx;
                    dy = y - fy;
                    dst = norm_xy(dx, dy);
                    ext = dst;
                    active = true;
                }
                ext = Math.min(ext, norm_xy(xy[0] - fx, xy[1] - fy));
            }
        }
        if (active) {
            ext = Math.max(minDist, ext - 0.1 * this.measure.scale());
            let idst = 1.0 / dst;
            return [fx + ext * idst * dx, fy + ext * idst * dy];
        }
        else
            return [x, y];
    }
    ensureMinimumBondLength(xy1, xy2, x1, y1, x2, y2, minDist) {
        let dx = xy2[0] - xy1[0], dy = xy2[1] - xy1[1];
        let dsq = norm2_xy(dx, dy);
        minDist = Math.min(minDist, norm_xy(x2 - x1, y2 - y1));
        if (dsq >= sqr(minDist - 0.0001))
            return;
        let d12 = Math.sqrt(dsq), d1 = norm_xy(xy1[0] - x1, xy1[1] - y1), d2 = norm_xy(x2 - xy2[0], y2 - xy2[1]);
        let mag = 1 - minDist / d12, invD12 = 1.0 / (d1 + d2), mag1 = d1 * mag * invD12, mag2 = d2 * mag * invD12;
        xy1[0] -= dx * mag1;
        xy1[1] -= dy * mag1;
        xy2[0] += dx * mag2;
        xy2[1] += dy * mag2;
    }
    orderedRingList() {
        let rings = [];
        let SIZE_ORDER = [6, 5, 7, 4, 3];
        for (let i = 0; i < SIZE_ORDER.length; i++) {
            let nring = this.mol.findRingsOfSize(SIZE_ORDER[i]);
            for (let j = 0; j < nring.length; j++)
                rings.push(nring[j]);
        }
        let ringsz = rings.length;
        let ringbusy = Vec.numberArray(0, this.mol.numAtoms);
        for (let n = 0; n < ringsz; n++) {
            let r = rings[n];
            for (let i = 0; i < r.length; i++)
                ringbusy[r[i] - 1]++;
        }
        let ringscore = Vec.numberArray(0, ringsz);
        for (let n = 0; n < ringsz; n++) {
            let r = rings[n];
            for (let i = 0; i < r.length; i++)
                ringscore[n] += ringbusy[r[i] - 1];
        }
        let ringorder = Vec.idxSort(ringscore);
        let resbcount = Vec.numberArray(0, ringsz), maxbcount = 0;
        for (let n = 0; n < ringsz; n++) {
            let r = rings[ringorder[n]];
            for (let i = 0; i < r.length; i++) {
                let j = this.mol.findBond(r[i], r[i + 1 < r.length ? i + 1 : 0]);
                if (this.mol.bondOrder(j) == 2)
                    resbcount[n]++;
            }
            maxbcount = Math.max(maxbcount, resbcount[n]);
        }
        let pos = 0, ret = [];
        for (let sz = maxbcount; sz >= 0; sz--) {
            for (let n = 0; n < ringsz; n++)
                if (resbcount[n] == sz)
                    ret.push(rings[ringorder[n]]);
        }
        return ret;
    }
    orthogonalDelta(x1, y1, x2, y2, d) {
        let ox = y1 - y2, oy = x2 - x1, dsq = norm2_xy(ox, oy);
        let sc = dsq > 0 ? d / Math.sqrt(dsq) : 1;
        return [ox * sc, oy * sc];
    }
    processDoubleBond(idx, priority) {
        let bfr = this.mol.bondFrom(idx), bto = this.mol.bondTo(idx);
        let nfr = this.mol.atomAdjList(bfr), nto = this.mol.atomAdjList(bto);
        let a1 = this.points[bfr - 1], a2 = this.points[bto - 1];
        let x1 = a1.oval.cx, y1 = a1.oval.cy, x2 = a2.oval.cx, y2 = a2.oval.cy;
        const minDist = this.MINBOND_EXOTIC * this.measure.scale();
        let xy1 = this.backOffAtom(bfr, x1, y1, x2, y2, minDist);
        let xy2 = this.backOffAtom(bto, x2, y2, x1, y1, minDist);
        this.ensureMinimumBondLength(xy1, xy2, x1, y1, x2, y2, minDist);
        x1 = xy1[0];
        y1 = xy1[1];
        x2 = xy2[0];
        y2 = xy2[1];
        let dx = x2 - x1, dy = y2 - y1, btheta = Math.atan2(dy, dx);
        let countFLeft = 0, countFRight = 0, countTLeft = 0, countTRight = 0;
        let idxFLeft = 0, idxFRight = 0, idxTLeft = 0, idxTRight = 0;
        let noshift = false;
        for (let n = 0; n < nfr.length; n++)
            if (nfr[n] != bto) {
                let bo = this.mol.bondOrder(this.mol.findBond(bfr, nfr[n]));
                if (bo == 0)
                    continue;
                if (bo > 1) {
                    noshift = true;
                    break;
                }
                let ispri = false;
                for (let i = 0; i < (priority == null ? 0 : priority.length); i++)
                    if (priority[i] == nfr[n])
                        ispri = true;
                let theta = angleDiff(Math.atan2(this.points[nfr[n] - 1].oval.cy - y1, this.points[nfr[n] - 1].oval.cx - x1), btheta);
                if (Math.abs(theta) * RADDEG > 175) {
                    noshift = true;
                    break;
                }
                if (theta > 0) {
                    if (ispri)
                        countFLeft++;
                    idxFLeft = nfr[n];
                }
                else {
                    if (ispri)
                        countFRight++;
                    idxFRight = nfr[n];
                }
            }
        for (let n = 0; n < nto.length; n++)
            if (nto[n] != bfr) {
                let bo = this.mol.bondOrder(this.mol.findBond(bto, nto[n]));
                if (bo == 0)
                    continue;
                if (bo > 1) {
                    noshift = true;
                    break;
                }
                let ispri = false;
                for (let i = 0; i < (priority == null ? 0 : priority.length); i++)
                    if (priority[i] == nto[n])
                        ispri = true;
                let theta = angleDiff(Math.atan2(this.points[nto[n] - 1].oval.cy - y2, this.points[nto[n] - 1].oval.cx - x2), btheta);
                if (Math.abs(theta) * RADDEG > 175) {
                    noshift = true;
                    break;
                }
                if (theta > 0) {
                    if (ispri)
                        countTLeft++;
                    idxTLeft = nto[n];
                }
                else {
                    if (ispri)
                        countTRight++;
                    idxTRight = nto[n];
                }
            }
        let side = 0;
        if (noshift || countFLeft > 1 || countFRight > 1 || countTLeft > 1 || countTRight > 1) { }
        else if (countFLeft > 0 && countFRight > 0) { }
        else if (countTLeft > 0 && countTRight > 0) { }
        else if (countFLeft > 0 || countTLeft > 0)
            side = 1;
        else if (countFRight > 0 || countTRight > 0)
            side = -1;
        let sz = this.lineSizePix;
        let oxy = this.orthogonalDelta(x1, y1, x2, y2, this.bondSepPix);
        let ax1 = x1, ay1 = y1, ax2 = x2, ay2 = y2;
        let bx1 = 0, by1 = 0, bx2 = 0, by2 = 0;
        if (side == 0) {
            ax1 = x1 + 0.5 * oxy[0];
            ay1 = y1 + 0.5 * oxy[1];
            ax2 = x2 + 0.5 * oxy[0];
            ay2 = y2 + 0.5 * oxy[1];
            bx1 = x1 - 0.5 * oxy[0];
            by1 = y1 - 0.5 * oxy[1];
            bx2 = x2 - 0.5 * oxy[0];
            by2 = y2 - 0.5 * oxy[1];
        }
        else if (side > 0) {
            bx1 = x1 + oxy[0];
            by1 = y1 + oxy[1];
            bx2 = x2 + oxy[0];
            by2 = y2 + oxy[1];
            if (nfr.length > 1 && this.points[bfr - 1].text == null) {
                bx1 += oxy[1];
                by1 -= oxy[0];
            }
            if (nto.length > 1 && this.points[bto - 1].text == null) {
                bx2 -= oxy[1];
                by2 += oxy[0];
            }
        }
        else if (side < 0) {
            bx1 = x1 - oxy[0];
            by1 = y1 - oxy[1];
            bx2 = x2 - oxy[0];
            by2 = y2 - oxy[1];
            if (nfr.length > 1 && this.points[bfr - 1].text == null) {
                bx1 += oxy[1];
                by1 -= oxy[0];
            }
            if (nto.length > 1 && this.points[bto - 1].text == null) {
                bx2 -= oxy[1];
                by2 += oxy[0];
            }
        }
        if (side != 0) {
            if (this.mol.atomElement(bfr).length <= 2 && this.mol.atomAdjCount(bfr) == 1 && this.points[bfr - 1].text != null) {
                this.bumpAtomPosition(bfr, 0.5 * oxy[0] * side, 0.5 * oxy[1] * side);
            }
            if (this.mol.atomElement(bto).length <= 2 && this.mol.atomAdjCount(bto) == 1 && this.points[bto - 1].text != null) {
                this.bumpAtomPosition(bto, 0.5 * oxy[0] * side, 0.5 * oxy[1] * side);
            }
        }
        if (side == 0 && !noshift) {
            let xy = null;
            if (this.points[bfr - 1].text == null && !this.mol.bondInRing(idx)) {
                xy = this.adjustBondPosition(idxFLeft, bfr, ax1, ay1, ax2, ay2);
                if (xy != null) {
                    ax1 = xy[0];
                    ay1 = xy[1];
                }
                xy = this.adjustBondPosition(idxFRight, bfr, bx1, by1, bx2, by2);
                if (xy != null) {
                    bx1 = xy[0];
                    by1 = xy[1];
                }
            }
            if (this.points[bto - 1].text == null && !this.mol.bondInRing(idx)) {
                xy = this.adjustBondPosition(idxTLeft, bto, ax2, ay2, ax1, ay1);
                if (xy != null) {
                    ax2 = xy[0];
                    ay2 = xy[1];
                }
                xy = this.adjustBondPosition(idxTRight, bto, bx2, by2, bx1, by1);
                if (xy != null) {
                    bx2 = xy[0];
                    by2 = xy[1];
                }
            }
        }
        let lt = this.mol.bondType(idx) == Molecule.BONDTYPE_UNKNOWN ? BLineType.Unknown : BLineType.Normal;
        let col = this.effects.colBond[idx];
        if (!col)
            col = this.policy.data.foreground;
        let b1 = {
            'bnum': idx,
            'bfr': bfr,
            'bto': bto,
            'type': lt,
            'line': new Line(ax1, ay1, ax2, ay2),
            'size': sz,
            'head': 0,
            'col': col
        };
        let b2 = {
            'bnum': idx,
            'bfr': bfr,
            'bto': bto,
            'type': lt,
            'line': new Line(bx1, by1, bx2, by2),
            'size': sz,
            'head': 0,
            'col': col
        };
        this.lines.push(b1);
        this.lines.push(b2);
        this.space.push(this.computeSpaceLine(b1));
        this.space.push(this.computeSpaceLine(b2));
    }
    placeHydrogen(idx, hcount, fussy) {
        let font = FontData.main;
        const SSFRACT = 0.6;
        const GLYPH_H = 'H'.charCodeAt(0) - font.GLYPH_MIN;
        let a = this.points[idx];
        let emscale = a.fsz * font.INV_UNITS_PER_EM;
        let sub = hcount >= 2 ? hcount.toString() : '';
        let outlineX = font.getOutlineX(GLYPH_H), outlineY = font.getOutlineY(GLYPH_H);
        let firstEMW = font.HORIZ_ADV_X[GLYPH_H], emw = firstEMW;
        for (let n = 0; n < sub.length; n++) {
            let g = sub.charCodeAt(n) - font.GLYPH_MIN;
            if (n == 0) {
                emw += font.getKerning(GLYPH_H, g);
            }
            else {
                let gp = sub.charCodeAt(n - 1) - font.GLYPH_MIN;
                emw += font.getKerning(gp, g) * SSFRACT;
            }
            let extraX = font.getOutlineX(g), extraY = font.getOutlineY(g);
            Vec.addTo(extraX, emw / SSFRACT);
            Vec.addTo(extraY, (SSFRACT - 1) * font.ASCENT);
            Vec.mulBy(extraX, SSFRACT);
            Vec.mulBy(extraY, SSFRACT);
            outlineX = outlineX.concat(extraX);
            outlineY = outlineY.concat(extraY);
            emw += font.HORIZ_ADV_X[g] * SSFRACT;
        }
        if (sub.length > 0) {
            let qh = new QuickHull(outlineX, outlineY, 0);
            outlineX = qh.hullX;
            outlineY = qh.hullY;
        }
        let emdx = -0.5 * firstEMW, emdy = 0.5 * (font.ASCENT + font.DESCENT);
        for (let n = 0; n < outlineX.length; n++) {
            outlineX[n] = a.oval.cx + (emdx + outlineX[n]) * emscale;
            outlineY[n] = a.oval.cy + (emdy - outlineY[n]) * emscale * this.ymul;
        }
        let dx = 0, dy = 0;
        let srcWAD = this.measure.measureText(a.text, a.fsz);
        if (fussy) {
            let RIGHTLEFT = [0, 1, 2, 3];
            let LEFTRIGHT = [1, 0, 2, 3];
            let UPDOWN = [2, 3, 0, 1];
            let DOWNUP = [3, 2, 0, 1];
            let quad = RIGHTLEFT, adj = this.mol.atomAdjList(a.anum);
            if (adj.length == 0) {
                let LEFTIES = ["O", "S", "F", "Cl", "Br", "I"];
                if (this.mol.atomCharge(a.anum) == 0 && this.mol.atomUnpaired(a.anum) == 0 &&
                    LEFTIES.indexOf(this.mol.atomElement(a.anum)) >= 0)
                    quad = LEFTRIGHT;
                else
                    quad = RIGHTLEFT;
            }
            else {
                let allLeft = true, allRight = true, allUp = true, allDown = true;
                const ax = this.mol.atomX(a.anum), ay = this.mol.atomY(a.anum);
                for (let n = 0; n < adj.length; n++) {
                    const bx = this.mol.atomX(adj[n]), by = this.mol.atomY(adj[n]);
                    if (bx > ax + 0.01)
                        allLeft = false;
                    if (bx < ax - 0.01)
                        allRight = false;
                    if (by < ay - 0.01)
                        allUp = false;
                    if (by > ay + 0.01)
                        allDown = false;
                }
                if (allLeft) { }
                else if (allRight)
                    quad = LEFTRIGHT;
                else if (allUp)
                    quad = DOWNUP;
                else if (allDown)
                    quad = UPDOWN;
            }
            for (let n = 0; n < 4; n++) {
                let tx = 0, ty = 0;
                if (quad[n] == 0)
                    tx = 0.5 * srcWAD[0] + 0.5 * firstEMW * emscale;
                else if (quad[n] == 1)
                    tx = -0.5 * srcWAD[0] - (emw - 0.5 * firstEMW) * emscale;
                else if (quad[n] == 2)
                    ty = (1.1 * srcWAD[1] + 0.5 * srcWAD[2]) * -this.ymul;
                else if (quad[n] == 3)
                    ty = (1.1 * srcWAD[1] + 0.5 * srcWAD[2]) * this.ymul;
                Vec.addTo(outlineX, tx);
                Vec.addTo(outlineY, ty);
                let viol = this.countPolyViolations(outlineX, outlineY, true);
                Vec.addTo(outlineX, -tx);
                Vec.addTo(outlineY, -ty);
                if (viol == 0) {
                    dx = tx;
                    dy = ty;
                    break;
                }
            }
            if (dx == 0 && dy == 0)
                return false;
        }
        else {
            const mx1 = Vec.min(outlineY), mx2 = Vec.max(outlineX), my1 = Vec.min(outlineY), my2 = Vec.max(outlineY), cx = 0.5 * (mx1 + mx2), cy = 0.5 * (my1 + my2);
            const mag = 1 + this.measure.scale() * this.policy.data.fontSize * ArrangeMolecule.FONT_CORRECT * 0.1 / Math.max(mx2 - cx, my2 - cy);
            const psz = outlineX.length;
            let magPX = outlineX.slice(0), magPY = outlineY.slice(0);
            for (let n = 0; n < psz; n++) {
                magPX[n] = (magPX[n] - cx) * mag + cx;
                magPY[n] = (magPY[n] - cy) * mag + cy;
            }
            let bestScore = 0, bestExt = 0, bestAng = 0;
            for (let ext = 0.5 * (a.oval.rw + a.oval.rh); ext < 1.5 * this.measure.scale(); ext += 0.1 * this.measure.scale()) {
                let anyNoClash = false;
                for (let ang = 0; ang < 2 * Math.PI; ang += 5 * DEGRAD) {
                    let tx = ext * Math.cos(ang), ty = ext * Math.sin(ang);
                    Vec.addTo(magPX, tx);
                    Vec.addTo(magPY, ty);
                    let viol = this.countPolyViolations(magPX, magPY, false);
                    Vec.addTo(magPX, -tx);
                    Vec.addTo(magPY, -ty);
                    if (viol == 0)
                        anyNoClash = true;
                    let score = 10 * viol + this.spatialCongestion(a.oval.cx + tx, a.oval.cy + ty, 0.5) + 2 * ext;
                    if (bestScore == 0 || score < bestScore) {
                        bestScore = score;
                        bestExt = ext;
                        bestAng = ang;
                        dx = tx;
                        dy = ty;
                    }
                }
                if (anyNoClash)
                    break;
            }
        }
        let wad = this.measure.measureText("H", a.fsz);
        const PADDING = 1.1;
        let ah = {
            'anum': 0,
            'text': 'H',
            'fsz': a.fsz,
            'bold': a.bold,
            'col': a.col,
            'oval': new Oval(a.oval.cx + dx, a.oval.cy + dy, 0.5 * wad[0] * PADDING, 0.5 * wad[1] * PADDING)
        };
        this.points.push(ah);
        if (sub.length > 0) {
            const subFsz = SSFRACT * a.fsz;
            wad = this.measure.measureText(sub, subFsz);
            let an = {
                'anum': 0,
                'text': sub,
                'fsz': subFsz,
                'bold': a.bold,
                'col': a.col,
                'oval': new Oval(ah.oval.cx + 0.5 * firstEMW * a.fsz * font.INV_UNITS_PER_EM + 0.5 * wad[0], ah.oval.cy + (1 - SSFRACT) * a.fsz, 0.5 * wad[0] * PADDING, 0.5 * wad[1] * PADDING)
            };
            this.points.push(an);
        }
        Vec.addTo(outlineX, dx);
        Vec.addTo(outlineY, dy);
        let minX = Vec.min(outlineX), minY = Vec.min(outlineY);
        let spc = {
            'anum': 0,
            'bnum': 0,
            'box': new Box(minX, minY, Vec.max(outlineX) - minX, Vec.max(outlineY) - minY),
            'px': outlineX,
            'py': outlineY
        };
        this.space.push(spc);
        return true;
    }
    computeSpacePoint(a) {
        let s = {
            'anum': a.anum,
            'bnum': 0,
            'box': new Box(),
            'px': [],
            'py': []
        };
        const font = FontData.main;
        let outlineX = [], outlineY = [];
        let emw = 0, nglyphs = 0;
        if (a.text != null) {
            for (let n = 0; n < a.text.length; n++) {
                let i = a.text.charCodeAt(n) - font.GLYPH_MIN;
                if (i >= 0 && i < font.GLYPH_COUNT) {
                    if (emw == 0) {
                        outlineX = font.getOutlineX(i);
                        outlineY = font.getOutlineY(i);
                        nglyphs = 1;
                    }
                    else {
                        let extraX = font.getOutlineX(i), extraY = font.getOutlineY(i);
                        if (extraX.length > 0) {
                            Vec.addTo(extraX, emw);
                            outlineX = outlineX.concat(extraX);
                            outlineY = outlineY.concat(extraY);
                            nglyphs++;
                        }
                    }
                    emw += font.HORIZ_ADV_X[i];
                }
                else
                    emw += font.MISSING_HORZ;
                if (n < a.text.length - 1) {
                    let j = a.text.charCodeAt(n + 1) - font.GLYPH_MIN;
                    for (let k = 0; k < font.KERN_K.length; k++)
                        if ((font.KERN_G1[k] == i && font.KERN_G2[k] == j) || (font.KERN_G1[k] == j && font.KERN_G2[k] == i)) {
                            emw += font.KERN_K[k];
                            break;
                        }
                }
            }
        }
        if (outlineX.length > 0) {
            if (nglyphs > 1) {
                let qh = new QuickHull(outlineX, outlineY, 0);
                outlineX = qh.hullX;
                outlineY = qh.hullY;
            }
            let emdx = -0.5 * emw, emdy = 0.5 * (font.ASCENT + font.DESCENT);
            let emscale = a.fsz * font.INV_UNITS_PER_EM;
            for (let n = 0; n < outlineX.length; n++) {
                outlineX[n] = a.oval.cx + (emdx + outlineX[n]) * emscale;
                outlineY[n] = a.oval.cy + (emdy - outlineY[n]) * emscale * this.ymul;
            }
            s.px = outlineX;
            s.py = outlineY;
            let minX = Vec.min(outlineX), minY = Vec.min(outlineY);
            s.box = new Box(minX, minY, Vec.max(outlineX) - minX, Vec.max(outlineY) - minY);
        }
        else {
            s.box = Box.fromOval(a.oval);
            if (s.box.w > 0 && s.box.h > 0) {
                s.px = [s.box.minX(), s.box.maxX(), s.box.maxX(), s.box.minX()];
                s.py = [s.box.minY(), s.box.minY(), s.box.maxY(), s.box.maxY()];
            }
        }
        return s;
    }
    computeSpaceLine(b) {
        let s = {
            'anum': 0,
            'bnum': b.bnum,
            'box': new Box(),
            'px': [],
            'py': []
        };
        if (b.type == BLineType.Normal || b.type == BLineType.Dotted || b.type == BLineType.DotDir) {
            s.px = [b.line.x1, b.line.x2];
            s.py = [b.line.y1, b.line.y2];
        }
        else {
            const dx = b.line.x2 - b.line.x1, dy = b.line.y2 - b.line.y1;
            const norm = b.head / Math.sqrt(dx * dx + dy * dy);
            const ox = norm * dy, oy = -norm * dx;
            if (b.type == BLineType.Unknown) {
                s.px = [b.line.x1 + ox, b.line.x1 - ox, b.line.x2 - ox, b.line.x2 + ox];
                s.py = [b.line.y1 + oy, b.line.y1 - oy, b.line.y2 - oy, b.line.y2 + oy];
            }
            else {
                s.px = [b.line.x1, b.line.x2 - ox, b.line.x2 + ox];
                s.py = [b.line.y1, b.line.y2 - oy, b.line.y2 + oy];
            }
        }
        s.box.x = Vec.min(s.px) - b.size;
        s.box.y = Vec.min(s.py) - b.size;
        s.box.w = Vec.max(s.px) - s.box.x + b.size;
        s.box.h = Vec.max(s.py) - s.box.y + b.size;
        return s;
    }
    bumpAtomPosition(atom, dx, dy) {
        let p = this.points[atom - 1];
        p.oval.cx += dx;
        p.oval.cy += dy;
        for (let n = this.space.length - 1; n >= 0; n--) {
            let s = this.space[n - 1];
            if (s == null || s.anum != atom)
                continue;
            s.box.x += dx;
            s.box.y += dy;
            Vec.addTo(s.px, dx);
            Vec.addTo(s.py, dy);
        }
    }
    countPolyViolations(px, py, shortCircuit) {
        let hits = 0;
        const psz = px.length, nspc = this.space.length;
        let pr = new Box(), sr = new Box();
        for (let i1 = 0; i1 < psz; i1++) {
            let i2 = i1 < psz - 1 ? i1 + 1 : 0;
            pr.x = Math.min(px[i1], px[i2]) - 1;
            pr.y = Math.min(py[i1], py[i2]) - 1;
            pr.w = Math.max(px[i1], px[i2]) - pr.x + 2;
            pr.h = Math.max(py[i1], py[i2]) - pr.y + 2;
            for (let j = 0; j < nspc; j++) {
                let spc = this.space[j];
                if (spc.px == null)
                    continue;
                sr.x = spc.box.x - 1;
                sr.y = spc.box.y - 1;
                sr.w = spc.box.w + 1;
                sr.h = spc.box.h + 1;
                if (!pr.intersects(sr))
                    continue;
                let ssz = spc.px.length;
                for (let j1 = 0; j1 < ssz; j1++) {
                    let j2 = j1 < ssz - 1 ? j1 + 1 : 0;
                    sr.x = Math.min(spc.px[j1], spc.px[j2]) - 1;
                    sr.y = Math.min(spc.py[j1], spc.py[j2]) - 1;
                    sr.w = Math.max(spc.px[j1], spc.px[j2]) - sr.x + 2;
                    sr.h = Math.max(spc.py[j1], spc.py[j2]) - sr.y + 2;
                    if (!pr.intersects(sr))
                        continue;
                    if (GeomUtil.doLineSegsIntersect(px[i1], py[i1], px[i2], py[i2], spc.px[j1], spc.py[j1], spc.px[j2], spc.py[j2])) {
                        if (shortCircuit)
                            return 1;
                        hits++;
                        break;
                    }
                    if (ssz == 1)
                        break;
                }
            }
        }
        pr.x = Vec.min(px);
        pr.y = Vec.min(py);
        pr.w = Vec.max(px) - pr.x;
        pr.h = Vec.max(py) - pr.y;
        for (let n = nspc - 1; n >= 0; n--) {
            let spc = this.space[n];
            sr.x = spc.box.x;
            sr.y = spc.box.y;
            sr.w = spc.box.w;
            sr.h = spc.box.h;
            if (!pr.intersects(sr))
                continue;
            for (let i = spc.px.length - 1; i >= 0; i--)
                if (GeomUtil.pointInPolygon(spc.px[i], spc.py[i], px, py)) {
                    if (shortCircuit)
                        return 1;
                    hits++;
                    break;
                }
            for (let i = 0; i < psz; i++)
                if (GeomUtil.pointInPolygon(px[i], py[i], spc.px, spc.py)) {
                    if (shortCircuit)
                        return 1;
                    hits++;
                    break;
                }
        }
        return hits;
    }
    adjustBondPosition(bf, bt, x1, y1, x2, y2) {
        if (bf == 0 || bt == 0)
            return null;
        for (let n = 0; n < this.lines.length; n++) {
            let b = this.lines[n];
            if (this.mol.bondOrder(b.bnum) != 1 || this.mol.bondType(b.bnum) != Molecule.BONDTYPE_NORMAL)
                continue;
            let alt = false;
            if (this.mol.bondFrom(b.bnum) == bf && this.mol.bondTo(b.bnum) == bt) { }
            else if (this.mol.bondFrom(b.bnum) == bt && this.mol.bondTo(b.bnum) == bf)
                alt = true;
            else
                continue;
            let th = angleDiff(Math.atan2(b.line.y2 - b.line.y1, b.line.x2 - b.line.x1), Math.atan2(y2 - y1, x2 - x1)) * RADDEG;
            if ((th > -5 && th < -5) || th > 175 || th < -175)
                continue;
            let xy = GeomUtil.lineIntersect(b.line.x1, b.line.y1, b.line.x2, b.line.y2, x1, y1, x2, y2);
            if (this.mol.atomRingBlock(bt) == 0) {
                if (alt) {
                    b.line.x1 = xy[0];
                    b.line.y1 = xy[1];
                }
                else {
                    b.line.x2 = xy[0];
                    b.line.y2 = xy[1];
                }
            }
            return xy;
        }
        return null;
    }
    priorityDoubleSubstit(idx) {
        let bf = this.mol.bondFrom(idx), bt = this.mol.bondTo(idx);
        let nf = this.mol.atomAdjList(bf), nt = this.mol.atomAdjList(bt);
        let a1 = this.points[bf - 1], a2 = this.points[bt - 1];
        let x1 = a1.oval.cx, y1 = a1.oval.cy, x2 = a2.oval.cx, y2 = a2.oval.cy;
        let dx = x2 - x1, dy = y2 - y1, btheta = Math.atan2(dy, dx);
        let idxFLeft = 0, idxFRight = 0, idxTLeft = 0, idxTRight = 0;
        for (let n = 0; n < nf.length; n++)
            if (nf[n] != bt) {
                let theta = angleDiff(Math.atan2(this.points[nf[n] - 1].oval.cy - y1, this.points[nf[n] - 1].oval.cx - x1), btheta);
                if (theta > 0) {
                    if (idxFLeft != 0)
                        return null;
                    idxFLeft = nf[n];
                }
                else {
                    if (idxFRight != 0)
                        return null;
                    idxFRight = nf[n];
                }
            }
        for (let n = 0; n < nt.length; n++)
            if (nt[n] != bf) {
                let theta = angleDiff(Math.atan2(this.points[nt[n] - 1].oval.cy - y2, this.points[nt[n] - 1].oval.cx - x2), btheta);
                if (theta > 0) {
                    if (idxTLeft != 0)
                        return null;
                    idxTLeft = nt[n];
                }
                else {
                    if (idxTRight != 0)
                        return null;
                    idxTRight = nt[n];
                }
            }
        let sumFrom = (idxFLeft > 0 ? 1 : 0) + (idxFRight > 0 ? 1 : 0), sumTo = (idxTLeft > 0 ? 1 : 0) + (idxTRight > 0 ? 1 : 0);
        if (sumFrom == 1 && sumTo == 0)
            return [idxFLeft > 0 ? idxFLeft : idxFRight];
        if (sumFrom == 0 && sumTo == 1)
            return [idxTLeft > 0 ? idxTLeft : idxTRight];
        if (sumFrom == 1 && sumTo == 1) {
            if (idxFLeft > 0 && idxTLeft > 0)
                return [idxFLeft, idxTLeft];
            if (idxFRight > 0 && idxTRight > 0)
                return [idxFRight, idxTRight];
            let oxy = this.orthogonalDelta(x1, y1, x2, y2, this.bondSepPix);
            let congestLeft = this.spatialCongestion(0.5 * (x1 + x2) + oxy[0], 0.5 * (y1 + y2) + oxy[1]);
            let congestRight = this.spatialCongestion(0.5 * (x1 + x2) - oxy[0], 0.5 * (y1 + y2) - oxy[1]);
            if (congestLeft < congestRight)
                return [idxFLeft > 0 ? idxFLeft : idxTLeft];
            else
                return [idxFRight > 0 ? idxFRight : idxTRight];
        }
        if (sumFrom == 2 && sumTo == 1) {
            if (idxTLeft == 0)
                return [idxFRight, idxTRight];
            else
                return [idxFLeft, idxTLeft];
        }
        if (sumFrom == 1 && sumTo == 2) {
            if (idxFLeft == 0)
                return [idxFRight, idxTRight];
            else
                return [idxFLeft, idxTLeft];
        }
        return null;
    }
    spatialCongestion(x, y, thresh) {
        if (thresh == null)
            thresh = 0.001;
        let congest = 0;
        for (let n = 0; n < this.points.length; n++) {
            let a = this.points[n];
            if (a == null)
                continue;
            let dx = a.oval.cx - x, dy = a.oval.cy - y;
            congest += 1 / (dx * dx + dy * dy + thresh);
        }
        return congest;
    }
    boxOverlaps(x, y, w, h, pointmask, linemask) {
        let vx1 = x, vy1 = y, vx2 = x + w, vy2 = y + h;
        for (let n = 0; n < this.points.length; n++) {
            if (pointmask != null && !pointmask[n])
                continue;
            let a = this.points[n];
            let wx1 = a.oval.cx - a.oval.rw, wy1 = a.oval.cy - a.oval.rh, wx2 = a.oval.cx + a.oval.rw, wy2 = a.oval.cy + a.oval.rh;
            if (vx2 < wx1 || vx1 > wx2 || vy2 < wy1 || vy1 > wy2)
                continue;
            return true;
        }
        for (let n = 0; n < this.lines.length; n++) {
            if (linemask != null && !linemask[n])
                continue;
            let b = this.lines[n];
            let wx1 = b.line.x1, wy1 = b.line.y1, wx2 = b.line.x2, wy2 = b.line.y2;
            if (vx2 < Math.min(wx1, wx2) || vx1 > Math.max(wx1, wx2) || vy2 < Math.min(wy1, wy2) || vy1 > Math.max(wy1, wy2))
                continue;
            if (wx1 >= vx1 && wx1 <= vx2 && wy1 >= vy1 && wy1 <= vy2)
                return true;
            if (wx2 >= vx1 && wx2 <= vx2 && wy2 >= vy1 && wy2 <= vy2)
                return true;
            if (GeomUtil.doLineSegsIntersect(wx1, wy1, wx2, wy2, vx1, vy1, vx2, vy1))
                return true;
            if (GeomUtil.doLineSegsIntersect(wx1, wy1, wx2, wy2, vx1, vy2, vx2, vy2))
                return true;
            if (GeomUtil.doLineSegsIntersect(wx1, wy1, wx2, wy2, vx1, vy1, vx1, vy2))
                return true;
            if (GeomUtil.doLineSegsIntersect(wx1, wy1, wx2, wy2, vx2, vy1, vx2, vy2))
                return true;
        }
        return false;
    }
    resolveLineCrossings(bondHigher, bondLower) {
        while (true) {
            let anything = false;
            for (let i1 = 0; i1 < this.lines.length; i1++) {
                let b1 = this.lines[i1];
                if (b1.bnum != bondHigher)
                    continue;
                if (b1.type != BLineType.Normal && b1.type != BLineType.Dotted && b1.type != BLineType.DotDir)
                    continue;
                for (let i2 = 0; i2 < this.lines.length; i2++) {
                    let b2 = this.lines[i2];
                    if (b2.bnum != bondLower)
                        continue;
                    if (b2.type == BLineType.DotDir)
                        b2.type = BLineType.Dotted;
                    if (b2.type != BLineType.Normal && b2.type != BLineType.Dotted)
                        continue;
                    if (b1.bfr == b2.bfr || b1.bfr == b2.bto || b1.bto == b2.bfr || b1.bto == b2.bto)
                        continue;
                    if (!GeomUtil.doLineSegsIntersect(b1.line.x1, b1.line.y1, b1.line.x2, b1.line.y2, b2.line.x1, b2.line.y1, b2.line.x2, b2.line.y2))
                        continue;
                    let xy = GeomUtil.lineIntersect(b1.line.x1, b1.line.y1, b1.line.x2, b1.line.y2, b2.line.x1, b2.line.y1, b2.line.x2, b2.line.y2);
                    let dx = b2.line.x2 - b2.line.x1, dy = b2.line.y2 - b2.line.y1;
                    let ext = Math.abs(dx) > Math.abs(dy) ? (xy[0] - b2.line.x1) / dx : (xy[1] - b2.line.y1) / dy;
                    let dist = norm_xy(dx, dy);
                    let delta = b2.size / dist * (b2.type == BLineType.Normal ? 2 : 4);
                    if (ext > delta && ext < 1 - delta) {
                        let b3 = {
                            'bnum': b2.bnum,
                            'bfr': b2.bfr,
                            'bto': b2.bto,
                            'type': b2.type,
                            'line': b2.line.clone(),
                            'size': b2.size,
                            'head': b2.head,
                            'col': b2.col
                        };
                        this.lines.push(b3);
                        b2.line.x2 = b2.line.x1 + dx * (ext - delta);
                        b2.line.y2 = b2.line.y1 + dy * (ext - delta);
                        b3.line.x1 = b3.line.x1 + dx * (ext + delta);
                        b3.line.y1 = b3.line.y1 + dy * (ext + delta);
                        anything = true;
                    }
                    else if (ext > delta) {
                        b2.line.x2 = b2.line.x1 + dx * (ext - delta);
                        b2.line.y2 = b2.line.y1 + dy * (ext - delta);
                        anything = true;
                    }
                    else if (ext < 1 - delta) {
                        b2.line.x1 = b2.line.x1 + dx * (ext + delta);
                        b2.line.y1 = b2.line.y1 + dy * (ext + delta);
                        anything = true;
                    }
                }
            }
            if (!anything)
                break;
        }
    }
}
ArrangeMolecule.FONT_CORRECT = 1.5;
class DrawMolecule {
    constructor(layout, vg) {
        this.layout = layout;
        this.vg = vg;
        this.mol = layout.getMolecule();
        this.policy = layout.getPolicy();
        this.effects = layout.getEffects();
        this.scale = layout.getScale();
        this.invScale = 1.0 / this.scale;
    }
    getMolecule() { return this.mol; }
    getMetaVector() { return this.vg; }
    getLayout() { return this.layout; }
    getPolicy() { return this.policy; }
    getEffects() { return this.effects; }
    draw() {
        let DRAW_SPACE = false;
        if (DRAW_SPACE)
            for (let n = 0; n < this.layout.numSpace(); n++) {
                let spc = this.layout.getSpace(n);
                this.vg.drawRect(spc.box.x, spc.box.y, spc.box.w, spc.box.h, MetaVector.NOCOLOUR, 0, 0xE0E0E0);
                if (spc.px != null && spc.py != null && spc.px.length > 2)
                    this.vg.drawPoly(spc.px, spc.py, 0x000000, 1, 0x808080FF, true);
            }
        this.drawUnderEffects();
        let layout = this.layout, effects = this.effects, policy = this.policy, vg = this.vg;
        for (let n = 0; n < layout.numLines(); n++) {
            let b = layout.getLine(n);
            if (effects.hideBonds.has(b.bnum))
                continue;
            if (b.type == BLineType.Normal) {
                vg.drawLine(b.line.x1, b.line.y1, b.line.x2, b.line.y2, b.col, b.size);
            }
            else if (b.type == BLineType.Inclined)
                this.drawBondInclined(b);
            else if (b.type == BLineType.Declined)
                this.drawBondDeclined(b);
            else if (b.type == BLineType.Unknown)
                this.drawBondUnknown(b);
            else if (b.type == BLineType.Dotted || b.type == BLineType.DotDir)
                this.drawBondDotted(b);
            else if (b.type == BLineType.IncDouble || b.type == BLineType.IncTriple || b.type == BLineType.IncQuadruple)
                this.drawBondIncMulti(b);
        }
        for (let n = 0; n < layout.numPoints(); n++) {
            let p = layout.getPoint(n);
            if (effects.hideBonds.has(p.anum))
                continue;
            let txt = p.text;
            if (txt == null)
                continue;
            let fsz = p.fsz;
            let cx = p.oval.cx, cy = p.oval.cy, rw = p.oval.rw;
            let col = p.col;
            while (txt.endsWith('.')) {
                let dw = rw / txt.length;
                let r = fsz * 0.15;
                vg.drawOval(cx + rw - dw, cy, r, r, MetaVector.NOCOLOUR, 0, col);
                cx -= dw;
                rw -= dw;
                txt = txt.substring(0, txt.length - 1);
            }
            while (txt.startsWith('+')) {
                let dw = rw / txt.length;
                let x = cx - rw + dw, y = cy, r = fsz * 0.18, lsz = fsz * 0.1;
                vg.drawLine(x - r, y, x + r, y, col, lsz);
                vg.drawLine(x, y - r, x, y + r, col, lsz);
                cx += dw;
                rw -= dw;
                txt = txt.substring(1, txt.length);
            }
            while (txt.startsWith('-')) {
                let dw = rw / txt.length;
                let x = cx - rw + dw, y = cy, r = fsz * 0.18, lsz = fsz * 0.1;
                vg.drawLine(x - r, y, x + r, y, col, lsz);
                cx += dw;
                rw -= dw;
                txt = txt.substring(1, txt.length);
            }
            if (txt.length > 0) {
                vg.drawText(cx, cy, txt, fsz, col, TextAlign.Centre | TextAlign.Middle);
            }
        }
        this.drawOverEffects();
    }
    drawUnderEffects() {
        let mol = this.mol, policy = this.policy, effects = this.effects, layout = this.layout, scale = this.scale, vg = this.vg;
        for (let n = 0, num = Math.min(effects.atomFrameDotSz.length, mol.numAtoms); n < num; n++) {
            if (effects.hideAtoms.has(n + 1))
                continue;
            let dw = effects.atomFrameDotSz[n] * scale, col = effects.atomFrameCol[n];
            let a = layout.getPoint(n);
            let rw = a.oval.rw + 0.1 * scale, rh = a.oval.rh + 0.1 * scale;
            let wdots = Math.ceil(2 * rw / (3 * dw));
            let hdots = Math.ceil(2 * rh / (3 * dw));
            let wspc = 2 * rw / wdots, hspc = 2 * rh / hdots;
            for (let i = 0; i <= wdots; i++) {
                let x = a.oval.cx - rw + i * wspc;
                vg.drawOval(x, a.oval.cy - rh, dw, dw, MetaVector.NOCOLOUR, 0, col);
                vg.drawOval(x, a.oval.cy + rh, dw, dw, MetaVector.NOCOLOUR, 0, col);
            }
            for (let i = 1; i < hdots; i++) {
                let y = a.oval.cy - rh + i * hspc;
                vg.drawOval(a.oval.cx - rw, y, dw, dw, MetaVector.NOCOLOUR, 0, col);
                vg.drawOval(a.oval.cx + rw, y, dw, dw, MetaVector.NOCOLOUR, 0, col);
            }
        }
        for (let key in effects.dottedRectOutline) {
            let atom = parseInt(key), col = effects.dottedRectOutline[key];
            let a = layout.getPoint(atom - 1);
            let rw = Math.max(a.oval.rw, 0.2 * scale), rh = Math.max(a.oval.rh, 0.2 * scale);
            let sz = 0.05 * scale;
            let xdots = Math.max(1, Math.round(rw / (2 * sz)));
            let ydots = Math.max(1, Math.round(rh / (2 * sz)));
            let invX = (2 * rw) / xdots, invY = (2 * rh) / ydots;
            for (let n = 0; n <= xdots; n++) {
                let x = a.oval.cx - rw + n * invX;
                vg.drawOval(x, a.oval.cy - rh, sz, sz, MetaVector.NOCOLOUR, 0, col);
                vg.drawOval(x, a.oval.cy + rh, sz, sz, MetaVector.NOCOLOUR, 0, col);
            }
            for (let n = 1; n < ydots; n++) {
                let y = a.oval.cy - rh + n * invY;
                vg.drawOval(a.oval.cx - rw, y, sz, sz, MetaVector.NOCOLOUR, 0, col);
                vg.drawOval(a.oval.cx + rw, y, sz, sz, MetaVector.NOCOLOUR, 0, col);
            }
        }
        for (let key in effects.dottedBondCross) {
            let bond = parseInt(key), col = effects.dottedBondCross[key];
            var x1 = 0, y1 = 0, x2 = 0, y2 = 0, bcount = 0;
            for (let n = 0; n < layout.numLines(); n++) {
                let b = layout.getLine(n);
                if (b.bnum == bond) {
                    x1 += b.line.x1;
                    y1 += b.line.y1;
                    x2 += b.line.x2;
                    y2 += b.line.y2;
                    bcount += 1;
                }
            }
            if (bcount > 1) {
                let inv = 1 / bcount;
                [x1, y1, x2, y2] = [x1 * inv, y1 * inv, x2 * inv, y2 * inv];
            }
            let dx = x2 - x1, dy = y2 - y1;
            let inv = 0.2 * scale * invZ(norm_xy(dx, dy)), ox = dy * inv, oy = -dx * inv;
            let cx = 0.5 * (x1 + x2), cy = 0.5 * (y1 + y2), sz = 0.05 * scale;
            for (let p of [-2, -1, 1, 2]) {
                let x = cx + p * ox, y = cy + p * oy;
                vg.drawOval(x, y, sz, sz, MetaVector.NOCOLOUR, 0, col);
            }
        }
    }
    drawOverEffects() {
        let mol = this.mol, policy = this.policy, effects = this.effects, layout = this.layout, scale = this.scale, vg = this.vg;
        for (let a of effects.overlapAtoms) {
            let p = layout.getPoint(a - 1);
            let rad = scale * 0.2;
            vg.drawLine(p.oval.cx - rad, p.oval.cy - rad, p.oval.cx + rad, p.oval.cy + rad, 0xFF0000, 1);
            vg.drawLine(p.oval.cx + rad, p.oval.cy - rad, p.oval.cx - rad, p.oval.cy + rad, 0xFF0000, 1);
        }
        for (let n = 0, num = Math.min(effects.atomCircleSz.length, mol.numAtoms); n < num; n++)
            if (effects.atomCircleSz[n] > 0) {
                let dw = effects.atomCircleSz[n] * scale, col = effects.atomCircleCol[n];
                let p = layout.getPoint(n);
                vg.drawOval(p.oval.cx, p.oval.cy, dw, dw, MetaVector.NOCOLOUR, 0, col);
            }
    }
    drawBondInclined(b) {
        let x1 = b.line.x1, y1 = b.line.y1, x2 = b.line.x2, y2 = b.line.y2;
        let dx = x2 - x1, dy = y2 - y1;
        let col = b.col;
        let size = b.size, head = b.head;
        let norm = head / Math.sqrt(dx * dx + dy * dy);
        let ox = norm * dy, oy = -norm * dx;
        let px = [x1, x2 - ox, x2 + ox], py = [y1, y2 - oy, y2 + oy];
        if (this.layout.getPoint(b.bto - 1).text == null && this.mol.atomAdjCount(b.bto) == 2) {
            let other = null;
            for (let n = 0; n < this.layout.numLines(); n++) {
                let o = this.layout.getLine(n);
                if (o.type == BLineType.Normal && (o.bfr == b.bto || o.bto == b.bto)) {
                    if (other != null) {
                        other = null;
                        break;
                    }
                    other = o;
                }
            }
            if (other != null) {
                let th1 = Math.atan2(y1 - y2, x1 - x2);
                let th2 = Math.atan2(other.line.y1 - other.line.y2, other.line.x1 - other.line.x2);
                if (b.bto == other.bfr)
                    th2 += Math.PI;
                let diff = Math.abs(angleDiff(th1, th2));
                if (diff > 105 * DEGRAD && diff < 135 * DEGRAD) {
                    let ixy1 = GeomUtil.lineIntersect(px[0], py[0], px[1], py[1], other.line.x1, other.line.y1, other.line.x2, other.line.y2);
                    let ixy2 = GeomUtil.lineIntersect(px[0], py[0], px[2], py[2], other.line.x1, other.line.y1, other.line.x2, other.line.y2);
                    px[1] = ixy1[0];
                    py[1] = ixy1[1];
                    px[2] = ixy2[0];
                    py[2] = ixy2[1];
                    let dx1 = px[1] - px[0], dy1 = py[1] - py[0], inv1 = 0.5 * other.size / norm_xy(dx1, dy1);
                    px[1] += dx1 * inv1;
                    py[1] += dy1 * inv1;
                    let dx2 = px[2] - px[0], dy2 = py[2] - py[0], inv2 = 0.5 * other.size / norm_xy(dx2, dy2);
                    px[2] += dx2 * inv1;
                    py[2] += dy2 * inv1;
                }
            }
        }
        if (this.layout.getPoint(b.bto - 1).text == null && this.mol.atomAdjCount(b.bto) == 3) {
            let other1 = null, other2 = null;
            for (let n = 0; n < this.layout.numLines(); n++) {
                let o = this.layout.getLine(n);
                if (o.type == BLineType.Normal && (o.bfr == b.bto || o.bto == b.bto)) {
                    if (other1 == null)
                        other1 = o;
                    else if (other2 == null)
                        other2 = o;
                    else {
                        other1 = other2 = null;
                        break;
                    }
                }
            }
            if (other1 != null && other2 != null) {
                let th1 = Math.atan2(y1 - y2, x1 - x2);
                let th2 = Math.atan2(other1.line.y1 - other1.line.y2, other1.line.x1 - other1.line.x2);
                let th3 = Math.atan2(other2.line.y1 - other2.line.y2, other2.line.x1 - other2.line.x2);
                if (b.bto == other1.bfr)
                    th2 += Math.PI;
                if (b.bto == other2.bfr)
                    th3 += Math.PI;
                let dth1 = angleDiff(th1, th2), diff1 = Math.abs(dth1);
                let dth2 = angleDiff(th1, th3), diff2 = Math.abs(dth2);
                let diff3 = Math.abs(angleDiff(th2, th3));
                if (diff1 > 105 * DEGRAD && diff1 < 135 * DEGRAD ||
                    diff2 > 105 * DEGRAD && diff2 < 135 * DEGRAD ||
                    diff3 > 105 * DEGRAD && diff3 < 135 * DEGRAD) {
                    if (dth1 < 0)
                        [other1, other2] = [other2, other1];
                    let ixy1 = GeomUtil.lineIntersect(px[0], py[0], px[1], py[1], other1.line.x1, other1.line.y1, other1.line.x2, other1.line.y2);
                    let ixy2 = GeomUtil.lineIntersect(px[0], py[0], px[2], py[2], other2.line.x1, other2.line.y1, other2.line.x2, other2.line.y2);
                    px = [x1, ixy1[0], x2, ixy2[0]];
                    py = [y1, ixy1[1], y2, ixy2[1]];
                }
            }
        }
        this.vg.drawPoly(px, py, MetaVector.NOCOLOUR, 0, col, true);
    }
    drawBondDeclined(b) {
        let x1 = b.line.x1, y1 = b.line.y1, x2 = b.line.x2, y2 = b.line.y2;
        let dx = x2 - x1, dy = y2 - y1;
        let col = b.col;
        let size = b.size, head = b.head;
        let ext = Math.sqrt(dx * dx + dy * dy);
        let nsteps = Math.ceil(ext * 2.5 * this.invScale);
        let norm = head / ext;
        let ox = norm * dy, oy = -norm * dx, invSteps = 1.0 / (nsteps + 1);
        let holdout = this.mol.atomAdjCount(b.bto) == 1 && this.layout.getPoint(b.bto - 1).text == null ? 1 : 1 - (0.15 * this.scale) / ext;
        for (let i = 0; i <= nsteps + 1; i++) {
            let cx = x1 + i * dx * invSteps * holdout, cy = y1 + i * dy * invSteps * holdout;
            let ix = ox * i * invSteps, iy = oy * i * invSteps;
            this.vg.drawLine(cx - ix, cy - iy, cx + ix, cy + iy, col, size);
        }
    }
    drawBondUnknown(b) {
        let x1 = b.line.x1, y1 = b.line.y1, x2 = b.line.x2, y2 = b.line.y2;
        let dx = x2 - x1, dy = y2 - y1;
        let col = b.col;
        let size = b.size, head = b.head;
        let ext = Math.sqrt(dx * dx + dy * dy);
        let nsteps = Math.ceil(ext * 3.5 * this.invScale);
        let norm = head / ext;
        let ox = norm * dy, oy = -norm * dx;
        let sz = 1 + 3 * (nsteps + 1);
        let x = Vec.numberArray(0, sz), y = Vec.numberArray(0, sz), ctrl = Vec.booleanArray(false, sz);
        x[0] = x1;
        y[0] = y1;
        ctrl[0] = false;
        for (let i = 0, j = 1; i <= nsteps; i++, j += 3) {
            let ax = x1 + i * dx / (nsteps + 1), ay = y1 + i * dy / (nsteps + 1);
            let cx = x1 + (i + 1) * dx / (nsteps + 1), cy = y1 + (i + 1) * dy / (nsteps + 1);
            let bx = (ax + cx) / 2, by = (ay + cy) / 2;
            let sign = i % 2 == 0 ? 1 : -1;
            x[j] = ax;
            x[j + 1] = bx + sign * ox;
            x[j + 2] = cx;
            y[j] = ay;
            y[j + 1] = by + sign * oy;
            y[j + 2] = cy;
            ctrl[j] = true;
            ctrl[j + 1] = true;
            ctrl[j + 2] = false;
        }
        this.vg.drawPath(x, y, ctrl, true, col, size, MetaVector.NOCOLOUR, false);
    }
    drawBondDotted(b) {
        let x1 = b.line.x1, y1 = b.line.y1, x2 = b.line.x2, y2 = b.line.y2;
        let dx = x2 - x1, dy = y2 - y1;
        let col = b.col;
        let size = b.size;
        let radius = size, dist = norm_xy(dx, dy);
        if (dist < 0.01)
            return;
        let nudge = 0.5 * size / dist;
        x1 += nudge * dx;
        y1 += nudge * dy;
        x2 -= nudge * dx;
        y2 -= nudge * dy;
        dx = x2 - x1;
        dy = y2 - y1;
        let nsteps = Math.ceil(0.2 * dist / radius);
        let invSteps = 1.0 / (nsteps + 1);
        for (let i = 0; i <= nsteps + 1; i++) {
            let r = radius;
            if (b.type == BLineType.DotDir)
                r *= 1 + (i * (1.0 / (nsteps + 2)) - 0.5);
            let cx = x1 + i * dx * invSteps, cy = y1 + i * dy * invSteps;
            this.vg.drawOval(cx, cy, r, r, MetaVector.NOCOLOUR, 0, col);
        }
    }
    drawBondIncMulti(b) {
        let x1 = b.line.x1, y1 = b.line.y1, x2 = b.line.x2, y2 = b.line.y2;
        let dx = x2 - x1, dy = y2 - y1;
        let col = b.col;
        let size = b.size, head = b.head;
        let norm = head / Math.sqrt(dx * dx + dy * dy);
        let ox = norm * dy, oy = -norm * dx;
        this.vg.drawPoly([x1, x2 - ox, x2 + ox], [y1, y2 - oy, y2 + oy], col, this.scale * 0.05, MetaVector.NOCOLOUR, true);
        if (b.type == BLineType.IncDouble) {
            this.vg.drawLine(x1, y1, x2, y2, col, this.scale * 0.03);
        }
        else {
            this.vg.drawLine(x1, y1, x2 + 0.33 * ox, y2 + 0.33 * oy, col, this.scale * 0.03);
            this.vg.drawLine(x1, y1, x2 - 0.33 * ox, y2 - 0.33 * oy, col, this.scale * 0.03);
        }
    }
}
class RPC {
    constructor(request, parameter, callback) {
        this.request = request;
        this.parameter = parameter;
        this.callback = callback;
    }
    invoke() {
        let data = this.parameter;
        if (data == null)
            data = {};
        let url = RPC.BASE_URL + "/REST/" + this.request;
        $.ajax({
            'url': url,
            'type': 'POST',
            'data': JSON.stringify(this.parameter),
            'contentType': 'application/json;charset=utf-8',
            'dataType': 'json',
            headers: { 'Access-Control-Allow-Origin': '*' },
            success: (data, textStatus, jqXHR) => {
                var result = null, error = null;
                if (!data) {
                    error =
                        {
                            'message': 'null result',
                            'code': RPC.ERRCODE_NONSPECIFIC,
                            type: 0,
                            'detail': 'unknown failure'
                        };
                }
                else {
                    if (data.error) {
                        error =
                            {
                                'message': data.error,
                                'code': data.errorCode,
                                'type': data.errorType,
                                'detail': data.errorDetail
                            };
                        console.log('RPC error communicating with: ' + url + ', content: ' + JSON.stringify(data.error) + '\nDetail:\n' + data.errorDetail);
                    }
                    else
                        result = data.result;
                }
                this.callback(result, error);
            },
            error: (jqXHR, textStatus, errorThrow) => {
                var error = {
                    'message': 'connection failure',
                    'code': RPC.ERRCODE_NONSPECIFIC,
                    type: 0,
                    'detail': `unable to obtain result from service: {$url}`
                };
                this.callback({}, error);
            }
        });
    }
}
RPC.BASE_URL = null;
RPC.RESOURCE_URL = null;
RPC.ERRCODE_CLIENT_ABORTED = -3;
RPC.ERRCODE_CLIENT_TIMEOUT = -1;
RPC.ERRCODE_CLIENT_OTHER = -1;
RPC.ERRCODE_NONSPECIFIC = 0;
RPC.ERRCODE_UNKNOWN = 1;
RPC.ERRCODE_NOSUCHUSER = 2;
RPC.ERRCODE_INVALIDLOGIN = 3;
RPC.ERRCODE_INVALIDTOKEN = 4;
RPC.ERRCODE_DATASHEETUNAVAIL = 5;
RPC.ERRCODE_INVALIDCOMMAND = 6;
RPC.ERRCODE_ROWDATAUNAVAIL = 7;
RPC.ERRCODE_MISSINGPARAM = 8;
class Func {
    static renderStructure(input, callback) {
        new RPC('func.renderStructure', input, callback).invoke();
    }
    static arrangeMolecule(input, callback) {
        new RPC('func.arrangeMolecule', input, callback).invoke();
    }
    static renderRowDetail(input, callback) {
        new RPC('func.renderRowDetail', input, callback).invoke();
    }
    static renderYieldDetail(input, callback) {
        new RPC('func.renderYieldDetail', input, callback).invoke();
    }
    static composeDocument(input, callback) {
        new RPC('func.composeDocument', input, callback).invoke();
    }
    static getMoleculeProperties(input, callback) {
        new RPC('func.getMoleculeProperties', input, callback).invoke();
    }
    static atomMapping(input, callback) {
        new RPC('func.atomMapping', input, callback).invoke();
    }
    static prepareDownloadable(input, callback) {
        new RPC('func.prepareDownloadable', input, callback).invoke();
    }
    static downloadFromSource(input, callback) {
        new RPC('func.downloadFromSource', input, callback).invoke();
    }
    static getDefaultTemplateGroups(input, callback) {
        new RPC('func.getDefaultTemplateGroups', input, callback).invoke();
    }
    static getDefaultTemplateStructs(input, callback) {
        new RPC('func.getDefaultTemplateStructs', input, callback).invoke();
    }
    static getActionIcons(input, callback) {
        new RPC('func.getActionIcons', input, callback).invoke();
    }
}
class ViewStructure extends Widget {
    constructor(tokenID) {
        super();
        this.tokenID = tokenID;
        this.naturalWidth = 0;
        this.naturalHeight = 0;
        this.width = 0;
        this.height = 0;
        this.padding = 2;
        this.borderCol = 0x000000;
        this.borderRadius = 8;
        this.backgroundCol1 = 0xFFFFFF;
        this.backgroundCol2 = 0xE0E0E0;
        this.molstr = null;
        this.datastr = null;
        this.datarow = 0;
        this.policy = null;
    }
    defineMolecule(mol) {
        this.molstr = mol.toString();
    }
    defineMoleculeString(molsk) {
        this.molstr = molsk;
    }
    defineDataSheetString(dsxml, rowidx) {
        this.datastr = dsxml;
        this.datarow = rowidx != null ? rowidx : 0;
    }
    defineRenderPolicy(policy) {
        this.policy = policy;
    }
    setup(callback) {
        if (this.molstr == null && this.datastr == null)
            throw 'molsync.ui.ViewStructure.setup called without specifying a molecule or datasheet';
        if (this.policy == null)
            this.policy = RenderPolicy.defaultColourOnWhite();
        if (this.molstr != null)
            this.setupMolecule(callback);
        else
            this.setupData(callback);
    }
    render(parent) {
        if (!this.metavec)
            throw 'molsync.ui.ViewStructure.render must be preceded by a call to setup';
        super.render(parent);
        let canvas = newElement(this.content, 'canvas', { 'width': this.width, 'height': this.height });
        let density = pixelDensity();
        canvas.width = this.width * density;
        canvas.height = this.height * density;
        canvas.style.width = this.width + 'px';
        canvas.style.height = this.height + 'px';
        let ctx = canvas.getContext('2d');
        ctx.save();
        ctx.scale(density, density);
        let path;
        if (this.borderRadius == 0) {
            path = new Path2D();
            path.rect(1.5, 1.5, this.width - 3, this.height - 3);
        }
        else
            path = pathRoundedRect(1.5, 1.5, this.width - 1.5, this.height - 1.5, this.borderRadius);
        if (this.backgroundCol1 != null) {
            if (this.backgroundCol2 == null) {
                ctx.fillStyle = colourCanvas(this.backgroundCol1);
            }
            else {
                var grad = ctx.createLinearGradient(0, 0, this.width, this.height);
                grad.addColorStop(0, colourCanvas(this.backgroundCol1));
                grad.addColorStop(1, colourCanvas(this.backgroundCol2));
                ctx.fillStyle = grad;
            }
            ctx.fill(path);
        }
        if (this.borderCol != -1) {
            ctx.strokeStyle = colourCanvas(this.borderCol);
            ctx.lineWidth = 1;
            ctx.stroke(path);
        }
        let limW = this.width - 2 * this.padding, limH = this.height - 2 * this.padding;
        let natW = this.naturalWidth, natH = this.naturalHeight;
        let scale = 1;
        if (natW > limW) {
            let down = limW / natW;
            scale *= down;
            natW *= down;
            natH *= down;
        }
        if (natH > limH) {
            let down = limH / natH;
            scale *= down;
            natW *= down;
            natH *= down;
        }
        this.metavec.offsetX = 0.5 * (this.width - natW);
        this.metavec.offsetY = 0.5 * (this.height - natH);
        this.metavec.scale = scale;
        this.metavec.renderContext(ctx);
        ctx.restore();
    }
    setupMolecule(callback) {
        let mol = Molecule.fromString(this.molstr);
        let effects = new RenderEffects();
        let measure = new OutlineMeasurement(0, 0, this.policy.data.pointScale);
        let layout = new ArrangeMolecule(mol, measure, this.policy, effects);
        layout.arrange();
        this.metavec = new MetaVector();
        new DrawMolecule(layout, this.metavec).draw();
        this.metavec.normalise();
        this.naturalWidth = this.metavec.width;
        this.naturalHeight = this.metavec.height;
        if (this.width == 0)
            this.width = this.naturalWidth + 2 * this.padding;
        if (this.height == 0)
            this.height = this.naturalHeight + 2 * this.padding;
        if (callback)
            callback();
    }
    setupData(callback) {
        let input = { 'tokenID': this.tokenID };
        input.policy = this.policy.data;
        input.dataXML = this.datastr;
        input.dataRow = this.datarow;
        Func.renderStructure(input, (result, error) => {
            if (!result) {
                alert('Setup of ViewStructure failed: ' + error.message);
                return;
            }
            this.metavec = new MetaVector(result.metavec);
            this.naturalWidth = this.metavec.width;
            this.naturalHeight = this.metavec.width;
            if (this.width == 0)
                this.width = this.naturalWidth + 2 * this.padding;
            if (this.height == 0)
                this.height = this.naturalHeight + 2 * this.padding;
            if (callback)
                callback();
        });
    }
}
class Dialog {
    constructor() {
        this.minPortionWidth = 80;
        this.maxPortionWidth = 80;
        this.title = 'Dialog';
        this.callbackClose = null;
    }
    onClose(callback) {
        this.callbackClose = callback;
    }
    open() {
        let bg = $('<div></div>').appendTo(document.body);
        bg.css('width', '100%');
        bg.css('height', document.documentElement.clientHeight + 'px');
        bg.css('background-color', 'black');
        bg.css('opacity', 0.8);
        bg.css('position', 'absolute');
        bg.css('left', 0);
        bg.css('top', 0);
        this.obscureBackground = bg;
        let pb = $('<div></div>').appendTo(document.body);
        pb.css('min-width', this.minPortionWidth + '%');
        if (this.maxPortionWidth != null)
            pb.css('max-width', this.maxPortionWidth + '%');
        pb.css('background-color', 'white');
        pb.css('border-radius', '6px');
        pb.css('border', '1px solid black');
        pb.css('position', 'absolute');
        pb.css('left', (50 - 0.5 * this.minPortionWidth) + '%');
        pb.css('top', (document.body.scrollTop + 50) + 'px');
        pb.css('min-height', '50%');
        this.panelBoundary = pb;
        let tdiv = $('<div></div>').appendTo(pb);
        tdiv.css('width', '100%');
        tdiv.css('background-color', '#F0F0F0');
        tdiv.css('background-image', 'linear-gradient(to right bottom, #FFFFFF, #E0E0E0)');
        tdiv.css('border-bottom', '1px solid #C0C0C0');
        tdiv.css('border-radius', '6px 6px 0 0');
        tdiv.css('margin', 0);
        tdiv.css('padding', 0);
        this.titleDiv = tdiv;
        let bdiv = $('<div"></div>').appendTo(pb);
        bdiv.css('width', '100%');
        this.bodyDiv = $('<div style="padding: 0.5em;"></div>').appendTo(bdiv);
        let ttlTable = $('<table></table>').appendTo(tdiv), tr = $('<tr></tr>').appendTo(ttlTable);
        ttlTable.attr('width', '100%');
        ttlTable.css('padding', '0.5em');
        let tdTitle = $('<td valign="center"></td>').appendTo(tr);
        tdTitle.append('<b><big>' + escapeHTML(this.title) + '</big></b>');
        let tdButtons = $('<td align="right" valign="center"></td>').appendTo(tr);
        this.btnClose = $('<button class="button button-default">Close</button>').appendTo(tdButtons);
        this.btnClose.click(() => this.close());
        this.titleButtons = tdButtons;
        this.populate();
        this.repositionSize();
        bg.show();
        pb.show();
    }
    close() {
        this.panelBoundary.remove();
        this.obscureBackground.remove();
        if (this.callbackClose)
            this.callbackClose(this);
    }
    bump() {
        this.repositionSize();
    }
    body() { return this.bodyDiv; }
    buttons() { return this.titleButtons; }
    populate() {
        this.body().text('Empty dialog box.');
    }
    repositionSize() {
        let docW = $(window).width(), dlgW = this.panelBoundary.width();
        this.panelBoundary.css('left', (0.5 * (docW - dlgW)) + 'px');
    }
}
class PickRecent extends Dialog {
    constructor(cookies, sides) {
        super();
        this.cookies = cookies;
        this.sides = sides;
        this.callbackPick1 = null;
        this.callbackPick2 = null;
        this.tableRows = [];
        this.views = [];
        this.title = "Recent Molecules";
        this.minPortionWidth = 20;
        this.maxPortionWidth = 95;
    }
    populate() {
        let table = $('<table></table>').appendTo(this.body());
        for (let n = 0; n < this.cookies.numMolecules(); n++) {
            const idx = n;
            let tr = $('<tr></tr>').appendTo(table);
            this.tableRows.push(tr);
            let tdHTML = '<td style="text-align: center; vertical-align: middle; padding: 0.5em;"></td>';
            const tdMol = $(tdHTML).appendTo(tr);
            let mol = this.cookies.getMolecule(n);
            const vs = new ViewStructure();
            this.views[n] = vs;
            vs.content = tdMol;
            vs.defineMolecule(mol);
            vs.borderCol = -1;
            vs.backgroundCol1 = 0xF8F8F8;
            vs.backgroundCol2 = 0xE0E0E0;
            vs.padding = 4;
            vs.setup(() => { vs.render(tdMol); this.bump(); });
            let tdPick = $(tdHTML).appendTo(tr);
            if (this.sides == 1) {
                let btnPick = $('<button class="button button-primary">Pick</button>').appendTo(tdPick);
                btnPick.click(() => this.pickMolecule(idx, 1));
            }
            else {
                let btnPick1 = $('<button class="button button-primary">Reactant</button>').appendTo(tdPick);
                tdPick.append('&nbsp;');
                let btnPick2 = $('<button class="button button-primary">Product</button>').appendTo(tdPick);
                btnPick1.click(() => this.pickMolecule(idx, 1));
                btnPick2.click(() => this.pickMolecule(idx, 2));
            }
            tdPick.append('&nbsp;');
            let btnDelete = $('<button class="button button-default">Delete</button>').appendTo(tdPick);
            btnDelete.click(() => this.deleteMolecule(idx));
        }
    }
    pickMolecule(idx, which) {
        let mol = this.cookies.getMolecule(idx);
        this.cookies.promoteToTop(idx);
        if (which == 1 && this.callbackPick1)
            this.callbackPick1(mol);
        if (which == 2 && this.callbackPick2)
            this.callbackPick2(mol);
        this.close();
    }
    deleteMolecule(idx) {
        this.cookies.deleteMolecule(idx);
        this.tableRows[idx].remove();
        this.bump();
    }
}
class ButtonView extends Widget {
    constructor(position, parentX, parentY, parentWidth, parentHeight) {
        super();
        this.position = position;
        this.parentX = parentX;
        this.parentY = parentY;
        this.parentWidth = parentWidth;
        this.parentHeight = parentHeight;
        this.idealSize = 50;
        this.width = 0;
        this.height = 0;
        this.selectedButton = null;
        this.highlightButton = null;
        this.border = 0x808080;
        this.background = 0xFFFFFF;
        this.buttonColNorm1 = 0x47D5D2;
        this.buttonColNorm2 = 0x008FD1;
        this.buttonColActv1 = 0x30FF69;
        this.buttonColActv2 = 0x008650;
        this.buttonColSel1 = 0xFFFFFF;
        this.buttonColSel2 = 0xE0E0E0;
        this.canvas = null;
        this.stack = [];
        this.display = [];
        this.hasBigButtons = true;
        this.prefabImgSize = 44;
        this.gripHeight = 30;
        this.gripWidth = 50;
        this.isRaised = true;
        this.outPadding = 2;
        this.inPadding = 2;
        this.x = 0;
        this.y = 0;
    }
    static prepare(callback) {
        if (RPC.BASE_URL == null && RPC.RESOURCE_URL != null)
            ButtonView.ACTION_ICONS = {};
        if (ButtonView.ACTION_ICONS != null) {
            callback();
            return;
        }
        let fcn = (result, error) => {
            if (!result.actions) {
                alert('Fetching action icons failed: ' + error.message);
                return;
            }
            ButtonView.ACTION_ICONS = result.actions;
            callback();
        };
        Func.getActionIcons({}, fcn);
    }
    setParentSize(width, height) {
        this.parentWidth = width;
        this.parentHeight = height;
    }
    get topBank() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
    }
    get stackSize() { return this.stack.length; }
    render(parent) {
        super.render(parent);
        this.content.css('position', 'absolute');
        this.content.css('width', `${this.width}px`);
        this.content.css('height', `${this.height}px`);
        this.content.addClass('no_selection');
        this.layoutButtons();
        let canvasStyle = 'position: absolute; left: 0; top: 0;';
        canvasStyle += 'pointer-events: none;';
        this.canvas = newElement(this.content, 'canvas', { 'width': this.width, 'height': this.height, 'style': canvasStyle });
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        this.applyOffset();
        this.redraw();
        this.content.click((event) => this.mouseClick(event));
        this.content.dblclick((event) => this.mouseDoubleClick(event));
        this.content.mousedown((event) => { event.preventDefault(); this.mouseDown(event); });
        this.content.mouseup((event) => this.mouseUp(event));
        this.content.mouseover((event) => this.mouseOver(event));
        this.content.mouseout((event) => this.mouseOut(event));
        this.content.mousemove((event) => this.mouseMove(event));
    }
    pushBank(bank) {
        bank.buttonView = this;
        bank.isSubLevel = this.stack.length > 0;
        bank.init();
        this.stack.push(bank);
        if (this.canvas != null) {
            this.layoutButtons();
            this.replaceCanvas();
            this.applyOffset();
            this.redraw();
        }
    }
    popBank() {
        if (this.stack.length == 0)
            return;
        this.stack[this.stack.length - 1].bankClosed();
        this.stack.length--;
        if (this.canvas != null) {
            this.layoutButtons();
            this.replaceCanvas();
            this.applyOffset();
            this.redraw();
        }
    }
    refreshBank() {
        if (this.canvas != null) {
            this.layoutButtons();
            this.replaceCanvas();
            this.applyOffset();
            this.redraw();
        }
    }
    getSelectedButton() {
        return this.selectedButton;
    }
    setSelectedButton(id) {
        if (id != this.selectedButton) {
            this.selectedButton = id;
            this.redraw();
        }
    }
    raiseBank() {
        if (this.isRaised)
            return;
        this.isRaised = true;
        if (this.content) {
            this.layoutButtons();
            this.replaceCanvas();
            this.applyOffset();
            this.redraw();
        }
    }
    lowerBank() {
        if (!this.isRaised)
            return;
        this.isRaised = false;
        if (this.content) {
            this.layoutButtons();
            this.replaceCanvas();
            this.applyOffset();
            this.redraw();
        }
    }
    getHasBigButtons() {
        return this.hasBigButtons;
    }
    ;
    setHasBigButtons(flag) {
        this.hasBigButtons = flag;
        this.prefabImgSize = flag ? 44 : 36;
        this.idealSize = flag ? 50 : 40;
    }
    ;
    withinOutline(x, y) {
        let w = this.width, h = this.height;
        if (x < 0 || x > w || y < 0 || y > h)
            return false;
        if (this.position == 'centre' || this.stack.length == 0)
            return true;
        if (this.position == 'left') {
            let my = 0.5 * h - 1, gw = this.gripHeight, hg = 0.5 * this.gripWidth;
            return x < w - gw || (y > my - hg && y < my + hg);
        }
        else if (this.position == 'right') {
            let my = 0.5 * h - 1, gw = this.gripHeight, hg = 0.5 * this.gripWidth;
            return x > gw || (y > my - hg && y < my + hg);
        }
        else if (this.position == 'top') {
            let mx = 0.5 * w - 1, gh = this.gripHeight, hg = 0.5 * this.gripWidth;
            return y < h - gh || (x > mx - hg && x < mx + hg);
        }
        else if (this.position == 'bottom') {
            let mx = 0.5 * w - 1, gh = this.gripHeight, hg = 0.5 * this.gripWidth;
            return y > gh || (x > mx - hg && x < mx + hg);
        }
        return true;
    }
    ;
    layoutButtons() {
        if (this.content == null)
            return;
        let outPadding = this.outPadding, inPadding = this.inPadding;
        this.removeDisplayButtons();
        if (this.stack.length == 0) {
            this.width = 10;
            this.height = 10;
            if (this.position == 'left' || this.position == 'right')
                this.height = this.parentHeight;
            else if (this.position == 'top' || this.position == 'bottom')
                this.width = this.parentWidth;
            return;
        }
        if (!this.isRaised) {
            if (this.position == 'left' || this.position == 'right') {
                this.width = this.gripHeight;
                this.height = this.gripWidth + 2 * outPadding;
            }
            else if (this.position == 'top' || this.position == 'bottom') {
                this.width = this.gripWidth + 2 * outPadding;
                this.height = this.gripHeight;
            }
            this.addGripButton();
            return;
        }
        let bank = this.stack[this.stack.length - 1];
        bank.buttons = [];
        bank.update();
        let popWidth = 0, popHeight = 0;
        if (this.stack.length == 1) { }
        else if (this.position == 'left' || this.position == 'right')
            popHeight = this.gripHeight + inPadding;
        else if (this.position == 'top' || this.position == 'bottom')
            popWidth = this.gripHeight + inPadding;
        let bestLayout = null, bestScore = null;
        if (this.position == 'left' || this.position == 'right') {
            let maxSlotHeight = Math.floor((this.parentHeight - 2 * outPadding - inPadding) / (this.idealSize + inPadding));
            let minSlotHeight = Math.ceil(0.5 * maxSlotHeight);
            for (let i = maxSlotHeight; i >= minSlotHeight; i--) {
                let slotWidth = Math.ceil(bank.buttons.length / i);
                for (let j = slotWidth; j <= slotWidth + 1; j++) {
                    let layout = this.layoutMaxHeight(bank, i, j);
                    let score = this.scoreLayout(layout) + 1 * layout[0].length;
                    if (bestLayout == null || score < bestScore) {
                        bestLayout = layout;
                        bestScore = score;
                    }
                }
            }
        }
        else if (this.position == 'top' || this.position == 'bottom') {
            let maxSlotWidth = Math.floor((this.parentWidth - 2 * outPadding - inPadding - popWidth) / (this.idealSize + inPadding));
            let minSlotWidth = Math.ceil(0.5 * maxSlotWidth);
            for (let n = maxSlotWidth; n >= minSlotWidth; n--) {
                let layout = this.layoutMaxWidth(bank, n);
                let score = this.scoreLayout(layout) + 1 * layout.length;
                if (bestLayout == null || score < bestScore) {
                    bestLayout = layout;
                    bestScore = score;
                }
            }
        }
        else {
        }
        let ncols = bestLayout[0].length, nrows = bestLayout.length;
        this.width = 2 * outPadding + inPadding + (this.idealSize + inPadding) * ncols + popWidth;
        this.height = 2 * outPadding + inPadding + (this.idealSize + inPadding) * nrows + popHeight;
        if (this.position == 'left' || this.position == 'right')
            this.width += this.gripHeight;
        else if (this.position == 'top' || this.position == 'bottom')
            this.height += this.gripHeight;
        this.addGripButton();
        if (popWidth > 0 || popHeight > 0) {
            let d = {
                'id': '!',
                'x': outPadding + inPadding,
                'y': outPadding + inPadding,
                'width': popWidth - inPadding,
                'height': popHeight - inPadding
            };
            if (this.position == 'right')
                d.x += this.gripHeight;
            else if (this.position == 'bottom')
                d.y += this.gripHeight;
            if (popWidth == 0)
                d.width = ncols * this.idealSize + inPadding * (ncols - 1);
            if (popHeight == 0)
                d.height = nrows * this.idealSize + inPadding * (nrows - 1);
            this.display.push(d);
        }
        for (let y = 0; y < nrows; y++)
            for (let x = 0; x < ncols; x++) {
                for (let n = 0; n < bank.buttons.length; n++)
                    if (bestLayout[y][x] == bank.buttons[n].id) {
                        let b = bank.buttons[n], d = { 'id': b.id };
                        d.x = outPadding + inPadding + popWidth + (this.idealSize + inPadding) * x;
                        d.y = outPadding + inPadding + popHeight + (this.idealSize + inPadding) * y;
                        if (this.position == 'right')
                            d.x += this.gripHeight;
                        else if (this.position == 'bottom')
                            d.y += this.gripHeight;
                        d.width = this.idealSize;
                        d.height = this.idealSize;
                        this.display.push(d);
                    }
            }
    }
    addGripButton() {
        if (this.position == 'centre')
            return;
        let d = { 'id': '*' }, spc = 3;
        if (this.position == 'left') {
            d.width = this.gripHeight - spc;
            d.height = this.gripWidth - 2 * spc;
            d.x = this.width - d.width - spc - 1;
            d.y = 0.5 * (this.height - d.height);
        }
        else if (this.position == 'right') {
            d.width = this.gripHeight - spc;
            d.height = this.gripWidth - 2 * spc;
            d.x = spc + 1;
            d.y = 0.5 * (this.height - d.height);
        }
        else if (this.position == 'top') {
            d.width = this.gripWidth - 2 * spc;
            d.height = this.gripHeight - spc;
            d.x = 0.5 * (this.width - d.width);
            d.y = this.height - d.height - spc - 1;
        }
        else if (this.position == 'bottom') {
            d.width = this.gripWidth - 2 * spc;
            d.height = this.gripHeight - spc;
            d.x = 0.5 * (this.width - d.width);
            d.y = spc + 1;
        }
        this.display.push(d);
    }
    replaceCanvas() {
        this.content.empty();
        for (let n = 0; n < this.display.length; n++) {
            this.display[n].svgDOM = null;
            this.display[n].helpSpan = null;
        }
        let canvasStyle = 'position: absolute; left: 0; top: 0;';
        canvasStyle += 'pointer-events: none;';
        this.canvas = newElement(this.content, 'canvas', { 'width': this.width, 'height': this.height, 'style': canvasStyle });
    }
    removeDisplayButtons() {
        this.content.empty();
        this.display = [];
    }
    applyOffset() {
        let x, y;
        if (this.position == 'left') {
            x = 0;
            y = 0.5 * (this.parentHeight - this.height);
        }
        else if (this.position == 'right') {
            x = this.parentWidth - this.width;
            y = 0.5 * (this.parentHeight - this.height);
        }
        else if (this.position == 'top') {
            x = 0.5 * (this.parentWidth - this.width);
            y = 0;
        }
        else if (this.position == 'bottom') {
            x = 0.5 * (this.parentWidth - this.width);
            y = this.parentHeight - this.height;
        }
        else {
            x = 0.5 * (this.parentWidth - this.width);
            y = 0.5 * (this.parentHeight - this.height);
        }
        this.x = this.parentX + x;
        this.y = this.parentY + y;
        this.content.css('position', 'absolute');
        this.content.css('width', this.width + 'px');
        this.content.css('height', this.height + 'px');
        this.content.css('left', this.x + 'px');
        this.content.css('top', this.y + 'px');
    }
    redraw() {
        if (!this.content || !this.canvas)
            return;
        let density = pixelDensity();
        this.canvas.width = this.width * density;
        this.canvas.height = this.height * density;
        this.canvas.style.width = this.width + 'px';
        this.canvas.style.height = this.height + 'px';
        let ctx = this.canvas.getContext('2d');
        ctx.save();
        ctx.scale(density, density);
        ctx.clearRect(0, 0, this.width, this.height);
        let path = this.traceOutline();
        ctx.fillStyle = colourCanvas(this.background);
        ctx.fill(path);
        ctx.strokeStyle = colourCanvas(this.border);
        ctx.lineWidth = 1;
        ctx.stroke(path);
        let bank = this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
        this.content.css('width', this.width + 'px');
        this.content.css('height', this.height + 'px');
        for (let n = 0; n < this.display.length; n++) {
            const d = this.display[n], b = this.buttonFromID(d.id);
            let col1, col2;
            if (this.highlightButton != null && d.id == this.highlightButton) {
                col1 = this.buttonColActv1;
                col2 = this.buttonColActv2;
            }
            else if (this.selectedButton != null && d.id == this.selectedButton) {
                col1 = this.buttonColSel1;
                col2 = this.buttonColSel2;
            }
            else {
                col1 = this.buttonColNorm1;
                col2 = this.buttonColNorm2;
            }
            ctx.save();
            path = pathRoundedRect(d.x + 0.5, d.y + 0.5, d.x + d.width - 1, d.y + d.height - 1, 5);
            if (col2 != null) {
                let grad = ctx.createLinearGradient(d.x, d.y, d.x + d.width, d.y + d.height);
                grad.addColorStop(0, colourCanvas(col1));
                grad.addColorStop(1, colourCanvas(col2));
                ctx.fillStyle = grad;
            }
            else
                ctx.fillStyle = colourCanvas(col1);
            ctx.fill(path);
            ctx.strokeStyle = colourCanvas(this.border);
            ctx.lineWidth = 0.5;
            ctx.stroke(path);
            ctx.restore();
            if (d.svgDOM != null) {
                $(d.svgDOM).remove();
                d.svgDOM = null;
            }
            if (b != null) {
                if (d.helpSpan == null) {
                    d.helpSpan = $('<span style="position: absolute;"></span>').appendTo(this.content);
                    let txt = b.helpText;
                    if (b.mnemonic) {
                        while (txt.endsWith('.'))
                            txt = txt.substring(0, txt.length - 1);
                        txt += ' [' + b.mnemonic + ']';
                    }
                    addTooltip(d.helpSpan, txt);
                }
                d.helpSpan.css('left', d.x + 'px');
                d.helpSpan.css('top', d.y + 'px');
                d.helpSpan.css('width', d.width + 'px');
                d.helpSpan.css('height', d.height + 'px');
            }
            if (b == null) { }
            else if (b.imageFN != null && d.svgDOM == null) {
                const sz = this.prefabImgSize;
                const bx = d.x + Math.floor(0.5 * (d.width - sz));
                const by = d.y + Math.floor(0.5 * (d.height - sz));
                let putSVG = (svg) => {
                    let extra = 'style="position: absolute; left: ' + bx + 'px; top: ' + by + 'px;' +
                        ' width: ' + sz + 'px; height: ' + sz + 'px; pointer-events: none;"';
                    svg = svg.substring(0, 4) + ' ' + extra + svg.substring(4);
                    d.svgDOM = $(svg)[0];
                    this.content.append(d.svgDOM);
                };
                let svg = ButtonView.ACTION_ICONS[b.imageFN];
                if (svg)
                    putSVG(svg);
                else if (RPC.RESOURCE_URL != null) {
                    let url = RPC.RESOURCE_URL + '/img/actions/' + b.imageFN + '.svg';
                    $.ajax({
                        'url': url,
                        'type': 'GET',
                        'dataType': 'text',
                        'success': (svg) => {
                            svg = this.fixSVGFile(svg);
                            ButtonView.ACTION_ICONS[b.imageFN] = svg;
                            putSVG(svg);
                        }
                    });
                }
                else
                    console.log('Action button "' + b.imageFN + '" not found.');
            }
            else if (b.metavec != null) {
                let draw = b.metavec instanceof MetaVector ? b.metavec : new MetaVector(b.metavec);
                draw.offsetX = d.x + Math.floor(0.5 * (d.width - draw.width));
                draw.offsetY = d.y + Math.floor(0.5 * (d.height - draw.height));
                draw.renderContext(ctx);
            }
            else if (b.text != null) {
                let sz = this.idealSize;
                let draw = new MetaVector({ 'size': [sz, sz] });
                let fsz = sz * 0.6;
                let wad = FontData.main.measureText(b.text, fsz);
                if (wad[1] + wad[2] > sz) {
                    fsz *= sz / (wad[1] + wad[2]);
                    wad = FontData.main.measureText(b.text, fsz);
                }
                if (wad[0] > sz) {
                    fsz *= sz / wad[0];
                    wad = FontData.main.measureText(b.text, fsz);
                }
                let x = 0.5 * (sz - wad[0]), y = 0.5 * (sz + wad[1]);
                draw.drawText(x - 1, y, b.text, fsz, 0x000000);
                draw.drawText(x + 1, y, b.text, fsz, 0x000000);
                draw.drawText(x, y - 1, b.text, fsz, 0x000000);
                draw.drawText(x, y + 1, b.text, fsz, 0x000000);
                draw.drawText(x, y, b.text, fsz, 0xFFFFFF);
                draw.offsetX = d.x + Math.floor(0.5 * (d.width - draw.width));
                draw.offsetY = d.y + Math.floor(0.5 * (d.height - draw.height));
                draw.renderContext(ctx);
            }
            if (b != null && b.isSubMenu) {
                ctx.save();
                let sx = d.x + d.width - 3, sy = d.y + d.height - 3;
                ctx.beginPath();
                ctx.moveTo(sx, sy);
                ctx.lineTo(sx - 6, sy);
                ctx.lineTo(sx, sy - 6);
                ctx.closePath();
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.restore();
            }
            if (d.id == '*') {
                ctx.save();
                path = new Path2D();
                let px, py, flip = this.isRaised;
                if (this.position == 'left' || this.position == 'right') {
                    px = [0.2, 0.7, 0.7];
                    py = [0.5, 0.3, 0.7];
                    if (this.position == 'left')
                        flip = !flip;
                }
                else if (this.position == 'top' || this.position == 'bottom') {
                    px = [0.5, 0.3, 0.7];
                    py = [0.2, 0.7, 0.7];
                    if (this.position == 'top')
                        flip = !flip;
                }
                if (flip) {
                    px = [1 - px[0], 1 - px[1], 1 - px[2]];
                    py = [1 - py[0], 1 - py[1], 1 - py[2]];
                }
                path.moveTo(d.x + d.width * px[0], d.y + d.height * py[0]);
                path.lineTo(d.x + d.width * px[1], d.y + d.height * py[1]);
                path.lineTo(d.x + d.width * px[2], d.y + d.height * py[2]);
                path.closePath();
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 0;
                ctx.fill(path);
                ctx.stroke(path);
                ctx.restore();
            }
            else if (d.id == '!') {
                ctx.save();
                let path1 = new Path2D(), path2 = new Path2D();
                let inset = 5;
                let w = d.width - inset * 2, h = d.height - inset * 2;
                for (let z = 5; z < w + h - 1; z += 12) {
                    let x1 = 0, y1 = z, x2 = z, y2 = 0;
                    if (y1 > h) {
                        let delta = y1 - h;
                        x1 += delta;
                        y1 -= delta;
                    }
                    if (x2 > w) {
                        let delta = x2 - w;
                        x2 -= delta;
                        y2 += delta;
                    }
                    path1.moveTo(d.x + inset + x1, d.y + inset + y1);
                    path1.lineTo(d.x + inset + x2, d.y + inset + y2);
                    path2.moveTo(d.x + inset + x1 + 1, d.y + inset + y1);
                    path2.lineTo(d.x + inset + x2 + 1, d.y + inset + y2);
                }
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#404040';
                ctx.stroke(path1);
                ctx.strokeStyle = 'white';
                ctx.stroke(path2);
                ctx.restore();
            }
        }
        ctx.restore();
    }
    ;
    delayedRedraw() {
        window.setTimeout(() => this.redraw(), 100);
    }
    ;
    buttonFromID(id) {
        let bank = this.stack[this.stack.length - 1];
        for (let n = 0; n < bank.buttons.length; n++)
            if (bank.buttons[n].id == id)
                return bank.buttons[n];
        return null;
    }
    displayFromID(id) {
        for (let n = 0; n < this.display.length; n++)
            if (this.display[n].id == id)
                return this.display[n];
        return null;
    }
    traceOutline() {
        let w = this.width, h = this.height, uw = w - 1, uh = h - 1, r = 8;
        if (this.position == 'centre' || this.stack.length == 0)
            return pathRoundedRect(0.5, 0.5, w - 0.5, h - 0.5, r);
        let path = new Path2D();
        if (this.position == 'left') {
            let my = 0.5 * h - 1, gw = this.gripHeight, hg = 0.5 * this.gripWidth;
            path.moveTo(0.5, 0.5);
            path.lineTo(0.5 + uw - gw - r, 0.5);
            path.bezierCurveTo(0.5 + uw - gw, 0.5, 0.5 + uw - gw, 0.5, 0.5 + uw - gw, 0.5 + r);
            path.lineTo(0.5 + uw - gw, 0.5 + my - hg);
            path.lineTo(0.5 + uw - r, 0.5 + my - hg);
            path.bezierCurveTo(0.5 + uw, 0.5 + my - hg, 0.5 + uw, 0.5 + my - hg, 0.5 + uw, 0.5 + my - hg + r);
            path.lineTo(0.5 + uw, 0.5 + my + hg - r);
            path.bezierCurveTo(0.5 + uw, 0.5 + my + hg, 0.5 + uw, 0.5 + my + hg, 0.5 + uw - r, 0.5 + my + hg);
            path.lineTo(0.5 + uw - gw, 0.5 + my + hg);
            path.lineTo(0.5 + uw - gw, 0.5 + uh - r);
            path.bezierCurveTo(0.5 + uw - gw, 0.5 + uh, 0.5 + uw - gw, 0.5 + uh, 0.5 + uw - gw - r, 0.5 + uh);
            path.lineTo(0.5, 0.5 + uh);
        }
        else if (this.position == 'right') {
            let my = 0.5 * h - 1, gw = this.gripHeight, hg = 0.5 * this.gripWidth;
            path.moveTo(w - 0.5, 0.5);
            path.lineTo(w - (0.5 + uw - gw - r), 0.5);
            path.bezierCurveTo(w - (0.5 + uw - gw), 0.5, w - (0.5 + uw - gw), 0.5, w - (0.5 + uw - gw), 0.5 + r);
            path.lineTo(w - (0.5 + uw - gw), 0.5 + my - hg);
            path.lineTo(w - (0.5 + uw - r), 0.5 + my - hg);
            path.bezierCurveTo(w - (0.5 + uw), 0.5 + my - hg, w - (0.5 + uw), 0.5 + my - hg, w - (0.5 + uw), 0.5 + my - hg + r);
            path.lineTo(w - (0.5 + uw), 0.5 + my + hg - r);
            path.bezierCurveTo(w - (0.5 + uw), 0.5 + my + hg, w - (0.5 + uw), 0.5 + my + hg, w - (0.5 + uw - r), 0.5 + my + hg);
            path.lineTo(w - (0.5 + uw - gw), 0.5 + my + hg);
            path.lineTo(w - (0.5 + uw - gw), 0.5 + uh - r);
            path.bezierCurveTo(w - (0.5 + uw - gw), 0.5 + uh, w - (0.5 + uw - gw), 0.5 + uh, w - (0.5 + uw - gw - r), 0.5 + uh);
            path.lineTo(w - 0.5, 0.5 + uh);
        }
        else if (this.position == 'top') {
            let mx = 0.5 * w - 1, gh = this.gripHeight, hg = 0.5 * this.gripWidth;
            path.moveTo(0.5, h - (0.5 + uh));
            path.lineTo(0.5, h - (0.5 + gh + r));
            path.bezierCurveTo(0.5, h - (0.5 + gh), 0.5, h - (0.5 + gh), 0.5 + r, h - (0.5 + gh));
            path.lineTo(0.5 + mx - hg, h - (0.5 + gh));
            path.lineTo(0.5 + mx - hg, h - (0.5 + r));
            path.bezierCurveTo(0.5 + mx - hg, h - 0.5, 0.5 + mx - hg, h - 0.5, 0.5 + mx - hg + r, h - 0.5);
            path.lineTo(0.5 + mx + hg - r, h - 0.5);
            path.bezierCurveTo(0.5 + mx + hg, h - 0.5, 0.5 + mx + hg, h - 0.5, 0.5 + mx + hg, h - (0.5 + r));
            path.lineTo(0.5 + mx + hg, h - (0.5 + gh));
            path.lineTo(0.5 + uw - r, h - (0.5 + gh));
            path.bezierCurveTo(0.5 + uw, h - (0.5 + gh), 0.5 + uw, h - (0.5 + gh), 0.5 + uw, h - (0.5 + gh + r));
            path.lineTo(0.5 + uw, h - (0.5 + uh));
        }
        else if (this.position == 'bottom') {
            let mx = 0.5 * w - 1, gh = this.gripHeight, hg = 0.5 * this.gripWidth;
            path.moveTo(0.5, 0.5 + uh);
            path.lineTo(0.5, 0.5 + gh + r);
            path.bezierCurveTo(0.5, 0.5 + gh, 0.5, 0.5 + gh, 0.5 + r, 0.5 + gh);
            path.lineTo(0.5 + mx - hg, 0.5 + gh);
            path.lineTo(0.5 + mx - hg, 0.5 + r);
            path.bezierCurveTo(0.5 + mx - hg, 0.5, 0.5 + mx - hg, 0.5, 0.5 + mx - hg + r, 0.5);
            path.lineTo(0.5 + mx + hg - r, 0.5);
            path.bezierCurveTo(0.5 + mx + hg, 0.5, 0.5 + mx + hg, 0.5, 0.5 + mx + hg, 0.5 + r);
            path.lineTo(0.5 + mx + hg, 0.5 + gh);
            path.lineTo(0.5 + uw - r, 0.5 + gh);
            path.bezierCurveTo(0.5 + uw, 0.5 + gh, 0.5 + uw, 0.5 + gh, 0.5 + uw, 0.5 + gh + r);
            path.lineTo(0.5 + uw, 0.5 + uh);
        }
        return path;
    }
    layoutMaxWidth(bank, slotWidth) {
        if (bank.buttons.length == 0)
            return [[null]];
        let bx = new Array(bank.buttons.length), by = new Array(bank.buttons.length);
        let x = 0, y = 0, w = 0, h = 0;
        for (let n = 0; n < bank.buttons.length; n++) {
            w = Math.max(x + 1, w);
            h = Math.max(y + 1, h);
            bx[n] = x;
            by[n] = y;
            x++;
            if (x >= slotWidth) {
                x = 0;
                y++;
            }
        }
        let slot = new Array(h);
        for (let n = 0; n < h; n++)
            slot[n] = new Array(w);
        for (let n = 0; n < bank.buttons.length; n++) {
            slot[by[n]][bx[n]] = bank.buttons[n].id;
        }
        return slot;
    }
    layoutMaxHeight(bank, slotHeight, slotWidth) {
        if (bank.buttons.length == 0)
            return [[null]];
        let bx = new Array(bank.buttons.length), by = new Array(bank.buttons.length);
        let x = 0, y = 0, w = 0, h = 0;
        for (let n = 0; n < bank.buttons.length; n++) {
            w = Math.max(x + 1, w);
            h = Math.max(y + 1, h);
            bx[n] = x;
            by[n] = y;
            x++;
            if (x >= slotWidth) {
                x = 0;
                y++;
            }
        }
        let slot = new Array(h);
        for (let n = 0; n < h; n++)
            slot[n] = new Array(w);
        for (let n = 0; n < bank.buttons.length; n++) {
            slot[by[n]][bx[n]] = bank.buttons[n].id;
        }
        return slot;
    }
    scoreLayout(slots) {
        let score = 0;
        for (let y = 0; y < slots.length; y++)
            for (let x = 0; x < slots[y].length; x++) {
                if (slots[y][x] == null)
                    score++;
            }
        return score;
    }
    pickButtonIndex(x, y) {
        for (let n = 0; n < this.display.length; n++) {
            let d = this.display[n];
            if (x >= d.x && y >= d.y && x < d.x + d.width && y < d.y + d.height)
                return n;
        }
        return -1;
    }
    pickButtonID(x, y) {
        let idx = this.pickButtonIndex(x, y);
        if (idx < 0)
            return undefined;
        return this.display[idx].id;
    }
    triggerButton(id) {
        if (id == '*') {
            if (this.isRaised)
                this.lowerBank();
            else
                this.raiseBank();
            return;
        }
        else if (id == '!') {
            this.popBank();
            return;
        }
        let bank = this.stack[this.stack.length - 1];
        bank.hitButton(id);
    }
    mouseClick(event) {
    }
    mouseDoubleClick(event) {
        event.stopImmediatePropagation();
    }
    mouseDown(event) {
        let xy = eventCoords(event, this.content);
        if (!this.withinOutline(xy[0], xy[1]))
            return;
        let id = this.pickButtonID(xy[0], xy[1]);
        if (id != this.highlightButton) {
            this.highlightButton = id;
            this.redraw();
        }
        event.stopPropagation();
    }
    mouseUp(event) {
        let xy = eventCoords(event, this.content);
        if (!this.withinOutline(xy[0], xy[1]))
            return;
        let id = this.pickButtonID(xy[0], xy[1]);
        if (id != null && this.highlightButton == id) {
            this.highlightButton = undefined;
            this.triggerButton(id);
            this.delayedRedraw();
        }
        else {
            this.highlightButton = undefined;
            this.delayedRedraw();
        }
        event.stopPropagation();
    }
    mouseOver(event) {
        let xy = eventCoords(event, this.content);
        if (!this.withinOutline(xy[0], xy[1]))
            return;
        event.stopPropagation();
    }
    mouseOut(event) {
        let xy = eventCoords(event, this.content);
        if (!this.withinOutline(xy[0], xy[1])) {
            if (this.highlightButton != null) {
                this.highlightButton = null;
                this.delayedRedraw();
            }
            return;
        }
        if (this.highlightButton != null) {
            let xy = eventCoords(event, this.content);
            let id = this.pickButtonID(xy[0], xy[1]);
            if (id != this.highlightButton) {
                this.highlightButton = null;
                this.delayedRedraw();
            }
        }
        event.stopPropagation();
    }
    mouseMove(event) {
        let xy = eventCoords(event, this.content);
        if (!this.withinOutline(xy[0], xy[1]))
            return;
    }
    fixSVGFile(svg) {
        svg = svg.substring(svg.indexOf('<svg'));
        let iw = svg.indexOf('width="'), ih = svg.indexOf('height="');
        if (iw < 0 || ih < 0)
            return svg;
        let w = parseInt(svg.substring(iw + 7, svg.indexOf('"', iw + 7)));
        let h = parseInt(svg.substring(ih + 8, svg.indexOf('"', ih + 8)));
        svg = '<svg viewBox="0 0 ' + w + ' ' + h + '"' + svg.substring(svg.indexOf('>'));
        return svg;
    }
}
ButtonView.ACTION_ICONS = null;
class FusionPermutation {
    constructor() {
        this.attdist = 0;
        this.guided = false;
        this.bridged = false;
        this.scoreModifier = 0;
        this.chainSelect = 0;
    }
}
class TemplateFusion {
    constructor(mol, templ, abbrev) {
        this.mol = mol;
        this.templ = templ;
        this.abbrev = abbrev;
        this.perms = [];
        this.numAttach = 0;
        this.withGuideOnly = false;
        this.guidetempl = null;
        this.guideidx = [];
        this.guideadj = [];
        this.TIME_LIMIT = 5.0;
        this.huntForGuides();
    }
    permuteNone() {
        let numAttach = 0;
        let oldmol = this.mol.clone(), newmol = this.templ.clone();
        if (oldmol.numAtoms > 0) {
            let oldbox = oldmol.boundary(), newbox = newmol.boundary();
            let dx = oldbox.maxX() + 1 - newbox.minX();
            let dy = 0.5 * (oldbox.minY() + oldbox.maxY()) - 0.5 * (newbox.minY() + newbox.maxY());
            CoordUtil.translateMolecule(newmol, dx, dy);
        }
        else {
            let newbox = newmol.boundary();
            CoordUtil.translateMolecule(newmol, -newbox.midX(), -newbox.midY());
        }
        let oldbox = oldmol.boundary(), newbox = newmol.boundary();
        let cx = newbox.midX(), cy = newbox.midY();
        let ROTN = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
        duplicate: for (let n = 0; n < ROTN.length; n++) {
            let rotmol = newmol.clone();
            CoordUtil.rotateMolecule(rotmol, -ROTN[n] * DEGRAD, cx, cy);
            for (let i = 0; i < this.perms.length; i++)
                if (CoordUtil.sketchEquivalent(rotmol, this.perms[i].display))
                    continue duplicate;
            let p = new FusionPermutation();
            p.mol = oldmol.clone();
            p.mol.append(rotmol);
            p.display = rotmol;
            p.srcidx = this.sourceIndex(p.mol, oldmol);
            p.attdist = 0;
            p.guided = false;
            this.perms.push(p);
        }
    }
    permuteAtom(atom) {
        this.numAttach = 1;
        let timeStart = new Date().getTime();
        let oldmol = this.mol.clone(), newmol = this.templ.clone();
        let newperms = [];
        if (this.guidetempl != null) {
            let fliptempl = this.guidetempl.clone();
            CoordUtil.mirrorImage(fliptempl);
            for (let n = 0; n < this.guideidx.length; n++) {
                if (new Date().getTime() - timeStart > this.TIME_LIMIT * 1000)
                    break;
                this.composeGuidedOne(newperms, oldmol, this.guidetempl, atom, this.guideidx[n]);
                this.composeGuidedOne(newperms, oldmol, fliptempl, atom, this.guideidx[n]);
            }
        }
        if (!this.withGuideOnly) {
            let flipmol = newmol.clone();
            CoordUtil.mirrorImage(flipmol);
            for (let n = 1; n <= newmol.numAtoms; n++) {
                if (new Date().getTime() - timeStart > this.TIME_LIMIT * 1000)
                    break;
                this.composeDirectOne(newperms, oldmol, newmol, atom, n);
                this.composeDirectOne(newperms, oldmol, flipmol, atom, n);
                this.composeBridge(newperms, oldmol, newmol, atom, n);
                this.composeBridge(newperms, oldmol, flipmol, atom, n);
            }
        }
        this.affixRawPermutations(newperms);
    }
    permuteBond(a1, a2) {
        this.numAttach = 2;
        let timeStart = new Date().getTime();
        let oldmol = this.mol.clone(), newmol = this.templ.clone();
        let newperms = [];
        if (this.guidetempl != null) {
            let fliptempl = this.guidetempl.clone();
            CoordUtil.mirrorImage(fliptempl);
            for (let i = 0; i < this.guideidx.length; i++) {
                if (new Date().getTime() - timeStart > this.TIME_LIMIT * 1000)
                    break;
                let g1 = this.guideidx[i];
                let adj = this.guidetempl.atomAdjList(g1);
                for (let j = 0; j < adj.length; j++) {
                    let g2 = adj[j];
                    this.composeGuidedTwo(newperms, oldmol, this.guidetempl, a1, a2, g1, g2, true);
                    this.composeGuidedTwo(newperms, oldmol, this.guidetempl, a2, a1, g1, g2, true);
                    this.composeGuidedTwo(newperms, oldmol, fliptempl, a1, a2, g1, g2, true);
                    this.composeGuidedTwo(newperms, oldmol, fliptempl, a2, a1, g1, g2, true);
                    this.composeGuidedTwo(newperms, oldmol, this.guidetempl, a1, a2, g1, g2, false);
                    this.composeGuidedTwo(newperms, oldmol, this.guidetempl, a2, a1, g1, g2, false);
                    this.composeGuidedTwo(newperms, oldmol, fliptempl, a1, a2, g1, g2, false);
                    this.composeGuidedTwo(newperms, oldmol, fliptempl, a2, a1, g1, g2, false);
                }
            }
        }
        if (!this.withGuideOnly) {
            let flipmol = newmol.clone();
            CoordUtil.mirrorImage(flipmol);
            for (let n = 1; n <= newmol.numBonds; n++) {
                if (new Date().getTime() - timeStart > this.TIME_LIMIT * 1000)
                    break;
                let nfr = newmol.bondFrom(n), nto = newmol.bondTo(n);
                this.composeDirectTwo(newperms, oldmol, newmol, a1, a2, nfr, nto);
                this.composeDirectTwo(newperms, oldmol, flipmol, a1, a2, nfr, nto);
                this.composeDirectTwo(newperms, oldmol, newmol, a1, a2, nto, nfr);
                this.composeDirectTwo(newperms, oldmol, flipmol, a1, a2, nto, nfr);
            }
        }
        this.affixRawPermutations(newperms);
    }
    permuteMulti(atoms) {
        this.numAttach = atoms.length;
        let timeStart = new Date().getTime();
        let oldmol = this.mol.clone(), newmol = this.templ.clone();
        let newperms = [];
        if (this.guidetempl != null) {
            let fliptempl = this.guidetempl.clone();
            CoordUtil.mirrorImage(fliptempl);
            if (this.guideidx.length == atoms.length) {
                this.composeGuidedMulti(newperms, oldmol, this.guidetempl, atoms, this.guideidx, true);
                this.composeGuidedMulti(newperms, oldmol, fliptempl, atoms, this.guideidx, true);
            }
            if (this.guideadj.length == atoms.length) {
                this.composeGuidedMulti(newperms, oldmol, this.guidetempl, atoms, this.guideadj, false);
                this.composeGuidedMulti(newperms, oldmol, fliptempl, atoms, this.guideadj, false);
            }
        }
        if (!this.withGuideOnly) {
            let flipmol = newmol.clone();
            CoordUtil.mirrorImage(flipmol);
            for (let n = 1; n <= newmol.numAtoms; n++) {
                if (new Date().getTime() - timeStart > this.TIME_LIMIT * 1000)
                    break;
                this.composeDirectMulti(newperms, oldmol, newmol, atoms, n);
                this.composeDirectMulti(newperms, oldmol, flipmol, atoms, n);
            }
        }
        this.affixRawPermutations(newperms);
    }
    huntForGuides() {
        this.guideidx = [];
        this.guideadj = [];
        for (let n = 1; n <= this.templ.numAtoms; n++)
            if (this.templ.atomElement(n) == 'X' && this.templ.atomAdjCount(n) > 0) {
                this.guideidx.push(n);
                let adj = this.templ.atomAdjList(n);
                for (let i = 0; i < adj.length; i++)
                    if (this.guideadj.indexOf(adj[i]) < 0)
                        this.guideadj.push(adj[i]);
            }
        if (this.guideidx.length > 0) {
            this.guidetempl = this.templ.clone();
            for (let n = this.guideidx.length - 1; n >= 0; n--)
                this.templ.deleteAtomAndBonds(this.guideidx[n]);
        }
    }
    composeDirectOne(list, oldmol, newmol, o1, n1) {
        let otheta = SketchUtil.primeDirections(oldmol, o1);
        let ntheta = SketchUtil.primeDirections(newmol, n1);
        let ocurrent = CoordUtil.atomBondAngles(oldmol, o1);
        let ncurrent = CoordUtil.atomBondAngles(newmol, n1);
        let theta1 = [], theta2 = [], scoreMod = [];
        for (let i = 0; i < ocurrent.length; i++)
            for (let j = 0; j < ntheta.length; j++) {
                theta1.push(ocurrent[i]);
                theta2.push(ntheta[j]);
                scoreMod.push(-51);
            }
        for (let i = 0; i < otheta.length; i++)
            for (let j = 0; j < ncurrent.length; j++) {
                theta1.push(otheta[i]);
                theta2.push(ncurrent[j]);
                scoreMod.push(0);
            }
        for (let i = 0; i < otheta.length; i++)
            for (let j = 0; j < ntheta.length; j++) {
                theta1.push(otheta[i]);
                theta2.push(ntheta[j]);
                scoreMod.push(0);
            }
        let bfs = Graph.fromMolecule(newmol).calculateBFS(0);
        let ox = oldmol.atomX(o1), oy = oldmol.atomY(o1), nx = newmol.atomX(n1), ny = newmol.atomY(n1);
        for (let n = 0; n < theta1.length; n++) {
            let dth = angleDiff(theta1[n], theta2[n]);
            let frag = newmol.clone();
            CoordUtil.translateMolecule(frag, ox - nx, oy - ny);
            CoordUtil.rotateMolecule(frag, dth, ox, oy);
            let pmol = oldmol.clone();
            let osz = pmol.numAtoms;
            pmol.append(frag);
            let srcidx = this.sourceIndex(pmol, oldmol);
            SketchUtil.mergeFragmentsMask(pmol, this.asMask(srcidx));
            if (pmol.numAtoms == osz)
                continue;
            let p = new FusionPermutation();
            p.mol = pmol;
            p.display = frag;
            p.srcidx = srcidx;
            p.molidx = [o1];
            p.temidx = [n1];
            p.attdist = bfs[n1 - 1];
            p.guided = false;
            p.scoreModifier = scoreMod[n];
            this.removeExtraGuides(p, oldmol);
            list.push(p);
        }
    }
    composeDirectTwo(list, oldmol, newmol, o1, o2, n1, n2) {
        let oth = Math.atan2(oldmol.atomY(o2) - oldmol.atomY(o1), oldmol.atomX(o2) - oldmol.atomX(o1));
        let nth = Math.atan2(newmol.atomY(n2) - newmol.atomY(n1), newmol.atomX(n2) - newmol.atomX(n1));
        let cx = 0.5 * (oldmol.atomX(o1) + oldmol.atomX(o2)), cy = 0.5 * (oldmol.atomY(o1) + oldmol.atomY(o2));
        let frag = newmol.clone();
        CoordUtil.translateMolecule(frag, cx - 0.5 * (newmol.atomX(n1) + newmol.atomX(n2)), cy - 0.5 * (newmol.atomY(n1) + newmol.atomY(n2)));
        CoordUtil.rotateMolecule(frag, oth - nth, cx, cy);
        frag.setAtomPos(n1, oldmol.atomX(o1), oldmol.atomY(o1));
        frag.setAtomPos(n2, oldmol.atomX(o2), oldmol.atomY(o2));
        let pmol = oldmol.clone();
        let osz = pmol.numAtoms;
        pmol.append(frag);
        let srcidx = this.sourceIndex(pmol, oldmol);
        SketchUtil.mergeFragmentsMask(pmol, this.asMask(srcidx));
        if (pmol.numAtoms == osz)
            return;
        let bfs = Graph.fromMolecule(newmol).calculateBFS(0);
        let p = new FusionPermutation();
        p.mol = pmol;
        p.display = frag;
        p.srcidx = srcidx;
        p.molidx = [o1, o2];
        p.temidx = [n1, n2];
        p.attdist = Math.min(bfs[n1 - 1], bfs[n2 - 1]);
        p.guided = false;
        this.removeExtraGuides(p, oldmol);
        list.push(p);
    }
    composeDirectMulti(list, oldmol, newmol, oidx, n1) {
        let frag = newmol.clone();
        let x0 = oldmol.atomX(oidx[0]), y0 = oldmol.atomY(oidx[0]);
        CoordUtil.translateMolecule(frag, x0 - frag.atomX(n1), y0 - frag.atomY(n1));
        let ox = oldmol.atomX(oidx[1]) - x0, oy = oldmol.atomY(oidx[1]) - y0;
        let otheta = Math.atan2(oy, ox), orad = norm_xy(ox, oy);
        let bfs = Graph.fromMolecule(newmol).calculateBFS(1);
        let nidx = [];
        for (let n2 = 1; n2 <= frag.numAtoms; n2++)
            if (n1 != n2) {
                let nx = frag.atomX(n2) - frag.atomX(n1), ny = frag.atomY(n2) - frag.atomY(n1), nrad = norm_xy(nx, ny);
                if (Math.abs(nrad - orad) > 0.1)
                    continue;
                let ntheta = Math.atan2(ny, nx);
                CoordUtil.rotateMolecule(frag, otheta - ntheta, x0, y0);
                nidx = [n1, n2];
                for (let i = 2; i < oidx.length; i++) {
                    let hit = false;
                    for (let j = 1; j <= frag.numAtoms; j++)
                        if (nidx.indexOf(j) < 0)
                            if (norm_xy(oldmol.atomX(oidx[i]) - frag.atomX(j), oldmol.atomY(oidx[i]) - frag.atomY(j)) < 0.1 * 0.1) {
                                hit = true;
                                nidx.push(j);
                                break;
                            }
                    if (!hit)
                        break;
                }
                if (nidx.length < oidx.length)
                    continue;
                let lowbfs = bfs.length;
                for (let n = 0; n < nidx.length; n++)
                    lowbfs = Math.min(lowbfs, bfs[nidx[n] - 1]);
                let dx = 0, dy = 0;
                for (let n = 0; n < oidx.length; n++) {
                    dx += oldmol.atomX(oidx[n]) - frag.atomX(nidx[n]);
                    dy += oldmol.atomY(oidx[n]) - frag.atomY(nidx[n]);
                }
                let invsz = 1.0 / oidx.length;
                dx *= invsz;
                dy *= invsz;
                CoordUtil.translateMolecule(frag, dx, dy);
                let pmol = oldmol.clone();
                let osz = pmol.numAtoms;
                pmol.append(frag);
                let srcidx = this.sourceIndex(pmol, oldmol);
                for (let n = 0; n < nidx.length; n++) {
                    let x = pmol.atomX(oidx[n]), y = pmol.atomY(oidx[n]);
                    pmol.setAtomPos(osz + nidx[n], x, y);
                }
                SketchUtil.mergeFragmentsMask(pmol, this.asMask(srcidx));
                if (pmol.numAtoms == osz)
                    continue;
                let p = new FusionPermutation();
                p.mol = pmol;
                p.display = frag.clone();
                p.srcidx = srcidx;
                p.molidx = oidx.slice(0);
                p.temidx = nidx.slice(0);
                p.attdist = Math.min(bfs[n1 - 1], bfs[n2 - 1]);
                p.guided = false;
                this.removeExtraGuides(p, oldmol);
                list.push(p);
            }
    }
    composeBridge(list, oldmol, newmol, o1, n1) {
        let busy1 = oldmol.atomRingBlock(o1) != 0 || oldmol.atomAdjCount(o1) >= 3;
        let busy2 = newmol.atomRingBlock(n1) != 0 || newmol.atomAdjCount(n1) >= 3;
        if (!busy1 || !busy2)
            return;
        let otheta = SketchUtil.primeDirections(oldmol, o1);
        let ntheta = SketchUtil.primeDirections(newmol, n1);
        let bfs = Graph.fromMolecule(newmol).calculateBFS(0);
        for (let i = 0; i < otheta.length; i++)
            for (let j = 0; j < ntheta.length; j++) {
                let ox = oldmol.atomX(o1), oy = oldmol.atomY(o1), nx = newmol.atomX(n1), ny = newmol.atomY(n1);
                let dx = Molecule.IDEALBOND * Math.cos(otheta[i]), dy = Molecule.IDEALBOND * Math.sin(otheta[i]);
                let dth = angleDiff(otheta[i], Math.PI + ntheta[j]);
                let frag = newmol.clone();
                CoordUtil.translateMolecule(frag, ox - nx + dx, oy - ny + dy);
                CoordUtil.rotateMolecule(frag, dth, ox + dx, oy + dy);
                let pmol = oldmol.clone();
                let att = pmol.numAtoms + n1, osz = pmol.numAtoms;
                pmol.append(frag);
                let srcidx = this.sourceIndex(pmol, oldmol);
                pmol.addBond(o1, att, 1);
                att = frag.addAtom('C', ox, oy);
                frag.addBond(n1, att, 1);
                SketchUtil.mergeFragmentsMask(pmol, this.asMask(srcidx));
                if (pmol.numAtoms == osz)
                    continue;
                let p = new FusionPermutation();
                p.mol = pmol;
                p.display = frag;
                p.srcidx = srcidx;
                p.molidx = [o1];
                p.temidx = [att];
                p.attdist = bfs[n1 - 1];
                p.bridged = true;
                p.guided = false;
                this.removeExtraGuides(p, oldmol);
                list.push(p);
            }
    }
    composeGuidedOne(list, oldmol, newmol, oidx, gidx) {
        if (newmol.atomAdjCount(gidx) == 0)
            return;
        let otheta = SketchUtil.primeDirections(oldmol, oidx);
        if (newmol.atomAdjCount(gidx) > 1 && oldmol.atomAdjCount(oidx) > 0) {
            let ox = 0, oy = 0;
            let adj = oldmol.atomAdjList(oidx);
            for (let n = 0; n < adj.length; n++) {
                ox += oldmol.atomX(adj[n]) - oldmol.atomX(oidx);
                oy += oldmol.atomY(adj[n]) - oldmol.atomY(oidx);
            }
            let ang = Math.atan2(oy, ox);
            let unique = true;
            for (let n = 0; n < otheta.length; n++)
                if (Math.abs(angleDiff(ang, otheta[n])) < 3 * RADDEG) {
                    unique = false;
                    break;
                }
            if (unique)
                otheta.push(ang);
        }
        let gx = newmol.atomX(gidx), gy = newmol.atomY(gidx);
        let dx = 0, dy = 0;
        let adj = newmol.atomAdjList(gidx);
        for (let n = 0; n < adj.length; n++) {
            dx += newmol.atomX(adj[n]) - gx;
            dy += newmol.atomY(adj[n]) - gy;
        }
        dx /= adj.length;
        dy /= adj.length;
        let ntheta = Math.atan2(dy, dx);
        let homoPenalty = 0;
        if (adj.length == 1) {
            let oel = oldmol.atomElement(oidx), nel = newmol.atomElement(adj[0]);
            if (oel != 'C' && oel == nel)
                homoPenalty = 1;
        }
        for (let n = 0; n < otheta.length; n++) {
            let frag = newmol.clone();
            if (this.guideidx.length == 2) {
                for (let i = 1; i <= frag.numAtoms; i++)
                    if (i != gidx && frag.atomElement(i) == 'X') {
                        frag.setAtomElement(i, TemplateFusion.RESERVED_GUIDESYMBOL);
                        break;
                    }
            }
            CoordUtil.rotateMolecule(frag, otheta[n] - ntheta, gx, gy);
            CoordUtil.translateMolecule(frag, oldmol.atomX(oidx) - gx, oldmol.atomY(oidx) - gy);
            let pmol = oldmol.clone();
            let osz = pmol.numAtoms;
            pmol.append(frag);
            let srcidx = this.sourceIndex(pmol, oldmol);
            SketchUtil.mergeFragmentsMask(pmol, this.asMask(srcidx));
            if (pmol.numAtoms == osz)
                continue;
            let sel = 0;
            for (let i = 1; i <= pmol.numAtoms; i++)
                if (pmol.atomElement(i) == TemplateFusion.RESERVED_GUIDESYMBOL) {
                    let padj = pmol.atomAdjList(i);
                    if (padj.length == 1) {
                        sel = padj[0];
                        if (sel > i)
                            sel--;
                    }
                    pmol.deleteAtomAndBonds(i);
                    srcidx.splice(i - 1, 1);
                    break;
                }
            let p = new FusionPermutation();
            p.mol = pmol;
            p.display = frag;
            p.srcidx = srcidx;
            p.molidx = [oidx];
            p.temidx = [gidx];
            p.attdist = 0;
            p.guided = true;
            p.scoreModifier = homoPenalty;
            p.chainSelect = sel;
            this.removeExtraGuides(p, oldmol);
            list.push(p);
        }
    }
    composeGuidedTwo(list, oldmol, newmol, o1, o2, gidx, nidx, snapToGuide) {
        let ox = oldmol.atomX(o1), oy = oldmol.atomY(o1);
        let gx = newmol.atomX(gidx), gy = newmol.atomY(gidx);
        let nx = newmol.atomX(nidx), ny = newmol.atomY(nidx);
        let otheta = Math.atan2(oldmol.atomY(o2) - oy, oldmol.atomX(o2) - ox);
        let gtheta = Math.atan2(ny - gy, nx - gx);
        let isGuideOnTerminal = oldmol.atomAdjCount(o1) == 1;
        let pmol = oldmol.clone(), frag = newmol.clone();
        CoordUtil.rotateMolecule(frag, otheta - gtheta, gx, gy);
        if (snapToGuide) {
            CoordUtil.translateMolecule(frag, ox - gx, oy - gy);
            pmol.setAtomPos(o2, frag.atomX(nidx), frag.atomY(nidx));
        }
        else {
            CoordUtil.translateMolecule(frag, oldmol.atomX(o2) - frag.atomX(nidx), oldmol.atomY(o2) - frag.atomY(nidx));
            frag.setAtomPos(gidx, ox, oy);
        }
        let osz = pmol.numAtoms;
        pmol.append(frag);
        let srcidx = this.sourceIndex(pmol, oldmol);
        SketchUtil.mergeFragmentsMask(pmol, this.asMask(srcidx));
        if (pmol.numAtoms == osz)
            return;
        let p = new FusionPermutation();
        p.mol = pmol;
        p.display = frag;
        p.srcidx = srcidx;
        p.molidx = [o1, o2];
        p.temidx = [gidx, nidx];
        p.attdist = isGuideOnTerminal ? 1 : 0;
        p.guided = true;
        this.removeExtraGuides(p, oldmol);
        list.push(p);
    }
    composeGuidedMulti(list, oldmol, newmol, oidx, gidx, nudgenew) {
        let cx1 = 0, cy1 = 0, cx2 = 0, cy2 = 0;
        for (let n = 0; n < oidx.length; n++) {
            cx1 += oldmol.atomX(oidx[n]);
            cy1 += oldmol.atomY(oidx[n]);
        }
        for (let n = 0; n < gidx.length; n++) {
            cx2 += newmol.atomX(gidx[n]);
            cy2 += newmol.atomY(gidx[n]);
        }
        cx1 /= oidx.length;
        cy1 /= oidx.length;
        cx2 /= gidx.length;
        cy2 /= gidx.length;
        let osz = oldmol.numAtoms;
        for (let i = 0; i < oidx.length; i++)
            for (let j = 0; j < gidx.length; j++) {
                let pmol = oldmol.clone(), frag = newmol.clone();
                let th1 = Math.atan2(pmol.atomY(oidx[i]) - cy1, pmol.atomX(oidx[i]) - cx1);
                let th2 = Math.atan2(frag.atomY(gidx[j]) - cy2, frag.atomX(gidx[j]) - cx2);
                CoordUtil.rotateMolecule(frag, th1 - th2, cx2, cy2);
                CoordUtil.translateMolecule(frag, cx1 - cx2, cy1 - cy2);
                pmol.append(frag);
                let srcidx = this.sourceIndex(pmol, oldmol);
                let midx = Vec.numberArray(0, gidx.length), tidx = gidx.slice(0);
                Vec.sort(tidx);
                let mask = Vec.booleanArray(false, osz);
                for (let g = tidx.length - 1; g >= 0; g--) {
                    let gatom = tidx[g] + osz;
                    let closest = 0, closeDSQ = 0;
                    for (let n = 0; n < oidx.length; n++)
                        if (!mask[oidx[n] - 1]) {
                            let dx = pmol.atomX(oidx[n]) - pmol.atomX(gatom), dy = pmol.atomY(oidx[n]) - pmol.atomY(gatom);
                            let dsq = norm_xy(dx, dy);
                            if (closest == 0 || dsq < closeDSQ) {
                                closest = oidx[n];
                                closeDSQ = dsq;
                            }
                        }
                    if (!nudgenew) {
                        let dsq = norm_xy(pmol.atomX(gatom) - pmol.atomX(closest), pmol.atomY(gatom) - pmol.atomY(closest));
                        if (dsq > 0.1 * 0.1) {
                            let num = frag.addAtom('C', pmol.atomX(closest), pmol.atomY(closest));
                            frag.addBond(num, tidx[g], 0);
                        }
                        pmol.setAtomPos(closest, pmol.atomX(gatom), pmol.atomY(gatom));
                    }
                    midx[g] = closest;
                    mask[closest - 1] = true;
                    let adj = pmol.atomAdjList(gatom);
                    for (let n = 0; n < adj.length; n++) {
                        let b = pmol.findBond(gatom, adj[n]);
                        pmol.addBond(closest, adj[n], pmol.bondOrder(b), pmol.bondType(b));
                    }
                    pmol.deleteAtomAndBonds(gatom);
                    srcidx.splice(gatom - 1, 1);
                    frag.setAtomPos(tidx[g], pmol.atomX(closest), pmol.atomY(closest));
                }
                for (let n = pmol.numAtoms; n > osz; n--)
                    if (pmol.atomElement(n) == 'X') {
                        pmol.deleteAtomAndBonds(n);
                        srcidx.splice(n - 1, 1);
                        for (let k = 0; k < tidx.length; k++)
                            if (n < tidx[k])
                                tidx[k]--;
                    }
                for (let n = frag.numAtoms; n >= 1; n--)
                    if (frag.atomElement(n) == 'X') {
                        frag.setAtomElement(n, 'C');
                    }
                let p = new FusionPermutation();
                p.mol = pmol;
                p.display = frag;
                p.srcidx = srcidx;
                p.molidx = midx;
                p.temidx = tidx;
                p.attdist = 0;
                p.guided = true;
                this.removeExtraGuides(p, oldmol);
                list.push(p);
            }
    }
    affixRawPermutations(list) {
        let npsz = list.length;
        if (npsz == 0)
            return;
        let umask = Vec.booleanArray(true, npsz);
        for (let i = 0; i < npsz - 1; i++)
            if (umask[i]) {
                let p1 = list[i];
                for (let j = i + 1; j < npsz; j++)
                    if (umask[j]) {
                        let p2 = list[j];
                        if (CoordUtil.sketchEquivalent(p1.mol, p2.mol)) {
                            if (p1.scoreModifier + p1.attdist > p2.scoreModifier + p2.attdist) {
                                list[i] = p2;
                                list[j] = p1;
                            }
                            umask[j] = false;
                        }
                    }
            }
        let score = Vec.numberArray(0, npsz);
        let numKeep = 0;
        for (let n = 0; n < npsz; n++) {
            if (umask[n]) {
                score[n] = this.scorePermutation(list[n]);
                if (score[n] < 1000)
                    numKeep++;
            }
            else
                score[n] = 0;
        }
        if (numKeep > 0)
            for (let n = 0; n < npsz; n++)
                if (umask[n] && score[n] >= 1000)
                    umask[n] = false;
        let uscore = [], uidx = [];
        for (let n = 0; n < npsz; n++)
            if (umask[n]) {
                uscore.push(score[n]);
                uidx.push(n);
            }
        let sidx = Vec.idxSort(uscore);
        for (let n = 0; n < sidx.length; n++) {
            let p = list[uidx[sidx[n]]];
            if (p.guided) {
                this.perms.push(p);
            }
        }
        for (let n = 0; n < sidx.length; n++) {
            let p = list[uidx[sidx[n]]];
            if (!p.guided) {
                this.perms.push(p);
            }
        }
    }
    removeExtraGuides(perm, oldmol) {
        MolUtil.removeDuplicateBonds(perm.mol);
        for (let n = perm.temidx.length - 1; n >= 0; n--) {
            let el = perm.display.atomElement(perm.temidx[n]);
            if (el != 'X' && el != TemplateFusion.RESERVED_GUIDESYMBOL)
                continue;
            perm.molidx.splice(n, 1);
            perm.temidx.splice(n, 1);
        }
        for (let n = perm.display.numAtoms; n >= 1; n--) {
            let el = perm.display.atomElement(n);
            if (el != 'X' && el != TemplateFusion.RESERVED_GUIDESYMBOL)
                continue;
            let a = CoordUtil.atomAtPoint(oldmol, perm.display.atomX(n), perm.display.atomY(n));
            if (a > 0)
                perm.display.setAtomElement(n, 'C');
            else {
                perm.display.deleteAtomAndBonds(n);
                for (let i = 0; i < perm.temidx.length; i++)
                    if (perm.temidx[i] > n)
                        perm.temidx[i]--;
            }
        }
    }
    scorePermutation(perm) {
        let mol = this.mol, tmol = perm.display, tunion = perm.mol;
        let score = 0.2 * perm.attdist + perm.scoreModifier;
        score += CoordUtil.congestionMolecule(tunion, 1e-3);
        score -= tunion.numAtoms;
        let sz1 = mol.numAtoms, sz2 = tmol.numAtoms;
        let mx1 = [], my1 = [], mx2 = [], my2 = [];
        for (let n = 0; n < sz1; n++) {
            mx1.push(mol.atomX(n + 1));
            my1.push(mol.atomY(n + 1));
        }
        for (let n = 0; n < sz2; n++) {
            mx2.push(tmol.atomX(n + 1));
            my2.push(tmol.atomY(n + 1));
        }
        for (let i = 0; i < sz1; i++)
            for (let j = 0; j < sz2; j++) {
                if (norm_xy(mx1[i] - mx2[j], my1[i] - my2[j]) > CoordUtil.OVERLAP_THRESHOLD_SQ)
                    continue;
                let contained = false;
                for (let k = 0; k < perm.molidx.length; k++)
                    if (perm.molidx[k] == i + 1 && perm.temidx[k] == j + 1) {
                        contained = true;
                        break;
                    }
                if (contained)
                    continue;
                score += 100;
            }
        if (!perm.guided)
            for (let n = 0; n < perm.molidx.length; n++) {
                let el = mol.atomElement(perm.molidx[n]);
                if (el == 'C' || el == 'O' || el == 'S' || el == 'N' || el == 'P')
                    continue;
                let adj1 = mol.atomAdjList(perm.molidx[n]), adj2 = tmol.atomAdjList(perm.temidx[n]);
                if (adj1.length + adj2.length >= 4)
                    continue;
                for (let i = 0; i < adj1.length; i++)
                    for (let j = 0; j < adj2.length; j++) {
                        let ai = adj1[i], aj = adj2[j];
                        let bo1 = mol.bondOrder(mol.findBond(perm.molidx[n], ai));
                        let bo2 = mol.bondOrder(mol.findBond(perm.temidx[n], aj));
                        let wantTheta = 0;
                        if ((bo1 == 1 && bo2 == 1) || (bo1 == 1 && bo2 == 2) || (bo1 == 2 && bo2 == 1))
                            wantTheta = 120;
                        else if ((bo1 == 2 && bo2 == 2) || (bo1 == 1 && bo2 == 3) || (bo1 == 3 && bo2 == 1))
                            wantTheta = 180;
                        else
                            continue;
                        let dx1 = mx1[ai - 1] - mx1[perm.molidx[n] - 1];
                        let dy1 = my1[ai - 1] - my1[perm.molidx[n] - 1];
                        let dx2 = mx2[aj - 1] - mx2[perm.temidx[n] - 1];
                        let dy2 = my2[aj - 1] - my2[perm.temidx[n] - 1];
                        let theta = Math.abs(angleDiff(Math.atan2(dy1, dx1), Math.atan2(dy2, dx2))) * RADDEG;
                        if (Math.abs(theta - wantTheta) > 5)
                            score += 50;
                    }
            }
        for (let n = 1; n <= tunion.numAtoms; n++)
            if (tunion.atomElement(n) == 'C' || tunion.atomElement(n) == 'N') {
                let adjb = tunion.atomAdjBonds(n);
                let totalBO = 0;
                for (let i = 0; i < adjb.length; i++) {
                    let bo = tunion.bondOrder(adjb[i]);
                    totalBO += bo;
                    if (bo == 0) {
                        totalBO = 0;
                        break;
                    }
                }
                if (totalBO > 4)
                    score += 1000;
            }
        if (perm.molidx.length >= 2) {
            let mmask = Vec.booleanArray(false, sz1);
            for (let n = 0; n < perm.molidx.length; n++)
                mmask[perm.molidx[n] - 1] = true;
            for (let n = 1; n <= mol.numBonds; n++) {
                let bfr = mol.bondFrom(n), bto = mol.bondTo(n);
                if (!mmask[bfr - 1] || !mmask[bto - 1])
                    continue;
                let tfr = perm.molidx.indexOf(bfr), tto = perm.molidx.indexOf(bto);
                let tn = tmol.findBond(perm.temidx[tfr], perm.temidx[tto]);
                if (tn == 0)
                    continue;
                if (mol.bondOrder(n) != tmol.bondOrder(tn))
                    score += 1;
            }
        }
        return score;
    }
    sourceIndex(xmol, wmol) {
        let idx = Vec.numberArray(0, xmol.numAtoms);
        for (let n = wmol.numAtoms; n >= 1; n--)
            idx[n - 1] = n;
        return idx;
    }
    asMask(imask) {
        let ret = Vec.booleanArray(false, imask.length);
        for (let n = 0; n < imask.length; n++)
            ret[n] = imask[n] != 0;
        return ret;
    }
}
TemplateFusion.RESERVED_GUIDESYMBOL = 'XXX';
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["Delete"] = 1] = "Delete";
    ActivityType[ActivityType["Clear"] = 2] = "Clear";
    ActivityType[ActivityType["Copy"] = 3] = "Copy";
    ActivityType[ActivityType["Cut"] = 4] = "Cut";
    ActivityType[ActivityType["SelectAll"] = 5] = "SelectAll";
    ActivityType[ActivityType["SelectNone"] = 6] = "SelectNone";
    ActivityType[ActivityType["SelectPrevComp"] = 7] = "SelectPrevComp";
    ActivityType[ActivityType["SelectNextComp"] = 8] = "SelectNextComp";
    ActivityType[ActivityType["SelectSide"] = 9] = "SelectSide";
    ActivityType[ActivityType["SelectGrow"] = 10] = "SelectGrow";
    ActivityType[ActivityType["SelectShrink"] = 11] = "SelectShrink";
    ActivityType[ActivityType["SelectChain"] = 12] = "SelectChain";
    ActivityType[ActivityType["SelectSmRing"] = 13] = "SelectSmRing";
    ActivityType[ActivityType["SelectRingBlk"] = 14] = "SelectRingBlk";
    ActivityType[ActivityType["SelectCurElement"] = 15] = "SelectCurElement";
    ActivityType[ActivityType["SelectToggle"] = 16] = "SelectToggle";
    ActivityType[ActivityType["SelectUnCurrent"] = 17] = "SelectUnCurrent";
    ActivityType[ActivityType["Element"] = 18] = "Element";
    ActivityType[ActivityType["AtomPos"] = 19] = "AtomPos";
    ActivityType[ActivityType["Charge"] = 20] = "Charge";
    ActivityType[ActivityType["Connect"] = 21] = "Connect";
    ActivityType[ActivityType["Disconnect"] = 22] = "Disconnect";
    ActivityType[ActivityType["BondOrder"] = 23] = "BondOrder";
    ActivityType[ActivityType["BondType"] = 24] = "BondType";
    ActivityType[ActivityType["BondGeom"] = 25] = "BondGeom";
    ActivityType[ActivityType["BondAtom"] = 26] = "BondAtom";
    ActivityType[ActivityType["BondSwitch"] = 27] = "BondSwitch";
    ActivityType[ActivityType["BondAddTwo"] = 28] = "BondAddTwo";
    ActivityType[ActivityType["BondInsert"] = 29] = "BondInsert";
    ActivityType[ActivityType["Join"] = 30] = "Join";
    ActivityType[ActivityType["Nudge"] = 31] = "Nudge";
    ActivityType[ActivityType["NudgeLots"] = 32] = "NudgeLots";
    ActivityType[ActivityType["NudgeFar"] = 33] = "NudgeFar";
    ActivityType[ActivityType["Flip"] = 34] = "Flip";
    ActivityType[ActivityType["Scale"] = 35] = "Scale";
    ActivityType[ActivityType["Rotate"] = 36] = "Rotate";
    ActivityType[ActivityType["Move"] = 37] = "Move";
    ActivityType[ActivityType["Ring"] = 38] = "Ring";
    ActivityType[ActivityType["TemplateFusion"] = 39] = "TemplateFusion";
    ActivityType[ActivityType["AbbrevTempl"] = 40] = "AbbrevTempl";
    ActivityType[ActivityType["AbbrevGroup"] = 41] = "AbbrevGroup";
    ActivityType[ActivityType["AbbrevFormula"] = 42] = "AbbrevFormula";
    ActivityType[ActivityType["AbbrevClear"] = 43] = "AbbrevClear";
    ActivityType[ActivityType["AbbrevExpand"] = 44] = "AbbrevExpand";
})(ActivityType || (ActivityType = {}));
class MoleculeActivity {
    constructor(owner, activity, param, override) {
        this.owner = owner;
        this.activity = activity;
        this.param = param;
        this.input = owner.getState();
        this.output =
            {
                'mol': null,
                'currentAtom': -1,
                'currentBond': -1,
                'selectedMask': null
            };
        let altInput = this.input;
        for (let k in override)
            altInput[k] = override[k];
        let na = this.input.mol.numAtoms;
        if (this.input.selectedMask == null)
            this.input.selectedMask = Vec.booleanArray(false, na);
        while (this.input.selectedMask.length < na)
            this.input.selectedMask.push(false);
        this.subjectMask = this.input.selectedMask.slice(0);
        this.subjectLength = Vec.maskCount(this.subjectMask);
        this.subjectIndex = [];
        this.hasSelected = this.subjectLength > 0;
        if (this.subjectLength == 0) {
            if (this.input.currentAtom > 0) {
                this.subjectLength = 1;
                this.subjectMask[this.input.currentAtom - 1] = true;
                this.subjectIndex = [this.input.currentAtom];
            }
            else if (this.input.currentBond > 0) {
                let bfr = this.input.mol.bondFrom(this.input.currentBond), bto = this.input.mol.bondTo(this.input.currentBond);
                let b1 = Math.min(bfr, bto), b2 = Math.max(bfr, bto);
                this.subjectLength = 2;
                this.subjectMask[b1 - 1] = true;
                this.subjectMask[b2 - 1] = true;
                this.subjectIndex = [b1, b2];
            }
        }
        else {
            this.subjectIndex = Vec.maskIdx(this.subjectMask);
            Vec.addTo(this.subjectIndex, 1);
        }
    }
    evaluate() {
        return true;
    }
    execute() {
        let param = this.param;
        if (this.activity == ActivityType.Delete) {
            this.execDelete();
            this.finish();
        }
        else if (this.activity == ActivityType.Clear) {
            this.execClear();
            this.finish();
        }
        else if (this.activity == ActivityType.Copy) {
            this.execCopy(false);
            this.finish();
        }
        else if (this.activity == ActivityType.Cut) {
            this.execCopy(true);
            this.finish();
        }
        else if (this.activity == ActivityType.SelectAll) {
            this.execSelectAll(true);
            this.finish();
        }
        else if (this.activity == ActivityType.SelectNone) {
            this.execSelectAll(false);
            this.finish();
        }
        else if (this.activity == ActivityType.SelectPrevComp) {
            this.execSelectComp(-1);
            this.finish();
        }
        else if (this.activity == ActivityType.SelectNextComp) {
            this.execSelectComp(1);
            this.finish();
        }
        else if (this.activity == ActivityType.SelectSide) {
            this.execSelectSide();
            this.finish();
        }
        else if (this.activity == ActivityType.SelectGrow) {
            this.execSelectGrow();
            this.finish();
        }
        else if (this.activity == ActivityType.SelectShrink) {
            this.execSelectShrink();
            this.finish();
        }
        else if (this.activity == ActivityType.SelectChain) {
            this.execSelectChain();
            this.finish();
        }
        else if (this.activity == ActivityType.SelectSmRing) {
            this.execSelectSmRing();
            this.finish();
        }
        else if (this.activity == ActivityType.SelectRingBlk) {
            this.execSelectRingBlk();
            this.finish();
        }
        else if (this.activity == ActivityType.SelectCurElement) {
            this.execSelectCurElement();
            this.finish();
        }
        else if (this.activity == ActivityType.SelectToggle) {
            this.execSelectToggle();
            this.finish();
        }
        else if (this.activity == ActivityType.SelectUnCurrent) {
            this.execSelectUnCurrent();
            this.finish();
        }
        else if (this.activity == ActivityType.Element) {
            this.execElement(param.element, param.positionX, param.positionY, param.keepAbbrev);
            this.finish();
        }
        else if (this.activity == ActivityType.Charge) {
            this.execCharge(param.delta);
            this.finish();
        }
        else if (this.activity == ActivityType.Connect) {
            this.execConnect(1, Molecule.BONDTYPE_NORMAL);
            this.finish();
        }
        else if (this.activity == ActivityType.Disconnect) {
            this.execDisconnect();
            this.finish();
        }
        else if (this.activity == ActivityType.BondOrder) {
            this.execBond(param.order, Molecule.BONDTYPE_NORMAL);
            this.finish();
        }
        else if (this.activity == ActivityType.BondType) {
            this.execBond(1, param.type);
            this.finish();
        }
        else if (this.activity == ActivityType.BondGeom) {
            this.execBondGeom(param.geom);
            this.finish();
        }
        else if (this.activity == ActivityType.BondAtom) {
            this.execBondAtom(param.order, param.type, param.element, param.x1, param.y1, param.x2, param.y2);
            this.finish();
        }
        else if (this.activity == ActivityType.BondSwitch) {
            this.execBondSwitch();
            this.finish();
        }
        else if (this.activity == ActivityType.BondAddTwo) {
            this.execBondAddTwo();
            this.finish();
        }
        else if (this.activity == ActivityType.BondInsert) {
        }
        else if (this.activity == ActivityType.Join) {
            this.execJoin();
            this.finish();
        }
        else if (this.activity == ActivityType.Nudge) {
            this.execNudge(param.dir, 0.1);
            this.finish();
        }
        else if (this.activity == ActivityType.NudgeLots) {
            this.execNudge(param.dir, 1);
            this.finish();
        }
        else if (this.activity == ActivityType.NudgeFar) {
            this.execNudgeFar(param.dir);
            this.finish();
        }
        else if (this.activity == ActivityType.Flip) {
            this.execFlip(param.axis);
            this.finish();
        }
        else if (this.activity == ActivityType.Scale) {
            this.execScale(param.mag);
            this.finish();
        }
        else if (this.activity == ActivityType.Rotate) {
            this.execRotate(param.theta, param.centreX, param.centreY);
            this.finish();
        }
        else if (this.activity == ActivityType.Move) {
            this.execMove(param.refAtom, param.deltaX, param.deltaY);
            this.finish();
        }
        else if (this.activity == ActivityType.Ring) {
            this.execRing(param.ringX, param.ringY, param.aromatic);
            this.finish();
        }
        else if (this.activity == ActivityType.TemplateFusion) {
            this.execTemplateFusion(Molecule.fromString(param.fragNative));
            this.owner.setPermutations(this.output.permutations);
        }
        else if (this.activity == ActivityType.AbbrevTempl) {
            this.execAbbrevTempl();
            this.finish();
        }
        else if (this.activity == ActivityType.AbbrevGroup) {
            this.execAbbrevGroup();
            this.finish();
        }
        else if (this.activity == ActivityType.AbbrevFormula) {
            this.execAbbrevFormula();
            this.finish();
        }
        else if (this.activity == ActivityType.AbbrevClear) {
            this.execAbbrevClear();
            this.finish();
        }
        else if (this.activity == ActivityType.AbbrevExpand) {
            this.execAbbrevExpand();
            this.finish();
        }
    }
    finish() {
        if (this.output.mol != null || this.output.currentAtom >= 0 || this.output.currentBond >= 0 || this.output.selectedMask != null) {
            this.owner.setState(this.output, true);
            if (this.errmsg != null)
                this.owner.showMessage(this.errmsg, false);
        }
        else {
            if (this.errmsg != null)
                this.owner.showMessage(this.errmsg, true);
        }
    }
    execDelete() {
        if (!this.requireSubject())
            return;
        let mol = this.input.mol;
        this.output.mol = mol.clone();
        this.zapSubject();
        if (this.input.currentBond > 0 && !this.hasSelected) {
            this.output.mol.deleteBond(this.input.currentBond);
            this.input.currentBond = 0;
            return;
        }
        if (this.subjectLength == 1 && this.subjectIndex[0] == this.input.currentAtom) {
            let adj = mol.atomAdjList(this.input.currentAtom);
            if (adj.length == 1) {
                this.output.currentAtom = adj[0];
                if (this.output.currentAtom > this.input.currentAtom)
                    this.output.currentAtom--;
            }
        }
        for (let n = this.subjectLength - 1; n >= 0; n--)
            this.output.mol.deleteAtomAndBonds(this.subjectIndex[n]);
    }
    execCopy(withCut) {
        let mol = this.input.mol;
        if (this.subjectLength > 0)
            mol = MolUtil.subgraphWithAttachments(mol, this.subjectMask);
        this.owner.performCopy(mol);
        if (withCut) {
            this.zapSubject();
            this.output.mol = MolUtil.subgraphMask(this.input.mol, Vec.notMask(this.subjectMask));
        }
    }
    execClear() {
        this.output.mol = new Molecule();
        this.zapSubject();
    }
    execSelectAll(all) {
        let same = true;
        for (let n = 0; n < this.input.mol.numAtoms; n++)
            if (this.subjectMask[n] != all) {
                same = false;
                break;
            }
        if (same) {
            this.errmsg = all ? "All atoms already selected." : "All atoms already deselected.";
            return;
        }
        this.output.selectedMask = Vec.booleanArray(all, this.input.mol.numAtoms);
    }
    execSelectComp(dir) {
        let cclist = MolUtil.componentList(this.input.mol);
        if (cclist.length == 1 && this.hasSelected && this.subjectLength == this.input.mol.numAtoms) {
            this.errmsg = 'All atoms already selected.';
            return;
        }
        let sel = this.pickSelectedGroup(cclist, dir);
        this.output.selectedMask = Vec.booleanArray(false, this.input.mol.numAtoms);
        for (let n = 0; n < cclist[sel].length; n++)
            this.output.selectedMask[cclist[sel][n] - 1] = true;
    }
    execSelectSide() {
        if (!this.requireCurrent())
            return;
        let mol = this.input.mol, currentAtom = this.input.currentAtom, currentBond = this.input.currentBond;
        if (currentAtom > 0 && mol.atomAdjCount(currentAtom) == 0) {
            this.errmsg = 'Current atom has no neighbours.';
            return;
        }
        if (currentBond > 0 && mol.atomAdjCount(mol.bondFrom(currentBond)) == 1 && mol.atomAdjCount(mol.bondTo(currentBond)) == 1) {
            this.errmsg = 'Current bond has no neighbours.';
            return;
        }
        let sides = currentAtom > 0 ? MolUtil.getAtomSides(mol, currentAtom) : MolUtil.getBondSides(mol, currentBond);
        let sel = this.pickSelectedGroup(sides, 1);
        this.output.selectedMask = Vec.booleanArray(false, mol.numAtoms);
        for (let n = 0; n < sides[sel].length; n++)
            this.output.selectedMask[sides[sel][n] - 1] = true;
    }
    execSelectGrow() {
        if (!this.requireSubject())
            return;
        let mol = this.input.mol, currentAtom = this.input.currentAtom, currentBond = this.input.currentBond;
        this.output.selectedMask = this.input.selectedMask.slice(0);
        if (!this.hasSelected) {
            if (currentAtom > 0) {
                this.output.selectedMask[currentAtom - 1] = true;
            }
            else {
                this.output.selectedMask[mol.bondFrom(currentBond) - 1] = true;
                this.output.selectedMask[mol.bondTo(currentBond) - 1] = true;
            }
        }
        else {
            for (let n = 1; n <= mol.numBonds; n++) {
                let bfr = mol.bondFrom(n) - 1, bto = mol.bondTo(n) - 1;
                if (this.input.selectedMask[bfr] && !this.input.selectedMask[bto])
                    this.output.selectedMask[bto] = true;
                else if (this.input.selectedMask && !this.input.selectedMask[bfr])
                    this.output.selectedMask[bfr] = true;
            }
        }
    }
    execSelectShrink() {
        if (!this.requireSelected())
            return;
        let mol = this.input.mol;
        let count = Vec.numberArray(0, mol.numAtoms);
        for (let n = 1; n <= mol.numBonds; n++) {
            let bfr = mol.bondFrom(n) - 1, bto = mol.bondTo(n) - 1;
            if (!this.input.selectedMask[bfr] || !this.input.selectedMask[bto])
                continue;
            count[bfr]++;
            count[bto]++;
        }
        this.output.selectedMask = this.input.selectedMask.slice(0);
        for (let n = 0; n < mol.numAtoms; n++)
            this.output.selectedMask[n] = this.input.selectedMask[n] && count[n] >= 2;
    }
    execSelectChain() {
        if (!this.requireSubject())
            return;
        let mol = this.input.mol;
        this.output.selectedMask = this.input.selectedMask.slice(0);
        for (let n = 1; n <= mol.numBonds; n++) {
            let bfr = mol.bondFrom(n) - 1, bto = mol.bondTo(n) - 1;
            if (this.input.selectedMask[bfr] && !this.input.selectedMask[bto] && mol.atomRingBlock(bto + 1) == 0)
                this.output.selectedMask[bto] = true;
            else if (this.input.selectedMask[bto] && !this.input.selectedMask[bfr] && mol.atomRingBlock(bfr + 1) == 0)
                this.output.selectedMask[bfr] = true;
        }
    }
    execSelectSmRing() {
        if (!this.requireSubject())
            return;
        this.output.selectedMask = this.input.selectedMask.slice(0);
        for (let r = 3; r <= 8; r++) {
            let rings = this.input.mol.findRingsOfSize(r);
            for (let i = 0; i < rings.length; i++) {
                let any = false;
                for (let j = 0; j < rings[i].length; j++)
                    if (this.subjectMask[rings[i][j] - 1]) {
                        any = true;
                        break;
                    }
                if (any)
                    for (let j = 0; j < rings[i].length; j++)
                        this.output.selectedMask[rings[i][j] - 1] = true;
            }
        }
    }
    execSelectRingBlk() {
        if (!this.requireSubject())
            return;
        let mol = this.input.mol;
        this.output.selectedMask = this.input.selectedMask.slice(0);
        let maxRB = 0;
        for (let n = 1; n <= mol.numAtoms; n++)
            maxRB = Math.max(maxRB, mol.atomRingBlock(n));
        if (maxRB == 0)
            return;
        let gotRB = Vec.booleanArray(false, maxRB);
        for (let n = 1; n <= mol.numAtoms; n++) {
            let rb = mol.atomRingBlock(n);
            if (rb > 0 && this.subjectMask[n - 1])
                gotRB[rb - 1] = true;
        }
        for (let n = 1; n <= mol.numAtoms; n++) {
            let rb = mol.atomRingBlock(n);
            if (rb > 0 && gotRB[rb - 1])
                this.output.selectedMask[n - 1] = true;
        }
    }
    execSelectCurElement() {
        if (!this.requireCurrent())
            return;
        let mol = this.input.mol;
        this.output.selectedMask = this.input.selectedMask.slice(0);
        let el1 = '', el2 = '';
        if (this.input.currentAtom > 0) {
            el1 = mol.atomElement(this.input.currentAtom);
        }
        else {
            el1 = mol.atomElement(mol.bondFrom(this.input.currentBond));
            el2 = mol.atomElement(mol.bondTo(this.input.currentBond));
        }
        for (let n = 1; n <= mol.numAtoms; n++)
            if (mol.atomElement(n) == el1 || mol.atomElement(n) == el2)
                this.output.selectedMask[n - 1] = true;
    }
    execSelectToggle() {
        if (!this.requireCurrent())
            return;
        this.output.selectedMask = this.input.selectedMask.slice(0);
        if (this.input.currentAtom > 0) {
            this.output.selectedMask[this.input.currentAtom - 1] = !this.output.selectedMask[this.input.currentAtom - 1];
        }
        else {
            let bfr = this.input.mol.bondFrom(this.input.currentBond), bto = this.input.mol.bondTo(this.input.currentBond);
            let sel = !this.input.selectedMask[bfr - 1] || !this.input.selectedMask[bto - 1];
            this.output.selectedMask[bfr - 1] = sel;
            this.output.selectedMask[bto - 1] = sel;
        }
    }
    execSelectUnCurrent() {
        if (!this.requireCurrent())
            return;
        this.output.selectedMask = this.input.selectedMask.slice(0);
        if (this.input.currentAtom > 0) {
            this.output.selectedMask[this.input.currentAtom - 1] = false;
        }
        else {
            this.output.selectedMask[this.input.mol.bondFrom(this.input.currentBond) - 1] = false;
            this.output.selectedMask[this.input.mol.bondTo(this.input.currentBond) - 1] = false;
        }
    }
    execElement(element, positionX, positionY, keepAbbrev) {
        if (this.subjectLength > 0) {
            let anyChange = false;
            for (let n = 0; n < this.subjectLength; n++)
                if (this.input.mol.atomElement(this.subjectIndex[n]) != element) {
                    anyChange = true;
                    break;
                }
            if (!anyChange) {
                this.errmsg = 'Elements not changed.';
                return;
            }
        }
        this.output.mol = this.input.mol.clone();
        if (this.subjectLength == 0) {
            if (positionX != null && positionY != null)
                this.output.mol.addAtom(element, positionX, positionY);
            else
                SketchUtil.placeNewAtom(this.output.mol, element);
        }
        else {
            for (let n = 0; n < this.subjectLength; n++) {
                if (keepAbbrev)
                    this.output.mol.setAtomElement(this.subjectIndex[n], element);
                else
                    MolUtil.setAtomElement(this.output.mol, this.subjectIndex[n], element);
            }
        }
    }
    execCharge(delta) {
        if (!this.requireSubject())
            return;
        this.output.mol = this.input.mol.clone();
        for (let n = 0; n < this.subjectLength; n++) {
            let chg = Math.max(-20, Math.min(20, this.input.mol.atomCharge(this.subjectIndex[n]) + delta));
            this.output.mol.setAtomCharge(this.subjectIndex[n], chg);
        }
    }
    execConnect(order, type) {
        if (!this.requireSubject())
            return;
        let conn = SketchUtil.pickAtomsToConnect(this.input.mol, this.subjectIndex);
        if (conn == null) {
            this.errmsg = 'Subject atoms contain no bonds suitable for connection.';
            return;
        }
        this.output.mol = this.input.mol.clone();
        for (let n = 0; n < conn.length; n += 2)
            MolUtil.addBond(this.output.mol, conn[n], conn[n + 1], order, type);
    }
    execDisconnect() {
        let zap = [];
        let mol = this.input.mol;
        if (this.hasSelected) {
            for (let n = 1; n <= mol.numBonds; n++)
                if (this.subjectMask[mol.bondFrom(n) - 1] && this.subjectMask[mol.bondTo(n) - 1])
                    zap.push(n);
        }
        else if (this.input.currentAtom > 0) {
            for (let a of mol.atomAdjBonds(this.input.currentAtom))
                zap.push(a);
        }
        else if (this.input.currentBond > 0) {
            zap.push(this.input.currentBond);
        }
        if (zap.length == 0) {
            this.errmsg = 'Subject atoms contain no bonds suitable for disconnection.';
            return;
        }
        let killmask = Vec.booleanArray(false, mol.numBonds);
        for (let b of zap)
            killmask[b - 1] = true;
        this.output.mol = this.input.mol.clone();
        for (let n = mol.numBonds; n >= 1; n--)
            if (killmask[n - 1])
                this.output.mol.deleteBond(n);
    }
    execBond(order, type) {
        if (!this.requireSubject())
            return;
        if (this.subjectLength == 1) {
            this.performBondNew(this.subjectIndex[0], order, type);
            return;
        }
        let ccmol = MolUtil.subgraphMask(this.input.mol, this.subjectMask);
        let oneComp = true;
        for (let n = ccmol.numAtoms; n >= 1; n--)
            if (ccmol.atomConnComp(n) != 1) {
                oneComp = false;
                break;
            }
        if (oneComp)
            this.performBondChange(order, type);
        else
            this.execConnect(order, type);
    }
    execBondGeom(geom) {
        let bond = this.subjectLength == 2 ? this.input.mol.findBond(this.subjectIndex[0], this.subjectIndex[1]) : 0;
        if (this.subjectLength == 0 || this.subjectLength > 2 || (this.subjectLength == 2 && bond == 0)) {
            this.errmsg = 'The subject must be a single atom or bond.';
            return;
        }
        if (this.subjectLength == 1)
            this.performBondGeomAtom(geom, this.subjectIndex[0]);
        else
            this.performBondGeomBond(geom, bond);
    }
    execBondAtom(order, type, element, x1, y1, x2, y2) {
        let mol = this.input.mol;
        let a1 = CoordUtil.atomAtPoint(mol, x1, y1, 0.01), a2 = CoordUtil.atomAtPoint(mol, x2, y2, 0.01);
        if (a1 > 0 && a2 > 0 && mol.findBond(a1, a2) > 0)
            return;
        this.output.mol = mol.clone();
        if (a1 == 0)
            a1 = this.output.mol.addAtom('C', x1, y1);
        if (a2 == 0)
            a2 = this.output.mol.addAtom(element, x2, y2);
        this.output.mol.addBond(a1, a2, order, type);
    }
    execBondSwitch() {
        if (!this.requireSubject())
            return;
        let mol = this.input.mol;
        let src = 0, dst = [];
        if (this.subjectLength == 1) {
            src = this.subjectIndex[0];
            let adj = mol.atomAdjList(src);
            for (let n = 0; n < adj.length; n++)
                if (mol.atomAdjCount(adj[n]) == 1)
                    dst.push(adj[n]);
        }
        else if (this.subjectLength == 2 && mol.findBond(this.subjectIndex[0], this.subjectIndex[1]) > 0) {
            let ac1 = mol.atomAdjCount(this.subjectIndex[0]), ac2 = mol.atomAdjCount(this.subjectIndex[1]);
            if (ac1 > 1 && ac2 == 1) {
                src = this.subjectIndex[0];
                dst.push(this.subjectIndex[1]);
            }
            else if (ac1 == 1 && ac2 > 1) {
                src = this.subjectIndex[1];
                dst.push(this.subjectIndex[0]);
            }
        }
        if (src == 0 || dst.length == 0) {
            this.errmsg = 'Subject must include a terminal bond.';
            return;
        }
        let geoms = SketchUtil.guessAtomGeometry(mol, src, 1);
        if (geoms.length == 0) {
            this.errmsg = 'No alternative geometries identified.';
            return;
        }
        this.output.mol = SketchUtil.switchAtomGeometry(mol, src, dst, geoms);
        if (this.output.mol == null) {
            this.errmsg = 'No alternative geometries identified.';
        }
    }
    execBondAddTwo() {
        if (this.subjectLength != 1) {
            this.errmsg = 'Subject must be a single atom.';
            return;
        }
        let atom = this.subjectIndex[0];
        if (this.input.mol.atomAdjCount(atom) < 2) {
            this.errmsg = 'Subject atom must already have at least 2 bonds.';
            return;
        }
        var ang = SketchUtil.calculateNewBondAngles(this.input.mol, atom, 1);
        if (ang.length == 0)
            ang = SketchUtil.exitVectors(this.input.mol, atom);
        if (ang.length == 0) {
            this.errmsg = 'Could not find a suitable geometry for new substituents.';
            return;
        }
        var baseAng = ang[0];
        let cx = this.input.mol.atomX(atom), cy = this.input.mol.atomY(atom);
        if (ang.length > 1) {
            let best = 0;
            for (let n = 0; n < ang.length; n++) {
                let x = cx + Molecule.IDEALBOND * Math.cos(ang[n]);
                let y = cy + Molecule.IDEALBOND * Math.sin(ang[n]);
                let score = CoordUtil.congestionPoint(this.input.mol, x, y);
                if (n == 0 || score < best) {
                    best = score;
                    baseAng = ang[n];
                }
            }
        }
        let ang1 = baseAng - 30.0 * DEGRAD, ang2 = baseAng + 30.0 * DEGRAD;
        let mol = this.input.mol.clone();
        let a1 = mol.addAtom('C', cx + Molecule.IDEALBOND * Math.cos(ang1), cy + Molecule.IDEALBOND * Math.sin(ang1));
        let a2 = mol.addAtom('C', cx + Molecule.IDEALBOND * Math.cos(ang2), cy + Molecule.IDEALBOND * Math.sin(ang2));
        mol.addBond(atom, a1, 1);
        mol.addBond(atom, a2, 1);
        this.output.mol = mol;
    }
    execJoin() {
        if (!this.requireSubject())
            return;
        this.output.mol = SketchUtil.joinOverlappingAtoms(this.input.mol, this.subjectMask);
        if (this.output.mol == null) {
            this.errmsg = 'Subject contains no overlapping atoms.';
        }
        else {
            this.zapSubject();
        }
    }
    execNudge(dir, extent) {
        if (!this.requireSubject())
            return;
        let dx = extent * (dir == 'left' ? -1 : dir == 'right' ? 1 : 0);
        let dy = extent * (dir == 'down' ? -1 : dir == 'up' ? 1 : 0);
        this.output.mol = this.input.mol.clone();
        for (let n = 0; n < this.subjectLength; n++) {
            let x = this.output.mol.atomX(this.subjectIndex[n]), y = this.output.mol.atomY(this.subjectIndex[n]);
            this.output.mol.setAtomPos(this.subjectIndex[n], x + dx, y + dy);
        }
    }
    execNudgeFar(dir) {
        if (!this.requireSubject())
            return;
        if (this.subjectLength == this.input.mol.numAtoms) {
            this.errmsg = 'Cannot apply to entire molecule.';
            return;
        }
        let dx = dir == 'left' ? -1 : dir == 'right' ? 1 : 0;
        let dy = dir == 'down' ? -1 : dir == 'up' ? 1 : 0;
        this.output.mol = SketchUtil.moveToEdge(this.input.mol, this.subjectMask, dx, dy);
        if (this.output.mol == null) {
            this.execNudge(dir, 1);
        }
    }
    execFlip(axis) {
        if (this.input.mol.numAtoms < 2) {
            this.errmsg = 'At least 2 atoms are required.';
            return;
        }
        let isVertical = axis == 'ver';
        let cx = 0, cy = 0;
        let mask = this.subjectMask, mol = this.input.mol;
        if (this.input.currentAtom > 0) {
            cx = mol.atomX(this.input.currentAtom);
            cy = mol.atomY(this.input.currentAtom);
            if (!this.hasSelected) {
                mask = Vec.booleanArray(false, mol.numAtoms);
                let cc = mol.atomConnComp(this.input.currentAtom);
                for (let n = 1; n <= mol.numAtoms; n++)
                    mask[n - 1] = mol.atomConnComp(n) == cc;
            }
        }
        else if (this.input.currentBond > 0) {
            let bfr = mol.bondFrom(this.input.currentBond), bto = mol.bondTo(this.input.currentBond);
            cx = 0.5 * (mol.atomX(bfr) + mol.atomX(bto));
            cy = 0.5 * (mol.atomY(bfr) + mol.atomY(bto));
            if (!this.hasSelected) {
                mask = Vec.booleanArray(false, mol.numAtoms);
                let cc = mol.atomConnComp(bfr);
                for (let n = 1; n <= mol.numAtoms; n++)
                    mask[n - 1] = mol.atomConnComp(n) == cc;
            }
        }
        else if (this.subjectLength == 0) {
            let box = mol.boundary();
            cx = 0.5 * (box.minX() + box.maxX());
            cy = 0.5 * (box.minY() + box.maxY());
            mask = Vec.booleanArray(true, mol.numAtoms);
        }
        else {
            for (let n = 0; n < this.subjectLength; n++) {
                cx += mol.atomX(this.subjectIndex[n]);
                cy += mol.atomY(this.subjectIndex[n]);
            }
            let invSz = 1.0 / this.subjectLength;
            cx *= invSz;
            cy *= invSz;
        }
        this.output.mol = mol.clone();
        for (let n = 1; n <= mol.numAtoms; n++)
            if (mask[n - 1]) {
                if (!isVertical)
                    this.output.mol.setAtomX(n, 2 * cx - this.output.mol.atomX(n));
                else
                    this.output.mol.setAtomY(n, 2 * cy - this.output.mol.atomY(n));
            }
    }
    execScale(mag) {
        if (this.input.mol.numAtoms < 2) {
            this.errmsg = 'At least 2 atoms are required.';
            return;
        }
        let mol = this.input.mol;
        let b;
        if (this.subjectLength == 2 && (b = mol.findBond(this.subjectIndex[0], this.subjectIndex[1])) > 0 && !mol.bondInRing(b)) {
            let a1 = this.subjectIndex[0], a2 = this.subjectIndex[1];
            let ccmol = mol.clone();
            ccmol.deleteBond(b);
            let idx1 = [], idx2 = [];
            for (let n = 1; n <= ccmol.numAtoms; n++) {
                if (ccmol.atomConnComp(n) == ccmol.atomConnComp(a1))
                    idx1.push(n);
                else if (ccmol.atomConnComp(n) == ccmol.atomConnComp(a2))
                    idx2.push(n);
            }
            let dx = (mol.atomX(a2) - mol.atomX(a1)) * (mag - 1);
            let dy = (mol.atomY(a2) - mol.atomY(a1)) * (mag - 1);
            if (idx1.length == idx2.length) {
                dx *= 0.5;
                dy *= 0.5;
            }
            this.output.mol = mol.clone();
            if (idx1.length <= idx2.length)
                for (let n = 0; n < idx1.length; n++) {
                    let a = idx1[n];
                    this.output.mol.setAtomPos(a, this.output.mol.atomX(a) - dx, this.output.mol.atomY(a) - dy);
                }
            if (idx2.length <= idx1.length)
                for (let n = 0; n < idx2.length; n++) {
                    let a = idx2[n];
                    this.output.mol.setAtomPos(a, this.output.mol.atomX(a) + dx, this.output.mol.atomY(a) + dy);
                }
            return;
        }
        let cx = 0, cy = 0;
        if (this.input.currentAtom > 0) {
            cx = mol.atomX(this.input.currentAtom);
            cy = mol.atomY(this.input.currentAtom);
        }
        else if (this.input.currentBond > 0) {
            let bfr = mol.bondFrom(this.input.currentBond), bto = mol.bondTo(this.input.currentBond);
            cx = 0.5 * (mol.atomX(bfr) + mol.atomX(bto));
            cy = 0.5 * (mol.atomY(bfr) + mol.atomY(bto));
        }
        else {
            for (let n = 0; n < this.subjectLength; n++) {
                cx += mol.atomX(this.subjectIndex[n]);
                cy += mol.atomY(this.subjectIndex[n]);
            }
            let invSz = 1.0 / this.subjectLength;
            cx *= invSz;
            cy *= invSz;
        }
        this.output.mol = mol.clone();
        for (let n = 0; n < this.subjectLength; n++) {
            let x = this.output.mol.atomX(this.subjectIndex[n]);
            let y = this.output.mol.atomY(this.subjectIndex[n]);
            this.output.mol.setAtomPos(this.subjectIndex[n], (x - cx) * mag + cx, (y - cy) * mag + cy);
        }
    }
    execRotate(theta, centreX, centreY) {
        theta *= DEGRAD;
        let mol = this.input.mol;
        if (centreX != null && centreY != null) {
            this.output.mol = mol.clone();
            let mask = this.subjectLength == 0 ? Vec.booleanArray(true, mol.numAtoms) : this.subjectMask;
            CoordUtil.rotateAtoms(this.output.mol, mask, centreX, centreY, theta);
            return;
        }
        if (mol.numAtoms < 2) {
            this.errmsg = 'At least 2 atoms are required.';
            return;
        }
        let cx = 0, cy = 0;
        let mask = this.subjectMask;
        if (this.input.currentAtom > 0) {
            cx = mol.atomX(this.input.currentAtom);
            cy = mol.atomY(this.input.currentAtom);
            if (!this.hasSelected) {
                mask = Vec.booleanArray(false, mol.numAtoms);
                let cc = mol.atomConnComp(this.input.currentAtom);
                for (let n = 1; n <= mol.numAtoms; n++)
                    mask[n - 1] = mol.atomConnComp(n) == cc;
            }
        }
        else if (this.input.currentBond > 0) {
            let bfr = mol.bondFrom(this.input.currentBond), bto = mol.bondTo(this.input.currentBond);
            cx = 0.5 * (mol.atomX(bfr) + mol.atomX(bto));
            cy = 0.5 * (mol.atomY(bfr) + mol.atomY(bto));
            if (!this.hasSelected) {
                mask = Vec.booleanArray(false, mol.numAtoms);
                let cc = mol.atomConnComp(bfr);
                for (let n = 1; n <= mol.numAtoms; n++)
                    mask[n - 1] = mol.atomConnComp(n) == cc;
            }
        }
        else if (this.subjectLength == 0) {
            let box = mol.boundary();
            cx = 0.5 * (box.minX() + box.maxX());
            cy = 0.5 * (box.minY() + box.maxY());
            mask = Vec.booleanArray(true, mol.numAtoms);
        }
        else {
            for (let n = 0; n < this.subjectLength; n++) {
                cx += mol.atomX(this.subjectIndex[n]);
                cy += mol.atomY(this.subjectIndex[n]);
            }
            let invSz = 1.0 / this.subjectLength;
            cx *= invSz;
            cy *= invSz;
        }
        this.output.mol = mol.clone();
        CoordUtil.rotateAtoms(this.output.mol, mask, cx, cy, theta);
    }
    execMove(refAtom, deltaX, deltaY) {
        let subj = this.subjectIndex;
        if (Vec.arrayLength(subj) == 0)
            subj = [refAtom];
        this.output.mol = this.input.mol.clone();
        for (let a of subj)
            this.output.mol.setAtomPos(a, this.output.mol.atomX(a) + deltaX, this.output.mol.atomY(a) + deltaY);
    }
    execRing(ringX, ringY, aromatic) {
        let rsz = ringX.length;
        let atoms = Vec.numberArray(0, rsz), bonds = Vec.numberArray(0, rsz);
        let outmol = this.input.mol.clone();
        for (let n = 0; n < rsz; n++) {
            atoms[n] = CoordUtil.atomAtPoint(outmol, ringX[n], ringY[n]);
            if (atoms[n] == 0)
                atoms[n] = outmol.addAtom('C', ringX[n], ringY[n]);
        }
        for (let n = 0; n < rsz; n++) {
            let nn = n < rsz - 1 ? n + 1 : 0;
            bonds[n] = outmol.findBond(atoms[n], atoms[nn]);
            if (bonds[n] == 0)
                bonds[n] = outmol.addBond(atoms[n], atoms[nn], 1);
        }
        if (aromatic) {
            let valence = Vec.numberArray(0, rsz);
            let pi = Vec.booleanArray(false, rsz);
            for (let n = 0; n < rsz; n++) {
                valence[n] = Chemistry.ELEMENT_BONDING[outmol.atomicNumber(atoms[n])] + outmol.atomCharge(atoms[n]);
                if (outmol.atomHExplicit(atoms[n]) != Molecule.HEXPLICIT_UNKNOWN)
                    valence[n] -= outmol.atomHExplicit(atoms[n]);
                for (let b of outmol.atomAdjBonds(atoms[n]))
                    valence[n] -= outmol.bondOrder(b);
                if (outmol.bondOrder(bonds[n]) >= 2) {
                    pi[n] = true;
                    if (n < rsz - 1) {
                        pi[n] = true;
                        n++;
                    }
                    else
                        pi[0] = true;
                }
            }
            for (let n = 0; n < rsz; n++) {
                let nn = n < rsz - 1 ? n + 1 : 0;
                if (pi[n] || pi[nn])
                    continue;
                if (valence[n] > 0 && valence[nn] > 0) {
                    outmol.setBondOrder(bonds[n], 2);
                    pi[n] = true;
                    pi[nn] = true;
                    valence[n]--;
                    valence[nn]--;
                }
            }
        }
        this.output.mol = outmol;
    }
    execTemplateFusion(frag) {
        let mol = this.input.mol;
        let fusion = new TemplateFusion(mol, frag, '');
        if (this.subjectLength == 0)
            fusion.permuteNone();
        else if (this.subjectLength == 1)
            fusion.permuteAtom(this.subjectIndex[0]);
        else if (this.subjectLength == 2 && mol.findBond(this.subjectIndex[0], this.subjectIndex[1]) > 0)
            fusion.permuteBond(this.subjectIndex[0], this.subjectIndex[1]);
        else
            fusion.permuteMulti(this.subjectIndex);
        let permutations = [];
        for (let perm of fusion.perms) {
            let obj = {};
            obj['mol'] = perm.mol.toString();
            obj['display'] = perm.display.toString();
            obj['molidx'] = perm.molidx;
            obj['temidx'] = perm.temidx;
            obj['srcidx'] = perm.srcidx;
            permutations.push(obj);
        }
        this.output.permutations = permutations;
    }
    execAbbrevTempl() {
    }
    execAbbrevGroup() {
        if (!this.requireSubject())
            return;
        if (!this.checkAbbreviationReady())
            return;
        let mol = MolUtil.convertToAbbrev(this.input.mol, Vec.notMask(this.subjectMask), '?');
        if (mol == null) {
            this.errmsg = 'Inline abbreviations must be terminal with exactly one attachment point.';
            return;
        }
        this.output.mol = mol;
        this.zapSubject();
        this.output.currentAtom = mol.numAtoms;
    }
    execAbbrevFormula() {
        if (!this.requireSubject())
            return;
        if (!this.checkAbbreviationReady())
            return;
        let fixed = this.input.mol.clone();
        for (let n = 1; n <= fixed.numAtoms; n++)
            fixed.setAtomHExplicit(n, fixed.atomHydrogens(n));
        let abv = MolUtil.subgraphMask(fixed, this.subjectMask);
        let formula = MolUtil.molecularFormula(abv, true);
        let mol = MolUtil.convertToAbbrev(this.input.mol, Vec.notMask(this.subjectMask), formula);
        if (mol == null) {
            this.errmsg = 'Inline abbreviations must be terminal with exactly one attachment point.';
            return;
        }
        this.output.mol = mol;
        this.zapSubject();
        this.output.currentAtom = mol.numAtoms;
    }
    execAbbrevClear() {
        let idx = [];
        for (let n of this.subjectIndex)
            if (MolUtil.hasAbbrev(this.input.mol, n))
                idx.push(n);
        if (idx.length == 0) {
            this.errmsg = 'No abbreviations to clear.';
            return;
        }
        let mol = this.input.mol.clone();
        for (let n of idx)
            MolUtil.clearAbbrev(mol, n);
        this.output.mol = mol;
    }
    execAbbrevExpand() {
        let idx = [];
        for (let n of this.subjectIndex)
            if (MolUtil.hasAbbrev(this.input.mol, n))
                idx.push(n);
        if (idx.length == 0) {
            this.errmsg = 'No abbreviations to expand.';
            return;
        }
        let mol = this.input.mol.clone();
        for (let n of idx)
            MolUtil.expandOneAbbrev(mol, n, true);
        this.output.mol = mol;
    }
    requireSubject() {
        if (this.subjectLength == 0)
            this.errmsg = 'Subject required: current atom/bond or selected atoms.';
        return this.subjectLength > 0;
    }
    requireAtoms() {
        if (this.input.mol.numAtoms == 0)
            this.errmsg = 'There are no atoms.';
        return this.input.mol.numAtoms > 0;
    }
    requireCurrent() {
        if (this.input.currentAtom == 0 && this.input.currentBond == 0) {
            this.errmsg = 'There must be a current atom or bond.';
            return false;
        }
        return true;
    }
    requireSelected() {
        if (!this.hasSelected)
            this.errmsg = 'No atoms are selected.';
        return this.hasSelected;
    }
    pickSelectedGroup(groups, dir) {
        if (this.subjectLength == 0)
            return 0;
        for (let i = 0; i < groups.length; i++) {
            let g = groups[i];
            let all = true;
            for (let j = 0; j < g.length; j++)
                if (!this.subjectMask[g[j] - 1]) {
                    all = false;
                    break;
                }
            if (all) {
                i += dir;
                return i < 0 ? i + groups.length : i >= groups.length ? i - groups.length : i;
            }
        }
        for (let i = 0; i < groups.length; i++) {
            let g = groups[i];
            for (let j = 0; j < g.length; j++)
                if (this.subjectMask[g[j] - 1])
                    return i;
        }
        return 0;
    }
    zapSubject() {
        this.output.currentAtom = 0;
        this.output.currentBond = 0;
        this.output.selectedMask = Vec.booleanArray(false, this.input.mol.numAtoms);
    }
    performBondNew(atom, order, type) {
        let mol = this.input.mol;
        let ang = SketchUtil.calculateNewBondAngles(mol, atom, order);
        if (ang.length == 0)
            ang = SketchUtil.exitVectors(mol, atom);
        if (ang.length == 0) {
            this.errmsg = 'Could not find a suitable geometry for a new substituent.';
            return;
        }
        let bx = 0, by = 0, best = 0;
        for (let n = 0; n < ang.length; n++) {
            let x = mol.atomX(atom) + Molecule.IDEALBOND * Math.cos(ang[n]);
            let y = mol.atomY(atom) + Molecule.IDEALBOND * Math.sin(ang[n]);
            let score = CoordUtil.congestionPoint(mol, x, y);
            if (n == 0 || score < best) {
                best = score;
                bx = x;
                by = y;
            }
        }
        this.output.mol = mol.clone();
        let anum = CoordUtil.atomAtPoint(this.output.mol, bx, by);
        if (anum == 0)
            anum = this.output.mol.addAtom('C', bx, by);
        MolUtil.addBond(this.output.mol, atom, anum, order, type);
    }
    performBondChange(order, type) {
        let mol = this.input.mol;
        let bonds = [];
        for (let n = 1; n <= mol.numBonds; n++)
            if (this.subjectMask[mol.bondFrom(n) - 1] && this.subjectMask[mol.bondTo(n) - 1])
                bonds.push(n);
        let switchType = type == Molecule.BONDTYPE_DECLINED || type == Molecule.BONDTYPE_INCLINED;
        let stereoType = switchType || type == Molecule.BONDTYPE_UNKNOWN;
        let anyChange = switchType;
        for (let n = 0; n < bonds.length && !anyChange; n++) {
            let b = bonds[n];
            if (mol.bondOrder(b) != order && type == Molecule.BONDTYPE_NORMAL)
                anyChange = true;
            else if (mol.bondType(b) != type)
                anyChange = true;
        }
        if (!anyChange) {
            this.errmsg = 'No bond changes made.';
            return;
        }
        this.output.mol = mol.clone();
        for (let n = 0; n < bonds.length; n++) {
            let b = bonds[n], bfr = this.output.mol.bondFrom(b), bto = this.output.mol.bondTo(b);
            if (switchType && this.output.mol.bondType(b) == type) {
                this.output.mol.setBondFromTo(b, bto, bfr);
            }
            else if (this.output.mol.bondOrder(b) != order || this.output.mol.bondType(b) != type) {
                if (!stereoType)
                    this.output.mol.setBondOrder(b, order);
                this.output.mol.setBondType(b, type);
            }
            else if (switchType) {
                this.output.mol.setBondFromTo(b, bto, bfr);
            }
        }
    }
    performBondGeomAtom(geom, atom) {
        let mol = this.input.mol;
        let adj = mol.atomAdjList(atom);
        let asz = adj.length, gsz = SketchUtil.GEOM_ANGLES[geom].length;
        if (asz > gsz) {
            this.errmsg = 'The current atom has more bonds than does the selected geometry.';
            return;
        }
        if (asz == 0) {
            this.performBondNew(atom, 1, Molecule.BONDTYPE_NORMAL);
            return;
        }
        if (asz == gsz) {
            this.output.mol = SketchUtil.refitAtomGeometry(mol, atom, geom);
            if (this.output.mol == null)
                this.errmsg = 'Could not re-fit the atom geometry.';
            return;
        }
        let ang = CoordUtil.atomBondAngles(mol, atom);
        let newang = SketchUtil.mapAngleSubstituent(geom, ang);
        if (newang == null) {
            this.output.mol = SketchUtil.refitAtomGeometry(mol, atom, geom);
            if (this.output.mol == null)
                this.errmsg = 'Could not re-fit the atom geometry.';
            return;
        }
        this.output.mol = mol.clone();
        let theta = SketchUtil.pickNewAtomDirection(mol, atom, newang);
        let x = this.output.mol.atomX(atom) + Molecule.IDEALBOND * Math.cos(theta);
        let y = this.output.mol.atomY(atom) + Molecule.IDEALBOND * Math.sin(theta);
        let anum = CoordUtil.atomAtPoint(this.output.mol, x, y);
        if (anum == 0)
            anum = this.output.mol.addAtom('C', x, y);
        MolUtil.addBond(this.output.mol, atom, anum, 1);
    }
    performBondGeomBond(geom, bond) {
        let mol = this.input.mol;
        let bfr = mol.bondFrom(bond), bto = mol.bondTo(bond);
        let ac1 = mol.atomAdjCount(bfr), ac2 = mol.atomAdjCount(bto);
        if (ac1 > 1 && ac2 == 1) { }
        else if (ac1 == 1 && ac2 > 1) {
            let t = ac1;
            ac1 = ac2;
            ac2 = t;
        }
        else {
            this.errmsg = 'One end of the bond must be terminal.';
            return;
        }
        let adj = mol.atomAdjList(bfr);
        let x1 = mol.atomX(bfr), y1 = mol.atomY(bfr);
        let x2 = mol.atomX(bto), y2 = mol.atomY(bto);
        let ang = [];
        for (let n = 0, p = 0; n < adj.length; n++)
            if (adj[n] != bto) {
                ang.push(Math.atan2(mol.atomY(adj[n]) - y1, mol.atomX(adj[n]) - x1));
            }
        let newang = SketchUtil.mapAngleSubstituent(geom, ang);
        if (newang == null) {
            this.errmsg = 'No alternative geometries identified.';
            return;
        }
        let bestAng = TWOPI + 1, bestX = 0, bestY = 0;
        let curth = Math.atan2(y2 - y1, x2 - x1), r = norm_xy(x2 - x1, y2 - y1);
        for (let n = 0; n < newang.length; n++) {
            let th = angleDiff(newang[n], curth);
            if (th < 0)
                th += TWOPI;
            if (n > 0 && th > bestAng)
                continue;
            let x = x1 + r * Math.cos(th + curth);
            let y = y1 + r * Math.sin(th + curth);
            if (CoordUtil.atomAtPoint(mol, x, y) > 0)
                continue;
            bestAng = th;
            bestX = x;
            bestY = y;
        }
        if (bestAng > TWOPI) {
            this.errmsg = 'No alternative geometries identified.';
            return;
        }
        this.output.mol = mol.clone();
        this.output.mol.setAtomPos(bto, bestX, bestY);
    }
    checkAbbreviationReady() {
        let junction = 0;
        let mol = this.input.mol, subjmask = this.subjectMask;
        for (let n = 1; n <= mol.numBonds; n++) {
            let b1 = mol.bondFrom(n), b2 = mol.bondTo(n);
            let atom = 0;
            if ((subjmask[b1 - 1] && !subjmask[b2 - 1] && MolUtil.hasAbbrev(mol, b1)) ||
                (subjmask[b2 - 1] && !subjmask[b1 - 1] && MolUtil.hasAbbrev(mol, b2))) {
                this.errmsg = 'Already an abbreviation.';
                return false;
            }
            if (subjmask[b1 - 1] && !subjmask[b2 - 1])
                atom = b1;
            else if (subjmask[b2 - 1] && !subjmask[b1 - 1])
                atom = b2;
            if (atom == 0 || atom == junction) { }
            else if (junction == 0)
                junction = atom;
            else {
                this.errmsg = 'The selected group must be terminal.';
                return false;
            }
        }
        return true;
    }
}
class ButtonBank {
    constructor() {
        this.isSubLevel = false;
        this.buttons = [];
    }
    init() { }
    claimKey(event) { return false; }
    bankClosed() { }
    static matchKey(event, mnemonic) {
        if (mnemonic == null || mnemonic == '')
            return;
        let mshift = false, mctrl = false, malt = false, mkey = mnemonic;
        while (true) {
            if (mkey.startsWith('Shift-')) {
                mshift = true;
                mkey = mkey.substring(6);
            }
            else if (mkey.startsWith('Ctrl-')) {
                mctrl = true;
                mkey = mkey.substring(5);
            }
            else if (mkey.startsWith('Alt-')) {
                malt = true;
                mkey = mkey.substring(4);
            }
            else
                break;
        }
        if (mshift && !event.shiftKey)
            return false;
        if (mctrl && !event.ctrlKey)
            return false;
        if (malt && !event.altKey)
            return false;
        let ch = String.fromCharCode(event.keyCode || event.charCode);
        if (event.keyCode == 27)
            ch = 'escape';
        else if (event.keyCode == 8)
            ch = 'backspace';
        else if (event.keyCode == 46)
            ch = 'delete';
        if (mshift) {
            const SHIFT_SUBST = { '1': '!', '2': '@', '3': '#', '4': '$', '5': '%', '6': '^', '7': '&', '8': '*', '9': '(', '0': ')', '-': '_', '=': '+' };
            let subst = SHIFT_SUBST[mkey];
            if (subst)
                mkey = subst;
        }
        return ch.toLowerCase() == mkey.toLowerCase();
    }
}
const ELEMENTS_NOBLE = [
    'He', 'Ar', 'Kr', 'Xe', 'Rn'
];
const ELEMENTS_S_BLOCK = [
    'Li', 'Na', 'K', 'Rb', 'Cs', 'Fr', 'Sc',
    'Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra', 'Y'
];
const ELEMENTS_P_BLOCK = [
    'B', 'Al', 'Si', 'Ga', 'Ge', 'As', 'Se',
    'In', 'Sn', 'Sb', 'Te', 'Tl', 'Pb', 'Bi', 'Po', 'At'
];
const ELEMENTS_D_BLOCK = [
    'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn',
    'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd',
    'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg'
];
const ELEMENTS_F_BLOCK = [
    'La', 'Ce', 'Pr', 'Nd', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy',
    'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Ac', 'Th', 'Pa', 'U'
];
const ELEMENTS_ABBREV = [
    'X', 'Y', 'Z', 'Q', 'M', 'L', 'E', 'A', 'R',
    'R0', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'
];
var CommandType;
(function (CommandType) {
    CommandType[CommandType["Main"] = 0] = "Main";
    CommandType[CommandType["Atom"] = 1] = "Atom";
    CommandType[CommandType["Bond"] = 2] = "Bond";
    CommandType[CommandType["Select"] = 3] = "Select";
    CommandType[CommandType["Move"] = 4] = "Move";
    CommandType[CommandType["Abbrev"] = 5] = "Abbrev";
    CommandType[CommandType["SBlock"] = 6] = "SBlock";
    CommandType[CommandType["PBlock"] = 7] = "PBlock";
    CommandType[CommandType["DBlock"] = 8] = "DBlock";
    CommandType[CommandType["FBlock"] = 9] = "FBlock";
    CommandType[CommandType["Noble"] = 10] = "Noble";
})(CommandType || (CommandType = {}));
const COMMANDS_MAIN = [
    { 'id': 'undo', 'imageFN': 'MainUndo', 'helpText': 'Undo last change.', 'mnemonic': '' },
    { 'id': 'redo', 'imageFN': 'MainRedo', 'helpText': 'Cancel last undo.', 'mnemonic': '' },
    { 'id': 'zoomin', 'imageFN': 'MainZoomIn', 'helpText': 'Zoom in.', 'mnemonic': '=' },
    { 'id': 'zoomout', 'imageFN': 'MainZoomOut', 'helpText': 'Zoom out.', 'mnemonic': '-' },
    { 'id': 'zoomfit', 'imageFN': 'MainZoomFit', 'helpText': 'Show whole diagram onscreen.', 'mnemonic': '' },
    { 'id': 'selside', 'imageFN': 'MainSelSide', 'helpText': 'Select alternate side of current atom or bond.', 'mnemonic': 'E' },
    { 'id': 'selall', 'imageFN': 'MainSelAll', 'helpText': 'Select all atoms.', 'mnemonic': '' },
    { 'id': 'selnone', 'imageFN': 'MainSelNone', 'helpText': 'Clear selection.', 'mnemonic': '' },
    { 'id': 'delete', 'imageFN': 'MainDelete', 'helpText': 'Delete selected atoms and bonds.', 'mnemonic': '' },
    { 'id': 'cut', 'imageFN': 'MainCut', 'helpText': 'Copy selection to clipboard, and remove.', 'mnemonic': '' },
    { 'id': 'copy', 'imageFN': 'MainCopy', 'helpText': 'Copy selection to clipboard.', 'mnemonic': '' },
    { 'id': 'paste', 'imageFN': 'MainPaste', 'helpText': 'Paste clipboard contents.', 'mnemonic': '' },
    { 'id': 'atom', 'imageFN': 'MainAtom', 'helpText': 'Open the Atom submenu.', 'isSubMenu': true, 'mnemonic': 'A' },
    { 'id': 'bond', 'imageFN': 'MainBond', 'helpText': 'Open the Bond submenu.', 'isSubMenu': true, 'mnemonic': 'B' },
    { 'id': 'select', 'imageFN': 'MainSelect', 'helpText': 'Open the Selection submenu.', 'isSubMenu': true, 'mnemonic': 'S' },
    { 'id': 'move', 'imageFN': 'MainMove', 'helpText': 'Open the Move submenu.', 'isSubMenu': true, 'mnemonic': 'M' }
];
const COMMANDS_ATOM = [
    { 'id': 'element:C', 'text': 'C', 'helpText': 'Change elements to Carbon.', 'mnemonic': 'Shift-C' },
    { 'id': 'element:N', 'text': 'N', 'helpText': 'Change elements to Nitrogen.', 'mnemonic': 'Shift-N' },
    { 'id': 'element:O', 'text': 'O', 'helpText': 'Change elements to Oxygen.', 'mnemonic': 'Shift-O' },
    { 'id': 'element:S', 'text': 'S', 'helpText': 'Change elements to Sulfur.', 'mnemonic': 'Shift-S' },
    { 'id': 'element:P', 'text': 'P', 'helpText': 'Change elements to Phosphorus.', 'mnemonic': 'Shift-P' },
    { 'id': 'element:H', 'text': 'H', 'helpText': 'Change elements to Hydrogen.', 'mnemonic': 'Shift-H' },
    { 'id': 'element:F', 'text': 'F', 'helpText': 'Change elements to Fluorine.', 'mnemonic': 'Shift-F' },
    { 'id': 'element:Cl', 'text': 'Cl', 'helpText': 'Change elements to Chlorine.', 'mnemonic': 'Shift-L' },
    { 'id': 'element:Br', 'text': 'Br', 'helpText': 'Change elements to Bromine.', 'mnemonic': 'Shift-B' },
    { 'id': 'element:I', 'text': 'I', 'helpText': 'Change elements to Iodine.', 'mnemonic': 'Shift-I' },
    { 'id': 'plus', 'imageFN': 'AtomPlus', 'helpText': 'Increase the atom charge.', 'mnemonic': '+' },
    { 'id': 'minus', 'imageFN': 'AtomMinus', 'helpText': 'Decrease the atom charge.', 'mnemonic': '_' },
    { 'id': 'abbrev', 'imageFN': 'AtomAbbrev', 'helpText': 'Open list of common labels.', 'isSubMenu': true, 'mnemonic': 'Q' },
    { 'id': 'sblock', 'imageFN': 'AtomSBlock', 'helpText': 'Open list of s-block elements.', 'isSubMenu': true, 'mnemonic': 'S' },
    { 'id': 'pblock', 'imageFN': 'AtomPBlock', 'helpText': 'Open list of p-block elements.', 'isSubMenu': true, 'mnemonic': 'P' },
    { 'id': 'dblock', 'imageFN': 'AtomDBlock', 'helpText': 'Open list of d-block elements.', 'isSubMenu': true, 'mnemonic': 'D' },
    { 'id': 'fblock', 'imageFN': 'AtomFBlock', 'helpText': 'Open list of f-block elements.', 'isSubMenu': true, 'mnemonic': 'F' },
    { 'id': 'noble', 'imageFN': 'AtomNoble', 'helpText': 'Open list of noble elements.', 'isSubMenu': true, 'mnemonic': 'Y' }
];
const COMMANDS_BOND = [
    { 'id': 'one', 'imageFN': 'BondOne', 'helpText': 'Create or set bonds to single.', 'mnemonic': '1' },
    { 'id': 'two', 'imageFN': 'BondTwo', 'helpText': 'Create or set bonds to double.', 'mnemonic': '2' },
    { 'id': 'three', 'imageFN': 'BondThree', 'helpText': 'Create or set bonds to triple.', 'mnemonic': '3' },
    { 'id': 'four', 'imageFN': 'BondFour', 'helpText': 'Create or set bonds to quadruple.', 'mnemonic': '' },
    { 'id': 'zero', 'imageFN': 'BondZero', 'helpText': 'Create or set bonds to zero-order.', 'mnemonic': '0' },
    { 'id': 'inclined', 'imageFN': 'BondUp', 'helpText': 'Create or set bonds to inclined.', 'mnemonic': '5' },
    { 'id': 'declined', 'imageFN': 'BondDown', 'helpText': 'Create or set bonds to declined.', 'mnemonic': '6' },
    { 'id': 'squig', 'imageFN': 'BondSquig', 'helpText': 'Create or set bonds to unknown stereochemistry.', 'mnemonic': '4' },
    { 'id': 'addtwo', 'imageFN': 'BondAddTwo', 'helpText': 'Add two new bonds to the subject atom.', 'mnemonic': 'Shift-A' },
    { 'id': 'insert', 'imageFN': 'BondInsert', 'helpText': 'Insert a methylene into the subject bond.', 'mnemonic': '' },
    { 'id': 'switch', 'imageFN': 'BondSwitch', 'helpText': 'Cycle through likely bond geometries.', 'mnemonic': '' },
    { 'id': 'linear', 'imageFN': 'BondLinear', 'helpText': 'Apply linear geometry.', 'mnemonic': 'Shift-Q' },
    { 'id': 'trigonal', 'imageFN': 'BondTrigonal', 'helpText': 'Apply trigonal geometry.', 'mnemonic': 'Shift-W' },
    { 'id': 'tetra1', 'imageFN': 'BondTetra1', 'helpText': 'Apply tetrahedral geometry #1.', 'mnemonic': 'Shift-E' },
    { 'id': 'tetra2', 'imageFN': 'BondTetra2', 'helpText': 'Apply tetrahedral geometry #2.', 'mnemonic': 'Shift-R' },
    { 'id': 'sqplan', 'imageFN': 'BondSqPlan', 'helpText': 'Apply square planar geometry.', 'mnemonic': 'Shift-T' },
    { 'id': 'octa1', 'imageFN': 'BondOcta1', 'helpText': 'Apply octahedral geometry #1.', 'mnemonic': 'Shift-Y' },
    { 'id': 'octa2', 'imageFN': 'BondOcta2', 'helpText': 'Apply octahedral geometry #2.', 'mnemonic': 'Shift-U' },
    { 'id': 'connect', 'imageFN': 'BondConnect', 'helpText': 'Connect selected atoms, by proximity.', 'mnemonic': '' },
    { 'id': 'disconnect', 'imageFN': 'BondDisconnect', 'helpText': 'Disconnect selected atoms.', 'mnemonic': '' }
];
const COMMANDS_SELECT = [
    { 'id': 'selgrow', 'imageFN': 'SelectionGrow', 'helpText': 'Add adjacent atoms to selection.', 'mnemonic': '' },
    { 'id': 'selshrink', 'imageFN': 'SelectionShrink', 'helpText': 'Unselect exterior atoms.', 'mnemonic': '' },
    { 'id': 'selchain', 'imageFN': 'SelectionChain', 'helpText': 'Extend selection to non-ring atoms.', 'mnemonic': '' },
    { 'id': 'smallring', 'imageFN': 'SelectionSmRing', 'helpText': 'Extend selection to small rings.', 'mnemonic': '' },
    { 'id': 'ringblock', 'imageFN': 'SelectionRingBlk', 'helpText': 'Extend selection to ring blocks.', 'mnemonic': '' },
    { 'id': 'curelement', 'imageFN': 'SelectionCurElement', 'helpText': 'Select all atoms of current element type.', 'mnemonic': '' },
    { 'id': 'selprev', 'imageFN': 'MainSelPrev', 'helpText': 'Select previous connected component.', 'mnemonic': '' },
    { 'id': 'selnext', 'imageFN': 'MainSelNext', 'helpText': 'Select next connected component.', 'mnemonic': '' },
    { 'id': 'toggle', 'imageFN': 'SelectionToggle', 'helpText': 'Toggle selection of current.', 'mnemonic': '' },
    { 'id': 'uncurrent', 'imageFN': 'SelectionUncurrent', 'helpText': 'Undefine current object.', 'mnemonic': '' },
    { 'id': 'join', 'imageFN': 'MoveJoin', 'helpText': 'Overlapping atoms will be joined as one.', 'mnemonic': '' },
    { 'id': 'new', 'imageFN': 'MainNew', 'helpText': 'Clear the molecular structure.', 'mnemonic': '' },
    { 'id': 'inline', 'imageFN': 'AtomInline', 'helpText': 'Make selected atoms into an inline abbreviation.', 'mnemonic': '' },
    { 'id': 'formula', 'imageFN': 'AtomFormula', 'helpText': 'Make selected atoms into their molecule formula.', 'mnemonic': '' },
    { 'id': 'clearabbrev', 'imageFN': 'AtomClearAbbrev', 'helpText': 'Remove inline abbreviation.', 'mnemonic': '' },
    { 'id': 'expandabbrev', 'imageFN': 'AtomExpandAbbrev', 'helpText': 'Expand out the inline abbreviation.', 'mnemonic': '' }
];
const COMMANDS_MOVE = [
    { 'id': 'up', 'imageFN': 'MoveUp', 'helpText': 'Move subject atoms up slightly.', 'mnemonic': '' },
    { 'id': 'down', 'imageFN': 'MoveDown', 'helpText': 'Move subject atoms down slightly.', 'mnemonic': '' },
    { 'id': 'left', 'imageFN': 'MoveLeft', 'helpText': 'Move subject atoms slightly to the left.', 'mnemonic': '' },
    { 'id': 'right', 'imageFN': 'MoveRight', 'helpText': 'Move subject atoms slightly to the right.', 'mnemonic': '' },
    { 'id': 'uplots', 'imageFN': 'MoveUpLots', 'helpText': 'Move subject atoms up somewhat.', 'mnemonic': '' },
    { 'id': 'downlots', 'imageFN': 'MoveDownLots', 'helpText': 'Move subject atoms down somewhat.', 'mnemonic': '' },
    { 'id': 'leftlots', 'imageFN': 'MoveLeftLots', 'helpText': 'Move subject atoms somewhat to the left.', 'mnemonic': '' },
    { 'id': 'rightlots', 'imageFN': 'MoveRightLots', 'helpText': 'Move subject atoms somewhat to the right.', 'mnemonic': '' },
    { 'id': 'upfar', 'imageFN': 'MoveUpFar', 'helpText': 'Move subject atoms far up.', 'mnemonic': '' },
    { 'id': 'downfar', 'imageFN': 'MoveDownFar', 'helpText': 'Move subject atoms far down.', 'mnemonic': '' },
    { 'id': 'leftfar', 'imageFN': 'MoveLeftFar', 'helpText': 'Move subject atoms far to the left.', 'mnemonic': '' },
    { 'id': 'rightfar', 'imageFN': 'MoveRightFar', 'helpText': 'Move subject atoms far to the right.', 'mnemonic': '' },
    { 'id': 'rotp01', 'imageFN': 'MoveRotP01', 'helpText': 'Rotate 1\u00B0 counter-clockwise.', 'mnemonic': '' },
    { 'id': 'rotm01', 'imageFN': 'MoveRotM01', 'helpText': 'Rotate 1\u00B0 clockwise.', 'mnemonic': '' },
    { 'id': 'rotp05', 'imageFN': 'MoveRotP05', 'helpText': 'Rotate 5\u00B0 counter-clockwise.', 'mnemonic': '' },
    { 'id': 'rotm05', 'imageFN': 'MoveRotM05', 'helpText': 'Rotate 5\u00B0 clockwise.', 'mnemonic': '' },
    { 'id': 'rotp15', 'imageFN': 'MoveRotP15', 'helpText': 'Rotate 15\u00B0 counter-clockwise.', 'mnemonic': '' },
    { 'id': 'rotm15', 'imageFN': 'MoveRotM15', 'helpText': 'Rotate 15\u00B0 clockwise.', 'mnemonic': '' },
    { 'id': 'rotp30', 'imageFN': 'MoveRotP30', 'helpText': 'Rotate 30\u00B0 counter-clockwise.', 'mnemonic': '' },
    { 'id': 'rotm30', 'imageFN': 'MoveRotM30', 'helpText': 'Rotate 30\u00B0 clockwise.', 'mnemonic': '' },
    { 'id': 'hflip', 'imageFN': 'MoveHFlip', 'helpText': 'Flip subject atoms horizontally.', 'mnemonic': '' },
    { 'id': 'vflip', 'imageFN': 'MoveVFlip', 'helpText': 'Flip subject atoms vertically.', 'mnemonic': '' },
    { 'id': 'shrink', 'imageFN': 'MoveShrink', 'helpText': 'Decrease subject bond distances.', 'mnemonic': '' },
    { 'id': 'grow', 'imageFN': 'MoveGrow', 'helpText': 'Increase subject bond distances.', 'mnemonic': '' }
];
class CommandBank extends ButtonBank {
    constructor(owner, cmdType = CommandType.Main) {
        super();
        this.owner = owner;
        this.cmdType = cmdType;
    }
    update() {
        if (this.cmdType == CommandType.Main)
            for (let btn of COMMANDS_MAIN)
                this.buttons.push(btn);
        else if (this.cmdType == CommandType.Atom)
            for (let btn of COMMANDS_ATOM)
                this.buttons.push(btn);
        else if (this.cmdType == CommandType.Bond)
            for (let btn of COMMANDS_BOND)
                this.buttons.push(btn);
        else if (this.cmdType == CommandType.Select)
            for (let btn of COMMANDS_SELECT)
                this.buttons.push(btn);
        else if (this.cmdType == CommandType.Move)
            for (let btn of COMMANDS_MOVE)
                this.buttons.push(btn);
        else if (this.cmdType == CommandType.Abbrev)
            this.populateElements(ELEMENTS_NOBLE);
        else if (this.cmdType == CommandType.SBlock)
            this.populateElements(ELEMENTS_S_BLOCK);
        else if (this.cmdType == CommandType.PBlock)
            this.populateElements(ELEMENTS_P_BLOCK);
        else if (this.cmdType == CommandType.DBlock)
            this.populateElements(ELEMENTS_D_BLOCK);
        else if (this.cmdType == CommandType.FBlock)
            this.populateElements(ELEMENTS_F_BLOCK);
        else if (this.cmdType == CommandType.Noble)
            this.populateElements(ELEMENTS_ABBREV);
    }
    populateElements(elements) {
        for (let el of elements) {
            this.buttons.push({ 'id': `element:${el}`, 'text': el, 'helpText': `Change elements to ${el}.` });
        }
    }
    hitButton(id) {
        let actv = 0, param = null;
        if (id.startsWith('element:')) {
            let el = id.substring(8);
            actv = ActivityType.Element;
            param = { 'element': el };
        }
        else if (id == 'delete')
            actv = ActivityType.Delete;
        else if (id == 'undo') {
            if (this.owner.canUndo())
                this.owner.performUndo();
            else
                this.owner.showMessage('Nothing to undo.');
        }
        else if (id == 'redo') {
            if (this.owner.canRedo())
                this.owner.performRedo();
            else
                this.owner.showMessage('Nothing to redo.');
        }
        else if (id == 'cut')
            actv = ActivityType.Cut;
        else if (id == 'copy')
            actv = ActivityType.Copy;
        else if (id == 'paste')
            this.owner.performPaste();
        else if (id == 'new')
            actv = ActivityType.Clear;
        else if (id == 'zoomfit')
            this.owner.autoScale();
        else if (id == 'zoomout')
            this.owner.zoom(0.8);
        else if (id == 'zoomin')
            this.owner.zoom(1.25);
        else if (id == 'selall')
            actv = ActivityType.SelectAll;
        else if (id == 'selnone')
            actv = ActivityType.SelectNone;
        else if (id == 'selprev')
            actv = ActivityType.SelectPrevComp;
        else if (id == 'selnext')
            actv = ActivityType.SelectNextComp;
        else if (id == 'selside')
            actv = ActivityType.SelectSide;
        else if (id == 'plus') {
            actv = ActivityType.Charge;
            param = { 'delta': 1 };
        }
        else if (id == 'minus') {
            actv = ActivityType.Charge;
            param = { 'delta': -1 };
        }
        else if (id == 'one') {
            actv = ActivityType.BondOrder;
            param = { 'order': 1 };
        }
        else if (id == 'two') {
            actv = ActivityType.BondOrder;
            param = { 'order': 2 };
        }
        else if (id == 'three') {
            actv = ActivityType.BondOrder;
            param = { 'order': 3 };
        }
        else if (id == 'four') {
            actv = ActivityType.BondOrder;
            param = { 'order': 4 };
        }
        else if (id == 'zero') {
            actv = ActivityType.BondOrder;
            param = { 'order': 0 };
        }
        else if (id == 'inclined') {
            actv = ActivityType.BondType;
            param = { 'type': Molecule.BONDTYPE_INCLINED };
        }
        else if (id == 'declined') {
            actv = ActivityType.BondType;
            param = { 'type': Molecule.BONDTYPE_DECLINED };
        }
        else if (id == 'squig') {
            actv = ActivityType.BondType;
            param = { 'type': Molecule.BONDTYPE_UNKNOWN };
        }
        else if (id == 'linear') {
            actv = ActivityType.BondGeom;
            param = { 'geom': Geometry.Linear };
        }
        else if (id == 'trigonal') {
            actv = ActivityType.BondGeom;
            param = { 'geom': Geometry.Trigonal };
        }
        else if (id == 'tetra1') {
            actv = ActivityType.BondGeom;
            param = { 'geom': Geometry.Tetra1 };
        }
        else if (id == 'tetra2') {
            actv = ActivityType.BondGeom;
            param = { 'geom': Geometry.Tetra2 };
        }
        else if (id == 'sqplan') {
            actv = ActivityType.BondGeom;
            param = { 'geom': Geometry.SqPlan };
        }
        else if (id == 'octa1') {
            actv = ActivityType.BondGeom;
            param = { 'geom': Geometry.Octa1 };
        }
        else if (id == 'octa2') {
            actv = ActivityType.BondGeom;
            param = { 'geom': Geometry.Octa2 };
        }
        else if (id == 'switch')
            actv = ActivityType.BondSwitch;
        else if (id == 'connect')
            actv = ActivityType.Connect;
        else if (id == 'disconnect')
            actv = ActivityType.Disconnect;
        else if (id == 'addtwo')
            actv = ActivityType.BondAddTwo;
        else if (id == 'insert')
            actv = ActivityType.BondInsert;
        else if (id == 'curelement')
            actv = ActivityType.SelectCurElement;
        else if (id == 'selgrow')
            actv = ActivityType.SelectGrow;
        else if (id == 'selshrink')
            actv = ActivityType.SelectShrink;
        else if (id == 'selprev')
            actv = ActivityType.SelectPrevComp;
        else if (id == 'selnext')
            actv = ActivityType.SelectNextComp;
        else if (id == 'selchain')
            actv = ActivityType.SelectChain;
        else if (id == 'smallring')
            actv = ActivityType.SelectSmRing;
        else if (id == 'ringblock')
            actv = ActivityType.SelectRingBlk;
        else if (id == 'toggle')
            actv = ActivityType.SelectToggle;
        else if (id == 'uncurrent')
            actv = ActivityType.SelectUnCurrent;
        else if (id == 'join')
            actv = ActivityType.Join;
        else if (id == 'inline')
            actv = ActivityType.AbbrevGroup;
        else if (id == 'formula')
            actv = ActivityType.AbbrevFormula;
        else if (id == 'clearabbrev')
            actv = ActivityType.AbbrevClear;
        else if (id == 'expandabbrev')
            actv = ActivityType.AbbrevExpand;
        else if (id == 'up') {
            actv = ActivityType.Nudge;
            param = { 'dir': 'up' };
        }
        else if (id == 'down') {
            actv = ActivityType.Nudge;
            param = { 'dir': 'down' };
        }
        else if (id == 'left') {
            actv = ActivityType.Nudge;
            param = { 'dir': 'left' };
        }
        else if (id == 'right') {
            actv = ActivityType.Nudge;
            param = { 'dir': 'right' };
        }
        else if (id == 'uplots') {
            actv = ActivityType.NudgeLots;
            param = { 'dir': 'up' };
        }
        else if (id == 'downlots') {
            actv = ActivityType.NudgeLots;
            param = { 'dir': 'down' };
        }
        else if (id == 'leftlots') {
            actv = ActivityType.NudgeLots;
            param = { 'dir': 'left' };
        }
        else if (id == 'rightlots') {
            actv = ActivityType.NudgeLots;
            param = { 'dir': 'right' };
        }
        else if (id == 'upfar') {
            actv = ActivityType.NudgeFar;
            param = { 'dir': 'up' };
        }
        else if (id == 'downfar') {
            actv = ActivityType.NudgeFar;
            param = { 'dir': 'down' };
        }
        else if (id == 'leftfar') {
            actv = ActivityType.NudgeFar;
            param = { 'dir': 'left' };
        }
        else if (id == 'rightfar') {
            actv = ActivityType.NudgeFar;
            param = { 'dir': 'right' };
        }
        else if (id == 'rotp01') {
            actv = ActivityType.Rotate;
            param = { 'theta': 1 };
        }
        else if (id == 'rotm01') {
            actv = ActivityType.Rotate;
            param = { 'theta': -1 };
        }
        else if (id == 'rotp05') {
            actv = ActivityType.Rotate;
            param = { 'theta': 5 };
        }
        else if (id == 'rotm05') {
            actv = ActivityType.Rotate;
            param = { 'theta': -5 };
        }
        else if (id == 'rotp15') {
            actv = ActivityType.Rotate;
            param = { 'theta': 15 };
        }
        else if (id == 'rotm15') {
            actv = ActivityType.Rotate;
            param = { 'theta': -15 };
        }
        else if (id == 'rotp30') {
            actv = ActivityType.Rotate;
            param = { 'theta': 30 };
        }
        else if (id == 'rotm30') {
            actv = ActivityType.Rotate;
            param = { 'theta': -30 };
        }
        else if (id == 'hflip') {
            actv = ActivityType.Flip;
            param = { 'axis': 'hor' };
        }
        else if (id == 'vflip') {
            actv = ActivityType.Flip;
            param = { 'axis': 'ver' };
        }
        else if (id == 'shrink') {
            actv = ActivityType.Scale;
            param = { 'mag': 1 / 1.1 };
        }
        else if (id == 'grow') {
            actv = ActivityType.Scale;
            param = { 'mag': 1.1 };
        }
        else if (id == 'atom')
            this.buttonView.pushBank(new CommandBank(this.owner, CommandType.Atom));
        else if (id == 'bond')
            this.buttonView.pushBank(new CommandBank(this.owner, CommandType.Bond));
        else if (id == 'select')
            this.buttonView.pushBank(new CommandBank(this.owner, CommandType.Select));
        else if (id == 'move')
            this.buttonView.pushBank(new CommandBank(this.owner, CommandType.Move));
        else if (id == 'abbrev')
            this.buttonView.pushBank(new CommandBank(this.owner, CommandType.Abbrev));
        else if (id == 'sblock')
            this.buttonView.pushBank(new CommandBank(this.owner, CommandType.SBlock));
        else if (id == 'pblock')
            this.buttonView.pushBank(new CommandBank(this.owner, CommandType.PBlock));
        else if (id == 'dblock')
            this.buttonView.pushBank(new CommandBank(this.owner, CommandType.DBlock));
        else if (id == 'fblock')
            this.buttonView.pushBank(new CommandBank(this.owner, CommandType.FBlock));
        else if (id == 'noble')
            this.buttonView.pushBank(new CommandBank(this.owner, CommandType.Noble));
        else
            alert('Unhandled command: "' + id + '"');
        if (actv > 0) {
            new MoleculeActivity(this.owner, actv, param).execute();
        }
    }
    claimKey(event) {
        for (let listItems of [COMMANDS_MAIN, COMMANDS_ATOM, COMMANDS_BOND, COMMANDS_SELECT, COMMANDS_MOVE])
            for (let item of listItems) {
                if (ButtonBank.matchKey(event, item.mnemonic)) {
                    this.hitButton(item.id);
                    return true;
                }
            }
        return false;
    }
}
class DataSheetStream {
    static readXML(strXML) {
        var xmlDoc = jQuery.parseXML(strXML);
        if (xmlDoc == null)
            return null;
        var root = xmlDoc.documentElement;
        if (root == null)
            return null;
        var ds = new DataSheet();
        var summary = findNode(root, 'Summary');
        if (summary == null)
            return null;
        ds.setTitle(nodeText(findNode(summary, 'Title')));
        ds.setDescription(nodeText(findNode(summary, 'Description')));
        var extRoot = findNode(root, 'Extension');
        if (extRoot != null) {
            var extList = findNodes(extRoot, 'Ext');
            for (var n = 0; n < extList.length; n++) {
                var ext = extList[n];
                ds.appendExtension(ext.getAttribute("name"), ext.getAttribute("type"), nodeText(ext));
            }
        }
        var header = findNode(root, 'Header');
        var numCols = parseInt(header.getAttribute("ncols")), numRows = parseInt(header.getAttribute("nrows"));
        var colList = findNodes(header, 'Column');
        if (colList.length != numCols)
            return null;
        for (var n = 0; n < numCols; n++) {
            var col = colList[n];
            var id = parseInt(col.getAttribute("id"));
            if (id != n + 1)
                return null;
            ds.appendColumn(col.getAttribute("name"), col.getAttribute("type"), nodeText(col));
        }
        var row = findNode(root, 'Content').firstElementChild;
        var rowidx = 0;
        while (row) {
            if (parseInt(row.getAttribute("id")) != rowidx + 1)
                return null;
            ds.appendRow();
            var col = row.firstElementChild;
            while (col) {
                var colidx = parseInt(col.getAttribute("id")) - 1;
                var ct = ds.colType(colidx), val = nodeText(col);
                if (val == '') { }
                else if (ct == DataSheet.COLTYPE_MOLECULE)
                    ds.setObject(rowidx, colidx, val);
                else if (ct == DataSheet.COLTYPE_STRING)
                    ds.setString(rowidx, colidx, val);
                else if (ct == DataSheet.COLTYPE_REAL)
                    ds.setReal(rowidx, colidx, parseFloat(val));
                else if (ct == DataSheet.COLTYPE_INTEGER)
                    ds.setInteger(rowidx, colidx, parseInt(val));
                else if (ct == DataSheet.COLTYPE_BOOLEAN)
                    ds.setBoolean(rowidx, colidx, val == 'true' ? true : val == 'false' ? false : null);
                else if (ct == DataSheet.COLTYPE_EXTEND)
                    ds.setExtend(rowidx, colidx, val);
                col = col.nextElementSibling;
                colidx++;
            }
            row = row.nextElementSibling;
            rowidx++;
        }
        return ds;
    }
    static writeXML(ds) {
        var xml = new DOMParser().parseFromString('<DataSheet/>', 'text/xml');
        var summary = xml.createElement('Summary');
        xml.documentElement.appendChild(summary);
        var title = xml.createElement('Title'), descr = xml.createElement('Description');
        summary.appendChild(title);
        title.appendChild(xml.createTextNode(ds.getTitle()));
        summary.appendChild(descr);
        descr.appendChild(xml.createCDATASection(ds.getDescription()));
        var extension = xml.createElement('Extension');
        xml.documentElement.appendChild(extension);
        for (var n = 0; n < ds.numExtensions; n++) {
            var ext = xml.createElement('Ext');
            extension.appendChild(ext);
            ext.setAttribute('name', ds.getExtName(n));
            ext.setAttribute('type', ds.getExtType(n));
            ext.appendChild(xml.createCDATASection(ds.getExtData(n)));
        }
        var header = xml.createElement('Header');
        xml.documentElement.appendChild(header);
        header.setAttribute('nrows', ds.numRows.toString());
        header.setAttribute('ncols', ds.numCols.toString());
        for (var n = 0; n < ds.numCols; n++) {
            var column = xml.createElement('Column');
            header.appendChild(column);
            column.setAttribute('id', (n + 1).toString());
            column.setAttribute('name', ds.colName(n));
            column.setAttribute('type', ds.colType(n));
            column.appendChild(xml.createTextNode(ds.colDescr(n)));
        }
        var content = xml.createElement('Content');
        xml.documentElement.appendChild(content);
        for (var r = 0; r < ds.numRows; r++) {
            var row = xml.createElement('Row');
            row.setAttribute('id', (r + 1).toString());
            content.appendChild(row);
            for (var c = 0; c < ds.numCols; c++) {
                var cell = xml.createElement('Cell');
                cell.setAttribute('id', (c + 1).toString());
                row.appendChild(cell);
                var ct = ds.colType(c);
                var txtNode = null;
                if (ds.isNull(r, c)) { }
                else if (ct == DataSheet.COLTYPE_MOLECULE) {
                    let obj = ds.getObject(r, c);
                    if (obj instanceof Molecule)
                        obj = MoleculeStream.writeNative(obj);
                    txtNode = xml.createCDATASection(obj);
                }
                else if (ct == DataSheet.COLTYPE_STRING)
                    txtNode = xml.createCDATASection(ds.getString(r, c));
                else if (ct == DataSheet.COLTYPE_REAL)
                    txtNode = xml.createTextNode(ds.getReal(r, c).toString());
                else if (ct == DataSheet.COLTYPE_INTEGER)
                    txtNode = xml.createTextNode(ds.getInteger(r, c).toString());
                else if (ct == DataSheet.COLTYPE_BOOLEAN)
                    txtNode = xml.createTextNode(ds.getBoolean(r, c).toString());
                else if (ct == DataSheet.COLTYPE_EXTEND)
                    txtNode = xml.createCDATASection(ds.getExtend(r, c));
                if (txtNode != null)
                    cell.appendChild(txtNode);
            }
        }
        return new XMLSerializer().serializeToString(xml.documentElement);
    }
    ;
}
class TemplateBank extends ButtonBank {
    constructor(owner, group) {
        super();
        this.owner = owner;
        this.group = group;
        this.subgroups = null;
        this.templates = null;
    }
    init() {
        let policy = RenderPolicy.defaultBlackOnWhite();
        policy.data.pointScale = 10;
        policy.data.lineSize *= 1.5;
        policy.data.bondSep *= 1.5;
        let sz = this.buttonView.idealSize;
        if (this.group == null) {
            if (RPC.BASE_URL != null) {
                let input = { 'tokenID': this.owner.tokenID, 'policy': policy.data, 'size': [sz - 4, sz - 4] };
                let fcn = (result, error) => {
                    if (!result) {
                        alert('Setup of TemplateBank failed: ' + error.message);
                        return;
                    }
                    this.subgroups = result;
                    this.buttonView.refreshBank();
                };
                Func.getDefaultTemplateGroups(input, fcn);
            }
            else if (RPC.RESOURCE_URL != null) {
                if (TemplateBank.RESOURCE_DATA == null)
                    this.loadResourceData(() => this.prepareSubGroups());
                else
                    this.prepareSubGroups();
            }
        }
        else {
            if (RPC.BASE_URL != null) {
                let input = { 'tokenID': this.owner.tokenID, 'policy': policy.data, 'size': [sz - 4, sz - 4], 'group': this.group };
                let fcn = (result, error) => {
                    if (!result) {
                        alert('Setup of TemplateBank failed: ' + error.message);
                        return;
                    }
                    this.templates = result;
                    this.buttonView.refreshBank();
                };
                Func.getDefaultTemplateStructs(input, fcn);
            }
            else if (RPC.RESOURCE_URL != null) {
                if (TemplateBank.RESOURCE_DATA == null)
                    this.loadResourceData(() => this.prepareTemplates());
                else
                    this.prepareTemplates();
            }
        }
    }
    update() {
        if (this.subgroups == null && this.templates == null)
            return;
        this.buttons = [];
        if (this.group == null)
            this.populateGroups();
        else
            this.populateTemplates();
    }
    populateGroups() {
        let groups = this.subgroups.groups, titles = this.subgroups.titles, preview = this.subgroups.preview;
        for (let n = 0; n < groups.length; n++) {
            this.buttons.push({ 'id': groups[n], 'metavec': preview[n], 'helpText': titles[n] });
        }
    }
    populateTemplates() {
        let names = this.templates.names, abbrev = this.templates.abbrev, mnemonic = this.templates.mnemonic, preview = this.templates.preview;
        for (let n = 0; n < names.length; n++) {
            this.buttons.push({ 'id': n.toString(), 'metavec': preview[n], 'helpText': names[n] });
        }
    }
    hitButton(id) {
        if (this.group == null) {
            this.buttonView.pushBank(new TemplateBank(this.owner, id));
        }
        else {
            let idx = parseInt(id);
            let param = { 'fragNative': this.templates.molecules[idx] };
            new MoleculeActivity(this.owner, ActivityType.TemplateFusion, param).execute();
        }
    }
    loadResourceData(onComplete) {
        let roster = [
            'rings',
            'termgrp',
            'funcgrp',
            'nonplrings',
            'largerings',
            'crownethers',
            'ligmonodent',
            'ligbident',
            'ligtrident',
            'ligmultident',
            'cagecmplx',
            'aminoacids',
            'biomolecules',
            'saccharides'
        ];
        TemplateBank.RESOURCE_LIST = roster.slice(0);
        TemplateBank.RESOURCE_DATA = [];
        let grabNext = () => {
            if (roster.length == 0) {
                onComplete();
                return;
            }
            let url = RPC.RESOURCE_URL + '/data/templates/' + roster.shift() + '.ds';
            $.ajax({
                'url': url,
                'type': 'GET',
                'dataType': 'text',
                'success': (dsstr) => {
                    TemplateBank.RESOURCE_DATA.push(DataSheetStream.readXML(dsstr));
                    grabNext();
                }
            });
        };
        grabNext();
    }
    prepareSubGroups() {
        this.subgroups = { 'groups': TemplateBank.RESOURCE_LIST, 'titles': [], 'preview': [] };
        let sz = this.buttonView.idealSize, msz = 0.5 * (sz - 2);
        let policy = RenderPolicy.defaultBlackOnWhite();
        policy.data.pointScale = 10;
        let effects = new RenderEffects();
        let measure = new OutlineMeasurement(0, 0, policy.data.pointScale);
        for (let ds of TemplateBank.RESOURCE_DATA) {
            this.subgroups.titles.push(ds.getTitle());
            let colMol = ds.firstColOfType(DataSheet.COLTYPE_MOLECULE);
            let metavec = new MetaVector();
            for (let n = 0, idx = 0; idx < 4 && n < ds.numRows; n++) {
                let mol = ds.getMolecule(n, colMol);
                if (MolUtil.isBlank(mol))
                    continue;
                let layout = new ArrangeMolecule(mol, measure, policy, effects);
                layout.arrange();
                let col = (idx % 2), row = Math.floor(idx / 2);
                layout.squeezeInto(1 + col * msz, 1 + row * msz, msz, msz, 1);
                new DrawMolecule(layout, metavec).draw();
                idx++;
            }
            metavec.width = sz;
            metavec.height = sz;
            this.subgroups.preview.push(metavec);
        }
        this.buttonView.refreshBank();
    }
    prepareTemplates() {
        let idx = TemplateBank.RESOURCE_LIST.indexOf(this.group);
        let ds = TemplateBank.RESOURCE_DATA[idx];
        this.templates = { 'molecules': [], 'names': [], 'abbrev': [], 'mnemonic': [], 'preview': [] };
        let sz = this.buttonView.idealSize;
        let policy = RenderPolicy.defaultBlackOnWhite();
        policy.data.pointScale = 12;
        let effects = new RenderEffects();
        let measure = new OutlineMeasurement(0, 0, policy.data.pointScale);
        let colMol = ds.findColByName("Molecule");
        let colName = ds.findColByName("Name");
        let colAbbrev = ds.findColByName("Abbrev");
        let colMnemonic = ds.findColByName("Mnemonic");
        for (let n = 0; n < ds.numRows; n++) {
            let mol = ds.getMolecule(n, colMol);
            this.templates.molecules.push(mol.toString());
            this.templates.names.push(ds.getString(n, colName));
            this.templates.abbrev.push(ds.getString(n, colAbbrev));
            this.templates.mnemonic.push(ds.getString(n, colMnemonic));
            let layout = new ArrangeMolecule(mol, measure, policy, effects);
            layout.arrange();
            layout.squeezeInto(0, 0, sz, sz, 2);
            let metavec = new MetaVector();
            new DrawMolecule(layout, metavec).draw();
            metavec.width = sz;
            metavec.height = sz;
            this.templates.preview.push(metavec);
        }
        this.buttonView.refreshBank();
    }
}
TemplateBank.RESOURCE_LIST = null;
TemplateBank.RESOURCE_DATA = null;
class FusionBank extends ButtonBank {
    constructor(owner) {
        super();
        this.owner = owner;
    }
    update() {
        this.buttons = [];
        this.buttons.push({ 'id': 'accept', 'imageFN': 'GenericAccept', 'helpText': 'Apply this template.' });
        this.buttons.push({ 'id': 'prev', 'imageFN': 'TemplatePrev', 'helpText': 'Show previous fusion option.' });
        this.buttons.push({ 'id': 'next', 'imageFN': 'TemplateNext', 'helpText': 'Show next fusion option.' });
    }
    hitButton(id) {
        if (id == 'accept')
            this.owner.templateAccept();
        else if (id == 'prev')
            this.owner.templateRotate(-1);
        else if (id == 'next')
            this.owner.templateRotate(1);
    }
    bankClosed() {
        this.owner.clearPermutations();
    }
}
const TOOLS_MAIN = [
    { 'id': 'arrow', 'imageFN': 'ToolSelect', 'helpText': 'Selection tool.', 'mnemonic': 'Escape' },
    { 'id': 'rotate', 'imageFN': 'ToolRotate', 'helpText': 'Rotate subject atoms.', 'mnemonic': 'R' },
    { 'id': 'pan', 'imageFN': 'ToolPan', 'helpText': 'Pan the viewport around the screen.', 'mnemonic': 'V' },
    { 'id': 'drag', 'imageFN': 'ToolDrag', 'helpText': 'Drag selected atoms to new positions.', 'mnemonic': 'G' },
    { 'id': 'erasor', 'imageFN': 'ToolErasor', 'helpText': 'Delete atoms or bonds by selecting.', 'mnemonic': 'Delete' },
    { 'id': 'bondOrder0', 'imageFN': 'BondZero', 'helpText': 'Create or change a bond to zero order.', 'mnemonic': '' },
    { 'id': 'bondOrder1', 'imageFN': 'BondOne', 'helpText': 'Create or change a bond to single.', 'mnemonic': 'Shift-1' },
    { 'id': 'bondOrder2', 'imageFN': 'BondTwo', 'helpText': 'Create or change a bond to double.', 'mnemonic': 'Shift-2' },
    { 'id': 'bondOrder3', 'imageFN': 'BondThree', 'helpText': 'Create or change a bond to triple.', 'mnemonic': 'Shift-3' },
    { 'id': 'bondUnknown', 'imageFN': 'BondSquig', 'helpText': 'Create or change a bond to unknown stereochemistry.', 'mnemonic': 'Shift-4' },
    { 'id': 'bondInclined', 'imageFN': 'BondUp', 'helpText': 'Create or change a bond to up-wedge.', 'mnemonic': 'Shift-5' },
    { 'id': 'bondDeclined', 'imageFN': 'BondDown', 'helpText': 'Create or change a bond to down-wedge.', 'mnemonic': 'Shift-6' },
    { 'id': 'ringAliph', 'imageFN': 'ToolRing', 'helpText': 'Create plain ring.', 'mnemonic': 'Shift-7' },
    { 'id': 'ringArom', 'imageFN': 'ToolArom', 'helpText': 'Create aromatic ring.', 'mnemonic': 'Shift-8' },
    { 'id': 'atomPlus', 'imageFN': 'AtomPlus', 'helpText': 'Increase charge on atom.', 'mnemonic': '' },
    { 'id': 'atomMinus', 'imageFN': 'AtomMinus', 'helpText': 'Decrease charge on atom.', 'mnemonic': '' },
    { 'id': 'elementC', 'text': 'C', 'helpText': 'Change elements to Carbon.', 'mnemonic': '' },
    { 'id': 'elementN', 'text': 'N', 'helpText': 'Change elements to Nitrogen.', 'mnemonic': '' },
    { 'id': 'elementO', 'text': 'O', 'helpText': 'Change elements to Oxygen.', 'mnemonic': '' },
    { 'id': 'elementS', 'text': 'S', 'helpText': 'Change elements to Sulfur.', 'mnemonic': '' },
    { 'id': 'elementP', 'text': 'P', 'helpText': 'Change elements to Phosphorus.', 'mnemonic': '' },
    { 'id': 'elementH', 'text': 'H', 'helpText': 'Change elements to Hydrogen.', 'mnemonic': '' },
    { 'id': 'elementF', 'text': 'F', 'helpText': 'Change elements to Fluorine.', 'mnemonic': '' },
    { 'id': 'elementCl', 'text': 'Cl', 'helpText': 'Change elements to Chlorine.', 'mnemonic': '' },
    { 'id': 'elementBr', 'text': 'Br', 'helpText': 'Change elements to Bromine.', 'mnemonic': '' },
    { 'id': 'elementA', 'text': 'A', 'helpText': 'Pick other element.', 'mnemonic': 'O' }
];
class ToolBank extends ButtonBank {
    constructor(owner) {
        super();
        this.owner = owner;
        this.initiallySelected = 'arrow';
    }
    update() {
        for (let btn of TOOLS_MAIN)
            this.buttons.push(btn);
        this.buttonView.setSelectedButton('arrow');
    }
    ;
    hitButton(id) {
        this.buttonView.setSelectedButton(id);
    }
    claimKey(event) {
        for (let item of TOOLS_MAIN) {
            if (ButtonBank.matchKey(event, item.mnemonic)) {
                this.hitButton(item.id);
                return true;
            }
        }
        return false;
    }
}
var DraggingTool;
(function (DraggingTool) {
    DraggingTool[DraggingTool["None"] = 0] = "None";
    DraggingTool[DraggingTool["Press"] = 1] = "Press";
    DraggingTool[DraggingTool["Lasso"] = 2] = "Lasso";
    DraggingTool[DraggingTool["Pan"] = 3] = "Pan";
    DraggingTool[DraggingTool["Zoom"] = 4] = "Zoom";
    DraggingTool[DraggingTool["Rotate"] = 5] = "Rotate";
    DraggingTool[DraggingTool["Move"] = 6] = "Move";
    DraggingTool[DraggingTool["Erasor"] = 7] = "Erasor";
    DraggingTool[DraggingTool["Atom"] = 8] = "Atom";
    DraggingTool[DraggingTool["Bond"] = 9] = "Bond";
    DraggingTool[DraggingTool["Charge"] = 10] = "Charge";
    DraggingTool[DraggingTool["Ring"] = 11] = "Ring";
})(DraggingTool || (DraggingTool = {}));
var globalMoleculeClipboard = null;
class Sketcher extends Widget {
    constructor() {
        super();
        this.mol = null;
        this.policy = null;
        this.width = 0;
        this.height = 0;
        this.border = 0x808080;
        this.background = 0xF8F8F8;
        this.useToolBank = true;
        this.useCommandBank = true;
        this.useTemplateBank = true;
        this.debugOutput = undefined;
        this.beenSetup = false;
        this.undoStack = [];
        this.redoStack = [];
        this.spanBackground = null;
        this.canvasUnder = null;
        this.canvasMolecule = null;
        this.canvasOver = null;
        this.divMessage = null;
        this.fadeWatermark = 0;
        this.layout = null;
        this.metavec = null;
        this.guidelines = null;
        this.toolView = null;
        this.commandView = null;
        this.templateView = null;
        this.offsetX = 0;
        this.offsetY = 0;
        this.pointScale = 1;
        this.currentAtom = 0;
        this.currentBond = 0;
        this.hoverAtom = 0;
        this.hoverBond = 0;
        this.selectedMask = null;
        this.filthy = false;
        this.dragType = DraggingTool.None;
        this.opAtom = 0;
        this.opBond = 0;
        this.opBudged = false;
        this.opShift = false;
        this.opCtrl = false;
        this.opAlt = false;
        this.toolAtomSymbol = '';
        this.toolBondOrder = 0;
        this.toolBondType = 0;
        this.toolChargeDelta = 0;
        this.toolRingArom = false;
        this.toolRingFreeform = false;
        this.toolRotateIncr = 0;
        this.lassoX = null;
        this.lassoY = null;
        this.lassoMask = null;
        this.clickX = 0;
        this.clickY = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.dragGuides = null;
        this.templatePerms = null;
        this.currentPerm = 0;
        this.fusionBank = null;
        this.fakeTextArea = null;
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }
    defineMolecule(mol, withAutoScale = true, withStashUndo = false) {
        if (withStashUndo)
            this.stashUndo();
        this.stopTemplateFusion();
        this.mol = mol.clone();
        this.guidelines = [];
        for (let n = 1; n <= this.mol.numAtoms; n++) {
            for (let sprout of SketchUtil.guidelineSprouts(this.mol, n))
                this.guidelines.push(sprout);
        }
        if (!this.beenSetup)
            return;
        this.layout = null;
        this.metavec = null;
        this.hoverAtom = 0;
        this.hoverBond = 0;
        if (!withAutoScale) {
            let effects = this.sketchEffects();
            this.layout = new ArrangeMolecule(this.mol, this, this.policy, effects);
            this.layout.arrange();
            this.metavec = new MetaVector();
            new DrawMolecule(this.layout, this.metavec).draw();
            this.delayedRedraw();
        }
        else
            this.autoScale();
    }
    defineMoleculeString(molsk, withAutoScale, withStashUndo) {
        this.defineMolecule(Molecule.fromString(molsk), withAutoScale, withStashUndo);
    }
    defineRenderPolicy(policy) {
        this.policy = policy;
        this.pointScale = policy.data.pointScale;
    }
    clearMolecule() { this.defineMolecule(new Molecule(), true, true); }
    getMolecule() { return this.mol.clone(); }
    setup(callback) {
        ButtonView.prepare(() => {
            this.beenSetup = true;
            if (this.mol == null)
                this.mol = new Molecule();
            if (this.policy == null) {
                this.policy = RenderPolicy.defaultColourOnWhite();
                this.pointScale = this.policy.data.pointScale;
            }
            let effects = this.sketchEffects();
            this.layout = new ArrangeMolecule(this.mol, this, this.policy, effects);
            this.layout.arrange();
            this.centreAndShrink();
            this.metavec = new MetaVector();
            new DrawMolecule(this.layout, this.metavec).draw();
            if (callback)
                callback();
        });
    }
    render(parent) {
        if (!this.width || !this.height)
            throw 'Sketcher.render called without width and height';
        super.render(parent);
        this.container = $('<div></div>').appendTo(this.content);
        this.container.attr('style', 'position: relative; width: ' + this.width + 'px; height: ' + this.height + 'px;');
        this.container.css('background-color', colourCanvas(this.background));
        this.container.css('border', '1px solid ' + colourCanvas(this.border));
        this.container.css('border-radius', '4px');
        this.container.css('outline', 'none');
        this.container.attr('tabindex', '0');
        this.container.focus();
        let canvasStyle = 'position: absolute; left: 0; top: 0;';
        canvasStyle += ' pointer-events: none;';
        this.canvasUnder = newElement(this.container, 'canvas', { 'width': this.width, 'height': this.height, 'style': canvasStyle });
        this.canvasMolecule = newElement(this.container, 'canvas', { 'width': this.width, 'height': this.height, 'style': canvasStyle });
        this.canvasOver = newElement(this.container, 'canvas', { 'width': this.width, 'height': this.height, 'style': canvasStyle });
        this.divMessage = $('<div></div>').appendTo(this.container);
        this.divMessage.attr('style', canvasStyle);
        this.divMessage.css('width', this.width + 'px');
        this.divMessage.css('height', this.height + 'px');
        this.divMessage.css('text-align', 'center');
        this.divMessage.css('vertical-align', 'middle');
        this.divMessage.css('font-weight', 'bold');
        this.divMessage.css('font-size', '120%');
        this.centreAndShrink();
        this.redraw();
        let reserveHeight = 0;
        if (this.useCommandBank) {
            this.commandView = new ButtonView('bottom', 0, 0, this.width, this.height);
            this.commandView.setHasBigButtons(false);
            this.commandView.pushBank(new CommandBank(this));
            this.commandView.render(this.container);
            reserveHeight = this.commandView.height;
        }
        if (this.useToolBank) {
            this.toolView = new ButtonView('left', 0, 0, this.width, this.height - reserveHeight);
            this.toolView.setHasBigButtons(false);
            this.toolView.pushBank(new ToolBank(this));
            this.toolView.render(this.container);
        }
        if (this.useTemplateBank) {
            this.templateView = new ButtonView('right', 0, 0, this.width, this.height - reserveHeight);
            this.templateView.setHasBigButtons(true);
            this.templateView.pushBank(new TemplateBank(this, null));
            this.templateView.render(this.container);
        }
        this.container.click((event) => this.mouseClick(event));
        this.container.dblclick((event) => this.mouseDoubleClick(event));
        this.container.mousedown((event) => { event.preventDefault(); this.mouseDown(event); });
        this.container.mouseup((event) => this.mouseUp(event));
        this.container.mouseover((event) => this.mouseOver(event));
        this.container.mouseout((event) => this.mouseOut(event));
        this.container.mousemove((event) => this.mouseMove(event));
        this.container.keypress((event) => this.keyPressed(event));
        this.container.keydown((event) => this.keyDown(event));
        this.container.keyup((event) => this.keyUp(event));
        this.container[0].addEventListener('dragover', (event) => {
            event.stopPropagation();
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
        });
        this.container[0].addEventListener('drop', (event) => {
            event.stopPropagation();
            event.preventDefault();
            this.dropInto(event.dataTransfer);
        });
        document.addEventListener('paste', (e) => {
            let wnd = window;
            if (wnd.clipboardData && wnd.clipboardData.getData)
                this.pasteText(wnd.clipboardData.getData('Text'));
            else if (e.clipboardData && e.clipboardData.getData)
                this.pasteText(e.clipboardData.getData('text/plain'));
            e.preventDefault();
            return false;
        });
    }
    changeSize(width, height) {
        if (width == this.width && height == this.height)
            return;
        this.width = width;
        this.height = height;
        for (let widget of [this.container, this.canvasUnder, this.canvasMolecule, this.canvasOver]) {
            $(widget).css('width', width + 'px');
            $(widget).css('height', height + 'px');
        }
        for (let btnv of [this.commandView, this.toolView, this.templateView])
            if (btnv) {
                btnv.setParentSize(width, height);
                btnv.refreshBank();
            }
        this.autoScale();
    }
    showMessage(msg, isError = false) {
        let watermark = ++this.fadeWatermark;
        this.divMessage.css('color', isError ? '#FF0000' : '#008000');
        this.divMessage.text(msg);
        let szLeft = (this.toolView == null ? 0 : this.toolView.width) + 2;
        let szRight = (this.templateView == null ? 0 : this.templateView.width) + 2;
        let szBottom = (this.commandView == null ? 0 : this.commandView.height) + 2;
        this.divMessage.css('left', szLeft + 'px');
        this.divMessage.css('width', (this.width - szLeft - szRight) + 'px');
        this.divMessage.css('height', (this.height - szBottom) + 'px');
        window.setTimeout(() => {
            if (watermark == this.fadeWatermark)
                this.divMessage.text('');
        }, 5000);
    }
    clearMessage() {
        if (this.divMessage.text() == '')
            return;
        this.fadeWatermark++;
        this.divMessage.text('');
    }
    autoScale() {
        this.pointScale = this.policy.data.pointScale;
        let effects = this.sketchEffects();
        this.layout = new ArrangeMolecule(this.mol, this, this.policy, effects);
        this.layout.arrange();
        this.centreAndShrink();
        this.metavec = new MetaVector();
        new DrawMolecule(this.layout, this.metavec).draw();
        this.layoutTemplatePerm();
        this.delayedRedraw();
    }
    anySelected() {
        if (this.selectedMask == null)
            return false;
        for (let n = 0; n < this.selectedMask.length; n++)
            if (this.selectedMask[n])
                return true;
        return false;
    }
    getSelected(N) {
        if (this.selectedMask == null || N > this.selectedMask.length)
            return false;
        return this.selectedMask[N - 1];
    }
    setSelected(N, sel) {
        if (this.selectedMask == null) {
            this.selectedMask = new Array(this.mol.numAtoms);
            for (let n = this.selectedMask.length - 1; n >= 0; n--)
                this.selectedMask[n] = false;
        }
        while (this.selectedMask.length < this.mol.numAtoms) {
            this.selectedMask.push(false);
        }
        this.selectedMask[N - 1] = sel;
        this.delayedRedraw();
    }
    clearSubject() {
        if (this.currentAtom == 0 && this.currentBond == 0 && Vec.allFalse(this.selectedMask))
            return;
        this.currentAtom = 0;
        this.currentBond = 0;
        this.selectedMask = Vec.booleanArray(false, this.mol.numAtoms);
        this.delayedRedraw();
    }
    getLassoed(N) {
        if (this.lassoMask == null || N > this.lassoMask.length)
            return false;
        return this.lassoMask[N - 1];
    }
    getState() {
        let state = {
            'mol': this.mol.clone(),
            'currentAtom': this.currentAtom,
            'currentBond': this.currentBond,
            'selectedMask': this.selectedMask == null ? null : this.selectedMask.slice(0)
        };
        return state;
    }
    setState(state, withStashUndo = true) {
        if (withStashUndo)
            this.stashUndo();
        this.stopTemplateFusion();
        if (state.mol != null)
            this.defineMolecule(state.mol.clone(), false, withStashUndo);
        if (state.currentAtom >= 0)
            this.currentAtom = state.currentAtom;
        if (state.currentBond >= 0)
            this.currentBond = state.currentBond;
        if (state.selectedMask != null)
            this.selectedMask = state.selectedMask == null ? null : state.selectedMask.slice(0);
        this.delayedRedraw();
    }
    stashUndo() {
        if (this.undoStack.length == 0 && this.mol.numAtoms == 0)
            return;
        let state = this.getState();
        this.undoStack.push(state);
        while (this.undoStack.length > Sketcher.UNDO_SIZE) {
            this.undoStack.splice(0, 1);
        }
        this.redoStack = [];
    }
    setPermutations(perms) {
        this.templatePerms = perms;
        this.pickTemplatePermutation(0);
        this.fusionBank = new FusionBank(this);
        this.templateView.pushBank(this.fusionBank);
        if (this.mol.numAtoms == 0)
            this.centreAndShrink();
    }
    stopTemplateFusion() {
        if (this.fusionBank != null)
            this.templateView.popBank();
    }
    clearPermutations() {
        if (this.templatePerms == null)
            return;
        this.templatePerms = null;
        this.delayedRedraw();
        this.fusionBank = null;
    }
    templateAccept() {
        let mol = Molecule.fromString(this.templatePerms[this.currentPerm].mol);
        this.templateView.popBank();
        this.defineMolecule(mol, false, true);
    }
    templateRotate(dir) {
        let idx = (this.currentPerm + dir) % this.templatePerms.length;
        if (idx < 0)
            idx += this.templatePerms.length;
        this.pickTemplatePermutation(idx);
    }
    canUndo() { return this.undoStack.length > 0; }
    canRedo() { return this.redoStack.length > 0; }
    performUndo() {
        if (this.undoStack.length == 0)
            return;
        let state = this.getState();
        this.redoStack.push(state);
        this.setState(this.undoStack.pop(), false);
    }
    performRedo() {
        if (this.redoStack.length == 0)
            return;
        let state = this.getState();
        this.undoStack.push(state);
        this.setState(this.redoStack.pop(), false);
    }
    performCopy(mol) {
        globalMoleculeClipboard = mol.clone();
        let cookies = new Cookies();
        if (cookies.numMolecules() > 0)
            cookies.stashMolecule(mol);
        if (this.fakeTextArea == null) {
            this.fakeTextArea = document.createElement('textarea');
            this.fakeTextArea.style.fontSize = '12pt';
            this.fakeTextArea.style.border = '0';
            this.fakeTextArea.style.padding = '0';
            this.fakeTextArea.style.margin = '0';
            this.fakeTextArea.style.position = 'fixed';
            this.fakeTextArea.style['left'] = '-9999px';
            this.fakeTextArea.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
            this.fakeTextArea.setAttribute('readonly', '');
            document.body.appendChild(this.fakeTextArea);
        }
        this.fakeTextArea.value = mol.toString();
        this.fakeTextArea.select();
        document.execCommand('copy');
    }
    performPaste() {
        let cookies = new Cookies();
        if (cookies.numMolecules() == 0) {
            if (MolUtil.notBlank(globalMoleculeClipboard))
                this.pasteMolecule(globalMoleculeClipboard);
            return;
        }
        let dlg = new PickRecent(cookies, 1);
        dlg.callbackPick1 = (mol) => this.pasteMolecule(mol);
        dlg.open();
    }
    zoom(mag) {
        let cx = 0.5 * this.width, cy = 0.5 * this.height;
        let newScale = Math.min(10 * this.policy.data.pointScale, Math.max(0.1 * this.policy.data.pointScale, this.pointScale * mag));
        if (newScale == this.pointScale)
            return;
        this.offsetX = cx - (newScale / this.pointScale) * (cx - this.offsetX);
        this.offsetY = cy - (newScale / this.pointScale) * (cy - this.offsetY);
        this.pointScale = newScale;
        let effects = this.sketchEffects();
        this.layout = new ArrangeMolecule(this.mol, this, this.policy, effects);
        this.layout.arrange();
        this.metavec = new MetaVector();
        new DrawMolecule(this.layout, this.metavec).draw();
        this.layoutTemplatePerm();
        this.delayedRedraw();
    }
    pasteText(str) {
        let mol = MoleculeStream.readUnknown(str);
        if (mol != null)
            this.pasteMolecule(mol);
        else
            alert('Text from clipboard is not a valid molecule.');
    }
    pasteMolecule(mol) {
        if (this.mol.numAtoms == 0) {
            this.defineMolecule(mol, true, true);
            return;
        }
        let param = { 'fragNative': mol.toString() };
        new MoleculeActivity(this, ActivityType.TemplateFusion, param).execute();
    }
    pickTemplatePermutation(idx) {
        let perm = this.templatePerms[idx];
        this.currentPerm = idx;
        this.layoutTemplatePerm();
        this.delayedRedraw();
    }
    scale() { return this.pointScale; }
    angToX(ax) {
        return ax * this.pointScale + this.offsetX;
    }
    angToY(ay) {
        return ay * -this.pointScale + this.offsetY;
    }
    xToAng(px) {
        return (px - this.offsetX) / this.pointScale;
    }
    yToAng(py) {
        return (py - this.offsetY) / -this.pointScale;
    }
    scaleToAng(scale) { return scale / this.pointScale; }
    angToScale(ang) { return ang * this.pointScale; }
    yIsUp() { return false; }
    measureText(str, fontSize) { return FontData.main.measureText(str, fontSize); }
    centreAndShrink() {
        if (this.mol.numAtoms == 0 || this.layout == null) {
            this.offsetX = 0.5 * this.width;
            this.offsetY = 0.5 * this.height;
            this.pointScale = this.policy.data.pointScale;
            return;
        }
        let bounds = this.layout.determineBoundary(0);
        let limW = this.width - 6, limH = this.height - 6;
        let natW = bounds[2] - bounds[0], natH = bounds[3] - bounds[1];
        let scale = 1;
        if (natW > limW) {
            let down = limW / natW;
            scale *= down;
            natW *= down;
            natH *= down;
        }
        if (natH > limH) {
            let down = limH / natH;
            scale *= down;
            natW *= down;
            natH *= down;
        }
        if (scale < 1) {
            this.pointScale *= scale;
            this.layout.offsetEverything(this.offsetX * scale, this.offsetY * scale);
            this.layout.scaleEverything(scale);
            bounds = this.layout.determineBoundary(0);
        }
        let dx = 0.5 * (limW - natW) - bounds[0], dy = 0.5 * (limH - natH) - bounds[1];
        this.offsetX += dx;
        this.offsetY += dy;
        this.layout.offsetEverything(dx, dy);
    }
    layoutTemplatePerm() {
        if (this.currentPerm < 0 || this.templatePerms == null)
            return;
        let perm = this.templatePerms[this.currentPerm];
        let tpolicy = new RenderPolicy(this.policy.data);
        tpolicy.data.foreground = 0x808080;
        tpolicy.data.atomCols = tpolicy.data.atomCols.slice(0);
        for (let n in tpolicy.data.atomCols)
            tpolicy.data.atomCols[n] = 0x808080;
        let effects = new RenderEffects();
        let layout = new ArrangeMolecule(Molecule.fromString(perm.display), this, tpolicy, effects);
        layout.arrange();
        perm.metavec = new MetaVector();
        new DrawMolecule(layout, perm.metavec).draw();
    }
    redraw() {
        this.filthy = false;
        this.redrawUnder();
        this.redrawMolecule();
        this.redrawOver();
    }
    redrawUnder() {
        let HOVER_COL = 0xE0E0E0;
        let CURRENT_COL = 0xA0A0A0, CURRENT_BORD = 0x808080;
        let SELECT_COL = 0xC0C0C0;
        let LASSO_COL = 0xD0D0D0;
        let density = pixelDensity();
        this.canvasUnder.width = this.width * density;
        this.canvasUnder.height = this.height * density;
        this.canvasUnder.style.width = this.width + 'px';
        this.canvasUnder.style.height = this.height + 'px';
        let ctx = this.canvasUnder.getContext('2d');
        ctx.save();
        ctx.scale(density, density);
        ctx.clearRect(0, 0, this.width, this.height);
        if (this.hoverAtom > 0) {
            let sz = 0;
            if (this.hoverAtom == this.currentAtom)
                sz += 0.1;
            if (this.getSelected(this.hoverAtom))
                sz += 0.1;
            if (this.currentBond > 0 && (this.mol.bondFrom(this.currentBond) == this.hoverAtom || this.mol.bondTo(this.currentBond) == this.hoverAtom))
                sz += 0.1;
            this.drawAtomShade(ctx, this.hoverAtom, HOVER_COL, -1, sz);
        }
        if (this.hoverBond > 0) {
            let sz = 0, bfr = this.mol.bondFrom(this.hoverBond), bto = this.mol.bondTo(this.hoverBond);
            if (this.hoverBond == this.currentBond)
                sz += 0.1;
            if (this.getSelected(bfr) && this.getSelected(bto))
                sz += 0.1;
            this.drawBondShade(ctx, this.hoverBond, HOVER_COL, -1, sz);
        }
        for (let n = 1; n <= this.mol.numBonds; n++) {
            let sz = n == this.currentBond ? 0.1 : 0;
            let bfr = this.mol.bondFrom(n), bto = this.mol.bondTo(n);
            let sfr = this.getSelected(bfr), sto = this.getSelected(bto), lfr = this.getLassoed(bfr), lto = this.getLassoed(bto);
            if (sfr && sto)
                this.drawBondShade(ctx, n, SELECT_COL, -1, sz);
            else if ((sfr || lfr) && (sto || lto))
                this.drawBondShade(ctx, n, LASSO_COL, -1, sz);
        }
        for (let n = 1; n <= this.mol.numAtoms; n++) {
            let sz = this.currentAtom == n ? 0.1 : 0;
            if (this.getSelected(n))
                this.drawAtomShade(ctx, n, SELECT_COL, -1, sz);
            else if (this.getLassoed(n))
                this.drawAtomShade(ctx, n, LASSO_COL, -1, sz);
        }
        if (this.currentAtom > 0) {
            this.drawAtomShade(ctx, this.currentAtom, CURRENT_COL, CURRENT_BORD, 0);
        }
        if (this.currentBond > 0) {
            let bfr = this.mol.bondFrom(this.currentBond), bto = this.mol.bondTo(this.currentBond);
            this.drawBondShade(ctx, this.currentBond, CURRENT_COL, CURRENT_BORD, 0);
        }
        if (this.dragType == DraggingTool.Move || (this.dragType == DraggingTool.Atom && this.opAtom > 0) || this.dragType == DraggingTool.Bond) {
            if (this.dragGuides != null && this.dragGuides.length > 0) {
                for (let g of this.dragGuides)
                    for (let n = 0; n < g.x.length; n++) {
                        let lw = this.policy.data.lineSize * this.pointScale;
                        ctx.strokeStyle = '#C0C0C0';
                        ctx.lineWidth = lw;
                        drawLine(ctx, g.sourceX, g.sourceY, g.destX[n], g.destY[n]);
                        ctx.beginPath();
                        ctx.ellipse(g.destX[n], g.destY[n], 2 * lw, 2 * lw, 0, 0, TWOPI, false);
                        ctx.fillStyle = '#C0C0C0';
                        ctx.fill();
                    }
            }
        }
        if (this.dragType == DraggingTool.Ring) {
            let [ringX, ringY] = this.determineFauxRing();
            let rsz = ringX == null ? 0 : ringX.length;
            if (rsz > 0) {
                let scale = this.pointScale;
                let lw = this.policy.data.lineSize * scale;
                ctx.strokeStyle = '#C0C0C0';
                ctx.lineWidth = lw;
                for (let n = 0; n < rsz; n++) {
                    let nn = n < rsz - 1 ? n + 1 : 0;
                    let x1 = this.angToX(ringX[n]), y1 = this.angToY(ringY[n]);
                    let x2 = this.angToX(ringX[nn]), y2 = this.angToY(ringY[nn]);
                    drawLine(ctx, x1, y1, x2, y2);
                }
                if (this.toolRingArom) {
                    let cx = 0, cy = 0;
                    for (let n = 0; n < rsz; n++) {
                        cx += ringX[n];
                        cy += ringY[n];
                    }
                    cx /= rsz;
                    cy /= rsz;
                    let rad = 0;
                    for (let n = 0; n < rsz; n++)
                        rad += norm_xy(ringX[n] - cx, ringY[n] - cy);
                    rad = this.angToScale(rad * 0.5 / rsz);
                    ctx.beginPath();
                    ctx.ellipse(this.angToX(cx), this.angToY(cy), rad, rad, 0, 0, TWOPI, false);
                    ctx.stroke();
                }
            }
        }
        ctx.restore();
    }
    redrawMolecule() {
        let density = pixelDensity();
        this.canvasMolecule.width = this.width * density;
        this.canvasMolecule.height = this.height * density;
        this.canvasMolecule.style.width = this.width + 'px';
        this.canvasMolecule.style.height = this.height + 'px';
        let ctx = this.canvasMolecule.getContext('2d');
        ctx.save();
        ctx.scale(density, density);
        ctx.clearRect(0, 0, this.width, this.height);
        if (this.metavec != null)
            this.metavec.renderContext(ctx);
        if (this.templatePerms != null) {
            let perm = this.templatePerms[this.currentPerm];
            if (perm.metavec != null)
                perm.metavec.renderContext(ctx);
        }
        ctx.restore();
    }
    redrawOver() {
        let density = pixelDensity();
        this.canvasOver.width = this.width * density;
        this.canvasOver.height = this.height * density;
        this.canvasOver.style.width = this.width + 'px';
        this.canvasOver.style.height = this.height + 'px';
        let ctx = this.canvasOver.getContext('2d');
        ctx.save();
        ctx.scale(density, density);
        ctx.clearRect(0, 0, this.width, this.height);
        if ((this.dragType == DraggingTool.Lasso || this.dragType == DraggingTool.Erasor) && this.lassoX.length > 1) {
            let erasing = this.dragType == DraggingTool.Erasor;
            let path = new Path2D();
            path.moveTo(this.lassoX[0], this.lassoY[0]);
            for (let n = 1; n < this.lassoX.length; n++)
                path.lineTo(this.lassoX[n], this.lassoY[n]);
            path.closePath();
            ctx.fillStyle = colourCanvas(erasing ? 0xD0FF0000 : 0xF0000000);
            ctx.fill(path);
            ctx.strokeStyle = erasing ? '#804040' : '#808080';
            ctx.lineWidth = 0.5;
            ctx.stroke(path);
        }
        if (this.dragType == DraggingTool.Rotate) {
            let [x0, y0, theta, magnitude] = this.determineDragTheta();
            let scale = this.pointScale;
            let lw = this.policy.data.lineSize * scale;
            ctx.strokeStyle = '#E0E0E0';
            ctx.lineWidth = 0.5 * lw;
            drawLine(ctx, x0, y0, x0 + magnitude, y0);
            ctx.strokeStyle = '#808080';
            ctx.lineWidth = lw;
            drawLine(ctx, x0, y0, x0 + magnitude * Math.cos(theta), y0 + magnitude * Math.sin(theta));
            ctx.beginPath();
            ctx.ellipse(x0, y0, 2 * lw, 2 * lw, 0, 0, TWOPI, false);
            ctx.fillStyle = '#808080';
            ctx.fill();
            for (let atom of this.subjectAtoms(true, false)) {
                let ax = this.angToX(this.mol.atomX(atom)), ay = this.angToY(this.mol.atomY(atom));
                let ang = Math.atan2(ay - y0, ax - x0), dist = norm_xy(ax - x0, ay - y0);
                let nx = x0 + dist * Math.cos(ang + theta), ny = y0 + dist * Math.sin(ang + theta);
                ctx.beginPath();
                ctx.ellipse(nx, ny, 2 * lw, 2 * lw, 0, 0, TWOPI, false);
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
        if (this.dragType == DraggingTool.Move) {
            let [dx, dy] = this.determineMoveDelta();
            let scale = this.pointScale;
            let lw = this.policy.data.lineSize * scale;
            for (let atom of this.subjectAtoms(false, true)) {
                let ax = this.angToX(this.mol.atomX(atom)), ay = this.angToY(this.mol.atomY(atom));
                ctx.beginPath();
                ctx.ellipse(ax + dx, ay + dy, 2 * lw, 2 * lw, 0, 0, TWOPI, false);
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
        if ((this.dragType == DraggingTool.Atom && this.opAtom > 0) || this.dragType == DraggingTool.Bond) {
            let element = this.dragType == DraggingTool.Atom ? this.toolAtomSymbol : 'C';
            let order = this.dragType == DraggingTool.Bond ? this.toolBondOrder : 1;
            let type = this.dragType == DraggingTool.Bond ? this.toolBondType : Molecule.BONDTYPE_NORMAL;
            this.drawOriginatingBond(ctx, element, order, type);
        }
        ctx.restore();
    }
    delayedRedraw() {
        if (this.canvasMolecule == null)
            return;
        this.filthy = true;
        window.setTimeout(() => { if (this.filthy)
            this.redraw(); }, 10);
    }
    pickObject(x, y) {
        if (this.layout == null)
            return 0;
        if (this.toolView != null) {
            let pos1 = this.container.position(), pos2 = this.toolView.content.position();
            if (this.toolView.withinOutline(x + pos1.left - pos2.left, y + pos1.top - pos2.top))
                return 0;
        }
        if (this.commandView != null) {
            let pos1 = this.container.position(), pos2 = this.commandView.content.position();
            if (this.toolView.withinOutline(x + pos1.left - pos2.left, y + pos1.top - pos2.top))
                return 0;
        }
        if (this.templateView != null) {
            let pos1 = this.container.position(), pos2 = this.templateView.content.position();
            if (this.toolView.withinOutline(x + pos1.left - pos2.left, y + pos1.top - pos2.top))
                return 0;
        }
        let limitDSQ = sqr(0.5 * this.pointScale);
        let bestItem = 0, bestDSQ;
        for (let n = 0; n < this.layout.numPoints(); n++) {
            let p = this.layout.getPoint(n);
            if (p.anum == 0)
                continue;
            let dx = Math.abs(x - p.oval.cx), dy = Math.abs(y - p.oval.cy);
            let dsq = norm2_xy(dx, dy);
            if (dsq > limitDSQ)
                continue;
            if (bestItem == 0 || dsq < bestDSQ) {
                bestItem = p.anum;
                bestDSQ = dsq;
            }
        }
        for (let n = 0; n < this.layout.numLines(); n++) {
            let l = this.layout.getLine(n);
            if (l.bnum == 0)
                continue;
            let x1 = l.line.x1, y1 = l.line.y1;
            let x2 = l.line.x2, y2 = l.line.y2;
            let bondDSQ = norm2_xy(x2 - x1, y2 - y1) * 0.25;
            let dsq = norm2_xy(x - 0.5 * (x1 + x2), y - 0.5 * (y1 + y2));
            if (dsq > bondDSQ)
                continue;
            if (bestItem == 0 || dsq < bestDSQ) {
                bestItem = -l.bnum;
                bestDSQ = dsq;
            }
        }
        return bestItem;
    }
    log(str, zap) {
        if (this.debugOutput) {
            if (zap)
                this.debugOutput.value = '';
            this.debugOutput.value = this.debugOutput.value + '' + str + '\n';
        }
    }
    drawAtomShade(ctx, atom, fillCol, borderCol, anghalo) {
        if (this.layout == null)
            return;
        let p = undefined;
        for (let n = 0; n < this.layout.numPoints(); n++)
            if (this.layout.getPoint(n).anum == atom) {
                p = this.layout.getPoint(n);
                break;
            }
        if (p == null)
            return;
        let minRad = 0.2 * this.pointScale, minRadSq = sqr(minRad);
        let cx = p.oval.cx, cy = p.oval.cy;
        let rad = Math.max(minRad, Math.max(p.oval.rw, p.oval.rh)) + (0.1 + anghalo) * this.pointScale;
        if (fillCol != -1) {
            ctx.beginPath();
            ctx.ellipse(cx, cy, rad, rad, 0, 0, TWOPI, true);
            ctx.fillStyle = colourCanvas(fillCol);
            ctx.fill();
        }
        if (borderCol != -1) {
            ctx.beginPath();
            ctx.ellipse(cx, cy, rad, rad, 0, 0, TWOPI, true);
            ctx.strokeStyle = colourCanvas(borderCol);
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }
    drawBondShade(ctx, bond, fillCol, borderCol, anghalo) {
        if (this.layout == null)
            return;
        let x1 = 0, y1 = 0, x2 = 0, y2 = 0, nb = 0, sz = 0;
        for (let n = 0; n < this.layout.numLines(); n++) {
            let l = this.layout.getLine(n);
            if (l.bnum != bond)
                continue;
            x1 += l.line.x1;
            y1 += l.line.y1;
            x2 += l.line.x2;
            y2 += l.line.y2;
            nb++;
            sz += l.size + (0.2 + anghalo) * this.pointScale;
        }
        if (nb == 0)
            return;
        let invNB = 1 / nb;
        sz *= invNB;
        x1 *= invNB;
        y1 *= invNB;
        x2 *= invNB;
        y2 *= invNB;
        let dx = x2 - x1, dy = y2 - y1, invDist = 1 / norm_xy(dx, dy);
        dx *= invDist;
        dy *= invDist;
        let ox = dy, oy = -dx;
        let path = new Path2D(), mx, my, CIRC = 0.8;
        path.moveTo(x1 + ox * sz, y1 + oy * sz);
        mx = x1 + (ox * sz - dx * sz) * CIRC;
        my = y1 + (oy * sz - dy * sz) * CIRC;
        path.quadraticCurveTo(mx, my, x1 - dx * sz, y1 - dy * sz);
        mx = x1 + (-ox * sz - dx * sz) * CIRC;
        my = y1 + (-oy * sz - dy * sz) * CIRC;
        path.quadraticCurveTo(mx, my, x1 - ox * sz, y1 - oy * sz);
        path.lineTo(x2 - ox * sz, y2 - oy * sz);
        mx = x2 + (-ox * sz + dx * sz) * CIRC;
        my = y2 + (-oy * sz + dy * sz) * CIRC;
        path.quadraticCurveTo(mx, my, x2 + dx * sz, y2 + dy * sz);
        mx = x2 + (ox * sz + dx * sz) * CIRC;
        my = y2 + (oy * sz + dy * sz) * CIRC;
        path.quadraticCurveTo(mx, my, x2 + ox * sz, y2 + oy * sz);
        path.closePath();
        if (fillCol != -1) {
            ctx.beginPath();
            ctx.fillStyle = colourCanvas(fillCol);
            ctx.fill(path);
        }
        if (borderCol != -1) {
            ctx.beginPath();
            ctx.strokeStyle = colourCanvas(borderCol);
            ctx.lineWidth = 1;
            ctx.stroke(path);
        }
    }
    drawOriginatingBond(ctx, element, order, type) {
        let x1 = this.clickX, y1 = this.clickY;
        if (this.opAtom > 0) {
            x1 = this.angToX(this.mol.atomX(this.opAtom));
            y1 = this.angToY(this.mol.atomY(this.opAtom));
        }
        let x2 = this.mouseX, y2 = this.mouseY;
        let snapTo = this.snapToGuide(x2, y2);
        if (snapTo != null) {
            x2 = snapTo[0];
            y2 = snapTo[1];
        }
        let scale = this.pointScale;
        ctx.strokeStyle = '#808080';
        ctx.lineWidth = this.policy.data.lineSize * scale;
        drawLine(ctx, x1, y1, x2, y2);
        if (element != 'C') {
            let fh = this.policy.data.fontSize * scale;
            ctx.font = fontSansSerif(fh);
            let metrics = ctx.measureText(element);
            ctx.fillStyle = '#808080';
            ctx.fillText(element, x2 - 0.5 * metrics.width, y2 + 0.5 * fh);
        }
    }
    updateHoverCursor(event) {
        let tool = 'finger';
        if (this.toolView != null)
            tool = this.toolView.selectedButton;
        let toolApplies = tool != 'finger' && tool != 'pan' && tool != 'zoom' && tool != 'rotate';
        let mouseObj = 0;
        if (this.dragType == DraggingTool.None && toolApplies) {
            let xy = eventCoords(event, this.container);
            mouseObj = this.pickObject(xy[0], xy[1]);
        }
        let mouseAtom = mouseObj > 0 ? mouseObj : 0, mouseBond = mouseObj < 0 ? -mouseObj : 0;
        if (mouseAtom != this.hoverAtom || mouseBond != this.hoverBond) {
            this.hoverAtom = mouseAtom;
            this.hoverBond = mouseBond;
            this.delayedRedraw();
        }
    }
    updateLasso(event) {
        if (this.dragType != DraggingTool.Lasso && this.dragType != DraggingTool.Erasor)
            return;
        let xy = eventCoords(event, this.container);
        if (xy[0] < 0 || xy[1] < 0 || xy[0] > this.width || xy[1] > this.height) {
            this.dragType = DraggingTool.None;
            this.lassoX = null;
            this.lassoY = null;
            this.lassoMask = null;
            this.delayedRedraw();
        }
        let len = this.lassoX.length;
        if (len > 0 && this.lassoX[len - 1] == xy[0] && this.lassoY[len - 1] == xy[1])
            return;
        this.lassoX.push(xy[0]);
        this.lassoY.push(xy[1]);
        this.calculateLassoMask();
        this.delayedRedraw();
    }
    calculateLassoMask() {
        this.lassoMask = new Array(this.mol.numAtoms);
        for (let n = 0; n < this.mol.numAtoms; n++)
            this.lassoMask[n] = false;
        for (let n = 0; n < this.layout.numPoints(); n++) {
            let p = this.layout.getPoint(n);
            if (p.anum == 0)
                continue;
            this.lassoMask[p.anum - 1] = GeomUtil.pointInPolygon(p.oval.cx, p.oval.cy, this.lassoX, this.lassoY);
        }
    }
    determineDragGuide(order) {
        if (this.opAtom == 0) {
            let g = {
                'atom': 0,
                'orders': [order],
                'x': [],
                'y': [],
                'sourceX': this.clickX,
                'sourceY': this.clickY,
                'destX': [],
                'destY': []
            };
            let mx = this.xToAng(this.clickX), my = this.yToAng(this.clickY);
            for (let n = 0; n < 12; n++) {
                let theta = TWOPI * n / 12;
                let dx = Molecule.IDEALBOND * Math.cos(theta), dy = Molecule.IDEALBOND * Math.sin(theta);
                g.x.push(mx + dx);
                g.y.push(my + dy);
                g.destX.push(this.clickX + dx * this.pointScale);
                g.destY.push(this.clickY - dy * this.pointScale);
            }
            return [g];
        }
        if (this.guidelines == null)
            return null;
        let best = null, single = null;
        for (let n = 0; n < this.guidelines.length; n++) {
            let g = this.guidelines[n];
            if (g.atom != this.opAtom)
                continue;
            if (g.orders.indexOf(order) >= 0) {
                best = g;
                break;
            }
            if (g.orders.indexOf(1) >= 0)
                single = g;
        }
        if (best == null)
            best = single;
        if (best == null)
            return;
        let g = clone(best);
        g.sourceX = this.angToX(this.mol.atomX(g.atom));
        g.sourceY = this.angToY(this.mol.atomY(g.atom));
        g.destX = [];
        g.destY = [];
        for (let n = 0; n < g.x.length; n++) {
            g.destX.push(this.angToX(g.x[n]));
            g.destY.push(this.angToY(g.y[n]));
        }
        return [g];
    }
    determineMoveGuide() {
        let subj = this.subjectAtoms(false, true);
        if (subj.length == 0 || subj.length == this.mol.numAtoms)
            return null;
        let guides = [];
        for (let n = 0; n < this.guidelines.length; n++) {
            let g = this.guidelines[n];
            if (g.orders.indexOf(1) < 0 || subj.indexOf(g.atom) >= 0)
                continue;
            g = clone(g);
            g.sourceX = this.angToX(this.mol.atomX(g.atom));
            g.sourceY = this.angToY(this.mol.atomY(g.atom));
            g.destX = [];
            g.destY = [];
            for (let i = 0; i < g.x.length; i++) {
                g.destX.push(this.angToX(g.x[i]));
                g.destY.push(this.angToY(g.y[i]));
            }
            guides.push(g);
        }
        return guides;
    }
    determineDragTheta() {
        let x0 = this.clickX, y0 = this.clickY;
        let snap = this.snapToGuide(x0, y0);
        if (snap != null) {
            x0 = snap[0];
            y0 = snap[1];
        }
        let theta = Math.atan2(this.mouseY - y0, this.mouseX - x0), magnitude = norm_xy(this.mouseX - x0, this.mouseY - y0);
        if (this.toolRotateIncr > 0)
            theta = Math.round(theta / this.toolRotateIncr) * this.toolRotateIncr;
        return [x0, y0, theta, magnitude];
    }
    determineMoveDelta() {
        let x1 = this.clickX, y1 = this.clickY, x2 = this.mouseX, y2 = this.mouseY;
        if (this.opAtom > 0) {
            x1 = this.angToX(this.mol.atomX(this.opAtom));
            y1 = this.angToY(this.mol.atomY(this.opAtom));
            let snap = this.snapToGuide(x2, y2);
            if (snap != null) {
                x2 = snap[0];
                y2 = snap[1];
            }
        }
        return [x2 - x1, y2 - y1];
    }
    determineFauxRing() {
        let atom = this.opAtom, bond = this.opBond, mol = this.mol;
        let x1 = atom > 0 ? mol.atomX(atom) : bond > 0 ? 0.5 * (mol.atomX(mol.bondFrom(bond)) + mol.atomX(mol.bondTo(bond))) : this.xToAng(this.clickX);
        let y1 = atom > 0 ? mol.atomY(atom) : bond > 0 ? 0.5 * (mol.atomY(mol.bondFrom(bond)) + mol.atomY(mol.bondTo(bond))) : this.yToAng(this.clickY);
        let x2 = this.xToAng(this.mouseX), y2 = this.yToAng(this.mouseY), dx = x2 - x1, dy = y2 - y1;
        let rsz = Math.min(9, Math.round(norm_xy(dx, dy) * 2 / Molecule.IDEALBOND) + 2);
        if (rsz < 3) { }
        else if (bond > 0) {
            return SketchUtil.proposeBondRing(mol, rsz, bond, dx, dy);
        }
        else if (atom > 0 && mol.atomAdjCount(atom) > 0 && !this.toolRingFreeform) {
            return SketchUtil.proposeAtomRing(mol, rsz, atom, dx, dy);
        }
        else {
            return SketchUtil.proposeNewRing(mol, rsz, x1, y1, dx, dy, !this.toolRingFreeform);
        }
        return [null, null];
    }
    snapToGuide(x, y) {
        let bestDSQ = Number.POSITIVE_INFINITY, bestX = 0, bestY = 0;
        const APPROACH = sqr(0.5 * this.pointScale);
        if (this.dragGuides != null)
            for (let i = 0; i < this.dragGuides.length; i++)
                for (let j = 0; j < this.dragGuides[i].x.length; j++) {
                    let px = this.dragGuides[i].destX[j], py = this.dragGuides[i].destY[j];
                    let dsq = norm2_xy(px - x, py - y);
                    if (dsq < APPROACH && dsq < bestDSQ) {
                        bestDSQ = dsq;
                        bestX = px;
                        bestY = py;
                    }
                }
        for (let n = 1; n <= this.mol.numAtoms; n++) {
            let px = this.angToX(this.mol.atomX(n)), py = this.angToY(this.mol.atomY(n));
            let dsq = norm2_xy(px - x, py - y);
            if (dsq < APPROACH && dsq < bestDSQ) {
                bestDSQ = dsq;
                bestX = px;
                bestY = py;
            }
        }
        if (isFinite(bestDSQ))
            return [bestX, bestY];
        return null;
    }
    subjectAtoms(allIfNone = false, useOpAtom = false) {
        let atoms = [];
        if (this.selectedMask != null) {
            for (let n = 0; n < this.selectedMask.length; n++)
                if (this.selectedMask[n])
                    atoms.push(n + 1);
            if (atoms.length > 0)
                return atoms;
        }
        if (this.currentAtom > 0)
            atoms.push(this.currentAtom);
        else if (this.currentBond > 0) {
            atoms.push(this.mol.bondFrom(this.currentBond));
            atoms.push(this.mol.bondTo(this.currentBond));
        }
        if (useOpAtom && atoms.length == 0 && this.opAtom > 0)
            atoms.push(this.opAtom);
        if (allIfNone && atoms.length == 0) {
            for (let n = 1; n <= this.mol.numAtoms; n++)
                atoms.push(n);
        }
        return atoms;
    }
    mouseClick(event) {
        this.container.focus();
    }
    mouseDoubleClick(event) {
        event.stopImmediatePropagation();
    }
    mouseDown(event) {
        this.clearMessage();
        this.dragType = DraggingTool.Press;
        this.opBudged = false;
        this.dragGuides = null;
        let xy = eventCoords(event, this.container);
        this.mouseX = xy[0];
        this.mouseY = xy[1];
        this.clickX = xy[0];
        this.clickY = xy[1];
        let clickObj = this.pickObject(xy[0], xy[1]);
        this.opAtom = clickObj > 0 ? clickObj : 0;
        this.opBond = clickObj < 0 ? -clickObj : 0;
        this.opShift = event.shiftKey;
        this.opCtrl = event.ctrlKey;
        this.opAlt = event.altKey;
        let tool = 'finger';
        if (this.toolView != null)
            tool = this.toolView.selectedButton;
        if (tool == 'arrow') {
            if (!this.opShift && !this.opCtrl && !this.opAlt) {
                this.dragType = DraggingTool.Press;
            }
            else if (!this.opShift && this.opCtrl && !this.opAlt) {
            }
            else if (!this.opShift && !this.opCtrl && this.opAlt) {
                this.dragType = DraggingTool.Pan;
            }
            else if (!this.opShift && this.opCtrl && this.opAlt) {
                this.dragType = DraggingTool.Zoom;
            }
        }
        else if (tool == 'rotate') {
            this.dragType = DraggingTool.Rotate;
            this.toolRotateIncr = this.opShift ? 0 : 15 * DEGRAD;
        }
        else if (tool == 'pan') {
            this.dragType = DraggingTool.Pan;
        }
        else if (tool == 'drag') {
            this.dragType = DraggingTool.Move;
            if (this.opAtom > 0)
                this.dragGuides = this.determineMoveGuide();
            this.delayedRedraw();
        }
        else if (tool == 'erasor') {
            this.dragType = DraggingTool.Erasor;
            this.lassoX = [xy[0]];
            this.lassoY = [xy[1]];
            this.lassoMask = [];
        }
        else if (tool == 'ringAliph') {
            this.dragType = DraggingTool.Ring;
            this.toolRingArom = false;
            this.toolRingFreeform = this.opShift;
        }
        else if (tool == 'ringArom') {
            this.dragType = DraggingTool.Ring;
            this.toolRingArom = true;
            this.toolRingFreeform = this.opShift;
        }
        else if (tool == 'atomPlus') {
            this.dragType = DraggingTool.Charge;
            this.toolChargeDelta = 1;
        }
        else if (tool == 'atomMinus') {
            this.dragType = DraggingTool.Charge;
            this.toolChargeDelta = -1;
        }
        else if (tool.startsWith('bond')) {
            this.dragType = DraggingTool.Bond;
            this.toolBondOrder = 1;
            this.toolBondType = Molecule.BONDTYPE_NORMAL;
            if (tool == 'bondOrder0')
                this.toolBondOrder = 0;
            else if (tool == 'bondOrder2')
                this.toolBondOrder = 2;
            else if (tool == 'bondOrder3')
                this.toolBondOrder = 3;
            else if (tool == 'bondUnknown')
                this.toolBondType = Molecule.BONDTYPE_UNKNOWN;
            else if (tool == 'bondInclined')
                this.toolBondType = Molecule.BONDTYPE_INCLINED;
            else if (tool == 'bondDeclined')
                this.toolBondType = Molecule.BONDTYPE_DECLINED;
            this.dragGuides = this.determineDragGuide(this.toolBondOrder);
        }
        else if (tool.startsWith('element')) {
            this.dragType = DraggingTool.Atom;
            this.toolAtomSymbol = tool.substring(7);
            this.dragGuides = this.determineDragGuide(1);
        }
    }
    mouseUp(event) {
        if (!this.opBudged) {
            let xy = eventCoords(event, this.container);
            let clickObj = this.pickObject(xy[0], xy[1]);
            let clickAtom = clickObj > 0 ? clickObj : 0, clickBond = clickObj < 0 ? -clickObj : 0;
            if (this.dragType == DraggingTool.Press) {
                if (!this.opShift && !this.opCtrl && !this.opAlt) {
                    if (clickAtom == 0 && clickBond == 0) {
                        if (Vec.anyTrue(this.selectedMask))
                            this.selectedMask = null;
                        else if (this.currentAtom > 0)
                            this.currentAtom = 0;
                        else if (this.currentBond > 0)
                            this.currentBond = 0;
                    }
                    else if (clickAtom != this.currentAtom || clickBond != this.currentBond) {
                        this.currentAtom = clickAtom;
                        this.currentBond = clickBond;
                        this.delayedRedraw();
                    }
                    else if (clickAtom == 0 && clickBond == 0 && this.anySelected()) {
                        this.selectedMask = null;
                        this.delayedRedraw();
                    }
                }
                else if (this.opShift && !this.opCtrl && !this.opAlt) {
                }
            }
            else if (this.dragType == DraggingTool.Erasor) {
                if (this.opAtom > 0 || this.opBond > 0) {
                    let override = {
                        'currentAtom': this.opAtom,
                        'currentBond': this.opBond,
                        'selectedMask': []
                    };
                    let molact = new MoleculeActivity(this, ActivityType.Delete, {}, override);
                    molact.execute();
                }
            }
            else if (this.dragType == DraggingTool.Atom) {
                let element = this.toolAtomSymbol;
                if (element == 'A') {
                    element = window.prompt('Enter element symbol:', this.opAtom == 0 ? '' : this.mol.atomElement(this.opAtom));
                }
                if (element) {
                    let param = { 'element': element, 'keepAbbrev': true };
                    if (this.opAtom == 0) {
                        let x = this.xToAng(this.clickX), y = this.yToAng(this.clickY);
                        if (this.mol.numAtoms == 0) {
                            this.offsetX = this.clickX;
                            this.offsetY = this.clickY;
                            x = 0;
                            y = 0;
                        }
                        param.positionX = x;
                        param.positionY = y;
                    }
                    let override = {
                        'currentAtom': this.opAtom,
                        'currentBond': 0,
                        'selectedMask': null
                    };
                    let molact = new MoleculeActivity(this, ActivityType.Element, param, override);
                    molact.execute();
                }
            }
            else if (this.dragType == DraggingTool.Charge) {
                if (this.opAtom > 0 || this.opBond > 0) {
                    let override = {
                        'currentAtom': this.opAtom,
                        'currentBond': this.opBond,
                        'selectedMask': null
                    };
                    let molact = new MoleculeActivity(this, ActivityType.Charge, { 'delta': this.toolChargeDelta }, override);
                    molact.execute();
                }
            }
            else if (this.dragType == DraggingTool.Bond) {
                let override = {
                    'currentAtom': this.opAtom,
                    'currentBond': this.opBond,
                    'selectedMask': null
                };
                let molact;
                if (this.toolBondType == Molecule.BONDTYPE_NORMAL)
                    molact = new MoleculeActivity(this, ActivityType.BondOrder, { 'order': this.toolBondOrder }, override);
                else
                    molact = new MoleculeActivity(this, ActivityType.BondType, { 'type': this.toolBondType }, override);
                molact.execute();
            }
        }
        else {
            if (this.dragType == DraggingTool.Lasso) {
                if (this.lassoX.length >= 2) {
                    this.calculateLassoMask();
                    for (let n = 1; n <= this.mol.numAtoms; n++)
                        if (this.getLassoed(n) && !this.getSelected(n))
                            this.setSelected(n, true);
                }
                this.lassoX = null;
                this.lassoY = null;
                this.lassoMask = null;
                this.delayedRedraw();
            }
            else if (this.dragType == DraggingTool.Erasor) {
                let any = false;
                for (let n = 0; n < this.lassoMask.length; n++)
                    if (this.lassoMask[n]) {
                        any = true;
                        break;
                    }
                if (any) {
                    let override = {
                        'currentAtom': 0,
                        'currentBond': 0,
                        'selectedMask': this.lassoMask
                    };
                    let molact = new MoleculeActivity(this, ActivityType.Delete, {}, override);
                    molact.execute();
                }
            }
            else if (this.dragType == DraggingTool.Rotate) {
                let [x0, y0, theta, magnitude] = this.determineDragTheta();
                let degrees = -theta * DEGRAD;
                let mx = this.xToAng(x0), my = this.yToAng(y0);
                let molact = new MoleculeActivity(this, ActivityType.Rotate, { 'theta': degrees, 'centreX': mx, 'centreY': my });
                molact.execute();
            }
            else if (this.dragType == DraggingTool.Move) {
                let [dx, dy] = this.determineMoveDelta();
                let scale = this.pointScale;
                let molact = new MoleculeActivity(this, ActivityType.Move, { 'refAtom': this.opAtom, 'deltaX': dx / scale, 'deltaY': -dy / scale });
                molact.execute();
            }
            else if (this.dragType == DraggingTool.Ring) {
                let [ringX, ringY] = this.determineFauxRing();
                if (ringX != null) {
                    let param = {
                        'ringX': ringX,
                        'ringY': ringY,
                        'aromatic': this.toolRingArom
                    };
                    let molact = new MoleculeActivity(this, ActivityType.Ring, param);
                    molact.execute();
                }
            }
            else if (this.dragType == DraggingTool.Atom && this.opAtom > 0) {
                let x2 = this.mouseX, y2 = this.mouseY;
                let snapTo = this.snapToGuide(x2, y2);
                if (snapTo != null) {
                    x2 = snapTo[0];
                    y2 = snapTo[1];
                }
                let param = {
                    'order': 1,
                    'type': Molecule.BONDTYPE_NORMAL,
                    'element': this.toolAtomSymbol,
                    'x1': this.mol.atomX(this.opAtom),
                    'y1': this.mol.atomY(this.opAtom),
                    'x2': this.xToAng(x2),
                    'y2': this.yToAng(y2)
                };
                if (this.toolAtomSymbol == 'A')
                    param.element = window.prompt('Enter element symbol:', '');
                if (param.element != '') {
                    let molact = new MoleculeActivity(this, ActivityType.BondAtom, param);
                    molact.execute();
                }
            }
            else if (this.dragType == DraggingTool.Bond) {
                let x2 = this.mouseX, y2 = this.mouseY;
                let snapTo = this.snapToGuide(x2, y2);
                if (snapTo != null) {
                    x2 = snapTo[0];
                    y2 = snapTo[1];
                }
                let param = {
                    'order': this.toolBondOrder,
                    'type': this.toolBondType,
                    'element': "C",
                    'x1': this.opAtom == 0 ? this.xToAng(this.clickX) : this.mol.atomX(this.opAtom),
                    'y1': this.opAtom == 0 ? this.yToAng(this.clickY) : this.mol.atomY(this.opAtom),
                    'x2': this.xToAng(x2),
                    'y2': this.yToAng(y2)
                };
                let molact = new MoleculeActivity(this, ActivityType.BondAtom, param);
                molact.execute();
            }
        }
        this.dragType = DraggingTool.None;
        this.lassoX = null;
        this.lassoY = null;
        this.lassoMask = null;
        this.dragGuides = null;
        this.delayedRedraw();
    }
    mouseOver(event) {
        this.updateHoverCursor(event);
        this.updateLasso(event);
    }
    mouseOut(event) {
        this.updateHoverCursor(event);
        this.updateLasso(event);
    }
    mouseMove(event) {
        this.updateHoverCursor(event);
        if (this.dragType == DraggingTool.None)
            return;
        let xy = eventCoords(event, this.container);
        if (!this.opBudged) {
            let dx = xy[0] - this.clickX, dy = xy[1] - this.clickY;
            if (dx * dx + dy * dy > 2 * 2)
                this.opBudged = true;
        }
        if (this.dragType == DraggingTool.Press && this.opAtom == 0 && this.opBond == 0 && this.opBudged) {
            this.dragType = DraggingTool.Lasso;
            this.lassoX = [xy[0]];
            this.lassoY = [xy[1]];
            this.lassoMask = [];
        }
        if (this.dragType == DraggingTool.Lasso || this.dragType == DraggingTool.Erasor) {
            this.updateLasso(event);
        }
        else if (this.dragType == DraggingTool.Pan) {
            let xy = eventCoords(event, this.container);
            let dx = xy[0] - this.mouseX, dy = xy[1] - this.mouseY;
            if (dx != 0 || dy != 0) {
                this.offsetX += dx;
                this.offsetY += dy;
                this.layout.offsetEverything(dx, dy);
                this.metavec.transformPrimitives(dx, dy, 1, 1);
                if (this.currentPerm >= 0 && this.templatePerms != null) {
                    let perm = this.templatePerms[this.currentPerm];
                    perm.metavec.transformPrimitives(dx, dy, 1, 1);
                }
                this.delayedRedraw();
            }
            this.mouseX = xy[0];
            this.mouseY = xy[1];
        }
        else if (this.dragType == DraggingTool.Zoom) {
            let xy = eventCoords(event, this.container);
            let dy = xy[1] - this.mouseY;
            if (dy != 0) {
                dy = Math.min(50, Math.max(-50, dy));
                let newScale = this.pointScale * (1 - dy * 0.01);
                newScale = Math.min(10, Math.max(0.1, newScale));
                let newOX = this.clickX - (newScale / this.pointScale) * (this.clickX - this.offsetX);
                let newOY = this.clickY - (newScale / this.pointScale) * (this.clickY - this.offsetY);
                this.pointScale = newScale;
                this.offsetX = newOX;
                this.offsetY = newOY;
                this.delayedRedraw();
            }
            this.mouseX = xy[0];
            this.mouseY = xy[1];
        }
        else if (this.dragType == DraggingTool.Rotate ||
            this.dragType == DraggingTool.Move ||
            this.dragType == DraggingTool.Atom ||
            this.dragType == DraggingTool.Bond ||
            this.dragType == DraggingTool.Ring) {
            this.mouseX = xy[0];
            this.mouseY = xy[1];
            this.delayedRedraw();
        }
    }
    keyPressed(event) {
        if (this.toolView != null && this.toolView.topBank.claimKey(event)) {
            event.preventDefault();
            return;
        }
        if (this.commandView != null && this.commandView.topBank.claimKey(event)) {
            event.preventDefault();
            return;
        }
        if (this.templateView != null && this.templateView.topBank.claimKey(event)) {
            event.preventDefault();
            return;
        }
    }
    keyDown(event) {
        let key = event.keyCode;
        if (key == 27) {
            for (let view of [this.templateView, this.commandView, this.toolView])
                if (view != null && view.stackSize > 1) {
                    view.popBank();
                    event.preventDefault();
                    return;
                }
        }
        if (key == 37) { }
        else if (key == 39) { }
        else if (key == 38) { }
        else if (key == 40) { }
        else if ([27, 8, 46].indexOf(key) >= 0) {
            if (this.toolView != null && this.toolView.topBank.claimKey(event)) {
                event.preventDefault();
                return;
            }
            if (this.commandView != null && this.commandView.topBank.claimKey(event)) {
                event.preventDefault();
                return;
            }
            if (this.templateView != null && this.templateView.topBank.claimKey(event)) {
                event.preventDefault();
                return;
            }
        }
    }
    keyUp(event) {
    }
    mouseWheel(event) {
    }
    dropInto(transfer) {
        let items = transfer.items, files = transfer.files;
        const SUFFIXES = ['.el', '.mol'];
        const MIMES = ['text/plain', 'chemical/x-sketchel', 'x-mdl-molfile'];
        for (let n = 0; n < items.length; n++) {
            if (items[n].kind == 'string' && MIMES.indexOf(items[n].type) >= 0) {
                items[n].getAsString((str) => {
                    let mol = Molecule.fromString(str);
                    if (mol != null) {
                        this.defineMolecule(mol, true, true);
                    }
                    else
                        console.log('Dragged data is not a SketchEl molecule: ' + str);
                });
                return;
            }
        }
        for (let n = 0; n < files.length; n++) {
            for (let sfx of SUFFIXES)
                if (files[n].name.endsWith(sfx)) {
                    let reader = new FileReader();
                    reader.onload = (event) => {
                        let str = reader.result;
                        let mol = MoleculeStream.readUnknown(str);
                        if (mol != null) {
                            this.defineMolecule(mol, true, true);
                        }
                        else
                            console.log('Dragged file is not a recognised molecule: ' + str);
                    };
                    reader.readAsText(files[n]);
                    return;
                }
        }
    }
    sketchEffects() {
        let effects = new RenderEffects();
        for (let n = 1; n <= this.mol.numAtoms; n++)
            if (MolUtil.hasAbbrev(this.mol, n))
                effects.dottedRectOutline[n] = 0x808080;
        return effects;
    }
}
Sketcher.UNDO_SIZE = 20;
class MainPanel {
    constructor(root) {
        this.root = root;
        $('body').css('overflow', 'hidden');
        root.css('width', '100%');
        root.css('height', document.documentElement.clientHeight + 'px');
        $(window).resize(() => this.onResize());
        root.on('menuAction', (event, cmd) => this.menuAction(cmd));
    }
    loadFile(filename) {
    }
    onResize() {
        this.root.css('height', document.documentElement.clientHeight + 'px');
    }
    menuAction(cmd) {
    }
}
class DrawPanel extends MainPanel {
    constructor(root) {
        super(root);
        this.sketcher = new Sketcher();
        let w = document.documentElement.clientWidth, h = document.documentElement.clientHeight;
        this.sketcher.setSize(w, h);
        this.sketcher.setup(() => this.sketcher.render(root));
    }
    setMolecule(mol) {
        this.sketcher.defineMolecule(mol);
    }
    loadFile(filename) {
        const fs = require('fs');
        const self = this;
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err)
                throw err;
            let mol = Molecule.fromString(data);
            if (!mol) {
                let mdl = new MDLMOLReader(data);
                mol = mdl.parse();
            }
            if (!mol) {
                alert('Molecule not readable:\n\n' + filename);
                return;
            }
            self.sketcher.defineMolecule(mol);
        });
    }
    onResize() {
        super.onResize();
        let w = document.documentElement.clientWidth, h = document.documentElement.clientHeight;
        this.sketcher.changeSize(w, h);
    }
    menuAction(cmd) {
        if (cmd == 'new')
            openNewWindow('DrawPanel');
        else if (cmd == 'open')
            this.actionFileOpen();
        else if (cmd == 'save')
            this.actionFileSave(false);
        else if (cmd == 'saveAs')
            this.actionFileSave(true);
        else if (cmd == 'undo')
            this.sketcher.performUndo();
        else if (cmd == 'redo')
            this.sketcher.performRedo();
        else if (cmd == 'cut')
            this.actionCopy(true);
        else if (cmd == 'copy')
            this.actionCopy(false);
        else if (cmd == 'paste')
            this.actionPaste();
        else if (cmd == 'delete')
            new MoleculeActivity(this.sketcher, ActivityType.Delete, {});
        else if (cmd == 'selectAll')
            new MoleculeActivity(this.sketcher, ActivityType.SelectAll, {});
        else if (cmd == 'zoomFull')
            this.sketcher.autoScale();
        else if (cmd == 'zoomIn')
            this.sketcher.zoom(1.25);
        else if (cmd == 'zoomOut')
            this.sketcher.zoom(0.8);
        else
            console.log('MENU:' + cmd);
    }
    actionFileOpen() {
        const electron = require('electron');
        const dialog = electron.remote.dialog;
        let params = {
            'title': 'Open Molecule',
            'properties': ['openFile'],
            'filters': [
                { 'name': 'SketchEl Molecule', 'extensions': ['el'] },
                { 'name': 'MDL Molfile', 'extensions': ['mol'] }
            ]
        };
        dialog.showOpenDialog(params, (filenames) => {
            let inPlace = this.sketcher.getMolecule().numAtoms == 0;
            if (filenames)
                for (let fn of filenames) {
                    if (inPlace) {
                        this.loadFile(fn);
                        inPlace = false;
                    }
                    else
                        openNewWindow('DrawPanel', fn);
                }
        });
    }
    actionFileSave(saveAs) {
        alert('save:as=' + saveAs);
    }
    actionCopy(andCut) {
        let input = this.sketcher.getState(), mol = input.mol;
        let mask = Vec.booleanArray(false, mol.numAtoms);
        if (Vec.anyTrue(input.selectedMask))
            mask = input.selectedMask;
        else if (input.currentAtom > 0)
            mask[input.currentAtom - 1] = true;
        else if (input.currentBond > 0) {
            mask[mol.bondFrom(input.currentBond) - 1] = true;
            mask[mol.bondTo(input.currentBond) - 1] = true;
        }
        else
            mask = Vec.booleanArray(true, mol.numAtoms);
        let copyMol = Vec.allTrue(mask) ? mol.clone() : MolUtil.subgraphWithAttachments(mol, mask);
        if (andCut) {
            this.sketcher.clearSubject();
            this.setMolecule(MolUtil.subgraphMask(mol, Vec.notMask(mask)));
        }
        const { clipboard } = require('electron');
        clipboard.writeText(copyMol.toString());
        this.sketcher.showMessage('Molecule with ' + copyMol.numAtoms + ' atom' + (copyMol.numAtoms == 1 ? '' : 's') + ' copied to clipboard.');
    }
    actionPaste() {
        alert('paste');
    }
}
let BASE_APP = '';
function runSketchEl(root) {
    const path = require('path');
    const electron = require('electron');
    const process = require('process');
    BASE_APP = path.normalize('file:/' + __dirname);
    var url = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
    RPC.RESOURCE_URL = path.normalize(url + '/res');
    let params = window.location.search.substring(1).split('&');
    let panelClass = null;
    let filename = null;
    for (let p of params) {
        let eq = p.indexOf('=');
        if (eq < 0)
            continue;
        let key = p.substring(0, eq), val = decodeURIComponent(p.substring(eq + 1));
        if (key == 'panel')
            panelClass = val;
        else if (key == 'fn')
            filename = val;
    }
    if (!panelClass) {
        let dw = new DrawPanel(root);
        if (filename)
            dw.loadFile(filename);
    }
    else {
        let constructor = eval(panelClass);
        let dw = new constructor(root);
        if (filename)
            dw.loadFile(filename);
    }
}
function openNewWindow(panelClass, filename) {
    const electron = require('electron');
    let bw = new electron.remote.BrowserWindow({ 'width': 800, 'height': 700, 'icon': 'app/img/icon.png' });
    let url = BASE_APP + '/index.html?panel=' + panelClass;
    if (filename)
        url += '&fn=' + encodeURIComponent(filename);
    bw.loadURL(url);
}
//# sourceMappingURL=sketchel2.js.map