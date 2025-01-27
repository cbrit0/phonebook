const mongoose = require('mongoose')

const [password, name, number] = process.argv.slice(2);

if (!password) {
    console.log('give password as argument')
    process.exit(1)
  }

const url =
  `mongodb+srv://cristobalbritop:${password}@fullstack-open.a5jqd.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=fullstack-open`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (name && number) {
  const person = new Person({ name, number })
  person.save()
    .then(() => {
      console.log(`added ${name} number ${number} to phonebook`)
      mongoose.connection.close()
    })
} else {
  Person.find({})
    .then(persons => {
      console.log('phonebook:')
      persons.forEach(person => {
        console.log(`${person.name} ${person.number}`)
      })
      mongoose.connection.close()
    })
}
