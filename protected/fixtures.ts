// Trusted fixtures: excluded from every coding grant.
export const weatherFixtures = [
  { id: "pleasant", name: "Pleasant afternoon", celsius: 20, expectedFahrenheit: 68, condition: "Partly cloudy" },
  { id: "freezing", name: "Freezing point", celsius: 0, expectedFahrenheit: 32, condition: "Frost" },
  { id: "extreme-cold", name: "Extreme cold", celsius: -40, expectedFahrenheit: -40, condition: "Clear and cold" },
  { id: "boiling", name: "Boiling point", celsius: 100, expectedFahrenheit: 212, condition: "Laboratory fixture" },
] as const;
