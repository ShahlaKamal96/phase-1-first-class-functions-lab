// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => (fee) => fee * multiplier;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driverSelector) => driverSelector(drivers);