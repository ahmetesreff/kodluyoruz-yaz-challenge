const kirmiziSayisi = 5;
const yesilSayisi = 4;
const maviSayisi = 3;

// Toplam top sayısı
const toplamTopSayisi = kirmiziSayisi + yesilSayisi + maviSayisi;

// İki topun aynı renk olma durumlarını hesapla
const ayniRenkOlasiligi = (kirmiziSayisi/toplamTopSayisi) * ((kirmiziSayisi-1)/(toplamTopSayisi-1)) +
                         (yesilSayisi/toplamTopSayisi) * ((yesilSayisi-1)/(toplamTopSayisi-1)) +
                         (maviSayisi/toplamTopSayisi) * ((maviSayisi-1)/(toplamTopSayisi-1));

console.log("İki topun aynı renk olma olasılığı:", ayniRenkOlasiligi);