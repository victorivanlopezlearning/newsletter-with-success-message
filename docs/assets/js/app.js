const formSubmit=document.querySelector("#form-submit"),formLabels=document.querySelector("#form-info"),inputEmail=document.querySelector("#email");formSubmit.addEventListener("click",e=>{e.preventDefault();const s=inputEmail.value;return""===s?(createLabelError("Email is required"),void inputEmail.classList.add("form__input--error")):isValidEmail(s)?void renderMessageSuccess(s):(createLabelError("Valid email required"),void inputEmail.classList.add("form__input--error"))});const isValidEmail=e=>/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(e),createLabelError=e=>{if(!document.querySelector(".label")){const s=document.createElement("P");s.classList.add("form__error","label"),s.textContent=e,formLabels.appendChild(s),setTimeout(()=>{s.remove(),inputEmail.classList.remove("form__input--error")},5e3)}},renderMessageSuccess=e=>{const s=document.querySelector(".main"),t=document.createElement("DIV");t.className="success-message container container--success";const c=document.createElement("DIV");c.className="success-message__content";const a=document.createElement("IMG");a.className="success-message__image",a.src="./assets/images/icon-success.svg",a.alt="Icon Success",c.appendChild(a);const n=document.createElement("P");n.className="success-message__heading",n.textContent="Thanks for subscribing!",c.appendChild(n);const r=document.createElement("P");r.className="success-message__description",r.innerHTML=`A confirmation email has been sent to <span class="success-message__email">${e}</span>. Please open it and click the button inside to confirm your subscription.`,c.appendChild(r);const i=document.createElement("A");i.className="success-message__btn",i.href="/newsletter-with-success-message/",i.textContent="Dismiss message",t.appendChild(c),t.appendChild(i),s.replaceChildren(t)};
//# sourceMappingURL=app.js.map