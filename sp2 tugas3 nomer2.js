
var jualMobil = {
    nama : "Tejo",
    merek : "Daihatsu",
    tahun : 2000,
    iklan : function(){
        document.write(`Bu, Nama Saya ${this.nama}, Jual Mobil ${this.merek},Tahun ${this.tahun},bekas`)
    }
}
jualMobil.iklan();
