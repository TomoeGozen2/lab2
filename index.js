import express from  'express'

const app = express()
const port = 3000;

app.get('/api/fun-fact', async(req, res) => {
    // res.send('Hello');
    try{
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        const data = await response.json()
    //     console.log(data)
    //    console.log(data.text) 
        res.json({fact:data.text})

    }
    catch(e){
         res.send(e)
    }

})

app.listen(port,() => {
    console.log(`The server is running on port: ${port} `)
})