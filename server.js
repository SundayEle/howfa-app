const express = require('express')
const app = express()


app.get("/api", (req, res) =>{
 res.json({msg : 'you are successfully connected to the backend!'})
})

app.listen(process.env.PORT || 5000, () => {
 console.log(`server is running on PORT 5000 ${process.env.PORT}`)
})