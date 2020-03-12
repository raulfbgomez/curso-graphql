'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 3000

// Definiendo el Schema
const schema = buildSchema(`
  type Query{
    hello: String
    saludo: String
  }
`)

// Configurar los resolvers
const resolvers = {
  hello: () => {
    return 'Hello World'
  },
  saludo: () => {
    return 'Hola buenas noches'
  }
}

// Ejecutar el query hello en consola
// graphql(schema, '{ saludo }', resolvers).then((data) => {
//   console.log(data)
// })

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}/api`)
})