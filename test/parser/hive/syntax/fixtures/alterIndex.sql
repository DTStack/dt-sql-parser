ALTER INDEX table01_index ON table01 
PARTITION (pt1, pt2 = '2019-04-01')
REBUILD;

ALTER INDEX table01_index ON table01 
REBUILD;
