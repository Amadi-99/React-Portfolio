import { v4 as uuidv4 } from 'uuid';
import WebSiteImg from '../images/Ocean-WebSite.png';
import ERSImg from '../images/ERS.png';
import HMSImg from '../images/HMSL.png';
import TravelAppImg from '../images/TravelApp.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Exam Result System',
    desc:
      'An application to analyse subject results. I developed this system using python language with SQLite databases.',
    img: ERSImg,
  },
  {
    id: uuidv4(),
    name: 'Hospital Management System',
    desc:
      'Using this system you can manage all data in the hospital. I developed this system using Java language with MySQL databases. ',
    img: HMSImg,
  },
  {
    id: uuidv4(),
    name: 'Travel App',
    desc:
      'Using this app you can find best Tuarisum Places in Sri Lanka. Also you will get a better idea about the Tuarisum Places.',
    img: TravelAppImg,
  },
  {
    id: uuidv4(),
    name: 'World Ocean',
    desc:
      'A Static website that will show the performance of the website. Also you will get some useful information related to the Ocean.',
    img: WebSiteImg,
  },
];

export default projects;
