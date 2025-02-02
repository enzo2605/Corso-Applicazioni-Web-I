import sqlite from 'sqlite3';
import dayjs from 'dayjs';

// Apertura database e creazione oggetto
const db = new sqlite.Database("questions.sqlite", (err) => {
    if (err) {
        console.error("Errore nell'apertura del database", err.message);
    } else {
        console.log("Connesso al database");
    }
});

// Oggetto rappresentante le domande (con le sue proprietà e metodi)
function Question(id, text, email, date) {
    this.id = id;
    this.text = text;
    this.email = email;
    this.date = dayjs(date);

    // metodo per prendere tutte le risposte della Question instanziata
    this.getAnswers = () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT A.ID, A.TEXT, U.EMAIL, A.DATE, A.SCORE FROM ANSWER A JOIN USER U ON A.AUTHORID = U.ID WHERE A.QUESTIONID = ?';
            db.all(sql, [this.id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    const answers = rows.map((answer) => new Answer(answer.id, answer.text, answer.email, answer.date, answer.score));
                    resolve(answers);
                }
            });
        });
    };

    // metodo per aggiungere una nuova risposta di un autore esistente alla Question instanziata
    this.addAnswer = (answer) => {
        return new Promise((resolve, reject) => {
            // Recupera l'authorId dalla tabella degli utenti
            const sql = 'SELECT ID FROM USER WHERE EMAIL = ?';
            db.get(sql, [answer.email], (err, row) => {
                if (err) {
                    reject(err);
                } else if (row !== undefined) {
                    const sql = "INSERT INTO ANSWER (TEXT, AUTHORID, DATE, SCORE, QUESTIONID) VALUES (?, ?, DATE(?), ?, ?)";
                    const params = [
                        answer.text,
                        row.id, // L'author id recuperato dalla query di sopra
                        answer.date.toISOString(), // Data in formato ISO
                        answer.score,
                        this.id // ID della domanda
                    ];
                    db.run(sql, params, function(err) { // Usa 'function(err)' per accedere a this.lastID
                        if (err) {
                            reject(err);
                        } else {
                            resolve(this.lastID); // this.lastID contiene l'ID dell'ultima riga inserita
                        }
                    });
                }
            })
        });
    };

    // metodo per prendere tutte le top "num" risposte della Question instanziata
    this.getTop = (num) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT A.*, U.EMAIL FROM ANSWER A JOIN USER U ON A.AUTHORID = U.ID WHERE A.QUESTIONID = ? ORDER BY A.SCORE DESC LIMIT ?';
            db.all(sql, [this.id, num], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    const topAnswers = rows.map(row => new Answer(row.id, row.text, row.email, row.date, row.score))
                    resolve(topAnswers);
                }
            });
        });
    };
}

// Oggetto rappresentante le risposte (con le sue proprietà)
function Answer(id, text, email, date, score = 0) {
    this.id = id;
    this.text = text;
    this.email = email;
    this.date = dayjs(date);
    this.score = score;
}

function QuestionList() {
    // pass a fully-constructed Question object.
    this.addQuestion = (question) => {
        return new Promise((resolve, reject) => {
            // Recupera l'authorId dalla tabella degli utenti
            const sql = 'SELECT ID FROM USER WHERE EMAIL = ?';
            db.get(sql, [question.email], (err, row) => {
                if (err) {
                    reject(err);
                } else if (row !== undefined) {
                    const sql = "INSERT INTO QUESTION (TEXT, AUTHORID, DATE) VALUES (?, ?, DATE(?))";
                    const params = [
                        question.text,
                        row.id, // L'author id recuperato dalla query di sopra
                        question.date.toISOString(), // Data in formato ISO
                    ];
                    db.run(sql, params, function(err) { // Usa 'function(err)' per accedere a this.lastID
                        if (err) {
                            reject(err);
                        } else {
                            resolve(this.lastID); // this.lastID contiene l'ID dell'ultima riga inserita
                        }
                    });
                }
            })
        });
    };

    // returns a Promise that resolves to a Question with the given id.
    this.getQuestion = (id) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT Q.*, U.EMAIL FROM QUESTION Q JOIN USER U ON Q.AUTHORID = U.ID WHERE Q.ID = ?';
            db.get(sql, [id], (err, row) => {
                if (err) {
                    reject(err);
                } else if (row !== undefined) {
                    const question = new Question(id, row.text, row.email, row.date);
                    resolve(question); 
                }
            });
        });
    };
    
    // returns a Promise that resolves to an array with all the Questions after the given date.
    this.afterDate = (date) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT Q.*, U.EMAIL FROM QUESTION Q JOIN USER U ON Q.AUTHORID = U.ID WHERE Q.DATE > ?';
            db.all(sql, [dayjs(date).toISOString()], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    const questions = rows.map(row => new Question(row.id, row.text, row.email, row.date));
                    resolve(questions);
                }
            });
        });
    };
}

//let fake = new Question(1, '', '', '');
//fake.getAnswers().then(results => console.log(results));

async function main() {
    let answer1 = new Answer(0, 'I do not know', "luca.mannella@polito.it", '03-02-2024', -20);
    let fake = new Question(1, '', '', '');
    
    // Aggiungi una risposta
    //let newID = await fake.addAnswer(answer1);
    //console.log(newID);

    // Top 2 risposte
    //let topAnswers = await fake.getTop(2);
    //console.log(topAnswers);

    // Aggiungi una nuova question
    //let newQuestion = new Question(0, 'Why the sky is blue?', 'albert.einstein@relativity.org', '04-02-2024');
    let questionList = new QuestionList();
    //let newQuestionId = await questionList.addQuestion(newQuestion);
    //console.log(newQuestionId);

    // Ritorna la question con id 3
    //let question3 = await questionList.getQuestion(3);
    //console.log(question3);

    // Ritorna tutte le domande dopo una certa data
    let questionsAfterDate = await questionList.afterDate('03-02-2024');
    console.log(questionsAfterDate);
}

main();