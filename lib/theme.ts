// Runs before the first paint so the saved choice does not flash the other theme.
export const themeBootstrap = `(function(){var t;try{t=localStorage.getItem("mjpub-theme")}catch(e){}if(t!=="light"&&t!=="dark"){t="light"}document.documentElement.dataset.theme=t;document.documentElement.classList.toggle("dark",t==="dark")})()`;
