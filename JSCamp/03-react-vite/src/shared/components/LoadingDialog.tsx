import { useEffect, useRef } from "react";
import styles from "../css/loading-dialog.module.css";

interface LoadingDialogProps {
  open: boolean;
  title?: string;
  message?: string;
}

export function LoadingDialog({ open, title, message }: LoadingDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <h2>{title || "Cargando..."}</h2>
      <p>{message || "Cargando..."}</p>
      <progress></progress>
    </dialog>
  );
}
