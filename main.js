import http from 'http';
import { Cheatsheet, Practice } from './practice.js';
import { PageHome } from './main_controller.js';
import { Route } from './types.js';

// JS practice
Cheatsheet();
Practice();



// Config
const routes = [
    new Route(['GET'], '/', PageHome)
]


// Server
http.createServer(function (req, res) {
    console.log(req.url);

    let file_regexp = /\.[a-zA-Z0-9]+$/;
    if (file_regexp.test(req.url)) {
        return;
    }

    for (let i = 0; i < routes.length; i++) {
        let route = routes[i];

        if (route.uri == req.url) {
            route.handler(req, res);
        }
    }
}).listen(8080);