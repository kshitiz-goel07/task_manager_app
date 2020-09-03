// CRUD create read update delete

const { MongoClient , ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL , {useNewUrlParser : true} , (error,client) => {
if(error){
    return console.log("Unable to Connect to Database")
}
const db = client.db(databaseName)

// db.collection('users').findOne({name:'Ritik'}, (error, user)=>{
//            if(error){
//                return console.log('unable to fetch !')
//            }
//            console.log(user)

db.collection('tasks').findOne({_id : new ObjectID("5f4e29610d18bb22ac2c795f") },(error , task)=>{
console.log(task) 
})



db.collection('tasks').find({complete : true}).toArray((error , task)=>{
console.log(task)
})
})