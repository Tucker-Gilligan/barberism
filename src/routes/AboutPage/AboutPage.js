import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about">
      <h3>About Barberism</h3>
      <p>
        Barberism was created with the goal of connecting people who have
        individualized needs, such as those with sensory-processing or Autism
        Spectrum Disorder, with barbers who are prepared, willing, and trained
        to meet those needs.
      </p>

      <p>
        Currently, visitors to Barberism can locate a qualified barber within
        their state, or register a qualified barber.
      </p>

      <p>Barbers have the option to register with the following services:</p>
      <ul>
        <li>In-Shop Sensory Hours</li>
        <li>Scissors-Only Haircuts</li>
        <li>Home Haircuts</li>
        <li>Longer appointment times</li>
      </ul>
    </div>
  );
}

export default AboutPage;
