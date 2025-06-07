import http from 'http';
import { Cheatsheet, Practice } from './practice.js';
import * as main_controller from './main_controller.js';
import { Route } from './types.js';
import fs, { readFileSync } from 'fs'

// JS practice
Cheatsheet();
Practice();



// Config
const routes = [
    new Route(['GET'], '/', main_controller.PageHome),
    new Route(['POST', '/habits', main_controller.CreateHabit])
]


// Server
function Response404(res) {
    let err_page = fs.readFileSync('fe/404.html', 'utf-8');
    res.write(err_page);
}

http.createServer(function (req, res) {
    console.log(req.url);

    let file_regexp = /\.[a-zA-Z0-9]+$/;
    if (file_regexp.test(req.url)) 
    {
        let path = 'fe/' + req.url;

        if (fs.existsSync(path)) {
            let file = readFileSync(path, 'utf-8');
            res.end(file);
            return;
        }
    }
    else
    {
        for (let i = 0; i < routes.length; i++) {
            let route = routes[i];

            if (req.url === route.uri
                && route.methods.includes(req.method)
            ) {
                route.handler(req, res);
                res.end();
                return;
            }
        }
    }

    Response404(res);
    res.end();
}).listen(8080);