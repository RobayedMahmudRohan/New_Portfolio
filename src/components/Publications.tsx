import { publications } from '../data/publications'
import Section from './Section'

function Publications() {
  return (
    <Section id="publications" title="Publications" hint="Research work">
      <ol className="publication-list">
        {publications.map((publication) => (
          <li key={publication.title} className="card">
            <h3>{publication.title}</h3>
            {publication.venue && (
              <p className="card__meta">{publication.venue}</p>
            )}
            {publication.doi && (
              <p className="card__meta">
                DOI:{' '}
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {publication.doi}
                </a>
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Publications
