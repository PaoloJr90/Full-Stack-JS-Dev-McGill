# some lectures' notes 🍎

## books to read: 📚

- [NodeJS in Action](https://mcgill.on.worldcat.org/oclc/1005351411)
- [NodeJS Web Development](https://mcgill.on.worldcat.org/oclc/1202553125)
- [Express in Action](https://mcgill.on.worldcat.org/oclc/949043657)
- [RESTful Web API Design with NodeJS](https://mcgill.on.worldcat.org/oclc/1035516599)
- [MERN Quick Start Guide](https://mcgill.on.worldcat.org/oclc/1039697627)

---

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

![alt text](https://2.bp.blogspot.com/-uKO-mWB5Lqk/UoA2kiedTmI/AAAAAAAABQM/I5WJDsdJskk/s1600/Cloud%2BModels.JPG)
