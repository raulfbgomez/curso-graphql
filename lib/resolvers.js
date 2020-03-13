'use strict'

const courses = [
  {
    _id: '122',
    title: 'Curso de ReactJS',
    teacher: 'Pablito Lopez',
    description: 'Un mal curso',
    topic: 'Programacion'
  },
  {
    _id: '123',
    title: 'Curso de NodeJS',
    teacher: 'Pablito Lopez',
    description: 'Un mal curso',
    topic: 'Programacion'
  }
]

module.exports = {
  courses: () => {
    return courses
  }
}