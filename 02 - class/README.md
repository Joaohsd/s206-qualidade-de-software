## **Using cypress for UI tests**

## Idea

In order to test a little bit more this webpage, I've added two more tests. The first thing that I've done, it was creating **logInUser** function that allows to pass username and password parameters for **Log In**. The test were: 
*   **Deleting user:** Done the log in, the user delete himself;
*   **Log Out:** Done the log in, the user log out his session and he is redirected to the main view;

## Running

In order to **Install** the cypress package and other dependencies, use the command below:

```shell
cd class/
npm install cypress
```

In order to **Open** cypress, use the command below:

```shell
./node_modules/.bin/cypress open
```