/*
微信公众号：少年歌行pro制作

转载请注明出处

圈X
[rewrite_local]
#七猫小说解锁vip

https://(.+)\.wtzw\.com/.+ url script-response-body https://github.com/sngxpro/QuantumultX/raw/master/qimao/sngxqmxs.js

[mitm]
hostname= *.wtzw.com
下载地址：appstore



*/


body=$response['\x62\x6f\x64\x79']['\x72\x65\x70\x6c\x61\x63\x65'](/is_vip"\x3a"0"\x2f\x67\x2c\x27\x69\x73\x5f\x76\x69\x70":"\x31"'\x29\x2e\x72\x65\x70\x6c\x61\x63\x65\x28\x2f\x61\x64\x76\x5f\x73\x74\x79\x6c\x65\x22\x3a\x22\d\x2b\x22\x2f\x67\x2c'adv_style"\x3a"0"\x27\x29\x2e\x72\x65\x70\x6c\x61\x63\x65\x28\x2f\x74\x72\x75\x65\x2f\x67\x2c\x27\x66\x61\x6c\x73\x65\x27\x29\x3b\x24\x64\x6f\x6e\x65\x28\x7b\x62\x6f\x64\x79\x7d\x29\x3b
