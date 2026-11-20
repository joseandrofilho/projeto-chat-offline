import { useEffect, useRef } from "react";
import type { Message } from "../types/message";
import MessageBubble from "./MessageBubble";

type MessageListProps = {
  messages: Message[];
};

export default function MessageList({ messages }: MessageListProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section
      className="flex-1 overflow-y-auto px-4 py-4"
      aria-label="Historico de mensagens"
    >
      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center text-center text-stone-600">
          Nenhuma mensagem ainda. Envie a primeira!
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={endRef} />
        </div>
      )}
    </section>
  );
}
