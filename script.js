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

function sortDatabase(sortType, reverse = false){
    switch(sortType){
        case SORT_OPTIONS.Alphabetical:
            break;
        case SORT_OPTIONS.Environmntal:
            break;
        case SORT_OPTIONS.Governance:
            break;
        case SORT_OPTIONS.Social:
            break;
        case SORT_OPTIONS.Total:
            break;
        default:
    }
}
function sortAlphabetical(){

}
