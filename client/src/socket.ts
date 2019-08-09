import * as io from "socket.io-client";
let socket = io(`localhost:5000`);
if (process.env.PORT) {
  socket = io("");
}
export default socket;
