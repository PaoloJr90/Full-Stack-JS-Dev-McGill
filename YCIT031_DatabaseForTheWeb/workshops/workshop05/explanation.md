### Deploying an Express application and PostgreSQL database to Azure

#### GitHub Repository = azure_web-app

#### [Site URL](https://workshop05.azurewebsites.net/)

---

<br>
Azure was chosen as the hosting platform for this workshop as I have a free account and it is great opportunity to learn how to deploy an application to the cloud with one of the more popular providers (example: AWS & GCP).

<br>

The following steps were taken to deploy the application to Azure:

1. Create a new resource group in Azure named Workshop05-YCIT031
   - this is meant to be a container that holds related resources for an Azure solution (example: my application and database)
2. Create a new PostgreSQL database in Azure named ycit031-workshop05-postgresql
   - created a firewall rule to "Allow public access from any Azure service within Azure to this server"
   - created a firewall rule to only accept connections from my IP address (later removed as the Web-App's IP address would change after restarting the app)
   - Azure Database for PostgreSQL is additionally protected by authentication (username and strong password)
   - modified the pg database connection in the application to use SSL (see db.js file)
3. Create a new web app in Azure (Linux with Node 18 LTS runtime) named ycit031-workshop05-webapp
   - created a GitHub Action (automated in Azure) to deploy the application to the web app

<br>

---

### Some challenges faced during the deployment process:

- GitHub Actions was enabled but I did not know that some actions in the workflow file (YAML) can be restricted by user, branch, path etc. Got to learn a lot about how to configure GitHub Actions to deploy an application to Azure.
- The web-app was initially not able to connect to the database as it seemed to required SSL to be enabled. This was resolved by modifying the pg database connection in the application to use SSL (see db.js file).
- After many restarts of the web-app, the IP address of the web-app changed and the firewall rule to only accept connections from my IP address was no longer valid. This was resolved by removing the firewall rule and allowing public access from any Azure service within Azure to the database server. Certainly not the most secure solution but it works for this workshop.
- tested the database connection using local psql client (with Azure-provided connection string), and it worked. I was able to see if the database was implemented correctly and if the tables were created. This was very helpful in debugging issues.
- the file path of the routes in the application had to be modified to work with the web-app. This was resolved by modifying the file path of the routes in the application to use relative paths; example: `./routes/animals.js` instead of `..routes/animals.js`
- to overcome many of these challenges, I used the Azure Portal (FTPS and "Advanced Tools") to view the (Application & Platform) logs of the web-app and database. This was very helpful in debugging issues.
- quite the challenge (many errors to debug during the deployment process) and it was a great learning experience!
