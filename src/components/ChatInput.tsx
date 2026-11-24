import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { Sender } from "../types/message";
import SenderToggle from "./SenderToggle";

type ChatInputProps = {
  sender: Sender;
  onSend: (text: string) => void;
  onToggleSender: () => void;
};

const MAX_TEXTAREA_HEIGHT = 160;

export default function ChatInput({
  sender,
  onSend,
  onToggleSender,
}: ChatInputProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isUser = sender === "user";

  function resizeTextarea() {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";
    const height = Math.min(textarea.scrollHeight, MAX_TEXTAREA_HEIGHT);
    textarea.style.height = `${height}px`;
    textarea.style.overflowY =
      textarea.scrollHeight > MAX_TEXTAREA_HEIGHT ? "auto" : "hidden";
  }

  function sendMessage() {
    if (text.trim() === "") {
      return;
    }

    onSend(text);
    setText("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "32px";
      textareaRef.current.style.overflowY = "hidden";
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && event.shiftKey) {
      return;
    }

    if (event.key === "Enter" && !event.nativeEvent.isComposing) {
      event.preventDefault();
      sendMessage();
    }
  }

  function handleChange(value: string) {
    setText(value);
    requestAnimationFrame(resizeTextarea);
  }

  return (
    <footer className="px-3 pb-4 sm:px-4 sm:pb-6">
      <div
        className={`rounded-2xl border-2 bg-white p-3 shadow-sm transition-[border-color,box-shadow] duration-200 ${
          isUser
            ? "border-stone-300"
            : "border-purple-500 shadow-purple-100"
        }`}
      >
        <div className="flex items-end gap-3">
          <SenderToggle sender={sender} onToggle={onToggleSender} />
          <textarea
            ref={textareaRef}
            className="min-h-9 max-h-40 min-w-0 flex-1 resize-none leading-6 text-stone-900 outline-none placeholder:text-stone-500"
            value={text}
            onChange={(event) => handleChange(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite uma mensagem..."
            aria-label="Mensagem"
            rows={1}
          />
          <button
            className="rounded-md bg-stone-800 px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            onClick={sendMessage}
            disabled={text.trim() === ""}
          >
            Enviar
          </button>
        </div>
      </div>
    </footer>
  );
}
