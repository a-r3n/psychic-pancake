# Social Media Database
A social media API that allows comments, reactions and friends lists

Link to GitHub Repository: https://github.com/a-r3n/psychic-pancake
Link to Walkthough Video: https://drive.google.com/file/d/12j35oIf2NpFhNiuN_R_iVIERGOgvRua7/view 


## Description

This project was intended to build a database that could help a social media company manage their database. 

In particular, it is a database structured on users and posts and allows users to build networks of friends and posts to contain reactions. 


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

To install the project, start by downloading the project files from the GitHub repository: https://github.com/a-r3n/psychic-pancake

- Open the code in VS Code (or similar program)
- Open an integrated terminal
- Run 'npm install' to install all required programs including MongoDB
- Run 'npm run seed' to seed the database
- Run 'node server.js' to start the file
- If successful, you will see a message like 'Server is running on http://localhost:3000'

If you are seeing error messages or would like some further help, we have created a walkthough video to help you with the set up and use of this application: https://drive.google.com/file/d/12j35oIf2NpFhNiuN_R_iVIERGOgvRua7/view 


## Usage

Once the database is initialised and running on your local host, you can use a program such as Insomnia to interact with the databse. 

To ensure you have set up the database correctly, run a GET on the following URL: http://localhost:3000/api/thoughts/

If the database has initialised correctly, you should see data similar to the screenshot below:

![alt text](assets/Screenshot%20-%20Social%20Media%20API.png)

For more information on how to use the database and how you can GET, POST, PUT and DELETE objects in the database, refer to the walkthrough video: https://drive.google.com/file/d/12j35oIf2NpFhNiuN_R_iVIERGOgvRua7/view 


## Credits

This project would not be possible without the contribution of all people who have helped build Express.js and MongoDB. Thank you for all of your work. 

## License

This project has been created under an MIT License. 

For more information on the license conditions and how this project can be used, please refer to the License document in the GitHub repository: https://github.com/a-r3n/psychic-pancake
