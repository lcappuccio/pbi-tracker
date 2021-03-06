/*
Script generated by Aqua Data Studio 16.0.4 on May-07-2015 12:48:12 PM
Database: pbi_manager
Schema: <All Schemas>
Objects: TABLE, VIEW, PROCEDURE, FUNCTION, TRIGGER, EVENT
*/
DROP TABLE `pbi_user`
GO
DROP TABLE `pbi_updates`
GO
DROP TABLE `pbi_list`
GO

CREATE TABLE `pbi_list`  ( 
	`pbi_id`                	int(11) NOT NULL,
	`pbi_descr`             	varchar(100) NOT NULL,
	`pbi_done_documentation`	int(11) NULL,
	`pbi_done_merge`        	int(11) NULL,
	`pbi_done_validation_po`	int(11) NULL,
	`pbi_deployable`        	int(11) NULL,
	`pbi_deployed`          	int(11) NULL,
	`pbi_insert_timestamp`  	datetime NOT NULL,
	PRIMARY KEY(`pbi_id`)
)
GO
CREATE TABLE `pbi_updates`  ( 
	`pbi_id`         	int(11) NOT NULL,
	`user_name`        	varchar(100) NOT NULL,
	`pbi_update_date`	datetime NOT NULL
	)
GO
CREATE TABLE pbi_user  ( 
	`user_id`    	int(11) NOT NULL,
	`user_name`  	varchar(100) NOT NULL,
	`user_active`	int(11) NOT NULL,
	`last_login` 	datetime NULL,
	PRIMARY KEY(user_id)
)
GO

