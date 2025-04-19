// Grasshopper - Debug
// https://www.codewars.com/kata/55cb854deb36f11f130000e1/train/javascript
// connect: undefined

function weatherInfo (temp: number) {
  var c = convertToCelsius(temp)
  if (c <= 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (fahrenheit: number) {
  var celsius = (fahrenheit - 32) * (5/9)
  return celsius
}

test("should be freezing or above freezing temperature", () => {
  expect(weatherInfo(50)).toBe('10 is above freezing temperature')
  expect(weatherInfo(23)).toBe('-5 is freezing temperature')
})