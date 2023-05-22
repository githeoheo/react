import { React } from "react";
import "./sign-up.css";

function sign_up() {
  return (
    <section class="login-form">
      <h1>Sign up</h1>
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
        <div class="int-area">
          <input
            type="password"
            name="pw"
            id="pw"
            autocomplete="off"
            required
          />
          <label for="pw">Re-enter PASSWORD</label>
        </div>
        <div class="btn-area">
          <button id="btn" type="submit">
            Sign up
          </button>
        </div>
      </form>
      {/* <div class="sign-up">
        <a href="">Sign up</a>
      </div> */}
    </section>
  );
}

export default sign_up;
