const handler = (req, res) => {
  const { chain, propertyAddress } = req.query
  const data = {
    total_quota: 123,
    used_quota: 10,
    available_quota: 113,
    chain,
    propertyAddress,
  }
  res.status(200).json(data)
}

export default handler
