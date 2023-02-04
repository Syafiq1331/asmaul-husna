export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(
    [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@gmail.com',
        status: 'inactive'
      },
      {
        id: 3,
        name: 'Bob Doe',
        email: 'bob@gmail.com',
        status: 'active'
      }
    ]
  ))
}