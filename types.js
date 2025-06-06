export function Route(methods, uri, handler) {
    this.methods = methods;
    this.uri = uri;
    this.handler = handler;
}