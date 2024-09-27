import Link from "next/link";

const Hero: React.FC = () => {
    return (
      <div className="hero" >
        <div className="hero__tagline" >
          <img src="/images/tealbookshelf.png" className="hero__tagline__img" />
            <h1 className="hero__tagline__text">
                Track books you're reading
                <br /> Talk about your latest chapter
                <br /> Tell the world what you think
            </h1>
            <Link href={"/"} className="hero__tagline__button">
                Get Started!
            </Link>
        </div>
        <div className="hero__features">
        <div className="hero__features__1">
          <h1 className="hero__features__1__text__title">
            Chapter based discussion
          </h1>
          <p className="hero__features__1__text__list" >
          Stay organized and engaged with your reading by tracking your progress chapter by chapter. 
          Discuss the latest developments, share your thoughts, 
          and connect with other readers who are also at the same point in the book.
          </p>
          </div>
          <img src="/images/readers.jpeg" className="hero__features__1img" />
          <div className="hero__features__2" >
          <h1 className="hero__features__2__text__title">
            Track what you are reading
          </h1>
          <p className="hero__features__2__text__list" >
            Follow and chat with other readers to keep up with their reading
          </p>
          </div>
          <img src="/images/tealbookshelf.png" className="hero__features__2img" />
          <div className="hero__features__3" >
          <h1 className="hero__features__3__text__title">
            Community Features
          </h1>
          <p className="hero__features__3__text__list" >
            Browse and make your own collections of books
          </p>
          </div>
          <img src="/images/tealbookshelf.png" className="hero__features__3img" />
          </div>
      </div>
    );
  };
  
  export default Hero;