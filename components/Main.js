import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <p>A detail-oriented and efficient FullStack Software Engineer with 2+ years experience building user interfaces, application logic and database design. I am an ardent problem solver who will adapt to any tools that will achieve a seamless experience for the end user without compromising on quality.</p>
          <p>With my experience spanning across the entire software development cycle, I can help you build out your solution effiently and with my eye on the bigger picture. I like to understand the overall objectives in order to align my work to achieving them. The product will be my muse :)</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <h4>Andela</h4>
          <p>
            <ul>
              <li>Grew the agile development environment by researching and identifying new technologies and tools.</li>
              <li>Outlined the technical design of projects by writing and updating documentation. This was also useful for reference purposes.</li>
              <li>Drove faster build/release and failure resolution processes by monitoring automated build and continuous software integration processes.</li>
              <li>Built and containerized a NodeJS application in Typescript. I also designed an automated build, testing and deployment pipeline for the same.</li>
              <li>Took part in the complete software life cycle from preliminary needs analysis to enterprise-wide deployment and support.</li>
            </ul>
          </p>
          <h4>IDEO.org</h4>
          <p>
            <ul>
              <li>Increased the availability of the platform by integrating a process manager. This ensured users would not experience any downtime in case of application failure.</li>
              <li>I led the development of a mission-critical feature of the application that led to an increase in the number of users on the platform by up to 10%</li>
              <li>The platform was built using Typescript (ReactJS and NodeJS)</li>
            </ul>
          </p>
          <h4>Safaricom PLC</h4>
          <p>
            <ul>
              <li>I improved the experience of developers by identifying potential bugs in the M-Pesa API. I enabled the company to fix the problems by proposing possible solutions and supporting the developers through the integration.</li>
              <li>I helped increase clients revenue by integrating automated payment solutions onto their platform.</li>
            </ul>
          </p>
          <h4>MKOPA Solar</h4>
          <p>
            <ul>
              <li>I improved customer experience by identifying bugs in the hardware as well as software. This enabled the developers to design and ship solutions without a degraded user experience.</li>
              <li>I reduced manufacture and development costs by identifying bugs in the products before they were moved to production.</li>
            </ul>
          </p>
          {close}
        </article>

        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <h4>General:</h4>
          <p>
            <ul>
              <li>Git: github, bitbucket</li>
              <li>Agile Development</li>
              <li>Test Driven Development (TDD)</li>
            </ul>
          </p>
          <h4>Backend:</h4>
          <p>
            <ul>
              <li>Python: Django / Flask</li>
              <li>Typescript / Javascript</li>
              <li>NodeJS: ExpressJS, NextJS</li>
              <li>Go</li>
              <li>APIs: REST, GraphQL</li>
            </ul>
          </p>
          <h4>Databases:</h4>
          <p>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </p>
          <h4>Frontend:</h4>
          <p>
            <ul>
              <li>Typescript / Javascript</li>
              <li>ReactJS</li>
              <li>Webpack and optimizations</li>
              <li>Babel</li>
              <li>HTML, CSS, SCSS</li>
            </ul>
          </p>
          <h4>DevOps:</h4>
          <p>
            <ul>
              <li>Scripting: Bash, Python</li>
              <li>Architecture: Virtual Machines, Docker Containers</li>
              <li>Continuous Integration: TravisCI, CircleCI</li>
              <li>Continuous Deployment: Jenkins, Heroku, AWS, GCP</li>
              <li>Infra as Code: Terraform, Bash, Docker-Compose</li>
              <li>Process Managers: Kubernetes, PM2</li>
            </ul>
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <h4>Email:</h4>
          <p>rickynyairo@gmail.com</p>
          <h4>Social Media Platforms:</h4>
          <ul className="icons">
            <li><a href="https://twitter.com/rnyairo" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="https://www.linkedin.com/in/ricky-nyairo-79483098/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
            <li><a href="https://github.com/rickynyairo" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main