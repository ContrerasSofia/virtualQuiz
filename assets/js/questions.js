// list of all questions, choices, and answers
var questions = [
  {
    title: 'Inside which HTML element do we put the JavaScript?',
    choices: ['<javascript>', '<scripting>', '<js>', '<script>'],
    answer: '<script>',
  },{
    title: 'JavaScript is a ___ -side programming language.',
    choices: ['Client', 'Server', 'Both', 'None'],
    answer: 'Both',
  },{
    title: 'Can you guess the result? console.log(("b" + "a" + + "a" + "a").toLowerCase());',
    choices: ['banana', 'BAAA', 'baaa', 'babaa'],
    answer: 'baaa',
  },{
    title: 'How do you find the minimum of x and y using JavaScript?',
    choices: ['min(x,y)', 'Math.min(x,y)', 'Math.min(xy)', 'min(xy);'],
    answer: 'Math.min(x,y)',
  },{
    title: 'Which built-in method returns the length of the string?',
    choices: ['length()', 'size()', 'index()', 'None of the above'],
    answer: 'length()',
  },{
    title: 'Which is the correct way to write a comment in JavaScript?',
    choices: ['{# ... #}', '<!--- .... ---!>', '// ....', '\\ ...'],
    answer: '// ....',
  },{
    title: 'How do you declare a new date in JavaScript?',
    choices: ['var date = Date();', 'var date = date("now");', 'var date = new Date();', 'var date = date().current();'],
    answer: 'var date = Date();',
  },
];
