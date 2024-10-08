import Image from "next/image";
import {
  FormEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import sendMessage from "@/assets/icons/conversation/sendMessage.svg";
import plus from "@/assets/icons/conversation/plus.svg";
import emoji from "@/assets/icons/conversation/emoji.svg";

const SendMessageForm = () => {
  const [message, setMessage] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const maxRows = 8;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        console.log("Mensaje enviado:", message);
        setMessage("");
      }
    }
  };

  const handleForm = () => {
    textareaRef.current?.focus();
  };

  const handleAttachFileButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";

      const scrollHeight = textareaRef.current.scrollHeight;
      const lineHeight = parseInt(
        window.getComputedStyle(textareaRef.current).lineHeight || "18",
      );
      const maxHeight = lineHeight * maxRows;

      if (scrollHeight <= maxHeight) {
        textareaRef.current.style.height = `${scrollHeight}px`;
      } else {
        textareaRef.current.style.height = `${maxHeight}px`;
      }
    }
  }, [message]);

  return (
    <form
      className="chat-input-container"
      onSubmit={(e) => handleOnSubmit(e)}
      onClick={handleForm}
    >
      <button
        type="button"
        className="attach-file-btn"
        onClick={(e) => handleAttachFileButton(e)}
      >
        <Image src={plus} alt="send message icon" />
      </button>

      <textarea
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Your message"
        className="chat-input"
        ref={textareaRef}
      />

      <button
        type="button"
        className="emoji-btn"
        onClick={(e) => handleAttachFileButton(e)}
      >
        <Image src={emoji} alt="send message icon" />
      </button>

      <button type="submit" onClick={(e) => e.stopPropagation()}>
        Send
        <Image src={sendMessage} alt="send message icon" />
      </button>
    </form>
  );
};

export default SendMessageForm;
