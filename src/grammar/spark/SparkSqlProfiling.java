import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.PredictionMode;

public class SparkSqlProfiling {
    public static void main(String[] args) throws Exception {
        if(args.length == 0){
            System.out.println("请传入 SQL 测试语句，例如：java SparkSqlProfiling \"SELECT * FROM t\"");
            return;
        }

        String sql = String.join(" ", args);

        // 创建 Lexer & Parser
        SparkSqlLexer lexer = new SparkSqlLexer(CharStreams.fromString(sql));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        SparkSqlParser parser = new SparkSqlParser(tokens);

        // ⭐ 开启 LL 回溯性能分析
        parser.getInterpreter().setPredictionMode(PredictionMode.LL_EXACT_AMBIG_DETECTION);
        parser.addErrorListener(new DiagnosticErrorListener(true));

        // 入口规则
        parser.singleStatement();

        // 输出 profiling 信息
        System.out.println(parser.getParseInfo());
    }
}
