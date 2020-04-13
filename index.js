const cssUnit = v => {
    let s = v ? `${v}` : 0;
    return !/\D/g.test(s) ? `${s}px` : s;
}

module.exports = {cssUnit};
