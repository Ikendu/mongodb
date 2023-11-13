const { MongoClient } = require(`mongodb`)

const main = async () => {
  const url = `mongodb+srv://aniedechibundu:11111234Aa@first.ozeyxot.mongodb.net/?retryWrites=true&w=majority`
  const client = new MongoClient(url)

  try {
    await client.connect()
    //await getDatabaseList(client)
    await createData(client, { _id: 232, name: `David`, level: `Engineer`, aga: 33 })
    //await createData(client, gift)
  } catch (err) {
    console.log(err)
  } finally {
    await client.close()
  }
}
main().catch(console.error)

const getDatabaseList = async (client) => {
  const databaseList = await client.db().admin().listDatabases().databases

  databaseList.forEach((db) => console.log(db.name))
}
const gift = { name: `Gift`, level: `Graduate`, age: `36` }

const createData = async (client, data) => {
  const dataCreate = await client.db(`newData`).collection(`newCollectio`).insertOne(data)
  console.log(`id: ${dataCreate.insertedId}`)
}
