const ErrorMessage = ({ games }) => {
  return <>{games.length === 0 && <h3>I want to play something...</h3>}</>;
};

export default ErrorMessage;
