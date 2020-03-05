const html = (id, aname, vname, age, date, time, comments) =>
    `<!DOCTYPE html>
    <head><title>Express Application</title><link rel="stylesheet" type="text/css" href="css/style.css"><body><div class="container"><div class="header"><h1>THANK YOU!</h1></div><div class="body"><div class="group"> <div class="output">ID: ${id}</div><div class="output">Visitors Name: ${vname}</div><div class="output">Age: ${age}</div><div class="output">Date of visit: ${date}</div><div class="output">Time of visit: ${time}</div><div class="output">Assistant: ${aname}</div><div class="output">Comment: ${comments}</div></div></div></div></body></head>`;

module.exports = html;
