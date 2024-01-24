import '../styles/about.scss';

export const About = () => {
  return (
    <section className="about-hero">
      <div className="about-hero__bg-image"></div>
      <div className="about-hero__cover"></div>
      <div>
        <h1 className="about__heading">
          Make your own <span className="about__heading--span">way</span>
        </h1>
      </div>
    </section>
  );
};

export default About;
