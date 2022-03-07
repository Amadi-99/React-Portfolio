import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/AboutPage-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Amadi Anuththara</span>
              </p>
              <h2 className="about__heading">A Software Developer</h2>
              <div className="about__info">
                <PText>
                  I am from Kalutara, Sri Lanka. I am a Undergraduate student of
                  University of Sri Jayewardenepura.I am following BSc(Hons)
                  degree in Information Technology. I started coding as a high
                  school student. I have experienced developing software systems
                  for my university projects as well. I am freelance software
                  developer and now I have the opportunity to design with the
                  coding.
                  <br />
                  <br />I love creative design and I always try to design stuff
                  with my unique point of view. I also love to create design
                  that can be usefull to others.And also, I am working as a
                  Graphic Designer and Vedio Editor.I see myself as a relentless
                  problem-solver, and I’m always looking for a new challenge.{' '}
                  <br />
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Collage"
                items={['C.W.W. Kannangara Central College']}
              />
              <AboutInfoItem
                title="Univarsity"
                items={['University Of Sri Jayewardenepura']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Python', 'Java', 'Node']}
              />
              <AboutInfoItem
                title="Design"
                items={[
                  'Photoshop',
                  'After Effects',
                  'Premiere Pro',
                  'Illustrator',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Volunteer experience</h1>

              <AboutInfoItem
                title="Jul 2021"
                items={[
                  'Institute of Electrical and Electronics Engineers (IEEE)',
                ]}
              />
              <AboutInfoItem
                title="Oct 2021"
                items={['Jupura Youth Assurance Society']}
              />
              <AboutInfoItem title="Jul 2020" items={['Jupura Flames']} />
              <AboutInfoItem title="Oct 2020" items={['Jupura Voice']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
