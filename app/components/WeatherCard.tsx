"use client";

import { useState } from "react";
import { displayTemperature, type TemperatureUnit } from "../../lib/temperature";
import { weatherFixtures } from "../../protected/fixtures";

export default function WeatherCard() {
  const [unit, setUnit] = useState<TemperatureUnit>("C");
  const [fixtureId, setFixtureId] = useState<string>(weatherFixtures[0].id);
  const fixture = weatherFixtures.find(item => item.id === fixtureId) ?? weatherFixtures[0];
  return <section className="weather-card" aria-label="Weather forecast">
    <label htmlFor="fixture">Forecast fixture</label>
    <select id="fixture" value={fixtureId} onChange={event => setFixtureId(event.target.value)}>
      {weatherFixtures.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
    </select>
    <p className="condition">{fixture.condition}</p>
    <output aria-live="polite" data-testid="temperature" className="temperature">{displayTemperature(fixture.celsius, unit)}°{unit}</output>
    <div className="units" aria-label="Temperature units">
      <button type="button" aria-pressed={unit === "C"} onClick={() => setUnit("C")}>Celsius</button>
      <button type="button" aria-pressed={unit === "F"} onClick={() => setUnit("F")}>Fahrenheit</button>
    </div>
    <p className="note">Fixed demo data. Reload resets to the 20°C fixture.</p>
  </section>;
}
