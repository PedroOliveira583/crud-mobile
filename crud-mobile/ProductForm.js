import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ProductForm = ({ product, onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price.toString());
      setQuantity(product.quantity.toString());
    }
  }, [product]);

  const handleSubmit = () => {
    const parsedPrice = parseFloat(price);
    const parsedQuantity = parseInt(quantity, 10);

    if (!name.trim()) {
      alert('Nome é obrigatório');
      return;
    }

    if (isNaN(parsedPrice) || parsedPrice < 0) {
      alert('Preço inválido');
      return;
    }

    if (isNaN(parsedQuantity) || parsedQuantity < 0) {
      alert('Quantidade inválida');
      return;
    }

    onSubmit({
      name: name.trim(),
      price: parsedPrice,
      quantity: parsedQuantity
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {product ? 'Atualizar' : 'Criar'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductForm;
