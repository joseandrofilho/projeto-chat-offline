import { useState } from "react";
import type { Message, Sender } from "../types/message";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [sender, setSender] = useState<Sender>("user");

  function handleSend(text: string) {
    if (text.trim() === "") {
      return;
    }

    const message: Message = {
      id: crypto.randomUUID(),
      text,
      sender,
    };

    setMessages((currentMessages) => [...currentMessages, message]);
  }

  function handleToggleSender() {
    setSender((currentSender) => (currentSender === "user" ? "robot" : "user"));
  }

  return (
    <main className="min-h-dvh bg-stone-200">
      <section
        className="mx-auto flex h-dvh max-w-2xl flex-col"
        aria-label="Chat"
      >
        <MessageList messages={messages} />
        <ChatInput
          sender={sender}
          onSend={handleSend}
          onToggleSender={handleToggleSender}
        />
      </section>
    </main>
  );
}
