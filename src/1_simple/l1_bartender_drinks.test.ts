// connect: undefined

function getDrinkByProfession(param: string){
  const profession = param.toLowerCase()
  const drinkByProfession: Record<string,string> = {
    "jabroni":  "Patron Tequila",
    "school counselor": "Anything with Alcohol",
     "programmer":   "Hipster Craft Beer",
     "bike gang member":  "Moonshine" ,
     "politician":  "Your tax dollars" ,
     "rapper":  "Cristal" 
  } 
        
 return drinkByProfession[profession] || "Beer" 

}

test("get drink by profession", () => {
  expect(getDrinkByProfession("jabroni")).toBe("Patron Tequila")
  expect(getDrinkByProfession("programmer")).toBe("Hipster Craft Beer")
  expect(getDrinkByProfession("bike gang member")).toBe("Moonshine")
  expect(getDrinkByProfession("Tokar")).toBe("Beer")
})