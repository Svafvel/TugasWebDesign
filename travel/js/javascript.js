// function Tekan(){

// 	var Nama = (document.form1.Nama.value)
// 	var Alamat = (document.form1.Alamat.value)

// 	document.form2.oNama.value = Nama;
// 	document.form2.oAlamat.value = Alamat;

// }


$(document).ready(function(){

	setInterval(function(){

		let Pilihan = $('.pilih').val();
		let Harga = $('.hargaTiket').val();
		let Qty = $('.jumlahTiket').val();
		let Diskon;

		if (Pilihan == "- Pilih Tujuan -"){

			let harga = $('.hargaTiket').val(0);

		} else if (Pilihan == "Lombok"){

			let harga = $('.hargaTiket').val(3000000);

		}else if (Pilihan == "Bali"){

			let harga = $('.hargaTiket').val(4500000);

		}else if (Pilihan == "Pulau Seribu"){

			let harga = $('.hargaTiket').val(3200000);

		}else if (Pilihan == "Pulau Komodo"){

			let harga = $('.hargaTiket').val(4100000);
	

		}else if (Pilihan == "Wakatobi"){

			let harga = $('.hargaTiket').val(3600000);

		}else if (Pilihan == "Taman Laut Bunaken"){

			let harga = $('.hargaTiket').val(3999000);
		}

		$('.proses').on('click', function(){

			$('.-hargaTiket').val(Harga);
			let SubTotal = Harga*Qty;
			$('.subTotal').val(SubTotal);


			if($('.Member').prop('checked') == true ){

				$('.Diskon').val(Harga*0.1);

			}else {

				$('.Diskon').val(0);

			}

			$('.totalBayar').val(SubTotal-$('.Diskon').val());


		});

	}, 1);

})