const Fib = (n) => ({
    [Symbol.iterator]: function () {
        /*let i = 0;
        let first = 0;
        let second = 1;
        let temp;*/
        let i = 1, oldVal = 0, newVal= 0;
        return {
            /*
            next: () => {
                if (i === 0) {
                    i++
                    return {
                        value: first,
                        done: !(i <= this.n),
                    }
                } else if (i === 1) {

                    i++;
                    return {
                        value: second,
                        done: !(i <= this.n),
                    }
                } else {
                    temp = first;
                    first = second;
                    second = temp + second;
                    i++;
                    return {
                        value: second,
                        done: !(i <= this.n),
                    }
                }
            }
            */
            next: () => {
                
            if (i++ <= n) {
                [oldVal, newVal] = [newVal, (oldVal+newVal) || 1];
                console.lo
                return {value:oldVal,done:false};
                } else {
                    return { done: true};
                }
            }
        }
    }
})

for (const iterator of Fib(10)) {
    console.log(iterator)
}
