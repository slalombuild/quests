interface StringFunction {
    (...inputs: any): string
}

interface VoidFunction {
    (...inputs: any): void
}

export type { StringFunction, VoidFunction }
