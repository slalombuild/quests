interface StringFunction {
    (...inputs: any): string
}

interface VoidFunction {
    (...inputs: any): void
}

interface MouseEventHandler {
    (event: MouseEvent): void
}

export type { StringFunction, VoidFunction, MouseEventHandler }
