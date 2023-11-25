import React from 'react';

const initialState = ['Black friday!!', 'Shopping', 'REACT!!!'];

function App() {
  const [title, setTitle] = React.useState('Black friday!!');
  const [tasks, setTasks] = React.useState(initialState);

  return (
    <Layout>
      <Header totalTasks={tasks.length} />
      <Todos tasks={tasks} />
    </Layout>
  );
}

function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

function Header({ totalTasks }) {
  const [title, setTitle] = React.useState('title');

  function handleChange(e) {}

  return (
    <header>
      <h1>My tasks {totalTasks}</h1>
      <input type="text" value={title} onChange={handleChange} />
      <button>Add</button>
    </header>
  );
}

function Todos({ tasks }) {
  console.log(tasks);
  return (
    <section>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task}>
              {task} <button>X</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default App;
