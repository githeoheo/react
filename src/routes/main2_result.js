import { React } from "react";
import "./main2-result.css";

function main2_result() {
  return (
    <section>
      <div class="main-box">
        <h1 class="main1">Result</h1>
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
            <img class="result" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default main2_result;
