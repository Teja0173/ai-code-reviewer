const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("AI Code Reviewer Running");
});

app.get('/review', (req, res) => {
    res.send({
        status: "Review Complete",
        issues: [
            "Unused variable detected",
            "Use const instead of var"
        ]
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});