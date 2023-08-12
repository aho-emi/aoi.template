module.exports = async (d) => {
    const data = d.util.aoiFunc(d);
    const [fullStart, emptyStart, fullBar, emptyBar, fullEnd, emptyEnd, value, maxValue, size] = data.inside.splits;

    let errors = [];
    const validateParam = (param, name) => {
        if (!param || param === '') errors.push(`"${name}" - Param ${errors.length + 1} is not provided!`);
    };

    validateParam(fullStart, "fullStart");
    validateParam(emptyStart, "emptyStart");
    validateParam(fullBar, "fullBar");
    validateParam(emptyBar, "emptyBar");
    validateParam(fullEnd, "fullEnd");
    validateParam(emptyEnd, "emptyEnd");
    validateParam(size, "size");
    if (size && (isNaN(parseInt(size)) || parseInt(size) < 10)) errors.push(`"size" cannot be less than 10 or empty`);

    if (errors.length >= 1) {
        data.result = errors.join('\n');
    } else {
        const barArr = [];
        const full = Math.round(size * (value / maxValue > 1 ? 1 : value / maxValue));
        const empty = Math.max(size - full, 0);
        for (let i = 1; i <= full; i++) barArr.push(fullBar);
        for (let i = 1; i <= empty; i++) barArr.push(emptyBar);
        barArr[0] = barArr[0] === fullBar ? fullStart : emptyStart;
        barArr[barArr.length - 1] = barArr[barArr.length - 1] === fullBar ? fullEnd : emptyEnd;
        const bar = barArr.join('');

        data.result = `${bar} ${Math.floor((value * 100) / maxValue)}%`;
    }

    return {
        code: d.util.setCode(data),
    };
};
