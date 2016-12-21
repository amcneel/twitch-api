define("twitch-api/routes/main", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			$("#searchVal").change(function () {
				var test = $("#searchVal").val();
				return [test];
			});
		}
	});
});