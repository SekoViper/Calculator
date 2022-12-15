import calculate from '../../Logic/calculate';
import operate from '../../Logic/operate';

// test operate.js
describe('Find out if Operations are working', () => {
  test('Return values', () => {
    // Arrange
    const num1 = 6;
    const num2 = 4;
    const operator = '+';

    // Act
    const result = operate(num1, num2, operator);

    // Assert
    expect(result).toBe('10');
  });

  // Test calculate.js
  test('Get value returned', () => {
    // Arrange
    let results = {};
    const setResults = (result) => {
      results = result;
    };
    const input = '8';
    // Act
    const newResult = calculate(results, input);
    setResults(newResult);
    // Assert
    expect(JSON.stringify(results)).toBe('{"next":"8","total":null}');
  });
});
