## some lectures' notes 🍎

1. terminal is the body, shell is the brain

   - open terminal with a specific shell (command prompt, PowerShell, bash etc.)
   - execute commands in the shell to interact with operating system

2. only make changes to package.json file

   - package-lock.json file is managed by npm

3. express parses requests (req) and it then goes through middleware functions
   - last middleware is the route handler which (typically) sends a response (res) to the client
   - other middleware functions may also send responses (ex: auth middleware)
4. ways client can send information to server:
   - request headers (path parameters inside URL)
   - request body
5. middleware execute in the order you specify (the functions' arrangement)
   - use next() method to pass on to the next middleware function'
6. best practice to keep middleware small and focused on a specific task
   keep programs simple and modular
7. state remains in the route-handler (keep it there!)

   - essence of statelessness in RESTful APIs

8. Cloud Models
   [![alt text](image)](https://res.cloudinary.com/practicaldev/image/fetch/s--ol7OnjXd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/flzshxgpfmu59dhor6mt.png)
