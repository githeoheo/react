import { React } from "react";
import "./main2.css";

function main2_ui() {
  return (
    <section>
      <div class="main-box">
        <h1 class="main1">메인화면2</h1>
        <div class="form-box">
          <div class="left-box">
            <form action="">
              <div class="btn-area">
                <button type="submit">라벨링</button>
              </div>
              <div class="btn-area">
                <button type="submit">학습하기</button>
              </div>
              <div class="btn-area">
                <button type="submit">결과 보여주기</button>
              </div>
            </form>
            <div class="percent">
              <button type="submit">0%</button>
            </div>
          </div>
          <div class="right-box">
            <div class="import-btn">
              <button type="submit">웹캠 / 업로드</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default main2_ui;
