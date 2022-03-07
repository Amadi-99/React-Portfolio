import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Amadi Anuththara</h1>
          <PText>
            A hardworking and proactive Information Technology Undergraduate who
            is willing to learn Information Technology concepts and Programming
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'amadianuththara111@gmail.com',
                path: 'amadianuththara111@gmail.com',
              },
              {
                title: 'Kalutara, Sri Lanka',
                path:
                  'https://www.google.com/maps/d/embed?mid=1NJWOi62qfQi9WovWHpC1J8dZXx0&msa=0&hl=en&ie=UTF8&t=m&ll=6.594271000000003%2C79.96326&spn=0.020463%2C0.027466&z=15&output=embed',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'GitHub',
                path: 'https://github.com/Amadi-99',
              },
              {
                title: 'LinkedIn',
                path:
                  'https://www.linkedin.com/in/amadi-anuththara-714016224/?trk=people_directory&originalSubdomain=lk',
              },
              {
                title: 'Behance',
                path: 'https://www.behance.net/amadianuththara',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/amadianuththara.yatawathura',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 - Amadi Anuththara | Designed By <a>CODEA</a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
