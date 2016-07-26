# Ge Digital Technical Test 


## Backend part java spring

***Notes:***

**There is a postman collection in *src/main/resources* that should help you test your endpoints**

**If you use Jax-rs endpoint will be registered automatically if you put them into *src/main/java/com/ge/digital/endpoints***

**Take your time and Good Luck !!!**

### Question 1 (5 minutes):
Create a Rest Endpoint exposing *GET /version* returning 
    
    {
      "version": "1.3.5"
    }
    
    
### Question 2 (5 minutes)
Create a Rest Endpoint exposing * POST /items* taking a json body like
    
    {
      "items":[
        {
          "id": "37b5962f-12f1-45ba-b4eb-c3217304fc9f",
          "type": "Pet",
          "name": "Sand"
        },
        {
          "id": "370a2a4f-89ad-4462-b7d7-ad88d351ea30",
          "type": "Pet",
          "name": "Luna"
        }
      ]
    }
    
And returning
    
    {
      "status": "ok"
    }
    
### Question 3 (5 minutes)
Create a Rest endpoint exposing *PUT /items/{id}* taking a json like
     
     {
       "type": "cat",
       "name": "Sand"
     }

And returning
     
     {
       "status": "ok"
     }
     
### Question 4 (5 minutes)
Create a Rest endpoint exposing *DELETE /items/{id}* and returning
     
     {
       "status": "ok"
     }     
     
     
### Question 5 (5 minutes)
Create a Rest endpoint exposing *GET /items/{id}*?type=XX and returning
     
     {
       "status": "ok"
     }
     
### Question 6 (5 minutes)
Create a Rest endpoint exposing *GET /items/{id}*?type=XX&name=YY and returning 
     
     {
       "status": "ok"
     } 
         
         
### Question 7 (5 minutes)
Create a Component to store the data model, autowire to use it in all endpoints
      
      
### Question 8 (10 minutes)
- Update *POST /items* to store item into the Component responsible of storing
- Update *PUT /items/{id}* to update a real object
- Update *DELETE /items/{id}* to delete an object
- Update *GET /items/{id}?type=XX* to return filtered objects
      