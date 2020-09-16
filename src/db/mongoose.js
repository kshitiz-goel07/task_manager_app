const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser : true,
    useCreateIndex : true
})

const User = mongoose.model('User', {
    name : {
           type : String,
           required : true,
           trim : true
    },
    age : {
             type : Number,
             required : true ,
             default : 0 ,
             validate(value){
                if(value < 0){
                    throw new Error('Age Must be positive ')
                }
             }
    },
    email : {
        type : String,
        trim : true ,
        required : true ,
        lowercase : true ,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email Format is Incorrect !')
            }
        }
    },
    password : {
        type : String,
        trim : true,
        required : true ,
        minlength : 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                     throw new Error('Password can not be "password"')
            }
        }
    }
})

const me = new User({
    name : '    kshitiz Goel      ',
    age : 20 ,
    email : 'KSHITIZ123GOEL@GMAIL.COM       ',
    password : '123PASsword'
})

me.save().then(()=>{
    console.log(me)
}).catch((e)=>{
    console.log(e)
})

// const Task = mongoose.model('Task',{
//     description : {
//         type : String
//     }, 
//     completed : {
//         type : Boolean
//     }
// })

// const task = new Task({
//     description : 'pot plants',
//     completed : false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((e)=>{
//     console.log(e)
// })

