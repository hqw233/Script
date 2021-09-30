

const jobname = 'shuqi'
const $ = Env(jobname)


!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    //nodejs运行
    await dailysign();
    await $.wait(2000);
    await share();
    await $.wait(1000);
    await jsdailysign();
    await $.wait(2000);
    //await jsshare();
    //await $.wait(1000);
    await jsshucheng();
    await $.wait(1000);
    for(let i=0;i<10;i++)
    {
        await vedioreward426();
        await $.wait(1000);
    }
    for (let i = 0; i < 10; i++) {
        await vedioreward();
        await $.wait(30000);
        await vediorewarddraw();
        await $.wait(1000);
        await drawreward();
        await $.wait(30000);
    }
    await $.wait(1000);
    await read426();
    await $.wait(1000);
    await jsread()
    await $.wait(1000);
    await receive();
    

}
function jsdailysign() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone12,1__shuqi__v1.0.5.0) 828x1792 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.7.1&ustatus=1&umidtoken=wBpLRj5LOm%2BwcTV8NwdKbKszE0un6TI9&net_env=wifi&placeid=111111&user_id=2019911775&sn=C7C46257EE0D130587491634C830B4AB39C5E099&msv=10.0.0&brand=Apple&imei=0E72DF90618EC27BB135964C32C1037269B31639&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wRTcyREY5MDYxOEVDMjdCQjEzNTk2NEMzMkMxMDM3MjY5QjMxNjM5Iiwic24iOiJmYXN0X0M3QzQ2MjU3RUUwRDEzMDU4NzQ5MTYzNEM4MzBCNEFCMzlDNUUwOTkiLCJleHAiOjE2MzMyMzc5ODgsInVzZXJJZCI6IjIwMTk5MTE3NzUiLCJpYXQiOjE2MzI3MTk1ODgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.E7cx6-cL5nUcmsAVHRv4LCcelEXCGyrRsGzuJyTbfwFEtVOG3d7J1TwUp3XVraCPK5k6tHDjChYwAWd7SEu20w&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone11&wh=828x1792&utype=vip&utdid=YGbGS5w4dw4DAGWsyK50KUEx&idfa=00000000-0000-0000-0000-000000000000",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1633013325&position=601&userId=2019911775&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1633013325&sqSv=1.0&sign=4c89f01b0f651f9af283b41d488c812e&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.7.1%26ustatus%3D1%26umidtoken%3DwBpLRj5LOm%252BwcTV8NwdKbKszE0un6TI9%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2019911775%26sn%3DC7C46257EE0D130587491634C830B4AB39C5E099%26msv%3D10.0.0%26brand%3DApple%26imei%3D0E72DF90618EC27BB135964C32C1037269B31639%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wRTcyREY5MDYxOEVDMjdCQjEzNTk2NEMzMkMxMDM3MjY5QjMxNjM5Iiwic24iOiJmYXN0X0M3QzQ2MjU3RUUwRDEzMDU4NzQ5MTYzNEM4MzBCNEFCMzlDNUUwOTkiLCJleHAiOjE2MzMyMzc5ODgsInVzZXJJZCI6IjIwMTk5MTE3NzUiLCJpYXQiOjE2MzI3MTk1ODgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.E7cx6-cL5nUcmsAVHRv4LCcelEXCGyrRsGzuJyTbfwFEtVOG3d7J1TwUp3XVraCPK5k6tHDjChYwAWd7SEu20w%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11%26wh%3D828x1792%26utype%3Dvip%26utdid%3DYGbGS5w4dw4DAGWsyK50KUEx%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

  function vedioreward426() {
    return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "4717",
    "Accept-Language": "zh-Hans-CN;q=1"
};
        const body = "{\"message\":\"2M3AarDaY2yPibY5dEDFUH03xFaCNemlkqWFjBAP5OWOBLBU\\/wRPFP1Z8mbFyM2\\/tO9+RJ0jMps96KvRm5BadGgzQ5hCRqYYsc4jfcMfaUZPf5eYbN8byRSBKFXyzpE3gdSJSPgY0LUdtb20KseqhVezJzu7AYP4j8eo9HiM8FHMBzkrdi2VSLxd0ORJenFYjFYQUny5htGDjDFeVE3cx0Su+Br3ts54sFcvoi5An3p4JXQexb+9+9eh3kgLYiWuVNsYzL1zCYPSR6cUdb5OSysRcj+zymdFatgk96VrrL74kFGLvsb7eO9z2W86imrGaYVRkStKMj3RMj531h0QQmcRLlbNdjD74hJrOxjXZEfEPMWlIRZkx9LVC3jp0qocuMAfQWZ8qwgWk4IrlGFCBEc7qxxbvk02tRANfPdsG65sm3xSZ2tSRgHfQM5q0xZo5kyKC8yuyNqhxO7h7huW1RXZNiwn\\/aNbCi9RnQFQTTIjfm2Q+xFqj7G0dUExZ9vozfnPG14245cr5VuH1f4oWbneQLOqDW0vy2wJtiiJ\\/z3viee1wMhcIiT\\/7npoDxLapIyb5AW5UUy3cJLJCleQ+Jkw4lxy2jx6PJITYJ9gi2PBVxXDgMmLPE7JeWqtiUU3JpK9zvMJPpYKyFCPrvqMxPOAnWhmw1jY4lgzw98bBFBXm6VotVwaIj6nU2SYvZMAN6TX1GH3ip3DixuwPkuBc1rfZpSe0Y1ecoBVWUTJ3IS7ut5EjN36jwkYtWFDDJdJj68sJ9rMfTPa8dlgiggaacNJaVMTCc2\\/coUW4U41+Mq5Cgp\\/C1CoWdA3B37N1huT\\/eoNv6CcGKDVNnItIxWggfypuVCktS3Yw+0e4UJPYROhrBUQyJNWSEg3Im04UG9m0XuhCHZskZYoWnFp38aqMbeIvwOdv4DBVT1VpdORXQDQgIfASHdZNbzA1MSUtu6A1GtyDSHRR3RWDaJv1uMTbQhKJ0RJ2sCmJ3GeJEe4BpPv4u5yUx8TAkFYYmV+6JqSKYsv0z0escZiQW\\/uk5ee0M8A\\/bvAmn+sToc5oiD\\/0jjF5Zd1si4Qu18z1CjSlVaHSMgkHNXW2sg6DIVZOzbqi6nlNyGJw0Ke+sTf7a\\/BD+HY9ZG5oTMESj2+N8R+S7KrZEAC0rqDzu7+PqEOfzW93xshsCBmQ28m+bPf8qCWZbBEcOAy5lzpqiQyfCsbtWAPtAL1+3K9MrXS3leIZwILklWxlRoKEFh7XE8FF87uB8bZQ9smCMvJJ1i2YuU7F4AHoqTIeSCSbAiF3kJb5TjYJzTzWG9cFcQEqZP3bA6ltOMzNr9\\/lKIrA5QshYNKSV4vpxxzIQXJiWdJyVz2pUqCMImCyS1YgJe7Hup7292GpEvMKAxodYRFXb2KuIjytXw08lfADijhNWkYsldRQH8a21FxGlJd8Z7bCKB+cZXrXVsMIbp\\/MSYjV71gEy86iA9A5BwQeOy3c4dOIcXIHqsF5gItj4kA+2OtzAs\\/d4YC4T7eWe2K7+z0LdZZri8epFvGZikwSL\\/gV8jTdTqcXaDdiLeaJ7sWOlBBT0LTNciSZg3KcAncrc6cTlNa8ZNA7wCYp87ugMaZKm2uVnLY7eJJdYypeEEE253sghPDktTIAZm3GD7XTgIdfEBZYrEVqO1YAzHoHIFWg\\/2in9Aa9vyYmFJAP\\/BER9S9W9KAJjXizBoTh+\\/XEmkTEHnTv5LcEAlsP\\/bqXeMg5H1g\\/tpzavjIVIux0oeJfYZCaZQghb9RW\\/pJlbgXMVbeN1\\/9tZG34bEBtySiuMHoPTkBX4AcZjdIpZOYyAOKQgHafhB3V\\/gRpAIlnJ1FiTovFj2Nd9IKT5WN4pkLpFm673bil8iNDzdI+YDRMGp6y5tExzOhWZj3k4OpRABJ1FdvrV\\/SDWU5ME631q0SJI5MHPDuvpHr0sP2OdB+OEzENpcIdxJe\\/HivDTyp6mg9nmriSD9zq0LHrWWqAbOnvLWB9SAoS1iOMb7Fc6CwFEGTZFdshCVk1XAtIOppqVIA11G3OD0\\/HuLliZTCoIaNB7qzTIAi4xM85R4GXOwQjvQJx\\/BatG+QskgW1OhZTszELPj5jDBjiyPCC\\/IA8LyIbBcwzJUipKukgznDznScP6BTyZng+oot0mrgSwkLx6A2eplM7lsrwH3sVZvLZBhScIR31xV0sucUJQdiLveFLDtg9sCqFaJK5uxDarUTyLgj\\/+qsB9IWF+K\\/unS9chmoP3hEqNMS3Dj5TkOzGOyEQRYPPZ0ZbdUZ+nPMTe2iHG0EsHRawdHDbWFiGqbsyQ59d3LD1bIyt5B96u2ndeWeSGnqrq5AQNr2eNFG6iHQiq5A3LqtKYxjuK25n8dWxjP01xWCiga4tgoqWfgeclaQCrVSdfeMpt20wjxBEtGYp5K8Jn0m0AYUV7JsJbUMPwZ5WoLudZUZN5csYghDN9fz6QjHvyCERwLF1Z4zdT7+oOKgdk24rAR+EO429wSaUg9b7nBzgm2\\/Ba60A0\\/iGPfEfdNWNi9B4tIHspRiPtwAPivc9t75LlIjK5JGx7AVB4HTE02jDSrrtFpIn7AsKOYAff26oOXQyIKXAYM3XSr6fSay7wg1NdBir4DrPMNWEffdrImXGldF4jYFNEPqoKlvLzVGuzgMCqyzRTOJyqG2iQWvaNS3nERinfcyXA2\\/ru9U6rY248Xh9Bov5CgIL5LVok4jLzHVD47h4V3IXo3teKzVpfkq7iJpDN\\/vLPp8hE96VF1Ntc6cfv0jcbrzlgTGC9P2cG3HjoqIiJn4R6LJ6JmmigYkMTAvsnhOOylsL034x2Z+7HKrvvoxfPWhh+bPMAeJHcZuGTBddefl\\/SvemfwOT1\\/Eq5GYVutMzNk60c69DyBlhtoOhYXm9UgCptSJy8XFzz6YVVFN3rLSZ\\/osra7JuYkhxj0hRmnQrTtXJm1VOhDyGD6Q5ftG84fWvO4jfNAKttmWyQhPLSJnYwJ2ay+gcTFXElj1N1oz3MIPD\\/TiAhr68j6JNMhjCKDk1cNod8D4aV0Utu8Xdrt7C6XZ+ZtXxVnAscp3L5peN\\/JKR2FzAygsyFhpSl0rC9jw7Z4tu1KAjUnNs\\/fvkM+a8Qp\\/8VuRFvyQCtB9siHddqgfQItVVf8TlYCw22UIDxccAXSmyxGdKXE\\/OeVQerkqTJKdbDOVeZyqrzPxfp9qnTIUV0lG40FAPqJqZskff4Z3WyxHJYybPfz3tvsI1lYI99nvSUA7MJZC\\/NPFKY9F9QXyaA3YV8kpwxlDY0TyoTzfNJDSwjJl9cn78qhNsveuYjLLY3wFXhW\\/0pVj+zGn5hlrpr9WrRfCXIMphdP8ndGKXzcN\\/jQWK5Mg5D0XGLuelaxHxLxfpCgbEdcSWZ66Pg73Sm04\\/9p3c7o9SSs7hchDYYatY9JUYfiPJDOdvCDPzyRjmciT+7WEIPuX8MFD3ha8yGwNHJ1rVg4EnhW54kq+iCv\\/+KUAoSFeOGhsd09UNrd5NHAndqTEtK7L6q6+ADpA1DffKJE7LxPXX1\\/i8z\\/dP1ZohmSIT1\\/dbF\\/8HTZ\\/ywBSZ0IX3FXTeAgKbAqEBfF9MMUg25TR0TdDN2tlw\\/TnV2vG4nvijQpICDBrezICq8JOeQjfq8GMP\\/kl+ikQf69ezNScovw7sKbRX6ahGgVWrCIbVi89myrYWe8hftqGViaiVB\\/rKoskbdg1eWpVwtubIjPsHHTcsAmbcpiE\\/YnPb\\/WNR+qSZnEApxQsxzz9iGMV0ZE7c1FoLaGQv3BQQGXys5bTqKlNjrw9ma1ICWevEgJ+A9dzU8DoT7cid+6VUihfKsS67IFoYLF4Veq2cmNr9Yd2uhW4LxHQyiB\\/vm6Zaysk6LupqE6FzBcFNpGcplbhAjrj76M+f22x9JFjzPR\\/zuA963xGPcW6d\\/ng\\/SvKX8SrQ1Ysk\\/UVa2As43BVKQ7bPqW+3TqThRxyuX9pRGYEsmFpHSMNFZh4hcUXqHn8cBWF20keerfH\\/YSDxTt\\/PqEj0+ZY6jJIYTCWk\\/cy3GA7RLKQi4E8UOx6edw\\/xl7lbCwBgznufCtcNAeWzHf0vysgwhRASLbA6k3oWGxQ9QGSAxx3BqL1Rs4q7ovq0+4wVcZLUaMSePM7rjBJWgMXUihKSmFgP007wu9VXO0Pl7Z+HPX8nIFR7Ley6qtRm6ZHbzWBzTa9ST3ltNTHmb7Ow4Foh0PeAXxbSOwkc+ARvLc1tmiRW1Uyd1dmEwviqbhEIMhQYd9xaQlhQR9wxk80jbp0UPj8DBUQaSSsLeitD7RTEQzVFlj6VdF5tN28kzZPYtJ0PUzIC7C1Iu1NtNlu2kRsPlCZqB22NybaaiZD0rgeo2JoHdXgxuYQzoRReWxlPKZ8s3BLe6vui6Lh9qxrDaCmg8Q2Vwhblq2k4AjHFD5fBXg4X+bwvkpQl8mQwcyzcZlK\\/V44\\/T1xTaa0Y3tH5zns78Ps\\/VPYwVTjIc1A0GHsaG8eRTbTIndMGQgbvV5oh0wluhscGYNXINr86zLkfnfawbX9Vx6UetuGBB6nkvGhrt\\/gjeU5R8QLgaT+kMP+OX3EfwpTjAFtmGMrRU1nCuex30k5yDEJsFijvVbKQNglX6qQKOWe4Hbv44C+HbI2dmdAAf85cIh0zfE4EeRte2YpO5R2+c9BXUylTze\\/09tqJLaZq8FbuIRcUfeP7V+jq8AbJRfg57hXdPdnIXdqDvHq3D0bMLbgFRaCScDMtaUfJYYJah3oH3jSujouVDsGfo6ixz3wn1mMh+ut1UogjJfpjl\\/YjwKIGpq+VHcM96Fj26VNDwr7ztvDUSTRfqn1PJDaI0WsJq+ARm0UMP24ucp+oLOVHeWjFt3xh+GSrNohOGucROPr4WHMOwnEuL74tn5jPzLmrPrVWPx+icQ==\",\"cypher\":2}";

        
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  
  function read426() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
         const headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Cookie": "isg=BCQkkOFdGYgEm2yfqMmZFKEn_yYWvUgnijy-Gj5FsO-y6cSzZs0Yt1pZr8dxKoB_; cna=/DTLGP2rxWICAXAKgiiNtGvp",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "*/*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.2.6 (iPhone; iOS 14.7.1; Scale/2.00)",
    "Accept-Language": "zh-Hans-CN;q=1"
};

         const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DYERG%2BZnUTYMDAPsrjAcGHcU5%26user_id%3D2019911775%26sn%3D78C6E34BF50A1848A67BA8399A29DC02653CF597%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DDDF81B66FDC72803470D23BDE16568D88E7B462C%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiRERGODFCNjZGREM3MjgwMzQ3MEQyM0JERTE2NTY4RDg4RTdCNDYyQyIsInNuIjoiNzhDNkUzNEJGNTBBMTg0OEE2N0JBODM5OUEyOURDMDI2NTNDRjU5NyIsImV4cCI6MTYyOTk4Nzk0NCwidXNlcklkIjoiMjAxOTkxMTc3NSIsImlhdCI6MTYyOTQ2OTU0NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.CDi86Qk0TbrgGPavmg63M8VNEn45S5RDbLcdmStN5sqPscwv2qP2tQX5J1IDjAJA58WfSyW-hqVLXo-dbYzOIQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D201102%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D828x1792%26soft_id%3D21%26utdid%3DYERG%2BZnUTYMDAPsrjAcGHcU5%26utype%3Dvip%26sdk%3D14.7.1&deliveryId=531&key=sq_app_ad&miniWua=HHnB_oPDl7V97Z4BLTJA6vAFK5ox7ovqO8E5MhoFivCuiP8A9TGiz7eeXTLhINpTFdnOjfAsZB6jtIdQP/GAdd7Ie8J9rJmNpWx/MnfSvqYhstXKr8b/9QhUnGbJyeSYfcAMAveNe3DQ3XQVvCVWAnbku4Q%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=C32C73C325FB5449A0D21A59F9C6320E&timestamp=1629470339&userId=2019911775&wua=HIVW_M3zDyJ/TAk/UG8v02eG7lEQuP/HNs9cTSxeSQjKhS4fuEX9rxInul6FW6hpyZNFVDhGXfpfp6ApQ8kF2h%2BJC1fK6xG5w/Alky%2BtmzVBBKnYQmy4tg8Cc78QVvnVUNFoCNYvpLcEzDqq8lotwlrluUEeGkRjikxZbJginOitxINczrfnKzOneT4B1WFt5LONtBk0Xw3IZ4gla6f70IjiMW5x6nAaH%2ByznTLW8PKu4USDILUXHZCaUtKjvuJv%2Bqznl7wgg3IlbE5cmEAfxGm5owgXj5Ebn6S0IdvzWt1p2y3rwPgfJ1FBAeaWyJK0YvbPWTJfgdQFjV5%2B5I7tf06JL/V9tflSZgfF3cl%2BuVtiWdz0%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await read426();
                         await $.wait(500);
                    }
                }


            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
function jsread() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.7.1&ustatus=1&umidtoken=wBpLRj5LOm%2BwcTV8NwdKbKszE0un6TI9&net_env=wifi&placeid=111111&user_id=2019911775&sn=C7C46257EE0D130587491634C830B4AB39C5E099&msv=10.0.0&brand=Apple&imei=0E72DF90618EC27BB135964C32C1037269B31639&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wRTcyREY5MDYxOEVDMjdCQjEzNTk2NEMzMkMxMDM3MjY5QjMxNjM5Iiwic24iOiJmYXN0X0M3QzQ2MjU3RUUwRDEzMDU4NzQ5MTYzNEM4MzBCNEFCMzlDNUUwOTkiLCJleHAiOjE2MzMyMzc5ODgsInVzZXJJZCI6IjIwMTk5MTE3NzUiLCJpYXQiOjE2MzI3MTk1ODgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.E7cx6-cL5nUcmsAVHRv4LCcelEXCGyrRsGzuJyTbfwFEtVOG3d7J1TwUp3XVraCPK5k6tHDjChYwAWd7SEu20w&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone11&wh=828x1792&utype=vip&utdid=YGbGS5w4dw4DAGWsyK50KUEx&idfa=00000000-0000-0000-0000-000000000000";
        const headers = {
   "Accept": "*/*",
   "Accept-Encoding": "gzip, deflate, br",
   "Connection": "keep-alive",
   "Content-Type": "application/x-www-form-urlencoded",
   "Cookie":"isg=BAcHatlJKsvs664o-qy7zVZBnL_RDNvuiU9QaNn0HRbwSD8K4dy8PHsa7I4Wu7Nm; cna=m+zSGUBJkU4CATywKfYHmAa1",
   "Host": "ocean.shuqireader.com",
   "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.7.1; Scale/2.00)",
   
   
};
       const body = "actId=355&miniWua=HHnB_uZSPkFf5FOSt7qRO9i0gCyA9%2BiqSeOzcNvv23OaVAt6eWcOTFPMuk6IpUl1tCJYoYTsjw/TGt4Zf0Jq1zGU2ivUlNDA/3z30kCxYDB8u/rlt%2Boif3myhxnscRaVk6eNqiqusjagpvGpCa5p2t1n6yg%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633012304&userId=2019911775&wua=ktgi_frRprHadpz3jPtnn1j/E8H%2BMtTI7lpXC/NHwSm4%2BBXhy7nUCJFvXihBKuBpbCJomoynrCXnylkn2hJlKGrFGDRz2TpoMouQsT8P37VataVSoKNvtuEb01FZv8p1XgIvLwaobbd4cNxp0Mdxxp/mQTjByNditpRC0weAxpDC6tFJ5qeNUM1LyxNJgxJMnd4XToQCU9SZIClNZPaVqgByoP3vKwFeMX1Qq9UtG3eG8gvnHymSOA/IfvQi9qFl7vGKfZ2YeXM7RBNA8N/H8sHqjS/wJ1PQYQpdxHLa/4UmTJRazZpfh4BBOdEL3Fajw45gyRS50TbW5HlHG3MWA4E7ecA%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await jsread();
                         await $.wait(500);
                    }
                }


            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
function dailysign() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone12,1__shuqi__v4.3.1.0) 828x1792 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.7.1&utdid=YERG%2BZnUTYMDAPsrjAcGHcU5&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2019911775&sn=78C6E34BF50A1848A67BA8399A29DC02653CF597&umidtoken=11pLbfxLOvozHjV8HI4SmuooxWoVgGYz&msv=8.0.0&brand=Apple&imei=DDF81B66FDC72803470D23BDE16568D88E7B462C&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiRERGODFCNjZGREM3MjgwMzQ3MEQyM0JERTE2NTY4RDg4RTdCNDYyQyIsInNuIjoiNzhDNkUzNEJGNTBBMTg0OEE2N0JBODM5OUEyOURDMDI2NTNDRjU5NyIsImV4cCI6MTYzMzExMjg2NywidXNlcklkIjoiMjAxOTkxMTc3NSIsImlhdCI6MTYzMjU5NDQ2Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.JvLZ53xchTPzIoQNZlkoShnLcYJBc0IKHP3DHMDmAd4P4XGnfteOZyWZssLONWRsWuqeE4CzBx_wRcrF5AVHkg&skinColor=23B383&platform=iOS&ver=210111&mod=iPhone11&statusBarHeight=44.000000&skinVersion=1&wh=828x1792&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "2005",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1632595879&position=501&signInType=1&wua=HIVW_%2Fcwn3yjQLuTMFINWc3PmezA8PscAJuBxTKs%2BthpCEjKSgnafDCutgnbkkM8Oe9ZdwlG%2BiPDE%2FYiXZdVqt4RQPQATuw%2BDiqGtEN9837JXGN8ptFU8q4jkeSzpDRMOSDbmJeBMF0kR%2F2wbYlJ%2BrzeCNO6IUkkM1U4NzzHGqFp8aWD4K5g4ujKUJg8AA9ZrY%2BWxaRQR%2BuKiiFyKK1k7O6Pq2s%2Fv5cpXOGUYnJcO%2FsZ3ELDyHtNQeo8Pc3YEzjuTjMuRE1uy9yOjhZxWJ97V3HPGH11Y8asMt5t3cdzwZx%2FWNnRAoAGBayBGrwfHI%2FLR1VJmYDmWnRzGDJrv7LagPEMsO9KpxeFnv0pbHsWMlVDnOD8%3D&miniWua=HHnB_rb4IGExQFZYfeJ2iEFzCYL5sLySfldthBQCik9tFFuHC3jG8tmxnOb2ZC9VPyLK%2B4EqwCwSDD99DhAvLURCwqSeKqnnGp1VMyyD%2FqLR52m5jN%2BNuRDEzzVHhQYO%2FpnF2aa3cn2CGbrWKb7kp0ohvwg%3D%3D&userId=2019911775&umidtoken=11pLbfxLOvozHjV8HI4SmuooxWoVgGYz&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1632595879&sqSv=1.0&sign=e469b42fab58e37291f7696b0acd125d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.7.1%26utdid%3DYERG%252BZnUTYMDAPsrjAcGHcU5%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2019911775%26sn%3D78C6E34BF50A1848A67BA8399A29DC02653CF597%26umidtoken%3D11pLbfxLOvozHjV8HI4SmuooxWoVgGYz%26msv%3D8.0.0%26brand%3DApple%26imei%3DDDF81B66FDC72803470D23BDE16568D88E7B462C%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiRERGODFCNjZGREM3MjgwMzQ3MEQyM0JERTE2NTY4RDg4RTdCNDYyQyIsInNuIjoiNzhDNkUzNEJGNTBBMTg0OEE2N0JBODM5OUEyOURDMDI2NTNDRjU5NyIsImV4cCI6MTYzMzExMjg2NywidXNlcklkIjoiMjAxOTkxMTc3NSIsImlhdCI6MTYzMjU5NDQ2Nywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.JvLZ53xchTPzIoQNZlkoShnLcYJBc0IKHP3DHMDmAd4P4XGnfteOZyWZssLONWRsWuqeE4CzBx_wRcrF5AVHkg%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D828x1792%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function vedioreward() {
    return new Promise((resolve, reject) => {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
            'Accept' : `*/*`,
            'Accept-Encoding' : `gzip, deflate, br`,
            'Connection' : `keep-alive`,
            'Content-Type' : `application/json`,
            'Host' : `api-access.pangolin-sdk-toutiao.com`,
            'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
            'Accept-Language' : `zh-Hans-CN;q=1`
            };
        const body = `{"message":"2yy2RWHeTX1orv8PzzO0ZVxpvvm1kUa90HPK75rxpdUC+iAO+enYKJCu5iDH1qvG5IlqembPLcYSKFP81iZ7lAFh8GNhe2Q9NgAo+Hwn4Z9QfxeobsBEXct1DpI\/uI8qLu0xEeS2UrgaIhANOR5sfssQ81nzVM4W0w2JV1bjHR13ZCUiWLXdN2Rn5kJTWh9VRav6K51+8e21OSZ26l43kLMKi\/Hb1LP0UK1Vg1LENy7N55MukWaVEF14PHTCR8Orty9NI5n5zbztbIE90kpER4b+KyqqL2hfLZzM5SaiYdh2GWWTk+H+moLu2nTz1gYoZtUfDX8XknUININqbJ98nBItABPdVwDBhtIKtN4QVCSjKd3r7K96w7lQ1A0hXxcPgfNvyBHvUm6U6\/\/Cq\/Bv0cN71I6Vle662B5xUyxB6V6Z8PDp2nazTySGDAObHYlYvB6qDZBXcQLo2AlnSP9PAdEO7+cQRGI68eR58A5Eb\/w5PEgCRpuo7aPakro4fqKaPtSp\/u\/3VK8Cc08\/sBYmy6NnyQeiZe4zkpWppHCAvYDEgmVnm1TpmuMQvdZxQ9ZUtHkzDPovFbNrw\/sq3olqIaXrPP7i4wQeQbJpOftuonPFNBwTuySPAwNK3TuPP3SaLjpoP5kq6SG8xbZvaFe41cvKt0bxSKkKh1cHF7HwE2nqQ725GB3JNvYGbkay2fzXJIiuXH1NfD2cjvXmuHtiHXCzr7Mc12tpTChAT76n5aKaV2Jr3EgH88U+vhmutO\/CIQ2rqpTIoy7V7WUMt+oV+6fKh2HR9fS6isx0y5qJMKfEqkgp0P53ZleGDZfM2leWijHsOxCDkS5coXkhd\/NSt5UjWMhGds297riY4o9UFBJRbc0cuEyd8HEMybzFoNmWSYu4Gg3ycBHTEyLolTMEJuhOVEF+gxoVy1SuA4eOLgd0VpigJVCutqOeflOrLockAL7oHzDbnwEYgykG0kbgpo0BCFRFjjl18M6TV4cqYMCBUTJXZWJ63qpoIlmw1mmSakfxIaie1se8FpxrZeQsP6x0t1pBlASinsSSupbt9QXclyeb5yhAI9Qm9ll42pcxcdFJTjAWvlr4c70CL9m+r32ge406ps1xy8ZuK4QWIec60ofGh9CswuEfoZQ21Ft2LhQurWGpCGxOPZv9J6ArLc80Atq4aphMZfonx2BOnl3c\/QW3liF5tYgFP\/MKdojq99xwGimK8ZqhXjwr50k1FwI1szZKaoUJSY29WzDh8VERQybHVEHObbcB\/TY0FKdJuHaBOH\/MD\/Y4b2SycPbVcQJrsR+rEpfmj8yFtZ+OxKzwEbUfWTwHtBgdTNtpipEMwBwlreqrf4Kk+sHg0aYFa7iFkUBAJyBjaxEOYF4ZHMvoCJ+U0LTjh0rukJx5OZa42CM8cnMLUuC2qhHy11mBXrRA51LRpXHJgEOZmJRYWNt1BeMM6hN7yYo5KNh+rTKSLeoceZ6kJhTuvKVdbDbyfD1Wv9hcE32PjoY88\/EeygEHVruOn6aD6y+6mkG7i84V9R6SKKGMjFKb15GjIApakOg\/Sj\/8ucrr1umqObJrTaek31lEm1MUX8RP6NbLjoY1c3DfE\/Oge+bU22yOORD8MYG1XHjlgjclQkRrNJb+ONzAEcI\/px01e4ANEPwsXQ1RcIM3WQmcIXHinZa5a4gmVS5R7NSAgpue3Fy5pNahY2o5avSrxgpFI3Yn5yyneTVn3D7TLql1TkBsFhYfOBKgV4pOYuw+NTWTz8z41zy\/eI0wi0mgWr+72TuDHDCk2UFopAbxYOscHct8CSX4ora\/8Cs1XiLvzaeMwRtQt3onuwwDgDPWtpCnbjU9jcufp+e0uXo7Kv\/YrHv21CXO61oKtQgQFbW0nMUim7oXD+r7Ks7siZY54+e3mPVzBIIjtoXQnhQVo4bosHeksbrCKahDOrFE6BQXWYjk3Ux41YjjDsslxasv3XPmKKe+u7MZnSQRzegqcURXv+NRjLRoKejI34o5mR2Zg58j0Zn5zgeuEj2pdpEIdi805WHndkBzDtL2D3u0E3++\/eStBWFS3OVeUVXveCNTH51yTbYhQwnfWIlBj7ciPrf8LsNgCVHS+NhmqbLdw0fmLi\/+U0RQv6eZdP2RHvB8uLVdZpgey3QHV6Z6Vxd376T+82ie3iXEKhEtsIa4YoZCla5NCk2h8v7RrUCHPnRcFdqAv5lfavx24Bv4ll1X3T8yxogIbAYZfDgFJ22OeJ0iSDi+fV+vqf59xPUyZcVmfYU32lfbXXT5rX1dUcgUKXJXRA5tRarZ0QP3jTU83S8YTLXtoYW1k3FAZ3Vw65Ti95c3KprbQ78co9NSmxKPBlSu7rPAVpptAFxvTtv9JYNczDqc1GV0w4aHymQqPU\/B\/1iF\/16IJFIJJsD6EIcMs+lwpDM\/EuHz7n\/sbd8tD3u0z2Q7VHsUz0rvCrE13uK5mL6hF9uD0\/Ce294\/PaeLfykvm66OE4QYXO9SJM86cQHY\/0cnubF56ZJmH5L52XuUg+vPnGyvdqX\/81\/T+AMwh9UPXiFdcXUxAPfY++Yp7+Mid7SEpavwo1mle9X9EHqpcVjSRLqxiQp7\/KgsHzSykJLW53ZwE3aPaTcdkJeS7A6FFwPB1dcmeBhueuncu5ea6ZZxg6r9XjuP9RiClXVZoMCnLt0YU5\/tz6f7Jle7dKw28koli\/67UFcUdRCvtOlcZZ3aM6vlkzg0tj56Z\/2kkIp+EI1fxirKlmZFd00Q+hrwuLqS7JamK3jn9n+JcRIFJwNN7cYRL1I5jxq1MOCBrz0TjVJBxLyp7nEpa6nsEjL+XKOsIXITimvIHjGo5TRHg+mEdimcWIrNQn+xjD+yS06j+OJJCXkOfEWFmF\/bibUptWk2gZfLkSNun1fow9TEAeylEIxgbc80IIEnquWjBgSuUq2ChsXwFquB\/jhAJhWJUxLnjrY9qy3yizyPMYJvoLkrx61FgepHajE1vcbDIF\/Oao63iCeIGi\/iddoRjq0SxciSLbyvjCaRqu6KngQDUt\/SJTUYJoSffb87F2a1z0tdUxi5QMQpLVxe48pBEbr1Eh\/i72Mm\/Vd0nBbDfhjmyIcBqQKy0NhU6j5DP4XRyvmnZCZP3U\/XIsFDmCzQE4+7jxPjosZNICK\/Bc2TMvXSbMLPxcinsIYQKOfHKEnH74FSzQm8witoSIPVDNyiDoZQfxbwu3jz7\/0NPflwFXvcMy1MrF56G6AOxrXv7V4P9OiOhLthOvJ3XiUICzrYVe0VN08qI3vNlsY9dI8VDZB\/QXh+L10rS6qvIeGv+A8VTNa3Am\/Bi0wSsd7r9XT5vSrKzqciUPCzlkNu\/9aAh7TQYSsW\/pGmPqvAqEFItiAzjvyl4wCTxVki1egCxKdE3FXtZHB31C4f2QZwEVtlD\/adDBbSZL9Oxhpcvd+xInfs7kjLTlwF\/h1JGr6HEeQDq0F5Nqf4JuFVtJY4xv93MA3J3ksznxz6TelwngWWOZH\/fK57c8E1as9stD64QQqk3hJeJyiQkaI0rNaBkT0obQmk0DXJ\/+CVo\/yTYqJrNH5rRbNc0IzrPFT2QX7YmKjgT38W6xWT4b+fpHA7cjAyAYgUJl6fZt7WVBYX+quMWG7XPVAKKMRUCMLhxD1JSmY9x7CLlRSOf\/cHKxzKJY3y46lVZdVqeHO7XVkVkg9tVpn5utCIwt\/pVVjkUfInGhtR3+cFIoRPPyNW\/\/DDSg0eJKyKX64EKVvuJaELYknnBtlO6cC3CphmPijrVg+tCN1hrebPewRDugJhcoehOPdSPsLGBJ5pSMZNy2Lx\/9Or16UTqoJomvQngsxTgzuhs\/KLZKNmo+SMK5Gfgy1L3crJZc6rpuJ2QIgnE4W9iSRtGI1MDAT4u6jEmjIW26qH837C+wWHJBvsLhEOhr3Hw+ht79sBjYjYgzgJqb\/hZiOwE0aHc+FxbygOxeSwEJcWjQuzVK5Ky+NaRq544ezZil2BAaJYH1r59Q5i5HDtrKZ3IA+41E8HNxFf1Z824m4PmnieQWixR\/krYpUKml9dI2svmCOarz\/cLtTIrst2EYuO9OGGgQzxz3CkUnAP1s1h3B5wJEqbAGsaYHfYrSKqdBKbG2niCC+DVU0Epx27vEboXFZirTZPYnfcMs25um94GIDPtNTgZS7dwefNqe8w+pTN1OH76IuNJS0cBhkwDilUkDnoCEfEhjIxxfkVgd83\/ia+rhBD6F2+lnzPRsgnpW4SHmFYlbpyOUj4mzvfAG\/uPzLQLizosr9yqZs3hL788a3781oh71pbE8vLjEJYtHzpIT7uN70FtFDrEpk1ucsEeGozCpupOghkAmCoDpF9XQAZr9l\/mveFg81L4aN3IDibnyBlu9xcSYE9GtmME5IA\/qDTBKRO1\/KOADE6SOHsfse\/2F0ZqFQl9+MUr8esZ9PbAYrbrCWKwNIbBGkneF\/7YeG1\/STC3pAfdmeUWsPZtnjnevrI2K91H8fO3wfHc+k0knmF6o\/D2cwRx215xhrHIzMeIsnG5cIeJ0SCwQpSVqWRHyQb5\/5LBEnC4RP9G6rmsVyVrovOf5b7qABtUZhny8nevn5+QsofADlGiG7Gy596N20VegydyGke3gmQeI11p4ZOSR67TY\/\/KyOACA9fPbIrsqN3rOtKydjrKiGR\/6pssePESfGYALkD0DV\/KvEv129JBS88tNp9baFtb\/EGO5IKA6gcbAtIpa8xHAWnlc\/aYzuaPctEEG\/v+U\/cjsxiERgqTL2Qof7kRz0pk206eS0OERkfgBZrmg9Qu1mOpAud3ks5CrTCHxErLNic7+EAiccnaMqRvN8y+pRedyYdJ+IXBwDAq2ozc2ijelm2WyktxkQoUdsX1Pvgl0vEJe7MVNHfzFbE4LqLflA==","cypher":2}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function vediorewarddraw() {
    return new Promise((resolve, reject) => {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
            'Accept' : `*/*`,
            'Accept-Encoding' : `gzip, deflate, br`,
            'Connection' : `keep-alive`,
            'Content-Type' : `application/json`,
            'Host' : `api-access.pangolin-sdk-toutiao.com`,
            'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
            'Accept-Language' : `zh-Hans-CN;q=1`
            };
        const body = `{"message":"2HDtxY9OOG2Ox8dlqz9y77ra6VyZf6MzNaMGWp1WnNhmVMjQS9NW6gMCIOOwUkx5NxguH7vGHvuB4cfZrvhRnyllN0rr3pi2FncUh5UpMQKzD68b5IRJgabWUdHA5mQyEvYGY4Xhvv7wCvN4+PlYOyX7kuh96WT4fpbAMr3ePPrsvyOXgbYShKoUH0dKauPFLrT6c7eLgvldlyxfDeMtIi\/qhZ1WASlh0mt8Zc5IfXVvSWdhULXuIvMiZr\/+gjvs2xiOSU9nm9eW+XIG5\/kVKOvIVSCNpKtXQqB92AwqOPdqUgJB7ZtWhhk7iDpc9dM6Du9GKl8kqvGG0hU3ctAAL3j5VqpDwE9GN9LqpnhrUG5zhtcYsZoQgkUqGlmA7qqcaKXBzZW9zgpt6CbewBrkkSKNpCBkkeLNvk8i9Cz6bmvfQAIjyXKIKFVvGmd+RECdlNRmMW\/G8ITO\/dNZApqbP0DQSlYyWEwJzKEVLskbJ29YhBuI5i2qA+xk+oQnTI9nu1MFPtLjRvZq0or0YlrFnSlynKIaaz\/x2oDpfO0c3mziQ8E\/vLwJ2drHxG6XrW7AiKh27m6Oc3K7n4kEuj9eonx9Y\/v9JunVsJ8zjCdSFLWJ0LY9A+vlW+USuLLigBMrky\/nsbMphBbowcj5ho+LfxTg\/tnVRJYvoG14hcuXCtt7aawKo3C3bnDkZklWicrJNbK5rXRlHIQxkmKNlUE9xKXFdBzkspr2U2\/Lfrj8dm8bcjDNO5wF6rqY4Lw5rjnV1xI4F9vfjQU2mBA4ptzaVYdS0EsDDN+om6a8V+xg33WYco73Yog4dtpXMmaP6ZPDtYAFwZ3LjNKQ02CtC5oLRcodUvvg45qZApkyLtR\/pFwgqVt0jbujhEJ6c5w4hYt7+entV6VdKQRoYWnMddQgRCGy9xUaUUYO\/TLNZEnBKs+XQt2C8Iho02mBuJkmed3OHadPs9WkS+9lezzfu+WsOediwHoq0QJ1LkD5ADFw5ZRBokeoUqarP0CTFDXR1FHdMK5A6wo1UrE3JNYdlxO\/NEDaL+WSMggIoMpOg4c2A+t2SigzVHC1wH75NVDvWsHs5J2bS+AwloCoI7wWmxNizyRx2ZNU0ndMUqrR4SqaBkrEWyYgOLGNnD5ws9RzheIjF7Q6ci9avAQtr6fKJ60TfQBGg8J6bs750b6Of3n5OpVV8fiSuTtw9F++sw5XvtfHaC7OighDfNS6SFhM0MtZ\/TkZ02bGTB1VVZOGhacbzff1iIBT1Pu7a0kLQtbnDhnh6wealWQJKCF9\/QvHpMWYlREHXWbw0m3P5U1ilusiP7WttWeSDDQOo5fTkSNE63Elk4VvaW9kgzKnPGzAY4ZEWWGbwd9X9gEtR09YT+uXO\/Dh0Uqghmbkprd6OjDM0aydrext0+ePMZJGYB2X6Tt4FuKkW7vivrExBOR9PgBp72X1vzwYpaYdEo6wWGjd\/mrRIjQbWO\/Xt3bjb5fV1N9MIFxEyTyly0\/3a5+whtzEw\/qW9EdLLuEEN0o5RYytmxKnezpYbEpetRJBq3aFvepdxJl12qaKmBENKvt6f2tD6t\/iGzshR44qjGZzbDBq2aI\/nP7HvOCWZblOZ5Lrig4Q9QxfmmXtrLrP+C82SJzXZ0shc4ZVe9jONLU7agk1f0\/ZSL+LI3oJxjzg5atmHfhz2wf8CwsEyqAFsofAGeVtxPeistBfwF2jKb3wpQMOW74CaYR0duOlvUVYTt9OU11pzE1whc0cj4Icu0Juj6bi3eUT4sL7QQZUw4sgUemncA96RPTn1\/fuaevYIPGb559DRKusCQrBK09e8DtwKtQ0Z3cUgoEZZ+HPyOfPBgPwkQRW4ZHAWc7wCPdlxh8vlFzY6bkh8iw9bBALgRfWP5u5yRZCcQrD78FHMm4o7JLS6DBWd6m9voXEPZjzNpqFvOoNjDdoKVqSf5uQH5Lsd3Iutf1elIKDy+3kxlQGaaP820py8VP9b4+u3O1IRZroByTYSmW5TB7uk0\/TAFanaBQmVWyc5AsyFYe84DibwfW6ev+\/PM6IWT58WIS32CWy\/Esxm7OHfZsugz8gVbSM8IFW52bCdYgWHWkrqdOJWjP3+kkYUh4BvgzYo5jG7+Eks\/8oTNF6hwgV1AeqiHUvZpwSn4x63ZCNTMwfpR1sM8Wp3N5PAIyndzoG4CBzKBNNDyjeC0I3kW2ARliepbaicpmgJYXMt+h87L4yLvZ9U3xBDR71vRiBiss7qW\/SoVqZj3X5sDCIFwPXF6CZOvwaTJViywtxrmZJtO8oFFcK\/WYxmxSjZhNJvqfLdFIfQMVpcd53YyhbeUmuZXTEp1nk0MzLuzh4VoEW17ce\/mCTpKtxrk8Ex0XlSd+f7GlcjtbRT1lBF+cJ0Y\/KtqqN5CWa5bIPh6ilMYqG13mhYdSwlndGZXV3A\/r\/saXnwlYB39+sVfyjhKusPKe7GIFMjLTGq7ibBKWVW5EkbSYcPIHNGX15ARk9E1MxTX\/q9RRwltCCMRsW8jQk53v2XPI2gtpWAos3HElI7LKbVGXIY2hFC7Jz1NL\/rrctvpm5c3ynyMx5mzdg\/2oPFVE1WX4SWPqHDQPG0LX3sPaPdE0PDeUVtYJAH80mOsiEMU5QjIjCY7eDbpX6HDTV4+guW7n8WsxH2QztTJZ+WLOeQXPG6KKyapE9DsNmE7a2tJoJyoJWI8s18ADBtqs\/EoFX05dczay9uIUu9R4Hzc94JjLjxMjtCEBiNiVGI2E7qjWTQ6V\/+xd70WWZ4oynb5W5nA3W9HI9MXAoSzLA5ZxJDXThRQ33x\/DbheL4zIYrWd0gaJF2PvKygYZDXshHaf7lmbb33V3UbFMK7p\/3VkhdQSJah7XpCftCQ7NOMQwutYDJxGerFWYpRiK82w1OMRzKgCPnnYSDvi17cu9mQwOT6ntzWzJQohDm++FWQYVts7jiqrMzTe2YX6pBUqnBsX+4m4lle7eRnf0G1Twsn2gGnRTyXnP90CKtzmYs0IhqZ\/IzA8RHoQp\/ljx\/silXtN9xbma+5xSlrCrJBfqNM7YwmAcPTOQpK829CDMXjkd+4xjI+sYnPAlvsLekBa4BNXfjChFpsI46M+bbVFP91tXK\/ITqGCyjVvmrH\/D1djT7pCrXwXVKaNG\/YRLB+73N86uvCnT1xr7YBQfxOWxGqG8Tz\/ykI98WrtcLRE7AXJQn48hP9U9lHliIpGXf1z8S3ao466YQkn6hs\/zR+5Eb57+H6cgH4oby76p0lSnCS2TkzgtAZyp1ls7l9O72UtxtrmH26NHlkXQeS06CQPxufWjETaIClcpdJRXzSjQDwYzk7r\/OwnBNnczlXBjdkAV3228FJFmybepwMa7DnAUzdjm7DckOpf3ipyo9F5WNsokzjoN2mC3wF4rotYBI732Dq0A0ugrPDFegLW\/uLfo6e0bggfoLFpEHxxHS8sr3NV4u4bO2QB2NOVftOU1j31yQ6Q7rWLqlyaMyeu3LRjS6\/bAdBe0KinmMNYYOWt65w0bVYt3r5D\/Wb33LbOqPEEWqTqF0Nvhm1aDs6ZIDl4smR3tNyY1YvKuRG4WIOBSQfn63cWz5Li5Xrro38aau3YO0dE7WRvKJAzL4ZCwEOM6zYUlrzrEJaHy8j2LW1N\/cXmEmwbm1R1sr7XzvyldpOinqcHh61yJLZkhX4PHF8Ms7tJIhhnynvT5MTsA6b7E5PooWJ0wVP5Auir3h3cTQiL8aE9P9jz9RHYcXJUaoJ+Sl3TmHHPC5LH1v1KocQAxq+84a3DFZzNU4QQxwPHY2uQV0JeL6LZk7WTKQ8AQFnIapJQ\/UhTkArG02OYem2Q15wPZdUKCPSMFuMi1qCxc\/U0hD4SdROLSQhzVTLJKyaIwm52+vwN28dDF3jBcd1XXiAX6JYPxV9WmMbHylEVeVbaPCy3Np9WfNgyoozUXOXZ3GNsWrregaR1APLeDbNPgsRPDRAcS0GKF+mCg4Q6YAHTBQ+78gMbB3SXysXrnsdusTvtua2ZIhvybcCsh+DKGmnJU0ewlWN+ZLMxNyfyFb6k4HVEShEbNSu6xaGwgL8XMz8cl2BbA49NOiNbiiX+ovYU79bMbrux8+5Tp2+tAtU1E+hrz4af11zEwE3jLBgdCbVA3AZOkDNEr+879HTKhvC1gx0Sj02wsfnYSoQJ74HbTKf9\/5TLnrI3S36bIGRgqpGuPZJyG4h8YWq2+Deav5wtVFelby0ve6J\/JhNGqrzP0hISZy6t3EOA5X7e570dcdLDb+1GEljPAyt3YKkTzPupf0kc45+BQkEehDS4xLzZo6GHaPmXz3WKrVi0FfU65o28pOkw6UO2FdqoYpB1cYhBkKcxo5AY2N0\/TkEB5WaG0c9lIfpy9gsB+H4Go+Bb8f+9hZE79QnwqOQzmp4XilvyWopqJldxkagoc8diprUqEBMaDpJOCnAd+4AuJMB9yMfXvHtE3Joifmwc6GpPEJMxwATaFrNttFK+22+Tp02hjM\/4Wr0MyHJYszu52OdcniarVpfHGWoRa+c8VmHxUawFkUHjd\/NMO1s9E6wgPAZ9usNkWvuYYBBFgQlgPhplh5RYz6Brbd1U15G5H1W3+rSY\/4fip9av4avuWaZdH\/LO1\/7UWgvU1YHc0IINxWqRD6czyKA6LLwtdP+Q8DLMff3NFAFlOO9cgZfriDuycjUQaq2c9dyVNqaKl+VotSFWS+\/7ENV2dT0eTW8ippJQg2g1FI7axrqIMfnBaz2omSCdVgGpRykgNnGySZaE1LGWHBUJqQxrl3gb\/NxKzZ2LEVQ\/5mgiq\/m7YIDjGch9Cyglw4tRvFUWS+4aHuzRtRZ8bWnVd6xQiWERRkFKKQ=","cypher":2}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function drawreward() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
        const headers = {
            'Origin' : `https://render-web.shuqireader.com`,
            'Accept-Encoding' : `gzip, deflate, br`,
            'Connection' : `keep-alive`,
            'Content-Type' : `application/x-www-form-urlencoded`,
            'Accept' : `application/json, text/plain, */*`,
            'Host' : `ocean.shuqireader.com`,
            'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone12,1__shuqi__v4.3.1.0) 828x1792 Winding(WV_3) WK`,
            'Referer' : `https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.7.1&utdid=YERG%2BZnUTYMDAPsrjAcGHcU5&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2019911775&sn=78C6E34BF50A1848A67BA8399A29DC02653CF597&umidtoken=2sNLafNLOjUYqjV72J2W7FVf7LPTyjmL&msv=8.0.0&brand=Apple&imei=DDF81B66FDC72803470D23BDE16568D88E7B462C&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiRERGODFCNjZGREM3MjgwMzQ3MEQyM0JERTE2NTY4RDg4RTdCNDYyQyIsInNuIjoiNzhDNkUzNEJGNTBBMTg0OEE2N0JBODM5OUEyOURDMDI2NTNDRjU5NyIsImV4cCI6MTYzMTk1MDM5NiwidXNlcklkIjoiMjAxOTkxMTc3NSIsImlhdCI6MTYzMTQzMTk5Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.ayI_vmmoApQB18FhxxU0TLZtyLf6synqDd6jDhZp7LyH2cOq0yUOqkGfjKuRqogrDqDgLZnvUnmQ5h8qOwmEcA&skinColor=23B383&platform=iOS&ver=210111&mod=iPhone11&statusBarHeight=44.000000&skinVersion=1&wh=828x1792&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000`,
            'Accept-Language' : `zh-cn`
            };
        const body = `activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_sz6bw%2FGs%2F82LSGTplcU3QeihtW2b%2FGIOhHDuY0%2BWNyAcmwXOQWsQRIkeskCpplZU6JQOuUUw45MxalropzsBKE%2Fh46m7eK3fqi9rPyhFzoDHWXk8hCRX13RTlNeumiDb4H1l05sMokY%2FVWtynMvdBVyNWu32CH%2FjW5mqDwfarwu9vZej0yHQvf8E7jbLoSXsQOjpt8qGfdRU7C1t1P07BkruBFhb5KJN%2F2s7g2S0PsOLk8u%2FUP1Wj%2FeOhv2JTh1Xf61Y3wVgQ6jxpR%2BVII5zXBR0HZkfBhAu8mHrvnGM6wUCWRDcN0CdGJKOjIeEmLbg8UaPCEDtfC7bk89Z4X9%2FfmJZWb4%2FE%2BkINQneiPtvOXo%3D&ua=&miniWua=HHnB_aY81EMKDTC6huek9OOqvy1E6MeR%2BFNr74TlIhy6OmSNBZBwPuxvlugSbXrCkhFe3IULC%2B2Yek45WfNVWDZNElCcpQDscbIwQrfiErYBph8WQcS94xvVxY60Z1JlSLAhHk3AJPniXfvifzPif9AtGyg%3D%3D&userId=2019911775&umidtoken=2sNLafNLOjUYqjV72J2W7FVf7LPTyjmL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1631432265&sqSv=1.0&sign=5636383966dfeef8a0aba99c6788b663&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.7.1%26utdid%3DYERG%252BZnUTYMDAPsrjAcGHcU5%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2019911775%26sn%3D78C6E34BF50A1848A67BA8399A29DC02653CF597%26umidtoken%3D2sNLafNLOjUYqjV72J2W7FVf7LPTyjmL%26msv%3D8.0.0%26brand%3DApple%26imei%3DDDF81B66FDC72803470D23BDE16568D88E7B462C%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiRERGODFCNjZGREM3MjgwMzQ3MEQyM0JERTE2NTY4RDg4RTdCNDYyQyIsInNuIjoiNzhDNkUzNEJGNTBBMTg0OEE2N0JBODM5OUEyOURDMDI2NTNDRjU5NyIsImV4cCI6MTYzMTk1MDM5NiwidXNlcklkIjoiMjAxOTkxMTc3NSIsImlhdCI6MTYzMTQzMTk5Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.ayI_vmmoApQB18FhxxU0TLZtyLf6synqDd6jDhZp7LyH2cOq0yUOqkGfjKuRqogrDqDgLZnvUnmQ5h8qOwmEcA%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D828x1792%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsshucheng() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.7.1&ustatus=1&umidtoken=wBpLRj5LOm%2BwcTV8NwdKbKszE0un6TI9&net_env=wifi&placeid=111111&user_id=2019911775&sn=C7C46257EE0D130587491634C830B4AB39C5E099&msv=10.0.0&brand=Apple&imei=0E72DF90618EC27BB135964C32C1037269B31639&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wRTcyREY5MDYxOEVDMjdCQjEzNTk2NEMzMkMxMDM3MjY5QjMxNjM5Iiwic24iOiJmYXN0X0M3QzQ2MjU3RUUwRDEzMDU4NzQ5MTYzNEM4MzBCNEFCMzlDNUUwOTkiLCJleHAiOjE2MzMyMzc5ODgsInVzZXJJZCI6IjIwMTk5MTE3NzUiLCJpYXQiOjE2MzI3MTk1ODgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.E7cx6-cL5nUcmsAVHRv4LCcelEXCGyrRsGzuJyTbfwFEtVOG3d7J1TwUp3XVraCPK5k6tHDjChYwAWd7SEu20w&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone11&wh=828x1792&utype=vip&utdid=YGbGS5w4dw4DAGWsyK50KUEx&idfa=00000000-0000-0000-0000-000000000000";
        const headers = {
            "Cookie": "isg=BP7-F2jaE_xIike36_8yupeCRRBAP8K56Kx5l6gHc8EVS44lEM83ydthx5GH6LrR; cna=m+zSGUBJkU4CATywKfYHmAa1",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.7.1; Scale/2.00)",
            
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2019911775";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
function jsshare() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone12,1__shuqi__v1.0.5.0) 828x1792 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.7.1&ustatus=1&umidtoken=XE5LLDBLOsvarTV7bYLHqXpS6zTtrJUZ&net_env=wifi&placeid=111111&user_id=2050108665&sn=C7C46257EE0D130587491634C830B4AB39C5E099&msv=10.0.0&brand=Apple&imei=0E72DF90618EC27BB135964C32C1037269B31639&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwMTA4NjY1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wRTcyREY5MDYxOEVDMjdCQjEzNTk2NEMzMkMxMDM3MjY5QjMxNjM5Iiwic24iOiJmYXN0X0M3QzQ2MjU3RUUwRDEzMDU4NzQ5MTYzNEM4MzBCNEFCMzlDNUUwOTkiLCJleHAiOjE2MjgzNDA5ODIsInVzZXJJZCI6IjIwNTAxMDg2NjUiLCJpYXQiOjE2Mjc4MjI1ODIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9._EpkeiOdsl4OtYY9zv5H1uPCcCK3VJsKslRc9tIucj81m9hK-QYvJZXm6J8ZAe0xIxEOd4apUwv8b5sgHSZDcg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhone11&wh=828x1792&utype=vip&utdid=YGbGS5w4dw4DAGWsyK50KUEx&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "1802",
            "Accept-Language": "zh-cn"
        };
        const body = "actTaskId=327&wua=ktgi_w9EDyiFP4g13UfvN5cp9o1yGZrg7S8OuGyi6QTkEFhq%2FwhgCotM%2FhJQcY7wcAlGcnphw4PIaD26U%2FzctfzJ%2BsBkJfb4w%2FjKxu0de%2B%2BDauopqzqjP0BhEm6hBNrEYMe%2Bmjy9yq3IYmpgAF5CnmgdiRfolcZ%2BV%2BLNxq%2Bd6mZpKIYfIXxvDHhj8CSSlFvuiuxHdsoR4eO5Ap1ZSciwUQWzS9oYSRE6HB1H3ZRbyyR3z9FVRgHeoQuJUghC886rkSSK%2F3gIF3Q88uxh8bJCwb2evVbkf2pKq4N9ERHfCQgrlmxlkee5POS5oWp7TYgs0AUMTlF3foDnXi74m3CtYgd7IbC%2FmgfUfmVcl%2BlaIPgxTqwA%3D&ua=&miniWua=HHnB_J47mBSoqsxsZRug0dYZpsGmxz8COrrIUGqVjLXVwHQnMgU7GKdm1m2AHJKtsCTjTmwlnZBwoNtKf6dmESOvXveAI1GIYl%2FtnFB4Y3sFP48rl2gR44RknJ%2F5zkOz7IHLb464pA7G6oFVddVIsKwTD6w%3D%3D&userId=2050108665&umidtoken=XE5LLDBLOsvarTV7bYLHqXpS6zTtrJUZ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629900268&sqSv=1.0&sign=c3bdcd31bf792deafb35e48a1f4d6f9b&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.7.1%26ustatus%3D1%26umidtoken%3DXE5LLDBLOsvarTV7bYLHqXpS6zTtrJUZ%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2050108665%26sn%3DC7C46257EE0D130587491634C830B4AB39C5E099%26msv%3D10.0.0%26brand%3DApple%26imei%3D0E72DF90618EC27BB135964C32C1037269B31639%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUwMTA4NjY1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF8wRTcyREY5MDYxOEVDMjdCQjEzNTk2NEMzMkMxMDM3MjY5QjMxNjM5Iiwic24iOiJmYXN0X0M3QzQ2MjU3RUUwRDEzMDU4NzQ5MTYzNEM4MzBCNEFCMzlDNUUwOTkiLCJleHAiOjE2MjgzNDA5ODIsInVzZXJJZCI6IjIwNTAxMDg2NjUiLCJpYXQiOjE2Mjc4MjI1ODIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9._EpkeiOdsl4OtYY9zv5H1uPCcCK3VJsKslRc9tIucj81m9hK-QYvJZXm6J8ZAe0xIxEOd4apUwv8b5sgHSZDcg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone11%26wh%3D828x1792%26utype%3Dvip%26utdid%3DYGbGS5w4dw4DAGWsyK50KUEx%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
function share() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPhone12,1__shuqi__v4.3.1.0) 828x1792 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.7.1&utdid=YERG%2BZnUTYMDAPsrjAcGHcU5&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2019911775&sn=78C6E34BF50A1848A67BA8399A29DC02653CF597&umidtoken=%2FL1LEA1LOnmKAjV7fcbcTCfPkP0Axoa3&msv=8.0.0&brand=Apple&imei=DDF81B66FDC72803470D23BDE16568D88E7B462C&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiRERGODFCNjZGREM3MjgwMzQ3MEQyM0JERTE2NTY4RDg4RTdCNDYyQyIsInNuIjoiNzhDNkUzNEJGNTBBMTg0OEE2N0JBODM5OUEyOURDMDI2NTNDRjU5NyIsImV4cCI6MTYzMDQxODQwNSwidXNlcklkIjoiMjAxOTkxMTc3NSIsImlhdCI6MTYyOTkwMDAwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rr-j-NyszKpZownmYJ69FpIBr1SVtTZq8OiAQIHkgQnkpa6rSSJGl6u-J2LwoaWx5MycqbMj-1bKNpzm8VvtTA&skinColor=23B383&platform=iOS&ver=210111&mod=iPhone11&statusBarHeight=44.000000&skinVersion=1&wh=828x1792&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
    
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=304&wua=HIVW_%2FXPGBKi2smvpZJxadETwy9hCKlBWg78qZi4oQ7K8EJeZKhPTBl98gD4xM9nSZXvwh6xA67j4hmvoSvSOYRH%2BrvIhtl%2Fjqcgr4%2BIKVWMMqWQ%2B4Lw0SOiPS7RojCqBUtaDdT%2Bg%2Byc7dVt2IW1%2BlYjM%2FnaSt45pv2ADo9XzXuxLAXwltr4qQj0bX7zO3uVcsI0eGkkC5DusiMHGDvHDMi0djkOZt7Iy6AHWSRVFszbZcuyprkuk2vLudJqsV3UUO%2BC1xOAX%2Bnf3pJDn5TIknq0MMo%2FUVLUq3MfOKhFEKZMgFzKBuV%2FqLKhsNg5QgBO966b9TPBskVRvMCh5z5idADk2Mbjba8vINJTQpI3nxLIcKqM%3D&ua=&miniWua=HHnB_98jyfWIefiITDqwqfklB94tRjyCCsV05CZjRVmPYjIoRgOBbLKh4FAr02IVrYIWpDAkbVTU%2FUt%2B4sJMMWQvcS32GdUJfNE8B0gkb21gjmAkwL1Nmu8WDh8E0H%2FrKAaKaxI9koc9fqaXWRbhR1rc7wg%3D%3D&userId=2019911775&umidtoken=%252FL1LEA1LOnmKAjV7fcbcTCfPkP0Axoa3&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629903418&sqSv=1.0&sign=715c6ae517d395993142f0689dad8296&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.7.1%26utdid%3DYERG%252BZnUTYMDAPsrjAcGHcU5%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2019911775%26sn%3D78C6E34BF50A1848A67BA8399A29DC02653CF597%26umidtoken%3D%25252FL1LEA1LOnmKAjV7fcbcTCfPkP0Axoa3%26msv%3D8.0.0%26brand%3DApple%26imei%3DDDF81B66FDC72803470D23BDE16568D88E7B462C%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiRERGODFCNjZGREM3MjgwMzQ3MEQyM0JERTE2NTY4RDg4RTdCNDYyQyIsInNuIjoiNzhDNkUzNEJGNTBBMTg0OEE2N0JBODM5OUEyOURDMDI2NTNDRjU5NyIsImV4cCI6MTYzMDQxODQwNSwidXNlcklkIjoiMjAxOTkxMTc3NSIsImlhdCI6MTYyOTkwMDAwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rr-j-NyszKpZownmYJ69FpIBr1SVtTZq8OiAQIHkgQnkpa6rSSJGl6u-J2LwoaWx5MycqbMj-1bKNpzm8VvtTA%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D828x1792%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
function receive() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.0.0) 1125x2436 Winding(WV_6) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.7.1&utdid=YERG%2BZnUTYMDAPsrjAcGHcU5&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2019911775&sn=78C6E34BF50A1848A67BA8399A29DC02653CF597&umidtoken=%2FL1LEA1LOnmKAjV7fcbcTCfPkP0Axoa3&msv=8.0.0&brand=Apple&imei=DDF81B66FDC72803470D23BDE16568D88E7B462C&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiRERGODFCNjZGREM3MjgwMzQ3MEQyM0JERTE2NTY4RDg4RTdCNDYyQyIsInNuIjoiNzhDNkUzNEJGNTBBMTg0OEE2N0JBODM5OUEyOURDMDI2NTNDRjU5NyIsImV4cCI6MTYzMDQxODQwNSwidXNlcklkIjoiMjAxOTkxMTc3NSIsImlhdCI6MTYyOTkwMDAwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rr-j-NyszKpZownmYJ69FpIBr1SVtTZq8OiAQIHkgQnkpa6rSSJGl6u-J2LwoaWx5MycqbMj-1bKNpzm8VvtTA&skinColor=23B383&platform=iOS&ver=210111&mod=iPhone11&statusBarHeight=44.000000&skinVersion=1&wh=828x1792&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
    
    "Accept-Language": "zh-cn"
};
         const body = "src=204&userId=2019911775&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1629903954&sqSv=1.0&sign=5508813d9ccb44851a4bf371146601f0&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.7.1%26utdid%3DYERG%252BZnUTYMDAPsrjAcGHcU5%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2019911775%26sn%3D78C6E34BF50A1848A67BA8399A29DC02653CF597%26umidtoken%3D%25252FL1LEA1LOnmKAjV7fcbcTCfPkP0Axoa3%26msv%3D8.0.0%26brand%3DApple%26imei%3DDDF81B66FDC72803470D23BDE16568D88E7B462C%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDE5OTExNzc1IiwidXRkaWQiOiIiLCJpbWVpIjoiRERGODFCNjZGREM3MjgwMzQ3MEQyM0JERTE2NTY4RDg4RTdCNDYyQyIsInNuIjoiNzhDNkUzNEJGNTBBMTg0OEE2N0JBODM5OUEyOURDMDI2NTNDRjU5NyIsImV4cCI6MTYzMDQxODQwNSwidXNlcklkIjoiMjAxOTkxMTc3NSIsImlhdCI6MTYyOTkwMDAwNSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.rr-j-NyszKpZownmYJ69FpIBr1SVtTZq8OiAQIHkgQnkpa6rSSJGl6u-J2LwoaWx5MycqbMj-1bKNpzm8VvtTA%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DiPhone11%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D828x1792%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}