var $jq = jQuery.noConflict();

$jq(function() {
  var $range = $jq(".js-range-slider--bottom"),
      $from = $jq(".from-input-2"),
      $to = $jq(".to-input-2"),
      range,
      min = $range.data('min'),
      max = $range.data('max'),
      from,
      to;

  var updateValues = function () {
      $from.prop("value", from);
      $to.prop("value", to);
  };

  $range.ionRangeSlider({
      onChange: function (data) {
        from = data.from;
        to = data.to;
        updateValues();
      }
  });

  range = $range.data("ionRangeSlider");
  var updateRange = function () {
      range.update({
          from: from,
          to: to
      });
  };

  $from.on("input", function () {
      from = +$jq(this).prop("value");
      // if (from < min) {
      //     from = min;
      // }
      // if (from > to) {
      //     from = to;
      // }
      updateValues();
      updateRange();
  });

  $to.on("input", function () {
      to = +$jq(this).prop("value");
      // if (to > max) {
      //     to = max;
      // }
      // if (to < from) {
      //     to = from;
      // }
      updateValues();
      updateRange();
  });
});

$jq(function() {
  var $range = $jq(".js-range-slider--top"),
      $from = $jq(".from-input-1"),
      $to = $jq(".to-input-1"),
      range,
      min = $range.data('min'),
      max = $range.data('max'),
      from,
      to;

  var updateValues = function () {
      $from.prop("value", from);
      $to.prop("value", to);
  };

  $range.ionRangeSlider({
      onChange: function (data) {
        from = data.from;
        to = data.to;
        updateValues();
      }
  });

  range = $range.data("ionRangeSlider");
  var updateRange = function () {
      range.update({
          from: from,
          to: to
      });
  };

  $from.on("input", function () {
      from = +$jq(this).prop("value");
      // if (from < min) {
      //     from = min;
      // }
      // if (from > to) {
      //     from = to;
      // }
      updateValues();
      updateRange();
  });

  $to.on("input", function () {
      to = +$jq(this).prop("value");
      // if (to > max) {
      //     to = max;
      // }
      // if (to < from) {
      //     to = from;
      // }
      updateValues();
      updateRange();
  });
});
