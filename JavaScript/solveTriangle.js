function triangle(num) {
    let result = '';
    const increments = [0]
    for (let i = num - 1; i > 0; i--) {
        increments.push(i)
    }
    for (let i = 1; i < num + 1; i++){
        let prev = i;
        for (let j = 0; j < i; j++) {
            prev += increments[j]
            result += `${prev} `
        }
        result += '\n'
    }
    return result
}

console.log(triangle(5))
