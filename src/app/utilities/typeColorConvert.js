import Colors from "./Colors";

export default function typeColorConvert(type) {
  switch(type) {
    case 'grass': 
      return Colors.aqua
    case 'fire': 
      return Colors.red
    case 'water': 
    case 'ice':
      return Colors.blue
    case 'electric': 
      return Colors.yellow
    case 'poison': 
    case 'bug':
      return Colors.purple
    case 'ground': 
    case 'rock':
      return Colors.brown
    case 'flying': 
      return '#ddd'
    default:
      return Colors.color
  }
}