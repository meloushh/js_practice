import { IncomingMessage, ServerResponse } from "http";

/**
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */
export function PageHome(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write((new Date()).toISOString());
}

export function CreateHabit(req, res) {

}