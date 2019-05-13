// function Tekan(){

// 	var Nama = (document.form1.Nama.value)
// 	var Alamat = (document.form1.Alamat.value)

// 	document.form2.oNama.value = Nama;
// 	document.form2.oAlamat.value = Alamat;

// }



$(document).ready(function(){


	setInterval(function(){


		let Pilihan = $('.pilih').val();
		let Harga = $('.Harga').val();
		let Qty = $('.Qty').val();

		if (Pilihan == "1"){

			let harga = $('.Harga').val(0);

		} else if (Pilihan == "Acer"){

			let harga = $('.Harga').val(3000000);

		}else if (Pilihan == "Asus"){

			let harga = $('.Harga').val(4500000);

		}else if (Pilihan == "Lenovo"){

			let harga = $('.Harga').val(3200000);

		}else if (Pilihan == "LG"){

			let harga = $('.Harga').val(4100000);
	

		}else if (Pilihan == "Toshiba"){

			let harga = $('.Harga').val(3600000);

		}else if (Pilihan == "Panasonic"){

			let harga = $('.Harga').val(3999000);
		}

		$('.proses').on('click', function(){

			$('.olaptop').val(Pilihan);
			$('.oharga').val(Harga);
			$('.oqty').val(Qty);
			$('.ototalbayar').val(Harga*Qty);



		});

	},1);

})
