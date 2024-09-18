//database = entire data.json file

let startTime = Date.now()
database.sort((a,b) => a.name.localeCompare(b.name));
console.log(database); //Contains 722 entries
console.log("Time elapsed: ", Date.now() - startTime);

filterOptions = {
    "currency": new Set(),
    "exchange": new Set(),
    "industry": new Set()
};
startTime = Date.now()
for (const idx in database){
    filterOptions.currency.add(database[idx].currency);
    filterOptions.exchange.add(database[idx].exchange);
    filterOptions.industry.add(database[idx].industry);
}
console.log(filterOptions)
console.log("Time elapsed: ", Date.now() - startTime);


//Filter Options:
function filterDatabase(currency = undefined, exchange = undefined, industry = undefined){
    const result = new Array();
    for (const idx in database){
        const company = database[idx];
        if (filterObject(company, currency, exchange, industry )){
            result.push(company);
        }
    }
    
    return result;
}
//Helper function for filter Database
//If the company object passes the filter, return true. Otherwise return false.
function filterObject(company, currency = undefined, exchange = undefined, industry = undefined){
    if (currency != undefined && company.currency != currency){
        return false;
    }
    if (exchange != undefined && company.exchange != exchange){
        return false;
    }
    if (industry != undefined && company.industry != industry){
        return false;
    }
    return true;
}

function sort(sortType){
    //Apply Filter first (if applicable)
    let result = filterDatabase();
    //Apply sort
    sortDatabase(result, sortType);
    console.log(result);
}

//Sort Options:
//Name Alphabetical
//Environmental Score
//Governace Score
//Social Score
//Total Score
//Reversal of all Above
const SORT_OPTIONS = {
    Alphabetical : "alpha",
    Environmntal : "env",
    Governance : "gov",
    Social : "social",
    Total : "total"
}

function sortDatabase(collection, sortType, reverse = false){
    switch(sortType){
        case SORT_OPTIONS.Alphabetical:
            sortAlphabetical(collection, reverse);
            break;
        case SORT_OPTIONS.Environmntal:
            sortEnvironmental(collection, reverse);
            break;
        case SORT_OPTIONS.Governance:
            sortGovernance(collection, reverse);
            break;
        case SORT_OPTIONS.Social:
            sortSocial(collection, reverse);
            break;
        case SORT_OPTIONS.Total:
            sortTotal(collection, reverse);
            break;
        default:
    }
}

function sortAlphabetical(collection, reverse){
    if (reverse){
        collection.sort((a,b) => b.name.localeCompare(a.name));
    }
    else{
        collection.sort((a,b) => a.name.localeCompare(b.name));
    }
}

function sortEnvironmental(collection, reverse){
    if (reverse){
        collection.sort((a,b) => b.environment_score - a.environment_score);
    }
    else{
        collection.sort((a,b) => a.environment_score - b.environment_score);
    }
}

function sortGovernance(collection, reverse){
    if (reverse){
        collection.sort((a,b) => b.governance_score - a.governance_score);
    }
    else{
        collection.sort((a,b) => a.governance_score - b.governance_score);
    }
}

function sortSocial(collection, reverse){
    if (reverse){
        collection.sort((a,b) => b.social_score - a.social_score);
    }
    else{
        collection.sort((a,b) => a.social_score - b.social_score);
    }
}

function sortTotal(collection, reverse){
    if (reverse){
        collection.sort((a,b) => b.total_score - a.total_score);
    }
    else{
        collection.sort((a,b) => a.total_score - b.total_score);
    }
}
