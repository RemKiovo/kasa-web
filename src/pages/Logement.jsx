import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchLogements } from '../services/logementsService'
import Slideshow from '../components/Slideshow'
import '../styles/Logement.scss'

function Logement() {
  const { logementId } = useParams()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    fetchLogements()
      .then((logements) => {
        const foundLogement = logements.find(
          (logement) => logement.id === logementId
        )
        setLogement(foundLogement)
      })
      .catch((error) => {
        console.error('Failed to fetch logements:', error)
      })
  }, [logementId])

  return logement ? (
    <div>
      <div id="slideshow-container">
        <Slideshow pictures={logement.pictures} />
      </div>
      <div>
        <h1>{logement.title}</h1>
        <p>{logement.description}</p>
        <h2>{logement.host.name}</h2>
        <img src={logement.host.picture} alt={logement.host.name} />
        <p>{logement.rating}</p>
        <h3>{logement.location}</h3>
        <ul>
          {logement.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
        <ul
          style={{
            paddingTop: '10px',
          }}
        >
          {logement.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  ) : null
}

export default Logement
