import '../styles/About.scss'

import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

function About() {
  return (
    <div id="about">
      <Banner page="about" />
      <div id="collapse-container">
        <Collapse title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale.
            <br />
            Les photos sont conformes aux logements, et toutes les informations
            sont régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa.
            <br />
            Tout comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite.
            <br />
            N'hésitez pas à nous contacter si vous avez la moindre question.
          </p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>
            La sécurité est la priorité de Kasa.
            <br />
            Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
            correspond aux critères de sécurité établis par nos services.
            <br />
            En laissant une note aussi bien à l'hôte qu'au locataire, cela
            permet à nos équipes de vérifier que les standards sont bien
            respectés.
            <br />
            Nous organisons également des ateliers sur la sécurité domestique
            pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  )
}

export default About
