# Creating a webhook

The server is listening for a POST request on the route `/webhook` or `call-me-here`.

The webhook is esablished when the client (using Postman) submits a POST request to the server. The server responds with a message that the webhook is established and displays the "data" object defined in the startRadioactivity method (from the RadioActiveSubstance class).

Could also use eventEmitters to emit events and listen for them.
Did not test/use the eventEmitter code (from "events" module)

# Create a websocket

used socket.io to create a websocket for a chat app (withing web page built in index.html). Within the socket.io folder.

used ngrok (with ngrok http 3000 command) to create a tunnel to the localhost server. The ngrok url is used in the client to connect to the server.
