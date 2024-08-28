// pages/about.tsx
const AboutPage: React.FC = () => {
    return (
      <div className="about" >
        <div className="about__header" >
        <h1 className="about__header__title" >Welcome to SilkReads!</h1>
        <p className="about__header__description" >We're here to help bookworms like you explore the world of literature and connect with like-minded readers. 
           We help you focus on the stories that matter most throughout your reading life:
           from the classic novels you love to your favorite authors, and even hidden gems waiting to be discovered.</p>
           </div>
           <div className="about__section1" >
           <h1 className="about__section1__title" >Chart your own literary course. Discover, discuss, and delve in.</h1>
        <p className="about__section1__description" >Today, Silk Reads serves as your trusted companion on your reading adventure,
           helping you connect with fellow bookworms, collaborate on literary discussions,
           and discover new worlds within the pages. Our features, designed to enhance your reading experience, include:</p>
        <ul className="about__section1__list" >
          <li className="about__section1__list__item" >Readers: Find your tribe! Explore discussions, share reviews, and connect with those who share your passion for books.</li>
          <li className="about__section1__list__item" >Books: Dive deeper with curated lists, personalized recommendations, and insightful reviews. Discover hidden gems and revisit old favorites.</li>
          <li className="about__section1__list__item" >Everyone: Silk Reads caters to readers of all levels and interests. Whether you're a seasoned bibliophile or just starting your literary journey,
             there's something for everyone.</li>
        </ul>
        </div>
        <h1 className="about__section2__title" >From a fellow bookworm</h1>
        <p  className="about__section2__description" >From a young age, I've been swept away by epic fantasy sagas like Steven Erikson's Malazan Book of the Fallen series,
          which throws you headfirst into a sprawling world of magic and intrigue.
          Horror has also played a pivotal role in shaping my reading experiences. Stephen King's Salem's Lot remains a chilling favorite, 
          perfectly capturing the small-town dread that keeps you up at night.
          But my bookshelf isn't all about epic battles and monsters. Robin Hobb's Realm of the Farseer series offers a more introspective journey,
          delving into the complexities of human relationships and the enduring strength of the human spirit. 
          These diverse reads showcase the power of literature to transport us, challenge us, and leave a lasting impression.</p>
          <h1 className="about__section3__title" >The Dream Behind Silk Reads</h1>
          <p className="about__section3__description" >Silk Reads was born from a desire to create a platform that fosters a vibrant community of readers like myself. 
            Having experienced the joy of discovery through book recommendations and discussions, I wanted to build a space where readers can connect,
            share their love of literature, and embark on new literary adventures together. Silk Reads is my way of giving back to the reading community 
            and making the world of books even more engaging and accessible.</p>
      </div>
    );
  };
  
  export default AboutPage;
  