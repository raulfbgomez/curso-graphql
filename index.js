'use strict'

const { graphql, buildSchema } = require('graphql')

// Definiendo el Schema
const schema = buildSchema(`
  type Query{
    hello: String
  }
`)

// Ejecutar el query hello
graphql(schema, '{ hello }').then((data) => {
  console.log(data)
})