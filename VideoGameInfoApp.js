///These are empty lists that we will
///add the respective data to via user input
var gameName;
var buttonId;
var reviews=[];
var upLikes=[];
var authorPlayTimeTotal=[]; 
var authorPlayTimeAtTime=[];
var index=[];
var dontstarvePhotos = ["dontstarve1.png","dontstarve2.png","dontstarve3.jpg","dontstarve4.jpg","dontstarve5.jpg"];
var rustPhotos = ["rust1.jpg","rust2.jpg","rust3.jpg","rust4.jpeg","rust5.jpg"];
var gmodPhotos = ["gmod1.jpg","gmod2.jpg","gmod3.jpeg","gmod4.jpg"];
var theforestPhotos = ["theforest1.jpg","theforest2.jpg","theforest3.jpg","theforest4.jpg"];
var photoIndex = 0;
var newImage = "";
var newphotoIndex;

///Home Screen Set Up
///Dont Starve Button Setup
onEvent("buttonDontStarve","click",function(){
  stopTimedLoop();
  clearData();
  buttonId = "DontStarve";
  gameName = "Dont Starve Together";
  reviews = getColumn("DontStarve","review");
  upLikes = getColumn("DontStarve","voted_up");
  authorPlayTimeTotal = getColumn("DontStarve","author.playtime_forever");
  authorPlayTimeAtTime = getColumn("DontStarve","author.playtime_at_review");
  setProperty("imageGame","image",dontstarvePhotos[randomNumber(0,dontstarvePhotos.length-1)]);
  updateInfos(gameName,dontstarvePhotos);
});

//Updates button size when hovered over and off
onEvent("buttonDontStarve","mouseover",function(){
  setSize("buttonDontStarve" ,70,50);
});

onEvent("buttonDontStarve","mouseout",function(){
  setSize("buttonDontStarve",60,40);
});


///Rust Button Setup
onEvent("buttonRust","click",function(){
  stopTimedLoop();
  clearData();
  gameName = "Rust";
  buttonId = "Rust";
  reviews = getColumn("Rust","review");
  upLikes = getColumn("Rust","voted_up");
  authorPlayTimeTotal = getColumn("Rust","author.playtime_forever");
  authorPlayTimeAtTime = getColumn("Rust","author.playtime_at_review");
  setProperty("imageGame","image",rustPhotos[randomNumber(0,rustPhotos.length-1)]);
  updateInfos(gameName,rustPhotos);
});

//Updates button size when hovered over and off
onEvent("buttonRust","mouseover",function(){
  setSize("buttonRust" ,70,50);
});

onEvent("buttonRust","mouseout",function(){
  setSize("buttonRust",60,40);
});

///Garry's Mod Setup
onEvent("buttonGmod","click",function(){
  stopTimedLoop();
  clearData();
  gameName = "Garry's Mod";
  buttonId = "Gmod";
  reviews = getColumn("Gmod","review");
  upLikes = getColumn("Gmod","voted_up");
  authorPlayTimeTotal = getColumn("Gmod","author.playtime_forever" );
  authorPlayTimeAtTime = getColumn("Gmod","author.playtime_at_review");
  setProperty("imageGame","image",gmodPhotos[randomNumber(0,gmodPhotos.length-1)]);
  updateInfos(gameName,gmodPhotos);
  });
  
//Updates button size when hovered over and off
onEvent("buttonGmod","mouseover",function(){
  setSize("buttonGmod" ,70,50);
});

onEvent("buttonGmod","mouseout",function(){
  setSize("buttonGmod",60,40);
});

//Set Up for the Forest Buttons
onEvent("buttonTheForest","click",function(){
  stopTimedLoop();
  clearData();
  gameName = "The Forest";
  buttonId = "TheForest";
  reviews = getColumn("TheForest","review");
  upLikes = getColumn("TheForest","voted_up");
  authorPlayTimeTotal = getColumn("TheForest","author.playtime_forever");
  authorPlayTimeAtTime = getColumn("TheForest","author.playtime_at_review");
  setProperty("imageGame","image",theforestPhotos[randomNumber(0,theforestPhotos.length-1)]);
  updateInfos(gameName,theforestPhotos);
  });

//Updates button size when hovered over and off
onEvent("buttonTheForest","mouseover",function(){
  setSize("buttonTheForest" ,70,50);
});

onEvent("buttonTheForest","mouseout",function(){
  setSize("buttonTheForest",60,40);
});

//Next Button SetUp
onEvent("arrowNext","click",function(){
  if (reviews.length <=0){
    console.log("No Game has Been Selected");
  }else{
  setScreen("screenResults");
  
  }
});

///Result Screen Setup
///Sets up extra information 
onEvent("imageInfo","mouseover",function(){
   setText("textReview","Total Ingame Time: " +Math.round(authorPlayTimeTotal[index]/60)+ " hours\nAuthors Playtime at Time of Review: "+Math.round(authorPlayTimeAtTime[index]/60));
 });
 
//Event handler for new review button
onEvent("arrowReload","click",function(){
  index = randomNumber(0,15);
  updateInfo();
});

//Event handler for when user hovers over information button
onEvent("imageInfo","mouseout",function(){
  updateInfo();
}); 

onEvent("arrowBack","click",function(){
  setScreen("screenHome");
});


///Functions
///Updates the result page info
function updateInfo(){
  setScreen("screenResults");
  setText("textReview",reviews[index]);
  setText("labelUpvote","Upvotes: "+upLikes[index]);
}

///Clears all data from the app 
function clearData() {
  reviews = ["null"];
  upLikes = 0;
  authorPlayTimeTotal = 0 ;
  authorPlayTimeAtTime = 0;
}

///This Function updates the review information in the second screen as well
///as starts the loop for updating the game photo
function updateInfos(name,gamePhotoName){
  index = randomNumber(0,15);
  setText("textReview",reviews[index]);
  setText("labelUpvote","Upvotes: "+ upLikes[index]);
  setText("labelGameTitle",name);
  timedLoop(3000,function(){
    newphotoIndex = randomNumber(0,gamePhotoName.length-1);
    if(newphotoIndex===photoIndex){
      console.log("looped");
    }else{
      photoIndex = newphotoIndex;
      newImage = gamePhotoName[photoIndex];
      setProperty("imageGame","image",newImage);
  }
  });
}

