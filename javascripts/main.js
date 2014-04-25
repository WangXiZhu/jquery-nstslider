(function() {

  require({
    urlArgs: "b=" + ((new Date()).getTime()),
    paths: {
      jquery: 'vendor/jquery/jquery',
      prettify: 'vendor/google-code-prettify/prettify',
      nstSlider: 'vendor/nestoria/jquery.nstSlider',
      jsbeautify: 'vendor/js-beautify/beautify',
      dotimeout: 'vendor/ba-dotimeout/jquery.ba-dotimeout.min',
      scrollTo: 'vendor/jquery.scrollTo/jquery.scrollTo'
    }
  });

  require(['jquery'], function (dependency) {

        require(['app/demo'], function(DemoView) {
            //
            // The demo section
            //
            var view = new DemoView();
            view.render('#demo');


            //
            // ScrollSpy
            //
            require(['app/scrollspy'], function(ScrollSpyView) {
                var scrollSpyView = new ScrollSpyView();
                scrollSpyView.render('#header');
            });

        });

        require(['app/settings'], function (SettingsView) {
            var view = new SettingsView();
            view.render('#settings');
        });

        require(['app/methods'], function (MethodsView) {
            var view = new MethodsView();
            view.render('#methods');
        });
  });


}).call(this);
