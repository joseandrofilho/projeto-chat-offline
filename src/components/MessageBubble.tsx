import type { Message } from "../types/message";

type MessageBubbleProps = {
  message: Message;
};

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg px-3 py-2 text-stone-900 shadow-sm whitespace-pre-wrap break-words ${
          isUser ? "bg-gray-200" : "bg-white"
        }`}
        style={{ overflowWrap: "anywhere", whiteSpace: "pre-wrap" }}
      >
        {message.text}
      </div>
    </div>
  );
}
