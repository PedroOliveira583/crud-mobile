import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { getProducts, createProduct, updateProduct, deleteProduct } from './api';
import ProductForm from './ProductForm';
import ProductItem from './ProductItem';

export default function App() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os produtos');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (productData) => {
    try {
      await createProduct(productData);
      await loadProducts();
      setShowForm(false);
      Alert.alert('Sucesso', 'Produto criado com sucesso');
    } catch (error) {
      Alert.alert('Erro', error.response?.data?.error || 'Erro ao criar produto');
    }
  };

  const handleUpdate = async (productData) => {
    try {
      await updateProduct(editingProduct.id, productData);
      await loadProducts();
      setEditingProduct(null);
      setShowForm(false);
      Alert.alert('Sucesso', 'Produto atualizado com sucesso');
    } catch (error) {
      Alert.alert('Erro', error.response?.data?.error || 'Erro ao atualizar produto');
    }
  };

  const handleDelete = async (id) => {
    Alert.alert(
      'Confirmar exclusão',
      'Deseja realmente excluir este produto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteProduct(id);
              await loadProducts();
              Alert.alert('Sucesso', 'Produto excluído com sucesso');
            } catch (error) {
              Alert.alert('Erro', 'Erro ao excluir produto');
            }
          }
        }
      ]
    );
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleSubmit = (productData) => {
    if (editingProduct) {
      handleUpdate(productData);
    } else {
      handleCreate(productData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gerenciador de Produtos</Text>
        {!showForm && (
          <TouchableOpacity style={styles.addButton} onPress={() => setShowForm(true)}>
            <Text style={styles.addButtonText}>+ Novo Produto</Text>
          </TouchableOpacity>
        )}
      </View>

      {showForm && (
        <ProductForm
          product={editingProduct}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {loading ? 'Carregando...' : 'Nenhum produto cadastrado'}
            </Text>
          </View>
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 15,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});
