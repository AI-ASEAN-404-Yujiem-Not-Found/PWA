export function reduceWord(input: string, len: number = 10) : string {
    if (input.length < len){
        return input
    } else {
        return input.slice(0, len) + "...."
    }
}