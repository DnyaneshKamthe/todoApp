<p align="center">
  <img src="https://img.icons8.com/?size=512&id=55494&format=png" width="20%" alt="TODOAPP-logo">
</p>
<p align="center">
    <h1 align="center">TODOAPP</h1>
</p>
<p align="center">
    <em><code>❯ Dnyanesh </code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/DnyaneshKamthe/todoApp?style=flat&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/DnyaneshKamthe/todoApp?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/DnyaneshKamthe/todoApp?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/DnyaneshKamthe/todoApp?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
</p>

<br>

#####  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
    - [ Prerequisites](#-prerequisites)
    - [ Installation](#-installation)
    - [ Usage](#-usage)
    - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

<code>❯ This is simple todo application which performs CRUD operations. Developed using express framework. </code>

---

##  Features

<code> 
    <ul>
        <li> ❯ Add to do </li>
        <li> ❯ Get All to do </li>
        <li> ❯ Get to do by Id</li>
        <li> ❯ Update to do </li>
        <li> ❯ Delete to do </li>
        <li> ❯ Tests all apis </li>
    </ul>
</code>

---

##  Repository Structure

```sh
└── todoApp/
    ├── DB
    │   └── db.js
    ├── config
    │   └── jwt.config.js
    ├── controllers
    │   ├── todo.controller.js
    │   └── user.controller.js
    ├── index.js
    ├── middlewares
    │   ├── checkAuth.js
    │   ├── errorHandler.js
    │   └── requestLogger.js
    ├── models
    │   ├── Todo.model.js
    │   └── User.model.js
    ├── package-lock.json
    ├── package.json
    ├── readme.md
    ├── routes
    │   ├── todo.route.js
    │   └── user.route.js
    ├── server.js
    └── validations
        ├── todo.validation.js
        └── user.validation.js
```

---

##  Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [server.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/server.js) | <code>❯ REPLACE-ME</code> |
| [package.json](https://github.com/DnyaneshKamthe/todoApp/blob/main/package.json) | <code>❯ REPLACE-ME</code> |
| [index.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/index.js) | <code>❯ REPLACE-ME</code> |
| [package-lock.json](https://github.com/DnyaneshKamthe/todoApp/blob/main/package-lock.json) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>DB</summary>

| File | Summary |
| --- | --- |
| [db.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/DB/db.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>validations</summary>

| File | Summary |
| --- | --- |
| [todo.validation.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/validations/todo.validation.js) | <code>❯ REPLACE-ME</code> |
| [user.validation.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/validations/user.validation.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>models</summary>

| File | Summary |
| --- | --- |
| [User.model.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/models/User.model.js) | <code>❯ REPLACE-ME</code> |
| [Todo.model.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/models/Todo.model.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>routes</summary>

| File | Summary |
| --- | --- |
| [user.route.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/routes/user.route.js) | <code>❯ REPLACE-ME</code> |
| [todo.route.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/routes/todo.route.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>config</summary>

| File | Summary |
| --- | --- |
| [jwt.config.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/config/jwt.config.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>controllers</summary>

| File | Summary |
| --- | --- |
| [todo.controller.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/controllers/todo.controller.js) | <code>❯ REPLACE-ME</code> |
| [user.controller.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/controllers/user.controller.js) | <code>❯ REPLACE-ME</code> |

</details>

<details closed><summary>middlewares</summary>

| File | Summary |
| --- | --- |
| [requestLogger.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/middlewares/requestLogger.js) | <code>❯ REPLACE-ME</code> |
| [checkAuth.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/middlewares/checkAuth.js) | <code>❯ REPLACE-ME</code> |
| [errorHandler.js](https://github.com/DnyaneshKamthe/todoApp/blob/main/middlewares/errorHandler.js) | <code>❯ REPLACE-ME</code> |

</details>

---

##  Getting Started

###  Prerequisites

**JavaScript**: `version x.y.z`

###  Installation

Build the project from source:

1. Clone the todoApp repository:
```sh
❯ git clone https://github.com/DnyaneshKamthe/todoApp
```

2. Navigate to the project directory:
```sh
❯ cd todoApp
```

3. Install the required dependencies:
```sh
❯ npm install
```

4. create .env file in the root of project (like .env.sample) . Add your own creadentials:
```sh
❯ 
```

###  Usage

To run the project, execute the following command:

```sh
❯ node app.js
```

###  Tests

Execute the test suite using the following command:

```sh
❯ npm test
```
More tests can be added. Testing done for APIs only. Individual functions can be tested. 

Here you can find link to postman collection :

https://bold-shadow-424950.postman.co/workspace/Dnyanesh-_Public~de94dc7c-3457-4b85-a2b4-084290e5283b/collection/20816142-153a6bb7-5c4d-4269-b2dd-c533a2de0d12?action=share&creator=20816142


---

##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/DnyaneshKamthe/todoApp/issues)**: Submit bugs found or log feature requests for the `todoApp` project.
- **[Submit Pull Requests](https://github.com/DnyaneshKamthe/todoApp/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/DnyaneshKamthe/todoApp/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/DnyaneshKamthe/todoApp
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/DnyaneshKamthe/todoApp/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=DnyaneshKamthe/todoApp">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---



---