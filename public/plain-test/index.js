import { html, render } from "./makeWebComponent.js";
import { clubApplication } from "./club-application.js";
import { leaderApplication } from "./leader-application.js";
import { coleadApplication } from "./colead-add.js";

// import { logoIsh } from "./logo-ish.js";

const caJSON = JSON.stringify(clubApplication);
const laJSON = JSON.stringify(leaderApplication);
const coJSON = JSON.stringify(coleadApplication);

const state = {
  caOpen: false,
  caStatus: "imcomplete", // not started | imcomplete | complete
  laOpen: false,
  laStatus: "complete", // not started | imcomplete | complete
  coLeadersOpen: false,
  coStatus: "imcomplete", // not started | imcomplete | complete
}

const mainHTML = state => html`
  <div class="app-container">
    <div class="caLink app-link">
      Club Application
      <span class=${"app-link-status " + state.caStatus}>${state.caStatus}</span>
      <span class="app-link-arrow noselect">${state.caOpen ? "▽" : "▷"}</span>
    </div>
    <application-form id="club-app" class=${!state.caOpen ? "hidden" : ""}></application-form>
    <hr>
    <div class="laLink app-link">
      Leader Application
      <span class=${"app-link-status " + state.laStatus}>${state.laStatus}</span>
      <span class="app-link-arrow noselect">${state.laOpen ? "▽" : "▷"}</span>
    </div>
    <div class=${!state.laOpen ? "hidden" : ""}>
      <application-form id="leader-app"></application-form>
      <div class="canvas-container" style="display: grid; place-items: start; width: calc(100% - 210px); margin-left: 210px;">
        <canvas width=300px height=300px style="border: 1px black solid;"></canvas>
      </div>
    </div>
    <hr>
    <div class="coLeadersLink app-link">
      Co-Leaders
      <span class="app-link-status optional">optional</span>
      <span class="app-link-arrow noselect">${state.coLeadersOpen ? "▽" : "▷"}</span>
    </div>
    <div class=${!state.coLeadersOpen ? "hidden" : ""}>
      <application-form id="colead-app"></application-form>
      <div>add regular html here</div>
    </div>
    <hr>
    <div class="submit-button">SUBMIT YOUR APPLICATION</div>
    <br><br>
    <div class="reach-out">
      <span>
        <svg fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-label="support" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" fill="currentColor" width="36" height="36" class="sc-jlyJG gvoVDv sc-iRbamj kTejqx" mr="2,3" color="info" theme="[object Object]"><g transform="translate(5 7)"><path d="M 9 0.0236206C 9.62299 0.00744629 10.2887 0 11 0C 21.0833 0 22 1.5 22 8C 22 14.5 21.0833 16 11 16C 10.6595 16 10.3294 15.9982 10.0095 15.9947L 10.0082 15.9949C 10.0077 15.995 10.0071 15.9952 10.0067 15.9955L 5.55469 18.9636C 4.89014 19.4066 4 18.9302 4 18.1315L 4 15.4624C 4 15.4601 3.99835 15.4581 3.99609 15.4575C 1.01367 14.723 0.223999 13.1274 0.046051 10C 0.0114746 9.3927 0 8.72772 0 8C 0 1.95856 0.791901 0.236511 9 0.0236206ZM 2.47714 12.2372C 2.13568 11.5002 2 10.2927 2 8C 1.99951 6.41864 2.03903 5.33221 2.24951 4.4577C 2.41556 3.659 2.50861 3.43878 2.96548 3.12634C 3.3237 2.84076 3.99329 2.52826 5.34534 2.31049C 6.72906 2.08453 8.50272 2.00055 10.9492 2L 11 2C 13.4727 1.99945 15.2614 2.08295 16.6547 2.31049C 18.0067 2.52826 18.6763 2.84076 19.0345 3.12634C 19.4914 3.43878 19.5844 3.659 19.7505 4.4577C 19.961 5.33221 20.0005 6.41864 20 8C 20.0005 9.58136 19.961 10.6678 19.7505 11.5423C 19.5844 12.341 19.4914 12.5612 19.0345 12.8737C 18.6763 13.1592 18.0067 13.4717 16.6547 13.6895C 15.2614 13.9171 13.4727 14.0005 11 14C 10.6648 14 10.3458 13.9983 10.0316 13.9948C 9.73151 14.014 9.15842 14.1841 8.89725 14.3315L 6 16.263L 6 15.4624C 6 14.4967 5.32776 13.7258 4.47443 13.5156C 3.08609 13.1736 2.70114 12.7207 2.47714 12.2372ZM 10.9824 5.88C 12.2809 4.59998 13.5794 4.91998 14.2287 5.56C 16.8257 8.12 11.7788 11.5 10.9824 11.5C 10.1859 11.5 5.13913 8.12 7.73615 5.56C 8.38538 4.91998 9.6839 4.59998 10.9824 5.88Z"></path></g></svg>
      </span>
      <span>
        Please don’t hesitate to reach out. 
        We’re available to email at <a href="mailto:applications@hackclub.com"><strong>applications@hackclub.com</strong></a>.
      </span>
    </div>
  </div>
`

const r = () => render(document.body, mainHTML(state));

function init() {
  r();

  // const colors = 'blue indigo violet fuschia pink red orange yellow green teal cyan gray blue'
  // const names = colors.split(' ')
  // const s = n => (100 / 12) * n
  // const step = n => `${s(n)}%`
  // const points = Array.from({ length: 13 }, (m, n) => n)
  // const frames = points.map(n => `background-color: ${names[n]}`)
  // const styles = points.map(p => `${step(p)} { ${frames[p]} }`).join('\n')
  // const pulse = keyframes([], styles)

  const pulseStyle = `
    background-color: #e6f4fc;
    background-image: linear-gradient(
      128deg,
      rgba(255, 0, 0, 0.0625),
      rgba(0, 255, 255, 0.125)
    );
    background-blend-mode: overlay;
    animation: cugusR 48s linear infinite;
  `

  document.body.style = `${document.body.style} ${pulseStyle}`

  const ca = document.querySelector("#club-app");
  ca.setAttribute('form-template', caJSON)
  ca.render();
  ca.addEventListener("input", () => {
    console.log("save")
  })

  const la = document.querySelector("#leader-app");
  la.setAttribute('form-template', laJSON)
  la.render();
  la.addEventListener("input", () => {
    console.log("save")

    // const logoData = la.getFormData().get("bonus");
    // logoIsh(logoData);
  })

  const co = document.querySelector("#colead-app");
  co.setAttribute('form-template', coJSON)
  co.render();
  co.addEventListener("input", () => {
    console.log("save")
  })

  document.querySelector(".caLink").addEventListener("mousedown", () => {
    state.caOpen = !state.caOpen;
    r();
  })

  document.querySelector(".laLink").addEventListener("mousedown", () => {
    state.laOpen = !state.laOpen;
    r();
  })

  document.querySelector(".coLeadersLink").addEventListener("mousedown", () => {
    state.coLeadersOpen = !state.coLeadersOpen;
    r();
  })

  document.querySelector(".submit-button").addEventListener("click", () => {
    console.log(ca.getFormDataList())
    console.log(la.getFormDataList())
  })
}

init();