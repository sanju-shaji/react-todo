import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Todo = () => {
  const [todo, setTodo] = useState([]);

  // Connecting to the External API
  React.useEffect(() => {
    console.log('inside');
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      setTodo(res.data);
    });
  }, []);

  return (
    <>
      <Typography variant="h4" id='h' component="h1" gutterBottom>
        <b>TODO LIST</b>
      </Typography>

      <Paper className="list-container" elevation={3} style={{ padding: '16px' }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {todo.map((item) => (
            <li key={item.id} style={{ margin: '8px 0', border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>
              <Typography variant="h6">
                <b>User ID:</b> {item.userId} <br />
                <b>ID:</b> {item.id} <br />
                <b>Title:</b> {item.title}
              </Typography>
            </li>
          ))}
        </ul>
      </Paper>
    </>
  );
};

export default Todo;
