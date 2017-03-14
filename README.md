#Project 4 - VeNew  

#####- still in development

***
###Overview
For my intial concept I knew I wanted to explore the relationships that can be created with Ruby on Rails - so at least three models. I wanted to create a social network between bars and musicians to make small venues and bars more accessible to unsigined artists.

Band Logged In:
![image](http://imgur.com/ZIi4Ure.png)
![image](http://imgur.com/uKO03jS.png)
![image](http://imgur.com/nNEErqV.png)

Bar Logged In:
![image](http://imgur.com/8kHvS0b.png)
![image](http://imgur.com/WIAFxIL.png)

***
###Initial Concept - MVP  
#####User Journey
A bar registers their details, in their profile they will be able to add a time slot.  
When a musician logs in they will can see all the registered venues.  
On that venue show page they can then see the information the venue registered with, a map with their location and any upcoming events.  
If the event is not at full capacity and the musician has not reached their maximum amount of pending requests, then they will be able to request that slot.  
When the Venue logs back in, on their profile they will be able to see their upcoming events and any pending requests from Artists. They can then view that Artists show page, and play their latest Spotify or Souncloud tracks. They are then ablt to accept or reject that request.

***
###Building upon MVP
The MVP was to make the request and then be able to accept or deny this.  
With a simpe MVP I had a lot of room to build upon. Adding functionality I used a spotify widget, soundcloud widget and toggle so that the venue would be able to listen to the most popular tracks of whoever had requested to play. I also added a map for the venue as I  thought it would be important for the Artist to know where the Venue was.  
In terms of the requests I thought it was important to have a maximum amount of pending requests so that the Artist cannot just request to play every event. Building upon this I will also implement that when the Artist has been rejected to play that slot, they are not able to re-request it.  

***
###Wins
Within the timeframe I think a lot was completed, and I'm really happy with the back end functionality seeing as we had only been learning Ruby for a week. Though a lot of features need finishing off I'm happy with the overall functionality on the front-end. 

***
###Challenges  
This project was a real challenge for me, I think mostly because I had such a big vision of the different components that could be implemented. In hindsight this was too much to complete within a week and so with time I will be really happy when all of the features are polished off. Something I will definetely do is split the views, and controllers into seperate folders based on who is logged in, this is because after all of the features were slowly added the files became very cluttered and by always using 'user' it became unclear who was logged in and what features were being used.

***
###Further Improvements 
Due to the timeframe some of the functionality is only half finished, so will definetely be polished off.  The styling also was done in an afternoon and could definetely use some refining.  
Geocoding the autocompleted address for the purposes of using the map will be the first thing. Then with the Venues and Artists locations it would make sense to sort the Venues Index page based on location, or have a form of searching by location.  
Another thing to  implement would be a form of Soundcloud and Spotify Authentication when the Artists, as at the moment the widget is taken from the Artists name, this is then a problem when Souncloud or Spotify use a different name for the Artist. Another feature to add would be an error window when the tracks of the Artist cannot be found.  
Once these features are finished off I think this has possibilities of being built into a whole social network for Events. By implementing a 'normal' User they would be able to search their favourite Musicians to see where they are playing next, and similarly search their favourite Venues for information on upcoming events. 