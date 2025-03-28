export default function Nav() {
  function handleScroll(e) {
    e.stopPropagation();
    if (e.target.tagName === "P" || e.target.tagName === "BUTTON") {
      switch (e.target.textContent) {
        case "Courses":
          document.querySelector(".course-section").scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "start",
          });
          break;
        case "Contact":
          document.querySelector(".contact-section").scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "start",
          });
          document.querySelector("input").focus();
          break;
        case "Get Started Today":
          document.querySelector(".contact-section").scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "start",
          });
          document.querySelector("input").focus();
          break;
        default:
          break;
      }
    }
  }
  return (
    <nav
      className="flex-box-row align-center sp-between mt40"
      onClick={handleScroll}
    >
      <div className="flex-box-row align-center sp-between w30">
        <p className="link mt0 mb0 w40">Courses</p>
        <p className="link mt0 mb0 w40">Contact</p>
      </div>
      <div className="wfit">
        <button>Get Started Today</button>
      </div>
    </nav>
  );
}
