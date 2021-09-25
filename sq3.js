
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
    
    //await share();
    //await $.wait(1000);
    //await jsshare();
    //await $.wait(1000);
    await jsdailysign();
    await $.wait(2000)
    await jsshucheng();
    await $.wait(1000);
    for(let i=0;i<8;i++)
    {
        await vedioreward426();
        await $.wait(1000);
    }
    for (let i = 0; i < 9; i++) {
        await vedioreward();
        await $.wait(30000);
        await vediorewarddraw();
        await $.wait(1000);
        await drawreward();
        await $.wait(30000);
    }
    await jsread()
    //await $.wait(1000);
    //await read426();
    await receive();
    await $.wait(1000);
    

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
            "User-Agent": "Mozilla/5.0 (iPad; CPU OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            "Content-Length": "4717",
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = `{"message":"2lMctNpFlqiydvjh2cxTqu+d5KiK0HoCnbtn0ugtJPwHLsAziE6DTWrCWGqsNm0M\/7Uq+QXsDTMsT8NA\/gt1cNy32ma3zwvvQafp2lU44gxo4TIDmFwVYibQdB02qc\/V079DQG8Llpwjqv3+CPiGUtseTah6xchi7wpcqmVxoMdhmcoqUav5tCHWTnpdpKLOA6QOvcLOoidHhdReuX7DzLFHxv4nEUvVKSB9PMJWNcVyJeF8qi7\/KEl+REwpFwjEcu9DYqxR35FGkhtIVEF2\/5LEJydl0q1+mSpYXXkcvpGsDhRHwjl8oFAZORJ7Y7MJmn56L7kuCS28wq\/KuMEq\/9Nxe4DfxtMup75xEOuG9B7ijWfiyiIcT8kLNtdH4djsDYmvmUh8tGNoykoMLYFBEofeshgZ\/Qy\/P5YaLk0bXv2+mgf0ptl6NeMXX10SSu0ApF3yAH3S3e0q9I2J3Hx\/kpJJSWsq\/oH5Ma+uPj7y2MViZQcwsxjkgozLmBjCbYS5NA7BZRqe+tgdguYntnCYyR+98jEnj6Z4\/FSo8Qi6w2VkOAEsSn81zF4dvwKTHyOCbgdo4D9ouhrse4Vj2aFBhSl6DGaSWVnBoFiZ75WNAOJcC18wb9v853KdKSwiyJsPIplIgzK7lQfHLV8P3vLtDQDbVMf8BmaYtAMjyc+8KnGu6J99jqYzGwhFbGy4tE51JOVhb8ZCOs2iA6+y3m1S03KrQCbDnydbQi4je93hrjrsgqPb2POR5zBlDWhyweESrK0A489cmWJOnHiNf6vXWCufzmXBonWpmOheAvhT1mYryoRvac6kI\/6Z2j1ycqgUwOTLC4KBCY\/4pjM18Tr44IjOa9s8W85QlhK8JBpDJRXQzxMtxWamGdbFJ2yB9sczoQx4IJKsZsOaBcaEiJRWRaen7+V39yIiYC90PB+ddlpA6oxxRWLaHWArSv4OXyfJC1zPyI8T7BP8mtbuNvVim3ijgWcgMFNnBvhO\/onpvDAWyF950qQZv2IeOn\/c\/nbDetiESwGfeJ40L28p5Bzg101C5lRJWjjVPvasR4MlyTxncL97bvHqwz1yGnpZIOG081L3MryhmPmgPIKc2Lzx7iQg81lT5AcG+yJV6AOHPV2pmWSX\/EUwPgLv5P7BoHcjqAFEgZoBl\/6Eedse+tXmlsObV8coqvYuAjRZVUXSFLcZH+bNzCU8ZHug8chw+ceqlQ6h4Mga\/JPXQBoqiHxY+I9xGFuHaW8JNXLINLAumvCias883YWvVQvdbzXUwVjUH\/ne8tGYubXRV\/APNqGL0B50HksizISHXQcN62J2hL5VUZUbuW+BssNonHAE8KELUW7wziqveZj7x39OeE4LTbmicuKP19CktZbEt7NEkSc6Fk9VZFNUqk9yDVSK3JJZXISiXEJcHb5kSs5iL2D1EDAjPRvsBCueJcDUB9licN\/KTIO9\/XlkCBbaRNxkqSYGZgJp5kx72hqrJvLaVz9P0edsWBixlcmSec6nw2YMuMAcL4dutDlMJ6V+ATjK7n2fkgprW1kP2MfcXf7OKeA0tfJOtC8+ksb8mOTxOWb4a3aQtMrzzcZmctscR4IZ4jS8PltkyKdGaBVVKJb7ldJ8krigvAYlEMxSJOu12g0S6HRCzaRlHseTHLKZOXdSSRdnOd0LWLnpq9bM6SY5ybvPxc4xhIfCCWVGsx5F\/wkGNNNkD0n0lZv74GWR7wYzjHWyYQa8WCCvFCnl2es2o8hTLQFkORM+0poxYzvlY2Gd+omUWJYzKW5n+M5\/bd\/Iyn+WdTfsOHpnkpaiLrL+XoC1I8FHqN0xf5FPL7\/PD6ovIMOtl+9vKPsZpbtxqJO6MBtAbXqESX\/z4QlUl\/T5Ax4TrbIquhRDOB+7nHroZWQM2parOCiba6zcP5AYpVoPR1WUpgKFuZwat7Vec3RUbZknGfTVrzW+v9iZRzyHhClxlwLPniPBDB6G+A0qHGFjS45r\/lbVG08oV\/sWivBh6hxNuDmB26ISNk55vvJfzAjhU9wIIFqluhIq1Y8U+HAHQ\/It\/SojsRfy5j5Me5+wJxujjXGZ2fz6IPyXX0KXGNFeqSkq2H6XdVDArl04k7KIlnL4mDVSh+7\/JoFsdhRp1zW8Kp\/QUMYG2\/tadcVyX7aPycSbRh0bzC45Ihn9J+jDjHh4VNZt2uLc\/ajfM6Bax8jAWsNgc7phZJYN8sYjR\/d1jxuJpmCIPyVaLVGGKI47cbXUU39EstRJPYYNXcg0xKDEsX9Yy0AEEXgzwZg0owMnGZqjYL0tgpaFWEwneQkkGTTMZu2f616Q8HYUi5MFdJzNiGWAA4q7A1VeZyrRKsAq3L31l8lo2L1YcpPvLCEcLds0wK1JUzRccayKS\/aMIoWAlDHHiLINzyUa22ECte6iDpUWRZ\/XP7rYNxXRU6wU5AkCEmvR3eSKWaWTEBylfbCrC62YIn9YHe\/lsgeWvkN7IaYeEwazUFb6jBlHThBOx5JOLSZHUcmjN7ZWrOUTF95d53ovczvt26u1L9EyUJMOFXO9X74oPbpKH+XvYXZkYNSDrxd38ndzl9mdLFAft+dBMhGuM6yNn7hmvZXr6pKPJgAKc+aY32KQp0DPRwCm1TGAc0HxvUTUN30Bco8KGNkMoyeC6CVWbQ5J7wWFCxsBsurh4VYlfTBuzPLwK44r\/\/CSghAYnpgUEzylpNq9Qf7jvqjsjCRhV7zjSfk3gThK\/nEQLdkWUwgTO\/CMHJA8G3Mw8FXDgu+c86VEBSwENGo4MvNHcOW8nwC\/k6RMLdfvkXcK9VkQh73BvUVZd5TynXMa0YNnMjif+Oe5orXJLnMWTGJ2SxoPbB2VYwm5koeOK73XSHAw1I51qq1UriEcdVHf1fk\/qSs1XYLjq0hjOIaTRkoSKiTQdDe2m6vJoGMGSPX0zCXzpBNJ8WH1cm6MO3jBaaK1TKW2XS9f8xsfi7O9aHRGBh9ovNVeIpLYGkEjmkAGXEaRuPscX8SWOxtGQYMBDx6WxvshpywylQ80sVV6le19h9jItGY3ROaLUVnaNeOo+\/8k9HbRThwR\/gWGgLuYqjmqY3oMpZJCmcEAl\/9k453BilpnnpieEbDFSJ0CjMJJCPDwhI+EyUpqntzz9DOPXdUajDsha7jAy+GHYezvueF4RgzIyAGlKBwy\/eutboKexBoL9O5T7teTk\/yWJgtCbpKi14Ou6hgs5z+5gq6mkKULcQJkdnukemuEuL1L7lumAT8M75RRA3E3cflMGd70vIyoQSzRgKBJwrpWR8ymswlMLjDhTFq+mLVpffXufYNdenqLl9Q+B3jieOJ\/PMATDE60\/AsLa5Z+XICDAvuBk+JvkfHNldQIrp\/9yvaakR6L+GSuHRV4OHAoKABQas5Zl4fRYaeYf4v798KsmE0RRUCjMp1C1zIgdQbL76tueQsapcgdWk1ECmya1r80tCgPpiZL0Vit38NfdmtHD0vQe+kgGwPXgCotxyJFhCX5OGnugIRorZEAIJU2poc4+2vmZYkcgZsnUnz5\/EWEzerAlE8NViCEioaiQYVDbeZg1ATO+o9xjPc9oWEAc+pA0m7I1j+0XC+MfXtncpKmTjg4t0FPac9pQcjyuZeJ0iiDCHMKW3ci0jt92wkeyfTUJbafPMIjy4z12ow+MgpzE2qOy\/i8+u7fosuUgxij1BOUuAe9Pkz35hRifDoRiwd2v+W3tbRIwWmMyZ4vbBL5pIyiXNfIrDaDp3DsPtjU8PWHPSchbpLQDlGsKuv6B\/rpYfP9NADPaksp8Hi5+lp8pmvPnAjcnTArQCAJ1N\/IVC1xy0SjClwlIhD1vt25L1vwm42WfZsxa4E4KNgrAKbyX9j2rxo9haNE9gBpKgKMde886cJX\/CsakgRxtbf6bjHcHSVsJ3aqoYIduBDc2nxi5\/fbCGc\/PrKFW0XSYkarJS1m9jT8PFBxkK5bLN6Qy6nCU0CIVikdS1F4iRaCFrvgyGHy6wgk5b7hr95jPa5qVQ+jYJjASDrPf3fDSY\/gAjjWE9N7d1MUf+Fu\/sgz38DDpgXsgLMAZrCwbvuBzXa79nfUw7bUwlN6CtesT2J1GHBg0bJ4vhovM0Q\/LEUJbRmKdAnGxfE\/rBnMTzA8LFMz\/KA\/x5FCYvEf85OoJ65V1l0vORnZR6H6C0s9+mYaQLegHlOWrHjKUZofmKbnhBvPspxJwG0JQOlf4E14urOvhVBVt9rCGd8xqsHRE622ySkIn4EMIA4I4ZZe2kK9x3uPDzJpPloxS8EDx6MB\/QCsvNsEQOqlCSTir3q8ixyJr3TPFqVvqgQXMzCqj71nfhW0rR70RfLMJzInBZRh0i\/+knGWPoeY+AQODkSYol7D4\/Z4nYeHye6PWpl008h7LXV71YFS9OW2w1ve57uDR9Z57F3904JQPRhughc6wHqaw7Kg+rbvrY\/SVhyenjyIAuEtcYGybiXfpfbWoer9SnrYTerQb3tUNWD1Okl2ftN0UHELxafErg0DF1ZrdeUZMaICBgoCoKgUaVaxwi171trI3rptHsZIB1tEbLWXfP\/Fnvayhkopp4VBv4+LfhAoCcMhcGA==","cypher":2}`;
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

function read426() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BExMG35uQdD81VV85Hk4e2M0F6x-hfAvcwdbbqYMMfWVMfk7zpRKvZiR178JYiiH; cna=l/6nGdufvyUCAXAKguPEZ/UU",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.2.6 (iPad; iOS 14.0.1; Scale/2.00)",
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = "_public=skinId%3D999%26idfa%3DCBADECD7-A124-4A8A-BC76-57FF8A3D0311%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DaKhLVXlLOpWJHTV7Y/0Ra2N50Nrm2/1c%26user_id%3D2977548936%26sn%3D8A59A4AA8A625D38C769687BB096C39920779054%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DA02B076F8F3D99125B501D6020A6D7AD24B49772%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTc3NTQ4OTM2IiwidXRkaWQiOiIiLCJpbWVpIjoiQTAyQjA3NkY4RjNEOTkxMjVCNTAxRDYwMjBBNkQ3QUQyNEI0OTc3MiIsInNuIjoiOEE1OUE0QUE4QTYyNUQzOEM3Njk2ODdCQjA5NkMzOTkyMDc3OTA1NCIsImV4cCI6MTYzMzEwOTcxMCwidXNlcklkIjoiMjk3NzU0ODkzNiIsImlhdCI6MTYzMjU5MTMxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.X5bHRprIAUgkWrlzS6ePZvNTzAjtKutlcI9n9L622u-P1x00x2Xc5ggIedMjYEq76WrA2m1qfc7cQj67wDu6qA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D201102%26mod%3DUnknowniPad%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1536x2048%26soft_id%3D21%26utdid%3DYR%2ByY0XWrGMDAAOzRV%2B4%2B5f7%26utype%3Dvip%26sdk%3D14.0.1&deliveryId=531&key=sq_app_ad&miniWua=HHnB_aUPx%2BdqJ/sqKnMsZdP71qG06viBmYbT2LPLnw7IXGvnrxQ%2B3C3EywgdwW98ju/4HPur3nnOqSYBbbnSLL6ARfvAPZxx5mZ0uDxLujEdYSNFkvZeLS18p0S6gBSbg%2B9Xxk0u9jfEKu97tcSmARoJgCw%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D0BCA201016D28A2FD9F09FBA53A22E6&timestamp=1632591599&userId=2977548936&wua=HIVW_sALR3kteIQlWNrSofU27N6pdAR5OGS4gO1xwo7jyEsbZ21OlHot5Us/K%2BvbAl4ya4BjOnGm1930Fhx2YEGmOHL4%2BYAfUCYjfho3JHaU2lvPVayjC3MDGZn5iEf2PHIiC27aqiXfWztTdsL9H%2Bl%2BvPEdysVEE1IzNEogUbtWQBGzjUsHHhKEwhsscvBVjsPJADB6P4lmxGbP286HzV5MnAgmKemDz6rwLqPKbg%2BFLKPsTU1FgCYx6yTWvT6v2S6HzhlAs8bP0oh7PZqdZlMfDDV55fLj6KbGekdXj%2B/P2o/J1yDG241TFJ8UH8j2dqee0U%2BqHSf2Js/fFxlwcFw/hwe2kFmGcRVeYuWMVq/Ku1BU2oahr/j%2BkjXC4h29Ndb3drz0Pk51ejL3XjS7pYzV%2BYA%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
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
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.8.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&mod=iPhoneXS&ver=210802&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=44.000000&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "2001",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1629010657&position=501&signInType=1&wua=HIVW_SHrM3h2JkyoYAgn3ql4jRIy6b5g0AnUJP7I1U6aGiqQwA7oQSEgNZ%2BN8ALcrbeN4XfImFmU1WLw8hUDUw9LnTfLTpFLXlvQ7pL60uQzr1OUk%2FVboon34vSD%2BAMypmhGyIcxJajORk537gVeUjDdXi5pLnj7mjsDnE0Jgi%2BqvbFilG0C4vBwfZfzT6yZd5aCjTbUJt2VTLriJX2IHHpUU5i2RwkWrPKZoGWbO4OQT6YRO5jYlBnBqfkxhutQ5oqgiEBD3rUuIiDWIoSIfupc9V4yo4VSWtNoWZak20EZ0K7Q%3D&ua=&miniWua=HHnB_JuqDlmNVLuGpc0My162gs8NWXyFaoSc%2Ffuhz57T9z99RDkHNb3iTg0Mut4vnmWNqLe4O693LbAnypX9tSUb2rujnJ%2FHEvKQwHjqiROdCX8xtNN4%2Fawu6U5lPFEqVB2OhG%2FQzrnvjELSdHQ7p6VpG1Sd%2FjW68m3We4H0W1YLzWXI%3D&userId=2916901745&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.4.8.0&placeId=111111&timestamp=1629010657&sqSv=1.0&sign=3105bea087cff4a2b140b79cf27dfa64&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%252Bz6if%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
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
            "Accept-Encoding": "gzip, deflate, br",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Host": "api-access.pangolin-sdk-toutiao.com",
            "User-Agent": "Mozilla/5.0 (iPad; CPU OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = `{"message":"22TQTTTt84EZpsxWT5EpjarFUYSjeEEABVzt7YSCABVpPO067cJmFHh0sXfSy09r7TOBH\/os+nNE6mJMK\/xlgHjBHjmE6FF7wLYBbhKxRQbM+sKYjrmj64o+jkWi5HhLSfrwMsUluQ7AVc3TAl4vv0jJtV65Y5R4G0d0QYmDDwwP4TbULl7x4GvRtar7zBsjKfCFlHnkuw7LXM+r8OD9XlLV6pDAQrB66lMrXdbfNmZEa3sDKO+ck8qFX42I7pYDS+px1lVz5h7vBxFUl7Ta8lp7qYw48xZdW+EiS4y\/TGRLGNVcQ3PNfpBLaYuda5wmpGaeEN9ombW6iKnkCE35ZQZYoqD84a0hAhtVnFrspUaFYdKAfqKVM1N6CIy55D5Be5xtbWW9kd0EMZtoBjk8Q96VozzOxLOctErkRprF3brdBuK9k4l6yuu2JQEYpDoZLPzvkOfFJbfZulnVPax\/SV7ti5oG84govtYq1ivwBL4lak0Y8ldPSBWQeB6FkPq6Qo\/FrxnxGy+tbZq6zqSpXGyArGaFK2Z6F9qIMqfaYsc32CnBYVZgT3q77oSARk7qmbETNn9rI4crVSYkxreiN5ebmjqJGiDM3C19SHE1RIqyvxJdY+KmK1r6wflGx3iNw8paIjVfdPY9xZ0lYX4z4HwudZWHMWp\/CP+OrBl2FtJWy71hqKLSB58cFWRtM570ue6Yw43GPuwhl+abPOft9kd9Xx7qwEH3MB5\/ZJlB1TYEIkJdCJDC9i6ipJuifk4OQiiQL5eWKesKtibJMPdbHQt120R2e2vqKXf\/Vwug4BpwsIqM3MPg8tWSP+v1Mda2G3r3pbQvD1D9Fm5Y0jDf3yqPOPuqWmhc\/Xe7YPBAwWGmrivN9UXAlUofDndy4LP5\/FdRsA62fSUeLA35KRsusaTxG6848q0Gefv7DD78sEebIsFn02RlkBqMmMNI8asbYWuLMhNHtHatEQkFzujhtpsSgNj2GIq9fCA6TUwhN+A596LUUIO1nTP1SjFdBosjbf1TeqsFE+d\/iSykPRV1fwWczZYCrJ6hI6jmyCOwxgeH8YZNtWgZZ2IZbLsVE2Mfh34wO2r0Bhg+2nQMDFiGud8p7K217RrEoskSgAlMZhTyddMaYdxfdGgdCP07FDYn6sDie7Qj5paxbIj4VlYN\/DZWqdaCJz0UoztyZFb0uaidH2si1z\/LLkDT1z\/O17+2vjxN2iEWqmKcKtNZ17ZkHGPksKKrzr8cJL6RlonPn1kdTbhtzsVAaUY4w7XDDv5PswL9WqrDYenDDsJkWH1ih214Zny+tDBtGXzvhXcNnC5YJ4CyLGsd7jYYPmvAlkF0nVtrGNk7AO6XxHFMb\/ui6Ho1di5XWFz4H5lTLTGYLGUVJPlzhmaA\/AkWqieaUuziPDdzhmvZJYf1PmZw0xreQ1G+OPlF1QCR50FYep4RzrMczNteBQ2gbyiuyfYKpcwDTpR0AkWcHSdOYrskHB+8ibgxEZLzMGIqh9cziYRVS9uAphZiF8kvY8TPJTU7Cld3VBhZluXt7gRa8+dlJswfZaf5foFmlMqAhC1YJm4wv\/3wonvAZOKKeJ0Y3n80qijT+3hqXteW\/Gwp3e\/YL9manKPB9fN0d0Jhjs7vuWHwjrNJV+R+FbiW1R0mDMtDqh5OVy\/zjedRA+MeaL\/ie8gHy11cFalWImJ8SNIAXzO0J+ZldPaPjhS9C1QG8sF+Kn\/7pwqbMy784S1\/rpuRB1siNjLl4tOEEH0OVabvgeP3v8fwrPvgwhaAct3FjyHx2r\/WG7OCDBRBvvolqysmh73FLLlhMil3rC8lr9bsCjYwngNuJ3mSm1z7ghTMO01baaP8prjdCdEEGgYTM\/+bfFdxon8AI+U4DbxCVQ1zJLL7BJWAZ2ysr34y4glzpmnQQ6Wxal0mgu2wsnj4XQDyOnUJ9l7JV4QUPJBz2V2cr5PVFqDRL9H6CcMJUa9YjsgMSjNda8HNh94K+6v3VTNOR1u1SlwJrZ6iDvgjWFCLKUi478btEXur0CLb4zSTVyBxdGr3PYAXyLAjyBFfMW4YuxbNWQwzNWo5IQ7xgaH7Ia8F2Z8Hri8mdeURkGk\/fVx+wDscetfyIZtaghQM4Ygx\/JBDbNqbZODqlWvVTQkmwu9wh2cFp46j80EJKgwg8IOEF\/LOUBYBs7h8icscPFa9oIYXWDIBRng3jpXmwZ+J5+mMmci5bMYyy2eY6VtYrgJpGzvdvsQnLH2rYl67C4Fu\/ma8S3j+Q5SgrXYsUndEL\/JwkbWkWV70kD\/DYsXGqmgQ4IreLWCkLaCfgfG0qMKj\/MlJgPzEyvCSmp7i7hqshWjaiR2pAk\/SuRYuvz\/Sys7zohpNfhUkn7ka77cgrnhTP5wRTS\/Yc7C2KalgFQ2aAkS\/nw4oHQZa8tdCvtsgvsC8k5wxgQsLJ8mKQo2nS3B+bCJpItZdlJYqTTlMj61UhsorxdY7P1ic2nP4u9L7jLEQ3r46g3KqPZDhCjO8+1JZuZQB6xumLYn\/m+Jh1S7FHbpd\/JcEepj5iuValvoOssZbFE7JsToGPV+fSpUiYkYJAT9XPD+zyeJs1Tl51PN0vfgU9o7rDe5fykEZ8MV4nCiInZkoSsfR1RbuRtamHFCVfVF2hQfAEJ1GgBYZl1j+owWY8eKN61783ucDNDS9U\/CFOnwcSzna69UzkCUS1x01RQpD3lSNQBlIkw2IziGh4zS3pDk\/+jmuq9BdiEn3n89H6eEiL5HJNY9EHKxoouzC4tJtknfLwER920q3ZsqSqNNTozYRHaKlKknOPfvWDo62P3GhIarVZ5XJto9Fsa\/kaz8uHv2FUdutuInFDiQUV2iZc\/MbOt8WOsO3e1Fq2UeEBS3wNW26qBUl5RFEXDRfCrgwER8PV13G68jXRVPGLsC92ffWzHaWzjBL8zZMdJ3dDLebRnXR3iaLkRHwb\/DcY6MxosbTGk\/K+swzYYn89OuBdtdCWbQYWYUWosAVdEerFfbpcSLC\/Xc4aVv84a1Q9DdbQZegXfyX4SnMEuonuRFmmhxSKQoscEhtXGcRRV4T0BBme2sp728eHS7DpZrJUQHYMah+Z+K5Pwvig65bWGf6OfpDMG+89UPVO+EPcprLj57zey1SpmZV5YjTIkTV+KvB4pbDbB8nb5jGt3Zu0bXafldC0dQ\/aybEGZ0JwouR7\/9zzpCg0CnUrdsrMTsr\/UR57q4TWG11EumMzmGMqIIRSaiuLByqy8yEt16CfWiPTr8FmNdxa0IbbIT448aaoHQf23T6bZdiuYTv3Xs5dRWD8+0EP\/0m\/+17eRZavFfGTwTPStuEUe3NIAIeChTUEMqqh5BO8Dm3LpIk+3adVJ0GjIvcVMUba2qU7EleYHRdOdzqUm16uxd+dEqMiFVNw5yehpzx97ysLDQofb7KaPzAeLoQw5LhCYvLosEtP+rvjfQprcJ5FmZqHe6uz5L\/XiphGBsFuAn9Fmwu87Y1i\/BFsk019gOKjizDVl\/8vWotNxZf7WiL2PRg2OzDTtwu9NQ0sKvpgB63aAm1R6gs7sZuc8weKdbKNSjYJ8C9no7qBFBeB0eSTcVHvOaeUCb8TimrVsDy5xoedgvBDoKGTps7VuGtSJfXEntg8W1gHIwocU5YdQiR57q\/ExuMTU6PyPuzYV8IlV8sP23eU2\/FadQWGbwz1HLlwke9IZeH0U+LFFhAHBPcyJYGdIARY+EAFWHOH3U567vze\/itV4vx+RPNyGgIkFsqv\/FTfAkvKAkPdJvaLGs1cGtMf9YAqLQZsuuqjacAOOZPKpLq+e0n95TylvYM3N\/32raQHvO44o2Il6slGzBKXz2Hoi0tiaGMxbk4RzPBu864wOnJ+gLl+1\/QxO+4C+DZVaW5hEUfJOItB6t4Bj44IiIwKanfzPWjI7SJBSOoCCSCn8RzPMi8Z6dmhBQ4tghrMtvdNHAfK2Rygho5zmyDjdveAL92VHb2Y+FlqeNr70UWglorXn9KyhoR6PYD8CMXvgQCuvYvcMRVNqlebYnAD6BRdUNqx52Lwci7DOZmkS\/Pnl2xErgnYYdOPSM7x9iiE0tdIOeyW\/+13O3UIBPY5HPlHKNnDcAu8vfaWxW4dfYA+5Zt6hQzZAyA2m354jW\/gYJENYhCaZVHt1tRw3CnXPpytF1MjUVZkR7Tx0YlL8y0iO40\/JqhpHfqR9IZ2kSGrL7Jek2knoJHV9YWKqLKItlko5lLPmxCF0PZpc8tt2H50rbGDHu3FdYANoKe5FWYLACx1HL1s6lKlAYKBCxU1ll0C6dl7zdutqu3VobwD0K+Ib4TuI+5XqADhtQNftXPtbVummThowHZ3zg9f3uxgKko42NS9Oe\/rTvTRNt2hFGsvXtve2aVHf1YZjOVPpAsUtYww93JX43x1fNFaDIZAkhxFk4PVi5tNs0nJJG5fYzZjkPF\/T2s7Ur16bPQckohqKBPWavJipOPg1TOkxCxR1+cnZeAvxM0X\/g8MXkC2UDpXXppPMtbRVwvBRMuQM1WwPbavrDtQElOITjYHcSsANIvV3bQYlrq3Akx249caZGI80AeCE4qHUw==","cypher":2}`;
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
            "Accept-Encoding": "gzip, deflate, br",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Host": "api-access.pangolin-sdk-toutiao.com",
            "User-Agent": "Mozilla/5.0 (iPad; CPU OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
            
        };
        const body = `{"message":"2xhz4b0Zk8eywlAHpUkPZAB1AO2zdJrs2qLMtJeH6c0utr2xAxc9nfZAifFsVJ94qUtevgyG0zNsDuex7IT+aXpoA+VJrNbJhkrfpAuqDA8Xe49WuC\/9qPsA8bTeRKsG1OiLH0D\/oOQZ1J4VQQDnnPuZ9RgaEDy+FbDJj8iLExpR5BMMB9Yv1Yl25eY1wEzx9qMqTuBZnGLcl5gp6218O87MHbrdVoloW8tmNlOBYcwem45sj\/fx8dG7Ew5+9\/kYcP5DrpiaKygS4EpOjXUhQn2EYV4xxx\/Kilmji8HdVmx+6igcX26ZGBxiULpGcOTn8frBYDFGe7YTzuXg29ppekmhwFkpb2jxDwIRy48WhogK2nibVfbUs6+Jgk0VqJx1YVSpN9gVg1\/IiBiRD9Qmf5jlDpg9qJGmTkjRY+4bVfo6Xp9huejB8VEcYTd6KxWx67RhFadY\/mrK3jHT\/KvDrsvUx0fndB\/RGzpVRwzhOep9rqWtfJiAJScxgjl5quRr0JAo+GpLm8bAG09s3GdKdZhPHhMaG1jcRzS8nPWgbHsdonMYj+OVtV7Mjus0Jgi8DibbkwlndIXjlhSE+Wx5PJToHOyOlF\/kcnRe+iLstX3ibHGD8S4awcwpO1ahcVIVKWR2EV3319+HHAOPPnIDYR7COf7tt4m3sRR1r0jm1YGZelWBNkca79zebcAFBpprp10w6rdOFWsN5ujmBy9hFIwrTLu4202aLs7aaSvql1AWlxwsTF6joDkXeW1lyqxIpXz73qG\/OUYU91TcqyULmtYyP5JgCrByNzhFmArFSvaTUszBbXPCX0D2al6Bf+LiINxyLjEjtCKP6MepmrScRMUFZ9LvKmkuQk5evxA6v8Iu+v8IHMSURczDB1kS46hiQd4iPwzab76CyB7nroYiKcPDYscIqy5Wor\/3nJVfgjJAqmGsF8Qa9wWGde0YKaPAJlRYYdQyFy\/5o1wi8dMUIFJC7u8\/zEmVG+g7meIiftr9QzsFffifFRN5KqOHXsN7G+MMFS+ryLfRPFG0w3t7X\/kgZMyCKmN8EQAJi5rQQMjLqZVqw7\/lKPXrnA2e\/8WeypTR1JD2+0p975qPNxKhF7sq6czKDUXGnBdvbGLTVIgAd7Xuq8MmHrsQ5HEx\/U2WfDEObYW4XkrutidPOq17xg0WZMh4gYnADC+mv3sSr20rcAIY04wKJq+IV2IRv4cJCnhKxJyqY5s6nyymvZex2Y4nVHTydPuCdm46PAwN+wEQhoJatLE9bujcZXkP10DZIR7RfG5fNbUn5X0b0ZVSTAWyEi1uBEdOu\/A0YJ+ISDA6VmqDmYlc3FfMo8OrKa0uB5Rf8rRG1Apv+wDr\/1r237XbBNi5u+42GUFT9Od9\/zqcGVYLQ2iemKPh5BB9c\/WZBI6cJeC9qPczfynvVZhyw9RKDrohcQMG5\/Bjlpi4l0NK5YSdEUy7vjRThUet0tRSHyMEaB7CqgRQzG9RN62L55JHmWeNmhlrHJ8d+dABV9ULkCC6g9\/bFvsamPRKOqFZ3+rVkBpj4ogIRm89hZriffUHBDHIti20pUUZtvaVOu+odmBGclB3dbFNmDHc7P9EXBAJ5acx+Oi95Ge369zR3tqUB8nwWLFJNj\/x4uZT+N5mcWJhjGzneSIbnMBG5k6wBvY0WYg6sVpIk3VnqaQNweaDMFFV+juXTYBQ\/RRa7CaiK29KTVdRQIgBO0qBc1NzOkxLBEROP\/IxwFCEe136rV6Ve+gPSnOs2NlBLGTw5axJI9\/nrIhpfMSPRx0pKjwBEwhUCNxc0FKJYU6I1s9gs6nt48L8Te1rx7vuR4473ix5x9qk6\/3om8IIMP51AOAA7lqd324zGLCSuoyioPhR0u3CYgHteVr8f8eSBp8eCurnHIXkUOMTTvNzLql8gEOeaPTz7h7J78bHYQ0mLE8KkUUjHP38js\/avZtKtPt0dlQmA8RNjRlrX\/o5VyhUiJHY1NJd8fFTbv7nU0FK4q6wR5tuYqs1DER93J7625QwF9x055OzX5Itre3BYiiY+vQfO3dnOSGYkRGuoeqD+z8cNYMw7xWZNuq0l47Hpy2g6CI1F35aKFYVcNBXyAG56ZsPqslQ68sUrVPgWte2q8kSqksKrYJeZjgbhKgQfIFxgBnx4RSE2QjMPhI9VSgH8cwOKkqTrO1872vP0vxGv7++v3ztzjIKK8utbWe5dFTBtOeSyWZO37Nhn9dsACo12q01Re50erwx0MQ22+CAXty3gHoRRzv8fhBh\/TvmcIIkxgI2PqXD0FhuinZfYEhe0klrWMbodqRpFN0yKBMWi8raEa06GGz6nFXP0Rx1mvoGHD1h5LuLk2Y53G1UOlX\/OtEBfCLSuXGdlALwDNdrxEYZn3PYFYaiKhwK0dWvVM+tHvuyXcwdln5+9QFLXkDFK8IFrxYc0t\/64JlRloI366b8h8TD9XsuC4CDDunnNhyyacLJAxuFVLXX7sGGu8sc7DEcJvLYCFZvoxl0wEoDHJ\/ZbXohAQtrbx6Tq\/Q\/lbZij4cRECg3Uet97UCJF9gk9tmvfEOpToK3Cd+L3PBNQrhr3SRtHuiM9c00dTSnN8x6qcDUvDrFCfHq8lwUfvFvQ3\/AtJpwQGJnmMo1XjKRD7f\/TpjHhCIj1FIMqu12sdJZnQ0OTjU5gH\/5IkHqRGZ0puvU+o2Z3ooYKr54Ts2VNNjC1n5zgJ\/B\/jw19xylLlkzPQrMSIVAqs3vHch+9QSrkS3ayVOGIi4jGnLRS8rg1q93EquK7Wv3IpSYvV7n6k6g07d60SDrUv18Jz+Mm8oL7wbvlezCE4BWSuN5DrY5Nl95Jot5AQ78eXI8WWlaeeb\/U331CrWz5AQcCBc37\/w1pkR0ms5J7sDbSizq9jvs1tpUMGT0HadN+UW7RpdYH0vt+I29\/2NlthrcxIjlLBoWXLgxHx+JoQsgyxCsQKRzVyKlUYga+tpQvJkyNLtfjlFeF5NMyMui5XL4tKU8CIyHudlQ8GnZ1jK3gUyqftR1p3h0CYNfpcg8Y6+ofKZ2wjaZeSE63opiNznQU4KQ3sGpYyfUM76hYKGQP0OKgZsfBtAoRByZDmRu6BVOgsP+Oo2ICaKILjPTZKwcy7SDnmoGf0bYrzW65N2wyd9zhKIlIiA2LEHmh3eH3ZofbEfei8gx3n9YGwPm5lGuv74kvU\/I2Ujm6OsWMzg37jPEQMoH3Vvek1qq3rN9XGqxDyHRHqF9cKQDULkHlZXtA\/apP4GSDKXYIgXoDq71Itoqi20kI4Cz30GOKGLhlK+ywXJ7oRAs9iXajoDUuU0ALkKreeVhNn8NWu0XlM9\/svLHD\/KCrYYwRL0cmLWV+zJhLqOePvknDEE2dA05YmDM\/\/FcEAEkq6McEGAnjDEi4iotbM2hp3XZVG6rbI3xRx9j\/C+EXw3NFBCoCoD3TMalbXuMAHoqxqqVHSfEL9JxvZsOnOZy+ZgcD5Neil0G6lofwcAgVyLiu8vhrdF7sN\/\/Qy7koUcCV3NT2oi9PHKX7wtGL0+b6\/ESRujDluQCrBMeExneo7jRTA3F9w\/pKxBPivgEBfPdxyy2r8AfZomFaeBj1zyjLL8JZfRlKklyH7bOIRyrZ4h3c9y3r2xFUAsjF4QsD2iqAR9Gun0uZN7RSl\/PB6diPvxvgz8g9MuixZYUhKqo\/NOFY0WIMFWL\/ebN9XzMJuNfGx9bZGDDs6CQIvBI\/bXg5AoPDh8Z734nYeoP\/fU8ZR1kCuqHTKcjCRON6offnfAPFiKVvp8n4\/Ql9Amyf73\/mgZmgTCyaGraui639tU1+SFqklXALYhCMNvsnpJ7F\/onLa3xvVLq\/MmJ\/rrr6vnokgsxxq+f2Fzi3fHtN+faqRD7GTOQJA++4RgPaGqE3VFBt3jwBgh+SfnwxtLrVnBCEYhzN3oG6kBcXkIazMFgsoBSthaSUWCNHAkamtHVpBssShtYplIntqGVIAqG+BbcpILBkYi9YjxMHoWxeqUE7zz\/XD1+fb6NffjtkrrJMnBTBeNHVEEXd1XrHrGl\/QY93yfGftZndavqDl1Jo6q8F6BeEhB8HvZ9uxb0DKwDC8Owos2T3Tn0YVRNIu+c2v2iD69A9yz3WcH9NMGMUfzXqwfcfIdufvyVV+Ql1+LMo8EnxpqmsXS5frlFUlRi7yVciaGbJvPqND3pcvr95g\/rPv7ZG7tI0t+j5k\/WFnA0RK\/6CDLEREd9bRALd8pawxzx0zQhYAuOmQ0js9x\/+N7EgCqjNKnjJVEWTdQ2RB3SXi+0oT1zn0QiC1Kv6qiRKcAXWrTG469dhltd0M\/DpvB131hlGGiG2vZmQBRDdIe8b+wDYRMfklWOAkg8iZQS5edy+XcaAbq325D2\/faSaCQDKkGZCUx328VwMFBp7PnvYFOVejv0\/\/8owNPhJNywdDJnSanoJI34C2wN43BMrKwaw4oJGWSCkr9BNZqItjzFLk8kw3HGD1DwZ49SJ7cGt6lzvU2GoyzZh0dVLyqpJBZkAVO9rfAuyR15Qu7qMFsQHue+8PWeBoAK+CNF6x+pkOqJjNDlBfb2p8UxBIdSBNDqMpA==","cypher":2}`;
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
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPad; CPU OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPad8,9__shuqi__v4.3.1.0) 1536x2048 Winding(WV_3) WK",
            "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.0.1&utdid=YR%2ByY0XWrGMDAAOzRV%2B4%2B5f7&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2977548936&sn=8A59A4AA8A625D38C769687BB096C39920779054&umidtoken=8IJLq8ZLOlZzzTV8HVNcji0u0eazBuXQ&msv=8.0.0&brand=Apple&imei=A02B076F8F3D99125B501D6020A6D7AD24B49772&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTc3NTQ4OTM2IiwidXRkaWQiOiIiLCJpbWVpIjoiQTAyQjA3NkY4RjNEOTkxMjVCNTAxRDYwMjBBNkQ3QUQyNEI0OTc3MiIsInNuIjoiOEE1OUE0QUE4QTYyNUQzOEM3Njk2ODdCQjA5NkMzOTkyMDc3OTA1NCIsImV4cCI6MTYzMzExMTIyNiwidXNlcklkIjoiMjk3NzU0ODkzNiIsImlhdCI6MTYzMjU5MjgyNiwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.I43T5lcC1DlRetCk2MgjfEqwqaOzWySAtRo7VJ07kU61PsvmbmlQwkdIy75ccIxHSZLi30C6xxvTarmJxjeAoA&skinColor=23B383&platform=iOS&ver=210111&mod=UnknowniPad&statusBarHeight=20.000000&skinVersion=1&wh=1536x2048&soft_id=21&utype=vip&skinId=999&idfa=CBADECD7-A124-4A8A-BC76-57FF8A3D0311",
            "Accept-Language": "zh-cn"
        };
        const body = "activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_lzFWUReoSdckFt%2BQu3dizJyg%2FNw9ZBTyu4uSD9Swf5MYW%2BNvGZuAMdqeQHWTTeOn7HLfIgzHJBdizf1KrNyzGfthj7iDUuopqhwX3ldVhSOzODb4a8x1SRu2M2hu%2FcfyxG%2FPHnC%2FY%2Bepm5%2FKpJdL3HR6MesNiqYBT%2BlavYZ4FwAlqFb1vTVXXtVYRkqNtdttE4DsX0Hzd0ySGYXgsA4St79f%2BomeQjJEFfiX2%2FBxFFRn03uD9pvYjZ5WydmtxqCyYsTa54IX1ZV76%2BcdJBErn6C3GOisk5DK2O2FskYqL8WWIbZ2GeNVhgpG6mGBfaSnD6mDJvPVPfBCHW4kIHR8Odx6ettLGD4tlMmQvrLNCHRM5oFlnqJXerBKe5Sjp8uzCtkTP%2FdNsn6SwGgR3G374A%3D%3D&miniWua=HHnB_GIl0E3W2l3iAcfP8r2A2eCkV7fHrTUwjmG1ZROBA%2FCPca5RQv8AA4I0%2FhxRMmD0fcQMNe705lBwpII2VEYzX%2BxGg4hkNlabBsQTbM%2F9y0pCUxs3nt75mDQmHCCuoK2SEU31jXBY8OBIrHI5Bnaghlg%3D%3D&userId=2977548936&umidtoken=8IJLq8ZLOlZzzTV8HVNcji0u0eazBuXQ&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1632593163&sqSv=1.0&sign=e0bfe7fa27afac792129097348721cf2&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.0.1%26utdid%3DYR%252ByY0XWrGMDAAOzRV%252B4%252B5f7%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2977548936%26sn%3D8A59A4AA8A625D38C769687BB096C39920779054%26umidtoken%3D8IJLq8ZLOlZzzTV8HVNcji0u0eazBuXQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DA02B076F8F3D99125B501D6020A6D7AD24B49772%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTc3NTQ4OTM2IiwidXRkaWQiOiIiLCJpbWVpIjoiQTAyQjA3NkY4RjNEOTkxMjVCNTAxRDYwMjBBNkQ3QUQyNEI0OTc3MiIsInNuIjoiOEE1OUE0QUE4QTYyNUQzOEM3Njk2ODdCQjA5NkMzOTkyMDc3OTA1NCIsImV4cCI6MTYzMzExMTIyNiwidXNlcklkIjoiMjk3NzU0ODkzNiIsImlhdCI6MTYzMjU5MjgyNiwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.I43T5lcC1DlRetCk2MgjfEqwqaOzWySAtRo7VJ07kU61PsvmbmlQwkdIy75ccIxHSZLi30C6xxvTarmJxjeAoA%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DUnknowniPad%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1536x2048%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DCBADECD7-A124-4A8A-BC76-57FF8A3D0311";
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
            "User-Agent": "Mozilla/5.0 (iPad; CPU OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18A393 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPad8,9__shuqi__v1.0.5.0) 1536x2048 Winding(WV_3) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.0.1&ustatus=1&umidtoken=YU9QKpT8NKsDAFESyz00Ys53&net_env=wifi&placeid=111111&user_id=2977548936&sn=974D42019143215874205652DD1CF49EDDB5BF13&msv=10.0.0&brand=Apple&imei=A6948C6FC421D5276DD969DCFBFB13C105159788&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTc3NTQ4OTM2IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BNjk0OEM2RkM0MjFENTI3NkREOTY5RENGQkZCMTNDMTA1MTU5Nzg4Iiwic24iOiJmYXN0Xzk3NEQ0MjAxOTE0MzIxNTg3NDIwNTY1MkREMUNGNDlFRERCNUJGMTMiLCJleHAiOjE2MzMxMDY1MDAsInVzZXJJZCI6IjI5Nzc1NDg5MzYiLCJpYXQiOjE2MzI1ODgxMDAsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.qVXJnOoKv2XKdt7ngZw5imgKC_1bBuQSzMsLEQdyBr-qod4EyQMIrTHHYwDOTwqDvj-Jbow7j_ypu-JqYibekQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=UnknowniPad&wh=1536x2048&utype=vip&utdid=YU9QKpT8NKsDAFESyz00Ys53&idfa=CBADECD7-A124-4A8A-BC76-57FF8A3D0311",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1632589714&position=601&signInType=1&wua=ktgi_IjOltkmJy1VgjZ8xRBEsL0Z%2BlTWInVi%2F8UjzguBqjwC%2BPhPpo%2FcXjCzIQlj%2FD8CyH%2Bhx99MIiuqcMzEr5OuLLXFmP5VPY6HaEZGYOq6GpdWp5CN5SOjfpzqqbfEfbWUtoRVHDHc3ayVSYlXsYbUhIEVbnv0wcee9YwK9Uai5DX%2BmrVYND0AUXl1f2R32ohkSgIulgKDuXyrdQFZrBShunZqKhhgr9QesHfAThty2ZuK%2FgsJXsg9lRRzNcuizjswczxme3GI%2FQG3LuDXhHQ%2FCckKpUoXPW%2BKPe9UcmZtNzjx56IgN9z4mZNv5cSeaNbmrCZQB3WvV0bdQR39Lr4%2FPvv1bVvBFMfKGiWdYu99MIV0uCyqr7zJzDdOl74wV3gp8&miniWua=HHnB_cOX0Kmrru0kHT3D7AQSbflwLtO37bkn5cK9KJuV8Kj3oe0eoo0xm0u28PpaNtHoefqPF4XTGo2PVGIu6GSyRXa3wUsEpJHH6CyY7mDF9iHpro6vqYDkb1W%2Fwp3nSd6kT&userId=2977548936&umidtoken=YU9QKpT8NKsDAFESyz00Ys53&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1632589714&sqSv=1.0&sign=f0c0c7870ac464bda85802129cc61984&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.0.1%26ustatus%3D1%26umidtoken%3DYU9QKpT8NKsDAFESyz00Ys53%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2977548936%26sn%3D974D42019143215874205652DD1CF49EDDB5BF13%26msv%3D10.0.0%26brand%3DApple%26imei%3DA6948C6FC421D5276DD969DCFBFB13C105159788%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTc3NTQ4OTM2IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BNjk0OEM2RkM0MjFENTI3NkREOTY5RENGQkZCMTNDMTA1MTU5Nzg4Iiwic24iOiJmYXN0Xzk3NEQ0MjAxOTE0MzIxNTg3NDIwNTY1MkREMUNGNDlFRERCNUJGMTMiLCJleHAiOjE2MzMxMDY1MDAsInVzZXJJZCI6IjI5Nzc1NDg5MzYiLCJpYXQiOjE2MzI1ODgxMDAsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.qVXJnOoKv2XKdt7ngZw5imgKC_1bBuQSzMsLEQdyBr-qod4EyQMIrTHHYwDOTwqDvj-Jbow7j_ypu-JqYibekQ%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DUnknowniPad%26wh%3D1536x2048%26utype%3Dvip%26utdid%3DYU9QKpT8NKsDAFESyz00Ys53%26idfa%3DCBADECD7-A124-4A8A-BC76-57FF8A3D0311";
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

function jsread() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.0.1&ustatus=1&umidtoken=YU9QKpT8NKsDAFESyz00Ys53&net_env=wifi&placeid=111111&user_id=2977548936&sn=974D42019143215874205652DD1CF49EDDB5BF13&msv=10.0.0&brand=Apple&imei=A6948C6FC421D5276DD969DCFBFB13C105159788&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTc3NTQ4OTM2IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BNjk0OEM2RkM0MjFENTI3NkREOTY5RENGQkZCMTNDMTA1MTU5Nzg4Iiwic24iOiJmYXN0Xzk3NEQ0MjAxOTE0MzIxNTg3NDIwNTY1MkREMUNGNDlFRERCNUJGMTMiLCJleHAiOjE2MzMxMDY1MDAsInVzZXJJZCI6IjI5Nzc1NDg5MzYiLCJpYXQiOjE2MzI1ODgxMDAsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.qVXJnOoKv2XKdt7ngZw5imgKC_1bBuQSzMsLEQdyBr-qod4EyQMIrTHHYwDOTwqDvj-Jbow7j_ypu-JqYibekQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=UnknowniPad&wh=1536x2048&utype=vip&utdid=YU9QKpT8NKsDAFESyz00Ys53&idfa=CBADECD7-A124-4A8A-BC76-57FF8A3D0311";
        const headers = {
            "Cookie": "isg=BHp6yQxMz7r46kPW5M1m1b0pwaacK_4FZ96OVoRyWo0kd8mxbLrMF57Fx4WrfHad; cna=LT7WGRtjpW0CAXAKg7MOlfm3",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPad; iOS 14.0.1; Scale/2.00)",
            "Content-Length": "603",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "actId=355&miniWua=HHnB_v1wSSrxoJ3VXOqxzS3q/UZZ6c84euGsQw6XmVb68dOTgX6cfcx1ZBOIaunnm%2BHOe98/Liuh7wSAy3WgWgcZ71DdGVvQ2GySHJR2JuwIqlM8v5RPs0GV9YxZrybt1Np/4&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1632590568&userId=2977548936&wua=ktgi_MBcf18pfZDnLsWBk0gxpjqB%2Bz13cC2JKc%2BY2aP3pJF2xPG30AIK2NkjneSrGhO7d6DC%2BUC%2BQvehfwKj1Z5aZLCgcXAvmjAhg8gWw1YDEzBRTwIZD344vKsuMdWjwO9ABwblQj0WbNA9IVSP6xA9/AREczJ4Uowep0YJ8h/TF0V3/HdHi4pJ9pER7tLRV6MUnQNLHd%2BIfovIwmM45KOjw80TA%2BZVvMR9rHGpOsQWm6AcDB4dc%2BFoik0OJynoMJfIcMgZHwVHol39hHNK7oqrkFovEBvVENj%2ByOJtGGgNZj06IxgwRf6LyKCTedtASgO1CbanVABax78KXrl8bENTz4Ve8MCZna7dPpyqnqKFz5v4%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
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


function jsshucheng() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.0.1&ustatus=1&umidtoken=YU9QKpT8NKsDAFESyz00Ys53&net_env=wifi&placeid=111111&user_id=2977548936&sn=974D42019143215874205652DD1CF49EDDB5BF13&msv=10.0.0&brand=Apple&imei=A6948C6FC421D5276DD969DCFBFB13C105159788&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTc3NTQ4OTM2IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BNjk0OEM2RkM0MjFENTI3NkREOTY5RENGQkZCMTNDMTA1MTU5Nzg4Iiwic24iOiJmYXN0Xzk3NEQ0MjAxOTE0MzIxNTg3NDIwNTY1MkREMUNGNDlFRERCNUJGMTMiLCJleHAiOjE2MzMxMDY1MDAsInVzZXJJZCI6IjI5Nzc1NDg5MzYiLCJpYXQiOjE2MzI1ODgxMDAsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.qVXJnOoKv2XKdt7ngZw5imgKC_1bBuQSzMsLEQdyBr-qod4EyQMIrTHHYwDOTwqDvj-Jbow7j_ypu-JqYibekQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=UnknowniPad&wh=1536x2048&utype=vip&utdid=YU9QKpT8NKsDAFESyz00Ys53&idfa=CBADECD7-A124-4A8A-BC76-57FF8A3D0311";
        const headers = {
            "Cookie": "isg=BN_f9JmjwtloiMbFMXJbFnD-ZDVpRDPmWunLJXEsPA72AOiCeRYqNr-axhZ-gwte; cna=LT7WGRtjpW0CAXAKg7MOlfm3",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPad; iOS 14.0.1; Scale/2.00)",
            "Content-Length": "100",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2977548936";
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
            "User-Agent": "Mozilla/5.0 (iPad; CPU OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.1.0) WindVane/8.6.1 Shuqi (iPad8,9__shuqi__v4.3.1.0) 1536x2048 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.0.1&utdid=YR%2ByY0XWrGMDAAOzRV%2B4%2B5f7&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2977548936&sn=8A59A4AA8A625D38C769687BB096C39920779054&umidtoken=8IJLq8ZLOlZzzTV8HVNcji0u0eazBuXQ&msv=8.0.0&brand=Apple&imei=A02B076F8F3D99125B501D6020A6D7AD24B49772&skinVersionPrefix=1&appVer=4.3.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTc3NTQ4OTM2IiwidXRkaWQiOiIiLCJpbWVpIjoiQTAyQjA3NkY4RjNEOTkxMjVCNTAxRDYwMjBBNkQ3QUQyNEI0OTc3MiIsInNuIjoiOEE1OUE0QUE4QTYyNUQzOEM3Njk2ODdCQjA5NkMzOTkyMDc3OTA1NCIsImV4cCI6MTYzMzExMDk0MywidXNlcklkIjoiMjk3NzU0ODkzNiIsImlhdCI6MTYzMjU5MjU0Mywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.xxz9QUD09L0NA-kbkeP9cU4xVpJuwNcEZQskKC10PVhSRe1T-ebYgkKx9ZCRUhJqrBn9Raub3zvNprnSOxobjw&skinColor=23B383&platform=iOS&ver=210111&mod=UnknowniPad&statusBarHeight=20.000000&skinVersion=1&wh=1536x2048&soft_id=21&utype=vip&skinId=999&idfa=CBADECD7-A124-4A8A-BC76-57FF8A3D0311",
            "Content-Length": "1292",
            "Accept-Language": "zh-cn"
        };
        const body = "src=202&userId=2977548936&platform=1&appVer=4.3.1.0&placeId=111111&timestamp=1632594009&sqSv=1.0&sign=a39452f7e2c8c7d701f3da318babcf77&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.0.1%26utdid%3DYR%252ByY0XWrGMDAAOzRV%252B4%252B5f7%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2977548936%26sn%3D8A59A4AA8A625D38C769687BB096C39920779054%26umidtoken%3D8IJLq8ZLOlZzzTV8HVNcji0u0eazBuXQ%26msv%3D8.0.0%26brand%3DApple%26imei%3DA02B076F8F3D99125B501D6020A6D7AD24B49772%26skinVersionPrefix%3D1%26appVer%3D4.3.1.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTc3NTQ4OTM2IiwidXRkaWQiOiIiLCJpbWVpIjoiQTAyQjA3NkY4RjNEOTkxMjVCNTAxRDYwMjBBNkQ3QUQyNEI0OTc3MiIsInNuIjoiOEE1OUE0QUE4QTYyNUQzOEM3Njk2ODdCQjA5NkMzOTkyMDc3OTA1NCIsImV4cCI6MTYzMzExMDk0MywidXNlcklkIjoiMjk3NzU0ODkzNiIsImlhdCI6MTYzMjU5MjU0Mywib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.xxz9QUD09L0NA-kbkeP9cU4xVpJuwNcEZQskKC10PVhSRe1T-ebYgkKx9ZCRUhJqrBn9Raub3zvNprnSOxobjw%26skinColor%3D23B383%26platform%3D1%26ver%3D210111%26mod%3DUnknowniPad%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1536x2048%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DCBADECD7-A124-4A8A-BC76-57FF8A3D0311";
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