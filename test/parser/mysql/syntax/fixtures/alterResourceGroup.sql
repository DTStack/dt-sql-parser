-- https://dev.mysql.com/doc/refman/8.0/en/alter-resource-group.html

/* ALTER RESOURCE GROUP group_name
    [VCPU [=] vcpu_spec [, vcpu_spec] ...]
    [THREAD_PRIORITY [=] N]
    [ENABLE|DISABLE [FORCE]]

vcpu_spec: {N | M - N} */


ALTER RESOURCE GROUP group_name VCPU = 2, 3 THREAD_PRIORITY = 5 DISABLE FORCE;
ALTER RESOURCE GROUP group_name VCPU = 2, 3 THREAD_PRIORITY = 5 ENABLE FORCE;
ALTER RESOURCE GROUP group_name VCPU 2 THREAD_PRIORITY 5 ENABLE FORCE;
ALTER RESOURCE GROUP group_name VCPU 2 THREAD_PRIORITY 5 ENABLE;
ALTER RESOURCE GROUP group_name VCPU 2 THREAD_PRIORITY 5 DISABLE;
ALTER RESOURCE GROUP group_name VCPU 2 THREAD_PRIORITY 5;
ALTER RESOURCE GROUP group_name VCPU 2 DISABLE FORCE;
ALTER RESOURCE GROUP group_name DISABLE FORCE;
ALTER RESOURCE GROUP group_name ENABLE FORCE;
ALTER RESOURCE GROUP group_name;

ALTER RESOURCE GROUP rg1 VCPU = 0-63;
ALTER RESOURCE GROUP rg1 VCPU = 0-63, 64-65, 66;
ALTER RESOURCE GROUP rg2 THREAD_PRIORITY = 5;
ALTER RESOURCE GROUP rg3 DISABLE FORCE;
