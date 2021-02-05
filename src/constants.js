/**
 * Request labels
 */
const LABELS = {
    QUERY: 'QUERY',
    INITIAL: 'INITIAL',
    DETAIL: 'DETAIL',
    SEARCH: 'SEARCH',
    ZPIDS: 'ZPIDS',
};

/**
 * Type of items to search
 */
const TYPES = {
    rent: 'rent',
    all: 'all',
    fsbo: 'fsbo',
    sale: 'sale',
    sold: 'sold',
};

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36';

module.exports = {
    LABELS,
    USER_AGENT,
    TYPES,
};
