import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

type ChatInputProps = {
  onSend: (text: string) => void;
};

const MAX_TEXTAREA_HEIGHT = 160;

export default function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
    <footer className="px-4 pb-6">
      <div className="rounded-2xl border border-stone-300 bg-white p-3 shadow-sm">
        <div className="flex items-end gap-3">
          <textarea
            ref={textareaRef}
            className="min-h-8 max-h-40 min-w-0 flex-1 resize-none leading-6 text-stone-900 outline-none placeholder:text-stone-500"
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
