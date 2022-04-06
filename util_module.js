const util =  require('util');
// In app.js we’ve required in an object containing long distance hiking trails in the US. You can view that object by opening the trails.js file from the navigator.

// Require in trails module from trails.js
const trails = require('./trails.js');
// Require in util module here

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {    
      const foundTrail = trails[trail];    
      callback(null, foundTrail)
    } else {
      callback(new Error('Trail not found!'))
    }
  }, 1000);
}

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback (error, trailData) {
  if (error) {
    console.error(error.message)
    process.exit(1)
  } else {
    const mi = trailData.miles;   
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`)
  }
}

getTrailDistance('North Country', callback)

// Promisfy below!

// using const, declare a variable, getTrailDistancePromise, and store util.promisify(getTrailDistance). Then, call the new promisified function, getTrailDistancePromise, with 'North Country' (or any trail property from the trails object in trails.js) as the only argument. Resolve the promise with a .then() method, and reject the promise with a .catch() method.

const getTrailDistancePromise = util.promisify(getTrailDistance)
getTrailDistancePromise('Pacific Crest')
.then((user) => {
console.log(`The ${user.nickname} is ${user.miles} miles long!`)
})
.catch(() => {

});





