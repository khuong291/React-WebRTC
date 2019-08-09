import * as io from "socket.io-client";
const socket = io("localhost:5000"); // Use for development
// const socket = io(""); // Use for build
export default socket;
