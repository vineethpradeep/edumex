import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thanks! Our team will get back to you shortly." },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        id="edumex-chat-button"
        className="btn btn-primary rounded-circle shadow"
        onClick={() => setOpen(!open)}
      >
        <MessageCircle size={26} />
      </button>

      {/* Chat Popup */}
      {open && (
        <div id="edumex-chat-box" className="card shadow-lg">
          {/* Header */}
          <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <strong>Edumex Support</strong>
            <button
              className="btn btn-sm btn-light"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="card-body p-2 overflow-auto"
            style={{ maxHeight: "300px" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 mb-2 rounded ${
                  msg.from === "bot"
                    ? "bg-light text-dark"
                    : "bg-primary text-white ms-auto"
                }`}
                style={{ maxWidth: "75%" }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="card-footer d-flex gap-2 p-2">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        #edumex-chat-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
          cursor: pointer;
        }

        #edumex-chat-box {
          position: fixed;
          bottom: 90px;
          right: 85px;
          width: 320px;
          max-width: 90%;
          border-radius: 1rem;
          animation: fadeUp 0.3s ease-out;
          z-index: 1050;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
