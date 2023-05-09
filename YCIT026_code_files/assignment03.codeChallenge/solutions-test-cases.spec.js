import {
  areTowValuesAnagram,
  containsDuplicate,
  maxSubarraySum,
} from "./solutions";
// } from './solutions-not-commit';

describe("areTowValuesAnagram", () => {
  test("should return expected values", () => {
    expect(areTowValuesAnagram("abc", "bca")).toEqual("Anagram");
  });

  test("should return expected values", () => {
    expect(areTowValuesAnagram("doctorwho", "torchwood")).toEqual("Anagram");
  });

  test("should return expected values", () => {
    expect(areTowValuesAnagram("car", "ark")).toEqual("Not Anagram");
  });

  test("should return expected values", () => {
    expect(areTowValuesAnagram("tree", "book")).toEqual("Not Anagram");
  });

  test("should return expected values", () => {
    expect(areTowValuesAnagram("hello", "elolh")).toEqual("Anagram");
  });

  test("should return expected values", () => {
    expect(areTowValuesAnagram("jason", "sonja")).toEqual("Anagram");
  });
});

describe("containsDuplicate", () => {
  test("should return expected values", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
  });

  test("should return expected values", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
  });

  test("should return expected values", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });

  test("should return expected values", () => {
    expect(containsDuplicate([])).toEqual(false);
  });

  test("should return expected values", () => {
    expect(containsDuplicate([1, 3, 5, 7, 9, 11, 3, 15])).toEqual(true);
  });
});

describe("maxSubarraySum", () => {
  test("should return expected values", () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
  });

  test("should return expected values", () => {
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toEqual(39);
  });

  test("should return expected values", () => {
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toEqual(5);
  });

  test("should return expected values", () => {
    expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toEqual(5);
  });

  test("should return expected values", () => {
    expect(maxSubarraySum([2, 3], 3)).toEqual(null);
  });
});
