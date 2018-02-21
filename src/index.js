module.exports = function check(str, bracketsConfig) {
  	var a='((()))()';
    var tmp = a.split('');
    var b=[['(', ')'], ['[', ']'], ['{', '}']];
    var i,j;
    for (i=0;i<(tmp.length);i++){
      for (j=0; j<b.length;j++){
      
		if ((a.indexOf(b[j][0])>=0) && (a.indexOf(b[j][1])>=0)){
        	
        	tmp.splice(a.indexOf(b[j][0]),1);
            tmp.splice(a.indexOf(b[j][1]),1);
        }
      }
    }
}
