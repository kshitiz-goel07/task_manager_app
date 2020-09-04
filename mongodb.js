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

// db.collection('users').updateOne({
//     _id : new ObjectID("5f4e262eeebfd42008c4d8e0")
// },{
//     $set : {
//         name : 'arpit'
//     },
//     $inc : {
//         age : 2
//     }
// }).then((result)=>{
// console.log(result)
// }).catch((error)=>{
// console.log(error)
// })
// db.collection('tasks').updateMany({
//     complete : true 
// }, {
//     $set : {
//         complete : false
//     }
// }).then((result)=>{
//     console.log(result.modifiedCount)
// }).catch((error)=>{
//     console.log(error)
// })
db.collection('users').deleteMany({
    age : 22
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
})
