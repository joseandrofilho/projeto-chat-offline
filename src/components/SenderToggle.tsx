import type { Sender } from "../types/message";

type SenderToggleProps = {
  sender: Sender;
  onToggle: () => void;
};

export default function SenderToggle({
  sender,
  onToggle,
}: SenderToggleProps) {
  const isUser = sender === "user";

  return (
    <button
      className={`flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-md border px-2 text-sm font-medium transition-colors ${
        isUser
          ? "border-stone-300 text-stone-700"
          : "border-purple-500 text-purple-500"
      }`}
      type="button"
      onClick={onToggle}
      aria-label={`Remetente atual: ${isUser ? "Usuário" : "Robô"}`}
      aria-pressed={!isUser}
    >
      {isUser ? (
        <>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
          </svg>
          <span>Usuário</span>
        </>
      ) : (
        <>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M12 3v4M8 12h.01M16 12h.01M8 16h8" />
          </svg>
          <span>Robô</span>
        </>
      )}
    </button>
  );
}
