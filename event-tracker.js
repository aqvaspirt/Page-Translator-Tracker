<script>
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

if (window.location.href.indexOf('translate.googleusercontent.com') > -1 ) {
  window.dataLayer.push({
    'event' : 'pageTranslated',
    'translationLanguage' : getUrlParameter('tl'),
    'translationService' : 'google translate website'
  });
}

(function() {

if (window.MutationObserver) {
  var mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function (mutation) {
      var oldElementClass = mutation.oldValue;
      var currentElementClass = mutation.target.className;
      if (oldElementClass.indexOf('translated-') === -1 && currentElementClass.indexOf('translated-') > -1) {
        window.dataLayer.push({
          'event' : 'pageTranslated',
          'translationLanguage' : mutation.target.lang || document.getElementsByTagName('html')[0].getAttribute('xml:lang'),
          'translationService' : 'on-page google translate'
        });
      }
  })
})

  var htmlNode = document.querySelector('html');
  mutationObserver.observe(htmlNode, {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['class']
  })

}

if (window.location.href.indexOf('translatoruser-int.com') > -1 ) {
  window.dataLayer.push({
    'event' : 'pageTranslated',
    'translationLanguage' : getUrlParameter('to'),
    'translationService' : 'yandex translator website'
  });
}
})();
</script>
