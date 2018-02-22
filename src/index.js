module.exports = function check(str, bracketsConfig) {
    var strLength = str.length;
    var i,j, position;
    for (i=0;i<strLength;i++){
      for (j=0; j<bracketsConfig.length;j++){
		position=str.indexOf(bracketsConfig[j][0]+bracketsConfig[j][1],0);
		if (position >= 0){
            str=str.slice(0,position)+str.slice(position+2);
		} 
      }
    }
	if (str!=''){return(false);}
	return(true);
}
