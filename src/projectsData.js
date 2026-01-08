const projects = [
  {
    title: "Lieferanto Trading",
    slug: "lieferanto",
    desc: "Trading,Import & Export  Company ",
    image: "img/lieferanto.png",

    cat: 1,
    url: "https://lieferanto.com",
    longDesc:
      "A corporate WordPress website for a trading, import, and export company with a professional design.",
  },
  {
    title: "SBS Consultant Inc",
    slug: "sbs",
    desc: "AI Business Automation ",
    image: "img/sbs.png",

    cat: 1,
    url: "https://sbs-inc.us",
    longDesc:
      "AI-powered business automation website designed to streamline processes and help small businesses increase efficiency.",
  },
  {
    title: "livestores electronics",
    slug: "ls",
    desc: "Accessories for digital gadgets website ",
    image: "img/Livestores.png",

    cat: 1,
    url: "https://livestores.co",
    longDesc:
      "A modern WordPress ecommerce website for digital gadget accessories with a clean layout and smooth shopping experience.",
  },

  {
    title: "platinum properties",
    slug: "pl",
    desc: "A real estate agency website ",
    image: "img/platinum.png",
    url: "https://platinum-egypt.com",
    cat: 1,
    longDesc:
      "A real estate agency website built on WordPress, featuring property listings and a professional corporate design.",
  },
  {
    title: "WWW Company",
    slug: "www",
    desc: "A company website ",
    image: "img/www.png",

    cat: 1,
    longDesc:
      "A corporate WordPress website showcasing the company’s services with a clean and modern interface.",
  },
  {
    title: "The pets now",
    slug: "tpn",
    desc: "A WordPress blog for cats",
    image: "img/tpn.jpg",
    cat: 1,
    longDesc:
      "A WordPress blog dedicated to cats, covering tips, guides, and helpful information for cat lovers.",
  },
  {
    title: "Cookreads blog",
    slug: "cookreads",
    desc: "A WordPress blog to share recipes and cooking tips. Easily search for the perfect dish or learn how to make it yourself. Find new recipes and discover new flavors!",
    image: "img/cookreads.jpg",
    cat: 1,
    longDesc:
      "A WordPress blog for sharing recipes and cooking tips, making it easy for users to discover new dishes.",
  },
  {
    title: "MERN Shop",
    slug: "MERN-shop",
    desc: "A MERN stack ecommerce platform to buy and sell products online. Easily search for the perfect item or create your own store. Get the best deals and never miss a sale!",
    image: "img/MERN-shop.jpg",
    cat: 2,
    longDesc:
      "A MERN stack ecommerce platform that allows users to browse products, manage carts, and complete purchases",
  },
  {
    title: "MDweb",
    slug: "MDweb",
    desc: "Video ADs: A WordPress website to easily selling video ads. Find the perfect ad quickly and securely. Get the best deals and never miss an opportunity!",
    image: "img/videos.jpg",
    cat: 1,
    longDesc:
      "A WordPress website for selling video ads and digital media services, designed with a simple and effective layout.",
  },
  {
    title: "MERN Ecom",
    slug: "MERN-Ecom",
    desc: "A MERN stack ecommerce platform to buy and sell products online. Easily search for the perfect item or create your own store. Get the best deals and never miss a sale!",
    image: "img/mern-ecommerce.jpg",
    cat: 2,
    longDesc:
      "A complete MERN stack ecommerce application for buying and selling products with fast performance and smooth UX.",
  },
  {
    title: "MD Store",
    slug: "MD-Store",
    desc: "Store for Home and Decor: A WordPress store to easily buy and sell products. Find what you need quickly and securely. Get the best deals and never miss a bargain!",
    image: "img/mdstore.jpg",
    cat: 1,
    longDesc:
      "A WordPress store for home and décor products, offering an easy shopping experience and secure checkout.",
  },
  {
    title: "ACI Adhesives",
    slug: "md-store",
    desc: "ACI :: Adhesives & Sealants :: Advanced Chemical Industries",
    image: "img/aci.jpg",
    cat: 1,
    longDesc:
      "A company website showcasing adhesive and sealant products with clear categories and product information.",
  },
  {
    title: "Alex West Egypt",
    slug: "alex-west",
    desc: "City Compound :: Villas :: Town House :: Quatro :: Hotel :: Golf",
    image: "img/alex-west.jpg",
    cat: 1,
    url: "https://alexwestegypt.com",
    longDesc:
      "A real estate website featuring villas, townhouses, and community services for the Alex West compound.",
  },
  {
    title: "United Cotton",
    slug: "United-Cotton",
    desc: "Company Portfolio Website",
    image: "img/united-cotton.jpg",
    cat: 1,
    url: "https://united-cotton.com/",
    longDesc:
      "A company portfolio website highlighting services, history, and business achievements in the cotton industry.",
  },
  {
    title: "CLT Shuttle",
    slug: "clt-shuttle",
    desc: "Airport Ground Transportation :: 24/7 USA",
    image: "img/cltshuttle.jpg",
    cat: 1,
    longDesc:
      "A company website for a US-based airport shuttle service offering 24/7 ground transportation.",
  },
  {
    title: "Landing Page",
    slug: "Landing-Page",
    desc: "Using JavaScript to enhances user experience by adding interactive elements, dynamic content, and animations to drive conversions and capture attention.",
    image: "img/landing.jpg",
    cat: 2,
    longDesc:
      "A modern JavaScript landing page with interactive UI elements designed to boost engagement and conversions.",
  },
  {
    title: "Courses List",
    slug: "courses-list",
    desc: "An application with React and Flask allows CRUD operations for a course list. Users can create, read, update, and delete course entries easily and efficiently.",
    image: "img/react-courses-list.jpg",
    cat: 2,
    longDesc:
      "A React + Flask application that supports full CRUD operations for managing a list of courses.",
  },
  {
    title: "My Reads",
    slug: "myreads",
    desc: "A React application to organize and manage your library of books. Easily search, sort, and categorize your collection. Keep track of which books you have read and which you haven't. Never lose a book again!",
    image: "img/react myreads.jpg",
    cat: 3,
    longDesc:
      "A React app to organize and track books, allowing users to sort and categorize their personal library.",
  },
  {
    title: "Fyurr app",
    slug: "fyurr",
    desc: "A Flask application to easily create, read, update, and delete music bands in your personal list. Keep track of your favorite bands and never miss a show again! ",
    image: "img/fyyur.jpg",
    cat: 3,
    longDesc:
      "A Flask application for managing music artists and venues, including creating and updating band information.",
  },
  {
    title: "Trivia API app",
    slug: "trivia-api",
    desc: "A Flask API to easily create, read, update, and delete questions in your personal list. Get answers to your questions quickly and easily! ",
    image: "img/trivia_api.jpg",
    cat: 3,
    longDesc:
      "A Flask-based API for managing trivia questions with full CRUD functionality.",
  },
  {
    title: "TODO CRUD app",
    slug: "todo-crud",
    desc: "A React and Flask application to easily create, read, update, and delete tasks in your personal to-do list. Keep track of your tasks and never miss a deadline again!",
    image: "img/todo-crud.jpg",
    cat: 2,
    longDesc:
      "A React + Flask to-do application allowing users to create, read, update, and delete daily tasks easily.",
  },
];
export default projects;
