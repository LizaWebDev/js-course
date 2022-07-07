const data = {
   userId: 1,
   id: 1,
   title: 'Test title',
   status: {
      completed: false
   }
}

//Object to JSON

const stringifiedData = JSON.stringify(data)
console.log(stringifiedData)

//JSON to object

const dataObject = JSON.parse(stringifiedData)
console.log(dataObject)