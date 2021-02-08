import Template from './../src/template.js';


describe('Template', () => {
  let reusableTemplate;

  beforeEach(() => {
    reusableTemplate = new Template(5, 5, 5);
  });

  test('should show how beforeEach() works', () => {
    console.log(reusableTemplate);
  });
});

// import Example from '../src/example.js';

// describe('Example', () => {

//   test('should correctly demonstrate bad fails', () => {
//     let example = new Example();
//     expect(example.data).toEqual("Bad fail!");
//   });

//   test('should correctly demonstrate bad fails', () => {
//     let example = new Example();
//     expect(example.exampleFunction()).toEqual("This function returns a bad fail!");
//   });

// });