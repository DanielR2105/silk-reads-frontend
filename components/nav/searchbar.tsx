import { useState } from "react";
import { useRouter } from "next/router";

const Searchbar: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleExpandToggle = () => {
        setIsExpanded(!isExpanded);
    }

    const handleExpand = () => {
        setIsExpanded(true);
    }

    const handleClose = () => {
        setIsExpanded(false);
    }

    const handleSearch = async () => {
        if (searchQuery.length === 0) {
            alert('Please enter a search term.');
            return;
          }
            router.push(`/results/${searchQuery}`);
    }

    const handleClear = () => {
        setSearchQuery("");
        setIsExpanded(false);
    }

    return (
    <div className={`searchbarContainer${isExpanded ? "__expanded" : ""}`} onMouseEnter={handleExpand} onMouseLeave={handleClose}>
        <div className="searchbar"> 

        {isExpanded && (
            <div className="searchbar__inputContainer" >
                    <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder=""
                    className="searchbar__input"
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />

         </div>
      )}
              <button className="searchbar__searchButton" onClick={isExpanded ? handleSearch : handleExpandToggle}
              >
             🔍
        </button>
      </div>
        </div>
    );
}

export default Searchbar;