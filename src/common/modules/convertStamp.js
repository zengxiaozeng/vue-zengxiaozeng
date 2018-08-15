export  const formatMDhm = stamp=>{
  // const Y = new Date(stamp).getFullYear();
  const M = stayTwo(new Date(stamp).getMonth()+1);
  const D = stayTwo(new Date(stamp).getDate());
  const h = stayTwo(new Date(stamp).getHours());
  const m = stayTwo(new Date(stamp).getMinutes());
  // const s = stayTwo(new Date(stamp).getSeconds());
  // console.log(stamp)
  return stamp?`${M}月${D}日 ${h}:${m}`:'';
}

function stayTwo(s){
  return `0${s}`.slice(-2)
}

export default formatMDhm;