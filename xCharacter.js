//Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
const str = 'XeroX';

function getTheGapX(str) {
    if (!str.includes('X')) {
        return -1;
    }

    const firstIndex = str.indexOf('X');
    const lastIndex = str.lastIndexOf('X');
    return firstIndex === lastIndex ? 0 : lastIndex - firstIndex;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
