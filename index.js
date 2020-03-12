'use strict'

const { graphql, buildSchema } = require('graphql')

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

// Ejecutar el query hello
graphql(schema, '{ saludo }', resolvers).then((data) => {
  console.log(data)
})