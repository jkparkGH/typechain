import * as CryptoJS from "crypto-js";

function* indexMaker(indexNumber: number = 0): IterableIterator<number> {
  while (indexNumber < 10) {
    yield indexNumber++;
  }
}

const indexMakerStart = indexMaker();

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public timestamp: number;
  public data: string;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

  constructor(
    // index: number,
    hash: string,
    previousHash: string,
    timestamp: number,
    data: string
  ) {
    this.index = indexMakerStart.next().value;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }
}

const genesisBlock: Block = new Block(
  // index,
  "20418738298840498",
  "0",
  new Date().getTime(),
  "DATA_STRING_STRUCTURE"
);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLastestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLastestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimeStamp,
    data
  );

  return new Block(newHash, previousBlock.hash, newTimeStamp, data);
};

const getHashForBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addNewBlock = (candidateBlock: Block): boolean => {
  if (isBlockValid(candidateBlock, getLastestBlock())) {
    blockChain.push(candidateBlock);
    return true;
  } else {
    return false;
  }
};

export default () => {
  const timer = setInterval(() => {
    console.log("### blockChain.length ###", blockChain.length);
    console.log("### LASTEST BLOCK ###", getLastestBlock());
    addNewBlock(createNewBlock(`## No.${getNewTimeStamp()} chain block ##`))
      ? false
      : (() => {
          clearInterval(timer);
          console.log("### The End ###", blockChain);
        })();
  }, 1000);
};
