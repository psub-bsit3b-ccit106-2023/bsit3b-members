## PSUB BSIT-3B
Collaboration on GitHub

### Installation
1. Log in to your GitHub account using a web browser.
2. ***Fork*** this repository.
3. Download and setup [**GitHub Desktop**](https://desktop.github.com/) and sign in with your GitHub account.
4. ***Clone*** your forked repository using **GitHub Desktop**.
5. Open the cloned repository in an IDE such as
   [Visual Studio Code](https://code.visualstudio.com),
   [Sublime Text](https://www.sublimetext.com),
   or [Notepad++](https://notepad-plus-plus.org/downloads).

### Contributing
1. Create a new `.js` file in the [**js**](js) folder, with your first name as the file name (e.g. "john.js").
2. Add your basic personal information in the file, following the given format.

    ```javascript
    devs.push({
    
        firstName : 'YourFirstName',
        middleName: 'YourMiddleName',
        lastName  : 'YourLastName',
        gender    : '[Male/Female]',
        username  : 'YourGitHubUsername'
    
    });
    ```
   
    You can also look at [arvic.js](js/arvic.js) for reference.


3. Include your script to the `index.html` file by adding a new script tag.

    ```html
    <!-- START WORK HERE (Add personal scripts) -->
    <script src="js/arvic.js"></script>
    ...
    ```

### Testing
Open `index.html` in a web browser. Check if your data is displayed on the page.


### Submission
1. ***Commit*** and ***Push*** changes to your fork.
2. Make a ***Pull Request*** to the original repository.
