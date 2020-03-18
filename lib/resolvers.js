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
  Query:  {
    courses: () => {
      return courses
    },
    course: (root, args) => {
      const course = courses.filter(course => course._id === args.id)
      return course.pop()
    }
  }
}