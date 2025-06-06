import { IncomingMessage, ServerResponse } from "http";

/**
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */
export function PageHome(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end((new Date()).toISOString());
}