// 'use strict'; di default con i moduli ES
import dayjs from 'dayjs';

function Answer (text, username, date, score=0) {
    this.text = text;
    this.username = username;
    this.score = score;
    this.date = dayjs(date);

    this.toString = () => {
        return `${this.username} ha risposto ${this.text} in data ${this.date} con uno score di ${this.score}`;
    }
}

function Question (text, username, date) {
    this.text = text;
    this.username = username;
    this.date = dayjs(date);
    this.answers = [];

    this.add = (answer) => {
        this.answers.push(answer); 
    }

    this.find = (username) => {
        /*const foundAnswers = [];
        for (const answer of this.answers) {
            if (answer.username === username) {
                foundAnswers.push(answer);
            }
        }
        return foundAnswers;*/
        return this.answers.filter((answer) => answer.username === username);
    }

    this.afterDate = () => {
        return this.answers.filter((answer) => answer.date.isAfter(this.date));
    }
    
    this.listByDate = () => {
        return [...this.answers].sort((a, b) => a.date.isAfter(b.date) ? 1 : -1);
    }
    
    this.listByScore = () => {
        return [...this.answers].sort((a, b) => b.score - a.score);
    }
}

let question1 = new Question('JavaScript è meglio di Python?', 'Vincenzo Iannucci', '2024-02-27');
let answer1 = new Answer('Yes', 'Mario', '2024-03-01');
let answer2 = new Answer('No', 'Guido Van Rossum', '2024-03-11', 20);
let answer3 = new Answer('Yes', 'Mario', '2024-03-12', 10);
let answer4 = new Answer('No', 'Alber Einstein', '2024-03-27', 2);

question1.add(answer1);
question1.add(answer2); 
question1.add(answer3);
question1.add(answer4);

const findAnswers = question1.find('Mario');
console.log(findAnswers);
console.log("Risultato: " + findAnswers);

const listByDate = question1.listByDate();
console.log("listByDate");
listByDate.forEach((answer) => {
    console.log(answer.date.format('DD-MM-YYYY'));
});

const listByScore = question1.listByScore();
console.log("listByScore");
listByScore.forEach(answer => {
    console.log(answer.score);
});