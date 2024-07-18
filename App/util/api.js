import { format } from "date-fns"

const API_URL = "https://v6.exchangerate-api.com/v6/6d892b60d09b8ae759c59c3e/latest/"

export const api = (baseCurrency = "USD") => {
  return fetch(`${API_URL}${baseCurrency}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch exchange rates.")
      }
      return response.json()
    })
    .then(data => {
      if (data.result !== "success") {
        throw new Error("Invalid response from exchange rate API.")
      }
      return {
        base: baseCurrency,
        date: data.time_last_update_utc,
        rates: data.conversion_rates,
      }
    })
    .catch(error => {
      throw new Error(error.message)
    })
}
