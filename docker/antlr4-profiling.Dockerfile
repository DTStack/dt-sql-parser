FROM registry.cn-hangzhou.aliyuncs.com/liuxy0551/eclipse-temurin:17-jdk-jammy

# 安装必要工具
RUN apt-get update && apt-get install -y curl unzip vim && apt-get clean

# 下载 ANTLR jar
RUN curl -O https://www.antlr.org/download/antlr-4.13.1-complete.jar && \
    mv antlr-4.13.1-complete.jar /usr/local/lib/

# 设置环境变量
RUN  echo 'export CLASSPATH=".:/usr/local/lib/antlr-4.13.1-complete.jar:$CLASSPATH"' >> ~/.bashrc \
    && echo 'alias antlr4="java -jar /usr/local/lib/antlr-4.13.1-complete.jar"' >> ~/.bashrc \
    && echo 'alias grun="java org.antlr.v4.gui.TestRig"' >> ~/.bashrc

# 工作目录
WORKDIR /grammar

# 默认命令保持 bash
CMD ["bash"]
