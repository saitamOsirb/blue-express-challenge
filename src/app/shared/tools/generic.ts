


export const arrayChunk = (arr: unknown[], n: number) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
};
/*
function paginate(array: unknown[], page_size: number, page_number: number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
*/