import { de } from '../language/de.js';
import { nl } from '../language/nl.js';
import { en } from '../language/en.js';

let language = localStorage.getItem("client_language");
if(!language) language = "en"
alert(language)


// update later xD