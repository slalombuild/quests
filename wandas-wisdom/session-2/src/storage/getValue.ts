const getValue = (key: string): string => {
    const storedValue: string = sessionStorage.getItem(key) as string

    return storedValue
}

export default getValue
