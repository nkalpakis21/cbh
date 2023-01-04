const { deterministicPartitionKey} = require("./dpk");
const { createHash, getEventCandidate} = require("./utils");

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

describe("getEventCandidate", () => {
  it("Returns correct hash when the partitionKey field is present", () => {
    // we can exhaust theis test by passing in other values
    const PARTITION_KEY = "some-key";
    const eventCandidate = getEventCandidate({partitionKey: PARTITION_KEY});
    expect(eventCandidate).toBe(PARTITION_KEY);
  });
  it("Returns correct hash when the partitionKey field is present", () => {
    // we can exhaust theis test by passing in other values
    const PARTITION_KEY = "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862";
    const eventCandidate = getEventCandidate({});
    expect(eventCandidate).toBe(PARTITION_KEY);
  });
});