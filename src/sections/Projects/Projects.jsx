import styles from './ProjectsStyles.module.css';
import flight from '../../assets/flight.png';
import k from '../../assets/kuber.png';
import oqa from '../../assets/q.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={flight}
          link="https://github.com/AKSHAT202003/flightops"
          h3="FlightOps"
          p="Flight routing"
        />
        <ProjectCard
          src={k}
          link="https://github.com/AKSHAT202003/Load-balancing-using-kubernetes"
          h3="Load balancing using kubernetes"
          p="Load balancing by nginx"
        />
        <ProjectCard
          src={oqa}
          link="https://github.com/AKSHAT202003/Load-balancing-using-kubernetes"
          h3="Online quiz app"
          p="A web app"
        />
      </div>
    </section>
  );
}
export default Projects;
