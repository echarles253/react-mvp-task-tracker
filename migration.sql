DROP TABLE IF EXISTS task_table;

CREATE TABLE IF NOT EXISTS tasks (
    task_id SERIAL PRIMARY KEY,
    task TEXT,
    task_time TEXT
);
 
 INSERT INTO tasks (task,task_time) VALUES 
 ('doctors appointment','Feb 15 2pm '),
 ('car maintence','Apr 7 4pm'),
 ('haircut','Feb 31 1am');