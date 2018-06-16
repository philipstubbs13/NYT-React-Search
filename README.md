# New York Times React Search

Test your memory of current NBA players with the ClickMe game. ClickMe is a memory skill application built using React. The objective of the game is to be able to go through and click each player's image once. Each time you click a player's image, your score goes up by one. If you click a player's image twice, you lose and the game resets (score goes back to 0).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of contents

* [Live](#live)
* [Screenshots](#screenshots)
* [About this project](#about-this-project)
* [Getting started](#getting-started)
* [Deployment](#react-deployment)
* [Technologies used to create app](#technologies-used)
* [Issues](#Issues)

## <a name="live"></a>Live

<https://react-nytimes-search.herokuapp.com/>

## <a name="screenshots"></a> Screenshots

<img src="readme_images/search_form.png">
<br>
<br>
<img src="readme_images/search_results.png">
<br>
<br>

## <a name="about-this-project"></a> About this project

* [How the app works](#how-app-works)
* [How the app is built](#how-the-app-is-built)
* [What is web scraping?](#about-web-scraping)

### <a name="how-app-works"></a> How the app works


### <a name="how-the-app-is-built"></a> How the app is built

This project was built using React, which is an open-source Javascript library developed at Facebook specifically for the task of developing user interfaces. React relies on a component-based architecture where elements of the user interface are broken into self-contained components.

For a high level overview of React, check out this video: <https://www.youtube.com/watch?v=x7cQ3mrcKaY>.

The React documentation is available at <https://reactjs.org/>.

For more information on how this project is structured and broken into various components, see [Structure of the project](#structure-of-project).

## <a name="getting-started"></a> Getting started

The following section will take you through the steps of setting up this application and getting it running locally on your computer.

If you don't want to set up this project locally and just want to see the deployed application, go to <https://react-nytimes-search.herokuapp.com/>.

To set up this application locally on your computer, perform the following steps:

1. [Clone the repository](#clone-repository)

2. [Install Node.js](#install-node)

3. [Install yarn](#install-yarn)

3. [Install the dependencies](#dependencies)

4. [Start the server](#start-server)

### <a name="clone-repository"></a> 1. Clone the repository

The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
  git clone https://github.com/philipstubbs13/NYT-React-Search.git
  cd NYT-React-Search
</pre>

#### <a name="structure-of-project"></a> Structure of the project

<p>After you clone the repository, navigate to the project root directory (NYT-React-Search). The project directory structure is set up as follows:</p>
<ul>
  </li>
    <p><b>public</b>: The public folder contains the index.html file. This HTML file is a template. The file is empty. So, if you open it directly in a browser, you will get an empty page. Rather than placing the HTML code directly in index.html, this application uses a React component-based architecture to create, build, and render UI components to the page.</p>
  </li>
  <li>
    <p><b>src</b>: In the src folder, there are 4 main parts of the application to pay attention to.</p>
    <ul>
      <li><b>index.js:</b> The index.js file is the top level file of the React application. In index.js, the App.js file is imported, and the ReactDOM.render method is used to render App.js to the page.</li>
      <li><b>App.js:</b> The App.js file is where the application components are imported and rendered, such as the navigation bar, footer, and player images. This file also defines a class that allows various states of the application to be updated throughout the game, including the score, top score, a player's clicked value, and the game message displayed in the top navigation bar.</li>
      <li><b>Components:</b> The Components folder is where the app components are located. Each file represents a separate component. For example, Navbar.js is the top navigation bar component.</li>
      <li><b>players.json:</b> The players.json file contains an array of objects. Each object is a player that gets rendered to the page. Each object contains four properties, id, name, image, and clicked. By default, clicked is set to false. When the user clicks a player, that player's clicked value gets set to true so that the application can keep track of which players have already been clicked (clicked is true) and which players have not been clicked (clicked is false).</li>
  </li>
  <li><b>package.json</b>: Lists the project dependencies and their version numbers.</li>
  <li><b>.gitignore</b>: Anything listed inside this file (for example, node_modules) will not be tracked by GitHub when code is committed.</li>
  <li><b>yarn.lock</b>: Dependency tree for the project. Lists all the dependencies and their versions.</li>
</ul>

### <a name="install-node"></a> 2. Install Node.js

<p>If you don't already have Node.js installed on your computer, you can install the latest version here: <https://nodejs.org/en/>.</p>

### <a name="install-yarn"></a> 3. Install yarn
To be able to install the dependencies and start the application locally, you will need to install yarn. Yarn is a package manager like npm.

To install yarn, run the following command:
<pre>
  npm install -g yarn
</pre>

For more information about yarn and other installation options, see the yarn documentation: https://yarnpkg.com/en/.

### <a name="dependencies"></a> 4. Install the dependencies

<p>This project uses React.</p>
<p>After you clone the repository to a local directory, change directory to the project root directory and run the following command to install the required React dependencies (react, react-dom, and react-scripts).</p>
<pre>yarn install</pre>

<p>Version information for each of these packages is available in the <b>package.json</b> file in the project root directory.</p>

### <a name="start-server">5. Start the React development server</a>

<p>After performing all of the setup steps in the <b>Getting started</b> section, navigate to the project root directory (NYT-Reatt-Searh) and run the following command to start the React development server:</p>
<pre>
yarn start
</pre>

<p>After the development server has started, a Chrome browser window should open, and you should see the application. If the browser does not automatically open after the server starts, you can verify that the application is working locally on your computer by manually opening Chrome and going to <a href="http://localhost:3000">http://localhost:3000</a>.</p>

## <a name="react-deployment"></a> Deployment


## <a name="technologies-used"></a> Technologies used to build app

* HTML
* CSS
* reactstrap (<https://reactstrap.github.io/>)
* Javascript
* React (<https://reactjs.org/>)

## <a name ="Issues"></a> Issues

<p>If you find an issue while using the app or have a request, <a href="https://github.com/philipstubbs13/NYT-React-Search/issues/" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.</p>