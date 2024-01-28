interface Props {
    n: number
}

const getFibonacciSequence = (num: number): [number, number] => {
    if (num < 1) {
        return [0, 1];
    } else {
        const sequence = getFibonacciSequence(num - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return sequence;
    }
};

export function Fibonacci({ n }: Props) {
    return (
        <div className="mt-2">
            {getFibonacciSequence(n-1).join(", ")}
        </div>
    )
}

const getFibonacciNumber = (num: number): number => {
    if (num < 1) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return getFibonacciNumber(num - 1) + getFibonacciNumber(num - 2);
    }
}

export function FibonacciNumber({ n }: Props) {
    return (
        <div className="mt-2">
            {getFibonacciNumber(n)}
        </div>
    )
}