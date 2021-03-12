export function diffTime(date) {
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;
  let year = month * 12;

  let now = new Date().getTime();
  let diffValue = now - new Date(date).getTime();

  let yearC = diffValue/year;
  let monthC =diffValue/month;
  let weekC =diffValue/(7*day);
  let dayC =diffValue/day;
  let hourC =diffValue/hour;
  let minC =diffValue/minute;
  if(parseInt(yearC) >=1) {
    return parseInt(yearC) + '年前'
  }
  if (parseInt(monthC) >=1) {
    return parseInt(monthC) + '个月前'
  } else if (parseInt(dayC) > 1) {
    return parseInt(dayC) + '天前'
  } else if (parseInt(dayC) === 1) {
    return '昨天'
  } else if(parseInt(hourC)>=1){
    return parseInt(hourC) +"小时前";
  } else if(parseInt(minC)>=1){
    return parseInt(minC) +"分钟前";
  } else {
    return "刚刚";
  }
}