import { useState } from "react";

interface SendMessageProps {
  name: string;
  email: `${string}@${string}.${string}`;
  message: string;
}
export function useSendMessage() {
  const [loading, setLoading] = useState(false);

  function sendMessage({ name, email, message }: SendMessageProps) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Enviando mensaje a ${email} de parte de ${name}
        El mensaje es: ${message}`);
    }, 1000);
  }

  return {
    loading,
    sendMessage,
  };
}
