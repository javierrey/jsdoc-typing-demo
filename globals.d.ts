declare module "node:*";

declare module "node:http" {
  export import IncomingMessage = http.IncomingMessage;
  export import ServerResponse = http.ServerResponse;
  export import Server = http.Server;
  export import createServer = http.createServer;
}

declare module "node:buffer" {
  export import Buffer = buffer.Buffer;
}

declare module "node:stream" {
  export import Readable = stream.Readable;
  export import Writable = stream.Writable;
}
