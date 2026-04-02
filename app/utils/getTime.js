export default function getHours() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 5 && hours < 12) {
    return 'Good Morning!';
  } else if (hours >= 12 && hours < 18) {
    return 'Good Afternoon!';
  } else if (hours >= 18 && hours < 22) {
    return 'Good Evening!';
  } else {
    return 'Good Night!';
  }
}