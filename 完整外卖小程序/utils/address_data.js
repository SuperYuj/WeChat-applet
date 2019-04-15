var app = getApp()

function provinces() {
  return ["海外", "北京市", "天津市", "河北省", "山西省", "内蒙古自治区", "辽宁省", "吉林省", "黑龙江省", "上海市", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "广西壮族自治区", "海南省", "重庆市", "四川省", "贵州省", "云南省", "西藏自治区", "陕西省", "甘肃省", "青海省", "宁夏回族自治区", "新疆维吾尔自治区", "台湾省", "香港特别行政区", "澳门特别行政区"]
}

function cities(province, cb) {
  return cb(citiyLists);
  // return app.request({
  //   url: `${app.globalData.API_URL}/districts/cities`,
  //   data: {
  //     province: province
  //   },
  //   success: function (res) {
  //     cb(res.data)
  //   },
  //   fail: function () {},
  //   complete: function () {}
  // })
}

function counties(province, city, cb) {
  return cb(countiyLists);
  // return app.request({
  //   url: `${app.globalData.API_URL}/districts/counties`,
  //   data: {
  //     province: province,
  //     city: city
  //   },
  //   success: function (res) {
  //     cb(res.data)
  //   },
  //   fail: function () {},
  //   complete: function () {}
  // })
}

function findProvince(name) {
  return procinces(function (arrayProvinces) {
    return arrayProvinces.findIndex(function (ele) {
      return ele === name
    })
  })
}

function findCity(p, name) {
  return cities(p, function (arrayCity) {
    return arrayCity.findIndex(function (ele) {
      return ele === name
    });
  })
}

function findCounty(p, c, name) {
  return counties(p, c, function (arrayCounty) {
    return arrayCounty.findIndex(function (ele) {
      return ele === name
    });
  })
}

module.exports = {
  provinces() {
    return provinces()
  },
  cities(p, cb) {
    return cities(p, cb)
  },
  counties(p, c, cb) {
    return counties(p, c, cb)
  },

  findProvince(name) {
    return findProvince(name)
  },
  findCity(p, name) {
    return findCity(p, name)
  },
  findCounty(p, c, name) {
    return findCounty(p, c, name)
  }
}


// # json data use ruby:
// r = {}
// District.provinces.each do |p|
//   r[p] = []
//   District.cities(p).each do |city|
//     r[p] << { city: city, county: District.counties(p, city) }
//   end
// end
// r.to_json

const countiyLists = [
  "和平区",
  "河东区",
  "河西区",
  "南开区",
  "河北区",
  "红桥区",
  "东丽区",
  "西青区",
  "津南区",
  "北辰区",
  "武清区",
  "宝坻区",
  "滨海新区",
  "宁河区",
  "静海区",
  "蓟州区"
]


const citiyLists = [
  "石家庄市",
  "邯郸市",
  "唐山市",
  "保定市 ",
  "秦皇岛市",
  "邢台市",
  "张家口市",
  "承德市",
  "沧州市",
  "廊坊市",
  "衡水市",
  "辛集市",
  "晋州市",
  "新乐市",
  "遵化市",
  "迁安市",
  "霸州市",
  "三河市",
  "定州市",
  "涿州市",
  "安国市",
  "高碑店市",
  "泊头市"
]