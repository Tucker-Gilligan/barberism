import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about">
      <h3>About Barberism</h3>
      <p>
        Barberism was created with the goal of connecting individuals with
        individualized needs, such as those with sensory-processing or Autism
        spectrum disorders, with barbers who are prepared, willing, and trained
        to meet those individualized needs.
      </p>

      <p>
        Currently, visitors to Barberism can register a qualified barber, or
        find a qualified barber located within their state.
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
