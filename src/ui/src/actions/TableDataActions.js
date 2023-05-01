const prepHeadings = (headings, rows) => {
    let newHeads = [];
    if (Array.isArray(headings)) {
        headings.forEach(head => newHeads.push({ displayName: head, fieldName: head.toLowerCase().replace(/\s/g, "") }));
    }
    return newHeads
};
const prepareRows = (headings, rows) => {
    let newRows = [];
    if (Array.isArray(headings) && Array.isArray(rows)) {
        rows.forEach((row, i) => {
            let newRow = {};
            headings.forEach((_, j) => {
                if (i === j) {
                    newRow[headings[i]] = row[j];
                }
            });
            newRows.push(newRow);
        });
    }
    return newRows;
};

module.exports = {prepHeadings, prepareRows}