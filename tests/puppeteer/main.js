const puppeteer = require("puppeteer");
const assert = require("assert");
const {join} = require("path");
const tests = [
  {path:"cba-list.js", name: "Testing CBA List"},
  {path:"cba-table.js", name: "Testing CBA Table"},
  {path:"drag-drop.js", name: "Testing drag and drop"},
  {path:"cba-list-sorting.js", name: "Testing CBA List sorting"}
];

let browser;
let page;

describe("Test", () => {
  before(async () =>
  {
    browser = await puppeteer.launch({headless: false});
  });
  it("testing", () =>
  {
    assert.equal(true, true);
  })
  after(async () =>
  {
    await browser.close();
  })
});

function somePromise()
{
  return new Promise((resolve, reject) => {
    setTimeout( function() {
      resolve("Success!");
    }, 250) 
  })
}

module.exports = {page: () => page, run};
