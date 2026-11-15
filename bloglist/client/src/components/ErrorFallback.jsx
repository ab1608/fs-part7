import { getErrorMessage } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{getErrorMessage(error)}</p>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
};

export default ErrorFallback;
