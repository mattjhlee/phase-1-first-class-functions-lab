// Code your solution in this file!
const returnFirstTwoDrivers = names => {
    return names.slice(0,2);
};

const returnLastTwoDrivers = names => {
    let numOfNames = names.length;
    return names.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier) {
    return function(value){
        return fareMultiplier * value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(names, func){
    return func(names);
}
