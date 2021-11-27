module.exports = {
  plugins: { 
    'postcss-pxtorem': { 
      rootValue: 32, //根目录的字体大小是32px
      propList: ['*'], 
      minPixelValue: 2 //最小转换单位2px
    }
  }
}