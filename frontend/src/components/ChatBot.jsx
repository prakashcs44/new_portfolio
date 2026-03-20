import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar
} from "@chatscope/chat-ui-kit-react";

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      message: "Hi! Ask me anything about Prakash 👋",
      sender: "bot"
    }
  ]);

  const [loading, setLoading] = useState(false); // ✅ NEW

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { message: text, sender: "user" }]);

    setLoading(true); // ✅ start loading

    try {
      const res = await fetch("https://new-portfolio-backend-3-q6ib.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });

      const data = await res.json();

      // Add bot response
      setMessages(prev => [
        ...prev,
        { message: data.reply, sender: "bot" }
      ]);
    } catch (err) {
      console.error(err);
    }

    setLoading(false); // ✅ stop loading
  };

  return (
    <div className="w-full h-full flex flex-col bg-transparent">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 font-semibold">
        Ask Me Anything
      </div>

      {/* Chat */}
      <MainContainer className="flex-1">
        <ChatContainer>
          <MessageList>
            {messages.map((m, i) => (
              <Message
                key={i}
                model={{
                  message: m.message,
                  sender: m.sender,
                  direction: m.sender === "user" ? "outgoing" : "incoming"
                }}
              >
                {m.sender === "bot" && (
                  <Avatar src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" />
                )}
              </Message>
            ))}

            {/* ✅ Loading indicator as message */}
            {loading && (
              <Message
                model={{
                  message: "Thinking...",
                  sender: "bot",
                  direction: "incoming"
                }}
              >
                <Avatar src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" />
              </Message>
            )}
          </MessageList>

          <MessageInput
            placeholder="Type your message..."
            onSend={sendMessage}
            disabled={loading} // ✅ prevent spam clicks
            attachButton={false}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}