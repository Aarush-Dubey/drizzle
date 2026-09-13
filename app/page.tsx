import WeatherCard from "./components/WeatherCard";
import { provenance } from "../protected/version";

export default function WeatherPage() {
  return <main><header><span className="eyebrow">OWNED WEATHER DEMO · FIXTURE DATA</span><h1>Outside, simplified.</h1><p>A small forecast with a clear point of view.</p></header>
    <WeatherCard />
    <footer>Build <code data-testid="candidate-id">{provenance.candidateId}</code> · <a href="/api/version">Version evidence</a></footer>
  </main>;
}
