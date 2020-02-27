const getLight = (direction = "topLeft") => {
  let values;
  switch (direction) {
    case 'bottomRight':
      return { left: '-', right: "-", aLeft: '+', aRight: '+' }
      break;
    case 'bottomLeft':
      return { left: '+', right: "-", aLeft: '-', aRight: '+' }
      break;
    case 'topRight':
      return { left: '-', right: "+", aLeft: '+', aRight: '-' }
      break;
    case 'topLeft':
      return { left: '+', right: '+', aLeft: '-', aRight: '-'}
      break;
    default:
      return { left: '-', right: "-" , aLeft: '+', aRight: '+'}
  }
}

export default getLight