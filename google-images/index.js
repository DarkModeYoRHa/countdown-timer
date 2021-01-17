import {google} from 'googleapis'

const GG_API_KEY = (process.env.GG_API_KEY || "missing-key-from-env");
const GG_API_CX = (process.env.GG_API_CX || "missing-cx-from-env");

const customsearch = google.customsearch('v1');
const q ={};
const start ={};
const num ={};
customsearch.cse.list({
    auth: GG_API_KEY,
    cx: GG_API_CX,
    q, start, num
})