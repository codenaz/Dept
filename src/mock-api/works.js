import bolImage from '../assets/images/works/bolcom.png';
import kempen from '../assets/images/works/kempen.png';
import philips from '../assets/images/works/philips.png';
import gemeentemuseum from '../assets/images/works/gemeentemuseum.png';
import florensis from '../assets/images/works/florensis.png';
import lightning from '../assets/images/works/lightning.png';
import tui from '../assets/images/works/tui.png';
import chocomel from '../assets/images/works/chocomel.png';
import jbl from '../assets/images/works/jbl.png';
import zalando from '../assets/images/works/zalando.png';

const works = [
  {
    title: 'bol.com',
    description: 'A summer island in the netherlands',
    image: bolImage,
    category: ['marketing'],
    industry: ['tours']
  },
  {
    title: 'kempen',
    description: 'Not some average banking website',
    image: kempen,
    category: ['website'],
    industry: ['finance']
  },
  {
    title: 'philips',
    description: 'Beautiful design meets innovative technology',
    image: philips,
    category: ['design'],
    industry: ['technology']
  },
  {
    title: 'gemeentemuseum',
    description: 'A hundred years of Mondriaan and De stijl',
    image: gemeentemuseum,
    category: ['marketing'],
    industry: ['artculture']
  },
  {
    title: 'microsoft',
    description:
      "Tapping into ireland's unique gaming culture and bringing a fresh flavour to their xbox social media channels",
    category: ['socialmedia'],
    industry: ['technology']
  },
  {
    title: "o'neil",
    description:
      "Integrating exisiting content into o'neil's new ecommerce platform",
    category: ['website'],
    industry: ['ecommerce']
  },
  {
    title: 'florence',
    image: florensis,
    description: 'Rethinking the entire online ecosystem',
    category: ['website'],
    industry: ['technology']
  },
  {
    title: 'Be lighting',
    image: lightning,
    description: 'Delivering clarity on a global scale',
    category: ['marketing'],
    industry: ['technology']
  },
  {
    title: 'tui',
    image: tui,
    description: 'Swipe to find your next holiday',
    category: ['website'],
    industry: ['tours']
  },
  {
    title: 'chocomel',
    image: chocomel,
    description: 'A campaign for the limited edition letter packs',
    category: ['marketing', 'design'],
    industry: ['food']
  },
  {
    title: 'butlins',
    description:
      'Enhancing customer experience for personalized holiday planning using real time data',
    category: ['applications'],
    industry: ['tours', 'technology']
  },
  {
    title: 'vacanselect',
    description:
      'Prediciting booking behaviour for holiday with smart data, voice search and machine learning',
    category: ['applications'],
    industry: ['tours', 'technology']
  },
  {
    title: 'jbl',
    description: 'Live like a champion with Jerome Boateng',
    image: jbl,
    category: ['marketing'],
    industry: ['sport']
  },
  {
    title: 'zalando',
    description: 'Innovative SEO and content strategy for Zalando',
    image: zalando,
    category: ['marketing', 'website'],
    industry: ['ecommerce']
  }
];

export const getAllWorks = () => Promise.resolve(works);
