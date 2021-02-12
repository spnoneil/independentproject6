export default class CurrencyService {
  static async getCurrency(baseCurrency) {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCurrency}`)

        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      } catch (error) {
        return error;
      }
    }
    // static async checkErrors(response)
    // if (!response.ok) {
    //   throw Error(respo)
    // }
}