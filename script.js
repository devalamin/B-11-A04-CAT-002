function calculateVAT(price) {

    if (typeof price !== 'number' || price < 0) {
        return "Invalid"
    }
    const vatRate = 7.5;
    return (price * vatRate) / 100;
};


function validContact(contact) {
    if (typeof contact !== 'string') {
        return 'Invalid'
    };


    if (contact.length !== 11) {
        return false;
    };
    const firstCharacter = contact[0];
    const secondCharacter = contact[1];

    if (firstCharacter !== '0' || secondCharacter !== '1') {
        return false;
    };

    for (const single of contact) {
        if (isNaN(single) || single === ' ') {
            return false
        }
    };

    return true;

};


function willSuccess(marks) {

    if (!Array.isArray(marks)) {
        return 'Invalid'
    };

    let passedExam = [];
    let failedExam = [];

    for (const mark of marks) {
        if (typeof mark !== 'number') {
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


function validProposal(person1, person2) {
    if ((typeof person1 !== 'object' || typeof person2 !== 'object') || (Array.isArray(person1) || Array.isArray(person2))) {
        return 'Invalid'
    }

    const gender1 = person1.gender;
    const gender2 = person2.gender;
    const age1 = person1.age;
    const age2 = person2.age;

    if (gender1 !== gender2 && Math.abs(age1 - age2) <= 7) {
        return true;
    }
    else {
        return false
    }
};


function calculateSleepTime(times) {
    let totalSeconds = 0;
    let finalTime = {};
    for (const time of times) {
        if (typeof time !== 'number') {
            return 'Invalid'
        }
        totalSeconds = totalSeconds + time;
    }

    const oneHour = 3600;
    const oneMinute = 60;

    const hours = Math.floor(totalSeconds / oneHour);
    const afterOneHour = totalSeconds % oneHour;
    const remainingMinutes = Math.floor(afterOneHour / oneMinute);
    const seconds = totalSeconds % oneMinute;


    finalTime.hours =hours ;
    finalTime.minutes = remainingMinutes;
    finalTime.seconds = seconds;

    return finalTime;
};

const sleepTie = [5600]

const output = calculateSleepTime(sleepTie)
console.log(output);


