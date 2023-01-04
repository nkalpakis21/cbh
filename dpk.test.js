const { deterministicPartitionKey} = require("./dpk");
const { createHash} = require("./utils");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Returns correct key when input is given", () => {
    const ACTUAL_KEY = deterministicPartitionKey({partitionKey: 'key'});
    const EXPECTED_KEY = "key"
    expect(ACTUAL_KEY).toBe(EXPECTED_KEY);
  });
});

describe("createHash", () => {
  it("Handles error when no data is passed in", () => {
    expect(createHash).not.toThrowError(TypeError);
  });
  it("Returns correct hash", () => {
    // we can exhaust theis test by passing in other values
    const hash = createHash("0");
    const EXPECTED_HASH = "2d44da53f305ab94b6365837b9803627ab098c41a6013694f9b468bccb9c13e95b3900365eb58924de7158a54467e984efcfdabdbcc9af9a940d49c51455b04c"
    expect(hash).toBe(EXPECTED_HASH);
  });
});
