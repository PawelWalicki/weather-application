export const kelvinToCelcius = (temp: number) => temp - 273

export const timestampToDate = (timestamp: number) => {
    return new Date(timestamp * 1000)
}

export const getHoursAndMuntesFromTimestamp = (timestamp: number) => {
    return timestampToDate(timestamp)
            .toLocaleTimeString()
            .split(":")
            .slice(0,2)
            .join(":")
}