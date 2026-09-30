<template>
  <div
    class="build-preview"
    role="img"
    aria-label="Illustration of a website, code editor and mobile payment flow coming together. Concept illustration, not a live client project."
  >
    <div class="preview-grid"></div>
    <span class="preview-coordinate">IDEA → SOMETHING REAL</span>
    <div class="browser-preview">
      <div class="browser-bar">
        <span class="window-dots"><i></i><i></i><i></i></span
        ><span>your-next-big-thing.co.ke</span><span>↗</span>
      </div>
      <div class="mock-site-nav">
        <b>yourbrand<span>®</span></b
        ><span>About&nbsp;&nbsp; Work&nbsp;&nbsp; Contact</span>
      </div>
      <div class="mock-site-content">
        <span class="mini-label">BUILT FOR WHAT’S NEXT</span
        ><strong
          >A big idea.<br />An even better<br /><em>experience.</em></strong
        ><span class="mock-button">Let’s make it happen ↗</span>
      </div>
      <div class="orbit-art">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <span>✳</span>
      </div>
      <div class="mock-site-footer">
        <span>DESIGNED WITH INTENTION</span><span>01 / 03</span>
      </div>
    </div>
    <div class="code-preview">
      <div>
        <span class="code-dot"></span> possibilities.js <UiIcon name="code" />
      </div>
      <code
        ><span>const</span> yourNextChapter = {<br />&nbsp; idea:
        <em>'Something great'</em>,<br />&nbsp; builtWith:
        <em>'404HubSpot'</em>,<br />&nbsp; readyToGrow: <b>true</b
        ><br />};</code
      >
    </div>
    <div class="payment-preview">
      <span class="payment-check"><UiIcon name="check" /></span>
      <div><b>Payments, connected.</b><span>M-Pesa × your business</span></div>
      <span class="payment-spark">✳</span>
    </div>
    <span class="preview-caption">DESIGN. DEVELOP. CONNECT.</span>
  </div>
</template>
<script>
import UiIcon from "./UiIcon.vue";
export default { name: "BuildPreview", components: { UiIcon } };
</script>
