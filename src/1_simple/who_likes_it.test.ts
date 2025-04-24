// Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// connect: regex

// function likes(names) {
//   let length = names.length
//   let likes = ' likes this'
//   let like = ' like this'
//   return length == 0 ? 'no one' + likes:
//          length == 1 ? names[0] + likes:
//          length == 2 ? names[0] + ' and ' + names[1] + like:
//          length == 3 ? names[0] + ', ' + names[1] + ' and ' + names[2] + like:
//          names[0] + ', ' + names[1] + ' and ' + (length - 2) + ' others' + like
// }


function likes (names: string[]) {
  var templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  
  return templates[idx].replace(/{name}|{n}/g, function (val: string): string {
    return val === '{name}' ? names.shift() || '' : (names.length).toString();
  });
} 

test("who likes it", () => {
  expect(likes([])).toBe('no one likes this');
  expect(likes(['Peter'])).toBe('Peter likes this');
  expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
  expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
  expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
})
