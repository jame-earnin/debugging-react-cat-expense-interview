
export function factorial(n: number): number {
    if (n < 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


interface Props {
    n: number
}

export function Factorial({ n }: Props) {
    return (
        <div className="mt-2">
            {factorial(n)}
        </div>
    )
}

export function FactorialSequence({ n }: Props) {
    const sequence = [];
    for (let i = 1; i <= n; i++) {
        sequence.push(factorial(i));
    }
    return (
        <div className="mt-2">
            {sequence.join(", ")}
        </div>
    )
}
