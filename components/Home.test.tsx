//Testing File for Home component. This will have unit testing for Home component

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

//We might be having any particular utility function that takes two numbers and return us the sum of those numbers

//This takes two numbers and returns a sum
//The testing here means if 2 and 3 are taken as numbers, then does it return 5? If yes then this function is added and is working fine. So, this is just one unit test, this is not the part of UI, but it is the functionality within the code that can be tested and can be called a unit against which we want to write a unit test.
//Now add the imports to this file, the jest one and some functions from react testing library, these render, screen etc functions are to test the components
function sum(a: number, b: number) {
  return a + b;
}

//Unit test for the above sum function
//add some description on what the function does
test("adds 2+3 should be equal to 5", () => {
  expect(sum(2, 3)).toBe(5)})
  //This unit test validated that if we pass 2,3 to this particular sum function, this should be equal to 5, expect and toBe are pre-built functions and this test keyword also from react testing library which we can use in our unit tests.