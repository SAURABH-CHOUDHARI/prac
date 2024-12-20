function hailStone(n) {
    console.log(n)
    while (n > 1) {
        if (n % 2 == 0) {
            n = n / 2
            if (n == 1) break
            console.log(n)
        } else {
            n = (n * 3) + 1
            console.log(n)
        }

    }
}


let n = parseInt(prompt("Enter value of n: "));



hailStone(n)
