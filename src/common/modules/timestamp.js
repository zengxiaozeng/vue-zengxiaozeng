// 可以导出本地时间戳
// 默认导出判断活动时间是否在内
// import api from '../api/api';
import axios from 'axios';
import formatParams from './formData.js';
import {Toast} from 'mint-ui';
// const apiUrl=`${api.agree}api.youdingkeji.com/yiding-rest/rest/activity/entry.json`;
export const formatTimeStamp=(date,time='0:0:0')=>{
  return Date.parse(new Date(`${date} ${time}`))||Date.parse(new Date(`${date.replace(/-/g,'/')} ${time}`));
} 
// data的格式为2017-10-23，time的格式为0:0:0
const sureDate=({dataStart,timeStart='0:0:0',dataEnd,timeEnd='0:0:0',myToken='wbiokr',targetLabel='teacherDay2017',greaterThanFun,lessThanFun,equalThanFun})=>{
  axios({
    method:'post',
    url:config.apiUrl,
    transformRequest:[(data)=>formatParams(data)],
    data:{
      token:myToken,
      label:'base',
      type:'getTime',
      target:targetLabel,
    }
  }).then((res)=>{
    const data=res.data;
    if(Number(data.code)===0&&!!data.result&&!!data.result.now){
      const nowTimeStamp=data.result.now;
      const startTimeStamp=formatTimeStamp(dataStart,timeStart);
      const endTimeStamp=formatTimeStamp(dataEnd,timeEnd);
      // console.log(nowTimeStamp,startTimeStamp,endTimeStamp);
      if(nowTimeStamp<startTimeStamp){
        lessThanFun?lessThanFun():Toast('活动时间未到！')
      }else if(nowTimeStamp>endTimeStamp){
        greaterThanFun?greaterThanFun():Toast('活动时间已过！')
      }else{
        equalThanFun?equalThanFun():Toast('谢谢参与！')
      }
    }else{
      Toast('网络错误，请重试！')
    }
  })
}

export default sureDate ;