import {
  findDifferenceMaxAndMin,
  findTargetFromUniqueSortedArray,
  isPrime,
  findGcd,
  primeFactors,
  findGcdAndDecomposeToPrimeFactors,
} from "./solutions";

describe("findDifferenceMaxAndMin", () => {
  test("should return expected values", () => {
    expect(
      findDifferenceMaxAndMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12])
    ).toEqual(11);
  });

  test("should return expected values", () => {
    expect(
      findDifferenceMaxAndMin([
        101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9,
      ])
    ).toEqual(5998.777);
  });

  test("should return expected values", () => {
    expect(findDifferenceMaxAndMin([-50, 225, 34, 66, 79, 5978, 351])).toEqual(
      6028
    );
  });
});

describe("findTargetFromUniqueSortedArray", () => {
  test("should return expected values", () => {
    expect(findTargetFromUniqueSortedArray([1, 2, 5, 2, 3], 2)).toEqual(1);
  });

  test("should return expected values", () => {
    expect(
      findTargetFromUniqueSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12], 9)
    ).toEqual(8);
  });

  test("should return expected values", () => {
    expect(
      findTargetFromUniqueSortedArray(
        [101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9],
        697.77
      )
    ).toEqual(6);
  });
  test("should return expected values", () => {
    expect(
      findTargetFromUniqueSortedArray(
        [36, 99, 36, 99, 36, 99, 36, 99, 36, 99],
        99
      )
    ).toEqual(1);
  });
  test("should return expected values", () => {
    expect(
      findTargetFromUniqueSortedArray(
        [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1,
        ],
        1
      )
    ).toEqual(0);
  });
  test("should return expected values", () => {
    expect(findTargetFromUniqueSortedArray([5, 4, 3, 2, 1], 5)).toEqual(4);
  });
});

describe("isPrime", () => {
  test("should return expected values", () => {
    expect(isPrime(1)).toEqual(true);
  });
  test("should return expected values", () => {
    expect(isPrime(3)).toEqual(true);
  });
  test("should return expected values", () => {
    expect(isPrime(11)).toEqual(true);
  });
  test("should return expected values", () => {
    expect(isPrime(27)).toEqual(false);
  });
  test("should return expected values", () => {
    expect(isPrime(15)).toEqual(false);
  });
});

describe("findGcd", () => {
  test("should return expected values", () => {
    expect(findGcd(11, 12)).toEqual(1);
  });

  test("should return expected values", () => {
    expect(findGcd(25, 15)).toEqual(5);
  });

  test("should return expected values", () => {
    expect(findGcd(100, 200)).toEqual(100);
  });

  test("should return expected values", () => {
    expect(findGcd(81, 156)).toEqual(3);
  });
});

describe("primeFactors", () => {
  test("should return expected values", () => {
    expect(primeFactors(15)).toEqual([3, 5]);
  });

  test("should return expected values", () => {
    expect(primeFactors(100)).toEqual([2, 5]);
  });
  test("should return expected values", () => {
    expect(primeFactors(300)).toEqual([2, 3, 5]);
  });
});

describe("findGcdAndDecomposeToPrimeFactors", () => {
  test("should return expected values", () => {
    expect(findGcdAndDecomposeToPrimeFactors(14, 28)).toEqual({
      gdcValue: 14,
      primeFactorArray: [2, 7],
    });
  });

  test("should return expected values", () => {
    expect(findGcdAndDecomposeToPrimeFactors(35, 15)).toEqual({
      gdcValue: 5,
      primeFactorArray: [5],
    });
  });

  test("should return expected values", () => {
    expect(findGcdAndDecomposeToPrimeFactors(100, 180)).toEqual({
      gdcValue: 20,
      primeFactorArray: [2, 5],
    });
  });
});
