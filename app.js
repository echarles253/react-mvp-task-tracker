const express = require("express");
const port = 3001;
const cors = require("cors");
const { Client } = require("pg");
const client = new Client({
  connectionString: "postgresql://postgres:docker@127.0.0.1:5432/task_tracker",
});
client.connect();
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static("public"));
app
  .route("/")
  .get((req, res) => {
    client.query("SELECT * FROM tasks").then((result) => {
      res.status(200).send(result.rows);
    });
  })
  .post((req, res) => {
    let { task, task_time } = req.body;
    // let {user_name,post_subject,post} = req.body
    //console.log(req.body, 'these are not null')
    client.query(
      "INSERT INTO tasks (task,task_time) VALUES ($1,$2) RETURNING *",
      [task, task_time],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result.rows);
          res.status(201).send(result.rows[0]);
        }
      }
    );
  });

app.delete("/:id", (req, res) => {
  let id = req.params.id;
  client.query("DELETE FROM tasks WHERE task_id=$1", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.rowCount === 0) {
      res.status(404).send("task not found");
    }
    res.status(201).send("task removed :)");
  });
});

app.listen(port, () => {
  console.log(`Listening in on ${port}`);
});
