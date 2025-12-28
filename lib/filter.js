export function filterArtikel(data, keyword, wilayah) {
  return data.filter(item => {
    const cocokKeyword =
      item.judul.toLowerCase().includes(keyword.toLowerCase()) ||
      item.tag.join(" ").includes(keyword.toLowerCase());

    const cocokWilayah =
      wilayah === "" ||
      item.desa === wilayah ||
      item.kecamatan === wilayah;

    return cocokKeyword && cocokWilayah;
  });
}
