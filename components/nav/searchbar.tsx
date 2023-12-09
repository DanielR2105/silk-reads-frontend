import { useState } from "react";

const Searchbar: React.FC = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleExpandToggle = () => {
        setIsExpanded(!isExpanded);
    }

    const handleSearch = () => {
        console.log(`Searching for ${searchQuery}`);
    }

    const handleClear = () => {
        setSearchQuery("");
        setIsExpanded(false);
    }

    return (
    <div className={`searchbarContainer${isExpanded ? "__expanded" : ""}`}>
        <div className="searchbar"> 
        <button className="searchbar__searchButton" onClick={isExpanded ? handleSearch : handleExpandToggle}>
             🔍
        </button>
        {isExpanded && (
            // TODO: Fix issue where input and clear are being rendered under the search bar
            <div>
                    <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Silk Reads"
                    className="searchbar__input"
                />
         <button className="searchbar__clear" onClick={handleClear}>
              ❌
         </button>
         </div>
      )}
      </div>
        </div>
    );
}

export default Searchbar;