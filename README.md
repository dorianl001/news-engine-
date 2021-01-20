# News Engine

# Project Description: A short description of your game.

# App Description

News engine is a website powered by the NewYork Times API. The user will be able to search articles on various topics and read the full articles.

## Instructions

1. Fork and clone this repository.
2. On your terminal, navigate to the file in your directory.
3. Use the command, `npm start` to open your local host in the browser.
4. Use the command, `code .` to open your files in the text editor of your choice.(please include the space between code and the period)

## Technologies used

HTML5 was used to frame the website, CSS to style the website, JavaScript for some interactivity,and the React library for UI. NYTimes API powers the search and Surge for deployment.

Link to the project website: newswebsearch.surge.sh

# Project Issues

I had trouble with API authorization. ERROR 401 Unauthorized

## Description

SearchBar.jsx:10 GET https://api.nytimes.com/svc/search/v2/articlesearch.json?q=tacos&api-key=**********\*\***********

## Your Error

I needed to update my API Key since a different key was being used from a different API.

## Why you think you're getting this error

I had forgotten that I needed to update my API Key configuration within my settings or git.

## Everything you've tried

I tried changing the name of my API Key from my gitignore files, I updated my configuration in git and on the Heroku settings, and then I switched to Surge for deployment.

## 1. Design

![wireframe 1](https://i.postimg.cc/7hy6cvj2/Screen-Shot-2021-01-20-at-5-28-45-PM.png)
![wireframe 2](https://i.postimg.cc/ZRbsL05B/Screen-Shot-2021-01-20-at-5-38-59-PM.png)

## 2. MVP Goals

-Implement search bar.
-Render search results

## 3. Stretch Goals

-Implement news headlines of the day
-Implement the ability to sort your search criteria
-Implement the ability to provide source links
-Implement beautiful UI

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
