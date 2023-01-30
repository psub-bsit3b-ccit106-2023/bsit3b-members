## PSUB BSIT-3B
Collaboration on GitHub

### Installation
1. Access your GitHub account on your web browser.
2. ***Fork*** this repository.
3. Download and install [**GitHub Desktop**](https://desktop.github.com/).
4. Sign in to <b>GitHub Desktop</b> using your existing account.
5. ***Clone*** your forked repository from STEP 2.
6. Use an Integrated Development Environment (IDE) to open the cloned project.

   Example of IDEs: 
   - [Visual Studio Code](https://code.visualstudio.com/)
   - [Sublime Text](https://www.sublimetext.com/)
   - [Notepad++](https://notepad-plus-plus.org/downloads/)

### Preview
Open `index.html` on your web browser.

### Contributing
Create your personal `.js` named `yourfirstname.js` file inside the [**js**](js) folder.
        <br>
        Then, fill it up with your basic personal information as shown below:
        
```javascript
devs.push({

    firstName : 'YourFirstName',
    middleName: 'YourMiddleName',
    lastName  : 'YourLastName',
    gender    : '[Male/Female]',
    username  : 'YourGitHubUsername',
    photo     : 'YourGitHubAvatarLink'

});
```

You can also look at [arvic.js](js/arvic.js) for further reference.

After creating your own file, link it to the `index.html` by adding a new script tag.

```html
<!-- START WORK HERE (Add personal scripts) -->
<script src="js/arvic.js"></script>
...
```

If you see your name on the list of members, you're good to go.


### Submission
1. ***Commit*** and ***Push*** changes to your fork.
2. Make a ***Pull Request*** to the original repository.
