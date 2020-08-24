/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let letterLogs = [], digitLogs = []

    for(const log of logs){
        const words = log.split(" ");

        if(isNaN(parseInt(words[1]))){
            letterLogs.push(
                new LetterLog(
                    log,
                    words.slice(1).join(" "),
                    words[0]
                )
            );
        }else{
            digitLogs.push(log);
        }
    }

    let output = [];

    // Sort by the header of the LetterLog
    letterLogs.sort((a,b)=>a.header.localeCompare(b.header))

    // Sort by the content of the LetterLog
    letterLogs.sort((a,b)=>a.content.localeCompare(b.content))

    for(const letterLog of letterLogs){
        output.push(letterLog.log);
    }

    output = output.concat(digitLogs)

    return output;
};

class LetterLog{
    constructor(log,content,header){
        this.log = log;
        this.content = content;
        this.header = header;
    }
}
