import './css/index.css';
import './js/flexible';
import {formatTime} from './js/util'
(function() {
  let t = setTimeout(getTime, 1000);
  function getTime() {
    clearTimeout(t);
    document.querySelector('.showTime').innerHTML= formatTime('yyyy-MM-dd hh:mm:ss');
    t = setTimeout(getTime, 1000);
  }

})();