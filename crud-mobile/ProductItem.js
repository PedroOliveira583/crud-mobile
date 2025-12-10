import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.details}>
          Preço: R$ {product.price.toFixed(2)} | Qtd: {product.quantity}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.editButton} onPress={() => onEdit(product)}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(product.id)}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  info: {
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ProductItem;
