// event pada saat link di klik
$('.page-scroll').on('click', function(e){
	
	// ambil isi href
	var tujuan = $(this).attr('href');
	
	// tangkep elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: $(tujuan).offset().top - 60
	}, 1250, 'swing')
	
	e.preventDefault();
});