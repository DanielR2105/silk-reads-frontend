import { useState } from "react";

const Searchbar: React.FC = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleExpandToggle = () => {
        setIsExpanded(!isExpanded);
    }

    const handleExpand = () => {
        setIsExpanded(true);
    }

    const handleClose = () => {
        setIsExpanded(false);
    }

    const handleSearch = () => {
        alert(`Searching for "${searchQuery}"`);
        setSearchQuery("");
    }

    const handleClear = () => {
        setSearchQuery("");
        setIsExpanded(false);
    }

    return (
    <div className={`searchbarContainer${isExpanded ? "__expanded" : ""}`} onMouseEnter={handleExpand} onMouseLeave={handleClose}>
        <div className="searchbar"> 

        {isExpanded && (
            // TODO: Fix issue where input and clear are being rendered under the search bar
            <div className="searchbar__inputContainer" >
                         <button className="searchbar__clear" onClick={handleClear}>
              x
         </button>
                    <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Silk Reads"
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