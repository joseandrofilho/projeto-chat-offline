import { useState } from "react";
import type { Message } from "../types/message";
import MessageList from "./MessageList";

export default function Chat() {
  const [messages] = useState<Message[]>([]);

  return (
    <main className="min-h-dvh bg-stone-200">
      <section
        className="mx-auto flex h-dvh max-w-2xl flex-col"
        aria-label="Chat"
      >
        <MessageList messages={messages} />
      </section>
    </main>
  );
}
