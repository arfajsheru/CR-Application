import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const AiScreen = () => {
  const [query, setQuery] = useState(""); // 🛠 User input store karega
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const API_KEY = "YOUR_API_KEY"; // ⚠️ Yaha apna API key daal

  const fetchRecipe = async () => {
    if (!query) return; // Agar input khali hai to return kar de

    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.chefgpt.com/api/generate/recipe-from-ingredients",
        {
          ingredients: [query], // 🛠 Yaha user ka input jayega
          mealType: "dinner",
          kitchenTools: ["stove", "pot"],
          preparationTime: 40,
          servings: 3,
          difficulty: "intermediate"
        },
        {
          headers: {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
          }
        }
      );

      setRecipe(response.data); // 🛠 Recipe ko state me store karenge
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* 🛠 Input field jisme user dish ka naam dalega */}
      <TextInput
        style={styles.input}
        placeholder="Konsi recipe chahiye? (e.g., Biryani)"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Get Recipe" onPress={fetchRecipe} />

      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : recipe ? (
        <View>
          <Text style={styles.title}>{recipe.recipeName}</Text>

          <Text style={styles.subTitle}>Ingredients:</Text>
          {recipe.ingredients.map((item, index) => (
            <Text key={index} style={styles.text}>
              {item.amount} {item.unit} {item.name}
            </Text>
          ))}

          <Text style={styles.subTitle}>Instructions:</Text>
          {recipe.instructions.map((step, index) => (
            <Text key={index} style={styles.text}>{step}</Text>
          ))}
        </View>
      ) : (
        <Text style={styles.error}>Recipe not found!</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  loading: { fontSize: 18, textAlign: "center", marginTop: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subTitle: { fontSize: 18, fontWeight: "600", marginTop: 10 },
  text: { fontSize: 16, marginBottom: 5 },
  error: { fontSize: 18, color: "red", textAlign: "center", marginTop: 20 },
});

export default AiScreen;
