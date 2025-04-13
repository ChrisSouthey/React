import './App.css';
import { ShowFormButton } from './week2/ShowForm';
import { SignUpForm, UseStateDemo } from './week2/SignUpForm';
import ToDo from './ToDo';
import { Modal } from './modal';
import { MyAwesomeComponent } from './myAwesomeComponent';

function App() {
  return (
      <div class="todo-container">
        <div class="card">
          <MyAwesomeComponent></MyAwesomeComponent>
        </div>
      </div>
  );
}

export default App;
