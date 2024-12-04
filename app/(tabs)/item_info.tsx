import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ItemInfoScreen() {
  return (
    <ScrollView 
    contentContainerStyle={styles.container}>
      {/* Header Section */}
      <ThemedView style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: '' }}
          style={styles.logo}
        />
      </ThemedView>

      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0511/user/8c4b7b7a0b756f085cae731f91e9c53b9c86b667c1f4cd2ee5c60328439ab877/i-img1200x900-17325513840161pvrgfz270639.jpg' }}
          style={styles.productImage}
        />
      </View>

      {/* Product Details */}
      <ThemedView style={styles.detailsContainer}>
        <ThemedText style={styles.productTitle}>
          1/64 Nismo R34 GT-R Z-tune Green Metallic
        </ThemedText>
        <ThemedText style={styles.price}>1,210円 (税込)</ThemedText>
        <ThemedText style={styles.shippingInfo}>送料 東京都は910円 (税込)</ThemedText>
        <ThemedText style={styles.auctionInfo}>
          残り1日 11/28(木) 20:52終了予定
        </ThemedText>
        <ThemedText style={styles.condition}>目立った傷や汚れなし</ThemedText>
      </ThemedView>

      {/* Bid Button */}
      <TouchableOpacity style={styles.bidButton}>
        <Text style={styles.bidButtonText}>入札する</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  backText: {
    fontSize: 18,
    color: '#000',
  },
  logo: {
    height: 30,
    width: 100,
    marginLeft: 8,
    resizeMode: 'contain',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
  detailsContainer: {
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000',
    marginBottom: 4,
  },
  shippingInfo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  auctionInfo: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  condition: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  bidButton: {
    backgroundColor: '#FF0000',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  bidButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});