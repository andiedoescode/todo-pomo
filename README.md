# Todo for Pomo

An clean todo list app built for my own pomodoro sessions. Meant for use as short todo lists for each work cycle, with tasks populated through local storage. Users can add tasks, mark them as completed, and delete them. They can also filter their list by active, completed, or all tasks, as well as delete all completed tasks. There is a counter at the bottom to indicate how many active tasks remain.

**Link to project:** https://extraordinary-daffodil-23a0f7.netlify.app/

![Animated .gif of Pomo Focus features in use](https://github.com/andiedoescode/todo-pomo/assets/98671035/7ceaec5e-e71a-4b9a-bef1-b64bb42b9ba9)

## How It's Made:

Tech Used: React, Material UI, Vite, JavaScript, HTML, CSS, localStorage

![Screenshots of Pomo Focus filtering feature - all, active, completed](https://github.com/andiedoescode/todo-pomo/assets/98671035/f23d2331-87dd-4060-8b9c-70d79668d431)

I chose to deconstruct it into a few more components that may have been strictly necessary as a way to practice passing through props and state  in React.
<ul>
	<li>FilterBtn: Button template for the task filtering feature.</li>
	<li>FilterGrp: Button group with props passed in to map necessary buttons.</li>
	<li>TodoForm: Form allowing users to add tasks.</li>
	<li>TodoItem: Individual tasks to be displayed in the list.</li>
	<li>TodoList: List displaying all the user's tasks and filter buttons. Includes state, logic, and some styling for the app features.</li>
</ul>
