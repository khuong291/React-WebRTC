import * as io from "socket.io-client";

const socket = io(JSON.stringify(`localhost:5000`));
export default socket;
