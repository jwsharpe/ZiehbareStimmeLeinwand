# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all
Project.destroy_all

Project.create({
  id: 1,
  title: "work",
})

Project.create({
  id: 2,
  title: "school",
})

Todo.create({
  id: 1,
  title: "title",
  project_id: 1,
  content: "this is content.",
})

Todo.create({
  id: 2,
  title: "title two",
  project_id: 2,
  content: "i love content.",
})

Todo.create({
  id: 3,
  title: "title three",
  project_id: 1,
  content: "threefa.",
})



