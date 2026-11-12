const projects = [
  {
    title: "Club21 Café Digital QR Menu",
    slug: "c21",
    desc: "Bilingual QR menu for Club21 Café",
    image: "img/c21-qr.jpg",
    cat: 1,
    url: "https://club21-cafe.github.io/scan/",
    longDesc:
      "A mobile-friendly menu that guests open by scanning a QR code to browse food and drinks, view prices, and switch between Arabic and English.",
  },
  {
    title: "Lieferanto Trading",
    slug: "lieferanto",
    desc: "WordPress website for an international trading company",
    image: "img/lieferanto.jpg",
    cat: 1,
    url: "https://lieferanto.com",
    longDesc:
      "A corporate WordPress website for Lieferanto Trading that introduces the company and presents its trading, import, and export services to prospective clients.",
  },
  {
    title: "SBS Consultant Inc",
    slug: "sbs",
    desc: "Website for AI powered business automation services",
    image: "img/sbs.jpg",
    cat: 1,
    url: "https://sbs-inc.us",
    longDesc:
      "A website for SBS Consultant Inc that explains how its AI automation services help small businesses streamline routine processes and improve operational efficiency.",
  },
  {
    title: "livestores electronics",
    slug: "ls",
    desc: "WordPress store for digital gadgets and accessories",
    image: "img/Livestores.jpg",
    cat: 1,
    url: "https://livestores.co",
    longDesc:
      "A WordPress ecommerce website for Livestores Electronics that uses a clean storefront layout to help shoppers browse accessories for their digital devices.",
  },
  {
    title: "platinum properties",
    slug: "pl",
    desc: "WordPress website for a real estate agency",
    image: "img/platinum.jpg",
    url: "https://platinum-egypt.com",
    cat: 1,
    longDesc:
      "A WordPress website for Platinum Properties that presents the agency and gives prospective buyers a central place to browse its real estate listings.",
  },
  {
    title: "WWW Company",
    slug: "www",
    desc: "Corporate WordPress website showcasing the company’s services",
    image: "img/www.jpg",
    cat: 1,
    longDesc:
      "A corporate WordPress website for WWW Company that introduces the business and presents its services through a clean layout that visitors can browse easily.",
  },
  {
    title: "The pets now",
    slug: "tpn",
    desc: "WordPress blog about cats and their care",
    image: "img/tpn.jpg",
    cat: 1,
    longDesc:
      "A WordPress blog for cat owners and enthusiasts, featuring practical guides on feeding and daily care, information about cat breeds, and reviews of cat products.",
  },
  {
    title: "Cookreads blog",
    slug: "cookreads",
    desc: "WordPress blog for recipes and cooking tips",
    image: "img/cookreads.jpg",
    cat: 1,
    longDesc:
      "A WordPress food blog where readers can discover recipes, find ideas for their next meal, and learn practical cooking tips for preparing dishes at home.",
  },
  {
    title: "Simple Calculator App",
    slug: "calc",
    desc: "Responsive calculator for basic arithmetic operations",
    image: "img/calculator.jpg",
    cat: 2,
    url: "",
    longDesc:
      "A lightweight calculator that supports addition, subtraction, multiplication, and division through a simple interface that adapts to different screen sizes for everyday calculations.",
  },
  {
    title: "MERN Shop",
    slug: "MERN-shop",
    desc: "MERN storefront with cart and checkout",
    image: "img/MERN-shop.jpg",
    cat: 2,
    longDesc:
      "A MERN stack storefront where shoppers can browse products, add items to their carts, review their selections, and complete purchases through the checkout flow.",
  },
  {
    title: "MDweb",
    slug: "MDweb",
    desc: "WordPress website for video advertising services",
    image: "img/videos.jpg",
    cat: 1,
    longDesc:
      "A WordPress website that showcases video ads and digital media services, with a simple layout that helps visitors explore the available offerings.",
  },
  {
    title: "MERN Ecom",
    slug: "MERN-Ecom",
    desc: "Full stack MERN ecommerce web application",
    image: "img/mern-ecommerce.jpg",
    cat: 2,
    longDesc:
      "An ecommerce application built with the MERN stack that brings product discovery, online shopping, and selling together in a single web application.",
  },
  {
    title: "MD Store",
    slug: "MD-Store",
    desc: "WordPress store for home and décor products",
    image: "img/mdstore.jpg",
    cat: 1,
    longDesc:
      "A WordPress ecommerce website for home and décor products, where shoppers can explore the catalog, find items for their homes, and complete purchases online.",
  },
  {
    title: "ACI Adhesives",
    slug: "md-store",
    desc: "Product website for industrial adhesives and sealants",
    image: "img/aci.jpg",
    cat: 1,
    longDesc:
      "A company website for Advanced Chemical Industries that organizes adhesives and sealants into categories so visitors can browse the range and find product information.",
  },
  {
    title: "Alex West Egypt",
    slug: "alex-west",
    desc: "Joomla website for the Alex West development",
    image: "img/alex-west.jpg",
    cat: 1,
    url: "https://alexwestegypt.com",
    longDesc:
      "A Joomla real estate website that introduces the Alex West development, showcases its villas and townhouses, and highlights community amenities such as golf and hospitality.",
  },
  {
    title: "United Cotton",
    slug: "United-Cotton",
    desc: "Corporate portfolio website for a cotton company",
    image: "img/united-cotton.jpg",
    cat: 1,
    url: "https://united-cotton.com/",
    longDesc:
      "A corporate portfolio website for United Cotton that introduces the company, outlines its services, and highlights its history and achievements in the cotton industry.",
  },
  {
    title: "CLT Shuttle",
    slug: "clt-shuttle",
    desc: "Website for a 24/7 airport shuttle service",
    image: "img/cltshuttle.jpg",
    cat: 1,
    longDesc:
      "A company website for CLT Shuttle that introduces its airport shuttle service and lets travelers know that ground transportation is available around the clock.",
  },
  {
    title: "Landing Page",
    slug: "Landing-Page",
    desc: "Interactive landing page built with JavaScript",
    image: "img/landing.jpg",
    cat: 222,
    longDesc:
      "A JavaScript landing page that uses interactive elements, dynamic content, and animations to engage visitors and encourage them to take the page’s intended action.",
  },
  {
    title: "Courses List",
    slug: "courses-list",
    desc: "Course management app with React and Flask",
    image: "img/react-courses-list.jpg",
    cat: 2,
    longDesc:
      "A course management application with a React interface and a Flask backend that lets users add courses, view the list, update entries, and remove courses.",
  },
  {
    title: "My Reads",
    slug: "myreads",
    desc: "React app for tracking a personal library",
    image: "img/react-myreads.jpg",
    cat: 3,
    longDesc:
      "A React application that helps readers organize their books, search and sort their collection, group titles into categories, and keep track of their reading progress.",
  },
  {
    title: "Fyurr app",
    slug: "fyurr",
    desc: "Flask application for managing artists and venues",
    image: "img/fyyur.jpg",
    cat: 3,
    longDesc:
      "A Flask application for managing music artists and venues, with tools to browse records and add or update information about bands and performers.",
  },
  {
    title: "Trivia API app",
    slug: "trivia-api",
    desc: "Flask API for managing trivia questions",
    image: "img/trivia_api.jpg",
    cat: 3,
    longDesc:
      "A Flask API that provides endpoints for creating, retrieving, updating, and deleting trivia questions, giving client applications a way to manage their question collections.",
  },
  {
    title: "TODO CRUD app",
    slug: "todo-crud",
    desc: "Task management app built with React and Flask",
    image: "img/todo-crud.jpg",
    cat: 2,
    longDesc:
      "A to-do application built with React and Flask that lets users add daily tasks, view their task list, update task details, and delete entries.",
  },
];
export default projects;
