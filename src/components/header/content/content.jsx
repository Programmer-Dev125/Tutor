export default function Content() {
  return (
    <section className="flex-box-row sp-between align-center content-row">
      <div className="w50">
        <h2 className="about-title">
          Advanced Tutoring with
          <span> Experts </span>Online
        </h2>
        <p className="title ln2">
          I am a dedicated tutor with a strong background in [
          <span className="bold"> Maths, English, Sciences </span>] and a
          passion for helping students succeed. With 3 years of experience, I
          specialize in breaking down complex topics into easy-to-understand
          concepts. My teaching approach is personalized, ensuring that each
          student receives tailored guidance based on their learning style and
          goals.
        </p>
      </div>
      <div className="wfit relative">
        <div className="circle-top"></div>
        <img src="/content-svg.svg" className="about-img" alt="Content svg" />
        <div className="circle-bottom"></div>
      </div>
    </section>
  );
}
