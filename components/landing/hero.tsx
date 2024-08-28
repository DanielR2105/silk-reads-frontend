import Link from "next/link";

const Hero: React.FC = () => {
    return (
      <div className="hero" >
        <div className="hero__tagline" >
          <img src="/images/tealbookshelf.png" className="hero__tagline__img" />
            <img src="/images/wordsonlylogo.png" className="hero__tagline__logo" />
            <h1 className="hero__tagline__text">
                The social media for readers
            </h1>
            <Link href={"/"} className="hero__tagline__button">
                Get Started
            </Link>
        </div>
        <div className="hero__features1">
          <h1 className="hero__features1__title">
            Your own personal library
          </h1>
          <p className="hero__features1__list" >
            Track what you've read, are reading, or want to read
          </p>
          <p className="hero__features1__list" >
            Keep a journal of your thoughts on each book 
          </p>
          <p className="hero__features1__list" >
            Organize your library with tags, genres, and custom collections
          </p>
          </div>
          <div className="hero__features2" >
          <h1 className="hero__features2__title">
            Connect with fellow readers
          </h1>
          <p className="hero__features2__list" >
            Follow and chat with other readers to keep up with their reading
          </p>
          <p className="hero__features2__list" >
            Post reviews and ratings
          </p>
          <p className="hero__features2__list" >
            Participate in book-related discussion forums
          </p>
          </div>
          <div className="hero__features3" >
          <h1 className="hero__features3__title">
            Start your next reading journey
          </h1>
          <p className="hero__features3__list" >
            Browse and make your own collections of books
          </p>
          <p className="hero__features3__list" >
            Search for books  
          </p>
          <p className="hero__features3__list" >
            Get personalized reccomendations
          </p>
          </div>
      </div>
    );
  };
  
  export default Hero;