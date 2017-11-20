var GantryWidgets = {
	init: function () {
		GantryWidgets.dropdown();
	},
	dropdown: function () {
		var b = document.id("overrides-inside"),
			e = document.id("overrides-first"),
			c = null;
		var a = new Fx.Slide("overrides-inside", {
			duration: 100,
			onStart: function () {
				var g = document.id("overrides-actions").getSize().x - 4;
				b.setStyle("width", g);
				this.wrapper.setStyle("width", g + 4);
			},
			onComplete: function () {
				if (!this.open) {
					e.removeClass("slide-down");
				}
			}
		}).hide();
		b.setStyle("display", "block");
		var d = function () {
				if (b.hasClass("slidedown")) {
					a.slideIn();
					e.addClass("slide-down");
				}
			};
		var f = function () {
				if (b.hasClass("slideup")) {
					a.slideOut();
				}
			};
		$$("#overrides-toggle, #overrides-inside").addEvents({
			mouseenter: function () {
				$clear(c);
				b.removeClass("slideup").addClass("slidedown");
				c = d();
			},
			mouseleave: function () {
				$clear(c);
				b.removeClass("slidedown").addClass("slideup");
				f.delay(300);
			}
		});
	}
};
window.addEvent("domready", GantryWidgets.init);