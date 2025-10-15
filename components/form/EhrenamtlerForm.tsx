"use client";

import { FormEventHandler, useState } from "react";
import { GrCheckmark, GrSend } from "react-icons/gr";
import Button from "#/components/button/Button";
import { TextField } from "@mui/material";

export function EhrenamtlerForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const sendEmail: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (sent) return;

    const form = event.currentTarget;
    fetch("/api/suggest-volunteer-of-the-year", { method: "POST", body: new FormData(form) })
      .then((value) => {
        if (value.ok) {
          setError(undefined);
          setSent(true);
          form.reset();
        } else {
          value.json().then((value) => setError(value.error));
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <form className="sm:self-center flex flex-col gap-4 sm:w-80" onSubmit={sendEmail}>
      <TextField type="text" name="suggester-name" placeholder="Dein Name" size="small" />
      <TextField type="email" name="suggester-email" placeholder="Deine E-Mail" size="small" />
      <TextField type="text" name="volunteer-name" placeholder="Dein Vorschlag (voller Name)" size="small" />
      <TextField type="text" name="volunteer-why" placeholder="Warum?" size="small" />
      <Button type="submit" disabled={sent} text="Abschicken">
        {sent ? <GrCheckmark /> : <GrSend />}
      </Button>
      {error && <span>{error}</span>}
    </form>
  );
}
