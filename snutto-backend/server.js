import http from 'http';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();
const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: '*',
//         methods: ['GET', 'POST']
//     }
// });


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});