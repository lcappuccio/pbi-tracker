Ext.define('PBI.view.UserList' ,{
	extend: 'Ext.form.ComboBox',
	alias : 'widget.userList',
	id: 'userList',
	editable: false,
	fieldLabel: 'User',
	queryMode: 'local',
	displayField: 'user_name',
	valueField: 'user_id',
	store: 'Users',

	initComponent: function() {
		this.callParent(arguments);
	}
});