const volume = (...rest) => {
  let [panjang,lebar,tinggi] = rest
  let volume1 = panjang*lebar*tinggi
  return volume1
}
console.log(volume(5,6,7,8));