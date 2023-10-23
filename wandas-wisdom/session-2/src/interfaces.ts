interface StringFunction {
    (...inputs: any): string
}

interface VoidFunction {
    (...inputs: any): void
}

interface EventHandler {
    (event: Event): void
}

interface BooleanObject {
    [key: string]: boolean
}

export type { StringFunction, VoidFunction, EventHandler, BooleanObject }
