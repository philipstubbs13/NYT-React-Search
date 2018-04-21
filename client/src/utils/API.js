import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "?api-key=01b8f15e77a54651bc736dfce7ffdb71";


export default {
    getArticles: function (query, begin, end) {
        return axios.get(BASEURL + APIKEY + "&q=" + query + "&begin_date=" + begin + "&end_date=" + end);
    }
};

