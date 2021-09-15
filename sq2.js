

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
        await $.wait(1000);
        await jsshare();
        await $.wait(1000);
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
        /* await $.wait(1000);
        await read426(); */
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
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    
    "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9"
};
        const body = "{\"message\":\"2G13cqjQPA4SQqkv9MF01JtWvUYIu31g2jbOUgJtTYK7WXtgp+vBkYh+Cy39VBVdSYYFKMRLMNi\\/QKSRqotzORTBlG0jpWHyiW9c5qoFvf9ppX4aNGTOl2U5pCZtKwRhXZGqClu6C\\/hzn8+9Ko8wQgmjwUqjpABlNB+zOxSg5Uc+1mTdH76tq8fecD9P\\/B9SsHhB1cNIhjFozomtMelt6zRh65XLJtxITqoHlX3InSmDUd85gfrlUVYUOan4i56TAp8Ea+6KA3DyAuQcVYVTDXptkSZgTkHoV1gq+sUTK0FpNNZJxRICNq0DZQ9BJm3BS2Qqh0slmgSXaPmC78m8BE4\\/ygjRXhOYpKlhTWk5LZ2dCY4l8l63ALYqv3cYSrV9aAqVGapG2LNhMx6PSrWiL2e+fc2Uwn4e+NqBZ+9SvWiCSDErPf\\/Vx0fPbOvG70k1YA0AcRYfYKZZYY7eMudFuR5JdJZC0LFvZspaUlU+3WfDhnc8waLsVyiViNHXKFiNz1mt3YtfqUM3Nvh8jKfYPANUycuyGJHX+wfcmT5Gv+YhWdSpD8ijTWeV7dw+WnCLiiMx7NvKuwzAHqnKoGZqEfdejGYkV1i6UxNeC8GXUxbKY0vN863gwV+Mf5WzXZ+L7hgo317STdH5JxWS08WtNz+CsMfNY9j4mcwkjAh5H2CMcKrfJvJXC5dPGoooo0lUSXq2pGzNnq6bFGyaAmFWeGfxeDQgBoPy6sO9Po8AIft2d\\/JAHX7zDDuhdH8CL4Fqn3pE9hsiW8R+wZTP7O2q9sZB1Tm+5y8tW\\/GuK7Dw\\/8QaYXpSvDLWNP\\/0YQcI1RvcGBxfuOQup\\/J2ElIR\\/thd\\/fvk2mK7hTI57\\/HiJ0Y9IZu2gbw5hLSiiEYDuElU9\\/iOdLtnc6EM2TUoQLyropc6R76pRhQnJx4yq+qIqTC0xDNrY5HNHLix4ygw2ZcX+tP7APJTUaGvqyVApKB7CShS7Ym5Zl4BfQoiX73ePP3YZ1qYUJo8dkQDwSMCvoEtNebI2xwVc+\\/T8jv7y2Mc1TyDfCybwf8TUt7l2ZkRUp3uTWt53LCuQSU\\/BuRsuQCWWX+XmsJA8\\/de10hhukvDrMgKIqWk1SfhzU0ZO\\/iKPWauYsTwnOTczwlDht2Gs6XmCnGVJnwcLkJvwqoS3zlaiCNDhvIZoo9VL20R1eyiE\\/AmHsJcRxlFO7nNGrc4Fjt26mhibpffEYwXHusVBD\\/hv9antcZVqSYXUedssXOgA760+I3MSj6ITyHdHcTqyUaIT\\/h9pBWTqNwoA6BjTXB2RVfAFCwrFf27iyhN\\/milyRJNg6bxA1pDeCO2iDxTnV\\/d6EIRFWOO3WTXJl2Uxdr\\/C\\/KeTumwFZlLO\\/dCZ7YTN2G0ZTWGx74fxOxF64+VhHZfyXcuSahM\\/OC1UjteyAu0mUdeMPcsNbO0bLFrwZ4tx2tr5t4SDlNHLh7NzCVcG\\/QarQ9GWJexfSqTupc3Dj6uP57rgU6\\/uHmMega5Um7kyE53\\/oMaqX7Q8ZX3ExM+xiedeuZUmf3lNgTqFRst6HnAZVScXFy\\/ThzAlU98LSBSDqqf\\/lrt3s4C6Rc4RUKzNqDpRegLdER0xE0yDsBRPZ7nzaiikqoTkuYkB7Wx39nvQBu30VBQsPFy2\\/K8Ny+2EpkiQGzGpczgeYRJOHzxA+PkV3nymyYRgcGb3gZJVusAvaqrAElzoE0SyMaV1gIW07DXhEkuAeoCSgEufJU0nKLMsBs3OewPs7wcXg\\/9TMAKtPgXan7xvqqBq4ht+3ApHhWLChV2cYfNcKyjIWgWsOme4\\/XLMY5060eMIYy1wAx4s+1A8rpS+aX4zK2dvMBdfjr1GJAC\\/gVz\\/Ch37FiEMhB3tf3HVw36oPCkwGUhsnhcO0UaLnx8t+T5e7khOGovxkXoWiWS4j7EQGxGxzoAnybKmEyL840Z7sBJ\\/srGFbI+rEVdiZDhBhha2REsJ6fcQAMYzsJh3skh6GRFHibCXClLfNvLxiopmpAlCz9v\\/DFxNC5LWITaoNkU1jx914pVK9rRR2vEs969flNqSE\\/lN2Q+cnLgGIghuMgWszJD+Ns9F1eg3KhUX+JQ0E4HDc3JUB9Ca6W\\/O1oPqh9D7Fz0Iz34zBeQltUu6glCzMqpwK6r4Nc9nziWGf5mfjqTq39Eh6c\\/L5g8i0tJGKRDFoZPnFirXT1ytutBF+\\/Vz3K+DOw3jGUbOQO9C8G03k6PJUEYaIO5i71SCJHqhYfj6UMzFSBfv\\/Blv7z5hCrkHqV7fj2P1qYdzm18Jpb8eFj9T+ZDECWMeYbIY+zNqn40e4s7YdN0ECOdLPl4so7exKARdSAcsINCe0xaveJ+eNcp79XiudnTQyVAu9vY7pIKeX6Ee4XCy38\\/cBDhtSIoH5Oc2\\/+o3yCmsOtu4Dnw1YGORnL6Hhx9Na1saH8b6SL3iJBafiLyh0NEl6nt\\/VNkQ\\/6D+ICanP\\/6HvOqIpClVi2CW\\/rfV9mQzahxvitnZy4YCgn69cObe\\/KlIpLumb4f0VHndktcZGJN\\/Z6acqmP0RvJIIxo714bAc05SrbJF+iFFOcT\\/Ta9oXbTePxnLBGBB1J2V928Z\\/foK171iakzOVyOaIJrC8yigkXjwoU3yiHdJY9ZKBgOPm8AFObwMXbiUxNF0CTLG4QNaq5Bww5TIjHF9udrLJ68VaJIlwrBVPd6Ck7sWlOQ\\/k46BJt7KgZyR2FNQtFnWpA88MEBH8tbPWXPmLdnupQgvqrP\\/HwmM8HMyBQ9eWeixcyQ8YSWWm1wolOgRdWc8Ih3JhMVg1nR1ANzXtz\\/tEPlDRlMTFcONEnZTSK13pDR4gWXfiyo3cS9fU3mVDqd2CY0uiyi4cUyXyLMSw+aotGl4U7DkClkKVTQWFEWXmtYV3QKD0XC9WXPViZ3w\\/hfi4n3YiLt3TlgtbudNXXjQyGp+P2vy4A+i2yaYLTG7ygu6O5r0OMwyW8k6lE2NdDfwgvSHn3OOzC7AZOLwFGwmWvwTTfaXNxr1CU+KEWdZSPhQdD\\/\\/nctj0u9wTfY8NTDvT2zVvHBwAVZbVmdUsSVNeh+6UUHI74euDktT8BVrDdlm+nQy+Z2Fij\\/CV5tteh5QY9CAchb6Lt\\/SpLhiwhnYGpvTmtB2ERWns3MsQqTOkx1N4BH8sB0D1G+rRkL6C9MoRK56\\/MNboCyUMgk+E+HAcmMl8H7Ue\\/qn\\/wk7xxus8alGqDEQ6RTR+YufZGMwlMyBfUGq0YvbM05OCT\\/Iwbf\\/pLtcXTbwRFxTD2SC9Ab\\/UvnPYayn9\\/cY+oGcEF4+o5u73snxpbfnAjc+GpPbMK20D+RumnxxcLpMpmbONnNVEtuEAS7dxqp5JoIqdw5vfpirchxndFzbhxsRahwdsGbX7fH4HHPKhE5k4hhiW0h8\\/nJwml+LklVdxLdu3UEuXeBOccMixwnMir\\/Z7YUU\\/YZHBhBOMvB5rz5b6uyrC8cvvCSPuFlQey2V7\\/o+rknsWhfyokhvZX+WIGRLahUtQTxCa6jiifhtyA0OQn\\/0crdC5RDlwVyiF\\/b7pRBCTd1tnwqthxI0U\\/4s4wwbxfeqZewGRGeaC9eIJvlqnb8opUVyHq5KfWczvqPz7dUkaUtCqzsDBw2HQ3418VT+3VYB06sD6Fow4ThU\\/36kdsOBEPYMjxkuRD5uHAXrKt8oHZZnbvOJnXh4QImCYOjoXVs+a7Ha3M7boRucGRoyax2xLxCyOMov9p5QRLRrSKRiH6ecY+oDKr0GXsrzJg+469kHVLz3iTC8lOdc43CTPHibqQu\\/UWYquDnWZjyy4kQagJxSCjQbXUJ5ySkjjpWX0sE9sDomN9cIe2ZyBkSzngjUNQrxhqYTNZl6mVKf5KqZ12PWMYsR4q3Fk\\/AuDDztTOPjsLe3RuT\\/jJFUfo7i2bfukE2+hYsYQfc27TkZQOrkZGhgw8WaInHLssyBfZp9HDsiEe6e\\/orVpxOk2RiMOjCaX\\/19n3XDEzs0+nFnyW1AH9iEvXayRqb4UFeXM0KzjQP4pM6DJNBfKZcH9CVVenQAtr2bsSPy9TtMKZ6LCqs2ADMNdwiuouSfLk4GDL7ANWDFjDex7RxADBh1+VyyyMg+oPJ\\/uHSsTAI4Rx86HCC0ZBWbA7k3upNFNFt0\\/P8cdx+OXRCggfuvZs\\/ms7Zzs4SwVlyrh89RaQuO\\/JD5MfymZ+NeFajzczMa0WyHLaRASKhFJEZxjXvrbNPeYsrt+yC\\/5htb+w2mz\\/oziLqlbBwpndjY4ETzytkCZSYYa6LixwFfi+tVMRKtSDSqWkb\\/xv4lWqcNPJnbirqM1ShvXj\\/TSS9w3+tv81NreeO6IhGdK6kgbnHKEP9ztb7dxw\\/evrfXax0WQiFTLC9djgRrJSJrMSC1aK9e0TDY+eO2dKhetOGJA3IWCvKSIaZ1Favl0uWPYVD3LEVjcIellFg0aYLcERfdpOQXPWVc4yFibkv9dI8c\\/JH1MHd1Qb7DRHBit8vWADvdi1iyA3N88Hwdn0+pZl6eDR1k\\/EsfLSBUTQ+1ldA6NIh5rrwXG\\/Jd39yzlqcabgIy2m9cWfG69iPphM2VUU2uXv9UOzu9ANS2FKMrNb9ie4XtwDozZdY8Eyi5hjRsFqPjC5z\\/c32rlFjuCtWs+ekyMYGLVRVShok4Rv\\/sqr75FsnBULg=\",\"cypher\":2}";
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

function vedioreward() {
    return new Promise((resolve, reject) => {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
            'Accept' : `*/*`,
            'Accept-Encoding' : `gzip, deflate, br`,
            'Connection' : `keep-alive`,
            'Content-Type' : `application/json`,
            'Host' : `api-access.pangolin-sdk-toutiao.com`,
            'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
            'Accept-Language' : `zh-Hans-CN;q=1, en-CN;q=0.9`
            };
        const body = `{"message":"2b3kuXvH12Ec01mFFdRtSP4tk4O9FXH\/xAhXp\/mx47jeKx40RpWGuja9vfLOYaCuHTFDKwkF2nfeK75SBE3+CiCpWcnVZk1DwwnwJogV1OWgdwSQcbueQRcX++kezFuZoL6bsTES0oE\/Mcj0tQhaXj6CCDGE3JnkDub0G+lLb2H9m8vqorB6mffjVMKWJim8Jr2R78s42SGAIY9zwm4Vw93mIy4UGwmVogk58N\/KYL2dTDNriVYmJO2zDzxdqFNKRmDZknkO4+hSwlsnFMwVG\/s8UKpas9lEZPYrrEEEC+58bEoh2BGE19KEC8CUIMZgzxH1AqMYJJOqBAwpHycDMe0r2T4HWn0QLOiiO8lFRpsB3bolp+8uiw2LD2sZs\/eMvNST03PutSb73m1uuh7QqBOkY\/TjB5XOf36ODZDp39fHgRotjOSG+e4eLd55vvk4tq6QIEjft6l0i2HeY7mY\/cylCpNMb5bFYAyhkJ1y+k1fNFn9FYg\/RR6KKB9u83e2t7lGRL35AHpWWxkYIjn\/ct8fKK63SdUAgbNfSC4CQIe0Mj3ZjV5zxeD8QIWR7zaM8gurayzGslqyOuD+n0TrbYRfgfSiuCSHyVUpWYb4t3xZLWY9ay9Pn2qnuClwONDBp9vdNXQ0Btb8gzsyCmBGbNsfDbvhut3gGWEr3s6Q7DG3WZ2ArTLdaow0Z\/br5NX8uHInoPq8R7GzL\/bprtTD\/KvEVr1YVfIq7K5\/iOicuHp+60mg0wAjrgVq2Ri40gMCFDyvRa+XUgfojF6VjOtL0STQt+fBNKrxZQVOlpIBcL8C6eIF5XlQHw8ZE3zHuTXsJVd7L\/GLtIEkQmW16bWvPwDbwWSsLcRKNwaC62S\/QsUqWQJNGAx0g4xZwm1tP3XrS3PYj7qxrxGkW29+JefTfWNRjJ4XM58FhO\/7tU9DSw8cbGClp9T\/\/5fCx5cm3V9DYah1JMU6kK7xjL6ltvTJElApsYFfep+\/Z8qm+ve\/tzOS6dD884nK5a7RPVAHDiC1ZARy7hqeFPj+mL3RocX2Eyg2\/o3fTO57khh7h3dIXn2f4\/dza10zmrTbiHctk1McvF8uyYYDnc4oVbO7KgKSMWk4FbTWqFaPzDLl390VvMx3ys8j7ZIK2fdViivmVDEVb6AdhEfRxA1r3d4dU1jkyD1NyC\/MYo5s+tXM5RTDabwH6Y8j88cyqGVl8Fo1bInQfwrraE3nDxFyv202q7EeArXjE+ICjlVmrwhCTFqUAhH0uC8SryGSt07JiBJogMwszoRa7ca71+u9wR2oXPJfuxDup4f\/W8HSyI7oaPfqg8sYHpLQesthI2tFIGWa3iJGFG4WDbibNCWQnffYtDkEIYADbuNzmU2Yj8ShMvNd6q5oEZWpYP0lg2tJwa7U5jDoKLqmDh07uA3thIkuoI438q0+FfWvBLkeyz8wCBY2gl42cqoprVzmiRcA0VeGj0ApepWRwWx4ziUXZkUjmGujCfo0QHmiJEdVYpshhStDx7Lo5Yoe0rPbn3G3nj9tlEJ+ngDwaMjpQjQDco4pWc27pBLnUcTw9NhemQRaAbc03lLc0oRPMNJxBJR\/KFrpkZGbjDdLoi5Uc1VwaaL5pzuc0IdB4CvExd+tKvap5GBTooEZdOObIZxs9v9f5bHJ9Clt1gORTFEpaOxYa25BW93qy6Sxkuh7ThACC1B2sgwGSPa1+eCAWhPe8v51FUsxL+J+ocu4tCulPwSsJ22tSrITNOkJRPaQtTVfN7pbnwD1pgE7\/nRdEdvwlLsR4lI3qEtIJ4po7yLF0cWB4uQmnhNtQsiY9Ku9cfbcOpVK+RX+5CLCrUYqCT7hhxjelbr9\/ZE39jzYiJ9ulMi9\/gKxB5NdTVpfUxm5NRsgH9Ey\/sRdHbJdiqxih2RF9ULDiOsR9lN8G973WPX93YuQhgcknPKxERT1QZdMPjhvUwmi4xIZORiipjqK3KvwuhBtLQRMiX5Fg49LBv4b+K\/HpROBV+73Uz7AVHN+xqwbnO87x0N\/fUqSq\/D+dssF8YTvck+fW\/WdItyZ3VVdYYxCY1SV3zpd1QH+lUwCbh8enfGdDJine7FTMbXmrpV7z7QE0YRA2u\/1UTGuG6VaNo6awG9HSBTONOhf305FVtaLlZJkOeR+2mepub2n3FIhP5c\/Phi\/o1rVCvkvOR8vDy0u3KlABLat4eqAzqu7beGtlwLU4h9Vr4813VJ1t\/PgIMMOFBkinQNH307CPXWFR3r3b3MOJ7uHtOxUCRXSbDTpsEjbpvAMxa5tjVSIi\/bT5EvLXG4sLeuyxRaNh8qaGAGUuawK8qcsDA5PeEki1Ebg6nkiVaX\/5e65IqwxGUAhWa8emTbGb6wI6rrX27LJVwQcKE1FaHtEbNM5oTd\/6\/d9L0DJHi5jFonYsg4CmYWCMzlbrKeNmB1gGspoNnV5OVuuubbdpuk\/a\/zlyywIYcJ04Fl1EpsjM03rJhFcXY1Ij7eGbPZNqUVTtkME4xePBCk+i6O6aUG1WTGJfWBvHOkcMoZazNfabhhFeIm8rssDWOUaDh3NDabs1yHlAnUY02OB05h86MnW3Yjs52yPo\/kIU6K4hw+yL6NvcEltxdR9bm0wtjtSIPEjrElypu\/Bw5aKW+hZC2vmCB9kxUdrK1Q6r0oN8L+DGfRLlSa03P\/X4tQcQFXE1G361wEKR\/EbN4imnoNahwOqWd32OYmsaq\/EIPpPdNL+\/ZshGmSIJNFKKDch3lFQ4HykF\/lLzvhrHvscAGcm5B7gTnYAXFfeuGjRmRs90RgU+wCy\/nUb3KqXY9naaaea4XsvkH3KNADlfVNe6DVdjvWmzuScjR6ABhXsF2IoicsXdvocrTp7rVal3whtg7B4NSyglNIc4An26QuRYCIleYsb9equIDQmwmq4Hkk27+PzljMr0m3RECQLNGEMg\/BtGlMHPTCM8b4iw4PXFOtSrbbVd4Wnscp2hy3HytUjzrqfG8yR7cCXsGccJzIK6Ica5zfg75aunRRqqGWVrZUKgd\/LwTc26VXIoSdMqbfvyLtrsH4qQndHwPUJawEp5yrUV8xAlQzo4aa3BJ1Uqlbx6uU2d1799HCepcnguzU5Xg5dMcpZyS\/\/wg4f7kO3\/CAbGuNJc+RUFgaf56wWna\/svIRwRDGJIQy8P6f567KzR+BUatl2OQ9UP3Cn3URN4tYC5JliRBfvTKbCW9My6XeJVJNw\/tSM4OpsJlNFtbctSCUBKF+Tx5w2m1+NFEzfW1ZObRAbkDKokAJUv5RRcH+87+nzAvb\/Gfv7ypNbfR9fjXJs53W89X8SF6MNqGIKjO\/Fj0e6sAmStW99ln6KpldjuZgElJJzo\/tnuBiDbAUatZ0fPH5LpR4dDojwRnGl2xi11zolQkvA4U3ZdeaI8vfISMGYh9NJLW\/Cobx57aJMS3xz1mF5aX4IgZYxcW731mA87AxqtxHQzRXk\/6y3iWaPAuuJO64yVLTM9MfMw206FrmhAzRwK7W+s7jL5dENtxqPsvArGCo538fW9GHFJ1E2YcqPsvbn4UrkT\/mjUdTAb24qSwE5RtB9Ckcv\/DmhjhWx5VvznFPLQZM+OojEXzLZct91hICZYXZrIU121FjSZrDjfftUMKgqDXb4XZEl1pASOm7o+mtx94AAyV+VwFW6JtSiS8fre+yMiQIKowfUjualw2g7qcOdTn5iyHV3XFoxqPo8n3+J02QUyKrhGMKQcnkSucyCFwos3+dnEsUX375Lcr15upm9L4PDWUlzkluPRnEHgGQw37mmEoHLX8AoJ3Hx\/jakm0mnlzhuEP9+3xnWMxJa4wRpfudKtzHCMAc++4cErZkA6IjxyZ383K0dFz64i+JfTqFz\/U4RVcMsEPLmGx3JtgPqzawcd4FfVgC2wg1mW+Tt05sF8f1easjK7igSM7Ef6jqxxgbV8iYIkXHYC795sw1O2qETxCXnS4zy8RgdaBojVP4\/kixjQjJD9lzDKBjN0iF7qFVxFLSdirnzDY3qxbdJaZ4tXeZqiHMwT+H9dok8HxBwWnevR2ajvkmiKLbVEdMZBN5O0MypxrNOUd9BnYoPvXyqGcIIkBNl6KQUi3gFCtX4RHmjidi92gI0C2wjeuA3ESXoBnrPUH6mACSEoeYB46uxYGLx2vlogc3CibMgX7v+KaFvCuZ2CKZvbpASds\/ykosxhaE4jF68BP0LgjaEWYDm8uCHPw4OTyygagzNdF4MDJpWs7CgT4d1pHWlFEDtdJczTqBq7KDq9mkKyebNq09x82S4PTjHYsUBix73Gpjm5b4WI9VHamhNy0wjiCST+5cubvX2IxNR67\/LkYIn87FpuXW5vcpDAzEmcuwIxcJJg1F5TITD5GNAqZ0etT4f4FjIxlBzaxAjRVK1y\/dl6\/QJLTMFvHUKkJLky98MsI2vpgoJnGdjdXbGAQNAAL1anHhfobE7xZLZt8LyVn+\/BlUV9KQvk9bHy7SGEztAmVfJRnOpUgP0KaaQqhdRN8aI\/cSwlvYnPtMyVXbMRE70+6vybFqv+SdMSohee+l\/+m7BdT3rnB7X5mxWY\/\/Tyx2XpKvHnno6mc7vVzbECkt6jVqenfa\/P2ZEAf9iLyFQe6LwCT6ttMvMXeT0BmULDpAlyij3Lo55sXeroqCyL53nRLUtTS+5CkV+3qBBqtu94My6FBuBzoMgu\/s9lYUiJ3OL1\/HBuysqkObqnjFyNZOZzlXSd0vQdfzhJV4bVkQO8UPKQT2aodgOyjmxEMVGIPWEyAO0NjOM9R\/+XIRxlPcTBmxTrCzFHpKn6qYKBf61oeFBlyggepIzN6Evf0bW7OaCB+5CWfE1M+zYnRTwI3WpZ5g14P\/CmonrSmyWMBxYq+neXXvpjksOHpVyYS3L3scPN+eDqqKZ4Smjxx4nTURsum8NDU7Y0QmuWO8VoDhNsUG7THMA0RazVtEDUbFl1nKlukTFH4\/HRHWrZQJ\/0Rez+homltZgdBqSljJnOKlK\/mUIIqr9zDsL3eoHn9Ev7V6oCUs3z8U9QgQ==","cypher":2}`;
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
        const headers ={
            'Accept' : `*/*`,
            'Accept-Encoding' : `gzip, deflate, br`,
            'Connection' : `keep-alive`,
            'Content-Type' : `application/json`,
            'Host' : `api-access.pangolin-sdk-toutiao.com`,
            'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
            'Accept-Language' : `zh-Hans-CN;q=1, en-CN;q=0.9`
            };
        const body = `{"message":"2G8lJ5pnWS22xjCAf6sADdcmKIbOiU7TnTwh5AAw5aoRCdWFMO1YgYn4bbdHf3LwFUJpo0FnIOCugB7uUrE+tdJZioxRLfWIR9HmKQtZGdgv49XkoKCkMTii5YGyL5aNCr\/3q5pUu9Wp5FBn3XH\/XcATtGj1r++f0eadJ5HH88yR8D0YwAAcjscaT5eom+\/+Rdx08xp16Wz05dY0gD+OQz028U27kWIGwRIyKJqxaZqdjSsEzW0600JAYpxpIB1aWwwnfTeIbG4Wis+PE4RjURQgQakvgiJDKdj\/zOCJg8GvL+IAhDqjv01WjL\/+pNGTKZjdH0QIHJuiL8S7CMWcwLELbgIZKWFDrO79R8Aps7GjyZnz+kfROc7qHUQX0xgi+qZ4tbGGTNMjy7xNWcsgjMILGyQTrGVBy\/Jr5ryOOtxj7DIwv1\/9gYCvyofqmifWjD6jXUYzQyL\/AwZLOXNhw\/CCJcxq0o5bzfMU6LZVzYopIO50TywWLnzWmaA9Jx1x25oJZfYutYmGdhgqVFs+qw7ARCi0JFXWZII8LN+yoQPe4bmsmxJ+7t1T0lWan8ppFHJnZjNi2XuqnSPHgYap8yoQUizo5e6q3Y65QkaG98sB35m8LmHs7tbmq221dx0iBvGRdDC4nZ1KbaPQAmPmrBbL0FrhPqw+8QP31442Ci\/MWqVwFQSMDxR5PkqUseZV\/IwrqjIx3qfE88ABEuH2ZlYThp7Iz\/GyVVjwpxKrqLbrUwCFpBZUcdhIHZPNCyZV8j8tl9o0tc5WCeoUjw97Pz2XuK0ARzAJNpVPP0eQBPDfBX6dT2GHvYzHgb43DYRTT8L1f8fsWeLWk\/B+aOlUySQvkoAN5IBQVv\/35vGuoig1jhlHb1aIum6kcDvBYKNH05jAxvOPLik4nswDxuKBdjLp59yIHjJdJGYpnUrJGWT5QzBURTjrabxvLYe7YSADtQSlqzlFuFjhSjdBfNPhzNmIjcI09AjuHrkX+ccwai6tehKfsTiPGfgX9Fvfg9j9bEsbSvgishdTzvySUkRgGEa\/0Q91gLwGcDyAKf\/hlFqfvyjdo2jXPO77E8j\/5OlWYlE\/tr+poTa3MOpzsIPhPh32SGAUc9HorT5sTYf9adpo96rpAhLQnuGFeGP6DXhEX7RtnNeBrxpfyfS1+S2MmlrtRfkdJp9a1OsAuFNn9Uf0OL9A+rE4sSU93\/rTrLdxxGMSKlGbjQgTLW0dR69Ar0oaZ7U6VIp\/Ac4DIgr8+najQw7ABb9SJP0gsngJ+a7x4RFJyGXut4sd+Pa6jU60X1NDeD6rVLblNdOigX7JrZltl27leC25TsDnlizwMpucAVN8+vzjhkWlzVggN2HlbYdI\/pJlnjeeeSUR1LMfU6tsQDZ78s7GJMA69WwvTuchhwyBy4+\/u4Mx\/0Qq\/rhadRn8jFrSvOaZNy039rQbt5IIHWMQsEG0fXkYW7Jf22boqE9zciqsu0OtLIstuPwmwwe5GDSqYK3DMxPC0XFResEbmEMZr7q\/8VfYL\/sFR46SmmvUpLLAdZJRcv7g6tY6hi30BXmmgPHbK2K4NzXaxw6ISe8QZBVHD5BU7rfJCNQClIlYRX8IniV\/yQfzCSdyzSuTV\/zJ2ThgbKAg1JqbZqdHSU4IRxLSIRuxCpK9MOOiXIHj8uEeF4YUeX1VLlSUtF06JEtNfTrzE61vCwVgXzQTn2hLB05j\/cEDUiDagxKo7x8W1GY+pEousjGc14a6kX89ceDYaGIFiahcwzgXy7xxbvUL9hsu1C0T7EdCtLLcFMl6s6jqZXvvDq6vgbOaBYmWPxgMSMiB9aUK5Lj5Z8+QGXnPxAuSYqGZWRlp3iizRJzhlbFLonyP9lH3mi7zP82S9507K2XTjKo5cS8m8yZHsOGoccLqzHefdhYhrZ71QgfQ2x4OZH7Cc3N4iSdSiNllzoRAfyQSIfp7ae9Bbl4F3ZzYGTOZRIbXNpIjuULTuZowRoOIHgQfEUEj6DpoH9MFn4VUoyPTqhpH9uoOTJh9Wf5LP\/QH4Pb9bs0YNtwxEsX+wBbXJZzTs2+C0ZwUP3osSPg\/xkUhrKii7HlxiQr7dQkfK+\/dqKQQZ4YkxPmqdCUPfMSZecnNm0JSbzA5dZFg0CcDhbj9U5fB\/g+CWLNCSTYWlYJCOhJwhV3QMohHIROjsCIdnxImz94KO1E1\/HOviO\/ByOfj3\/Oby0ZJsNnKhxrLuTmoEI4y4xswkaTC9SqmalFD9EBV4XCFvVow1xzPQHinISMothO0Gv5CYdcNmU\/tzTrbqR7qUasBcWN\/u\/CReWvY+7MOS\/ARqWVkPaRhgD3Vx5qZ1bKpmhFU4rUDMTin5\/11QWsf3qOhR5EaBnm4NxpPuYb55f7PQwg2OtnJakmhDGIsSdrUSGLeTSmlwssKHcloZBiE4jw2TL6xxvQZbN\/kjza1w7dk6GDlnyTet4+9LSjBo6v5TF6yxlB9lUlJFMSQdJfZrLh0dgm\/GnTHvTacYM39ixS1ZF0FTjJX5Mhs0Blz0WFcUfbG6s8TYXyhAIrKCApZG7T+pxGBaqKP2yhPZNo3DHp3MwA5xwERY4ysq+35IQ7dQL4fdl5Z1nrH9hTB3AUeXt5SgWilHDJZKbHfe8XWLEaeft39BOlNlfQNLAq5Vd8mUcXgKmRyY5ff9ow\/IYuBxSI0VOobUBU+yxhCwuQ\/9c3xvtsu1irOMi42zDqDhguc1J4\/\/zZxcyXCOT5aMWrPTB1I3Snuc0sWgUeuiSCFt6sipwpCHeQTbWvsvrtm8L2b0v9+sMGTFneqzZAjlA9pUTEn9VovLKyBP5Mtt9ftUXyRz1bovTJCBI4M7fdxxLtRXVA+KlfC\/SRh8MR+fbaIxKRCWFmi6r4HF\/f+VPIopw3KBEs0SkioGskBY1asnDn2wghVfxB1QHrBlcfzsTtx9bY+eQCbYC+OnvUxa0YcIdVkjh1wt7K4+s7sNswGSEbmpViwhVDmKZKVXJSUDp8D+311B3Ff5m4qU7f2e5CJUPR\/jSv++eCRqBV7Rch2\/e2mRnyOPfPjgKy\/deK4m2b2fbRr+An2Bt8F48l58Os4VBwIv4uSTu8C70UsTBPEcLhR4anByeZhA\/yalxPwlgP0oUQPAl03JUoR8iNcXolHRCwzYls9MSvfL2T6dx12FsO5MV9l\/KkqRH2Jfv5oA+KXyamy7d0U2XickyW7ULH3wCBW5wry\/bAWuCp59MCVTWfOzTofosSd+u4mXBkQI5jL9c3YxEtCVcTsGPTHcB\/r1P6qT0V06zDk27R7LhcguRWFmAP4p6nr\/7jBjqhuhL76CUt9gJJa4ImN3AG+jkluqvld3MlRNsP7C9j\/H6YXsuiY0wh8N7K0f\/Vm75YC9zlROdj4EyZ+nyxiD9Rk1LyVAzVDaVqGpRZ5KKCLERN+YuLw8QUe94bINxgEVE04+FK0LtfWFdkjEoI8Wqj1dfMWd7AM5U+fm5mCInZtjQWdSIveXuVaTCznaSz\/KMT7yGaC9yga1R0y2tTtDJzX1JMHo1YMwk7RvSYshRTjA2ubw\/BaT2939dMkcWKO0tR7J5\/PRDySKhbUCNw0uQK93ppyU6kJK98Wz329wLDpGiZ5S8BJ4gn3FcGVA8gAvl\/yLotQL0LHqqnLDdzvaHmjJkPxtISPmfgWID4un1NCktX5fqwhSrj3419LVAFVKdFk\/BW3Xlw2JWvPNAmpfdGb85wKh9FZrArna3Mpzoj9CvpqeSBRKPJdBPZV+SsadTVfQMGTxO8aKvxuhsyifGi4kjX0q4LdJgRcInjAiCqXDdi+myjp51w62xtj9Zl7guNeo4OF+DNLrXq127CwfqEZ0hpRs7NgoJglrJ3FEawN2gsZNQWkQG7rQuRi2XcaP2lmIpE3VKTP8nz8cQRlpNSGBhFvcUN8rptVcrr7TYnWsEF0hLr4GlXYJQQ4+dSfbyX6wUtVHSCgWWjfFQdiLLXYj+O1k3KaZkX0BoifoLsT32BFUjwre+Pavg36tB\/PSzYnt2eGpWUMszXwyrG67Akpk51aXae+6MmmdRh+0rpLpw8T3bMtdDIK4jRVy\/IwCuK0eUliYDnutBKEbnRs5OKzXbYNbyTuSgTzxogwENSbpoNEop03vAb2ebB7RFu8V9rFae3C1\/X\/hmZXfL2dLC2YgKMZFnXXXUuOD6FgQuW2Zi3GliWRNjWZ7tnb4ZNwQOFl1IhKXuNWPL4HZn2IEn8i8ENiDZ22BpsB\/AY7BY+DAZJoH7SBJhXubCfSl35jkwy1kyW2edUv\/qK2AUhNaAFnjRYwLT4whvnYI10EmW2ntuRr3ZLZErKr6n5qAa+5BDsdj3Fqe2zMg5gzZ6z+Y1JknO+cK4VN1kb7q0uvkpk\/GSYZ1tzH7dsuTo2pvgQPOzGc44wN+\/i+ya+jVDGetcQvU6zJHt6m7g3zwJ\/dNHrWNU0zGc6+EuIr4J08zv3\/rpVKt\/M1KfGM3NLPV0EKnVi2FwRQtK\/uiSLxUGra7eLTKBdfVDpqrE+US8yM39NIzG9GzTiuKT669PWyeLEqyMor1YCpzhXAA02AWh9sARuvwrbdMWCdUfsquMmXVzGEZghW\/sJGwlxKKBhITtH+iXzFyqt9mIjqcxVBx\/GjIS892XorUiZ5FKK0HJwFuXXrozkls4MySdIawqjmxY+X1kCAuzFGN5X5siCqiB1TPLH6IXwV34DoP1QHELH2Yehs0gkppytj6SlKE6IA\/qPlYzJAbWQTn+Ck4aRRxroBmrNMmdhv8B8oOUOStkOSBBYemDDSIPaDSiVWNLAXeeAoHh61S+Dvej7zZ\/XFZx+O9oiEeImUz9BEd5wsjFM2iy\/9hRYoqQf1ycEbqQeuKuIWzkp2JTNZ1b3fQ\/Hw6uSUIR2X8Qq\/5lNReKJMmVNXRMcR3Wbg3Ob8fLzBPhFJ6apgmW80043HuNAXCb79k+bfGd8LJWoyAURCZ4EGn+cyjLTHZiUrD0QiSUPQmDc0QMjgPcMEMjXpbgVdesLFcgPu6I9rv7xaWgtcuCQ==","cypher":2}`;
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
        const headers =  {
            'Origin' : `https://render-web.shuqireader.com`,
            'Accept-Encoding' : `gzip, deflate, br`,
            'Connection' : `keep-alive`,
            'Content-Type' : `application/x-www-form-urlencoded`,
            'Accept' : `application/json, text/plain, */*`,
            'Host' : `ocean.shuqireader.com`,
            'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone8,4__shuqi__v4.3.0.0) 640x1136 Winding(WV_4) WK`,
            'Referer' : `https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.4.1&utdid=YQUPRJy2U3MDACR3qLEYen3o&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2905134699&sn=35F12643E53A289805F1580FCC520C74A8FE9112&umidtoken=YQUPRJy2U3MDACR3qLEYen3o&msv=8.0.0&brand=Apple&imei=851341ACBE18D4CAAFA4FFA810E53B221BFDCCB0&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTA1MTM0Njk5IiwidXRkaWQiOiIiLCJpbWVpIjoiODUxMzQxQUNCRTE4RDRDQUFGQTRGRkE4MTBFNTNCMjIxQkZEQ0NCMCIsInNuIjoiMzVGMTI2NDNFNTNBMjg5ODA1RjE1ODBGQ0M1MjBDNzRBOEZFOTExMiIsImV4cCI6MTYzMTk1ODA0OCwidXNlcklkIjoiMjkwNTEzNDY5OSIsImlhdCI6MTYzMTQzOTY0OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.gugcKDDFcBnonX94ePS8sSTBxe_rhIYrsd_8CjC73-ov2v1umLu7ngUHUYvF2ofxS7jrTyDy10uzM5K-CMAmTQ&skinColor=23B383&platform=iOS&ver=210107&mod=iPhoneSE&statusBarHeight=20.000000&skinVersion=1&wh=640x1136&soft_id=21&utype=vip&skinId=999&idfa=8719E3CA-92DE-4735-BFC9-FADD3D0FAD3B`,
            'Accept-Language' : `zh-cn`
            };
        const body = `activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_dSoOY3hxuMbhtHbPoejysN4Woz%2Fhl2t0GpG%2B4r66DXwF54R1dqrXwKdksbNT07%2FBmbcOIDnws6l7MShAvHI60y%2FFYt4kd%2FUa7zyOj2Z85XqL%2BaixHAroRbS0Drn8cG5rrtwCCH9ezYOEMnxRV7sFgLUzxoGOOiP8GDuZfgqvWF0fv0uqzmHJbwYgf8QBIv1KiVRtY7XyG2yIJI9Mktq5DBMLLS6N1OhJpJzqcFzdu8qq0PryUY86DtDNExEAR3%2FxwfOLobVFPgsiqz8Dl5SPN9byHoqt2ECUtB3acsbIBsgj%2BntGVtXwD%2FODGMt1nI8TUzMTTOzp62jnjUT9h6NQAhIT0ROFcQgECIjAIwEG6vEykOCFKbKn%2Fzgc2EJTWa%2FsqijtquHfBs8USfSaa2awnA%3D%3D&ua=&miniWua=HHnB_fw6%2BqATv43kuF4Ah7lXNbgl5SNIpXAIuDbDY7RaBX4mCXi4FlRH8Hm9lJWUtvrrXCq3n6dscvMgvo2x%2F2buJyIJ81lWQvEURZvARHh1dt1%2FtIiZtGE7odSyFfrGV4tFQ&userId=2905134699&umidtoken=YQUPRJy2U3MDACR3qLEYen3o&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1631441233&sqSv=1.0&sign=01657bfbe0c435bf58b4f2d6867c11a1&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.4.1%26utdid%3DYQUPRJy2U3MDACR3qLEYen3o%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2905134699%26sn%3D35F12643E53A289805F1580FCC520C74A8FE9112%26umidtoken%3DYQUPRJy2U3MDACR3qLEYen3o%26msv%3D8.0.0%26brand%3DApple%26imei%3D851341ACBE18D4CAAFA4FFA810E53B221BFDCCB0%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTA1MTM0Njk5IiwidXRkaWQiOiIiLCJpbWVpIjoiODUxMzQxQUNCRTE4RDRDQUFGQTRGRkE4MTBFNTNCMjIxQkZEQ0NCMCIsInNuIjoiMzVGMTI2NDNFNTNBMjg5ODA1RjE1ODBGQ0M1MjBDNzRBOEZFOTExMiIsImV4cCI6MTYzMTk1ODA0OCwidXNlcklkIjoiMjkwNTEzNDY5OSIsImlhdCI6MTYzMTQzOTY0OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.gugcKDDFcBnonX94ePS8sSTBxe_rhIYrsd_8CjC73-ov2v1umLu7ngUHUYvF2ofxS7jrTyDy10uzM5K-CMAmTQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhoneSE%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D640x1136%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D8719E3CA-92DE-4735-BFC9-FADD3D0FAD3B`;
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
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4.1&ustatus=1&umidtoken=YSFLYdlLOqnJDjV7YjJJklO%2BYfilHmXl&net_env=wifi&placeid=111111&user_id=2905134699&sn=DB9DD9C9081010300CA1C6890FC086EF4A1770F1&msv=10.0.0&brand=Apple&imei=9980DCBEF2B7E81B4B7AF5BDE443C85F50FD01E2&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTA1MTM0Njk5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85OTgwRENCRUYyQjdFODFCNEI3QUY1QkRFNDQzQzg1RjUwRkQwMUUyIiwic24iOiJmYXN0X0RCOUREOUM5MDgxMDEwMzAwQ0ExQzY4OTBGQzA4NkVGNEExNzcwRjEiLCJleHAiOjE2MjgzNDEyMDksInVzZXJJZCI6IjI5MDUxMzQ2OTkiLCJpYXQiOjE2Mjc4MjI4MDksIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.r7G8slstk6qC8GGrZuNdnSNSfn2-CxKE9-0NsbZi9F2GJ0j63rjv-QYTgMH2VQj1jYlm6fa6Y-T1DKfh0AjizA&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhoneSE&wh=640x1136&utype=vip&utdid=YQaX4%2BK7lCADAI7FxdtzGfbV&idfa=8719E3CA-92DE-4735-BFC9-FADD3D0FAD3B",
            "Content-Length": "1802",
            "Accept-Language": "zh-cn"
        };
        const body = "actTaskId=327&wua=ktgi_0Arx7hEZAyaYbafNfNCWP3smVW4BeRG4rVkSJDEfr%2Bs1jt75vZvSWXrbb9n49PzKfB1aL9DIk2RpvIeTm8e6dDMxa5zoSu2tGuQXgBh7534QZ4PdySLLi3izqNpz%2BViC5eSUw8%2F9KqLfhDgCtArIr0wpsgjJmcadnUvwwCdtjS%2BvCc%2FErGFMfmqgIJdRU6x5lS8msnpxTkVf1MOZ91g7wHt83MKsHlonl6DWO4Ml9AA3bNregbfLegiNSBHEgz8SalmciIoiZGsxVDGLZC2%2BmN2D%2BOg4UyEItBdtHq3mFSfISURdG0HYlDnPXNl8wbxy4O6IW7cXznNkw38zBWMDAnAN4jek%2BQGTzwJqaYXpxCwlnyMPJzPvDOCLMnXW3hFcn%2Bj4ho3rTUjktqfqVFBZiQ%3D%3D&ua=&miniWua=HHnB_opTDsXPz7qsGpw5DWhO8fx7UnmpEIkIQjOMlI1zQKIAmXhqygsXt1jASCQbdTmguG2tUJ%2Fe1eSEaLBfuCzLa%2Bgi%2FElG%2BcTx8Yo1rPQXDw2afLsuq0kJhDa7lBBuuLxsBYgU62QSbBRfEDqHFXFmpGQ%3D%3D&userId=2905134699&umidtoken=YSFLYdlLOqnJDjV7YjJJklO%252BYfilHmXl&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629526749&sqSv=1.0&sign=60093f068148a6c349ea358a50534209&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.4.1%26ustatus%3D1%26umidtoken%3DYSFLYdlLOqnJDjV7YjJJklO%25252BYfilHmXl%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2905134699%26sn%3DDB9DD9C9081010300CA1C6890FC086EF4A1770F1%26msv%3D10.0.0%26brand%3DApple%26imei%3D9980DCBEF2B7E81B4B7AF5BDE443C85F50FD01E2%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTA1MTM0Njk5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85OTgwRENCRUYyQjdFODFCNEI3QUY1QkRFNDQzQzg1RjUwRkQwMUUyIiwic24iOiJmYXN0X0RCOUREOUM5MDgxMDEwMzAwQ0ExQzY4OTBGQzA4NkVGNEExNzcwRjEiLCJleHAiOjE2MjgzNDEyMDksInVzZXJJZCI6IjI5MDUxMzQ2OTkiLCJpYXQiOjE2Mjc4MjI4MDksIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.r7G8slstk6qC8GGrZuNdnSNSfn2-CxKE9-0NsbZi9F2GJ0j63rjv-QYTgMH2VQj1jYlm6fa6Y-T1DKfh0AjizA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneSE%26wh%3D640x1136%26utype%3Dvip%26utdid%3DYQaX4%252BK7lCADAI7FxdtzGfbV%26idfa%3D8719E3CA-92DE-4735-BFC9-FADD3D0FAD3B";
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
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
        const headers = {
            'Cookie' : `isg=BKurfsC_Ts_7R5KcOB62N3bTMMuVwL9Cq-7mPx0ojOpBvNIepZDYkoEOEHrShxc6; cna=RyPBGae+dzUCAXAKgks5CJh3`,
            'Accept' : `*/*`,
            'Connection' : `keep-alive`,
            'Content-Type' : `application/x-www-form-urlencoded`,
            'Accept-Encoding' : `gzip, deflate, br`,
            'Host' : `ocean.shuqireader.com`,
            'User-Agent' : `shuqifast/1.0.5 (iPhone; iOS 14.4.1; Scale/2.00)`,
            'Accept-Language' : `zh-Hans-CN;q=1, en-CN;q=0.9`
            };
        const body = `actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2905134699`;
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
            'Cookie' : `isg=BK6u9m7uQ7_yX7d4XuZLIcmA9QBwr3KpnLN3Hdh3G7Fsu0wVQD7UuHardaFXeGrB; cna=+8aoGfWzVCICAXAKgtcr1k4b`,
            'Accept' : `*/*`,
            'Connection' : `keep-alive`,
            'Content-Type' : `application/x-www-form-urlencoded`,
            'Accept-Encoding' : `gzip, deflate, br`,
            'Host' : `ocean.shuqireader.com`,
            'User-Agent' : `shuqireader/4.2.6 (iPhone; iOS 14.4.1; Scale/2.00)`,
            'Accept-Language' : `zh-Hans-CN;q=1, en-CN;q=0.9`
            }

         const body = `_public=skinId%3D999%26idfa%3D8719E3CA-92DE-4735-BFC9-FADD3D0FAD3B%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3D7RtLCWtLOicCozV7fcVVxeIpYXxoU/nZ%26user_id%3D2905134699%26sn%3D35F12643E53A289805F1580FCC520C74A8FE9112%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D851341ACBE18D4CAAFA4FFA810E53B221BFDCCB0%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTA1MTM0Njk5IiwidXRkaWQiOiIiLCJpbWVpIjoiODUxMzQxQUNCRTE4RDRDQUFGQTRGRkE4MTBFNTNCMjIxQkZEQ0NCMCIsInNuIjoiMzVGMTI2NDNFNTNBMjg5ODA1RjE1ODBGQ0M1MjBDNzRBOEZFOTExMiIsImV4cCI6MTYzMDQxNDU4MiwidXNlcklkIjoiMjkwNTEzNDY5OSIsImlhdCI6MTYyOTg5NjE4Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.Uz3oun5gunUxwk8RgujKoG5PKvA4SJoqzUptY1huJeXjtr0SGdE4IoftAC73YMaK-ITqz5fKti6P5i2amFccsQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D201102%26mod%3DiPhoneSE%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D640x1136%26soft_id%3D21%26utdid%3DYQUPRJy2U3MDACR3qLEYen3o%26utype%3Dvip%26sdk%3D14.4.1&deliveryId=531&key=sq_app_ad&miniWua=HHnB_xt3K9VD4m%2BdhWRY011YIqQrfO%2B7Bs1LKGQiUfhDTeNUelcCMZYtT6s5hSi/18RvaNHVdofwlyOphtGCAmradXWYscp6v5hwh%2BxQaMpJGBlJ7RemnlT7er59FV/2AnbJDa41LU13Tkx/P%2BpZsdq0Q7A%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=5EC719B609450F6973302CB2C3F35F1D&timestamp=1629898490&userId=2905134699&wua=HIVW_a0N/sY6ID/cCQhKOEr9y7Sy848U5O3MOPfQxa3I%2ByFIynlkTFLMhq2OwP6j%2Brxjn59OZw54h/e7Y9eJ%2BnauVWlrx2kZMlwcxT5g7oTi4t59QSLgd/E5fzAXMEFTVuKkRp8AEw4jOL5gFQqG1pML8rUBHOUBuU7A%2BxNEdAion80yOYyVZvbiNoIqZX%2BQF00A/bOTfBflGwJ3NbtMaXRJE%2B%2BOyNjrW6JLGs8T3QFpO%2BaDgph%2BnRq12B/VyW8OeILmVJBtPVR8%2B6/djG1bBRr85ajWymdqektgiD/EwJeGiad5wJpSbw2ZpinTplbWsiTK74SY9/7mGnrOpsiemmD55neKsJXEzIne7jTNq8%2Bm5cMTcStcbKLekL9QxQGMRe/PIzQj0KzDqV52h339V4KDfVw%3D%3D`;
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
                         await $.wait(1000);
                    }
                }


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
            'Origin' : `https://render-web.shuqireader.com`,
            'Accept-Encoding' : `gzip, deflate, br`,
            'Connection' : `keep-alive`,
            'Content-Type' : `application/x-www-form-urlencoded`,
            'Accept' : `application/json, text/plain, */*`,
            'Host' : `ocean.shuqireader.com`,
            'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,4__shuqi__v1.0.5.0) 640x1136 Winding(WV_2) WK`,
            'Referer' : `https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.4.1&ustatus=1&umidtoken=SylLYVNLOgO9DjV753p10wlg7uk38WD%2F&net_env=wifi&placeid=111111&user_id=2905134699&sn=DB9DD9C9081010300CA1C6890FC086EF4A1770F1&msv=10.0.0&brand=Apple&imei=9980DCBEF2B7E81B4B7AF5BDE443C85F50FD01E2&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTA1MTM0Njk5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85OTgwRENCRUYyQjdFODFCNEI3QUY1QkRFNDQzQzg1RjUwRkQwMUUyIiwic24iOiJmYXN0X0RCOUREOUM5MDgxMDEwMzAwQ0ExQzY4OTBGQzA4NkVGNEExNzcwRjEiLCJleHAiOjE2MzE3ODMxMTgsInVzZXJJZCI6IjI5MDUxMzQ2OTkiLCJpYXQiOjE2MzEyNjQ3MTgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.HzffYBqQE7KWR69zOIao6AastNElYZBIXSU0TYVD-Uwz1rUtXcx1UyboeiTUIs9YhARur0E45JzKHc8096AQjQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhoneSE&wh=640x1136&utype=vip&utdid=YQaX4%2BK7lCADAI7FxdtzGfbV&idfa=8719E3CA-92DE-4735-BFC9-FADD3D0FAD3B`,
            'Accept-Language' : `zh-cn`
            };
         const body = `platform=116&src=202&timestamp=1631691105&userId=2905134699&sqSv=1.0&appVer=1.0.5.0&placeId=&sign=ada752f8a74a7c9e757fa47e6108db77&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.4.1%26ustatus%3D1%26umidtoken%3DSylLYVNLOgO9DjV753p10wlg7uk38WD%252F%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2905134699%26sn%3DDB9DD9C9081010300CA1C6890FC086EF4A1770F1%26msv%3D10.0.0%26brand%3DApple%26imei%3D9980DCBEF2B7E81B4B7AF5BDE443C85F50FD01E2%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTA1MTM0Njk5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85OTgwRENCRUYyQjdFODFCNEI3QUY1QkRFNDQzQzg1RjUwRkQwMUUyIiwic24iOiJmYXN0X0RCOUREOUM5MDgxMDEwMzAwQ0ExQzY4OTBGQzA4NkVGNEExNzcwRjEiLCJleHAiOjE2MzE3ODMxMTgsInVzZXJJZCI6IjI5MDUxMzQ2OTkiLCJpYXQiOjE2MzEyNjQ3MTgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.HzffYBqQE7KWR69zOIao6AastNElYZBIXSU0TYVD-Uwz1rUtXcx1UyboeiTUIs9YhARur0E45JzKHc8096AQjQ%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneSE%26wh%3D640x1136%26utype%3Dvip%26utdid%3DYQaX4%252BK7lCADAI7FxdtzGfbV%26idfa%3D8719E3CA-92DE-4735-BFC9-FADD3D0FAD3B`;
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
