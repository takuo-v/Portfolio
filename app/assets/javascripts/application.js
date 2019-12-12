// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


$(document).on('turbolinks:load', function() {
  $('#cover-image').click(function() {
    $('#article_image').click();
    return false;
  });
  $('#article_image').on('change', function(e) {
    var $preview, file, reader, t;
    file = e.target.files[0];
    reader = new FileReader;
    $preview = $('.article-image');
    t = this;
    if (file.type.indexOf('image') < 0) {
      return false;
    }
    reader.onload = (function(file) {
      return function(e) {
        $preview.empty();
        $preview.attr("src", e.target.result);
      };
    })(file);
    reader.readAsDataURL(file);
  });
});