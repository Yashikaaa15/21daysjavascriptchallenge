// declaring an array named favoriteColors containing atlest 5 of your favorite colors as strings
const favoriteColor=["blue","pink","lavander","grey","black"]
let color=favoriteColor[2];
console.log(color)
// adding Elements to the Array(both beginning and end) using push pop shift splice
favoriteColor.push("orange")
console.log(favoriteColor)
favoriteColor[0]="green"
console.log(favoriteColor)
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
favoriteColor.splice(2,0,"yellow","red")
console.log(favoriteColor)
// The slice() method slices out a piece of an array into a new array:
const newcolor=favoriteColor.slice(1)
console.log(newcolor)
// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.
const newcolor1=favoriteColor.slice(1,3)
console.log(newcolor1)
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
favoriteColor.unshift("blue")
console.log(favoriteColor)
