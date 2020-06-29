
 var URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4b04653d3cea4423b6e349dc2a6afa45";  

 
 
 fetch(URL)
   .then(response => response.json())
    .then(function(data){

      console.log(data);
 
       var home = data.articles;
       console.log(home);
       console.log("hii");
      
       
       var elements = document.querySelectorAll("h3");
       var element2 = document.querySelectorAll("p");
       
      var clicks = document.querySelectorAll("a");
      var images = document.querySelectorAll("img");
 
     
        
      
     //  for(var i=0 ;i<clicks.length;i++){
     //     clicks[i].addEventListener("click", function(){
           
     //         });
     //  }
     //  console.log(clicks);
     for (var i = 0; i < home.length; i++) {
        try{
          if(home[i].title!=""){elements[i].textContent = home[i].title;}
          if(home[i].description!=""){element2[i].textContent = home[i].description;}
          if(home[i].url!=""){clicks[i].href = home[i].url;}
          if(home[i].urlToImage!=""){images[i].src = home[i].urlToImage;}
        }
        catch(err){console.log("Error at Index: "+i);console.log(err);}
     }
  }
      
       
 //https://newsapi.org/v2/top-headlines?country=in&apiKey=4b04653d3cea4423b6e349dc2a6afa45
 //https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4b04653d3cea4423b6e349dc2a6afa45    
 
     );


     fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "f75448d7fcmshcd94a0c48265152p1d14c4jsnd1aa99890b05",
		"x-bingapis-sdk": "true"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
    
 
 
 