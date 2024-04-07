import {useEffect} from "react";
import axios from "axios";

const Test = () => {
    console.log('Hello world')
    axios.get('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=26665007aceadefa24bcc11b98f65556').then(res => console.log(res))
  return (
      <div>This is Test page</div>
  )
}

export default Test