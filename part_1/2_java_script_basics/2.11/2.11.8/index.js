if (-1 || 0) alert('first'); // -1
if (-1 && 0) alert('second'); // не выполнится, if(0)==false
if (null || (-1 && 1)) alert('third'); // 1
