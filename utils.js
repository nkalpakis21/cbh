const crypto = require("crypto");

exports.createHash = (data) => {
    try {
        return crypto.createHash("sha3-512").update(data).digest("hex");
    } catch (e) {
        console.error(e);
    }
}

// I'm not sure the correct way to export this function but also use it in this file
const createHash = (data) => {
    try {
        return crypto.createHash("sha3-512").update(data).digest("hex");
    } catch (e) {
        console.error(e);
    }
}

exports.getEventCandidate = (event) => {
    let eventCandidate;
    if (event.partitionKey) {
        eventCandidate = event.partitionKey;
        if (typeof eventCandidate !== "string") {
            eventCandidate = JSON.stringify(eventCandidate);
        }
    } else {
        const data = JSON.stringify(event);
        eventCandidate =  createHash(data);
    }

    return eventCandidate;
}