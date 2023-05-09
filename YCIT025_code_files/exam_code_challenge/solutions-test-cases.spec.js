import {
  simpleArraySum,
  calculateTeamScore,
  findMinMax,
} from './solutions';


describe('simpleArraySum', () => {
  test('should return expected values', () => {
    expect(simpleArraySum([1, 2, 3])).toEqual(6);
  });

  test('should return expected values', () => {
    expect(simpleArraySum([1, 2, 3, 4, 10, 11])).toEqual(31);
  });

  test('should return expected values', () => {
    expect(simpleArraySum([77, 25, 66, 99, 85, -125, 555])).toEqual(782);
  });
});


describe('calculateTeamScore', () => {

  test('should return expected values', () => {
    expect(calculateTeamScore(['win', 'lose', 'draw'])).toEqual(4);
  });

  test('should return expected values', () => {
    expect(calculateTeamScore(['win', 'win', 'win', 'lose'])).toEqual(9);
  });


  test('should return expected values', () => {
    expect(calculateTeamScore(['draw', 'draw', 'draw'])).toEqual(3);
  });

  test('should return expected values', () => {
    expect(calculateTeamScore(['lose', 'lose', 'draw'])).toEqual(1);
  });

  test('should return expected values', () => {
    expect(calculateTeamScore(['lose', 'lose', 'win', 'lose'])).toEqual(3);
  });

  test('should return expected values', () => {
    expect(calculateTeamScore(['win', 'win', 'win', 'win', 'win', 'win', 'win', 'win', 'win', 'win', 'win', 'win', 'win', 'win', 'win', 'win', 'win', 'win',])).toEqual(54);
  });

  test('should return expected values', () => {
    expect(calculateTeamScore(['lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose', 'lose',])).toEqual(0);
  });

  test('should return expected values', () => {
    expect(calculateTeamScore(['draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw', 'draw',])).toEqual(18);
  });

});

describe('findMinMax', () => {
  test('should return expected values', () => {
    expect(findMinMax([17, 15, 39, 51, 14, 32, 28])).toEqual([14, 51]);
  });
  test('should return expected values', () => {
    expect(findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toEqual([1, 11]);
  });
  test('should return expected values', () => {
    expect(findMinMax([3, 3, 3, 3, 3])).toEqual([3, 3]);
  });
  test('should return expected values', () => {
    expect(findMinMax([1, 2, 3])).toEqual([1, 3]);
  });

  test('should return expected values', () => {
    expect(findMinMax([1, 2, 3, 4, 10, 11])).toEqual([1, 11]);
  });

  test('should return expected values', () => {
    expect(findMinMax([-Number.MAX_SAFE_INTEGER, 0, 1, 2, 3, 4, 5, Number.MAX_SAFE_INTEGER])).toEqual([-9007199254740991, 9007199254740991]);
  });
  test('should return expected values', () => {
    expect(findMinMax([-Infinity, 0, 1, 2, 3, 4, 5, Infinity])).toEqual([-Infinity, Infinity]);
  });
});
