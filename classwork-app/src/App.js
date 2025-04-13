import './App.css';
import { ShowFormButton } from './week2/ShowForm';
import { SignUpForm, UseStateDemo } from './week2/SignUpForm';
import ToDo from './ToDo';
import { Modal } from './modal';

function App() {
  return (
      <div class="todo-container">
        <div class="card">
          <ToDo></ToDo>
        </div>
      </div>
  );
}

export default App;
