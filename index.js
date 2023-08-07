const express = require('express');
const app = express();

app.use(express.json());
function addList(request, response) {
    const list = request.body.list;
    let sum = 0;
    for (let i = 0; i < list.length; i++){
        sum += list[i];
    }
    console.log(list);
    response.send({"sum":sum});
}

app.get('/addList', addList);

const port = 3001;
const id = "localhost";
app.listen(port, id, ()=> {
    console.log("Server started");
})