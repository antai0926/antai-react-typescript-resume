# Taiwan-Weather-TypeScript-React
介接中央氣象局開放資料平台之API，查詢台灣主要城市即時天氣資訊，使用React、TypeScript、Redux、Redux Thunk，及Flex、Grid、Media Qurery製作RWD。
# Install
yarn
# Run
yarn start
# 中央氣象局介接API
API列表: https://opendata.cwb.gov.tw/dist/opendata-swagger.html
1. 自動氣象站-氣象觀測資料: /v1/rest/datastore/O-A0001-001
* 介接縣市對應觀測站:  
> { name: '臺北', fullName: '臺北市', station: '天母' },  
> { name: '新北', fullName: '新北市', station: '新莊' },  
> { name: '基隆', fullName: '基隆市', station: '基隆嶼' },  
> { name: '桃園', fullName: '桃園市', station: '桃園' },  
> { name: '新竹', fullName: '新竹縣', station: '關西' },  
> { name: '苗栗', fullName: '苗栗縣', station: '苗栗' },  
> { name: '臺中', fullName: '臺中市', station: '豐原' },  
> { name: '彰化', fullName: '彰化縣', station: '員林' },  
> { name: '南投', fullName: '南投縣', station: '南投' },  
> { name: '雲林', fullName: '雲林縣', station: '斗六' },  
> { name: '嘉義', fullName: '嘉義縣', station: '民雄' },  
> { name: '臺南', fullName: '臺南市', station: '善化' },  
> { name: '高雄', fullName: '高雄市', station: '左營' },  
> { name: '屏東', fullName: '屏東縣', station: '枋寮' },  
> { name: '宜蘭', fullName: '宜蘭縣', station: '羅東' },  
> { name: '花蓮', fullName: '花蓮縣', station: '清水斷崖' },  
> { name: '臺東', fullName: '臺東縣', station: '池上' },  
* 觀測站列表: https://e-service.cwb.gov.tw/wdps/obs/state.htm
* 獲取參數:WDSD:風速、HUMD:濕度、TEMP:溫度
2. 一般天氣預報-今明 36 小時天氣預報: /v1/rest/datastore/F-C0032-001
* 獲取參數:CI:舒適度、PoP:降雨機率、Wx:天氣敘述及天氣代碼
