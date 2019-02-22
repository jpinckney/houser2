module.exports = {

  getHouses: (req, res) => {
    console.log('hit get')
    const dbInstance = req.app.get('db')
    dbInstance.getHouses()
      .then(response => res.status(200).send(response))
    // .catch(err => {
    //   res.sendStatus(500)
    //   console.log(err)
    // })
  },

  create_house: (req, res) => {
    console.log('hit create')
    const { name, address, city, state, zipcode } = req.body
    const dbInstance = req.app.get('db')
    console.log(name, address, city, state, zipcode)
    dbInstance.createHouse(name, address, city, state, zipcode)
      .then(response => {
        res.status(200).send(response)
        // .catch(err => {
        //   res.sendStatus(500)
        // })
      })
  },
  delete_house: (req, res) => {
    console.log('hit delete')
    const dbInstance = req.app.get('db')
    const { id } = req.params
    dbInstance.deleteHouse(id)
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err =>{
        res.sendStatus(500)
      })
  }




}