export type TemperatureUnit = "C" | "F";

/** This owned demo deliberately starts with the reported conversion defect. */
export function displayTemperature(celsius: number, unit: TemperatureUnit): number {
  if (unit === "C") return celsius;
  return celsius;
}
