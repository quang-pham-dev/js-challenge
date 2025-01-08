import { ChatService } from "./chat-service";

async function main() {
  const chat = new ChatService();

  try {
    // Test user joining
    await chat.userJoin("user1", "Alice");

    // Test sending messages
    await chat.sendMessage("Hello, world!", "user1");
    await chat.sendMessage("How is everyone?", "user1");

    // Test user leaving
    await chat.userLeave("user1");

    // Test rate limiting
    for (let i = 0; i < 5; i++) {
      await chat.sendMessage(`Message ${i}`, "user1");
    }

    // Test validation (should fail)
    await chat.sendMessage("", "user1");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
