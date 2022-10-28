// __tests__/todo.js
let todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
/* eslint-disable no-undef */
describe("Todo List Test Suite", () => {
  beforeAll(() => {
    // Seed the test data
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    [
      {
        title: "MILK PURCHASE",
        completed: false,
        dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "PAY RENT",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "ASSIGNMENT SUBMIT",
        completed: false,
        dueDate: new Date(today.getTime() + 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("SHOULD ADD A NEW TODO", () => {
    expect(all.length).toEqual(3);

    add({
      title: "A TEST ITEM",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("SHOULD MARK A TODO AS COMPLETE", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("SHOULD RETRIEVE OVERDUE ITEMS", () => {
    expect(overdue().length).toEqual(1);
  });

  test("SHOULD RETRIEVE DUE TODAY ITEMS", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("SHOULD RETRIEVE DUE TODAY ITEMS", () => {
    expect(dueLater().length).toEqual(1);
  });
});