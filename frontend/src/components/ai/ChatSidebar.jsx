function ChatSidebar({
  chats,
  currentChat,
  onSelect,
  onNewChat,
}) {
  return (
    <aside className="w-72 rounded-2xl border border-slate-800 bg-slate-900 p-5">

      <button
        onClick={onNewChat}
        className="mb-6 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        + New Chat
      </button>

      <div className="space-y-3">

        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelect(chat.id)}
            className={`w-full rounded-xl p-3 text-left transition ${
              currentChat === chat.id
                ? "bg-indigo-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {chat.title}
          </button>
        ))}

      </div>

    </aside>
  );
}

export default ChatSidebar;