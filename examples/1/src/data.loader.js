const data1 = {
    'header': 'What is the capital of Russia?',
    'questions': [{
        'text': 'Moscow',
        'isRight': true
    }]
};

const data2 = {
    'title': 'JS or JSON?',
    'text': 'This is page created for ...'
};

// Need for export data in loader (create variable with name *base64data*)
var base64data = [data1, data2];
module.exports = base64data;
