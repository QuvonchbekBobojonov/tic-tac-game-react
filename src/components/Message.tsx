
interface MessageProps {
  msg: string;
}

function Message({ msg}: MessageProps): JSX.Element {
  return <div className="text-5xl mt-12 mb-5 font-mono">{msg}</div>;
}

export default Message;
