// CRUD create read update delete

const { MongoClient , ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL , {useNewUrlParser : true} , (error,client) => {
if(error){
    return console.log("Unable to Connect to Database")
}
const db = client.db(databaseName)

// db.collection('users').insertOne({
//     name : 'Kshitiz Goel',
//     age : 20
// }, (error, result) => {
//       if(error){
//           return console.log("Can't update to table")
//       }
//       console.log(result.ops)
// })
// db.collection('users').insertMany([
//     {
//         name : 'vansh',
//         age : 21
//     },
//     {
//         name : 'Ritik',
//         age : 22
//     }
// ],(error, result)=>{
//     if(error){
//         return console.log('Unable to update table')
//     }
//     console.log(result.ops)
// })
db.collection('tasks').insertMany([
    {
        description : "Cleaned house",
        complete : true
    },
    {
        description : "Cleaned car",
        complete : true
    },
    {
        description : "painting done",
        complete : false
    }
],(error,result)=>{
    if(error){
        return console.log("Unable to update")
    }
    console.log(result.ops)
})
})