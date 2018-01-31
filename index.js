function shout(x){
  return x.toUpperCase()
}

function whisper(x){
  return x.toLowerCase()
}

function logShout(x){
  console.log(x.toUpperCase())
}

function logWhisper(x){
  console.log(x.toLowerCase())
}

function sayHiToGrandma(x){
  if (x.toUpperCase() === true){
    return 'YES INDEED!'
  } else if (x.toLowerCase() === true){
    console.log('I can\'t hear you!')
  } else if (x === 'I love you, Grandma.'){
    console.log('I love you, too.')
  }
}