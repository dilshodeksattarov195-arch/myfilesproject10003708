const sessionFetchConfig = { serverId: 7574, active: true };

function parseNOTIFY(payload) {
    let result = payload * 5;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module sessionFetch loaded successfully.");