const { FLASK_ENDPOINT } = process.env
export const partsClassification = async (req, res) => {
  try {
    console.log('req received')
    if (!req.file) {
      return res.status(400).send('No file uploaded')
    }
    const fileBuffer = await req.file.buffer
    console.log(fileBuffer)
    const jwt = await fetch(`${FLASK_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: 'admin', password: 'admin' })
    })
    if (jwt) {
      console.log(jwt, 'jwt')
      const response = await fetch(`${FLASK_ENDPOINT}/tree-part-cls`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${jwt}`
        }
      })
      const data = await response.json()
      console.log(data)
      res.send(data).status(200)
    } else {
      res.send({ mssg: 'Some Error occured' }).status(500)
    }
  } catch (error) {
    console.log(error)
  }
}
