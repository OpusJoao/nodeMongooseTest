const express = require('express')
const app = express()
const mongoose = require('mongoose');
let model;

app.use(express.json())


app.get('/',async (req,res)=>{
	const data = await model.find({})
    	res.send({data})
})

async function main() {
  await mongoose.connect('mongodb://x.x.x.x:27017,x.x.x.x:27017/?replicaSet=rs1');
}

main().then(()=>{
    console.log("mongo connected successfuly")
    app.listen(8081, ()=>{
        console.log('Server Running on port 8081')
        const kittySchema = new mongoose.Schema({
            name: String
          });
        const Kitten = model = mongoose.model('Kitten', kittySchema);
        const silence = new Kitten({ name: 'Silence' });
	silence.save().then( data =>console.log(silence,data) )
    })
}).catch(err => console.log(err));