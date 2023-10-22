function generateRandomNumber(upperLimit: number): number {
    const randomNumber: number = Math.floor(Math.random() * upperLimit)

    return randomNumber
}

export default generateRandomNumber
