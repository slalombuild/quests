import { VoidFunction } from '../interfaces'

const setValue: VoidFunction = (key: string, value: string): void => {
    sessionStorage.setItem(key, value)
}

export default setValue
