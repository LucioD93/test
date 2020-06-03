function cleanEmail(email) {
    splited = email.split('@');
    splited[0] = splited[0].split('+')[0];
    splited[0] = splited[0].split('.').join('');
    email = splited[0] + '@' + splited[1];
    return email
}

function emailsUnicos(emails) {
    var results = new Set();
    emails.forEach(email => {
        cleaned = cleanEmail(email);
        results.add(cleaned);
    });
    console.log(results);
    return results.size;
}

testArray = [
    'a.sd.f@qwe.qwe',
    'asdf+df@qwe.qwe',
    'asd.fdf@qwe.qwe',
    'as.df+.df@qwe.qwe',
    'asd.f+df@qwe.qwe',
    'a.sdf+df@qwe.qwe',
    'asdf+df@qwe.qwe',
    'qwer@qsad.asdf',
];
console.log(emailsUnicos(testArray));