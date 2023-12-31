# **UI Test with Cypress and IMDB site**

The goal of this project is testing IMDB, which is a site for searching movies and series. In order to do that, I've created 8 tests:

*   Testing correct Log in IMDB site;
*   Testing Log out from IMDB site;
*   Testing correct table with Top 250 Movies;
*   Testing if genre filter list appears for movies;
*   Testing if what to watch works correctly;
*   Testing if help page is reachable;
*   Testing if Log In in help page is working (BUG);
*   Testing incorrect Log in IMDB site because of the PASSWORD;

## **Pre-requirements**
---
*   Node (used v18.17.1)
*   Npm (used v9.6.7)
*   Cypress (used v13.5.0)
*   Cypress-mochawesome-reporter (used v3.6.1)

## **Running tests**
---
In order to **Test** the project, use the commands below in root folder of this project. Specify the browser that you want to use replacing "<browser>" for the the browser that you want to use (chrome, firefox, electron or edge):

```shell
npm i
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/' --browser <browser>
```

After running the tests, the reports will be available at cypress/reports folder. Just open the reports in your browser.

If you do not have **node** installed, install it! You can use (**for Linux environment**):

```shell
sudo apt update
sudo apt install nodejs
```
The **npm** already comes with **node**.

**In this project, it was used a newer version of node. Maybe, it can not work with the version present in apt repository**

## **Problems in test**
While I was testing this site, I decided to not change the website. I was getting an error 'Timeout' while cypress requests for this website and wait for the page loaded. There is an issue opened on github related to this problem and can be found [here](https://github.com/cypress-io/cypress/issues/28114).

### **In order to correct it, just run these tests two or three times at least and they will be executed correctly.**  

The error can be seen in the image below:

![Report](assets/reports.png)