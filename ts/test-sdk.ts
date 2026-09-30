import { FrankfurterSDK } from './src/FrankfurterSDK'

async function main() {
  const client = new FrankfurterSDK({})

  try {
    // Test latest rates
    const rates = await client.Rate().list({ base: 'USD', quote: 'EUR,GBP,INR' })
    console.log('✅ Rates call succeeded:')
    console.log(JSON.stringify(rates, null, 2))
  } catch (err) {
    console.error('❌ Error:', err)
  }
}

main()
