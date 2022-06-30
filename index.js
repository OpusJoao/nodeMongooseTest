const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.use(express.json())


app.get('/',(req,res)=>{
    res.send({})
})

async function main() {
  await mongoose.connect('mongodb://10.150.2.188:27017,10.150.2.205:27017/?replicaSet=rs1');
}

main().then(()=>{
    console.log("mongo connected successfuly")
    app.listen(8081, ()=>{
        console.log('Server Running on port 8081')
        const kittySchema = new mongoose.Schema({
            name: String
          });
        const Kitten = mongoose.model('Kitten', kittySchema);
        const silence = new Kitten({ name: 'Silence' });
        console.log(silence);
    })
}).catch(err => console.log(err));