function willSuccess(marks) {

    if (!Array.isArray(marks)) {
        return 'Invalid'
    };

    let passedExam = [];
    let failedExam = [];

    for (const mark of marks) {
        if(typeof mark !=='number'){
            return 'Invalid'
        }
        if (mark >= 50) {
            passedExam.push(mark)
        }
        else {
            failedExam.push(mark)
        }
    }

    if (passedExam.length > failedExam.length) {
        return true;
    }
    else {
        return false;
    }
};

console.log(willSuccess([55, 75, 33, 0, 87, 91, 30]));