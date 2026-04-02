import { useEffect, useState } from "react";
import getHours from "../utils/getTime";

export default function useGreeting() {
  const [greeting, setGreeting] = useState(getHours());

  useEffect(() => {
    function updateGreeting() {
      setGreeting(getHours())
    }

    function scheduleNextUpdate() {
      const now = new Date();
      const msToNextHour =
        (60 - now.getMinutes()) * 60 * 1000 -
        now.getSeconds() * 1000 -
        now.getMilliseconds();

      const timeout = setTimeout(() => {
        updateGreeting();
        scheduleNextUpdate();
      }, msToNextHour);

      return timeout;
    }

    const timeout = scheduleNextUpdate();
    return () => clearTimeout(timeout);
  }, [])

  return greeting;
}