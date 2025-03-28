export default function Courses() {
  return (
    <section className="course-section">
      <h2 className="page-title w80 text-center mauto">Courses</h2>
      <section className="g3 g20">
        <div className="card">
          <img src="/physics-picture.jpg" alt="Physics" />
          <h2 className="course-title text-center mb10">Physics</h2>
          <p className="title text-center mt0 mb0 pr10 pl10">
            Mechanics, electricity, magnetism, and problem-solving techniques
          </p>
          <div className="icon"></div>
          <div className="icon-left"></div>
        </div>
        <div className="card">
          <img src="/maths-picture.jpg" alt="Maths Picture" />
          <h2 className="course-title text-center mb10">Mathematics</h2>
          <p className="title text-center mt0 mb0 pr10 pl10">
            Algebra, calculus, geometry, and real-world applications
          </p>
          <div className="icon"></div>
          <div className="icon-left"></div>
        </div>
        <div className="card">
          <img src="/english-picture.jpg" alt="Maths Picture" />
          <h2 className="course-title text-center mb10">English</h2>
          <p className="title text-center mt0 mb0 pr10 pl10">
            Grammar, writing, comprehension, and communication skills
          </p>
          <div className="icon"></div>
          <div className="icon-left"></div>
        </div>
      </section>
    </section>
  );
}
