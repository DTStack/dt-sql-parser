
## 使用方式

1. 构建镜像
``` sh
docker build -f ./docker/antlr4-profiling.Dockerfile -t antlr4-profiling .
```

2. 运行容器
``` sh
docker run -d -it --name antlr4-profiling -v ./src/grammar:/grammar antlr4-profiling
```

3. 进入容器
``` sh
docker exec -it antlr4-profiling bash
```

> **注意**
> 1. 进行 ANTLR4 Profiling 时，需要删除部分 ts 相关的代码，否则会报错。如下：
> - SparkSqlLexer.g4 需要删除 @members 的内容；SparkSqlParser.g4 需要删除 @@header 和 shouldMatchEmpty 的内容
>
> 2. 以下 java 命令需要进入容器的指定目录，否则 java 类会找不到报错

``` sh
cd /grammar/spark
```

4. 在容器中执行，生成 Java 版解析器
``` sh
antlr4 -Dlanguage=Java -visitor -no-listener ./SparkSqlLexer.g4 ./SparkSqlParser.g4
```

5. 编译 Java 文件
``` sh
javac -cp .:/usr/local/lib/antlr-4.13.1-complete.jar SparkSqlProfiling.java
```

6. 运行 Java 程序
``` sh
java -cp .:/usr/local/lib/antlr-4.13.1-complete.jar SparkSqlProfiling "SELECT * FROM a WHERE b = 1"
```
