Ext.define('PBI.view.Viewport',{
	extend: 'Ext.container.Viewport',
	requires: [
		'PBI.view.PBIToolbar',
		'PBI.view.UserList'
	/*
	add all views here
	*/
	],
	layout:'fit',

	initComponent: function() {

		function showLogin() {
			Ext.create('Ext.window.Window', {
				title: 'Login',
				id: 'loginWindow',
				resizable: false,
				closable: false,
				bodyPadding: '5px 5px 0',
				buttonAlign: 'center',
				iconCls: 'login',
				listeners: {
					destroy: {
						fn: function() {
							Ext.getCmp('mainApplication').setVisible(true);
							Ext.getCmp('logouttb').setVisible(true);
						}
					},
					show: {
						fn: function() {
							Ext.getCmp('mainApplication').setVisible(false);							
							Ext.getCmp('logouttb').setVisible(false);
						}
					}
				},
				buttons: [
				{
					iconCls: 'confirm',
					text: 'Login',
					formBind: true,
					handler: function() {
						if (Ext.getCmp('userlist').isValid()) {
							Ext.getCmp('loginWindow').destroy();
						}
					}
				}],
				items: [
				{
					xtype: 'userlist',
					allowBlank: false,
					id: 'userlist'
				}]
			}).show();
		};

		this.items = {
		layout: 'border',
		border: false,
		dockedItems: [
			{
				xtype: 'toolbar',
				id: 'logouttb',
				dock: 'bottom',
				border: false,
				items: [
				'->', // Fill
				{
					text: 'Logout',
					iconCls: 'login',
					id: 'logoutBtn',
					handler: function() {
						showLogin();
					}
				}]
			}],
		items: [
		{
			region: 'north',
			height: 30,
			collapsible: false,
			bodyStyle: 'background-color: #224477;',
			html: '<div class="mainTitle">&nbsp&nbspPBI Tracker Tool</div>'
		},
		{
			region: 'center',
			id: 'mainApplication',
			xtype: 'panel'
		}]
	};
	this.callParent(arguments);
	showLogin();
	Ext.getCmp('userlist').isValid();
	}
});
