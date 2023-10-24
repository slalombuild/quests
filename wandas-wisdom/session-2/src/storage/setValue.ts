const setValue = (key: string, value: string): void => {
    sessionStorage.setItem(key, value)
}

export default setValue
