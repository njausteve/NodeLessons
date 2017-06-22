// process Argv 2

var questions = [
    "what is your name ?",
    "what is your Employee Id ?",
    "when did you join the company ?"
];
var waitTime = 3000;
var answers = [];

function ask(i) {

    process.stdout.write(` ${questions[i] }  \n \n`);
    process.stdout.write(` > `);
}


process.stdin.on('data', function(data) {


    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        setTimeout(function() {
                ask(answers.length);
            },

            waitTime
        );

    } else {
        process.exit();
    }
});
process.on('exit', function() {
    process.stdout.write(`your name is ${answers[0]} and your employee id is ${answers[1]} and you joined on ${answers[2]}.` + '\n');
});
ask(0);











//  process argv 1

/*function grab(flag) {



    var index = process.argv.indexOf(flag);

    return (index === -1) ? null : process.argv[index + 1];


}

var empId = grab("--empId");
var name = grab("--name");


if (!name || !empId) {
    console.log("Please Give arguments eg  --empId <your emp id here> --name <your name here>");
} else {
    console.log(`Hello ${name} is ${empId} your Human number ??!`);
}

*/