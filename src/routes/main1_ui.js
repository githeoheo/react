import { React } from "react";
import "./main1.css";

function main1_ui() {
  return (
    <section>
      <div class="main-box">
        <h1 class="main1">메인화면1</h1>
        <div class="form-box">
          {/* <br></br>
        <br></br>
        <br></br> */}
          <form action="">
            <div class="btn-area">
              <button id="btn" type="submit">
                새 프로젝트 만들기
              </button>
            </div>
            <div class="btn-area">
              <button id="btn2" type="submit">
                기존 프로젝트 사용하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default main1_ui;
