const crypto = require("crypto");
const { getEventCandidate, createHash} = require("./utils");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionKey;

  if (event) {
    partitionKey = getEventCandidate(event)
  } else {
    partitionKey = TRIVIAL_PARTITION_KEY;
  }

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = createHash(partitionKey)
  }
  return partitionKey;
};


// EXPLANATION

// created reusable createHash helper function.
// This is used multiple times, so it made sense to have one
// function with data param. You could potentially pass in an algorithm and encoding param but these seme to be constant
// So i felt like it would be good to abstract these values away


// renamed the returned variable to partition key since that's what is actually being returned by the function
// created a function to get the event candidate if there is an event, and simply return trivial partition key if there is no event.

// cleaned up conditional checks when not needed. some of them were redundant