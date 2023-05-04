import { Server as HttpServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';

let io: IOServer | undefined;

export function initSocket(server: HttpServer): void {
    if (!io) {
        io = new IOServer(server, {
            path: '/api/socket',
        });
    }
}

export function getSocket(): IOServer | undefined {
    return io;
}
