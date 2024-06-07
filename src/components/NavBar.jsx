const NavBar = () => {
  return (
    <nav className="navbar flex items-center justify-around my-3 bg-gradient-to-r from-sky-700 to-indigo-800">
      <div className="flex-none">
        <a className="btn btn-ghost desktop:text-2xl text-slate-100 font-bold font-Poppins drop-shadow-lg w-72">
          Awesome Weather
        </a>
      </div>
      <div className="flex-1 gap-2 justify-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full md:w-auto"
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-none w-auto navbar-end px-4">
        <a className="btn">°F/°C</a>
      </div>
    </nav>
  );
};

export default NavBar;

// https://open-meteo.com/en/docs#current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,cloud_cover,visibility,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,rain_sum,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles
// curl "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&models=best_match"
