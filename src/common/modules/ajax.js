const ajax= ({
  type='get',
  url='',
  async='true',
  data={},
  dataType='text',
  contentType="application/x-www-form-urlencoded",
  beforeSend=function(){},
  success=function(){},
  error=function(){},
  
}) => {

  beforeSend()
  var xhr = createxmlHttpRequest();
  xhr.responseType = dataType;
  xhr.open(type, url, async);
  xhr.setRequestHeader("Content-Type", contentType);
  xhr.send(convertData(data));

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success(JSON.parse(xhr.response))
      } else {
        error()
      }
    }
  }
}

const createxmlHttpRequest = () => {
  if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  } else if (window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
};
const convertData = (data) => {
  if (typeof data === 'object') {
    var convertResult = "";
    for (var c in data) {
      convertResult += c + "=" + data[c] + "&";
    }
    convertResult = convertResult.substring(0, convertResult.length - 1)
    return convertResult;
  } else {
    return data;
  }
}

export default ajax;