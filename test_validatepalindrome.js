// test_validatepalindrome.js

const validatePalindrome = require('./validatePalindrome');

test('returns true for a simple palindrome', () => {
  expect(validatePalindrome('racecar')).toBe(true);
});

test('returns false for a non-palindrome', () => {
  expect(validatePalindrome('hello')).toBe(false);
});

test('returns true for a palindrome with spaces and mixed case', () => {
  expect(validatePalindrome('A man a plan a canal Panama')).toBe(true);
});
