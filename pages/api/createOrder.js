import sanityClient from '@sanity/client'
const config = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}
const client = sanityClient(config)

export default async function createOrder(req, res) {
  const { _id, name, email, order, neededBy } = JSON.parse(req.body)
  try {
    await client.create({
      _type: 'order',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      order,
      neededBy
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: `Couldn't submit order`, err})
  }
  return res.status(200).json({ message: 'Order submitted' })
}
