export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="page-title w80 mauto mb50 text-center">Contact</h2>
      <section className="flex-box-row sp-between align-center relative">
        <div className="w60">
          <img
            src="/contact-svg.svg"
            alt="Contact Image"
            className="contact-img"
          />
        </div>
        <form className="flex-box-col w35 g30 contact-form">
          <div>
            <label htmlFor="name" className="isBlock text mb15">
              Name
            </label>
            <input type="text" id="name" placeholder="name" />
          </div>
          <div>
            <label htmlFor="email" className="isBlock text mb15">
              Email
            </label>
            <input type="text" id="email" placeholder="email" />
          </div>
          <div>
            <label htmlFor="message" className="isBlock text mb15">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="20"
              placeholder="message"
            ></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </section>
    </section>
  );
}
