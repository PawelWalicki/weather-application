export const kelvinToCelcius = (temp: number) => temp - 273

export const timestampToDate = (timestamp: number, multiply: boolean = true) => {
    return multiply ? new Date(timestamp * 1000) : new Date(timestamp)
}

export const getHoursAndMinutesFromTimestamp = (timestamp: number, multiply = true) => {
    return timestampToDate(timestamp, multiply)
            .toLocaleTimeString()
            .split(":")
            .slice(0,2)
            .join(":")
}


export const getCurrentTime = () => {
    return getHoursAndMinutesFromTimestamp(Date.now(), false)
}

export function getFormattedDate() {
    // TODO: 
    // Ustawienia lokalizacji na język angielski
   
    // Pobranie aktualnej daty
    const now = new Date();

    // Pobranie nazwy dnia tygodnia
    const dayName = now.toLocaleDateString();

    // Złożenie końcowego formatu
    return `${dayName}`;
}

export function getDDMMfromDate(dt_txt: string) {
    const date = dt_txt.split(" ")[0]
    const day = date.split("-")[2]
    const month = date.split("-")[1]
    const DDMM = `${day}/${month}`
    return DDMM
}

export function getHourFromDate(dt_txt: string) {
    const time = dt_txt.split(" ")[1]
    const hourOnly = time.split(":").slice(0,2).join(":")
    return hourOnly
}