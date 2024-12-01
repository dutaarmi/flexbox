import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        {/* Baris pertama dengan kotak berwarna */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <View style={{ backgroundColor: '#ee5253', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#1dd1a1', width: 50, height: 50 }} />
          <View style={{ backgroundColor: '#5f27cd', width: 50, height: 50 }} />
        </View>

        {/* Baris kedua dengan teks */}
        <View style={[styles.textRow]}>
          <Text style={styles.textItem}>Beranda</Text>
          <Text style={styles.textItem}>Video</Text>
          <Text style={styles.textItem}>Playlist</Text>
          <Text style={styles.textItem}>Komunitas</Text>
          <Text style={styles.textItem}>Channel</Text>
          <Text style={styles.textItem}>Tentang</Text>
        </View>

        {/* Gambar dengan informasi */}
        <Image
          source={require('../../assets/images/anime.jpg')} // Sesuaikan path
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>Hinata</Text>
          <Text style={styles.animerText}>Animer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Membuat teks renggang secara horizontal
    marginTop: 20,
  },
  textItem: {
    fontSize: 16,
    marginHorizontal: 10, // Tambahkan margin horizontal
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 100,
    marginTop: 50,
    alignSelf: 'left',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
  },
  animerText: {
    fontSize: 30, // Ukuran teks lebih besar
    fontWeight: 'bold', // Teks tebal
    textAlign: 'left',
    marginTop: 5,
    color: 'blue', // Opsional: Warna teks
  },
});

export default MateriFlexBox;
