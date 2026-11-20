
import {
  capitalize,
  getAlpha2Code,
  countryExtractor,
  countryListLookup,
  getResponse
} from "./language_spoken";

import httpRequest from "./utils/http-request";

jest.mock("./utils/http-request", () => jest.fn());

it("converts array of country data objects to array of countries", () => {

  // Arrange
  const inputObject = [
    { name: "Argentina", capital: "Buenos Aires" },
    { name: "Belize", capital: "Belmopan" },
    { name: "Bolivia", capital: "Sucre" }
  ];

  const expectedValue = ["Argentina", "Belize", "Bolivia"];

  // Act
  const actualValue = countryExtractor(inputObject);

  // Assert
  expect(actualValue).toEqual(expectedValue);
  expect(actualValue[0]).toBe("Argentina");
  expect(actualValue).toContain("Belize");
  expect(actualValue[2] === "Bolivia").toBe(true);
  expect(actualValue[3]).toBeUndefined();

});

it("tests the asynchronous countryListLookup function", async () => {

  // Arrange
  httpRequest.mockResolvedValue({
    data: [
      { name: "Philippines" },
      { name: "Canada" },
      { name: "Australia" }
    ]
  });

  // Act
  const actualValue = await countryListLookup("en");

  // Assert
  expect(actualValue).toEqual([
    "Philippines",
    "Canada",
    "Australia"
  ]);

});
