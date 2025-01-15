export const greet = (name: string = "Guest"): string => {
  return `Hello, ${name}!`;
};

// test
console.log(greet("boys"));
