DROP TABLE IF EXISTS tasks;

CREATE TABLE IF NOT EXISTS tasks (
    task_id SERIAL PRIMARY KEY,
    task TEXT,
    task_time TEXT
);
 
 INSERT INTO tasks (task,task_time) VALUES 
 ('doctors appointment','Feb 15 2:00pm '),
 ('Car maintenance','Apr 7 4:00pm'),
 ('Haircut','Feb 31 1:00am');