### Callback Functions
---

Below is an example of using a callback function for some task. In this case, the callback function is the async (req, res) used inside the router.post (an Express Router) to handle API requests.

When a client's POST request comes in, the router will first destructure the ```req.body``` object to get the name, species, and habitatId. If any of these are missing, the router will send a 400 response with a json message (```res.status(400).json```).

If all the required fields are present, the router will create a new animal object with the required fields. This new animal object will be added to the database (```db.data.animals.push(newAnimal)```) and the database will be written to (```await db.write()```). Finally, the router will send a 201 response with the new animal object (```res.status(201).j son(newAnimal)```).



```javascript
router.post("/", async (req, res) => {
  // Add a new animal
  // destructure the request body
  const { name, species, habitatId } = req.body;

  // validate the request body. if any of these are missing, send 400 with json message
  if (!name || !species || !habitatId) {
    res.status(400).json({
      message: "Name, species, and habitatId are required",
    });
    return;
  }

  // create a new animal object with the required fields. This will be added to the database afterwards
  const newAnimal = {
    id: db.data.animals.length + 1,
    name,
    species,
    habitatId,
  };

  // add the new animal to the database
  db.data.animals.push(newAnimal);
  // write to the database
  await db.write();
  // send a 201 response with the new animal object
  res.status(201).json(newAnimal);
});
```

More relevant to this class, here is a another example of a callback function:
```javascript
 document.addEventListener("keydown", (event) => {
        const divTags = document.querySelectorAll("div");

        if (event.key === "r") {
          divTags.forEach((div) => {
            div.style.backgroundColor = "red";
          });
        } else if (event.key === "y") {
          divTags.forEach((div) => {
            div.style.backgroundColor = "yellow";
          });
        } else if (event.key === "g") {
          divTags.forEach((div) => {
            div.style.backgroundColor = "green";
          });
        } else if (event.key === "b") {
          divTags.forEach((div) => {
            div.style.backgroundColor = "blue";
          });
        }
      });
```
The higher-order function here is ```addEventListener```. The callback function is the function that is passed into the ```addEventListener``` function (```(event) => {...}```). 

The ```addEventListener``` function takes in two arguments: the event to listen for and the callback function. It is listening for a keydown event (i.e. a key is pressed down).
 
The ```addEventListener``` function will call the callback function whenever the event occurs. The events being listened for are specified within the ```if``` statements. If the event occurs (i.e. the "r" key is pressed), the callback function will be called and the code within the ```if``` statement will be executed (example: ```div.style.backgroundColor = "red";```).