-- https://dev.mysql.com/doc/refman/8.0/en/install-component.html

/* INSTALL COMPONENT component_name  [, component_name ...
     [SET variable = expr [, variable = expr] ...]

  variable: {
    {GLOBAL | @@GLOBAL.} [component_prefix.]system_var_name
  | {PERSIST | @@PERSIST.} [component_prefix.]system_var_name
} */


INSTALL COMPONENT 'file://component1';
INSTALL COMPONENT 'file://component1', 'file://component2';
INSTALL COMPONENT 'file://component1', 'file://component2' SET GLOBAL component1.var1 = 12 + 3, PERSIST component2.var2 = 'strings';
INSTALL COMPONENT 'file://component1', 'file://component2' SET @@GLOBAL.component1.var1 = 12 + 3, @@PERSIST.component2.var2 = 'strings';
INSTALL COMPONENT 'file://component1', 'file://component2' SET PERSIST component1.var1 = 12 + 3, GLOBAL component2.var2 = 'strings';
