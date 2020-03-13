'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path') 
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

// Definiendo el Schema
const schema = buildSchema(
  readFileSync(
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
  )
)

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
