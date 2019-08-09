import * as React from "react";
import MainWindowContainer from "./containers/MainWindow";
import socket from "./socket";

const App: React.SFC<{}> = props => {
  const [clientId, setClientId] = React.useState("");

  React.useEffect(() => {
    socket.on("init", (data: any) => setClientId(data.id)).emit("init");
  }, []);

  const startCall = (isCaller: boolean, friendId: string, config: any) => {
    socket.on("init", (data: any) => {
      console.log(data);
      setClientId(data.id);
    });
  };

  return (
    <div>
      <MainWindowContainer clientId={clientId} startCall={startCall} />
    </div>
  );
};

export default App;
