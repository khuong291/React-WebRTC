import * as React from "react";

type Props = {
  clientId: string;
  startCall: (isCaller: boolean, friendId: string, config: any) => void;
};

const MainWindowContainer: React.SFC<Props> = props => (
  <div className="container main-window">
    <div>
      <h3>
        Hi, your ID is
        <input
          type="text"
          className="txt-clientId"
          defaultValue={props.clientId}
          readOnly
        />
      </h3>
      <h4>Get started by calling a friend below</h4>
    </div>
    <div>
      <input
        type="text"
        className="txt-clientId"
        spellCheck={false}
        placeholder="Your friend ID"
        // onChange={event => (friendId = event.target.value)}
      />
      <div>
        <button
          type="button"
          className="btn-action fa fa-video-camera"
          //   onClick={this.callWithVideo(true)}
        />
        <button
          type="button"
          className="btn-action fa fa-phone"
          //   onClick={this.callWithVideo(false)}
        />
      </div>
    </div>
  </div>
);

export default MainWindowContainer;
