// IntegrationTest.ts
function add(a: number, b: number): number {
    return a + b;
  }
  
  function subtract(a: number, b: number): number {
    return a - b;
  }
  
  test('integration test example', () => {
    const result1 = add(5, 3);
    const result2 = subtract(8, 2);
  
    expect(result1).toBe(8); 
    expect(result2).toBe(6); 
  });
  
  