"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending}>
      SubmitBtn
    </button>
  );
}

export default SubmitBtn;
