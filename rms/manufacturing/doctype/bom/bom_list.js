frappe.listview_settings['BOM'] = {
	add_fields: ["is_active", "is_default"],
	get_indicator: function(doc) {
		if(doc.is_default) {
			return [__("Default"), "green", "is_default,=,Yes"];
		} else if(doc.is_active) {
			return [__("Active"), "blue", "is_active,=,Yes"];
		} else if(!doc.is_active) {
			return [__("Not active"), "darkgrey", "is_active,=,No"];
		}
	}
};