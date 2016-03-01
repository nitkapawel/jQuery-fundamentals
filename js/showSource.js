$('body').append('<xmp class="hidden" id="pageSource">' + $('html').html() + '</xmp>');

$('<input type="button" class="btn" value="pokaż źródło strony">').insertBefore('#pageSource').each(function(i,v){
    $(v).on('click.toggleSource', function(){
       var $pageSource = $('#pageSource').toggleClass('hidden');
        if($pageSource.is(':visible')) {
            this.value = 'ukryj źródło strony';
        } else {
            this.value = 'pokaż źródło strony';
        }
    });
});