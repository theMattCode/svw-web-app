"use client";

import { Alert, AlertTitle } from "@mui/material";

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="container">
      <Alert severity="error">
        <AlertTitle>Es ist ein Fehler aufgetreten</AlertTitle>
        {error.message}
      </Alert>
    </div>
  );
}
