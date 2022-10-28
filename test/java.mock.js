class HashSet {
  constructor () {
    this.add = jest.fn();
  }
}

class ArrayList {
  constructor () {
    this.add = jest.fn();
  }
}

class UUID {
  constructor () {
    this.toString = jest.fn();
  }
}

UUID.randomUUID = jest.fn();

const TYPES = {
  'java.util.UUID': UUID,
  'java.util.HashSet': HashSet,
  'java.util.ArrayList': ArrayList
};

Java = {
  type: type => TYPES[type],
  from: jest.fn(),
  isType: jest.fn()
};

module.exports = {
  ArrayList,
  HashSet,
  UUID
};