import { View, TextInput, Button, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";

const DEEPSEEK_API_KEY ="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";

const AiScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat:free",
          messages: [{ role: "user", content: input }],
        }),
      });

      const data = await response.json();

      console.log("API Response:", data);

      if (!response.ok || !data.choices || data.choices.length === 0) {
        throw new Error(data.error?.message || "API response invalid.");
      }

      const botMessage = { type: "bot", text: data.choices[0].message.content };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Fetch Error:", error);
      setMessages((prev) => [...prev, { type: "bot", text: `⚠️ Error: ${error.message}` }]);
    }

    setInput("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={[styles.message, item.type === "user" ? styles.user : styles.bot]}>
            {item.text}
          </Text>
        )}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Kuch likho..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

export default AiScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f4f4f4" },
  message: { padding: 12, marginVertical: 5, borderRadius: 10, fontSize: 16, maxWidth: "80%" },
  user: { alignSelf: "flex-end", backgroundColor: "#0084ff", color: "#fff" },
  bot: { alignSelf: "flex-start", backgroundColor: "#ddd", color: "#000" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
});
