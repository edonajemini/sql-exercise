import Database from "better-sqlite3";
const db = Database("../db/data.db", {verbose: console.log})

const teacher = [
    {
        name: "Nicolas",
        age:34
    },
    {
        name: "Ed",
        age:28
    }
]
const deleteallteachers = db.prepare(`DELETE FROM teachers;
`)
deleteallteachers.run()

const deleteallstudents = db.prepare(`DELETE FROM students;
`)
deleteallstudents.run()


const createTeachersTable = db.prepare(`
INSERT INTO teachers (name, age) VALUES (?,?);
`
)
createTeachersTable.run('Nicolas', 34)
createTeachersTable.run('Ed', 28)


const createStudentsTable = db.prepare(`
INSERT INTO students (name, age) VALUES (?,?);
`
)
createStudentsTable.run('Edona',22)
createStudentsTable.run('Arbenit',21)