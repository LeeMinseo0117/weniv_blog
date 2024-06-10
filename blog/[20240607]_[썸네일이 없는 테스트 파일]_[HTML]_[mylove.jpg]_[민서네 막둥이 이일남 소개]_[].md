<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>이일남</title>
    <style>
      * {
        text-align: center;
      }
      header {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      ul {
        padding: 0%;
      }
      li {
        list-style-type: none;
      }
      .img-wrap {
        margin: 30px;
      }

      .dl-row {
        justify-content: flex-start;
        padding: 8px 0;
      }
      dt {
        font-weight: bold;
        color: #555;

        flex-shrink: 0;
      }
      dd {
        margin-left: 0;
        color: #333;
      }
      q {
        font-weight: bold;
      }

      a {
        color: black;
      }
      ol {
        list-style: none;
        text-align: left;
        padding: 0;
      }
      #email {
        display: block;
      }
      #tel {
        display: block;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>
        멋있는 수컷 하늘다람쥐 <br />
        그 이름 이일남
      </h1>

      <nav>
        <ul>
          <li><a href="#1">자기소개</a></li>
          <li><a href="#2">좋아하는 음식</a></li>
          <li><a href="#3">좋아하는 간식</a></li>
          <li><a href="#4">싫어하는 음식</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div class="main">
        <div class="img-wrap">
          <img
            src="/img/mylove.jpg"
            alt="이름이 이일남인 하늘다람쥐 사진"
            width="230px"
          />
        </div>
      </div>

      <section>
        <h2 id="1">자기소개</h2>

        <dl>
          <div class="dl-row">
            <dt>성</dt>
            <dd>이</dd>
          </div>

          <div class="dl-row">
            <dt>이름</dt>
            <dd>일남</dd>
          </div>

          <div class="dl-row">
            <dt>뜻</dt>
            <dd>민서네 집 첫번째 아들</dd>
          </div>

          <div class="dl-row">
            <dt>성별</dt>
            <dd>남자</dd>
          </div>
          <div class="dl-row">
            <dt>나이</dt>
            <dd>6살</dd>
          </div>
        </dl>
      </section>

      <div class="q">
        <q>우리 일남이 하고싶은거 다 해</q>
      </div>

      <section>
        <h2 id="2">좋아하는 음식 <mark>TOP3</mark></h2>
        <ol>
          <li>버섯</li>
          <li>파프리카</li>
          <li>당근</li>
        </ol>
      </section>

      <section>
        <h2 id="3">좋아하는 간식 <mark>TOP3</mark></h2>
        <ol>
          <li>해바라기씨</li>
          <li>아몬드</li>
          <li>호두</li>
        </ol>
      </section>

      <section>
        <h2 id="4">싫어하는 음식 <mark>TOP3</mark></h2>
        <ol>
          <li>브로콜리</li>
          <li>청경채</li>
          <li>치커리</li>
        </ol>
      </section>

      <figure id="5">
        <img src="/img/mylove2.jpg" width="220px" />
        <figcaption>간식 달라고 손 내미는 일남이</figcaption>
      </figure>
    </main>

    <footer>
      일남이의 사진을 더 받고 싶다면 문의 주세요
      <address>
        <a href="" id="email">leems3164@naver.com</a>

        <a href="tel:010-3164-9766" id="tel">010-3164-9766</a>
      </address>
    </footer>
  </body>
</html>
