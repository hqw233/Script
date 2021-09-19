const jobname = 'wlqd'
const $ = Env(jobname)
const notify = $.isNode() ? require('./sendNotify') : '';
message = ""
const user = {}
let uMessage= $.isNode() ? (process.env.uMessage ? process.env.uMessage : "") : ($.getdata('uMessage') ? $.getdata('uMessage') : "")
//let uMessage = `{"channel":"AppStore","userid":"7c13ea054085403caf77d5f30406e1aa","appversioncode":"201","brand":"apple","sysname":"wlkd","appversion":"2.0.1","optime":"1631861236","os":"ios","token":"fd428a0047924a7595cadfba8b5fd204","smid":"D2NJe1+ZyHrTOI4XHJrOCsZxTd0MZhH7BTakzOYA5sy+wX74","model":"iPhone_11","osversion":"14.7.1","device_userid":""}&{"channel":"AppStore","userid":"7c13ea054085403caf77d5f30406e1aa","appversioncode":"201","brand":"apple","sysname":"wlkd","appversion":"2.0.1","optime":"1631861236","os":"ios","token":"fd428a0047924a7595cadfba8b5fd204","smid":"D2NJe1+ZyHrTOI4XHJrOCsZxTd0MZhH7BTakzOYA5sy+wX74","model":"iPhone_11","osversion":"14.7.1","device_userid":""}`
let uMessageArr = []
let userid = [] 
let uMessagebodys = ""

if (!uMessage) {
    $.msg($.name, '【提示】请点击我的获取user信息', '不知道说啥好', {
        "open-url": "给您劈个叉吧"
    });
    $.done()
}
else if (uMessage.indexOf("&") == -1) {
    uMessageArr.push(uMessage)
}
else if (uMessage.indexOf("&") > -1) {
    uMessagebodys = uMessage.split("&")
}
else if (process.env.uMessage && process.env.uMessage.indexOf('&') > -1) {
    uMessageArr = process.env.uMessage.split('&');
           console.log(`您选择的是用"&"隔开\n`)
}
else {
    uMessagebodys = [process.env.uMessage]
};
   Object.keys(uMessagebodys).forEach((item) => {
       if (uMessagebodys[item]) {
        uMessageArr.push(uMessagebodys[item])
       } 
   })


!(async () => {
if (typeof $request !== "undefined") {
     getuMessage()
    $.done()
}else{
    console.log(`共${uMessageArr.length}个账号`)
        for (let k = 0; k < uMessageArr.length; k++) {
        $.message = ""
        token1 = JSON.parse(uMessageArr[k]).token;
        //console.log(`${qdbody1}`)
        console.log(`--------账号 ${k+1} 签到任务执行中--------\n`)
        await wlqd(token1)
            await $.wait(1000);
        await wleverydaybox(token1);
        console.log("\n\n")
    }

    date = new Date()
    if ($.isNode() &&date.getHours() == 11 && date.getMinutes()<10) {
        if (message.length != 0) {
               await notify.sendNotify("文旅签到", `${message}\n\n shaolin-kongfu`);
        }
    } else {
        $.msg($.name, "",  message)
    }
}
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())





function wlqd(token) {
    return new Promise((resolve, reject) => {
            const url = "https://wlkdapi.zhongchuanjukan.com/usersign/sign";
            const headers = {
                        'Host': 'wlkdapi.zhongchuanjukan.com',
                        'Content-Type': 'application/json;charset=utf-8',
                        'Origin': 'https://wlkdapi.zhongchuanjukan.com',
                        'Connection': 'keep-alive',
                        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                        //'Referer': 'https://wlkdapi.zhongchuanjukan.com/task/view/?sysname=wlkd&token='+uMessage.token+'&device_userid=&brand=apple&model=iPhone_11&optime='+ts()+'&sppid=fa9aeb1675c01f3b8218720dfe29ff77'
                        //'Referer': 'https://wlkdapi.zhongchuanjukan.com/task/view/?sysname=wlkd&token='+uMessage.token+'optime='+ts(),
                        //'Referer':'https://wlkdapi.zhongchuanjukan.com/task/view/?sysname=wlkd&token='+uMessage.token+'&device_userid=&brand=apple&model=iPhone_11&optime=1631813473&sppid=fa9aeb1675c01f3b8218720dfe29ff77'
                    };

        const body = JSON.stringify({sysname:'wlkd',token : token});
        //const body = `{"token" : "fd428a0047924a7595cadfba8b5fd204","sysname":"wlkd"}`
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                /* const profit = JSON.parse(data)
                console.log(profit) */
                if(JSON.parse(data).ret_code == 1 ){
                console.log(`签到奖励：${JSON.parse(data).profit}`);
            }else if(JSON.parse(data).ret_code == 0)
            {
                console.log(`已经签到过了`)
                //$.log(data)
            }else{
                console.log(`获取签到奖励异常`)}
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


async function getuMessage() {
    if ($request.url.match(/\/wlkdapi.zhongchuanjukan.com\/account\/getTodayDetail/)) {
        
              bodyVal=$request.body
              
              await $.wait(1100);
            if (uMessage) {
                
                 for(let i = 0;i< uMessageArr.length;i++){
                            userid.push(JSON.parse(uMessageArr[i]).userid)}
                            if(
                                userid.indexOf(JSON.parse(bodyVal).userid) === -1
                                ){
                                uMessagebodys = uMessage + "&"+ bodyVal 
                                 $.setdata(uMessagebodys, 'uMessage');
                    }
                                else{console.log(`此账号user信息已存在`)}
                    }else {
                $.setdata(bodyVal, 'uMessage');
                $.log(`${$.name}, uMessage: ${bodyVal}`);
                $.msg($.name, `获取uMessage 成功🎉`, ``)
            }
        }
    
      }

      function wleverydaybox(token) {
        return new Promise((resolve, reject) => {
                const url = "https://wlkdapi.zhongchuanjukan.com/hottask/profit";
                const headers = {
                            'Host': 'wlkdapi.zhongchuanjukan.com',
                            'Content-Type': 'application/json;charset=utf-8',
                            'Origin': 'https://wlkdapi.zhongchuanjukan.com',
                            'Connection': 'keep-alive',
                            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                            //'Referer': 'https://wlkdapi.zhongchuanjukan.com/task/view/?sysname=wlkd&token='+uMessage.token+'&device_userid=&brand=apple&model=iPhone_11&optime='+ts()+'&sppid=fa9aeb1675c01f3b8218720dfe29ff77'
                            //'Referer': 'https://wlkdapi.zhongchuanjukan.com/task/view/?sysname=wlkd&token='+uMessage.token+'optime='+ts(),
                            //'Referer':'https://wlkdapi.zhongchuanjukan.com/task/view/?sysname=wlkd&token='+uMessage.token+'&device_userid=&brand=apple&model=iPhone_11&optime=1631813473&sppid=fa9aeb1675c01f3b8218720dfe29ff77'
                        };
    
            const body = JSON.stringify({sysname:'wlkd',token : token,act_type:"redbean",});
            //const body = `{"token" : "fd428a0047924a7595cadfba8b5fd204","sysname":"wlkd"}`
            const request = {
                url: url,
                headers: headers,
                body: body
            };
    
            $.post(request, async(error, response, data) => {
                try {
                    /* const profit = JSON.parse(data)
                    console.log(profit) */
                    if(JSON.parse(data).ret_code == 1 ){
                    console.log(`签到奖励：${JSON.parse(data).profit}`);
                }else if(JSON.parse(data).ret_code == 0)
                {
                    console.log(`已经领过每日奖励了`)
                    //$.log(data)
                }else{
                    console.log(`获取每日奖励异常`)}
                } catch (e) {
                    $.log(e)
                }
                resolve();
            })
        })
    }
    
function ts(inputTime) {
    if ($.isNode()) {
        TS = Math.round((new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
    } else TS = Math.round((new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000) / 1000).toString();
    return TS;
};


function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
