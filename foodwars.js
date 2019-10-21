
var array = []
var object = {}
let human = {eyeColor:"brown", age: 29 , height:"6ft7in"}
var episodes = [ {title:'An Endless Wasteland',airdate:'April 4, 2015'},
  {title:"God Tongue" ,airdate:"April 11, 2015"},
  {title:"That Chef Doesn't Smile" ,airdate:"April 18, 2015"},
  {title:"Sacred Mother of Kyokusei" ,airdate:"April 25, 2015"},
  {title:"The Ice Queen and the Spring Storm" ,airdate:"May 2, 2015"},
  {title:"The Meat Aggressor" ,airdate:"May 9, 2015"},
  {title:"The Silent Bowl, the Eloquent Bowl" ,airdate:"May 16, 2015"},
  {title:"A Concerto of Concept and Creation" ,airdate:"May 23, 2015"},
];
function printsTitle(listOfEpisodes) {
  listOfEpisodes.forEach(episode =>{
    console.log(episode.title, episode.airdate);
  })

}
