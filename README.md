# PBI-Tracker
PBI Tracker Tool - A tool to keep track of Product Backlog Items
version 1.0

## Installation
1. Run the SQL script on your database
2. Configure data/dbconf.php with database host, user and password
3. Deploy to your webserver

## Usage
1. Populate the user table with the users that'll use the tool

## FAQ
1. PHP Error: Call to undefined method mysqli_stmt::get_result() in /var/www/html/pbi_tracker/data/pbi_updates.php on line 17
  * Install mysqlnd driver (sudo apt-get install php5-mysqlnd) and restart apache