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
  if (x === x.toUpperCase()){
    console.log('YES INDEED!')
  } else if (x ===x.toLowerCase()){
    console.log('I can\'t hear you!')
  } else if (x === 'I love you, Grandma.'){
    console.log('I love you, too.')
  }
}