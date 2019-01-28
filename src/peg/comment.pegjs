

{
    let lines=[];
    let isSplit=false;
}

start
= union_stmt:union_stmt  
{
    return {lines,text:union_stmt};
}


union_stmt
=stmt:
(
    words:(!kw_start word:. {return word})* 
    stmt:(comment:comment {return ''}/quote:quote {return quote}/";" {isSplit=true;return ";"}) 
    {
        const text=words.join("")+stmt;
        let index=Math.max(lines.length-1,0);
        lines[index]=(lines[index]||'')+text;
        if(isSplit){
            isSplit=false;
            lines.push('');
        }
        return text;
    } 
)* other:.*
{   
    const text=stmt.join("")+other.join("")
    let index=Math.max(lines.length-1,0);
    lines[index]=lines[index]+other.join("");
    return text;
}

comment
=comment:(multiLine/singleLine)
{
    return comment;
}

singleLine  
= start:KW_SINGLE_LINE_START 
  words:[^\r\n]*
  {
  return start+words.join("")
  }
  

multiLine
=start:KW_MULTI_LINE_START 
  words:(!"*/" word:. {return word })*
  end:KW_MULTI_LINE_END
  {return start+words.join("")+end }

quote
=content:(
    (
        start:"\""
        words:[^"]*
        end:"\""
        {return start+words.join("")+end;}
    )
    /
    (
        start:"'"
        words:[^']*
        end:"'"
        {return start+words.join("")+end;}
    )
)





kw_start=KW_SINGLE_LINE_START/KW_MULTI_LINE_START/"\""/"'"/";"


KW_SINGLE_LINE_START = "--";
KW_SINGLE_LINE_END = [\r\n];
KW_MULTI_LINE_START = "/*";
KW_MULTI_LINE_END = "*/";


__ = whitespace*

whitespace
= [ \t\r\n];