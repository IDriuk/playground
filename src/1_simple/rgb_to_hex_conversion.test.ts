// RGB To Hex Conversion
// The rgb function is incomplete. 
// Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. 
// Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
// connect: undefined

function rgb(r: number, g: number, b: number){
  r = r < 0 ? 0 : r > 255 ? 255 : r
  g = g < 0 ? 0 : g > 255 ? 255 : g
  b = b < 0 ? 0 : b > 255 ? 255 : b
  
  function pad(v: (string | number)) {
    v = v.toString(16)
    if (v.length < 2) { 
      v = '0' + v
    }
    return v.toUpperCase()
  }
  
  return `${pad(r)}${pad(g)}${pad(b)}`
}

/*
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}  
*/

test("should convert rgb to hex", () => {
  expect(rgb( 0, 0, 0)).toBe('000000');
  expect(rgb( 0, 0, -20)).toBe('000000');
  expect(rgb(300, 255, 255)).toBe('FFFFFF');
  expect(rgb(173, 255, 47)).toBe('ADFF2F');
})