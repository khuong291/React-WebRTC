import * as io from "socket.io-client";

const socket = io(`localhost:${process.env.PORT || 5000}`);
export default socket;
