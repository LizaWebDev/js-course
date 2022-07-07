const person = {
   name: 'Bob',
   age: 25
}

const person2 = person
person2.age = 26
person2.isAdult = true

//person has also been changed
console.log(person.age)
console.log(person.isAdult)

//How to avoid mutation

//1 (we can avoid mutating the root properties of the object)

const city = {
   name: 'New Yourk',
   isPopular: true
}
const city2 = Object.assign({}, city)

city2.name = 'Paris'

console.log(city.name)
console.log(city2.name)

//2 (we can avoid mutating the root properties of the object)

const myPost = {
   text: 'Hi everyone',
   likes: 25,
   comments: 5
}

const myPost2 = { ...myPost } //spread operator

myPost2.text = 'How are you?'

console.log(myPost.text)
console.log(myPost2.text)

//3 (we can completely avoid mutating the properties of the object)

const newMessages = {
   quantity: 2,
   message1: {
      text: 'Hi!',
      isRead: true
   },
   message2: {
      text: 'What are you doing',
      isRead: false
   }
}

const newMessages2 = JSON.parse(JSON.stringify(newMessages))

newMessages2.message2.isRead = true

console.log(newMessages.message2.isRead)
console.log(newMessages2.message2.isRead)