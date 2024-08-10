import React from 'react';
import { useRouteError } from 'react-router-dom';
import ErrorIcon from '../../assets/icons/svg/errorIcon';
import styles from "./errorBoundary.module.css";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorBoundaryContainer}>
      <ErrorIcon />
      <p>An unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;