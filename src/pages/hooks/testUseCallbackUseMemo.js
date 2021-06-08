export const mergeCount = (...counts) => {
    let result = 0;
    counts.map((count)=>{
        result = result + count;
    })
    return result;
}