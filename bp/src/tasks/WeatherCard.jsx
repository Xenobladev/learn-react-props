function WeatherCard({ city, tempF, condition, windMph }) {
  // work out the advice, icon and alert here, before the return
 
  return (
    <div className="weather-card">
      <h3>{city}: {tempF}°F</h3>
      {/* your conditional parts go here */}
    </div>
  )
}
 
export default WeatherCard
