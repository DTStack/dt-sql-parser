CREATE ROLE role;
CREATE ROLE role1 WITH ADMIN admin;
CREATE ROLE "role" WITH ADMIN "admin";
CREATE ROLE "ro le" WITH ADMIN "ad min";
CREATE ROLE "!@#$%^&*'" WITH ADMIN "ад""мін";
CREATE ROLE role2 WITH ADMIN USER admin1;
CREATE ROLE role2 WITH ADMIN ROLE role1;
CREATE ROLE role2 WITH ADMIN CURRENT_USER;
CREATE ROLE role2 WITH ADMIN CURRENT_ROLE;
CREATE ROLE role WITH ADMIN CURRENT_ROLE IN my_catalog;
