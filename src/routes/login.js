import { React } from "react";
import "./login.css";

function login() {
  return (
    <section class="login-form">
      {/* <h1>LOGO DESIGN</h1> */}
      <h1>LOGIN</h1>
      <form action="">
        <div class="int-area">
          <input type="text" name="id" id="id" autocomplete="off" required />
          <label for="id">USER NAME</label>
        </div>
        <div class="int-area">
          <input
            type="password"
            name="pw"
            id="pw"
            autocomplete="off"
            required
          />
          <label for="pw">PASSWORD</label>
        </div>
        <div class="btn-area">
          <button id="btn" type="submit">
            LOGIN
          </button>
        </div>
      </form>
      <div class="sign-up">
        <a href="">Sign up</a>
      </div>
    </section>
  );
}

export default login;
