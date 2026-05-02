import { LoadingDialog } from "@/shared/components/LoadingDialog";
import "./css/contact.module.css";
import { useSendMessage } from "./hooks/useSendMessage";

export function ContactPage() {
  const { loading, sendMessage } = useSendMessage();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as `${string}@${string}.${string}`;
    const message = formData.get("message") as string;

    // const message = formData.get("message");
    sendMessage({ name, email, message });
  }

  return (
    <>
      <LoadingDialog
        open={loading}
        title="Enviando mensaje"
        message="Se está enviando el mensaje, por favor espere..."
      />
      <main>
        <h2>Contacto</h2>
        <fieldset>
          <legend>Contactanos</legend>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nombre:</span>
              <input name="name" type="text" id="name" />
            </label>
            <label>
              <span>Email:</span>
              <input name="email" type="email" id="email" />
            </label>
            <label>
              <span>Mensaje:</span>
              <textarea name="message" id="message"></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </fieldset>
      </main>
    </>
  );
}
