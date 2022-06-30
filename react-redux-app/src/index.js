import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  titleChange,
  taskDelete,
  comletedTask,
  getTasks,
  loadTasks,
  getTasksLoadingStatus,
  taskPost,
} from './store/task';
import configureStore from './store/store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { getError } from './store/errors';

const store = configureStore();

const App = () => {
  const state = useSelector(getTasks());
  const isLoading = useSelector(getTasksLoadingStatus());
  const error = useSelector(getError());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  const changeTitle = (taskId) => {
    dispatch(titleChange(taskId));
  };
  const deleteTitle = (taskId) => {
    dispatch(taskDelete(taskId));
  };
  const addTask = () => {
    dispatch(taskPost(state));
  };

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>app</h1>
      <button onClick={() => addTask()}>Добавить задачу</button>
      <ol reversed>
        {state.map((el) => (
          <li key={Math.random()}>
            <p>{el.title}</p>
            <p>{`Comleted:  ${el.completed}`}</p>
            <button onClick={() => dispatch(comletedTask(el.id))}>
              Изменить
            </button>
            <button onClick={() => changeTitle(el.id)}>
              Изменить название
            </button>
            <button onClick={() => deleteTitle(el.id)}>Удалить</button>
            <hr />
          </li>
        ))}
      </ol>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
