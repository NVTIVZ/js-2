

# Assignment - JS 2

***

## Configuration steps

<details>

* Create a repository based on your final JS#1 repository.
* Copy this README.md contents to your JS#2 README.md
* Add Ramda to your project.

</details>

## Assignment goal

<details>

The goal of this assignment is to show, in, practice, how taking advantage of the functional paradigm via Ramda can simplify complex operations. Also, this assingment should serve as a stepping stone towards functional programming, or a solid rehash of Ramda basics.

</details>

## Formal requirements

<details>

***KEEP IN MIND:*** Keep your functions as simple as possible, subdivide code when possible, reuse functions whenever feasible.

Pay close attention to code quality, as it will be checked more strictly for this assignment - if anything about Ramda or functional concepts is unclear, please contact me so we can discuss it.

* Assignment #2 carries over the same formal requirements as Assingment #1, with some additions.
* Project should be refactored to take advantage of Ramda wherever possible.
* There shouldn't be any left over duplicated code fragments
* Code should remain clean and readable, with helpers appropriately separated out

</details>


# Assignment - JS 1

***

## Configuration steps

<details>

* Fork this repository, then solve the tasks
* Nothing much changes here from assignments #1, #2
* Please be advised to use Prettier and Eslint 

</details>

## Assignment goal

<details>

The goal of this assignment is to get some practice regarding ES6 functionalities, as well as asynchronous computing in JS.

</details>

## Formal requirements

<details>

***KEEP IN MIND:*** Try to keep the solution readable - if something seems like a more complex problem, it will require splitting into multiple functions, probably.


* Your scripts should be runnable via node, as set up in the project
* console.log at the bottom should NOT be modified
* Corresponding datasets should be imported from `data.js` file in the root of your project
* Task #1
  * You are given a list of teams (arrays), which contain players (objects) with `name` and `score`. 
  * The output format of your function should be a list of team summaries (objects) with following attributes
    * ```totalScore``` which is the sum of all scores within a team
    * ```names``` which is a string with names within a team formatted as such: `Team A, B, C` where A, B, and C are names
* Task #2
  * Using the data schema from task #1, create a mock data-generating mock API using promises
  * There should be three functions: `getPlayers`, `getTeams`, `getTeamSummaries`. You can have more to subdivide work units, these three are the ones that have to be present
  * `getPlayers` should take one argument, a number of players to generate
  * `getTeams` should take two arguments, a number of players to generate per team and a number of teams
  * `getTeamSummaries` should take one argument, a list of teams to build summaries for - this should come from `getTeams`. Functionally, it should be similar to the function from task #1,  but async and with **average scores instead of summarized scores**
  * All functions should throw errors occasionally and take a random time between 1-2 seconds to respond
  * As a user, I should be able to utilize these functions to
    * Generate 500 users
    * Generate 500 teams
    * Generate team summaries for 500 generated teams

</details>
