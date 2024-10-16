import Photo1 from "../assets/MiniSection/1.jpg";
import Photo2 from "../assets/MiniSection/2.jpg";
import Photo3 from "../assets/MiniSection/3.jpg";
import Photo4 from "../assets/MiniSection/4.jpg";
import Photo5 from "../assets/MiniSection/5.jpg";
import Photo6 from "../assets/MiniSection/6.jpg";
import Photo7 from "../assets/MiniSection/7.jpg";
import Photo8 from "../assets/MiniSection/8.jpg";
import Photo9 from "../assets/MiniSection/9.jpg";
import Photo10 from "../assets/MiniSection/10.jpg";
import Photo11 from "../assets/MiniSection/11.jpg";
import Photo12 from "../assets/MiniSection/12.jpg";
import Photo13 from "../assets/MiniSection/13.jpg";
import Photo14 from "../assets/MiniSection/14.jpg";
import Photo15 from "../assets/MiniSection/15.jpg";
import Photo16 from "../assets/MiniSection/16.jpg";
import Photo17 from "../assets/MiniSection/17.jpg";
import Photo18 from "../assets/MiniSection/HDUWwr7YFdumtJ7eKiZfXQHXRpKmK7nxcGqjN23cxnaDkGHfQE-02CIhyMeH6cJDNrNMEj2DgfnsZu-INi9uHx_l8JLpokU5v3W1LA.avif"
import Photo19 from "../assets/MiniSection/18.avif"
import Photo20 from "../assets/MiniSection/19.avif"
import Photo21 from "../assets/MiniSection/20.avif"
import Photo22 from "../assets/MiniSection/21.avif"
import Photo23 from "../assets/MiniSection/22.avif"
import Photo24 from "../assets/MiniSection/23.avif"
import Photo25 from "../assets/MiniSection/24.avif"
import Photo26 from "../assets/MiniSection/25.avif"
import Photo27 from "../assets/MiniSection/26.avif"
import Photo28 from "../assets/MiniSection/27.avif"
import Photo29 from "../assets/MiniSection/28.avif"
import Photo30 from "../assets/MiniSection/29.avif"
import Photo31 from "../assets/MiniSection/30.avif"




import {
  FaBookOpen,
  FaDollarSign,
  FaHome,
  FaImages,
} from "react-icons/fa";
export const HeaderNav = [
  { Name: "Home", Link: "#home" },
  { Name: "About", Link: "#about" },
  { Name: "Collection", Link: "#collection" },
  { Name: "Blog", Link: "#blog" },
  { Name: "Contact", Link: "#contact" },
];

export const Photos = [
  { src: Photo1, alt: "Photo1" },
  { src: Photo2, alt: "Photo2" },
  { src: Photo3, alt: "Photo3" },
  { src: Photo4, alt: "Photo4" },
  { src: Photo5, alt: "Photo5" },
  { src: Photo6, alt: "Photo6" },
  { src: Photo7, alt: "Photo7" },
  { src: Photo8, alt: "Photo8" },
  { src: Photo9, alt: "Photo9" },
  { src: Photo10, alt: "Photo10" },
  { src: Photo11, alt: "Photo11" },
  { src: Photo12, alt: "Photo12" },
  { src: Photo13, alt: "Photo13" },
  { src: Photo14, alt: "Photo14" },
  { src: Photo15, alt: "Photo15" },
  { src: Photo16, alt: "Photo16" },
  { src: Photo17, alt: "Photo17" },
];


export const Submenu = [
  {
    Name: "Home",
    Link: "/",
    class: "flex items-center group gap-3 p-3 rounded-xl bg-gray-800 hover:bg-purple-600 transition-all duration-300 text-white hover:shadow-lg",
    iconClass: "w-5 h-5 text-indigo-400 group-hover:text-indigo-100 group-hover:translate-x-1 transition-all duration-300",
    Icon: FaHome,
    showArrow: true, // Added property for arrow visibility
    subItems: [ // Added submenu items
      { Name: "3D Carousel", Link: "/3d-carousel" },
      { Name: "Bended Carousel", Link: "/bended-carousel" },
      { Name: "Video Background", Link: "/video-background" },
      { Name: "Water Effect", Link: "/water-effect" },

    ]
  },
  {
    Name: "Mint Page",
    Link: "/mint",
    class: "flex items-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-blue-600 transition-all duration-300 text-white hover:shadow-lg",
    iconClass: "w-5 h-5 text-green-400",
    Icon: FaDollarSign,
    showArrow: false, // No arrow for this item
  },
  {
    Name: "Collections",
    Link: "/collectiona",
    class: "flex items-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-pink-600 transition-all duration-300 text-white hover:shadow-lg",
    iconClass: "w-5 h-5 text-pink-400",
    Icon: FaImages,
    showArrow: false, // Added property for arrow visibility
  },
  {
    Name: "Pages",
    Link: "/",
    class: "flex items-center gap-3 p-3 rounded-xl group bg-gray-800 hover:bg-yellow-600 transition-all duration-300 text-white hover:shadow-lg",
    iconClass: "w-5 h-5 text-yellow-400 group-hover:text-yellow-100 group-hover:translate-x-1 transition-all duration-300",
    Icon: FaBookOpen,
    showArrow: true, // Added property for arrow visibility
    subItems: [
      { Name: "Coming Soon", Link: "/soon" },
      { Name: "404 Page", Link: "/404" },
      { Name: "Protected Page", Link: "/protected" },
      { Name: "Search No Results", Link: "/search-no-results" },
      { Name: "Articles", Link: "/blog" },
    ],
  },
];

export const FootStepsSlider = [
  {
    number: 'PHASE 01',
    date: 'October 09, 2022',
    title: 'Mini Game Launch For Community',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },

  {
    number: 'PHASE 02',
    date: 'October 17, 2022',
    title: 'Mini Game Launch For Community',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },


  {
    number: 'PHASE 03',
    date: 'October 28, 2022 ',
    title: 'Metaverse 3.0 Launch',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },


  {
    number: 'PHASE 04',
    date: 'November 11, 2022',
    title: 'Female Set #20 is Coming Up',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },


  {
    number: 'PHASE 05',
    date: 'November 11, 2022',
    title: 'Female Set #20 is Coming Up',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },


  {
    number: 'PHASE 06',
    date: 'November 23, 2023',
    title: 'Mini Game Launch For Community',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 07',
    date: 'January 14, 2023',
    title: 'Mini Game Launch For Community',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 08',
    date: 'January 28, 2023',
    title: 'Mini Game Launch For Community',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 09',
    date: 'February 12, 2023',
    title: 'Mini Game Launch For Community',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 10',
    date: 'March 05, 2023',
    title: 'Open Source Project Launch',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 11',
    date: 'May 23, 2023',
    title: 'SQL Database Launch',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 12',
    date: 'June 12, 2023',
    title: 'EYC 2023 Launch',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 13',
    date: 'August 09, 2023',
    title: 'EYC 2023 Launch',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 14',
    date: 'October 30, 2023',
    title: 'EYC 2023 Launch',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 15',
    date: 'February 01, 2023',
    title: 'EYC 2023 Launch',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 16',
    date: 'February 01, 2023',
    title: 'EYC 2023 Launch',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
  {
    number: 'PHASE 17',
    date: 'February 01, 2023',
    title: 'EYC 2023 Launch',
    description: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare lectus interdum.'
  },
]

export const articles = [
  {
    id: 1,
    date: "August 09, 2022",
    category: "MetaVerse",
    comments: 4,
    title: "Reasons Why People Use Discord",
    image: Photo5
  },
  {
    id: 2,
    date: "August 09, 2022",
    category: "MetaVerse",
    comments: 4,
    title: "Trial-By-Combat: The Death Cup"
  },
  {
    id: 3,
    date: "August 09, 2022",
    category: "NFT",
    comments: 4,
    title: "Graffiti Racer Research Center #10"
  },
  {
    id: 4,
    date: "August 09, 2022",
    category: "MetaVerse",
    comments: 4,
    title: "Welcome, The Dark Caller of Discord"
  }

]

export const articlesForBlog = [
  {
    id: 1,
    title: "Reasons Why People Use Discord",
    category: "MetaVerse",
    img: Photo1,
    date: "August 09, 2022",
    comments: 4
  },
  {
    id: 2,
    title: "The Rise of Digital Collectibles",
    category: "NFT",
    img: Photo2,
    date: "September 12, 2022",
    comments: 10
  },
  {
    id: 3,
    title: "Exploring Virtual Real Estate",
    category: "MetaVerse",
    img: Photo3,
    date: "October 01, 2022",
    comments: 3
  },
  {
    id: 4,
    title: "NFTs and the Future of Art",
    category: "NFT",
    img: Photo4,
    date: "August 20, 2022",
    comments: 7
  },
  {
    id: 5,
    title: "MetaVerse Economies Explained",
    category: "MetaVerse",
    img: Photo5,
    date: "November 15, 2022",
    comments: 12
  },
  {
    id: 6,
    title: "Gaming in the MetaVerse",
    category: "MetaVerse",
    img: Photo7,
    date: "December 05, 2022",
    comments: 5
  },
  {
    id: 7,
    title: "NFT Avatars: New Digital Identity",
    category: "NFT",
    img: Photo8,
    date: "July 30, 2022",
    comments: 8
  },
  {
    id: 8,
    title: "How MetaVerse is Shaping Social Interaction",
    category: "MetaVerse",
    img: Photo9,
    date: "October 22, 2022",
    comments: 6
  },
  {
    id: 9,
    title: "NFT Art Auctions: What You Should Know",
    category: "NFT",
    img: Photo10,
    date: "August 18, 2022",
    comments: 9
  },
  {
    id: 10,
    title: "MetaVerse Concerts: A New Experience",
    category: "MetaVerse",
    img: Photo11,
    date: "September 29, 2022",
    comments: 11
  },
  {
    id: 11,
    title: "The Role of Crypto in NFTs",
    category: "NFT",
    img: Photo12,
    date: "October 12, 2022",
    comments: 7
  },
  {
    id: 12,
    title: "Exploring MetaVerse Fashion Shows",
    category: "MetaVerse",
    img: Photo13,
    date: "November 10, 2022",
    comments: 4
  },
  {
    id: 13,
    title: "Creating Digital Art through NFTs",
    category: "NFT",
    img: Photo14,
    date: "December 20, 2022",
    comments: 10
  },
  {
    id: 14,
    title: "MetaVerse: A New World of Work",
    category: "MetaVerse",
    img: Photo15,
    date: "January 05, 2023",
    comments: 3
  },
  {
    id: 15,
    title: "Understanding NFT Royalties",
    category: "NFT",
    img: Photo16,
    date: "February 10, 2023",
    comments: 6
  },
  {
    id: 16,
    title: "MetaVerse and Education: A New Frontier",
    category: "MetaVerse",
    img: Photo17,
    date: "January 22, 2023",
    comments: 5
  },
  {
    id: 17,
    title: "NFT Games: Play-to-Earn Revolution",
    category: "NFT",
    img: Photo18,
    date: "February 28, 2023",
    comments: 8
  },
  {
    id: 18,
    title: "MetaVerse Shopping Malls: The Future?",
    category: "MetaVerse",
    img: Photo19,
    date: "March 05, 2023",
    comments: 12
  },
  {
    id: 19,
    title: "Creating Your First NFT Collection",
    category: "NFT",
    img: Photo20,
    date: "April 15, 2023",
    comments: 9
  },
  {
    id: 20,
    title: "MetaVerse Tourism: Virtual Exploration",
    category: "MetaVerse",
    img: Photo21,
    date: "April 25, 2023",
    comments: 4
  },
  {
    id: 21,
    title: "NFT Utility: Beyond Digital Art",
    category: "NFT",
    img: Photo22,
    date: "May 10, 2023",
    comments: 5
  },
  {
    id: 22,
    title: "MetaVerse Weddings: A Growing Trend",
    category: "MetaVerse",
    img: Photo23,
    date: "May 30, 2023",
    comments: 7
  },
  {
    id: 23,
    title: "NFT Marketplaces: Where to Buy and Sell",
    category: "NFT",
    img: Photo24,
    date: "June 12, 2023",
    comments: 11
  },
  {
    id: 24,
    title: "MetaVerse and Virtual Reality Integration",
    category: "MetaVerse",
    img: Photo25,
    date: "June 22, 2023",
    comments: 6
  },
  {
    id: 25,
    title: "NFT Collectibles: What Makes Them Valuable?",
    category: "NFT",
    img: Photo26,
    date: "July 03, 2023",
    comments: 8
  },
  {
    id: 26,
    title: "Virtual Offices in the MetaVerse",
    category: "MetaVerse",
    img: Photo27,
    date: "July 15, 2023",
    comments: 4
  },
  {
    id: 27,
    title: "NFT Staking: How to Earn Passive Income",
    category: "NFT",
    img: Photo28,
    date: "August 01, 2023",
    comments: 12
  },
  {
    id: 28,
    title: "MetaVerse Sports: A New Frontier for Fans",
    category: "MetaVerse",
    img: Photo29,
    date: "August 18, 2023",
    comments: 10
  },
  {
    id: 29,
    title: "Understanding NFT Ownership and Security",
    category: "NFT",
    img: Photo30,
    date: "September 05, 2023",
    comments: 9
  },
  {
    id: 30,
    title: "MetaVerse Cities: The Future of Urban Planning?",
    category: "MetaVerse",
    img: Photo31,
    date: "September 25, 2023",
    comments: 7
  }
];
