var config = {
  history: true,
  // fragments: false,

  dependencies: [
    {src: '/slides/reveal/plugin/notes/notes.js', async: true},
    {src: '/slides/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); }},
  ],
};

var following = window.location.search.includes('follow');
var master = window.location.href.includes('localhost:') && ! following;
if (master || following) {
  config.multiplex = {
    secret: '',
    id: '',
    url: '',
  };

  config.dependencies = [
    {src: '//cdn.socket.io/socket.io-1.3.5.js', async: true},
    {src: '/slides/reveal/plugin/multiplex/' + (following ? 'client.js' : 'master.js'), async: true},
  ].concat(config.dependencies);
}

Reveal.initialize(config);
